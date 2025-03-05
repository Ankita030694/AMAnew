import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import LegalExcellence from "@/components/LegalExcellence";
import Clients from "@/components/Clients";
import TributeCard from '@/components/TributeCard';
import Yt from "@/components/Yt";
export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <TributeCard />
      <Yt />
      <LegalExcellence />
      {/* <Form /> */}
      {/* Other content */}
    </main>
  );
}

