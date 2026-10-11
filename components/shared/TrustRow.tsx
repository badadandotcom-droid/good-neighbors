import { GuaranteeLine } from "@/components/shared/GuaranteeLine";
import { ALWAYS_ON_CALL, INSURANCE } from "@/lib/config/site";

/**
 * The three trust lines under a page's hero buttons: the short guarantee
 * line, the insurance line and, while ALWAYS_ON_CALL is enabled, the 24/7
 * line. One component so every page carries the same three claims in the
 * same words: the homepage, the Toronto hub, the city pages, the wildlife
 * pages and damage repair. The wording lives in lib/config/site.ts.
 */
export function TrustRow() {
  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
      <GuaranteeLine />
      <p className="text-sm font-medium text-pine-700">{INSURANCE.line}</p>
      {ALWAYS_ON_CALL.enabled && <p className="text-sm text-stone-500">{ALWAYS_ON_CALL.heroLabel}</p>}
    </div>
  );
}
