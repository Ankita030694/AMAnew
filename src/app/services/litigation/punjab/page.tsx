import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the High Court for Punjab located?",
    answer: "The **Punjab and Haryana High Court** is located in **Chandigarh**, the shared capital of both states. It has jurisdiction over the State of Punjab, the State of Haryana, and the Union Territory of Chandigarh. It is a common High Court for these three entities and handles all Writ Petitions, Appeals, and other high-level litigation matters arising from Punjab."
  },
  {
    question: "Do you handle NRI property disputes in Punjab?",
    answer: "Yes, NRI property disputes are a major area of our practice. Many NRIs from Punjab face issues like illegal possession of their ancestral property, fraudulent transfers, and tenant disputes. We assist in filing cases under the **Punjab Security of Land Tenures Act** and the **East Punjab Urban Rent Restriction Act**, as well as specific remedies available to NRIs for speedy eviction of tenants."
  },
  {
    question: "What is the procedure for anticipatory bail in Punjab?",
    answer: "Anticipatory Bail applications under Section 438 CrPC are filed before the Sessions Court of the respective district or directly in the Punjab and Haryana High Court. In cases involving dowry harassment (498A), political rivalry, or property disputes, securing pre-arrest bail is crucial. We have a strong track record in obtaining relief from the High Court."
  },
  {
    question: "How do I resolve a matrimonial dispute in Punjab?",
    answer: "Matrimonial disputes, including divorce, restitution of conjugal rights, and maintenance, are handled by the **Family Courts** in each district. We handle both mutual consent divorce and contested divorce cases. We also assist in quashing of 498A FIRs in the High Court on the basis of compromise, which is a common route for settlement."
  },
  {
    question: "Can I challenge a mutation of agricultural land?",
    answer: "Yes, mutation entries by the Revenue Department (Patwari/Tehsildar) can be challenged. The appeal lies with the Collector (DC) and then the Commissioner. Ultimately, a Civil Suit for Declaration of Title can be filed in the Civil Courts if there is a dispute regarding ownership. We handle both revenue appeals and civil title suits."
  },
  {
    question: "What are the laws regarding drug cases (NDPS) in Punjab?",
    answer: "Punjab has stringent enforcement of the **NDPS Act** due to the drug menace. Bail in cases involving 'commercial quantity' is extremely difficult under Section 37. We provide specialized defense, focusing on procedural violations by the police (like non-compliance with search and seizure rules) to secure bail and acquittal for our clients."
  },
  {
    question: "Do you handle cheque bounce cases in Ludhiana and Jalandhar?",
    answer: "Yes, Ludhiana and Jalandhar are major industrial hubs, and cheque bounce cases under Section 138 of the NI Act are very common. We represent businesses and individuals in filing complaints and defending against false accusations in the Judicial Magistrate Courts."
  },
  {
    question: "How can I get protection from the High Court for a runaway marriage?",
    answer: "Couples who marry against the wishes of their families often face threats. We file **Protection Petitions** in the Punjab and Haryana High Court seeking directions to the police to protect the life and liberty of the couple. These petitions are usually listed and heard on an urgent basis."
  },
  {
    question: "What is the role of the DRT in Chandigarh?",
    answer: "The **Debts Recovery Tribunal (DRT)** in Chandigarh has jurisdiction over bank loan recovery matters for Punjab. We represent borrowers and guarantors in SARFAESI Act proceedings, challenging auction notices and possession orders issued by banks."
  },
  {
    question: "Can I file a Writ Petition against the Punjab Police?",
    answer: "Yes, if the police are harassing you, refusing to register an FIR, or illegally detaining someone, a Writ Petition (Criminal) or Habeas Corpus petition can be filed in the High Court. The High Court has the power to order an independent investigation or transfer the case to a specialized agency."
  },
  {
    question: "What is the limitation for filing an appeal in the High Court?",
    answer: "For civil appeals (Regular Second Appeal), the limitation is **90 days** from the date of the lower appellate court's decree. For criminal appeals against conviction, it is **60 days**. It is vital to file within this period to avoid dismissal on grounds of delay."
  },
  {
    question: "Do you assist with consumer court cases in Punjab?",
    answer: "Yes, we handle consumer complaints against builders, insurance companies, and service providers in the District Consumer Commissions (e.g., in Mohali, Amritsar) and the State Consumer Commission in Chandigarh."
  },
  {
    question: "How do I enforce a foreign court judgment in Punjab?",
    answer: "A foreign judgment (e.g., a divorce decree or money decree from UK/Canada/USA) can be enforced in Punjab if it meets the criteria of Section 13 CPC. If it is from a 'reciprocating territory', it can be executed directly; otherwise, a fresh civil suit needs to be filed on the basis of the judgment."
  },
  {
    question: "What are the rights of NRIs regarding agricultural land in Punjab?",
    answer: "NRIs can inherit agricultural land but cannot purchase it without RBI permission (though they can purchase residential/commercial property). Disputes often arise regarding cultivation rights and lease (Theka). We assist NRIs in protecting their possession and recovering rent from cultivators."
  },
  {
    question: "Do you handle service matters for Punjab government employees?",
    answer: "Yes, we represent government employees in the High Court in Writ Petitions regarding service regularization, pay scale anomalies, seniority disputes, and wrongful termination. The High Court is the primary forum for challenging state government service orders."
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
      "name": "Punjab",
      "item": "https://amalegalsolutions.com/services/litigation/punjab"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Punjab: High Court Lawyers in Chandigarh",
  "description": "Expert litigation services in Punjab. Representing clients in Punjab & Haryana High Court, District Courts in Ludhiana, Jalandhar, Amritsar. Specializing in NRI legal services.",
  "image": "https://amalegalsolutions.com/services/litigation-punjab.png", // Placeholder
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
  "name": "Litigation Services Punjab",
  "image": "https://amalegalsolutions.com/services/litigation-punjab.png",
  "description": "Top-tier litigation services for Punjab & Haryana High Court and District Courts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "480"
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
        "name": "Gurpreet Singh"
      },
      "reviewBody": "I am an NRI living in Canada. AMA Legal Solutions helped me recover my ancestral land in Jalandhar from illegal occupants. Their team in Chandigarh is very efficient."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewBody": "They handled our company's cheque bounce cases in Ludhiana with great professionalism. We recovered our dues quickly."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Punjab | Punjab & Haryana High Court Lawyers",
  description:
    "Expert litigation lawyers in Punjab. We represent clients in Punjab & Haryana High Court (Chandigarh) and District Courts (Ludhiana, Amritsar). NRI Property, Criminal, Civil & Matrimonial cases.",
  keywords: [
    "litigation services punjab",
    "punjab and haryana high court lawyer",
    "nri lawyer punjab",
    "civil lawyer ludhiana",
    "criminal lawyer amritsar",
    "property dispute lawyer punjab",
    "divorce lawyer chandigarh",
    "ndps lawyer punjab",
    "cheque bounce lawyer jalandhar",
    "writ petition punjab high court"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation/punjab',
  },
  openGraph: {
    title: "Litigation Services in Punjab | Punjab & Haryana High Court Lawyers",
    description: "Expert litigation services in Punjab. Representing clients in Punjab & Haryana High Court and District Courts.",
    url: "https://amalegalsolutions.com/services/litigation/punjab",
    type: "website",
    images: [
      {
        url: "/services/litigation-punjab.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Punjab",
      },
    ],
  },
};

export default function PunjabLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "high-court", title: "Punjab & Haryana High Court" },
    { id: "district-courts", title: "District Courts" },
    { id: "nri-services", title: "NRI Legal Services" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "punjab-laws", title: "Punjab Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Punjab", href: "/services/litigation/punjab" },
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
              Premier <span className="text-[#D2A02A]">Litigation Services</span> in Punjab
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation at the Punjab & Haryana High Court and District Courts. Specializing in NRI Property Disputes, Criminal Defense, and Commercial Litigation.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Chandigarh Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Excellence in the Land of Five Rivers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab, with its vibrant economy and global diaspora, presents a dynamic legal landscape. The <strong>Punjab and Haryana High Court</strong> in Chandigarh serves as the judicial nerve center, handling a vast array of cases from both states. Litigation in Punjab is often characterized by complex land disputes, NRI property issues, and a high volume of commercial and criminal matters in industrial hubs like Ludhiana and Jalandhar.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For the large NRI community, managing legal affairs back home can be daunting. Issues of illegal possession, fraudulent wills, and tenant disputes are rampant. On the domestic front, the agricultural and industrial sectors drive significant civil and corporate litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we offer a bridge between global clients and local justice. Our team of seasoned advocates in Chandigarh and key districts provides robust representation, ensuring that distance does not become a barrier to justice.
                  </p>
                </section>

                {/* High Court */}
                <section id="high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at Punjab & Haryana High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Located in the architectural marvel of Chandigarh, the High Court is the guardian of rights for the region.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Criminal Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court is the primary forum for seeking relief in criminal matters.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Bail:</strong> Regular and Anticipatory Bail applications (especially in NDPS and 498A cases).</li>
                        <li><strong>Quashing:</strong> Quashing of FIRs under Section 482 CrPC based on compromise or merit.</li>
                        <li><strong>Protection:</strong> Runaway couple protection petitions.</li>
                        <li><strong>Appeals:</strong> Criminal Appeals against conviction.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">Civil & Writ Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        Handling constitutional and civil disputes.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Writ Petitions (Civil):</strong> Challenging government actions, tenders, and service matters.</li>
                        <li><strong>Regular Second Appeals (RSA):</strong> Appeals in property and civil suits.</li>
                        <li><strong>Rent Revisions:</strong> Disputes under the Rent Restriction Act.</li>
                        <li><strong>Family Matters:</strong> Appeals in divorce and custody cases.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* District Courts */}
                <section id="district-courts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">District Courts & Tribunals</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have a dedicated team for trial court litigation across Punjab.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Ludhiana District Court</h3>
                      <p className="text-gray-700 mb-3">
                        The industrial hub's court handles heavy commercial litigation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Cheque bounce (NI Act) cases.</li>
                        <li>Industrial disputes.</li>
                        <li>Commercial contracts.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Jalandhar District Court</h3>
                      <p className="text-gray-700 mb-3">
                        A center for NRI litigation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>NRI property disputes.</li>
                        <li>Matrimonial cases.</li>
                        <li>Land revenue appeals.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Amritsar District Court</h3>
                      <p className="text-gray-700 mb-3">
                        Handling diverse civil and criminal matters.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Customs and NDPS cases.</li>
                        <li>Hotel and tourism disputes.</li>
                        <li>Family disputes.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mohali (SAS Nagar)</h3>
                      <p className="text-gray-700 mb-3">
                        Emerging IT and real estate hub.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Consumer court cases.</li>
                        <li>Real estate disputes.</li>
                        <li>Cyber crime.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* NRI Services */}
                <section id="nri-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized NRI Legal Services</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab has a massive diaspora, and we specialize in protecting their interests back home.
                  </p>
                  
                  <div className="bg-[#fff9e6] p-8 rounded-2xl border border-[#D2A02A]">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Comprehensive Support for NRIs</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Property Management:</strong> Eviction of illegal tenants and handling 'Theka' (lease) disputes.</li>
                        <li><strong>Title Search:</strong> Verifying land records to prevent fraudulent sales.</li>
                        <li><strong>Power of Attorney:</strong> Drafting and registering PoAs.</li>
                        <li><strong>Matrimonial:</strong> Handling abandoned bride cases and foreign divorce decrees.</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Illegal Possession:</strong> Filing suits for possession and criminal complaints for trespassing.</li>
                        <li><strong>Succession:</strong> Obtaining Legal Heir Certificates and mutation of inheritance.</li>
                        <li><strong>Investments:</strong> Legal advice on buying property in Punjab.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Punjab</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers the critical legal needs of the state.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Aggressive defense in serious criminal charges.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>NDPS Act:</strong> Specialized defense in drug-related cases.</li>
                        <li><strong>White Collar:</strong> Cheating, fraud, and embezzlement.</li>
                        <li><strong>Violent Crimes:</strong> Murder, attempt to murder, and assault cases.</li>
                        <li><strong>Cyber Crime:</strong> Online fraud and harassment.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Property & Land Laws</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Resolving complex land disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Partition:</strong> Suits for partition of ancestral agricultural land.</li>
                        <li><strong>Specific Performance:</strong> Enforcing agreements to sell.</li>
                        <li><strong>Revenue Appeals:</strong> Challenging mutation and partition orders.</li>
                        <li><strong>Rent Disputes:</strong> Eviction petitions under Rent Act.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Family & Matrimonial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sensitive handling of family issues.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> NRI divorce, mutual consent, and contested.</li>
                        <li><strong>498A Defense:</strong> Protecting families from false dowry cases.</li>
                        <li><strong>Custody:</strong> International and domestic child custody battles.</li>
                        <li><strong>Maintenance:</strong> Alimony claims.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Commercial & Corporate</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Supporting Punjab's industries.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Cheque Bounce:</strong> High volume litigation in Ludhiana/Jalandhar.</li>
                        <li><strong>Recovery:</strong> Money recovery suits.</li>
                        <li><strong>Arbitration:</strong> Commercial dispute resolution.</li>
                        <li><strong>Consumer:</strong> Defending businesses in consumer courts.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Punjab Laws */}
                <section id="punjab-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Punjab Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have deep knowledge of the local statutes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Punjab Security of Land Tenures Act, 1953</h4>
                      <p className="text-sm text-gray-600">
                        Governs the relationship between landowners and tenants in agricultural land. Crucial for disputes regarding 'Theka'.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">East Punjab Urban Rent Restriction Act, 1949</h4>
                      <p className="text-sm text-gray-600">
                        Governs urban tenancy. Provides specific grounds for eviction, including the special right of NRIs to recover immediate possession.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Punjab Village Common Lands (Regulation) Act, 1961</h4>
                      <p className="text-sm text-gray-600">
                        Deals with 'Shamlat Deh' (village common land). Disputes often arise regarding encroachment and ownership.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Punjab Prevention of Human Smuggling Act, 2012</h4>
                      <p className="text-sm text-gray-600">
                        Regulates travel agents to prevent illegal immigration and fraud. Relevant for cases against fraudulent agents.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Punjab Apartment and Property Regulation Act, 1995 (PAPRA)</h4>
                      <p className="text-sm text-gray-600">
                        Regulates real estate developers and colonies. Used in disputes regarding illegal colonies and plot sales.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Our Approach</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We guide you through the legal maze with a structured approach.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Consultation & Strategy</h3>
                      <p className="text-gray-700">
                        We analyze your case facts. For NRIs, we offer video consultations to understand the issue without travel.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Documentation</h3>
                      <p className="text-gray-700">
                        Collecting revenue records (Jamabandis), police reports, and other evidence. Drafting strong pleadings.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Filing & Interim Relief</h3>
                      <p className="text-gray-700">
                        Filing in the appropriate court (High Court or District Court). Seeking stay orders or bail immediately.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Trial/Arguments</h3>
                      <p className="text-gray-700">
                        Rigorous cross-examination in trial courts and persuasive arguments in the High Court.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Execution</h3>
                      <p className="text-gray-700">
                        Ensuring the court order is implemented, whether it's recovering money or taking possession of land.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Your trusted legal partners in Punjab.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">✈️</div>
                      <h3 className="font-bold text-xl mb-2">NRI Specialists</h3>
                      <p className="text-gray-600">Dedicated team for handling legal issues of the Punjabi diaspora.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Experts</h3>
                      <p className="text-gray-600">Regular practice at the Punjab & Haryana High Court in Chandigarh.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Criminal Defense</h3>
                      <p className="text-gray-600">Proven track record in NDPS, bail, and white-collar crime defense.</p>
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
                        "Living in the UK, I was worried about my land in Jalandhar being grabbed. AMA Legal Solutions filed a suit and got a stay order within days. They managed everything without me having to travel."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">H</div>
                        <div>
                          <p className="font-bold text-gray-900">Harpreet Sandhu</p>
                          <p className="text-sm text-gray-500">NRI, UK</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My brother was falsely implicated in a drug case. The team fought hard in the High Court and secured his bail by pointing out procedural lapses. We are forever grateful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Manjit Kaur</p>
                          <p className="text-sm text-gray-500">Homemaker, Amritsar</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Punjab fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Punjab Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Punjab & Haryana High Court and District Courts.
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
