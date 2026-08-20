import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { WILDLIFE, getWildlifeBySlug } from "@/lib/data/wildlife";
import { getPhone } from "@/lib/config/resolvers";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

export function generateStaticParams() {
  return WILDLIFE.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWildlifeBySlug(slug);
  if (!entry) return {};

  return pageMetadata({
    title: `${entry.name} Removal`,
    description: entry.summary,
    path: `/wildlife/${entry.slug}`,
  });
}

export default async function WildlifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getWildlifeBySlug(slug);
  if (!entry) notFound();

  const phone = getPhone();
  const related = WILDLIFE.filter((w) => w.slug !== entry.slug && w.category === "species").slice(0, 4);
  const jsonLd = serviceJsonLd({
    name: `${entry.name} Removal`,
    description: entry.summary,
    path: `/wildlife/${entry.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Link href="/wildlife" className="text-sm font-medium text-stone-500 hover:text-charcoal">
              &larr; Wildlife Removal
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <Illustration id={entry.iconId} className="h-12 w-12 text-pine-600" />
              <h1 className="text-balance font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl">
                {entry.name} Removal
              </h1>
            </div>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">{entry.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: `wildlife-${entry.slug}` }}>
                {PRIMARY_CTA_LABEL}
              </CTAButton>
              <PhoneLink phone={phone} location={`wildlife-${entry.slug}`} className="justify-center text-lg text-ink hover:text-pine-600" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder icon={entry.iconId} tone="pine" aspect="aspect-[4/3]" caption={`${entry.singular.toLowerCase()} / entry point detail`} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-charcoal">Our approach</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700 text-pretty">{entry.approach}</p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-sm border border-stone-300 bg-bone-50 p-6">
              <h3 className="font-display text-lg text-charcoal">Signs to look for</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {entry.commonSigns.map((sign) => (
                  <li key={sign} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pine-500" aria-hidden="true" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-sm border border-stone-300 bg-bone-50 p-6">
              <h3 className="font-display text-lg text-charcoal">Where it usually happens</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.commonAreas.map((area) => (
                  <li key={area} className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-ink-700">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl text-charcoal">Other wildlife we handle</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/wildlife/${r.slug}`}
                  className="rounded-sm border border-stone-300 bg-white px-4 py-5 text-center transition-colors hover:border-pine-500"
                >
                  <Illustration id={r.iconId} className="mx-auto h-7 w-7 text-pine-600" />
                  <span className="mt-3 block font-display text-base text-charcoal">{r.name}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
