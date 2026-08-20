import type { Market } from "@/lib/types";

/**
 * ============================================================================
 * MARKET DATA — the scalable location model
 * ============================================================================
 * Good Neighbors is one brand and one codebase serving many local markets.
 * Each entry below is a genuine local expression of that single brand
 * ("Good Neighbors Toronto"), never a separate company or site.
 *
 * This list is a LAUNCH-CONFIGURATION SNAPSHOT for Southern Ontario, not a
 * locked national map. Add, disable, or edit markets here — no other file
 * needs to change, and no page needs to be hand-built. Underneath, the model
 * already understands Country -> Region (province/state) -> Metro -> local
 * service area, which is what lets this same file eventually hold Canadian
 * markets outside Ontario and U.S. markets without a redesign.
 *
 * URL STRUCTURE — a deliberate, documented decision:
 * Every market currently resolves at /service-areas/[slug]. This is a
 * placeholder-but-functional convention, not a permanent one. Because pages
 * are generated from `slug` alone (see app/service-areas/[slug]/page.tsx),
 * promoting a market to a root-level path later (e.g. "/toronto") is a
 * routing change (a Next.js rewrite/redirect, or an additional route
 * segment), not a data-model change. Do not let any component construct a
 * market URL by hand — always go through `marketHref(market)` below.
 * ============================================================================
 */

export const marketHref = (market: Pick<Market, "slug">) => `/service-areas/${market.slug}`;

export const MARKETS: Market[] = [
  {
    slug: "toronto",
    displayName: "Toronto",
    brandName: "Good Neighbors Toronto",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Toronto", "Scarborough", "North York", "Etobicoke", "East York"],
    phone: { display: "(416) 555-0142", href: "tel:+14165550142", isPlaceholder: true },
    heroBlurb:
      "From century homes in the Annex to new builds in Scarborough, we handle wildlife in Toronto's attics, walls, and rooflines with the same careful, humane approach every time.",
    seoDescription:
      "Humane, same-day wildlife removal in Toronto. Raccoons, squirrels, skunks, birds, and bats — handled quickly and professionally by local technicians.",
  },
  {
    slug: "york-region",
    displayName: "York Region",
    brandName: "Good Neighbors York Region",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Markham", "Richmond Hill", "Vaughan", "Thornhill", "Aurora", "Newmarket"],
    phone: { display: "(905) 555-0119", href: "tel:+19055550119", isPlaceholder: true },
    heroBlurb:
      "Growing neighborhoods and mature tree canopy make York Region an easy place for wildlife to move in. We're close by and ready to help in Markham, Vaughan, Richmond Hill, and beyond.",
    seoDescription:
      "Wildlife removal serving York Region — Markham, Richmond Hill, Vaughan, and Thornhill. Humane, local, same-day service available.",
  },
  {
    slug: "durham-region",
    displayName: "Durham Region",
    brandName: "Good Neighbors Durham Region",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Pickering", "Ajax", "Whitby", "Oshawa"],
    phone: { display: "(905) 555-0176", href: "tel:+19055550176", isPlaceholder: true },
    heroBlurb:
      "From the Pickering waterfront to established Oshawa neighborhoods, Durham Region homeowners get the same humane, careful service as anywhere else on our map.",
    seoDescription:
      "Humane wildlife removal across Durham Region — Pickering, Ajax, Whitby, and Oshawa. Local technicians, same-day service available.",
  },
  {
    slug: "oakville-burlington",
    displayName: "Oakville & Burlington",
    brandName: "Good Neighbors Oakville & Burlington",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Halton Region",
    serviceArea: ["Oakville", "Burlington"],
    phone: { display: "(905) 555-0187", href: "tel:+19055550187", isPlaceholder: true },
    heroBlurb:
      "Oakville and Burlington's mature, leafy streets are excellent habitat — for people and, occasionally, for the wildlife that finds its way into a roofline. We're local to the area.",
    seoDescription:
      "Wildlife removal in Oakville and Burlington. Humane raccoon, squirrel, and bird removal with same-day service available.",
  },
  {
    slug: "hamilton",
    displayName: "Hamilton",
    brandName: "Good Neighbors Hamilton",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["Hamilton", "Ancaster", "Dundas", "Stoney Creek"],
    phone: { display: "(289) 555-0134", href: "tel:+12895550134", isPlaceholder: true },
    heroBlurb:
      "Hamilton's mix of older housing stock and escarpment-adjacent properties sees its share of wildlife activity. Our technicians know the neighborhoods and the housing types well.",
    seoDescription:
      "Humane wildlife removal in Hamilton, Ancaster, Dundas, and Stoney Creek. Local, same-day service available.",
  },
  {
    slug: "barrie",
    displayName: "Barrie",
    brandName: "Good Neighbors Barrie",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Simcoe County",
    serviceArea: ["Barrie", "Innisfil", "Springwater"],
    phone: { display: "(705) 555-0158", href: "tel:+17055550158", isPlaceholder: true },
    heroBlurb:
      "Barrie's proximity to forest and shoreline means wildlife encounters are common. We help homeowners around Lake Simcoe get their homes back to normal quickly.",
    seoDescription:
      "Wildlife removal in Barrie and Simcoe County. Humane, local, same-day service available for raccoons, squirrels, and more.",
  },
  {
    slug: "niagara-region",
    displayName: "Niagara Region",
    brandName: "Good Neighbors Niagara Region",
    status: "coming-soon",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["St. Catharines", "Niagara Falls", "Welland", "Niagara-on-the-Lake"],
    phone: { display: "(905) 555-0193", href: "tel:+19055550193", isPlaceholder: true },
    heroBlurb:
      "Good Neighbors is expanding into the Niagara Region. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to the Niagara Region, including St. Catharines, Niagara Falls, and Welland.",
  },
];

export function getActiveMarkets(): Market[] {
  return MARKETS.filter((m) => m.status === "active");
}

export function getMarketBySlug(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}
