import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a civil suit in the Calcutta High Court?",
    answer: "Filing a civil suit in the Calcutta High Court depends on whether it falls under the Ordinary Original Civil Jurisdiction or the Appellate Jurisdiction. The Calcutta High Court is one of the few in India with Original Jurisdiction for suits valued above ₹1 Crore (within Kolkata limits) or involving specific subject matters like IP and Admiralty. The Plaint must be filed in the department of the Registrar, Original Side. For appeals from district courts, the filing is on the Appellate Side. It is essential to engage a lawyer familiar with the distinct rules of the Original and Appellate sides."
  },
  {
    question: "What is the difference between Alipore Court and Bankshall Court?",
    answer: "The **Alipore Judges Court** is the District & Sessions Court for the South 24 Parganas district (which covers large parts of South Kolkata). It handles serious criminal trials (Sessions cases) and civil suits of unlimited pecuniary jurisdiction. The **Bankshall Court** (Chief Metropolitan Magistrate Court) primarily handles criminal matters in the Kolkata metropolitan area, including bail, remand, and trials for magisterial offenses. Civil matters for Kolkata proper are often handled by the City Civil Court."
  },
  {
    question: "Do you handle landlord-tenant disputes in Kolkata?",
    answer: "Yes, we specialize in landlord-tenant disputes under the **West Bengal Premises Tenancy Act, 1997**. We represent both landlords and tenants in suits for eviction on grounds of reasonable requirement, default in rent payment, and subletting. These cases are typically filed in the Civil Judge (Junior/Senior Division) courts or the City Civil Court, depending on the location and valuation."
  },
  {
    question: "What is Thika Tenancy and how does it affect property rights?",
    answer: "**Thika Tenancy** is a unique land tenure system in Kolkata and Howrah where the tenant owns the structure but the land belongs to the landlord (or the State). Governed by the **West Bengal Thika Tenancy (Acquisition and Regulation) Act, 2001**, disputes often arise regarding the status of the land, inheritance of tenancy rights, and redevelopment. We assist clients in proceedings before the Thika Controller and in challenging orders in the High Court."
  },
  {
    question: "How can I challenge a mutation order by the Kolkata Municipal Corporation?",
    answer: "If you are aggrieved by a mutation order or property tax assessment by the **Kolkata Municipal Corporation (KMC)**, you can first file an objection with the Hearing Officer. If dissatisfied, you can appeal to the Municipal Assessment Tribunal. In cases of arbitrary action or violation of natural justice, a Writ Petition under Article 226 can be filed in the Calcutta High Court. We handle all stages of municipal litigation."
  },
  {
    question: "What is the role of the West Bengal Land Reforms and Tenancy Tribunal (WBLRTT)?",
    answer: "The **WBLRTT** was established to adjudicate disputes under the West Bengal Land Reforms Act, 1955. It has exclusive jurisdiction over matters related to ceiling surplus land, bargadars (sharecroppers), and vesting of land. Appeals from the Tribunal's orders lie directly to a Division Bench of the Calcutta High Court. We represent clients in complex land ceiling and vesting matters before the Tribunal."
  },
  {
    question: "Can I file a case for cheque bounce in Kolkata?",
    answer: "Yes, a complaint for cheque bounce under Section 138 of the Negotiable Instruments Act can be filed in the Metropolitan Magistrate Court (like Bankshall Court) having jurisdiction over the bank branch where the payee maintains the account. The complaint must be filed within 30 days of the expiry of the notice period. We assist in drafting the legal notice and prosecuting the complaint to recover your money."
  },
  {
    question: "How long does a commercial suit take in the Calcutta High Court?",
    answer: "The Commercial Division of the Calcutta High Court handles commercial disputes valued above specified thresholds. Under the Commercial Courts Act, 2015, strict timelines are imposed for filing pleadings and completing the trial. While historical delays were common, the dedicated Commercial Division has expedited the process. Pre-institution mediation is mandatory. A well-managed commercial suit can now be resolved significantly faster than a regular civil suit."
  },
  {
    question: "Do you handle divorce cases in the Family Courts of West Bengal?",
    answer: "Yes, we handle mutual consent and contested divorce cases in the Family Courts at Kolkata, Alipore, Barasat, and other districts. We also handle matters related to child custody, alimony, and domestic violence. Our approach is to provide empathetic yet legally robust representation to protect your interests during emotional family disputes."
  },
  {
    question: "What is the procedure for Probate in West Bengal?",
    answer: "In Kolkata (a Presidency Town), obtaining **Probate** is mandatory if the Will deals with immovable property. The application is filed in the High Court (Original Side) or the District Delegate (if uncontested). Citations are issued to legal heirs. If contested, it becomes a contentious cause (Testamentary Suit). We handle the entire process from drafting the petition to obtaining the Grant of Probate."
  },
  {
    question: "Can I file a Writ Petition against the West Bengal Police?",
    answer: "Yes, if the police are inactive on your complaint or are harassing you, you can file a Writ Petition (Mandamus) in the Calcutta High Court. The Court can direct the police to register an FIR, provide police protection, or transfer the investigation to a specialized agency like the CID or CBI in exceptional cases. We have extensive experience in police inaction matters."
  },
  {
    question: "What are the laws regarding flat ownership in West Bengal?",
    answer: "The **West Bengal Apartment Ownership Act, 1972** governs the ownership of apartments and the formation of Associations of Apartment Owners. Disputes often arise regarding common areas, maintenance charges, and non-formation of the Association. We represent individual flat owners and Associations in resolving these disputes against promoters/developers."
  },
  {
    question: "How do I enforce a foreign arbitral award in Kolkata?",
    answer: "A foreign arbitral award can be enforced in the Calcutta High Court if the assets of the judgment debtor are located within its jurisdiction. The enforcement petition is filed under the Arbitration and Conciliation Act, 1996. The Court first decides on the enforceability of the award and then proceeds with execution. We assist international clients in enforcing awards in West Bengal."
  },
  {
    question: "What is the jurisdiction of the City Civil Court, Calcutta?",
    answer: "The **City Civil Court, Calcutta** has jurisdiction to try civil suits arising within the city limits of Kolkata. It handles suits valued up to ₹1 Crore (above which jurisdiction lies with the High Court) and other specific categories. It is distinct from the Small Causes Court, which handles smaller value suits and rent matters. It is a primary forum for civil litigation in the city."
  },
  {
    question: "Do you handle anticipatory bail matters in West Bengal?",
    answer: "Yes, we move Anticipatory Bail applications under Section 438 CrPC before the Sessions Courts (like Alipore, Barasat) and the Calcutta High Court. In cases of false implication or political vendetta, securing pre-arrest bail is crucial. Our team acts swiftly to protect clients from arrest and custodial harassment."
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
      "name": "West Bengal",
      "item": "https://www.amalegalsolutions.com/services/litigation/west-bengal"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in West Bengal: Expert Lawyers for Calcutta High Court",
  "description": "Comprehensive guide to litigation services in West Bengal. Expert legal representation for Civil, Criminal, Property, and Commercial disputes in Calcutta High Court, Alipore Court, and across the state.",
  "image": "https://www.amalegalsolutions.com/services/litigation-west-bengal.png", // Placeholder
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
  "name": "Litigation Services West Bengal",
  "image": "https://www.amalegalsolutions.com/services/litigation-west-bengal.png",
  "description": "Top-tier litigation services for Calcutta High Court and District Courts.",
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
        "name": "Amitava Roy"
      },
      "reviewBody": "We engaged AMA Legal Solutions for a complex property dispute involving Thika Tenancy issues in North Kolkata. Their understanding of the local land laws is profound. They guided us through the High Court proceedings with great clarity."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Dasgupta"
      },
      "reviewBody": "Highly professional team for commercial litigation. They handled our arbitration enforcement matter in the Calcutta High Court efficiently. The lawyers are accessible and very strategic in their approach."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in West Bengal | Calcutta High Court Lawyers",
  description:
    "Expert litigation lawyers in West Bengal. We represent clients in Calcutta High Court, Alipore Court, and District Courts. Civil, Criminal, Property & Commercial cases.",
  keywords: [
    "litigation services west bengal",
    "calcutta high court lawyer",
    "civil lawyer kolkata",
    "criminal lawyer alipore",
    "property dispute lawyer west bengal",
    "thika tenancy lawyer",
    "rera lawyer kolkata",
    "divorce lawyer kolkata",
    "commercial court kolkata",
    "wb premises tenancy act lawyer"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation/west-bengal',
  },
  openGraph: {
    title: "Litigation Services in West Bengal | Calcutta High Court Lawyers",
    description: "Expert litigation services in West Bengal. Representing clients in Calcutta High Court, City Civil Court, and District Courts.",
    url: "https://www.amalegalsolutions.com/services/litigation/west-bengal",
    type: "website",
    images: [
      {
        url: "/services/litigation-west-bengal.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services West Bengal",
      },
    ],
  },
};

export default function WestBengalLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "calcutta-high-court", title: "Calcutta High Court Practice" },
    { id: "subordinate-judiciary", title: "Subordinate Judiciary" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "west-bengal-laws", title: "West Bengal Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "West Bengal", href: "/services/litigation/west-bengal" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in West Bengal
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Defending your rights in the historic Calcutta High Court and District Courts across the state. Strategic advocacy for complex civil, criminal, and commercial disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Kolkata Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Legal Landscape of West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    West Bengal, with its rich legal heritage and bustling commercial capital Kolkata, presents a unique and intricate legal environment. Home to the <strong>Calcutta High Court</strong>—the oldest High Court in India—the state's judicial system is steeped in tradition yet evolving to meet modern challenges. Litigation here involves navigating a mix of colonial-era procedures on the Original Side and modern statutory frameworks.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From high-stakes corporate battles in the central business district to complex land reforms and tenancy disputes in the suburbs and districts, the need for specialized legal counsel is critical. <strong>Litigation services in West Bengal</strong> encompass a wide array of fields: Civil disputes, Criminal defense, Constitutional writs, Admiralty, and Intellectual Property rights.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we combine deep local expertise with a modern, results-oriented approach. Our team of seasoned advocates appears regularly before the Calcutta High Court, City Civil Courts, and District Courts across the state. Whether you are a business facing a regulatory hurdle or an individual fighting for your ancestral property, we stand as your trusted legal partners, committed to securing justice.
                  </p>
                </section>

                {/* Calcutta High Court */}
                <section id="calcutta-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Calcutta High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>High Court at Calcutta</strong> is not just a court of appeal; it is a legal institution with a unique dual jurisdiction. Understanding this distinction is vital for any litigant.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Ordinary Original Civil Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        Like Bombay and Madras, Calcutta High Court retains its Original Jurisdiction. This means it acts as a trial court for:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Civil suits valued above ₹1 Crore arising within the Kolkata city limits.</li>
                        <li><strong>Admiralty Matters:</strong> Exclusive jurisdiction over maritime claims and ship arrests.</li>
                        <li><strong>Company Matters:</strong> Winding up, mergers, and oppression/mismanagement petitions (transferred to NCLT but some residual/appellate jurisdiction remains).</li>
                        <li><strong>IPR Suits:</strong> Infringement of trademarks, patents, and copyrights.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">2. Appellate & Writ Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The Appellate Side hears appeals from all subordinate courts in West Bengal and the Andaman & Nicobar Islands.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Mandamus Appeals (MAT):</strong> Appeals against orders of a Single Judge in Writ Petitions.</li>
                        <li><strong>First & Second Appeals:</strong> Civil appeals from District Judges.</li>
                        <li><strong>Criminal Appeals:</strong> Against convictions by Sessions Courts.</li>
                        <li><strong>Writ Petitions (Article 226):</strong> Challenging state actions, police inaction, and municipal orders.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Circuit Benches</h3>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      To bring justice closer to the people, the High Court has established Circuit Benches at:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Port Blair Bench</h4>
                        <p className="text-sm text-gray-600">Serving the Union Territory of Andaman & Nicobar Islands.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Jalpaiguri Bench</h4>
                        <p className="text-sm text-gray-600">Serving the North Bengal districts (Darjeeling, Jalpaiguri, Cooch Behar, etc.).</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Subordinate Judiciary */}
                <section id="subordinate-judiciary" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Subordinate Judiciary in West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The foundation of the justice system lies in the subordinate courts. In Kolkata and surrounding districts, the court structure is specific.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">City Civil Court, Calcutta</h3>
                      <p className="text-gray-700 mb-3">
                        Located near the High Court, it handles civil suits for Kolkata city.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Suits valued up to ₹1 Crore.</li>
                        <li>Commercial disputes (Commercial Court Division).</li>
                        <li>Money recovery and injunctions.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Alipore Judges Court</h3>
                      <p className="text-gray-700 mb-3">
                        The District & Sessions Court for South 24 Parganas. It is one of the busiest courts, handling:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Serious criminal trials (Sessions Cases).</li>
                        <li>Civil suits for Alipore, Behala, Jadavpur areas.</li>
                        <li>Matrimonial cases (District Judge).</li>
                        <li>Probate matters.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Bankshall Court (CMM)</h3>
                      <p className="text-gray-700 mb-3">
                        The Chief Metropolitan Magistrate Court for Kolkata.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Bail and Remand for city police cases.</li>
                        <li>Trials for magisterial offenses.</li>
                        <li>Cheque bounce cases (NI Act).</li>
                        <li>Cyber crime remand.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Barasat District Court</h3>
                      <p className="text-gray-700 mb-3">
                        Serving the North 24 Parganas district (Salt Lake, Rajarhat, Dum Dum).
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Civil and Criminal matters for the IT hub and suburbs.</li>
                        <li>Land acquisition cases.</li>
                        <li>POCSO cases.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our practice is tailored to the specific legal needs of the region.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Land & Property Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Property laws in West Bengal are complex due to the interplay of old tenancy laws and modern reforms.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Tenancy Disputes:</strong> Eviction suits under the WB Premises Tenancy Act, 1997.</li>
                        <li><strong>Thika Tenancy:</strong> Disputes regarding structure ownership and land rights under the Thika Tenancy Act.</li>
                        <li><strong>Land Reforms:</strong> Matters before the WBLRTT regarding vesting and ceiling surplus.</li>
                        <li><strong>Mutation & Tax:</strong> Disputes with KMC and other municipalities.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Commercial & Corporate</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Supporting the business community in Kolkata and industrial belts.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Arbitration:</strong> Enforcement of awards and Section 9 applications in High Court.</li>
                        <li><strong>Insolvency:</strong> NCLT Kolkata bench matters under IBC.</li>
                        <li><strong>Commercial Suits:</strong> Fast-track litigation in the Commercial Division.</li>
                        <li><strong>IPR:</strong> Trademark and Copyright infringement suits.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Robust defense in all criminal courts.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Bail:</strong> Anticipatory Bail and Regular Bail in Sessions and High Court.</li>
                        <li><strong>Quashing:</strong> Quashing of FIRs under Section 482 CrPC.</li>
                        <li><strong>White Collar Crime:</strong> Defense in CBI, ED, and EOW cases.</li>
                        <li><strong>Cheque Bounce:</strong> Prosecution and defense in Section 138 cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family & Matrimonial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sensitive handling of personal disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> Mutual consent and contested divorce.</li>
                        <li><strong>498A Defense:</strong> Protecting families from false dowry harassment cases.</li>
                        <li><strong>Custody:</strong> Child custody and guardianship matters.</li>
                        <li><strong>Maintenance:</strong> Alimony and maintenance claims.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* West Bengal Specific Laws */}
                <section id="west-bengal-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in West Bengal Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Litigation in West Bengal often pivots on state-specific legislations. We have mastered these statutes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">West Bengal Premises Tenancy Act, 1997</h4>
                      <p className="text-sm text-gray-600">
                        Governs landlord-tenant relations. It replaced the 1956 Act and provides specific grounds for eviction. We assist in drafting tenancy agreements and filing eviction suits.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">West Bengal Land Reforms Act, 1955</h4>
                      <p className="text-sm text-gray-600">
                        A critical law governing land holding, vesting, and rights of sharecroppers (Bargadars). Disputes under this Act go to the WBLRTT, not civil courts.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">West Bengal Thika Tenancy (Acquisition and Regulation) Act, 2001</h4>
                      <p className="text-sm text-gray-600">
                        Regulates the unique 'Thika' system in Kolkata/Howrah. It places restrictions on transfer and redevelopment. We navigate the complexities of Thika Controller proceedings.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Kolkata Municipal Corporation Act, 1980</h4>
                      <p className="text-sm text-gray-600">
                        Governs building rules, property tax, and trade licenses in Kolkata. We handle disputes regarding illegal construction notices and tax assessments.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">West Bengal Apartment Ownership Act, 1972</h4>
                      <p className="text-sm text-gray-600">
                        Deals with the ownership of apartments and formation of Associations. We assist in registering Associations and resolving disputes between members and promoters.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: From Filing to Decree</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The path to justice involves several procedural steps. Here is how we guide you through it.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Strategy & Notice</h3>
                      <p className="text-gray-700">
                        We assess your case documents. A strong Legal Notice is sent to the opposite party. This is often a statutory requirement (e.g., in eviction or cheque bounce cases).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Filing</h3>
                      <p className="text-gray-700">
                        The case is filed in the appropriate court (High Court Original Side, City Civil, or District Court). We ensure all pleadings are precise and court fees are paid.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Interim Orders</h3>
                      <p className="text-gray-700">
                        We move the court for urgent relief like Injunctions (Stay Orders), Receiver appointment, or Attachment before Judgment to protect the subject matter.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Trial</h3>
                      <p className="text-gray-700">
                        Evidence is led through Affidavits. We conduct rigorous cross-examination of the opponent's witnesses to expose contradictions and strengthen your case.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Arguments & Judgment</h3>
                      <p className="text-gray-700">
                        Final arguments are made. The Court delivers its Judgment. If favorable, we proceed to execution; if not, we prepare for an appeal.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to delivering excellence in legal representation.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Veterans</h3>
                      <p className="text-gray-600">Decades of combined experience in the Calcutta High Court's Original and Appellate sides.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📜</div>
                      <h3 className="font-bold text-xl mb-2">Local Law Experts</h3>
                      <p className="text-gray-600">Deep knowledge of WB Tenancy, Land Reforms, and Municipal laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Holistic Solutions</h3>
                      <p className="text-gray-600">From lower courts to the Supreme Court, we handle the entire lifecycle of litigation.</p>
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
                        "I was struggling to evict a tenant who hadn't paid rent for years. AMA Legal Solutions filed a suit under the new Tenancy Act and secured an eviction decree within a reasonable time. Their strategy was flawless."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Subhash Bose</p>
                          <p className="text-sm text-gray-500">Landlord, South Kolkata</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our manufacturing unit faced a closure notice from the pollution control board. AMA filed a Writ Petition and obtained a stay order, allowing us to rectify the issues and stay in business. They are lifesavers."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajiv Agarwal</p>
                          <p className="text-sm text-gray-500">Industrialist, Howrah</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in West Bengal fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Kolkata Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Calcutta High Court and District Courts.
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
