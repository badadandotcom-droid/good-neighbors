import { Container } from "@/components/shared/Container";
import { GetHelpForm } from "@/components/forms/GetHelpForm";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { SameDayBadge } from "@/components/shared/SameDayBadge";
import { Illustration } from "@/components/illustrations/Illustration";
import { getPhone, getSameDayMessage } from "@/lib/config/resolvers";
import { CONTACT, BRAND } from "@/lib/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Help Now",
  description:
    "Tell us what's happening and we'll get back to you quickly. Humane, local wildlife removal across Southern Ontario.",
  path: "/contact",
});

export default function ContactPage() {
  const phone = getPhone();

  return (
    <section className="py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SameDayBadge />
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.06] text-charcoal sm:text-5xl">
            Get help now
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-700 text-pretty">
            Tell us what&apos;s going on and where. A real person will follow up — no automated runaround.
            {" "}
            {getSameDayMessage()}
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-sm border border-stone-300 bg-bone-50 p-6">
            <div className="flex items-center gap-3">
              <Illustration id="phone-call" className="h-5 w-5 shrink-0 text-pine-600" />
              <PhoneLink phone={phone} location="contact-sidebar" showIcon={false} className="text-lg text-charcoal" />
            </div>
            <div className="flex items-center gap-3">
              <Illustration id="mail" className="h-5 w-5 shrink-0 text-pine-600" />
              <a href={`mailto:${CONTACT.email}`} className="text-[15px] text-ink-700 hover:text-charcoal">
                {CONTACT.email}
              </a>
            </div>
            <p className="text-xs leading-relaxed text-stone-500">{CONTACT.hoursNote}</p>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            {BRAND.name} does not publish fixed pricing online — every situation is different. We&apos;ll discuss
            cost with you once we understand what&apos;s happening.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="rounded-sm border border-stone-300 bg-white p-6 shadow-card sm:p-10">
            <GetHelpForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
