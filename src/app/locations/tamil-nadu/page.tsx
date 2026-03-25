import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you practice in both Chennai and Madurai High Court benches?",
    answer: "Yes, we have a robust litigation practice at the Principal Seat of the Madras High Court in Chennai and the Madurai Bench. We represent clients in Writ Petitions, Criminal Appeals, and Civil Revisions across Tamil Nadu."
  },
  {
    question: "Can you assist with startup registration and IP for SaaS companies in Chennai?",
    answer: "Absolutely. Chennai is the SaaS capital of India. We assist startups with incorporation in TIDEL Park/OMR, founders' agreements, trademark filing, and drafting SaaS Service Level Agreements (SLAs)."
  },
  {
    question: "Do you handle labour disputes for manufacturing units in Oragadam/Sriperumbudur?",
    answer: "Yes, we specialize in industrial and labour laws. We represent automobile and manufacturing companies in disputes related to unions, strikes, wage settlements, and compliance under the Factories Act."
  },
  {
    question: "How do I check property legality with CMDA/DTCP?",
    answer: "We conduct thorough due diligence for properties in Chennai (CMDA limits) and rest of Tamil Nadu (DTCP). We verify Pattas, Chitta, Adangal, and layout approvals to ensure the property is free from encumbrances."
  },
  {
    question: "Do you handle Maritime and Shipping law cases?",
    answer: "Yes, with Chennai and Tuticorin being major ports, we handle Admiralty suits, ship arrest, cargo claims, and maritime insurance disputes in the Madras High Court."
  },
  {
    question: "Can you help with Textiles business disputes in Tiruppur/Coimbatore?",
    answer: "We represent textile exporters and manufacturers in Coimbatore and Tiruppur regarding MSME payment delays, export contract disputes, and arbitration matters."
  },
  {
    question: "Do you handle family court matters in Chennai?",
    answer: "Yes, we handle divorce, child custody, and maintenance cases in the Family Courts at the High Court campus in Chennai. We also handle NRI matrimonial issues."
  },
  {
    question: "What legal services do you offer for the film industry (Kollywood)?",
    answer: "We assist production houses and artists with copyright protection, distribution agreements, and IP infringement suits in the Madras High Court."
  },
  {
    question: "Do you assist with NCLT Chennai matters?",
    answer: "Yes, our corporate team handles insolvency (IBC) and oppression/mismanagement cases before the NCLT Chennai Bench, representing creditors and corporate debtors."
  },
  {
    question: "How do I file a consumer complaint in Tamil Nadu?",
    answer: "We file complaints in the District Consumer Commissions and the State Commission in Chennai for defects in goods and deficiency in services, including real estate and medical negligence."
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
      "name": "Tamil Nadu",
      "item": "https://www.amalegalsolutions.com/locations/tamil-nadu"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Tamil Nadu",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Tamil Nadu specializing in Madras High Court Litigation, Corporate Law, Maritime Law, and IP for SaaS.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Trichy" },
    { "@type": "City", "name": "Salem" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "url": "https://www.amalegalsolutions.com/locations/tamil-nadu",
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
    "ratingValue": "4.8",
    "reviewCount": "280"
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
  "name": "Legal Services Tamil Nadu",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services in Tamil Nadu by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "280"
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
        "name": "Karthik Subramanian"
      },
      "reviewBody": "Our SaaS startup in OMR needed comprehensive heavy lifting on contracts and IP. AMA Legal was phenomenal. Very tech-savvy lawyers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meena Kumari"
      },
      "reviewBody": "I faced a serious property dispute with my ancestral land in Madurai. The team represented me in the Madurai Bench and secured my rights."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Global Exports Ltd"
      },
      "reviewBody": "Best firm for handling maritime claims and customs disputes at Chennai Port. Efficient and result-oriented."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Senthil Kumar"
      },
      "reviewBody": "Helped me resolve a delayed possession issue with a prominent builder in Porur. RERA complaint was handled very professionally."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Tamil Nadu | Madras High Court, NCLT & Corporate Law",
  description:
    "Top lawyers in Tamil Nadu. Experts in Madras High Court (Chennai/Madurai), Corporate Law for SaaS, Maritime Law, and Real Estate (CMDA/DTCP).",
  keywords: [
    "Lawyers in Tamil Nadu",
    "Advocates in Chennai",
    "Madras High Court Lawyers",
    "Corporate Lawyers OMR Chennai",
    "Divorce Lawyers Chennai",
    "Maritime Lawyers India",
    "Property Lawyers Coimbatore",
    "NCLT Chennai Lawyers",
    "Startup Lawyers Tamil Nadu",
    "Civil Lawyers Madurai"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/tamil-nadu',
  },
  openGraph: {
    title: "Lawyers in Tamil Nadu | High Court & Corporate Legal Services",
    description: "Expert legal representation in Tamil Nadu. Civil, Criminal, Corporate, and Maritime services by AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/locations/tamil-nadu",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Tamil Nadu",
      },
    ],
  },
};

export default function TamilNaduLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-landscape", title: "Legal Landscape" },
    { id: "corporate-it", title: "Corporate & SaaS" },
    { id: "high-court", title: "Madras High Court" },
    { id: "maritime-law", title: "Maritime & Shipping" },
    { id: "real-estate", title: "Real Estate & CMDA" },
    { id: "industrial-law", title: "Manufacturing & Labour" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "ipr-media", title: "IPR & Media Law" },
    { id: "courts-guide", title: "Courts Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Tamil Nadu", href: "/locations/tamil-nadu" },
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
              World-Class <span className="text-[#D2A02A]">Legal Services</span> in Tamil Nadu
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the SaaS hubs of OMR to the manufacturing belts of Coimbatore. Representing you with distinction at the Chartered High Court of Madras.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Legal Excellence in the Dravidian Heartland</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Tamil Nadu is an economic powerhouse, blending traditional manufacturing strengths with a cutting-edge technology sector. It is home to the <strong>Madras High Court</strong>, one of the oldest and most prestigious chartered High Courts in India, rich in judicial heritage.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    From the bustling port city of <strong>Chennai</strong> to the textile capital of <strong>Tiruppur</strong> and the engineering hub of <strong>Coimbatore</strong>, the legal needs of the state are diverse. They range from complex maritime disputes and international IP litigation for SaaS giants to industrial labour issues and property matters.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>AMA Legal Solutions</strong> offers a blend of local expertise and global standards. Whether you are a startup founder in Taramani, an exporter in Tuticorin, or a family seeking justice in Madurai, we stand by you.
                  </p>
                </section>

                {/* Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Tamil Nadu's Unique Legal Ecosystem</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Chartered High Court</h4>
                        <p className="text-gray-700 mb-2">
                           The <strong>Madras High Court</strong> (est. 1862) has original jurisdiction in civil matters (above a certain value) within Chennai, a unique feature shared with only Mumbai and Kolkata.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">SaaS Capital</h4>
                        <p className="text-gray-700 mb-2">
                            Chennai is India's SaaS capital. This drives high-volume litigation and advisory work in Intellectual Property (IP), Data Privacy, and international contracts.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Maritime Hub</h4>
                        <p className="text-gray-700 mb-2">
                            With major ports like Chennai, Ennore, and Tuticorin, <strong>Admiralty and Maritime Law</strong> is a specialized and active field of practice here.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Industrial Clusters</h4>
                        <p className="text-gray-700 mb-2">
                            The "Detroit of Asia" (Chennai) and textile hubs require specialized handling of labour unions, factory compliance, and MSME disputes.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Section: Corporate & SaaS */}
                <section id="corporate-it" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate Law & SaaS Advisory</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We support Tamil Nadu's vibrant startup and corporate ecosystem.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Startup Structuring:</strong> Incorporation, Founders' Agreements, and ESOP plans for startups in Taramani and OMR.</li>
                     <li><strong>IP Protection:</strong> Global trademark filing and patent registration for software products.</li>
                     <li><strong>Tech Contracts:</strong> Drafting Master Service Agreements (MSA), SaaS User Agreements, and GDPR/DPDP Act compliance policies.</li>
                     <li><strong>NCLT Chennai:</strong> Handling IBC insolvency resolution and shareholder disputes at the dedicated NCLT bench.</li>
                   </ul>
                </section>

                {/* Section: High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Litigation at Madras High Court</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    We practice at both the Principal Seat in Chennai and the Madurai Bench.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Original Side (CS):</strong> Filing Civil Suits directly in High Court for high-value commercial and property disputes within Chennai.</li>
                      <li>• <strong>Writ Jurisdiction:</strong> Filing WP (Writ Petitions) against government actions, tender cancellations, and land acquisition.</li>
                      <li>• <strong>Appellate Side:</strong> First and Second Appeals from District Courts across the state.</li>
                      <li>• <strong>Criminal Side:</strong> Anticipatory Bail, Quashing of FIRs (S. 482 CrPC), and Criminal Appeals.</li>
                  </ul>
                </section>

                {/* Section: Maritime Law */}
                <section id="maritime-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Maritime & Advice Admiralty</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Specialized legal services for the shipping and logistics industry.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Ship Arrest:</strong> Obtaining or vacating arrest orders for vessels in Indian waters for unpaid dues.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Cargo Claims:</strong> Disputes regarding damaged cargo, short landing, and bill of lading issues.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Customs:</strong> Litigation regarding seizure, confiscation, and duty disputes with Customs authorities.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Charter Parties:</strong> Drafting and dispute resolution for voyage and time charters.</div>
                   </div>
                </section>

                 {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate & Construction</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Navigating CMDA (Chennai Metropolitan Development Authority) and DTCP regulations.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Due Diligence:</strong> Verifying title flow, Patta, Chitta, Adangal, and Encumbrance Certificates (EC) for 30+ years.</li>
                     <li><strong>TNRERA:</strong> Representation in Tamil Nadu RERA for project delays and refund claims.</li>
                     <li><strong>Joint Ventures:</strong> Drafting JDA (Joint Development Agreements) between landowners and builders.</li>
                   </ul>
                </section>

                {/* Section: Industrial Law */}
                <section id="industrial-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Manufacturing & Labour Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Serving the industrial corridors of Sriperumbudur, Oragadam, and Hosur.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Industrial Disputes:</strong> Handling strikes, lockouts, and union negotiations under the ID Act.</li>
                     <li><strong>Compliance:</strong> Advisory on Factories Act, Contract Labour Act, and POSH Act compliance.</li>
                     <li><strong>MSME Recovery:</strong> Filing claims for delayed payments through the MSME Samadhaan portal.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Protecting your rights in trial and appellate courts.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cheque Bounce:</strong> Defense and filing of cases under Section 138 NI Act in Metropolitan Magistrate courts.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cyber Crime:</strong> Handling cases of data theft, hacking, and online fraud.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Economic Offenses:</strong> Representation in EOW (Economic Offenses Wing) cases.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Bail:</strong> 24/7 assistance for bail matters across Tamil Nadu.</div>
                   </div>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Empathetic legal support for personal disputes.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Divorce:</strong> Mutual consent and contested divorce proceedings in Chennai Family Court.</li>
                     <li><strong>Child Custody:</strong> Litigation for guardianship and visitation rights.</li>
                     <li><strong>Restitution:</strong> Filing RCR (Restitution of Conjugal Rights) petitions.</li>
                   </ul>
                </section>

                 {/* Section: IPR Media */}
                <section id="ipr-media" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Media & Entertainment Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Serving the Tamil Film Industry (Kollywood).
                   </p>
                   <p className="text-gray-700">
                     We assist producers, directors, and artists with <strong>Copyright Registration</strong>, <strong>Movie Rights Agreements</strong>, and <strong>Defamation Suits</strong> in the High Court.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Guide to Courts in Tamil Nadu</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">MHC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Madras High Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>Principal Seat (Chennai):</strong> Northern and Central districts. Located at Parry's Corner.<br/>
                          <strong>Madurai Bench:</strong> southern districts (Madurai, Trichy, Tirunelveli, etc).
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">CC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">City Civil Court (Chennai)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located within the High Court campus. Handles civil suits up to a certain pecuniary limit.
                        </p>
                      </div>
                    </div>
                     <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">NC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">NCLT Chennai</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located at Mannady (Corporate Bhawan). Handles company law matters for TN, Kerala, and Pondicherry.
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
                        <div className="text-3xl mb-2">⚖️</div>
                        <h4 className="font-bold text-gray-900">Legacy</h4>
                        <p className="text-xs text-gray-600 mt-2">Deep understanding of the Madras High Court's traditions and procedures.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💻</div>
                        <h4 className="font-bold text-gray-900">Tech Focus</h4>
                        <p className="text-xs text-gray-600 mt-2">Specialized team for SaaS/IT contracts and cyber law.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🏭</div>
                        <h4 className="font-bold text-gray-900">Industrial</h4>
                        <p className="text-xs text-gray-600 mt-2">Expertise in handling complex labour and factory disputes.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🌐</div>
                        <h4 className="font-bold text-gray-900">Statewide</h4>
                        <p className="text-xs text-gray-600 mt-2">Network of associates across all 38 districts of Tamil Nadu.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Strategic Counsel</h3>
                      <p className="text-gray-600 relative z-10">We don't just fight cases; we provide strategic business solutions.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Transparent</h3>
                      <p className="text-gray-600 relative z-10">Clear fee structures and regular reporting on case developments.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Proven Results</h3>
                      <p className="text-gray-600 relative z-10">A strong track record of success in High Court and Tribunals.</p>
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
                        "As a tech founder, legal jargon scares me. AMA Legal handled our US-flip structure and IP assignment agreements seamlessly. Best lawyers for startups in Chennai."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">K</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Karthik Subramanian</p>
                          <p className="text-xs text-gray-500">CEO, SaaS Co., OMR</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Our manufacturing unit in Sriperumbudur faced a tough labour strike. Mr. Kumar provided excellent strategic advice and resolved it through the Labour Court."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Mohan Rajest</p>
                          <p className="text-xs text-gray-500">Factory Owner, Sriperumbudur</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "We had a container stuck at Chennai Port due to a customs dispute. AMA Legal filed a Writ and got the goods released within a week. Highly efficient."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">G</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Global Exports Ltd</p>
                          <p className="text-xs text-gray-500">Chennai</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Handling my divorce was tough emotionally. The lawyers were very supportive and guided me through the Family Court process ensuring fair maintenance."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">L</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Lakshmi Priya</p>
                          <p className="text-xs text-gray-500">Chennai</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Tamil Nadu's trusted legal experts today.
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
                    Connect with our senior advocates in Chennai today regarding your case.
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
                     "AMA Legal handled our US-flip structure and IP assignment agreements seamlessly. Best lawyers for startups in Chennai."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">K</div>
                     <span className="ml-3 font-bold text-sm">Karthik S., CEO</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
