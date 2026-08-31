import { PhoneLink } from "@/components/PhoneLink";
import { PHONE } from "@/lib/site";

/** Persistent mobile-only call button — the fastest path to a call from anywhere on the page. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-black bg-yellow sm:hidden">
      <PhoneLink
        location="sticky-mobile"
        className="flex items-center justify-center gap-2 py-4 text-lg font-black tracking-tight text-black"
      >
        CALL NOW — {PHONE.display}
      </PhoneLink>
    </div>
  );
}
