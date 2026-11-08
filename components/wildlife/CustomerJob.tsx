import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Testimonial } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

/**
 * One customer's message and the photos of that same job (owner's call, Nov 6
 * 2026; rules in lib/data/testimonials.ts). The label says plainly that it is
 * a message the customer sent us. No stars, no Google branding, no structured
 * data. Photos sit below the fold and load lazily.
 */
export function CustomerJob({ testimonial }: { testimonial: Testimonial }) {
  const { photos } = testimonial;
  const oddCount = photos.length % 2 === 1;

  return (
    <section id="recent-job" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="A recent job"
          title="Before, during and after"
          description="The photos and the message below are from the same job."
        />

        <figure className="mt-10 max-w-3xl border-l-2 border-brass-400 pl-6 sm:mt-12 sm:pl-8">
          <blockquote>
            <p className="font-display text-xl leading-snug text-charcoal text-pretty sm:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-5">
            <span className="block font-display text-lg text-charcoal">{testimonial.signature}</span>
            <span className="mt-1 block text-sm text-stone-500">{testimonial.label}</span>
          </figcaption>
        </figure>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {photos.map((photo, i) => {
            const centredLast = oddCount && i === photos.length - 1;
            return (
              <li key={photo.src} className={cn(centredLast && "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:mx-0 sm:w-auto")}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bone-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className={cn("object-cover", photo.position ?? "object-center")}
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-stone-500">{photo.label}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
