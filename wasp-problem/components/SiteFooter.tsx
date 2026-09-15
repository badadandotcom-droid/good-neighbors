import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

const FOOTER_LINK =
  "inline-flex min-h-11 items-center font-semibold text-white underline decoration-yellow decoration-2 underline-offset-4";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-base font-extrabold tracking-tight text-white uppercase">
          Wasp Problem
        </p>
        <p className="mt-2">Toronto, Ontario &middot; Serving Toronto &amp; the GTA</p>

        <p className="mt-3">
          Call:{" "}
          <PhoneLink location="footer-tollfree" className={FOOTER_LINK}>
            {PHONE_TOLLFREE.display}
          </PhoneLink>{" "}
          <span className="text-white/50">({PHONE_TOLLFREE.numeric})</span>
        </p>
        <p className="mt-1">
          Call or text:{" "}
          <PhoneLink number={PHONE_LOCAL} location="footer-local" className={FOOTER_LINK}>
            {PHONE_LOCAL.display}
          </PhoneLink>{" "}
          <span className="text-white/50">&middot;</span>{" "}
          <TextLink location="footer-text" className={FOOTER_LINK}>
            Text us
          </TextLink>
        </p>

        <p className="mt-4 text-xs text-white/60">WaspProblem.ca</p>
      </div>
    </footer>
  );
}
