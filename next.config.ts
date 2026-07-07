import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kedai1",
  assetPrefix: "/kedai1",
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/kedai1",
  },
};

export default nextConfig;
