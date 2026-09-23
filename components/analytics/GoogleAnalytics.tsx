import Script from "next/script";
import { ANALYTICS } from "@/lib/config/site";

/**
 * Loads gtag.js once and configures every Google tag id in ANALYTICS (GA4 and
 * Google Ads) against that single load. Google's copy-paste snippet for each
 * product includes its own gtag.js script; pasting both would load the library
 * twice, so the ids share one loader here instead.
 *
 * Page views are left to gtag's own behaviour: `config` sends one on load, and
 * GA4's enhanced measurement ("page changes based on browser history events")
 * covers client-side navigation, which the App Router drives through the
 * History API. Firing page_view manually on route change as well would double
 * count every navigation, so deliberately none of that happens here.
 */
export function GoogleAnalytics() {
  const ids = [ANALYTICS.gaMeasurementId, ANALYTICS.googleAdsId].filter((id): id is string => Boolean(id));
  if (ids.length === 0) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
    </>
  );
}
