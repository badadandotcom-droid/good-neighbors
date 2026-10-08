import type { IllustrationId } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * The field-sketch illustration system — hand-drawn line art standing in
 * for photography until real production photography exists (see
 * PLACEHOLDERS.md), and a permanent brand device alongside it. Modeled on
 * naturalist field-guide plates and architectural section drawings: a
 * confident primary contour line plus restrained secondary hatching for
 * form and texture — never a cartoon expression, never a flat icon fill.
 * Every mark inherits `currentColor`; place inside a text-color utility.
 */
export function Illustration({
  id,
  className,
  weight = "regular",
}: {
  id: IllustrationId;
  className?: string;
  /** "bold" thickens the stroke for small display sizes (tile icons), where a hairline reads as weak rather than refined. */
  weight?: "regular" | "bold";
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("stroke-current", className)}
      fill="none"
      strokeWidth={weight === "bold" ? 2.75 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}

/** Secondary hatch/texture strokes — thinner, translucent, drawn under the primary contour. */
function Hatch({ children }: { children: React.ReactNode }) {
  return (
    <g strokeWidth={0.9} opacity={0.45}>
      {children}
    </g>
  );
}

const paths: Record<IllustrationId, React.ReactNode> = {
  raccoon: (
    <>
      <path d="M60 25 C42 25 28 37 25 53 C23 63 26 73 34 80 C42 86 50 89 60 89 C70 89 78 86 86 80 C94 73 97 63 95 53 C92 37 78 25 60 25 Z" />
      <path d="M35 31 Q29 19 37 11 Q44 21 42 33 Z" />
      <path d="M85 31 Q91 19 83 11 Q76 21 78 33 Z" />
      <path d="M32 45 C30 39 34 34 40 35 C46 36 49 43 47 50 C45 57 39 60 34 56 C30 53 29 50 32 45 Z" />
      <path d="M88 45 C90 39 86 34 80 35 C74 36 71 43 73 50 C75 57 81 60 86 56 C90 53 91 50 88 45 Z" />
      <circle cx="39" cy="48" r="1.9" fill="currentColor" stroke="none" />
      <circle cx="81" cy="48" r="1.9" fill="currentColor" stroke="none" />
      <path d="M50 60 C52 68 55 73 60 75 C65 73 68 68 70 60 C66 64 63 65 60 65 C57 65 54 64 50 60 Z" />
      <ellipse cx="60" cy="73" rx="3.2" ry="2.3" fill="currentColor" stroke="none" />
      <path d="M55 80c3 2 7 2 10 0" strokeWidth={1.1} opacity={0.5} />
      <path d="M78 76 C88 74 97 80 97 90 C97 99 88 104 78 101 C83 97 85 91 82 86 C79 90 75 91 70 89 C73 83 76 78 78 76 Z" />
      <path d="M84 83c2 2 3 5 2.5 8M79 91c1.6 1.6 3.6 2 5.5 1.4" strokeWidth={1.1} opacity={0.5} />
    </>
  ),
  squirrel: (
    <>
      <path d="M20 46 C20 38 26 32 34 32 C42 32 47 39 46 47 C45 54 38 59 30 58 C22 57 19 52 20 46 Z" />
      <path d="M26 33 Q24 24 29 20 Q32 27 30 34 Z" />
      <path d="M36 32 Q35 23 40 19 Q43 26 41 33 Z" />
      <circle cx="27" cy="44" r="1.9" fill="currentColor" stroke="none" />
      <path d="M22 56 C16 62 14 72 18 82 C22 92 34 96 44 92 C52 89 55 80 52 70 C50 62 44 55 34 54 C30 53 25 54 22 56 Z" />
      <ellipse cx="15" cy="65" rx="4.5" ry="5.5" />
      <path d="M15 60c0-3 1-5 3-6" strokeWidth={1.2} />
      <path d="M48 74 C60 66 74 54 84 36 C90 26 90 16 82 10 C86 20 84 32 76 42 C68 52 56 60 44 64 C40 66 38 70 40 74 C42 78 45 77 48 74 Z" />
      <path d="M56 46c3 0 6.5 1 9 3M68 30c2.5 1 5 2.5 6.5 4.5" strokeWidth={1.1} opacity={0.55} />
    </>
  ),
  bird: (
    <>
      <path d="M18 44 C14 38 16 30 24 27 C32 24 39 29 39 37 C39 44 33 49 25 49 C21 49 19 47 18 44 Z" />
      <path d="M16 40 4 42 15 45 Z" />
      <circle cx="26" cy="36" r="1.8" fill="currentColor" stroke="none" />
      <path d="M20 58 C16 66 18 76 26 82 C36 90 52 90 64 82 C74 76 78 66 74 56 C70 46 58 40 44 40 C32 40 24 46 20 58 Z" />
      <path d="M42 52 56 47M44 57 59 56M42 62 55 67" strokeWidth={1.1} opacity={0.6} />
      <path d="M74 58 96 46M76 60 100 56M74 64 94 68" strokeWidth={1.2} opacity={0.6} />
      <path d="M46 84v10M56 84v9" strokeWidth={1.6} />
      <path d="M24 96h72" strokeWidth={1.6} />
      <path d="M70 96 78 90" strokeWidth={1.3} opacity={0.6} />
    </>
  ),
  bat: (
    <>
      <ellipse cx="60" cy="60" rx="6.5" ry="13" />
      <path d="M53 44 C50 38 51 30 56 26 C58 32 57 39 54 45 Z" />
      <path d="M67 44 C70 38 69 30 64 26 C62 32 63 39 66 45 Z" />
      <circle cx="56" cy="43" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="64" cy="43" r="1.7" fill="currentColor" stroke="none" />
      <path d="M57 48c1.5 1.5 3 1.5 4.5 0" strokeWidth={1.3} />
      <path d="M54 50 C40 42 24 40 14 44 C16 50 22 54 30 55 C20 58 12 64 10 72 C20 76 32 74 40 68 C34 74 30 80 30 86 C40 84 48 76 52 66 C54 62 55 56 54 50 Z" />
      <path d="M66 50 C80 42 96 40 106 44 C104 50 98 54 90 55 C100 58 108 64 110 72 C100 76 88 74 80 68 C86 74 90 80 90 86 C80 84 72 76 68 66 C66 62 65 56 66 50 Z" />
      <path d="M55 76c-1 6-4 10-9 13M65 76c1 6 4 10 9 13" strokeWidth={1.2} opacity={0.6} />
      <path d="M43 92c-1 1-1 3 0 4M77 92c1 1 1 3 0 4" strokeWidth={1.3} />
    </>
  ),
  skunk: (
    <>
      <path d="M11 86.6C11.2 85.8 12.7 84.7 14 83.9C15.3 83 17 82.4 18.8 81.5C20.6 80.6 22.8 79.5 24.8 78.5C26.8 77.5 28.6 76.5 30.8 75.5C33 74.5 35.5 73.6 38 72.5C40.5 71.4 42.7 70.2 45.5 68.9C48.3 67.7 51.5 66.1 54.8 65C58 63.9 61.7 62.6 65 62.3C68.3 61.9 71.6 62.2 74.6 62.9C77.6 63.5 80.5 64.6 83 66.2C85.5 67.7 88 69.7 89.6 72.2C91.2 74.7 92.2 78.1 92.6 81.2C93 84.3 92.5 88.1 92 90.8C91.5 93.5 90.7 95.5 89.9 97.4C89.1 99.3 87.8 100.8 87.2 102.2C86.6 103.6 86.5 104.7 86.3 105.8C86.1 106.9 86.8 108.2 86 108.8C85.2 109.4 82.7 109.2 81.2 109.4C79.8 109.5 77.7 110 77.3 109.7C76.9 109.4 78.3 108.3 78.8 107.3C79.3 106.2 80.3 104.5 80.3 103.4C80.3 102.2 79.8 101 78.8 100.4C77.8 99.8 76.4 99.8 74.6 99.8C72.8 99.8 70.4 99.9 68 100.1C65.6 100.2 62.8 100.7 60.2 100.7C57.6 100.7 54.5 100 52.4 100.1C50.3 100.2 48.7 100.5 47.6 101.3C46.5 102 46.2 103.3 45.8 104.6C45.4 105.8 46 107.9 45.2 108.8C44.3 109.7 42.2 109.5 40.7 109.7C39.2 109.9 36.6 110.1 36.2 109.7C35.8 109.3 37.8 108.3 38.3 107.3C38.8 106.2 39 104.7 38.9 103.4C38.8 102 38.4 100.5 37.7 99.2C36.9 98 35.8 96.8 34.4 95.9C33 95 31 94.5 29 93.8C27 93.1 24.4 92.4 22.4 91.7C20.4 91 18.6 90.4 17 89.9C15.4 89.3 14.1 88.9 13.1 88.4C12.1 87.8 10.8 87.3 11 86.6Z" />
      <path d="M30.5 76.1C29 75.5 30.5 71.8 31.1 70.4C31.8 69 33.2 67.9 34.4 67.7C35.6 67.4 37.3 67.9 38.3 68.9C39.2 70 41.4 72.8 40.1 74C38.8 75.2 32 76.7 30.5 76.1Z" />
      <path d="M93.2 77.5C95 74.5 97.6 71.5 99.8 68.7C102.2 64.3 105.2 60.3 107 55.5C108.7 50.7 110.7 45 110.2 39.7C109.8 34.5 107.7 28.2 104.4 23.9C101.1 19.7 95.5 16.1 90.3 14.3C85.2 12.5 78.6 12 73.5 13.2C68.4 14.3 62.7 17.6 59.6 21.2C56.5 24.7 55.1 30.5 55 34.3C54.9 38 57.6 42.3 59 43.6C60.4 44.9 62.2 44.9 63.2 43.2C64.2 41.5 64.8 38.6 66 36.9C67.2 35.3 68.8 33.9 70.4 33.2C72 32.6 73.8 32.5 75.7 32.8C77.6 33.2 80 34.3 81.7 35.3C83.3 36.3 84.6 37.7 85.6 38.9C86.6 40 87.4 41.4 87.8 43.6C88.2 45.8 88.3 49.3 88.4 52.4C88.5 55.5 88.3 60.3 88.1 64.6" />
      <circle cx="24.8" cy="82.7" r="1.9" fill="currentColor" stroke="none" />
      <ellipse cx="11.9" cy="86.6" rx="2.2" ry="1.8" fill="currentColor" stroke="none" />
      <Hatch>
        <path d="M88.4 79.4C87 78.5 86.3 77.7 84.2 76.7C82.1 75.7 78.8 74.2 75.8 73.4C72.8 72.6 69.5 71.9 66.2 71.9C62.9 72 59.3 73 56 73.7C52.7 74.4 49.2 75.4 46.4 76.1C43.6 76.8 41.4 77.5 39.2 77.9C37 78.3 35 78.3 33.2 78.5C31.4 78.7 29.8 78.7 28.4 78.8C27 78.9 26 79 24.8 79.4C23.6 79.7 22.4 80.3 21.2 80.9" />
        <path d="M90.5 63.9C92.1 60.1 94.2 56.2 95.3 52.4C96.4 48.7 97.3 44.6 97.1 41.2C96.9 37.8 95.9 34.8 94.1 32.2C92.2 29.5 89 26.9 85.8 25.4C82.5 23.9 78.1 22.8 74.6 23.1C71.1 23.3 68.1 25.7 64.8 27" />
        <path d="M51.8 98C52.1 99.6 52.7 101.3 52.7 102.8C52.7 104.3 52.1 106 51.8 107C51.5 108 52.1 108.2 50.9 108.5C49.7 108.8 46.7 108.7 44.6 108.8" />
        <path d="M76.4 97.4C76.2 99 76.1 100.7 75.8 102.2C75.5 103.7 74.9 105.4 74.6 106.4C74.2 107.4 74.8 107.8 73.7 108.2C72.6 108.6 69.9 108.4 68 108.5" />
        <path d="M58 86c4-1.2 8.5-1.6 13-1M64 92c3.6-.6 7.2-.4 10.5.4M30 86.5c2.5.2 5 .9 7 2" />
        <path d="M101 50c1.6-5 1.4-10-.8-14.5M93 19.5c-4.4-2-9.4-2.6-14.2-1.8M62 27c1.6-3 4-5.2 7-6.6" />
      </Hatch>
    </>
  ),
  attic: (
    <>
      <path d="M16 62 60 26l44 36" />
      <path d="M27 60v34h66V60" />
      <Hatch>
        <path d="M34 78q5-3 10 0t10 0 10 0t10 0t10 0" />
        <path d="M34 87q5-3 10 0t10 0 10 0t10 0t10 0" />
      </Hatch>
      <path d="M40 60v-7l8-6 8 6v7M64 60v-7l8-6 8 6v7" />
      <circle cx="79" cy="42" r="4.2" />
      <path d="M79 38.5v7M75.5 42h7" strokeWidth={1} />
      <path d="M27 94h66" />
    </>
  ),
  wall: (
    <>
      <path d="M22 16v88M98 16v88" />
      <path d="M22 16h76M22 104h76" />
      <path d="M22 40h76M22 60h76M22 80h76" />
      <Hatch>
        <path d="M40 40v20M40 60v20M40 80v20" />
        <path d="M80 16v20M80 40v20" />
      </Hatch>
      <path d="M60 40v20" strokeDasharray="2 3.5" />
      <circle cx="60" cy="60" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  roofline: (
    <>
      <path d="M12 66 60 30l48 36" />
      <path d="M24 63v36h72V63" />
      <Hatch>
        <path d="M30 66 54 47M42 66 66 47M54 66 78 47M66 66 90 47" />
      </Hatch>
      <path d="M12 66h8M100 66h8" />
      <path d="M48 99V74h24v25" />
      <path d="M24 78h72" opacity={0.5} strokeWidth={1.1} />
    </>
  ),
  "soffit-vent": (
    <>
      <rect x="18" y="42" width="84" height="34" rx="3" />
      <path d="M26 51h68M26 59h68M26 67h68" />
      <Hatch>
        <path d="M26 55h68M26 63h68M26 71h68" />
      </Hatch>
      <circle cx="24" cy="46" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="96" cy="46" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="24" cy="72" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="96" cy="72" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  inspection: (
    <>
      <path d="M14 62 52 32l44 34" opacity={0.85} />
      <path d="M24 58v30h34" opacity={0.85} />
      <Hatch>
        <path d="M30 68 44 68M30 76 44 76" />
      </Hatch>
      <circle cx="76" cy="70" r="16" />
      <path d="M87.3 81.3 102 96" />
      <path d="M69 63c1.6-2.2 4-3.4 7-3.4" strokeWidth={1.1} opacity={0.6} />
    </>
  ),
  "shield-home": (
    <>
      <path d="M18 58 60 26l42 32" />
      <path d="M28 55v38h64V55" />
      <Hatch>
        <path d="M34 74 52 60M46 74 64 60M58 74 76 60M70 74 88 60" />
      </Hatch>
      <path d="M50 93V72h20v21" />
      <path d="M68 40.5 76 47l14-16" strokeWidth={2} />
    </>
  ),
  "phone-call": (
    <>
      <path d="M38 26c7.4 0 11 3.6 13 10-1.8 2.8-5.6 4.6-7.4 7.4 3 8.2 9.5 14.7 17.7 17.7 2.8-1.8 4.6-5.6 7.4-7.4 6.4 1.8 10 5.6 10 13 0 5.6-4.6 10.2-10.2 10.2C46.4 77 22 52.6 22 30.2 22 24.6 26.6 20 32.2 20" />
    </>
  ),
  mail: (
    <>
      <rect x="14" y="30" width="92" height="60" rx="4" />
      <path d="M17 33 60 65l43-32" />
      <Hatch>
        <path d="M17 87 46 61M103 87 74 61" />
      </Hatch>
    </>
  ),
  camera: (
    <>
      <rect x="16" y="38" width="88" height="54" rx="4" />
      <path d="M42 38l6-12h24l6 12" />
      <circle cx="60" cy="66" r="16" />
      <Hatch>
        <path d="M48 66a12 12 0 0 1 12-12" />
      </Hatch>
      <circle cx="88" cy="50" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  compass: (
    <>
      <circle cx="60" cy="60" r="38" />
      <circle cx="60" cy="60" r="30" opacity={0.4} strokeWidth={1} />
      <path d="M75 45 53 53l-8 22 22-8 8-22Z" />
      <circle cx="60" cy="60" r="2.2" fill="currentColor" stroke="none" />
      <path d="M60 22v8M60 90v8M22 60h8M90 60h8" strokeWidth={1.1} />
    </>
  ),
};
