import { PhoneLink } from "@/components/PhoneLink";
import { PHONE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 py-8 text-center text-white/70">
      <p className="text-sm font-bold text-white">Wasp Problem</p>
      <p className="mt-1 text-sm">Toronto, Ontario</p>
      <PhoneLink location="footer" className="mt-1 block text-sm">
        {PHONE.display}
      </PhoneLink>
      <p className="mt-1 text-sm">WaspProblem.ca</p>
    </footer>
  );
}
