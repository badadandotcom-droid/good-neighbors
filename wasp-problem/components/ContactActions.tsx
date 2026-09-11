import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

/**
 * Shared primary/secondary contact block: toll-free primary CTA, local
 * call-or-text secondary line, numeric equivalent in small print. Used in
 * the homepage hero, every city-page hero, and FinalCta — centralized so the
 * phone-number rules (toll-free primary, local secondary, SMS always local,
 * numeric equivalent visible) can't drift between three separate copies.
 *
 * `variant` picks button/text colors for the section it sits in: "light" for
 * the yellow hero backgrounds, "dark" for FinalCta's black background.
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
        className={
          isDark
            ? "inline-block w-full max-w-xs rounded-sm bg-yellow px-6 py-4 text-xl font-black tracking-tight text-black sm:w-auto"
            : "inline-block w-full max-w-xs rounded-sm bg-black px-6 py-4 text-xl font-black tracking-tight text-yellow sm:w-auto"
        }
      >
        CALL {PHONE_TOLLFREE.display}
      </PhoneLink>

      <p className={`mt-1 text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>
        or dial {PHONE_TOLLFREE.numeric}
      </p>

      <p className={`mt-4 text-sm font-medium ${isDark ? "text-white/90" : "text-black/80"}`}>
        Local call or text:{" "}
        <PhoneLink
          number={PHONE_LOCAL}
          location={`${ctaLocationPrefix}-local-call`}
          className="underline underline-offset-2"
        >
          {PHONE_LOCAL.display}
        </PhoneLink>{" "}
        &middot;{" "}
        <TextLink
          location={`${ctaLocationPrefix}-text`}
          className="underline underline-offset-2"
        >
          Text Us
        </TextLink>
      </p>
    </div>
  );
}
