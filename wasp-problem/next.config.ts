import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subfolder of a repo that also contains the
  // (unrelated) Good Neighbors app and its own lockfile. Pin the workspace
  // root explicitly so Turbopack doesn't guess wrong between the two.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
