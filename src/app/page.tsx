import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import OurAttorneys from "@/components/OurAttorneys";
import LegalExcellence from "@/components/LegalExcellence";
import Form from "@/components/Form";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <OurAttorneys />
      <LegalExcellence />
      <Form />
      {/* Other content */}
    </main>
  );
}

