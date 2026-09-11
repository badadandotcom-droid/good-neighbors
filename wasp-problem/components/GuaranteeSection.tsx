import { GUARANTEE } from "@/lib/site";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="bg-cream px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl uppercase sm:text-3xl">{GUARANTEE.name}</h2>
        <p className="mt-4 text-base leading-relaxed">{GUARANTEE.summary}</p>
      </div>
    </section>
  );
}
