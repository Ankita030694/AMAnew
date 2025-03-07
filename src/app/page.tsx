import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import LegalExcellence from "@/components/LegalExcellence";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
import Yt from "@/components/Yt";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

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
            quality={100}
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
      <LegalExcellence />
      {/* <Form /> */}
      {/* Other content */}
    </main>
  );
}
