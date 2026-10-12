"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { ANALYTICS, GOOGLE_TAG_LAZY_PATHS } from "@/lib/config/site";

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
 *
 * The library (the `src` script) loads right after hydration, except on the
 * pages in GOOGLE_TAG_LAZY_PATHS, where it loads after the page has loaded
 * (lib/config/site.ts says why). The init script below always runs right after
 * hydration, so `window.gtag` exists and calls made before the library arrives
 * are queued in dataLayer and sent when it loads. The strategy is read once, for
 * the page the visitor lands on, which is the page that matters for an ad click.
 */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const ids = [ANALYTICS.gaMeasurementId, ANALYTICS.googleAdsId].filter((id): id is string => Boolean(id));
  if (ids.length === 0) return null;

  const libraryStrategy = GOOGLE_TAG_LAZY_PATHS.includes(pathname) ? "lazyOnload" : "afterInteractive";

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy={libraryStrategy} />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
    </>
  );
}
