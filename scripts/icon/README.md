# Site icon (favicon) generator

The site icon is the raccoon face (since Nov 21 2026; it replaced the "GN" letters): cream `#F3EFE3` and ink
`#171916` on a solid green `#173D27` square, the same drawing as the Google Business Profile logo (owner picked it
Nov 8 2026). Full-bleed square, no transparency and no rounded corners (iOS, Android and Google's mobile results
apply their own rounding or circle; the whole face sits inside a circle's safe zone). The master drawing is
`raccoon-logo-idea1.svg` on the owner's Mac (Downloads > GNW photo library > logo); `app/icon0.svg` is that file
with its size set to 512 x 512 so `raster.mjs` renders it at full detail. The files in `app/`:

- `icon0.svg` — the vector; modern browsers use this one
- `icon1.png` 192 x 192 (a multiple of 48, which Google's search-result favicon wants), `icon2.png` 512 x 512
- `apple-icon.png` 180 x 180
- `favicon.ico` 16 + 32, for older browsers and anything that asks for `/favicon.ico` directly

Next turns these into the `<link>` tags itself (see its `app-icons` docs); `app/layout.tsx` sets no `icons`.

To regenerate (for example after a colour change), from the repo root, with the master SVG copied in as
`app/icon0.svg` (`width` and `height` set to 512):

```
node scripts/icon/raster.mjs app/icon0.svg /tmp/rc      # PNGs at 16/32/48/180/192/512 and a preview sheet
cp /tmp/rc-192.png app/icon1.png; cp /tmp/rc-512.png app/icon2.png; cp /tmp/rc-180.png app/apple-icon.png
convert /tmp/rc-16.png /tmp/rc-32.png app/favicon.ico   # ImageMagick
```

`raster.mjs` uses the `sharp` that Next installs in `node_modules`. `gen.py` built the old "GN" mark from the
Fraunces font; it is kept for the record only.
