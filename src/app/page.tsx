import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import OurAttorneys from "@/components/OurAttorneys";
import LegalExcellence from "@/components/LegalExcellence";
import Form from "@/components/Form";
import Clients from "@/components/Clients";
import TributeCard from '@/components/TributeCard';

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <TributeCard />
      <OurAttorneys />
      <LegalExcellence />
      <Form />
      {/* Other content */}
    </main>
  );
}

