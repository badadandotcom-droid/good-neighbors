import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { pageMetadata } from "@/lib/seo";
import { BRAND, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { IllustrationId } from "@/lib/types";

export const metadata = pageMetadata({
  title: "Property Care & Prevention",
  description:
    "After the immediate wildlife problem is resolved, we can help identify how it happened and what — if anything — makes sense to prevent it from happening again.",
  path: "/property-care",
});

const SERVICES: { icon: IllustrationId; title: string; body: string }[] = [
  {
    icon: "inspection",
    title: "Entry-point inspection",
    body: "A close look at the roofline, soffits, vents, and foundation to find how wildlife got in — and where it's likely to try again.",
  },
  {
    icon: "soffit-vent",
    title: "Exclusion",
    body: "Sealing the specific opening an animal used, done after we've confirmed the animal is out.",
  },
  {
    icon: "shield-home",
    title: "Preventative sealing",
    body: "Addressing other vulnerable points on the property before they become the next entry point.",
  },
  {
    icon: "attic",
    title: "Damage assessment",
    body: "Documenting any insulation, wiring, or structural damage so you know what you're dealing with.",
  },
];

export default function PropertyCarePage() {
  return (
    <>
      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">After the Immediate Job</p>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
              Property care & prevention
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">
              This page is here for homeowners who want to understand what comes after removal. It&apos;s not
              where the {BRAND.name} relationship starts — that begins with solving the immediate wildlife
              problem. Once that&apos;s done, your technician can walk you through whether any of this makes
              sense for your property.
            </p>
            <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "property-care-hero" }} className="mt-8">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder icon="inspection" tone="bone" aspect="aspect-[4/3]" caption="technician inspecting rooflines" />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="flex gap-5">
                <Illustration id={s.icon} className="h-8 w-8 shrink-0 text-pine-600" />
                <div>
                  <h2 className="font-display text-xl text-charcoal">{s.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700 text-pretty">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl rounded-sm border border-stone-300 bg-bone-50 p-8">
            <h3 className="font-display text-xl text-charcoal">No pressure, no packages sold online</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700 text-pretty">
              Every property is different, so prevention work is scoped in person, not sold as a fixed package on
              this page. If it&apos;s worth doing, we&apos;ll explain the options clearly and let you decide —
              there&apos;s no obligation to move forward.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
