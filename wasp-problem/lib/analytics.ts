"use client";

/**
 * Conversion-event hook. No-ops (console.debug in dev only) until GA4, Google
 * Ads, or CallRail are wired up in app/layout.tsx — at that point, point this
 * at window.dataLayer.push / gtag / CallRail's queue and every call site
 * below starts reporting without further changes.
 */
export type ConversionEvent = "cta_call";

export function trackEvent(
  event: ConversionEvent,
  meta?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...meta });
    return;
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, meta);
  }
}
