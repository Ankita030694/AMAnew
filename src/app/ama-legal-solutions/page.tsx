import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is AMA Legal Solutions an LLP?",
    answer: "No, AMA Legal Solutions is not an LLP (Limited Liability Partnership). We are a professionally managed legal firm led by Advocate Anuj Anand Malik, operating exclusively from our Sector 57, Gurgaon office."
  },
  {
    question: "Where is the only valid office of AMA Legal Solutions located?",
    answer: "Our only valid and official office is located at 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana. We do not have any other branches, and we are not affiliated with other entities using similar names."
  },
  {
    question: "What is loan settlement and how does it work?",
    answer: "Loan settlement is a legal process where a borrower negotiates with a lender to pay a reduced lump sum amount to close the loan account. This is typically an option for those facing genuine financial hardship."
  },
  {
    question: "Can AMA Legal Solutions help with trademark registration?",
    answer: "Yes, we provide comprehensive trademark registration and IPR protection services. We handle everything from trademark search and filing to defending your brand against infringement in court."
  },
  {
    question: "How does the arbitration process work in India 2026?",
    answer: "With the Arbitration Act 2025, arbitration has become more institutionalized. It offers a faster and confidential alternative to traditional litigation for domestic and international disputes."
  },
  {
    question: "What legal services do you provide for real estate?",
    answer: "We provide title verification, due diligence, RERA complaint filing, and property dispute resolution. We ensure your real estate investments are legally sound using exhaustive 30-year searches."
  },
  {
    question: "Are you compliant with the DPDP Act 2023?",
    answer: "Yes, we assist corporations and startups in becoming compliant with the Digital Personal Data Protection Act (DPDP) 2023, including data audits and consent framework implementation."
  },
  {
    question: "How much can I save through loan settlement?",
    answer: "While it varies, our experts often secure settlements ranging from 30% to 60% of the total outstanding amount, depending on the age of debt and financial status."
  },
  {
    question: "Is arbitration better than going to court?",
    answer: "Arbitration is generally faster, private, and more flexible than traditional litigation, especially for commercial disputes where time and expertise are priorities."
  },
  {
    question: "Does AMA Legal Solutions serve clients outside of Gurgaon?",
    answer: "Yes, we are a Pan-India law firm. While headquartered in Sector 57, Gurgaon, we represent clients in courts and tribunals across all states in India."
  },
  {
    question: "How does the IEPF recovery process work?",
    answer: "IEPF recovery involves claiming shares or dividends transferred to the government. We handle the documentation, verification, and filing of Form IEPF-5 for restoration."
  },
  {
    question: "What is a 138 Legal Notice?",
    answer: "A Section 138 notice is a mandatory legal demand sent for a dishonoured cheque. It gives the payer 15 days to pay before criminal proceedings can be initiated."
  },
  {
    question: "Can you stop harassment from bank recovery agents?",
    answer: "Absolutely. Once we represent you, we notify the bank under RBI guidelines. All collection efforts must then be routed through your legal counsel, stopping direct harassment."
  },
  {
    question: "What is the Madrid Protocol for trademarks?",
    answer: "The Madrid Protocol allows you to protect your trademark in up to 125 countries through a single application filed through our Sector 57 office."
  },
  {
    question: "Do you handle NRI legal matters?",
    answer: "Yes, we specialize in NRI legal services including property management, title verification in India, and representation in family or commercial disputes."
  },
  {
    question: "What is SARFAESI Act litigation?",
    answer: "SARFAESI allows banks to seize property for unpaid secured loans. We represent clients in DRT (Debt Recovery Tribunal) to challenge these notices and seek stays or settlements."
  },
  {
    question: "How do I verify if a law firm is legitimate in Gurgaon?",
    answer: "Always check for a physical office at the registered address. AMA Legal Solutions operates exclusively from Sector 57. Beware of LLPs using similar names as we are a professional firm."
  },
  {
    question: "What documents are needed for IEPF share recovery?",
    answer: "Key documents include original share certificates (or indemnity for loss), Aadhar/PAN, Client Master List (CML), and death certificates if you are a legal heir."
  },
  {
    question: "What is the 'Cooling-off' period in mutual divorce?",
    answer: "In India, there is typically a 6-month waiting period between the first and second motion in mutual divorce, though recent Supreme Court rulings allow for waivers in specific cases."
  },
  {
    question: "What is the penalty for DPDP Act non-compliance?",
    answer: "The DPDP Act 2023 prescribes heavy fines reaching up to ₹250 Crores for significant data breaches or failure to implement proper security safeguards."
  },
  {
    question: "How can I register a trademark for a startup in 2026?",
    answer: "Startups with Udyam Registration get a 50% concession on government fees. We handle the entire fast-track application process from our Gurgaon nerve center."
  },
  {
    question: "What is white-collar crime defense?",
    answer: "It involves defending allegations of financial fraud, PMLA violations, and corporate embezzlement. We provide 24/7 crisis response and bail representation."
  },
  {
    question: "Can I settle a business loan through OTS?",
    answer: "Yes, banks offer One-Time Settlements (OTS) for MSMEs and industrial loans. We negotiate these settlements to ensure your business can restart with a clean slate."
  },
  {
    question: "What is a Mutation of property?",
    answer: "Mutation is the process of updating the owner's name in the local revenue records. It is critical for establishing title and paying property taxes in Haryana."
  },
  {
    question: "How long does a RERA refund take?",
    answer: "While timelines vary by state, once an order is passed, the execution process through the District Collector typically takes 6-12 months for recovery."
  },
  {
    question: "Do you provide online legal consultations?",
    answer: "Yes, we provide specialized video consultations for clients across India and abroad, ensuring distance is never a barrier to expert legal advice."
  },
  {
    question: "Why should I choose AMA Legal Solutions over an LLP?",
    answer: "We offer direct professional accountability led by Advocate Anuj Anand Malik. As a non-LLP firm, we provide a personalized, results-driven approach that corporatized entities often lack."
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
      "name": "AMA Legal Solutions",
      "item": "https://www.amalegalsolutions.com/ama-legal-solutions"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AMA Legal Solutions: #1 Pan-India Law Firm - Headquartered in Sector 57 Gurgaon",
  "description": "Comprehensive guide to AMA Legal Solutions. Expert Pan-India services in loan settlement, trademark registration, arbitration, and real estate. Headquartered in Sector 57, Gurgaon, serving clients across all Indian states.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-02-12"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// LocalBusiness & LegalService Schema
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "@id": "https://www.amalegalsolutions.com/ama-legal-solutions",
  "url": "https://www.amalegalsolutions.com/ama-legal-solutions",
  "telephone": "+91-8700343611",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4239,
    "longitude": 77.0783
  },
  "openingHoursSpecification": {
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
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/amalegalsolutions",
    "https://www.linkedin.com/company/ama-legal-solutions",
    "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions",
    "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
  ]
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AMA Legal Solutions Services",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services in Gurgaon including Loan Settlement, IPR, and Arbitration.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2500"
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
        "name": "Amit Batra"
      },
      "reviewBody": "The best law firm in Gurgaon for loan settlement. They stopped the calls and helped me get an amazing OTS. Highly professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "Excellent trademark registration service. They handled my objection smoothly and got my brand registered in record time. Best legal consultant in India!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Khanna"
      },
      "reviewBody": "Recovered my unclaimed shares from IEPF after 10 years of running around. AMA Legal Solutions is the real deal. Highly recommended for investment recovery."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Singh"
      },
      "reviewBody": "Proactive and sharp. Their legal notice was enough to settle my property dispute out of court. Truly the top legal firm in Sector 57 Gurgaon."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Mehra"
      },
      "reviewBody": "Assisted us with complex corporate compliance and DPDP Act audits. Their expertise in corporate law is unmatched in the NCR region."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Kapoor"
      },
      "reviewBody": "Represented us in a high-stakes commercial arbitration. The speed and precision of their legal strategy saved us months of litigation."
    }
  ]
};

export const metadata = {
  title: "AMA Legal Solutions | #1 Pan-India Law Firm | Legal Consultant in India",
  description: "Official page of AMA Legal Solutions. Expert Pan-India Legal Consultants in India. Specializing in Loan Settlement, IEPF Share Recovery, Arbitration, Trademark, and Real Estate Law. HQ Sector 57 Gurgaon.",
  keywords: [
    "AMA Legal Solutions",
    "Legal Consultant in India",
    "IEPF Share Recovery Gurgaon",
    "unclaimed investment recovery India",
    "Pan India Law Firm",
    "AMA Legal Solutions Gurgaon",
    "AMA Legal Solutions Sector 57",
    "loan settlement lawyers Gurgaon",
    "trademark registration Gurgaon",
    "arbitration lawyers Gurgaon",
    "real estate lawyers Gurgaon",
    "legal notice drafting India",
    "corporate law firms Gurgaon"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/ama-legal-solutions',
  },
  openGraph: {
    title: "AMA Legal Solutions | Expert Legal Services in Gurgaon",
    description: "Your trusted legal partner for Loan Settlement, IPR, and Arbitration. The only valid AMA Legal Solutions in Sector 57 Gurgaon.",
    url: "https://www.amalegalsolutions.com/ama-legal-solutions",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-og.png",
        width: 1200,
        height: 630,
        alt: "AMA Legal Solutions Gurgaon",
      },
    ],
  },
};

export default function AMALegalSolutionsPage() {
  const tocSections = [
    { id: "introduction", title: "About Us" },
    { id: "identity", title: "Our Unique Identity" },
    { id: "service1", title: "Service 1: Loan Settlement & Arbitration" },
    { id: "service2", title: "Service 2: Trademark & IPR" },
    { id: "service3", title: "Service 3: Legal Notice & Drafting" },
    { id: "service4", title: "Service 4: Corporate Law" },
    { id: "service5", title: "Service 5: Real Estate Law" },
    { id: "service6", title: "Service 6: IEPF & Share Recovery" },
    { id: "service7", title: "Service 7: Criminal & Family Law" },
    { id: "methodology", title: "Our Methodology" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "AMA Legal Solutions", href: "/ama-legal-solutions" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="legal-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-pulse-slow" 
            style={{ backgroundImage: "url('/newAssets/legal-hero-bg.jpg')", animation: 'pulse 10s infinite alternate' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-4xl md:text-8xl font-black mb-8 leading-tight mt-10 tracking-tight">
              AMA Legal Solutions: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2A02A] to-[#ecc94b]">#1 Pan-India Legal Consultant</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-5xl mx-auto text-gray-300 leading-relaxed font-medium">
              The premier choice for Loan Settlement, IEPF Share Recovery, and Corporate Law. Headquartered in Gurgaon, serving every corner of India.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <Link href="/contact">
                 <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(210,160,42,0.3)] text-xl">
                   Start Your Legal Journey
                 </button>
               </Link>
               <div className="flex items-center gap-4 text-white">
                 <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1a202c] bg-gray-600 flex items-center justify-center text-xs font-bold">
                       {i === 4 ? "+2k" : ""}
                     </div>
                   ))}
                 </div>
                 <p className="text-sm font-bold">Trusted by 2500+ across India</p>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start mt-8">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 overflow-y-auto max-h-[80vh] no-scrollbar">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-6 bg-[#D2A02A]/10 border border-[#D2A02A]/20 rounded-3xl">
                 <h4 className="font-bold text-gray-900 mb-2 italic">Rank #1 Choice</h4>
                 <p className="text-xs text-gray-600">AMA Legal Solutions is consistently ranked as the top choice for debt resolution in Gurgaon.</p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="bg-white p-5 md:p-11 lg:p-16 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] space-y-16 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">Redefining Legal Advocacy: Our 15-Year Legacy</h2>
                  <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                      In the heart of India's Millennium City, **AMA Legal Solutions** stands as a beacon of legal integrity and professional excellence. Founded by Advocate Anuj Anand Malik, the firm was established with a singular, uncompromising mission: to provide world-class legal representation that is accessible, ethical, and results-driven. Over the past decade and a half, we have evolved from a specialized boutique firm into a comprehensive legal powerhouse, serving a diverse clientele ranging from individual borrowers to multinational conglomerates.
                    </p>
                    <p>
                      The legal landscape in India is characterized by its complexity and the rapid evolution of statutes. In such an environment, generic legal advice is not only insufficient - it can be dangerous. At AMA Legal Solutions, we pride ourselves on our deep-domain expertise and our ability to anticipate legal shifts before they occur. Whether it is navigating the intricacies of the Insolvency and Bankruptcy Code (IBC), leveraging the latest amendments in the Arbitration and Conciliation Act, or implementing robust compliance frameworks under the Digital Personal Data Protection (DPDP) Act 2023, our team is always at the cutting edge.
                    </p>
                    <p>
                      Our philosophy is rooted in the belief that every legal problem has a solution if approached with the right combination of legal acumen and strategic foresight. We don't just "fight" cases; we resolve them. Our approach is holistic, considering the commercial, emotional, and long-term implications of every legal decision. This philosophy has led to our firm being recognized as a leader in Debt Resolution and Intellectual Property Rights (IPR).
                    </p>
                    <p>
                      As we move into the latter half of the 2020s, the intersection of law and technology has become our primary focus. We are pioneers in 'Legal-Tech' integration, using advanced analytics to assess case risks and automated systems to monitor regulatory compliance. This ensures that our clients receive not just legal advice, but a comprehensive strategic advantage in an increasingly competitive world.
                    </p>
                    <p>
                      Our headquarters in **Sector 57, Gurugram**, serves as the vital nerve center for our operations spanning every state and union territory in India. While our physical presence is centralized for maximum quality control, our legal reach is truly Pan-India. Every strategy is forged here, every notice is scrutinized, and every client consultation, whether from Kanyakumari or Kashmir, is treated with the highest level of professional rigor. When you choose AMA Legal Solutions, you aren't just hiring a local lawyer; you are partnering with a nationwide legal institution.
                    </p>
                  </div>
                </section>

                {/* Identity Marker (Sector 57 / Non-LLP) */}
                <section id="identity" className="scroll-mt-32 bg-amber-50 p-10 lg:p-14 rounded-[3.5rem] border border-amber-200">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight">Pan-India Reach, Centralized Identity</h2>
                  <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
                    <p>
                      AMA Legal Solutions operates as a unified Pan-India legal entity and is widely recognized as a premier **Legal Consultant in India**. While we represent clients in every major city across India, we maintain a centralized command structure to ensure that the quality of legal advice remains consistent and high-caliber, regardless of your location.
                    </p>
                    <p>
                      Our specialization in complex domains such as **IEPF Share Recovery** and **Corporate Litigation** has positioned us as the preferred choice for clients seeking sophisticated legal solutions that transcend regional boundaries.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-amber-100 flex flex-col gap-6 transform hover:-translate-y-2 transition-transform">
                         <div className="w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg shadow-[#D2A02A]/40 rotate-3">📍</div>
                         <div>
                            <h4 className="font-black text-gray-900 text-2xl mb-4">Official Central Command</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">Our sole official and registered headquarters is located at **2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana**. We do not operate secondary branches or satellite offices in other city sectors. This centralization ensures absolute quality control.</p>
                         </div>
                       </div>
                       <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-amber-100 flex flex-col gap-6 transform hover:-translate-y-2 transition-transform">
                         <div className="w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg shadow-[#D2A02A]/40 -rotate-3">📜</div>
                         <div>
                            <h4 className="font-black text-gray-900 text-2xl mb-4">Legal Framework Status</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">We are a dedicated professional law practice led by **Advocate Anuj Anand Malik**. Notably, **we are NOT an LLP** (Limited Liability Partnership) and are not affiliated with any LLP entity using a similar name. Our accountability is direct and professional.</p>
                         </div>
                       </div>
                    </div>
                    <div className="bg-red-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                        <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.45L20 20H4L12 5.45zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"/></svg>
                      </div>
                      <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                         <span className="text-4xl animate-pulse">⚠️</span> FRAUD PREVENTION PROTOCOL
                      </h4>
                      <p className="text-xl opacity-95 leading-relaxed">
                        Fraudulent agencies may attempt to lure you with unrealistic promises or use forged letterheads. Always ensure that your payment is made to the authorized account of our firm and that you have a signed 'Vakalatnama' from our Sector 57 office. If in doubt, call our primary verification line: **+91-8700343611**.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Service 1: Loan Settlement & Arbitration */}
                <section id="service1" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 1: Debt Resolution & Institutional Arbitration</h2>
                  <div className="space-y-16">
                    <div className="prose prose-xl max-w-none text-gray-700">
                      <h3 className="text-3xl font-black text-[#D2A02A] mb-8">The Anatomy of a Perfect Loan Settlement</h3>
                      <p>
                        Debt is often described as a shadow that grows larger in the absence of light. In the post-2025 financial ecosystem, the "debt-trap" has become a reality for millions of hardworking Indians. From predatory lending apps to high-interest credit cards, the cycle of compounding interest can be terminal for one's financial health.
                      </p>
                      <p>
                        Our **Loan Settlement** service is not just about negotiation; it is a masterclass in legal leverage. We have pioneered a methodology that combines deep forensic audit of loan accounts with assertive legal representation. We identify illegal 'penal interest' (interest on interest), hidden processing fees, and violations of the Fair Practices Code.
                      </p>
                      
                      <div className="my-12 bg-gray-50 p-12 rounded-[3rem] border-2 border-dashed border-[#D2A02A] relative">
                         <span className="absolute -top-6 left-12 bg-[#D2A02A] text-white px-8 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">Case Study: The ₹5 Crore Resolution</span>
                         <p className="italic text-lg text-gray-800 leading-relaxed">
                            "A prominent SME in Ahmedabad was facing a SARFAESI action for a ₹4.8 Crore NPA account. The bank was refuses OTS. AMA Legal Solutions moved the DRT, identified a flaw in the demand notice, and stalled the auction. Using this tactical advantage, we settled the entire dues for ₹2.1 Crore - a saving of nearly 56%."
                         </p>
                      </div>

                      <h4 className="text-2xl font-black text-gray-900 mb-6">Navigating SARFAESI & DRT Litigation</h4>
                      <p>
                        For secured loans, banks invoke the SARFAESI Act, which allows them to take possession of properties without court intervention. This is where our expertise in **DRT (Debt Recovery Tribunal)** litigation becomes your final line of defense. We scrutinize Section 13(2) and 13(4) notices for procedural lapses, often buying our clients critical time to reorganize their finances or negotiate a more favorable settlement.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-white p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-150">
                        <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                      </div>
                      <h3 className="text-[#D2A02A] text-3xl font-black mb-10 tracking-tight">Advanced Arbitration: The Institutional Edge</h3>
                      <p className="text-xl opacity-90 leading-relaxed mb-10">
                        Traditional litigation in India is often a journey without an end date. The **Arbitration and Conciliation (Amendment) Act 2025** has finally provided a blueprint for speed. At AMA Legal Solutions, we don't just participate in arbitration; we dominate the process.
                      </p>
                      <div className="grid md:grid-cols-2 gap-12">
                         <div className="group">
                            <h5 className="text-[#D2A02A] font-black text-2xl mb-4 group-hover:translate-x-2 transition-transform italic">Section 9 Protection</h5>
                            <p className="text-lg opacity-80 leading-relaxed">We move the courts for interim reliefs - preserving assets and maintaining status quo before the arbitral tribunal is even constituted.</p>
                         </div>
                         <div className="group">
                            <h5 className="text-[#D2A02A] font-black text-2xl mb-4 group-hover:translate-x-2 transition-transform italic">Institutional Rules</h5>
                            <p className="text-lg opacity-80 leading-relaxed">Whether it's SIAC (Singapore), LCIA (London), or DIAC (Delhi), we are experts in the procedural rules of the world's leading arbitration centers.</p>
                         </div>
                      </div>
                      <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 text-center font-black text-xl text-[#ecc94b]">
                         We serve clients across all 28 States and 8 Union Territories, representing them in various High Courts and the Supreme Court of India.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Service 2: Trademark & IPR */}
                <section id="service2" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 2: The Intellectual Property Fortress</h2>
                  <div className="space-y-12">
                    <p className="text-2xl leading-relaxed text-gray-800 font-medium">
                      In the modern economy, your name, logo, and inventions are the digital "DNA" of your business. Protecting this DNA is not just a legal requirement - it's a survival imperative. AMA Legal Solutions provides a 360-degree IPR protection suite.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                       {[
                         { title: "Trademark Strategy", desc: "Beyond simple filing, we provide brand-building consults, identifying 'suggestive' vs 'descriptive' names to ensure maximum legal strength.", icon: "🎨" },
                         { title: "Global Protection", desc: "Leveraging the Madrid Protocol, we secure your trademark in up to 125 countries with a single application from our Sector 57 office.", icon: "🌍" },
                         { title: "Anti-Counterfeiting", desc: "We lead multi-agency raids and secure 'John Doe' orders to stop infringers in their tracks across pan-India markets.", icon: "🚔" }
                       ].map((item, i) => (
                         <div key={i} className="bg-white p-10 rounded-[3rem] border-2 border-gray-100 shadow-xl hover:shadow-[#D2A02A]/10 hover:border-[#D2A02A]/30 transition-all text-center flex flex-col items-center">
                            <div className="text-6xl mb-6">{item.icon}</div>
                            <h4 className="font-black text-gray-900 text-xl mb-4">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                       ))}
                    </div>

                    <div className="bg-gray-900 text-white p-14 lg:p-20 rounded-[4rem] relative overflow-hidden">
                       <h3 className="text-[#D2A02A] text-3xl font-black mb-10 underline decoration-4 underline-offset-8">Managing the 45 Classes: A Deep Dive</h3>
                       <p className="text-lg opacity-90 mb-12 leading-relaxed">
                         The IPR ecosystem in 2026 is hyper-specialized. A common mistake is "Over-classification" or "Under-classification". Our trademark experts use proprietary AI tools to identify the exact footprint of your business activities.
                       </p>
                       <div className="space-y-8">
                          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                             <h5 className="text-[#D2A02A] font-black text-xl mb-2">Class 9, 42 & 35: The Tech Trifecta</h5>
                             <p className="text-sm opacity-70">If you own a SaaS company, your IP exists in software (Cl 9), the service (Cl 42), and the marketing (Cl 35). We ensure all three are fortified.</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                             <h5 className="text-[#D2A02A] font-black text-xl mb-2">Class 29, 30 & 43: The Culinary Shield</h5>
                             <p className="text-sm opacity-70">For cloud kitchens and FMCG brands, we protect the ingredients (Cl 29/30) and the service delivery (Cl 43) from copycats.</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                             <h5 className="text-[#D2A02A] font-black text-xl mb-2">Class 5 & 10: Medical & Healthcare</h5>
                             <p className="text-sm opacity-70">The most litigated classes in India. We handle the complex compliance requirements of the DCGI along with your trademark registration.</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Service 3: Legal Notice & Drafting */}
                <section id="service3" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 3: The Art of Strategic Drafting</h2>
                  <div className="space-y-12">
                    <p className="text-2xl leading-relaxed text-gray-700 italic border-l-8 border-[#D2A02A] pl-10 bg-gray-50 py-10 rounded-r-3xl">
                      "In a world of noise, a well-drafted legal notice is the sound of authority." - Advocate Anuj Anand Malik
                    </p>
                    <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
                       <p>
                         Legal drafting is often mistaken for filling templates. At AMA Legal Solutions, every document is treated as a bespoke legal architecture. From the smallest **Legal Notice** for a bounced cheque to a 500-page **Shareholders Agreement (SHA)**, our precision is unmatched.
                       </p>
                       <h3 className="text-2xl font-black text-gray-900">The Anatomy of Our Legal Notices</h3>
                       <p>
                         Why do 70% of our legal notices lead to an out-of-court settlement? It is due to our 'Three-Tier Drafting Strategy':
                       </p>
                       <ul className="space-y-6">
                         <li className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 text-[#D2A02A] flex items-center justify-center text-2xl flex-shrink-0 font-black shadow-lg shadow-gray-400/20">A</div>
                            <div>
                               <h5 className="font-black text-xl text-gray-900 mb-2 underline decoration-2 decoration-gray-900/10">The Narrative Hook</h5>
                               <p className="text-base text-gray-600">We establish a clear, chronological sequence of events that highlights the opponent's breach of law, making it impossible for their counsel to provide a logical defense.</p>
                            </div>
                         </li>
                         <li className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 text-[#D2A02A] flex items-center justify-center text-2xl flex-shrink-0 font-black shadow-lg shadow-gray-400/20">B</div>
                            <div>
                               <h5 className="font-black text-xl text-gray-900 mb-2 underline decoration-2 decoration-gray-900/10">The Precedent Power</h5>
                               <p className="text-base text-gray-600">We don't just state the law; we cite the most recent 'Ratio Decidendi' from the Supreme Court of India. This demonstrates that we are ready for a high-level litigation.</p>
                            </div>
                         </li>
                         <li className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 text-[#D2A02A] flex items-center justify-center text-2xl flex-shrink-0 font-black shadow-lg shadow-gray-400/20">C</div>
                            <div>
                               <h5 className="font-black text-xl text-gray-900 mb-2 underline decoration-2 decoration-gray-900/10">The Resolution Path</h5>
                               <p className="text-base text-gray-600">We provide a time-bound window for amicable resolution. This demonstrates 'Good Faith' should the matter eventually reach the judge, often earning our clients favorable views from the bench.</p>
                            </div>
                         </li>
                       </ul>
                    </div>
                  </div>
                </section>

                {/* Service 4: Corporate Law */}
                <section id="service4" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 4: Corporate Architecture & Compliance</h2>
                  <div className="space-y-12">
                    <p className="text-2xl leading-relaxed text-gray-700">
                      The corporate landscape in 2026 is no longer about just "incorporating" a company. It's about building a legal structure that can withstand global investor scrutiny and a complex regulatory environment.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-14 lg:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                       <h3 className="text-[#D2A02A] text-4xl font-black mb-10 leading-tight">Digital Sovereignty: The DPDP Act 2023 Compliance</h3>
                       <p className="text-xl opacity-90 mb-12 leading-relaxed font-light">
                          If your company is not **DPDP Compliant** by 2026, you are not just risking fines - you are risking disqualification from global partnerships. We help you transform your data practices into a legal asset.
                       </p>
                       <div className="grid md:grid-cols-2 gap-10">
                          <div className="p-8 bg-white/10 rounded-4xl border border-white/20 backdrop-blur-md">
                             <h5 className="font-bold text-xl mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-[#D2A02A] flex items-center justify-center">1</span>
                                Data Audits & Mapping
                             </h5>
                             <p className="text-sm opacity-70">We identify every touchpoint where personal data is collected and processed, ensuring a 100% legal audit trail.</p>
                          </div>
                          <div className="p-8 bg-white/10 rounded-4xl border border-white/20 backdrop-blur-md">
                             <h5 className="font-bold text-xl mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-[#D2A02A] flex items-center justify-center">2</span>
                                Consent Frameworks
                             </h5>
                             <p className="text-sm opacity-70">We draft dynamic, multi-lingual consent notices that are legally compliant and user-friendly.</p>
                          </div>
                       </div>
                    </div>

                    <div className="mt-16 bg-white p-12 lg:p-20 rounded-[4rem] border-4 border-gray-50 shadow-sm">
                       <h4 className="text-3xl font-black text-gray-900 mb-10 text-center tracking-tight">Startup & Venture Capital Advisory</h4>
                       <div className="flex flex-col lg:flex-row gap-12 items-center">
                          <div className="lg:w-1/2 space-y-6">
                             <p className="text-lg text-gray-600 leading-relaxed">
                                We act as the "Outside General Counsel" for high-growth startups. Our expertise extends from the first pre-seed round to complex cross-border acquisitions. We handle:
                             </p>
                             <ul className="space-y-4">
                               <li className="flex items-center gap-4 text-gray-900 font-bold"><span className="text-[#D2A02A] text-xl">🚀</span> ESOP Structuring & Implementation</li>
                               <li className="flex items-center gap-4 text-gray-900 font-bold"><span className="text-[#D2A02A] text-xl">🚀</span> Convertible Note & SAFE Drafting</li>
                               <li className="flex items-center gap-4 text-gray-900 font-bold"><span className="text-[#D2A02A] text-xl">🚀</span> Secondary Share Sales & Exit Strategies</li>
                               <li className="flex items-center gap-4 text-gray-900 font-bold"><span className="text-[#D2A02A] text-xl">🚀</span> Anti-Dilution Protection Mechanisms</li>
                             </ul>
                          </div>
                          <div className="lg:w-1/2 bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center text-center">
                             <div className="text-5xl mb-6">🏦</div>
                             <h5 className="font-black text-gray-900 text-2xl mb-4">Investment Readiness Report</h5>
                             <p className="text-sm text-gray-500 mb-6 leading-relaxed">Before you pitch to the top VCs, let us conduct a 'Legal Health Check' of your cap-table and IP portfolio.</p>
                             <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black transition-all">Get Your Audit</button>
                          </div>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Service 5: Real Estate Law */}
                <section id="service5" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 5: Real Estate Title & RERA Protection</h2>
                  <div className="space-y-12">
                    <p className="text-2xl leading-relaxed text-gray-700">
                      Gurugram is a city of ambitious skyscrapers and complex land records. For an individual homebuyer, the risks of title fraud or project delays are overwhelming. AMA Legal Solutions is your defense against builder dominance and administrative delays.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="group bg-white p-12 rounded-[4rem] border-2 border-gray-50 shadow-xl hover:border-blue-900/20 transition-all">
                          <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:rotate-12 transition-transform">🏢</div>
                          <h4 className="font-black text-gray-900 text-2xl mb-6">RERA Litigation Experts</h4>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            Whether it is HRERA (Haryana), UP-RERA (Noida), or MahaRERA, we are the experts in getting execution orders. We don't just win 'orders' for refunds; we work with the district collectors to ensure you actually get your money back.
                          </p>
                          <ul className="space-y-3 font-bold text-blue-900 text-sm italic">
                             <li>- Delay Possession Interest (Rule 15)</li>
                             <li>- Structural Defect Remediation</li>
                             <li>- Refund of Booking Amount</li>
                          </ul>
                       </div>
                       <div className="group bg-white p-12 rounded-[4rem] border-2 border-gray-50 shadow-xl hover:border-blue-900/20 transition-all">
                          <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:-rotate-12 transition-transform">📄</div>
                          <h4 className="font-black text-gray-900 text-2xl mb-6">30-Year Title Searches</h4>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            We don't rely only on the sub-registrar's online portal. Our field investigators check the physical 'Jamabandi' and 'Mutation' records to ensure there are no ancient family disputes or hidden liens on your property.
                          </p>
                          <ul className="space-y-3 font-bold text-blue-900 text-sm italic">
                             <li>- Chain Recommendation Audits</li>
                             <li>- Encumbrance Certificate (EC) Verification</li>
                             <li>- Sanction Plan & Bye-Law Compliance</li>
                          </ul>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Service 6: IEPF & Investment Recovery */}
                <section id="service6" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-green-600 inline-block pb-2">Service 6: IEPF Recovery & Unclaimed Investment Restoration</h2>
                  <div className="space-y-12">
                     <p className="text-2xl leading-relaxed text-gray-700">
                        Millions of rupees in dividends and shares are transferred to the **Investor Education and Protection Fund (IEPF)** every year due to dormancy. At AMA Legal Solutions, we specialize in navigating the complex bureaucratic and legal hurdles to restore these 'lost' fortunes to their rightful owners.
                     </p>
                     
                     <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100">
                           <h4 className="text-2xl font-black text-green-900 mb-6 font-semibold">Specialized IEPF Services</h4>
                           <ul className="space-y-4 text-green-800">
                              <li className="flex items-center gap-3 font-medium underline">Recovery of Shares transferred to IEPF</li>
                              <li className="flex items-center gap-3 font-medium underline">Claiming Unpaid Dividends</li>
                              <li className="flex items-center gap-3 font-medium underline">Rectification of Transmission of Shares</li>
                              <li className="flex items-center gap-3 font-medium underline">Legal Heir Verification for Investments</li>
                           </ul>
                        </div>
                        <div className="bg-white p-10 rounded-[3rem] border-2 border-green-50 shadow-xl">
                           <h4 className="text-xl font-black text-gray-900 mb-6">Why We Are #1 in Investment Recovery</h4>
                           <p className="text-gray-600 text-sm leading-relaxed mb-6">
                              The recovery process involves multiple layers of verification with the Registrar and Transfer Agents (RTA), the Company, and finally the IEPF Authority. We provide a single-window solution from documentation to final credit.
                           </p>
                           <div className="flex items-center gap-4 text-green-700 font-bold bg-green-50 px-6 py-3 rounded-full w-fit">
                              <span className="text-2xl">📈</span> High Success Rate
                           </div>
                        </div>
                     </div>

                     <div className="mt-12 prose prose-xl max-w-none text-gray-700 bg-gray-50 p-12 rounded-[3.5rem]">
                        <h3 className="text-gray-900 font-black">Navigating the Paperwork Maze</h3>
                        <p>
                          A single mismatch in signatures or an outdated address can lead to the rejection of an IEPF claim. Our forensic documentation team ensures that every 'Client Induction' includes a thorough verification of original certificates, death certificates (in case of legal heirs), and probate requirements. We act as your authorized legal consultants, representing you before the Ministry of Corporate Affairs (MCA) to ensure that justice is not delayed by red tape.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Service 7: Criminal & Family Law */}
                <section id="service7" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Service 7: Criminal Defense and Family Advocacy</h2>
                  <div className="space-y-12">
                     <p className="text-2xl leading-relaxed text-gray-700">
                        Human lives are messy, and sometimes the law intersects with our most personal relationships and freedoms. AMA Legal Solutions provides empathetic yet assertive representation in criminal and matrimonial matters.
                     </p>
                     <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 p-12 bg-red-50 rounded-[3rem] border border-red-100">
                           <h4 className="text-2xl font-black text-red-900 mb-6">White Collar Criminal Defense</h4>
                           <p className="text-red-800 opacity-90 leading-relaxed text-lg mb-6">
                              Facing allegations of financial fraud, embezzlement, or cybercrime? We specialize in PMLA (Prevention of Money Laundering Act) cases and high-stakes white-collar bail petitions across sessions and high courts.
                           </p>
                           <button className="bg-red-900 text-white px-8 py-3 rounded-full font-bold text-sm">24/7 Crisis Response</button>
                        </div>
                        <div className="md:w-1/2 p-12 bg-purple-50 rounded-[3rem] border border-purple-100">
                           <h4 className="text-2xl font-black text-purple-900 mb-6">Family Law & Mediation</h4>
                           <p className="text-purple-800 opacity-90 leading-relaxed text-lg mb-6">
                              We prioritize mediation and sustainable family settlements. From mutual-consent divorce to complex child custody and alimony disputes, our goal is to minimize emotional trauma while securing your legal rights.
                           </p>
                           <button className="bg-purple-900 text-white px-8 py-3 rounded-full font-bold text-sm">Confidential Consultation</button>
                        </div>
                     </div>
                  </div>
                </section>

                {/* Methodology / How We Work */}
                <section id="methodology" className="scroll-mt-32">
                   <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Our Methodology: How We Ensure Victory</h2>
                   <div className="grid md:grid-cols-4 gap-8">
                      {[
                        { step: "01", title: "Intake Audit", desc: "A rigorous 48-hour internal review of your case files by our senior partners." },
                        { step: "02", title: "Strategic Roadmap", desc: "Creation of a multi-phase legal strategy with defined timelines and outcomes." },
                        { step: "03", title: "Aggressive Execution", desc: "Swift filing of notices, petitions, or replies to seize the legal high ground." },
                        { step: "04", title: "Continuous reporting", desc: "Real-time updates via our mobile app, ensuring you are never in the dark." }
                      ].map((item, i) => (
                        <div key={i} className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-gray-50 flex flex-col items-center text-center group hover:bg-gray-900 transition-colors duration-500">
                           <span className="text-6xl font-black text-[#D2A02A] opacity-20 mb-6 group-hover:opacity-100 transition-opacity">{item.step}</span>
                           <h4 className="font-black text-gray-900 text-lg mb-4 group-hover:text-white">{item.title}</h4>
                           <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </section>

                {/* Detailed Narrative - Doubling the content scope */}
                <section className="bg-[#1a202c] text-white p-14 lg:p-24 rounded-[5rem] mt-20 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/newAssets/noise.png')] opacity-10 pointer-events-none"></div>
                  <h2 className="text-4xl md:text-6xl font-black mb-12 text-[#D2A02A] leading-tight tracking-tighter">The Future of Legal Practice: Sector 57 Gurgaon</h2>
                  <div className="space-y-12 opacity-95 leading-relaxed text-xl prose-invert prose-2xl max-w-none">
                    <p>
                      The journey of **AMA Legal Solutions** is inextricably linked with the evolution of Gurugram itself. Just as this city transformed from a quiet farming village into a global technology hub, our firm transformed from a small litigation practice into a national legal institution. Our presence in **Sector 57** is strategic - it places us at the intersection of the new corporate corridor and the established legal frameworks of the NCR.
                    </p>
                    <p>
                      In 2026, the concept of a "Law Firm" is undergoing a radical change. We no longer live in an era where law is practiced behind stacks of dusty files and slow court procedures. Today's legal battlefield is digital, fast-paced, and globally connected. At AMA, we have embraced this change. Our investment in legal intelligence software allows us to perform case-precedent research in seconds that used to takes days. This efficiency is directly passed on to our clients in the form of faster resolutions and more accurate advice.
                    </p>
                    <p>
                      Central to our success is the vision of Advocate Anuj Anand Malik. He has always maintained that the greatest legal victories are those that are won before they ever reach a judge's desk. This philosophy of "Pre-emptive Legal Action" is implemented across all our departments. Whether it is a trademark being protected by a preemptive objection reply or a potential debt suit being avoided through a balanced OTS agreement, our goal is to keep you out of court as much as possible.
                    </p>
                    <p>
                      However, when the courtroom becomes inevitable, our clients have the most formidable litigators in the country behind them. We have represented clients in nearly every High Court in India and have a robust presence in the Supreme Court. Our litigation style is assertive, evidence-backed, and focused on judicial efficiency. We respect the court's time, and in turn, the courts respect our contributions to the judicial process.
                    </p>
                    <p>
                      Importantly, our independence as a non-LLP firm allows us to maintain a level of client accountability that is rare in today's corporatized legal world. When you call us, you are not speaking to a project manager; you are speaking to the guardians of your legal rights. Your success is our reputation. Your peace of mind is our legacy.
                    </p>
                    <p>
                      As we look at the coming years - the implementation of the remaining provisions of the DPDP Act, the potential for a Unified Civil Code, and the integration of AI-judiciary tools - AMA Legal Solutions will continue to lead the way. We invite you to visit our office in Sector 57, Gurugram, or schedule a virtual consultation to experience what it means to have the #1 legal protection in India.
                    </p>
                    <div className="pt-20 border-t border-white/10 mt-20 flex flex-col md:flex-row items-center gap-10">
                       <Image src="/ama-legal-solutions-logo.png" alt="AMA Legal Solutions" width={150} height={150} className="invert opacity-30" />
                       <div className="flex-1">
                          <h4 className="text-[#D2A02A] text-3xl font-black mb-4 italic">"Excellence is not an act, but a habit. At AMA Legal Solutions, excellence is our only standard."</h4>
                          <p className="text-gray-400 font-bold tracking-widest uppercase">- THE AMA LEGAL COMMITMENT</p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Frequently Asked Questions</h2>
                  <div className="space-y-5">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-black text-gray-900 mb-4 flex gap-4">
                          <span className="text-[#D2A02A]">Q.</span> {faq.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed pl-8 border-l-2 border-gray-100 italic">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight border-b-8 border-[#D2A02A] inline-block pb-2">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-6xl text-[#D2A02A]/10 font-serif group-hover:scale-110 transition-transform">"</div>
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#D2A02A] text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                          {rev.reviewBody}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-black text-gray-900">{rev.author.name}</h5>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Verified Client</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Strip */}
                <div className="bg-gradient-to-br from-[#D2A02A] to-[#ecc94b] p-16 lg:p-24 rounded-[5rem] text-center text-gray-900 shadow-[0_40px_100px_rgba(210,160,42,0.4)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                     <svg className="w-80 h-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Your Legal Victory <br/>Starts Here.</h2>
                  <p className="text-2xl md:text-3xl mb-14 font-medium max-w-4xl mx-auto leading-relaxed opacity-90">
                    Trusted by thousands, proven in the toughest courts. Experience the AMA difference today.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <Link href="/contact">
                      <button className="bg-gray-900 text-white font-black py-7 px-20 rounded-3xl hover:bg-black transition-all transform hover:scale-110 shadow-2xl text-2xl flex items-center justify-center gap-4 group">
                        Book Your Strategy Session <span className="group-hover:translate-x-2 transition-transform">→</span>
                      </button>
                    </Link>
                    <a href="tel:+918700343611" className="group">
                      <div className="flex flex-col items-start bg-white/20 backdrop-blur-md px-10 py-6 rounded-3xl border border-white/50 group-hover:bg-white transition-colors">
                        <span className="text-xs uppercase font-black opacity-60">Emergency Line</span>
                        <span className="text-3xl font-black text-gray-900">+91-8700343611</span>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Sidebar - Desktop - Smaller contact info to prevent overflow */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-wider">Expert Legal Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl overflow-hidden min-w-0">
                       <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">📞</div>
                       <div className="min-w-0 overflow-hidden">
                          <p className="text-[10px] text-gray-500 uppercase font-bold">Call Us Now</p>
                          <a href="tel:+918700343611" className="text-sm font-black text-gray-900 block truncate leading-none">+91-8700343611</a>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl overflow-hidden min-w-0">
                       <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">📧</div>
                       <div className="min-w-0 overflow-hidden">
                          <p className="text-[10px] text-gray-500 uppercase font-bold">Email Official</p>
                          <a href="mailto:notify@amalegalsolutions.com" className="text-[10px] md:text-[11px] font-black text-gray-900 block break-all leading-tight">notify@amalegalsolutions.com</a>
                       </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sector 57 Gurgaon HQ</p>
                  </div>
                </div>

                <div className="bg-[#1a202c] p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A]/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                  <h3 className="text-lg font-black mb-10 text-[#D2A02A] uppercase tracking-tighter">Why Choose AMA?</h3>
                  <ul className="space-y-8">
                    {[
                      { t: "Legal Prowess", s: "Non-LLP, registered law firm.", icon: "⚖️" },
                      { t: "Global Vision", s: "International Arbitration & IPR.", icon: "🌍" },
                      { t: "Proactive Guard", s: "Sector 57 central command.", icon: "🛡️" },
                      { t: "Proven Victory", s: "2500+ successful closures.", icon: "🏆" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                         <span className="text-2xl">{item.icon}</span> 
                         <div className="min-w-0">
                            <p className="font-black text-sm text-white truncate">{item.t}</p>
                            <p className="text-[10px] opacity-50 uppercase font-bold">{item.s}</p>
                         </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-5">
                   <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                      <Image src="/newAssets/playstore.svg" alt="Download AMA Legal Solutions on Google Play" width={300} height={100} className="w-full h-auto hover:opacity-80 transition-opacity" />
                   </Link>
                   <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                      <Image src="/newAssets/appstore.svg" alt="Download AMA Legal Solutions on App Store" width={300} height={100} className="w-full h-auto hover:opacity-80 transition-opacity" />
                   </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
