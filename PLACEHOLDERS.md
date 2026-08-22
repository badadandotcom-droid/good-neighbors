# Placeholder audit

This file is the single checklist of everything in the codebase that is
**fabricated-but-clearly-fake**, standing in for real business information.
Nothing listed here is meant to go live as-is. Search the referenced file
for the exact string to find each spot — most are also centralized so a
single edit propagates everywhere.

## Contact & brand details — `lib/config/site.ts`

| Item | Current placeholder | Notes |
| --- | --- | --- |
| Brand phone | `(416) 555-0142` | Uses the North American `555` exchange, reserved for fiction — cannot be dialed. **Real GTA/CallRail number expected soon** — replace in `DEFAULT_PHONE` and flip `isPlaceholder` to `false`. One shared number currently covers every active market (see "Markets" below); no market has a `phone` override right now, so they all resolve to `DEFAULT_PHONE` via `getPhone()`. Add a market-specific number later by setting that market's `phone` field — no other file needs to change. |
| Email | ✅ Real: `hello@goodneighborswildlife.ca` | Confirmed by the client. |
| Legal name | `Good Neighbors Wildlife Services` | Confirm against the actual registered entity name. |
| Production domain | ✅ Real: `https://www.goodneighborswildlife.ca` | Confirmed by the client. Used for canonical URLs, sitemap, Open Graph, and JSON-LD. |
| Physical address | Not published | `CONTACT.address` is `null` by design — add a real address object (and wire it into `lib/seo.ts` `localBusinessJsonLd`) only once one exists. |
| Operating hours | "Phone lines open 7 days a week." | Confirm actual hours. |
| Social links | `null` (Instagram, Facebook, Google Business Profile) | Not rendered anywhere while null; add real URLs when accounts exist. |

## Same-day service — `lib/config/site.ts` → `DEFAULT_SAME_DAY_SERVICE`

Fully centralized and already accurate to the brief (before-4-PM cutoff,
subject to availability, no 24/7 claim). Nothing fake here — just flag that
turning `enabled: false` (globally or per-market) is untested against real
traffic and should be smoke-tested before relying on it seasonally.

## Analytics & tracking — `lib/config/site.ts` → `ANALYTICS`, `lib/analytics.ts`

- `gaMeasurementId`, `gtmContainerId`, `callRailScriptId` are all `null`.
- `lib/analytics.ts` `trackEvent()` pushes to `window.dataLayer` if present,
  otherwise no-ops (console.debug in dev only). Every primary CTA, phone
  link, and form step already calls it — wiring real GA4/GTM/CallRail is a
  matter of loading their scripts in `app/layout.tsx` and letting this
  function's existing `dataLayer.push` picks it up, or swapping the
  function body.

## Get Help form — `app/api/get-help/route.ts`, `components/forms/GetHelpForm.tsx`

- The route **validates** submissions but does **not deliver them
  anywhere** — no email send, no CRM webhook, no CallRail conversion
  event. A `200 { ok: true }` response means "well-formed," not "received
  by a human." See the `TODO(production)` comment in the route handler.
- Basic honeypot spam protection is in place (`company` field); no rate
  limiting is implemented yet (would need persistent storage or an edge
  service).

## Photo upload — `components/forms/PhotoUpload.tsx`

Selection, drag-and-drop, thumbnail preview, and removal are fully
functional client-side, in two separate instances on the Get Help form:
general evidence photos, and a distinct "can you see where it's getting
in?" entry-point section with a safety warning against climbing to get the
shot. **Files are not uploaded anywhere** — there's no object storage
(S3/Cloudinary/etc.) connected, so photos are intentionally excluded from
the `/api/get-help` submission payload rather than silently failing to
send. The UI tells users this and suggests texting photos instead. Wire
storage + include resulting URLs (tagged by which section they came from)
in the payload when ready.

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

The seven markets included (Toronto, York Region, Durham Region, Oakville
& Burlington, Hamilton, Barrie, Niagara Region) are a **launch-planning
snapshot**, not a locked list. Phone numbers are placeholders per above.

**Active launch territory (as of this writing): Toronto, York Region, and
Durham Region only.** Oakville & Burlington, Hamilton, Barrie, and Niagara
Region are all `status: "coming-soon"` — fully built, but held back from
"currently serving" because Good Neighbors isn't dispatching technicians
there yet. `status` is what gates everything: `getActiveMarkets()` (used
by the homepage "Currently Serving" section and the footer) only returns
`"active"` markets, coming-soon market pages render a "Coming soon" badge
instead of the same-day badge, suppress the same-day FAQ entries, and are
marked `noIndex` (and excluded from `app/sitemap.ts`) so Google never
indexes a page for a market that isn't live.

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
