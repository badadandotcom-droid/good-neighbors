import { PhoneLink } from "@/components/PhoneLink";
import { PRICING, NEST_TYPE_EXPLANATION } from "@/lib/pricing";
import { PHONE_TOLLFREE } from "@/lib/site";

export function PricingTable() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl uppercase sm:text-3xl">Pricing</h2>
        <p className="mt-4 text-base leading-relaxed">
          Straightforward pricing, in Canadian dollars. Tax and any required ladder access are
          never hidden behind a headline price.
        </p>

        <dl className="mt-8 flex flex-col gap-3 text-left">
          {PRICING.map((item) => (
            <div
              key={item.id}
              className="flex items-baseline justify-between gap-4 rounded-sm border-2 border-black/15 bg-cream px-4 py-3"
            >
              <dt className="text-base font-bold">{item.label}</dt>
              <dd className="shrink-0 text-base font-black whitespace-nowrap">
                ${item.amount} <span className="text-sm font-medium">{item.qualifier}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-col gap-2 text-left text-sm leading-relaxed text-black/80">
          <p>{NEST_TYPE_EXPLANATION.visible}</p>
          <p>{NEST_TYPE_EXPLANATION.hidden}</p>
        </div>

        <p className="mt-6 text-sm leading-relaxed">
          More than one nest, or a nest that needs ladder access, adds to the total — we&rsquo;ll
          walk through what applies to your property before any work begins.
        </p>

        <PhoneLink
          location="pricing"
          className="mt-6 inline-block rounded-sm border-4 border-black px-6 py-3 text-lg font-black"
        >
          Call {PHONE_TOLLFREE.display}
        </PhoneLink>
      </div>
    </section>
  );
}
