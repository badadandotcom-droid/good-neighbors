import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CityPage } from "@/components/service-areas/CityPage";
import { MarketHub } from "@/components/service-areas/MarketHub";
import { CITIES, cityHref, cityTitle, getCityBySlug } from "@/lib/data/cities";
import { MARKETS, getMarketBySlug, marketHref } from "@/lib/data/markets";
import { pageMetadata } from "@/lib/seo";

/**
 * /service-areas/[slug] serves two kinds of page from one route: a region
 * hub (Toronto, Peel Region, …, from lib/data/markets.ts) or a city page
 * (Brampton, Scarborough, …, from lib/data/cities.ts). City slugs must never
 * collide with market slugs; a city wins if they ever did.
 */
export function generateStaticParams() {
  return [
    ...MARKETS.filter((m) => m.status !== "hidden").map((m) => ({ slug: m.slug })),
    ...CITIES.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const city = getCityBySlug(slug);
  if (city) {
    return pageMetadata({ title: cityTitle(city), description: city.metaDescription, path: cityHref(city) });
  }

  const market = getMarketBySlug(slug);
  if (!market || market.status === "hidden") return {};

  return pageMetadata({
    title: market.hubTitle ?? market.heroHeading ?? `Wildlife Removal in ${market.displayName}`,
    description: market.seoDescription,
    path: marketHref(market),
    noIndex: market.status !== "active",
  });
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const city = getCityBySlug(slug);
  if (city) return <CityPage city={city} />;

  const market = getMarketBySlug(slug);
  if (!market || market.status === "hidden") notFound();

  return <MarketHub market={market} />;
}
