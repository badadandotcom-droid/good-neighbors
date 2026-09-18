import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { JOBS } from "@/lib/jobs";
import { PHOTOS } from "@/lib/testimonials";

/**
 * Our own summary of jobs we completed — factual, never framed as a customer
 * quotation or a review. Renders nothing while there is nothing to show.
 */
export function RecentJobs() {
  if (JOBS.length === 0 && PHOTOS.length === 0) return null;
  // The first gallery photo leads the section; the rest fill the grid below it.
  const [lead, ...rest] = PHOTOS;

  return (
    <section className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Real jobs" title="Recent Work" />

        {lead && (
          <article className="card mt-10 overflow-hidden sm:grid sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
            <Image
              src={lead.src}
              alt={lead.alt}
              width={900}
              height={1200}
              priority={false}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
              className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full"
            />
            <div className="px-5 py-6 sm:flex sm:flex-col sm:justify-center sm:px-8 sm:py-8">
              <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                {lead.headline ?? lead.caption}
              </h3>
              {lead.detail && <p className="mt-3 text-base leading-relaxed text-muted">{lead.detail}</p>}
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="mt-10">
            <h3 className="text-center text-xs font-bold tracking-[0.14em] text-muted uppercase">
              More from recent jobs
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {rest.map((photo) => (
                <li key={photo.src}>
                  <figure className="card overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={900}
                      height={1200}
                      sizes="(min-width: 640px) 30vw, 45vw"
                      className="aspect-[3/4] h-full w-full object-cover"
                    />
                    {photo.caption && (
                      <figcaption className="px-3 py-2.5 text-xs leading-snug text-muted">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-6">
          {JOBS.map((job) => (
            <article key={job.id} className="card px-5 py-6 sm:px-8 sm:py-8">
              <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                {job.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{job.summary}</p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {job.images.map((image, i) => (
                  <figure key={image.src}>
                    <div className="overflow-hidden rounded-xl border border-line bg-surface">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1200}
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 85vw"
                        className="aspect-[3/4] h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 flex items-center gap-2.5 text-xs font-bold tracking-[0.12em] uppercase">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow font-display text-[0.7rem] font-black text-black">
                        {i + 1}
                      </span>
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
