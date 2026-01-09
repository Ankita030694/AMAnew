import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a suit in the Calcutta High Court (Original Side)?",
    answer: "The Calcutta High Court is one of the few in India with Original Jurisdiction. Civil suits valued above a certain pecuniary limit can be filed directly here. Our team is well-versed with the Original Side Rules, handling plaint drafting, service of summons, and interlocutory applications effectively unique to this historic court."
  },
  {
    question: "Can you help with tenant eviction under the West Bengal Premises Tenancy Act?",
    answer: "Yes, tenancy disputes are common in Kolkata. We represent landlords and tenants in eviction suits under the West Bengal Premises Tenancy Act, 1997. We handle cases involving grounds like default in rent payment, reasonable requirement for own occupation, and sub-letting without consent before the Rent Controller and Civil Courts."
  },
  {
    question: "Do you handle company law matters at NCLT Kolkata?",
    answer: "Yes, we regularly appear before the National Company Law Tribunal (NCLT) Kolkata Bench, which has jurisdiction over West Bengal. We represent companies in insolvency proceedings (IBC), mergers and amalgamations, and oppression & mismanagement petitions, serving clients from the tea, jute, and IT sectors."
  },
  {
    question: "What legal services do you offer for the IT sector in Salt Lake and New Town?",
    answer: "We provide specialized legal support for IT/ITeS companies in Salt Lake Sector V and New Town. Our services include drafting Master Service Agreements (MSA), SaaS contracts, data privacy (GDPR/DPDP Act) compliance, employment contracts, and handling intellectual property disputes."
  },
  {
    question: "How do I get a Probate or Letters of Administration in Kolkata?",
    answer: "Probate is mandatory for wills executed in Kolkata or for properties located within the city limits. We handle the entire probate process in the Calcutta High Court or District Courts (Alipore/Barasat), including drafting the petition, handling citations, and resolving caveats or objections from legal heirs."
  },
  {
    question: "Do you handle family disputes and divorce cases?",
    answer: "Yes, our family law team practices at the Family Courts in Calcutta (Bankshall Court) and Alipore. We assist with mutual consent divorce, contested divorce, child custody, alimony, and cases under Section 498A IPC, providing empathetic and confidential legal counsel."
  },
  {
    question: "Can you assist with Thika Tenancy legal issues?",
    answer: "Thika Tenancy is a unique tenure system in Kolkata (and Howrah) governed by the West Bengal Thika Tenancy (Acquisition and Regulation) Act, 2001. We assist clients in disputes regarding thika tenant rights, Bharati (landlord) rights, and regularizing structures with the Thika Controller."
  },
  {
    question: "What is your experience with Criminal Defense in Kolkata?",
    answer: "We handle criminal matters across all courts including the Chief Metropolitan Magistrate (CMM) Court at Bankshall, Sealdah Court, and Alipore Court. Our expertise covers bail applications (Anticipatory/Regular), quashing of FIRs in the High Court, and defense in white-collar crime and cyber crime cases."
  },
  {
    question: "How much do legal services cost in Kolkata?",
    answer: "Legal fees depend on the nature and complexity of the case. We offer transparent billing models—whether fixed fees for drafting and registration or retainers for ongoing litigation. We provide a clear cost estimate after the initial consultation."
  },
  {
    question: "Do you offer online legal consultation?",
    answer: "Yes, we offer video consultations for clients in Kolkata and West Bengal who prefer online meetings. This saves travel time and allows us to serve clients from Howrah, Hooghly, and North/South 24 Parganas efficiently."
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
      "name": "Kolkata",
      "item": "https://amalegalsolutions.com/locations/kolkata"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Kolkata",
  "image": "https://amalegalsolutions.com/city3.svg",
  "description": "Leading law firm in Kolkata providing expert legal services in High Court Litigation, Corporate Law, Real Estate, and Family Disputes.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.5726",
    "longitude": "88.3639"
  },
  "url": "https://amalegalsolutions.com/locations/kolkata",
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
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "320"
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
  "name": "Legal Services Kolkata",
  "image": "https://amalegalsolutions.com/city3.svg",
  "description": "Top-tier legal services in Kolkata by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "320"
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
        "name": "Sovan Chatterjee"
      },
      "reviewBody": "Excellent handling of my property probate case in Alipore Court. Very professional and transparent with fees."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Roy"
      },
      "reviewBody": "Best lawyers for company registration and compliance in Salt Lake. Helped my IT startup immensely."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amitava Das"
      },
      "reviewBody": "Very knowledgeable about the Calcutta High Court Original Side procedures. Got us an urgent injunction order."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Debjani Sen"
      },
      "reviewBody": "Compassionate and strong representation in my divorce case. They made a difficult time much easier to navigate."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Kolkata | Best Law Firm for High Court & Corporate",
  description:
    "Top Advocates in Kolkata practicing in Calcutta High Court, NCLT, and Alipore Judges Court. Experts in Property, Probate, Divorce, and Corporate Law.",
  keywords: [
    "lawyers in kolkata",
    "law firm in kolkata",
    "advocates in calcutta high court",
    "property lawyer kolkata",
    "probate lawyer kolkata",
    "divorce lawyer kolkata",
    "criminal defense lawyer kolkata",
    "corporate lawyers kolkata",
    "nclt lawyers kolkata",
    "thika tenancy lawyer",
    "legal consultant salt lake"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/kolkata',
  },
  openGraph: {
    title: "Lawyers in Kolkata | Premier Legal Counsel West Bengal",
    description: "Expert legal representation in Kolkata. Corporate, Civil, Criminal, and Property Law services by AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/locations/kolkata",
    type: "website",
    images: [
      {
        url: "/city3.svg",
        width: 1200,
        height: 630,
        alt: "Legal Services Kolkata",
      },
    ],
  },
};

export default function KolkataLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "city-of-joy", title: "Kolkata: The Legal Heritage" },
    { id: "why-expert", title: "Why Expert Counsel Matters" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "corporate-commercial", title: "Corporate & Commercial" },
    { id: "real-estate", title: "Real Estate & Tenancy" },
    { id: "litigation", title: "Litigation & Arbitration" },
    { id: "family-probate", title: "Family & Probate" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "intellectual-property", title: "IPR & IT Law" },
    { id: "courts-guide", title: "Guide to Kolkata Courts" },
    { id: "our-methodology", title: "Our Methodology" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-stories", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    { label: "Kolkata", href: "/locations/kolkata" },
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
            style={{ backgroundImage: "url('/city3.svg')", filter: "brightness(0.5)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Trusted Legal Advisors in <span className="text-[#D2A02A]">Kolkata</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              From the historic corridors of the Calcutta High Court to the tech hubs of Salt Lake, we provide modern legal solutions backed by tradition.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg tracking-wide">
                Book a Consultation
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in the City of Joy</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Kolkata is a city where history meets modernity. As the former capital of British India, it houses the country's oldest High Court and boasts a rich legal heritage. Today, it serves as the commercial gateway to Eastern India, bristling with activity in traditional sectors like tea and jute, alongside rapidly expanding IT hubs in Salt Lake and New Town.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> is proud to be a part of this vibrant ecosystem. We understand that doing business in West Bengal requires a nuanced understanding of local laws, labor relations, and administrative procedures. Our team of experienced advocates bridges the gap between old-school legal craftsmanship and new-age commercial requirements.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you are a multinational corporation setting up an office in Rajarhat, a family resolving a generations-old property dispute in Alipore, or a startup needing compliance help, we are your trusted partners. Our practice spans the Calcutta High Court, District Courts, NCLT, and various tribunals.
                  </p>
                </section>

                {/* The Legal Heritage */}
                <section id="city-of-joy" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Unique Legal Landscape</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The legal framework in Kolkata is distinct. The <strong>Calcutta High Court</strong> is not just an appellate body; meant of its Original Side, it has the power to try civil suits directly, a privilege shared with only Mumbai and Chennai. This "Original Side" practice demands specialized pleading and procedural knowledge that few firms possess.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                   Furthermore, West Bengal has specific state laws that deeply impact property and business:
                  </p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Key Local Statutes</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>West Bengal Premises Tenancy Act, 1997:</strong> Governing the complex landlord-tenant relationships in the city.</li>
                      <li><strong>Thika Tenancy Act:</strong> Regulating the unique tiered ownership structure found in Kolkata's "bustees" and older properties.</li>
                      <li><strong>Kolkata Municipal Corporation (KMC) Act:</strong> Critical for all real estate development, mutation, and tax assessments.</li>
                    </ul>
                  </div>
                </section>

                {/* Why Expert Counsel Matters */}
                <section id="why-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Importance of Specialized Counsel</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Navigating Kolkata's courts can be challenging. The procedures in the Alipore Judges Court differ vastly from those in the Bankshall Court or the High Court. A generalized approach often leads to procedural delays—getting a case 'dismissed for default' or stuck in the 'list' for years.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our team provides targeted expertise. We know how to move urgent motions, how to effectively handle caveats, and how to navigate the registry to ensure your files don't gather dust. We combine this procedural mastery with deep substantive knowledge of the law to secure favorable outcomes.
                  </p>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    We offer a comprehensive range of legal services tailored to the needs of Kolkata's citizens and businesses.
                  </p>
                </section>

                {/* Section: Corporate & Commercial */}
                <section id="corporate-commercial" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate & Commercial Law</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Kolkata is the headquarters for major PSUs, tea companies, and a booming IT sector. We support these businesses with precision legal advice.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>Company Law & NCLT:</strong> We represent clients at the NCLT Kolkata Bench (dealing with matters from WB, Bihar, Jharkhand) in insolvency (IBC), oppression/mismanagement, and merger schemes.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>Startups & IT:</strong> Expert counsel for tech companies in Sector V and Rajarhat on incorporation, funding, ESOPs, and SaaS agreements.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>MSME Support:</strong> Assisting small enterprises with Udyam registration, recovery of dues under the MSMED Act (Samadhaan), and compliance.
                        </div>
                    </li>
                  </ul>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate & Tenancy Disputes</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Property law in West Bengal is fraught with complexities involving old tenancies and joint family properties.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-6 mt-6">
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Tenancy & Eviction</h4>
                        <p className="text-gray-700 text-sm">
                          Handling eviction suits under the WB Premises Tenancy Act. We represent landlords seeking possession for personal use or due to default, and tenants protecting their rights against illegal eviction.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Property Registration</h4>
                        <p className="text-gray-700 text-sm">
                          Drafting and registering Sale Deeds, Lease Deeds, and Gift Deeds. We assist with property mutation at KMC and Bidhannagar Municipal Corporation.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Thika Tenancy</h4>
                        <p className="text-gray-700 text-sm">
                          Advising on the rights of Thika tenants and landlords, and representing clients before the Thika Controller for regularization and disputes.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Joint Venture (Builder)</h4>
                        <p className="text-gray-700 text-sm">
                          Drafting Development Agreements and Power of Attorneys for promoting old buildings. We protect land-owners' interests in dealings with real estate developers.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">High Court Litigation & Arbitration</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our litigation practice is centered around the Calcutta High Court. We handle:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                     <li><strong>Constitutional Writs:</strong> Challenging arbitrary state actions or seeking enforcement of fundamental rights under Article 226.</li>
                     <li><strong>Commercial Suits:</strong> Filing and defending heavy commercial suits on the Original Side.</li>
                     <li><strong>Arbitration:</strong> Representing clients in arbitration proceedings (domestic and international) and filing Section 9 (interim relief) and Section 34 (challenge award) petitions in court.</li>
                   </ul>
                </section>

                {/* Section: Family Law */}
                <section id="family-probate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family Law & Probate</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle sensitive personal matters with care.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Divorce:</strong> Handling mutual consent and contested divorces at Family Courts in Calcutta and Alipore.</li>
                     <li><strong>Probate:</strong> Obtaining Probate or Letters of Administration is often mandatory in Kolkata for asset transfer. We manage the entire process, including handling citations and caveats.</li>
                     <li><strong>Maintenance:</strong> Securing maintenance for wives and children under Section 125 CrPC.</li>
                   </ul>
                </section>

                 {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We provide defense representation in criminal matters across the city.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700 mb-4">
                     Our services include:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Bail:</strong> Anticipatory Bail and Regular Bail applications in Sessions Courts and High Court.</li>
                     <li><strong>Cheque Bounce:</strong> Litigation under Section 138 NI Act at Bankshall and regional courts.</li>
                     <li><strong>Quashing:</strong> Petitions to quash FIRs in the High Court under Section 482 CrPC.</li>
                   </ul>
                </section>

                 {/* Section: IPR */}
                <section id="intellectual-property" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Intellectual Property & IT Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Protecting the intangible assets of Kolkata's creative and tech industries.
                   </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li>Trademark registration and opposition filings.</li>
                     <li>Copyright enforcement for artists, authors, and software companies.</li>
                     <li>Handling Cyber Crime complaints and data theft issues.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Kolkata</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the jurisdiction is the first step to justice. Here are the key courts where we practice.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Calcutta High Court (Esplanade)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          The oldest High Court in India. It exercises <strong>Original Jurisdiction</strong> for civil suits valued above ₹10 Lakhs (Non-Commercial) or ₹1 Crore (Commercial) within the city limits. It is also the appellate authority for West Bengal and Andaman & Nicobar Islands.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">CC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">City Civil Court (Bankshall Court)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located near Dalhousie, it handles civil suits valued up to the High Court's pecuniary limit. It is the primary trial court for commercial and property disputes in Central Kolkata.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">AJ</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Alipore Judges Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          The District & Sessions Court for South 24 Parganas. It has immense jurisdiction covering large parts of South Kolkata including Alipore, Ballygunge, and Behala.
                        </p>
                      </div>
                    </div>
                     <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">SC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Presidency Small Cause Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located at Bankshall Street. Jurisdiction over small valuation suits and specific eviction matters.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Tribunals</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>NCLT:</strong> Rajarhat (Corporate Law).<br/>
                          <strong>WBLRTT:</strong> Salt Lake (Land Reforms).<br/>
                          <strong>DRT:</strong> Jeevan Sudha Building (Debt Recovery).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Methodology */}
                <section id="our-methodology" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We blend the rigorous standards of the Calcutta Bar with modern efficiency:
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">📜</div>
                        <h4 className="font-bold text-gray-900">Drafting Excellence</h4>
                        <p className="text-xs text-gray-600 mt-2">In Kolkata courts, drafting is paramount. We pride ourselves on precise, error-free pleadings.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🏃</div>
                        <h4 className="font-bold text-gray-900">Registry Management</h4>
                        <p className="text-xs text-gray-600 mt-2">We know how to navigate the complex court registries to ensure listing and hearing.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🗣️</div>
                        <h4 className="font-bold text-gray-900">Senior Advocacy</h4>
                        <p className="text-xs text-gray-600 mt-2">Access to a network of designated Senior Advocates for high-stakes High Court matters.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💼</div>
                        <h4 className="font-bold text-gray-900">Business Focus</h4>
                        <p className="text-xs text-gray-600 mt-2">Legal solutions designed to minimize disruption to your business operations.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Trusted by families in South Kolkata and businesses in Sector V alike.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Local Insight</h3>
                      <p className="text-gray-600 relative z-10">Deep understanding of West Bengal specific laws like Tenancy Act and Land Reforms.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Client First</h3>
                      <p className="text-gray-600 relative z-10">We prioritize clear communication and responsiveness, breaking the stereotype of 'unreachable' lawyers.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Integrity</h3>
                      <p className="text-gray-600 relative z-10">Honest advice on the merits of your case. If a matter can be settled out of court, we will tell you.</p>
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
                        "Excellent handling of my property probate case in Alipore Court. Very professional and transparent with fees."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sovan Chatterjee</p>
                          <p className="text-xs text-gray-500">Retired Govt. Officer</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best lawyers for company registration and compliance in Salt Lake. Helped my IT startup immensely."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priyanka Roy</p>
                          <p className="text-xs text-gray-500">Director, Tech Solutions</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Very knowledgeable about the Calcutta High Court Original Side procedures. Got us an urgent injunction order."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amitava Das</p>
                          <p className="text-xs text-gray-500">Business Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Compassionate and strong representation in my divorce case. They made a difficult time much easier to navigate."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">D</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Debjani Sen</p>
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
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('/pattern.png')"}}></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help in Kolkata</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                       Navigate West Bengal's legal landscape with confidence. Partner with the city's trusted legal experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-[#D2A02A] text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-60">
                      100% Confidential • Top Rated Advocates • Transparent Fees
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 mt-12 lg:mt-0">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Lawyer in Kolkata?</h3>
                  <div className="w-12 h-1 bg-[#D2A02A] mb-4"></div>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak directly with our senior advocates in Kolkata today.
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
                      <Link href="/services/realestate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Property & Probate
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/marriage-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Divorce & Family
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/criminal-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Criminal Defense
                      </Link>
                    </li>
                  </ul>
                </div>
                
                 {/* Testimonial Snippet */}
                <div className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                   <div className="text-6xl text-[#D2A02A] absolute -top-4 -left-2 opacity-20">"</div>
                   <p className="relative z-10 italic text-sm text-gray-300 mb-4">
                     "Very knowledgeable about the Calcutta High Court Original Side procedures. Got us an urgent injunction order."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">A</div>
                     <span className="ml-3 font-bold text-sm">Amitava Das</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}