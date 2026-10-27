import { GOOGLE_RATING } from "@/lib/config/site";
import { cn } from "@/lib/utils";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-3.5 w-3.5 shrink-0", className)} fill="currentColor" aria-hidden="true">
      <path d="M10 1.6l2.5 5.3 5.8.7-4.3 4 1.1 5.8L10 14.6l-5.1 2.8 1.1-5.8-4.3-4 5.8-.7L10 1.6z" />
    </svg>
  );
}

/**
 * The real Google rating as one line: five stars, the rating and the review
 * count, linked to the Google review page. The numbers live in GOOGLE_RATING
 * (lib/config/site.ts) and are the Business Profile's real figures, updated
 * by hand as reviews come in (owner, Oct 27 2026). Opens in a new tab so the
 * landing page stays put.
 */
/** `className` must carry the display class (default "inline-flex"), so a caller can hide the line per breakpoint. */
export function GoogleRating({ className }: { className?: string }) {
  if (!GOOGLE_RATING.enabled) return null;
  const { rating, count, href } = GOOGLE_RATING;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn("items-center gap-2 text-sm font-medium text-charcoal hover:text-pine-700", className ?? "inline-flex")}
      aria-label={`${rating} stars on Google from ${count} reviews, opens the Google review page in a new tab`}
    >
      <span className="flex gap-0.5 text-brass-400" aria-hidden="true">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      <span>
        {rating} on Google · {count} {count === 1 ? "review" : "reviews"}
      </span>
    </a>
  );
}
