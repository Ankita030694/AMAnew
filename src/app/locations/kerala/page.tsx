import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you handle NRI legal matters in Kerala?",
    answer: "Yes, NRI legal services are our primary expertise in Kerala. We handle property disputes, power of attorney (POA) management, and matrimonial issues for the Malayali diaspora in the Gulf, US, and UK."
  },
  {
    question: "Do you practice in the Kerala High Court at Ernakulam?",
    answer: "Yes, our team practices extensively at the High Court of Kerala in Kochi (Ernakulam). We handle Writ Petitions, Criminal Appeals, Bail matters, and Company Law cases."
  },
  {
    question: "Can you help with property registration and verification in Kerala?",
    answer: "Absolutely. We conduct title verification (Encumbrance Certificate check), draft sale deeds, and handle registration at Sub-Registrar offices across Kerala regarding Pokkuvaravu (Mutation) and Thandaper."
  },
  {
    question: "Do you handle Maritime and Shipping cases in Cochin Port?",
    answer: "Yes, we have specialized expertise in Admiralty Law. We represent ship owners, charterers, and cargo interests in ship arrest, cargo claims, and customs disputes at the Cochin Port Trust."
  },
  {
    question: "How do I file a divorce case if I am abroad?",
    answer: "We specialize in NRI divorces. We can file the petition in Family Courts in Kerala and arrange for video conferencing for proceedings so you don't have to fly down frequently."
  },
  {
    question: "Do you assist with ancestral property partition suits?",
    answer: "Yes, we handle partition suits for measuring and separating ancestral property shares, often resolving complex family disputes through mediation and court decrees."
  },
  {
    question: "Can you help with startup registration in Kochi Infopark/Technopark?",
    answer: "Yes, we assist tech startups with incorporation, IP protection (Trademarks/Patents), and drafting Founders' Agreements and NDAs for companies in Kochi and Trivandrum."
  },
  {
    question: "What legal help do you provide for the tourism industry?",
    answer: "We support resorts, houseboats, and homestays with licensing (CRZ clearances), compliance with Kerala Tourism guidelines, and dispute resolution."
  },
  {
    question: "Do you handle Cheque Bounce cases?",
    answer: "Yes, we file and defend Section 138 NI Act cases across all Magistrate courts in Kerala, ensuring quick legal notices and trial representation."
  },
  {
    question: "Do you take up medical negligence cases?",
    answer: "Yes, we represent victims of medical negligence in District and State Consumer Commissions, seeking appropriate compensation."
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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://amalegalsolutions.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Kerala",
      "item": "https://amalegalsolutions.com/locations/kerala"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Kerala",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Kerala specializing in NRI Legal Services, High Court Litigation, Maritime Law, and Property Disputes.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Thiruvananthapuram" },
    { "@type": "City", "name": "Kozhikode" },
    { "@type": "City", "name": "Thrissur" },
    { "@type": "City", "name": "Kottayam" },
    { "@type": "State", "name": "Kerala" }
  ],
  "url": "https://amalegalsolutions.com/locations/kerala",
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
    "reviewCount": "310"
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
  "name": "Legal Services Kerala",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services in Kerala by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "310"
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
        "name": "Mathew Thomas"
      },
      "reviewBody": "Living in Dubai, handling property issues in Kottayam was a headache. AMA Legal managed the entire mutation and boundary dispute process without me visiting."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Sarah Joseph"
      },
      "reviewBody": "Excellent representation in the Kerala High Court for a service matter. Professional and transparent dealings."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shipping Logistics Pvt Ltd"
      },
      "reviewBody": "Best maritime lawyers in Cochin. They helped us arrest a vessel for unpaid dues very quickly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Nair"
      },
      "reviewBody": "Helped my startup with trademark registration and incorporation in Technopark. Good advice for tech companies."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Kerala | High Court Kochi, NRI Services & Maritime Law",
  description:
    "Expert lawyers in Kerala. Specialized in NRI Property Disputes, Kerala High Court Litigation, Divorce, Maritime Law (Cochin Port), and Startup Legal Services.",
  keywords: [
    "Lawyers in Kerala",
    "Advocates in Kochi",
    "Kerala High Court Lawyers",
    "NRI Legal Services Kerala",
    "Divorce Lawyers Kerala",
    "Property Lawyers Kottayam",
    "Maritime Lawyers Cochin",
    "Startup Lawyers Technopark",
    "Criminal Lawyers Ernakulam",
    "Cheque Bounce Lawyer Kerala"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/kerala',
  },
  openGraph: {
    title: "Lawyers in Kerala | Kochi High Court & NRI Legal Services",
    description: "Premier legal firm in Kerala. Serving NRIs, Startups, and Litigants in Civil, Criminal, and Maritime matters.",
    url: "https://amalegalsolutions.com/locations/kerala",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Kerala",
      },
    ],
  },
};

export default function KeralaLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-landscape", title: "Legal Landscape" },
    { id: "nri-services", title: "NRI Legal Services" },
    { id: "high-court", title: "Kerala High Court" },
    { id: "maritime-law", title: "Maritime & Shipping" },
    { id: "real-estate", title: "Property & Real Estate" },
    { id: "plantation-law", title: "Plantation & Estates" },
    { id: "banking-law", title: "Banking & DRT" },
    { id: "family-law", title: "Family & Divorce" },
    { id: "education-law", title: "Education & Service" },
    { id: "startup-law", title: "Startups & IT" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "tourism-law", title: "Tourism & Hospitality" },
    { id: "courts-guide", title: "Courts Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Kerala", href: "/locations/kerala" },
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
              Trusted <span className="text-[#D2A02A]">Legal Advisors</span> in God's Own Country
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the High Court in Kochi to the NRI homes in Kottayam. We bridge the distance with expert legal care.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Legal Solutions for a Global Kerala</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Kerala boasts high literacy, a massive global diaspora, and a vibrant diverse economy. The legal environment here is unique, driven by NRI property investments, maritime trade in Kochi, and a bustling startup ecosystem.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    However, distance often complicates legal matters for Malayalis living abroad. Managing property disputes, family partitions, or divorce cases while overseas can be stressful.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>AMA Legal Solutions</strong> bridges this gap. With a strong presence in the <strong>Kerala High Court (Ernakulam)</strong> and a network across all 14 districts, we act as the trusted legal representatives for clients both in Kerala and the Middle East, Europe, and Americas.
                  </p>
                </section>

                {/* Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Kerala's Unique Legal Ecosystem</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">High Court Hub</h4>
                        <p className="text-gray-700 mb-2">
                           The <strong>High Court of Kerala</strong> in Kochi is the judicial headquarters. It is known for its active intervention in civil rights, environmental issues, and service matters.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">NRI Center</h4>
                        <p className="text-gray-700 mb-2">
                            A significant portion of litigation involves Non-Resident Indians—property protection, matrimonial disputes, and investment issues.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Maritime Trade</h4>
                        <p className="text-gray-700 mb-2">
                            With Cochin Port and the new Vizhinjam Port, <strong>Admiralty Law</strong> is a key area, dealing with international shipping disputes.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Startup & Tourism</h4>
                        <p className="text-gray-700 mb-2">
                            Technopark (Trivandrum) and Infopark (Kochi) drive IT law needs, while the backwaters drive tourism licensing and regulation matters.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Section: NRI Services */}
                <section id="nri-services" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">NRI Legal Services</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We understand the anxiety of managing legal issues from afar. We are your boots on the ground.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Property Management:</strong> Protecting vacant land from encroachment, handling mutation (Pokkuvaravu), and paying land tax.</li>
                     <li><strong>Power of Attorney:</strong> Drafting and adjudicating POAs for property sale or court cases.</li>
                     <li><strong>Family Disputes:</strong> Representing NRIs in partition suits and inheritance matters without needing their physical presence for every hearing.</li>
                     <li><strong>Investment Advisory:</strong> Legal due diligence for NRIs investing in real estate projects in Kerala.</li>
                   </ul>
                </section>

                {/* Section: High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Litigation at Kerala High Court</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Our litigation team is highly experienced in the corridors of the High Court in Ernakulam.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Writ Petitions:</strong> For enforcement of fundamental rights, challenging government orders, and police harassment protection.</li>
                      <li>• <strong>Bail & Anticipatory Bail:</strong> Securing freedom in criminal cases, including dowry and financial fraud allegations.</li>
                      <li>• <strong>Appeals:</strong> Filing Regular First Appeals (RFA) and Criminal Appeals against lower court judgments.</li>
                      <li>• <strong>Company Matters:</strong> Cases regarding winding up and corporate disputes.</li>
                  </ul>
                </section>

                {/* Section: Maritime Law */}
                <section id="maritime-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Maritime & Admiralty Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Leveraging our location near the Cochin Port Trust.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Vessel Arrest:</strong> Actions in rem against ships for recovery of maritime claims.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Cargo Disputes:</strong> Claims for shortage, damage, or non-delivery of goods.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Seamen Rights:</strong> Wages and injury compensation claims for sailors.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Salvage:</strong> Disputes related to salvage operations and towage contracts.</div>
                   </div>
                </section>

                 {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Property & Real Estate</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Handling complex land laws of Kerala including the Paddy Land & Wetland Act.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Title Verification:</strong> rigorous checking of Munnadharam (prior deeds) and Encumbrance Certificates for 30 years.</li>
                     <li><strong>K-RERA:</strong> Filing complaints against builders for delay in handover of apartments.</li>
                     <li><strong>Land Conversion:</strong> Legal assistance for data bank corrections and conversion of land type (KLU Orders) under the Kerala Conservation of Paddy Land and Wetland Act.</li>
                   </ul>
                </section>

                {/* Section: Plantation & Agriculture */}
                <section id="plantation-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Plantation & Estate Laws</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Specialized legal counsel for Kerala's backbone: Rubber, Tea, Cardamom, and Coffee estates.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Land Reforms:</strong> Handling disputes related to land ceiling limits and exemption transfers under the Kerala Land Reforms Act.</li>
                     <li><strong>Labour Compliance:</strong> Advisory on the Plantation Labour Act, including wages, housing, and welfare requirements for estate workers.</li>
                     <li><strong>Forest Disputes:</strong> Representation in Ecologically Fragile Land (EFL) and forest boundary disputes.</li>
                   </ul>
                </section>

                {/* Section: Banking & DRT */}
                <section id="banking-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Banking, Finance & DRT</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Protecting borrowers and businesses in debt recovery proceedings.
                   </p>
                   <p className="text-gray-700 mb-4">
                     We practice at the <strong>Debts Recovery Tribunal (DRT)</strong> in Ernakulam and the DRAT.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>SARFAESI Defense:</strong> Challenging bank possession notices and auctions of secured assets.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>OTS Proposals:</strong> Negotiating One Time Settlements (OTS) with banks for NPA accounts.</div>
                   </div>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Divorce</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Compassionate handling of sensitive personal matters.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Mutual Divorce:</strong> Filing joint petitions for quick dissolution of marriage.</li>
                     <li><strong>Contested Divorce:</strong> Representation on grounds of cruelty, desertion, or adultery under Hindu, Christian (Divorce Act 1869), and Muslim laws.</li>
                     <li><strong>Child Custody:</strong> fighting for the welfare and custody of children, often involving cross-border jurisdiction issues (Hague Convention defense).</li>
                     <li><strong>Inheritance:</strong> Drafting wills and handling probate matters for Christian and Hindu succession.</li>
                   </ul>
                </section>

                {/* Section: Education & Service Law */}
                <section id="education-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Education & Service Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Kerala has a dense network of educational institutions and a huge government workforce.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Admission & Fees:</strong> Litigating disputes regarding self-financing college admissions and fee structures.</li>
                     <li><strong>Service Matters:</strong> Representing government employees in KAT (Kerala Administrative Tribunal) regarding transfers, promotion denial, and disciplinary action.</li>
                     <li><strong>University Statutes:</strong> Cases involving Calicut, Kerala, and MG University regulations.</li>
                   </ul>
                </section>

                {/* Section: Startup Law */}
                <section id="startup-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Startups & IT</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Supporting the innovation hubs of Kerala.
                   </p>
                   <p className="text-gray-700">
                     We assist startups in <strong>Kochi Infopark</strong>, <strong>Trivandrum Technopark</strong>, and <strong>Kozhikode Cyberpark</strong> with registration, IP strategy, and investor contracts.
                   </p>
                </section>

                {/* Section: Tourism Law */}
                <section id="tourism-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Tourism & Hospitality</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Legal backing for God's Own Country's tourism sector.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Licensing:</strong> Obtaining licenses for Homestays, Houseboats, and Ayurvedic resorts.</li>
                     <li><strong>CRZ Compliance:</strong> Navigating Coastal Regulation Zone (CRZ) rules for beachside properties.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Strong defense in all criminal courts.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cheque Bounce:</strong> Complete management of S. 138 NI Act cases.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cyber Law:</strong> Defense against online defamation and fraud charges.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Trials:</strong> Representation in Sessions Courts across Kerala.</div>
                   </div>
                </section>


                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Legal Guide to Kerala</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Kerala High Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located in Ernakulam (Kochi). The apex court for the state. Requires specialized filing procedures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">FC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Family Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Present in every district headquarters. Mandatory counseling/mediation is a key step here.
                        </p>
                      </div>
                    </div>
                     <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">CC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Consumer Commissions</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          District Commissions and the State Commission in Trivandrum. Very active in medical and service deficiency cases.
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
                        <div className="text-3xl mb-2">✈️</div>
                        <h4 className="font-bold text-gray-900">NRI Focused</h4>
                        <p className="text-xs text-gray-600 mt-2">Systems designed for remote communication and representation.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚓</div>
                        <h4 className="font-bold text-gray-900">Specialized</h4>
                        <p className="text-xs text-gray-600 mt-2">Niche expertise in Maritime, Tea/Plantation, and Tourism laws.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Accessible</h4>
                        <p className="text-xs text-gray-600 mt-2">Offices/Associates in Kochi, Trivandrum, and Calicut.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Thorough</h4>
                        <p className="text-xs text-gray-600 mt-2">In-depth due diligence for land documents, preventing future disputes.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Trust</h3>
                      <p className="text-gray-600 relative z-10">Trusted by hundreds of NRI families for safeguarding their assets in Kerala.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Expertise</h3>
                      <p className="text-gray-600 relative z-10">High-caliber advocacy in the High Court and District Courts.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Efficiency</h3>
                      <p className="text-gray-600 relative z-10">Timely filing, regular updates, and result-oriented approach.</p>
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
                        "Living in Dubai, handling property issues in Kottayam was a headache. AMA Legal managed the entire mutation and boundary dispute process without me visiting."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Mathew Thomas</p>
                          <p className="text-xs text-gray-500">Dubai, UAE</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best maritime lawyers in Cochin. They helped us arrest a vessel for unpaid dues very quickly and professionaly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Atlantic Logistics</p>
                          <p className="text-xs text-gray-500">Shipping Co.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My startup in Technopark needed trademark and founders' agreement. The team was very tech-savvy and quick."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rahul Nair</p>
                          <p className="text-xs text-gray-500">Technopark, Trivandrum</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "I faced a false dowry case. The lawyers at AMA Legal handled the bail and quashing in the High Court excellently."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vishnu P.</p>
                          <p className="text-xs text-gray-500">Ernakulam</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Kerala's trusted legal experts today.
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
                    Connect with our senior advocates in Kerala today regarding your case.
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
                     "AMA Legal managed the entire mutation and boundary dispute process in Kottayam without me visiting from Dubai."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">M</div>
                     <span className="ml-3 font-bold text-sm">Mathew Thomas</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
