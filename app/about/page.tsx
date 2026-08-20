import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { PhotoPlaceholder } from "@/components/shared/PhotoPlaceholder";
import { Illustration } from "@/components/illustrations/Illustration";
import { pageMetadata } from "@/lib/seo";
import { BRAND, PRIMARY_CTA_LABEL } from "@/lib/config/site";
import type { IllustrationId } from "@/lib/types";

export const metadata = pageMetadata({
  title: "About",
  description: `${BRAND.name} is a humane wildlife removal company built around fast, local, professional service.`,
  path: "/about",
});

const PRINCIPLES: { icon: IllustrationId; title: string; body: string }[] = [
  {
    icon: "shield-home",
    title: "Humane is the standard, not the upsell",
    body: "An animal that's found its way into the wrong place doesn't need to be treated cruelly to be removed effectively. That's simply how the work gets done here.",
  },
  {
    icon: "inspection",
    title: "Your property comes first",
    body: "We work carefully around roofing, siding, and landscaping, and we explain what we're doing and why — no surprises, no unnecessary damage.",
  },
  {
    icon: "compass",
    title: "Genuinely local",
    body: "Technicians work in the neighborhoods they know, not a dispatched territory picked at random from a map.",
  },
  {
    icon: "phone-call",
    title: "Clear communication, start to finish",
    body: "You'll know what we found, what we did, and what — if anything — makes sense to do next. No pressure, no jargon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-300 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-pine-600 uppercase">About {BRAND.name}</p>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
              A calm, professional response to an unwelcome situation.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700 text-pretty">
              {BRAND.name} was built on a simple idea: wildlife removal doesn&apos;t have to feel alarming, and it
              doesn&apos;t have to come at the expense of the animal or your property. We handle the immediate
              problem quickly and humanely, and treat every home the way we&apos;d want ours treated.
            </p>
          </div>
          <div className="lg:col-span-5">
            <PhotoPlaceholder icon="soffit-vent" tone="bone" aspect="aspect-[4/3]" caption="technician van / arrival at property" />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-bone-50 py-20 sm:py-28">
        <Container>
          <h2 className="max-w-lg text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
            What guides how we work
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex gap-5">
                <Illustration id={p.icon} className="h-8 w-8 shrink-0 text-pine-600" />
                <div>
                  <h3 className="font-display text-xl text-charcoal">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-700 text-pretty">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1] text-charcoal sm:text-4xl">
              One brand, growing one neighborhood at a time
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 text-pretty">
              {BRAND.name} launched in {BRAND.foundingRegion}. As we grow across Canada and, in time, the United
              States, every new market carries the same name, the same standards, and technicians who are
              genuinely local to the area they serve — never a franchise, never a faceless call centre.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <PhotoPlaceholder icon="roofline" tone="charcoal" aspect="aspect-[4/3]" caption="residential streetscape, future market" />
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-300 bg-charcoal py-16 text-bone-50 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-md text-balance font-display text-3xl leading-[1.1]">
            Have a wildlife problem right now?
          </h2>
          <CTAButton href="/contact" size="lg" event="cta_get_help_now" eventMeta={{ location: "about-page" }}>
            {PRIMARY_CTA_LABEL}
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
