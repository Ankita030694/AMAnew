import Hero from "@/components/Hero";
import TrustedPartner from "@/components/TrustedPartner";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import OurAttorneys from "@/components/OurAttorneys";
import LegalExcellence from "@/components/LegalExcellence";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedPartner />
      <PracticeAreas />
      <AskExperts />
      <OurAttorneys />
      <LegalExcellence />
      <Form />
      {/* Other content */}
    </main>
  );
}

