
import Hero from "@/newcomp/Hero";
import Clients from "@/newcomp/Clients";
import Legacy from "@/newcomp/Legacy";
import Counter from "@/newcomp/Counter";
import Services from "@/newcomp/Services";
import Testimonials2 from "@/newcomp/Testimonials2";
import Testimonials from "@/newcomp/Testimonials";
import VideoTestimonials from "@/newcomp/VideoTestimonials";
import FAQ from "@/newcomp/FAQ";
import CTA from "@/newcomp/CTA";
import WhatsAppWidget from "@/newcomp/WhatsAppWidget";
import Script from "next/script";
import { baseTestimonials } from "@/data/testimonials";

export const metadata = {
  title: 'AMA Legal Solutions: Top Law Firm in India',
  description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
  alternates: {
    canonical: 'https://amalegalsolutions.com/',
  },
  // Add Open Graph metadata for better social sharing
  openGraph: {
    title: 'AMA Legal Solutions: Top Law Firm in India',
    description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
    url: 'https://amalegalsolutions.com/',
    siteName: 'AMA Legal Solutions',
    type: 'website',
  },
  // Add Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'AMA Legal Solutions: Top Law Firm in India',
    description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBE9E4] relative overflow-hidden">
      {/* Background Texture/Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#30261C 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>
      
      {/* SEO Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            "@id": "https://www.amalegalsolutions.com/",
            "name": "AMA Legal Solutions",
            "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
            "url": "https://www.amalegalsolutions.com/",
            "telephone": "8700343611",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57,",
              "addressLocality": "Gurugram",
              "postalCode": "122001",
              "addressCountry": "IN"
            },
            
            // 1. Service Schema
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Legal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Loan Settlement",
                    "description": "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default",
                    "url": "https://www.amalegalsolutions.com/services/loan-settlement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intellectual Property Rights",
                    "description": "Trademark Registration | Copyright Protection | Patent Filing | Brand Protection",
                    "url": "https://www.amalegalsolutions.com/services/intellectual-property-rights"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Law",
                    "description": "Company Incorporation | Compliance | Mergers & Acquisitions | Corporate Litigation",
                    "url": "https://www.amalegalsolutions.com/services/corporate"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Banking & Finance",
                    "description": "Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues",
                    "url": "https://www.amalegalsolutions.com/services/banking-and-finance"
                  }
                }
              ]
            },

            // 2. Review Snippets (Generated from shared data)
            "review": baseTestimonials.map(t => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": t.author
              },
              "reviewBody": t.text
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": baseTestimonials.length.toString()
            },

            // 3. Video Object Schema
            "subjectOf": [
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 1",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png", 
                "uploadDate": "2024-01-01", 
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid1.mp4"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 2",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-01-01",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid2.mp4"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 3",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-01-01",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid3.mp4"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 4",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-01-01",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid4.mp4"
              }
            ]
          })
        }}
      />
      
      <Hero />
      <Clients />
      <Legacy />
      <Counter />
      <Services />
      
      <div className="max-w-8xl mx-auto px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center bg-[#EBE9E4]">
        <Testimonials2 />
        <Testimonials />
      </div>
      
      <VideoTestimonials />
      <FAQ />
      <CTA />
      <WhatsAppWidget />
    </main>
  );
}