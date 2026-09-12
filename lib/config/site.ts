import type { Market, PhoneConfig, SameDayServiceConfig } from "@/lib/types";

/**
 * ============================================================================
 * CENTRAL SITE CONFIGURATION
 * ============================================================================
 * This is the single source of truth for brand-wide claims that must never
 * be hard-coded into individual pages or components: contact details, the
 * same-day service promise, and legal/placeholder content.
 *
 * Anything marked `isPlaceholder: true` (or noted PLACEHOLDER in a comment)
 * is fabricated-but-clearly-fake content standing in for real business
 * information. See /PLACEHOLDERS.md at the repo root for the full audit
 * list before launch.
 * ============================================================================
 */

export const BRAND = {
  name: "Good Neighbors",
  legalName: "Good Neighbors Wildlife Inc.", // Confirmed registered legal entity name
  tagline: "Humane. Local. Same-Day Service.",
  taglineFallback: "Humane. Local. Fast Response.",
  foundingRegion: "Southern Ontario, Canada",
  description:
    "Good Neighbors provides humane raccoon, squirrel, bat and bird removal for homeowners in Toronto, York Region, Durham Region and Peel Region.",
  url: "https://www.goodneighborswildlife.ca",
} as const;

/**
 * Default brand phone line — the single GTA number covering the whole
 * active launch territory for now. Individual markets may override this
 * with their own local/tracking number later via `market.phone`.
 */
export const DEFAULT_PHONE: PhoneConfig = {
  display: "416-900-WILD (9453)",
  href: "tel:+14169009453",
  isPlaceholder: false,
};

export const CONTACT = {
  email: "hello@goodneighborswildlife.ca",
  // No physical address is published yet. Good Neighbors is presented as a
  // service-area business rather than a storefront; add a real address
  // here (and to the LocalBusiness schema in lib/seo.ts) only once one exists.
  address: null as null | {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },
  hoursNote: "Phone lines open 7 days a week.", // PLACEHOLDER — confirm real operating hours
  social: {
    instagram: null as string | null, // PLACEHOLDER
    facebook: null as string | null, // PLACEHOLDER
    google: null as string | null, // PLACEHOLDER — Google Business Profile URL
  },
} as const;

/**
 * ----------------------------------------------------------------------------
 * SAME-DAY SERVICE — centrally configurable, never hard-coded elsewhere.
 * ----------------------------------------------------------------------------
 * Toggle `enabled` to false (globally, or per-market via Market.sameDayService)
 * to automatically swap every "Same-Day Service" claim on the site for the
 * fallback "Fast Response" language, and every qualification sentence for
 * the disabled-state message. No page or component should reference the
 * same-day promise directly — always go through getSameDayConfig() /
 * getPositioningLine() in lib/config/same-day.ts.
 */
export const DEFAULT_SAME_DAY_SERVICE: SameDayServiceConfig = {
  enabled: true,
  cutoffHour: 16,
  cutoffLabel: "4 PM",
  headlinePhrase: "Same-Day Service",
  fallbackHeadlinePhrase: "Fast Response",
  qualificationMessage:
    "Same-day service is available for requests received before 4 PM, subject to technician availability.",
  disabledMessage:
    "We respond quickly to every request. Current availability will be confirmed when you contact us.",
};

/**
 * ----------------------------------------------------------------------------
 * ALWAYS-ON-CALL LINE.
 * ----------------------------------------------------------------------------
 * "Calls answered 24/7" means the phone is answered around the clock — it
 * does NOT mean technicians provide 24-hour on-site dispatch, overnight
 * visits, or instant form replies. Same-day *visit* availability is a
 * separate promise (see DEFAULT_SAME_DAY_SERVICE) and stays subject to its
 * own toggle regardless of this flag. `enabled: true` reflects the client's
 * explicit confirmation that phone coverage is actually staffed around the
 * clock — do not flip this back off without an equally explicit instruction.
 */
export const ALWAYS_ON_CALL = {
  enabled: true,
  /** Shown directly under the homepage positioning line when enabled. */
  heroLabel: "Calls answered 24/7.",
  /** Replaces CONTACT.hoursNote on the Contact page when enabled. */
  contactLabel: "Calls answered 24 hours a day, 7 days a week.",
};

/** Placeholder for future analytics/tracking wiring — see lib/analytics.ts */
export const ANALYTICS = {
  /**
   * Good Neighbors' own GA4 property. Do not replace this with the Wasp
   * Problem measurement id — that is a different business sharing this repo.
   */
  gaMeasurementId: "G-MLBBT02NEC" as string | null,
  gtmContainerId: null as string | null, // PLACEHOLDER — GTM container id
  callRailScriptId: null as string | null, // PLACEHOLDER — CallRail swap script id
} as const;

export const PRIMARY_CTA_LABEL = "Get Help Now";

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Wildlife Removal", href: "/wildlife" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/** Used by getPhone()/getSameDayConfig() resolvers in lib/config/resolvers.ts */
export type { Market };
