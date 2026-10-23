import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Short link the owner says on the phone, texts and prints on invoices
        // when asking for a Google review (owner, via the ads chat, Oct 18 2026),
        // the same way Wasp Problem's waspproblem.ca/review works. Destination is
        // the "write a review" link from the Good Neighbors Wildlife Business
        // Profile ("Ask for reviews"), never Wasp Problem's: copy it exactly. The
        // letter after "CU" is a lowercase L. Temporary (302) on purpose: phones
        // don't cache it, so if Google ever issues a new review link, changing it
        // here fixes every link already sent. No in-between page, and /review
        // stays out of the sitemap.
        source: "/review",
        destination: "https://g.page/r/CUl3yt5_mvGVEAI/review",
        statusCode: 302,
      },
    ];
  },
};

export default nextConfig;
