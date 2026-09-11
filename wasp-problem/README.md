# Wasp Problem

Lead-capture site for Wasp Problem (WaspProblem.ca). One job: get a visitor
on the phone — primarily the toll-free branded number, 1-800-800-WASP, with
416-700-4259 as the local secondary line — as fast as possible.

This app is **fully isolated** from the Good Neighbors Wildlife app that
lives at the repo root — separate `package.json`, separate `node_modules`,
separate lockfile, no shared imports. It is meant to be deployed as its own
Vercel project.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` config in `app/globals.css`)
- Two self-hosted Google Fonts via `next/font/google` (Archivo for headlines, Manrope for body), no runtime font requests. Client components are small and
  targeted — click-tracking on phone/text links (`components/PhoneLink.tsx`,
  `components/TextLink.tsx`, `components/StickyCallBar.tsx`) plus the
  Google tag. The FAQ accordion is a native `<details>` — no JS.

## Getting started

```bash
cd wasp-problem
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # ESLint
```

## Editing content

Editorial facts (phone numbers, domain, service-area list, same-day
messaging, the 90-day guarantee) live in `lib/site.ts`. Pricing lives in
`lib/pricing.ts`. Real customer reviews/photos go in `lib/testimonials.ts`
(empty by default — `components/TrustSection.tsx` renders nothing until real
data is added there; never fabricate content in that file). Homepage copy is
in `app/page.tsx`; city-page copy is data-driven from `lib/locations.ts`
through `components/CityPage.tsx`. There's intentionally no CMS or database.

## Analytics / lead tracking

GA4 / Google Ads conversion tracking is wired up via the Google tag
(`gtag.js`), loaded in `app/layout.tsx` through `@next/third-parties`'
`<GoogleAnalytics>` component. The measurement ID lives in one place:
`GA_MEASUREMENT_ID` in `lib/site.ts`.

`lib/analytics.ts` exports `trackEvent`, which every phone link already
calls on click — it calls `window.gtag("event", ...)` once the tag above is
loaded, so phone-click conversions (`cta_call`) report automatically. No
per-call-site changes needed.

Phone-click and text-click conversions are tracked as separate event types
(`cta_call` / `cta_text`, see `ConversionEvent` in `lib/analytics.ts`), each
carrying which number was used. True connected-call or booked-job
attribution needs CallRail or a similar dynamic-number-insertion service,
which isn't wired up — that would mean swapping `PHONE_TOLLFREE`/
`PHONE_LOCAL` in `lib/site.ts` for CallRail's tracking numbers and pointing
`trackEvent`'s body at CallRail's JS API, and requires a real CallRail
account (can't be stubbed in).

## Deploying as a separate Vercel project

Do this once, from the Vercel dashboard:

1. **New Project → Import** the `badadandotcom-droid/good-neighbors` GitHub repo.
2. When asked for the **Root Directory**, set it to `wasp-problem`. This is
   the key step that keeps this project's build completely separate from
   the Good Neighbors app at the repo root — Vercel will `cd` into
   `wasp-problem/` and use its own `package.json`/lockfile.
3. Framework preset should auto-detect as **Next.js**. Build command
   `next build`, output is handled automatically — no overrides needed.
4. Deploy. You'll get a `*.vercel.app` preview URL first.
5. **Project Settings → Domains** → add `waspproblem.ca` (and `www.waspproblem.ca`
   if you want the www variant, redirecting to the apex or vice versa —
   your call). Vercel will show the DNS records to add:
   - Either point the domain's nameservers at Vercel, or
   - Add an `A` record for `waspproblem.ca` pointing at Vercel's IP and a
     `CNAME` for `www` pointing at `cname.vercel-dns.com`, per whatever
     Vercel's dashboard shows for your exact case.
6. Once DNS propagates, Vercel issues the SSL certificate automatically.

Because this is a **second, independent Vercel project** pointed at a
subfolder, pushes to this repo only redeploy Good Neighbors' project if
files under its own root change, and only redeploy this project if files
under `wasp-problem/` change (Vercel's default "ignore build if no relevant
changes" behavior, driven by the Root Directory setting) — the two
deployments can't clobber each other.

## Adding a new city landing page

Three exist today (`app/mississauga-wasp-removal`, `app/oakville-wasp-removal`,
`app/burlington-wasp-removal`), each a thin `page.tsx` that reads its data
from `CITY_LOCATIONS` in `lib/locations.ts` and renders `<CityPage />`. To
add another: append an entry to `CITY_LOCATIONS` (hand-write its own
intro copy — don't just swap the city name into an existing entry's
paragraphs) and add a matching `app/<slug>/page.tsx`. The homepage's
`components/ServiceAreaList.tsx` automatically links any city in
`SERVICE_AREAS` (`lib/site.ts`) that has a matching `CITY_LOCATIONS` entry —
no other homepage change needed.
