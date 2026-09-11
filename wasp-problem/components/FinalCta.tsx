import { ContactActions } from "@/components/ContactActions";
import { TrustPoints } from "@/components/TrustPoints";

export function FinalCta({ ctaLocation }: { ctaLocation: string }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-center sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(60%_60%_at_50%_100%,rgb(255_212_0_/_0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-4xl leading-[0.95] text-yellow uppercase sm:text-6xl">
          Wasp
          <br />
          Problem?
        </h2>
        <p className="mt-4 text-base font-medium text-white/75 sm:text-lg">
          Serving Toronto &amp; the GTA
        </p>
        <div className="mt-8">
          <ContactActions ctaLocationPrefix={ctaLocation} variant="dark" />
        </div>
        <div className="mt-9 flex justify-center">
          <TrustPoints tone="dark" />
        </div>
      </div>
    </section>
  );
}
