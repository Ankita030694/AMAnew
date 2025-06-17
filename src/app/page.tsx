import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load components that are not immediately visible
const AskExperts = dynamic(() => import("@/components/AskExperts"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const LegalExcellence = dynamic(() => import("@/components/LegalExcellence"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Yt = dynamic(() => import("@/components/Yt"), {
  loading: () => <div className="h-96 bg-black animate-pulse flex items-center justify-center">
    <div className="text-white">Loading video...</div>
  </div>,
});

const Locations = dynamic(() => import("@/components/locations"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});

export const metadata = {
  title: 'AMA Legal Solutions: Top Law Firm in India',
  description: 'AMA Legal Solutions is a trusted law firm in India offering legal consultation, dispute resolution, and advisory services in finance, corporate law, and more',
  alternates: {
    canonical: 'https://amalegalsolutions.com/', // Add your canonical URL here
  },
}

export default function Home() {
  return (
    <main>
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
            quality={90}
            loading="lazy"
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