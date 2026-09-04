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
export type ConversionEvent = "cta_call";

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
