import { ReviewStrip } from "@/components/ReviewStrip";
import { SectionHeading } from "@/components/SectionHeading";
import type { Review } from "@/lib/testimonials";

/**
 * Renders nothing while the reviews array is empty (see lib/testimonials.ts).
 * Never fabricate content here.
 */
export function TrustSection({ reviews = [] }: { reviews?: readonly Review[] }) {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Real customers" title="What Customers Say" />
        <ReviewStrip reviews={reviews} />
      </div>
    </section>
  );
}
