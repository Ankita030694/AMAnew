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
                "https://www.linkedin.com/company/ama-legal-solutions/"
              ],
              "department": {
                "@type": "LegalService",
                "name": "AMA Legal Solutions - Legal Services",
                "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
                "telephone": "8700343611",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57,",
                  "addressLocality": "Gurugram",
                  "postalCode": "122001",
                  "addressCountry": "IN"
                }
              }
            })
          }}
        />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What legal services does AMA Legal Solutions provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AMA Legal Solutions specializes in corporate law, real estate law, entertainment law, contract drafting, legal consultation, litigation support, and comprehensive legal representation for individuals and businesses across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I schedule a consultation with AMA Legal Solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can schedule a consultation by calling us at 8700343611, visiting our office at Block G, Sushant Lok 2, Sector 57, Gurugram, or contacting us through our website contact form. We offer both in-person and virtual consultations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are AMA Legal Solutions' office hours?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our office is open Monday through Saturday from 10:00 AM to 6:00 PM. We are closed on Sundays. For urgent legal matters, please call our main number and we will arrange emergency consultation if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AMA Legal Solutions handle cases across India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AMA Legal Solutions handles legal matters across India. While our main office is located in Gurugram, we represent clients in various states and provide legal services nationwide through our network of legal professionals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I bring to my first consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Please bring all relevant documents related to your legal matter, including contracts, correspondence, court papers, identification documents, and any previous legal advice you may have received. This helps us provide the most accurate assessment of your case."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How are legal fees structured at AMA Legal Solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our fee structure varies depending on the type and complexity of the legal matter. We offer transparent pricing with options for hourly rates, fixed fees for specific services, and contingency arrangements where applicable. We discuss all fees upfront during your initial consultation."
                  }
                }
              ]
            })
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