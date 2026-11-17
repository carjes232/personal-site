import { withContentlayer } from "next-contentlayer2";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
};

export default withContentlayer(nextConfig);
