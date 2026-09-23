import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { Container } from "@/components/shared/Container";
import { Illustration } from "@/components/illustrations/Illustration";
import { getHeroHeadline, getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { ALWAYS_ON_CALL, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market } from "@/lib/types";

export function Hero({ market }: { market?: Market }) {
  const phone = getPhone(market);

  return (
    <section className="relative overflow-hidden border-b border-stone-300 bg-bone">
      <Illustration
        id="roofline"
        className="pointer-events-none absolute -left-24 top-0 h-[140%] w-auto text-pine-600 opacity-[0.06]"
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-6 py-8 sm:gap-12 sm:py-20 lg:grid-cols-12 lg:gap-6 lg:py-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pine-100 bg-pine-50 px-3 py-1 text-xs font-medium tracking-wide text-pine-700 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-pine-500" aria-hidden="true" />
            Serving Toronto &amp; the GTA
          </span>

          <h1 className="mt-4 max-w-xl text-balance font-display text-[2.25rem] leading-[1.04] text-charcoal sm:mt-6 sm:text-6xl lg:text-[4.6rem]">
            {getHeroHeadline(market)}
          </h1>

          <p className="mt-3 font-display text-xl italic text-pine-600 sm:mt-4 sm:text-2xl">{getPositioningLine(market)}</p>

          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-700 text-pretty sm:mt-6 sm:text-lg">
            Usually, we can solve the wildlife problem entirely from outside without needing to enter your home.
          </p>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-700 sm:mt-3 sm:text-base">
            We explain the price before any work begins.
          </p>

          {/* Urgent problems get phoned in, so the call is the primary action and carries
              the number itself — on mobile it sits above the fold rather than only in the
              sticky bar. */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={phone.href}
              size="lg"
              event="cta_call"
              eventMeta={{ location: "hero" }}
              className="w-full sm:w-auto"
            >
              {phone.display}
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline"
              size="lg"
              event="cta_get_help_now"
              eventMeta={{ location: "hero" }}
              className="w-full font-semibold sm:w-auto"
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>

          {ALWAYS_ON_CALL.enabled && (
            <p className="mt-3 text-sm text-stone-500">{ALWAYS_ON_CALL.heroLabel}</p>
          )}
        </div>

        <div className="relative lg:col-span-5 lg:-mr-6 xl:-mr-16">
          <div className="relative isolate aspect-[4/5] overflow-hidden rounded-sm shadow-deep sm:aspect-[5/6]">
            <Image
              src="/images/Good-Neighbors-Hero-Final.jpg"
              alt="A Good Neighbors technician arriving at a residential property"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -top-7 -left-7 hidden w-52 rounded-sm border border-stone-300 bg-bone-50 p-5 shadow-card sm:block">
            <span className="mb-2 block h-px w-6 bg-brass-400" aria-hidden="true" />
            <p className="font-display text-2xl leading-tight text-charcoal">Humane by default</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
