import AboutInfo from "@/components/aboutcomps/AboutInfo";
import AnujBhiya from "@/components/aboutcomps/AnujBhiya";
import Clients from "@/components/aboutcomps/Clients";
import Hero from "@/components/aboutcomps/hero";
import OurAttorneys from "@/components/aboutcomps/OurAttorneys";
import TabbedTimeline from "@/components/aboutcomps/TabbedTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
export const metadata = {
  title: 'About AMA Legal Solutions: Experienced Law Firm in Gurugram',
  description: 'Learn about AMA Legal Solutions legacy and expertise in providing exceptional legal services across various domains in Gurugram, India.',
  alternates: {
    canonical: 'https://amalegalsolutions.com/about', // Add your canonical URL here
  },
}
export default function About() {
    return (
      
      <div>
        <Hero />
        <Clients />
        <AnujBhiya />
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
        <AboutInfo />
        <TabbedTimeline />
        <OurAttorneys />

      </div>
    );
  }
  