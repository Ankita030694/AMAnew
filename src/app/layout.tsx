import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";
import { Toaster } from "react-hot-toast";
import Script from 'next/script'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
});

const polySans = localFont({
  src: [
    {
      path: '../../public/newAssets/font/polysanstrial-slim.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/newAssets/font/polysanstrial-neutral.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/newAssets/font/polysanstrial-median.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/newAssets/font/polysanstrial-bulky.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-polysans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AMA Legal Solutions | Top Law Firm in India",
  description: "Top-rated Indian law firm for loan settlement, intellectual property rights, and corporate law. Contact us for expert legal consultation.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "AMA Legal Solutions | Top Law Firm in India",
    description: "Top-rated Indian law firm for loan settlement, intellectual property rights, and corporate law. Contact us for expert legal consultation.",
    url: "https://www.amalegalsolutions.com",
    siteName: "AMA Legal Solutions",
    images: [
      {
        url: "https://www.amalegalsolutions.com/future.png",
        width: 1200,
        height: 630,
        alt: "AMA Legal Solutions - Top Law Firm in India",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMA Legal Solutions | Top Law Firm in India",
    description: "Top-rated Indian law firm for corporate, real estate, and entertainment law. Contact us for expert legal consultation.",
    images: ["https://www.amalegalsolutions.com/future.png"],
    creator: "@amalegalsolutions",
    site: "@amalegalsolutions",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "AMA Legal Solutions - Top Law Firm in India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Touch Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Critical performance optimization hints */}
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//firebasestorage.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical resource preloads */}
        <link rel="preload" href="/bannerbg.png" as="image" type="image/png" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Additional Open Graph meta tags for better link sharing */}
        <meta property="og:image" content="https://www.amalegalsolutions.com/future.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="AMA Legal Solutions - Top Law Firm in India" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:image" content="https://www.amalegalsolutions.com/future.png" />
        <meta name="twitter:image:alt" content="AMA Legal Solutions - Top Law Firm in India" />
        
        {/* Social Media Profile Links */}
        <meta property="og:see_also" content="https://www.facebook.com/amalegalsolutions/" />
        <meta property="og:see_also" content="https://www.instagram.com/amalegalsolutions/" />
        <meta property="og:see_also" content="https://in.linkedin.com/company/ama-legal-solutions" />
        
        {/* Additional Social Media Meta Tags */}
        <meta name="facebook:page_id" content="amalegalsolutions" />
        <meta name="instagram:username" content="amalegalsolutions" />
        <meta name="linkedin:company" content="ama-legal-solutions" />
        
        <link
          rel="alternate" 
          type="application/rss+xml" 
          title="AMA Legal Solutions Blog" 
          href="/api/rss" 
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NXMZMR4');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          id="attorney-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              "name": "AMA Legal Solutions",
              "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
              "@id": "https://www.amalegalsolutions.com/",
              "url": "https://www.amalegalsolutions.com/",
              "telephone": "8700343611",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57,",
                "addressLocality": "Gurugram",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4256874,
                "longitude": 77.0872075
              },
              "areaServed": [
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
                "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
                "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
                "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
                "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
                "Lakshadweep", "Puducherry"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.youtube.com/@amalegalsolution",
                "https://www.instagram.com/amalegalsolutions/",
                "https://www.linkedin.com/company/ama-legal-solutions/",
                "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions",
                "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
              ],
              "department": {
                "@type": "LegalService",
                "name": "AMA Legal Solutions - Legal Services",
                "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
                "telephone": "8700343611",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
                  "addressLocality": "Gurugram",
                  "postalCode": "122001",
                  "addressCountry": "IN"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${polySans.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NXMZMR4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <>
            <Script 
              strategy="afterInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}