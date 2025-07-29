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
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['www.amalegalsolutions.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
      {
        source: '/termscondition',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacypolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/services/loansettlement',
        destination: '/services/loan-settlement',
        permanent: true,
      },
    ];  
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;