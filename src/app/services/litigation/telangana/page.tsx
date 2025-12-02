import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a civil suit in the Telangana High Court?",
    answer: "Filing a civil suit in the Telangana High Court depends on the jurisdiction. The High Court primarily exercises Appellate Jurisdiction over civil matters from subordinate courts. However, for certain matters like Writ Petitions under Article 226, it has original jurisdiction. The process involves drafting a detailed Petition/Plaint, paying the requisite court fees, and filing it with the Registry. For commercial disputes, the Commercial Courts Act procedures apply. It is crucial to engage a lawyer who understands the specific filing procedures and local rules of the High Court at Hyderabad."
  },
  {
    question: "What types of cases does the Telangana High Court handle?",
    answer: "The High Court for the State of Telangana handles a wide variety of cases including Writ Petitions (Civil and Criminal), Public Interest Litigations (PILs), Civil Appeals (First and Second Appeals), Criminal Appeals against convictions by Sessions Courts, Bail Applications, Company Petitions, and Arbitration matters (appointment of arbitrators and challenges to awards). It is the highest judicial authority in the state."
  },
  {
    question: "Do you handle cases in District Courts of Telangana?",
    answer: "Yes, AMA Legal Solutions has a strong network across Telangana. We represent clients in District and Sessions Courts in Hyderabad, Ranga Reddy, Warangal, Karimnagar, Nizamabad, and other districts. Whether it is a property dispute in a District Court, a family matter in a Family Court, or a criminal trial in a Sessions Court, our team ensures competent representation at the grassroots level."
  },
  {
    question: "What are the key property laws applicable in Telangana?",
    answer: "Property litigation in Telangana involves several specific laws. Key statutes include the **Telangana Rights in Land and Pattadar Pass Books Act, 2020 (Dharani Portal issues)**, the **Telangana Land Encroachment Act**, and the **Telangana Apartments (Promotion of Construction and Ownership) Act, 1987**. We also handle disputes related to the **Real Estate (Regulation and Development) Act (RERA)**, land acquisition matters, and disputes involving prohibited lands (Section 22A)."
  },
  {
    question: "How does the PD Act apply in Telangana?",
    answer: "The **Telangana Prevention of Dangerous Activities of Bootleggers, Dacoits, Drug-Offenders, Goondas, Immoral Traffic Offenders and Land-Grabbers Act, 1986 (PD Act)** is a preventive detention law used to detain habitual offenders to maintain public order. It is often invoked against land grabbers and white-collar criminals. Challenging a detention order under the PD Act requires filing a Writ of Habeas Corpus in the High Court and demonstrating that the procedural safeguards were violated or that the grounds are vague."
  },
  {
    question: "Can I file a case against a builder for delay in Hyderabad?",
    answer: "Absolutely. If a builder in Hyderabad or anywhere in Telangana delays possession, you can approach the **Telangana State Real Estate Regulatory Authority (TS-RERA)** for interest on delay, refund, or compensation. You can also file a consumer complaint in the District or State Consumer Commission. In cases of cheating, a criminal FIR can be registered. We assist in choosing the most effective legal remedy based on your specific agreement and circumstances."
  },
  {
    question: "What is the role of the City Civil Court in Hyderabad?",
    answer: "The **City Civil Court, Hyderabad** handles civil suits arising within the limits of Hyderabad and Secunderabad. It deals with property disputes, money recovery suits, injunctions, and execution petitions. It is a crucial court for civil litigation in the twin cities. There is also a separate City Small Causes Court for rent and eviction matters."
  },
  {
    question: "How long does it take to resolve a commercial dispute in Hyderabad?",
    answer: "With the establishment of dedicated **Commercial Courts** in Telangana, the resolution of commercial disputes has sped up. The Commercial Courts Act mandates strict timelines, such as filing written statements within 120 days and mandatory pre-institution mediation. While a contested trial can still take 2-3 years, interim reliefs like injunctions can be obtained relatively quickly to protect your business interests."
  },
  {
    question: "Do you handle land grabbing cases in Telangana?",
    answer: "Yes, land grabbing is a serious issue in Telangana. We represent clients in Special Courts for Land Grabbing (Prohibition) Act cases. We also handle matters related to the **Dharani Portal**, rectification of land records, and disputes involving government lands assigned to private parties. We fight to protect your lawful ownership against illegal encroachers."
  },
  {
    question: "What is the limitation period for filing an appeal in the Telangana High Court?",
    answer: "The limitation period is governed by the Limitation Act, 1963. For a civil appeal to the High Court, the period is generally **90 days** from the date of the decree. For criminal appeals, it is **60 days**. For Writ Appeals against a Single Judge's order, the timeline is usually 30 days. It is critical to act swiftly and obtain certified copies immediately to file within the limitation period."
  },
  {
    question: "What is the procedure for Succession Certificate in Telangana?",
    answer: "A Succession Certificate is required to inherit movable assets like bank deposits and shares. In Telangana, you can apply for it in the appropriate Civil Court. For immovable property, a Legal Heir Certificate is issued by the Revenue Department (Mandal Revenue Officer), but in case of disputes, a suit for partition or declaration of title in a Civil Court is necessary. We assist in obtaining both administrative certificates and court decrees."
  },
  {
    question: "Can I file a Writ Petition against a private company?",
    answer: "A Writ Petition under Article 226 generally lies against the 'State' or public authorities. A private company is usually not amenable to writ jurisdiction unless it is performing a public duty. However, for employment disputes or contractual breaches by private entities, the appropriate remedy is a civil suit or approaching the Labour Court/Industrial Tribunal, not a Writ Petition."
  },
  {
    question: "What is the Telangana Money Lenders Act?",
    answer: "The **Telangana Money Lenders Act** regulates the business of money lending. It prohibits charging excessive interest and requires money lenders to be licensed. If you are being harassed by illegal money lenders or 'call money' operators, we can help you file complaints and seek protection from the courts. Conversely, we also assist licensed lenders in legally recovering their dues."
  },
  {
    question: "How are Dharani Portal grievances handled?",
    answer: "The **Dharani Portal** is the integrated land records management system in Telangana. Many disputes arise due to wrong entries, missing survey numbers, or prohibited list classifications. Grievances can be raised online, but if they are not resolved, a Writ Petition in the High Court is often the only effective remedy to direct the revenue authorities to correct the records. We specialize in Dharani-related litigation."
  },
  {
    question: "What is the jurisdiction of the Junior and Senior Civil Judges?",
    answer: "In Telangana, the pecuniary jurisdiction determines which court hears a civil suit. **Junior Civil Judges** typically handle suits with a lower valuation (e.g., up to ₹20 Lakhs), while **Senior Civil Judges** handle matters with higher valuation (e.g., above ₹20 Lakhs up to ₹50 Lakhs or more, subject to current notifications). District Judges have unlimited pecuniary jurisdiction. Filing in the correct court is essential to avoid rejection of the plaint."
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
      "name": "Telangana",
      "item": "https://amalegalsolutions.com/services/litigation/telangana"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Telangana: Expert Lawyers for High Court & District Courts",
  "description": "Comprehensive guide to litigation services in Telangana. Expert legal representation for Civil, Criminal, Property, and Commercial disputes in Telangana High Court, Hyderabad Civil Courts, and across the state.",
  "image": "https://amalegalsolutions.com/services/litigation-telangana.png", // Placeholder or generic image
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
      "url": "https://amalegalsolutions.com/logo.png"
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
  "name": "Litigation Services Telangana",
  "image": "https://amalegalsolutions.com/services/litigation-telangana.png",
  "description": "Top-tier litigation services for Telangana High Court and District Courts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
        "name": "Ramesh Reddy"
      },
      "reviewBody": "AMA Legal Solutions helped me resolve a long-standing land dispute in Ranga Reddy district. Their knowledge of the Dharani portal issues and revenue laws is exceptional. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Srinivas Rao"
      },
      "reviewBody": "Excellent lawyers for High Court matters in Hyderabad. They handled our company's writ petition with great professionalism and secured a favorable order. Very transparent and effective."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Telangana | High Court Lawyers Hyderabad",
  description:
    "Expert litigation lawyers in Telangana. We represent clients in Telangana High Court, City Civil Courts, and District Courts. Civil, Criminal, Property & Commercial cases.",
  keywords: [
    "litigation services telangana",
    "high court lawyer hyderabad",
    "civil lawyer hyderabad",
    "criminal lawyer warangal",
    "property dispute lawyer telangana",
    "pd act lawyer",
    "rera lawyer hyderabad",
    "divorce lawyer hyderabad",
    "commercial court hyderabad",
    "dharani portal lawyer"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation/telangana',
  },
  openGraph: {
    title: "Litigation Services in Telangana | High Court Lawyers Hyderabad",
    description: "Expert litigation services in Telangana. Representing clients in High Court, City Civil Courts, and District Courts.",
    url: "https://amalegalsolutions.com/services/litigation/telangana",
    type: "website",
    images: [
      {
        url: "/services/litigation-telangana.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Telangana",
      },
    ],
  },
};

export default function TelanganaLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "telangana-high-court", title: "Telangana High Court Practice" },
    { id: "subordinate-judiciary", title: "Subordinate Judiciary" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "telangana-laws", title: "Telangana Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Telangana", href: "/services/litigation/telangana" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in Telangana
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Defending your rights in the Telangana High Court and District Courts across the state. Strategic advocacy for complex civil, criminal, and commercial disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Telangana Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Legal Landscape of Telangana</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Telangana, the youngest state in India, has rapidly emerged as a hub for technology, pharmaceuticals, and real estate. With Hyderabad as its vibrant capital, the state presents a dynamic legal environment. Litigation in Telangana requires not only a deep understanding of central laws but also a mastery of state-specific statutes, particularly those related to land revenue, urban development, and local administration.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From complex corporate disputes in the IT corridors of Hitech City to intricate land litigation involving the Dharani portal in rural districts, the need for specialized legal representation is paramount. <strong>Litigation services in Telangana</strong> cover a broad spectrum: Civil suits, Criminal defense, Writ jurisdiction, Real Estate conflicts, and Family law matters.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we offer comprehensive litigation support across the state. Our team of experienced advocates is adept at navigating the <strong>High Court for the State of Telangana</strong> and subordinate courts. We understand the local nuances and the evolving legal framework of the state. Whether you are a business facing a commercial lawsuit or an individual fighting for your property rights, we are committed to delivering results with integrity and strategic excellence.
                  </p>
                </section>

                {/* Telangana High Court */}
                <section id="telangana-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Telangana High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>High Court for the State of Telangana</strong>, located in the historic city of Hyderabad, is the apex judicial body in the state. It exercises jurisdiction over all civil and criminal matters arising within Telangana. Our practice at the High Court is robust and multifaceted:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Writ Jurisdiction (Article 226)</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court has the power to issue writs to enforce fundamental rights and ensure administrative justice. We file Writ Petitions to challenge:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Arbitrary actions by government authorities (Municipalities, Revenue Dept, Police).</li>
                        <li>Illegal detention (Habeas Corpus).</li>
                        <li>Violation of principles of natural justice in administrative orders.</li>
                        <li>Inaction by officials in performing their statutory duties (Writ of Mandamus).</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">2. Appellate & Revisional Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court hears appeals against the judgments and orders of District Courts, Sessions Courts, and Tribunals.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Civil Appeals:</strong> First Appeals and Second Appeals against decrees in property, money, and family suits.</li>
                        <li><strong>Criminal Appeals:</strong> Appeals against conviction or acquittal in serious criminal cases.</li>
                        <li><strong>Criminal Revision Cases:</strong> Challenging procedural irregularities or incorrect findings by lower courts.</li>
                        <li><strong>Quash Petitions:</strong> Under Section 482 CrPC to quash false FIRs and criminal proceedings.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Key Areas in High Court</h3>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      Beyond writs and appeals, we handle specialized matters such as:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Arbitration</h4>
                        <p className="text-sm text-gray-600">Appointment of Arbitrators (Sec 11) & Challenges to Awards (Sec 34).</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">Company Matters</h4>
                        <p className="text-sm text-gray-600">Company Appeals and schemes of arrangement/merger.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                        <h4 className="font-bold text-[#D2A02A]">PILs</h4>
                        <p className="text-sm text-gray-600">Public Interest Litigations for social causes and environmental issues.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Subordinate Judiciary */}
                <section id="subordinate-judiciary" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Subordinate Judiciary in Telangana</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Effective litigation often begins at the trial court level. We have a strong presence in the subordinate courts across Telangana.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">City Civil Courts, Hyderabad</h3>
                      <p className="text-gray-700 mb-3">
                        Located near Purani Haveli, these courts handle civil litigation for the twin cities.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Original Suits for title, possession, and injunctions.</li>
                        <li>Money recovery suits.</li>
                        <li>Execution Petitions.</li>
                        <li>Appeals from Junior Civil Judges.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">District & Sessions Courts</h3>
                      <p className="text-gray-700 mb-3">
                        In districts like Ranga Reddy, Medchal-Malkajgiri, Warangal, and Karimnagar, these are the principal courts.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Serious criminal trials (Sessions Cases).</li>
                        <li>Civil suits of higher valuation.</li>
                        <li>Motor Accident Claims (MACT).</li>
                        <li>Family law matters (where Family Courts are not separate).</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Metropolitan Magistrate Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Handling criminal matters in the metropolitan area of Hyderabad and Cyberabad.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Bail applications.</li>
                        <li>Remand proceedings.</li>
                        <li>Cheque bounce cases (NI Act).</li>
                        <li>Traffic challans and petty offenses.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Special Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Telangana has several specialized courts for specific offenses.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>ACB Courts (Anti-Corruption Bureau cases).</li>
                        <li>SC/ST Atrocities Courts.</li>
                        <li>Family Courts (Divorce, Custody).</li>
                        <li>Land Grabbing Prohibition Courts.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Telangana</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our litigation practice is tailored to the specific legal needs of individuals and businesses in Telangana.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Land & Real Estate Litigation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        With the real estate boom in Telangana, land disputes are common. We specialize in:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Dharani Portal Issues:</strong> Rectification of records, missing survey numbers, and prohibited land disputes.</li>
                        <li><strong>Title Suits:</strong> Declaration of title and recovery of possession against encroachers.</li>
                        <li><strong>RERA Litigation:</strong> Representing buyers against builders for delay and defects before TS-RERA.</li>
                        <li><strong>Land Acquisition:</strong> Compensation enhancement petitions for lands acquired by the government.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Corporate & Commercial Disputes</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Serving the business hubs of Hyderabad.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Commercial Suits:</strong> Recovery of dues, breach of contract, and IP disputes in Commercial Courts.</li>
                        <li><strong>Insolvency (IBC):</strong> Representing creditors and corporate debtors in NCLT Hyderabad.</li>
                        <li><strong>Startup Litigation:</strong> Shareholder agreements, founder disputes, and employment contracts.</li>
                        <li><strong>Arbitration:</strong> Handling domestic arbitration proceedings.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your liberty and reputation.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>White Collar Crimes:</strong> Defense in fraud, embezzlement, and cybercrime cases.</li>
                        <li><strong>PD Act Cases:</strong> Challenging preventive detention orders in the High Court.</li>
                        <li><strong>Bail Matters:</strong> Securing Anticipatory Bail and Regular Bail.</li>
                        <li><strong>498A & Domestic Violence:</strong> Defense against false matrimonial criminal cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Compassionate legal support for personal matters.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> Mutual consent and contested divorce proceedings.</li>
                        <li><strong>Child Custody:</strong> Ensuring the welfare of the child in custody battles.</li>
                        <li><strong>Maintenance:</strong> Alimony claims for spouse and children.</li>
                        <li><strong>Restitution of Conjugal Rights:</strong> Petitions to restore marital cohabitation.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Telangana Specific Laws */}
                <section id="telangana-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Telangana Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Litigation in Telangana is governed by a unique set of state laws. Our expertise includes:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana Rights in Land and Pattadar Pass Books Act, 2020</h4>
                      <p className="text-sm text-gray-600">
                        The backbone of land revenue administration. It governs the issuance of passbooks and title transfers via the Dharani portal. We handle disputes arising from incorrect entries and mutation rejections.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana Land Encroachment Act, 1905</h4>
                      <p className="text-sm text-gray-600">
                        Empowers the government to remove encroachments from government land. We represent clients who receive eviction notices under Section 7 and challenge arbitrary evictions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana PD Act, 1986</h4>
                      <p className="text-sm text-gray-600">
                        A stringent law used to detain 'Goondas', 'Land Grabbers', and other offenders without trial for up to a year. We have a high success rate in quashing PD Act detention orders in the High Court.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana Municipalities Act, 2019</h4>
                      <p className="text-sm text-gray-600">
                        Governs urban local bodies. We handle disputes related to building permissions, illegal constructions, and property tax assessments.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana Money Lenders Act</h4>
                      <p className="text-sm text-gray-600">
                        Regulates money lending practices. We assist in cases involving harassment by illegal money lenders and recovery suits for licensed lenders.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Telangana Assigned Lands (Prohibition of Transfers) Act, 1977</h4>
                      <p className="text-sm text-gray-600">
                        Prohibits the transfer of lands assigned to the landless poor. We handle disputes where private lands are wrongly classified as assigned lands (POT cases).
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Step by Step</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the court system can be daunting. Here is a simplified overview of the litigation process in Telangana courts.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Legal Notice</h3>
                      <p className="text-gray-700">
                        Most civil disputes begin with a Legal Notice. It puts the opposite party on notice of your claim and intention to file a suit. A well-drafted notice can often lead to a settlement.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Filing the Case</h3>
                      <p className="text-gray-700">
                        The Plaint or Petition is filed in the relevant court (Junior Civil Judge, Senior Civil Judge, District Court, or High Court) based on jurisdiction and valuation. The court scrutinizes the filing and assigns a case number.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Summons & Written Statement</h3>
                      <p className="text-gray-700">
                        The court issues summons to the defendant. The defendant must appear and file a Written Statement (defense) within the statutory period (usually 30-90 days).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Trial & Evidence</h3>
                      <p className="text-gray-700">
                        The court frames issues. Both parties lead evidence through documents and witness testimonies. Cross-examination is conducted to test the veracity of the witnesses.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Arguments & Judgment</h3>
                      <p className="text-gray-700">
                        Advocates present final arguments summarizing the evidence and legal precedents. The judge then pronounces the Judgment and Decree.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">6. Appeal or Execution</h3>
                      <p className="text-gray-700">
                        The losing party may file an Appeal in a higher court. If there is no stay, the winning party can file an Execution Petition to enforce the decree.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with local knowledge to deliver superior results.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Experts</h3>
                      <p className="text-gray-600">Extensive experience in Writ Jurisdiction and Appeals at the Telangana High Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Insight</h3>
                      <p className="text-gray-600">Deep understanding of Telangana's land laws, Dharani portal, and revenue procedures.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client-Centric</h3>
                      <p className="text-gray-600">We prioritize your goals, offering transparent advice and cost-effective legal strategies.</p>
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
                        "I was facing a severe land grabbing issue in Nizamabad. The local police were not helping. AMA Legal Solutions filed a Writ Petition in the High Court and got an order for police protection and survey. They saved my ancestral property."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Krishna Rao</p>
                          <p className="text-sm text-gray-500">Farmer, Nizamabad</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our company had a major dispute with a vendor who defaulted on payments. The team at AMA initiated a commercial suit and secured an attachment before judgment order, which forced the vendor to settle. Highly professional team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anitha Reddy</p>
                          <p className="text-sm text-gray-500">Director, Tech Solutions</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Telangana fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Hyderabad Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Telangana High Court and District Courts.
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
                      <Link href="/services/family-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Family Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
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
