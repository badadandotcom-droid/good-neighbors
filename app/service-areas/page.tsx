import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { MARKETS, marketHref } from "@/lib/data/markets";
import { pageMetadata } from "@/lib/seo";
import { BRAND, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Service Areas",
  description: "Good Neighbors service areas across Southern Ontario, with more markets being added as we grow.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">Service Areas</p>
          <h1 className="mt-3 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
            Local wherever we operate.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700 text-pretty">
            {BRAND.name} launched in {BRAND.foundingRegion} and is adding markets as we grow. Every location below
            is served by the same brand, the same standards, and the same humane approach — just with technicians
            who know that specific area.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((market) => {
              const active = market.status === "active";
              return (
                <Link
                  key={market.slug}
                  href={marketHref(market)}
                  className={cn(
                    "group flex flex-col gap-4 rounded-sm border p-7 transition-colors",
                    active
                      ? "border-stone-300 bg-bone-50 hover:border-pine-500"
                      : "border-dashed border-stone-300 bg-transparent",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <Illustration id="compass" className="h-8 w-8 text-pine-600" />
                    {!active && (
                      <span className="rounded-full border border-stone-400 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-stone-500 uppercase">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-charcoal">{market.displayName}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{market.serviceArea.join(", ")}</p>
                  </div>
                  <span className="mt-auto text-sm font-medium text-pine-600 group-hover:text-pine-700">
                    {active ? "View coverage →" : "Get notified →"}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-stone-300">
            Don&apos;t see your area yet? Reach out anyway — we&apos;re expanding across Canada and, over time, the
            United States.
          </p>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "service-areas-hub" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
