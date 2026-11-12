import { GOOGLE_RATING } from "@/lib/config/site";
import { cn } from "@/lib/utils";

const STAR_PATH = "M10 1.6l2.5 5.3 5.8.7-4.3 4 1.1 5.8L10 14.6l-5.1 2.8 1.1-5.8-4.3-4 5.8-.7L10 1.6z";

/**
 * One star, filled from the left by `fill` (0 to 1) over a pale base star.
 * The star's shape runs from x = 1.7 to x = 18.3 of the 20-wide box, so the
 * fill is measured across the shape, not the box: at 0.9 the tip of the right
 * arm stays pale and can be seen (a plain 90% of the box would hide nothing).
 */
function Star({ fill }: { fill: number }) {
  const f = Math.max(0, Math.min(1, fill));
  const pct = f >= 1 ? 100 : f <= 0 ? 0 : Math.round(((1.7 + f * 16.6) / 20) * 100);
  return (
    <span className="relative inline-block h-3.5 w-3.5 shrink-0">
      <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full text-stone-300" fill="currentColor" aria-hidden="true">
        <path d={STAR_PATH} />
      </svg>
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 max-w-none text-brass-400" fill="currentColor" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      </span>
    </span>
  );
}

/**
 * The real Google rating as one line: five stars filled to the real rating
 * (4.9 leaves a sliver of the fifth star unfilled, so the stars never claim a
 * flat 5), the rating, and "Read our reviews", linked to our Google listing.
 * No review count (owner, Nov 12 2026: "No count"; the count went stale with
 * every new review). The rating lives in GOOGLE_RATING (lib/config/site.ts)
 * and is the Business Profile's real figure, updated by hand when it moves.
 * Opens in a new tab so the landing page stays put.
 */
/** `className` must carry the display class (default "inline-flex"), so a caller can hide the line per breakpoint. */
export function GoogleRating({ className }: { className?: string }) {
  if (!GOOGLE_RATING.enabled) return null;
  const { rating, href } = GOOGLE_RATING;
  const value = Number(rating);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn("items-center gap-2 text-sm font-medium text-charcoal hover:text-pine-700", className ?? "inline-flex")}
      aria-label={`Rated ${rating} out of 5 on Google. Read our reviews, opens Google in a new tab`}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} fill={value - i} />
        ))}
      </span>
      <span>
        {rating} on Google · Read our reviews
      </span>
    </a>
  );
}
