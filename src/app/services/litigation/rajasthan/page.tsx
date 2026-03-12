import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the Rajasthan High Court located?",
    answer: "The **Rajasthan High Court** has its **Principal Seat in Jodhpur** and a **Bench in Jaipur**. The Jodhpur seat handles cases from western and southern Rajasthan, while the Jaipur Bench has jurisdiction over eastern and northern districts. We have dedicated teams practicing at both locations to ensure seamless representation for our clients."
  },
  {
    question: "Do you handle heritage property disputes in Rajasthan?",
    answer: "Yes, Rajasthan is home to numerous heritage properties, havelis, and forts. Disputes often arise regarding partition, succession, and conversion of these properties into hotels. We specialize in **Heritage Property Litigation**, assisting royal families and private owners in resolving title disputes and navigating the complex regulations of the Archaeological Survey of India (ASI) and state heritage laws."
  },
  {
    question: "What are the laws regarding mining leases in Rajasthan?",
    answer: "Rajasthan is a mineral-rich state. The **Rajasthan Minor Mineral Concession Rules** govern mining leases. Litigation often involves cancellation of leases, environmental clearances, and royalty disputes. We represent mine owners and quarry operators in the High Court and before the Mines Tribunal regarding lease renewals and penalties."
  },
  {
    question: "How do I resolve a dispute in the tourism and hotel industry?",
    answer: "The tourism sector is vital to Rajasthan's economy. We handle disputes related to hotel management contracts, land conversion (agricultural to commercial), and licensing issues with the Rajasthan Tourism Department. We also represent hotels in consumer court cases and vendor disputes."
  },
  {
    question: "Can I get bail in an NDPS case in Rajasthan?",
    answer: "Rajasthan, being a border state, sees significant litigation under the **NDPS Act** (opium/poppy husk cases). Bail is stringent under Section 37 for commercial quantities. Our criminal defense team has extensive experience in arguing bail applications in the High Court, challenging procedural lapses in search and seizure operations."
  },
  {
    question: "What is the procedure for divorce in Rajasthan?",
    answer: "Divorce petitions are filed in the **Family Courts** located in major cities like Jaipur, Jodhpur, Udaipur, and Kota. In districts without Family Courts, they are heard by the District Judge. We handle mutual consent divorce, contested divorce, and complex alimony settlements, often involving significant family assets."
  },
  {
    question: "Do you handle cases related to renewable energy (Solar/Wind) projects?",
    answer: "Yes, Rajasthan is a hub for solar and wind energy. Land acquisition disputes and regulatory issues with the Rajasthan Renewable Energy Corporation are common. We assist energy companies in litigation regarding land title defects, right of way, and power purchase agreements (PPAs)."
  },
  {
    question: "How do I challenge a government tender in Rajasthan?",
    answer: "Government tenders for infrastructure and procurement can be challenged in the High Court under Article 226 if there is arbitrariness or violation of tender conditions (RTPP Act). We file Writ Petitions to stay illegal tender awards and protect the rights of eligible bidders."
  },
  {
    question: "What are the rights of Khatedars in agricultural land?",
    answer: "A **Khatedar** has transferable rights in agricultural land under the **Rajasthan Tenancy Act, 1955**. Disputes often arise regarding Khatedari rights, mutation, and illegal transfers. We handle revenue suits before the SDM, Revenue Appellate Authority (RAA), and the Board of Revenue in Ajmer."
  },
  {
    question: "Do you assist with RERA cases in Jaipur?",
    answer: "Yes, we represent homebuyers and developers before the **Rajasthan Real Estate Regulatory Authority (RERA)** in Jaipur. Common issues include delay in possession, refund of booking amount, and project registration defaults."
  },
  {
    question: "What is the role of the Board of Revenue in Ajmer?",
    answer: "The **Board of Revenue** in Ajmer is the highest court for revenue (agricultural land) matters in the state. Appeals from the Revenue Appellate Authority lie here. We have a specialized practice in the Board of Revenue for complex land title and partition suits."
  },
  {
    question: "Can I file a PIL for water scarcity issues?",
    answer: "Yes, Public Interest Litigations (PILs) regarding water rights, illegal borewells, and pollution of water bodies are frequently heard by the High Court. We assist NGOs and citizens in drafting and arguing PILs for environmental and social causes."
  },
  {
    question: "How do I enforce an arbitration award in Rajasthan?",
    answer: "Arbitration awards are enforced by filing an execution petition in the Commercial Court (in Jaipur/Jodhpur) or the District Court. We assist in attaching assets of the judgment debtor to recover the awarded amount."
  },
  {
    question: "Do you handle service matters for Rajasthan government employees?",
    answer: "Yes, we represent state government employees in the **Rajasthan Civil Services Appellate Tribunal (RAT)** and the High Court regarding service regularization, pay scales, transfers, and disciplinary inquiries."
  },
  {
    question: "What are the laws regarding conversion of land (90A)?",
    answer: "Section 90A of the Rajasthan Land Revenue Act deals with the conversion of agricultural land for non-agricultural purposes. Disputes often arise when conversion applications are rejected or when land is used without conversion. We assist in challenging such orders and regularizing land use."
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
      "name": "Litigation Services",
      "item": "https://www.amalegalsolutions.com/services/litigation"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Rajasthan",
      "item": "https://www.amalegalsolutions.com/services/litigation/rajasthan"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Rajasthan: High Court Lawyers in Jaipur & Jodhpur",
  "description": "Expert litigation services in Rajasthan. Representing clients in Rajasthan High Court (Jodhpur & Jaipur), Board of Revenue Ajmer, and District Courts.",
  "image": "https://www.amalegalsolutions.com/services/litigation-rajasthan.png", // Placeholder
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
  "datePublished": "2024-12-02",
  "dateModified": "2024-12-02"
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
  "name": "Litigation Services Rajasthan",
  "image": "https://www.amalegalsolutions.com/services/litigation-rajasthan.png",
  "description": "Top-tier litigation services for Rajasthan High Court and District Courts.",
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
        "name": "Vikram Singh Rathore"
      },
      "reviewBody": "AMA Legal Solutions handled our heritage property partition suit in Jodhpur with great expertise. Their understanding of royal family disputes is exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anil Agarwal"
      },
      "reviewBody": "We faced a serious issue with our mining lease cancellation. Their team in Jaipur obtained a stay order from the High Court and saved our business."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Rajasthan | High Court Lawyers Jaipur & Jodhpur",
  description:
    "Expert litigation lawyers in Rajasthan. We represent clients in Rajasthan High Court (Jodhpur & Jaipur), Board of Revenue, and District Courts. Heritage, Mining, Civil & Criminal cases.",
  keywords: [
    "litigation services rajasthan",
    "rajasthan high court lawyer",
    "lawyer in jaipur",
    "lawyer in jodhpur",
    "heritage property lawyer rajasthan",
    "mining lawyer rajasthan",
    "revenue lawyer ajmer",
    "divorce lawyer jaipur",
    "criminal lawyer rajasthan",
    "rera lawyer jaipur"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation/rajasthan',
  },
  openGraph: {
    title: "Litigation Services in Rajasthan | High Court Lawyers Jaipur & Jodhpur",
    description: "Expert litigation services in Rajasthan. Representing clients in Rajasthan High Court and District Courts.",
    url: "https://www.amalegalsolutions.com/services/litigation/rajasthan",
    type: "website",
    images: [
      {
        url: "/services/litigation-rajasthan.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Rajasthan",
      },
    ],
  },
};

export default function RajasthanLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "high-court", title: "Rajasthan High Court" },
    { id: "district-courts", title: "District Courts & Tribunals" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "rajasthan-laws", title: "Rajasthan Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Rajasthan", href: "/services/litigation/rajasthan" },
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
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Trusted <span className="text-[#D2A02A]">Litigation Services</span> in Rajasthan
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation at the Rajasthan High Court (Jodhpur & Jaipur). Specializing in Heritage Property, Mining Laws, and Commercial Litigation.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Rajasthan Lawyer
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Solutions for the Royal State</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan, with its rich heritage and booming tourism and mining industries, presents a unique legal landscape. The <strong>Rajasthan High Court</strong>, with its Principal Seat in Jodhpur and Bench in Jaipur, oversees the judicial administration. Litigation here often involves complex issues related to ancestral property, royal heritage disputes, mining regulations, and land revenue matters.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From the bustling commercial hubs of Jaipur and Kota to the mineral-rich belts of Udaipur and Bhilwara, businesses and individuals face diverse legal challenges. The state's specific laws regarding tenancy and land conversion add another layer of complexity.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we combine deep local knowledge with high-quality legal expertise. Our team operates effectively across both High Court benches and key district courts, ensuring that your rights are protected whether you are in the Pink City or the Blue City.
                  </p>
                </section>

                {/* High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at Rajasthan High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have established practices at both seats of the High Court.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Principal Seat: Jodhpur</h3>
                      <p className="text-gray-700 mb-4">
                        Jurisdiction over Western & Southern Rajasthan (Jodhpur, Udaipur, Bikaner, etc.).
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Civil & Criminal Appeals:</strong> Major appellate work.</li>
                        <li><strong>Writ Petitions:</strong> Against state government orders.</li>
                        <li><strong>Mining Matters:</strong> High volume of mining litigation.</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-8 rounded-xl border-l-4 border-pink-500">
                      <h3 className="text-2xl font-bold text-pink-900 mb-4">Bench: Jaipur</h3>
                      <p className="text-gray-700 mb-4">
                        Jurisdiction over Eastern & Northern Rajasthan (Jaipur, Kota, Alwar, Ajmer, etc.).
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Commercial Writs:</strong> Corporate and tax disputes.</li>
                        <li><strong>Service Matters:</strong> Government employee disputes.</li>
                        <li><strong>PILs:</strong> Urban planning and environmental issues.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* District Courts */}
                <section id="district-courts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">District Courts & Tribunals</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our reach extends to key judicial forums across the state.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Jaipur District Court</h3>
                      <p className="text-gray-700 mb-3">
                        The capital's court handles heavy commercial and civil litigation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Commercial disputes.</li>
                        <li>Family court matters.</li>
                        <li>Cyber crime cases.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Board of Revenue, Ajmer</h3>
                      <p className="text-gray-700 mb-3">
                        The apex body for agricultural land disputes.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Khatedari rights disputes.</li>
                        <li>Land partition appeals.</li>
                        <li>Revenue revisions.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Udaipur District Court</h3>
                      <p className="text-gray-700 mb-3">
                        Key for mining and tourism related cases.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Mining lease disputes.</li>
                        <li>Hotel industry litigation.</li>
                        <li>Tribal land issues.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kota District Court</h3>
                      <p className="text-gray-700 mb-3">
                        Serving the education and industrial hub.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Consumer disputes.</li>
                        <li>Student/Coaching institute disputes.</li>
                        <li>Industrial labour cases.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Rajasthan</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise is tailored to the state's unique economic and social fabric.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Heritage & Property Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Preserving legacies and resolving disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Succession:</strong> Disputes in royal and business families.</li>
                        <li><strong>Partition:</strong> Division of havelis and ancestral estates.</li>
                        <li><strong>Trusts:</strong> Management disputes of religious and charitable trusts.</li>
                        <li><strong>ASI Matters:</strong> Issues with Archaeological Survey of India regulations.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Mining & Environment</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Supporting the backbone of Rajasthan's industry.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Lease Disputes:</strong> Challenges to cancellation of mining leases.</li>
                        <li><strong>Royalty:</strong> Disputes regarding assessment of royalty.</li>
                        <li><strong>Environmental Clearance:</strong> Compliance and litigation before NGT.</li>
                        <li><strong>Illegal Mining:</strong> Defense in penalties and criminal cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Tourism & Hospitality</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Legal support for hotels and travel businesses.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Land Conversion:</strong> Section 90A proceedings for hotel land.</li>
                        <li><strong>Licensing:</strong> Issues with bar licenses and fire safety NOCs.</li>
                        <li><strong>Contracts:</strong> Management contracts between owners and hotel chains.</li>
                        <li><strong>Consumer:</strong> Defending hotels in service deficiency cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your liberty in serious matters.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>NDPS:</strong> Defense in opium/poppy husk cases.</li>
                        <li><strong>Bail:</strong> High Court bail applications.</li>
                        <li><strong>White Collar:</strong> Fraud and corruption cases.</li>
                        <li><strong>Cyber Crime:</strong> Defense in online fraud cases.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Rajasthan Laws */}
                <section id="rajasthan-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Rajasthan Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have deep knowledge of the local statutes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Rajasthan Tenancy Act, 1955</h4>
                      <p className="text-sm text-gray-600">
                        The primary law governing agricultural land. Defines Khatedari rights and restrictions on transfer of land belonging to SC/ST.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Rajasthan Land Revenue Act, 1956</h4>
                      <p className="text-sm text-gray-600">
                        Deals with land records, mutation, and conversion of land use (Section 90A). Crucial for real estate and industrial projects.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Rajasthan Rent Control Act, 2001</h4>
                      <p className="text-sm text-gray-600">
                        Governs tenancy in urban areas. Provides for Rent Tribunals for speedy eviction and rent revision.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Rajasthan Minor Mineral Concession Rules, 2017</h4>
                      <p className="text-sm text-gray-600">
                        Regulates the grant and operation of mining leases for minor minerals like sandstone, marble, and granite.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Rajasthan Transparency in Public Procurement Act, 2012</h4>
                      <p className="text-sm text-gray-600">
                        Ensures transparency in government tenders. Key for challenging arbitrary disqualification of bidders.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Our Approach</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We guide you through the legal maze with a structured approach.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Case Analysis</h3>
                      <p className="text-gray-700">
                        We review documents (Jamabandis, lease deeds, contracts) to assess the legal position.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Forum Selection</h3>
                      <p className="text-gray-700">
                        Deciding whether to file in Civil Court, Revenue Court, or directly in the High Court (Jodhpur or Jaipur).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Strategic Filing</h3>
                      <p className="text-gray-700">
                        Drafting comprehensive petitions and filing them with urgency to seek interim relief (stay orders).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Effective Representation</h3>
                      <p className="text-gray-700">
                        Our senior advocates argue your case with precision and authority in court.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Outcome & Execution</h3>
                      <p className="text-gray-700">
                        Securing a favorable judgment and ensuring it is enforced on the ground.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Your trusted legal partners in Rajasthan.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Dual Bench Presence</h3>
                      <p className="text-gray-600">Seamless representation in both Jodhpur and Jaipur High Court benches.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⛏️</div>
                      <h3 className="font-bold text-xl mb-2">Mining & Land Experts</h3>
                      <p className="text-gray-600">Specialized knowledge of Rajasthan's mining and revenue laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏰</div>
                      <h3 className="font-bold text-xl mb-2">Heritage Matters</h3>
                      <p className="text-gray-600">Experienced in handling complex heritage and royal family disputes.</p>
                    </div>
                  </div>
                </section>

                {/* Client Success Stories */}
                <section id="client-success" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our family had a long-standing dispute over a haveli in Shekhawati. AMA Legal Solutions helped us negotiate a settlement and clear the title, allowing us to convert it into a hotel."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ravi Singh Shekhawat</p>
                          <p className="text-sm text-gray-500">Hotelier, Mandawa</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was wrongly implicated in an NDPS case. The team in Jodhpur fought tirelessly for my bail and eventually got the case quashed due to lack of evidence. They gave me my life back."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Bishnoi</p>
                          <p className="text-sm text-gray-500">Farmer, Barmer</p>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Win Your Legal Battle?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Rajasthan fighting for your cause.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Schedule a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Experienced • Results-Oriented
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Rajasthan Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Rajasthan High Court (Jodhpur & Jaipur).
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
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> All Litigation Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Property Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/criminal-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Criminal Defense
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Family Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Litigation Services" servicePath="litigation" />
          </div>
        </div>
      </div>
    </>
  );
}
