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
    heroHeading: "Wildlife Removal in Toronto",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Toronto", "Scarborough", "North York", "Etobicoke", "East York"],
    heroBlurb:
      "From century homes in the Annex to new builds in Scarborough, we handle wildlife in Toronto's attics, walls, and rooflines with the same careful, humane approach every time.",
    seoDescription:
      "Humane raccoon, squirrel, skunk, bat and bird removal in Toronto. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
  },
  {
    slug: "york-region",
    displayName: "York Region",
    brandName: "Good Neighbors York Region",
    heroHeading: "Wildlife Removal in York Region",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Markham", "Richmond Hill", "Vaughan", "Thornhill", "Aurora", "Newmarket"],
    heroBlurb:
      "We provide humane wildlife removal for homeowners across York Region, including Markham, Vaughan and Richmond Hill.",
    seoDescription:
      "Humane wildlife removal in Markham, Vaughan and across York Region. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
  },
  {
    slug: "durham-region",
    displayName: "Durham Region",
    brandName: "Good Neighbors Durham Region",
    heroHeading: "Wildlife Removal in Durham Region",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Pickering", "Ajax", "Whitby", "Oshawa"],
    heroBlurb:
      "From the Pickering waterfront to established Oshawa neighbourhoods, we provide humane wildlife removal for homes across Durham Region.",
    seoDescription:
      "Humane wildlife removal in Pickering, Ajax, Whitby and Oshawa. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
  },
  {
    slug: "peel-region",
    displayName: "Peel Region",
    brandName: "Good Neighbors Peel Region",
    heroHeading: "Wildlife Removal in Peel Region",
    status: "active",
    country: "CA",
    region: "Ontario",
    metro: "Greater Toronto Area",
    serviceArea: ["Mississauga", "Brampton", "Caledon"],
    heroBlurb:
      "We provide humane raccoon, squirrel, skunk, bat and bird removal for homeowners across Peel Region.",
    seoDescription:
      "Humane wildlife removal in Mississauga, Brampton and Caledon. We seal the way in and repair the damage. Lifetime guarantee on every entry point we seal.",
  },
  {
    slug: "oakville-burlington",
    displayName: "Oakville & Burlington",
    brandName: "Good Neighbors Oakville & Burlington",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Halton Region",
    serviceArea: ["Oakville", "Burlington"],
    heroBlurb:
      "Good Neighbors is expanding into Oakville and Burlington. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Oakville and Burlington. Humane wildlife removal, expanding across the Halton Region.",
  },
  {
    slug: "hamilton",
    displayName: "Hamilton",
    brandName: "Good Neighbors Hamilton",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["Hamilton", "Ancaster", "Dundas", "Stoney Creek"],
    heroBlurb:
      "Good Neighbors is expanding into Hamilton. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Hamilton, Ancaster, Dundas, and Stoney Creek. Humane wildlife removal, expanding across Southern Ontario.",
  },
  {
    slug: "barrie",
    displayName: "Barrie",
    brandName: "Good Neighbors Barrie",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Simcoe County",
    serviceArea: ["Barrie", "Innisfil", "Springwater"],
    heroBlurb:
      "Good Neighbors is expanding into Barrie and Simcoe County. Reach out and we'll let you know about coverage and availability in your area.",
    seoDescription:
      "Good Neighbors is coming soon to Barrie and Simcoe County. Humane wildlife removal, expanding across Southern Ontario.",
  },
  {
    slug: "niagara-region",
    displayName: "Niagara Region",
    brandName: "Good Neighbors Niagara Region",
    status: "hidden",
    country: "CA",
    region: "Ontario",
    metro: "Hamilton–Niagara",
    serviceArea: ["St. Catharines", "Niagara Falls", "Welland", "Niagara-on-the-Lake"],
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
