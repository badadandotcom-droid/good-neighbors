# usage: python3 -I gen.py <font.woff2> <wght> <opsz> <widthFraction> <out.svg>
# Draws "GN" as glyph outlines from the variable Fraunces file, centred on a 512 cream tile.
import sys
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

font_path, wght, opsz, frac, out = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]), sys.argv[5]
font = TTFont(font_path)
font = instancer.instantiateVariableFont(font, {"wght": wght, "opsz": opsz})
gs = font.getGlyphSet(); cmap = font.getBestCmap(); hmtx = font["hmtx"]
S = 512
x = 0; parts = []; minx = miny = 1e9; maxx = maxy = -1e9
for ch in "GN":
    name = cmap[ord(ch)]
    pen = SVGPathPen(gs); gs[name].draw(pen)
    bp = BoundsPen(gs); gs[name].draw(bp); x0, y0, x1, y1 = bp.bounds
    minx = min(minx, x + x0); maxx = max(maxx, x + x1); miny = min(miny, y0); maxy = max(maxy, y1)
    parts.append((x, pen.getCommands()))
    x += hmtx[name][0]
ink_w, ink_h = maxx - minx, maxy - miny
scale = S * frac / ink_w
tx = (S - ink_w * scale) / 2 - minx * scale
ty = S / 2 + ink_h * scale / 2 + miny * scale
paths = "".join(f'<path transform="translate({dx} 0)" d="{d}"/>' for dx, d in parts)
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S} {S}">'
       f'<rect width="{S}" height="{S}" fill="#f3efe3"/>'
       f'<g fill="#171916" transform="translate({tx:.2f} {ty:.2f}) scale({scale:.5f} {-scale:.5f})">{paths}</g></svg>')
open(out, "w").write(svg)
print(out, f"wght {wght:g} opsz {opsz:g}: mark {ink_w*scale/S:.2f} wide x {ink_h*scale/S:.2f} high of the tile, {len(svg)} bytes")
