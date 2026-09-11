import { SectionHeading } from "@/components/SectionHeading";
import { TREATMENT_TIMELINE } from "@/lib/content";

export function TreatmentTimeline() {
  return (
    <section className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="What to expect"
          title="What Happens After Treatment?"
          lede="It is normal to see some wasp activity after treatment because wasps that were away from the nest may continue returning to the treated opening."
        />
        <p className="mt-3 text-center text-base font-bold">Activity should steadily decrease.</p>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {TREATMENT_TIMELINE.map((row) => (
            <li key={row.day} className="card px-5 py-5">
              <div className="inline-block rounded-md bg-yellow px-2.5 py-1 font-display text-sm font-extrabold tracking-tight text-black uppercase">
                {row.day}
              </div>
              <div className="mt-3 text-sm leading-relaxed sm:text-base">{row.result}</div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted">
          If the activity is not decreasing according to those expectations, contact us for
          follow-up.
        </p>
      </div>
    </section>
  );
}
