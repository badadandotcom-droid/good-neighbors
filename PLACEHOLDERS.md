# Placeholder audit

This file is the single checklist of everything in the codebase that is
**fabricated-but-clearly-fake**, standing in for real business information.
Nothing listed here is meant to go live as-is. Search the referenced file
for the exact string to find each spot — most are also centralized so a
single edit propagates everywhere.

## Contact & brand details — `lib/config/site.ts`

| Item | Current placeholder | Notes |
| --- | --- | --- |
| Brand phone | ✅ Real (permanent): `416-900-WILD (9453)` | The permanent Good Neighbors Wildlife number. Display text uses the approved format (vanity spelling plus the digits); `tel:+14169009453` and structured data both resolve to the real digits. One shared number currently covers every active market (see "Markets" below); no market has a `phone` override right now, so they all resolve to `DEFAULT_PHONE` via `getPhone()`. Add a market-specific number later by setting that market's `phone` field — no other file needs to change. |
| Email | ✅ Real: `hello@goodneighborswildlife.ca` | Confirmed by the client. |
| Legal name | ✅ Real: `Good Neighbors Wildlife Inc.` | Confirmed registered legal entity name. Used only in the footer copyright line — every customer-facing "Good Neighbors" / "Good Neighbors Wildlife" mention elsewhere uses the separate trading name and is unaffected. |
| Production domain | ✅ Real: `https://www.goodneighborswildlife.ca` | Confirmed by the client. Used for canonical URLs, sitemap, Open Graph, and JSON-LD. |
| Physical address | Not published | `CONTACT.address` is `null` by design — add a real address object (and wire it into `lib/seo.ts` `localBusinessJsonLd`) only once one exists. |
| Operating hours | ✅ Real: "Calls answered 24 hours a day, 7 days a week." | Live as of the client's confirmation that phone coverage is actually staffed around the clock — see `ALWAYS_ON_CALL` below. Same-day *visit* availability (before the 4 PM cutoff) remains a separate, independently-toggled promise. |
| Social links | `null` (Instagram, Facebook, Google Business Profile) | Not rendered anywhere while null; add real URLs when accounts exist. |

## Same-day service — `lib/config/site.ts` → `DEFAULT_SAME_DAY_SERVICE`

Fully centralized and already accurate to the brief (before-4-PM cutoff,
subject to availability). Nothing fake here — just flag that turning
`enabled: false` (globally or per-market) is untested against real traffic
and should be smoke-tested before relying on it seasonally.

## Always-on-call line — `lib/config/site.ts` → `ALWAYS_ON_CALL`

`ALWAYS_ON_CALL.enabled` is `true` as of the client's explicit confirmation
that phone coverage is actually staffed around the clock. Live copy:
"Calls answered 24/7." directly under the positioning line on the
homepage hero, and "Calls answered 24 hours a day, 7 days a week."
replacing the Contact page hours note. This means human phone answering
around the clock — not 24-hour technician dispatch, overnight visits, or
instant form replies. Same-day *visit* availability stays a separate,
independently-toggled promise (`DEFAULT_SAME_DAY_SERVICE`). Do not flip
`enabled` back to `false` without an equally explicit instruction.

## Analytics & tracking — `lib/config/site.ts` → `ANALYTICS`, `lib/analytics.ts`

- `gaMeasurementId`, `gtmContainerId`, `callRailScriptId` are all `null`.
- `lib/analytics.ts` `trackEvent()` pushes to `window.dataLayer` if present,
  otherwise no-ops (console.debug in dev only). Every primary CTA, phone
  link, and form step already calls it — wiring real GA4/GTM/CallRail is a
  matter of loading their scripts in `app/layout.tsx` and letting this
  function's existing `dataLayer.push` picks it up, or swapping the
  function body.

## Get Help form — `app/api/get-help/route.ts`, `components/forms/GetHelpForm.tsx`

- The route **validates** submissions but does **not deliver or store them
  anywhere** — no email send, no CRM webhook, no CallRail conversion
  event, no database. Rather than report a fake success for a lead nobody
  will receive, a validated submission now returns `503 { ok: false,
  error: "We couldn't send your request. Please try again or call
  416-900-WILD (9453)." }`, and the form surfaces that message with a
  tap-to-call link. Wire real delivery where marked with `TODO(production)`
  in the route handler, then change its response back to `{ ok: true }`.
  Until that's done, **every real submission through this form currently
  fails** — this is the top launch blocker.
- Basic honeypot spam protection is in place (`company` field); no rate
  limiting is implemented yet (would need persistent storage or an edge
  service).

## Photo upload — `components/forms/PhotoUpload.tsx`

The interactive dropzone (selection, drag-and-drop, thumbnail preview) is
still fully built and functional client-side, but as of this pass it is
**no longer wired into the Get Help form** — `components/forms/
GetHelpForm.tsx` no longer imports or renders it, and there's no longer a
standalone numbered "Photos" step. There is no object storage
(S3/Cloudinary/etc.) connected, so rather than let visitors select photos
that go nowhere, a short helper line next to the problem-description field
("Have photos? Mention them in your message...") plus the ground-safety
instruction cover this, with no upload control anywhere in the form. The
FAQ's "Can I send you a photo?" answer matches this — it no longer offers
"text us photos," since SMS/MMS receiving has not been tested. The
`PhotoUpload` component itself is untouched and ready to be wired back in
once real storage exists; re-add the import and a call site in
`GetHelpForm.tsx` and include the resulting URLs (tagged by section) in
the `/api/get-help` payload when ready.

## Legal pages — `app/privacy/page.tsx`, `app/terms/page.tsx`

Both are working drafts in plain language, clearly flagged inline as
**pending legal review**, and marked `noIndex` in metadata so they aren't
indexed while still drafts. They cover current, real data practices (what
the Get Help form collects) but do not include finalized retention
periods, service agreements, liability terms, or cancellation policies.
Do not rely on these in production without legal sign-off.

## Photography — `components/shared/PhotoPlaceholder.tsx`

No production photography exists yet. Every photo spot on the site uses a
hand-built, brand-colored placeholder panel (gradient + subtle texture +
line-art mark + a visible "Photography placeholder — [description]"
caption) rather than a plain gray box or (worse) improperly sourced stock
imagery. Search for `<PhotoPlaceholder` across `app/` and `components/` to
find every spot that expects a real photo, and use each caption as the
art-direction brief for that shoot.

## Trust signals — intentionally absent

No reviews, star ratings, testimonials, "homes serviced" counts, years in
business, awards, certifications, or insurance claims appear anywhere on
the site. Good Neighbors is a new brand — none of that exists yet. Do not
add placeholder versions of these; add them for real once they exist. The
component system has no dedicated "testimonial" or "review" component for
exactly this reason.

## Markets — `lib/data/markets.ts`

The eight markets included (Toronto, York Region, Durham Region, Peel
Region, Oakville & Burlington, Hamilton, Barrie, Niagara Region) are a
**launch-planning snapshot**, not a locked list. Phone numbers are
placeholders per above.

**Active launch territory (as of this writing): Toronto, York Region,
Durham Region, and Peel Region** — in that order everywhere it's listed
(footer, homepage, About, FAQ, service-area hub). Peel Region's market
page uses the approved heading "Wildlife Removal in Peel Region" via the
optional `Market.heroHeading` override field (falls back to `brandName`
for every other market, so this doesn't affect their pages).

Oakville & Burlington, Hamilton, Barrie, and Niagara Region are all
`status: "hidden"` — fully built, kept as preparatory content, but
excluded from every public surface (hub grid, sitemap, footer, nav) and
404 if visited directly, since publishing them as live or "coming soon"
offerings was explicitly walked back. `status` is what gates everything:
`getActiveMarkets()` (used by the homepage service-area section and the
footer) only returns `"active"` markets; `generateStaticParams` and the
market page's own `notFound()` guard in
`app/service-areas/[slug]/page.tsx` keep hidden markets from being
statically generated or reachable at all.

**To activate a market:** add its real phone number to its `phone` field
(or leave it unset to keep using the shared `DEFAULT_PHONE`), then flip
`status` to `"active"`. That's it — the homepage, footer, nav, service-area
hub, sitemap, and the market's own page all pick it up automatically. No
other file needs to change, and the page never needs to be rebuilt.

## Pricing — intentionally absent

No prices, price ranges, or a price calculator appear anywhere by design
(see brief section 6). `/contact` explicitly tells visitors pricing is
discussed after the situation is understood. Do not add pricing without a
deliberate decision to change the sales model.
