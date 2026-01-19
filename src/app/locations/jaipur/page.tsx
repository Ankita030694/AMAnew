
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you handle heritage property disputes in Jaipur?",
    answer: "Yes, Jaipur has a unique legal landscape regarding heritage properties ('Havelis' and 'Kothis'). We specialize in disputes related to the conversion of heritage properties into hotels, ancestral partition suits involving undivided Hindu families (HUF), and obtaining NOCs from the Archeological Survey of India (ASI) or local heritage committees."
  },
  {
    question: "How can I check if a property in Jaipur is legally clear (JDA Approved)?",
    answer: "Verifying property titles in Jaipur requires checking records with the Jaipur Development Authority (JDA). We conduct thorough due diligence, ensuring the property is JDA approved, has a clear 'Patta' (lease deed), and is not involved in any Section 90A (land conversion) disputes. We also verify records at the Sub-Registrar's office to rule out encumbrances."
  },
  {
    question: "Can you assist with mining lease compliance in Rajasthan?",
    answer: "Absolutely. Rajasthan is a hub for marble and stone mining. We assist clients with the grant and renewal of mining leases, obtaining environmental clearances (EC) from the Pollution Control Board, and representing mine owners in tribunals against illegal mining allegations or royalty disputes."
  },
  {
    question: "What courts do you practice in Jaipur?",
    answer: "We practice primarily at the Rajasthan High Court (Jaipur Bench) for writ petitions and appeals. We also appear regularly before the District Courts (Session Courts), the Family Courts, and specialized tribunals like the RERA Authority (Rajasthan) and the National Green Tribunal (NGT) for environmental matters."
  },
  {
    question: "Do you provide legal services for the tourism and hospitality industry?",
    answer: "Yes, given Jaipur's tourism economy, we act as legal consuls for hotels, resorts, and travel agencies. We handle licensing (FSSAI, Fire NOC, Bar License), vendor contracts, employment disputes, and consumer protection cases filed by tourists."
  },
  {
    question: "How long does a divorce case take in Jaipur Family Court?",
    answer: "A mutual consent divorce typically takes 6-18 months, depending on the cooling-off period waiver. Contested divorces can take significantly longer (3-5 years) depending on the complexity of evidence regarding cruelty, desertion, or adultery. Our team strives to expedite the process through effective mediation and strategic litigation."
  },
  {
    question: "Do you handle commercial arbitration in Jaipur?",
    answer: "Yes, we represent businesses in domestic arbitration proceedings in Jaipur. We also file applications under Section 9 (interim relief) and Section 11 (appointment of arbitrator) of the Arbitration and Conciliation Act before the Commercial Courts and the High Court."
  },
  {
    question: "What is Section 90A land conversion in Rajasthan?",
    answer: "Section 90A of the Rajasthan Land Revenue Act pertains to the conversion of agricultural land for non-agricultural use (residential or commercial). This is a critical step for real estate development. We assist landowners and developers in navigating this bureaucratic process to obtain the necessary conversion orders from the JDA or local municipality."
  },
  {
    question: "Can you help with Startups in Jaipur?",
    answer: "Yes, Jaipur's startup ecosystem is booming (iStart Rajasthan). We assist founders with incorporation, registering with the DPIIT for startup benefits, drafting co-founder agreements, and securing intellectual property rights (Trademarks/Copyrights) to protect their branding."
  },
  {
    question: "Do you handle criminal bail matters in Jaipur?",
    answer: "We have a dedicated criminal defense team handling bail applications (Regular and Anticipatory) at the Sessions Court and High Court. We handle cases related to white-collar crimes, cyber frauds, NDPS, and other criminal offenses with urgency and confidentiality."
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
      "name": "Jaipur",
      "item": "https://amalegalsolutions.com/locations/jaipur"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Jaipur",
  "image": "https://amalegalsolutions.com/city1.svg",
  "description": "Premier law firm in Jaipur providing expert legal services in High Court Litigation, Real Estate, and Heritage Property Law.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.9124",
    "longitude": "75.7873"
  },
  "url": "https://amalegalsolutions.com/locations/jaipur",
  "telephone": "+918700343611",
  "priceRange": "$$",
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
    "reviewCount": "210"
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
  "name": "Legal Services Jaipur",
  "image": "https://amalegalsolutions.com/city1.svg",
  "description": "Top-rated legal services in Jaipur by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "210"
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
        "name": "Rajendra Singh Rathore"
      },
      "reviewBody": "We had a complex ancestral property dispute involving a haveli in the walled city. AMA Legal Solutions handled the partition suit with great expertise and dignity."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Sharma"
      },
      "reviewBody": "Best lawyers for High Court matters in Jaipur. They got stay on a demolition order from JDA within 24 hours."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Malhotra"
      },
      "reviewBody": "Excellent corporate advice for our hotel chain. They handle all our licensing and employment contracts seamlessly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Agarwal"
      },
      "reviewBody": "Very supportive team for family court cases. They helped me get a fair settlement in my divorce and custody case."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Jaipur | Top Law Firm for High Court & Property | AMA Legal Solutions",
  description:
    "Expert Lawyers in Jaipur for Rajasthan High Court, JDA Property Disputes, Heritage Law, and Family Matters. Best advocates for Civil Litigation and Mining Law.",
  keywords: [
    "lawyers in jaipur",
    "law firm in jaipur",
    "advocates in rajasthan high court jaipur bench",
    "property lawyer jaipur",
    "jda dispute lawyer",
    "heritage property lawyer rajasthan",
    "divorce lawyer jaipur",
    "family court advocates jaipur",
    "mining lease lawyer rajasthan",
    "corporate lawyers jaipur",
    "criminal defense lawyer jaipur",
    "rera rajasthan lawyer"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/jaipur',
  },
  openGraph: {
    title: "Lawyers in Jaipur | Expert Legal Services Rajasthan",
    description: "Leading legal representation in Jaipur. Specializing in High Court writs, Real Estate, and Heritage Law.",
    url: "https://amalegalsolutions.com/locations/jaipur",
    type: "website",
    images: [
      {
        url: "/city1.svg", 
        width: 1200,
        height: 630,
        alt: "Legal Services Jaipur",
      },
    ],
  },
};

export default function JaipurLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-heritage", title: "Jaipur: Legal Heritage" },
    { id: "why-expert", title: "Why You Need Experts" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "property-law", title: "Real Estate & JDA" },
    { id: "heritage-law", title: "Heritage & Hospitality" },
    { id: "litigation", title: "High Court Litigation" },
    { id: "family-law", title: "Family & Divorce" },
    { id: "commercial-law", title: "Commercial & Mining" },
    { id: "courts-guide", title: "Courts in Jaipur Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-stories", title: "Client Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Jaipur", href: "/locations/jaipur" },
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
        <div className="relative bg-[#D2A02A] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {/* Using a warm color/image placeholder fitting for the Pink City if specific image not available, reverting to generic city or potentially adding one later */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/city2.svg')", filter: "sepia(0.5) brightness(0.6)" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Trusted Legal Guardians in the <span className="text-[#FFE0B2]">Pink City</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
               From the Rajasthan High Court to JDA Tribunals. We protect your legacy, your business, and your rights in Jaipur.
            </p>
            <Link href="/contact">
              <button className="bg-white text-[#D2A02A] hover:bg-gray-100 font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg tracking-wide">
                Get Expert Consultation
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Your Legal Shield in Rajasthan's Capital</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Jaipur is not just a city of palaces and forts; it is a rapidly modernizing metropolis with a thriving real estate market, a booming tourism industry, and a complex legal framework. As the seat of the <strong>Rajasthan High Court Bench</strong>, it is the center of judicial power for the region.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we blend the traditional values of trust and integrity with modern legal acumen. Whether you are dealing with a property dispute in C-Scheme, a heritage conservation issue in the Walled City, or a corporate merger in Sitapura Industrial Area, our team has the local knowledge and legal expertise to guide you.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We understand that legal battles in India can be daunting. Our mission is to simplify the process, provide clear counsel, and fight relentlessly for your interests in every forum, from the trial courts to the High Court.
                  </p>
                </section>

                {/* Jaipur Legal Context */}
                <section id="legal-heritage" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Legal Landscape of Jaipur</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     The legal environment in Jaipur is unique. It involves a mix of central laws, state-specific legislations like the <em>Rajasthan Tenancy Act</em>, and municipal bylaws governed by the <strong>Jaipur Development Authority (JDA)</strong>.
                   </p>
                   <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#D2A02A] my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Strategic Importance</h4>
                    <p className="text-gray-700 mb-4">
                      Being the state capital means proximity to all major regulatory bodies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Rajasthan High Court (Jaipur Bench):</strong> The apex judicial body for Eastern Rajasthan.</li>
                      <li><strong>Secretariat & Government Depts:</strong> Quick access to bureaucratic channels for approvals and licenses.</li>
                      <li><strong>RERA Rajasthan Authority:</strong> The hub for resolving all real estate disputes in the state.</li>
                    </ul>
                  </div>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Local Expertise is Non-Negotiable</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Applying general legal principles without understanding local nuances can be fatal to your case. In Jaipur, the difference between winning and losing often lies in understanding the specific 'Master Plans' of the JDA or the 'DLC Rates' for stamp duty.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">JDA vs Society Patta</h4>
                        <p className="text-sm text-gray-700">Investing in land without verifying if the 'Patta' is issued by the JDA or a cooperative society can lead to years of litigation and blocked capital.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Heritage Restrictions</h4>
                        <p className="text-sm text-gray-700">Renovating a property in the old city without ASI or heritage committee clearance can result in sealing of the property.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">High Court Procedure</h4>
                        <p className="text-sm text-gray-700">Filing a writ petition requires strict adherence to the High Court Rules. A technical defect can get your urgent petition dismissed at the threshold.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Mining Compliances</h4>
                        <p className="text-sm text-gray-700">Operating a mine or stone crusher without up-to-date environmental clearances involves heavy penalties from the NGT.</p>
                     </div>
                  </div>
                </section>

                 {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Our full-service capabilities allow us to handle specialised needs of Jaipur's residents and industries.
                  </p>
                </section>

                {/* Section: Property Law */}
                <section id="property-law" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate & JDA Matters</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Real estate is the backbone of Jaipur's economy. We provide end-to-end support for buyers, sellers, and developers.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Title Search & Due Diligence:</strong> We check records at the Sub-Registrar office and JDA to ensure the property is free from mortgages and litigation.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Land Conversion (90A):</strong> Assisting in the administrative process of converting agricultural land to residential/commercial use under Section 90A of the Land Revenue Act.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Regularization:</strong> Helping clients regularize deviations in construction through the JDA's compounding schemes / Prashasan Shahron Ke Sang campaigns.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>RERA Litigation:</strong> Filing complaints for delayed possession and refund against builders in the Rajasthan RERA Authority.</div>
                    </li>
                  </ul>
                </section>

                {/* Section: Heritage Law */}
                <section id="heritage-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Heritage, Tourism & Hospitality</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Jaipur is a UNESCO World Heritage site. This designation brings specific legal responsibilities for property owners and businesses.
                   </p>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Hotel & Resort Licensing</h4>
                     <p className="text-gray-700 text-sm">
                       We assist heritage hotels and resorts in obtaining Fire NOCs, FSSAI licenses, Bar licenses (Excise), and tourism department registrations.
                     </p>
                   </div>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Conservation Regulations</h4>
                     <p className="text-gray-700 text-sm">
                       Advising on compliance with the Ancient Monuments and Archaeological Sites and Remains Act. We handle disputes regarding construction bans near protected monuments.
                     </p>
                   </div>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">High Court & Civil Litigation</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We are known for our aggressive and strategic representation in the courts.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Writ Petitions:</strong> Challenging arbitrary orders of the JDA, Municipal Corporation, or State Government in the High Court.</li>
                     <li><strong>Civil Appeals:</strong> Representing clients in First and Second Appeals against decrees of lower courts.</li>
                     <li><strong>Injunctions/Stay Orders:</strong> Securing immediate protection for property possession.</li>
                     <li><strong>Service Matters:</strong> Representing government employees in disputes regarding promotion, transfer, and pension (CAT/High Court).</li>
                   </ul>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle sensitive family disputes with a focus on confidentiality and conflict resolution.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Ancestral Partition</strong>
                        <p className="text-sm text-gray-600">Handling complex partition suits for Hindu Undivided Families (HUF), often involving agricultural land and havelis.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Divorce</strong>
                        <p className="text-sm text-gray-600">Representation in Family Courts for mutual consent and contested divorce, alimony, and child custody.</p>
                      </div>
                   </div>
                </section>

                {/* Section: Commercial Law */}
                <section id="commercial-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Commercial & Mining Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Rajasthan is mineral-rich. We have specialized expertise in <strong>Mining Law</strong>, handling lease renewals, royalty disputes, and environmental compliance (NGT cases).
                   </p>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We also draft and enforce commercial contracts for the textile, jewelry, and handicraft export sectors that drive Jaipur's economy.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Guide to Courts in Jaipur</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We practice across all major judicial forums in the city.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Rajasthan High Court (Jaipur Bench)</h4>
                        <p className="text-gray-700 text-sm mt-1">Located in the new High Court premises near Ambedkar Circle. It handles all constitutional and appellate matters for Eastern Rajasthan.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District & Sessions Court</h4>
                        <p className="text-gray-700 text-sm mt-1">Located at Bani Park. This is the hub for civil suits, criminal trials, and Rent Control Tribunal matters.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">FC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Family Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">Specialized courts for matrimonial disputes, located within the District Court premises and at other zones.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">RERA / Consumer Commission</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>RERA:</strong> Near Sahakar Bhawan (Real Estate).<br/>
                          <strong>Consumer Commission:</strong> Handing consumer complaints at District and State level.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The AMA Promise</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We treat every case with the seriousness it deserves.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Personal Attention</h4>
                        <p className="text-xs text-gray-600 mt-2">You will always have direct access to the advocate handling your case, not just juniors.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Deep Research</h4>
                        <p className="text-xs text-gray-600 mt-2">We leave no stone unturned in legal research to find precedents that favor you.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className="font-bold text-gray-900">Proactive</h4>
                        <p className="text-xs text-gray-600 mt-2">We anticipate the other side's moves and prepare counter-strategies in advance.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💰</div>
                        <h4 className="font-bold text-gray-900">Transparent Fees</h4>
                        <p className="text-xs text-gray-600 mt-2">No hidden charges. We discuss all costs upfront so you can plan your budget.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Jaipur Trusts Us?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have built our reputation on successfully handling complex cases that other firms refused.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">High Court Specialists</h3>
                      <p className="text-gray-600 relative z-10">Our strong presence in the High Court ensures your writ petitions and appeals are argued effectively.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Real Estate Experts</h3>
                      <p className="text-gray-600 relative z-10">We know JDA rules inside out. We can spot a defective title file in minutes.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Business Savvy</h3>
                      <p className="text-gray-600 relative z-10">We understand the commercial realities of running a business in Rajasthan, from mining to tourism.</p>
                    </div>
                  </div>
                </section>
                
                 {/* Client Stories */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "We had a complex ancestral property dispute involving a haveli in the walled city. AMA Legal Solutions handled the partition suit with great expertise and dignity."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rajendra Singh Rathore</p>
                          <p className="text-xs text-gray-500">Business Owner</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best lawyers for High Court matters in Jaipur. They got stay on a demolition order from JDA within 24 hours."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Ananya Sharma</p>
                          <p className="text-xs text-gray-500">Homeowner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Excellent corporate advice for our hotel chain. They handle all our licensing and employment contracts seamlessly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vikram Malhotra</p>
                          <p className="text-xs text-gray-500">Hotelier</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Very supportive team for family court cases. They helped me get a fair settlement in my divorce and custody case."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sunita Agarwal</p>
                          <p className="text-xs text-gray-500">Teacher</p>
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
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('/bannerbg.png')"}}></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help is Just a Call Away</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Jaipur's trusted legal experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Free Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-[#D2A02A] text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
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
                    Connect with our senior advocates in Jaipur today regarding your case.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all shadow-md mb-4 group"
                  >
                    <span className="mr-2 group-hover:animate-pulse">📞</span> Call +91-8700343611
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
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Civil & Criminal Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Family & Divorce
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> IPR & Trademark
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}