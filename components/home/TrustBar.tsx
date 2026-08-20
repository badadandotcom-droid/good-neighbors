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
    <section className="border-b border-stone-300 bg-charcoal text-bone-50">
      <Container className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-4 border-t border-stone-500/25 py-10 sm:py-14">
            <Illustration id={item.icon} className="h-10 w-10 text-brass-300" />
            <h3 className="font-display text-2xl text-bone-50">{item.title}</h3>
            <p className="max-w-[26ch] text-sm leading-relaxed text-stone-300">{item.body}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
