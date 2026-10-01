# Share-image assets

Read at build time by `app/opengraph-image.tsx` to draw the link-preview card.

- `anton-400.woff`, `archivo-700/800/900.woff`: the site's fonts (Latin subset)
  from Google Fonts, under the SIL Open Font License 1.1. They're stored as `.woff`
  because `ImageResponse` does not read `woff2`.
- `wasp-icon-300.png`: a 300px copy of `public/brand/wasp-icon-square.png`, small
  enough for the image generator's 500 KB budget.

All of these together must stay under 500 KB.
