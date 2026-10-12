# Handoff: far and rich towns job, continuation (Oct 11, 2026, 9:50 PM)

Start here in a NEW chat. This job is recommendation only: make no Google Ads changes, no website changes, and no decisions for Duane.

**Model:** Sonnet (medium) is fine for the lookups in steps 1–2. Fable is only worth it if the results change the verdicts a lot (Duane's rule: Fable for writing and judgment-heavy work).

## Rules for this job

- **Parallel-chat rule:** the ads chat owns claude/sync-log.md and claude/handoff-ads-build-2026-10-11.md. Do NOT edit them.
- **Our doc:** claude/far-towns-plan-2026-10-11.md. It lives in the GNWW Project, and on repo branch claude/far-towns-plan in badadandotcom-droid/good-neighbors.
- **Never merge into the live branch** (claude/good-neighbors-v2-visual-redesign).
- **When done:** update the plan doc in both places, then give Duane the "For the other chat" note as one paste, with nothing else in the paste block.

## Where things stand

- **Done:** Keyword Planner, both ways, month by month. All numbers are in the plan's appendix.
  - Searches that name the town (location = Ontario): zero for almost every far or rich town. Oshawa is about 80 a month. Outside the area, Oakville and Burlington are about 90 and Milton about 60.
  - Plain searches by people in each town (location = the town): Google's floor (about 10 per keyword) everywhere, including Pickering. This can't rank the towns.
  - No Google location target for Kleinburg, Woodbridge, Unionville, Oak Ridges, Lorne Park, Keswick or Sutton.
- **Duane's calls (Oct 11):**
  - Add Oshawa.
  - Free path (Business Profile + website mentions) for the rich towns.
  - Do it the big-advertiser way: far towns are added as locations with a -30% location bid adjustment, not with town keywords. The same discount goes on far towns already planned (Newmarket and Aurora; Caledon optional).
  - Distances from Duane: Pickering about 10 min, Markham close, Newmarket far, Oshawa very far.
  - Base for drive times: **Morningside Ave & Finch Ave E**.

## Next steps (in order)

1. **Drive times**, Google Maps, off-peak, from "Morningside Ave & Finch Ave E, Toronto, ON".
   - Towns: King City, Nobleton, Schomberg, Uxbridge, Port Perry, Oshawa, Bowmanville, Courtice, Newmarket, Aurora, Vaughan (Woodbridge, and Kleinburg), Caledon (Bolton), East Gwillimbury (Holland Landing), Georgina (Keswick), Oakville, Burlington, Milton.
   - Benchmarks: Pickering, Markham, Richmond Hill, Stouffville.
   - Method that worked: in the built-in browser on Duane's Mac, open
     `https://www.google.com/maps/dir/Morningside+Ave+%26+Finch+Ave+E,+Toronto,+ON/<Town>,+ON/`
     then run JavaScript after about 3.5 seconds:
     `(document.body.innerText.match(/(\d+ hr )?\d+ min\s*\n?[\d.,]+ km/g)||[])[0]`
     That gives the fastest route.
   - "Leave now" late in the evening or on a weekend counts as off-peak. Batch several towns per browser_batch call (navigate, then JavaScript).
   - Duane interrupted one long batch; keep batches to 4–6 towns and say in one line what you're doing.
2. **Incomes:** 2021 Census median total income of household (in 2020), Statistics Canada, with two sources agreeing (Duane's rule: a couple of good sources, and if they line up, that's enough).
   - Places: King, Uxbridge, Scugog, Oshawa, Clarington, East Gwillimbury, Georgina, Newmarket, Aurora, Vaughan, Markham, Richmond Hill, Caledon, Oakville, Burlington, Milton, Halton Hills, Bradford West Gwillimbury, Orangeville, plus Toronto and Ontario for comparison.
   - The cloud shell can't reach statcan.gc.ca (proxy blocks it). WebFetch of the census-profile URLs returned "File not found" on Oct 11. Try the regional census bulletins (York Region, Durham Region, Peel Data Centre, Halton) or Wikipedia's tables citing StatCan, or open StatCan in the built-in browser on Duane's Mac.
3. **Fill the table** in the plan doc: the Drive and Income columns. Re-check the verdicts:
   - Does Vaughan belong in the far ring? Compare its drive time with Newmarket's.
   - Are East Gwillimbury and Georgina rich enough to keep on the "later" list?
   - Does any free-path town fail the "homeowners with money" test?
4. **Optional quick checks:**
   - Does Google Ads offer a single "King" township target? (Keyword Planner → location box.)
   - Do Cachet, Mineola, Bridle Path, Hoggs Hollow and Castlemore have targets?
5. **Save:**
   - Update claude/far-towns-plan-2026-10-11.md: change Status from DRAFT to final, and replace "to check" with the numbers.
   - Write it to the Project (Projects tool, project_write with the same path).
   - Commit and push to branch claude/far-towns-plan.
6. **Give Duane the final "For the other chat" note** as one paste. If nothing in the drive or income checks changed the recommendations, the note can say just that plus the new numbers.

## Tools and access that worked on Oct 11

- **Duane's Mac:** linked. Documents and Desktop are granted. The claude/ docs are not on the Mac; they are in the GNWW Project and on GitHub.
- **Google Ads** account 832-908-5494 is signed in, in the built-in browser pane.
  - Keyword Planner plan for this job: "Plan from Oct 11, 2026, 8 PM", planId 1442456987.
  - The bird plan (planId 1442453183) belongs to the ads chat; leave it alone.
- **Keyword Planner tips** (in case of a re-run):
  - Location picker: click the location chip, then the "Remove targeted location" icon. The removal can be done in JavaScript: `document.querySelectorAll('[aria-label^="Remove targeted location"]').forEach(x=>x.click())`.
  - Type the town, then use find "<Town>, Ontario" and click the suggestion by ref. Arrow keys sometimes pick the wrong suggestion (East Gwillimbury picked Mount Albert).
  - Pressing Return with no suggestion saves "All locations"; check the chip afterwards.
  - The month-by-month numbers come from the BatchService/Batch response. The table pages at 100 keywords, so click "Go to the next page" to get the rest.
  - Typing a long keyword list can glitch: check the keyword count afterwards.
- **Repo:** badadandotcom-droid/good-neighbors. Work branch: claude/far-towns-plan, started from claude/docs-snapshot (commit 672088b, read-only snapshot of the ads chat's docs as of 8:45 PM).
