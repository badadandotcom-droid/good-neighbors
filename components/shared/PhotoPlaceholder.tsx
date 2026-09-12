import Image from "next/image";
import { Illustration } from "@/components/illustrations/Illustration";
import { CornerMarks } from "@/components/shared/CornerMarks";
import { getPhotoSlot, REAL_PHOTOS } from "@/lib/data/photography";
import type { IllustrationId, PhotoSlotId } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Stands in for production photography (brief sections 5 & 39, and
 * PLACEHOLDERS.md). Every instance is typed to a documented shoot slot
 * (lib/data/photography.ts) so the placeholder doubles as art direction
 * rather than being a generic gray box. Composition is built as a layered
 * plate rather than a flat color field with one small icon: a fine
 * architectural grid for structure, a grounding horizon line, a confident
 * illustration mark, corner brackets, and a shot-brief caption — closer to
 * a survey drawing waiting for a photograph than an empty placeholder.
 */
export function PhotoPlaceholder({
  slot,
  icon,
  note,
  tone = "pine",
  corner = "bottom-right",
  className,
  aspect = "aspect-[4/5]",
  src,
}: {
  slot: PhotoSlotId;
  icon: IllustrationId;
  /** Page-specific detail appended to the slot's generic brief, e.g. a market name. */
  note?: string;
  tone?: "pine" | "bone" | "charcoal" | "wood";
  corner?: "bottom-right" | "top-left";
  className?: string;
  aspect?: string;
  /** Instance-specific real photo, taking precedence over REAL_PHOTOS[slot] — for a one-off swap without affecting every other instance of this slot. */
  src?: string;
}) {
  const { label, brief } = getPhotoSlot(slot);
  const realPhoto = src ?? REAL_PHOTOS[slot];

  if (realPhoto) {
    return (
      <figure className={cn("relative isolate overflow-hidden rounded-sm", aspect, className)}>
        <Image
          src={realPhoto}
          alt={note ?? brief}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </figure>
    );
  }

  const tones = {
    pine: "bg-[linear-gradient(160deg,var(--color-pine-500),var(--color-pine-700))] text-bone-50",
    bone: "bg-[linear-gradient(160deg,var(--color-bone-100),var(--color-stone-400))] text-ink",
    charcoal: "bg-[linear-gradient(160deg,var(--color-charcoal),var(--color-ink-700))] text-bone-50",
    wood: "bg-[linear-gradient(160deg,var(--color-wood-500),var(--color-wood-700))] text-bone-50",
  } as const;

  const iconPosition = corner === "bottom-right" ? "bottom-[-6%] right-[-6%]" : "top-[-6%] left-[-6%]";

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-sm",
        aspect,
        tones[tone],
        className,
      )}
    >
      <div className="blueprint-grid" />
      <div className="grain-overlay" />
      <div
        className="absolute inset-x-0 top-[58%] h-px bg-current opacity-[0.14]"
        aria-hidden="true"
      />
      <Illustration
        id={icon}
        className={cn("absolute h-[72%] w-[72%] opacity-[0.16]", iconPosition)}
      />
      <CornerMarks />

      <figcaption className="absolute bottom-7 left-7 right-7 max-w-[80%]">
        <span className="mb-2 block h-px w-8 bg-brass-300/80" />
        <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase opacity-90">
          Photo placeholder — {label}
        </span>
        <span className="mt-1 block text-xs leading-relaxed opacity-70">
          {note ?? brief}
        </span>
      </figcaption>
    </figure>
  );
}
