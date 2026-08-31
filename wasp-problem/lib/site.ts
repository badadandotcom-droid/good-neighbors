/**
 * Single source of truth for brand/contact facts. Everything else (metadata,
 * JSON-LD, CTAs) reads from here so the phone number or domain only ever
 * needs to change in one place.
 */

export const BRAND = {
  name: "Wasp Problem",
  url: "https://waspproblem.ca",
  description:
    "Wasp nest removal in Toronto and the GTA. Seeing wasps entering your roof, soffit, siding or other part of your home? Call Wasp Problem at 416-700-4259.",
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
] as const;
