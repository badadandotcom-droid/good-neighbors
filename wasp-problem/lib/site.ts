/**
 * Single source of truth for brand/contact facts. Everything else (metadata,
 * JSON-LD, CTAs) reads from here so the phone number or domain only ever
 * needs to change in one place.
 */

export const BRAND = {
  name: "Wasp Problem",
  url: "https://waspproblem.ca",
  description:
    "Fast, professional wasp, hornet and bee removal across the GTA, with focused service in Mississauga, Oakville and Burlington. Call Wasp Problem at 416-700-4259.",
} as const;

export const PHONE = {
  display: "416-700-4259",
  href: "tel:+14167004259",
} as const;

export const CONTACT = {
  city: "Toronto, Ontario",
} as const;

/** Cities called out by name in copy and structured data. Order matches the brief. */
export const SERVICE_AREAS = [
  "Scarborough",
  "Markham",
  "Pickering",
  "Ajax",
  "North York",
  "East York",
  "Toronto",
  "Etobicoke",
  "Richmond Hill",
  "Vaughan",
  "Whitby",
  "Oshawa",
  "Mississauga",
  "Oakville",
  "Burlington",
] as const;

/**
 * Campaign-priority cities (current Google Ads focus) — called out first and
 * visually emphasized wherever SERVICE_AREAS is rendered, and each has its
 * own landing page (see lib/locations.ts). Still part of SERVICE_AREAS above;
 * this is just which three get top billing right now.
 */
export const FOCUS_SERVICE_AREAS = ["Mississauga", "Oakville", "Burlington"] as const;

const FOCUS_SET = new Set<string>(FOCUS_SERVICE_AREAS);

/** SERVICE_AREAS minus the focus cities — the "also serving" list shown after them. */
export const SECONDARY_SERVICE_AREAS = SERVICE_AREAS.filter((area) => !FOCUS_SET.has(area));

export const SAME_DAY_SERVICE = {
  headline: "Same-Day Service Available",
  disclaimer: "Based on availability. Call to confirm for your area.",
} as const;
