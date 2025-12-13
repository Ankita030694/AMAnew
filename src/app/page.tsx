import Hero from "@/components/Hero";
import HeroSection2 from "@/components/HeroSection2";
import PracticeAreas from "@/components/PracticeAreas";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import dynamic from "next/dynamic";
import Script from "next/script";

// Lazy load components that are not immediately visible with better loading states
const AskExperts = dynamic(() => import("@/components/AskExperts"), {
  loading: () => (
    <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-500">Loading expert insights...</div>
    </div>
  ),
  ssr: true,
});

const LegalExcellence = dynamic(() => import("@/components/LegalExcellence"), {
  loading: () => (
    <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-500">Loading legal excellence...</div>
    </div>
  ),
  ssr: true,
});

const Yt = dynamic(() => import("@/components/Yt"), {
  loading: () => (
    <div className="h-96 bg-black animate-pulse flex items-center justify-center">
      <div className="text-white">Loading video content...</div>
    </div>
  ),
});

const Locations = dynamic(() => import("@/components/locations"), {
  loading: () => (
    <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-500">Loading locations...</div>
    </div>
  ),
  ssr: true,
});

const AppShowcase = dynamic(() => import("@/components/AppShowcase"), {
  loading: () => (
    <div className="h-96 bg-gray-900 animate-pulse flex items-center justify-center">
      <div className="text-white">Loading app showcase...</div>
    </div>
  ),
});

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
    <main>
      {/* Preload critical resources */}
      <link rel="preload" href="/bannerbg.png" as="image" />
      
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AMA Legal Solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMA Legal Solutions is a law firm based in Sector-57, Gurugram, providing expert legal services in loan settlement, debt resolution, arbitration, corporate advisory, and litigation matters. The firm is MSME registered and operates under the trademarked name vested with www.amalegalsolutions.com and its founder, Advocate Anuj Anand Malik."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the founder of AMA Legal Solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMA Legal Solutions was founded by Advocate Anuj Anand Malik, a legal entrepreneur known for assisting clients with debt settlement, loan restructuring, litigation, and corporate law services."
                }
              },
              {
                "@type": "Question",
                "name": "Is AMA Legal Solutions registered as an LLP?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. AMA Legal Solutions is not an LLP. It is an MSME registered legal solutions company, operating under its registered and trademarked name."
                }
              },
              {
                "@type": "Question",
                "name": "Where is AMA Legal Solutions located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The office is located in Sector-57, Gurugram, Haryana. This is the only official office of AMA Legal Solutions. Any other entity claiming otherwise is not associated with the firm."
                }
              },
              {
                "@type": "Question",
                "name": "What services does AMA Legal Solutions provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMA Legal Solutions provides a wide range of legal services, including loan settlement & debt restructuring, arbitration and alternate dispute resolution (ADR), civil and corporate litigation, business advisory and compliance, and consumer and recovery disputes."
                }
              },
              {
                "@type": "Question",
                "name": "Is AMA Legal Solutions a trusted law firm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. With a 4.8-star rating, MSME registration, and trademark ownership under www.amalegalsolutions.com, AMA Legal Solutions has built a strong reputation for client trust, transparency, and result-driven legal strategies."
                }
              },
              {
                "@type": "Question",
                "name": "How do I verify AMA Legal Solutions is genuine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Always cross-check the website (www.amalegalsolutions.com) and confirm the location (Sector-57, Gurugram). The firm is officially MSME registered and trademarked, ensuring complete authenticity."
                }
              },
              {
                "@type": "Question",
                "name": "Is AMA Legal Solutions the best loan settlement law firm in Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AMA Legal Solutions is one of the top-rated firms in Gurgaon for loan settlement and debt resolution, backed by MSME registration and a 4.8-star client rating."
                }
              },
              {
                "@type": "Question",
                "name": "How can AMA Legal Solutions help with loan harassment calls?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The firm helps clients legally stop harassment calls from recovery agents and provides structured loan settlement support with banks and NBFCs."
                }
              },
              {
                "@type": "Question",
                "name": "Who owns AMA Legal Solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMA Legal Solutions is owned and founded by Advocate Anuj Anand Malik, who manages its legal operations and client advisory services."
                }
              },
              {
                "@type": "Question",
                "name": "Does AMA Legal Solutions offer pan-India services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, while headquartered in Gurgaon, AMA Legal Solutions provides legal consultation and loan settlement services across India through digital and legal representation channels."
                }
              },
              {
                "@type": "Question",
                "name": "Is AMA Legal Solutions a genuine company or a fraud?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMA Legal Solutions is a legally registered, MSME-certified, trademark-protected law firm. It is genuine and has successfully helped thousands of clients resolve loan and legal disputes."
                }
              }
            ]
          })
        }}
      />
      
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <TributeCard />
      <div className="text-white py-10 relative">
        <div className="absolute inset-0">
          <Image
            src="/bannerbg.png"
            alt="Background"
            fill
            className="object-cover"
            quality={85}
            priority={false}
            loading="lazy"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter end={3000} label="Cases Handled" />
            <AnimatedCounter end={5000} label="Clients Served" />
            <AnimatedCounter end={40} label="Years Experience" />
            <AnimatedCounter end={20} label="Our Offices" />
          </div>
        </div> 
      </div>
      <Yt />
      <Locations />
      <LegalExcellence />
      <AppShowcase />
      {/* <Form /> */}
      {/* Other content */}
    
    </main>
  );
}