import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/blogs/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
};

export default nextConfig;
