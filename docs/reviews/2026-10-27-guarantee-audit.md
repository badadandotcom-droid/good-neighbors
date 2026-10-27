# Guarantee audit (GNW Website 11, Oct 27 2026)

Read-only. Nothing on the site changed for this file. The owner's rule (Oct 22 2026): the lifetime guarantee is for animals living in the house and the entry point we seal (a soffit, a hole from outside), so it should not appear beside work that seals nothing. Most pages keep it; a couple lose it. The owner decides below; the website chat changes nothing until he says.

The guarantee appears in five kinds of spot. Every page is checked for all five:
- **Meta** — the page's search snippet ends "Lifetime guarantee on every entry point we seal." (lib/data/wildlife.ts and cities.ts).
- **Row** — the trust row line under the hero buttons (`TrustRow`; `trustRow: "no-guarantee"` turns it off).
- **Step** — a sentence in the "How we remove…" step that seals the opening (species pages).
- **Box** — the dark "Lifetime guarantee" box with the full wording (`RepairSection` or `GuaranteeBlock`; `guarantee: false` turns it off on a repair section).
- **FAQ** — "Will the … come back?" answered with the full wording.

## Page by page

| Page | Spots today | Keep? | Why |
|---|---|---|---|
| / (home) | Row, Box | **Yes** | General: wildlife in the house, sealed and repaired. |
| /contact | Line under the H1 | **Yes** | General (the ads chat's Oct 12 ask). |
| /faq | Two answers ("Is your work guaranteed?" and the sealing answer) | **Yes** | General, exact wording. |
| /wildlife (index) | Two lines (hero, repair strip) | **Yes** | General. |
| /about, /service-areas (index), privacy, thank-you | none | — | Nothing to decide. |
| 4 region hubs | Row, Box | **Yes** | General wildlife-in-the-house pages. |
| 16 city pages | Meta, Row, Box | **Yes** | Same. |
| /wildlife/something-in-the-attic | Row, Step, Box, FAQ | **Yes** | Animal in the attic; the opening is sealed. |
| /wildlife/something-in-the-walls | Row, Box, FAQ | **Yes** | Same, through the roofline, a soffit, a vent or the siding. |
| /wildlife/raccoons | Meta, Row, Step, Box, FAQ | **Yes** | Raccoon in the house; the opening is sealed. |
| /wildlife/squirrels | Meta, Row, Step, Box, FAQ | **Yes** | Same. |
| /wildlife/bats | Meta, Row | **Yes** | Bats in the attic or walls; the gaps are sealed. |
| /wildlife/damage-repair | Row, line + Box in the repair list | **Yes**, one question | The page is the sealing and repair work itself. Question 3 below: its repair list has a "Decks, porches and sheds: ground sealed with wire mesh dug into the soil" entry sitting under the guarantee box. |
| /wildlife/raccoon-feces-removal | none | — | Already off (Oct 22). |
| /wildlife/dead-animal-removal | none | — | Already off (Oct 22). |
| /wildlife/skunks | Meta, Row, Step, Box, FAQ | **Recommend NO** | Question 1 below. |
| /wildlife/birds | Meta, Row, Step, Box, FAQ | **Recommend YES, with one sentence** | Question 2 below. |

## The owner's three calls

### 1. Skunks: lose the guarantee? (recommended: yes, lose it, all five spots)
The skunk never lives in the house. It lives under a deck, porch, shed or front steps, and what we seal is the ground: "wire mesh is fixed along the base and dug into the ground." That is the owner's own description of a job the rule puts outside the guarantee (the rule is for a soffit or a hole from outside, an opening into the house). Today the page says the guarantee five times, and its "Will the skunk come back?" answer promises the full lifetime guarantee on the mesh.

If the owner says no, the change is the same shape as the feces page on Oct 22: meta description without the last sentence; `trustRow: "no-guarantee"`; step 04 without the guarantee sentence; `guarantee: false` on the repair section; the FAQ answer rewritten without the guarantee (for example: "Not into the space we closed off. The mesh runs along the whole base and into the ground, so the skunk has to den somewhere else."). URL, title, H1 unchanged. Every new sentence comes to the owner first.

Ads side, BEFORE the change goes live: /wildlife/skunks is a landing page, and ADS 25 (Oct 26) said a skunk ad group is coming in Postal Codes. If the page loses the guarantee, no skunk ad may claim it (headline, description or sitelink), the same rule as the feces and dead-animal groups. The ads chat has to hear this before the page changes, not after.

If the owner says KEEP (he does guarantee the mesh): nothing changes; the record is this file.

### 2. Birds: keep it, with one sentence? (recommended: keep)
Most of the birds page is openings into the house: starlings and sparrows in vents, soffit gaps and gable vents, a nest in the chimney. Those are sealed (step 04: "We screen the vent, cap the chimney or seal the gap the birds were using") and the guarantee fits them exactly. The exception is pigeons on an open ledge, roof edge or condo balcony, where the usual job is removing the birds and the nest and nothing is sealed; screening a whole balcony is a separate job. A balcony customer who sees "Lifetime guarantee" in the trust row may think it covers the balcony.

Recommended: keep all five spots (the wording itself says "every entry point we seal", which an open ledge is not), and add one sentence to the end of the "Pigeons on a condo or apartment balcony" section so nobody reads it wrong, for example: "The lifetime guarantee is on openings we seal, a screened vent or a capped chimney, not on an open ledge or balcony." The sentence quotes nothing it should not and promises nothing new. The owner may instead say: lose the guarantee on birds entirely (the feces-page shape again), or change nothing.

### 3. Damage repair page: the deck entry
The repair list on /wildlife/damage-repair ends with "Decks, porches and sheds: ground sealed with wire mesh dug into the soil", and the guarantee box sits right under the list. If skunks lose the guarantee (question 1), that entry should not sit under the box as if it were covered: either the entry says "(no lifetime guarantee on ground sealing)" or it moves out of the guaranteed list. If skunks keep it, nothing changes here.

## What stays true for the ads either way
"Lifetime guarantee on every entry point we seal" remains on every landing page except /wildlife/raccoon-feces-removal, /wildlife/dead-animal-removal and, if the owner says so, /wildlife/skunks. The claims list in CLAUDE.md is updated when he decides.

## Checks
Counts come from the Oct 27 local build (the live build after faa24f1): every page's visible text searched for the five spots. Nothing was measured for speed or first screen because nothing changed.

## Addendum: the owner's answers and what was built (Oct 27, 7:13 AM Toronto)
Owner: skunks lose it; birds lose it entirely ("a different scenario"); question 3 follows question 1. Same morning, approved through ADS 27 (7:10 AM): the real Google rating near the Call button, and "Get Help Now" as a plain text link on phones. Built together on `claude/gnw-website-11`, waiting for "approved".

### Every new or changed sentence
Skunks (/wildlife/skunks):
- Meta description (was "…we seal the ground under your deck, porch or shed. Lifetime guarantee on every entry point we seal."): "Humane skunk removal in Toronto. Once the skunk is out, we close off the ground under your deck, porch or shed with wire mesh dug in, so nothing digs back in." (158 characters)
- Trust row: insurance, 24/7 and rating lines; no guarantee line.
- Step 4 of "How we remove skunks": "Once the space is empty, wire mesh is fixed along the base and dug into the ground." (the guarantee sentence after it removed)
- The dark guarantee box under "Skunk removal and ground sealing under decks, porches and sheds": removed.
- "Will the skunk come back?" (was "Not into the space we closed off." + the full guarantee): "Not into the space we closed off. The mesh runs along the whole base of the deck, porch or shed and down into the ground, so there is no opening left to dig back through, and the skunk has to den somewhere else."

Birds (/wildlife/birds):
- Meta description (was "…Eggs and young checked first. Lifetime guarantee on every entry point we seal."): "Pigeon and bird removal in Toronto: roofs, ledges, balconies, vents and chimneys. Eggs and young checked first; vents screened and chimneys capped after." (153 characters)
- Trust row: no guarantee line.
- Step 4 of "How we remove birds": "We screen the vent, cap the chimney or seal the gap the birds were using." (the guarantee sentence after it removed)
- The dark guarantee box under "Bird removal and vent, chimney and soffit repair": removed.
- "Will the birds come back?" (was "Not through the opening we sealed." + the full guarantee): "Not through a vent we screened or a chimney we capped: that way in is closed. An open ledge, roof edge or balcony is different, because nothing is sealed there; the birds and the nest are removed, and screening the whole balcony, when you want it, is a separate job we quote on its own."

Damage repair (/wildlife/damage-repair):
- "Decks, porches and sheds: Ground sealed with wire mesh dug into the soil" removed from the "Repairs we handle" list (it sat right above the guarantee band; a note saying it is not guaranteed would be a guarantee sentence in other words, which the never-paraphrase rule and the crawl check both refuse). The structured-data offer list loses the same entry.
- The skunk card under "Common damage" (was "…we seal the ground along the base of the deck, porch or shed with wire mesh dug into the soil."): "Skunks dig rather than chew. Once the skunk is out, we close off the ground along the base of the deck, porch or shed with wire mesh dug into the soil: a barrier in the ground, not an entry point into the house."

Google rating (homepage and the 30 landing pages with a trust row; not /contact):
- One line, five stars and "5.0 on Google · 4 reviews", linked to /review (opens in a new tab). On phones directly under "A real person answers 24/7." under the Call button; from `sm` up the fourth item in the trust row.
- Judgment call 1: linked to /review, the site's own redirect to the Business Profile review form, because that is the Google review page the site already uses; if the owner would rather it open the listing itself, that URL is needed.
- Judgment call 2: NOT CHECKED FROM HERE. The figures (5.0, 4 reviews) come from the ads chat's note, approved by the owner; Google is blocked from this session, so the website chat could not open the Business Profile to confirm them. The owner or the ads chat should glance at the listing once the line is live.
- Judgment call 3: not put into structured data (Google ignores self-serving aggregate ratings on a LocalBusiness, and marking it up invites a manual action).
- The crawl check now allows exactly this one line and still fails on any other "review" or "rating" wording.

"Get Help Now" on phones (homepage and the 30 landing pages):
- A plain underlined text link under the rating line; from `sm` up the outline button it always was. Same /contact link and the same cta_get_help_now event. The sticky Call Now / Get Help Now bar is unchanged.

### Checks (Oct 27, local build, against the live build faa24f1)
Lint, typecheck, build: clean. Crawl: 36 pages, all 200, no duplicates, Problems: none (an earlier draft with a "not covered by the lifetime guarantee" note on the deck entry failed the exact-wording check, which is why the entry was removed instead). Compare: 31 pages changed (homepage, 20 service-area pages, 10 wildlife pages), 5 unchanged (/contact, /about, /faq, the two indexes, privacy, thank-you). Phone first screen: all 31 landing pages pass (skunks and birds added to the no-guarantee set in `scripts/checks/firstscreen.mjs`). Screenshots at 375 x 812 (Toronto, raccoons, squirrels, skunks, birds, homepage) and 1280 (Toronto) shown to the owner. Not run: Lighthouse (the hero gained one short line and an SVG of five stars; nothing render-blocking).
