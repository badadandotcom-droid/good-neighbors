import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { Container } from "@/components/shared/Container";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { getHeroHeadline, getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market } from "@/lib/types";

export function Hero({ market }: { market?: Market }) {
  const phone = getPhone(market);

  return (
    <section className="relative overflow-hidden border-b border-stone-300 bg-bone">
      <Container className="grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-7">
          <SameDayBadge market={market} />

          <h1 className="mt-6 max-w-xl text-balance font-display text-[2.6rem] leading-[1.06] text-charcoal sm:text-6xl lg:text-[4.2rem]">
            {getHeroHeadline(market)}
          </h1>

          <p className="mt-3 font-display text-xl text-pine-600 sm:text-2xl">{getPositioningLine(market)}</p>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-700 text-pretty">
            One call brings a trained technician to your door to handle the raccoon, squirrel, or unknown
            visitor that&apos;s made itself at home — carefully, humanely, and without turning it into a bigger
            project than it needs to be.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "hero" }}>
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <PhoneLink
              phone={phone}
              location="hero"
              className="justify-center text-lg text-ink hover:text-pine-600 sm:justify-start"
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-stone-500">
            <span className="inline-flex items-center gap-2">
              <Illustration id="shield-home" className="h-4 w-4" /> Respectful of your property
            </span>
            <span className="inline-flex items-center gap-2">
              <Illustration id="compass" className="h-4 w-4" /> {market ? market.metro ?? market.region : "Southern Ontario"}
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <PhotoPlaceholder
            icon="roofline"
            tone="pine"
            aspect="aspect-[4/5] sm:aspect-[5/6]"
            caption="exterior roofline / technician at work"
            className="shadow-lifted"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-sm border border-stone-300 bg-bone-50 p-4 shadow-card sm:block">
            <p className="font-display text-2xl text-charcoal">Humane by default</p>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              Not an add-on — it&apos;s how every job is handled.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
