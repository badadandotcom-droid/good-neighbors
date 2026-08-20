import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getActiveMarkets, marketHref } from "@/lib/data/markets";

export function ServiceAreasTeaser() {
  const markets = getActiveMarkets();

  return (
    <section className="border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Service Areas"
            title="Currently serving Southern Ontario"
            description="Good Neighbors is expanding — if your area isn't listed yet, reach out and we'll let you know about coverage."
            className="max-w-xl"
          />
          <Link
            href="/service-areas"
            className="shrink-0 text-sm font-medium text-pine-600 hover:text-pine-700"
          >
            View all service areas &rarr;
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={marketHref(market)}
              className="rounded-sm border border-stone-300 bg-white px-4 py-5 text-center transition-colors hover:border-pine-500"
            >
              <span className="font-display text-base text-charcoal">{market.displayName}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
