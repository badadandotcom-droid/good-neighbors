import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-black px-5 py-12 text-white">
      <div className="mx-auto max-w-md">
        <h2 className="text-center text-2xl text-yellow uppercase sm:text-3xl">
          Simple. Fast. Local.
        </h2>
        <ol className="mt-8 flex flex-col gap-6">
          {PROCESS_STEPS.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow text-lg font-black text-black">
                {step.n}
              </span>
              <div>
                <h3 className="text-lg font-black">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
