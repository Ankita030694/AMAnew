
import Hero from "@/newcomp/Hero";
import ClientLogoSlider from "@/newcomp/ClientLogoSlider";
import Legacy from "@/newcomp/Legacy";
import Counter from "@/newcomp/Counter";
import Services from "@/newcomp/Services";
import Testimonials2 from "@/newcomp/Testimonials2";
import Testimonials from "@/newcomp/Testimonials";
import VideoTestimonials from "@/newcomp/VideoTestimonials";
import FAQ from "@/newcomp/FAQ";
import CTA from "@/newcomp/CTA";

import Script from "next/script";
import { baseTestimonials } from "@/data/testimonials";

export const metadata = {
  title: 'AMA Legal Solutions: Top Law Firm in India',
  description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/',
  },
  // Add Open Graph metadata for better social sharing
  openGraph: {
    title: 'AMA Legal Solutions: Top Law Firm in India',
    description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
    url: 'https://www.amalegalsolutions.com/',
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
        id="homepage-video-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.amalegalsolutions.com/#webpage",
                "url": "https://www.amalegalsolutions.com/",
                "name": "AMA Legal Solutions: Top Law Firm in India",
                "description": "AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services.",
                "about": { "@id": "https://www.amalegalsolutions.com/" }
              },
              {
                "@type": "ItemList",
                "name": "Client Testimonials",
                "itemListElement": baseTestimonials.slice(0, 10).map((t, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "item": {
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
                  }
                }))
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 1",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-01T08:00:00+08:00",
                "duration": "PT1M20S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid1.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid1"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 2",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-02T09:00:00+08:00",
                "duration": "PT1M45S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid2.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid2"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 3",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-03T10:00:00+08:00",
                "duration": "PT2M10S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid3.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid3"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 4",
                "description": "Client success story and review of AMA Legal Solutions services.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-04T11:00:00+08:00",
                "duration": "PT1M55S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid4.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid4"
              }
            ]
          })
        }}
      />
      
      <Hero />
      <ClientLogoSlider />
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

    </main>
  );
}