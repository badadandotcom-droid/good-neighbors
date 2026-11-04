# Review: thicker /wildlife/bats (GNW Website 23, Wed Nov 4, 2026, about 3:40 AM Toronto)

Status: APPROVED by the owner, Wed Nov 4, 2026, 4:59 PM ("y and y": yes to the five method facts below, and yes to keeping the headings built on "bats in the attic", "bat exclusion" and "bat control"). Goes live from branch `claude/gnw-website-23`.

## What changed
- /wildlife/bats moved from the short template (253 words, no FAQ) to the long-form species template (`bats` in `lib/data/species-pages.ts`, about 1,400 words of page copy, 8 FAQ questions with FAQPage schema), plus a sealing-and-repair block with the lifetime-guarantee box (`repair` on the bats entry in `lib/data/wildlife.ts`).
- Unchanged, by the Quality Score gate ([bat removal near me] scores 7): title "Humane Bat Removal in Toronto", H1 "Bat Removal in Toronto", URL, meta description, the hero photo and intro paragraph, the signs and areas lists, the first phone screen (H1, guarantee line, Call button; firstscreen check: H1 242, guarantee 294, call 370, fold 738, pass).
- New headings: Signs of bats in the attic; Bat removal in Toronto and the GTA; Bats in the attic; When bats can be removed in Ontario; Bats and Ontario's wildlife rules; Where bats get into a house; A bat inside the house; How bat exclusion works; Bat exclusion and sealing; Bat removal questions.

## Search research behind the headings
- "bat removal": Semrush Canada 390 a month (claude/marketing-channels-research-notes-2026-10-22.md); "bat removal toronto" and the town versions 50 to 170 (claude/semrush-keyword-negative-research-2026-10-20.md).
- "bats in attic", "bat exclusion", "bat control": NO saved monthly number. They are the live ad groups' own keywords (Bats in Attic: [bats in my attic] QS 5, B/V/A; Bat Removal and the Peel/York/Durham groups: [bat exclusion ...], [bat control ...]; claude/GNW_AUDIT_HANDOFF.md C1). Asked the owner whether to keep them or wait for the ads chat's numbers.

## Facts and their two sources
- Calendar: Ontario MNR species-at-risk page "Bats in buildings: a guide to safe and humane exclusions", Table 1, Ontario (files.ontario.ca/environment-and-energy/species-at-risk/mnr_sar_tx_bat_exclu_enfr.pdf): April to early May one-way doors; mid-May to mid-August no exclusion ("Flightless pups will die if they are separated from their mothers"); late August to November one-way doors; December to end of March seal only once all bats have left, big brown bats may overwinter, winter eviction "would likely result in their death"; ESA authorization may be needed if work may affect a species at risk. Second source: Ontario SPCA, Living with Wildlife: Bats (no exclusion May to August; fall best; one-way doors left several days; seal when certain none remain; gaps as small as half an inch).
- Species: ontario.ca/page/little-brown-myotis (endangered in Ontario since Jan 24, 2013; summer colonies in attics; one young, flies at three weeks; white-nose syndrome). canada.ca, bats in buildings and the emergency listing order (little brown myotis, northern myotis, tri-colored bat endangered; WNS). City of Toronto bats page (three species endangered under SARA; killing, harming or keeping bats is illegal). Big brown bat: MNR guide (overwinters in buildings) and the Tennessee Wildlife Resources Agency species page (most likely bat in man-made structures; nursery colonies in attics and chimneys; hibernates in buildings; twins in early June; flies at 3 to 4 weeks).
- Gap size about a centimetre: Ontario SPCA (half an inch) and Minnesota DNR bat exclusion page (3/8 inch). Entry points: Minnesota DNR (chimneys, vents, loosened siding), City of Toronto (holes, chimney caps), the live page (soffit gaps, behind fascia and siding).
- Bat watch at sunset: MNR guide, Ontario SPCA, Minnesota DNR.
- A bat inside: City of Toronto bats page (don't touch; contact or a bat in a room with a child or an adult who can't say: wash 15 minutes, seek medical attention; 311 connects to Toronto Public Health and Toronto Animal Services; no contact: open a window, let it leave) and the Canadian Wildlife Health Cooperative, Bats and Rabies (never touch a bat bare-handed; wash 15 minutes and call public health; call public health if a bat was in a room with a sleeping person or an unattended child; the bat may be needed for testing). MNR guide (give a stray bat time to leave through an open window).

## For the owner to confirm (business facts, not checked anywhere)
1. Method: a one-way door on each gap the bats use, left on until they've all gone (the page says "usually several days"), then the door comes off and the gap is sealed and repaired.
2. No bat evictions from mid-May to mid-August; work found then is booked for late August.
3. Same-day first visit for bats: confirm it's bats, find the gaps, look for pups.
4. Repairs on bat jobs: soffit, fascia board, roof vent, siding, chimney cap (all on the confirmed list).
5. Not on the page: catching a single loose bat inside the living space. Add a line only if the company does it.

## Checks run (local production build of this branch)
- scripts/checks/crawl.mjs: Problems: none (banned words, exact guarantee wording, FAQPage schema matches the rendered questions, unique titles/H1s/descriptions).
- scripts/checks/compare.mjs, live build vs this branch: 1 page changed (/wildlife/bats).
- scripts/checks/firstscreen.mjs: all pass.
- Sentence-repeat script (78 new sentences against 46 pages): 0 exact repeats, 0 runs of 8 words in common.
- Not run: PageSpeed Insights on the live page (after go-live).
