import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How to register FSSAI licence online in India?",
    answer: "To register an FSSAI licence online in India, you must visit the official Food Safety and Compliance System portal, commonly known as FoSCoS. The initial step requires creating a unique digital profile by providing your fundamental business details. Once logged in, you navigate toward the 'Apply for New License Registration' segment. Depending directly on your financial turnover and specialized food category, you meticulously fill out either Form A or Form B. After comprehensively uploading the required legal documents, you must digitally remit the exact government fee. The final application generates an immediate reference number, confirming the successful start to register fssai licence protocols."
  },
  {
    question: "What are the essential documents required to register FSSAI licence?",
    answer: "When discovering how to register fssai licence, understanding the paperwork is paramount. For a foundational Basic Registration, the mandatory documents include a government issued photo identity proof properly validating the applicant, such as a PAN card or an Aadhaar card. You equally require verified address proof reflecting the exact operational premise, alongside a recently taken passport sized photograph. State and Central licenses dramatically scale these requirements, necessitating a meticulously constructed layout plan of your manufacturing facility, a deeply comprehensive list detailing all active directors or partners, robust food safety management system implementation declarations, and legally sound No Objection Certificates obtained locally."
  },
  {
    question: "Who exactly needs to understand how to register FSSAI licence?",
    answer: "Every single individual or commercial entity involved deeply in handling, manufacturing, transporting, heavily processing, storing, or broadly distributing any consumable food material must comprehensively understand how to register fssai licence. This incredibly broad umbrella covers tiny home based bakers, dynamic cloud kitchens seamlessly operating through modern delivery platforms, large scale agricultural import companies, traditional street food vendors, sophisticated five star restaurants, and massive retail supermarket chains. If your core business involves edible materials directly reaching human consumers, grasping how to register fssai licence is an absolute, unavoidable statutory requirement to avoid stringent criminal penalties."
  },
  {
    question: "What is the detailed difference between Basic, State, and Central FSSAI registrations?",
    answer: "While analyzing how to register fssai licence, identifying the correct compliance tier is exceptionally critical. The Basic Registration selectively applies to petty food business operators commanding an annual financial turnover up to 12 lakh rupees. On the other hand, a State License becomes rigorously mandatory when the operational turnover scales between 12 lakh rupees and 20 crore rupees, operating entirely within one solitary state configuration. Conversely, the heavily scrutinized Central License is exclusively engineered for enormous corporate conglomerates, international importers, large scale export processing zones, and domestic entities generating annual revenues violently surpassing 20 crore rupees."
  },
  {
    question: "Can an individual register FSSAI licence without professional help?",
    answer: "While the central government has completely digitized the mechanism for how to register fssai licence via the official FoSCoS digital terminal, attempting the highly legal procedures independently often invites disastrous delays. The complex governmental platform demands extraordinarily precise product categorization utilizing extremely complex statutory codes. Non professionals frequently select slightly inaccurate categories, triggering an immediate and severe query from the vigilant Food Safety Officer. By leveraging specialized compliance organizations like AMA Legal Solutions, you permanently bypass these frustrating rejections, ensuring documents are vetted flawlessly and the overarching timeline to register fssai licence is exponentially shortened."
  },
  {
    question: "Is exploring how to register FSSAI licence mandatory for a simple home cloud kitchen?",
    answer: "Absolutely. Regardless of the surprisingly small physical footprint or whether the culinary operations occur within a humble residential premise, learning how to register fssai licence remains entirely obligatory. Home based bakers, tiny cloud kitchens, and micro culinary startups fundamentally deal with human consumables, bringing them directly under the intensely watchful jurisdiction of the Food Safety and Standards Act. Procuring this specific 14 digit certification provides not only a legal right to operate but acts as a foundational gateway to successfully onboarding onto massive digital aggregator platforms like Zomato and Swiggy."
  },
  {
    question: "What are the horrific penalties for ignoring how to register FSSAI licence?",
    answer: "Choosing to completely ignore the heavily mandated directives surrounding how to register fssai licence plunges operators into severe legal jeopardy. Operating a culinary business utterly devoid of active FSSAI certification triggers astonishing administrative penalties that easily reach astronomical figures up to 5 lakh rupees. In scenarios posing extreme public danger, authorized enforcement wings possess the absolute legal authority to violently seal the physical premises permanently and initiate immediate criminal proceedings culminating in extensive imprisonment sentences up to six months. Compliance is significantly cheaper than avoiding how to register fssai licence."
  },
  {
    question: "How long is the certificate valid after you successfully register FSSAI licence?",
    answer: "After successfully navigating exactly how to register fssai licence, the issued document inherently carries a highly flexible validity span. The authorized certification is generally issued for variable periods ranging from a minimal span of 1 year up to an extended duration of 5 years. This temporal choice rests firmly upon the financial preference of the active applicant during the payment sequence. Highly strategic commercial entities typically structure their application to instantly register fssai licence for the maximum 5 year limit, effectively neutralizing the repetitive annual anxiety surrounding prompt renewal protocols completely."
  },
  {
    question: "Does AMA Legal Solutions help register FSSAI licence in all Indian states?",
    answer: "Yes, definitively. Our legal infrastructure extensively covers exactly how to register fssai licence across every solitary state, union territory, and heavily populated metropolitan district within the vast borders of India. Whether your culinary manufacturing unit is physically situated in Mumbai, Delhi, Bengaluru, Chennai, or a remarkably remote suburban locality, our digitally integrated compliance engine perfectly executes the entire procedure. Because state level Food Safety Commissioners impose localized operational nuances, our comprehensive geographic intelligence effectively guarantees that your quest to register fssai licence concludes smoothly everywhere."
  },
  {
    question: "What is the role of FoSCoS in the process to register FSSAI licence?",
    answer: "The intricately designed Food Safety Compliance System, globally recognized by its powerful acronym FoSCoS, acts as the singular, overwhelmingly integrated digital backbone empowering exactly how to register fssai licence nationwide. Replacing the obsolete archaic systems, FoSCoS actively facilitates every component from profile creation and expansive documentation uploading to securely processing required statutory fees dynamically. Every aspiring operator attempting to legally register fssai licence fundamentally interacts persistently with this highly evolved infrastructure, making a flawless understanding of its digital complexities absolutely essential for incredibly swift approval turnarounds."
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Register FSSAI Licence",
      "item": "https://www.amalegalsolutions.com/how-to-register-fssai-licence"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ultimate Expert Guide on How to Register FSSAI Licence Across Every Indian City",
  "description": "Discover precisely how to register fssai licence seamlessly with our highly detailed legal blueprint. We outline the crucial steps, robust documents, and complex statutory frameworks protecting your widespread food enterprise perfectly across India.",
  "image": "https://www.amalegalsolutions.com/services/fssai-hero.jpg",
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
  "datePublished": "2024-03-01",
  "dateModified": "2026-03-09"
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Expert Advice on How to Register FSSAI Licence",
  "image": "https://www.amalegalsolutions.com/services/fssai-icon.png",
  "description": "Comprehensive digital legal assistance detailing exactly how to register fssai licence for basic, state, and central classifications seamlessly.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "5124"
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
        "name": "Kavita Ranganathan"
      },
      "reviewBody": "Understanding exactly how to register fssai licence was incredibly daunting before partnering closely with AMA Legal Solutions. They handled my complex documentation flawlessly and I received the official certificate rapidly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Verma"
      },
      "reviewBody": "If you are thoroughly confused regarding how to register fssai licence for a massive manufacturing setup, these brilliant legal professionals are your absolute answer. Flawless nationwide assistance and astonishing transparency."
    }
  ]
};

export const metadata = {
  title: "How to Register FSSAI Licence | Complete Legal Guide India",
  description:
    "Learn precisely how to register fssai licence without stressful rejections. AMA Legal Solutions delivers comprehensive regulatory clarity covering all basic, state, and central FSSAI registration procedures.",
  keywords: [
    "how to register fssai licence",
    "how to register fssai license",
    "fssai licence registration process",
    "steps to register fssai licence",
    "fssai license apply online",
    "fssai registration india",
    "documents required for fssai",
    "foscos fssai registration",
    "food license registration online",
    "how to get fssai certificate"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-register-fssai-licence',
  },
  openGraph: {
    title: "How to Register FSSAI Licence | Definite Guide",
    description: "Launch your compliant food business swiftly by understanding exactly how to register fssai licence properly. We cover the entire FoSCoS mechanism deeply.",
    url: "https://www.amalegalsolutions.com/how-to-register-fssai-licence",
    type: "website",
    images: [
      {
        url: "/services/fssai-hero.jpg",
        width: 1200,
        height: 630,
        alt: "How to Register FSSAI Licence",
      },
    ],
  },
};

export default function FssaiRegisterPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "foscos-system", title: "FoSCoS Digital Framework" },
    { id: "license-types", title: "License Types" },
    { id: "essential-documents", title: "Mandatory Documents" },
    { id: "registration-steps", title: "Step By Step Guide" },
    { id: "pan-india-coverage", title: "Cities & States Covered" },
    { id: "severe-penalties", title: "FSSAI Penalties" },
    { id: "business-benefits", title: "Business Benefits" },
    { id: "consult-experts", title: "Why Consult Experts" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "How to Register FSSAI Licence", href: "/how-to-register-fssai-licence" },
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - Mirroring Loan Settlement Design */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Complete Guide on How to Register FSSAI Licence <span className="text-[#D2A02A]">Across India</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal assistance to navigate the FoSCoS portal flawlessly. Secure your food license rapidly and ensure 100% compliance with food safety laws.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                 Get Free FSSAI Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Mastering the FSSAI Compliance Landscape</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The food industry in India is governed by the Food Safety and Standards Authority of India (FSSAI). For any food business operator—whether a small home bakery, a cloud kitchen, or a large-scale manufacturer—understanding <strong>how to register FSSAI licence</strong> is the first and most critical step towards legal operation. This 14-digit registration number is more than just a legal requirement; it is a mark of quality and safety for your customers.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Failing to obtain a valid FSSAI license is a punishable offense that can lead to heavy fines, closure of business, and even imprisonment. However, navigating the bureaucratic complexities of the <strong>FoSCoS portal</strong> can be overwhelming. At AMA Legal Solutions, we bridge the gap between business owners and regulatory authorities, ensuring a smooth and hassle-free registration process across all Indian cities and states.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our team of legal experts specializes in the <strong>FSSAI registration process</strong>, helping businesses identify the correct license type (Basic, State, or Central) based on their annual turnover and operational scale.
                  </p>
                </section>

                {/* FoSCoS Digital Framework */}
                <section id="foscos-system" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The FoSCoS Digital Framework</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "FoSCoS (Food Safety Compliance System) is the unified digital portal launched by FSSAI to streamline licensing and registration nationwide."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Exploring exactly how to register FSSAI licence efficiently requires a deep understanding of the <strong>FoSCoS framework</strong>. This advanced system replaced the older, slower FLRS portal. It integrates licensing, registration, inspections, and monitoring into one single cloud interface. 
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Working with experts ensures that your application is filed correctly in the right category, preventing common errors that lead to queries or rejections from Food Safety Officers. A small error in the 'Kind of Business' (KoB) selection can delay your license by weeks.
                  </p>
                </section>

                {/* License Types Grid */}
                <section id="license-types" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">FSSAI License Types & Eligibility</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    The FSSAI framework categorizes businesses into three distinct tiers based on turnover and production capacity. Identifying your tier is essential to know <strong>how to register FSSAI licence</strong> properly.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Basic Registration</h3>
                      <p className="text-gray-700 text-xs md:text-sm">
                        <strong>Turnover: Up to ₹12 Lakhs.</strong> Best for petty food businesses, home kitchens, small distributors, and retailers. 
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">State License</h3>
                      <p className="text-gray-700 text-xs md:text-sm">
                        <strong>Turnover: ₹12 Lakhs to ₹20 Crores.</strong> Required for mid-sized restaurants, hotels, distributors, and manufacturing units operating within one state.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Central License</h3>
                      <p className="text-gray-700 text-xs md:text-sm">
                        <strong>Turnover: Over ₹20 Crores.</strong> Mandatory for importers, large manufacturers, airports, defense establishments, and multi-state operators.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Professional FSSAI Assistance</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">Advantages (Pros)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 w-1/2">Disadvantages of DIY (Cons)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>Zero Rejection Risk:</strong> Professional vetting of all documents and category selection.</li>
                              <li><strong>Faster Approval:</strong> Streamlined process by experts who know FoSCoS inside out.</li>
                              <li><strong>Correct Tiering:</strong> Ensuring you don't overpay for a higher license than needed.</li>
                              <li><strong>Peace of Mind:</strong> Handling all government queries and notifications on your behalf.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>High Query Risk:</strong> Minor errors often trigger 'Revert' actions from officers.</li>
                              <li><strong>Registration Delays:</strong> Navigating a complex portal without guidance can be slow.</li>
                              <li><strong>Document Errors:</strong> Improperly scanned or incomplete uploads lead to rejections.</li>
                              <li><strong>Tier Confusion:</strong> Applying for the wrong tier can lead to administrative fines.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="severe-penalties" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">FSSAI Penalties & Legal Framework</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Food Safety and Standards Act (2006) provides the legal power to FSSAI to regulate and inspect food businesses. Operating without a license or ignoring safety standards can lead to severe penalties.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Offense / Violation</th>
                          <th scope="col" className="px-6 py-3 bg-red-50 text-red-900">Maximum Penalty / Fine</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Operating without FSSAI License</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Up to ₹5 Lakh Fine + 6 Months Imprisonment</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Selling Substandard Food Items</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Up to ₹5 Lakh Penalty</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Misleading Advertisement / Claims</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Up to ₹10 Lakh Penalty</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-medium text-gray-900">Obstructing Food Safety Officer</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Up to ₹2 Lakh Fine + Imprisonment</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Process */}
                <section id="registration-steps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Proven Step-by-Step FSSAI Registration Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have simplified the process to <strong>register FSSAI licence</strong> into four focused phases, ensuring you get your certificate in the shortest possible time.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Profile Setup & Category Selection</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by creating your digital profile on the FoSCoS portal. Our experts analyze your business model to select the exact 'Kind of Business' (KoB) category and eligibility tier (Basic, State, or Central) to ensure cost-efficiency and compliance.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Document Vetting & Digital Upload</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Paperwork is where most applications fail. We vet your ID proofs, address proofs, layout plans, and declarations. Our team ensures all scans meet government standards and uploads them securely to the portal along with the relevant statutory fees.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Government Liaison & Query Management</h3>
                        <p className="text-gray-700 leading-relaxed">
                          After submission, the application goes through scrutiny by an FSO. If any queries are raised regarding your manufacturing process or hygiene standards, we draft the responses and provide the necessary clarifications to the authorities on your behalf.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">License Issuance & Compliance Guard</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once approved, the digital license is issued via FoSCoS. We deliver the certificate to you and guide you on the mandatory display rules. We also track your renewal dates and help you file annual returns (for manufacturers/importers) to maintain active status.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="essential-documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Mandatory Documents Checklist</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Depending on your license type, you will need to prepare a specific set of documents. Here is the standard list:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Photo of Applicant (Authorized Signatory)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> ID Proof (Aadhaar, PAN, Voter ID)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Proof of Address of Premises (Utility Bill/Rent Agreement)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> List of Food Categories being handled
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Layout Plan of Processing Unit (for Mfg)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Water Analysis Report (Required for Manufacturers)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Machinery List with Horsepower (for Mfg)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Form IX (Nomination of Person)
                    </li>
                  </ul>
                </section>

                {/* Pan India Coverage */}
                <section id="pan-india-coverage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pan-India Support for FSSAI Registration</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are starting a cloud kitchen in Mumbai, a manufacturing unit in Ahmedabad, or a retail chain in Chennai, our services cover every corner of India. FSSAI registration is a centralized process but requires localized knowledge of food groups and state-specific hygiene directives.
                  </p>
                  <div className="bg-[#fff9e6] p-6 rounded-xl border border-[#D2A02A]/20">
                    <h4 className="font-bold text-lg mb-4">We serve all States and Major Localities:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-gray-700">
                      <div>• Maharashtra (Mumbai, Pune)</div>
                      <div>• Delhi & NCR Regions</div>
                      <div>• Karnataka (Bengaluru)</div>
                      <div>• Gujarat (Ahmedabad, Surat)</div>
                      <div>• Tamil Nadu (Chennai)</div>
                      <div>• West Bengal (Kolkata)</div>
                      <div>• Telangana (Hyderabad)</div>
                      <div>• Rajasthan (Jaipur, Ajmer)</div>
                      <div>• Uttar Pradesh (Lucknow, Noida)</div>
                      <div>• Haryana (Gurugram, Faridabad)</div>
                      <div>• Kerala (Kochi, Thiruvananthapuram)</div>
                      <div>• Punjab (Ludhiana, Chandigarh)</div>
                    </div>
                  </div>
                </section>

                {/* Business Benefits */}
                <section id="business-benefits" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Business Benefits of FSSAI License</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                      <div className="text-3xl mr-4">📈</div>
                      <div>
                        <h4 className="font-bold text-lg">Onboarding with Aggregators</h4>
                        <p className="text-gray-600 text-sm">FSSAI Registration is mandatory for Swiggy, Zomato, and major e-commerce platforms like Amazon.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                      <div className="text-3xl mr-4">🛡️</div>
                      <div>
                        <h4 className="font-bold text-lg">Legal Protection</h4>
                        <p className="text-gray-600 text-sm">Protects your business from extortion and raids by ensuring you meet all legal hygiene standards.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                      <div className="text-3xl mr-4">⭐</div>
                      <div>
                        <h4 className="font-bold text-lg">Consumer Trust</h4>
                        <p className="text-gray-600 text-sm">The FSSAI logo on your packaging acts as a verified trust indicator for safety and quality.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                      <div className="text-3xl mr-4">💼</div>
                      <div>
                        <h4 className="font-bold text-lg">Ease of Expansion</h4>
                        <p className="text-gray-600 text-sm">Necessary for bulk orders, government tenders, and getting your products onto retail racks.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Starting a cloud kitchen was daunting, but AMA Legal Solutions handled my FSSAI Basic registration so smoothly. Got my number in just 10 days and on-boarded on Swiggy immediately!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Kavita Ranganathan</p>
                          <p className="text-sm text-gray-500">Home Baker, Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our manufacturing unit required a Central FSSAI License due to our interstate operations. The team at AMA navigated the complex scrutiny phase effortlessly. Highly professional experts."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Siddharth Verma</p>
                          <p className="text-sm text-gray-500">MD, Food Processing Unit, Gurugram</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Start Your Food Business Compliantly</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Get your 14-digit FSSAI number with expert legal help. Fast, secure, and accurate documentation. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                           Book Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Licensed • Verified • Professional
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help with FSSAI?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our compliance experts today for a zero-hassle registration.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                  <li>
                      <Link href="/get-fssai-licence-in-7-days" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Get FSSAI in 7 Days
                      </Link>
                    </li>
                    <li>
                      <Link href="/msme-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> MSME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/trademark-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-and-establishment" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Gumasta/Shop License
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/appstore.svg" 
                          alt="Get it on Google Play" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/playstore.svg" 
                          alt="Download on App Store" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="FSSAI Registration" 
              servicePath="how-to-register-fssai-licence" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
