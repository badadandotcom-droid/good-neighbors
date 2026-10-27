import { GuaranteeLine } from "@/components/shared/GuaranteeLine";
import { ALWAYS_ON_CALL, INSURANCE } from "@/lib/config/site";

/**
 * The three trust lines under a page's hero buttons: the short guarantee
 * line, the insurance line and, while ALWAYS_ON_CALL is enabled, the 24/7
 * line. One component so every page carries the same three claims in the
 * same words: the homepage, the Toronto hub, the city pages, the wildlife
 * pages and damage repair. The wording lives in lib/config/site.ts.
 *
 * `mobileOrder` is for the ad landing pages' heroes (Oct 2026). On a phone the
 * hero text column is a flex column and these three lines become its direct
 * children, so the guarantee line can sit right under the H1 while the
 * insurance and 24/7 lines stay under the buttons:
 *   H1, guarantee, buttons, insurance, then the explanatory text; the 24/7
 *   line is rendered by `CallNote` inside the button group, right under the
 *   Call button (owner, Oct 27 2026: "A real person answers 24/7." belongs
 *   next to the number), so in this mode the row hides its own 24/7 line on
 *   phones and shows it only from `sm` up.
 * The parent must be `flex flex-col sm:block` and give its own children the
 * orders around these: 1 back link, 2 badge or kicker, 3 H1, 4 guarantee,
 * 5 buttons, 6 insurance, 7 (24/7, desktop only), 8 and up the explanatory text.
 * From `sm` up nothing changes: the lines sit in one row under the buttons.
 *
 * `guarantee={false}` leaves the guarantee line out (owner, Oct 22 2026): the
 * lifetime guarantee is for the entry points we seal, so a page about a job
 * that seals nothing (dead animal removal) shows only the insurance and 24/7
 * lines. Every other page keeps all three.
 */
export function TrustRow({ mobileOrder = false, guarantee = true }: { mobileOrder?: boolean; guarantee?: boolean }) {
  if (mobileOrder) {
    return (
      <div className="contents sm:mt-4 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
        {guarantee && <GuaranteeLine className="order-4 mt-3 text-balance sm:order-none sm:mt-0" />}
        <p className="order-6 mt-4 text-sm font-medium text-pine-700 sm:order-none sm:mt-0">{INSURANCE.line}</p>
        {ALWAYS_ON_CALL.enabled && (
          <p className="order-7 hidden text-sm text-stone-500 sm:order-none sm:block">{ALWAYS_ON_CALL.heroLabel}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
      {guarantee && <GuaranteeLine />}
      <p className="text-sm font-medium text-pine-700">{INSURANCE.line}</p>
      {ALWAYS_ON_CALL.enabled && <p className="text-sm text-stone-500">{ALWAYS_ON_CALL.heroLabel}</p>}
    </div>
  );
}

/**
 * The 24/7 line for phones, placed inside a hero's button group directly
 * under the Call button (owner, Oct 27 2026). Hidden from `sm` up, where the
 * trust row shows the same line. Use it only with `<TrustRow mobileOrder />`,
 * which hides its own copy on phones, so the line never shows twice.
 */
export function CallNote() {
  if (!ALWAYS_ON_CALL.enabled) return null;
  return <p className="-mt-1 text-sm font-medium text-charcoal sm:hidden">{ALWAYS_ON_CALL.heroLabel}</p>;
}
