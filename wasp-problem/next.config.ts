import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The share image used to be a static file at this path; it is now drawn
        // at build time by app/opengraph-image.tsx. Keeps previews that cached
        // the old URL from showing a broken image.
        source: "/opengraph-image.png",
        destination: "/opengraph-image",
        permanent: true,
      },
      {
        // Short link the owner texts to customers when asking for a Google
        // review: waspproblem.ca/review reads as ours, a bare g.page link can
        // look like a scam. Destination is the "write a review" link from the
        // Google Business Profile — copy it exactly; never point this anywhere else.
        source: "/review",
        destination: "https://g.page/r/CZKnYjdmzAygEAI/review",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Applies to every response; low-risk hardening that doesn't touch
        // functionality — nothing on this site loads in a frame, uses
        // camera/mic/geolocation, or depends on cross-origin credential
        // leakage via the Referer header.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
