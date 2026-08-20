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
  /** 24-hour local cutoff, e.g. 16 for 4:00 PM */
  cutoffHour: number;
  /** Human label for the cutoff, e.g. "4 PM" */
  cutoffLabel: string;
  /** Short phrase used in "Humane. Local. {phrase}." when enabled */
  headlinePhrase: string;
  /** Short phrase used in "Humane. Local. {phrase}." when disabled */
  fallbackHeadlinePhrase: string;
  /** Fuller qualification sentence shown near CTAs when enabled */
  qualificationMessage: string;
  /** Fuller message shown near CTAs when disabled */
  disabledMessage: string;
}

export type MarketStatus = "active" | "coming-soon";

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
}

export type WildlifeCategory = "species" | "situation";

export interface WildlifeEntry {
  slug: string;
  category: WildlifeCategory;
  /** Plural display name, e.g. "Raccoons" or "Wildlife in the Attic" */
  name: string;
  /** Singular form, e.g. "Raccoon" — used mid-sentence */
  singular: string;
  /** One-sentence summary for cards/listings */
  summary: string;
  /** Longer intro paragraph for the detail page */
  intro: string;
  commonSigns: string[];
  commonAreas: string[];
  /** Short paragraph on the humane approach for this situation */
  approach: string;
  iconId: IllustrationId;
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Show on homepage FAQ preview */
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
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
  | "camera"
  | "compass";
