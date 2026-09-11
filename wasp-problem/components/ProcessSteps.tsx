import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-black px-5 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="How it works" title="Simple. Fast. Local." tone="dark" />
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow font-display text-lg font-black text-black">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
