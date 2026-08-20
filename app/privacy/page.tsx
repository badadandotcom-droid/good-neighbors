import { Container } from "@/components/shared/Container";
import { pageMetadata } from "@/lib/seo";
import { BRAND, CONTACT } from "@/lib/config/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses, and protects information submitted through this website.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl text-charcoal">Privacy Policy</h1>

        <div className="mt-6 rounded-sm border border-clay-400 bg-clay-100/50 p-5 text-sm leading-relaxed text-ink-700">
          <strong className="text-clay-500">Placeholder — pending legal review.</strong> This is a working draft
          describing current data practices in plain language. It has not been reviewed by a lawyer and should be
          finalized against applicable Canadian (PIPEDA and any provincial equivalents) and, later, U.S. privacy
          law before this page is relied upon in production.
        </div>

        <div className="prose-content mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-ink-700">
          <div>
            <h2 className="font-display text-xl text-charcoal">What we collect</h2>
            <p className="mt-2">
              When you submit the &quot;Get Help Now&quot; form, we collect the information you provide: your name,
              phone number, email address (if given), property location or postal code, a description of your
              situation, and any details you choose to share about the animal or affected area. Photo upload is
              part of the interface but is not yet connected to storage — see the note on the contact form.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">How we use it</h2>
            <p className="mt-2">
              Information submitted is used solely to respond to your request and provide service. We do not sell
              personal information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Analytics &amp; tracking</h2>
            <p className="mt-2">
              This site is built to support standard web analytics and call-tracking tools (for example, Google
              Analytics and CallRail) so we can understand how people find and use the site. No such tool is
              actively connected yet — this section will be updated with specifics once one is.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Data retention</h2>
            <p className="mt-2">
              [Placeholder — retention period to be defined during legal review, e.g. how long inquiry records are
              kept and when they are deleted.]
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Your choices</h2>
            <p className="mt-2">
              You can ask what information we hold about you, request corrections, or request deletion by
              contacting us at {CONTACT.email}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Contact</h2>
            <p className="mt-2">Questions about this policy can be sent to {CONTACT.email}.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
