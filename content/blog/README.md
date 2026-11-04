# Good Neighbors Wildlife blog posts

One markdown file per post in this folder. A post goes live by commit and push to the live branch (`claude/good-neighbors-v2-visual-redesign`); Vercel builds it. No webhook, no database (owner, Nov 2 2026). Good Neighbors only: Wasp Problem has its own site.

A file whose name starts with `_` is a draft and is not built (`_skunks-under-deck.md`); this README is skipped too. The file name is the URL: `what-animal-is-in-my-attic.md` → `/blog/what-animal-is-in-my-attic`. The `slug` line must match the file name, or the build stops.

```markdown
---
title: "What Animal Is in My Attic?"
slug: "what-animal-is-in-my-attic"
description: "One sentence for Google and for the line under the H1, about 150 to 160 characters."
date: "2026-11-03"
primaryKeyword: "what animal is in my attic"
relatedPage: "/wildlife/something-in-the-attic"
---

The post, in markdown: paragraphs, `## Headings`, `- lists` and `[links](/wildlife/raccoons)`.
```

- `title` is the H1 and the page title; the layout adds " | Good Neighbors Wildlife".
- `date` is the day the post goes live (YYYY-MM-DD). /blog lists posts newest first.
- `primaryKeyword` goes into the post's structured data as its keywords; it is not shown on the page.
- `relatedPage` is the service page for the job. The page links to it at the end ("The service page for this job") and takes its trust row from it: a post whose related page carries no lifetime guarantee line (dead animals, skunks, birds, decks, cleanup) shows the insurance and 24/7 lines only.
- Optional: `relatedLabel` (the words for that link; by default the page's own heading), `guarantee: false` (leaves the guarantee line off whatever the related page does), `updated` (YYYY-MM-DD, when a post was changed).

The page template already ends with the Call button and the closing band, so a post does not end with a phone link. Posts carry no prices, no "feces" or "latrine", no smell-removal promises (smell itself may be a topic in posts: owner, Nov 4 2026, GNW Blog 5; the business still does no odour work, and on a dead-animal job the post says only that the area where the animal was is always disinfected), no time of day for the one-way door, and the guarantee line only in the owner's exact words ("Lifetime guarantee on every entry point we seal."), only in posts about animals inside the house. The full copy rules are in the gnw-voice-and-claims skill.

After a push: the crawl check (`scripts/checks/crawl.mjs`) reads every post from the sitemap, and the post is requested in Search Console.
