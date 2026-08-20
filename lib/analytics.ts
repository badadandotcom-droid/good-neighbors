"use client";

/**
 * Conversion-event tracking hook, wired to a no-op / console-debug sink for
 * now. Every primary CTA and form interaction in the codebase already calls
 * this — once GA4/GTM/CallRail IDs exist (see lib/config/site.ts ANALYTICS),
 * point this function at window.dataLayer.push / fbq / etc. and every call
 * site starts reporting without further changes.
 */
export type ConversionEvent =
  | "cta_get_help_now"
  | "cta_call"
  | "form_start"
  | "form_submit"
  | "form_submit_success"
  | "form_submit_error"
  | "photo_added"
  | "photo_removed";

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
