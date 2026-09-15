import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

/** Mobile-only: the same two actions as the hero — call the branded number, or text the line that accepts texts. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 bg-white/95 p-2.5 shadow-bar backdrop-blur sm:hidden">
      <PhoneLink
        location="sticky-mobile"
        className="btn btn-primary min-h-12 flex-1 py-3 text-base"
      >
        Call {PHONE_TOLLFREE.display}
      </PhoneLink>
      <TextLink
        location="sticky-mobile-text"
        className="btn btn-outline min-h-12 shrink-0 px-4 py-3 text-base"
        ariaLabel={`Text ${PHONE_LOCAL.display}`}
      >
        Text
      </TextLink>
    </div>
  );
}
