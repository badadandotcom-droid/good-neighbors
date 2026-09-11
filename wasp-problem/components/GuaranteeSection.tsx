import { GUARANTEE } from "@/lib/site";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="bg-surface px-5 py-16 sm:py-24">
      <div className="card mx-auto max-w-2xl px-6 py-9 text-center shadow-card-lg sm:px-12 sm:py-12">
        <div
          className="mx-auto flex h-20 w-20 flex-col items-center justify-center rounded-full bg-yellow font-display leading-none text-black"
          aria-hidden="true"
        >
          <span className="text-3xl font-black tracking-tight">90</span>
          <span className="mt-0.5 text-[0.6rem] font-extrabold tracking-[0.18em] uppercase">Day</span>
        </div>
        <p className="mt-5 text-xs font-bold tracking-[0.14em] text-muted uppercase">Our commitment</p>
        <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">{GUARANTEE.name}</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed sm:text-lg">{GUARANTEE.summary}</p>
      </div>
    </section>
  );
}
