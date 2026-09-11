import { PhoneLink } from "@/components/PhoneLink";
import { SectionHeading } from "@/components/SectionHeading";
import { PRICING, NEST_TYPE_EXPLANATION } from "@/lib/pricing";
import { PHONE_TOLLFREE } from "@/lib/site";

export function PricingTable() {
  return (
    <section className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-xl">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Pricing"
          lede="Straightforward pricing, in Canadian dollars. Tax and any required ladder access are never hidden behind a headline price."
        />

        <dl className="card mt-10 divide-y divide-line overflow-hidden shadow-card-lg">
          {PRICING.map((item) => (
            <div
              key={item.id}
              className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
            >
              <dt className="text-base font-semibold">{item.label}</dt>
              <dd className="shrink-0 font-display text-xl font-extrabold tracking-tight whitespace-nowrap">
                ${item.amount}{" "}
                <span className="font-sans text-sm font-medium text-muted">{item.qualifier}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-surface px-5 py-4">
            <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">Visible nest</p>
            <p className="mt-1.5 text-sm leading-relaxed">{NEST_TYPE_EXPLANATION.visible}</p>
          </div>
          <div className="rounded-xl bg-surface px-5 py-4">
            <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">Hidden nest</p>
            <p className="mt-1.5 text-sm leading-relaxed">{NEST_TYPE_EXPLANATION.hidden}</p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-muted">
          More than one nest, or a nest that needs ladder access, adds to the total — we&rsquo;ll
          walk through what applies to your property before any work begins.
        </p>

        <div className="mt-8 text-center">
          <PhoneLink location="pricing" className="btn btn-dark px-7 py-4 text-lg">
            Call {PHONE_TOLLFREE.display}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
