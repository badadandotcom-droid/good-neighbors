import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { HeroPrices } from "@/components/HeroPrices";
import { LeadFormSection } from "@/components/LeadFormSection";
import { PhoneLink } from "@/components/PhoneLink";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { TollFreeNumber } from "@/components/TollFreeNumber";
import { TrustSection } from "@/components/TrustSection";
import { CITY_LOCATIONS } from "@/lib/locations";
import { AVAILABILITY_24_7 } from "@/lib/site";
import { REVIEWS } from "@/lib/testimonials";

/**
 * Copy for an ad landing page about one problem (yellow jackets now; the roadmap's bee, wall/roof
 * and hornet pages fit the same shape). Every section title is an H2 and should carry the page's
 * search phrase or a close variant.
 */
export type ProblemPageContent = {
  href: string;
  /** Prefix for the cta_call / cta_text location labels, e.g. "yellow-jacket" → "yellow-jacket-hero". */
  ctaId: string;
  /** The ad group's phrase, word for word. */
  h1: string;
  /** Bare: the layout template adds " | Wasp Problem". */
  metaTitle: string;
  metaDescription: string;
  intro: {
    title: string;
    paragraphs: readonly string[];
    /** One closing line with a link, e.g. to the bee section. */
    link?: { lead: string; text: string; href: string };
  };
  /** "What you're seeing → what it probably is". */
  signs: {
    title: string;
    lede: string;
    items: readonly { title: string; seen: string; means: string }[];
  };
  wait: { title: string; paragraphs: readonly string[] };
  steps: { title: string; items: readonly string[] };
  pricingTitle: string;
  /** The hidden-nest explainer under the price list, when the page's insect is not "wasps". Defaults to the shared one. */
  hiddenNestExplanation?: string;
  /** The guarantee sentence, when the page's insect is not "wasps". Defaults to the owner's shared wording. */
  guaranteeSummary?: string;
  faqTitle: string;
  faqs: readonly { q: string; a: string }[];
  areas: { title: string; lede: string };
};

/**
 * The first phone screen holds the H1, the flat prices, the guarantee and the Call button.
 * Below it: what the problem is, how to recognise it, what waiting means, how the job goes,
 * reviews, the price list, the guarantee, the FAQ, then links to the city pages and the homepage.
 * Section backgrounds alternate white / surface down the page.
 */
export function ProblemPage({ page }: { page: ProblemPageContent }) {
  // Unfeatured cities (Oakville, Burlington, Brampton) stay out of cross-links, as on the city pages.
  const cities = CITY_LOCATIONS.filter((l) => l.featured !== false);
  const pill =
    "inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-card transition-colors hover:border-ink hover:bg-yellow-tint";
  const textLink = "font-semibold text-ink underline decoration-yellow-deep decoration-2 underline-offset-4";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pt-9 pb-12 text-center sm:pt-16 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_212_0_/_0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h1 className="text-4xl leading-[1.02] uppercase sm:text-6xl">{page.h1}</h1>
          <p className="mx-auto mt-3 max-w-md text-base text-muted sm:text-lg">Serving Toronto &amp; the GTA</p>
          <HeroPrices />
          <p className="mx-auto mt-5 max-w-md text-base font-bold sm:text-lg">{AVAILABILITY_24_7}</p>
          <div className="mt-4">
            <ContactActions ctaLocationPrefix={`${page.ctaId}-hero`} variant="light" requestLink />
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading title={page.intro.title} />
          <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed sm:text-lg">
            {page.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {page.intro.link && (
              <p>
                {page.intro.link.lead}{" "}
                <Link href={page.intro.link.href} prefetch={false} className={textLink}>
                  {page.intro.link.text}
                </Link>
                .
              </p>
            )}
          </div>
          <div className="mt-8 text-center">
            <PhoneLink location={`${page.ctaId}-intro`} className="btn btn-dark px-7 py-4 text-lg">
              Call <TollFreeNumber />
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* WHAT YOU'RE SEEING → WHAT IT PROBABLY IS */}
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow={"What you\u2019re seeing"} title={page.signs.title} lede={page.signs.lede} />
          <ul className="mt-10 flex flex-col gap-4">
            {page.signs.items.map((item) => (
              <li key={item.title} className="card px-5 py-5 sm:px-6">
                <h3 className="text-lg leading-snug font-extrabold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{item.seen}</p>
                <p className="mt-3 border-l-4 border-yellow pl-3 text-base leading-relaxed font-semibold">
                  {item.means}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT HAPPENS IF YOU WAIT */}
      <section className="bg-surface px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="Before you decide" title={page.wait.title} />
          {page.wait.paragraphs.map((p, i) => (
            <p key={p} className={`mx-auto max-w-xl text-base leading-relaxed sm:text-lg ${i === 0 ? "mt-6" : "mt-4"}`}>
              {p}
            </p>
          ))}
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Call and we&rsquo;ll tell you the earliest available appointment.
          </p>
          <div className="mt-8">
            <PhoneLink location={`${page.ctaId}-wait`} className="btn btn-primary min-h-14 px-7 py-4 text-xl">
              Call <TollFreeNumber />
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeading eyebrow="What we do" title={page.steps.title} />
          <ol className="mt-10 flex flex-col gap-4">
            {page.steps.items.map((step, i) => (
              <li key={step} className="card flex items-start gap-4 px-5 py-4 sm:px-6">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow font-display font-black text-black"
                >
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrustSection reviews={REVIEWS} />
      <PricingTable title={page.pricingTitle} hiddenNestExplanation={page.hiddenNestExplanation} />
      <GuaranteeSection summary={page.guaranteeSummary} />
      <FaqAccordion items={page.faqs} background="white" title={page.faqTitle} />

      {/* CITY AND HOMEPAGE LINKS */}
      <section className="bg-surface px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Service area" title={page.areas.title} lede={page.areas.lede} />
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {cities.map((l) => (
              <li key={l.slug}>
                <Link href={l.href} prefetch={false} className={pill}>
                  {l.city} wasp removal
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Or see everything we do on the{" "}
            <Link href="/" prefetch={false} className={textLink}>
              Wasp Problem homepage
            </Link>
            .
          </p>
        </div>
      </section>

      <LeadFormSection page={page.href} background="white" />
      <FinalCta ctaLocation={`${page.ctaId}-final`} />
      <SiteFooter />
    </>
  );
}
