import { Container } from "@/components/shared/Container";
import { getSameDayConfig } from "@/lib/config/resolvers";
import type { Market } from "@/lib/types";

export function TrustBar({ market }: { market?: Market }) {
  const sameDay = getSameDayConfig(market);

  const lead = {
    title: "Humane",
    body: "Wildlife is handled responsibly, every time — not treated as a pest to eliminate.",
  };

  const supporting: { title: string; body: string }[] = [
    {
      title: "Local",
      body: "Technicians who know the housing stock and neighborhoods they work in.",
    },
    {
      title: sameDay.enabled ? "Same-Day Service" : "Fast Response",
      body: sameDay.enabled ? sameDay.qualificationMessage : sameDay.disabledMessage,
    },
    {
      title: "Professional Property Care",
      body: "Careful around your roofline, landscaping, and finishes — every visit.",
    },
  ];

  return (
    <section className="border-b border-stone-300 bg-charcoal text-bone-50">
      <Container className="grid grid-cols-1 gap-6 py-12 sm:gap-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-5">
          <span className="block h-px w-10 bg-brass-400" aria-hidden="true" />
          <h3 className="mt-5 max-w-xs text-balance font-display text-3xl leading-[1.1] text-bone-50 sm:text-4xl">
            {lead.title}
          </h3>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-stone-300 text-pretty">{lead.body}</p>
        </div>

        <div className="lg:col-span-7 lg:border-l lg:border-stone-500/25 lg:pl-16">
          <div className="grid grid-cols-1 divide-y divide-stone-500/25 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {supporting.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 sm:px-7 sm:py-0 sm:first:pl-0">
                <h4 className="font-display text-xl leading-tight text-bone-50">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-300 text-pretty">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
