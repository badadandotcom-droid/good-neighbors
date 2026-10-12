# Peel hub long-form copy: review notes for the owner (Oct 12, 2026)

**DONE: approved by the owner Oct 12, 2026, without strikes. Live the same morning.**

Page: /service-areas/peel-region. URL, title, H1 and meta description unchanged. Built on the session branch `claude/wildlife-trust-row-deploy-mhc0vy`; live since Oct 12. Approve as is, or name the numbers below to strike or change.

## What changed on the page
- Four new sections between the city cards and the animal grid: "Why Peel has so much wildlife", "Peel, part by part", "Which animal, and where", "How a visit works in Peel".
- Six Peel questions after the seven standard ones (13 in all; the FAQ structured data matches).
- The guarantee, insurance and 24/7 lines under the hero buttons: the same trust row as the homepage and the city pages, which a hub shows once it has long-form copy.
- About 1,160 new words (main content 485 words before, about 1,670 after; the Toronto hub is 1,546). A little over the 1,000 asked for. The easy cuts if it should be shorter: question 5 ("Does it matter whether the house is new or old?") and the "If all you have is a noise" paragraph.
- Every other page is byte-for-byte unchanged (compare check: 1 page changed).

## Judgment calls (strike any by number)
1. The "part by part" section follows the city cards above it (Brampton, Mississauga, Caledon), not south-to-north as the hero paragraph does.
2. The four headings mirror Toronto's, so the hubs read as a set when York and Durham get theirs.
3. "Caledon is more than half of Peel's land": Caledon is about 689 km² of land in a region of about 1,247 km² (55%). Checked.
4. Rivers: the Credit off the Escarpment at Belfountain and Inglewood, through Meadowvale and Streetsville, to the lake at Port Credit (checked; Belfountain sits on the West Credit, a branch that joins the main river at the Forks, and between Caledon and Mississauga the river passes through Halton Hills, which the copy skips); Etobicoke Creek through the middle of Brampton and along Mississauga's eastern edge (checked: it rises in Caledon, crosses Brampton and Mississauga and forms the Toronto boundary down to the lake); the Humber through Bolton (not checked online; the Caledon page already says Bolton is on the Humber).
5. House ages: Bramalea "a generation older" than the 1990s subdivisions (checked: a planned community of the late 1950s and 60s); Heart Lake grouped with it (not checked); Peel Village and south Mississauga trees "half a century or more" (Peel Village was launched in 1961 and built through the 60s and 70s, checked; the first draft said "sixty years or more" and was softened for that reason); Bolton's "three decades of subdivisions" (the Caledon page says 1980s to 2010s).
6. Bolton is named in Caledon's paragraph and in two questions, never linked, because it has no page of its own (the Caledon page covers it).
7. The rural-Caledon question repeats what the Caledon page already says: same-day service on the same terms for rural addresses. No new promise.
8. Question 5, "Does it matter whether the house is new or old?", is new to the site because Peel spans both. It talks only about where animals get in, not about the work.
9. Skunks: "the big lots of Castlemore and Lorne Park, and most of Caledon, give them the most room to do it" is a comparison about the animals, in line with the three city pages.
10. One sentence is reused from the live site on purpose: "Usually, we can solve the wildlife problem entirely from outside without needing to enter your home." (the approved how-we-work line, also on the Toronto hub). Every other sentence is new; a check against all 33 other pages found none shared.
11. Repairs named: roof vent, soffit, fascia, shingles and roof boards, chimney cap, eavestrough, siding, attic insulation. All from the confirmed list in lib/data/repairs.ts; nothing else.
12. The word "guarantee" is nowhere in the new copy; the trust row and the guarantee block carry it in the exact wording. No prices, reviews, ratings, years, awards, "fully insured", "licensed" or "block and lock" (the crawl's banned-word check passed). Phone links, the form and tracking untouched.

## Checks run on the final text
Lint and typecheck clean; production build OK; crawl of all 34 sitemap pages: all 200, titles, H1s and descriptions unique, FAQ schema matching the rendered questions, phone links present, Problems: none; compare before/after: only /service-areas/peel-region changed; screenshots at desktop and phone widths with every FAQ opened; the rendered wording saved for the owner.

## Not checked
The live site itself (it cannot be fetched from this session; the local build stands in for it). The Humber through Bolton and Heart Lake's age (item 4 and 5) were not looked up; everything else in 3, 4 and 5 was checked online on Oct 12.
