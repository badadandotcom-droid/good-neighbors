# Site icon (favicon) generator

The site icon is the letters "GN" from Fraunces (the site's display serif), charcoal `#171916` on the cream
`#f3efe3` of the header, on a full-bleed square (iOS, Android and Google's mobile results apply their own
rounding or circle, so the tile itself has no rounded corners; the mark sits inside a circle's safe zone).
Weight 600, optical size 24, mark 80% of the tile wide. The files in `app/`:

- `icon0.svg` — the outlines (no font needed to view it); modern browsers use this one
- `icon1.png` 192 x 192 (a multiple of 48, which Google's search-result favicon wants), `icon2.png` 512 x 512
- `apple-icon.png` 180 x 180
- `favicon.ico` 16 + 32, for older browsers and anything that asks for `/favicon.ico` directly

Next turns these into the `<link>` tags itself (see its `app-icons` docs); `app/layout.tsx` sets no `icons`.

To regenerate (for example after a colour change), from the repo root:

```
pip install fonttools brotli
# the latin Fraunces variable font, the same file the site loads:
curl -A "Mozilla/5.0 Chrome/120" "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900" \
  | grep -o "https://fonts.gstatic.com[^)]*" | tail -1 | xargs curl -o /tmp/fraunces-latin.woff2
python3 -I scripts/icon/gen.py /tmp/fraunces-latin.woff2 600 24 0.80 app/icon0.svg
node scripts/icon/raster.mjs app/icon0.svg /tmp/gn      # PNGs at 16/32/48/180/192/512 and a preview sheet
cp /tmp/gn-192.png app/icon1.png; cp /tmp/gn-512.png app/icon2.png; cp /tmp/gn-180.png app/apple-icon.png
convert /tmp/gn-16.png /tmp/gn-32.png app/favicon.ico   # ImageMagick
```

`raster.mjs` uses the `sharp` that Next installs in `node_modules`.
