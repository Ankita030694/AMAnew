import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a civil suit in the Bombay High Court?",
    answer: "Filing a civil suit in the Bombay High Court depends on the pecuniary jurisdiction. The Bombay High Court exercises Original Jurisdiction for civil suits where the subject matter is valued above ₹1 Crore (for Mumbai). The process begins with drafting a detailed Plaint, which must include the facts of the case, the cause of action, and the specific relief sought. This Plaint, along with the necessary court fees (calculated on an ad-valorem basis), is filed with the Prothonotary & Senior Master's office on the Original Side. For commercial disputes, the Commercial Courts Act procedures apply, requiring pre-institution mediation in certain cases. It is critical to ensure that the territorial jurisdiction clauses are correctly invoked, especially for contracts executed in Mumbai."
  },
  {
    question: "What is the difference between the Original Side and Appellate Side of the Bombay High Court?",
    answer: "The Bombay High Court is unique among Indian High Courts (along with Calcutta, Madras, and Delhi) in having Ordinary Original Civil Jurisdiction. The 'Original Side' functions like a trial court for high-value civil suits (above ₹1 Crore), Intellectual Property disputes, Admiralty matters, and Testamentary petitions (Probate/Wills) arising within Mumbai. The 'Appellate Side', on the other hand, hears appeals, revision applications, and writ petitions against the orders and judgments of subordinate courts (District Courts, Sessions Courts, Family Courts) from across the entire state of Maharashtra and Goa. Knowing this distinction is vital for filing your case in the correct registry."
  },
  {
    question: "Do you handle cases in the Nagpur and Aurangabad benches?",
    answer: "Yes, AMA Legal Solutions has a robust presence across Maharashtra. We have dedicated teams and associate senior counsels who represent clients at the Nagpur and Aurangabad benches of the Bombay High Court. The Nagpur Bench typically handles matters from the Vidarbha region, while the Aurangabad Bench covers the Marathwada region. Whether it is a writ petition challenging a government order, a criminal appeal, or a land dispute specific to these regions, we ensure competent and seamless representation without you needing to hire multiple local lawyers."
  },
  {
    question: "What are the specific laws for property litigation in Maharashtra?",
    answer: "Property litigation in Maharashtra is highly specialized due to the state's complex urban development laws. Key statutes include the **Maharashtra Rent Control Act, 1999**, which governs landlord-tenant disputes and eviction proceedings; the **Maharashtra Ownership Flats Act (MOFA), 1963**, which protects flat buyers; and the **Maharashtra Regional and Town Planning Act (MRTP), 1966**, dealing with land use and illegal constructions. Additionally, the **Real Estate (Regulation and Development) Act (RERA)** is strictly enforced through the MahaRERA tribunal. We also handle disputes involving Slum Rehabilitation Authority (SRA) schemes and redevelopment projects under Section 79A of the MCS Act."
  },
  {
    question: "How does MCOCA apply to criminal cases in Maharashtra?",
    answer: "The **Maharashtra Control of Organised Crime Act (MCOCA), 1999** is a draconian state law enacted to combat organized crime and terrorism. It differs significantly from general criminal law (IPC) as it allows confessions made to a police officer (SP rank and above) to be admissible as evidence. It also makes obtaining bail extremely difficult. MCOCA is often invoked in cases involving crime syndicates, extortion, and contract killings. Defending a MCOCA case requires specialized expertise to challenge the 'sanction' for prosecution and to demonstrate that the accused is not part of an 'organized crime syndicate' as defined under the Act."
  },
  {
    question: "Can I file a case against a builder for delayed possession in Mumbai?",
    answer: "Yes, delayed possession is one of the most common grievances in Mumbai's real estate market. You have multiple legal remedies. You can file a complaint with **MahaRERA** seeking interest on the amount paid for every month of delay, or a full refund with interest. Alternatively, you can approach the **Consumer Disputes Redressal Commission** for deficiency in service and compensation. In cases where fraud or cheating is involved, a criminal complaint (FIR) can also be filed. We analyze your Sale Agreement and the project status to recommend the most effective and fastest route for relief."
  },
  {
    question: "What is the role of the City Civil Court in Mumbai?",
    answer: "The **City Civil Court, Mumbai** has exclusive jurisdiction to try all civil suits arising within the limits of Greater Mumbai (from Colaba to Mulund/Dahisar) where the value of the subject matter is up to ₹1 Crore. It handles a vast volume of litigation, including property disputes, summary suits for money recovery, injunction matters, and contract breaches. It is distinct from the Small Causes Court, which specifically handles landlord-tenant and rent matters. The City Civil Court is often the first battleground for many civil disputes in the city."
  },
  {
    question: "How much time does it take to resolve a commercial dispute in Mumbai?",
    answer: "Mumbai, as India's financial capital, sees a high volume of commercial litigation. Historically, cases could take years. However, with the establishment of dedicated **Commercial Courts** and the Commercial Division in the High Court under the Commercial Courts Act, 2015, the disposal rate has improved. Strict timelines for filing written statements (120 days max) and case management hearings have streamlined the process. Pre-institution mediation is now mandatory, often leading to settlements in 3-6 months. Contested trials may still take 2-4 years, but interim relief (injunctions) can be obtained quickly."
  },
  {
    question: "Do you handle SRA (Slum Rehabilitation Authority) disputes?",
    answer: "Yes, SRA disputes are a unique and complex area of litigation in Mumbai. We represent slum dwellers, cooperative housing societies, and developers in disputes regarding eligibility (Annexure II), transit rent (displacement allowance), and project delays. We appear before the **Apex Grievance Redressal Committee (AGRC)**, which is the first appellate authority for SRA matters, and subsequently file Writ Petitions in the Bombay High Court challenging AGRC orders. We also handle disputes regarding the appointment and termination of developers."
  },
  {
    question: "What is the limitation period for filing an appeal in the Bombay High Court?",
    answer: "The limitation period is strictly governed by the Limitation Act, 1963. For a civil appeal against a decree (First Appeal), the limitation is typically **90 days** from the date of the judgment and decree. For criminal appeals against conviction, it is generally **60 days**. However, for appeals against interim orders (Appeal from Order), the period is shorter (30 days). It is vital to approach a lawyer immediately after a lower court judgment to obtain certified copies and file the appeal within time, as condonation of delay is not granted easily."
  },
  {
    question: "What is the procedure for Probate of a Will in Mumbai?",
    answer: "In Mumbai (and other presidency towns), obtaining a **Probate** is mandatory if the Will deals with immovable property. The petition for Probate is filed in the Testamentary Department of the Bombay High Court. The court issues citations to the legal heirs. If no objections (Caveats) are filed, the Probate is granted administratively. If an heir contests the Will, the petition is converted into a 'Testamentary Suit' and proceeds like a regular trial. We handle both non-contentious and contested probate matters."
  },
  {
    question: "Can I file a Writ Petition against a Cooperative Housing Society?",
    answer: "Generally, a Writ Petition under Article 226 lies against the 'State' or its instrumentalities. A private Cooperative Housing Society (CHS) is usually not considered 'State'. However, you can file a Writ Petition against the orders of the **Divisional Joint Registrar** or the **Minister of Cooperation** regarding the affairs of the society. For disputes between members and the society (like parking, repairs, leakage), the appropriate forum is the **Cooperative Court** or the Registrar's office, not directly the High Court."
  },
  {
    question: "What is the MPID Act and how does it protect investors?",
    answer: "The **Maharashtra Protection of Interest of Depositors (in Financial Establishments) Act, 1999 (MPID Act)** was enacted to protect small investors from Ponzi schemes and fraudulent financial establishments. It allows the government to attach the properties of the defaulting company and its promoters to repay the depositors. Special MPID Courts have been set up to try these offenses. We represent investor groups in filing complaints and intervening in MPID courts to ensure their claims are processed and paid from the realized assets."
  },
  {
    question: "How are deemed conveyance applications handled?",
    answer: "Deemed Conveyance is a provision under MOFA that allows a housing society to get the ownership of the land transferred to its name if the builder fails to do so. The application is filed before the **District Deputy Registrar (DDR)**. It involves submitting documents like the society registration certificate, property card, and architect's certificate. If the DDR passes a favorable order, a unilateral conveyance deed is registered. We assist societies in the entire process, from issuing legal notices to the builder to representing them at the DDR hearings."
  },
  {
    question: "What is the jurisdiction of the Small Causes Court?",
    answer: "The **Court of Small Causes, Mumbai** has exclusive jurisdiction over matters related to the recovery of possession of immovable property and recovery of rent/license fees within Mumbai. This covers all landlord-tenant disputes under the Maharashtra Rent Control Act and leave-and-license disputes. It does not deal with title disputes (ownership), which go to the City Civil Court or High Court. It also handles municipal tax appeals."
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
      "name": "Maharashtra",
      "item": "https://www.amalegalsolutions.com/services/litigation/maharashtra"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Maharashtra: Expert Lawyers for Bombay High Court & District Courts",
  "description": "Comprehensive guide to litigation services in Maharashtra. Expert legal representation for Civil, Criminal, Property, and Commercial disputes in Bombay High Court, Mumbai City Civil Court, and across the state.",
  "image": "https://www.amalegalsolutions.com/services/13.png",
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
  "datePublished": "2023-11-25",
  "dateModified": "2023-12-02"
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
  "name": "Litigation Services Maharashtra",
  "image": "https://www.amalegalsolutions.com/services/13.png",
  "description": "Top-tier litigation services for Bombay High Court and Maharashtra District Courts.",
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
        "name": "Vikram Patil"
      },
      "reviewBody": "I hired AMA Legal Solutions for a complex property dispute in Pune involving the Rent Control Act. Their knowledge of Maharashtra land laws is impressive. They secured a stay order in record time and eventually won the case."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Mehta"
      },
      "reviewBody": "Best lawyers for Bombay High Court matters. They handled our commercial appeal regarding a merger dispute with great professionalism and strategic insight. Their team is very accessible and transparent."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Maharashtra | Bombay High Court Lawyers",
  description:
    "Expert litigation lawyers in Maharashtra. We represent clients in Bombay High Court (Mumbai, Nagpur, Aurangabad), City Civil Court, and District Courts. Civil, Criminal & Commercial.",
  keywords: [
    "litigation services maharashtra",
    "bombay high court lawyer",
    "civil lawyer mumbai",
    "criminal lawyer pune",
    "property dispute lawyer maharashtra",
    "mcoca lawyer",
    "rera lawyer mumbai",
    "divorce lawyer mumbai",
    "commercial court mumbai",
    "sra dispute lawyer"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation/maharashtra',
  },
  openGraph: {
    title: "Litigation Services in Maharashtra | Bombay High Court Lawyers",
    description: "Expert litigation services in Maharashtra. Representing clients in Bombay High Court, City Civil Court, and District Courts.",
    url: "https://www.amalegalsolutions.com/services/litigation/maharashtra",
    type: "website",
    images: [
      {
        url: "/services/13.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Maharashtra",
      },
    ],
  },
};

export default function MaharashtraLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "bombay-high-court", title: "Bombay High Court Practice" },
    { id: "subordinate-judiciary", title: "Subordinate Judiciary" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "maharashtra-laws", title: "Maharashtra Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Maharashtra", href: "/services/litigation/maharashtra" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in Maharashtra
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Defending your rights in the Bombay High Court and District Courts across the state. Strategic advocacy for complex civil, criminal, and commercial disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Maharashtra Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Legal Landscape of Maharashtra</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Maharashtra stands as the economic and industrial powerhouse of India, contributing significantly to the nation's GDP. With Mumbai as its capital—the financial heart of the country—the state hosts a legal ecosystem that is as vibrant as it is complex. Litigation in Maharashtra is not merely about understanding central laws; it requires a deep, nuanced mastery of state-specific statutes, local regulations, and the unique procedural customs of the <strong>Bombay High Court</strong> and subordinate courts.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From high-stakes corporate battles in the commercial districts of Mumbai to intricate land disputes in the developing regions of Pune and Nashik, the demand for specialized legal representation is immense. <strong>Litigation services in Maharashtra</strong> encompass a wide spectrum: Civil disputes, Criminal defense, Family law, Real Estate litigation, and Constitutional matters.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we pride ourselves on being a full-service litigation firm with a statewide footprint. Our team of seasoned advocates possesses the expertise to navigate the corridors of justice, from the Magistrate courts to the Apex Court. We understand that every case carries a human or business cost, and our strategy is always focused on minimizing that cost while maximizing the legal outcome. Whether you are a multinational corporation facing an insolvency petition or a family fighting for ancestral property, we stand by you as your trusted legal shield and sword.
                  </p>
                </section>

                {/* Bombay High Court */}
                <section id="bombay-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Bombay High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>High Court of Judicature at Bombay</strong> is one of the oldest and most prestigious High Courts in India. Its jurisdiction extends over the states of Maharashtra and Goa, and the Union Territories of Daman & Diu and Dadra & Nagar Haveli. What makes it unique is its dual jurisdiction:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Ordinary Original Civil Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        Unlike most High Courts that only hear appeals, the Bombay High Court acts as a court of first instance (trial court) for civil suits arising within the city limits of Mumbai where the value exceeds ₹1 Crore. This "Original Side" practice is highly specialized.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Commercial Suits:</strong> High-value business disputes, banking matters, and IP infringement.</li>
                        <li><strong>Admiralty Suits:</strong> Disputes involving ships and maritime claims.</li>
                        <li><strong>Testamentary Petitions:</strong> Probate of Wills, Letters of Administration, and Succession Certificates.</li>
                        <li><strong>Arbitration Petitions:</strong> Challenges to arbitral awards and appointment of arbitrators under Section 11 and 34 of the Arbitration Act.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">2. Appellate Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The "Appellate Side" hears appeals from all subordinate courts across Maharashtra. This is the forum for correcting errors made by lower courts.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>First Appeals:</strong> Against decrees passed by District Courts and City Civil Courts.</li>
                        <li><strong>Criminal Appeals:</strong> Against conviction or acquittal orders by Sessions Courts.</li>
                        <li><strong>Writ Petitions (Civil & Criminal):</strong> Under Article 226 of the Constitution, challenging arbitrary actions of the State, government authorities, or lower courts.</li>
                        <li><strong>Public Interest Litigation (PIL):</strong> Matters of broad public concern like environmental protection or civic governance.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Benches of the Bombay High Court</h3>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      To ensure access to justice across the vast state, the High Court has established permanent benches. We have active practices at:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Nagpur Bench</h4>
                        <p className="text-sm text-gray-600">Serving the Vidarbha region (Nagpur, Amravati, Akola, etc.)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Aurangabad Bench</h4>
                        <p className="text-sm text-gray-600">Serving the Marathwada region (Aurangabad, Nanded, Latur, etc.)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Panaji Bench</h4>
                        <p className="text-sm text-gray-600">Serving the state of Goa.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Subordinate Judiciary */}
                <section id="subordinate-judiciary" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Subordinate Judiciary in Maharashtra</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While the High Court grabs headlines, the bulk of litigation occurs in the subordinate courts. Understanding this hierarchy is crucial for effective strategy.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">City Civil & Sessions Court, Mumbai</h3>
                      <p className="text-gray-700 mb-3">
                        Located at Fort and Dindoshi, this court handles:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Civil suits up to ₹1 Crore valuation.</li>
                        <li>Sessions cases (serious crimes like murder, rape, dacoity).</li>
                        <li>Appeals from Metropolitan Magistrate courts.</li>
                        <li>Anticipatory Bail applications.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Court of Small Causes</h3>
                      <p className="text-gray-700 mb-3">
                        A specialized court for Mumbai with exclusive jurisdiction over:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Landlord-Tenant disputes under the Rent Control Act.</li>
                        <li>Recovery of possession of immovable property.</li>
                        <li>Distress warrants for unpaid rent.</li>
                        <li>Municipal Tax appeals.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">District & Sessions Courts</h3>
                      <p className="text-gray-700 mb-3">
                        In districts like Pune, Thane, Nashik, and Raigad, the District Court is the principal court of original civil jurisdiction. It handles:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>All civil suits regardless of value (unless limited by special laws).</li>
                        <li>Motor Accident Claims Tribunal (MACT) cases.</li>
                        <li>Probate and Succession matters (outside Mumbai).</li>
                        <li>Criminal trials and appeals.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Metropolitan Magistrate Courts</h3>
                      <p className="text-gray-700 mb-3">
                        The first tier of criminal justice in metropolitan areas. They handle:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Remand proceedings (Police Custody/Judicial Custody).</li>
                        <li>Bail in bailable and non-bailable offenses (limited power).</li>
                        <li>Cheque bounce cases (Section 138 NI Act).</li>
                        <li>Domestic Violence Act complaints.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Maharashtra</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our litigation practice covers a diverse range of legal fields, tailored to the specific needs of clients in Maharashtra.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Real Estate & Redevelopment Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Maharashtra's real estate market is notoriously complex. We specialize in:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Redevelopment Disputes:</strong> Representing societies against builders for delays, non-payment of transit rent, and deviation from approved plans.</li>
                        <li><strong>SRA Matters:</strong> Litigation involving eligibility of slum dwellers and disputes in Slum Rehabilitation Authority projects.</li>
                        <li><strong>Deemed Conveyance:</strong> Filing applications before the District Deputy Registrar (DDR) to transfer land title to housing societies.</li>
                        <li><strong>RERA Litigation:</strong> Filing complaints before MahaRERA and appeals before the RERA Appellate Tribunal.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Commercial & Corporate Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        For businesses, time is money. We leverage the Commercial Courts Act to expedite disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Insolvency & Bankruptcy:</strong> Representing Operational and Financial Creditors in NCLT Mumbai under the IBC, 2016.</li>
                        <li><strong>Summary Suits:</strong> Fast-track recovery of debts based on written contracts/invoices under Order 37 of CPC.</li>
                        <li><strong>Shareholder Disputes:</strong> Oppression and mismanagement petitions in NCLT.</li>
                        <li><strong>Arbitration:</strong> Handling domestic and international commercial arbitration and enforcement of awards.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Criminal Defense & White Collar Crime</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We provide aggressive defense strategies for serious offenses.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Economic Offenses:</strong> Defense in cases filed by the EOW (Economic Offenses Wing) and ED (Enforcement Directorate).</li>
                        <li><strong>Cyber Crime:</strong> Representation in cases of data theft, hacking, and online fraud.</li>
                        <li><strong>MCOCA & MPID:</strong> Specialized defense for cases under these stringent state laws.</li>
                        <li><strong>Bail Matters:</strong> Securing Regular Bail, Anticipatory Bail, and Transit Bail from Sessions Court and High Court.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family & Matrimonial Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Handling sensitive personal matters with dignity and confidentiality.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> Mutual consent divorce and contested divorce on grounds of cruelty, adultery, etc.</li>
                        <li><strong>Child Custody:</strong> Fighting for custody and visitation rights.</li>
                        <li><strong>Maintenance:</strong> Alimony and maintenance under Section 125 CrPC and DV Act.</li>
                        <li><strong>Domestic Violence:</strong> Protection orders and residence orders under the PWDV Act.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Maharashtra Specific Laws */}
                <section id="maharashtra-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Maharashtra Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A lawyer in Maharashtra cannot be effective without mastering the state's unique legislations. These laws often override general central laws.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Rent Control Act, 1999</h4>
                      <p className="text-sm text-gray-600">
                        Governs the relationship between landlords and tenants. It protects tenants from arbitrary eviction and excessive rent increases. We handle suits for eviction on grounds of bona fide requirement, non-user, and nuisance.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Ownership Flats Act (MOFA), 1963</h4>
                      <p className="text-sm text-gray-600">
                        A crucial law for flat buyers. It mandates builders to form a society, convey the land, and disclose full project details. We use MOFA to fight for deemed conveyance and against unauthorized alterations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Control of Organised Crime Act (MCOCA), 1999</h4>
                      <p className="text-sm text-gray-600">
                        A stringent anti-terror and anti-organized crime law. It allows for longer police custody and makes bail nearly impossible. We have specialized experience in challenging the invocation of MCOCA.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Regional and Town Planning Act (MRTP), 1966</h4>
                      <p className="text-sm text-gray-600">
                        Deals with land development plans and unauthorized constructions. We represent clients receiving notices under Section 53/54 of MRTP Act for demolition of illegal structures.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Cooperative Societies Act, 1960</h4>
                      <p className="text-sm text-gray-600">
                        The bible for housing societies. We handle disputes regarding elections, expulsion of members, recovery of dues (Section 101), and redevelopment (Section 79A).
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Maharashtra Protection of Interest of Depositors (MPID) Act</h4>
                      <p className="text-sm text-gray-600">
                        Protects investors from fraudulent financial schemes. We assist victims in filing complaints and attaching the assets of fraudulent companies to recover their deposits.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: From Notice to Decree</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While every case is unique, the procedural journey in Maharashtra courts generally follows these steps. We guide you through each phase.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Pre-Litigation Strategy & Notice</h3>
                      <p className="text-gray-700">
                        We analyze the merits of your case. A strong Legal Notice is drafted, setting out the facts and demands. In many cases, a well-drafted notice leads to an out-of-court settlement, saving years of litigation.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Filing of Plaint / Petition</h3>
                      <p className="text-gray-700">
                        If the notice fails, we file the case in the appropriate court (High Court, City Civil, or District Court). This involves paying court fees, verifying documents, and removing office objections to get the case numbered.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Interim Reliefs</h3>
                      <p className="text-gray-700">
                        In urgent matters, we move the court for interim orders like a 'Stay Order' against demolition, 'Injunction' against selling property, or 'Status Quo'. This is often the most critical battle in the early stages.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Evidence & Trial</h3>
                      <p className="text-gray-700">
                        Issues are framed by the court. We lead evidence by filing Affidavits of Evidence and conducting cross-examination of the opponent's witnesses. Our cross-examination strategy is designed to dismantle the opponent's case.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Arguments & Judgment</h3>
                      <p className="text-gray-700">
                        Final arguments are advanced citing relevant judgments of the Supreme Court and Bombay High Court. The court then delivers its Judgment and Decree.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">6. Execution</h3>
                      <p className="text-gray-700">
                        A decree is just paper until enforced. We file Execution Petitions to attach bank accounts, seize property, or seek civil imprisonment of the defaulter to recover your dues.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    In a city with thousands of lawyers, why should you entrust your case to us?
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Specialists</h3>
                      <p className="text-gray-600">We appear daily in the Bombay High Court. We know the judges, the procedures, and the registry inside out.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Statewide Network</h3>
                      <p className="text-gray-600">From Mumbai to Nagpur, Pune to Aurangabad, our network ensures you have representation everywhere.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💡</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Approach</h3>
                      <p className="text-gray-600">We don't just fight cases; we design strategies. We advise on when to settle and when to fight to the finish.</p>
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
                        "Our housing society was stuck in a redevelopment limbo for 5 years with a dishonest builder. AMA Legal Solutions took over, terminated the builder's contract through the High Court, and helped us appoint a new developer. We are finally getting our new homes."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Secretary</p>
                          <p className="text-sm text-gray-500">Gokuldham CHS, Goregaon</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was falsely implicated in a cheating case by a business rival. The police were threatening arrest. The team at AMA secured Anticipatory Bail for me from the Sessions Court within 48 hours and later got the FIR quashed in the High Court."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh K.</p>
                          <p className="text-sm text-gray-500">Businessman, Pune</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Maharashtra fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Mumbai Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Bombay High Court and District Courts.
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
