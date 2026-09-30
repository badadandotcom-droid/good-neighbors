"use server";

import { readLead, sendLead, validateLead, type LeadFormState } from "@/lib/leads";

/** Server Action behind components/LeadForm.tsx. Delivery details live in lib/leads.ts. */
export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const lead = readLead(formData);

  // Honeypot: hidden from people, filled in by form-spamming bots. Report
  // success so the bot moves on, and send nothing.
  if (formData.get("company")) {
    return { status: "sent", name: lead.name, phone: lead.phone, reply: lead.reply };
  }

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", values: lead, errors };
  }

  const page = formData.get("page");
  const sent = await sendLead(lead, typeof page === "string" ? page.slice(0, 200) : "unknown");
  if (!sent) return { status: "failed", values: lead };

  return { status: "sent", name: lead.name, phone: lead.phone, reply: lead.reply };
}
