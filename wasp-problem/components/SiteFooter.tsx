import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

/** Negative margin keeps the line rhythm while the padding enlarges the tap target. */
const FOOTER_LINK =
  "inline-block -my-1.5 py-1.5 font-semibold text-white underline decoration-yellow decoration-2 underline-offset-4";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-base font-extrabold tracking-tight text-white uppercase">
          Wasp Problem
        </p>
        <p className="mt-2">Toronto, Ontario &middot; Serving Toronto &amp; the GTA</p>
        <p className="mt-3 leading-8">
          <PhoneLink location="footer-tollfree" className={FOOTER_LINK}>
            {PHONE_TOLLFREE.display}
          </PhoneLink>{" "}
          or{" "}
          <PhoneLink number={PHONE_LOCAL} location="footer-local" className={FOOTER_LINK}>
            {PHONE_LOCAL.display}
          </PhoneLink>{" "}
          (
          <TextLink location="footer-text" className="inline-block -my-1.5 py-1.5 underline underline-offset-4">
            text
          </TextLink>
          )
        </p>
        <p className="mt-4 text-xs text-white/60">WaspProblem.ca</p>
      </div>
    </footer>
  );
}
