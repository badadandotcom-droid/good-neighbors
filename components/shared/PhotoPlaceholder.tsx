import { Illustration } from "@/components/illustrations/Illustration";
import type { IllustrationId } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Stands in for production photography (see brief section 39/56 and
 * PLACEHOLDERS.md). Rather than a gray box, this renders an art-directed
 * panel — brand-colored gradient, subtle grid texture, and a line-art mark
 * — with a small caption describing the photo that belongs there, so it's
 * unmistakably a placeholder rather than a design choice masquerading as
 * finished content.
 */
export function PhotoPlaceholder({
  icon,
  caption,
  tone = "pine",
  className,
  aspect = "aspect-[4/5]",
}: {
  icon: IllustrationId;
  caption: string;
  tone?: "pine" | "bone" | "charcoal";
  className?: string;
  aspect?: string;
}) {
  const tones = {
    pine: "bg-[linear-gradient(155deg,var(--color-pine-600),var(--color-pine-700))] text-bone-50",
    bone: "bg-[linear-gradient(155deg,var(--color-bone-100),var(--color-stone-300))] text-ink",
    charcoal: "bg-[linear-gradient(155deg,var(--color-charcoal),var(--color-ink-700))] text-bone-50",
  } as const;

  return (
    <div
      className={cn(
        "relative isolate flex items-end overflow-hidden rounded-sm",
        aspect,
        tones[tone],
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <Illustration
        id={icon}
        className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 opacity-40 sm:h-32 sm:w-32"
      />
      <p className="relative m-4 rounded-full bg-black/20 px-3 py-1.5 text-[11px] font-medium tracking-wide backdrop-blur-sm">
        Photography placeholder — {caption}
      </p>
    </div>
  );
}
