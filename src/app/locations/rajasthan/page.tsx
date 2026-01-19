import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you practice in both Jaipur and Jodhpur High Court benches?",
    answer: "Yes, we practice at both the Principal Seat of the Rajasthan High Court in Jodhpur and the Circuit Bench in Jaipur. We handle Writ Petitions, Criminal Appeals, and Civil Revisions at both locations depending on the territorial jurisdiction."
  },
  {
    question: "Can you assist with converting agricultural land to commercial (90A) in Rajasthan?",
    answer: "Absolutely. Land conversion under Section 90A of the Rajasthan Land Revenue Act is a complex process involving the JDA (Jaipur Development Authority) or local UITs. We facilitate the entire legal process for converting Khatedari land for commercial or residential use."
  },
  {
    question: "Do you handle legal matters for hotels and heritage properties?",
    answer: "Yes, we specialize in hospitality law. We assist heritage property owners in converting forts/havelis into heritage hotels, obtaining tourism licenses, and handling regulatory compliance with the Department of Tourism and MoEF."
  },
  {
    question: "How do I file a RERA complaint in Rajasthan?",
    answer: "Rajasthan RERA (RajRERA) is very active. If a builder in Jaipur, Bhiwadi, or Udaipur has delayed possession, we can file a complaint online on the RajRERA portal for refund with interest. We also represent buyers in the RERA Appellate Tribunal."
  },
  {
    question: "What legal services do you offer for mining industries?",
    answer: "Rajasthan is a mining hub (Marble, Granite, Sandstone). We handle mining lease disputes, environmental clearance matters before the NGT (National Green Tribunal), and compliance dealing with the Department of Mines & Geology."
  },
  {
    question: "Do you handle family disputes and divorce cases in Jaipur?",
    answer: "Yes, we handle mutual consent and contested divorce cases in the Family Courts of Jaipur, Jodhpur, and Kota. We also assist with child custody, alimony, and cases under the Domestic Violence Act."
  },
  {
    question: "Can you help disputes in the industrial hubs of Bhiwadi and Neemrana?",
    answer: "Our corporate team handles legal matters in the RIICO industrial areas of Bhiwadi and Neemrana. This includes MSME recovery, labour disputes, factory compliance, and contract drafting for manufacturing units."
  },
  {
    question: "Do you assist with Cheque Bounce cases?",
    answer: "Yes, Section 138 NI Act cases are a significant part of our practice. We represent clients in Magistrate courts across Rajasthan, ensuring timely filing of complaints and effective defense."
  },
  {
    question: "Do you provide online legal consultation?",
    answer: "Yes, we offer video consultations for clients who cannot visit our offices physically. This is particularly useful for our NRI clients and those based in remote districts of Rajasthan."
  },
  {
    question: "How do you handle illegal possession of property?",
    answer: "We file civil suits for possession and also initiate criminal proceedings for trespassing. In cases of land mafia involvement, we approach the High Court for police protection and fair investigation."
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
      "name": "Rajasthan",
      "item": "https://amalegalsolutions.com/locations/rajasthan"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Rajasthan",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Rajasthan specializing in High Court Litigation (Jaipur/Jodhpur), Mining Laws, Hospitality, and RERA.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Jaipur" },
    { "@type": "City", "name": "Jodhpur" },
    { "@type": "City", "name": "Udaipur" },
    { "@type": "City", "name": "Kota" },
    { "@type": "City", "name": "Bhiwadi" },
    { "@type": "State", "name": "Rajasthan" }
  ],
  "url": "https://amalegalsolutions.com/locations/rajasthan",
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
    "reviewCount": "350"
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
  "name": "Legal Services Rajasthan",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Top-tier legal services in Rajasthan by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "350"
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
        "name": "Vikram Rathore"
      },
      "reviewBody": "Excellent handling of our heritage hotel's licensing matters in Jaipur. The team knows the local tourism laws inside out."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Agarwal"
      },
      "reviewBody": "We had a mining lease dispute in Kishangarh. AMA Legal represented us in the High Court and got the stay vacated. Highly recommended."
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
      "reviewBody": "My flat in Bhiwadi was delayed by the builder. They filed a case in RERA Rajasthan and helped me recover my money."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Sharma"
      },
      "reviewBody": "Best lawyers for divorce cases in Jaipur. They were very supportive and handled the mediation process professionally."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Rajasthan | High Court Jaipur & Jodhpur | RERA & Mining Law",
  description:
    "Expert lawyers in Rajasthan. Specialized in High Court Litigation (Jaipur/Jodhpur), Mining & Industrial Law, RERA, and Heritage Property matters. Trusted Legal Advice.",
  keywords: [
    "Lawyers in Rajasthan",
    "Advocates in Jaipur",
    "Rajasthan High Court Lawyers",
    "Mining Lawyers Rajasthan",
    "Hotel Lawyers Jaipur",
    "RERA Rajasthan Complaint",
    "Divorce Lawyers Jodhpur",
    "Property Lawyers Udaipur",
    "Criminal Lawyers Rajasthan",
    "Cheque Bounce Lawyer Jaipur"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/rajasthan',
  },
  openGraph: {
    title: "Lawyers in Rajasthan | High Court & Corporate Legal Services",
    description: "Expert legal representation in Rajasthan. Mining, Hospitality, Civil, Criminal, and RERA services by AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/locations/rajasthan",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Rajasthan",
      },
    ],
  },
};

export default function RajasthanLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-landscape", title: "Rajasthan's Legal Landscape" },
    { id: "why-need-expert", title: "Why You Need an Expert" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "tourism-law", title: "Tourism & Heritage" },
    { id: "mining-law", title: "Mining & Environment" },
    { id: "real-estate", title: "Property & RERA" },
    { id: "litigation", title: "High Court Litigation" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "industrial-law", title: "Industrial & Corporate" },
    { id: "courts-guide", title: "Courts in Rajasthan Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Rajasthan", href: "/locations/rajasthan" },
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
              Top-Tier Legal Services in <span className="text-[#D2A02A]">Rajasthan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the High Court Benches in Jaipur & Jodhpur to the industrial hubs of Bhiwadi. We serve the Land of Kings with regal dedication.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in Rajasthan</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Rajasthan, India's largest state, is a unique tapestry of heritage, industry, and tourism. From the bustling capital of <strong>Jaipur</strong> to the judicial seat of <strong>Jodhpur</strong>, and the industrial corridors of <strong>Bhiwadi and Neemrana</strong>, the state offers immense opportunities but also presents complex legal challenges.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     The legal landscape here is shaped by specific state laws regarding heritage conservation, mining regulations, and land tenancy. Whether you are a hotelier converting a havoc into a heritage property, a mining company navigating environmental clearances, or an individual fighting a family dispute, you need legal counsel that understands the local terrain.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> is a full-service law firm dedicated to serving the people and businesses of Rajasthan. We have a robust presence in both the <strong>Jaipur Bench</strong> and the <strong>Jodhpur Principal Seat</strong> of the Rajasthan High Court, ensuring that your voice is heard at the highest levels of the state judiciary.
                  </p>
                </section>

                {/* Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Rajasthan's Unique Legal Ecosystem</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Unlike other states, Rajasthan's legal administration is bifurcated, and its economy drives specific types of litigation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Judicial Bifurcation</h4>
                        <p className="text-gray-700 mb-2">
                            The <strong>Rajasthan High Court</strong> operates from two locations. The Principal Seat is in Jodhpur, covering the western and southern districts. The Circuit Bench is in Jaipur, covering the eastern and northern districts. We operate seamlessly across both.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Tourism & Heritage</h4>
                        <p className="text-gray-700 mb-2">
                            With cities like Udaipur and Jaisalmer, tourism law is critical. We handle licensing, land conversion, and heritage conservation disputes for hotels and resorts.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Mining & Minerals</h4>
                        <p className="text-gray-700 mb-2">
                            Rajasthan is rich in marble, granite, and sandstone. Legal issues involve mining leases, royalty disputes, and stringent NGT (National Green Tribunal) compliance.
                        </p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Industrial Corridors</h4>
                        <p className="text-gray-700 mb-2">
                            Areas like Bhiwadi, Neemrana (Japanese Zone), and Kota are industrial hubs requiring expertise in labour laws, factory compliance, and corporate contracts.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-need-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Local Expertise Matters</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Rajasthan has its own set of peculiar laws such as the <strong>Rajasthan Tenancy Act</strong> and the <strong>Rajasthan Land Revenue Act</strong>. The concept of 'Khatedari' rights is central to land ownership here. A lawyer without deep knowledge of these local statutes can jeopardize a property case.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Furthermore, navigating the bureaucracy of the JDA (Jaipur Development Authority) or RIICO (Rajasthan State Industrial Development and Investment Corporation) requires not just legal knowledge but also practical experience with these bodies.
                  </p>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Our multi-disciplinary team provides specialized legal services tailored to the economic and social fabric of Rajasthan.
                  </p>
                </section>

                {/* Section: Tourism Law */}
                <section id="tourism-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Tourism, Hospitality & Heritage Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Rajasthan is the hospitality capital of India. We act for hotel chains, boutique resorts, and heritage property owners.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Land Conversion (90A):</strong> Assisting in the complex process of converting agricultural land for commercial/hotel use under Section 90A of the Land Revenue Act.</li>
                     <li><strong>Heritage Status:</strong> Liaising with the Department of Tourism to obtain 'Heritage Hotel' classification and associated tax benefits.</li>
                     <li><strong>Licensing:</strong> Obtaining Fire NOCs, FSSAI licenses, and Bar Licenses for hotels and restaurants.</li>
                     <li><strong>Dispute Resolution:</strong> Handling disputes with travel aggregators, vendors, and property title issues for ancestral havelis.</li>
                   </ul>
                </section>

                {/* Section: Mining Law */}
                <section id="mining-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Mining & Environmental Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     For clients in the stone and mineral sector (Kishangarh, Makrana, Kota), we provide comprehensive legal support.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Lease Management:</strong> Drafting and vetting mining lease agreements and handling renewals with the Department of Mines & Geology.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>NGT Litigation:</strong> Representing stone crushers and mines in the National Green Tribunal against closure notices for environmental violations.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Royalty Disputes:</strong> Litigation regarding assessment and payment of royalty and dead rent.</div>
                      <div className="border p-4 rounded-lg hover:shadow-md"><strong>Illegal Mining:</strong> Defense in criminal cases registered under the MMDR Act.</div>
                   </div>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Property & RERA Rajasthan</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     The real estate market in Jaipur, Bhiwadi, and Neemrana is booming, leading to a surge in disputes.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>RERA Complaints:</strong> Filing complaints before the Rajasthan RERA (RajRERA) for delayed possession, refund, and interest. We have a high success rate in recovering money from defaulting builders in Bhiwadi.</li>
                     <li><strong>JDA/UIT Matters:</strong> Handling regularization of colonies, patta disputes, and lease deed executions with Jaipur Development Authority and Urban Improvement Trusts.</li>
                     <li><strong>Civil Litigation:</strong> Suits for partition, specific performance of agreements, and cancellation of fraudulent sale deeds.</li>
                   </ul>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">High Court Litigation (Jaipur & Jodhpur)</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    We practice effectively at both benches of the Rajasthan High Court.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Writ Petitions:</strong> Challenging arbitrary government orders, land acquisition notifications, and service matters (RPSC exams, transfers).</li>
                      <li>• <strong>Criminal Appeals:</strong> Filing appeals against convictions in murder, NDPS, and serious offenses.</li>
                      <li>• <strong>Bail Matters:</strong> High Court bail applications (S. 439 CrPC) when lower courts reject bail.</li>
                      <li>• <strong>Stay Orders:</strong> Obtaining stay on demolitions, auctions, and adverse administrative orders.</li>
                  </ul>
                </section>

                {/* Section: Industrial Law */}
                <section id="industrial-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate & Industrial Law (RIICO Areas)</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We serve industries in RIICO industrial areas like Sitapura, Vishwakarma, Bhiwadi, and Neemrana.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>RIICO Disputes:</strong> Handling matters related to allotment, cancellation, and transfer of industrial plots.</li>
                     <li><strong>Labour Compliance:</strong> Managing trade union disputes and compliance with the Factories Act.</li>
                     <li><strong>Commercial Contracts:</strong> Drafting MSAs, NDAs, and supply agreements for manufacturing units.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We provide aggressive defense representation.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cheque Bounce:</strong> Defending and prosecuting S. 138 NI Act cases across all districts.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cyber Crime:</strong> Handling cases of online fraud and data theft in Jaipur's Cyber Cell.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Bail:</strong> 24x7 support for securing anticipatory and regular bail.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>NDPS:</strong> Specialized defense for narcotics cases, common in diverse districts.</div>
                   </div>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle sensitive family matters with discretion and expertise.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Divorce:</strong> Handling mutual consent and contested divorce in Family Courts of Jaipur and Jodhpur.</li>
                     <li><strong>498A Defense:</strong> Protecting innocent family members from false dowry harassment cases.</li>
                     <li><strong>Maintenance & Custody:</strong> Ensuring fair financial support and child custody arrangements.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Rajasthan</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the bifurcated judicial system can be confusing. Here is a guide:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Rajasthan High Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>Principal Seat (Jodhpur):</strong> For districts like Jodhpur, Udaipur, Bikaner, Jaisalmer.<br/>
                          <strong>Bench (Jaipur):</strong> For districts like Jaipur, Kota, Alwar, Ajmer.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">RE</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">RERA Rajasthan (Jaipur)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located in Jaipur. Handles real estate complaints for the entire state. Hearings are also conducted via video conferencing.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Every district has a District & Sessions Judge.
                          <br/><strong>Jaipur Metro:</strong> Bani Park.
                          <br/><strong>Jodhpur Metro:</strong> High Court Road.
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
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Dual Presence</h4>
                        <p className="text-xs text-gray-600 mt-2">With teams in both Jaipur and Jodhpur, we cover the entire High Court jurisdiction seamlessly.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-900">Sector Expert</h4>
                        <p className="text-xs text-gray-600 mt-2">Specialized knowledge in Mining, Heritage, and Industrial laws relevant to Rajasthan.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💬</div>
                        <h4 className="font-bold text-gray-900">Transparent</h4>
                        <p className="text-xs text-gray-600 mt-2">Clear fee structures and regular updates. We value your trust.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Accessibility</h4>
                        <p className="text-xs text-gray-600 mt-2">Easy access to senior advocates for consultation and strategy.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Local Roots</h3>
                      <p className="text-gray-600 relative z-10">We understand the culture and the courts of Rajasthan, giving us a strategic edge.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Cost Effective</h3>
                      <p className="text-gray-600 relative z-10">Top-tier legal services at competitive rates, offering high value for money.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Holistic Service</h3>
                      <p className="text-gray-600 relative z-10">From district courts to the Supreme Court, we handle the entire lifecycle of a case.</p>
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
                        "We had a major issue with obtaining the heritage license for our property in Udaipur. AMA Legal guided us through the tourism department regulations, and we got our license in record time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vikram Rathore</p>
                          <p className="text-xs text-gray-500">Hotelier, Udaipur</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My mining lease in Kishangarh was cancelled arbitrarily. The team at AMA Legal filed a Writ Petition in Jaipur High Court and got a stay order immediately. Can't thank them enough."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rajesh Agarwal</p>
                          <p className="text-xs text-gray-500">Mine Owner, Kishangarh</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "I invested in a flat in Bhiwadi, but the builder vanished. AMA Legal filed a complaint in RERA Rajasthan and helped me get a recovery certificate."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sneha Gupta</p>
                          <p className="text-xs text-gray-500">Investor, Delhi</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Handling my divorce was tough, but the lawyers at AMA Legal in Jaipur were very empathetic. They handled the mediation well and ensured a smooth process."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amit Sharma</p>
                          <p className="text-xs text-gray-500">IT Professional, Jaipur</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Rajasthan's trusted legal experts today.
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
                    Connect with our senior advocates in Rajasthan today regarding your case.
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
                     "The team at AMA Legal filed a Writ Petition in Jaipur High Court and got a stay order immediately. Can't thank them enough."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">R</div>
                     <span className="ml-3 font-bold text-sm">Rajesh Agarwal, Owner</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
