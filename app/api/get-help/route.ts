import { NextResponse } from "next/server";

/**
 * Get Help intake endpoint.
 *
 * STATUS: validates and accepts submissions, but does NOT yet deliver them
 * anywhere — there is no CRM, email, or lead-routing integration connected
 * (see PLACEHOLDERS.md). A submission that returns { ok: true } from this
 * route has been validated, not received by a human. Wire delivery (e.g.
 * an email send, a CRM webhook, or a CallRail/lead-routing call) where
 * marked below before relying on this in production.
 *
 * Photos are intentionally not accepted here — see components/forms/PhotoUpload.tsx.
 */

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

  // TODO(production): deliver the validated lead — e.g. send an email via a
  // transactional provider, POST to a CRM/dispatch webhook, or trigger a
  // CallRail conversion event. Nothing downstream is connected yet.
  console.log("[get-help] validated submission received", {
    name: body.name,
    hasEmail: Boolean(body.email),
    location: body.location,
    animal: body.animal,
    whereActivity: body.whereActivity,
  });

  return NextResponse.json({ ok: true });
}
