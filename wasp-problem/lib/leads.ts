/**
 * Online request form — delivery and validation. Server-only: imported by the
 * Server Action in app/actions.ts and by components/LeadFormSection.tsx, never
 * by a client component, so the API key below never reaches the browser.
 *
 * Requests are emailed to the owner through Resend (https://resend.com) with a
 * plain fetch — no SDK dependency. Three environment variables, set in the
 * Vercel project (Settings → Environment Variables), then redeploy:
 *
 *   RESEND_API_KEY   — API key from the Resend dashboard.
 *   LEAD_TO_EMAIL    — inbox the requests go to.
 *   LEAD_FROM_EMAIL  — optional sender. Defaults to Resend's shared test
 *                      sender, which only delivers to the email address the
 *                      Resend account was opened with; verify waspproblem.ca
 *                      in Resend and set e.g. "Wasp Problem <requests@waspproblem.ca>"
 *                      to send to any inbox.
 *
 * While the first two are unset the form does not render anywhere — a form
 * that accepts a request and delivers it nowhere loses the lead silently,
 * which is worse than no form. Same idea as GOOGLE_REVIEWS_URL in lib/site.ts.
 */

const DEFAULT_FROM = "Wasp Problem Website <onboarding@resend.dev>";

export function leadFormEnabled(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL);
}

export const REPLY_METHODS = ["text", "call"] as const;
export type ReplyMethod = (typeof REPLY_METHODS)[number];

export type LeadFields = {
  name: string;
  phone: string;
  email: string;
  address: string;
  details: string;
  reply: ReplyMethod;
};

export type LeadFieldErrors = Partial<Record<keyof LeadFields, string>>;

export type LeadFormState =
  | { status: "idle" }
  | { status: "invalid"; values: LeadFields; errors: LeadFieldErrors }
  | { status: "failed"; values: LeadFields }
  | { status: "sent"; name: string; phone: string; reply: ReplyMethod };

const MAX = { name: 100, phone: 30, email: 200, address: 200, details: 2000 } as const;

function field(formData: FormData, key: string, max: number): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function readLead(formData: FormData): LeadFields {
  const reply = formData.get("reply");
  return {
    name: field(formData, "name", MAX.name),
    phone: field(formData, "phone", MAX.phone),
    email: field(formData, "email", MAX.email),
    address: field(formData, "address", MAX.address),
    details: field(formData, "details", MAX.details),
    reply: REPLY_METHODS.includes(reply as ReplyMethod) ? (reply as ReplyMethod) : "text",
  };
}

/** Mirrors the `required` / `type` attributes on the form — the browser checks first, this is the backstop. */
export function validateLead(lead: LeadFields): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  if (!lead.name) errors.name = "Please enter your name.";
  const digits = lead.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) {
    errors.phone = "Please enter a 10-digit phone number so we can reach you.";
  }
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (!lead.details) errors.details = "Please tell us a little about what you're seeing.";
  return errors;
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

export async function sendLead(lead: LeadFields, page: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) return false;

  const received = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Toronto",
  }).format(new Date());

  const text = [
    `New request from the website — ${received}`,
    "",
    `Name:        ${lead.name}`,
    `Phone:       ${lead.phone}`,
    `Reply by:    ${lead.reply === "text" ? "Text" : "Phone call"}`,
    `Email:       ${lead.email || "—"}`,
    `Address:     ${lead.address || "—"}`,
    "",
    "What they're seeing:",
    lead.details,
    "",
    `Sent from:   ${page}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL || DEFAULT_FROM,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        subject: oneLine(`Website request: ${lead.name}${lead.address ? ` — ${lead.address}` : ""}`),
        text,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[leads] Resend rejected the request", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[leads] Resend request failed", error);
    return false;
  }
}
