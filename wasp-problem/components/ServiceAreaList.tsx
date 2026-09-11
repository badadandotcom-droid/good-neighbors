import Link from "next/link";
import { CITY_LOCATIONS } from "@/lib/locations";
import { SERVICE_AREAS } from "@/lib/site";

/**
 * One balanced list — every city in the same pill styling, none larger or
 * bolder than another. Cities with an existing landing page get a link with
 * just a hover-underline, not a different visual weight, so the page never
 * reads as limited to whichever cities happen to have a dedicated page.
 */
export function ServiceAreaList() {
  const pageByCity = new Map(CITY_LOCATIONS.map((location) => [location.city, location.href]));

  return (
    <section id="service-areas" className="bg-cream px-5 py-16 sm:py-20 text-center">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl uppercase sm:text-3xl">Serving Toronto &amp; the GTA</h2>
        <p className="mt-4 text-base leading-relaxed">
          Wasp Problem serves homeowners throughout Toronto and communities across the GTA.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {SERVICE_AREAS.map((city) => {
            const href = pageByCity.get(city);
            return (
              <li
                key={city}
                className="rounded-sm border-2 border-black/15 bg-white px-3 py-2 text-sm font-bold"
              >
                {href ? (
                  <Link href={href} className="hover:underline">
                    {city}
                  </Link>
                ) : (
                  city
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
