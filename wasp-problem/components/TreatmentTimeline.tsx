import { TREATMENT_TIMELINE } from "@/lib/content";

export function TreatmentTimeline() {
  return (
    <section className="px-5 py-12 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl uppercase sm:text-3xl">What Happens After Treatment?</h2>
        <p className="mt-4 text-base leading-relaxed">
          It is normal to see some wasp activity after treatment because wasps that were away
          from the nest may continue returning to the treated opening.
        </p>
        <p className="mt-3 text-base font-bold">Activity should steadily decrease.</p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {TREATMENT_TIMELINE.map((row) => (
            <div key={row.day} className="rounded-sm border-4 border-black px-4 py-4">
              <div className="text-lg font-black uppercase">{row.day}</div>
              <div className="mt-1 text-sm font-medium">{row.result}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed">
          If the activity is not decreasing according to those expectations, contact us for
          follow-up.
        </p>
      </div>
    </section>
  );
}
