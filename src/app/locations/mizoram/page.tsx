import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you have a practice at the Aizawl Bench of the Gauhati High Court?",
    answer: "Yes, we practice at the Aizawl Bench of the Gauhati High Court. We handle Writ Petitions, Criminal Appeals, and Civil Revisions, representing clients from across Mizoram."
  },
  {
    question: "Can you assist with business setup and Inner Line Permit (ILP) issues?",
    answer: "Yes, we assist non-residents and businesses with Inner Line Permit (ILP) applications, compliance, and renewals required to operate or travel within Mizoram."
  },
  {
    question: "Do you handle Mizo Customary Law disputes?",
    answer: "We have deep expertise in Mizo Customary Law regarding inheritance, marriage, and divorce. We represent families in District Council Courts and the High Court."
  },
  {
    question: "What legal services do you offer for border trade?",
    answer: "With Mizoram sharing borders with Myanmar and Bangladesh, we assist traders with customs regulations, export-import contracts, and cross-border dispute resolution."
  },
  {
    question: "Can non-tribals buy land in Mizoram?",
    answer: "Generally, land transfer to non-tribals is restricted. We provide legal opinions on land lease agreements and rights of non-tribal entities investing in the state."
  },
  {
    question: "Do you handle government contract disputes?",
    answer: "Yes, we represent contractors in disputes with the Mizoram Public Works Department (PWD) and other state agencies regarding tender cancellations and payment delays."
  },
  {
    question: "Do you handle bamboo and forest product regulation cases?",
    answer: "Yes, we assist with regulatory compliance and disputes related to the bamboo industry, forest permits, and environmental clearances."
  },
  {
    question: "How do you handle drug-related cases under NDPS Act?",
    answer: "We provide vigorous criminal defense for cases under the NDPS Act, handling bail applications and trials ensuring fair representation."
  },
  {
    question: "Do you assist with NGO and Church society registration?",
    answer: "Yes, we handle the registration of Societies, NGOs, and charitable trusts relevant to Mizoram's active civil society, ensuring compliance with state regulations."
  },
  {
    question: "Do you handle consumer complaints in Aizawl?",
    answer: "Yes, we file complaints in the District Consumer Disputes Redressal Commission in Aizawl for defects in goods and deficiency in services."
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
      "name": "Mizoram",
      "item": "https://www.amalegalsolutions.com/locations/mizoram"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Mizoram",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Mizoram specializing in Aizawl Bench Litigation, Customary Law, Border Trade, and Government Contracts.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Mizoram",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Aizawl" },
    { "@type": "City", "name": "Lunglei" },
    { "@type": "City", "name": "Champhai" },
    { "@type": "City", "name": "Kolasib" },
    { "@type": "State", "name": "Mizoram" }
  ],
  "url": "https://www.amalegalsolutions.com/locations/mizoram",
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
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
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
  "@type": "Product",
  "name": "Legal Services Mizoram",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services in Mizoram by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
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
        "name": "Lalrinawma"
      },
      "reviewBody": "They handled my government tender dispute in the Aizawl Bench very professionally. Highly recommended for civil works contractors."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Zothanpuii"
      },
      "reviewBody": "Excellent advice on family property division under Mizo customary law. Very respectful and knowledgeable team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Border Trade Syndicate"
      },
      "reviewBody": "Helped us navigate the complex customs regulations for our import business at Zokhawthar. Great support."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Mizoram | Aizawl High Court, Customary Law & Trade",
  description:
    "Top lawyers in Mizoram. Experts in Gauhati High Court (Aizawl Bench), Mizo Customary Law, Government Contracts, and Border Trade regulations.",
  keywords: [
    "Lawyers in Mizoram",
    "Advocates in Aizawl",
    "Gauhati High Court Aizawl Bench",
    "Mizo Customary Law",
    "Inner Line Permit Lawyer",
    "Border Trade Legal Services",
    "Government Contract Lawyers Mizoram",
    "NDPS Lawyer Aizawl",
    "Civil Lawyers Lunglei",
    "Family Law Mizoram"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/mizoram',
  },
  openGraph: {
    title: "Lawyers in Mizoram | Aizawl High Court & Customary Law",
    description: "Expert legal representation in Mizoram. Serving clients in Civil, Criminal, and Government Contract matters.",
    url: "https://www.amalegalsolutions.com/locations/mizoram",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Mizoram",
      },
    ],
  },
};

export default function MizoramLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-landscape", title: "Legal Landscape" },
    { id: "high-court", title: "Aizawl Bench Litigation" },
    { id: "customary-law", title: "Mizo Customary Law" },
    { id: "government-contracts", title: "Govt Contracts & tenders" },
    { id: "border-trade", title: "Border Trade & Customs" },
    { id: "land-rights", title: "Land & Property" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Divorce" },
    { id: "ngo-law", title: "NGOs & Societies" },
    { id: "courts-guide", title: "Courts Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Mizoram", href: "/locations/mizoram" },
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
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "linear-gradient(to right, #1a202c, #2d3748)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Legal Services</span> in the Land of Blue Mountains
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the Aizawl Bench to District Council Courts. We uphold the law while respecting Mizo traditions.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Legal Excellence in Mizoram</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Mizoram, known for its high literacy and peaceful society, has a distinct legal framework. It blends the statutory laws of India with the rich heritage of <strong>Mizo Customary Law</strong>. The state's strategic location bordering Myanmar and Bangladesh also gives rise to unique trade and cross-border legal needs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>AMA Legal Solutions</strong> provides comprehensive legal support in Aizawl and beyond. Whether you are dealing with a High Court appeal, a government contract dispute, or family matters governed by customary practices, our understanding of the local ethos ensures effective representation.
                  </p>
                </section>

                {/* Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Mizoram's Unique Legal Ecosystem</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">High Court Bench</h4>
                        <p className="text-gray-700 mb-2">
                           The <strong>Aizawl Bench of the Gauhati High Court</strong> is the highest judicial authority in the state, handling serious civil and criminal matters.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Customary Law</h4>
                        <p className="text-gray-700 mb-2">
                            Under Article 371G of the Constitution, Mizoram has special protection for its religious and social practices, customary law, and land ownership.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Border Trade</h4>
                        <p className="text-gray-700 mb-2">
                            Trade through Zokhawthar and other border points requires specific knowledge of customs, export-import policies, and international transit.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Tribal Rights</h4>
                        <p className="text-gray-700 mb-2">
                            Strict regulations on land transfer to non-tribals and Inner Line Permit (ILP) requirements are central to business and property laws here.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Section: High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Litigation at Aizawl Bench</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    We practice aggressively at the Permanent Bench of the Gauhati High Court in Aizawl.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Writ Jurisdiction:</strong> Challenging arbitrary state actions, service terminations, and protection of fundamental rights.</li>
                      <li>• <strong>Appellate Practice:</strong> Criminal and Civil appeals from the District Courts and Special Courts.</li>
                      <li>• <strong>PILs:</strong> Public Interest Litigations for environmental and social causes relevant to the state.</li>
                  </ul>
                </section>

                {/* Section: Customary Law */}
                <section id="customary-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Mizo Customary Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Expertise in the intricate unwritten and written codified customary laws.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Inheritance:</strong> Disputes regarding 'Roluah' (inheritance) and rights of the youngest son or other family members.</li>
                     <li><strong>Marriage & Divorce:</strong> Proceedings regarding 'Man' (bride price), separation, and 'Mak' (divorce) settlements.</li>
                     <li><strong>Village Council Courts:</strong> Advisory for disputes adjudicated at the local Village Council level.</li>
                   </ul>
                </section>

                {/* Section: Government Contracts */}
                <section id="government-contracts" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Government Contracts & Tenders</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     A majority of infrastructure work in Mizoram is government-driven. We represent contractors.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Tender Disputes:</strong> Challenging unfair disqualification in PWD, PHED, and Power & Electricity Department tenders.</li>
                     <li><strong>Payment Recovery:</strong> Legal notices and writ petitions for release of pending bills and security deposits.</li>
                     <li><strong>Arbitration:</strong> Resolving contractional disputes through arbitration mechanisms.</li>
                   </ul>
                </section>

                {/* Section: Border Trade */}
                <section id="border-trade" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Border Trade & Customs</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Facilitating trade with Myanmar and Bangladesh.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Import-Export:</strong> Advisory on documentation, Letter of Credit (LC), and customs duties.</li>
                     <li><strong>Smuggling Defense:</strong> Defense in cases of alleged customs violations or seizure of goods.</li>
                     <li><strong>Transit Rights:</strong> Legal support for logistics and transport companies operating across the border.</li>
                   </ul>
                </section>

                 {/* Section: Land Rights */}
                <section id="land-rights" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Land & Property Rights</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Navigating the Mizoram Land Revenue Act and customary land holdings.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>LSC Settlement:</strong> Disputes regarding Land Settlement Certificates (LSC) and periodic pattas.</li>
                     <li><strong>Compensation:</strong> Claims for land acquisition compensation for National Highway expansion (NHAL) and railways.</li>
                     <li><strong>Lease Disputes:</strong> Drafting and litigating lease agreements, especially for commercial properties.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense (NDPS & IPC)</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Protecting rights in serious criminal charges.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>NDPS Act:</strong> Specialized defense for drug-related offenses, which are treated with high severity in the region.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Bail Matters:</strong> Rapid action for bail in Aizawl and district courts.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cyber Crime:</strong> Defense against online fraud and harassment charges.</div>
                   </div>
                </section>

                {/* Section: NGO Law */}
                <section id="ngo-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">NGOs & Societies</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Legal support for Civil Society Organizations and Church-based bodies.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Registration:</strong> Filing for Society Registration and FCRA clearance.</li>
                     <li><strong>Compliance:</strong> Ensuring adherence to state regulations and annual filings.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Legal Guide to Mizoram</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">GHC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Gauhati High Court (Aizawl Bench)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          The permanent bench in Aizawl serves as the highest court for the state.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Courts in Aizawl, Lunglei, Champhai etc. handle civil and criminal trials.
                        </p>
                      </div>
                    </div>
                     <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">VC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Village Council Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Unique to Mizoram, handling petty disputes and customary matters at the village level.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology: The AMA Advantage</h2>
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🏔️</div>
                        <h4 className="font-bold text-gray-900">Local Insight</h4>
                        <p className="text-xs text-gray-600 mt-2">Deep respect and understanding of Mizo culture and ethos.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">📋</div>
                        <h4 className="font-bold text-gray-900">Contract Pro</h4>
                        <p className="text-xs text-gray-600 mt-2">Specialized team for PWD and government contract disputes.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛂</div>
                        <h4 className="font-bold text-gray-900">Trade Law</h4>
                        <p className="text-xs text-gray-600 mt-2">Expertise in cross-border trade regulations.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚖️</div>
                        <h4 className="font-bold text-gray-900">High Court</h4>
                        <p className="text-xs text-gray-600 mt-2">Regular practice at the Aizawl Bench.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Culturally Sensitive</h3>
                      <p className="text-gray-600 relative z-10">We handle customary law matters with the dignity they require.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Contract Experts</h3>
                      <p className="text-gray-600 relative z-10">Proven track record in recovering dues for government contractors.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Comprehensive</h3>
                      <p className="text-gray-600 relative z-10">From district courts to the High Court, we cover it all.</p>
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
                        "They handled my road construction tender dispute with PWD efficiently. We won the case at the Aizawl Bench and got our contract back."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">L</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Lalrinawma</p>
                          <p className="text-xs text-gray-500">Contractor, Aizawl</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "A very sensitive family inheritance issue under customary law was resolved amicably due to their expert mediation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">Z</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Zothanpuii</p>
                          <p className="text-xs text-gray-500">Lunglei</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Helped our trading firm understand the import regulations at the Zokhawthar border. Saved us a lot of trouble with Customs."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vanlalhruaia</p>
                          <p className="text-xs text-gray-500">Champhai</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My land compensation had been pending for years. AMA Legal's team filed a writ petition and expedited the process."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">R. Lalthlamuana</p>
                          <p className="text-xs text-gray-500">Aizawl</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Mizoram's trusted legal experts today.
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
                    Connect with our senior advocates in Aizawl today regarding your case.
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
                     "They handled my government tender dispute in the Aizawl Bench very professionally. Highly recommended for civil works contractors."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">L</div>
                     <span className="ml-3 font-bold text-sm">Lalrinawma</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
