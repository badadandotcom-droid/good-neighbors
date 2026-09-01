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

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <section className="px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <div className="mx-auto max-w-md">
        <h2 className="text-center text-2xl uppercase sm:text-3xl">Questions</h2>
        <div className="mt-6 flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-sm border-2 border-black px-4 py-3 open:pb-4"
            >
              <summary className="cursor-pointer list-none text-base font-bold marker:content-none">
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span className="shrink-0 text-xl leading-none font-black group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 text-xl leading-none font-black group-open:inline">
                    −
                  </span>
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
