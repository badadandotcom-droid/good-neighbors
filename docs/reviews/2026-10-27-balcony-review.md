# Review: the condo balcony page, /wildlife/balcony-pigeons (Oct 27–28 2026, GNW Website 13, on Fable 5.1)

Built on the session branch `claude/gnw-website-13` on top of the live branch at 2516ee3. Nothing is live. The owner approves or strikes the numbered calls below; after "approved" the live branch is fast-forwarded and the ads chat gets the live note.

## What was built
- New page **/wildlife/balcony-pigeons** (entry in `lib/data/wildlife.ts`, long-form copy in `lib/data/situations.ts`, template `SituationPage`). Title "Pigeons on Your Balcony: Removal, Cleanup & Netting in Toronto", H1 "Balcony Pigeon Removal and Netting in Toronto", meta description 159 characters. 2,230 words in the main content, five sections, a six-step "How a balcony visit works", 12 questions (FAQ schema matches).
- `unlisted`: off the /wildlife index, in the sitemap, reached from the ads, the birds page and search. Structured-data service type "Balcony pigeon removal and netting".
- No lifetime guarantee anywhere (`trustRow: "no-guarantee"`, no repair block): the trust row shows insurance, 24/7 and the Google rating. No prices. No photos: the hero is the bird illustration, the owner's own photos come later.
- /wildlife/birds: one sentence added to "Pigeons on a condo or apartment balcony" linking to the new page; the "Will the birds come back?" answer says "netting the whole balcony" (was "screening") and carries a link line "Balcony pigeon removal and netting" under it (a link inside the answer text itself would leak into the FAQ schema, which the crawl check rejects).
- Landing-page lists: `scripts/checks/firstscreen.mjs` (32 pages now, the new one in `NO_GUARANTEE`); CLAUDE.md gets the page and a balcony rule after approval, in the same push.

## The owner's answers used (Oct 27, 11:46 PM)
Cleanup in the same visit: yes. The board: the company deals with it when the customer wants, done the high-level way (what other companies do was looked up: the Toronto netting companies say "we work with boards and comply with building rules" and leave the approval to the resident; one of their own reviewers says a board objected on looks; nobody offers to handle it, so this page goes one step further). Balcony size or height: no limit, priced per job. Method: netting, spikes or wire, depending on the situation.

## Facts checked online and how they are used
1. Pigeons breed in any month; 1–3 eggs (two as a rule); about 18 days to hatch; the young in the nest 25–32 days; up to six broods; nests reused and never cleaned, so the droppings of each brood build up under the next and an old nest holds unhatched eggs and dead nestlings. Source: Cornell Lab of Ornithology, Rock Pigeon life history. Year-round breeding in the city is on the birds page already and is general knowledge; Cornell does not state it in those words.
2. Histoplasmosis: a fungus that grows in old pigeon droppings and is breathed in when dry droppings are disturbed; most infections symptomless or mild; the risk is to weakened immune systems. Netting across the front of a balcony is the barrier Health Canada names for balconies. Source: Health Canada, "Pigeons" (pest control tips). The page names Health Canada twice and says nothing about any other disease.
3. An Ontario condo balcony is an exclusive-use common element: the corporation's property that one unit has the use of, so alterations need the board's approval (a section 98 agreement in the formal case). Source: FirstService Residential's Ontario guide to common elements. The page says "usually common property that your unit has the exclusive use of" and "most buildings ask that netting be approved"; it does not mention section 98.
4. Pigeons, starlings and house sparrows are not protected in Ontario; most other birds and their nests in use are. Already on the birds page (Oct 12 review). Mourning dove and robin named as protected examples: both are covered by the federal Migratory Birds Convention Act.
5. Netting: competitors describe UV-stabilised polyethylene or nylon netting with stainless hardware; low-visibility is the selling point; none states a mesh size or colour. The page says black, "a mesh too small for a pigeon and open enough to see straight through", fixed with anchors and a tensioned cable. NOT CHECKED: the owner's own netting (brand, mesh size, how he fixes it). Judgment call 6.
6. Wetting droppings before lifting them is the standard safe-cleaning advice (worker-safety guidance, several sources); Health Canada's page does not give cleaning advice. The page presents it as "the sensible way", not as Health Canada's.

## Judgment calls (strike any)
1. **URL /wildlife/balcony-pigeons** rather than /pigeons-on-balcony: "balcony" and "pigeon" are in nearly every keyword in the ads chat's list (netting, control, nest removal); "pigeons on balcony" reported no searches.
2. **Title** "Pigeons on Your Balcony: Removal, Cleanup & Netting in Toronto" carries all three ad groups' words. **H1** "Balcony Pigeon Removal and Netting in Toronto" is short enough for the first phone screen (four lines at 375 px).
3. **"The nest comes out, dead birds and chicks with it"** in the subhead, on the first screen: the owner's brief put dead birds and chicks in the package. It is blunt for a hero line; strike it to "The nest comes out, the droppings are cleaned and disinfected..." if it reads too hard.
4. **Live eggs or chicks**: the page says "any live eggs or chicks are dealt with humanely and we explain how before anything is done". The owner did not say what happens to live chicks on a balcony, so the page promises only an explanation. Tell me the practice and it can say it.
5. **Spikes and wire** are named ("stainless-steel spikes or a tensioned wire along the edge") for railings, ledges, lintels and narrow terraces. The owner confirmed spikes and wire as options; "stainless-steel" is the usual product and can be cut to "spikes".
6. **Netting described** as black, mesh too small for a pigeon, see-through, fixed to the slab and walls with small anchors and a tensioned cable, clear of the door. If the owner fixes it differently, this sentence changes.
7. **The board paragraph** promises: a description of the netting, its colour and how it attaches, proof of the $5 million liability insurance, and a call to the management office when the customer prefers. This is the "high level" the owner asked for; it is a service promise, so the office must be ready to do it.
8. **The cleanup never waits for the board**: "the nest and the cleanup don't wait for it: they're done on the first visit, and the netting goes up as soon as the building has said yes." Said in the board section and the first FAQ.
9. **Tenants**: one paragraph says a tenant can call about the nest and cleanup, and the netting is agreed with the unit's owner or the property manager. The owner did not raise tenants; strike it if he does not take tenant calls.
10. **Why a balcony gets chosen** ("a unit that is empty or rented out, the owners travel"): observation, no source; written so it blames nobody.
11. **Droppings "eat into paint, sealed concrete and metal"**: pigeon droppings are acidic and corrode finishes; widely stated by cleaning and pest sources, not checked to a public-health page.
12. **"Health Canada" named twice** on the page (the dust and the netting). Naming the source makes the health paragraph calm rather than scary; cut the second mention if it reads like leaning on them.
13. **The health paragraph** stays at Health Canada's level: one fungus, mild for most, the risk to weakened immune systems. No disease list, no "toxic", no numbers.
14. **No "guarantee"** anywhere, including "Will the pigeons come back?", which says the barrier does the work and is fitted to stay taut. The word does not appear on the page (the crawl check and the first-screen check both treat it as a no-guarantee page).
15. **Same-day wording, fresh**: the process outro ("We're at balconies at any hour of the day; a visit between 9 PM and 7 AM is emergency service, so call for the details and the price, and the phone is answered whenever you ring."), the FAQ "Can you come out today?" and "Do you come at night?" All three are worded differently from every other page. No "4 PM", no "subject to availability", no "How quickly can you get to..." question.
16. **"Pigeons are not a protected bird in Ontario"** said plainly, with mourning dove and robin as the protected examples a balcony might get.
17. **Price FAQ** "How much does balcony pigeon removal cost?" names what the price depends on and says the figure comes before work starts. No number, as everywhere.
18. **The birds page's "Will the birds come back?"** now says "netting the whole balcony" instead of "screening the whole balcony" so the two pages use one word. The balcony section's new sentence links with "pigeons on your balcony".
19. **Rating line and insurance** render from the shared components, the same as every landing page.

## Checks (Oct 28, 00:05–00:20 Toronto, local production build)
- Typecheck clean, lint clean, build OK.
- Crawl: 37 pages (36 before), all 200, unique titles, H1s and descriptions, FAQ schema matches, no banned words, no guarantee sentence anywhere on the new page; Problems: none.
- Compare against the unchanged live build: 1 page changed (/wildlife/birds, the two link lines only), 35 pages byte-for-byte unchanged, plus the new page.
- Phone first screen (375 × 812): all 32 landing pages pass; the new page's H1 ends at 327 px and the Call button at 403 px, above the 738 px bar, the same positions as /wildlife/dead-animal-removal.
- Screenshots at phone and desktop widths looked at: hero, signs band, sections, visit steps, FAQ.
- Not run: Lighthouse (the page is the same template and size class as the dead-animal page, which measured 97 / LCP 2.6 s locally on Oct 22); PageSpeed Insights (a cloud session cannot). Not checked from here: the live site.
- Sources were read on Oct 27–28: Cornell Lab (allaboutbirds, Rock Pigeon life history), Health Canada (canada.ca pest-control tips, Pigeons), FirstService Residential (Ontario condo common elements), pigeoncontroltoronto.ca and vprstoronto.com (netting products and board wording).

## The full text, as rendered
## H1: Balcony Pigeon Removal and Netting in Toronto

Pigeons nesting on a condo or apartment balcony in Toronto. The nest comes out, dead birds and chicks with it, the droppings are cleaned and disinfected, and netting goes up so they don't come back, usually all in one visit.

A real person answers 24/7.

$5 million liability insurance

A real person answers 24/7.

## Signs that pigeons have moved onto your balcony

A pigeon that lands once is passing through. A pair that is there every morning, in the same corner, has chosen your balcony, and the nest is usually already started by the time anyone looks behind the planter.

- The same two pigeons on the railing or the balcony floor every day, and back within minutes of being shooed
- A nest of twigs and straw behind a planter, under a chair or in the corner by the wall
- Droppings collecting on the floor, the railing and the furniture faster than you can clean them
- Cooing early in the morning, and a thin squeaking once there are chicks
- Feathers, down and bits of nesting material blowing against the door
### Where it usually happens

- Condo and apartment balconies
- Covered terraces
- Balcony corners and planters
- Railings and ledges
- Rooftop patios
Pigeons on a roof edge or a ledge, or birds in a vent or chimney? See [bird removal](/wildlife/birds).

## Why pigeons choose a balcony

A pigeon is a cliff bird by nature, and a balcony is the best cliff in the city: a flat floor, a ceiling against the rain, a wall on three sides and a view of every rooftop around it. Once a pair finds one that nobody uses much, with a planter or a stored chair to nest behind, they settle in.

They don't keep to a season. Pigeons breed in every month of the year in Toronto, two eggs at a time as a rule, hatching in about eighteen days, with the young in the nest for four weeks or so before the next clutch is laid in the same spot. A pair can raise five or six broods in a year, so a balcony left to them in spring is well and truly theirs by fall.

The usual reasons a balcony gets chosen are ordinary ones: it belongs to a unit that is empty or rented out, the owners travel, or it is the one balcony on the floor nobody sits on. None of that is a fault. It just means the pigeons were there longer before anyone noticed, and there is more to clean.

## The nest, the eggs and the young

A pigeon nest starts as a loose ring of twigs, straw and whatever is lying about, and a pair reuses it for brood after brood. Pigeons don't clean a nest, so the droppings of each set of young build up under the next, and after a year the nest is a hard, cemented mound rather than a ring of twigs. Unhatched eggs and chicks that didn't survive stay in it too; that is simply how a pigeon nest ages, and we take all of it away, dead birds and chicks included.

Pigeons are not a protected bird in Ontario, so there is no waiting for the young to fly before the nest can go. We still look before we touch anything. The adults are moved on without harm, any live eggs or chicks are dealt with humanely and we explain how before anything is done, and the whole nest, with everything under it, is bagged and carried out of the building. If the bird on your balcony turns out to be something else, a mourning dove or a robin, say, that nest is protected while it is in use, and we'll tell you what can be done and when.

## Cleaning and disinfecting the droppings

Pigeon droppings pile up fast under a nest and along the railing, and they are harder to shift than they look. Wet, they smear into the grooves of the floor and the weave of patio furniture; dry, they set like plaster and eat into paint, sealed concrete and metal. A hose spreads them without removing them, and a dry scrape sends the dust into the air.

That dust is the reason we clean the way we do. Health Canada notes that a fungus can grow in old pigeon droppings and be breathed in when dry droppings are disturbed; most people who breathe in a little feel nothing or have a mild, flu-like illness, and the real risk is to people whose immune systems are weakened. The sensible way to clean a balcony is to wet the droppings down first, lift them, bag them and disinfect the surface afterwards, which is what we do, in the same visit as the nest.

We clean the floor, the railing, the walls behind the nest and whatever was left out there, and disinfect the area once the droppings are gone. Planters, furniture and anything else that can be saved are cleaned; anything that can't is bagged with the rest, with your say-so.

## Netting, spikes or wire: keeping them off

With the nest gone, the pigeons will try to come back, because the balcony is still the same good cliff. What keeps them off depends on the balcony. On most condo balconies the answer is netting across the open front, from the ceiling slab down to the railing or the floor, so there is simply nowhere to land; it's the method Health Canada itself names for balconies. The netting we fit is black, with a mesh too small for a pigeon and open enough to see straight through, and black disappears against the shade of a balcony, from the street and from your sofa, in a way that white or green netting never does.

It's fixed to the slab and the walls with small anchors and a tensioned cable, pulled taut so it doesn't flap or sag, and it stays clear of the door, the railing and the view. You can still open the door, water the plants and sit out there; what you can't do is lean out over the railing, and the pigeons can't get in.

Where netting isn't the right fit, on a railing, a ledge, a lintel or a narrow top-floor terrace, stainless-steel spikes or a tensioned wire along the edge stop the birds landing on the one spot they want. Sometimes it's a mix. We look at the balcony first and tell you which, and why, before anything is ordered.

## Your condo board, and what it sees

In an Ontario condo the balcony is usually common property that your unit has the exclusive use of, so the board has a say in anything fixed to it, and most buildings ask that netting be approved before it goes up. Some buildings already have a standing rule for pigeon netting and know exactly what they'll accept. When a board does turn netting down, it is usually over how it looked from the street, which is why the colour matters.

We take care of that side for you. Before the visit we give you what a board or property manager normally asks for: a short description of the netting and how it attaches, its colour, and proof of our $5 million liability insurance. If you'd rather we spoke to the management office directly, we do that. If your building wants to approve the netting first, the nest and the cleanup don't wait for it: they're done on the first visit, and the netting goes up as soon as the building has said yes.

If you rent, the same applies with your landlord or the property manager in the board's place. A tenant can call us about the nest and the cleanup, and the netting is agreed with whoever owns the unit.

## How a balcony visit works

Everything is done from your balcony, through your unit, and in a single visit when the building allows it. Here is the order of things.

**On arrival**
We look at the balcony, the nest and where the birds land, and check the nest for eggs and young.

**During the visit**
The birds are moved on, the nest and everything in it is bagged, the balcony is cleaned and disinfected, and the netting, spikes or wire go up.

**Before we leave**
We walk you through what we found, what came out and what is keeping the pigeons off.

1. A look at the balcony and the ones beside it, to see where the birds land, where they nest and how they get in.
2. The nest is checked for eggs and young, then the adults are moved on without harm.
3. The nest comes out whole, with the eggs, any chicks that didn't survive and the mound of droppings under it, and leaves through your unit in sealed bags.
4. The floor, railing, walls and furniture are cleaned, the droppings wetted and lifted rather than scraped dry, and the whole area disinfected.
5. Netting is fitted across the open front, or spikes or wire where netting isn't the right fit, taut and clear of the door and the view.
6. Any paperwork the board wants is supplied, before or after, and we speak to the management office if you'd rather we did.
We're at balconies at any hour of the day; a visit between 9 PM and 7 AM is emergency service, so call for the details and the price, and the phone is answered whenever you ring.

## Questions about pigeons on balconies

**Q: Is the cleanup done in the same visit as the nest?**
Yes. The nest, the droppings and the disinfecting are one job on one visit, and in most buildings the netting goes up the same day. The only thing that can split it is a board that wants to approve the netting first; the cleanup still happens on day one.

**Q: Do you deal with the condo board, or do I?**
Either. We give you what the board or property manager asks for, a description of the netting, its colour, how it's fixed and proof of our $5 million liability insurance, and if you'd rather not be the go-between, we contact the management office ourselves.

**Q: Will the netting be visible from inside or from the street?**
Barely. It's black, which vanishes into the shadow of the balcony, and the mesh is open enough to look straight through. From the street a netted balcony looks like any other; from inside you notice it for a day or two and then stop seeing it.

**Q: Can I still use my balcony with netting on it?**
Yes. It's fitted to the slab and the walls, not across the door, so you open the door, step out, sit and water the plants as before. What's gone is the landing strip along the railing.

**Q: My balcony is large, or on a high floor. Is that a problem?**
No. There's no limit on size or height; a wraparound terrace on the fortieth floor is a balcony like any other to us, just a bigger one. Every job is priced on its own, once we've seen it.

**Q: Do you remove dead pigeons and chicks?**
Yes, as part of the nest. An old nest nearly always holds unhatched eggs and chicks that didn't survive, and a dead adult on the balcony floor is picked up with the rest. Everything leaves in sealed bags.

**Q: Are pigeons protected? Can the nest be removed?**
Pigeons are one of the few birds that aren't protected in Ontario, so a pigeon nest can be removed when you call, young or not. Most other birds are protected while the nest is in use; if the bird on your balcony is a mourning dove or a robin, that nest waits until the young have flown, and we'll tell you what to do in the meantime.

**Q: Will the pigeons come back?**
Not onto a balcony they can't land on. The netting, spikes or wire take away the landing spot, which is what they were there for, and a pair that can't land moves on to the next building. A balcony is open to the sky rather than sealed like a vent, so the barrier is what does the work, and we fit it so it stays taut and in place.

**Q: How much does balcony pigeon removal cost?**
It depends on the size of the nest and the cleanup, the size of the balcony and which barrier suits it. We price each job on its own and tell you the figure before any work starts.

**Q: Are you insured?**
Yes. Good Neighbors Wildlife carries $5 million in liability insurance.

**Q: Can you come out today?**
Yes, today, at whatever hour you call. A real person picks up around the clock and settles a time with you before anyone heads out.

**Q: Do you come at night?**
We do. Between 9 PM and 7 AM a visit is emergency service, so call and we'll go through the details and the price with you.

## Other wildlife we handle

Humane. Local. Same-Day Service.

## Let's get your home back to normal.


---

