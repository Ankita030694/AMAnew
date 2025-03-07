import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import LegalExcellence from "@/components/LegalExcellence";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
import Yt from "@/components/Yt";
import AnimatedCounter from "@/components/AnimatedCounter";
export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <TributeCard />
      <div className="bg-[#5A4C33] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter end={2500} label="Cases Won" />
            <AnimatedCounter end={5000} label="Clients Served" />
            <AnimatedCounter end={35} label="Years Experience" />
            <AnimatedCounter end={120} label="Awards Received" />
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
