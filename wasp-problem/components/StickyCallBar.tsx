import { PhoneLink } from "@/components/PhoneLink";
import { PHONE_TOLLFREE } from "@/lib/site";

/** Persistent mobile-only call button — one dominant action, the fastest path to a call from anywhere on the page. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 p-2.5 shadow-bar backdrop-blur sm:hidden">
      <PhoneLink
        location="sticky-mobile"
        className="btn btn-primary w-full py-3.5 text-lg"
      >
        Call {PHONE_TOLLFREE.display}
      </PhoneLink>
    </div>
  );
}
