import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { Container } from "@/components/shared/Container";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { getHeroHeadline, getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market } from "@/lib/types";

/**
 * TEMPORARY visual test — real "Hero Candidate #2" photo vs. the placeholder
 * system. Flip to false (or delete this const + the branch below) to revert
 * to PhotoPlaceholder instantly; nothing else about the placeholder system
 * has been touched.
 */
const HERO_TEST_IMAGE = true;

export function Hero({ market }: { market?: Market }) {
  const phone = getPhone(market);

  return (
    <section className="relative overflow-hidden border-b border-stone-300 bg-bone">
      <Illustration
        id="roofline"
        className="pointer-events-none absolute -left-24 top-0 h-[140%] w-auto text-pine-600 opacity-[0.06]"
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-6 lg:py-16">
        <div className="lg:col-span-7">
          <SameDayBadge market={market} />

          <h1 className="mt-6 max-w-xl text-balance font-display text-[2.25rem] leading-[1.04] text-charcoal sm:text-6xl lg:text-[4.6rem]">
            {getHeroHeadline(market)}
          </h1>

          <p className="mt-4 font-display text-xl italic text-pine-600 sm:text-2xl">{getPositioningLine(market)}</p>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-700 text-pretty">
            One call brings a trained technician to your door to handle it carefully and humanely — without
            turning into a bigger project.
          </p>

          <div className="mt-9 hidden gap-4 sm:flex sm:flex-row sm:items-center">
            <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "hero" }}>
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <PhoneLink
              phone={phone}
              location="hero"
              className="justify-center text-lg text-ink hover:text-pine-600 sm:justify-start"
            />
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-6 xl:-mr-16">
          {HERO_TEST_IMAGE ? (
            <div className="relative isolate aspect-[4/5] overflow-hidden rounded-sm shadow-deep sm:aspect-[5/6]">
              <Image
                src="/images/hero-candidate-2.jpg"
                alt="A Good Neighbors technician arriving at a residential property"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          ) : (
            <PhotoPlaceholder
              slot="arrival"
              icon="roofline"
              tone="pine"
              aspect="aspect-[4/5] sm:aspect-[5/6]"
              className="shadow-deep"
            />
          )}
          <div className="absolute -top-7 -left-7 hidden w-52 rounded-sm border border-stone-300 bg-bone-50 p-5 shadow-card sm:block">
            <span className="mb-2 block h-px w-6 bg-brass-400" aria-hidden="true" />
            <p className="font-display text-2xl leading-tight text-charcoal">Humane by default</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              Not an add-on — it&apos;s how every job is handled.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
