import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Tell us what's happening",
    body: "Call or send a quick request — what you're hearing or seeing, and where. No need to diagnose it yourself.",
  },
  {
    number: "02",
    title: "We come out and handle it",
    body: "A technician arrives, confirms the situation, and removes the animal humanely and safely.",
  },
  {
    number: "03",
    title: "We explain what happened",
    body: "If it's useful, we'll point out how the animal likely got in and what — if anything — makes sense to do next.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Three steps. No guesswork required." />

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step) => (
            <li key={step.number} className="border-t border-stone-400 pt-6">
              <span className="font-display text-3xl text-stone-400">{step.number}</span>
              <h3 className="mt-4 font-display text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700 text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
