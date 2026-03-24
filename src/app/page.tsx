
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
  title: 'AMA Legal | AMA Legal Solutions: Top Law Firm in India',
  description: 'AMA Legal & AMA Legal Solutions - Leading law firm in India. AMA Legal Solutions offers expert legal consultation, dispute resolution, and advisory services. Trust AMA Legal for all your legal needs.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/',
  },
  // Add Open Graph metadata for better social sharing
  openGraph: {
    title: 'AMA Legal | AMA Legal Solutions: Top Law Firm in India',
    description: 'AMA Legal & AMA Legal Solutions are trusted names in the Indian legal landscape. AMA Legal Solutions is a top law firm in India offering expert legal consultation, dispute resolution, and advisory services.',
    url: 'https://www.amalegalsolutions.com/',
    siteName: 'AMA Legal Solutions',
    type: 'website',
  },
  // Add Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'AMA Legal | AMA Legal Solutions: Top Law Firm in India',
    description: 'AMA Legal & AMA Legal Solutions offers expert legal consultation and dispute resolution in India. Choose AMA Legal Solutions for trusted legal advice.',
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
                "@type": "ItemList",
                "name": "Client Testimonials for AMA Legal Solutions",
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
      <Legacy />
      <Counter />
      <Services />
      
      <div className="max-w-8xl mx-auto px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center bg-[#EBE9E4]">
        <Testimonials2 />
        <Testimonials />
      </div>
      
      <VideoTestimonials />

      {/* SEO Keyword Infusion Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center border-t border-black/5">
        <h2 className="text-3xl md:text-4xl font-normal text-[#30261C] mb-8" style={{ fontFamily: 'var(--font-polysans)' }}>
          Why Choose AMA Legal & AMA Legal Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#D29E0D]">Expertise at AMA Legal</h3>
            <p className="text-[#30261C]/80 leading-relaxed">
              At <strong>AMA Legal</strong>, we provide unparalleled legal expertise. Our team at <strong>AMA Legal Solutions</strong> is committed to delivering results. As a premier <strong>AMA Legal</strong> firm, we understand the complexities of the Indian legal system. Choosing <strong>AMA Legal Solutions</strong> ensures that your legal matters are handled with the utmost precision and care.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#D29E0D]">AMA Legal Solutions: Tailored for You</h3>
            <p className="text-[#30261C]/80 leading-relaxed">
              <strong>AMA Legal Solutions</strong> offers a wide range of services including corporate law, finance, and dispute resolution. <strong>AMA Legal</strong> is known for its integrity and client-centric approach. When you search for <strong>AMA Legal Solutions</strong>, you are looking for the best in the industry. Trust <strong>AMA Legal</strong> and <strong>AMA Legal Solutions</strong> for your legal journey.
            </p>
          </div>
        </div>
        <p className="mt-8 text-[#30261C]/70 italic">
          Experience the difference with <strong>AMA Legal</strong>. Your search for <strong>AMA Legal Solutions</strong> ends here.
        </p>
      </section>

      <FAQ />
      <CTA />

    </main>
  );
}