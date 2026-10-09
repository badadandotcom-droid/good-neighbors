import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { getHoursNote, getPhone } from "@/lib/config/resolvers";
import { THANK_YOU_PATH } from "@/lib/forms/lead";
import { pageMetadata } from "@/lib/seo";

/**
 * Where the Get Help form sends a visitor once their request has been
 * delivered. Kept out of search results (noindex, and not in the sitemap):
 * it only makes sense right after sending a request. It never records a
 * conversion; the form does that once, before coming here.
 *
 * It promises contact, but not how: the owner plans automatic texts and
 * emails, and this page should mention them only once they exist.
 */
export const metadata = pageMetadata({
  title: "Request Received",
  description:
    "Thank you for contacting Good Neighbors Wildlife. Your request came through, and we'll be in touch soon. If you need help right away, please give us a call.",
  path: THANK_YOU_PATH,
  noIndex: true,
});

const NEXT_STEPS: { title: string; body: string }[] = [
  {
    title: "We look over your request",
    body: "We read what you told us and look at any photos you sent.",
  },
  {
    title: "We contact you",
    body: "We talk it through with you and set a time to come out.",
  },
  {
    title: "A technician comes out",
    body: "They confirm what's going on and explain the cost before any work begins.",
  },
];

export default function ThankYouPage() {
  const phone = getPhone();

  return (
    <section className="py-14 sm:py-20">
      <Container>
        {/* An inner wrapper sets the reading width: `cn` doesn't merge classes, so a
            max-w on Container itself would lose to its own max-w-7xl. */}
        <div className="max-w-2xl">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full border border-pine-600 text-pine-600"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5 9.5 17 19 7.5" />
            </svg>
          </span>

          <p className="mt-8 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
            <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
            Request received
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
            Thank you.<br className="hidden sm:inline" /> We&apos;ll be in touch soon.
          </h1>

          <h2 className="mt-12 border-t border-stone-300 pt-10 font-display text-2xl text-charcoal">
            What happens next
          </h2>
          <ol className="mt-8 flex flex-col gap-7">
            {NEXT_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="w-10 shrink-0 font-display text-3xl leading-none text-brass-400" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-sm border border-stone-300 bg-bone-50 p-6 sm:p-8">
            <h2 className="font-display text-xl text-charcoal">Need help right away?</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-700">Calling is the fastest way to reach us.</p>
            <PhoneLink phone={phone} location="thank-you" className="mt-4 text-lg text-pine-700 hover:text-pine-600" />
            <p className="mt-2 text-xs leading-relaxed text-stone-500">{getHoursNote()}</p>
          </div>

          <CTAButton href="/" size="lg" variant="secondary" className="mt-10">
            Back to homepage
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
