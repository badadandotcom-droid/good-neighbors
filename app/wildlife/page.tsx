import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Illustration } from "@/components/illustrations/Illustration";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { getSituationEntries, getSpeciesEntries } from "@/lib/data/wildlife";
import { pageMetadata } from "@/lib/seo";
import { PRIMARY_CTA_LABEL } from "@/lib/config/site";

export const metadata = pageMetadata({
  title: "Wildlife Removal",
  description:
    "Humane removal for raccoons, squirrels, skunks, birds, and bats — plus help for when you're not sure what's gotten into your attic or walls.",
  path: "/wildlife",
});

export default function WildlifePage() {
  const species = getSpeciesEntries();
  const situations = getSituationEntries();

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-300 py-16 sm:py-24">
        <Illustration
          id="attic"
          className="pointer-events-none absolute -right-16 -top-10 h-[120%] w-auto text-pine-600 opacity-[0.05]"
        />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
              <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
              Wildlife Removal
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl lg:text-6xl">
              Whatever moved in, we know how to move it out.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">
              Each species behaves differently, which changes how we approach removal — but every job starts the
              same way: understanding what&apos;s happening at your property and responding quickly.
            </p>
            <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "wildlife-hub-hero" }} className="mt-8">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder slot="inspection" icon="attic" tone="pine" aspect="aspect-[4/3]" corner="top-left" />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="By Species"
            title="Common wildlife we handle"
            description="Raccoons are our most frequent call, especially in spring — but every species below gets the same careful approach."
          />

          <Link
            href={`/wildlife/${species[0].slug}`}
            className="group mt-12 flex flex-col overflow-hidden rounded-sm border border-stone-300 bg-white transition-colors hover:border-pine-500 lg:flex-row"
          >
            <div className="lg:w-2/5">
              <PhotoPlaceholder slot="detail" icon={species[0].iconId} tone="charcoal" aspect="aspect-[16/9] lg:aspect-auto lg:h-full" className="rounded-none" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3 p-8 sm:p-10">
              <span className="text-xs font-semibold tracking-[0.18em] text-brass-600 uppercase">Most common call</span>
              <h3 className="font-display text-3xl text-charcoal sm:text-4xl">{species[0].name}</h3>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-700">{species[0].summary}</p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-pine-600 group-hover:text-pine-700">
                Learn more
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>

          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {species.slice(1).map((s) => (
              <Link
                key={s.slug}
                href={`/wildlife/${s.slug}`}
                className="group flex flex-col gap-4 rounded-sm border border-stone-300 bg-white p-6 transition-colors hover:border-pine-500"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-50">
                  <Illustration id={s.iconId} weight="bold" className="h-8 w-8 text-pine-600" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.summary}</p>
                </div>
                <span className="mt-auto text-sm font-medium text-pine-600 group-hover:text-pine-700">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Not Sure?"
            title="Sometimes you just know where — not what"
            description="That's still enough to get started. These are the two most common ways wildlife problems show up."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {situations.map((s) => (
              <Link
                key={s.slug}
                href={`/wildlife/${s.slug}`}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-sm bg-charcoal p-8 text-bone-50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-deep sm:p-10"
              >
                <Illustration
                  id={s.iconId}
                  className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 text-bone-50 opacity-[0.06]"
                />
                <Illustration id={s.iconId} weight="bold" className="relative h-11 w-11 text-brass-300" />
                <div className="relative">
                  <h3 className="font-display text-2xl text-bone-50">{s.name}</h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-stone-300">{s.summary}</p>
                </div>
                <span className="relative mt-auto inline-flex items-center gap-2 text-sm font-medium text-pine-100 group-hover:text-bone-50">
                  What to do
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
