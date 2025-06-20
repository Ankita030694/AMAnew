import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import dynamic from "next/dynamic";

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
      {/* <Form /> */}
      {/* Other content */}
    </main>
  );
}