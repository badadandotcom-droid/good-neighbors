# Review: dead animal removal page (GNW Website 10, Oct 22 2026)

New page `/wildlife/dead-animal-removal`, built on the session branch `claude/gnw-website-10` on top of the live branch, waiting for the owner's "approved". Asked for by the owner through the ads chat (Oct 19: "advertise dead animal removal"; Oct 21–22: PRIORITY, a paused Toronto ad group already points at this URL and its ad is disapproved until the page exists).

## What was built
- The page: an unlisted "situation" entry in `lib/data/wildlife.ts` (title, H1, meta description, hero facts, the sealing-and-repair block) and the long-form copy in `lib/data/situations.ts` (six sections, the visit steps, six process steps, eleven questions). It renders on the shared long-form template with the trust row under the hero buttons.
- Not on the /wildlife index and not in the main menu. In the sitemap (automatic for every wildlife entry). One quiet footer link, "Dead Animal Removal", in the Wildlife Removal column after "Damage Repair" (`components/layout/Footer.tsx`).
- One small template addition: the long-form template's three "On arrival / During the visit / Before we leave" lines were written for a live animal ("We confirm the animal activity and check how it's getting in"), so a page can now give its own three lines (`visitSteps` in `lib/data/situations.ts`, used in `components/wildlife/SituationPage.tsx`). Every other page renders as before.
- The page is on the phone first-screen list (`scripts/checks/firstscreen.mjs`) and on the landing-page list in CLAUDE.md, because the ad group already exists.
- Counts: title 47 characters; meta description 158; main text about 1,960 words including the questions (the feces page is 1,463, the raccoon page 1,785). Over the 900 the ads chat asked for; easy cuts are listed under judgment call 15.

## Checks run (no build possible: see below)
- The copy evaluates in Node (so the data files parse), banned-word scan clean (no fully insured, bonded, licensed, reviews, ratings, warranty, prices, "latrine", "odour"), the only guarantee sentence is the owner's exact wording, and the only sentences shared with another page are the five standard lines every page shares on purpose (same-day, 24/7, the guarantee, "we explain the price first", the insurance answer).
- NOT RUN, because the npm registry was unreachable from the cloud session on Oct 22 (DNS failed, the proxy refused the host; retried over several minutes): `npm ci`, lint, typecheck, `npm run build`, the crawl, the compare, the phone first-screen check and local Lighthouse. They run before anything goes live, as soon as the registry comes back. PageSpeed Insights on the live page comes from the ads chat after go-live, as usual.

## Facts checked online (Oct 22 2026)
- City of Toronto, "Enforcement & assistance" (toronto.ca/community-people/animals-pets/enforcement-assistance/): the City removes large dead animals (raccoons, skunks, larger birds) from City property through 311; small animals (squirrels, mice, small birds) are not collected and go in the garbage bagged; it says it assists with dead animals on private property "when owner unknown"; pick-up times vary, sick and injured animals come first; never handle a dead animal bare-handed, wear gloves or double-bag, wash hands.
- City of Toronto, "Bats" (toronto.ca/community-people/animals-pets/wildlife-in-the-city/bats/): never touch a bat, alive or dead; a sick, injured or dead bat is reported to 311 for pick-up and may be sent for rabies testing; direct contact with a person or pet means medical attention and Toronto Public Health; a bat in a room where someone slept means a medical risk assessment.
- Smell: Orkin ("dead animal in walls") and the Internet Center for Wildlife Damage Management (icwdm.org) agree: the smell lasts from days to several weeks, longer for a bigger animal; it is strongest while the body is moist and fades as it dries; flies are a sign; a wall usually has to be opened at the right spot (ICWDM warns against tearing open walls because the spot is easy to miss); gloves and a mask for handling.
- Not checked: the dead-animal rules of the other GTA cities (the page only says each has its own); two animal facts under judgment call 11.

## Owner's facts used (from his Oct 19–21 statements, recorded in the pricing rules)
Dead-animal pickup is a job on its own, outside or inside the house, and nothing is sealed as part of it (no guarantee line, no check-in); a live animal that is stuck, injured or cannot move is our job; a healthy animal just roaming is not; street and road removals are the city's; no smell/odour promises ("no smelly animals; fresh kills are fine"). No prices on the page.

## Judgment calls (strike any)
1. Title and H1 "Dead Animal Removal on Your Property in Toronto": the ads chat's wording from Oct 19 ("on your property", because road removals are the city's), with Toronto as every page has. The ad's pinned headline is "Dead Animal Removal Toronto"; the H1 contains those words in that order with "on your property" between them.
2. Footer link text "Dead Animal Removal", without "sick". The owner's phrase was "sick or dead animal removal"; "sick" in a footer link risks reading as wildlife rescue (the site's rule). Sick, injured and stuck animals are covered in the copy and a question instead (call 13).
3. The trust row under the buttons (the ads chat asked for it; the phone first-screen check needs the guarantee line). Its guarantee line is the company statement about entry points we seal, and the page says plainly that sealing is separate work.
4. The sealing-and-repair block near the foot of the page, with the lifetime-guarantee box every repair block carries. Kept because an animal that died inside the house got in somewhere and the next one will too, and because the guarantee is true of any entry point we seal. The owner's note says pickup alone has no guarantee line; if he would rather this page carried no guarantee box at all, the block comes off (one line of data) and the "Do you seal the way in?" answer loses its second sentence.
5. "Cleaned and disinfected": disinfecting was confirmed for the feces jobs (Oct 20); assumed the spot where an animal died is treated the same way. CONFIRM.
6. Soiled attic insulation comes out with the animal: assumed from the feces job. CONFIRM.
7. Inside a wall or duct: "a small opening cut into the drywall at the right spot" and "closed up afterwards". Assumed we patch the opening we make. CONFIRM; if we leave the patching to the homeowner, the two sentences change to say so.
8. "Removed from your property in a sealed bag": assumed. CONFIRM.
9. "Your property, not the road": Toronto's rule paraphrased from the City's page (large animals on public property through 311; may help on private property; small animals not collected; pick-up times vary); the other GTA cities summed up as "each has its own version". The FAQ answer says "On your property it depends", because the City may assist when the owner is unknown; it would be untrue to say the City never comes onto private property.
10. Smell duration ("a week or so" for a small animal, "several weeks" for a raccoon): the two sources above.
11. Two animal facts stated as common knowledge, not checked against a scientific source: squirrels fall into wall cavities from the attic and cannot climb out; a young raccoon can be left behind when its mother is gone. Both are standard in the wildlife-control trade; strike either if unsure.
12. The bat paragraph and question: from the City's bat page. "We remove bats from the house; we don't test them" is the website chat's wording of what the owner does and does not do; the bat page (/wildlife/bats) is the owner-confirmed source that bats are handled. CONFIRM the testing line.
13. Sick, injured or stuck animal: one paragraph and one question, worded so it does not read as rescue ("We are not a wildlife rescue, so we don't take in or treat animals"). From the owner's Oct 19 statement. "Rescue" and "injured" appear on the page in that sentence only; both are blocked ad negatives, which concerns the ads, not the page.
14. No smell-removal service anywhere, and the word "odour" nowhere on the page (it is a blocked ad negative and the owner does not want that work). The page says the smell fades on its own once the animal is out and the spot is cleaned, which is what the sources say.
15. Length: about 1,960 words with the questions. Easy cuts if the owner wants it nearer 900: the third paragraph of "The smell of a dead animal in the house" (the pet), the third paragraph of "Where dead animals turn up" (repeats the entry-point point made later), the second paragraph of "Why the smell lasts so long" (waiting it out), and the questions "Do you have to cut into the wall?" and "How do you find a dead animal inside a wall?" (both answered in the copy).
16. Icon: the "inspection" illustration (a magnifying glass), because no animal icon fits a page about any dead animal.
17. Raccoon roundworm in the droppings around the spot: the feces page's sources (CDC and public-health pages, checked Oct 20).
18. "A squirrel that was running through the attic at dawn and then stopped, followed by a smell a few days later, is the most common story we hear": a claim about what callers say. CONFIRM or soften to "a common story".
19. The hero's second line calls it a "dead raccoon or squirrel" first because those are the animals the ad group names; chimney, vent, deck, window well, garage and yard are all in the copy.
20. Meta description ends "Your property, not the road. Toronto & GTA." (158 characters).

## Still the owner's
- Confirm calls 5, 6, 7, 8, 12 and 18 (what we actually do on a dead-animal visit).
- Whether the guarantee box stays on this page (call 4).
- The feces page retitle to "Raccoon Poop Removal in Toronto" (the ads chat's suggestion, Oct 21): not done; the owner's call.

## Full text as rendered
**URL:** /wildlife/dead-animal-removal
**Title:** Dead Animal Removal on Your Property in Toronto (shows as "Dead Animal Removal on Your Property in Toronto | Good Neighbors Wildlife")
**Meta description (158 characters):** Dead raccoon or squirrel in the attic, a wall, a vent or under the deck? We find it, remove it and clean the spot. Your property, not the road. Toronto & GTA.

# Dead Animal Removal on Your Property in Toronto

*A dead raccoon or squirrel in the attic, inside a wall, in a vent or under the deck. We find where it died, remove it and clean the spot, on your property in Toronto and across the GTA.*

[Call button] [Get Help Now]

Lifetime guarantee on every entry point we seal. · $5 million liability insurance · Calls answered 24/7

## The smell of a dead animal in the house

It usually starts as a faint, sweetish, rotten smell in one room that you can't trace to the garbage or the drains. Over a day or two it gets stronger, it's worse in the afternoon when the house warms up, and it seems to come from a wall, a ceiling or a vent rather than from anything in the room.

Two other signs often go with it. Flies gather at one window or around one spot, because they have found the animal before you have. And the scratching or scurrying you were hearing a few days ago has gone quiet. A squirrel that was running through the attic at dawn and then stopped, followed by a smell a few days later, is the most common story we hear.

A pet is often the first to notice. A dog or cat that keeps sniffing at one spot on a wall or at the bottom of a vent is usually pointing at the place.

## Where dead animals turn up

Inside a house, the animal is most often a squirrel or a raccoon, and most often in the attic or in a wall. Squirrels fall into wall cavities from the attic and can't climb back out. Raccoons that were living in the attic sometimes die there, especially an old animal or one that was sick, and a young one can be left behind when its mother is gone.

The other places are the chimney, a dryer or bathroom vent and the duct behind it, the space above a garage ceiling, and a crawl space. Outside, a dead animal is found under the deck or shed, in a window well, in the garage or lying in the yard, where it's easy to see but no one wants to pick up.

If a dead animal is inside a wall or a vent, it almost always got into the house through a gap in the roof, the soffit or a vent cover. Finding that gap is part of the job, because the next animal will use it too.

## Why the smell lasts so long

The smell comes from the body breaking down, and it lasts as long as the body stays moist. A small animal in a warm wall may stop smelling in a week or so; a raccoon can take several weeks, and it fades slowly as the body dries out. Warmth makes it stronger and faster, which is why the smell is worst on a warm afternoon or when the heating comes on.

Waiting for it to pass is an option people try. The trouble is that a raccoon takes weeks, the flies keep coming, and the stain and the smell soak into insulation, drywall and framing the longer it stays. Taking the animal out is the only thing that ends it quickly; once it's out and the spot is cleaned, the smell left in the room fades on its own over the following days.

Inside a wall, the animal usually has to be reached through a small opening cut into the drywall at the right spot. We work out where it is first, from the smell, the flies and where it was last heard, so the opening is cut once, in the right place, and not three times along the wall.

## Your property, not the road

A dead animal on a road, a sidewalk or in a park is the city's to pick up. In Toronto, the City collects large dead animals such as raccoons and skunks from public property through 311, and can sometimes help with one lying in the open on private property, though pick-up times vary and small animals such as squirrels are not collected at all. Each city and town in the GTA has its own version of this rule.

What no city service does is come into your house for it. Nobody from 311 will go up into the attic, cut into a wall, reach into a chimney or a dryer vent, crawl under the deck, or clean and disinfect the spot afterwards. That is the part we do: a dead animal on your property, inside the house or out, found, removed and the place it died cleaned up.

## Keep your distance until it's out

Don't handle a dead wild animal with bare hands, and keep children and pets away from it. A raccoon's droppings around the spot can carry roundworm eggs, and any carcass draws flies and then maggots within a day or two in warm weather. Close the room off if the smell is bad, open a window, and leave the wall and the attic alone; there's no need to go up and look.

A dead bat is a special case. Never touch a bat, alive or dead. If a bat is found in a room where someone was sleeping, or there is any chance a person or a pet had contact with it, call 311 or Toronto Public Health before anything else, because the bat may need to be sent for rabies testing. We remove bats from the house; we don't test them.

If the animal is not dead but sick, injured or stuck and unable to move, we can still come and remove it from your property. We are not a wildlife rescue, so we don't take in or treat animals, but we will get it out of your house or your yard.

## After the animal is out

The spot where the animal died is cleaned and disinfected. If it was lying on attic insulation, the soiled insulation comes out with it. Inside a wall, the cavity is cleaned through the opening we made, and the opening is closed up afterwards.

The way in is a separate question. An animal that died in your attic or a wall got in through a gap somewhere, and that gap is still open. Removing the animal doesn't close it; we tell you where it is, and if you'd like, we seal it and repair the damage around it on the same visit. Sealing is covered under [damage repair](/wildlife/damage-repair), and if there are still live animals in the house, [raccoon removal](/wildlife/raccoons) and [squirrel removal](/wildlife/squirrels) explain how they come out first.

## How dead animal removal works

Most of the job is finding the animal. Once we know where it is, getting it out and cleaning the spot is usually done in one visit.

**On arrival** — We find where the animal is from the smell, the flies and where it was last heard, and check how it got in.

**During the visit** — The animal is removed and bagged, and the spot it died in is cleaned and disinfected.

**Before we leave** — We'll explain what we found, what we did, and where the animal got in.

1. We find where the animal is: in the attic, in a wall cavity, in a chimney or vent, or under a deck or shed.
2. If it's inside a wall or a duct, we open the smallest space needed to reach it, in the right place.
3. The animal is removed from your property in a sealed bag.
4. The spot is cleaned and disinfected, and any insulation it was lying on is taken out.
5. The opening we made is closed up again.
6. We show you where the animal got in. Sealing that entry point, with the repair around it, is separate work that we can do on the same visit.

*Same-day service is available for requests received before 4 PM, subject to technician availability. Calls are answered 24 hours a day, 7 days a week.*

## Sealing & repair: After the animal is out: the way it got in

An animal that died inside your attic, a wall or a vent got in somewhere, and that opening is still open. Removing the animal is a job on its own; closing the opening is separate work, and we can do it on the same visit if you'd like.

When we seal an entry point, the damage around it is repaired as well: a torn roof vent, a lifted soffit, chewed fascia or a missing chimney cap, matched to your home's existing materials and colours.

[Sealing and damage repair →]

**Lifetime guarantee** (box): Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

## Questions about dead animal removal

**Isn't dead animal removal the city's job?**

On a road, a sidewalk or in a park, yes: in Toronto you call 311, and other GTA cities have their own service. On your property it depends, and no city crew will go into your attic, open a wall or reach into a vent. That's what we're for.

**How do you find a dead animal inside a wall?**

From the smell, which is strongest closest to the animal, from where flies are gathering, and from where you last heard it moving. Those three usually narrow it down to one section of wall or ceiling, and we open only that spot.

**Do you have to cut into the wall?**

If the animal is inside a wall or a duct, usually yes: a small opening at the right spot is the only way to reach it. We make it as small as possible, clean the cavity through it and close it up afterwards.

**Will the smell go away once the animal is removed?**

Yes. The smell comes from the body, so once it's out and the spot is cleaned and disinfected, what's left in the room fades over the following days. Open the windows when you can; it goes faster with fresh air.

**Is a dead raccoon dangerous to handle?**

It should be handled with gloves and bagged, never picked up bare-handed, and the droppings around it can carry roundworm eggs. Keep children and pets away from it until it's gone.

**What if the dead animal is a bat?**

Don't touch it. If anyone, or a pet, may have had contact with it, or it was found in a room where someone was sleeping, call 311 or Toronto Public Health first, because it may need rabies testing. We'll remove the bat and check how bats are getting into the house.

**What if the animal is still alive but not moving?**

A sick, injured or stuck animal that can't move is still our job. We remove it from your property. We're not a wildlife rescue, so we don't take in or treat animals.

**Do you seal the way the animal got in?**

Removing the animal and sealing the entry point are two separate jobs, and we can do both on the same visit. Every entry point we seal comes with a lifetime guarantee, for as long as you own your home. If an animal gets back in through it, we come back and take care of it at no charge. Full terms are written on your invoice.

**How much does dead animal removal cost?**

It depends on whether the animal is inside the house or outside, and on whether a wall or a duct has to be opened to reach it. We explain the price first, before any work begins.

**Are you insured?**

Yes. Good Neighbors Wildlife carries $5 million in liability insurance.

**How soon can you come?**

Same-day service is available for requests received before 4 PM, subject to technician availability. Calls are answered 24 hours a day, 7 days a week.

## Footer (every page)

Wildlife Removal column, after "Damage Repair": a link "Dead Animal Removal" to /wildlife/dead-animal-removal.

## Signs and areas (data only; this template does not show them on a situation page)

Signs: A smell that gets stronger as the day warms up · Flies gathering at one window or in one room · Scratching or scurrying that stopped a few days ago · A pet that keeps sniffing at one spot on a wall

Areas: Attics · Inside walls · Chimneys · Vents and ducts · Under decks and sheds
