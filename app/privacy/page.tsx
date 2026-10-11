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
              phone number (and, if you choose, whether it is a mobile or a landline), email address (if given),
              property location or postal code, a description of your situation, and any details you choose to
              share about the animal or affected area. You can also add up to five photos. Photos are optional,
              and they are sent to us attached to your request email. We do not keep them in a database, and
              we do not publish them or give them a public link.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">How we use it</h2>
            <p className="mt-2">
              Information submitted is used solely to respond to your request and provide service. Your request
              reaches us as an email, sent through an email delivery service. We do not sell personal
              information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-charcoal">Analytics &amp; tracking</h2>
            <p className="mt-2">
              This site uses Google Analytics and Google Ads conversion tracking so we can understand how people
              find and use the site and which ads lead to calls and requests. They record things like the pages
              you view, and when someone taps our phone number or sends a request through the form. They do not
              receive what you type into the form or the photos you add. We do not currently use call-tracking
              software.
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
