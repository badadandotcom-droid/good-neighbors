import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-base font-extrabold tracking-tight text-white uppercase">
          Wasp Problem
        </p>
        <p className="mt-2">Toronto, Ontario &middot; Serving Toronto &amp; the GTA</p>
        <p className="mt-3">
          <PhoneLink location="footer-tollfree" className="font-semibold text-white underline decoration-yellow decoration-2 underline-offset-4">
            {PHONE_TOLLFREE.display}
          </PhoneLink>{" "}
          or{" "}
          <PhoneLink
            number={PHONE_LOCAL}
            location="footer-local"
            className="font-semibold text-white underline decoration-yellow decoration-2 underline-offset-4"
          >
            {PHONE_LOCAL.display}
          </PhoneLink>{" "}
          (
          <TextLink location="footer-text" className="underline underline-offset-4">
            text
          </TextLink>
          )
        </p>
        <p className="mt-4 text-xs text-white/40">WaspProblem.ca</p>
      </div>
    </footer>
  );
}
