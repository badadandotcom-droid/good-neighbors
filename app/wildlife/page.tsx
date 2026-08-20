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
      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">Wildlife Removal</p>
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
            <PhotoPlaceholder icon="attic" tone="charcoal" aspect="aspect-[4/3]" caption="attic access point" />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="By Species" title="Common wildlife we handle" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {species.map((s) => (
              <Link
                key={s.slug}
                href={`/wildlife/${s.slug}`}
                className="group flex flex-col gap-4 rounded-sm border border-stone-300 bg-white p-7 transition-colors hover:border-pine-500"
              >
                <Illustration id={s.iconId} className="h-10 w-10 text-pine-600" />
                <div>
                  <h3 className="font-display text-2xl text-charcoal">{s.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{s.summary}</p>
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
                className="group flex flex-col gap-4 rounded-sm bg-charcoal p-8 text-bone-50 transition-colors hover:bg-ink-700"
              >
                <Illustration id={s.iconId} className="h-10 w-10 text-pine-100" />
                <div>
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-300">{s.summary}</p>
                </div>
                <span className="mt-auto text-sm font-medium text-pine-100 group-hover:text-bone-50">
                  What to do &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
