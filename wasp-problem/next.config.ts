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
