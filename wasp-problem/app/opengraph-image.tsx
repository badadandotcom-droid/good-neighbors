import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND, PHONE_TOLLFREE, SERVICE_REGION, SHARE_PREVIEW } from "@/lib/site";

/**
 * The link-preview card shown when the site URL is texted or shared. Drawn at
 * build time from lib/site.ts, so changing SERVICE_REGION (or the phone number)
 * redraws it on the next deploy — no image file to remember to update.
 *
 * Built for small previews: few lines, large type, no fine print. Checked
 * legible at 300px and 150px wide. It makes no availability claim: "same-day"
 * would need "based on availability" beside it, which a thumbnail has no room for.
 *
 * Fonts are the site's own (Anton for the sign lockup, Archivo for the rest),
 * stored as .woff in assets/og/ because ImageResponse does not read woff2.
 * City pages point at this same image explicitly (see locationMetadata).
 */
export const alt = SHARE_PREVIEW.imageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (file: string) => readFile(join(process.cwd(), "assets/og", file));

const [anton, archivo700, archivo800, archivo900, icon] = await Promise.all([
  asset("anton-400.woff"),
  asset("archivo-700.woff"),
  asset("archivo-800.woff"),
  asset("archivo-900.woff"),
  asset("wasp-icon-300.png"),
]);

const YELLOW = "#ffd400";
const BLACK = "#0a0a0a";
const SOFT_WHITE = "#d9dce2";

export default function Image() {
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  // The signs say waspproblem.ca, so the card drops "www." even though the canonical host has it.
  const domain = new URL(BRAND.url).host.replace(/^www\./, "");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BLACK, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 14, background: YELLOW }} />
        <img
          src={iconSrc}
          width={300}
          height={300}
          alt=""
          style={{
            position: "absolute",
            left: 64,
            top: 166,
            borderRadius: 58,
            boxShadow: "0 20px 60px rgba(255, 212, 0, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 424,
            top: 54,
            width: 720,
            display: "flex",
            flexDirection: "column",
            fontFamily: "Archivo",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Anton",
              fontSize: 146,
              lineHeight: 0.92,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <span>Wasp</span>
            <span>Problem?</span>
          </div>
          <div style={{ marginTop: 24, fontSize: 44, lineHeight: 1.1, fontWeight: 800, color: "#ffffff" }}>
            {SHARE_PREVIEW.imageService}
          </div>
          <div style={{ marginTop: 4, fontSize: 38, lineHeight: 1.1, fontWeight: 700, color: SOFT_WHITE }}>
            {SERVICE_REGION}
          </div>
          <div style={{ marginTop: 24, fontSize: 72, lineHeight: 1, fontWeight: 900, color: YELLOW, letterSpacing: -1.4 }}>
            {PHONE_TOLLFREE.display}
          </div>
          <div style={{ marginTop: 10, fontSize: 40, lineHeight: 1.1, fontWeight: 700, color: SOFT_WHITE }}>
            {domain}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, weight: 400, style: "normal" },
        { name: "Archivo", data: archivo700, weight: 700, style: "normal" },
        { name: "Archivo", data: archivo800, weight: 800, style: "normal" },
        { name: "Archivo", data: archivo900, weight: 900, style: "normal" },
      ],
    },
  );
}
