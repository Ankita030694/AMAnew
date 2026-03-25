import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you handle cases in the Punjab & Haryana High Court?",
    answer: "Yes, our primary practice is based at the Punjab & Haryana High Court in Chandigarh. We handle Writ Petitions, Criminal Appeals, Service Matters, and Public Interest Litigations (PILs) for clients from Punjab, Haryana, and Chandigarh."
  },
  {
    question: "Can you help with Estate Office property transfers in Chandigarh?",
    answer: "Absolutely. Dealing with the Chandigarh Estate Office can be complex. We assist with transfer of leasehold/freehold properties, GPAs, mutation, and issues related to 'Unearned Increase' and misuse notices."
  },
  {
    question: "Do you practice in NCLT Chandigarh?",
    answer: "Yes, we have a dedicated team for the National Company Law Tribunal (NCLT) Chandigarh Bench. We handle Insolvency (IBC) cases, oppression and mismanagement petitions, and mergers/demergers for companies across North India."
  },
  {
    question: "Do you handle service matters in CAT (Central Administrative Tribunal)?",
    answer: "Yes, we represent central government employees in the Central Administrative Tribunal (CAT) Chandigarh Bench regarding promotion, transfer, disciplinary proceedings, and pension disputes."
  },
  {
    question: "What is the procedure for floor-wise registration in Chandigarh?",
    answer: "Recently, the Supreme Court and Administration have had varying rulings on independent floor fragmentation. We guide you through the latest legal status, converting share in land, and registering sale deeds where permitted."
  },
  {
    question: "Do you assist with Cheque Bounce cases in Chandigarh District Court?",
    answer: "Yes, we handle Section 138 NI Act cases in the District Courts of Sector 43, Chandigarh. We represent both complainants (filing cases) and accused (seeking bail and defense)."
  },
  {
    question: "Can you help with NRI matrimonial disputes?",
    answer: "Chandigarh is a hub for NRI litigation. We handle declaring foreign divorces valid/void, child custody under the Hague Convention principles, and 498A defense for NRIs living abroad."
  },
  {
    question: "Do you handle RERA Chandigarh complaints?",
    answer: "Yes, for projects registered under RERA UT Chandigarh. We file complaints for possession delay, refund with interest, and quality issues against builders."
  },
  {
    question: "Do you provide legal services in Mohali and Panchkula too?",
    answer: "Yes, as a Tricity-based firm, we practice seamlessly in the District Courts of Mohali and Panchkula, along with Chandigarh. We cover the entire Tricity region."
  },
  {
    question: "How do I get a succession certificate in Chandigarh?",
    answer: "We file petitions for Succession Certificates or Letters of Administration in the Civil Courts of Chandigarh for transferring movable assets like bank FD, shares, and debts of a deceased person."
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
      "name": "Chandigarh",
      "item": "https://www.amalegalsolutions.com/locations/chandigarh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Chandigarh",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Premier law firm in Chandigarh specializing in High Court Litigation, NCLT, Estate Office matters, and Corporate Law.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sector 48",
    "addressRegion": "Chandigarh",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Chandigarh" },
    { "@type": "City", "name": "Mohali" },
    { "@type": "City", "name": "Panchkula" },
    { "@type": "City", "name": "Zirakpur" },
    { "@type": "State", "name": "Punjab" },
    { "@type": "State", "name": "Haryana" }
  ],
  "url": "https://www.amalegalsolutions.com/locations/chandigarh",
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
  "name": "Legal Services Chandigarh",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services in Chandigarh by AMA Legal Solutions.",
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
        "name": "Col. RS Sandhu (Retd)"
      },
      "reviewBody": "They handled my pension dispute in AFT Chandigarh with military precision. Highly knowledgeable about service laws."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Mahajan"
      },
      "reviewBody": "I was facing issues with the Estate Office regarding transfer of my father's SCO. AMA Legal sorted out the unearned increase issue and got the mutation done."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Davinder Singh"
      },
      "reviewBody": "Top lawyers for High Court matters. They got my quashing petition allowed in a 498A case. Very relieved."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "TechPro Solutions Pvt Ltd"
      },
      "reviewBody": "We rely on them for all our NCLT and corporate matters in Chandigarh. Professional and effective."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Chandigarh | High Court, NCLT & Estate Office Experts",
  description:
    "Leading lawyers in Chandigarh. Experts in Punjab & Haryana High Court, NCLT, Estate Office Property Matters, Service Law (CAT/AFT), and NRI Legal Services.",
  keywords: [
    "Lawyers in Chandigarh",
    "High Court Lawyers Chandigarh",
    "Punjab and Haryana High Court Advocates",
    "NCLT Lawyers Chandigarh",
    "Estate Office Chandigarh Legal Help",
    "Service Law Advocates CAT Chandigarh",
    "Divorce Lawyers Chandigarh",
    "Criminal Lawyers Sector 43 Court",
    "Property Lawyers Tricity",
    "NRI Legal Services Chandigarh"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/chandigarh',
  },
  openGraph: {
    title: "Lawyers in Chandigarh | High Court & Corporate Legal Services",
    description: "Expert legal representation in Chandigarh. High Court, NCLT, Civil, Criminal, and Property services by AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/locations/chandigarh",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Chandigarh",
      },
    ],
  },
};

export default function ChandigarhLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-capital", title: "The Legal Capital" },
    { id: "estate-office", title: "Estate Office & Property" },
    { id: "high-court", title: "High Court Litigation" },
    { id: "nclt-corporate", title: "NCLT & Corporate Law" },
    { id: "service-law", title: "Service Law (CAT/AFT)" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & NRI Issues" },
    { id: "rera-consumer", title: "RERA & Consumer" },
    { id: "tricity-coverage", title: "Tricity Coverage" },
    { id: "courts-guide", title: "Courts in Chandigarh" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Chandigarh", href: "/locations/chandigarh" },
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
              Expert <span className="text-[#D2A02A]">Legal Services</span> in Chandigarh
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the Punjab & Haryana High Court to the NCLT Bench. We are the trusted legal voice of the City Beautiful.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Legal Heart of North India</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Chandigarh is not just a union territory; it is the judicial nerve center for two states—Punjab and Haryana—and UT itself. Hosting the <strong>Punjab & Haryana High Court</strong>, it draws litigants and lawyers from across the region. But Chandigarh's legal significance goes beyond the High Court.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     It is home to critical tribunals like the <strong>NCLT (National Company Law Tribunal)</strong>, <strong>DRT (Debts Recovery Tribunal)</strong>, <strong>CAT (Central Administrative Tribunal)</strong>, and <strong>AFT (Armed Forces Tribunal)</strong>. This concentration of judicial power makes Chandigarh a complex playground for legal battles involving corporate insolvency, government service matters, and banking disputes.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>AMA Legal Solutions</strong> is headquartered in the heart of this legal ecosystem. We don't just practice here; we understand the pulse of these courts. Whether navigating the bureaucratic maze of the <strong>Chandigarh Estate Office</strong> or arguing a constitutional matter in the High Court, our expertise is unmatched.
                  </p>
                </section>

                {/* The Legal Capital */}
                <section id="legal-capital" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Chandigarh Requires Specialized Legal Counsel</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Unique Property Laws</h4>
                        <p className="text-gray-700 mb-2">
                            Chandigarh has no freehold land originally; it's all leasehold (though conversions exist). The <strong>Chandigarh Estate Rules</strong> governing transfer, misuse, and building violations are draconian and unique.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Service Law Hub</h4>
                        <p className="text-gray-700 mb-2">
                            With thousands of government employees and defense personnel, the <strong>CAT</strong> and <strong>AFT</strong> benches here are the battlegrounds for promotion, pension, and disciplinary disputes.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Corporate Insolvency</h4>
                        <p className="text-gray-700 mb-2">
                            The <strong>NCLT Chandigarh Bench</strong> handles corporate cases for Punjab, Haryana, HP, and J&K. It is a critical forum for IBC (Insolvency and Bankruptcy Code) litigation.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">NRI Litigation</h4>
                        <p className="text-gray-700 mb-2">
                            As the gateway to Punjab, Chandigarh courts handle a massive volume of NRI matrimonial and property disputes, requiring expertise in private international law.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Section: Estate Office */}
                <section id="estate-office" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Estate Office & Property Matters</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Dealing with the Estate Office in Sector 17 can be daunting. We simplify the complexities of Chandigarh property laws.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Transfer of Property:</strong> Handling transfer of leasehold and freehold properties (residential, commercial SCOs/SCFs, and industrial plots).</li>
                     <li><strong>Unearned Increase:</strong> Litigating disputes regarding the calculation and payment of unearned increase during transfer of leasehold properties.</li>
                     <li><strong>Misuse Notices:</strong> Responding to and challenging resumption orders issued for 'misuse' or 'building violations' under the Capital of Punjab (Development and Regulation) Act, 1952.</li>
                     <li><strong>Lease to Freehold:</strong> Assisting in the conversion processes where the administration schemes allow.</li>
                   </ul>
                </section>

                {/* Section: High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Punjab & Haryana High Court Litigation</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    The High Court is our home ground. We handle diverse matters:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Writ Petitions (Civil):</strong> Challenging arbitrary actions of PUDA, GMADA, Estate Office, or other government bodies.</li>
                      <li>• <strong>Criminal Writs:</strong> Protection of life and liberty for runaway couples (a very common matter in Chandigarh HC).</li>
                      <li>• <strong>Quashing Petitions (S. 482):</strong> Quashing of FIRs in matrimonial/civil disputes based on compromise.</li>
                      <li>• <strong>Bail Matters:</strong> Regular and Anticipatory Bail applications for serious offenses.</li>
                  </ul>
                </section>

                {/* Section: NCLT */}
                <section id="nclt-corporate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">NCLT & Corporate Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We represent creditors (financial/operational) and corporate debtors before the NCLT Chandigarh Bench.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>IBC Litigation:</strong> Initiating or defending CIRP (Corporate Insolvency Resolution Process) under Section 7, 9, and 10 of The Code.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Oppression & Mismanagement:</strong> Protecting minority shareholder rights under Section 241-242 of Companies Act, 2013.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Mergers:</strong> Handling schemes of arrangement and amalgamation.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Restoration:</strong> Filing appeals for restoration of struck-off companies.</div>
                   </div>
                </section>

                 {/* Section: Service Law */}
                <section id="service-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Service Law (CAT / AFT)</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Chandigarh has a high density of government employees. We specialize in Service Jurisprudence.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>CAT Chandigarh:</strong> Representing Central Govt employees in matters of seniority, promotion denial, transfer, and suspension.</li>
                     <li><strong>AFT Chandigarh (Chandimandir):</strong> Representing Army, Navy, and Air Force personnel in court martial appeals, disability pension, and service matters.</li>
                     <li><strong>High Court Service Bench:</strong> Handling writs for state government employees of Punjab and Haryana.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense & District Courts</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     The District Courts in Sector 43 are the first line of defense.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>NDPS Cases:</strong> Defense in drug-related offenses which are strictly prosecuted in the region.</li>
                     <li><strong>White Collar Crime:</strong> Corruption cases (CBI Court Chandigarh), Prevention of Money Laundering Act (PMLA).</li>
                     <li><strong>Cheque Bounce:</strong> Massive volume of Section 138 NI Act cases. We handle bulk litigation for financial institutions.</li>
                   </ul>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family Law & NRI Disputes</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle sensitive family matters with a focus on quick resolution.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>NRI Divorces:</strong> Expert handling of international divorce validity, child custody, and LOC (Look Out Circular) removal.</li>
                     <li><strong>Mutual Consent Divorce:</strong> Fast-track divorce process in District Courts.</li>
                     <li><strong>Domestic Violence:</strong> Prosecution and defense in DV Act cases.</li>
                   </ul>
                </section>

                {/* Section: RERA */}
                <section id="rera-consumer" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">RERA & Consumer Protection</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     With real estate booming in the periphery (Zirakpur, New Chandigarh), builder disputes are common.
                   </p>
                   <p className="text-gray-700">
                     We represent homebuyers in the <strong>Real Estate Regulatory Authority (RERA) UT Chandigarh</strong> and the <strong>State Consumer Commission</strong> in Sector 19 for refund and compensation claims.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Chandigarh</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Punjab & Haryana High Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Sector 1. The apex court for the region. Entry requires a pass. We assist clients with all procedural formalities.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Sector 43. A modern court complex housing Civil, Criminal, and Matrimonial courts. Also houses the Mediation Centre.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Tribunals</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>CAT:</strong> Sector 17.<br/>
                          <strong>DRT:</strong> Sector 17.<br/>
                          <strong>Consumer Commission:</strong> Sector 19.<br/>
                          <strong>NCLT:</strong> Sector 27 (Corporate Bhawan).
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
                        <div className="text-3xl mb-2">🏛️</div>
                        <h4 className="font-bold text-gray-900">All-Forum Practice</h4>
                        <p className="text-xs text-gray-600 mt-2">We practice in every single court and tribunal in the Tricity, providing one-stop solutions.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🏢</div>
                        <h4 className="font-bold text-gray-900">Corporate Focus</h4>
                        <p className="text-xs text-gray-600 mt-2">Specialized team for NCLT and White-Collar crimes, catering to the corporate sector.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💬</div>
                        <h4 className="font-bold text-gray-900">Client Centric</h4>
                        <p className="text-xs text-gray-600 mt-2">We offer personalized attention and real-time updates on case status.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Ethical</h4>
                        <p className="text-xs text-gray-600 mt-2">Highest standards of professional integrity and transparency in billing.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">High Court Leaders</h3>
                      <p className="text-gray-600 relative z-10">A commanding presence in the Punjab & Haryana High Court litigant community.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Estate Experts</h3>
                      <p className="text-gray-600 relative z-10">Deep technical knowledge of Chandigarh Estate Rules, saving clients time and money.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Tricity Reach</h3>
                      <p className="text-gray-600 relative z-10">Seamlessly handling matters in Chandigarh, Mohali, and Panchkula courts.</p>
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
                        "I was wrongfully denied my disability pension. AMA Legal filed my case in the AFT Chandimandir and fought brilliantly. I got my arrears with interest. Jai Hind."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Col. RS Sandhu (Retd)</p>
                          <p className="text-xs text-gray-500">Army Veteran, Mohali</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "The Estate Office had issued a resumption notice for my SCO in Sector 26 due to alleged misuse. AMA Legal filed a Writ in High Court and got the notice quashed."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Mahajan</p>
                          <p className="text-xs text-gray-500">Businesswoman, Chandigarh</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "We hired them for our company's insolvency matter in NCLT Chandigarh. Their understanding of the IBC Code is impressive. Highly professional team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">T</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">TechPro Solutions Pvt Ltd</p>
                          <p className="text-xs text-gray-500">IT Park, Chandigarh</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My daughter was facing harassment in a dowry case. The team handled the 498A quashing in High Court sensitively and effectively. We can finally breathe."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">D</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Davinder Singh</p>
                          <p className="text-xs text-gray-500">Retired, Panchkula</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Chandigarh's trusted legal experts today.
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
                    Connect with our senior advocates in Chandigarh today regarding your case.
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
                     "AMA Legal sorted out the unearned increase issue with Chandigarh Estate Office and got the mutation done smoothy."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">P</div>
                     <span className="ml-3 font-bold text-sm">Priya Mahajan</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
