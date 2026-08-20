import { getSameDayConfig } from "@/lib/config/resolvers";
import type { Market } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Small inline badge used near CTAs — always derived from centralized same-day config. */
export function SameDayBadge({ market, className }: { market?: Market; className?: string }) {
  const sameDay = getSameDayConfig(market);
  const label = sameDay.enabled ? `Same-day service before ${sameDay.cutoffLabel}` : sameDay.fallbackHeadlinePhrase;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-pine-100 bg-pine-50 px-3 py-1 text-xs font-medium tracking-wide text-pine-700 uppercase",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pine-500" aria-hidden="true" />
      {label}
    </span>
  );
}
