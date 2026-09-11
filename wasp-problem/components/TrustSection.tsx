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
    <section className="bg-cream px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl uppercase sm:text-3xl">What Customers Say</h2>

        {reviews.length > 0 && (
          <ul className="mt-8 flex flex-col gap-4 text-left">
            {reviews.map((review) => (
              <li key={review.author} className="rounded-sm border-2 border-black/15 px-4 py-4">
                <p className="text-base leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-2 text-sm font-bold">
                  {review.author}
                  {review.source ? (
                    review.sourceUrl ? (
                      <>
                        {" "}
                        &middot;{" "}
                        <a href={review.sourceUrl} className="underline underline-offset-2">
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
              <li key={photo.src} className="overflow-hidden rounded-sm border-2 border-black/15">
                {/* eslint-disable-next-line @next/next/no-img-element -- real, supplied job photos; no benefit from next/image's remote-optimization config here */}
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                {photo.caption && (
                  <p className="px-2 py-1 text-xs text-black/70">{photo.caption}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
