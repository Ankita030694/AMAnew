import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you handle NRI legal matters in Punjab?",
    answer: "Yes, we specialize in NRI legal services. Punjab has a large diaspora, and we assist NRIs with property disputes, illegal possession of ancestral land, matrimonial issues, and power of attorney matters without requiring their frequent travel to India. We handle the entire process from filing to execution of decrees."
  },
  {
    question: "Do you practice in the Punjab & Haryana High Court?",
    answer: "Yes, our team is based in Chandigarh and practices regularly at the Punjab & Haryana High Court. We handle Writ Petitions, Criminal Appeals, Bail matters, and Service matters for clients across Punjab. We also facilitate filing of Caveats and Review Petitions."
  },
  {
    question: "Can you help with property disputes in Ludhiana or Jalandhar?",
    answer: "Absolutely. We handle civil suits for property partition, declaration of title, and eviction in District Courts of Ludhiana, Jalandhar, Amritsar, and other major cities. We also handle RERA cases against builders for delayed possession."
  },
  {
    question: "How do I file a RERA complaint in Punjab?",
    answer: "The Real Estate Regulatory Authority (RERA) Punjab is located in Chandigarh. If a builder in Mohali, Zirakpur, or Ludhiana has delayed possession or violated terms, we can help you file a complaint in Form 'M' or Form 'N' for refund with interest or immediate possession."
  },
  {
    question: "Do you assist with criminal defense in Punjab?",
    answer: "Yes, we provide robust criminal defense for cases involving FIR quashing (Section 482), bail (anticipatory and regular), NDPS Act cases, and white-collar crimes in Sessions Courts and the High Court. We also handle appeals against conviction."
  },
  {
    question: "What legal services do you offer for industries in Ludhiana?",
    answer: "For the industrial hub of Ludhiana, we offer corporate legal services including contract drafting, MSME disputes, cheque bounce (Section 138 NI Act) cases, trademark registration/infringement suits, and labour law compliance litigation."
  },
  {
    question: "Can you help with a contested divorce in Punjab?",
    answer: "Yes, we handle both mutual consent and contested divorce cases. We also assist with related matters like child custody, maintenance, and domestic violence complaints (498A) in Family Courts across all districts."
  },
  {
    question: "Do you handle Cheque Bounce cases?",
    answer: "Yes, Section 138 NI Act cases are a core area of our practice. We represent businesses and individuals in cheque bounce matters across all districts of Punjab, including filing of complaints and defense evidence."
  },
  {
    question: "How can I check my case status in the High Court?",
    answer: "You can check it on the official Punjab & Haryana High Court website. However, as our client, we provide you with regular real-time updates on hearing dates, orders, and daily proceedings so you remain informed without hassle."
  },
  {
    question: "Do you provide consultation in Punjabi?",
    answer: "Yes, our advocates are fluent in Punjabi, Hindi, and English, ensuring that you can communicate your legal issues comfortably in your native language."
  },
  {
    question: "What action can be taken against travel agents for immigration fraud?",
    answer: "We file criminal complaints under Section 420 IPC and the Punjab Travel Professionals Regulation Act. We also file consumer complaints for deficiency in service to recover the money paid to fraudulent agents."
  },
  {
    question: "How do you handle agricultural land disputes?",
    answer: "Agricultural land disputes often involve revenue courts. We represent clients before the Tehsildar, SDM, Collector, and Financial Commissioner for partition (Takseem), mutation (Intqal), and correction of revenue records (Khasra Girdawari)."
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
      "name": "Punjab",
      "item": "https://amalegalsolutions.com/locations/punjab"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Punjab",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Leading law firm in Punjab specializing in NRI Legal Services, High Court Litigation, RERA, and Industrial Disputes.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Ludhiana" },
    { "@type": "City", "name": "Jalandhar" },
    { "@type": "City", "name": "Amritsar" },
    { "@type": "City", "name": "Mohali" },
    { "@type": "City", "name": "Chandigarh" },
    { "@type": "State", "name": "Punjab" }
  ],
  "url": "https://amalegalsolutions.com/locations/punjab",
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
    "reviewCount": "380"
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
  "name": "Legal Services Punjab",
  "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Top-tier legal services in Punjab by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "380"
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
        "name": "Gurmeet Singh"
      },
      "reviewBody": "I am an NRI living in Canada. My ancestral land near Jalandhar was illegally occupied. AMA Legal Solutions fought my case and got the possession back. Very trustworthy."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajinder Kaur"
      },
      "reviewBody": "Best lawyers for family court matters in Ludhiana. They handled my divorce and maintenance case with great dignity and efficiency."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harnish Malhotra"
      },
      "reviewBody": "My builder in Mohali delayed the project for 3 years. AMA Legal team filed a case in RERA Punjab and got me my refund with interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sukhdev Brar"
      },
      "reviewBody": "Excellent service for criminal appeals in High Court. Their knowledge of law is profound."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Punjab | NRI Legal Services | High Court Chandigarh",
  description:
    "Expert lawyers in Punjab. Specialized in NRI Property Disputes, High Court Litigation, RERA Mohali, and Industrial Law in Ludhiana. Trusted Legal Advice.",
  keywords: [
    "Lawyers in Punjab",
    "NRI Lawyers Punjab",
    "Advocates in Ludhiana",
    "Punjab and Haryana High Court Lawyers",
    "Property Lawyers Jalandhar",
    "Divorce Lawyers Amritsar",
    "RERA Punjab Mohali",
    "Criminal Lawyers Punjab",
    "Cheque Bounce Lawyer Punjab",
    "Immigration Fraud Lawyer Punjab"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/punjab',
  },
  openGraph: {
    title: "Lawyers in Punjab | NRI & High Court Legal Services",
    description: "Expert legal representation in Punjab. NRI Services, Civil, Criminal, and RERA services by AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/locations/punjab",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Legal Services Punjab",
      },
    ],
  },
};

export default function PunjabLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "nri-services", title: "NRI Legal Services" },
    { id: "legal-landscape", title: "Punjab's Legal Landscape" },
    { id: "why-need-expert", title: "Why You Need an Expert" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "real-estate", title: "Property & RERA" },
    { id: "agriculture", title: "Agricultural Land Law" },
    { id: "immigration", title: "Immigration & Fraud" },
    { id: "litigation", title: "High Court Litigation" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "corporate-law", title: "Corporate & Industrial" },
    { id: "courts-guide", title: "Courts in Punjab Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Punjab", href: "/locations/punjab" },
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
              Top-Tier Legal Services in <span className="text-[#D2A02A]">Punjab</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From NRI Property Disputes in Jalandhar to High Court Litigation in Chandigarh. We protect your rights with dedication and integrity.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in Punjab</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Punjab, the land of five rivers, is a state of immense economic vitality, agricultural richness, and deep global connections. From the bustling NRI hubs of <strong>Doaba (Jalandhar, Hoshiarpur)</strong> to the industrial powerhouses of <strong>Ludhiana</strong> and the rapidly expanding urban centers of <strong>Mohali and Zirakpur</strong>, the legal needs of Punjab are as diverse as its people. The region is witnessing a surge in real estate development, complex family settlements, and international trade, all of which require sophisticated legal oversight.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     However, navigating the legal system in Punjab can be challenging due to a mix of colonial-era land laws, specific state amendments, and the sheer volume of cases in the judiciary. Whether it is an ancestral land dispute in a village revenue court or a high-stakes corporate writ in the High Court, the margin for error is slim. This is where professional legal expertise becomes indispensable.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> provides world-class legal services in this dynamic environment. We understand the specific challenges faced by the people of Punjab, especially the Non-Resident Indian (NRI) community, businesses, and landowners. Our approach combines traditional legal wisdom with modern efficiency, ensuring that our clients receive representation that is not only legally sound but also practically effective.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    With our base in Chandigarh, we are perfectly positioned to represent you in the <strong>Punjab & Haryana High Court</strong> while maintaining a strong presence in local District Courts across the state, including Amritsar, Jalandhar, Ludhiana, Patiala, and Bathinda. We believe in proactive litigation management—anticipating moves, securing interim reliefs, and pushing for timely disposal of cases.
                  </p>
                </section>

                {/* NRI Services - Specific to Punjab */}
                <section id="nri-services" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Specialized NRI Legal Cell: Your Bridge to Justice</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    A significant portion of Punjab's population lives abroad, with large communities in Canada, UK, USA, Australia, and Europe. While they contribute significantly to the state's economy, they often face unique legal challenges back home. Illegal possession of property, fraudulent transfer of titles, and matrimonial disputes are rampant. We understand that managing these legal issues remotely is nearly impossible and extremely stressful.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Our Specialized NRI Legal Cell is designed to bridge this geographical gap. We act as your local guardians, ensuring your rights are protected without you needing to pause your life abroad.
                  </p>
                  <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Comprehensive NRI Services</h4>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li><strong>Property Protection & Search:</strong> We conduct periodic physical inspections of your properties to prevent illegal encroachment. We also perform title searches to ensure no fraudulent sale deeds have been executed in your absence.</li>
                      <li><strong>Illegal Possession (Kabza):</strong> We file immediate suits for possession under the Specific Relief Act and criminal complaints for trespassing. We also represent you in summary proceedings for eviction of tenants under the Punjab Rent Act, crafted specifically to aid NRIs who wish to return.</li>
                      <li><strong>Power of Attorney Management:</strong> Drafting and executing General/Special Power of Attorneys (GPA/SPA) that are legally compliant with the latest Supreme Court judgments, ensuring they are not misused.</li>
                      <li><strong>Matrimonial & Custody Issues:</strong> Handling abandoned bride cases, ex-parte divorce decrees, and cross-border child custody battles (Hague Convention issues). We assist in declaring foreign court judgments valid in India.</li>
                      <li><strong>Investment Disputes:</strong> Recovering money stuck in stalled real estate projects in Mohali, Zirakpur, or New Chandigarh. We represent you in RERA and Consumer Forums.</li>
                    </ul>
                  </div>
                </section>

                {/* Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Punjab's Key Legal Hubs & Our Reach</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Legal practice in Punjab is not centralized; it is distributed across key economic and judicial hubs. Understanding the local nuances of each jurisdiction is vital for successful litigation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Chandigarh (The Judicial Capital)</h4>
                        <p className="text-gray-700 mb-2">
                            Chandigarh is the seat of the <strong>Punjab & Haryana High Court</strong>, which has jurisdiction over the entire state. It is also home to critical tribunals like the <strong>State Consumer Dispute Redressal Commission</strong>, <strong>Debts Recovery Tribunal (DRT)</strong>, and the <strong>NCLT Chandigarh Bench</strong>.
                        </p>
                        <p className="text-sm text-gray-500">Key Focus: Writs, Appeals, PILs, Corporate Insolvency, Bank Recovery.</p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Ludhiana (The Industrial Hub)</h4>
                        <p className="text-gray-700 mb-2">
                            As the Manchester of India, Ludhiana's courts are flooded with commercial disputes. From textile giants to bicycle manufacturers, the legal needs here revolve around business contracts, labour unions, and cheque bounce cases.
                        </p>
                        <p className="text-sm text-gray-500">Key Focus: Commercial Suits, 138 NI Act, Labour Courts, MSME Disputes.</p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Jalandhar (The NRI Belt)</h4>
                        <p className="text-gray-700 mb-2">
                            Situated in the heart of Doaba, Jalandhar sees a high volume of family and property litigation involving NRIs. Revenue courts here are busy with partition and mutation cases.
                        </p>
                        <p className="text-sm text-gray-500">Key Focus: Civil Property Suits, Family Law, Revenue Matters, Immigration Fraud.</p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-xl">Mohali (The Real Estate Hub)</h4>
                        <p className="text-gray-700 mb-2">
                            SAS Nagar (Mohali) is the epicenter of real estate expansion. The courts here, along with the RERA Authority, primarily deal with builder-buyer disputes and land acquisition compensation cases.
                        </p>
                        <p className="text-sm text-gray-500">Key Focus: RERA Complaints, Consumer Disputes, Land Acquisition (GMADA).</p>
                     </div>
                  </div>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-need-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Complexity of Punjab's Laws: Why Risk is High</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Legal statutes in Punjab are a mix of central laws and state-specific acts that are often archaic and complex. For instance, the law dominating agricultural land is the <strong>Punjab Land Revenue Act, 1887</strong>, which operates on entirely different principles than urban property laws. A lawyer unfamiliar with terms like 'Jamabandi', 'Intqal', 'Takseem', or 'Girdawari' cannot effectively represent a client in a land dispute.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Similarly, in criminal law, Punjab has seen stringent enforcement of the <strong>NDPS Act</strong> due to the drug menace. The burden of proof and bail conditions in these cases are very severe. An inexperienced defense can lead to long incarceration without trial. In commercial matters, the specific rules of the <strong>Punjab VAT</strong> and local industrial policies play a crucial role.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we pride ourselves on our technical mastery of these local laws. We don't just know the law; we know the practice, the procedure, and the precedents that govern the courts of Punjab.
                  </p>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    We offer a comprehensive suite of legal services tailored to the needs of Punjab. Our multi-disciplinary team ensures that whatever your legal problem, we have a specialist for it.
                  </p>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Property Disputes, RERA & Real Estate</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Land is the most valuable asset in Punjab, and consequently, the biggest source of litigation. Whether it is urban residential property or vast tracts of agricultural land, disputes here can drag on for generations if not handled aggressively.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                     <li><strong>Ancestral Property Partition:</strong> We specialize in filing partition suits to separate shares in joint family properties, ensuring you get your rightful legal possession.</li>
                     <li><strong>Title Disputes:</strong> Litigation involving declaratory suits to establish ownership where title deeds are missing or forged.</li>
                     <li><strong>RERA Punjab:</strong> We represent homebuyers in the Real Estate Regulatory Authority (RERA) in Chandigarh against builders in Mohali, Zirakpur, and Kharar for delayed projects, non-delivery of amenities, and refund of money. We also handle execution of RERA orders to ensure actual recovery.</li>
                     <li><strong>Tenant Eviction:</strong> Representing landlords, especially NRIs, in filing eviction petitions on grounds of personal necessity, non-payment of rent, or subletting under the East Punjab Urban Rent Restriction Act.</li>
                   </ul>
                </section>

                {/* Section: Agriculture */}
                <section id="agriculture" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Agricultural Land Laws</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Agricultural land disputes in Punjab are adjudicated by Revenue Courts (Tehsildar, SDM, Collector, Commissioner, Financial Commissioner), not Civil Courts. This requires a specialized skill set.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <strong className="block text-gray-900 mb-2">Correction of Records</strong>
                        <p className="text-sm text-gray-600">Correcting wrong entries in Jamabandis and Khasra Girdawaris which can adversely affect ownership rights.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <strong className="block text-gray-900 mb-2">Partition (Takseem)</strong>
                        <p className="text-sm text-gray-600">Handling the complex process of 'Takseem' before the Tehsildar to divide agricultural holdings by metes and bounds.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <strong className="block text-gray-900 mb-2">Pre-emption Appeals</strong>
                        <p className="text-sm text-gray-600">Litigation regarding the right of pre-emption in sale of agricultural land.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <strong className="block text-gray-900 mb-2">Land Ceiling</strong>
                        <p className="text-sm text-gray-600">Cases related to the Punjab Land Reforms Act regarding surplus area and permissible limits.</p>
                      </div>
                   </div>
                </section>

                {/* Section: Immigration */}
                <section id="immigration" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Immigration Fraud & Travel Agent Disputes</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Punjab faces a massive issue of immigration fraud where unscrupulous travel agents dupe aspirants of lakhs of rupees. We provide a legal shield for victims.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Criminal Action:</strong> Filing FIRs under Section 420 (Cheating), 406 (Breach of Trust) IPC, and Section 13 of the Punjab Travel Professionals Regulation Act against fraudulent agents.</li>
                     <li><strong>Consumer Complaints:</strong> Filing cases in Consumer Commissions to recover the fees paid along with compensation for mental harassment.</li>
                     <li><strong>Passport & Visa Appeals:</strong> Assisting in cases of passport impounding or blacklisting by authorities.</li>
                   </ul>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Punjab & Haryana High Court Litigation</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>High Court</strong> in Chandigarh is the guardian of justice for Punjab. When unauthorized government action violates your rights or when lower courts err in judgment, the High Court provides relief. Our team has extensive experience in:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Writ Jurisdiction (Article 226):</strong> Protection of life and liberty for runaway couples, challenging illegal government notifications, and Habeas Corpus petitions for illegal detention.</li>
                      <li>• <strong>Service Matters:</strong> Representing government employees in matters of promotion, suspension, pension, and disciplinary inquiries.</li>
                      <li>• <strong>Civil Appeals (RSA):</strong> Filing Regular Second Appeals against the judgments of District Judges where a substantial question of law is involved.</li>
                      <li>• <strong>Criminal Appeals & Revisions:</strong> Challenging convictions and seeking suspension of sentence ensuring fair trial rights.</li>
                      <li>• <strong>PILs:</strong> Filing Public Interest Litigations for environmental and social causes relevant to Punjab.</li>
                  </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Facing criminal charges can be terrifying. In Punjab, we see a high volume of specific criminal cases where expert defense is critical.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>NDPS Cases:</strong> We specialize in defending clients booked under the NDPS Act for possession of contraband. We challenge procedural lapses in search and seizure, often leading to bail or acquittal.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>White Collar Crime:</strong> Representing clients in PMLA (Money Laundering) cases involving ED, and economic offenses involving large scale fraud.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Bail Matters:</strong> We move swiftly for Anticipatory Bail in FIRs to prevent arrest and Regular Bail for those in custody, arguing on merit and medical grounds.</div>
                      <div className="border p-4 rounded-lg bg-gray-50"><strong>Cheque Bounce:</strong> Defending accused in Section 138 NI Act cases by disproving legal liability or proving misuse of security cheques.</div>
                   </div>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Family disputes require a balanced approach of empathy and legal aggression. We handle sensitive matters with confidentiality.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Divorce:</strong> Mutual Consent Divorce (fast-track) and Contested Divorce on grounds of cruelty, desertion, adultery, or mental disorder.</li>
                     <li><strong>NRI Matrimonial Disputes:</strong> Specialized handling of cases where one spouse is abroad. We handle issue of Look Out Circulars (LOC) and declaring foreign divorces null and void.</li>
                     <li><strong>Domestic Violence:</strong> Filing and defending cases under the Domestic Violence Act for residence orders and maintenance.</li>
                     <li><strong>Maintenance (125 CrPC):</strong> Ensuring fair maintenance for wives, children, and elderly parents.</li>
                   </ul>
                </section>

                {/* Section: Corporate Law */}
                <section id="corporate-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate & Industrial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Supporting the industrial backbone of Punjab in Ludhiana, Jalandhar, and Mandi Gobindgarh.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>MSME Disputes:</strong> Recovering strict dues for micro and small enterprises through the MSME Samadhaan portal and facilitation councils.</li>
                     <li><strong>NCLT Chandigarh:</strong> Handling Insolvency Resolution Process (CIRP) and liquidation matters under IBC 2016.</li>
                     <li><strong>Contract Law:</strong> Drafting and vetting dealer/distributor agreements, franchise agreements, and ensuring compliance with the Factory Act and Labour codes.</li>
                     <li><strong>Arbitration:</strong> Representing companies in commercial arbitration proceedings to resolve disputes outside courts efficiently.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Punjab</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the judicial infrastructure can be daunting. Here is a guide to the key forums where we appear regularly for our clients:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Punjab & Haryana High Court (Chandigarh)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located in Sector 1, Chandigarh. It is the architectural marvel designed by Le Corbusier and the supreme judicial authority for Punjab, Haryana, and Chandigarh. It hears appeals from all District Courts and has original Writ jurisdiction.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">RE</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">RERA Punjab (Chandigarh)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located in Sector 18, Chandigarh. This specialized authority handles all real estate complaints for registered projects in Punjab. It has the power to order refunds, interest, and compensation.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Every district headquarters has a District & Sessions Court handling civil suits and criminal trials.
                          <br/><strong>Ludhiana:</strong> Ferozepur Road.
                          <br/><strong>Jalandhar:</strong> Near BMC Chowk.
                          <br/><strong>Amritsar:</strong> Cantonment Area.
                          <br/><strong>Mohali:</strong> Sector 76.
                        </p>
                      </div>
                    </div>
                     <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Tribunals (Chandigarh)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>NCLT:</strong> Corporate disputes.
                          <br/><strong>DRT:</strong> Banking recovery cases (Sector 17).
                          <br/><strong>AFT:</strong> Armed Forces Tribunal (Chandimandir) for defense personnel matters.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology: The AMA Advantage</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We don't believe in a one-size-fits-all approach. Every client comes with a unique set of facts, emotional baggage, and financial constraints. Our methodology is designed to provide personalized legal care that is transparent and results-oriented.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Transparency</h4>
                        <p className="text-xs text-gray-600 mt-2">We maintain complete transparency in billing and procedures. No hidden costs, no false promises. Especially for our NRI clients, we ensure everything is documented.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-900">Integrity</h4>
                        <p className="text-xs text-gray-600 mt-2">Honest advice on the merits of the case. If a case is weak, we tell you upfront and suggest settlement rather than dragging it on for fees.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💬</div>
                        <h4 className="font-bold text-gray-900">Accessibility</h4>
                        <p className="text-xs text-gray-600 mt-2">We are always available on call, WhatsApp, or video conference. We bridge the time zone gap for our international clients effectively.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Results</h4>
                        <p className="text-xs text-gray-600 mt-2">Our track record speaks for itself. From staying demolitions to securing acquittals, we fight to win within the ambit of the law.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing a lawyer is a decision of trust. Here is why AMA Legal Solutions is the preferred choice for hundreds of clients in Punjab:
                  </p>
                  
                   <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">NRI Specialists</h3>
                      <p className="text-gray-600 relative z-10">We bridge the distance for our international clients with dedicated services, digital updates, and power of attorney management.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">High Court Experts</h3>
                      <p className="text-gray-600 relative z-10">Our strong practice in Chandigarh High Court ensures that if the lower courts fail you, we have the expertise to get relief from the higher judiciary.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Statewide Reach</h3>
                      <p className="text-gray-600 relative z-10">You don't need different lawyers for different cities. From Amritsar to Patiala to Mohali, our network covers every major district court in Punjab.</p>
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
                        "I am an NRI living in Canada. My ancestral land near Jalandhar was illegally occupied by a distant relative. AMA Legal Solutions fought my case in the NRI Court and got the possession back within 14 months. Very trustworthy."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">G</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Gurmeet Singh</p>
                          <p className="text-xs text-gray-500">Business Owner, Toronto</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best lawyers for family court matters in Ludhiana. They handled my contested divorce and maintenance case with great dignity. They ensured I got a fair settlement for myself and my daughter."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rajinder Kaur</p>
                          <p className="text-xs text-gray-500">Teacher, Ludhiana</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "My builder in Mohali delayed the project for 3 years and stopped responding. AMA Legal team filed a case in RERA Punjab. The arguments were so strong that the builder offered a refund with interest before the final order."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">H</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Harnish Malhotra</p>
                          <p className="text-xs text-gray-500">IT Professional, Chandigarh</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Excellent service for criminal appeals in High Court. My brother was falsely implicated in a case. The team worked tirelessly, found loopholes in the police investigation and secured his acquittal."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sukhdev Brar</p>
                          <p className="text-xs text-gray-500">Farmer, Bathinda</p>
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Punjab's trusted legal experts today.
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
                    Connect with our senior advocates in Punjab today regarding your case.
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
                     "AMA Legal Solutions fought my case and got the possession back. Very trustworthy."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">G</div>
                     <span className="ml-3 font-bold text-sm">Gurmeet Singh, NRI</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
