import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { hubPlaces } from "@/components/service-areas/MarketHub";
import { cityHref, getPlannedCitiesForRegion, listJoin } from "@/lib/data/cities";
import { MARKETS, marketHref } from "@/lib/data/markets";
import { pageMetadata } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { Market, RegionSlug } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Service Areas",
  description:
    "Humane wildlife removal across Toronto, Peel, York and Durham: Scarborough, Brampton, Mississauga and more. Lifetime guarantee on every entry point we seal.",
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

const REGION_SLUGS: RegionSlug[] = ["toronto", "peel-region", "york-region", "durham-region"];

export default function ServiceAreasPage() {
  const groups = groupByMetro(MARKETS.filter((m) => m.status !== "hidden"));

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
            Areas we serve
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700 text-pretty">
            Serving Toronto, York Region, Durham Region and Peel Region.
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
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {group.markets.map((market) => {
                  const active = market.status === "active";
                  const isRegion = (REGION_SLUGS as string[]).includes(market.slug);
                  const cities = isRegion ? getPlannedCitiesForRegion(market.slug as RegionSlug) : [];
                  return (
                    <div
                      key={market.slug}
                      className={cn(
                        "flex flex-col gap-4 rounded-sm border p-7",
                        active ? "border-stone-300 bg-bone-50" : "border-dashed border-stone-300 bg-transparent",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <Illustration id="compass" weight="bold" className="h-8 w-8 text-pine-600" />
                        {!active && (
                          <span className="rounded-full border border-stone-400 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-stone-500 uppercase">
                            Coming soon
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-charcoal">
                          <Link href={marketHref(market)} className="hover:text-pine-700">
                            {market.heroHeading ?? market.displayName}
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700">
                          {isRegion ? listJoin(hubPlaces(market)) : market.serviceArea.join(", ")}
                        </p>
                      </div>
                      {cities.some((c) => c.live) && (
                        <ul className="flex flex-wrap gap-2" aria-label={`${market.displayName} city pages`}>
                          {cities
                            .filter((c) => c.live)
                            .map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={cityHref(c)}
                                  className="inline-block rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm font-medium text-pine-700 hover:border-pine-500"
                                >
                                  {c.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                      <Link
                        href={marketHref(market)}
                        className="mt-auto text-sm font-medium text-pine-600 hover:text-pine-700"
                      >
                        {active ? `All of ${market.displayName} →` : "Get notified →"}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-bone-50">
            Have a wildlife problem right now?
          </h2>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "service-areas-hub" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
