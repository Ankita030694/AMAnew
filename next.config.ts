import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    WEBSITE_FIREBASE_API_KEY: process.env.WEBSITE_FIREBASE_API_KEY,
    WEBSITE_FIREBASE_AUTH_DOMAIN: process.env.WEBSITE_FIREBASE_AUTH_DOMAIN,
    WEBSITE_FIREBASE_PROJECT_ID: process.env.WEBSITE_FIREBASE_PROJECT_ID,
    WEBSITE_FIREBASE_STORAGE_BUCKET: process.env.WEBSITE_FIREBASE_STORAGE_BUCKET,
    WEBSITE_FIREBASE_MESSAGING_SENDER_ID: process.env.WEBSITE_FIREBASE_MESSAGING_SENDER_ID,
    WEBSITE_FIREBASE_APP_ID: process.env.WEBSITE_FIREBASE_APP_ID,
    WEBSITE_FIREBASE_MEASUREMENT_ID: process.env.WEBSITE_FIREBASE_MEASUREMENT_ID,
  },
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable source maps for easier debugging
  productionBrowserSourceMaps: true,
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
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
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
      {
        protocol: 'https',
        hostname: 'firebasestorage.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.googletagmanager.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload-widget.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.amalegalsolutions.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'amalegalsolutionss.firebasestorage.app',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        // Global security headers for all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://apis.google.com https://www.youtube.com https://s.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https: https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.cloudinary.com https://*.firebasestorage.app https://*.youtube.com https://i.ytimg.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' data: blob: https: wss: https://*.googleapis.com https://*.firebaseio.com https://*.firebasestorage.app https://*.cloudfunctions.net https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.cloudinary.com https://api.openai.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://recaptcha.google.com; media-src 'self' https: blob: data:; object-src 'none'; base-uri 'self'; form-action 'self' https:;",
          },
        ],
      },
      {
        // Cache video & image assets under /newAssets/ for 1 year
        source: '/newAssets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache video & image assets under /testivid/ for 1 year
        source: '/testivid/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── SEO Fix: Enforce www. subdomain ───
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'amalegalsolutions.com' }],
        destination: 'https://www.amalegalsolutions.com/:path*',
        permanent: true,
      },

      // ── SEO Fix: /amalive → /ama-live (hyphenated URL is SEO-friendly) ───
      {
        source: '/amalive',
        destination: '/ama-live',
        permanent: true,
      },
      // ── SEO Fix: /difference-between-loan-write-off-and-loan-settlement -> /loan-write-off-vs-loan-settlement ───
      {
        source: '/difference-between-loan-write-off-and-loan-settlement',
        destination: '/loan-write-off-vs-loan-settlement',
        permanent: true,
      },

      // ── Existing redirects ──────────────────────────────────────────────
      {
        source: "/blogs/:slug",
        destination: "/blog/:slug",
        permanent: true,
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
      {
        source: '/services/realestate',
        destination: '/services/real-estate',
        permanent: true,
      },
      {
        source: '/services/ipr',
        destination: '/services/intellectual-property-rights',
        permanent: true,
      },
      {
        source: '/services/entertainment-law',
        destination: '/services/entertainment',
        permanent: true,
      },
      {
        source: '/blog/get-loanmukt-in-180-days-loan-settlement-',
        destination: '/blog/get-loan-mukt-in-180-days-loan-settlement-',
        permanent: true,
      },

      // ── SEO Fix: Old / wrong service URLs → correct pages ───────────────
      {
        source: '/services/banking',
        destination: '/services/banking-and-finance',
        permanent: true,
      },
      {
        source: '/services/criminal',
        destination: '/services/criminal-law',
        permanent: true,
      },
      {
        source: '/services/legal-notices',
        destination: '/send-legal-notice',
        permanent: true,
      },

      // ── SEO Fix: Missing standalone pages → closest relevant page ────────
      {
        source: '/credit-card-legal-help',
        destination: '/services/banking-and-finance',
        permanent: true,
      },
      {
        source: '/legal-rights-against-recovery-agents',
        destination: '/services/banking-and-finance',
        permanent: true,
      },


      // ── SEO Fix: Malformed URLs (www. inside path) → home ───────────────
      {
        source: '/articles/www.amalegalsolutions.com',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/blog/www.amalegalsolutions.com',
        destination: '/blog',
        permanent: true,
      },

      // ── SEO Fix: Loan-settlement bank slugs (wrong case / old names) ──────
      // Uppercase variants → correct lowercase slugs
      { source: '/services/loan-settlement/HDFC', destination: '/services/loan-settlement/hdfc-bank', permanent: true },
      { source: '/services/loan-settlement/ICICI', destination: '/services/loan-settlement/icici-bank', permanent: true },
      { source: '/services/loan-settlement/IDFC', destination: '/services/loan-settlement/idfc-bank', permanent: true },
      { source: '/services/loan-settlement/SBI', destination: '/services/loan-settlement/sbi-bank', permanent: true },

      // Lowercase short-form → full slug
      { source: '/services/loan-settlement/hdfc', destination: '/services/loan-settlement/hdfc-bank', permanent: true },
      { source: '/services/loan-settlement/icici', destination: '/services/loan-settlement/icici-bank', permanent: true },
      { source: '/services/loan-settlement/idfc', destination: '/services/loan-settlement/idfc-bank', permanent: true },
      { source: '/services/loan-settlement/idfc-first', destination: '/services/loan-settlement/idfc-bank', permanent: true },
      { source: '/services/loan-settlement/sbi', destination: '/services/loan-settlement/sbi-bank', permanent: true },
      { source: '/services/loan-settlement/indusind', destination: '/services/loan-settlement/indusind-bank', permanent: true },
      { source: '/services/loan-settlement/l-t-finance', destination: '/services/loan-settlement/l-and-t-finance', permanent: true },

      // Old / alternate brand names → correct slug
      { source: '/services/loan-settlement/fibe-earlysalary', destination: '/services/loan-settlement/fibe', permanent: true },
      { source: '/services/loan-settlement/si-creva-kissht-ring', destination: '/services/loan-settlement/si-creva', permanent: true },
      { source: '/services/loan-settlement/true-credits-truebalance', destination: '/services/loan-settlement/true-credits', permanent: true },
      { source: '/services/loan-settlement/au-small-finance-bank', destination: '/services/loan-settlement/au-small-finance', permanent: true },

      // Banks with spaces in URL (URL-encoded) → correct slug
      { source: '/services/loan-settlement/punjab-national%20bank', destination: '/services/loan-settlement/pnb-bank', permanent: true },
      { source: '/services/loan-settlement/city-union%20bank', destination: '/services/loan-settlement', permanent: true },

      // Banks with no dedicated page → parent loan-settlement page
      { source: '/services/loan-settlement/canara-bank', destination: '/services/loan-settlement', permanent: true },
      { source: '/services/loan-settlement/indian-bank', destination: '/services/loan-settlement', permanent: true },
      { source: '/services/loan-settlement/union-bank', destination: '/services/loan-settlement', permanent: true },
      { source: '/services/loan-settlement/credit-card', destination: '/services/loan-settlement', permanent: true },

      // ── SEO Fix: Loan-settlement state slugs (wrong case / spaces) ────────
      // Uppercase/spaced state names → correct folder names
      { source: '/services/loan-settlement/Himachal%20Pradesh', destination: '/services/loan-settlement/himachal-pradesh', permanent: true },
      { source: '/services/loan-settlement/West%20Bengal', destination: '/services/loan-settlement/west-bengal', permanent: true },

      // Note: Next.js normalizes all paths to lowercase regardless of folder casing
      // The Meghalaya/Odisha/Puducherry/Tripura folders are served at lowercase URLs

      // Regional bank variants → parent state page (lowercase, as Next.js serves them)
      { source: '/services/loan-settlement/odisha-gramya-bank', destination: '/services/loan-settlement/odisha', permanent: true },
      { source: '/services/loan-settlement/tripura-gramin-bank', destination: '/services/loan-settlement/tripura', permanent: true },

      // Debt consolidation is its own service page
      { source: '/services/loan-settlement/debt-consolidation', destination: '/services/debt-consolidation', permanent: true },

      // ── SEO Fix: Missing /services/* pages → closest existing page ────────
      { source: '/services/cheque-bounce', destination: '/services/criminal-law', permanent: true },
      { source: '/services/cheque-bounce-lawyer', destination: '/services/criminal-law', permanent: true },
      { source: '/services/civil-litigation', destination: '/services/civil', permanent: true },
      { source: '/services/company-incorporation', destination: '/services/corporate', permanent: true },
      { source: '/services/contact', destination: '/contact', permanent: true },
      { source: '/services/contract', destination: '/services/corporate', permanent: true },
      { source: '/services/corporate-law', destination: '/services/corporate', permanent: true },
      { source: '/services/cyber-crime', destination: '/services/cyber', permanent: true },
      { source: '/services/family-law', destination: '/services/civil', permanent: true },
      { source: '/services/gst-registration', destination: '/services/corporate', permanent: true },
      { source: '/services/legal-notice', destination: '/send-legal-notice', permanent: true },
      { source: '/services/tax-and-compliance', destination: '/services/corporate', permanent: true },

      // ── SEO Fix: Missing standalone pages → closest existing page ─────────
      { source: '/check-bounce-lawyer', destination: '/services/criminal-law', permanent: true },
      { source: '/divorce-lawyer-delhi', destination: '/services/civil', permanent: true },
      { source: '/ignoring-calls-of-recovery-agent', destination: '/services/banking-and-finance', permanent: true },
      { source: '/msme-trademark-registration-delhi', destination: '/msme-registration', permanent: true },
      { source: '/trademark-hearing-delhi', destination: '/services/intellectual-property-rights', permanent: true },

      // ── SEO Fix: Common 404s reported by user ──────────────────────────
      { source: '/cibil-repair', destination: '/how-long-does-a-settled-tag-stay-on-my-report', permanent: true },
      { source: '/cibil-score-repair-guide', destination: '/how-long-does-a-settled-tag-stay-on-my-report', permanent: true },
      { source: '/does-loan-settlement-affect-cibil', destination: '/does-foreclosure-of-loan-affect-cibil', permanent: true },
      { source: '/employer-not-paying-salary', destination: '/employer-not-paying-salary-after-resignation', permanent: true },
      { source: '/how-negotiate-loan-settlement-lenders-online', destination: '/how-to-negotiate-a-loan-settlement-with-lenders-online', permanent: true },
      { source: '/legal-notice-for-harassment', destination: '/workplace-harassment-legal-notice-service', permanent: true },
      { source: '/legal-notice-to-bank-format', destination: '/send-legal-notice', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/sarfaesi-rights', destination: '/services/banking-and-finance', permanent: true },
      { source: '/services/credit-card-settlement', destination: '/credit-card-settlement', permanent: true },
      { source: '/services/intellectual-property', destination: '/services/intellectual-property-rights', permanent: true },
      { source: '/services/legal-strategy', destination: '/services', permanent: true },
      { source: '/services/loan-settlement/Delhi', destination: '/services/loan-settlement/delhi', permanent: true },
      { source: '/services/loan-settlement/Ghaziabad', destination: '/services/loan-settlement/ghaziabad', permanent: true },
      { source: '/services/loan-settlement/Noida', destination: '/services/loan-settlement/noida', permanent: true },
      { source: '/services/loan-settlement/personal-loan', destination: '/personal-loan-settlement', permanent: true },
      { source: '/services/success-stories', destination: '/success-stories', permanent: true },
      { source: '/shop-and-establishment', destination: '/employer-not-paying-salary-after-resignation', permanent: true },
      ...JSON.parse(fs.readFileSync(path.join(process.cwd(), 'redirects.json'), 'utf8'))
    ];
  },

};

export default nextConfig;