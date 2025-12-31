
import Navbar from "@/newcomp/Navbar";
import Hero from "@/newcomp/Hero";
import Clients from "@/newcomp/Clients";
import Legacy from "@/newcomp/Legacy";
import Counter from "@/newcomp/Counter";
import Services from "@/newcomp/Services";
import Testimonials2 from "@/newcomp/Testimonials2";
import Testimonials from "@/newcomp/Testimonials";
import VideoTestimonials from "@/newcomp/VideoTestimonials";
import FAQ from "@/newcomp/FAQ";
import CTA from "@/newcomp/CTA";
import Footer from "@/newcomp/Footer";
import WhatsAppWidget from "@/newcomp/WhatsAppWidget";

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
    <main className="min-h-screen bg-[#EBE9E4] relative overflow-hidden">
      {/* Background Texture/Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#30261C 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>
      
      <Navbar />
      <Hero />
      <Clients />
      <Legacy />
      <Counter />
      <Services />
      
      <div className="max-w-8xl mx-auto px-4 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center bg-[#EBE9E4]">
        <Testimonials2 />
        <Testimonials />
      </div>
      
      <VideoTestimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}