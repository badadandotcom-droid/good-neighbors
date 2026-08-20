import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { getPhone, getPositioningLine } from "@/lib/config/resolvers";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market } from "@/lib/types";

export function FinalCTA({ market }: { market?: Market }) {
  const phone = getPhone(market);

  return (
    <section className="bg-charcoal py-20 text-bone-50 sm:py-28">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xl text-pine-100 sm:text-2xl">{getPositioningLine(market)}</p>
          <h2 className="mt-3 text-balance font-display text-4xl leading-[1.08] text-bone-50 sm:text-5xl">
            Let&apos;s get your home back to normal.
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "final-cta" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
          <PhoneLink phone={phone} location="final-cta" className="justify-center text-lg text-bone-50 sm:justify-start" />
        </div>
      </Container>
    </section>
  );
}
