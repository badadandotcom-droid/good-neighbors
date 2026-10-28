# Review: the November special test page, /november-special (Oct 28 2026, GNW Website 14, on Fable 5.1)

WAITING FOR THE OWNER'S "approved". Built on the session branch `claude/gnw-website-14` on top of the live branch at 801d5a5. Goes live Nov 1, not before (the live branch is fast-forwarded that morning); taken down Dec 1.

## What was built
- New page **/november-special** (`app/november-special/page.tsx`, copy in `lib/data/november-special.ts`): the one page on the site with a price, for the ads chat's November test ad (ADS 35's brief of Oct 28, 1:10 AM, followed word for word where it gave words). Title "November Special: $699 + HST per Entry Point" (70 characters with the brand suffix), H1 the same, meta description 160 characters. 1,397 words in the main content, four sections, the lifetime-guarantee box, a six-step "How a November visit works", eight questions (FAQ schema matches). Figures on the page: $699, $850 and the $5 million insurance line, nothing else.
- Reached from the ad only: not in the menus, not on the /wildlife index, not in the sitemap, `noindex, follow` (out of Google's index, its links still count).
- Phone hero order: kicker "November 2026", H1, the price line and the "Additional entry points" line directly under it, the guarantee line, the Call button, "A real person answers 24/7." and the rating line, Get Help Now, insurance, then the two intro sentences. Trust row from `sm` up as on every landing page.
- Checks changed: `scripts/checks/crawl.mjs` now crawls `EXTRA_PATHS` (this page) on top of the sitemap and allows exactly $699 and $850 on this one page (the dollar-figure ban stays on every other page; the handoff's guess that a figure would pass was wrong: the ban rejects any dollar figure except $5 million). `scripts/checks/firstscreen.mjs` lists the page (33 landing pages). README updated.
- Not touched: every other page (the compare shows only the new page), the menus, the sitemap, CLAUDE.md (its landing-page list gets the page after approval, in the same push).

## Judgment calls (the owner strikes any)
1. **noindex and out of the sitemap** (recommended in the handoff; Oct 28, 2:27 AM I recommended it in chat, no answer yet). Google Ads does not need the page indexed, and a "November Special" page in Google in December reads badly. `follow` is left on so the page's links to the attic, raccoon and squirrel pages count.
2. **A static route, not a wildlife entry**: it is an offer page for any in-house animal, so it lives at /november-special with no "← Wildlife Removal" breadcrumb in the schema beyond "Home › November Special"; the back link at the top still goes to /wildlife.
3. **The H1 is sized one step smaller on phones** (2.125 rem instead of 2.25) so that with the two price lines and the guarantee line, the Call button still sits above the bar at 375 px (button bottom 550 px, bar at 738 px). From `sm` up the H1 is the usual size.
4. **What the first screen carries on a phone**: the H1, both price lines, the guarantee line, the Call button, the 24/7 line and the rating. "Humane removal" and "same-day" are in the two sentences right under them (the second phone screen) and in the title and description. The ads chat's "first screen" list fits on a desktop first screen in full. If you want "same-day, open 24/7" above the Call button on phones too, it means one more line and a smaller H1; say so.
5. **The regular price is named** ("Normally $850"; "The regular price for the same work is $850 plus HST") as the ad does. Both figures come from your pricing rules.
6. **"Mother and young together" and "check for babies first"** are said as on the attic page. Step 3 and the babies FAQ add "In November newborn young are rare; it's usually young of the year still with their mother": raccoons and squirrels in Toronto have spring litters, squirrels sometimes a late-summer second litter, so by November the young are grown or near it. General knowledge, not checked to a source; cut the sentence if you'd rather not say it.
7. **The one-way door is named** in step 4 ("usually with a one-way door over the opening") and the day-after check-in with it. The site only says "one-way door" on the skunk page today; your one-way-door sequence (Oct 19) makes it true for in-house jobs. If some in-house jobs are done another way, "usually" covers it; strike the clause if you'd rather keep the method off the page.
8. **What the special covers, said simply** (owner, Oct 28, 2:57–3:00 AM): the animals out and the opening sealed; "Anything else the job needs is quoted on site, before it's done." The first draft listed what is not included (cleanup, insulation, repair to look as before, a chimney cap) and the owner struck it: he tells people on site, it's obvious. No sentence on the page says how a sealed spot will look. Skunks, dead animals and raccoon droppings are still named as other jobs with links. The $250 additional-entry-point figure is nowhere on the page.
9. **Struck by the owner (Oct 28, 2:57 AM)**: the first draft's "the price is set when you book" promise (a November booking keeping the price into December). Gone from the section and the "When does the special end?" answer, which now says the regular price returns after November 30.
10. **Night visits**: "The special price is for visits between 7 AM and 9 PM. A visit between 9 PM and 7 AM is emergency service; call us for the details and the price." No figure, as everywhere. Your same-night offer (book by 9 PM, we come tonight at the same price) is NOT on the page: the site has never said it and it would be a new public claim; say so if you want it added.
11. **Bats are not named.** The ad says "Raccoons, Squirrels & More"; the page names raccoons, squirrels and birds in vents. A bat job in November has its own timing and the bats page is still a stub, so I left bats out rather than promise the special on them. Say so if bats are covered.
12. **Eight questions** rather than five or six (the handoff's guess): "per entry point", HST, same service as the regular price, babies, night visits, when it ends, will it come back (the exact guarantee wording), insurance. Each is one the ad's reader will have before calling; cut any.
13. **"Why not to wait until December"**: one section on what waiting costs (soiled insulation, a second opening, water at the thaw; raccoon roundworm said once, as on the raccoon page) and why November is the calm month (no litters due). Calm, no scare words.
14. **Same-day wording, fresh**: the intro ("Technicians go out the same day at any hour, a real person answers the phone around the clock"), the process outro ("In November the calls come at every hour, and so do we: the same day, day or night. A visit between 9 PM and 7 AM is emergency service, so call for the details and the price; someone picks up the phone around the clock.") and the night FAQ. No "4 PM", no "subject to availability", no "fastest", "cheapest", "discreet", "licensed", "fully insured".
15. **Structured data**: Service ("Wildlife removal"), breadcrumb and FAQPage, the same three as every landing page. No Offer schema (a price in structured data on a noindex page gains nothing and invites a Google Ads policy reviewer to read the page as a price list).
16. **Dec 1 takedown**: a 302 from /november-special to /wildlife/something-in-the-attic (recommended in chat Oct 28, 2:27 AM; no answer yet), pushed Dec 1. Scheduled checks for Nov 1 (go live, live note) and Dec 1 (take down) are set in this chat once you approve.

## Checks (Oct 28, 2:33–3:05 AM Toronto, re-run after the owner's wording cuts, local production build, cloud machine)
- Typecheck, lint (`npx eslint . --ignore-pattern '.scratch/**'`), build: pass.
- Crawl: 37 pages (36 sitemap pages + /november-special), Problems: none; every title, H1 and description unique; FAQ schema matches the eight rendered questions; `<meta name="robots" content="noindex, follow"/>`; "fastest", "cheapest", "discreet", "licensed", "fully insured", "$250", "$599", "relocat" nowhere on the page; the page is linked from no other page; not in the sitemap.
- Compare against the live branch (801d5a5): only november-special changed (a 404 before); the other 36 pages byte-for-byte unchanged.
- Phone first screen (375 x 812): all 33 landing pages pass; /november-special H1 bottom 311, guarantee 474, Call button 550, bar at 738.
- Screenshots (phone first screen, full phone, full desktop) shown to the owner in chat.
- Not run: Lighthouse (same template weight as the attic page, no new images or scripts); PageSpeed Insights (cloud session; the ads chat runs it after Nov 1). Not checked from here: the live site.

## Every word on the page (rendered from the built page)

# November Special: $699 + HST per Entry Point | Good Neighbors Wildlife
*Meta description (160 chars):* November special: $699 plus HST per entry point, normally $850. Humane removal of any animal in your attic, walls or roof, the hole sealed. Same-day, open 24/7.

November 2026

## H1: November Special: $699 + HST per Entry Point

November special: $699 plus HST per entry point. Normally $850.

Additional entry points found during the job are quoted before they're sealed.

A raccoon, squirrel or bird in the attic, the walls, the roof or a vent: in November, every animal that came in through one opening is removed humanely and that opening is sealed, for one price.

Technicians go out the same day at any hour, a real person answers the phone around the clock, and the price is explained before any work begins.

A real person answers 24/7.

Lifetime guarantee on every entry point we seal.

$5 million liability insurance

A real person answers 24/7.

## What the November special covers

The special is for an animal inside the house: the attic, a wall or ceiling, the roof, a soffit, a chimney or a vent. For $699 plus HST per entry point, we remove every animal that came in through that opening, mother and young together, and we seal the opening it was using. The regular price for the same work is $850 plus HST.

It is the same service we do all year, done to the same standard. We inspect the whole roofline first, check for babies before any removal, get the animals out humanely and from outside wherever we can, and close the way in so nothing gets back through it. The only thing November changes is the price.

### Lifetime guarantee

Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

## What “per entry point” means

An entry point is one opening an animal is using to get in and out: a torn roof vent, a soffit corner pushed up, a gap chewed at the fascia, a chimney with no cap. Most homes have one. Some have two, because a squirrel that found one weak spot along the roofline often found another, or a raccoon pulled open a second vent when the first was blocked.

The special price covers one. If our inspection finds a second opening in use, we tell you before anything is sealed and give you the price for it in plain figures, so you can decide. Nothing is closed up without your yes, and nothing goes on the invoice that you didn't agree to first.

The special is the removal and the seal: the animals out, the opening closed. Anything else the job needs is quoted on site, before it's done.

## The animals it covers

Raccoons are the animal Toronto hears most in November. A raccoon that spent the summer coming and going now wants a warm, dry place for the winter, and a [raccoon in the attic](/wildlife/raccoons) is the job this special was written for. Grey and black [squirrels](/wildlife/squirrels) are the other one: they chew into soffits and roof edges in the fall to build a winter nest, and once in, they stay.

Birds count too. Starlings and sparrows that nested in a dryer, kitchen or bathroom vent during the year leave it packed with nesting material; clearing the vent, removing the birds and screening the opening is one entry point under the special. Our [birds page](/wildlife/birds) explains the difference between a vent and an open ledge or balcony, which is a separate job.

Not sure which animal you have? You don't need to be. The [something in the attic](/wildlife/something-in-the-attic) and [something in the walls](/wildlife/something-in-the-walls) pages match the sounds to the animal, and the technician confirms it on the roof.

A skunk under the deck, a dead animal in a wall and raccoon droppings on a patio are all jobs we do, but they aren't in-house removals, so the special doesn't apply to them; [skunks](/wildlife/skunks), [dead animal removal](/wildlife/dead-animal-removal) and [raccoon feces removal](/wildlife/raccoon-feces-removal) each have a page of their own.

## Why not to wait until December

An animal that moves in during the fall is settling in for the winter, and the cost of waiting climbs with every week: more soiled insulation, a second opening chewed to make a draught-free den, a roof edge that lets water in at the first thaw. Raccoon droppings in an attic can carry raccoon roundworm, so the attic is not a place to go and look.

November is also the calm month. The spring young are grown and no new litters are due until late winter, which makes a removal simpler for the animals and for you. The special runs from November 1 to November 30, 2026.

## How a November visit works

Most in-house removals are done entirely from outside. Here is the sequence, and where the price gets confirmed.

- 01You call, at any hour. We ask what you've heard and where, and we confirm the special: $699 plus HST for one entry point, the animals out and the opening sealed.
- 02A full inspection of the roofline and the openings on the house, to find every entry point and not just the one nearest the noise.
- 03We identify the animal and check for babies first. In November newborn young are rare, but young of the year may still be inside with their mother.
- 04Humane removal from outside, usually with a one-way door over the opening, so the animals leave on their own and can't get back in. We check in with you the next day to hear whether the house has gone quiet.
- 05Once it has, the door comes off and the opening is sealed. Lifetime guarantee on every entry point we seal.
- 06Before we leave we show you what we found, what we did and how the animal got in, and the invoice shows exactly the price you agreed to, plus HST.
In November the calls come at every hour, and so do we: the same day, day or night. A visit between 9 PM and 7 AM is emergency service, so call for the details and the price; someone picks up the phone around the clock.

## Questions about the November special

**Q: What does “per entry point” mean?**
One opening the animal is using to get in and out. The $699 plus HST covers removing every animal that came in through that one opening and sealing it. If the inspection finds a second opening in use, we quote it before it's sealed, and you decide.

**Q: Is HST included in the $699?**
No. Every price we quote is plus HST, and the invoice shows the HST as its own line, so the total is never a surprise.

**Q: Is this the same service as the regular price?**
Yes, exactly the same. The same inspection, the same humane removal, the same seal and the same follow-up. The regular price is $850 plus HST; in November it's $699 plus HST per entry point.

**Q: What if there are babies?**
We check before anything is removed. If young are inside, the removal is done so the mother and her young leave together, and that is part of the special, not an extra. In November newborn young are rare; it's usually young of the year still living with their mother.

**Q: Does the special price apply at night?**
The special price is for visits between 7 AM and 9 PM. A visit between 9 PM and 7 AM is emergency service; call us for the details and the price, and we'll tell you the difference before you decide.

**Q: When does the special end?**
November 30, 2026. After that, in-house removals go back to the regular price of $850 plus HST per entry point.

**Q: Will the animal come back?**
Not through the opening we sealed. Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

**Q: Are you insured?**
Yes. Good Neighbors Wildlife carries $5 million in liability insurance.

Humane. Local. Same-Day Service.

## Let's get your home back to normal.


---

