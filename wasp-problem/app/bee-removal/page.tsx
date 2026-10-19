import type { Metadata } from "next";
import { ProblemPage } from "@/components/ProblemPage";
import { BEE_PAGE } from "@/lib/bee-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  href: BEE_PAGE.href,
  title: BEE_PAGE.metaTitle,
  description: BEE_PAGE.metaDescription,
});

export default function Page() {
  return <ProblemPage page={BEE_PAGE} />;
}
