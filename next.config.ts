import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack uses the project root (where this config lives)
    root: __dirname,
  },
};

export default nextConfig;
