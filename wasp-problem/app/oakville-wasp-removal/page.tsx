import type { Metadata } from "next";
import { CityPage } from "@/components/CityPage";
import { CITY_LOCATIONS, locationMetadata } from "@/lib/locations";

const location = CITY_LOCATIONS.find((l) => l.slug === "oakville-wasp-removal")!;

export const metadata: Metadata = locationMetadata(location);

export default function Page() {
  return <CityPage location={location} />;
}
