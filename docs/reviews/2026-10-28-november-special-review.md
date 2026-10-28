# Review: the November special test page, /november-special (Oct 28 2026, GNW Website 14; built on Fable 5.1, cut down on Opus 5.5)

WAITING FOR THE OWNER'S "approved" and his answers to calls 1–3. Branch `claude/gnw-website-14`, on top of the live branch at 801d5a5. Live Nov 1, not before; taken down Dec 1.

## How it got here
- 2:33 AM (Fable): a 1,547-word page from ADS 35's brief of 1:10 AM (price line, "Additional entry points" line, four sections, a six-step visit, nine questions).
- 2:57–3:00 AM, owner's cuts: no "price set when you book" promise, no list of what is not included, nothing about how a sealed spot will look ("I'll tell them the other stuff when I see them").
- 9:22 AM, owner: no "Additional entry points" line ("I quote that when I get there"): "$699, normally $850. And it covers one hole. Period."
- 9:25 AM, ADS 35's note (pasted by the owner): the page says only the price, what it covers, and the Call button (24/7) and the photo/text option as on the other pages; do not add extra entry-point pricing, the regular price, what-if cases, FAQs, guarantee wording, "starting at" or "from".
- 9:35 AM (Opus 5.5): rebuilt to that note, with calls 1–3 below. Every earlier call (one-way door, same-night offer, bats, the FAQ list) is gone with the copy it was about.

## What is on the page now
- Title "November Special: $699 + HST" (the layout adds " | Good Neighbors Wildlife"); H1 the same; meta description 153 characters.
- Under the H1: "Covers removing every animal that got into your home through one entry hole, and sealing that hole."
- The standard landing-page hero, the same components and words as every other landing page: the guarantee line (call 3), the "Call 416-900-WILD (9453)" button, "A real person answers 24/7." and the Google rating line under it, Get Help Now (the photo and text form), "$5 million liability insurance".
- The site's closing band, as on every page ("Humane. Local. Same-Day Service." / "Let's get your home back to normal.", phone and Get Help Now), then the footer.
- 94 words of main content. No sections, no FAQ, no regular price, no $250, no "starting at" or "from".
- Off the menus and the /wildlife index, out of the sitemap, `noindex, follow`.

## Calls for the owner ("approved" takes each as written)
1. **"Normally $850" is off the page**, as the ads chat asked; at 9:22 AM the owner said "$699, normally $850". The ads chat's version is the safer one. Canada's Competition Act allows a "normally $X" claim only if most sales were at $X or more within a reasonable period (usually a year), or $X was offered in good faith for a substantial period (BLG reads the Bureau's guidelines as more than half of the six months before the claim; the Bureau also counts the period right after). October was $599 all month and $850 became the regular price on Oct 16, so "normally $850" would be hard to back up from the months before November. Sources: Competition Bureau, "Ordinary selling price"; BLG, "Discount deception: demystifying ordinary selling price claims" (May 2025). Not legal advice. If the page leaves it off, the ad should too: its headline "Normally $850, Now $699 + HST" and "normally $850" in description 1.
2. **"Every animal", not "one animal"**: the ads chat's line read "Covers removal of one animal from your home and sealing the one entry hole it used." The owner's price covers every animal that came in through that hole, babies included, so the line says "every animal that got into your home through one entry hole". "One animal" would tell a family with a raccoon and her kits that the kits cost extra. "Your home" is kept: the special is for animals inside the house.
3. **The one guarantee line stays** until the owner says otherwise. The ads chat said no guarantee wording, but this line is the standard trust row on every in-house landing page, not added copy; this is exactly the job the guarantee is for (an entry hole into the house, sealed); and the ad as briefed at 1:10 AM claims it ("Lifetime Re-Entry Guarantee" and description 2). To take it off: the trust row shows insurance, 24/7 and the rating only (as on /wildlife/skunks), the page joins `NO_GUARANTEE` in firstscreen.mjs, and the ad must drop its guarantee headline and description.
4. Kept as on every landing page: the 24/7 and rating lines, Get Help Now, insurance, and the closing band. The ads chat asked for the Call button and the photo/text option "same as the other pages"; the closing band's "Humane. Local. Same-Day Service." is the only line on the page that backs the ad's "Same-Day Service, Open 24/7" and "Humane Removal" headlines.
5. `noindex` and out of the sitemap (recommended Oct 28, 2:27 AM): the ads do not need the page indexed, and a dated offer page in Google in December reads badly.
6. Dec 1 takedown: a 302 from /november-special to /wildlife/something-in-the-attic (recommended 2:27 AM), pushed Dec 1.

## Checks (Oct 28, 9:35–9:45 AM Toronto, local production build, cloud machine)
- Typecheck, lint (`npx eslint . --ignore-pattern '.scratch/**'`), build: pass.
- Crawl: 38 pages (the 37 sitemap pages plus /november-special), Problems: none; titles, H1s and descriptions unique; `noindex, follow`; no FAQ schema; none of "cheapest", "fastest", "discreet", "4 PM", "subject to availability", "starting at", "$850", "$250", "licensed", "fully insured" on the page; not linked from any other page; not in the sitemap.
- Compare against the live branch (801d5a5): only /november-special changed (a 404 before); the other 37 pages unchanged.
- Phone first screen (375 x 812): all 33 landing pages pass; /november-special H1 bottom 252 px, guarantee line 390, Call button 466, bar at 738.
- Screenshots (phone and desktop) shown to the owner.
- Check scripts changed for this page: crawl.mjs crawls it by hand (`EXTRA_PATHS`) and allows a price on this page only (`ALLOWED_FIGURES`: $699 and $850); firstscreen.mjs lists it (33 pages); README.
- Not run: Lighthouse (smaller than any landing page, no images); PageSpeed Insights (cloud session; the ads chat runs it after Nov 1). Not checked from here: the live site.

## Every word on the page (rendered from the built page; the 24/7 line shows twice because the phone copy and the desktop copy are both in the HTML, one hidden at each width)

# November Special: $699 + HST | Good Neighbors Wildlife
*Meta description (153 chars):* November special: $699 plus HST. Covers removing every animal that got into your home through one entry hole, and sealing that hole. Calls answered 24/7.

## H1: November Special: $699 + HST

Covers removing every animal that got into your home through one entry hole, and sealing that hole.

A real person answers 24/7.

Lifetime guarantee on every entry point we seal.

$5 million liability insurance

A real person answers 24/7.

Humane. Local. Same-Day Service.

## Let's get your home back to normal.


---

