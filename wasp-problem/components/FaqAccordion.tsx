import { SectionHeading } from "@/components/SectionHeading";

type FaqItem = { q: string; a: string };

function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function FaqAccordion({
  items,
  background = "surface",
}: {
  items: readonly FaqItem[];
  background?: "surface" | "white";
}) {
  return (
    <section
      className={`px-5 py-16 sm:py-24 ${background === "white" ? "bg-white" : "bg-surface"}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Good to know" title="Questions" />
        <div className="mt-10 flex flex-col gap-3">
          {items.map((item) => (
            <details key={item.q} className="group card px-5 py-4 open:pb-5 sm:px-6">
              <summary className="cursor-pointer list-none text-base font-bold marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-tint text-lg leading-none font-black text-ink transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
