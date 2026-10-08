import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { GuaranteeLine, ShieldCheckIcon } from "@/components/shared/GuaranteeLine";
import { JsonLd } from "@/components/shared/JsonLd";
import { Illustration } from "@/components/illustrations/Illustration";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getPhone } from "@/lib/config/resolvers";
import { GUARANTEE, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import { getActiveMarkets, marketHref } from "@/lib/data/markets";
import { DAMAGE_REPAIR_PATH, REPAIR_SERVICES } from "@/lib/data/repairs";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const TITLE = "Raccoon & Squirrel Damage Repair in Toronto";
const DESCRIPTION =
  "Raccoon & squirrel damage repair in Toronto: roofs, soffits, fascia, vents and attics, matched to your home. Lifetime guarantee on every entry point we seal.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: DAMAGE_REPAIR_PATH });

const STEPS: { title: string; body: string }[] = [
  {
    title: "Remove the animal",
    body: "We confirm what's inside, check for young, and remove the animal humanely.",
  },
  {
    title: "Seal the entry point",
    body: "We close off the opening it was using to get in.",
  },
  {
    title: "Repair the damage",
    body: "We repair what it damaged, matched to your home's existing materials and colours.",
  },
];

const DAMAGE_TYPES: { title: string; body: string; href: string; linkLabel: string }[] = [
  {
    title: "Raccoon roof damage",
    body: "Raccoons are strong enough to pull up shingles, tear open roof vents and pry soffits away from the roofline. Once the raccoon and any young are out, we repair the roof boards and shingles, repair or replace the vent, and put the soffit and fascia back the way they should be.",
    href: "/wildlife/raccoons",
    linkLabel: "Raccoon removal in Toronto",
  },
  {
    title: "Squirrel damage to soffits, fascia and roof edges",
    body: "Squirrels chew. They widen small gaps at soffit corners, fascia boards and roof edges, and often come back to the same spot. Once they're out, we seal that spot and repair the chewed wood, soffit, siding or eavestrough around it.",
    href: "/wildlife/squirrels",
    linkLabel: "Squirrel removal in Toronto",
  },
  {
    title: "Attic insulation and cleanup",
    body: "An animal living in an attic leaves droppings, nesting material and flattened insulation behind. We clean the attic out and remove and replace insulation where it's needed.",
    href: "/wildlife/something-in-the-attic",
    linkLabel: "Something in your attic?",
  },
  {
    title: "Skunks under decks, porches and sheds",
    body: "Skunks dig rather than chew. Once the skunk is out, we seal the ground along the base of the deck, porch or shed with wire mesh dug into the soil.",
    href: "/wildlife/skunks",
    linkLabel: "Skunk removal in Toronto",
  },
];

export default function DamageRepairPage() {
  const phone = getPhone();
  const markets = getActiveMarkets();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: TITLE,
          serviceType: "Wildlife damage repair",
          description: DESCRIPTION,
          path: DAMAGE_REPAIR_PATH,
          includeRepairs: true,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Wildlife Removal", path: "/wildlife" },
          { name: "Damage Repair", path: DAMAGE_REPAIR_PATH },
        ])}
      />

      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Link href="/wildlife" className="text-sm font-medium text-stone-500 hover:text-charcoal">
              &larr; Wildlife Removal
            </Link>
            <p className="mt-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">
              <span className="h-px w-6 bg-brass-400" aria-hidden="true" />
              Damage repair
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.04] text-charcoal sm:text-5xl">{TITLE}</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">
              When a raccoon or squirrel gets into a home, it usually does some damage on the way in. We remove the
              animal humanely, seal the entry point it was using, and repair the damage it caused, from the roof and
              soffits to the attic.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-700 text-pretty">
              Repairs are matched to your home&apos;s existing materials and colours, so the fix blends in with the
              rest of the house.
            </p>
            <GuaranteeLine className="mt-6" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton
                href={phone.href}
                size="lg"
                event="cta_call"
                eventMeta={{ location: "damage-repair" }}
                className="w-full sm:w-auto"
              >
                {phone.display}
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
                size="lg"
                event="cta_get_help_now"
                eventMeta={{ location: "damage-repair" }}
                className="w-full font-semibold sm:w-auto"
              >
                {PRIMARY_CTA_LABEL}
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder
              slot="detail"
              icon="roofline"
              tone="charcoal"
              aspect="aspect-[4/3]"
              src="/images/raccoon-detail.png"
              note="A raccoon looking out of a torn soffit at a home's roofline"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Remove, seal, repair" title="Three steps, one company." />
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2 sm:gap-3">
                <span className="font-display text-4xl leading-none text-brass-400 sm:text-5xl" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-2xl text-charcoal">{step.title}</h3>
                <p className="max-w-[32ch] text-[15px] leading-relaxed text-ink-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we repair"
            title="Repairs we handle after wildlife removal"
            description="Every repair is matched to your home's existing materials and colours."
          />
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {REPAIR_SERVICES.map((r) => (
              <li key={r.name} className="rounded-sm border border-stone-300 bg-bone-50 p-6">
                <h3 className="font-display text-xl text-charcoal">{r.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{r.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-bone-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Common damage" title="What raccoons, squirrels and skunks leave behind" />
          <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-12 sm:mt-14 lg:grid-cols-2">
            {DAMAGE_TYPES.map((d) => (
              <div key={d.title} className="border-t-2 border-pine-600 pt-5">
                <h3 className="font-display text-2xl text-charcoal">{d.title}</h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-700 text-pretty">{d.body}</p>
                <Link
                  href={d.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-pine-600 hover:text-pine-700"
                >
                  {d.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-pine-700 py-16 text-bone-50 sm:py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <ShieldCheckIcon className="h-10 w-10 text-brass-300" />
            <h2 className="mt-5 text-balance font-display text-3xl leading-[1.1] text-bone-50 sm:text-4xl">
              {GUARANTEE.short}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-pine-100 text-pretty lg:col-span-6 lg:col-start-7">
            {GUARANTEE.full}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title="Damage repair across Toronto & the GTA"
            description="We repair wildlife damage for homeowners in Toronto, York Region, Durham Region and Peel Region."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={marketHref(market)}
                className="group flex flex-col items-center gap-3 rounded-sm border border-stone-300 bg-white px-4 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-pine-500 hover:shadow-card"
              >
                <Illustration
                  id="compass"
                  weight="bold"
                  className="h-6 w-6 text-stone-400 transition-colors group-hover:text-pine-600"
                />
                <span className="font-display text-base text-charcoal">{market.displayName}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
