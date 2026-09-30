import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { TollFreeNumber } from "@/components/TollFreeNumber";
import { LEAD_FORM_ANCHOR } from "@/components/LeadFormSection";
import { leadFormEnabled } from "@/lib/leads";
import { PHONE_LOCAL } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-2.8-.4L3 21l1.5-5.2A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z" />
    </svg>
  );
}

/**
 * Primary branded call, then the local number as two separate, equally
 * reachable actions. Texting is never offered on the toll-free number — that
 * line takes calls only — so TextLink is hardcoded to PHONE_LOCAL and the
 * toll-free number is never described as text-capable anywhere, including in
 * accessible names.
 *
 * `requestLink` adds a quiet link down to the online request form — heroes
 * only, on pages that carry LeadFormSection, and only once that form is live.
 */
export function ContactActions({
  ctaLocationPrefix,
  variant = "light",
  requestLink = false,
}: {
  ctaLocationPrefix: string;
  variant?: "light" | "dark";
  requestLink?: boolean;
}) {
  const isDark = variant === "dark";
  const secondary = isDark
    ? "btn min-h-11 border-[1.5px] border-white/30 bg-transparent px-5 py-3 text-base text-white hover:border-white hover:bg-white/10"
    : "btn btn-outline min-h-11 px-5 py-3 text-base";

  return (
    <div className="mx-auto flex flex-col items-center">
      <PhoneLink
        location={`${ctaLocationPrefix}-primary`}
        className="btn btn-primary min-h-14 w-full max-w-xs px-7 py-4 text-xl sm:w-auto sm:min-w-72"
      >
        <PhoneIcon />
        <TollFreeNumber />
      </PhoneLink>

      <div className="mt-3 w-full max-w-xs sm:w-auto">
        <TextLink location={`${ctaLocationPrefix}-text`} className={`${secondary} w-full sm:w-auto`}>
          <TextIcon />
          Text {PHONE_LOCAL.display}
        </TextLink>
      </div>

      {requestLink && leadFormEnabled() && (
        <p className={`mt-4 text-sm ${isDark ? "text-white/75" : "text-muted"}`}>
          Prefer not to call?{" "}
          <a
            href={`#${LEAD_FORM_ANCHOR}`}
            className={`inline-flex min-h-11 items-center font-semibold underline decoration-2 underline-offset-4 ${isDark ? "text-white decoration-yellow" : "text-ink decoration-yellow-deep"}`}
          >
            Send a request online
          </a>
        </p>
      )}
    </div>
  );
}
