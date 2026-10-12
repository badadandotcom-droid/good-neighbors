# Site icon (favicon): review notes for the owner (Oct 12, 2026)

**Status: built on the session branch `ccr-c0dfa50a-3r4c5t`, waiting for the owner's "approved" (with the /contact guarantee line and the Google tag timing). Not live.**

Asked for by the ads chat (Oct 12, 12:45 PM): the icon in browser tabs and next to the site in Google results was still the starter template's black triangle.

## What it is
"GN" in Fraunces, the site's display serif (the same face as the "Good Neighbors" wordmark in the header), charcoal `#171916` on the header's cream `#f3efe3`. The letters are real outlines from the font file, so the SVG needs no font installed to show correctly.

Files in `app/`: `icon0.svg` (7.7 KB), `icon1.png` 192 x 192, `icon2.png` 512 x 512, `apple-icon.png` 180 x 180, `favicon.ico` 16 + 32 (3.6 KB; the old one was 25.9 KB and loaded on every page). Every page's head now links these; no URL, title, H1 or wording changed (the visible text of all 34 pages is identical).

## Judgment calls (strike any by number)
1. Letters at weight 600 and optical size 24, not the header's lighter display cut: the display cut's hairlines vanish at 16 px. The text cut keeps the same letterforms with sturdier strokes.
2. The mark is 80% of the tile wide (40% high) and centred, so it still shows whole inside the circle Google draws around favicons in mobile results.
3. Full-bleed square, no rounded corners: iOS, Android and Google apply their own rounding, and transparent corners would show through as dark notches inside theirs.
4. Charcoal on cream, as the ads chat proposed, to match the header and the ad logo. (Pine green letters were considered and set aside: lower contrast at 16 px.)
5. `favicon.ico` carries 16 and 32 only; 48 and up come from the PNGs and the SVG.
6. `app/layout.tsx` no longer lists `/favicon.ico` under `icons`; the files in `app/` produce the link tags, which also removes a duplicate link the head carried before.
7. The generator (`scripts/icon/`) is kept in the repo so a colour or weight change is one command, not a redraw.

## Not checked
How Google chooses among the five candidates for its search-result icon (it re-crawls favicons on its own schedule, often days); how it looks on a real iPhone home screen (reasoned from Apple's mask, not tested); Safari's pinned-tab icon (not provided; Safari uses the regular icon since version 12).
