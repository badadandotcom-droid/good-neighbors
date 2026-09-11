/**
 * Single source of truth for brand/contact facts. Everything else (metadata,
 * JSON-LD, CTAs) reads from here so a phone number, price, or domain only
 * ever needs to change in one place.
 */

export const BRAND = {
  name: "Wasp Problem",
  url: "https://waspproblem.ca",
  description:
    "Professional wasp, hornet and carpenter bee nest removal serving Toronto and the GTA. Same-day service available for visible and hidden nests. Call Wasp Problem at 1-800-800-WASP.",
} as const;

/**
 * The signature branded number — primary CTA everywhere. Never used for the
 * Text Us action (its texting capability isn't confirmed); SMS always goes
 * through PHONE_LOCAL.smsHref instead. The numeric form is kept alongside
 * the letters so desktop visitors aren't stuck translating WASP on a keypad.
 */
export const PHONE_TOLLFREE = {
  display: "1-800-800-WASP",
  numeric: "1-800-800-9277",
  href: "tel:+18008009277",
} as const;

/** Secondary contact — always presented as "local call or text," never as competing equally with the toll-free number. */
export const PHONE_LOCAL = {
  display: "416-700-4259",
  href: "tel:+14167004259",
  smsHref: "sms:+14167004259",
} as const;

export const CONTACT = {
  city: "Toronto, Ontario",
} as const;

/** Cities named in the service-area section and structured data. Presented as one balanced list — no city featured over another. */
export const SERVICE_AREAS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Pickering",
  "Ajax",
  "Whitby",
  "Whitchurch-Stouffville",
] as const;

export const SAME_DAY_SERVICE = {
  headline: "Same-Day Service Available",
  disclaimer: "Based on availability. Call to confirm for your area.",
} as const;

export const GUARANTEE = {
  name: "90-Day Service Guarantee",
  summary:
    "If activity isn't decreasing as expected, or the treated nest becomes active again, within 90 days of treatment, we'll come back and follow up at no additional charge.",
} as const;

/**
 * Google tag (gtag.js) measurement ID for GA4 / Google Ads conversion
 * tracking, loaded in app/layout.tsx via @next/third-parties. Every phone
 * link already calls trackEvent() (see lib/analytics.ts), which calls
 * window.gtag once this is wired up — so adding this ID is the only step
 * needed for phone-click conversions to start reporting.
 */
export const GA_MEASUREMENT_ID = "G-2NETZXNWVG";
