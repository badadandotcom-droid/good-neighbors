"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "@/lib/testimonials";

/** Per-review star rating only — never an aggregate score for the business. */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
          <path
            d="M10 1.6l2.6 5.2 5.8.9-4.2 4.1 1 5.7L10 14.8l-5.2 2.7 1-5.7L1.6 7.7l5.8-.9z"
            fill={i < rating ? "currentColor" : "none"}
            stroke="rgb(10 10 10 / 0.4)"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "prev" ? "M12.5 4.5L7 10l5.5 5.5" : "M7.5 4.5L13 10l-5.5 5.5"} />
    </svg>
  );
}

/**
 * A sideways strip of review cards. The section stays the same height no
 * matter how many reviews there are, so pricing never gets pushed further
 * down the page as reviews are added. Swiping is native scroll-snap — no
 * carousel library and nothing moves on its own. The arrow buttons are only
 * shown when there is more to scroll to.
 */
export function ReviewStrip({ reviews }: { reviews: readonly Review[] }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [reviews.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const showArrows = canPrev || canNext;

  return (
    <div className="mt-10">
      <ul
        ref={scroller}
        tabIndex={0}
        aria-label="Customer reviews"
        className="-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-0 sm:scroll-px-0 sm:px-0"
      >
        {reviews.map((review) => (
          <li
            key={review.author}
            className="card flex w-[85%] shrink-0 snap-start flex-col px-6 py-6 sm:w-[calc(50%-0.5rem)] sm:px-8 sm:py-7 lg:w-[calc(33.333%-0.667rem)]"
          >
            {review.rating != null && <Stars rating={review.rating} />}
            <blockquote className="mt-4 line-clamp-5 text-lg leading-relaxed">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <div className="mt-4 pt-1">
              <p className="text-sm font-bold">{review.author}</p>
              {review.sourceUrl ? (
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${review.author}'s review on ${review.source ?? "Google"}`}
                  className="mt-1 inline-flex min-h-11 items-center text-base font-bold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-[3px]"
                >
                  Read on {review.source ?? "Google"}
                </a>
              ) : (
                review.source && <p className="mt-1 text-sm font-medium text-muted">{review.source}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showArrows && (
        <div className="mt-5 hidden justify-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous reviews"
            className="btn btn-outline h-11 w-11 rounded-full p-0 disabled:cursor-default disabled:opacity-35 disabled:hover:border-line"
          >
            <Arrow direction="prev" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next reviews"
            className="btn btn-outline h-11 w-11 rounded-full p-0 disabled:cursor-default disabled:opacity-35 disabled:hover:border-line"
          >
            <Arrow direction="next" />
          </button>
        </div>
      )}
    </div>
  );
}
