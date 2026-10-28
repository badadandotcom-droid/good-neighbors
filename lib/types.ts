/**
 * Shared domain types for the Good Neighbors site.
 *
 * These types describe the brand's flexible market + service architecture.
 * They are intentionally decoupled from URL structure and from any single
 * launch region so the same data model can grow from "Southern Ontario"
 * to "Canada" to "United States" without a rewrite.
 */

export type Country = "CA" | "US";

/** A phone line, always paired with call-tracking metadata for later CallRail wiring. */
export interface PhoneConfig {
  /** Human-readable display format, e.g. "(416) 555-0142" */
  display: string;
  /** tel: href, e.g. "tel:+14165550142" */
  href: string;
  /**
   * True until a real, working local/tracking number is provisioned.
   * Surfaced in PLACEHOLDERS.md — do not remove this flag when replacing
   * the number, flip it to false instead so it's easy to audit.
   */
  isPlaceholder: boolean;
  /** Reserved for CallRail (or equivalent) swap/tracking pool id. */
  trackingPoolId?: string;
}

/** Centralized same-day service policy. See lib/config/site.ts for defaults and resolution. */
export interface SameDayServiceConfig {
  enabled: boolean;
  /** The small badge near the Call buttons when enabled, e.g. "Same-day service, day or night" */
  badgeLabel: string;
  /** Short phrase used in "Humane. Local. {phrase}." when enabled */
  headlinePhrase: string;
  /** Short phrase used in "Humane. Local. {phrase}." when disabled */
  fallbackHeadlinePhrase: string;
  /** Fuller qualification sentence shown near CTAs when enabled */
  qualificationMessage: string;
  /** Fuller message shown near CTAs when disabled */
  disabledMessage: string;
}

/**
 * "hidden" markets keep their data (preparatory content for a future
 * launch) but are excluded from every public surface — hub grid, sitemap,
 * footer, nav, and generateStaticParams — and 404 if visited directly.
 */
export type MarketStatus = "active" | "coming-soon" | "hidden";

/**
 * A localized market/service-area expression of the single Good Neighbors
 * brand. Never a separate company, brand, or codebase.
 *
 * The public URL for a market is intentionally decided in one place
 * (app/service-areas/[slug]/page.tsx) rather than baked into this type, so
 * the URL convention (nested under /service-areas/, or promoted to a root
 * slug like /toronto) can change later without touching the data model.
 */
export interface Market {
  slug: string;
  /** e.g. "Toronto" */
  displayName: string;
  /** e.g. "Good Neighbors Toronto" */
  brandName: string;
  /** Overrides the on-page H1 (which otherwise defaults to `brandName`) when the approved heading differs from the brand-suffix convention. */
  heroHeading?: string;
  /**
   * Hub page <title> before the brand suffix, naming the region's main
   * cities, e.g. "Wildlife Removal in Peel Region: Brampton, Mississauga &
   * Caledon". Falls back to `heroHeading`.
   */
  hubTitle?: string;
  /**
   * Places the hub names as covered that have no city page of their own
   * (East York, King City, Bowmanville…). Plain text, never links.
   */
  alsoCovered?: string[];
  status: MarketStatus;
  country: Country;
  /** Province or state, e.g. "Ontario" */
  region: string;
  /** Optional metro/region grouping, e.g. "Greater Toronto Area" */
  metro?: string;
  /** Cities / municipalities / neighborhoods this market page covers */
  serviceArea: string[];
  /** Falls back to the brand default phone when omitted */
  phone?: PhoneConfig;
  /** Falls back to (and can partially override) the brand default same-day policy */
  sameDayService?: Partial<SameDayServiceConfig>;
  /** One or two sentence local hero/intro blurb */
  heroBlurb: string;
  /** Meta description for this market's page */
  seoDescription: string;
  /** Optional coordinates for LocalBusiness/service-area schema, once known */
  coordinates?: { lat: number; lng: number };
  /**
   * Long-form hub copy (Toronto first, Oct 2026): body sections rendered
   * between the city cards and the animal grid. Paragraphs may carry
   * [label](/path) links. A hub without them renders exactly as before.
   */
  hubSections?: { heading: string; paragraphs: string[] }[];
  /** Hub-specific questions, shown after the featured FAQs and included in the FAQPage schema. Answers are plain text. */
  hubFaqs?: FaqItem[];
}

/** The four region hubs a city page can belong to (their Market slugs). */
export type RegionSlug = "toronto" | "peel-region" | "york-region" | "durham-region";

export interface CityFaq {
  question: string;
  answer: string;
}

/**
 * A city page at /service-areas/[slug], e.g. /service-areas/brampton. People
 * search by city ("raccoon removal brampton"), not by region, so each city
 * gets a page that is genuinely about that city: real neighbourhoods, the
 * local housing and landscape, and how they affect which animals get in.
 *
 * Every text field is written for that city alone. Google treats near-
 * duplicate location pages as doorway pages, so no two cities may share
 * more than a sentence of copy, and nothing here may claim anything about
 * the business that the live site doesn't already say. Copy may carry
 * inline links written as [label](/path) (see components/shared/RichText).
 */
export interface City {
  slug: string;
  /** e.g. "Brampton" */
  name: string;
  region: RegionSlug;
  /** Page <title> before the brand suffix; defaults to "Raccoon & Squirrel Removal in {name}". */
  seoTitle?: string;
  /** Under 155 characters: the city, same-day service, the lifetime guarantee, humane, and the phone number. */
  metaDescription: string;
  /** One line for the hub card and the service-areas index, e.g. "Castlemore to Mount Pleasant." */
  cardLine: string;
  /** Hero paragraph naming the city and two or three of its neighbourhoods. */
  intro: string;
  /** Real neighbourhoods, the higher-end areas first. Plain text, never links. */
  neighbourhoods: string[];
  /** Two or three paragraphs on the local housing and landscape; one links to /wildlife/something-in-the-attic. */
  problems: string[];
  /** "Raccoon removal in {name}", one or two paragraphs, linking to /wildlife/raccoons. */
  raccoons: string[];
  /** "Squirrel removal in {name}", linking to /wildlife/squirrels. */
  squirrels: string[];
  /** "Skunk, bird and bat removal in {name}", one combined section linking to each page. */
  otherWildlife: string[];
  /** Two city-specific questions, shown after the six featured FAQs. */
  faqs: CityFaq[];
  /** Neighbouring city slugs. Linked once their pages exist, named until then. */
  nearby: string[];
  /** Listed in the footer (the first three cities built). */
  featured?: boolean;
}

export type WildlifeCategory = "species" | "situation";

/**
 * A page-specific "we don't just remove the animal" section. Written fresh
 * for each page rather than shared, and always followed by the lifetime
 * guarantee (GUARANTEE.full) and a link to /wildlife/damage-repair.
 */
export interface RepairSection {
  heading: string;
  paragraphs: string[];
  /** Anchor text for the link to the damage repair page — varied per page. */
  linkLabel: string;
  /**
   * `false` leaves out the lifetime-guarantee box (owner, Oct 22 2026): the
   * guarantee is for the entry points we seal, so it stays off pages about
   * work that seals nothing as its own job (raccoon feces cleanup).
   */
  guarantee?: boolean;
}

export interface WildlifeEntry {
  slug: string;
  category: WildlifeCategory;
  /** Plural display name, e.g. "Raccoons" or "Something in the Attic" — used on cards and in navigation */
  name: string;
  /** Singular form, e.g. "Raccoon" — used mid-sentence */
  singular: string;
  /** Page <title>, before the site-wide " | Good Neighbors Wildlife" suffix. Names the animal or problem and Toronto. */
  seoTitle: string;
  /** On-page H1. Names the animal or problem and Toronto. */
  heading: string;
  /** Meta description (aim for 150–160 characters). */
  metaDescription: string;
  /** One-sentence summary for cards/listings */
  summary: string;
  /** Longer intro paragraph for the detail page */
  intro: string;
  commonSigns: string[];
  commonAreas: string[];
  /** Short paragraph on the humane approach for this situation */
  approach: string;
  /** Overrides the default "During the visit" line, for animals where the roofline doesn't apply. */
  visitNote?: string;
  /** Shown after `approach`: where to read on when the animal is in the attic or a wall. May carry [label](/path) links. */
  relatedNote?: string;
  iconId: IllustrationId;
  /** Species-specific real photo, overriding the shared REAL_PHOTOS["detail"] default for this entry only */
  photoOverride?: string;
  /** Describes photoOverride for search engines and screen readers. */
  photoAlt?: string;
  /** Sealing + damage repair section for this page, when the page carries one. */
  repair?: RepairSection;
  /** Show the guarantee, insurance and 24/7 lines under the hero buttons, as the homepage and city pages do. */
  trustRow?: boolean;
  /** Situation pages only: leave the page off the /wildlife index's "where, not what" cards; it is reached through links and the sitemap. */
  unlisted?: boolean;
  /** Structured-data service type, when the default ("<Animal> removal" or "Wildlife removal") would not describe the page. */
  serviceType?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Optional internal link shown after the answer (not part of the FAQ structured data). */
  link?: { href: string; label: string };
  /** Show on homepage FAQ preview */
  featured?: boolean;
  /** Answer assumes same-day/active service — suppress on coming-soon market pages */
  sameDaySpecific?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

/** A typed photography placeholder slot — see lib/data/photography.ts for the full shoot brief. */
export type PhotoSlotId =
  | "arrival"
  | "inspection"
  | "conversation"
  | "crew"
  | "vehicle"
  | "detail"
  | "streetscape"
  | "team-portrait";

export interface PhotoSlot {
  id: PhotoSlotId;
  /** Short shot-list label, e.g. "Arrival" */
  label: string;
  /** Art-direction description for the eventual photo shoot */
  brief: string;
}

/** Identifiers for the hand-built line-art illustration system (see components/illustrations). */
export type IllustrationId =
  | "raccoon"
  | "squirrel"
  | "skunk"
  | "bird"
  | "bat"
  | "attic"
  | "wall"
  | "roofline"
  | "soffit-vent"
  | "inspection"
  | "shield-home"
  | "phone-call"
  | "mail"
  | "camera"
  | "compass";
