import type { Metadata } from "next";
import { ThemedPage } from "@/components/ThemedPage";
import { THEMED_PAGES, themedPageMetadata } from "@/lib/themed-pages";

const page = THEMED_PAGES.find((p) => p.slug === "yellow-jacket-removal")!;

export const metadata: Metadata = themedPageMetadata(page);

export default function Page() {
  return <ThemedPage page={page} />;
}
