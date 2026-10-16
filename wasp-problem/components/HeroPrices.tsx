import { Check } from "@/components/TrustPoints";
import { PRICING } from "@/lib/pricing";
import { GUARANTEE } from "@/lib/site";

/**
 * The flat prices and the guarantee for an ad landing page's first phone screen, under the H1
 * and above the Call button. Figures come from lib/pricing.ts; never "from" or "starting at".
 */
export function HeroPrices() {
  const visible = PRICING.find((p) => p.id === "visible-nest")!;
  const hidden = PRICING.find((p) => p.id === "hidden-nest")!;
  const extra = PRICING.find((p) => p.id === "additional-nest")!;
  const ladder = PRICING.find((p) => p.id === "ladder-fee")!;

  return (
    <>
      <dl className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3">
        {[visible, hidden].map((item) => (
          <div key={item.id} className="card px-3 py-4">
            <dt className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
              {item.id === "visible-nest" ? "Visible nest" : "Hidden nest"}
            </dt>
            <dd className="mt-1 font-display text-4xl font-black tracking-tight">${item.amount}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm text-muted">
        Each additional nest ${extra.amount} &middot; Ladder fee ${ladder.amount} (10&ndash;25 ft)
      </p>

      <p className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold">
        <Check />
        <a
          href="#guarantee"
          className="inline-flex min-h-11 -my-3 items-center underline decoration-yellow decoration-2 underline-offset-4"
        >
          {GUARANTEE.name}
        </a>
      </p>
    </>
  );
}
