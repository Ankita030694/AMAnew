
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Extended FAQ data (40+ items)
const faqs = [
  {
    question: "Do you specialize in SaaS and IT contracts in Chennai?",
    answer: "Yes, Chennai is India's SaaS capital. We work closely with SaaS startups along the OMR IT corridor, drafting Master Service Agreements (MSA), Service Level Agreements (SLA), Data Processing Agreements (DPA) compliant with GDPR/DPDP Act, and handling cross-border software licensing disputes."
  },
  {
    question: "How do you handle property disputes involving the Chennai Metropolitan Development Authority (CMDA)?",
    answer: "CMDA regulations govern most real estate in Chennai. We assist clients in challenging illegal deviations, handling regularization applications under the Tamil Nadu Town and Country Planning Act, and filing writ petitions in the Madras High Court against arbitrary rejections of building plan approvals."
  },
  {
    question: "Can you help with customs and maritime law issues at Chennai Port?",
    answer: "Absolutely. With Chennai being a major port city, we have specialized experience in Maritime Law. We handle bill of lading disputes, cargo claims, customs seizure/confiscation matters under the Customs Act, and represent logistics companies in the High Court and Tribunals."
  },
  {
    question: "What family law services do you offer in Chennai?",
    answer: "We provide comprehensive family law services including mutual consent divorce, contested divorce, child custody battles, and restitution of conjugal rights. We appear regularly before the Family Courts in the High Court campus and handle appeals in the Madras High Court."
  },
  {
    question: "Do you assist with automotive industry labor disputes?",
    answer: "Yes, given Chennai's status as the 'Detroit of India', we represent both management and trade unions in the automotive and manufacturing sectors. We handle disputes regarding wage settlements, strikes/lockouts, unfair labor practices, and disciplinary proceedings under the Industrial Disputes Act."
  },
  {
    question: "What is the procedure for trademark registration for a Chennai-based business?",
    answer: "The process involves a trademark search, filing the application with the Trademark Registry (IP India, Chennai branch is located in Guindy), handling examination reports/objections, and attending hearings if necessary. We manage the entire lifecycle from filing to registration and renewal."
  },
  {
    question: "Do you handle Cheque Bounce cases in Chennai?",
    answer: "Yes, we file and defend cases under Section 138 of the Negotiable Instruments Act. Chennai has dedicated Metropolitan Magistrate courts for NI Act cases (like in Egmore and Saidapet). We focus on swift recovery of the debt through statutory notices and summary trials."
  },
  {
    question: "How can I get an injunction against property trespassing in Chennai?",
    answer: "You can file a suit for permanent injunction in the City Civil Court or the Madras High Court (depending on the pecuniary jurisdiction). If there is an immediate threat, we move urgent applications for interim injunctions (Order 39 Rule 1 & 2 CPC) to protect your possession."
  },
  {
    question: "Do you handle consumer court cases against builders in Chennai?",
    answer: "Yes, we represent homebuyers in the District Consumer Disputes Redressal Commissions (North/South Chennai) and the State Commission. We fight for compensation for delayed possession, poor construction quality, and unfair trade practices."
  },
  {
    question: "Where is the Madras High Court located and what is its jurisdiction?",
    answer: "The Madras High Court is located in George Town (Parrys Corner). It has jurisdiction over the entire state of Tamil Nadu and the Union Territory of Puducherry. It is one of the oldest Chartered High Courts in India with Original Jurisdiction for civil suits in Chennai city limits."
  },
  {
    question: "How do I file a divorce petition in Chennai?",
    answer: "Divorce petitions in Chennai are filed at the Family Courts located within the Madras High Court campus. For mutual consent divorce, both parties must appear. For contested divorce, the petition is filed based on grounds like cruelty, desertion, or adultery. We guide you through the counseling sessions and trial process."
  },
  {
    question: "Can I get a stay order on property demolition from CMDA?",
    answer: "Yes, if the CMDA or Chennai Corporation issues a demolition notice under the Town and Country Planning Act, we can file a Writ Petition or a civil suit in the Madras High Court or City Civil Court to seek an immediate stay order (Injunction) pending the final disposal of the case, provided there are valid legal grounds."
  },
  {
    question: "Do you handle cyber crime complaints in Chennai?",
    answer: "Yes, we assist in filing complaints with the Cyber Crime Cell (CCB) in Chennai (located at the Commissioner office, Vepery) for online frauds, data theft, and harassment. We also represent clients in bail matters related to cyber offenses and assist in recovering frozen bank accounts."
  },
  {
    question: "What is the limitation period for filing a money recovery suit in Chennai?",
    answer: "The general limitation period for filing a civil suit for recovery of money is 3 years from the date the cause of action serves (e.g., date of default or date of last payment). Suits are filed in the Small Causes Court, City Civil Court, or High Court depending on the claim amount."
  },
  {
    question: "How to register a Will in Chennai?",
    answer: "A Will can be registered at the office of the Sub-Registrar within whose jurisdiction the testator lives. While registration is not mandatory, it is highly recommended to avoid future disputes. We assist in drafting clear, legally sound Wills and witnessing the registration process."
  },
  {
    question: "Do you handle medical negligence cases in Chennai?",
    answer: "Yes, we represent victims of medical negligence in the Consumer Courts and also file criminal complaints where applicable. We work with medical experts to establish the breach of duty by hospitals or doctors in Chennai."
  },
  {
    question: "Can you help in quashing an FIR in Madras High Court?",
    answer: "Yes, under Section 482 of the CrPC, the Madras High Court has inherent powers to quash an FIR if it is frivolous, an abuse of process of law, or if the parties have compromised (in non-heinous offenses). We file quash petitions to relieve clients from false criminal prosecution."
  },
  {
    question: "What are the labor laws applicable to IT companies in Chennai?",
    answer: "IT companies in Tamil Nadu are exempted from certain provisions of the Industrial Employment (Standing Orders) Act for intermittent periods but must comply with the TN Shops and Establishments Act regarding working hours, leave, and termination procedures. We advise IT firms on full compliance."
  },
  {
    question: "How to get a Succession Certificate in Chennai?",
    answer: "A Succession Certificate is required to inherit movable assets like bank deposits and shares. The application is filed in the Madras High Court (Original Side) if the deceased resided in Chennai. The process involves filing a petition, publication, and recording evidence."
  },
  {
    question: "Do you handle NDPS (Drug) cases in Chennai?",
    answer: "Yes, we represent clients in Special Courts for NDPS Act cases. Since bail in NDPS cases is stringent (Section 37), we prepare robust bail applications highlighting procedural lapses in search and seizure by the police."
  },
  {
    question: "What is the procedure for Inter-caste marriage registration?",
    answer: "Inter-caste marriages can be registered under the Special Marriage Act, 1954. A 30-day notice is given to the marriage registrar. We assist couples in preparing the necessary documentation and ensure police protection if there is a threat of honor violence, by approaching the High Court."
  },
  {
    question: "Can an NRI file a case in Chennai courts through a Power of Attorney?",
    answer: "Yes, an NRI can grant a Power of Attorney (PoA) to a trusted person in Chennai to sign case papers and appear on their behalf. The PoA must be properly adjudicated in India. We assist NRIs in drafting and validating such PoAs for legal proceedings."
  },
  {
    question: "Do you handle arbitration matters for construction disputes?",
    answer: "Yes, construction disputes often involve arbitration clauses. We represent builders and contractors in arbitration proceedings and also file Section 9 applications for interim relief and Section 34 petitions for setting aside arbitral awards in the Madras High Court."
  },
  {
    question: "What is the court fee for filing a suit in Madras High Court?",
    answer: "The court fee depends on the value of the suit and the nature of relief sought (e.g., recovery of money, specific performance, partition). It is generally calculated as a percentage of the suit value (approx 1%) under the Tamil Nadu Court Fees and Suits Valuation Act."
  },
  {
    question: "Do you handle domestic violence cases against husbands?",
    answer: "Yes, we defend husbands falsely implicated in domestic violence cases (DV Act) and 498A IPC cases. We help in securing Anticipatory Bail and represent them in the trial to prove their innocence."
  },
  {
    question: "How to challenge a government tender rejection in Tamil Nadu?",
    answer: "Rejection of a tender can be challenged by filing a Writ Petition in the Madras High Court on grounds of arbitrariness, bias, or violation of the Tamil Nadu Transparency in Tenders Act. We act swiftly to seek a stay on the tender award process."
  },
  {
    question: "Can I claim maintenance from my husband without divorce?",
    answer: "Yes, a wife can claim maintenance under Section 125 of the CrPC or under the Domestic Violence Act without filing for divorce. The court looks at the husband's income and the wife's needs to determine the quantum."
  },
  {
    question: "Do you help with Startup Registration in Chennai?",
    answer: "Yes, we assist startups in incorporation (Pvt Ltd, LLP), registration with Startup India (DPIIT), and obtaining MSME certification. We also help in drafting founders' agreements and vesting schedules."
  },
  {
    question: "What is the remedy for breach of contract in Chennai?",
    answer: "For breach of contract, you can sue for specific performance (compelling the other party to perform) and/or damages (compensation for loss). These suits are filed in the Commercial Courts or Civil Courts depending on the value and nature of the dispute."
  },
  {
    question: "Do you handle environmental clearance matters for factories?",
    answer: "Yes, we advise industries on obtaining Consent to Establish/Operate (CTE/CTO) from the Tamil Nadu Pollution Control Board (TNPCB) and represent them before the National Green Tribunal (NGT) Southern Zone in Chennai."
  },
  {
    question: "How to evict a tenant who is not paying rent in Chennai?",
    answer: "Under the new TN Rent statutes, you must first register the tenancy agreement. If the tenant defaults, you can approach the Rent Court (Rent Authority) for eviction orders. The process is now faster than the old civil suits."
  },
  {
    question: "Do you provide legal opinion on property title for bank loans?",
    answer: "Yes, banks and financial institutions require a Legal Opinion (Title Report) to sanction home loans or loans against property. Our panel lawyers scrutinize property documents for the past 13-30 years to certify a clear and marketable title."
  },
  {
    question: "Can I change my name legally in Chennai?",
    answer: "Yes, name change involves an affidavit, publication in the Tamil Nadu Government Gazette, and newspaper advertisement. We assist clients in drafting the affidavit and facilitating the Gazette publication process."
  },
  {
    question: "Do you handle copyright infringement cases for Kollywood movies?",
    answer: "Yes, we represent producers and writers in copyright disputes, script theft allegations, and music royalty issues in the film industry. We file suits for injunctions against unauthorized release or streaming (John Doe orders)."
  },
  {
    question: "What to do if my cheque is dishonored?",
    answer: "You must send a legal notice to the drawer within 30 days of the dishonor memo. If they fail to pay within 15 days, you must file a complaint under Section 138 NI Act before the Magistrate within the next 30 days. We handle this entire timeline strictly."
  },
  {
    question: "Do you help with GST notice replies?",
    answer: "Yes, we assist businesses in drafting replies to GST show cause notices, appearing for personal hearings, and filing appeals before the GST Appellate Authority or the High Court if natural justice is violated."
  },
  {
    question: "How to deal with harassment by loan recovery agents?",
    answer: "RBI guidelines prohibit harassment. We can help you file police complaints against abusive agents and represent you in banking ombudsman proceedings. We also negotiate One Time Settlements (OTS) with banks for NPA accounts."
  },
  {
    question: "Do you handle international child custody (abduction) cases?",
    answer: "Yes, these are complex habeas corpus matters. If a child is brought to Chennai from abroad by one parent without consent, the limitation is often the High Court. We handle such sensitive cross-border custody battles."
  },
  {
    question: "How to get a legal heir certificate in Chennai?",
    answer: "Legal Heir certificates are issued by the Tahsildar. If the application is rejected or disputed, you may need to file a civil suit for a declaration of legal heirship. We assist in appealing rejection orders or filing the necessary civil suits."
  },
  {
    question: "What is the punishment for cyber stalking in India?",
    answer: "Cyber stalking is punishable under Section 354D of the IPC and provisions of the IT Act. Punishment can extend up to 3-5 years. We assist victims in filing complaints to ensure the accused is booked and prosecute the case diligently."
  }
];

// Service Schema items (12 diverse services)
const servicesData = [
  { name: "Corporate Law Service", description: "Expert legal counsel for company incorporation, compliances, and M&A in Chennai." },
  { name: "SaaS Contract Drafting", description: "Specialized drafting of MSAs, SLAs, and Privacy Policies for Chennai's IT sector." },
  { name: "Real Estate Litigation", description: "Resolving CMDA, DTCP, and property title disputes in Madras High Court." },
  { name: "Divorce & Family Law", description: "Compassionate representation in mutual and contested divorce cases in Chennai Family Courts." },
  { name: "Criminal Defense", description: "Bail, Anticipatory Bail, and Trial defense for criminal offenses in Chennai." },
  { name: "Intellectual Property Rights", description: "Trademark and Patent filing, prosecution, and litigation at IP India Chennai." },
  { name: "Labor & Industrial Law", description: "Advisory for factories on labor compliances, unions, and industrial disputes." },
  { name: "Maritime & Shipping Law", description: "Handling cargo claims, ship arrest, and customs disputes at Chennai Port." },
  { name: "Consumer Protection", description: "Representing consumers in District and State Commissions against unfair trade practices." },
  { name: "Cyber Crime Defense", description: "Legal assistance for cyber fraud, data theft, and online harassment cases." },
  { name: "Cheque Bounce (NI Act)", description: "Filing and defending Section 138 cases ensuring swift debt recovery." },
  { name: "Writ Jurisdiction", description: "Filing Writ Petitions under Article 226 against state actions in Madras High Court." }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://amalegalsolutions.com/locations" },
    { "@type": "ListItem", "position": 3, "name": "Chennai", "item": "https://amalegalsolutions.com/locations/chennai" }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Chennai",
  "image": "https://amalegalsolutions.com/city6.svg",
  "description": "Leading law firm in Chennai providing expert legal services in Madras High Court Litigation, Corporate Law, and Real Estate.",
  "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": "13.0827", "longitude": "80.2707" },
  "url": "https://amalegalsolutions.com/locations/chennai",
  "telephone": "+918700343611",
  "priceRange": "$$",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "20:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "195" },
  // Embedding Services directly into the LegalService schema as 'hasOfferCatalog' is typically for Product, but 'areaServed' or 'knowsAbout' works well.
  // Ideally, creating separate Service nodes linked via 'provider' is better for rich results.
};

// Separate Service Schemas
const serviceSchemas = servicesData.map(service => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LegalService",
    "name": "AMA Legal Solutions",
    "image": "https://amalegalsolutions.com/city6.svg",
    "description": "Leading law firm in Chennai providing expert legal services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "telephone": "+918700343611",
    "priceRange": "$$"
  },
  "areaServed": { "@type": "City", "name": "Chennai" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name
      }
    }
  }
}));

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

// Review Schema (10 items)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Services Chennai",
  "image": "https://amalegalsolutions.com/city6.svg",
  "description": "Top-rated legal services in Chennai by AMA Legal Solutions.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "195" },
  "review": [
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Karthik Subramanian" }, "reviewBody": "Their expertise in SaaS contracts is unmatched. They drafted our MSA and DPA perfectly for US clients." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Meera Venkatesh" }, "reviewBody": "We faced a serious issue with CMDA regarding our apartment complex. AMA lawyers handled the writ petition brilliantly." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewBody": "Excellent criminal defense team. They helped me quash a false FIR in the Madras High Court." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "author": { "@type": "Person", "name": "Divya Reddy" }, "reviewBody": "Very professional handling of my divorce case. Empathetic and effective representation." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Suresh Krishnan" }, "reviewBody": "Helped me recover 50 lakhs in a cheque bounce case. Their strategy in Egmore court was precise." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Lakshmi Narayanan" }, "reviewBody": "Knowledgeable team for property registration and title verification. Saved me from buying a litigated land." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "John Peter" }, "reviewBody": "Best lawyers for labor disputes in Chennai. They represented our union very effectively." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "author": { "@type": "Person", "name": "Priya Sundaram" }, "reviewBody": "Good advice on startup incorporation. Handled all my ROC filings on time." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Ahmed Khan" }, "reviewBody": "Very thorough with cyber crime complaints. They helped unfreeze my bank account quickly." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Srinivasan R" }, "reviewBody": "Professional and transparent. No hidden fees. Highly recommended for civil suits." }
  ]
};

export const metadata = {
  title: "Lawyers in Chennai | Best High Court Advocates & Corporate Law Firm | AMA Legal Solutions",
  description:
    "Expert Lawyers in Chennai for Madras High Court, SaaS/IT Law, Real Estate (CMDA), and Family Matters. Top advocates for Civil Litigation and Maritime Law.",
  keywords: [
    "lawyers in chennai",
    "law firm in chennai",
    "advocates in madras high court",
    "saas lawyer chennai",
    "real estate lawyer chennai",
    "cmda dispute lawyer",
    "divorce lawyer chennai",
    "family court advocates chennai",
    "maritime lawyer chennai",
    "corporate lawyers chennai",
    "criminal defense lawyer chennai",
    "labour law experts chennai"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/locations/chennai',
  },
  openGraph: {
    title: "Lawyers in Chennai | Expert Legal Services Tamil Nadu",
    description: "Leading legal representation in Chennai. Specializing in Madras High Court writs, Corporate Law, and Real Estate.",
    url: "https://amalegalsolutions.com/locations/chennai",
    type: "website",
    images: [
      {
        url: "/city6.svg", 
        width: 1200,
        height: 630,
        alt: "Legal Services Chennai",
      },
    ],
  },
};

export default function ChennaiLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-legacy", title: "Chennai's Legal Legacy" },
    { id: "why-expert", title: "Why You Need Experts" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "corporate-saas", title: "Corporate & SaaS Law" },
    { id: "real-estate", title: "Real Estate & CMDA" },
    { id: "litigation", title: "High Court Litigation" },
    { id: "family-law", title: "Family & Divorce" },
    { id: "industrial-law", title: "Industrial & Labor" },
    { id: "courts-guide", title: "Courts in Chennai Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-stories", title: "Client Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Chennai", href: "/locations/chennai" },
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
      {/* Injecting multiple Service schemas */}
      {serviceSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#D2A02A] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/city6.svg')", filter: "brightness(0.6)" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Legal Excellence in <span className="text-[#FFE0B2]">Chennai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
               From the Madras High Court to the OMR IT Corridor. We are your trusted partners for Litigation, Corporate Strategy, and Dispute Resolution.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Defending Rights in the Gateway of South India</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Chennai is a city where deep-rooted tradition meets cutting-edge technology. Home to the SaaS revolution and a robust automotive sector, it demands legal services that are as versatile as its economy. Presiding over it all is the majestic <strong>Madras High Court</strong>, a beacon of justice for over a century.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we pride ourselves on being deeply ingrained in Chennai's legal ecosystem. Whether you are a startup founder in Taramani needing an IP strategy, a manufacturer in Oragadam facing labor unrest, or a family in Anna Nagar seeking property resolution, we are here to serve.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our approach bridges the precision of corporate law with the aggressive representation required in litigation. We speak the language of business and the language of the courts.
                  </p>
                </section>

                {/* Chennai Legal Context */}
                <section id="legal-legacy" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Chennai's Unique Legal Landscape</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     The practice of law in Chennai is shaped by the <strong>Madras High Court's Original Jurisdiction</strong>, meaning certain civil suits can be filed directly in the High Court rather than lower courts. This is a unique privilege shared by only a few cities in India.
                   </p>
                   <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#D2A02A] my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Key Legal Hubs</h4>
                    <p className="text-gray-700 mb-4">
                      Our presence spans across the critical judicial zones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Madras High Court (Parrys):</strong> The nerve center for Writ Petitions, Company Appeals, and Maritime cases.</li>
                      <li><strong>NCLT Chennai Bench:</strong> Handling insolvency and corporate disputes for the entire southern region.</li>
                      <li><strong>IPAB / Trademark Registry (Guindy):</strong> Critical for our Intellectual Property practice.</li>
                    </ul>
                  </div>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Advantage of Local Expertise</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Navigating Chennai's bureaucracy requires more than just legal knowledge; it requires on-the-ground experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">CMDA Regularization</h4>
                        <p className="text-sm text-gray-700">Misunderstanding the Development Control Rules (DCR) of the CMDA can lead to your property being locked and sealed for unauthorized construction.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">SaaS Contracts</h4>
                        <p className="text-sm text-gray-700">For Chennai's SaaS companies, a poorly drafted Terms of Service can invite class-action lawsuits from global customers. We ensure GDPR & CCPA compliance.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Labor Compliance</h4>
                        <p className="text-sm text-gray-700">With strict enforcement of labor laws in Tamil Nadu, manufacturing units face heavy fines for non-compliance with the Factories Act.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Original Side Suits</h4>
                        <p className="text-sm text-gray-700">Filing a suit in the City Civil Court when it lies in the High Court's Original Jurisdiction can waste years. We evaluate jurisdiction precisely.</p>
                     </div>
                  </div>
                </section>

                 {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    We tailor our services to the diverse needs of Chennai, from individual support to multinational corporate advisory.
                  </p>
                </section>

                {/* Section: Corporate & SaaS */}
                <section id="corporate-saas" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate Law & SaaS Advisory</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Chennai is the SaaS capital of India. We act as external counsel for tech companies, helping them scale globally.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Tech Contracts:</strong> Drafting Master Service Agreements (MSA), SaaS Subscription Agreements, and SLAs.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Data Privacy:</strong> Ensuring compliance with the Digital Personal Data Protection (DPDP) Act, GDPR, and other global standards.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Incorporation & Secretarial:</strong> Handling company registration, annual filings, and board resolutions.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>IPR Protection:</strong> Filing trademarks and patents to potential your intellectual assets.</div>
                    </li>
                  </ul>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate & CMDA Matters</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Property law in Chennai involves navigating the CMDA, DTCP, and Housing Board.
                   </p>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Approvals & Regularization</h4>
                     <p className="text-gray-700 text-sm">
                       We assist in obtaining planning permissions and regularizing unauthorized constructions under permissible schemes. We also challenge demolition notices.
                     </p>
                   </div>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Title Verification</h4>
                     <p className="text-gray-700 text-sm">
                       Conducting exhaustive title searches (EC check, Patta/Chitta verification) to ensure 'clean' property transfers.
                     </p>
                   </div>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Landlord-Tenant Disputes</h4>
                     <p className="text-gray-700 text-sm">
                       Handling eviction suits and rental disputes under the new Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act.
                     </p>
                   </div>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">High Court & Civil Justice</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our litigation practice is robust and result-oriented.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Writ Jurisdiction:</strong> Filing Article 226 petitions against state authorities.</li>
                     <li><strong>Original Side Suits:</strong> Filing civil suits directly in the High Court for matters valued above the pecuniary limit.</li>
                     <li><strong>Criminal Defense:</strong> Handling bail, trial defense, and quashing petitions (Section 482 CrPC).</li>
                     <li><strong>Maritime Law:</strong> Representing clients in ship arrest and cargo claims at Chennai Port.</li>
                   </ul>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We provide compassionate counsel for personal and family matters.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Divorce Proceedings</strong>
                        <p className="text-sm text-gray-600">Handling Mutual Consent and Contested divorce cases in the Chennai Family Courts.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Child Custody</strong>
                        <p className="text-sm text-gray-600">Prioritizing the welfare of the child in custody and visitation battles.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Domestic Violence</strong>
                        <p className="text-sm text-gray-600">Filing for protection orders and residence orders under the DV Act.</p>
                      </div>
                   </div>
                </section>

                {/* Section: Commercial Law */}
                <section id="industrial-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Industrial & Labor Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We support Chennai's vast manufacturing belt (Oragadam, Sriperumbudur).
                   </p>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle <strong>Industrial Disputes</strong>, wage settlements, PF/ESI compliance, and represent management in Labor Courts and tribunals. We also advise on POSH compliance for factories.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Guide to Courts in Chennai</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    A brief overview of the forums where we represent you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">MHC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Madras High Court</h4>
                        <p className="text-gray-700 text-sm mt-1">Located in Parrys. A heritage structure handling constitutional writs, appeals, and original side civil suits.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">CC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">City Civil Court</h4>
                        <p className="text-gray-700 text-sm mt-1">Located within the High Court campus. Handling civil disputes within Chennai city jurisdiction.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">FC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Family Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">Located in the High Court campus. Exclusive jurisdiction for matrimonial matters.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">NC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">NCLT Chennai</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Located in Mannady to handle company law and insolvency matters.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The AMA Approach</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     Our practice is built on trust, intelligence, and speed.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Accessibility</h4>
                        <p className="text-xs text-gray-600 mt-2">We are always just a phone call away. No long waiting times.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">📚</div>
                        <h4 className="font-bold text-gray-900">Knowledge</h4>
                        <p className="text-xs text-gray-600 mt-2">Staying updated with the latest High Court judgments and Supreme Court rulings.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-900">Protection</h4>
                        <p className="text-xs text-gray-600 mt-2">Protecting your interests is our fiduciary duty. We take it seriously.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💡</div>
                        <h4 className="font-bold text-gray-900">Innovation</h4>
                        <p className="text-xs text-gray-600 mt-2">Finding creative legal solutions for complex problems.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Chennai Chooses AMA?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine the heritage of Madras lawyering with the demands of the modern economy.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Litigation Prowess</h3>
                      <p className="text-gray-600 relative z-10">Our track record in the Madras High Court is exemplary across writ, civil, and criminal jurisdictions.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Tech Understanding</h3>
                      <p className="text-gray-600 relative z-10">We understand SaaS, AI, and Cloud computing, making us the preferred choice for tech companies.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Integrity</h3>
                      <p className="text-gray-600 relative z-10">We uphold the highest ethical standards. No false promises, just honest legal work.</p>
                    </div>
                  </div>
                </section>
                
                 {/* Client Stories */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Client Success Stories</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                    {/* Rendering all reviews from Schema to be visible */}
                    {reviewSchema.review.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                          "{review.reviewBody}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">
                             {review.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{review.author.name}</p>
                            <p className="text-xs text-gray-500">Client</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                 {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {/* Showing all 40 FAQs would be long, but requirement is 'valid rich results' and content must match. We will render them. */}
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
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Chennai's trusted legal experts today.
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
                    Connect with our senior advocates in Chennai today regarding your case.
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