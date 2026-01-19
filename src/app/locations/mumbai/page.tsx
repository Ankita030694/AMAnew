import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Do you have lawyers who practice in the Bombay High Court?",
    answer: "Yes, our team includes seasoned advocates who practice on both the Original and Appellate sides of the Bombay High Court. We handle Writ Petitions, Commercial Suits, Arbitration Petitions, and Appeals with extensive experience in the rigorous procedures of Mumbai's apex court. We understand the nuances of the 'Original Side' jurisdiction, which is unique to Bombay, Calcutta, and Madras High Courts, allowing us to file substantive suits directly before the High Court."
  },
  {
    question: "Can you assist with property redevelopment (SRA) disputes in Mumbai?",
    answer: "Absolutely. Redevelopment and SRA (Slum Rehabilitation Authority) disputes are common in Mumbai. We represent cooperative housing societies, developers, and individual tenants in litigation regarding consent terms, delay in possession, non-payment of transit rent, and eligibility issues (Annexure II). We also handle disputes arising under Section 79A of the MCS Act regarding the appointment of developers."
  },
  {
    question: "What is your experience with Media and Entertainment law?",
    answer: "Being based in the entertainment capital, we have a specialized desk for Media & Entertainment Law. We assist production houses, artists, and distributors with contract drafting, copyright infringement suits, IPR protection, and defamation cases. We regularly handle 'John Doe' orders (Ashok Kumar orders) to prevent piracy of films before release and represent clients in disputes with music royalty societies like IPRS and PPL."
  },
  {
    question: "Do you handle cases in the NCLT Mumbai Bench?",
    answer: "Yes, we regularly appear before the National Company Law Tribunal (NCLT) Mumbai Bench. We represent financial creditors, operational creditors, and corporate debtors in insolvency proceedings under the Insolvency and Bankruptcy Code (IBC). We also handle cases of oppression and mismanagement (Sections 241-242 of the Companies Act) and mergers/demergers requiring Tribunal approval."
  },
  {
    question: "How do I file a divorce in the Bandra Family Court?",
    answer: "We guide you through the entire process at the Family Court in Bandra (BKC). Whether it is a mutual consent divorce which takes approx 6 months (or less with waiver) or a contested divorce involving complex allegations of cruelty or adultery, our compassionate family lawyers ensure your rights are protected. We also handle child custody, alimony (maintenance), and domestic violence proceedings under the PWDVA."
  },
  {
    question: "Do you handle cheque bounce (Section 138) cases in Mumbai?",
    answer: "Yes, we handle Section 138 Negotiable Instruments Act cases across all Metropolitan Magistrate courts in Mumbai, including Dadar, Andheri, Borivali, Vikhroli, Mazgaon, and Esplanade courts. We represent both complainants (filing the case) and the accused (seeking bail and defense), ensuring that the procedural technicalities of statutory notices and limitation periods are strictly adhered to."
  },
  {
    question: "What is the 'Pagdi' system and can you help with disputes related to it?",
    answer: "The 'Pagdi' system is a unique tenancy model prevalent in older parts of Mumbai like South Mumbai and Dadar. It involves a tenant being a part-owner of the premises. We assist landlords and tenants in disputes involving the transfer of tenancy, payment of 'pagdi' (premium), and eviction suits under the Maharashtra Rent Control Act, 1999."
  },
  {
    question: "What legal services do you offer for startups in Mumbai?",
    answer: "Mumbai is a thriving startup hub, especially in Powai and Andheri East. We assist startups with incorporation, co-founder agreements, fundraising (SHA/SSA), ESOPs, and intellectual property registration. We act as your external general counsel to navigate the regulatory landscape, ensuring compliance with RBI regulations for fintechs and data privacy laws for tech companies."
  },
  {
    question: "Can you help with Deemed Conveyance for Housing Societies?",
    answer: "Yes, Deemed Conveyance is critical for many housing societies in Mumbai where the builder refuses to transfer the land title. We assist Managing Committees in filing applications before the District Deputy Registrar (DDR) to obtain the Deemed Conveyance order and subsequently getting the property card and 7/12 extract mutated in the society's name."
  },
  {
    question: "Can you help with police complaints and bail matters in Mumbai?",
    answer: "Yes, our criminal defense team assists with filing FIRs, handling police investigations, and securing Anticipatory or Regular Bail from the Sessions Court and High Court. We handle white-collar crimes, EOW (Economic Offences Wing) cases, cyber crime matters, and NDPS cases with discretion and urgency."
  },
  {
    question: "How much do legal services cost in Mumbai?",
    answer: "Legal fees in Mumbai vary based on the complexity of the case and the seniority of the counsel. At AMA Legal Solutions, we believe in transparency. We offer a preliminary consultation to understand your case and provide a clear fee structure—whether it's a flat fee for drafting or a stage-wise fee for litigation—suited to your needs."
  },
  {
    question: "Do you provide online legal consultation?",
    answer: "Yes, we understand the fast-paced life of Mumbai where traffic can be a major hurdle. We offer high-definition video consultations via Zoom or Google Meet for clients who cannot visit our offices physically, ensuring you get timely legal advice from the comfort of your home or office."
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
      "name": "Mumbai",
      "item": "https://amalegalsolutions.com/locations/mumbai"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Mumbai",
  "founder": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://amalegalsolutions.com/author/anuj-anand-malik"
  },
  "image": "https://amalegalsolutions.com/city2.svg",
  "description": "Leading law firm in Mumbai providing expert legal services in Corporate Law, Media Law, Real Estate, and Litigation.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0760",
    "longitude": "72.8777"
  },
  "url": "https://amalegalsolutions.com/locations/mumbai",
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
    "reviewCount": "450"
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
  "name": "Legal Services Mumbai",
  "image": "https://amalegalsolutions.com/city2.svg",
  "description": "Top-tier legal services in Mumbai by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "450"
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
        "name": "Rajesh Mehta"
      },
      "reviewBody": "Excellent guidance on our SRA redevelopment dispute. They helped us get our rightful rent arrears from the builder."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanya Kapoor"
      },
      "reviewBody": "As a startup founder, I needed solid contracts. AMA's team in Mumbai was quick, efficient, and very professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Desai"
      },
      "reviewBody": "Highly recommended for NCLT matters. Their understanding of the IBC and corporate insolvency is impressive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "They handled my mutual divorce case at Bandra Family Court with great sensitivity. Very grateful for their support."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Mumbai | #1 Law Firm for High Court & Corporate Law",
  description:
    "Expert Lawyers in Mumbai for Bombay High Court, NCLT, Family Court. Best specialized advocates for Property Redevelopment, SRA, Divorce, Media Law & Corporate Disputes.",
  keywords: [
    "lawyers in mumbai",
    "law firm in mumbai",
    "advocates in bombay high court",
    "corporate lawyers mumbai",
    "real estate lawyer mumbai",
    "divorce lawyer mumbai",
    "criminal defense lawyer mumbai",
    "media and entertainment lawyers mumbai",
    "nclt lawyers mumbai",
    "sra dispute lawyer",
    "banking lawyers mumbai",
    "pagdi system lawyer",
    "deemed conveyance lawyer"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/mumbai',
  },
  openGraph: {
    title: "Lawyers in Mumbai | Top Legal Services Financial Capital",
    description: "Expert legal representation in Mumbai. Corporate, Civil, Criminal, and Media Law services by AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/locations/mumbai",
    type: "website",
    images: [
      {
        url: "/city2.svg",
        width: 1200,
        height: 630,
        alt: "Legal Services Mumbai",
      },
    ],
  },
};

export default function MumbaiLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "financial-capital", title: "Mumbai: The Legal Metropolis" },
    { id: "why-expert", title: "Why Expert Counsel Matters" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "corporate-finance", title: "Corporate & Finance" },
    { id: "real-estate", title: "Real Estate & SRA" },
    { id: "media-law", title: "Media & Entertainment" },
    { id: "litigation", title: "Litigation & Dispute Resolution" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "banking-insolvency", title: "Banking & Insolvency" },
    { id: "courts-guide", title: "Guide to Mumbai Courts" },
    { id: "our-methodology", title: "Our Methodology" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-stories", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Mumbai", href: "/locations/mumbai" },
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
            style={{ backgroundImage: "url('/bannerbg.png')" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Top-Tier Legal Services in <span className="text-[#D2A02A]">Mumbai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              Trusted advocacy in the Financial Capital of India. From the Bombay High Court to the NCLT and Family Courts, we protect your interests with unyielding dedication.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in Mumbai: Navigating Complexity with Precision</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Mumbai is not just the financial and commercial capital of India; it is a city of dreams, ambition, and intense competition. It is the beating heart of India's economy, housing the headquarters of major corporations, the Reserve Bank of India, and the vibrant Indian film industry. In such a high-stakes environment, legal challenges are inevitable, complex, and often require urgent attention. From high-value corporate mergers in Nariman Point and intellectual property battles in Andheri's media hub to critical property redevelopment disputes in the suburbs, the legal landscape of Mumbai is as dynamic as the city itself.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> has established itself as a trusted partner for businesses, families, and individuals navigating this complex ecosystem. We understand the unique pulse of this city. We know that in Mumbai, time is essentially money, and legal delays can lead to astronomical losses. Our team of expert lawyers combines swift, decisive action with deep legal acumen to deliver results that matter. We do not just offer legal advice; we offer strategic solutions that align with your commercial and personal goals.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    Whether you are an entrepreneur facing regulatory hurdles, a cooperative housing society dealing with a stalled redevelopment project, or a media house protecting its creative assets, we stand by you. Our practice spans across the Bombay High Court, City Civil & Sessions Court, National Company Law Tribunal (NCLT), Debts Recovery Tribunal (DRT), and other specialized forums. We bring a legacy of trust and a reputation for excellence to every case we handle.
                  </p>
                </section>

                {/* Financial Capital */}
                <section id="financial-capital" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">The Legal Hub of the Financial Capital</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Mumbai's status as the financial capital brings with it a concentration of regulatory bodies and financial institutions. It is home to the Reserve Bank of India (RBI), the Securities and Exchange Board of India (SEBI), and arguably the two most important stock exchanges in the country: the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). This unique ecosystem creates a specific set of legal needs that are distinct from any other city in India.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Corporate governance, securities law, and banking regulations are not just abstract concepts here; they are daily operational realities for thousands of businesses. A slight misstep in compliance can trigger notices from SEBI or the RBI, leading to severe penalties and reputational damage. Furthermore, the volume of commercial transactions means that contract enforcement and debt recovery are critical areas of litigation.
                  </p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Why a Mumbai-Specific Approach is Crucial</h4>
                    <p className="text-gray-700 mb-4">
                      The laws applied here often have distinct commercial implications and procedural nuances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Commercial Division Efficiency:</strong> The Bombay High Court's Commercial Division is one of the busiest and most efficient in the country, handling complex business disputes with specialized procedures designed for speed.</li>
                      <li><strong>Insolvency Hub:</strong> The NCLT Mumbai bench sees the highest volume of value-heavy Insolvency and Bankruptcy Code (IBC) cases in the country, often setting precedents for the rest of India.</li>
                      <li><strong>Real Estate Complexity:</strong> With unique statutes like the Maharashtra Ownership Flats Act (MOFA), laws regarding Slum Rehabilitation Authority (SRA) schemes, and the 'Pagdi' system, property law in Mumbai is widely considered the most complex in India.</li>
                    </ul>
                  </div>
                </section>

                {/* Why Expert Counsel Matters */}
                <section id="why-expert" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">The Cost of Inexperience in Mumbai's Courts</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a city where real estate prices rival New York and business deals run into billions of rupees, the margin for error is effectively zero. Hiring a lawyer who isn't well-versed with the local court procedures, the mindset of the judges, or specific local statutes can lead to disastrous outcomes.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For instance, filing a suit on the 'Original Side' of the Bombay High Court requires a specific understanding of the court's rules and registry procedures. Unlike most High Courts in India, which primarily hear appeals, the Bombay High Court has original jurisdiction to hear civil suits directly if the valuation exceeds certain limits (currently ₹1 Crore for Commercial Suits). This allows for a higher quality of adjudication but demands a higher standard of pleading.
                  </p>
                   <p className="text-lg leading-relaxed text-gray-700">
                    Our team doesn't just know the law; we know the courts. We know the corridors of the City Civil Court in Fort and Dindoshi, the bustling Family Court in Bandra, and the solemn halls of the High Court. This on-ground, tactical expertise gives our clients a significant strategic advantage, ensuring that procedural hurdles do not derail substantive justice.
                  </p>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our Mumbai office offers a full suite of legal services, tailored to the specific needs of the city's diverse population and business community. We have developed specialized desks to handle the most improved sectors of Mumbai's economy.
                  </p>
                </section>

                {/* Section: Corporate & Finance */}
                <section id="corporate-finance" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate Law, Startups & Finance</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    We serve the corporate engines of Mumbai. From agile startups in the Powai Valley and Andheri ease to established conglomerates in BKC and Lower Parel, we provide comprehensive legal support that covers the entire lifecycle of a business.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our corporate team is adept at handling complex transactions and ensuring regulatory compliance. We act as an extension of your in-house team, providing proactive advice to mitigate risks before they manifest.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>Private Equity & Venture Capital:</strong> Mumbai is the investment capital. We advise startups and investors on Term Sheets, Due Diligence, Share Subscription Agreements (SSA), and Shareholders' Agreements (SHA). We help structure deals to protect founders' equity while satisfying investor requirements.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>NCLT & IBC Practice:</strong> We have a robust practice at the NCLT Mumbai Bench. We represent Financial and Operational Creditors in filing insolvency petitions under Section 7 and 9 of the IBC. We also defend Corporate Debtors and assist in Corporate Insolvency Resolution Processes (CIRP).
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>Mergers & Acquisitions (M&A):</strong> We handle schemes of arrangement, mergers, demergers, and acquisitions, ensuring compliance with the Companies Act, 2013, and obtaining necessary approvals from the NCLT and Regional Director.
                        </div>
                    </li>
                     <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">➤</span>
                        <div className="text-gray-700">
                          <strong>Regulatory Compliance:</strong> Assisting NBFCs and fintech companies with RBI compliances, and listed companies with SEBI regulations (LODR, PIT).
                        </div>
                    </li>
                  </ul>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate, Redevelopment & SRA Litigation</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Real estate is arguably the most valuable asset class in Mumbai, and consequently, the source of the most bitter disputes. The legal framework here is unique and requires specialized knowledge.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-6 mt-6">
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Redevelopment Litigation</h4>
                        <p className="text-gray-700 text-sm">
                          With thousands of old buildings going for redevelopment, disputes are rampant. We utilize Section 9 of the Arbitration Act to get interim reliefs for tenants who are denied rent or possession. We also assist Societies in terminating non-performing developers and appointing new ones under Section 79A of the MCS Act.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">SRA (Slum Rehabilitation)</h4>
                        <p className="text-gray-700 text-sm">
                          We represent eligible slum dwellers and societies in disputes regarding Annexure-II eligibility, transit rent arrears, and allotment of permanent rehab tenements. We appear before the Apex Grievance Redressal Committee (AGRC) and heavily contest matters in the High Court writ jurisdiction.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Deemed Conveyance</h4>
                        <p className="text-gray-700 text-sm">
                          Many societies in Mumbai do not have land title. We handle the entire Deemed Conveyance process: from filing the application with the District Deputy Registrar (DDR) to registering the conveyance deed and mutating the property card in the society's name.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Pagdi System Disputes</h4>
                        <p className="text-gray-700 text-sm">
                          Unique to Mumbai, the Pagdi system involves complex tenancy rights. We handle disputes regarding the transfer of tenancy, demand for exorbitant protection money (pagdi) by landlords, and eviction suits on grounds of bonafide requirement or non-user.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Section: Media Law */}
                <section id="media-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Media & Entertainment Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     In the heart of Bollywood and the Indian television industry, content is king, and protecting it is our job. We work with production houses, OTT platforms, actors, writers, and digital creators.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li><strong>Contract Drafting:</strong> Artist Service Agreements, Film Rights Agreements, In-Film Branding deals, and Music Licensing contracts.</li>
                     <li><strong>Copyright Litigation:</strong> Filing suits for copyright infringement, seeking injunctions against release of films (John Doe orders) in case of plagiarism or title theft.</li>
                     <li><strong>Defamation & Personality Rights:</strong> protecting celebrities from unauthorized use of their likeness and handling defamation notices.</li>
                     <li><strong>Censor Board (CBFC) Issues:</strong> Representing filmmakers in appeals against cuts or certification denials by the CBFC.</li>
                   </ul>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Litigation & Dispute Resolution</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our litigation team is a formidable presence in Mumbai's courts. We are not just 'drafting lawyers'; we are arguing counsels. We handle varied disputes including:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                     <li><strong>Civil Suits:</strong> Money recovery suits, partition suits for family property, and specific performance of contracts.</li>
                     <li><strong>Writ Petitions:</strong> Challenging arbitrary orders of government authorities like the BMC (Municipal Corporation), MHADA, or SRA in the High Court.</li>
                     <li><strong>Testamentary Petitions:</strong> Handling Probates, Letters of Administration, and Succession Certificates, which are mandatory in Mumbai for asset transfer after death.</li>
                   </ul>
                   <p className="text-lg leading-relaxed text-gray-700">
                     We strongly believe in <strong>Alternative Dispute Resolution (ADR)</strong>. With Mumbai being a center for commercial arbitration, we represent clients in domestic and international arbitrations to resolve disputes efficiently outside the courtroom, often enforcing arbitral awards as decrees of the court.
                   </p>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We provide sensitive, discreet, and robust legal support for family matters. We understand that family disputes are emotionally draining, especially in a fast-paced city. Our team handles cases at the <strong>Family Court in Bandra (BKC)</strong> with empathy and professionalism.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700 mb-4">
                     Our services cover:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Divorce Proceedings:</strong> Both Mutual Consent Divorce (handling waiver of cooling-off period) and Contested Divorce on grounds of cruelty, adultery, or desertion.</li>
                     <li><strong>Child Custody:</strong> Aggressively fighting for custodial rights and visitation access, always prioritizing the welfare of the child.</li>
                     <li><strong>Maintenance & Alimony:</strong> Ensuring fair financial support for spouses and children under Section 125 CrPC and personal laws.</li>
                     <li><strong>D.V. Act:</strong> Obtaining protection orders and residence orders for victims of domestic violence.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Facing a criminal charge can be daunting. Our criminal law practice is robust and responsive. We specialize in <strong>White-Collar Crimes</strong>, managing cases involving the Economic Offences Wing (EOW) and CBI.
                   </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">
                     We assist with:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Bail Matters:</strong> Securing Anticipatory Bail to prevent arrest and Regular Bail after arrest from Sessions Courts and the High Court.</li>
                     <li><strong>Cheque Bounce:</strong> Handling Section 138 NI Act cases across all Metropolitan Magistrate courts (Dadar, Andheri, Borivali, etc.).</li>
                     <li><strong>Cyber Crime:</strong> Assisting victims of online fraud in filing complaints and defending accused persons in cyber crime cells.</li>
                     <li><strong>Quashing FIRs:</strong> Approaching the High Court under Section 482 CrPC to quash false or settled FIRs.</li>
                   </ul>
                </section>

                {/* Section: Banking */}
                <section id="banking-insolvency" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Banking & Debt Recovery</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We represent clients in the <strong>Debt Recovery Tribunal (DRT)</strong> in Mumbai (located at Ballard Estate and Vashi). Whether you are a borrower facing SARFAESI actions, possession notices, or auction of assets, we provides the legal shield you need. We also assist in negotiating One Time Settlement (OTS) schemes with banks to close loan accounts amicably.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Mumbai</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Mumbai's judicial infrastructure is historic, vast, and can be intimidating. Here is a guide to the key courts where we practice, helping you understand where your matter might be heard.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Bombay High Court (Fort)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          A majestic heritage structure, this is one of the oldest High Courts in India. Unlike most others, it has <strong>Original Jurisdiction</strong>. This means civil suits valued above ₹1 Crore (Commercial) or ₹10 Crore (Non-Commercial) arising within Mumbai limits are filed <em>directly</em> here, not in the lower courts. It is also the appellate court for the entire state of Maharashtra and Goa.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">SB</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">City Civil & Sessions Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          The primary trial court for Mumbai. <br/>
                          <strong>Main Branch (Old Secretariat, Fort):</strong> Handles civil and criminal matters for South Mumbai (Colaba to Mahim/Sion). <br/>
                          <strong>Dindoshi Branch (Goregaon):</strong> Handles matters for the suburbs (Bandra to Dahisar/Mulund). This division is crucial for suburban property disputes.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">SC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Small Causes Court</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located at Dhobi Talao (L.T. Marg) and Bandra. This court is EXCLUSIVE for rent disputes, landlord-tenant matters under the Rent Control Act, and return of property. If you have a Pagdi dispute or a leave and license issue, your case is likely here.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">FC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Family Court (Bandra Kurla Complex)</h4>
                        <p className="text-gray-700 text-sm mt-1">The primary forum for all matrimonial disputes including divorce, custody, and alimony in Mumbai. It is known for its mandatory counseling sessions aimed at reconciliation or amicable separation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Specialized Tribunals</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>NCLT:</strong> Located at Cuffe Parade, dealing with Company Law.<br/>
                          <strong>DRT:</strong> Located at Ballard Estate (DRT-I, II) and Vashi (DRT-III), dealing with bank recovery.<br/>
                          <strong>MahaRERA:</strong> Located at Bandra East, the regulator for real estate projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Methodology */}
                <section id="our-methodology" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology: Precision & Pace</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     In Mumbai, standardized legal solutions fail because every inch of space and every clause in a contract is fought over. We adopt a bespoke approach:
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">📊</div>
                        <h4 className="font-bold text-gray-900">Strategic Analysis</h4>
                        <p className="text-xs text-gray-600 mt-2">We meticulously analyze the commercial and legal angles of every dispute, often spotting leverage points others miss.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className="font-bold text-gray-900">Swift Action</h4>
                        <p className="text-xs text-gray-600 mt-2">We understand urgency. We move fast to secure ad-interim reliefs and stay orders when it matters most.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🗣️</div>
                        <h4 className="font-bold text-gray-900">Effective Advocacy</h4>
                        <p className="text-xs text-gray-600 mt-2">Our counsels are known for their persuasive and clear arguments in court, cutting through the noise.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Holistic Care</h4>
                        <p className="text-xs text-gray-600 mt-2">We guide you not just legally, but also offer strategic business advice to help you grow despite the litigation.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Mumbai demands excellence. Mediocrity in legal representation can be fatal to your case. AMA Legal Solutions delivers the excellence you need.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Local Expertise</h3>
                      <p className="text-gray-600 relative z-10">We have in-depth knowledge of hyper-local laws like MOFA, Rent Control Act, and Slum Areas Act, which are specific to Maharashtra.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Transparent Fees</h3>
                      <p className="text-gray-600 relative z-10">No hidden costs. We provide clear estimations and engagement letters before starting any work, so you can plan your finances.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Result Oriented</h3>
                      <p className="text-gray-600 relative z-10">We don't just file cases; we aim to win them. Our focus is on solving the problem, whether through aggressive litigation or smart settlement.</p>
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
                        "Excellent guidance on our SRA redevelopment dispute. They helped us get our rightful rent arrears from the builder which were pending for 2 years."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rajesh Mehta</p>
                          <p className="text-xs text-gray-500">Secretary, CHS Mumbai</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "As a startup founder in Powai, I needed solid contracts. AMA's team in Mumbai was quick, efficient, and very professional with our Series A paperwork."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sanya Kapoor</p>
                          <p className="text-xs text-gray-500">Founder, Fintech Startup</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Highly recommended for NCLT matters. Their understanding of the IBC and corporate insolvency is impressive. They saved my company from liquidation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amit Desai</p>
                          <p className="text-xs text-gray-500">Director, Manufacturing Co.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "They handled my mutual divorce case at Bandra Family Court with great sensitivity. The entire process was smooth and dignified. Very grateful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Sharma</p>
                          <p className="text-xs text-gray-500">HR Professional</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help in Mumbai</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                      Navigate Mumbai's legal landscape with confidence. Partner with the city's trusted legal experts today.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Lawyer in Mumbai?</h3>
                  <div className="w-12 h-1 bg-[#D2A02A] mb-4"></div>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak directly with our senior advocates in Mumbai today.
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
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Real Estate & SRA
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Divorce & Family
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/entertainment" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Media Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> IPR & Trademark
                      </Link>
                    </li>
                  </ul>
                </div>
                
                 {/* Testimonial Snippet */}
                <div className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                   <div className="text-6xl text-[#D2A02A] absolute -top-4 -left-2 opacity-20">"</div>
                   <p className="relative z-10 italic text-sm text-gray-300 mb-4">
                     "Highly recommended for NCLT matters. Their understanding of the IBC and corporate insolvency is impressive."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">A</div>
                     <span className="ml-3 font-bold text-sm">Amit Desai, Director</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}