import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Script from 'next/script'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  title: "AMA Legal Solutions | Top Law Firm in India",
  description: "Top-rated law firm in India specializing in corporate, real estate, and entertainment law. Contact us for legal consultation and representation.",
  openGraph: {
    title: "AMA Legal Solutions | Top Law Firm in India",
    description: "Top-rated law firm in India specializing in corporate, real estate, and entertainment law. Contact us for legal consultation and representation.",
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
    description: "Top-rated law firm in India specializing in corporate, real estate, and entertainment law. Contact us for legal consultation and representation.",
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
          id="image-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AMA Legal Solutions",
              "url": "https://www.amalegalsolutions.com",
              "logo": "https://www.amalegalsolutions.com/future.png",
              "image": [
                "https://www.amalegalsolutions.com/future.png",
                "https://www.amalegalsolutions.com/bannerbg.png"
              ],
              "sameAs": [
                "https://www.facebook.com/amalegalsolutions/",
                "https://www.instagram.com/amalegalsolutions/",
                "https://in.linkedin.com/company/ama-legal-solutions"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8700343611",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "India"
              }
            })
          }}
        />
        <Script
          id="social-media-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "AMA Legal Solutions",
                "url": "https://www.amalegalsolutions.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.amalegalsolutions.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LegalService",
                "name": "AMA Legal Solutions",
                "description": "Top-rated law firm in India specializing in corporate, real estate, and entertainment law",
                "url": "https://www.amalegalsolutions.com",
                "sameAs": [
                  "https://www.facebook.com/amalegalsolutions/",
                  "https://www.instagram.com/amalegalsolutions/",
                  "https://in.linkedin.com/company/ama-legal-solutions"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "serviceType": ["Corporate Law", "Real Estate Law", "Entertainment Law", "Legal Consultation"]
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}