import { PhoneLink } from "@/components/PhoneLink";
import { PHONE } from "@/lib/site";

export function FinalCta({ ctaLocation }: { ctaLocation: string }) {
  return (
    <section className="bg-black px-5 py-14 text-center">
      <h2 className="text-4xl leading-[0.95] font-black text-yellow uppercase sm:text-6xl">
        Wasp
        <br />
        Problem?
      </h2>
      <PhoneLink
        location={ctaLocation}
        className="mt-7 inline-block w-full max-w-xs rounded-sm bg-yellow px-6 py-4 text-xl font-black tracking-tight text-black sm:w-auto"
      >
        CALL NOW
        <br className="sm:hidden" />
        <span className="sm:ml-2">{PHONE.display}</span>
      </PhoneLink>
    </section>
  );
}
