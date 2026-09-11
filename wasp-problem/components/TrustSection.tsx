import { SectionHeading } from "@/components/SectionHeading";
import type { JobPhoto, Review } from "@/lib/testimonials";

/**
 * Renders nothing while both arrays are empty — prepared but off the live
 * page until real, approved reviews/photos exist (see lib/testimonials.ts).
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
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <li key={review.author} className="card px-5 py-5">
                <p className="text-base leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-bold">
                  {review.author}
                  {review.source ? (
                    review.sourceUrl ? (
                      <>
                        {" "}
                        &middot;{" "}
                        <a href={review.sourceUrl} className="underline underline-offset-4">
                          {review.source}
                        </a>
                      </>
                    ) : (
                      <> &middot; {review.source}</>
                    )
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
