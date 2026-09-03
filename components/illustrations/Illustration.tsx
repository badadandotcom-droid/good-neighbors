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
      <Hatch>
        <path d="M42 52c3-1.6 6.4-2.3 9.5-2.1M69 50c3.2-.2 6.5.5 9.4 2" />
        <path d="M34 74c4.5 1.8 9.6 2.4 14.6 1.6M72 76c4.8.6 9.7-.2 14-2.2" />
      </Hatch>
      <path d="M36 66c-5-11-3.4-24 5.5-31.4 5-4.1 11-6.2 16.5-6.2s11.6 2.1 16.5 6.2c8.9 7.4 10.6 20.4 5.5 31.4" />
      <path d="M30 42c-2.7-5.4-1.8-11.7 2.7-15.3M90 42c2.7-5.4 1.8-11.7-2.7-15.3" />
      <path d="M40 58c3-4.2 7.4-6.4 18-6.4s15 2.2 18 6.4" />
      <circle cx="47" cy="52" r="2" fill="currentColor" stroke="none" />
      <circle cx="69" cy="52" r="2" fill="currentColor" stroke="none" />
      <path d="M56 60c1.4 1.6 2.6 1.6 4 0" />
      <path d="M36 66c-3.6 10.8-1.8 18 3.6 23.4M80 66c3.6 10.8 1.8 18-3.6 23.4" />
      <path d="M42 88c3 3.4 7 5 11 4.6M74 88c-3 3.4-7 5-11 4.6" />
      <path d="M80 70c8-6 20-6 27 2.5 6 7.4 5.4 17-.5 24.5" />
      <path d="M86 76.5c3.5-2.4 8.6-2 11.5 1.5M89 84.5c3-1.8 6.8-1.4 9 1.2M91 92.5c2.2-1.2 5-1 6.6.8" strokeWidth={1.2} />
    </>
  ),
  squirrel: (
    <>
      <Hatch>
        <path d="M62 42c4-3.6 9-5.4 13.6-5M18 78c2.6 2 5.6 3.2 8.8 3.6" />
      </Hatch>
      <path d="M18 78c-2-14 5-27 18-31" />
      <path d="M36 47c3.6-7 11-11 16.5-9" />
      <path d="M18 78c0 5.4 4 9 10 9s11-2.6 11-8" />
      <circle cx="27" cy="59" r="2" fill="currentColor" stroke="none" />
      <path d="M14 48c-1-4.4.6-8.4 4-10.2M25 43.5c-.8-4.4 1-8 4.6-9.4" />
      <path d="M60 38c15-5.4 29 3.6 31 20 1.8 14.4-7.2 27-22 30.6-5.4 1.4-11 .6-15-2.4" />
      <path d="M95 58c6.2-1 11-5.8 12-12-6.6.8-11.8 4.8-14 10.6" />
      <path d="M88 44c4.4-1.4 8-4.4 10-8.2M97 52c3.6-2.6 6-6.4 6.6-11" />
      <path d="M20 20c2.8 3.2 4.4 6.8 5 10.6M28 16.5c1.6 3.6 2.4 7.6 2.2 11.6" />
    </>
  ),
  bird: (
    <>
      <Hatch>
        <path d="M46 63c4-1.4 8.4-2 12.6-1.6M30 71c3.6.6 7.4.6 11-.2" />
      </Hatch>
      <path d="M20 68c11.4-18.6 33.6-26 52-17.6" />
      <path d="M72 50c5.4-2.6 11.8-1.8 15.6 2.4-4.8 3.6-11 4.4-16.6 2.2" />
      <path d="M20 68c-2.6 8.6 1 16.6 10 20" />
      <path d="M36 61c9.4-8.2 22.4-10.4 33.6-5.6" />
      <circle cx="68" cy="53" r="1.8" fill="currentColor" stroke="none" />
      <path d="M44 76c7.4 5.6 17.6 6.6 26 3" />
      <path d="M74 55.5 88 50M76 59l14.5-1M74 63.5 87 69" strokeWidth={1.1} opacity={0.6} />
    </>
  ),
  bat: (
    <>
      <path d="M60 44v34" />
      <path d="M60 50c-7.4-11-20.6-16.8-33.6-13-1 7.4 3.4 13.2 12.4 15.8-6.6.6-13 4.4-16.6 10.4 9.4 4.4 20.2 3 28-3.4" />
      <path d="M60 50c7.4-11 20.6-16.8 33.6-13 1 7.4-3.4 13.2-12.4 15.8 6.6.6 13 4.4 16.6 10.4-9.4 4.4-20.2 3-28-3.4" />
      <Hatch>
        <path d="M32 42c4.8 1.6 9 4.4 12 8.4M88 42c-4.8 1.6-9 4.4-12 8.4" />
        <path d="M27 55c5.6.4 10.8 2.6 15 6.2M93 55c-5.6.4-10.8 2.6-15 6.2" />
      </Hatch>
      <circle cx="55" cy="45" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="65" cy="45" r="1.7" fill="currentColor" stroke="none" />
      <path d="M49 39c-1-3.4 0-6.6 3-8.6 1 2.6.8 5.2-.6 7.6M71 39c1-3.4 0-6.6-3-8.6-1 2.6-.8 5.2.6 7.6" />
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
