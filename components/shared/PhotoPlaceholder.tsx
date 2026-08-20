import { Illustration } from "@/components/illustrations/Illustration";
import { CornerMarks } from "@/components/shared/CornerMarks";
import { getPhotoSlot } from "@/lib/data/photography";
import type { IllustrationId, PhotoSlotId } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Stands in for production photography (brief sections 5 & 39, and
 * PLACEHOLDERS.md). Every instance is typed to a documented shoot slot
 * (lib/data/photography.ts) so the placeholder doubles as art direction
 * rather than being a generic gray box. Composition intentionally echoes a
 * specimen plate: corner brackets, a restrained grain, and an illustration
 * mark bleeding off one corner rather than centered — closer to a
 * photograph waiting to be dropped in than an icon-in-a-box.
 */
export function PhotoPlaceholder({
  slot,
  icon,
  note,
  tone = "pine",
  corner = "bottom-right",
  className,
  aspect = "aspect-[4/5]",
}: {
  slot: PhotoSlotId;
  icon: IllustrationId;
  /** Page-specific detail appended to the slot's generic brief, e.g. a market name. */
  note?: string;
  tone?: "pine" | "bone" | "charcoal" | "wood";
  corner?: "bottom-right" | "top-left";
  className?: string;
  aspect?: string;
}) {
  const { label, brief } = getPhotoSlot(slot);

  const tones = {
    pine: "bg-[linear-gradient(160deg,var(--color-pine-500),var(--color-pine-700))] text-bone-50",
    bone: "bg-[linear-gradient(160deg,var(--color-bone-100),var(--color-stone-400))] text-ink",
    charcoal: "bg-[linear-gradient(160deg,var(--color-charcoal),var(--color-ink-700))] text-bone-50",
    wood: "bg-[linear-gradient(160deg,var(--color-wood-500),var(--color-wood-700))] text-bone-50",
  } as const;

  const iconPosition =
    corner === "bottom-right"
      ? "bottom-[-10%] right-[-8%]"
      : "top-[-10%] left-[-8%]";

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-sm",
        aspect,
        tones[tone],
        className,
      )}
    >
      <div className="grain-overlay" />
      <Illustration
        id={icon}
        className={cn("absolute h-[60%] w-[60%] opacity-[0.22]", iconPosition)}
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
