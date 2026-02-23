import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a civil suit in the Madras High Court?",
    answer: "The Madras High Court exercises Ordinary Original Civil Jurisdiction over civil suits arising within the limits of Chennai City, provided the suit value exceeds specified pecuniary limits (currently ₹1 Crore for commercial suits in the Commercial Division, and general civil suits above the City Civil Court's limit). The Plaint is filed in the Original Side Registry. For matters outside Chennai or below the pecuniary limit, suits are filed in the respective District or Subordinate Courts. We assist in determining the correct jurisdiction and filing your suit."
  },
  {
    question: "What is the difference between the Principal Seat and the Madurai Bench?",
    answer: "The **Principal Seat** of the Madras High Court is located in Chennai and has jurisdiction over the northern districts of Tamil Nadu and the Original Side jurisdiction for Chennai. The **Madurai Bench**, established in 2004, exercises jurisdiction over 13 southern districts of Tamil Nadu. It handles Writ Petitions, Appeals, and Criminal matters arising from these districts but does not have Ordinary Original Civil Jurisdiction."
  },
  {
    question: "How does the new Tenancy Act affect landlords and tenants in Tamil Nadu?",
    answer: "The **Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017 (TNRRRLT Act)** has replaced the old Rent Control Act. It mandates the registration of all tenancy agreements with the Rent Authority. The Act aims to balance the rights of landlords and tenants, providing a faster dispute resolution mechanism through the Rent Court and Rent Tribunal, moving away from the older, more prolonged eviction proceedings."
  },
  {
    question: "Do you handle property registration disputes in Tamil Nadu?",
    answer: "Yes, we handle disputes related to the refusal of registration by the Sub-Registrar, undervaluation proceedings (Section 47A of the Stamp Act), and cancellation of fraudulent registrations. We represent clients before the District Registrar, Inspector General of Registration, and file Writ Petitions in the Madras High Court challenging arbitrary administrative orders."
  },
  {
    question: "What is the procedure for quashing an FIR in Tamil Nadu?",
    answer: "An FIR can be quashed by the High Court under **Section 482 of the CrPC** (or Section 528 of the BNSS) if the dispute is purely civil in nature, there is a compromise between parties (in non-heinous offenses), or the allegations do not make out a cognizable offense. We file Quash Petitions in the Madras High Court (Principal Seat or Madurai Bench) to protect clients from harassment and abuse of the legal process."
  },
  {
    question: "Can I file a Writ Petition against the Chennai Corporation?",
    answer: "Yes, if the **Greater Chennai Corporation (GCC)** or any municipal body acts arbitrarily—such as issuing demolition notices without following due process, failing to maintain roads, or illegal tax assessments—you can file a Writ Petition under Article 226 in the Madras High Court. We specialize in municipal litigation and protecting citizen's rights against state inaction or excess."
  },
  {
    question: "What are the specialized courts in Chennai?",
    answer: "Chennai has several specialized courts: the **City Civil Court** (for civil suits), **Small Causes Court** (for rent and motor accident claims), **Egmore Chief Metropolitan Magistrate Court** (for criminal matters), **Labor Courts**, and **Family Courts**. Additionally, there are tribunals like the NCLT (Company Law), DRT (Debt Recovery), and NGT (Environment) located in Chennai."
  },
  {
    question: "How do I enforce a foreign divorce decree in Tamil Nadu?",
    answer: "A foreign divorce decree is generally recognized in India if it meets the criteria of Section 13 of the CPC (i.e., passed by a competent court, on merits, not against natural justice). However, if the decree is contested or ex-parte, it may need to be validated through a civil suit for declaration. We advise clients on the validity of foreign decrees and assist in fresh divorce proceedings if necessary."
  },
  {
    question: "Do you handle Cheque Bounce cases in Chennai?",
    answer: "Yes, we handle cases under Section 138 of the Negotiable Instruments Act. In Chennai, these are filed before the Metropolitan Magistrate Courts (e.g., Fast Track Courts at Saidapet, Egmore, George Town). We assist in sending the statutory legal notice, filing the complaint, and conducting the trial to ensure recovery of the debt."
  },
  {
    question: "What is the role of the Madurai Bench in criminal appeals?",
    answer: "The Madurai Bench hears Criminal Appeals and Revisions against judgments passed by Sessions Courts and Magistrate Courts in the southern districts (e.g., Madurai, Dindigul, Tirunelveli). It plays a crucial role in the administration of criminal justice for the southern region of Tamil Nadu."
  },
  {
    question: "How can I get an injunction against illegal construction?",
    answer: "You can file a civil suit for a permanent and mandatory injunction in the City Civil Court or the jurisdictional District Munsif Court. You can also file a Writ Petition in the High Court seeking a direction to the municipal authorities to take action against the unauthorized construction under the relevant Municipal Act."
  },
  {
    question: "What is the limitation period for filing a money suit?",
    answer: "Generally, the limitation period for filing a suit for recovery of money is **3 years** from the date the cause of action arises (e.g., date of default, date of last payment, or date of invoice). It is crucial to file within this period, as delay can be fatal to the claim. We ensure timely filing to protect your financial interests."
  },
  {
    question: "Do you assist with NCLT matters in Chennai?",
    answer: "Yes, the **National Company Law Tribunal (NCLT)** has a bench in Chennai. We represent operational and financial creditors, as well as corporate debtors, in insolvency proceedings under the IBC. We also handle oppression and mismanagement petitions and mergers/demergers."
  },
  {
    question: "What is the procedure for anticipatory bail in Tamil Nadu?",
    answer: "Anticipatory Bail applications are filed before the Principal Sessions Judge of the district or directly in the Madras High Court. In Chennai, they are filed in the Principal Sessions Court (Singaravelar Maaligai) or the High Court. The court considers factors like the nature of the offense and the likelihood of the accused fleeing. We move urgent applications to prevent arrest."
  },
  {
    question: "How do I resolve a family dispute regarding ancestral property?",
    answer: "Ancestral property disputes often involve partition suits. We assist in filing suits for partition and separate possession, ensuring your share is legally recognized. We also handle family settlements and mediation to resolve disputes amicably without prolonged litigation."
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
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Litigation Services",
      "item": "https://amalegalsolutions.com/services/litigation"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Tamil Nadu",
      "item": "https://amalegalsolutions.com/services/litigation/tamil-nadu"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Tamil Nadu: Expert Lawyers for Madras High Court",
  "description": "Comprehensive guide to litigation services in Tamil Nadu. Expert legal representation for Civil, Criminal, Property, and Commercial disputes in Madras High Court, Madurai Bench, and District Courts.",
  "image": "https://amalegalsolutions.com/services/litigation-tamil-nadu.png", // Placeholder
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-12-02",
  "dateModified": "2024-12-02"
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
  "name": "Litigation Services Tamil Nadu",
  "image": "https://amalegalsolutions.com/services/litigation-tamil-nadu.png",
  "description": "Top-tier litigation services for Madras High Court and District Courts.",
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
        "name": "Karthik Subramanian"
      },
      "reviewBody": "AMA Legal Solutions handled our property dispute in the Madras High Court with exceptional professionalism. Their knowledge of the new Tenancy Act helped us resolve the matter quickly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Lakshmi Narayanan"
      },
      "reviewBody": "We approached them for a corporate insolvency matter at the NCLT Chennai. Their strategic advice and timely action were instrumental in protecting our company's interests."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Tamil Nadu | Madras High Court Lawyers",
  description:
    "Expert litigation lawyers in Tamil Nadu. We represent clients in Madras High Court (Chennai & Madurai), City Civil Court, and District Courts. Civil, Criminal, Property & Commercial cases.",
  keywords: [
    "litigation services tamil nadu",
    "madras high court lawyer",
    "civil lawyer chennai",
    "criminal lawyer madurai",
    "property dispute lawyer tamil nadu",
    "rent control lawyer chennai",
    "nclt lawyer chennai",
    "divorce lawyer chennai",
    "writ petition madras high court",
    "commercial court chennai"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation/tamil-nadu',
  },
  openGraph: {
    title: "Litigation Services in Tamil Nadu | Madras High Court Lawyers",
    description: "Expert litigation services in Tamil Nadu. Representing clients in Madras High Court, City Civil Court, and District Courts.",
    url: "https://amalegalsolutions.com/services/litigation/tamil-nadu",
    type: "website",
    images: [
      {
        url: "/services/litigation-tamil-nadu.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Tamil Nadu",
      },
    ],
  },
};

export default function tamil-naduLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "madras-high-court", title: "Madras High Court Practice" },
    { id: "subordinate-judiciary", title: "Subordinate Judiciary" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "tamil-nadu-laws", title: "Tamil Nadu Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Tamil Nadu", href: "/services/litigation/tamil-nadu" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in Tamil Nadu
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Defending your rights in the historic Madras High Court and District Courts across the state. Strategic advocacy for complex civil, criminal, and commercial disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Chennai Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Legal Landscape of Tamil Nadu</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tamil Nadu, with its capital Chennai (formerly Madras), is a hub of legal and judicial activity in South India. The <strong>Madras High Court</strong>, one of the three Chartered High Courts in India, stands as a beacon of justice with a rich legacy. The state's legal framework is a blend of central statutes and specific state enactments tailored to its socio-economic fabric.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From the bustling commercial corridors of Chennai to the industrial hubs of Coimbatore and the cultural heartland of Madurai, litigation needs are diverse. They range from complex corporate and intellectual property disputes to traditional land and family matters. The introduction of the <strong>Madurai Bench</strong> has further decentralized justice, catering specifically to the southern districts.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we offer comprehensive litigation services across Tamil Nadu. Our team of experienced advocates appears regularly before the Madras High Court (Principal Seat and Madurai Bench), City Civil Courts, NCLT, and other tribunals. We combine deep knowledge of local laws with a strategic, client-focused approach to deliver results.
                  </p>
                </section>

                {/* Madras High Court */}
                <section id="madras-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Madras High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>High Court of Judicature at Madras</strong> holds a unique position with its dual jurisdiction. Understanding its structure is key to effective litigation.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Ordinary Original Civil Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The Madras High Court retains Ordinary Original Civil Jurisdiction for the city of Chennai. This allows it to directly try:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Civil suits valued above specified pecuniary limits arising within Chennai.</li>
                        <li><strong>Admiralty Suits:</strong> Exclusive jurisdiction over maritime claims.</li>
                        <li><strong>Testamentary Matters:</strong> Probate of Wills and Letters of Administration in Chennai.</li>
                        <li><strong>IPR Suits:</strong> Infringement actions for trademarks, patents, and copyrights.</li>
                        <li><strong>Insolvency:</strong> Matters related to the Presidency Towns Insolvency Act.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">2. Appellate & Writ Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court exercises appellate jurisdiction over all subordinate courts in the state.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Writ Petitions (Article 226):</strong> For enforcement of fundamental rights and challenging state actions.</li>
                        <li><strong>Writ Appeals:</strong> Appeals against the order of a Single Judge.</li>
                        <li><strong>Civil & Criminal Appeals:</strong> From District and Sessions Courts.</li>
                        <li><strong>Revisions:</strong> Civil and Criminal Revision Petitions.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Madurai Bench</h3>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      Established to serve the southern districts, the Madurai Bench has jurisdiction over 13 districts including Madurai, Dindigul, Theni, Virudhunagar, Sivaganga, Ramanathapuram, Tirunelveli, Thoothukudi, Kanyakumari, Thanjavur, Pudukkottai, Tiruchirappalli, and Karur. It handles Writ Petitions and Appeals arising from these regions.
                    </p>
                  </div>
                </section>

                {/* Subordinate Judiciary */}
                <section id="subordinate-judiciary" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Subordinate Judiciary in Tamil Nadu</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The subordinate courts form the backbone of the judicial system. In Chennai and other districts, the hierarchy is well-defined.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">City Civil Court, Chennai</h3>
                      <p className="text-gray-700 mb-3">
                        Located within the High Court campus, it handles civil suits for Chennai city.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Suits valued up to the pecuniary limit (below High Court jurisdiction).</li>
                        <li>Appeals from Small Causes Court (in certain matters).</li>
                        <li>General civil litigation.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Court of Small Causes</h3>
                      <p className="text-gray-700 mb-3">
                        A specialized court for specific types of cases in Chennai.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Rent Control matters (Rent Court/Tribunal).</li>
                        <li>Motor Accident Claims (MCOP).</li>
                        <li>Municipal Tax Appeals.</li>
                        <li>Ejectment Suits.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Metropolitan Magistrate Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Handling criminal matters in the metropolitan area (Egmore, Saidapet, George Town).
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Remand and Bail.</li>
                        <li>Trials for summary and summons cases.</li>
                        <li>Cheque Bounce (NI Act) cases.</li>
                        <li>Traffic offenses.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">District Courts</h3>
                      <p className="text-gray-700 mb-3">
                        In districts like Coimbatore, Salem, and Madurai, the Principal District Judge heads the judiciary.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Sessions Cases (Serious crimes).</li>
                        <li>Civil Appeals.</li>
                        <li>Motor Accident Claims.</li>
                        <li>Family matters (where no Family Court exists).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Tamil Nadu</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our legal practice is tailored to the specific needs of clients in Tamil Nadu.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Real Estate & Property Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        With rapid urbanization, property disputes are common. We handle:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Tenancy Disputes:</strong> Under the new TN Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017.</li>
                        <li><strong>Land Grabbing:</strong> Complaints before the Special Court for Land Grabbing cases.</li>
                        <li><strong>Registration Issues:</strong> Appeals against refusal to register documents.</li>
                        <li><strong>CMDA/DTCP Approvals:</strong> Litigation regarding planning permissions and violations.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Corporate & Commercial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Serving the industrial and IT sectors in Chennai and beyond.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>NCLT Chennai:</strong> Insolvency (IBC), mergers, and oppression/mismanagement.</li>
                        <li><strong>Commercial Suits:</strong> Fast-track litigation in the Commercial Division of the High Court.</li>
                        <li><strong>Arbitration:</strong> Domestic and international commercial arbitration.</li>
                        <li><strong>Contracts:</strong> Breach of contract and specific performance suits.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your liberty and rights.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Bail:</strong> Anticipatory and Regular Bail in Sessions and High Court.</li>
                        <li><strong>Quashing:</strong> Quashing of FIRs under Section 482 CrPC.</li>
                        <li><strong>Economic Offenses:</strong> Defense in EOW, CBI, and ED cases.</li>
                        <li><strong>Cyber Crime:</strong> Defense in cases involving IT Act offenses.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family & Matrimonial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Compassionate legal support for personal matters.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> Mutual consent and contested divorce in Family Courts.</li>
                        <li><strong>Domestic Violence:</strong> Protection orders and defense.</li>
                        <li><strong>Custody:</strong> Child custody and visitation rights.</li>
                        <li><strong>Maintenance:</strong> Alimony and maintenance for spouse and children.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tamil Nadu Specific Laws */}
                <section id="tamil-nadu-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Tamil Nadu Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have in-depth knowledge of state legislations that impact litigation in Tamil Nadu.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">TN Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017</h4>
                      <p className="text-sm text-gray-600">
                        Replaced the old Rent Control Act. Mandates registration of tenancy agreements and establishes Rent Courts for speedy dispute resolution.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tamil Nadu Land Reforms (Fixation of Ceiling on Land) Act, 1961</h4>
                      <p className="text-sm text-gray-600">
                        Governs the ceiling on agricultural land holdings. We handle disputes regarding surplus land and exemptions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Chennai City Municipal Corporation Act, 1919</h4>
                      <p className="text-sm text-gray-600">
                        Governs municipal administration in Chennai. Relevant for property tax, building plan approvals, and trade licenses.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tamil Nadu Prohibition of Harassment of Woman Act, 1998</h4>
                      <p className="text-sm text-gray-600">
                        A specific state law to address harassment of women. We handle cases filed under this Act along with IPC offenses.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tamil Nadu Apartment Ownership Act, 1994</h4>
                      <p className="text-sm text-gray-600">
                        Deals with the ownership of apartments and the formation of associations. Crucial for disputes in apartment complexes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Step by Step</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We guide you through every stage of the legal process with clarity and transparency.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Consultation & Strategy</h3>
                      <p className="text-gray-700">
                        We analyze your case facts and documents. A clear legal strategy is formulated, and a Legal Notice is issued if required.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Filing of Pleadings</h3>
                      <p className="text-gray-700">
                        The Plaint, Petition, or Appeal is drafted and filed in the appropriate court (High Court, City Civil, or District Court).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Interim Relief</h3>
                      <p className="text-gray-700">
                        We seek immediate court intervention for Injunctions, Stays, or Bail to protect your immediate interests.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Evidence & Trial</h3>
                      <p className="text-gray-700">
                        We lead evidence through documents and witnesses. Cross-examination is conducted to challenge the opponent's case.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Judgment & Execution</h3>
                      <p className="text-gray-700">
                        Upon favorable judgment, we file Execution Petitions to enforce the court's order and realize the relief granted.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bring a blend of experience, expertise, and empathy to your legal battles.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Madras High Court Experts</h3>
                      <p className="text-gray-600">Extensive experience in both Original and Appellate sides of the Madras High Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📜</div>
                      <h3 className="font-bold text-xl mb-2">State Law Specialists</h3>
                      <p className="text-gray-600">Deep understanding of Tamil Nadu's specific civil, criminal, and property laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client-Centric</h3>
                      <p className="text-gray-600">We prioritize your goals and work tirelessly to achieve the best possible outcome.</p>
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
                        "I was facing a complex land grabbing issue in Chennai. AMA Legal Solutions filed a complaint in the special court and also secured an injunction from the High Court. Their swift action saved my property."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ramesh Kumar</p>
                          <p className="text-sm text-gray-500">Property Owner, Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My company was involved in a contractual dispute. The team at AMA handled the arbitration proceedings professionally and helped us enforce the award. Highly recommended for commercial litigation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Natarajan</p>
                          <p className="text-sm text-gray-500">Director, IT Firm</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Tamil Nadu fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Chennai Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Madras High Court and District Courts.
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
