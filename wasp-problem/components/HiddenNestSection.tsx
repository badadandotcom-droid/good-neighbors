import { ContactActions } from "@/components/ContactActions";
import { SectionHeading } from "@/components/SectionHeading";
import { PRICING } from "@/lib/pricing";

export const HIDDEN_NEST_ANCHOR = "hidden-nests";

/**
 * Callers describe the problem as "wasps going into a hole", not "hidden nest",
 * so this section meets them in their own words. Scope note: it describes
 * treatment practice, never claims arrival times — 24/7 is about answering
 * the phone (see AVAILABILITY_24_7 in lib/site.ts).
 */
export function HiddenNestSection() {
  const hidden = PRICING.find((item) => item.id === "hidden-nest");

  return (
    <section id={HIDDEN_NEST_ANCHOR} className="scroll-mt-4 bg-yellow-tint px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Hidden nests"
          title="Wasps Going Into a Hole?"
          lede="A hole in the wall, a gap in the brick, under the soffit, behind the siding, a vent, or the frame of a window or garage door — wasps flying in and out of one spot almost always means a nest hidden inside."
        />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          Spraying the opening from outside rarely reaches the nest, and it can push the wasps deeper
          into the wall or into the house. We treat hidden nests at the source, with product placed
          directly into the nest, and our phones are answered day or night.
        </p>
        {hidden && (
          <p className="mt-4 text-sm font-semibold text-muted">
            Hidden nest treatment is ${hidden.amount} —{" "}
            <a href="#pricing" className="text-ink underline decoration-yellow-deep decoration-2 underline-offset-4">
              see pricing
            </a>
            .
          </p>
        )}
        <div className="mt-8">
          <ContactActions ctaLocationPrefix="hidden-nest" variant="light" />
        </div>
      </div>
    </section>
  );
}
