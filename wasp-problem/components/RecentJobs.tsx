import { SectionHeading } from "@/components/SectionHeading";
import { JOBS } from "@/lib/jobs";

/**
 * Our own summary of jobs we completed — factual, never framed as a customer
 * quotation or a review. Renders nothing while JOBS is empty.
 */
export function RecentJobs() {
  if (JOBS.length === 0) return null;

  return (
    <section className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Real jobs" title="Recent Work" />

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
                      {/* eslint-disable-next-line @next/next/no-img-element -- real job photos, already sized and compressed at 1200px square */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={1200}
                        loading="lazy"
                        decoding="async"
                        className="aspect-square h-full w-full object-cover"
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
