import type { Metadata } from "next";
import { ProblemPage } from "@/components/ProblemPage";
import { pageMetadata } from "@/lib/page-metadata";
import { YELLOW_JACKET_PAGE } from "@/lib/yellow-jacket-page";

export const metadata: Metadata = pageMetadata({
  href: YELLOW_JACKET_PAGE.href,
  title: YELLOW_JACKET_PAGE.metaTitle,
  description: YELLOW_JACKET_PAGE.metaDescription,
});

export default function Page() {
  return <ProblemPage page={YELLOW_JACKET_PAGE} />;
}
