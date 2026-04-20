
import Hero from "@/newcomp/Hero";
import ClientLogoSlider from "@/newcomp/ClientLogoSlider";
import Legacy2 from "@/newcomp/Legacy2";
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
  title: 'AMA Legal Solutions | Top Full-Service Law Firm in India',
  description: 'AMA Legal Solutions is a premier law firm in India, providing expert legal consultation, dispute resolution, and advisory services for individuals and corporations.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/',
  },
  // Add Open Graph metadata for better social sharing
  openGraph: {
    title: 'AMA Legal Solutions | Top Full-Service Law Firm in India',
    description: 'Expert legal consultation and dispute resolution services in India. AMA Legal Solutions provides trustworthy advisory for all your legal needs.',
    url: 'https://www.amalegalsolutions.com/',
    siteName: 'AMA Legal Solutions',
    type: 'website',
  },
  // Add Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'AMA Legal Solutions | Top Full-Service Law Firm in India',
    description: 'Premier law firm in India offering expert legal consultation and dispute resolution services. Trust AMA Legal Solutions for professional legal advice.',
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
                "name": "AMA Legal & AMA Legal Solutions: Top Law Firm in India",
                "description": "AMA Legal and AMA Legal Solutions are trusted law firms in India offering legal consultation, dispute resolution, and advisory services.",
                "about": { "@id": "https://www.amalegalsolutions.com/" }
              },
              {
                "@type": "Attorney",
                "@id": "https://www.amalegalsolutions.com/",
                "review": baseTestimonials.slice(0, 10).map((t, i) => ({
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
                }))
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 1",
                "description": "AMA Legal Solutions client success story and review.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-01T08:00:00+08:00",
                "duration": "PT1M20S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid1.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid1"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 2",
                "description": "AMA Legal Solutions client success story and review.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-02T09:00:00+08:00",
                "duration": "PT1M45S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid2.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid2"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 3",
                "description": "AMA Legal Solutions client success story and review.",
                "thumbnailUrl": "https://www.amalegalsolutions.com/newAssets/hero.png",
                "uploadDate": "2024-03-03T10:00:00+08:00",
                "duration": "PT2M10S",
                "contentUrl": "https://www.amalegalsolutions.com/newAssets/testivid/testivid3.mp4",
                "embedUrl": "https://www.youtube.com/embed/testivid3"
              },
              {
                "@type": "VideoObject",
                "name": "AMA Legal Solutions Client Testimonial 4",
                "description": "AMA Legal Solutions client success story and review.",
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
      <Legacy2 />
      <Counter />
      <Services />
      
      <div className="max-w-8xl mx-auto px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center bg-[#EBE9E4]">
        <Testimonials2 />
        <Testimonials />
      </div>
      
      <VideoTestimonials />

      {/* SEO Information Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center border-t border-black/5">
        <h2 className="text-3xl md:text-4xl font-normal text-[#30261C] mb-8" style={{ fontFamily: 'var(--font-polysans)' }}>
          Why Choose AMA Legal Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#D29E0D]">Expertise You Can Trust</h3>
            <p className="text-[#30261C]/80 leading-relaxed">
              At <strong>AMA Legal Solutions</strong>, we provide unparalleled primary legal expertise. Our team is committed to delivering results by navigating the complexities of the Indian legal system. We ensure that your legal matters are handled with the utmost precision, care, and professional integrity.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#D29E0D]">Tailored Legal Services</h3>
            <p className="text-[#30261C]/80 leading-relaxed">
              We offer a wide range of specialized services including corporate law, finance, and dispute resolution. <strong>AMA Legal Solutions</strong> is recognized for its client-centric approach, providing strategic guidance tailored to your unique challenges in the modern legal landscape.
            </p>
          </div>
        </div>
        <p className="mt-8 text-[#30261C]/70 italic">
          Experience the professional difference with our expert practitioners. Your search for comprehensive legal solutions ends here.
        </p>
      </section>

      <FAQ />
      <CTA />

    </main>
  );
}