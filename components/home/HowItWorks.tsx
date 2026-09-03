import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STEPS: { title: string; body: string }[] = [
  {
    title: "Tell us what's happening",
    body: "Call or send a quick request — what you're hearing or seeing, and where. No need to diagnose it yourself.",
  },
  {
    title: "We come out and handle it",
    body: "A technician arrives, confirms the situation, walks you through cost before any work begins, and removes the animal humanely and safely.",
  },
  {
    title: "We explain what happened",
    body: "If it's useful, we'll point out how the animal likely got in and what — if anything — makes sense to do next.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Three steps. No guesswork required." />

        <ol className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="font-display text-6xl leading-none text-brass-400" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-2xl text-charcoal">{step.title}</h3>
              <p className="max-w-[32ch] text-[15px] leading-relaxed text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
