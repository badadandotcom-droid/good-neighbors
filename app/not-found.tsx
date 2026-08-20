import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container className="max-w-lg text-center">
        <p className="font-display text-6xl text-stone-400">404</p>
        <h1 className="mt-4 font-display text-3xl text-charcoal">We couldn&apos;t find that page.</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
          The page you&apos;re looking for may have moved. If you&apos;ve got a wildlife problem, though, we can
          still help.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/" size="lg" variant="secondary">
            Back to homepage
          </CTAButton>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "404" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
