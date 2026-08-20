import { Container } from "@/components/shared/Container";
import { pageMetadata } from "@/lib/seo";
import { BRAND, CONTACT } from "@/lib/config/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${BRAND.name} website.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl text-charcoal">Terms of Service</h1>

        <div className="mt-6 rounded-sm border border-clay-400 bg-clay-100/50 p-5 text-sm leading-relaxed text-ink-700">
          <strong className="text-clay-500">Placeholder — pending legal review.</strong> This draft covers basic
          website-use terms. It does not yet include service agreements, liability terms, or cancellation
          policies for on-site work — those should be finalized with legal counsel before this page is relied
          upon in production.
        </div>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-ink-700">
          <div>
            <h2 className="font-display text-xl text-charcoal">Use of this website</h2>
            <p className="mt-2">
              This website provides information about {BRAND.name}&apos;s wildlife removal services and a way to
              request help. Content is provided for general informational purposes and does not constitute a
              service guarantee, quote, or contract until confirmed directly with a {BRAND.name} representative.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">No fixed pricing</h2>
            <p className="mt-2">
              Pricing is not published on this site because it depends on the specifics of each situation.
              Nothing on this website should be interpreted as a quoted or guaranteed price.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Same-day service</h2>
            <p className="mt-2">
              Same-day service, where offered, is subject to technician availability and is not guaranteed.
              Availability may vary by location and season.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">[Placeholder sections]</h2>
            <p className="mt-2">
              Additional sections — including service agreements, liability limitations, cancellation terms, and
              governing law — will be added following legal review.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Contact</h2>
            <p className="mt-2">Questions about these terms can be sent to {CONTACT.email}.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
