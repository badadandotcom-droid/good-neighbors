// usage: node raster.mjs <in.svg> <outPrefix>  -> PNGs at 16/32/48/180/192/512 and a preview sheet
import { createRequire } from 'node:module';
const sharp = createRequire(new URL('../../package.json', import.meta.url))('sharp');
import fs from 'node:fs';
const [svgPath, prefix] = process.argv.slice(2);
const svg = fs.readFileSync(svgPath);
for (const sz of [16, 32, 48, 180, 192, 512]) await sharp(svg, { density: 72 * (sz / 512) * 4 }).resize(sz, sz, { kernel: 'lanczos3' }).png({ compressionLevel: 9, palette: sz <= 48 }).toFile(`${prefix}-${sz}.png`);
const zoom16 = await sharp(`${prefix}-16.png`).resize(96, 96, { kernel: 'nearest' }).toBuffer();
const zoom32 = await sharp(`${prefix}-32.png`).resize(96, 96, { kernel: 'nearest' }).toBuffer();
await sharp({ create: { width: 560, height: 150, channels: 4, background: '#ffffff' } })
  .composite([
    { input: `${prefix}-16.png`, left: 16, top: 67 }, { input: `${prefix}-32.png`, left: 48, top: 59 }, { input: `${prefix}-48.png`, left: 96, top: 51 },
    { input: zoom16, left: 170, top: 27 }, { input: zoom32, left: 282, top: 27 },
    { input: await sharp(`${prefix}-512.png`).resize(128, 128).toBuffer(), left: 410, top: 11 },
  ]).png().toFile(`${prefix}-sheet.png`);
console.log(prefix, 'sizes (bytes):', [16, 32, 48, 180, 192, 512].map((s) => s + ':' + fs.statSync(`${prefix}-${s}.png`).size).join(' '));
