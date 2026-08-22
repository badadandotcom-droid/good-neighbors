import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Illustration } from "@/components/illustrations/Illustration";
import type { IllustrationId } from "@/lib/types";

const STEPS: { title: string; body: string; icon: IllustrationId }[] = [
  {
    title: "Tell us what's happening",
    body: "Call or send a quick request — what you're hearing or seeing, and where. No need to diagnose it yourself.",
    icon: "phone-call",
  },
  {
    title: "We come out and handle it",
    body: "A technician arrives, confirms the situation, walks you through cost before any work begins, and removes the animal humanely and safely.",
    icon: "roofline",
  },
  {
    title: "We explain what happened",
    body: "If it's useful, we'll point out how the animal likely got in and what — if anything — makes sense to do next.",
    icon: "shield-home",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Three steps. No guesswork required." />

        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 bottom-6 w-px bg-stone-400 sm:left-0 sm:right-0 sm:top-7 sm:bottom-auto sm:h-px sm:w-auto"
          />
          <ol className="relative flex flex-col gap-10 sm:flex-row sm:gap-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 sm:flex-1 sm:flex-col sm:items-center sm:gap-5 sm:text-center">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-pine-600 bg-bone-50 font-display text-xl text-pine-600 sm:bg-bone">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <Illustration id={step.icon} weight="bold" className="mb-3 hidden h-9 w-9 text-brass-400 sm:mx-auto sm:block" />
                  <h3 className="font-display text-2xl text-charcoal">{step.title}</h3>
                  <p className="mt-2 max-w-[30ch] text-[15px] leading-relaxed text-ink-700 sm:mx-auto">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
