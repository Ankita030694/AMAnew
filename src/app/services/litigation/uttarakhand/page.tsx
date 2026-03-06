import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the High Court of Uttarakhand located?",
    answer: "The **High Court of Uttarakhand** is located in **Nainital**. It was established on November 9, 2000, when the state was carved out of Uttar Pradesh. The High Court has jurisdiction over the entire state of Uttarakhand. It is known for its proactive stance on environmental issues and public interest litigations."
  },
  {
    question: "What are the restrictions on buying land in Uttarakhand?",
    answer: "Uttarakhand has strict land laws to protect its hill resources. Under the **Uttarakhand (Uttar Pradesh Zamindari Abolition and Land Reforms Act, 1950) Adaptation and Modification Order, 2001**, non-residents can purchase only a limited area of land (currently 250 sq. meters) for residential purposes without permission. For larger plots or agricultural land, specific government permission is required. We assist clients in navigating these regulations for legal property acquisition."
  },
  {
    question: "Do you handle environmental cases in the NGT?",
    answer: "Yes, given Uttarakhand's ecological sensitivity, environmental litigation is significant. We represent clients in the **National Green Tribunal (NGT)** regarding matters of deforestation, pollution, illegal mining, and construction in eco-sensitive zones. We also handle Writ Petitions in the High Court concerning environmental protection."
  },
  {
    question: "How do I file a PIL in the Uttarakhand High Court?",
    answer: "A **Public Interest Litigation (PIL)** can be filed in the High Court under Article 226 of the Constitution. The Uttarakhand High Court has been a pioneer in declaring rivers like Ganga and Yamuna as 'living entities' (though stayed by SC) and passing orders on forest fires and wildlife protection. We assist NGOs and activists in drafting and arguing PILs for public causes."
  },
  {
    question: "What is the procedure for divorce in Uttarakhand?",
    answer: "Divorce petitions are filed in the **Family Court** of the relevant district (e.g., Dehradun, Haridwar, Nainital). If no Family Court exists in a hill district, the matter is heard by the District Judge. We handle mutual consent divorce, contested divorce, and related matters of child custody and alimony, understanding the unique social fabric of the region."
  },
  {
    question: "Can I challenge a government tender in the High Court?",
    answer: "Yes, government tenders for infrastructure projects (roads, hydel power, tourism) can be challenged in the High Court if there is arbitrariness, favoritism, or violation of tender conditions. We file Writ Petitions to challenge illegal tender awards and protect the rights of bidders."
  },
  {
    question: "Do you handle criminal cases in Haridwar and Dehradun?",
    answer: "Yes, we handle criminal defense in the District and Sessions Courts of Haridwar, Dehradun, Udham Singh Nagar, and other districts. This includes bail applications, trial defense in IPC offenses, and cases under special acts like the NDPS Act (common in some regions) and Excise Act."
  },
  {
    question: "What is the role of the Revenue Courts in Uttarakhand?",
    answer: "Revenue Courts (Tehsildar, SDM, Commissioner) handle disputes related to agricultural land, mutation, and boundary demarcation. In the hill districts, the revenue police system (Patwari) still exists in some areas, though regular police jurisdiction is expanding. We handle revenue appeals and revisions."
  },
  {
    question: "How do I enforce an arbitration award in Uttarakhand?",
    answer: "An arbitration award can be enforced by filing an execution petition in the Commercial Court or the Principal Civil Court of original jurisdiction (District Judge). We assist in enforcing awards against private parties and government departments (PWD, Irrigation Dept, etc.)."
  },
  {
    question: "What are the laws regarding homestays and tourism in Uttarakhand?",
    answer: "The **Uttarakhand Tourism Policy** governs the registration and operation of homestays and hotels. Disputes often arise regarding registration, subsidies, and compliance with pollution norms. We advise hotel owners and homestay operators on regulatory compliance and represent them in disputes."
  },
  {
    question: "Can I get bail in an NDPS case in Uttarakhand?",
    answer: "The **Narcotic Drugs and Psychotropic Substances (NDPS) Act** is stringently enforced. Bail is difficult, especially for commercial quantities, due to Section 37 restrictions. We have specialized experience in arguing NDPS bail matters in the Special Courts and the High Court, focusing on procedural lapses by the investigating agency."
  },
  {
    question: "Do you handle service matters for government employees?",
    answer: "Yes, a large section of the population is employed in government services. We handle service matters before the **Uttarakhand Public Services Tribunal** and Writ Petitions in the High Court regarding promotion, transfer, pension, and disciplinary proceedings."
  },
  {
    question: "What is the limitation for filing a Writ Petition?",
    answer: "While there is no strict statutory limitation for filing a Writ Petition under Article 226, it must be filed without 'laches' or undue delay. Courts may refuse to entertain petitions filed years after the cause of action arose. It is advisable to approach the court as soon as your rights are violated."
  },
  {
    question: "How do I resolve a dispute with a builder in Dehradun?",
    answer: "Disputes regarding delay in possession or poor quality of construction can be taken to the **Real Estate Regulatory Authority (RERA)** in Dehradun or the Consumer Disputes Redressal Commission. We assist homebuyers in filing complaints and executing orders against defaulting builders."
  },
  {
    question: "Do you assist with Char Dham Yatra related legal issues?",
    answer: "Yes, we handle matters related to travel regulations, helicopter service contracts, and hotel bookings that often arise during the Char Dham Yatra. We also represent tour operators in disputes with the tourism department."
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
      "name": "Uttarakhand",
      "item": "https://www.amalegalsolutions.com/services/litigation/uttarakhand"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Uttarakhand: Nainital High Court Lawyers",
  "description": "Expert litigation services in Uttarakhand. Representing clients in Nainital High Court, NGT, and District Courts in Dehradun, Haridwar, and Haldwani.",
  "image": "https://www.amalegalsolutions.com/services/litigation-uttarakhand.png", // Placeholder
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
  "name": "Litigation Services Uttarakhand",
  "image": "https://www.amalegalsolutions.com/services/litigation-uttarakhand.png",
  "description": "Top-tier litigation services for Nainital High Court and District Courts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "350"
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
        "name": "Rahul Rawat"
      },
      "reviewBody": "AMA Legal Solutions helped us with a complex land permission issue in Nainital. Their knowledge of local land laws is impressive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Sharma"
      },
      "reviewBody": "We engaged them for a commercial dispute in Dehradun. They were very professional and handled the arbitration proceedings effectively."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Uttarakhand | Nainital High Court Lawyers",
  description:
    "Expert litigation lawyers in Uttarakhand. We represent clients in Nainital High Court, NGT, and District Courts (Dehradun, Haridwar). Civil, Criminal, Land & Environmental cases.",
  keywords: [
    "litigation services uttarakhand",
    "nainital high court lawyer",
    "civil lawyer dehradun",
    "criminal lawyer haridwar",
    "land laws uttarakhand",
    "environmental lawyer nainital",
    "ngt lawyer uttarakhand",
    "divorce lawyer dehradun",
    "service matter lawyer nainital",
    "rera lawyer dehradun"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation/uttarakhand',
  },
  openGraph: {
    title: "Litigation Services in Uttarakhand | Nainital High Court Lawyers",
    description: "Expert litigation services in Uttarakhand. Representing clients in Nainital High Court and District Courts.",
    url: "https://www.amalegalsolutions.com/services/litigation/uttarakhand",
    type: "website",
    images: [
      {
        url: "/services/litigation-uttarakhand.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Uttarakhand",
      },
    ],
  },
};

export default function UttarakhandLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "nainital-high-court", title: "High Court Practice" },
    { id: "district-courts", title: "District Courts & Tribunals" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "uttarakhand-laws", title: "Uttarakhand Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Uttarakhand", href: "/services/litigation/uttarakhand" },
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
              Trusted <span className="text-[#D2A02A]">Litigation Services</span> in Uttarakhand
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation at the Nainital High Court and District Courts. Specializing in Land Laws, Environmental Litigation, and Civil Disputes in the Devbhoomi.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Nainital Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Solutions for the Hill State</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttarakhand, known as Devbhoomi, presents a unique legal environment characterized by its distinct geography and ecology. The <strong>High Court of Uttarakhand at Nainital</strong> is the apex judicial body, known for its landmark judgments on environmental protection and human rights. Litigation here often involves complex issues related to land tenure in hill areas, forest conservation, and tourism regulations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From the plains of Haridwar and Udham Singh Nagar to the remote hill districts, the legal needs are diverse. Rapid urbanization in Dehradun has led to a surge in real estate disputes, while the industrial hubs face commercial litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand the pulse of the region. Our team of advocates provides comprehensive legal services, bridging the gap between local district courts and the High Court. We are committed to protecting the rights of individuals and businesses while respecting the ecological sanctity of the state.
                  </p>
                </section>

                {/* Nainital High Court */}
                <section id="nainital-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the High Court of Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Located in the picturesque town of Nainital, the High Court exercises jurisdiction over the entire state.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Writ Jurisdiction (Article 226)</h3>
                      <p className="text-gray-700 mb-4">
                        A significant part of the High Court's work involves Writ Petitions.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Service Matters:</strong> Disputes regarding government employment, transfers, and pensions.</li>
                        <li><strong>PILs:</strong> Public Interest Litigations concerning environment, illegal construction, and civic amenities.</li>
                        <li><strong>Quashing:</strong> Quashing of FIRs in criminal matters.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">Appellate Jurisdiction</h3>
                      <p className="text-gray-700 mb-4">
                        The High Court hears appeals from subordinate courts.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>First Appeals:</strong> Against decrees of District Judges in civil suits.</li>
                        <li><strong>Criminal Appeals:</strong> Against conviction orders in serious offenses.</li>
                        <li><strong>Family Court Appeals:</strong> Matters of divorce and custody.</li>
                        <li><strong>MACT Appeals:</strong> Motor Accident Claim enhancements.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* District Courts */}
                <section id="district-courts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">District Courts & Tribunals</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have a strong presence in key districts to handle trial court litigation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Dehradun District Court</h3>
                      <p className="text-gray-700 mb-3">
                        The capital's court handles a high volume of civil and criminal cases.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Property disputes and RERA matters.</li>
                        <li>Cheque bounce cases.</li>
                        <li>Family disputes.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Haridwar District Court</h3>
                      <p className="text-gray-700 mb-3">
                        Serving the industrial and pilgrimage hub.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Industrial disputes.</li>
                        <li>Criminal defense.</li>
                        <li>Religious trust disputes.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Udham Singh Nagar (Rudrapur)</h3>
                      <p className="text-gray-700 mb-3">
                        Key for the SIDCUL industrial belt.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Commercial contracts.</li>
                        <li>Labour laws.</li>
                        <li>Land acquisition.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Public Services Tribunal</h3>
                      <p className="text-gray-700 mb-3">
                        Located in Dehradun and Nainital.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Adjudicates service disputes of state government employees.</li>
                        <li>Disciplinary actions and seniority lists.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise is tailored to the specific legal needs of the state.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Land & Property Laws</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Navigating the restrictive land laws of the hill state.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Buying Permission:</strong> Assisting in obtaining permission for land purchase by non-residents.</li>
                        <li><strong>Revenue Disputes:</strong> Mutation and boundary disputes in Revenue Courts.</li>
                        <li><strong>Benami Transactions:</strong> Defense in cases alleging violation of land ceiling laws.</li>
                        <li><strong>Lease Disputes:</strong> Government lease renewals and cancellations.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Environmental Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting business interests while ensuring compliance.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>NGT Matters:</strong> Representation in National Green Tribunal cases.</li>
                        <li><strong>Pollution Control:</strong> Compliance with UEPPCB norms.</li>
                        <li><strong>Forest Clearance:</strong> Issues related to Forest Conservation Act.</li>
                        <li><strong>Mining:</strong> Legal support for stone crusher and mining lease holders.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Civil & Commercial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Resolving business and personal disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Arbitration:</strong> Enforcement of awards against government bodies.</li>
                        <li><strong>Tenders:</strong> Challenging illegal tender processes in High Court.</li>
                        <li><strong>Recovery:</strong> Money recovery suits and execution.</li>
                        <li><strong>Tourism:</strong> Disputes related to hotels and travel agencies.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your liberty.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Bail:</strong> Anticipatory and Regular Bail.</li>
                        <li><strong>NDPS:</strong> Specialized defense in narcotics cases.</li>
                        <li><strong>White Collar:</strong> Fraud and cheating cases.</li>
                        <li><strong>Cyber Crime:</strong> Defense in online fraud cases.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Uttarakhand Laws */}
                <section id="uttarakhand-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Uttarakhand Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have deep knowledge of the local statutes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Uttarakhand (UP ZA & LR Act) Adaptation Order, 2001</h4>
                      <p className="text-sm text-gray-600">
                        The primary land law. Section 154 imposes restrictions on land purchase by non-residents to protect hill land.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Uttarakhand Tourism Policy</h4>
                      <p className="text-sm text-gray-600">
                        Governs the registration of hotels, homestays, and adventure sports. Crucial for the hospitality sector.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Uttarakhand Police Act, 2007</h4>
                      <p className="text-sm text-gray-600">
                        Governs police administration. Relevant for complaints against police inaction or harassment.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Uttarakhand River Valley (Development and Management) Act, 2005</h4>
                      <p className="text-sm text-gray-600">
                        Regulates construction and mining activities in river valleys to prevent disasters.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Uttarakhand Public Services (Tribunal) Act, 1976</h4>
                      <p className="text-sm text-gray-600">
                        Establishes the tribunal for adjudicating service disputes of public servants.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Consultation & Fact Finding</h3>
                      <p className="text-gray-700">
                        We understand your case, whether it's a land dispute in a remote village or a corporate issue in Dehradun.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Jurisdiction Check</h3>
                      <p className="text-gray-700">
                        Determining whether to file in the Revenue Court, Civil Court, or directly in the High Court.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Drafting & Filing</h3>
                      <p className="text-gray-700">
                        Professional drafting of pleadings to ensure all legal grounds are covered.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Representation</h3>
                      <p className="text-gray-700">
                        Strong advocacy in court hearings to protect your interests.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Resolution</h3>
                      <p className="text-gray-700">
                        Aiming for a favorable judgment or a negotiated settlement, followed by execution.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Your trusted legal partners in Uttarakhand.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⛰️</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">Deep understanding of hill laws, land regulations, and local culture.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Practice</h3>
                      <p className="text-gray-600">Regular appearance before the Nainital High Court in diverse matters.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌿</div>
                      <h3 className="font-bold text-xl mb-2">Environmental Focus</h3>
                      <p className="text-gray-600">Specialized knowledge in environmental litigation and NGT matters.</p>
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
                        "I wanted to buy land for a cottage in Mukteshwar but was confused by the laws. AMA Legal Solutions guided me through the permission process and ensured a clean title. Very helpful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Siddharth Malhotra</p>
                          <p className="text-sm text-gray-500">Investor, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our hotel in Mussoorie faced a closure notice from the Pollution Board. The team filed a Writ Petition and got us interim relief, allowing us to operate while we upgraded our STP."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikrant Singh</p>
                          <p className="text-sm text-gray-500">Hotelier, Mussoorie</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Uttarakhand fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Uttarakhand Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Nainital High Court and District Courts.
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
