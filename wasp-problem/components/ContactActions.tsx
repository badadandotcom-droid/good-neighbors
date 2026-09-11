import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

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

/**
 * Shared primary/secondary contact block: toll-free primary CTA, local
 * call-or-text secondary line, numeric equivalent in small print. Used in
 * the homepage hero, every city-page hero, and FinalCta — centralized so the
 * phone-number rules (toll-free primary, local secondary, SMS always local,
 * numeric equivalent visible) can't drift between three separate copies.
 */
export function ContactActions({
  ctaLocationPrefix,
  variant = "light",
}: {
  ctaLocationPrefix: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div className="mx-auto flex flex-col items-center">
      <PhoneLink
        location={`${ctaLocationPrefix}-primary`}
        className="btn btn-primary w-full max-w-xs px-7 py-4 text-xl sm:w-auto sm:min-w-72"
      >
        <PhoneIcon />
        {PHONE_TOLLFREE.display}
      </PhoneLink>

      <p className={`mt-2 text-xs ${isDark ? "text-white/60" : "text-muted"}`}>
        or dial {PHONE_TOLLFREE.numeric}
      </p>

      <p className={`mt-5 text-sm leading-8 font-medium ${isDark ? "text-white/85" : "text-ink"}`}>
        Local call or text:{" "}
        <PhoneLink
          number={PHONE_LOCAL}
          location={`${ctaLocationPrefix}-local-call`}
          className="inline-block -my-1.5 py-1.5 font-bold underline decoration-yellow decoration-2 underline-offset-4"
        >
          {PHONE_LOCAL.display}
        </PhoneLink>{" "}
        &middot;{" "}
        <TextLink
          location={`${ctaLocationPrefix}-text`}
          className="inline-block -my-1.5 py-1.5 font-bold underline decoration-yellow decoration-2 underline-offset-4"
        >
          Text Us
        </TextLink>
      </p>
    </div>
  );
}
