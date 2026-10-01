@AGENTS.md

## Wasp Problem standing rules (from the Google Ads side)

- Business: Wasp Problem, waspproblem.ca, wasp / hornet / yellow jacket / bee removal in Toronto and the GTA. Google Ads sends paid traffic to the homepage and the city pages.
- 24/7 means PHONE CALLS ONLY. The owner answers calls around the clock but may not see texts or web requests until morning. Never promise a 24/7 reply to a text. Hero line: "Open 24/7 — call us anytime." Texts and web requests: "usually within a few hours; overnight, first thing in the morning." Ad copy matches: "Open 24/7 — Call Now", never "Call or Text 24/7".
- Same-day service is always "based on availability". Homepage title: "Wasp Nest Removal Toronto & GTA | 24/7 Same-Day Service* | Wasp Problem" (the asterisk points to that line on the page).
- Words: never "licensed" or "certified". Use "fully insured — $5,000,000 liability coverage". Use "90-day service guarantee", never "warranty". The word "can't" stays out of site copy.
- Phones: texts go to 416-700-4259 only. 1-800-800-WASP (1-800-800-9277) takes calls only.
- URLs: do NOT rename, move or delete the homepage or any /<city>-wasp-removal page, because Google Ads keywords point to them. 13 city pages. Featured: toronto, mississauga, markham, vaughan, richmond-hill, thornhill, pickering, ajax, whitby, newmarket, whitchurch-stouffville. Kept but not featured: oakville, burlington. Brampton is a service area with no page.
- Bees: the bee section lives at /#bees. Google Ads' bee ad links to it, so keep the "bees" anchor id. Bees are described generically on purpose: no honey bee, bumble bee or carpenter bee specific copy. City pages carry one bee line.
- Tracking: GA4 ID G-2NETZXNWVG. Keep the existing cta_call and cta_text events; Google Ads counts cta_call, so never rename or remove it, never add a second Google tag, and never add a separate phone_call_click event. Every cta_call and cta_text event carries phone_number and page. The online request form fires lead_form (never form_submit, which collides with GA4's automatic event); it goes live once the owner connects the email service.
- Open item for the owner (not code): register phone_number and page as event-scoped custom dimensions in GA4 (Admin > Custom definitions).
