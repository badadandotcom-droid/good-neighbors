import type { IllustrationId } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * A single hand-drawn line-art icon system standing in for photography
 * across the site until real production photography is available (see
 * PLACEHOLDERS.md). Deliberately editorial/architectural — a single stroke
 * weight, no color fills, no cartoon expressions — rather than clip-art
 * animal icons. Every mark inherits `currentColor`, so place it inside a
 * text-color utility to theme it.
 */
export function Illustration({
  id,
  className,
}: {
  id: IllustrationId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("stroke-current", className)}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}

const paths: Record<IllustrationId, React.ReactNode> = {
  raccoon: (
    <>
      <path d="M20 40c-3-6-2-13 3-17 2.6-2.2 6-3.4 9-3.4s6.4 1.2 9 3.4c5 4 6 11 3 17" />
      <path d="M17 26c-1.5-3-1-6.5 1.5-8.5M47 26c1.5-3 1-6.5-1.5-8.5" />
      <path d="M22 34.5c1.6-2.4 4-3.6 10-3.6s8.4 1.2 10 3.6" />
      <circle cx="26" cy="31" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="38" cy="31" r="1.1" fill="currentColor" stroke="none" />
      <path d="M31 36.5c.6.6 1.4.6 2 0" />
      <path d="M20 40c-2 6-1 10 2 13M44 40c2 6 1 10-2 13" />
      <path d="M48 44c5-1 9-5 10.5-10.5-4 .5-7.5 2.5-9.5 6" />
      <path d="M50.5 39.5c1.2 1.6 1.2 3.6 0 5.4" />
    </>
  ),
  squirrel: (
    <>
      <path d="M16 44c-1-8 3-15 10-17" />
      <path d="M26 27c2-4 6-6 9-5" />
      <path d="M16 44c0 3 2.2 5 5.5 5S27 47 27 44" />
      <circle cx="21" cy="34" r="1.1" fill="currentColor" stroke="none" />
      <path d="M14 27c-.6-2.4.3-4.6 2.2-5.6M20 24.5c-.4-2.4.6-4.4 2.6-5.2" />
      <path d="M35 22c8-3 16 2 17 11 1 8-4 15-12 17-3 .8-6 .3-8.2-1.4" />
      <path d="M52 33c3.4-.6 6-3.2 6.5-6.6-3.6.4-6.4 2.6-7.6 5.8" />
    </>
  ),
  skunk: (
    <>
      <path d="M12 42c0-6.5 5.5-11.5 13-11.5 4 0 7 1 9.5 3" />
      <circle cx="17" cy="36" r="1" fill="currentColor" stroke="none" />
      <path d="M10 33.5c-.4-2 .5-3.6 2.2-4.4" />
      <path d="M34.5 33.5c8-4 17-1.5 20 6.5 2.6 6.8-1 13.5-8 15.6-6 1.8-12-.6-14.6-6" />
      <path d="M38 34c3-1.2 6.2-.6 8.6 1.7 3 2.8 3.4 7 1 10.4" />
      <path d="M12 42c-.6 4 1.4 7.4 5 9" />
    </>
  ),
  bird: (
    <>
      <path d="M14 38c6-10 18-14 28-9.5" />
      <path d="M42 28.5c3-1.4 6.4-1 8.5 1.3-2.6 2-6 2.4-9 1.2" />
      <path d="M14 38c-1.4 4.6.6 9 5.4 10.8" />
      <path d="M22 34.5c5-4.4 12-5.6 18-3" />
      <circle cx="38" cy="30" r="1" fill="currentColor" stroke="none" />
      <path d="M25 41c4 3 9.4 3.6 14 1.6" />
    </>
  ),
  bat: (
    <>
      <path d="M32 24v18" />
      <path d="M32 27c-4-6-11-9-18-7 1 4 4 7 8 8.4-3 .6-6 2.6-7.4 5.6 5 2.4 10.8 1.6 15-1.8" />
      <path d="M32 27c4-6 11-9 18-7-1 4-4 7-8 8.4 3 .6 6 2.6 7.4 5.6-5 2.4-10.8 1.6-15-1.8" />
      <circle cx="29.5" cy="24.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="34.5" cy="24.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  attic: (
    <>
      <path d="M10 34 32 16l22 18" />
      <path d="M16 34v16h32V34" />
      <path d="M22 34v-4l4-3 4 3v4M34 34v-4l4-3 4 3v4" />
      <path d="M16 44h32" />
    </>
  ),
  wall: (
    <>
      <path d="M14 12v40M50 12v40" />
      <path d="M14 12h36M14 52h36" />
      <path d="M14 22h36M14 32h36M14 42h36" />
      <path d="M26 22v10M38 32v10" strokeDasharray="2 3" />
    </>
  ),
  roofline: (
    <>
      <path d="M8 36 32 18l24 18" />
      <path d="M14 33.5V50h36V33.5" />
      <path d="M8 36h4M52 36h4" />
      <path d="M26 50V38h12v12" />
    </>
  ),
  "soffit-vent": (
    <>
      <rect x="12" y="24" width="40" height="16" rx="2" />
      <path d="M16 28h32M16 32h32M16 36h32" />
    </>
  ),
  inspection: (
    <>
      <path d="M10 40 30 22l24 18" />
      <path d="M16 37v15h20" />
      <circle cx="44" cy="42" r="8" />
      <path d="M49.6 47.6 56 54" />
    </>
  ),
  "shield-home": (
    <>
      <path d="M12 34 32 17l20 17" />
      <path d="M18 32v20h28V32" />
      <path d="M27 52V40h10v12" />
      <path d="M37 24.5 42 29l7-8" />
    </>
  ),
  "phone-call": (
    <>
      <path d="M20 14c4 0 6 2 7 5.5-1 1.5-3 2.5-4 4 1.6 4.4 5.1 7.9 9.5 9.5 1.5-1 2.5-3 4-4 3.5 1 5.5 3 5.5 7 0 3-2.5 5.5-5.5 5.5C25 41.5 14.5 31 14.5 19.5 14.5 16.5 17 14 20 14Z" />
    </>
  ),
  camera: (
    <>
      <rect x="10" y="22" width="44" height="28" rx="3" />
      <path d="M24 22l3-6h10l3 6" />
      <circle cx="32" cy="36" r="8" />
      <circle cx="45" cy="28" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  compass: (
    <>
      <circle cx="32" cy="32" r="20" />
      <path d="M40 24 28 28l-4 12 12-4 4-12Z" />
      <circle cx="32" cy="32" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
};
