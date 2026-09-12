import Script from "next/script";
import { ANALYTICS } from "@/lib/config/site";

/**
 * Loads gtag.js for the GA4 property in ANALYTICS.gaMeasurementId, or renders
 * nothing when no id is configured.
 *
 * Page views are left to gtag's own behaviour: `config` sends one on load, and
 * GA4's enhanced measurement ("page changes based on browser history events")
 * covers client-side navigation, which the App Router drives through the
 * History API. Firing page_view manually on route change as well would double
 * count every navigation, so deliberately none of that happens here.
 */
export function GoogleAnalytics() {
  const measurementId = ANALYTICS.gaMeasurementId;
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
