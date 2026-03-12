// import AboutInfo from "@/components/aboutcomps/AboutInfo";
// import AnujBhiya from "@/components/aboutcomps/AnujBhiya";
// import Clients from "@/components/aboutcomps/Clients";
// import Hero from "@/components/aboutcomps/hero";
// import OurAttorneys from "@/components/aboutcomps/OurAttorneys";
// import TabbedTimeline from "@/components/aboutcomps/TabbedTimeline";
// import AnimatedCounter from "@/components/AnimatedCounter";
// import Image from "next/image";

import AboutUsRevamp from "@/newcomp/AboutUsRevamp";
import { fetchAttorneys } from "@/lib/attorneys";
import Script from "next/script";

export const metadata = {
  title: 'About AMA Legal Solutions: Experienced Law Firm in Gurugram',
  description: 'Learn about AMA Legal Solutions legacy and expertise in providing exceptional legal services across various domains in Gurugram, India.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/about', // Add your canonical URL here
  },
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.amalegalsolutions.com/about#webpage",
      "url": "https://www.amalegalsolutions.com/about",
      "name": "About AMA Legal Solutions",
      "description": "Learn about the legacy and expertise of AMA Legal Solutions in providing exceptional legal services across India.",
      "publisher": { "@id": "https://www.amalegalsolutions.com/" }
    },
    {
      "@type": "Person",
      "@id": "https://www.amalegalsolutions.com/#person",
      "name": "Anuj Anand Malik",
      "jobTitle": "Founder & Managing Partner",
      "url": "https://www.amalegalsolutions.com/",
      "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/ama-legal-solutions/",
        "https://www.instagram.com/amalegalsolutions/"
      ],
      "worksFor": { "@id": "https://www.amalegalsolutions.com/" }
    }
  ]
};

export const revalidate = 0;

export default async function About() {
    const attorneys = await fetchAttorneys();
    
    return (
      <>
        <Script
          id="about-page-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        <AboutUsRevamp attorneys={attorneys} />
      </>
    );
}