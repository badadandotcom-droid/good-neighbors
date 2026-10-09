import { NextResponse } from "next/server";
import { CONTACT, DEFAULT_PHONE } from "@/lib/config/site";
import { isPhoneType, validateLead, type PhoneType } from "@/lib/forms/lead";
import { PHOTO_LIMITS, PHOTOS_FAILED_NOTE } from "@/lib/photos/limits";

/**
 * Get Help intake endpoint.
 *
 * A validated submission is emailed to CONTACT.email via Resend. The route
 * only reports success once Resend has accepted the message — if the key is
 * missing or the send fails, the visitor gets an honest "couldn't send, please
 * call" response rather than a success screen for a lead nobody will receive.
 *
 * The notification email is currently the only record of a lead; there is no
 * database behind this (see PLACEHOLDERS.md).
 *
 * Photos (optional) arrive as multipart: a `payload` JSON field plus up to
 * five `photos` the browser has already shrunk to JPEG. Valid ones are
 * attached to the lead email and stored nowhere else. A photo problem never
 * costs the lead: bad photos are dropped, a failed send is retried without
 * attachments, and the email says when photos didn't come through. Requests
 * without photos are the same JSON as before.
 */

/** Must be an address on the Resend-verified domain. */
const FROM_ADDRESS = "Good Neighbors Website <website@goodneighborswildlife.ca>";

interface GetHelpPayload {
  name: string;
  phone: string;
  /** Optional answer to "Mobile or landline?". */
  phoneType?: PhoneType;
  email?: string;
  location?: string;
  animal?: string;
  whereActivity?: string;
  description: string;
  consent: boolean;
  /** Honeypot field — real users never populate this. */
  company?: string;
  /** Set by the browser when it had to drop the photos to get the lead through. */
  photosFailed?: boolean;
}

interface Photo {
  filename: string;
  content: Buffer;
}

/** Optional text fields arrive as strings from the form; anything else is treated as left blank. */
function text(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function optional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Not provided";
}

/**
 * Returns true only when Resend has accepted the message. Every failure path
 * returns false so the caller can tell the visitor to phone instead.
 */
async function sendLeadEmail(lead: GetHelpPayload, photos: Photo[], photosNote: boolean): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[get-help] RESEND_API_KEY is not set — cannot deliver lead");
    return false;
  }

  const receivedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    dateStyle: "full",
    timeStyle: "short",
  });

  const lines = [
    `Name: ${lead.name.trim()}`,
    `Phone: ${lead.phone.trim()}`,
    `Phone type: ${lead.phoneType ?? "Not provided"}`,
    `Email: ${optional(lead.email)}`,
    `Location: ${optional(lead.location)}`,
    `Animal: ${optional(lead.animal)}`,
    `Where: ${optional(lead.whereActivity)}`,
    "",
    "What's happening:",
    lead.description.trim(),
    "",
    ...(photos.length > 0 ? [`Photos attached: ${photos.length}`] : []),
    ...(photosNote ? [PHOTOS_FAILED_NOTE] : []),
    ...(photos.length > 0 || photosNote ? [""] : []),
    `Received: ${receivedAt}`,
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [CONTACT.email],
        // Lets the owner reply straight to the customer when they left an address.
        reply_to: lead.email?.trim() || undefined,
        subject: `New request — ${lead.name.trim()}${lead.location?.trim() ? ` (${lead.location.trim()})` : ""}`,
        text: lines.join("\n"),
        ...(photos.length > 0 && {
          attachments: photos.map((p) => ({ filename: p.filename, content: p.content.toString("base64") })),
        }),
      }),
    });

    if (!res.ok) {
      console.error(`[get-help] Resend rejected the send (HTTP ${res.status})`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[get-help] Resend request failed", error);
    return false;
  }
}

/** JPEG files start with FF D8 FF — the browser always sends JPEG. */
function isJpeg(bytes: Buffer): boolean {
  return bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
}

/** Keeps only real JPEGs within the limits; `dropped` is true if anything was refused. */
async function readPhotos(entries: FormDataEntryValue[]): Promise<{ photos: Photo[]; dropped: boolean }> {
  const photos: Photo[] = [];
  let dropped = false;
  let total = 0;
  for (const entry of entries) {
    if (typeof entry === "string" || photos.length >= PHOTO_LIMITS.maxCount || entry.size > PHOTO_LIMITS.maxBytesEach) {
      dropped = true;
      continue;
    }
    const content = Buffer.from(await entry.arrayBuffer());
    if (!isJpeg(content) || total + content.length > PHOTO_LIMITS.maxBytesTotal) {
      dropped = true;
      continue;
    }
    total += content.length;
    photos.push({ filename: `photo-${photos.length + 1}.jpg`, content });
  }
  return { photos, dropped };
}

export async function POST(request: Request) {
  let body: Partial<GetHelpPayload>;
  let photos: Photo[] = [];
  let photosNote = false;
  try {
    if ((request.headers.get("content-type") ?? "").includes("multipart/form-data")) {
      const form = await request.formData();
      body = JSON.parse(String(form.get("payload") ?? ""));
      try {
        const read = await readPhotos(form.getAll("photos"));
        photos = read.photos;
        photosNote = read.dropped;
      } catch (error) {
        console.error("[get-help] Couldn't read the photos — sending the lead without them", error);
        photosNote = true;
      }
    } else {
      body = await request.json();
    }
  } catch (error) {
    // With photos, the browser re-sends the lead without them after this.
    console.error("[get-help] Couldn't read the request", error);
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }
  if (body.photosFailed === true) photosNote = true;

  // Honeypot: bots tend to fill every field. Pretend success without processing —
  // but without `delivered`, so the client doesn't count it as a lead or an Ads conversion.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Same rules (and messages) the form checks in the browser — see lib/forms/lead.ts.
  const errors = validateLead(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const lead: GetHelpPayload = {
    name: body.name as string,
    phone: body.phone as string,
    phoneType: isPhoneType(body.phoneType) ? body.phoneType : undefined,
    email: text(body.email),
    location: text(body.location),
    animal: text(body.animal),
    whereActivity: text(body.whereActivity),
    description: body.description as string,
    consent: true,
  };

  let delivered = await sendLeadEmail(lead, photos, photosNote);
  if (!delivered && photos.length > 0) {
    // The photos may be what failed — never lose the lead over them.
    delivered = await sendLeadEmail(lead, [], true);
  }

  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: `We couldn't send your request. Please try again or call ${DEFAULT_PHONE.display}.` },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
