import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/dashboard-next',
  trailingSlash: true,
  assetPrefix: '/dashboard-next',
};

export default nextConfig;
