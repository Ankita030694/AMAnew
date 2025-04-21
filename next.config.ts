import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Fix webpack configuration
  webpack: (config) => {
    return config;
  },
  async redirects() {
    return [
      {
        source: "/blogs/:slug",
        destination: "/blog/:slug",
        permanent: true, // 301 Redirect
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
