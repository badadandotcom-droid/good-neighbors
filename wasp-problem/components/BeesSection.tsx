import { PhoneLink } from "@/components/PhoneLink";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { TollFreeNumber } from "@/components/TollFreeNumber";
import { PHONE_LOCAL } from "@/lib/site";

/** Ad landing anchor for "bee removal" searches: waspproblem.ca/#bees. */
export const BEES_ANCHOR = "bees";

/**
 * Deliberately generic — the owner's call: callers say "bees", not a species,
 * so the section names the places people find them, not the kinds of bee.
 */
export function BeesSection() {
  return (
    <section id={BEES_ANCHOR} className="scroll-mt-4 bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Bee removal"
          title="We Remove Bees Too"
          lede="Bees going into a wall, under the soffit, into the ground, or boring round holes in wood — we handle those as well as wasps and hornets. Call or text and tell us where you're seeing them."
        />
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <PhoneLink location="bees" className="btn btn-dark min-h-14 w-full max-w-xs px-7 py-4 text-lg sm:w-auto">
            Call <TollFreeNumber />
          </PhoneLink>
          <TextLink location="bees-text" className="btn btn-outline min-h-14 w-full max-w-xs px-6 py-4 text-lg sm:w-auto">
            Text {PHONE_LOCAL.display}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
