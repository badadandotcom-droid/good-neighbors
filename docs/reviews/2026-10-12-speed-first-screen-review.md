# Speed and phone first screen: review notes for the owner (Oct 12, 2026)

**DONE: approved by the owner Oct 12, 2026 and live the same day (337767a). The four questions at the end are still open for the owner.**

From the ads chat's note of Oct 12, 7:50 AM (Toronto): jobs 1 (speed) and 2 (first phone screen). Job 3 (place names) and the York hub long-form copy are writing work and are not in this batch. No wording on any page changed: the visible text of all 34 pages is identical before and after (checked by comparing the text of every crawled page).

## What changed
**Speed**
- Fonts: the page used to download about 290 KB of fonts before it could show text. Now about 92 KB. (a) Fraunces italic (118 KB) was preloaded on every page but is used on only three (homepage, Wildlife Removal index, region hubs); it now loads only where it is used. (b) Fraunces carried a "softness" axis the site never uses; removed, so the upright file went from 146 KB to 66 KB with no change in how it draws. New file: `lib/fonts.ts`; `app/layout.tsx` and the three pages that use the italic.
- Photos: the nine photo files in `public/images` were lossless PNGs of 2.3–3.0 MB each (22.6 MB in all). Now JPEG, same pixel size, quality 86: 3.1 MB in all. Average difference from the original at the size the page shows it: about 1.3 out of 255 (not visible). This matters most on the live site, where Vercel has to resize each photo the first time anyone asks for it, so a "cold" visit (PageSpeed, or the first visitor after a deploy) waited on a 2.6 MB file. The old PNGs are deleted; the code points at the `.jpg` files. The homepage hero photo is not touched.

**Phone first screen** (class changes only; nothing in the buttons or their tracking)
- On a phone the hero now reads: H1, the guarantee line, the big Call button, Get Help Now, the insurance line, "Calls answered 24/7", then the explanatory text. Before, the explanatory text came first and pushed the buttons and the guarantee line down.
- At tablet and desktop width (640 px and wider) nothing moves. Pages: attic, walls, raccoons, squirrels, birds, bats, skunks (same template as bats), damage repair, the 12 service-area landing pages, and the region hubs. `components/shared/TrustRow.tsx` has an opt-in `mobileOrder` mode for this; the homepage and anything else that uses the trust row is unchanged.

## Measured
Local Lighthouse, mobile, simulated slow 4G and 4x CPU slowdown, production build, median of 3 runs. These are local numbers, not PageSpeed Insights' (see "Not checked").

| Page | Before: score / LCP / TBT | After: score / LCP / TBT |
| --- | --- | --- |
| /wildlife/something-in-the-attic | 88 / 3.8 s / 140 ms | 97 / 2.7 s / 45 ms |
| /wildlife/raccoons | 87 / 3.8 s / 100 ms | 98 / 2.4 s / 56 ms |
| /service-areas/peel-region | 88 / 3.8 s / 95 ms | 97 / 2.6 s / 48 ms |
| /service-areas/scarborough | 88 / 3.8 s / 109 ms | 97 / 2.6 s / 45 ms |
| /service-areas/toronto | not measured | 99 / 2.1 s / 54 ms |
| /service-areas/brampton | not measured | 97 / 2.6 s / 47 ms |

First-screen check at 375 x 812 with the fixed Call Now / Get Help Now bar counted as covering the bottom 74 px: all 19 landing pages other than /contact now show the H1, the guarantee line and the big Call button above it (the lowest is the Call button at y = 530). Before, counted the same way: the guarantee line was clear of the bar on 1 of the 19 (bats), the page's own Call button on 7, and all three together on 1; on the other 12 the Call button was behind the bar (only the bar's own Call Now was visible). /contact is the exception (see question 4).

Desktop and tablet (1280 and 768 px wide), full-page screenshots against the untouched live branch: 22 of 27 pages pixel-identical at 1280, 21 of 27 at 768. The differences: the four hub pages (item 2 below) and a single stray pixel on one or two pages (photo re-encoding).

## Judgment calls (strike any by number)
1. Fonts as above: no visible change (pixel check). Reversible by restoring the old `axes` and `style` lines in `app/layout.tsx`.
2. **Hub tagline.** The italic line near the top of the Toronto, York, Durham and Peel hubs ("Humane, Local, Same-Day Service") is now in the upright serif instead of italic. The italic font was the one remaining font a hub waited for: with it, the Peel hub measured FCP 1.7 s / LCP 3.2 s locally; without it 0.9 s / 2.7 s. It is one line on four pages. To keep the italic: in `components/service-areas/MarketHub.tsx` use `frauncesItalic.className` on that line (the helper is already in `lib/fonts.ts`), at the cost of about half a second of LCP on the hubs.
3. Mobile order: the explanatory text moves below the buttons on a phone. The text is unchanged and still comes first in the page's HTML (only the on-screen order changes on a phone), so crawlers and screen readers read the page as before. Tab order is unaffected (the only focusable items are the back link and the two buttons, in the same order).
4. /contact is not changed. It has no guarantee line (by the earlier rule, it has its own 24/7 and price lines) and no hero buttons (the form is the page). If the ads chat wants the guarantee line on its first screen, it is a one-line addition under the H1; nothing in the form changes. Needs the owner's call.
5. Same-day badge stays above the H1 on the city pages and hubs, so the guarantee line is 3rd on screen there; still well above the fold (the lowest guarantee line is at y = 454 of 738 usable).
6. Photo files renamed from `.png` to `.jpg` (nine files). Anything outside this repo that links to one of the old PNG addresses would break; nothing in the repo does (checked), and the photos are not used in the page metadata or the sitemap.

## Tried and not kept
- Next's `inlineCss` (puts the stylesheet inside each page): measured no better and mostly worse, because Next writes the styles into the page twice and the HTML grew from about 112 KB to 245 KB. Reverted.
- Loading the hub component separately so only hubs pay for the italic font: Next preloads per route, and the hubs and city pages share one, so city pages still got it. Reverted.

## Not touched, on purpose
- Google's tag (GA4 G-MLBBT02NEC and Ads AW-18430229184), the phone-tap and form-lead conversions, `tel:` links, the contact form: untouched (the rule is that these change only on an explicit request). See question 1.

## Not checked
- PageSpeed Insights on the real site. This session cannot reach the live site, and the PageSpeed API refuses requests without a key (its shared free quota is used up). The numbers above are from a local Lighthouse run.
- The Google tag's cost. This session's network blocks googletagmanager.com, so the local runs load no Google tags. The ads chat's PageSpeed run reported about 166 KiB of unused JavaScript and 460–700 ms of blocking time on the attic and raccoon pages; locally, without the tag, blocking time is under 60 ms and unused JavaScript is 29 KiB, so most of what is left on the live site is probably Google's own tag.
- Why the live /wildlife pages scored so much worse than the live /service-areas pages (FCP 3.0 s against 1.0 s). It did not reproduce locally: before the change all four pages scored 80–90 here. The font weight and the 2.6 MB cold-start photos are the likely causes and both are fixed, but only a PageSpeed run after go-live can confirm it.
- Safari, Firefox and real phones. All screenshots and measurements are from Chromium.
- Screen-reader behaviour of the reordered phone layout (reasoned through, not tested).

## Questions for the owner
1. Google's tag: leave it exactly as it is (recommended for now), or load it a moment later so it stops competing with the first paint? The second is a change to tracking, so it is not in this batch. If the live PageSpeed numbers after go-live are still above target, that is the next lever, and it would need testing with Google's Tag Assistant after deploy because this session cannot reach Google.
2. Hub tagline: upright (as built) or keep the italic? (item 2)
3. For measuring the live site myself next time: a free PageSpeed Insights API key (Google Cloud console, needs your login) would let a session run PageSpeed on the live URLs and on a deployed preview. Otherwise the ads chat's manual runs after go-live stand in.
4. /contact: add the guarantee line under its H1, or leave it? (item 4)
