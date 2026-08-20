import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { MARKETS, marketHref } from "@/lib/data/markets";
import { pageMetadata } from "@/lib/seo";
import { BRAND, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import type { Market } from "@/lib/types";

export const metadata = pageMetadata({
  title: "Service Areas",
  description: "Good Neighbors service areas across Southern Ontario, with more markets being added as we grow.",
  path: "/service-areas",
});

function groupByMetro(markets: Market[]): { metro: string; markets: Market[] }[] {
  const groups = new Map<string, Market[]>();
  for (const market of markets) {
    const key = market.metro ?? market.region;
    groups.set(key, [...(groups.get(key) ?? []), market]);
  }
  return Array.from(groups, ([metro, markets]) => ({ metro, markets }));
}

export default function ServiceAreasPage() {
  const groups = groupByMetro(MARKETS);

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="compass"
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 text-pine-600 opacity-[0.05]"
        />
        <Container className="relative max-w-3xl">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            Service Areas
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
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
        <Container className="flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.metro}>
              <h2 className="flex items-center gap-3 font-display text-xl text-charcoal">
                <span className="h-px w-8 bg-stone-400" aria-hidden="true" />
                {group.metro}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.markets.map((market) => {
                  const active = market.status === "active";
                  return (
                    <Link
                      key={market.slug}
                      href={marketHref(market)}
                      className={cn(
                        "group flex flex-col gap-4 rounded-sm border p-7 transition-all duration-200",
                        active
                          ? "border-stone-300 bg-bone-50 hover:-translate-y-0.5 hover:border-pine-500 hover:shadow-card"
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
                        <h3 className="font-display text-2xl text-charcoal">{market.displayName}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700">{market.serviceArea.join(", ")}</p>
                      </div>
                      <span className="mt-auto text-sm font-medium text-pine-600 group-hover:text-pine-700">
                        {active ? "View coverage →" : "Get notified →"}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
