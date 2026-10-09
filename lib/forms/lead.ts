/**
 * The Get Help form's rules, shared by the browser and the server so both
 * say exactly the same thing. The browser checks first, so a missing field
 * is flagged straight away (and photos aren't uploaded only to be turned
 * away); the server always checks again before anything is sent.
 */

/** Where a visitor lands once their request has been sent. Hidden from search. */
export const THANK_YOU_PATH = "/contact/thank-you";

/** Answers to the optional "Mobile or landline?" question, as they appear in the lead email. */
export const PHONE_TYPES = ["Mobile", "Landline"] as const;
export type PhoneType = (typeof PHONE_TYPES)[number];

export function isPhoneType(value: unknown): value is PhoneType {
  return typeof value === "string" && (PHONE_TYPES as readonly string[]).includes(value);
}

/** Longest accepted value per field; the form's inputs stop at the same lengths. */
export const FIELD_LIMITS = { name: 200, phone: 40, description: 2000 } as const;

/** Fields that can need fixing, in the order they appear on the form (also their element ids). */
export const VALIDATED_FIELDS = ["name", "phone", "email", "description", "consent"] as const;
export type LeadFieldErrors = Partial<Record<(typeof VALIDATED_FIELDS)[number], string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

/** Returns a message per field that needs fixing; an empty object means the lead can be sent. */
export function validateLead(body: {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  description?: unknown;
  consent?: unknown;
}): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  if (!isNonEmptyString(body.name, FIELD_LIMITS.name)) errors.name = "Please enter your name.";
  if (!isNonEmptyString(body.phone, FIELD_LIMITS.phone)) errors.phone = "Please enter a phone number.";
  if (typeof body.email === "string" && body.email.length > 0 && !EMAIL_PATTERN.test(body.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isNonEmptyString(body.description, FIELD_LIMITS.description)) {
    errors.description = "Please briefly describe what's happening.";
  }
  if (body.consent !== true) errors.consent = "Please confirm you're okay with us contacting you.";
  return errors;
}
