"use client";

/**
 * Conversion-event hook, wired to the Google tag (gtag.js) loaded in
 * app/layout.tsx via @next/third-parties — see GA_MEASUREMENT_ID in
 * lib/site.ts. Every primary CTA and phone link already calls this, so
 * phone-click conversions report to GA4/Google Ads automatically.
 *
 * Calls window.gtag directly (the gtag.js API) rather than pushing a plain
 * object to window.dataLayer — gtag.js only recognizes pushes shaped like
 * its own arguments objects (what gtag() itself pushes), not arbitrary
 * objects, so going through window.gtag is what actually registers a GA4
 * event. Falls back to a no-op (console.debug in dev) if gtag isn't loaded.
 */
/** `lead_form` fires once a request from components/LeadForm.tsx has actually been delivered. */
export type ConversionEvent = "cta_call" | "cta_text" | "lead_form";

/**
 * Parameters every conversion event carries, so GA4 and Google Ads can split
 * the same event by number and by landing page: `phone_number` is the digits of
 * the tapped number (18008009277 or 4167004259; absent on lead_form) and `page`
 * is the path the tap happened on. Register both as event-scoped custom
 * dimensions in GA4 to see them in reports. `location` (which button) stays.
 */
export function eventContext(href?: string): { phone_number?: string; page: string } {
  return {
    ...(href ? { phone_number: href.replace(/\D/g, "") } : {}),
    page: typeof window === "undefined" ? "" : window.location.pathname,
  };
}

type Gtag = (...args: unknown[]) => void;

export function trackEvent(
  event: ConversionEvent,
  meta?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, meta);
    return;
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, meta);
  }
}
