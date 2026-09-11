import { PhoneLink } from "@/components/PhoneLink";
import { SectionHeading } from "@/components/SectionHeading";
import { PHONE_TOLLFREE } from "@/lib/site";

/** "Got wasps going in and out of one spot?" — shared verbatim across the home and city pages since it's the same factual guidance regardless of location. */
export function NestSigns({ ctaLocation }: { ctaLocation: string }) {
  return (
    <section className="bg-white px-5 py-16 text-center sm:py-24">
      <div className="mx-auto max-w-xl">
        <SectionHeading eyebrow="Signs of a nest" title="Got Wasps Going In and Out of One Spot?" />
        <p className="mt-6 text-base leading-relaxed">
          If you&rsquo;re seeing wasps repeatedly entering and leaving the same opening around
          your roof, soffit, siding, brickwork, deck, shed or other area of your property, there
          may be an active nest.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Call Wasp Problem and tell us what you&rsquo;re seeing. Photos are helpful if you can
          safely take them.
        </p>
        <PhoneLink location={ctaLocation} className="btn btn-dark mt-8 px-7 py-4 text-lg">
          Call {PHONE_TOLLFREE.display}
        </PhoneLink>
      </div>
    </section>
  );
}
