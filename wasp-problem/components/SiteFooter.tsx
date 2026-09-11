import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 py-8 text-center text-white/70">
      <p className="text-sm font-bold text-white">Wasp Problem</p>
      <p className="mt-1 text-sm">Toronto, Ontario &middot; Serving Toronto &amp; the GTA</p>
      <p className="mt-2 text-sm">
        <PhoneLink location="footer-tollfree" className="underline underline-offset-2">
          {PHONE_TOLLFREE.display}
        </PhoneLink>{" "}
        or{" "}
        <PhoneLink
          number={PHONE_LOCAL}
          location="footer-local"
          className="underline underline-offset-2"
        >
          {PHONE_LOCAL.display}
        </PhoneLink>{" "}
        (
        <TextLink location="footer-text" className="underline underline-offset-2">
          text
        </TextLink>
        )
      </p>
      <p className="mt-1 text-sm">WaspProblem.ca</p>
    </footer>
  );
}
