import { PhoneLink } from "@/components/PhoneLink";
import { PHONE } from "@/lib/site";

/** "Got wasps going in and out of one spot?" — shared verbatim across the home and city pages since it's the same factual guidance regardless of location. */
export function NestSigns({ ctaLocation }: { ctaLocation: string }) {
  return (
    <section className="px-5 py-12 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl uppercase sm:text-3xl">
          Got Wasps Going In and Out of One Spot?
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          If you&rsquo;re seeing wasps repeatedly entering and leaving the same opening around
          your roof, soffit, siding, brickwork, deck, shed or other area of your property, there
          may be an active nest.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Call Wasp Problem and tell us what you&rsquo;re seeing. Photos are helpful if you can
          safely take them.
        </p>
        <PhoneLink
          location={ctaLocation}
          className="mt-6 inline-block rounded-sm border-4 border-black px-6 py-3 text-lg font-black"
        >
          Call {PHONE.display}
        </PhoneLink>
      </div>
    </section>
  );
}
