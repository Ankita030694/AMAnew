import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the pecuniary jurisdiction of the Delhi High Court for civil suits?",
    answer: "As of the latest amendments, the pecuniary jurisdiction of the Delhi High Court for 'Original Side' civil suits is for matters valued above ₹2 Crores. Suits valued up to ₹2 Crores are filed in the respective District Courts (Tis Hazari, Saket, etc.) based on territorial jurisdiction. However, for certain specialized matters like Intellectual Property Rights (IPR) and Arbitration (International Commercial Arbitration), the High Court may have jurisdiction regardless of value or have specific benches designated for them."
  },
  {
    question: "Which District Court in Delhi has jurisdiction over my case?",
    answer: "Delhi is divided into 11 judicial districts, each served by a specific court complex. For example: South and South-East districts are under Saket Courts; Central and West districts are under Tis Hazari Courts; New Delhi district is under Patiala House Courts; South-West is under Dwarka Courts; East, North-East, and Shahdara are under Karkardooma Courts; and North and North-West are under Rohini Courts. Jurisdiction is determined by where the cause of action arose or where the defendant resides/works (for civil cases) or where the crime was committed (for criminal cases)."
  },
  {
    question: "Do you handle cases in the Rouse Avenue Courts?",
    answer: "Yes, the Rouse Avenue Court Complex is a specialized court exclusively for hearing cases filed by central agencies like the CBI (Central Bureau of Investigation) and ED (Enforcement Directorate), as well as cases against MPs/MLAs. We have a specialized team of criminal defense lawyers who represent clients in high-profile white-collar crime cases, corruption charges, and money laundering matters listed at Rouse Avenue."
  },
  {
    question: "How does the Delhi Rent Control Act affect tenant eviction?",
    answer: "The Delhi Rent Control Act (DRCA), 1958, is a pro-tenant legislation that applies to certain older tenancies in Delhi where the rent is below ₹3,500 per month. Under this Act, a tenant cannot be evicted easily, and grounds for eviction are strictly limited (e.g., bona fide requirement of the landlord, non-payment of rent). However, for properties where rent exceeds ₹3,500/month, the general Transfer of Property Act applies, making eviction simpler. We handle litigation under both regimes."
  },
  {
    question: "What is the procedure for filing a Commercial Suit in Delhi?",
    answer: "Commercial suits in Delhi are governed by the Commercial Courts Act, 2015. For suits valued above ₹3 Lakhs, mandatory 'Pre-Institution Mediation' must be attempted at the Delhi Legal Services Authority (DLSA) unless urgent interim relief is sought. If mediation fails, the suit is filed. Strict timelines apply: the defendant must file a written statement within 30 days (extendable to 120 days), and case management hearings are held to expedite the trial. We specialize in these fast-track commercial litigations."
  },
  {
    question: "Can I file a Writ Petition in the Delhi High Court against a private company?",
    answer: "Generally, a Writ Petition under Article 226 is maintainable only against the 'State' or its instrumentalities (government bodies, PSUs). However, if a private company is performing a 'public duty' or if the writ is for the enforcement of fundamental rights involving a public element, a writ might be maintainable. For purely private contractual disputes, a civil suit or arbitration is the correct remedy. We analyze the facts to advise on the correct forum."
  },
  {
    question: "What is the role of the Delhi International Arbitration Centre (DIAC)?",
    answer: "The Delhi International Arbitration Centre (DIAC), attached to the Delhi High Court, provides a neutral and efficient venue for conducting arbitration proceedings. It has its own set of rules and a panel of arbitrators. Many commercial contracts now designate DIAC as the venue for dispute resolution. We represent clients in ad-hoc as well as institutional arbitrations conducted at DIAC."
  },
  {
    question: "How do I get a stay order against demolition by MCD/DDA?",
    answer: "If you receive a demolition notice from the Municipal Corporation of Delhi (MCD) or Delhi Development Authority (DDA), you must act immediately. You can file an appeal before the Appellate Tribunal for MCD (ATMCD) or approach the Delhi High Court through a Writ Petition if there is a violation of natural justice or due process. We help clients obtain immediate stay orders to protect their property from illegal demolition."
  },
  {
    question: "Do you handle matrimonial cases in Delhi Family Courts?",
    answer: "Yes, we have an extensive family law practice. We represent clients in all Family Courts in Delhi (Saket, Dwarka, Rohini, etc.) for mutual consent divorce, contested divorce, child custody, maintenance (Section 125 CrPC), and domestic violence cases. We also assist in mediation proceedings at the court-annexed mediation centers to resolve matrimonial disputes amicably."
  },
  {
    question: "What are the special courts for Cheque Bounce cases in Delhi?",
    answer: "Cheque bounce cases under Section 138 of the Negotiable Instruments Act are tried by Metropolitan Magistrates. Due to the high volume of such cases in Delhi, special courts have been designated in each district court complex to fast-track these matters. We represent both complainants (for recovery of money) and accused (for defense) in Section 138 proceedings."
  },
  {
    question: "What is the limitation period for filing a First Appeal in the Delhi High Court?",
    answer: "For a First Appeal against a decree passed by a District Judge, the limitation period is 90 days from the date of the decree. For appeals against orders (FAO), it is typically 30 days. It is crucial to apply for a certified copy of the judgment immediately, as the time taken by the court to prepare the copy is excluded from the limitation period."
  },
  {
    question: "How are IPR disputes handled in Delhi?",
    answer: "Delhi is a hub for Intellectual Property litigation. The Delhi High Court has a specialized 'Intellectual Property Division' (IPD) to handle all IPR matters, including trademark, copyright, and patent infringement suits, as well as appeals from the IP office. The IPD has its own rules to ensure speedy adjudication. We have a dedicated team for IP litigation."
  },
  {
    question: "What is the jurisdiction for cyber crime cases in Delhi?",
    answer: "Cyber crime cases are investigated by the specialized Cyber Crime Cells of the Delhi Police. The trial is conducted by the Chief Metropolitan Magistrate (CMM) or designated courts. We handle cases involving online fraud, data theft, identity theft, and hacking, providing defense strategies that involve technical and legal expertise."
  },
  {
    question: "Can I file a case for medical negligence in Delhi?",
    answer: "Yes, medical negligence cases can be filed before the District Consumer Disputes Redressal Commission (for claims up to ₹50 Lakhs), the State Commission (up to ₹2 Crores), or the National Commission (NCDRC) in Delhi (above ₹2 Crores). Alternatively, a criminal complaint or a civil suit for damages can also be filed. We represent victims of medical negligence as well as doctors/hospitals in defense."
  },
  {
    question: "What is the procedure for quashing an FIR in the Delhi High Court?",
    answer: "An FIR can be quashed by the Delhi High Court under Section 482 of the CrPC. This is often done when the parties have amicably settled a non-heinous offense (like a matrimonial dispute or a commercial cheating case) or when the FIR is an abuse of the process of law. We file the quashing petition along with the settlement deed and represent the parties before the High Court to get the criminal proceedings terminated."
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
      "name": "Delhi",
      "item": "https://www.amalegalsolutions.com/services/litigation/delhi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Delhi: Expert Lawyers for High Court & District Courts",
  "description": "Comprehensive guide to litigation services in Delhi. Expert legal representation for Civil, Criminal, Commercial, and IPR disputes in Delhi High Court, Tis Hazari, Patiala House, and all District Courts.",
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
  "name": "Litigation Services Delhi",
  "image": "https://www.amalegalsolutions.com/services/13.png",
  "description": "Top-tier litigation services for Delhi High Court and District Courts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
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
        "name": "Amit Khanna"
      },
      "reviewBody": "AMA Legal Solutions handled my commercial suit in the Delhi High Court with exceptional skill. Their understanding of the Commercial Courts Act and swift action helped me recover my dues quickly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Singh"
      },
      "reviewBody": "I was facing a false matrimonial case in Saket Court. The team at AMA provided strong defense and guided me through the mediation process. Highly recommended for family law matters."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Delhi | Delhi High Court & District Court Lawyers",
  description:
    "Expert litigation lawyers in Delhi. We represent clients in Delhi High Court, Tis Hazari, Patiala House, Saket, and all District Courts. Civil, Criminal, Commercial & IPR.",
  keywords: [
    "litigation services delhi",
    "delhi high court lawyer",
    "civil lawyer delhi",
    "criminal lawyer tis hazari",
    "property dispute lawyer delhi",
    "commercial court delhi",
    "divorce lawyer saket court",
    "cheque bounce lawyer delhi",
    "ipr lawyer delhi",
    "bail lawyer delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation/delhi',
  },
  openGraph: {
    title: "Litigation Services in Delhi | Delhi High Court & District Court Lawyers",
    description: "Expert litigation services in Delhi. Representing clients in Delhi High Court and all District Courts.",
    url: "https://www.amalegalsolutions.com/services/litigation/delhi",
    type: "website",
    images: [
      {
        url: "/services/13.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Delhi",
      },
    ],
  },
};

export default function DelhiLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "delhi-high-court", title: "Delhi High Court Practice" },
    { id: "district-courts", title: "District Courts Network" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "delhi-laws", title: "Delhi Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Delhi", href: "/services/litigation/delhi" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in Delhi
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Unmatched legal representation in the Delhi High Court and all District Courts. Expert advocacy for Civil, Criminal, Corporate, and Constitutional matters.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Delhi Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Excellence in the National Capital</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi, as the National Capital Territory, is the epicenter of India's legal system. It is home to the <strong>Supreme Court of India</strong>, the prestigious <strong>Delhi High Court</strong>, and a robust network of District Courts. Litigation in Delhi is fast-paced, high-stakes, and requires a sophisticated understanding of evolving laws and judicial precedents.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legal landscape here is unique. The Delhi High Court is known for its progressive judgments, efficient commercial division, and specialized Intellectual Property Division (IPD). The District Courts-spread across complexes like Tis Hazari, Patiala House, and Saket-handle a massive volume of civil and criminal litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we provide top-tier <strong>litigation services in Delhi</strong>. Our team of experienced advocates appears daily before all judicial forums in the capital. Whether you are a corporation fighting a multi-crore commercial dispute, a startup protecting your intellectual property, or an individual seeking justice in a family or property matter, we bring strategic acumen and aggressive advocacy to your case. We are committed to delivering results with integrity and professionalism.
                  </p>
                </section>

                {/* Delhi High Court */}
                <section id="delhi-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Delhi High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Delhi High Court is one of the few High Courts in India (along with Bombay, Calcutta, and Madras) that exercises <strong>Ordinary Original Civil Jurisdiction</strong>. This makes it a hub for high-value litigation.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Original Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        Civil suits where the value of the subject matter exceeds <strong>₹2 Crores</strong> are filed directly in the Delhi High Court. This ensures that complex, high-stakes matters are adjudicated by senior judges.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Commercial Division:</strong> Specialized benches for commercial disputes under the Commercial Courts Act, ensuring faster disposal.</li>
                        <li><strong>IP Division (IPD):</strong> A dedicated division for Trademarks, Copyrights, Patents, and Design disputes, making Delhi a preferred venue for IP litigation.</li>
                        <li><strong>Arbitration:</strong> Petitions for appointment of arbitrators (Section 11) and challenges to awards (Section 34) in high-value arbitrations.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">2. Writ & Appellate Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court is the guardian of fundamental rights and the appellate authority for the state.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Writ Petitions (Article 226):</strong> Challenging actions of the Central/State Government, DDA, MCD, Police, and other authorities.</li>
                        <li><strong>Letters Patent Appeals (LPA):</strong> Appeals against the judgment of a single judge to a division bench.</li>
                        <li><strong>Criminal Appeals & Revisions:</strong> Against orders of the Sessions Courts.</li>
                        <li><strong>Tax Appeals:</strong> Matters related to Income Tax, GST, and Customs.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* District Courts */}
                <section id="district-courts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">District Courts Network in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Delhi's judicial districts are well-organized, with specific court complexes serving defined territories. Knowing the correct jurisdiction is the first step in litigation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tis Hazari Courts</h3>
                      <p className="text-gray-700 mb-3">
                        The oldest and largest complex, serving Central and West Delhi.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Civil & Criminal matters of Central/West districts.</li>
                        <li>Special CBI Courts.</li>
                        <li>Motor Accident Claims Tribunals.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Patiala House Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Located in New Delhi district, handling high-profile cases.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Cases involving diplomats and politicians.</li>
                        <li>Special Courts for NIA (National Investigation Agency).</li>
                        <li>NDPS (Narcotics) cases.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Saket Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Serving the affluent South and South-East districts.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>High volume of commercial and property disputes.</li>
                        <li>Special Courts for Cheque Bounce (NI Act).</li>
                        <li>Family Courts.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Rouse Avenue Courts</h3>
                      <p className="text-gray-700 mb-3">
                        A specialized court complex for central agency cases.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>CBI and ED (Enforcement Directorate) trials.</li>
                        <li>Cases against MPs and MLAs.</li>
                        <li>Anti-Corruption matters.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Other Key Court Complexes</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-800">Karkardooma</h4>
                          <p className="text-sm text-gray-600">East, North-East, Shahdara</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Rohini</h4>
                          <p className="text-sm text-gray-600">North, North-West</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Dwarka</h4>
                          <p className="text-sm text-gray-600">South-West (Airport belt)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our Delhi litigation practice is comprehensive, addressing the diverse needs of individuals and businesses in the capital.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Commercial & Corporate Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Delhi is a corporate hub. We handle complex business disputes with speed and efficiency.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Recovery Suits:</strong> Filing summary suits under Order 37 CPC and commercial suits for recovery of dues.</li>
                        <li><strong>Arbitration:</strong> Representation in DIAC (Delhi International Arbitration Centre) and ad-hoc arbitrations.</li>
                        <li><strong>Insolvency:</strong> Representing creditors and corporate debtors in NCLT New Delhi Bench.</li>
                        <li><strong>Shareholder Disputes:</strong> Handling oppression and mismanagement cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We provide robust defense in serious criminal matters.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>White Collar Crime:</strong> Defense in money laundering (PMLA), corruption, and economic offenses.</li>
                        <li><strong>Bail Matters:</strong> Securing Regular Bail, Anticipatory Bail, and Interim Bail from District Courts and High Court.</li>
                        <li><strong>Cheque Bounce:</strong> Specialized defense and prosecution in Section 138 NI Act cases.</li>
                        <li><strong>Cyber Crime:</strong> Handling cases of online fraud, data theft, and IT Act violations.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Property & Real Estate</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Navigating the complex property laws of Delhi.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Landlord-Tenant Disputes:</strong> Litigation under Delhi Rent Control Act and general tenancy laws.</li>
                        <li><strong>Illegal Possession:</strong> Suits for possession and mesne profits against illegal occupants.</li>
                        <li><strong>DDA/MCD Matters:</strong> Stay against demolition, sealing, and regularization of property.</li>
                        <li><strong>Partition Suits:</strong> Family property partition and inheritance disputes.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Intellectual Property Rights (IPR)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your brand and innovations in the IP capital.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Infringement Suits:</strong> Filing suits for trademark, copyright, and patent infringement in the High Court IP Division.</li>
                        <li><strong>Passing Off:</strong> Actions against brand imitation.</li>
                        <li><strong>Domain Disputes:</strong> Resolving domain name squatting issues.</li>
                        <li><strong>John Doe Orders:</strong> Obtaining 'Ashok Kumar' orders to stop unknown infringers.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Delhi Specific Laws */}
                <section id="delhi-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Delhi Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Litigation in Delhi is often governed by local statutes that differ from central laws. Our expertise covers:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Delhi Rent Control Act, 1958</h4>
                      <p className="text-sm text-gray-600">
                        A strict law protecting tenants paying less than ₹3,500/month. Eviction is difficult and requires specific grounds. We advise landlords on strategies to recover possession under this Act.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Delhi Land Reforms Act, 1954</h4>
                      <p className="text-sm text-gray-600">
                        Governs agricultural land in Delhi's rural villages (Lal Dora). It restricts the sale and usage of such land. We handle disputes regarding title and succession of agricultural land.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Delhi Municipal Corporation Act, 1957</h4>
                      <p className="text-sm text-gray-600">
                        Regulates building bye-laws, sanitation, and property tax. We represent clients in disputes with MCD regarding unauthorized construction, sealing, and conversion charges.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Delhi Development Act, 1957</h4>
                      <p className="text-sm text-gray-600">
                        Governs the DDA and master planning. We handle litigation related to DDA flat allotments, lease administration, and land acquisition compensation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the courts in Delhi requires a disciplined approach. Here is how we manage your case:
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Case Analysis & Jurisdiction Check</h3>
                      <p className="text-gray-700">
                        We first determine the correct forum (High Court vs. District Court) based on pecuniary and territorial jurisdiction. This prevents initial dismissal.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Pre-Institution Mediation</h3>
                      <p className="text-gray-700">
                        For commercial suits, we initiate the mandatory mediation process at DLSA. If settlement fails, we obtain the 'Non-Starter Report' to file the suit.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Filing & Urgent Listing</h3>
                      <p className="text-gray-700">
                        We file the case and, if needed, mention it before the Chief Justice or designated bench for urgent listing to seek immediate interim relief (stay/injunction).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Trial & Evidence</h3>
                      <p className="text-gray-700">
                        We conduct rigorous admission/denial of documents and lead evidence. In Delhi courts, Local Commissioners are often appointed to record evidence quickly.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Final Arguments & Decree</h3>
                      <p className="text-gray-700">
                        We present comprehensive written and oral arguments. Once the judgment is delivered, we assist in drawing up the decree.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">6. Execution</h3>
                      <p className="text-gray-700">
                        We file execution proceedings to enforce the court order, whether it involves recovering money, evicting a tenant, or enforcing specific performance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Delhi?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Delhi has a dense concentration of lawyers. Here is what sets us apart:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Multi-Forum Expertise</h3>
                      <p className="text-gray-600">Seamless representation from District Courts to the High Court and Supreme Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">Speed & Efficiency</h3>
                      <p className="text-gray-600">We leverage commercial court provisions and mediation to resolve disputes faster.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Specialized Teams</h3>
                      <p className="text-gray-600">Dedicated teams for Criminal, Civil, Family, and Corporate litigation.</p>
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
                        "I was involved in a complex trademark dispute where a competitor was copying my brand. AMA Legal Solutions filed a suit in the Delhi High Court IP Division and secured an ex-parte injunction within 3 days. Their speed was incredible."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Ankit Verma</p>
                          <p className="text-sm text-gray-500">Founder, TechStart Solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My tenant in South Delhi had stopped paying rent and refused to vacate. Other lawyers said it would take 10 years. AMA's team used the correct provisions of the Transfer of Property Act and got me an eviction order in 18 months."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Mrs. Gupta</p>
                          <p className="text-sm text-gray-500">Landlord, Greater Kailash</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Lawyer in Delhi?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Get expert representation for your legal battles in the Capital. From District Courts to the High Court, we have you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Consultation
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Delhi Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Delhi High Court and District Courts.
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
