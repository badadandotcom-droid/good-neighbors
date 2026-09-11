import { ContactActions } from "@/components/ContactActions";

export function FinalCta({ ctaLocation }: { ctaLocation: string }) {
  return (
    <section className="bg-black px-5 py-14 text-center">
      <h2 className="text-4xl leading-[0.95] font-black text-yellow uppercase sm:text-6xl">
        Wasp
        <br />
        Problem?
      </h2>
      <p className="mt-3 text-sm font-medium text-white/80">Serving Toronto &amp; the GTA</p>
      <div className="mt-6">
        <ContactActions ctaLocationPrefix={ctaLocation} variant="dark" />
      </div>
    </section>
  );
}
