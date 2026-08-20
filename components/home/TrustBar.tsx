import { Illustration } from "@/components/illustrations/Illustration";
import { Container } from "@/components/shared/Container";
import { getSameDayConfig } from "@/lib/config/resolvers";
import type { IllustrationId, Market } from "@/lib/types";

export function TrustBar({ market }: { market?: Market }) {
  const sameDay = getSameDayConfig(market);

  const items: { icon: IllustrationId; title: string; body: string }[] = [
    {
      icon: "shield-home",
      title: "Humane",
      body: "Wildlife is handled responsibly, every time — not treated as a pest to eliminate.",
    },
    {
      icon: "compass",
      title: "Local",
      body: "Technicians who know the housing stock and neighborhoods they work in.",
    },
    {
      icon: "phone-call",
      title: sameDay.enabled ? "Same-Day Service" : "Fast Response",
      body: sameDay.enabled ? sameDay.qualificationMessage : sameDay.disabledMessage,
    },
    {
      icon: "inspection",
      title: "Professional Property Care",
      body: "Careful around your roofline, landscaping, and finishes — every visit.",
    },
  ];

  return (
    <section className="border-b border-stone-300 bg-bone-50">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-14 lg:grid-cols-4 lg:gap-8">
        {items.map((item) => (
          <div key={item.title}>
            <Illustration id={item.icon} className="h-7 w-7 text-pine-600" />
            <h3 className="mt-4 font-display text-lg text-charcoal">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{item.body}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
