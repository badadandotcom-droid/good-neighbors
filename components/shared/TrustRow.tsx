import { GuaranteeLine } from "@/components/shared/GuaranteeLine";
import { cn } from "@/lib/utils";
import { GoogleRating } from "@/components/shared/GoogleRating";
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
 *   line and the Google rating are rendered by `CallNote` inside the button
 *   group, right under the Call button (owner, Oct 27 2026: "A real person
 *   answers 24/7." and the rating belong next to the number), so in this mode
 *   the row hides its own copies on phones and shows them only from `sm` up.
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
export function TrustRow({
  mobileOrder = false,
  guarantee = true,
  withCallNote = mobileOrder,
}: {
  mobileOrder?: boolean;
  guarantee?: boolean;
  /** True when the hero renders `CallNote` in its button group (always in mobileOrder mode; the homepage sets it by hand). */
  withCallNote?: boolean;
}) {
  if (mobileOrder) {
    return (
      <div className="contents sm:mt-4 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
        {guarantee && <GuaranteeLine className="order-4 mt-3 text-balance sm:order-none sm:mt-0" />}
        <p className="order-6 mt-4 text-sm font-medium text-pine-700 sm:order-none sm:mt-0">{INSURANCE.line}</p>
        {ALWAYS_ON_CALL.enabled && (
          <p className="order-7 hidden text-sm text-stone-500 sm:order-none sm:block">{ALWAYS_ON_CALL.heroLabel}</p>
        )}
        <GoogleRating className="order-7 hidden sm:order-none sm:inline-flex" />
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
      {guarantee && <GuaranteeLine />}
      <p className="text-sm font-medium text-pine-700">{INSURANCE.line}</p>
      {ALWAYS_ON_CALL.enabled && (
        <p className={cn("text-sm text-stone-500", withCallNote && "hidden sm:block")}>{ALWAYS_ON_CALL.heroLabel}</p>
      )}
      <GoogleRating className={withCallNote ? "hidden sm:inline-flex" : "inline-flex"} />
    </div>
  );
}

/**
 * The 24/7 line and the Google rating for phones, placed inside a hero's
 * button group directly under the Call button (owner, Oct 27 2026). Hidden
 * from `sm` up, where the trust row shows the same two. Use it only with a
 * `TrustRow` that has `withCallNote` (mobileOrder implies it), which hides
 * its own copies on phones, so nothing shows twice.
 */
export function CallNote() {
  return (
    <div className="-mt-1 flex flex-col gap-1.5 sm:hidden">
      {ALWAYS_ON_CALL.enabled && <p className="text-sm font-medium text-charcoal">{ALWAYS_ON_CALL.heroLabel}</p>}
      <GoogleRating />
    </div>
  );
}
