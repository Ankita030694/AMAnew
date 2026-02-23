import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the High Court of Uttar Pradesh located?",
    answer: "The **High Court of Judicature at Allahabad** is the primary High Court for Uttar Pradesh, located in Prayagraj (formerly Allahabad). It also has a permanent **Circuit Bench at Lucknow**, which has jurisdiction over 12 districts including Lucknow, Faizabad, and Ayodhya. The jurisdiction is divided territorially between the Principal Seat at Allahabad and the Lucknow Bench."
  },
  {
    question: "Does the Allahabad High Court have Original Civil Jurisdiction?",
    answer: "Unlike the High Courts in Kolkata, Mumbai, or Chennai, the Allahabad High Court generally **does not** exercise Ordinary Original Civil Jurisdiction. Civil suits are filed in the respective District Courts (Civil Judge Junior/Senior Division or District Judge). The High Court primarily exercises Appellate Jurisdiction (First and Second Appeals) and Writ Jurisdiction under Article 226 of the Constitution."
  },
  {
    question: "How does the new UP Tenancy Act affect landlords?",
    answer: "The **Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021** has brought significant changes, replacing the old 1972 Act. It mandates a written agreement for all new tenancies and requires intimation to the Rent Authority. It provides for a faster eviction process through Rent Tribunals and caps the security deposit. This is a major shift from the pro-tenant stance of the older legislation."
  },
  {
    question: "Do you handle bail matters under the UP Gangsters Act?",
    answer: "Yes, the **UP Gangsters and Anti-Social Activities (Prevention) Act, 1986** is a stringent law often invoked by the state police. Securing bail under this Act requires demonstrating that the accused is not guilty of the offense and is not likely to commit any offense while on bail. We have extensive experience in arguing bail applications under this special statute before the Sessions Courts and the High Court."
  },
  {
    question: "What is the procedure for land acquisition disputes in UP?",
    answer: "Land acquisition for infrastructure projects (like Expressways and Airports) often leads to disputes regarding compensation. We represent landowners in seeking enhanced compensation under the **Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013**. These matters are often taken up in the District Courts (LARR Authority) and appealed in the High Court."
  },
  {
    question: "Can I file a Writ Petition against the Noida/Greater Noida Authority?",
    answer: "Yes, the **Noida, Greater Noida, and Yamuna Expressway Authorities** are statutory bodies. If they act arbitrarily—such as cancelling lease deeds, imposing exorbitant penalties, or delaying possession—you can file a Writ Petition in the Allahabad High Court. We frequently represent homebuyers and developers in such administrative law matters."
  },
  {
    question: "How do I file a divorce case in Uttar Pradesh?",
    answer: "Divorce petitions are filed in the **Family Court** of the district where the marriage was solemnized, or where the respondent resides, or where the couple last resided together. In districts without a Family Court, it is filed in the Court of the Principal Judge. We handle mutual consent divorce, contested divorce, and related matters of custody and maintenance."
  },
  {
    question: "What is the role of the UP RERA Tribunal?",
    answer: "The **UP Real Estate Regulatory Authority (UP RERA)** and its Appellate Tribunal (REAT) in Lucknow handle disputes between homebuyers and developers. This includes delays in possession, refund of money, and structural defects. We assist clients in filing complaints and executing RERA orders, which is crucial given the large real estate markets in Noida and Ghaziabad."
  },
  {
    question: "Do you handle Cheque Bounce cases in Ghaziabad and Noida?",
    answer: "Yes, we handle cases under Section 138 of the Negotiable Instruments Act in the District Courts of Ghaziabad and Gautam Buddha Nagar (Noida). Given the high volume of commercial transactions in these industrial hubs, cheque bounce litigation is common. We assist in the entire process from legal notice to trial."
  },
  {
    question: "What is the limitation for filing a First Appeal in the High Court?",
    answer: "A First Appeal against a decree of a District Court must be filed in the Allahabad High Court within **90 days** from the date of the decree and judgment. For appeals against orders, the period is typically shorter. Delay can be condoned only on sufficient grounds, so timely filing is essential."
  },
  {
    question: "How can I quash an FIR in UP?",
    answer: "You can file a petition under **Section 482 of the CrPC** in the Allahabad High Court (or Lucknow Bench) to quash an FIR. Grounds for quashing include compromise in matrimonial/civil disputes, lack of evidence, or abuse of process of law. The High Court has inherent powers to prevent the harassment of innocent citizens."
  },
  {
    question: "What are the laws regarding agricultural land in UP?",
    answer: "The **UP Revenue Code, 2006** (which replaced the UP Zamindari Abolition and Land Reforms Act) governs agricultural land tenure, transfer, and partition. Disputes regarding title, mutation, and boundary of agricultural land are adjudicated by Revenue Courts (Tehsildar, SDM, Commissioner) and not regular civil courts. We specialize in revenue litigation."
  },
  {
    question: "Do you assist with NCLT matters in Allahabad?",
    answer: "Yes, the **National Company Law Tribunal (NCLT)** has a bench in Allahabad (Prayagraj). It has jurisdiction over companies registered in Uttar Pradesh and Uttarakhand. We handle insolvency proceedings (IBC), company mergers, and restoration of struck-off companies before the NCLT Allahabad Bench."
  },
  {
    question: "What is the procedure for anticipatory bail in UP?",
    answer: "Anticipatory Bail was reintroduced in Uttar Pradesh in 2019 (after being abolished during the Emergency). Applications can be filed before the Sessions Court or the High Court. Given the political and social dynamics in UP, false FIRs are not uncommon, making anticipatory bail a critical remedy we actively pursue for our clients."
  },
  {
    question: "How do I resolve a dispute over a Will in UP?",
    answer: "Disputes over Wills (Testamentary matters) are handled by the District Judge. If a Will is contested, the probate/letter of administration proceeding converts into a regular civil suit. We assist in proving the genuineness of Wills and defending against challenges based on coercion or lack of capacity."
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
      "name": "Uttar Pradesh",
      "item": "https://amalegalsolutions.com/services/litigation/uttar-pradesh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in Uttar Pradesh: Allahabad High Court & Lucknow Bench",
  "description": "Expert litigation services in Uttar Pradesh. Representing clients in Allahabad High Court, Lucknow Bench, NCLT, and District Courts in Noida, Ghaziabad, Kanpur, and Lucknow.",
  "image": "https://amalegalsolutions.com/services/litigation-uttar-pradesh.png", // Placeholder
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
  "name": "Litigation Services Uttar Pradesh",
  "image": "https://amalegalsolutions.com/services/litigation-uttar-pradesh.png",
  "description": "Top-tier litigation services for Allahabad High Court and UP District Courts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "510"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "AMA Legal Solutions helped me quash a false FIR in the Allahabad High Court. Their team is very knowledgeable about criminal law in UP."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Gupta"
      },
      "reviewBody": "We engaged them for a property dispute in Noida. Their understanding of RERA and authority matters is excellent. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Litigation Services in Uttar Pradesh | Allahabad High Court Lawyers",
  description:
    "Expert litigation lawyers in Uttar Pradesh. We represent clients in Allahabad High Court, Lucknow Bench, NCLT, and District Courts (Noida, Ghaziabad, Kanpur). Civil, Criminal & Corporate cases.",
  keywords: [
    "litigation services uttar pradesh",
    "allahabad high court lawyer",
    "lucknow bench lawyer",
    "civil lawyer noida",
    "criminal lawyer ghaziabad",
    "property dispute lawyer up",
    "nclt allahabad lawyer",
    "rera lawyer lucknow",
    "bail lawyer allahabad",
    "up revenue code lawyer"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation/uttar-pradesh',
  },
  openGraph: {
    title: "Litigation Services in Uttar Pradesh | Allahabad High Court Lawyers",
    description: "Expert litigation services in Uttar Pradesh. Representing clients in Allahabad High Court, Lucknow Bench, and District Courts.",
    url: "https://amalegalsolutions.com/services/litigation/uttar-pradesh",
    type: "website",
    images: [
      {
        url: "/services/litigation-uttar-pradesh.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services Uttar Pradesh",
      },
    ],
  },
};

export default function UttarPradeshLitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "allahabad-high-court", title: "High Court Practice" },
    { id: "district-courts", title: "District Courts & Tribunals" },
    { id: "key-practice-areas", title: "Key Practice Areas" },
    { id: "up-laws", title: "UP Specific Laws" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-success", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
    { label: "Uttar Pradesh", href: "/services/litigation/uttar-pradesh" },
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
              Expert <span className="text-[#D2A02A]">Litigation Services</span> in Uttar Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Strategic legal representation at the Allahabad High Court, Lucknow Bench, and District Courts across UP. Protecting your interests in Civil, Criminal, and Corporate disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a UP Lawyer
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Excellence in the Heartland of India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh, the most populous state in India, presents a vast and complex legal landscape. The <strong>High Court of Judicature at Allahabad</strong> is one of the oldest and largest High Courts in Asia, handling a massive volume of litigation. With a permanent bench in <strong>Lucknow</strong>, the judicial system covers a diverse range of issues from agrarian land disputes to modern corporate litigation in hubs like Noida and Ghaziabad.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Litigation in UP requires not just legal knowledge but a deep understanding of local procedural nuances, revenue laws, and the administrative machinery. Whether it's a property dispute in Varanasi, a commercial suit in Noida, or a writ petition in Prayagraj, the stakes are often high.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we provide robust legal representation across Uttar Pradesh. Our team comprises seasoned advocates who practice regularly before the Allahabad High Court, Lucknow Bench, NCLT, and District Courts. We are committed to delivering swift and effective justice to our clients.
                  </p>
                </section>

                {/* Allahabad High Court */}
                <section id="allahabad-high-court" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice at the Allahabad High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The High Court is the apex judicial body in the state. Its jurisdiction is bifurcated between the Principal Seat and the Lucknow Bench.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Principal Seat at Allahabad (Prayagraj)</h3>
                      <p className="text-gray-700 mb-4">
                        The Principal Seat has jurisdiction over the majority of districts in UP. It handles:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Writ Jurisdiction:</strong> Petitions under Article 226 against state actions.</li>
                        <li><strong>Criminal Appeals:</strong> Appeals against convictions by Sessions Courts.</li>
                        <li><strong>Civil Appeals:</strong> First and Second Appeals from District Courts.</li>
                        <li><strong>Company Matters:</strong> Jurisdiction over company schemes (though NCLT handles most now).</li>
                        <li><strong>Tax Matters:</strong> Appeals from Commercial Tax Tribunals.</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">Lucknow Bench</h3>
                      <p className="text-gray-700 mb-4">
                        The Lucknow Bench has jurisdiction over 12 districts: Lucknow, Unnao, Rae Bareli, Sitapur, Hardoi, Faizabad (Ayodhya), Ambedkar Nagar, Sultanpur, Barabanki, Gonda, Bahraich, and Shravasti.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>It exercises the same powers as the Principal Seat within its territorial jurisdiction.</li>
                        <li>Crucial for matters involving the State Government secretariat located in Lucknow.</li>
                        <li>Handles significant Service Law matters for government employees.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* District Courts */}
                <section id="district-courts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">District Courts & Tribunals</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have a strong network of lawyers across key districts to handle trial court litigation effectively.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Gautam Buddha Nagar (Noida)</h3>
                      <p className="text-gray-700 mb-3">
                        A hub for real estate and corporate litigation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>RERA disputes and execution.</li>
                        <li>Cheque bounce (NI Act) cases.</li>
                        <li>Commercial suits.</li>
                        <li>Consumer forum cases.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kanpur Nagar</h3>
                      <p className="text-gray-700 mb-3">
                        The industrial capital of UP.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Labour and Industrial disputes.</li>
                        <li>Civil suits for recovery and contracts.</li>
                        <li>Taxation matters.</li>
                        <li>Family court disputes.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">NCLT Allahabad</h3>
                      <p className="text-gray-700 mb-3">
                        The dedicated tribunal for company law.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Insolvency & Bankruptcy (IBC) cases.</li>
                        <li>Oppression and Mismanagement.</li>
                        <li>Mergers and Amalgamations.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Revenue Courts</h3>
                      <p className="text-gray-700 mb-3">
                        Handling agricultural land disputes.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Mutation proceedings (Tehsildar).</li>
                        <li>Partition of holdings (SDM).</li>
                        <li>Boundary disputes.</li>
                        <li>Appeals to Commissioner and Board of Revenue.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Practice Areas */}
                <section id="key-practice-areas" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Practice Areas in Uttar Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers the full spectrum of legal services required in UP.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Real Estate & Land Laws</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Navigating the complex terrain of UP's property laws.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>RERA:</strong> Representing homebuyers against builders in UP RERA and REAT.</li>
                        <li><strong>Authority Matters:</strong> Disputes with Noida, Greater Noida, and LDA authorities.</li>
                        <li><strong>Land Acquisition:</strong> Compensation claims for land acquired for highways/projects.</li>
                        <li><strong>Revenue Litigation:</strong> Agricultural land disputes under the UP Revenue Code.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Aggressive defense in criminal matters.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Bail:</strong> Regular and Anticipatory Bail in Sessions and High Court.</li>
                        <li><strong>UP Gangsters Act:</strong> Specialized defense against invocation of this stringent act.</li>
                        <li><strong>Quashing:</strong> FIR quashing petitions under Section 482 CrPC.</li>
                        <li><strong>Dowry Cases:</strong> Defense in 498A and Dowry Prohibition Act cases.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Corporate & Commercial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Supporting businesses in the state's industrial belts.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Insolvency:</strong> Representation in NCLT Allahabad.</li>
                        <li><strong>Arbitration:</strong> Commercial arbitration and Section 9/11 applications.</li>
                        <li><strong>Contracts:</strong> Recovery suits and breach of contract litigation.</li>
                        <li><strong>MSME:</strong> Recovery of dues through the MSME Samadhaan portal.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family & Matrimonial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sensitive handling of family disputes.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 mt-3 pl-5 list-disc text-gray-700">
                        <li><strong>Divorce:</strong> Contested and mutual consent divorce.</li>
                        <li><strong>Maintenance:</strong> Claims under Section 125 CrPC.</li>
                        <li><strong>Custody:</strong> Child custody battles.</li>
                        <li><strong>Domestic Violence:</strong> Protection orders under the DV Act.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* UP Specific Laws */}
                <section id="up-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in UP Specific Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We have mastered the state statutes that define the legal environment in Uttar Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">UP Revenue Code, 2006</h4>
                      <p className="text-sm text-gray-600">
                        The primary law for agricultural land. It governs tenure holders, land use conversion (Section 143), and partition. Essential for rural litigation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">UP Regulation of Urban Premises Tenancy Act, 2021</h4>
                      <p className="text-sm text-gray-600">
                        The new tenancy law that balances landlord-tenant rights, mandating rent agreements and establishing Rent Authorities.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">UP Gangsters & Anti-Social Activities (Prevention) Act, 1986</h4>
                      <p className="text-sm text-gray-600">
                        A special act used to curb organized crime. It has stringent bail provisions and allows for attachment of property.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">UP Industrial Area Development Act, 1976</h4>
                      <p className="text-sm text-gray-600">
                        Governs the development authorities like Noida and Greater Noida. Crucial for disputes regarding leasehold rights and building regulations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">UP Municipal Corporation Act, 1959</h4>
                      <p className="text-sm text-gray-600">
                        Governs municipal bodies in cities like Lucknow and Kanpur. Relevant for property tax and civic amenities disputes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Our Approach</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a systematic approach to ensure the best outcomes for our clients.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Case Analysis</h3>
                      <p className="text-gray-700">
                        We thoroughly review case files, FIRs, or property documents to understand the legal position and identify the correct forum.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Drafting & Filing</h3>
                      <p className="text-gray-700">
                        Precision drafting of Plaints, Writ Petitions, or Bail Applications. We ensure timely filing in the High Court or District Courts.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Representation</h3>
                      <p className="text-gray-700">
                        Effective advocacy during hearings. We present compelling arguments and case laws to persuade the bench.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Trial Management</h3>
                      <p className="text-gray-700">
                        For trial court matters, we manage the evidence stage, cross-examination, and arguments with meticulous attention to detail.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">5. Appeal & Revision</h3>
                      <p className="text-gray-700">
                        If required, we challenge adverse orders in higher courts through Appeals or Revisions to secure justice.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are your trusted partners in navigating the UP legal system.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Allahabad HC Veterans</h3>
                      <p className="text-gray-600">Deep experience in handling Writ Petitions and Appeals at the High Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏙️</div>
                      <h3 className="font-bold text-xl mb-2">NCR Presence</h3>
                      <p className="text-gray-600">Strong foothold in Noida and Ghaziabad for corporate and real estate litigation.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Defense</h3>
                      <p className="text-gray-600">Proven track record in criminal defense and bail matters under special acts.</p>
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
                        "I was falsely implicated in a case. AMA Legal Solutions moved the Allahabad High Court and got the FIR quashed. Their knowledge of criminal procedure saved my career."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Verma</p>
                          <p className="text-sm text-gray-500">Engineer, Lucknow</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We had a long-standing dispute with a builder in Noida regarding possession. The team represented us in UP RERA and helped us get our refund with interest. Very professional."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Sharma</p>
                          <p className="text-sm text-gray-500">Homebuyer, Noida</p>
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
                      Don't let legal complexities intimidate you. With AMA Legal Solutions, you have the best legal minds in Uttar Pradesh fighting for your cause.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our UP Office</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Expert legal counsel for Allahabad High Court and District Courts.
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
