import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market } from "@/lib/types";

export function FinalCTA({ market }: { market?: Market }) {
  const phone = getPhone(market);

  return (
    <section className="bg-pine-700 py-14 text-bone-50 sm:py-28">
      <Container className="flex flex-col items-start gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xl text-pine-100 sm:text-2xl">{getPositioningLine(market)}</p>
          <h2 className="mt-3 text-balance font-display text-4xl leading-[1.08] text-bone-50 sm:text-5xl">
            Let&apos;s get your home back to normal.
          </h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <CTAButton
            href={phone.href}
            size="lg"
            variant="secondary"
            event="cta_call"
            eventMeta={{ location: "final-cta" }}
            className="w-full font-semibold sm:w-auto"
          >
            {phone.display}
          </CTAButton>
          <CTAButton
            href="/contact"
            size="lg"
            variant="outline-on-dark"
            event="cta_get_help_now"
            eventMeta={{ location: "final-cta" }}
            className="w-full border-2 font-semibold sm:w-auto"
          >
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
