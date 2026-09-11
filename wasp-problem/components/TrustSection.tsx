import { SectionHeading } from "@/components/SectionHeading";
import type { JobPhoto, Review } from "@/lib/testimonials";

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

/**
 * Renders nothing while both arrays are empty (see lib/testimonials.ts).
 * Never fabricate content here.
 */
export function TrustSection({
  reviews = [],
  photos = [],
}: {
  reviews?: readonly Review[];
  photos?: readonly JobPhoto[];
}) {
  if (reviews.length === 0 && photos.length === 0) return null;

  return (
    <section className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Real customers" title="What Customers Say" />

        {reviews.length > 0 && (
          <ul
            className={
              reviews.length === 1
                ? "mx-auto mt-10 max-w-xl"
                : "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
            }
          >
            {reviews.map((review) => (
              <li key={review.author} className="card px-6 py-6 sm:px-8 sm:py-7">
                {review.rating != null && <Stars rating={review.rating} />}
                <blockquote className="mt-4 text-lg leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-bold">
                  {review.author}
                  {review.source ? (
                    <span className="font-medium text-muted">
                      {" "}
                      &middot;{" "}
                      {review.sourceUrl ? (
                        <a href={review.sourceUrl} className="underline underline-offset-4">
                          {review.source}
                        </a>
                      ) : (
                        review.source
                      )}
                    </span>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        )}

        {photos.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((photo) => (
              <li key={photo.src} className="card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- real, supplied job photos; no benefit from next/image's remote-optimization config here */}
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                {photo.caption && <p className="px-3 py-2 text-xs text-muted">{photo.caption}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
