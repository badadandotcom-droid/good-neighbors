# Raccoon feces removal page: review notes for the owner (Oct 20, 2026)

**WAITING for the owner's "approved".** Built in GNW Website 9 on the session branch `ccr-e849fd80-mdl08d`, on top of the live branch (37d76c5). Approve as is, or name the numbers below to strike or change.

Asked for by the ads side (side chat "Semrush negatives 2" and the ads chat, Oct 20): a new page for the "raccoon feces" searches (about 1,300 a month in Canada; "what does raccoon feces look like" 390; "pictures of raccoon feces" 390; "raccoon feces removal" 110; "raccoon latrine removal toronto" 70; "raccoon feces cleanup toronto" 50), plus the trust row on /wildlife/skunks.

## Your answers (Oct 20), now rules in CLAUDE.md
- You disinfect the area after the droppings come out, so the page says so.
- Mainly attics and other spaces inside the house; outside latrines (decks, porch roofs, flat roofs, garage roofs) are cleaned too, as a side note.
- The page goes live with the text first; your own photos are added when you send them (no stock photos).

## What changed
- **New page** /wildlife/raccoon-feces-removal. Title "Raccoon Feces Removal in Toronto & GTA" (the site adds " | Good Neighbors Wildlife"). H1 "Raccoon Feces Removal in Toronto". Meta description (158 characters): "Raccoon feces in the attic? We clean out the droppings and latrine, disinfect the area, replace soiled insulation and seal the opening it used. Toronto & GTA." Normal header and footer, the trust row under the buttons, the long-form layout of the attic and raccoon pages, 10 questions with matching FAQ structured data. In the sitemap. 1,463 words of main content (the crawl's count).
- **/wildlife/raccoons**, "How we remove raccoons", step 5 gets one sentence: "Where the raccoon left droppings, [raccoon feces removal](/wildlife/raccoon-feces-removal) explains the cleanup."
- **/wildlife/something-in-the-attic**, "Attic cleanup, insulation and roof repair", gets one sentence: "If a raccoon has been using the attic as a latrine, [raccoon latrine cleanup](/wildlife/raccoon-feces-removal) explains what's involved."
- **/wildlife/skunks** gets the trust row under its buttons (the guarantee line, "$5 million liability insurance", "Calls answered 24/7."), the same component and wording as the bird and bat pages. URL, title, H1 and everything else unchanged.
- Nothing else changed: every other page is byte-for-byte the same (compare check), the /wildlife index included.

## Checks (Oct 20, local production build)
- Lint and typecheck clean; build OK.
- Crawl of all 35 sitemap pages: all 200, no duplicate titles, H1s or descriptions, **Problems: none** (banned words, exact guarantee wording, FAQ schema matching the 10 questions, phone links).
- Compare against the live build: **3 pages changed** (raccoons, attic, skunks), each exactly as listed above, plus the new page.
- Phone first screen (375 x 812): the new page passes (H1 289, guarantee line 341, Call button 417, fold 738); /wildlife/skunks passes (242, 294, 370, 738). All 30 pages checked pass.
- Local Lighthouse, mobile: the new page scores 97, LCP 2.6 s (the raccoon page, as a control, 2.6 s). /wildlife/skunks before and after the trust row, 7 alternating runs: 97 to 98, LCP 2.53 s to 2.34 s (no cost). PageSpeed Insights not run (a cloud session cannot).
- Shared sentences: every hand-written sentence is new to the site. The only repeats are the standard ones: the guarantee and insurance lines in your exact wording, the trust row, the same-day and 24/7 lines, and the template's three visit steps.

## Judgment calls (strike any by number)
1. The H1 is "Raccoon Feces Removal in Toronto", not the brief's bare "Raccoon Feces Removal": the site's SEO rule says every title and H1 names Toronto (as "Raccoon Removal in Toronto" does). The title adds "& GTA", as the brief allowed.
2. The page is not added to the /wildlife index: the brief said no other page changes, and that index's "Not sure? You know where, not what" section (attic, walls) does not fit a page that names the animal. It is reached through the two new links and the sitemap. Say if you want a card for it there.
3. "Disinfected" is said three times (subhead, step 4, one question), as you confirmed. Public health sources say household disinfectants do not kill roundworm eggs, so the page never says the disinfecting kills them; removing the droppings and the soiled insulation is what takes the eggs away.
4. Attics lead; the outside is one paragraph in "Where raccoon droppings turn up in a house" and one question, as you asked.
5. Size: "a few inches long and about as wide as a nickel". The sources give different sizes (2 to 3 inches; "a dime or nickel" across), so it stays loose on purpose.
6. "In an attic the smell often reaches the rooms below before anyone has seen the droppings": not looked up; it matches the attic page's sign "A new smell in a bedroom or hallway below the attic".
7. Roundworm is explained in plain words and kept calm: "Infection in people is rare, but public health agencies take it seriously". No symptoms, no medical claims, and the one Toronto case (a child, 2005) is left out so the page does not scare.
8. What to do if you find droppings: leave them, keep children and pets away, no bare hands, no vacuum, don't stir up dust, keep the hatch closed. That is the public-health advice, cut to what a homeowner needs before the visit.
9. "Can I clean up raccoon droppings myself?" says public health agencies publish do-it-yourself steps (true), and that an attic latrine is better left to us. Nothing is said about protective equipment our technicians wear (not confirmed by you).
10. "Most of the raccoon latrines we clean up in Toronto and the GTA are in attics" rests on your answer "mainly in attic".
11. No price. The price question ends "We explain the price first, before any work begins.", the ads' claim.
12. Photos: none yet. When you send yours, a "Pictures of raccoon feces" part goes into "What raccoon feces look like" (390 searches a month), which needs a small addition to the page layout then.
13. Structured data names the service "Raccoon feces removal" (a new optional field) rather than the generic "Wildlife removal" the attic and walls pages use.
14. To carry the two links, the process steps and the repair blocks can now show links; every page without a link in those places renders exactly as before (compare check).
15. The template's visit steps ("On arrival", "During the visit", "Before we leave") show on this page as on the raccoon page; "During the visit" says "Removal is handled humanely, with care taken around your roofline and finishes."
16. Easy cuts if you want it shorter: the outside question (the section already says it), the insulation question, and the second paragraph of "The raccoon latrine".

## The new page's text, exactly as it renders
(After it: the "Other wildlife we handle" cards and the closing call box, unchanged from the other pages.)

*Meta description (158 chars):* Raccoon feces in the attic? We clean out the droppings and latrine, disinfect the area, replace soiled insulation and seal the opening it used. Toronto & GTA.

## H1: Raccoon Feces Removal in Toronto

A pile of dark droppings that keeps growing in one corner of the attic usually means a raccoon has made a latrine there. We clean it out, disinfect the area, replace the soiled insulation and seal the way in.

Lifetime guarantee on every entry point we seal.

$5 million liability insurance

Calls answered 24/7.

## What raccoon feces look like

Raccoon feces are dark and tube-shaped, a few inches long and about as wide as a nickel, and they often have seeds or bits of undigested food in them. They smell stronger than dog or cat droppings, and in an attic the smell often reaches the rooms below before anyone has seen the droppings themselves.

What gives raccoon poop away is where it is and how much of it there is. A raccoon goes back to the same spot every time, so instead of a dropping here and there you find a heap in one place, getting bigger week by week. If you're not sure what you're looking at, take a photo from a safe distance; you can attach up to five when you [send us a request](/contact).

## The raccoon latrine: why it's always the same spot

Raccoons don't leave droppings at random. They choose a toilet area and use it night after night, and other raccoons use the same spot, so the droppings pile up in one place. That spot is called a latrine. Outdoors it is often somewhere raised and flat, such as a fallen log, a woodpile or a deck; in a house, it is usually one corner of the attic.

A latrine keeps growing for as long as a raccoon is living there. Cleaning it up while the raccoon is still coming and going lasts one night, which is why the cleanup comes after the raccoon is out and is finished by sealing the way in.

## Where raccoon droppings turn up in a house

Most of the raccoon latrines we clean up in Toronto and the GTA are in attics, on top of the insulation or along the attic floor. Raccoons also leave droppings above a garage and inside a chimney. Wherever a latrine has been, the insulation or material underneath it is soiled as well, so the cleanup takes that out along with the droppings on top.

Outside, raccoons use decks, porch roofs, flat roofs and garage roofs the same way, and we clean those up too. Most of our work, though, is in the attic, where a latrine is out of sight and can go unnoticed for a long time.

## Why raccoon poop needs a careful cleanup

Raccoon droppings can contain the eggs of raccoon roundworm, a parasite common in raccoons. The eggs are far too small to see. They are not infectious when fresh, but after a few weeks in the droppings or the soil they are, and they can last for years, so an old latrine needs the same care as a new one.

Infection in people is rare, but public health agencies take it seriously. The eggs are picked up by accident, by swallowing them from hands, toys or anything else that touched the droppings, so young children and pets are the ones to keep away. It is a careful job, not a quick sweep with a broom.

## If you find raccoon droppings

Leave them where they are and keep children and pets away from the spot. Don't touch them with bare hands, don't vacuum them, and try not to stir up the dust around them. If they're in the attic, keep the hatch closed; there's no need to go up and look.

If a raccoon is still living there, it comes out first, humanely and with any young checked for: [raccoon removal](/wildlife/raccoons) covers the signs, and [noises in the attic](/wildlife/something-in-the-attic) will help you tell a raccoon from a squirrel. Then the cleanup can be done once, properly.

## How raccoon feces removal works

Removing a raccoon latrine from an attic means working inside it, so we take care with the hatch and the rooms below. A visit goes like this.

**On arrival**
We confirm the raccoon activity and check how it's getting in.

**During the visit**
Removal is handled humanely, with care taken around your roofline and finishes.

**Before we leave**
We'll explain what we found, what we did, and how the animal got in.

- 01 We find the latrine and any other droppings, and work out where the raccoon has been getting in.
- 02 If a raccoon is still living there, we check for young first and remove the family humanely before any cleanup starts.
- 03 The droppings come out, together with any insulation and nesting material they have soiled.
- 04 The area is disinfected, and new insulation goes in where the old was taken out.
- 05 The opening the raccoon used is sealed. Lifetime guarantee on every entry point we seal.
- 06 Any damage at the opening is repaired, matched to your home's existing materials and colours.
Same-day service is available for requests received before 4 PM, subject to technician availability. Calls are answered 24 hours a day, 7 days a week.

Sealing & repair

## Cleanup, insulation and repair after a raccoon latrine

A latrine is only half of it. The raccoon got in somewhere, and until that opening is closed it can come back to the same spot.

Once the droppings are out and the area is disinfected, the opening is sealed and the damage around it repaired: a torn roof vent, a lifted soffit, chewed fascia or a missing chimney cap, matched to your home's existing materials and colours.

### Lifetime guarantee

Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

## Questions about raccoon feces and cleanup

**Q: What does raccoon poop look like?**
Dark, tube-shaped and usually in a pile, often with seeds or bits of food in it, and with a stronger smell than a dog's or a cat's. One dropping on its own is hard to tell apart; a heap in the same spot usually points to a raccoon.

**Q: Is raccoon poop dangerous?**
It can contain the eggs of raccoon roundworm, so it should be handled with care. Infection in people is rare, and it happens when the eggs are swallowed, which is why the advice is to keep children and pets away and leave the droppings alone until they're cleaned up.

**Q: Can I clean up raccoon droppings myself?**
Public health agencies publish steps for doing it yourself, with gloves, a mask and care not to raise dust. An attic latrine is harder: the droppings are on and in the insulation, the space is tight and dusty, and the raccoon may still be using it. That kind of cleanup is better left to us.

**Q: Do you disinfect the area?**
Yes. Once the droppings and the soiled insulation are out, the area is disinfected, and new insulation goes in where it's needed.

**Q: Do you replace attic insulation soiled by raccoon feces?**
Yes. Insulation under a latrine, or flattened where the raccoon was living, is removed and replaced, so the attic is back to how it should be.

**Q: Do you clean up raccoon latrines outside?**
Yes, on decks, porch roofs, flat roofs and garage roofs too, though most of the raccoon cleanups we do are in attics.

**Q: Will the raccoon come back to the same spot?**
Raccoons return to a latrine they know, which is why sealing the opening is part of the job. Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

**Q: How much does raccoon feces removal cost?**
It depends on the size of the latrine, how much insulation has to come out and what the raccoon damaged getting in. We explain the price first, before any work begins.

**Q: Are you insured?**
Yes. Good Neighbors Wildlife carries $5 million in liability insurance.

**Q: How soon can you come?**
Same-day service is available for requests received before 4 PM, subject to technician availability. Calls are answered 24 hours a day, 7 days a week, and if a raccoon is still in the attic, getting it out safely comes first.

## Checked online (Oct 20)
Web search summaries only: the CDC site is blocked from a cloud session and pages could not be opened directly, so each fact rests on the search results' summary of the page named.
- Appearance (dark, tubular, stronger smell than dog or cat feces, often undigested seeds or other food): CDC, Raccoon latrines, https://www.cdc.gov/parasites/baylisascaris/raccoon_latrines.html . Size: ICWDM 2 to 3 inches long, https://icwdm.org/identification/inspection/brown-or-black-droppings/ ; "about the same diameter as a dime or nickel", https://www.dshs.texas.gov/sites/default/files/IDCU/health/zoonosis/outdoor/raccoonLatrine.pdf (sources differ).
- Latrines are communal and reused, on raised flat places, decks, porches, rooftops, attics, fireplaces and garages: California Department of Public Health brochure, https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/RaccoonRoundwormRaccoonLatrineBrochure.pdf ; BCCDC, https://www.bccdc.ca/health-info/diseases-conditions/raccoon-roundworm ; chimneys: Purdue extension.
- Roundworm: eggs need 2 to 4 weeks in the environment, can survive for years; young children at highest risk; dogs can be infected: CDC, https://www.cdc.gov/baylisascaris/causes/index.html ; human infection "rare but can be severe": https://www.cdc.gov/baylisascaris/about/index.html (other sources give 1 to 4 weeks, hence "a few weeks").
- Do-it-yourself steps exist (gloves, N95 in attics, light misting, no vacuum): CDC, California, King County, https://kingcounty.gov/en/dept/dph/health-safety/disease-illness/zoonotic-diseases/diseases-by-animal/raccoons/latrine . Household disinfectants do not kill the eggs; heat does: California Department of Public Health (brochure above); CDC, https://www.cdc.gov/baylisascaris/prevention/index.html .
- Soiled insulation removed with the droppings: University of Illinois Extension (summary only).
- Toronto: one child case in 2005, none reported since (City of Toronto staff report, 2015), https://www.toronto.ca/legdocs/mmis/2015/ls/bgrd/backgroundfile-79987.pdf . Not used on the page (judgment call 7).

## Not checked
- PageSpeed Insights and the live site (a cloud session cannot reach them).
- The smell reaching the rooms below (judgment call 6).
- What the sources say word for word: only search summaries were read.
