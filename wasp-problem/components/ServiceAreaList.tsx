import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CITY_LOCATIONS } from "@/lib/locations";
import { SERVICE_AREAS } from "@/lib/site";

/**
 * One balanced list — every city in the same pill styling, none larger or
 * bolder than another. Cities with an existing landing page get a link with
 * just a hover state, not a different visual weight, so the page never reads
 * as limited to whichever cities happen to have a dedicated page.
 */
export function ServiceAreaList() {
  const pageByCity = new Map(CITY_LOCATIONS.map((location) => [location.city, location.href]));
  const pill =
    "inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-card";

  return (
    <section id="service-areas" className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Service area"
          title={
            <>
              Serving Toronto &amp; the GTA
            </>
          }
          lede="Wasp Problem serves homeowners throughout Toronto and communities across the GTA."
        />

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {SERVICE_AREAS.map((city) => {
            const href = pageByCity.get(city);
            return (
              <li key={city}>
                {href ? (
                  <Link href={href} className={`${pill} transition-colors hover:border-ink hover:bg-yellow-tint`}>
                    {city}
                  </Link>
                ) : (
                  <span className={pill}>{city}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
