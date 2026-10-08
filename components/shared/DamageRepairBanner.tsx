import Link from "next/link";
import { Illustration } from "@/components/illustrations/Illustration";
import { DAMAGE_REPAIR_PATH } from "@/lib/data/repairs";
import { cn } from "@/lib/utils";

/** "Damage repair" as a listed service, sitting under the wildlife grids. */
export function DamageRepairBanner({ className }: { className?: string }) {
  return (
    <Link
      href={DAMAGE_REPAIR_PATH}
      className={cn(
        "group flex flex-col gap-4 rounded-sm border border-stone-300 bg-bone-50 p-5 transition-all duration-200 hover:border-pine-500 hover:bg-white hover:shadow-card sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <span className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine-50 transition-colors duration-200 group-hover:bg-pine-100">
          <Illustration id="roofline" weight="bold" className="h-7 w-7 text-pine-600" />
        </span>
        <span>
          <span className="block font-display text-lg leading-tight text-charcoal">Damage repair</span>
          <span className="mt-1 block text-sm leading-relaxed text-ink-700">
            Once the animal is out, we seal the entry point and repair the damage it caused.
          </span>
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-pine-600 group-hover:text-pine-700">
        See the repairs we handle
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
