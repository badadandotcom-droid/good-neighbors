"use client";

/**
 * Conversion-event tracking hook. Every primary CTA and form interaction in
 * the codebase calls this, so the sink is chosen here rather than at the call
 * sites.
 *
 * gtag and GTM take different shapes: gtag.js needs `gtag('event', name,
 * params)`, while GTM reads `dataLayer.push({ event: name, ... })`. gtag also
 * defines window.dataLayer for its own argument queue, so a plain object push
 * would be silently ignored by GA4. gtag is therefore checked first and
 * returns early — exactly one sink fires, never both.
 *
 * Never pass customer names, emails, phone numbers, addresses, or free-text
 * enquiry content in `meta`; these events carry context only (which button,
 * which page area).
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
  const w = window as unknown as {
    gtag?: (command: string, name: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", event, meta);
    return;
  }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...meta });
    return;
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, meta);
  }
}
