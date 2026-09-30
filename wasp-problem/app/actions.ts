"use server";

import { readLead, sendLead, validateLead, type LeadFormState } from "@/lib/leads";

/** Server Action behind components/LeadForm.tsx. Delivery details live in lib/leads.ts. */
export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const lead = readLead(formData);

  // Honeypot: hidden from people, filled in by form-spamming bots — but also,
  // rarely, by a browser autofilling "organization" into the hidden field for a
  // real visitor. Silently dropping those would lose a real lead, which this
  // site treats as worse than spam (see lib/leads.ts), so a filled honeypot
  // still delivers, flagged in the subject so the owner's inbox can filter it.
  const suspectedBot = Boolean(formData.get("company"));

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", values: lead, errors };
  }

  const page = formData.get("page");
  const sent = await sendLead(lead, typeof page === "string" ? page.slice(0, 200) : "unknown", suspectedBot);
  if (!sent) return { status: "failed", values: lead };

  return { status: "sent", name: lead.name, phone: lead.phone, reply: lead.reply };
}
