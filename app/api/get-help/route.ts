import { NextResponse } from "next/server";
import { CONTACT, DEFAULT_PHONE } from "@/lib/config/site";

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
 * Photos are intentionally not accepted here — see components/forms/PhotoUpload.tsx.
 */

/** Must be an address on the Resend-verified domain. */
const FROM_ADDRESS = "Good Neighbors Website <website@goodneighborswildlife.ca>";

interface GetHelpPayload {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  animal?: string;
  whereActivity?: string;
  description: string;
  consent: boolean;
  /** Honeypot field — real users never populate this. */
  company?: string;
}

const MAX_FIELD_LENGTH = 2000;

function isNonEmptyString(value: unknown, max = MAX_FIELD_LENGTH): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function optional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Not provided";
}

/**
 * Returns true only when Resend has accepted the message. Every failure path
 * returns false so the caller can tell the visitor to phone instead.
 */
async function sendLeadEmail(lead: GetHelpPayload): Promise<boolean> {
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
    `Email: ${optional(lead.email)}`,
    `Location: ${optional(lead.location)}`,
    `Animal: ${optional(lead.animal)}`,
    `Where: ${optional(lead.whereActivity)}`,
    "",
    "What's happening:",
    lead.description.trim(),
    "",
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

export async function POST(request: Request) {
  let body: Partial<GetHelpPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field. Pretend success without processing.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const errors: Partial<Record<keyof GetHelpPayload, string>> = {};

  if (!isNonEmptyString(body.name, 200)) errors.name = "Please enter your name.";
  if (!isNonEmptyString(body.phone, 40)) errors.phone = "Please enter a phone number.";
  if (!isNonEmptyString(body.description, MAX_FIELD_LENGTH)) {
    errors.description = "Please briefly describe what's happening.";
  }
  if (body.email && typeof body.email === "string" && body.email.length > 0) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email)) errors.email = "Please enter a valid email address.";
  }
  if (body.consent !== true) errors.consent = "Please confirm you're okay with us contacting you.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const delivered = await sendLeadEmail(body as GetHelpPayload);

  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: `We couldn't send your request. Please try again or call ${DEFAULT_PHONE.display}.` },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
