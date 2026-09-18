import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { CITY_LOCATIONS } from "@/lib/locations";

export default function NotFound() {
  return (
    <section className="bg-white px-5 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-bold tracking-[0.14em] text-muted uppercase">404</p>
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          That page doesn&rsquo;t exist, but wasp help still does. Call or text us, or head back
          to the homepage.
        </p>

        <div className="mt-8">
          <ContactActions ctaLocationPrefix="not-found" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          <Link href="/" className="underline decoration-yellow decoration-2 underline-offset-4">
            Home
          </Link>
          <Link href="/#pricing" className="underline decoration-yellow decoration-2 underline-offset-4">
            Pricing
          </Link>
          <Link href="/#faq" className="underline decoration-yellow decoration-2 underline-offset-4">
            FAQ
          </Link>
          {CITY_LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={location.href}
              className="underline decoration-yellow decoration-2 underline-offset-4"
            >
              {location.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
