import type { Metadata } from "next";
import { CostPage } from "@/components/CostPage";
import { COST_PAGE } from "@/lib/cost-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  href: COST_PAGE.href,
  title: COST_PAGE.metaTitle,
  description: COST_PAGE.metaDescription,
});

export default function Page() {
  return <CostPage />;
}
