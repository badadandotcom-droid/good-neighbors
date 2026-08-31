import { PhoneLink } from "@/components/PhoneLink";
import { PHONE, SERVICE_AREAS } from "@/lib/site";

const STEPS = [
  {
    n: "1",
    title: "Call Us",
    body: "Tell us where you're seeing the wasps.",
  },
  {
    n: "2",
    title: "We Assess the Problem",
    body: "We determine where the activity is coming from and the appropriate treatment.",
  },
  {
    n: "3",
    title: "We Treat the Nest",
    body: "We deal with the active wasp problem and explain what to expect afterward.",
  },
] as const;

const TIMELINE = [
  { day: "Day 5", result: "At least 50% less activity." },
  { day: "Day 10", result: "Approximately 90% less activity." },
  { day: "Day 14", result: "There should be no activity." },
] as const;

const FAQS = [
  {
    q: "How quickly can you come?",
    a: `Call us at ${PHONE.display} and we'll tell you the earliest available appointment.`,
  },
  {
    q: "Can I send you a photo?",
    a: "Yes. Photos of the area where the wasps are entering can help us understand the problem before arrival.",
  },
  {
    q: "Will the wasps disappear immediately?",
    a: "Not always. Returning wasps may continue entering the treated area temporarily. Activity should decrease substantially over the following days.",
  },
  {
    q: "What if I still see activity?",
    a: "By Day 5 there should be at least 50% less activity, by Day 10 approximately 90% less, and by Day 14 there should be no activity. Contact us if those benchmarks are not being met.",
  },
  {
    q: "Do you service Toronto?",
    a: "Yes. We service Toronto and surrounding GTA areas.",
  },
] as const;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      {/* HERO */}
      <section className="bg-yellow px-5 pt-10 pb-12 text-center">
        <h1 className="text-5xl leading-[0.95] font-black uppercase sm:text-7xl">
          Wasp
          <br />
          Problem?
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-lg font-bold sm:text-xl">
          Fast Wasp Nest Removal in Toronto &amp; the GTA
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm font-medium sm:max-w-sm">
          Serving Scarborough, Markham, Pickering, Ajax and communities across Toronto and the
          GTA.
        </p>

        <PhoneLink
          location="hero"
          className="mt-7 inline-block w-full max-w-xs rounded-sm bg-black px-6 py-4 text-xl font-black tracking-tight text-yellow sm:w-auto"
        >
          CALL NOW
          <br className="sm:hidden" />
          <span className="sm:ml-2">{PHONE.display}</span>
        </PhoneLink>

        <p className="mx-auto mt-4 max-w-xs text-sm font-medium sm:max-w-sm">
          Fast help for active wasp nests around your home.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl uppercase sm:text-3xl">
            Got Wasps Going In and Out of One Spot?
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            If you&rsquo;re seeing wasps repeatedly entering and leaving the same opening around
            your roof, soffit, siding, brickwork, deck, shed or other area of your property,
            there may be an active nest.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Call Wasp Problem and tell us what you&rsquo;re seeing. Photos are helpful if you can
            safely take them.
          </p>
          <PhoneLink
            location="section-active-nest"
            className="mt-6 inline-block rounded-sm border-4 border-black px-6 py-3 text-lg font-black"
          >
            Call {PHONE.display}
          </PhoneLink>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-black px-5 py-12 text-white">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl text-yellow uppercase sm:text-3xl">
            Simple. Fast. Local.
          </h2>
          <ol className="mt-8 flex flex-col gap-6">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow text-lg font-black text-black">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl uppercase sm:text-3xl">What Happens After Treatment?</h2>
          <p className="mt-4 text-base leading-relaxed">
            It is normal to see some wasp activity after treatment because wasps that were away
            from the nest may continue returning to the treated opening.
          </p>
          <p className="mt-3 text-base font-bold">Activity should steadily decrease.</p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TIMELINE.map((row) => (
              <div key={row.day} className="rounded-sm border-4 border-black px-4 py-4">
                <div className="text-lg font-black uppercase">{row.day}</div>
                <div className="mt-1 text-sm font-medium">{row.result}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed">
            If the activity is not decreasing according to those expectations, contact us for
            follow-up.
          </p>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="bg-yellow/15 px-5 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl uppercase sm:text-3xl">Wasp Removal Across Toronto &amp; the GTA</h2>
          <p className="mt-4 text-base leading-relaxed">
            Need help with a wasp nest? Wasp Problem serves homeowners throughout Toronto and the
            GTA, including {SERVICE_AREAS.join(", ")} and surrounding communities.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-sm border-2 border-black px-3 py-1 text-sm font-bold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl uppercase sm:text-3xl">Questions</h2>
          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((item) => (
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

      {/* FINAL CTA */}
      <section className="bg-black px-5 py-14 text-center">
        <h2 className="text-4xl leading-[0.95] font-black text-yellow uppercase sm:text-6xl">
          Wasp
          <br />
          Problem?
        </h2>
        <PhoneLink
          location="final-cta"
          className="mt-7 inline-block w-full max-w-xs rounded-sm bg-yellow px-6 py-4 text-xl font-black tracking-tight text-black sm:w-auto"
        >
          CALL NOW
          <br className="sm:hidden" />
          <span className="sm:ml-2">{PHONE.display}</span>
        </PhoneLink>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-5 py-8 text-center text-white/70">
        <p className="text-sm font-bold text-white">Wasp Problem</p>
        <p className="mt-1 text-sm">Toronto, Ontario</p>
        <PhoneLink location="footer" className="mt-1 block text-sm">
          {PHONE.display}
        </PhoneLink>
        <p className="mt-1 text-sm">WaspProblem.ca</p>
      </footer>
    </>
  );
}
