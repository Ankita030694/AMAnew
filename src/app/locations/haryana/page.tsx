import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you handle cases in Punjab and Haryana High Court?",
    answer: "Yes, we have a dedicated team of advocates practicing at the Punjab and Haryana High Court in Chandigarh. We handle writ petitions, criminal appeals, bail matters, and civil disputes representing clients from across Haryana."
  },
  {
    question: "Can you help with Loan Settlement against banks in Gurgaon?",
    answer: "Absolutely. We specialize in negotiating One Time Settlements (OTS) with banks and NBFCs in Gurgaon and Faridabad. We also help borrowers deal with harassment from recovery agents and represent them in DRT proceedings."
  },
  {
    question: "Where is the Haryana RERA court located?",
    answer: "Haryana RERA has two separate benches. The Gurugram Bench handles real estate disputes for projects located in Gurugram district. The Panchkula Bench has jurisdiction over the rest of Haryana. We represent homebuyers and developers in both benches."
  },
  {
    question: "How do I register a trademark for my business in Manesar?",
    answer: "Trademark registration is a central process handled by the Comptroller General of Patents, Designs, and Trade Marks. For Haryana businesses, the appropriate office is in New Delhi. We handle the entire process online, from trademark search to filing and responding to objections."
  },
  {
    question: "Do you handle specialized corporate litigation in NCLT?",
    answer: "Yes, we represent companies and creditors in the National Company Law Tribunal (NCLT), Chandigarh Bench, which has jurisdiction over Haryana. We handle insolvency (IBC) cases, mergers, and oppression & mismanagement petitions."
  },
  {
    question: "What courts in Haryana do you practice in?",
    answer: "We practice in the Punjab & Haryana High Court (Chandigarh), District Courts of Gurugram, Faridabad, Ambala, Panipat, Sonipat, and Rohtak. We also appear before specialized tribunals like RERA (Gurugram & Panchkula), DRT (Chandigarh), and NCLT (Chandigarh)."
  },
  {
    question: "How can I protect my startup's IP in Gurgaon?",
    answer: "Gurgaon is a startup hub. We assist startups with comprehensive IP protection including Trademark registration for brand names, Copyrights for software/content, and Patent filing for inventions. We also draft Non-Disclosure Agreements (NDAs) to protect trade secrets."
  },
  {
    question: "Can you help with a cheque bounce case in Faridabad?",
    answer: "Yes, we have a strong team for Section 138 NI Act (Cheque Bounce) cases. Whether you are the complainant seeking recovery or the accused seeking defense, we represent clients in the District Courts of Faridabad and surrounding areas."
  },
  {
    question: "Do you provide legal consultation for NRIs from Haryana?",
    answer: "Yes, we have a specialized NRI Legal Services desk. We assist NRIs with property disputes, ancestral land matters, and matrimonial issues in Haryana without requiring their constant presence in India."
  },
  {
    question: "What is the process for divorce in Haryana courts?",
    answer: "Divorce petitions are filed in the Family Court of the relevant district. We handle both Mutual Consent Divorce (taking 6-18 months) and Contested Divorce. We also assist with mediation to resolve disputes amicably where possible."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://www.amalegalsolutions.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Haryana",
      "item": "https://www.amalegalsolutions.com/locations/haryana"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Haryana",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Haryana providing expert legal services in High Court Litigation, Loan Settlement, RERA, and Corporate Law.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Haryana",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Chandigarh" },
    { "@type": "City", "name": "Panipat" },
    { "@type": "State", "name": "Haryana" }
  ],
  "url": "https://www.amalegalsolutions.com/locations/haryana",
  "telephone": "+918448512333",
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "420"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Legal Services Haryana",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Top-tier legal services in Haryana by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "420"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Yadav"
      },
      "reviewBody": "I had a huge business loan default in Gurgaon. AMA Legal helped me get a stay on the SARFAESI notice and negotiated an OTS. Saved my factory."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Mehta"
      },
      "reviewBody": "Got my trademark registered for my tech startup in Gurgaon. Smooth process, everything handling over email and phone. Very efficient."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohit Singh"
      },
      "reviewBody": "My builder in New Gurgaon was delaying possession. Filed a case in Gurugram RERA through AMA Legal. Got a favorable order quickly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Rathi"
      },
      "reviewBody": "Best team for High Court matters in Chandigarh. They handled my service writ petition with great competence."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Haryana | High Court Chandigarh | Loan Settlement & Trademarks",
  description:
    "Expert lawyers in Haryana for Punjab & Haryana High Court litigation, Loan Settlement in Gurgaon/Faridabad, RERA, and Trademark Registration. Top rated legal services.",
  keywords: [
    "Lawyers in Haryana",
    "Advocates in Gurgaon",
    "Punjab and Haryana High Court Lawyers",
    "Loan Settlement Haryana",
    "Trademark Registration Manesar",
    "Divorce Lawyers Chandigarh",
    "Cheque Bounce Lawyers Faridabad",
    "NCLT Gurgaon",
    "RERA Haryana",
    "Property Lawyers Haryana"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/haryana',
  },
  openGraph: {
    title: "Lawyers in Haryana | High Court & Corporate Legal Services",
    description: "Expert legal representation in Haryana. Corporate, Civil, Criminal, and RERA services by AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/locations/haryana",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png", // Fallback to logo as we might not have a city specific SVG for Haryana yet
        width: 1200,
        height: 630,
        alt: "Legal Services Haryana",
      },
    ],
  },
};

export default function HaryanaLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-hub", title: "Haryana: Industrial & Legal Hub" },
    { id: "why-need-expert", title: "Why You Need an Expert" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "corporate-law", title: "Corporate & Commercial" },
    { id: "loan-settlement", title: "Loan Settlement & Banking" },
    { id: "real-estate", title: "RERA & Real Estate" },
    { id: "litigation", title: "High Court Litigation" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "ipr", title: "IPR & Trademarks" },
    { id: "courts-guide", title: "Courts in Haryana Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Haryana", href: "/locations/haryana" },
  ];

  return (
    <>
      <Script strategy="beforeInteractive"
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "linear-gradient(to right, #1a202c, #2d3748)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Top-Tier Legal Services in <span className="text-[#D2A02A]">Haryana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the corporate hubs of Gurugram & Faridabad to the Punjab & Haryana High Court in Chandigarh. We are your steadfast legal partners.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg tracking-wide">
                Get Your Case Evaluated
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-6 lg:gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-3xl shadow-sm space-y-10 md:space-y-16 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in Haryana</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Haryana presents a unique blend of rapid industrialization and deep-rooted agricultural heritage. With economic powerhouses like <strong>Gurugram (Gurgaon)</strong> and <strong>Faridabad</strong> driving the NCR engine, and <strong>Chandigarh</strong> serving as the judicial capital, the legal landscape here is complex and dynamic.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> stands at the forefront of this demanding legal landscape. We are a full-service law firm dedicated to providing exceptional legal counsel to a diverse clientele ranging from multinational corporations and startups in Cyber City to families and landowners across the state. Our philosophy is rooted in the belief that justice should be accessible, transparent, and swift.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you are battling a complex RERA dispute in Gurugram, facing a debt crisis, or seeking relief from the Punjab & Haryana High Court, our team is equipped to handle your case with the utmost competence and dedication.
                  </p>
                </section>

                {/* Haryana: Industrial Hub */}
                <section id="legal-hub" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Haryana: The Industrial & Legal Powerhouse</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Haryana is a manufacturing and startup powerhouse. <strong>IMT Manesar</strong> hosts thousands of industries, while Gurgaon is the startup capital of North India. This economic activity naturally leads to complex legal requirements, from regulatory compliance to high-stakes litigation.
                  </p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">The Strategic Advantage of AMA Legal</h4>
                    <p className="text-gray-700 mb-4">
                      Engaging a law firm with deep roots in Haryana offers distinct strategic advantages:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Multi-Jurisdictional Reach:</strong> We cover the High Court in Chandigarh, RERA benches in Gurugram/Panchkula, and Tribunals in Delhi.</li>
                      <li><strong>Local Knowledge:</strong> Deep understanding of Haryana's land laws (HSVP/HUDA regulations) and industrial policies.</li>
                      <li><strong>Corporate & Civil Balance:</strong> Equally proficient in handling corporate mergers in Cyber Hub and civil land disputes in Rohtak.</li>
                    </ul>
                  </div>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-need-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Risks of Inadequate Representation</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The legal system in Haryana involves multiple authorities and overlapping jurisdictions. A lawyer without specific expertise can inadvertently cause irreparable damage to your case.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Wrong Forum Selection</h4>
                        <p className="text-sm text-gray-700">Knowing whether to approach the RERA Gurugram bench, NCLT Chandigarh, or the Civil Court is crucial to avoid dismissal.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Procedural Errors</h4>
                        <p className="text-sm text-gray-700">Simple mistakes in filing writs or appeals in the High Court can lead to cases being dismissed on technical grounds.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Ineffective Defense</h4>
                        <p className="text-sm text-gray-700">In criminal matters or bank recovery cases, a weak initial defense can lead to adverse interim orders that are hard to reverse.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Lack of Strategy</h4>
                        <p className="text-sm text-gray-700">Winning isn't just about the law; it's about strategy-knowing when to settle (OTS), when to fight, and when to appeal.</p>
                     </div>
                  </div>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    AMA Legal Solutions is a multi-disciplinary firm. Our team comprises specialized advocates who head different verticals, ensuring that you receive expert advice whether you are an industrialist in Manesar or a homebuyer in New Gurgaon.
                  </p>
                </section>

                {/* Section: Corporate Law */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate & Commercial Law</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    In the bustling business environment of Gurugram and Faridabad, corporate legal issues are a daily reality. We act as prolonged legal arms for companies, handling everything from incorporation to winding up.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Startup Advisory:</strong> Gurugram is India's unicorn factory. We assist founders with entity selection, co-founders' agreements, ESOP structures, and fundraising documentation.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Insolvency & Bankruptcy (IBC):</strong> Representing creditors and corporate debtors in NCLT Chandigarh Bench proceedings under the IBC Code.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Contract Administration:</strong> Drafting ISAs, MSAs, and Vendor Agreements for IT and manufacturing clients in IMT Manesar.</div>
                    </li>
                  </ul>
                </section>

                {/* Section: Loan Settlement */}
                <section id="loan-settlement" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Loan Settlement & Banking</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Financial distress can happen to anyone. We specialize in helping individuals and businesses in Haryana exit debt traps legally and with dignity.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8 mb-6">
                     <div>
                         <h4 className="font-bold text-lg text-[#D2A02A] mb-2">One Time Settlement (OTS)</h4>
                         <p className="text-gray-700 text-sm">We negotiate directly with banks/NBFCs to settle your outstanding loans at a reduced amount, waiving off penal interest and charges.</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Anti-Harassment</h4>
                         <p className="text-gray-700 text-sm">Stopping illegal recovery tactics by agents in Gurgaon/Faridabad through legal notices and police complaints.</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-lg text-[#D2A02A] mb-2">DRT Defense</h4>
                         <p className="text-gray-700 text-sm">Representing borrowers in Debt Recovery Tribunal (DRT) Chandigarh to stay auctions and challenge SARFAESI actions.</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Cheque Bounce</h4>
                         <p className="text-gray-700 text-sm">Expert defense in Section 138 NI Act cases across all District Courts in Haryana.</p>
                     </div>
                   </div>
                </section>

                {/* Section: RERA */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">RERA & Real Estate</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Real estate disputes are rampant in NCR. We have specialized expertise in <strong>RERA Haryana</strong>.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Gurugram RERA Bench:</strong> Representing homebuyers against builders for delay penalty and refund of money in Gurugram projects.</li>
                     <li><strong>Panchkula RERA Bench:</strong> Handling disputes for the rest of Haryana (Sonipat, Panipat, Karnal, etc.).</li>
                     <li><strong>Property Litigation:</strong> Title disputes, illegal possession, and partition suits in Civil Courts.</li>
                   </ul>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">High Court Litigation (Chandigarh)</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>Punjab & Haryana High Court</strong> is the apex judicial body for the state. Our team in Chandigarh handles Constitutional Writs, Appeals, and Public Interest Litigations (PILs).
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We regularly challenge arbitrary government actions, land acquisition matters (feudal/HSVP), and service matters regarding government employees.
                  </p>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We provide robust defense strategies for individuals accused of crimes, ensuring their rights/liberty are protected.
                   </p>
                   <ul className="space-y-2 text-gray-700 mb-4">
                     <li>• <strong>Bail Matters:</strong> Regular Bail, Anticipatory Bail in Sessions Courts and High Court.</li>
                     <li>• <strong>FIR Quashing:</strong> Filing Section 482 petitions in the High Court to quash false FIRs.</li>
                     <li>• <strong>White Collar Crimes:</strong> Defense in PMLA, EOW, and Corporate Fraud cases.</li>
                   </ul>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Family disputes require sensitivity. We handle divorce, custody, and maintenance matters across Haryana.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Divorce</strong>
                        <p className="text-sm text-gray-600">Mutual Consent and Contested Divorce in Family Courts of Gurgaon, Faridabad, etc.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">NRI Disputes</strong>
                        <p className="text-sm text-gray-600">Specialized handling of abandoned bride cases and NRI property disputes.</p>
                      </div>
                   </div>
                </section>

                {/* Section: IPR */}
                <section id="ipr" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Intellectual Property Rights</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Protecting your brand in the competitive NCR market is vital. We assist with:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Trademark Registration:</strong> Filing and prosecuting applications for brands in Manesar/Gurgaon.</li>
                     <li><strong>Infringement Suits:</strong> Acting against troubleshooters and counterfeiters in District Courts and High Court.</li>
                     <li><strong>Copyright & Patents:</strong> Comprehensive protection for software, content, and industrial designs.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Haryana</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the judicial infrastructure can be daunting. We appear regularly in these key forums:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Punjab & Haryana High Court (Chandigarh)</h4>
                        <p className="text-gray-700 text-sm mt-1">The apex court for Haryana. Jurisdiction over all civil and criminal appeals and writ petitions.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">RE</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Haryana RERA (Gurugram & Panchkula)</h4>
                        <p className="text-gray-700 text-sm mt-1">Specialized authority for real estate disputes. Gurugram Bench for Gurugram district; Panchkula Bench for rest of the state.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>Gurugram Court:</strong> Near Rajiv Chowk.<br/>
                          <strong>Faridabad Court:</strong> Sector 12.<br/>
                          Also courts in Ambala, Panipat, Karnal, Rohtak, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology: The AMA Advantage</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We don't believe in a one-size-fits-all approach. Every client comes with a unique set of facts. Our methodology is designed to provide personalized legal care.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Deep Assessment</h4>
                        <p className="text-xs text-gray-600 mt-2">We spend hours analyzing your documents before advising a strategy.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-900">Risk Mitigation</h4>
                        <p className="text-xs text-gray-600 mt-2">We advise on potential future risks, ensuring that solving one problem doesn't create another.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💬</div>
                        <h4 className="font-bold text-gray-900">Transparent Comms</h4>
                        <p className="text-xs text-gray-600 mt-2">No legal jargon. We explain the law in plain English and keep you updated.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Resolution Focused</h4>
                        <p className="text-xs text-gray-600 mt-2">If settlement is better than litigation, we will tell you honestly.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing a lawyer is a decision of trust. Here is why AMA Legal Solutions is the preferred choice for hundreds of clients in Haryana:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Local Expertise</h3>
                      <p className="text-gray-600 relative z-10">We handle matters from the High Court in Chandigarh to ground-level disputes in districts, giving us 360-degree coverage.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Cost Effective</h3>
                      <p className="text-gray-600 relative z-10">We provide top-tier firm quality at boutique firm prices. Transparent fee structures with no hidden shocks.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Client First</h3>
                      <p className="text-gray-600 relative z-10">For us, you are not a case file number. We build long-term relationships based on trust and provided results.</p>
                    </div>
                  </div>
                </section>
                
                 {/* client stories */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "I had a huge business loan default in Gurgaon. AMA Legal helped me get a stay on the SARFAESI notice and negotiated an OTS. Saved my factory."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Suresh Yadav</p>
                          <p className="text-xs text-gray-500">Industrialist, Manesar</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Got my trademark registered for my tech startup in Gurgaon. Smooth process, everything handling over email and phone. Very efficient."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Anjali Mehta</p>
                          <p className="text-xs text-gray-500">Founder, Gurgaon</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My builder in New Gurgaon was delaying possession. Filed a case in Gurugram RERA through AMA Legal. Got a favorable order quickly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rohit Singh</p>
                          <p className="text-xs text-gray-500">IT Professional, Gurgaon</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best team for High Court matters in Chandigarh. They handled my service writ petition with great competence."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vikram Rathi</p>
                          <p className="text-xs text-gray-500">Ambala</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                 {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">❓</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 border-l-2 border-gray-200 ml-2">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a202c] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(#d2a02a 1px, transparent 1px), linear-gradient(90deg, #d2a02a 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help is Just a Call Away</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Haryana's trusted legal experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Free Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918448512333">
                        <button className="bg-transparent border-2 border-[#D2A02A] text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8448512333
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-60">
                      100% Confidential • Experienced Advocates • Proven Results
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 mt-12 lg:mt-0">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Urgent Advice?</h3>
                  <div className="w-12 h-1 bg-[#D2A02A] mb-4"></div>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our senior advocates in Haryana today regarding your case.
                  </p>
                  <a 
                    href="tel:+918448512333" 
                    className="flex items-center justify-center w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all shadow-md mb-4 group"
                  >
                    <span className="mr-2 group-hover:animate-pulse">📞</span> Call +91-8448512333
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-gray-200 text-gray-700 text-center py-3 rounded-xl font-semibold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Services</h3>
                  <ul className="space-y-4 text-sm font-medium">
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> High Court Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Family & Civil Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Trademark & IPR
                      </Link>
                    </li>
                     <li>
                      <Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> RERA & Property
                      </Link>
                    </li>
                  </ul>
                </div>
                
                 {/* Testimonial Snippet */}
                <div className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                   <div className="text-6xl text-[#D2A02A] absolute -top-4 -left-2 opacity-20">"</div>
                   <p className="relative z-10 italic text-sm text-gray-300 mb-4">
                     "Saved my factory from auction by bank. The best team for debt settlement in Haryana."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">S</div>
                     <span className="ml-3 font-bold text-sm">Suresh Yadav, CEO</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
