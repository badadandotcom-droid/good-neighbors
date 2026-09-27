"use client";

import { useEffect } from "react";
import { trackAdsConversion, trackEvent } from "@/lib/analytics";
import { ANALYTICS } from "@/lib/config/site";

/**
 * One delegated listener for every `tel:` link on the site — header, footer,
 * buttons, and any added later — so no call site has to remember to wire it.
 *
 * Fires the Google Ads phone-click conversion and a GA4 `phone_click` event,
 * then lets the click carry on untouched: no preventDefault, no redirect
 * callback, so the dialer opens exactly as it would without tracking.
 *
 * Capture phase, so a handler further down that stops propagation can't hide
 * the click from us. A tap is not a completed call; call conversions are
 * tracked separately in Google Ads.
 */
export function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('a[href^="tel:"]')) return;

      trackAdsConversion(ANALYTICS.googleAdsPhoneClickSendTo);
      trackEvent("phone_click");
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
