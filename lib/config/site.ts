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
  legalName: "Good Neighbors Wildlife Services", // PLACEHOLDER — confirm registered legal entity name
  tagline: "Humane. Local. Same-Day Service.",
  taglineFallback: "Humane. Local. Fast Response.",
  foundingRegion: "Southern Ontario, Canada",
  description:
    "Good Neighbors provides humane, professional wildlife removal for homes across Southern Ontario, with same-day service available for requests received before 4 PM.",
  url: "https://www.goodneighbors.example", // PLACEHOLDER — production domain not yet assigned
} as const;

/**
 * Default brand phone line. Individual markets may override this with a
 * local/tracking number via `market.phone`. Numbers use the North American
 * 555 exchange, which is reserved for fictional use and cannot be dialed —
 * this keeps the placeholder unmistakable to anyone editing the codebase
 * while still rendering like a normal phone number in the UI.
 */
export const DEFAULT_PHONE: PhoneConfig = {
  display: "(416) 555-0142",
  href: "tel:+14165550142",
  isPlaceholder: true,
};

export const CONTACT = {
  email: "hello@goodneighbors.example", // PLACEHOLDER — uses the IANA-reserved .example TLD
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

/** Placeholder for future analytics/tracking wiring — see lib/analytics.ts */
export const ANALYTICS = {
  gaMeasurementId: null as string | null, // PLACEHOLDER — GA4 measurement id
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
