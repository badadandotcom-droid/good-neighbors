/**
 * Single source of truth for brand/contact facts. Everything else (metadata,
 * JSON-LD, CTAs) reads from here so a phone number, price, or domain only
 * ever needs to change in one place.
 */

export const BRAND = {
  name: "Wasp Problem",
  // Canonical host. The canonical tag, og:url, og:image, sitemap, robots and schema all read this.
  // www, because that is what Vercel serves (Domains shows www.waspproblem.ca); the share image
  // strips the "www." so the card matches the signs. Change here only, then redeploy.
  url: "https://www.waspproblem.ca",
  description:
    "Wasp nest removal in Toronto and the GTA. Open 24/7, with same-day service based on availability. Call 1-800-800-WASP or text 416-700-4259.",
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

/** Secondary contact — the call-or-text number, never presented as competing equally with the toll-free number. */
export const PHONE_LOCAL = {
  display: "416-700-4259",
  href: "tel:+14167004259",
  smsHref: "sms:+14167004259",
} as const;

export const CONTACT = {
  city: "Toronto, Ontario",
} as const;

/**
 * Cities named in the service-area section and structured data. Presented as
 * one balanced list — no city styled over another. Oakville, Burlington and
 * Brampton are kept but deliberately not featured (owner's call): they sit at
 * the end here and stay out of the city pages' cross-links (see
 * FEATURED in lib/locations.ts). Thornhill is a community split between
 * Vaughan and Markham, not a municipality — still listed on its own because
 * that is what people search.
 */
export const SERVICE_AREAS = [
  "Toronto",
  "Mississauga",
  "Markham",
  "Vaughan",
  "Richmond Hill",
  "Thornhill",
  "Pickering",
  "Ajax",
  "Whitby",
  "Newmarket",
  "Whitchurch-Stouffville",
  "Oakville",
  "Burlington",
  "Brampton",
] as const;

/**
 * Owner-confirmed: PHONE CALLS are answered around the clock, so the site says
 * "Open 24/7 — call". Texts and online requests are not: the owner may not hear
 * them overnight, so never promise a 24/7 or "day or night" reply to either —
 * the vetted wording is "usually within a few hours; overnight, first thing in
 * the morning". 24/7 is also about answering, not arrival — same-day service stays "based on
 * availability" (SAME_DAY_SERVICE) everywhere it appears.
 */
export const AVAILABILITY_24_7 = "Open 24/7 — call us anytime." as const;

export const SAME_DAY_SERVICE = {
  headline: "Same-Day Service Available",
  disclaimer: "Based on availability. Call or text to confirm for your area.",
} as const;

/**
 * Insurance is a real, current policy the owner confirmed. No licence or
 * certification claim appears anywhere on the site — the licence exam is not
 * sat until December, so "licensed" and "certified" stay off until it is.
 */
/** No trailing period: it sits in a list where no other item carries one. */
export const INSURANCE = "Fully insured — $5,000,000 liability coverage" as const;

export const GUARANTEE = {
  name: "90-day service guarantee",
  summary:
    "If wasps return to the nest we treated within 90 days, we come back and deal with it at no additional charge.",
} as const;

/**
 * Google tag (gtag.js) measurement ID for GA4 / Google Ads conversion
 * tracking, loaded in app/layout.tsx via @next/third-parties. Every phone
 * link already calls trackEvent() (see lib/analytics.ts), which calls
 * window.gtag once this is wired up — so adding this ID is the only step
 * needed for phone-click conversions to start reporting.
 */
export const GA_MEASUREMENT_ID = "G-2NETZXNWVG";

/**
 * Share link for the Google Business Profile as a whole — the listing, not any
 * one review. It is what the "See all reviews on Google" button points at.
 *
 * While this is empty the button does not render (see components/TrustSection),
 * exactly as the review strip stays hidden until there are real reviews. Do not
 * substitute an individual review's link or a "write a review" link: the first
 * sends everyone to one customer, and the second asks visitors to write a
 * review rather than read the existing ones.
 */
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/88UEFwzbGr9cp55t9" as const;

/**
 * What a link preview shows when the site URL is sent in a text message or
 * shared (og:title / og:description / twitter:*), kept separate from the page's
 * search <title> and meta description so tuning one never changes the other.
 * Short on purpose: messaging apps cut titles off around 40-60 characters and
 * descriptions after two lines. The brand is carried by og:site_name and the
 * share image (app/opengraph-image.png), the phone number is spelled the way
 * the signs spell it, and nothing here promises a response time. If it did,
 * "same-day" would need "based on availability" beside it.
 */
/**
 * The area the business serves, as one phrase. The link preview (share image,
 * og:title, og:description) is built from it, so expanding to new regions means
 * changing this line and redeploying — the image redraws itself at build time
 * (app/opengraph-image.tsx). Keep it short: it sits on one line of the image.
 * The rest of the site still names Toronto & the GTA directly; see "Expanding
 * beyond the GTA" in AGENTS.md for the full list.
 */
export const SERVICE_REGION = "Toronto & the GTA";

export const SHARE_PREVIEW = {
  title: `Wasp Nest Removal in ${SERVICE_REGION}`,
  description: `Wasp and hornet nest removal across ${SERVICE_REGION}. Upfront pricing, ${GUARANTEE.name}. Call ${PHONE_TOLLFREE.display}.`,
  /** The service line on the share image, above the region. */
  imageService: "Wasp & hornet nest removal",
  imageAlt: `${BRAND.name} — wasp and hornet nest removal in ${SERVICE_REGION}. Call ${PHONE_TOLLFREE.display}.`,
} as const;
