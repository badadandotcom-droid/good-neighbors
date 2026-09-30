import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { leadFormEnabled } from "@/lib/leads";

/** Anchor the hero's "send a request" link jumps to. */
export const LEAD_FORM_ANCHOR = "request";

/**
 * Renders nothing until delivery is configured (see lib/leads.ts), so the site
 * never shows a form that goes nowhere.
 */
export function LeadFormSection({
  page,
  background = "white",
}: {
  /** Path of the page it sits on — included in the email so the owner knows where the lead came from. */
  page: string;
  background?: "white" | "surface";
}) {
  if (!leadFormEnabled()) return null;

  return (
    <section
      id={LEAD_FORM_ANCHOR}
      className={`scroll-mt-4 px-5 py-16 sm:py-24 ${background === "surface" ? "bg-surface" : "bg-white"}`}
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Prefer not to call?"
          title="Send Us a Request"
          lede="Tell us what you're seeing and where. We reply day or night."
        />
        <div className="mt-10">
          <LeadForm page={page} />
        </div>
      </div>
    </section>
  );
}
