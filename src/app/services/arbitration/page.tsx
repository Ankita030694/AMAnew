import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is arbitration and how does it work in India?",
    answer: "Arbitration is a form of alternative dispute resolution (ADR) where a dispute is submitted, by agreement of the parties, to one or more arbitrators who make a binding decision on the dispute. In India, it is governed by the Arbitration and Conciliation Act, 1996. It serves as a private and efficient alternative to traditional court litigation, allowing parties to resolve commercial and civil disputes outside the courtroom. The process involves the appointment of an impartial arbitrator, presentation of evidence, and the issuance of an arbitral award that is legally enforceable like a court decree."
  },
  {
    question: "Is an arbitral award legally binding in India?",
    answer: "Yes, an arbitral award is legally binding and enforceable in India. Under Section 36 of the Arbitration and Conciliation Act, 1996, an arbitral award is enforced in the same manner as if it were a decree of the court. Once the time for setting aside the award has expired, or such an application has been refused, the award holder can move the court for execution of the award against the judgment debtor."
  },
  {
    question: "What are the advantages of arbitration over litigation?",
    answer: "Arbitration offers several distinct advantages over traditional litigation. primarily, it is generally faster and more efficient, avoiding the long delays of the court system. It provides confidentiality, as proceedings are private unlike open court trials. Parties have the flexibility to choose an arbitrator with specific subject matter expertise relevant to their dispute. Additionally, the procedure is more flexible and can be tailored to the convenience of the parties, often resulting in cost savings in the long run."
  },
  {
    question: "Can any dispute be referred to arbitration?",
    answer: "While most commercial and civil disputes can be referred to arbitration, there are certain exceptions. Disputes involving rights in rem, such as criminal matters, matrimonial disputes, guardianship matters, insolvency and winding up proceedings, and testamentary matters (wills), are generally considered non-arbitrable in India. However, disputes arising from contracts, intellectual property rights, construction projects, and partnership deeds are standard subjects for arbitration."
  },
  {
    question: "How is an arbitrator appointed?",
    answer: "The appointment of an arbitrator is usually governed by the arbitration agreement between the parties. They can mutually agree on a sole arbitrator or a panel of arbitrators. If the parties fail to agree, or if the appointed arbitrators fail to agree on a presiding arbitrator, they can approach the High Court (for domestic arbitration) or the Supreme Court (for international commercial arbitration) under Section 11 of the Act for the appointment of an arbitrator."
  },
  {
    question: "What is the difference between ad-hoc and institutional arbitration?",
    answer: "In ad-hoc arbitration, the parties and the arbitrator independently determine the procedure without the involvement of an arbitral institution. In institutional arbitration, a specialized institution (like MCIA, SIAC, or ICC) administers the arbitration process according to its own established rules. Institutional arbitration offers more structure, administrative support, and established rules of procedure, whereas ad-hoc arbitration offers more flexibility but requires more cooperation between parties."
  },
  {
    question: "How long does arbitration take in India?",
    answer: "The Arbitration and Conciliation (Amendment) Act, 2015 introduced time limits to expedite proceedings. Section 29A mandates that the award in matters other than international commercial arbitration shall be made within a period of 12 months from the date the arbitral tribunal enters upon the reference. This can be extended by another 6 months by mutual consent. This makes arbitration significantly faster than civil litigation which can drag on for years."
  },
  {
    question: "Can an arbitral award be challenged in court?",
    answer: "Yes, an arbitral award can be challenged in court, but on very limited grounds specified under Section 34 of the Act. These grounds include incapacity of a party, invalidity of the arbitration agreement, lack of proper notice, the award dealing with a dispute not contemplated by the submission to arbitration, or the award being in conflict with the public policy of India. The court does not sit in appeal over the award or re-examine the merits of the case."
  },
  {
    question: "What is the cost of arbitration in India?",
    answer: "The cost of arbitration varies depending on whether it is ad-hoc or institutional, the complexity of the dispute, and the fees of the arbitrator. For ad-hoc arbitrations, the Fourth Schedule of the Act provides a model fee structure based on the sum in dispute. Institutional arbitrations have their own fee schedules. While there are upfront costs, the speed and efficiency of arbitration often make it more cost-effective than prolonged litigation."
  },
  {
    question: "Do I need a lawyer for arbitration?",
    answer: "While it is not legally mandatory to have a lawyer, it is highly recommended. Arbitration involves complex legal procedures, drafting of pleadings, cross-examination of witnesses, and legal arguments. An experienced arbitration lawyer ensures that your case is presented effectively, your rights are protected, and procedural compliances are met. Given the finality of arbitral awards, having expert legal representation is crucial for a favorable outcome."
  },
  {
    question: "What is the role of AMA Legal Solutions in arbitration?",
    answer: "AMA Legal Solutions provides comprehensive arbitration services. We assist in drafting robust arbitration agreements, representing clients in arbitral proceedings, filing applications for interim relief (Section 9), appointment of arbitrators (Section 11), and challenging or enforcing arbitral awards (Section 34 and 36). Our team of expert lawyers has extensive experience in handling complex domestic and international commercial arbitrations across various sectors."
  },
  {
    question: "Can you help with international commercial arbitration?",
    answer: "Yes, we specialize in international commercial arbitration. We represent clients in disputes where at least one party is a national or resident of a country other than India. We are familiar with the rules of major international arbitral institutions and the specific legal nuances governing international arbitration in India. We also assist in the enforcement of foreign arbitral awards in India."
  },
  {
    question: "What is interim relief in arbitration?",
    answer: "Interim relief refers to temporary orders passed by a court or the arbitral tribunal to protect the subject matter of the dispute or the rights of a party while the arbitration is pending. Under Section 9, a party can approach the court for interim measures before or during the arbitral proceedings. Under Section 17, the arbitral tribunal can also grant interim measures. This is crucial to prevent the other party from alienating assets or causing irreparable harm."
  },
  {
    question: "What documents are required for arbitration?",
    answer: "The key document required is the arbitration agreement or the contract containing the arbitration clause. Other documents include the statement of claim, statement of defense, evidence in support of the claim (invoices, emails, contracts, etc.), and any correspondence between the parties regarding the dispute. We help clients compile and organize all necessary documentation to build a strong case."
  },
  {
    question: "How do I start the arbitration process?",
    answer: "To start the arbitration process, you typically need to send a formal notice of arbitration to the other party, invoking the arbitration clause in your agreement and proposing the name of an arbitrator (if applicable). If the other party does not respond or agree, you may need to file a petition in court for the appointment of an arbitrator. We guide you through every step of this initiation process to ensure it is legally valid."
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
      "name": "Arbitration",
      "item": "https://amalegalsolutions.com/services/arbitration"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Arbitration Services in India: Expert Legal Resolution for Commercial Disputes",
  "description": "Comprehensive guide to arbitration in India. Learn about the legal framework, process, and benefits of arbitration with expert legal assistance from AMA Legal Solutions.",
  "image": "https://amalegalsolutions.com/services/9.png",
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
  "datePublished": "2023-10-01",
  "dateModified": "2023-10-27"
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
  "name": "Arbitration Legal Services",
  "image": "https://amalegalsolutions.com/services/9.png",
  "description": "Expert arbitration and dispute resolution services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Vikram Malhotra"
      },
      "reviewBody": "AMA Legal Solutions handled our complex commercial arbitration with exceptional skill. Their strategic approach and deep understanding of the Arbitration Act led to a favorable award for our company."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Reddy"
      },
      "reviewBody": "We were facing a deadlock in a partnership dispute. The arbitration team at AMA guided us through the process efficiently. Their professionalism and dedication are commendable."
    }
  ]
};

export const metadata = {
  title: "Arbitration in India | Top Arbitration Lawyers & Legal Services",
  description:
    "Looking for expert arbitration in India? AMA Legal Solutions offers top-tier arbitration services for commercial, construction, and international disputes. Fast, confidential, and effective resolution.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/arbitration',
  },
  openGraph: {
    title: "Arbitration in India | Top Arbitration Lawyers & Legal Services",
    description: "Looking for expert arbitration in India? AMA Legal Solutions offers top-tier arbitration services for commercial, construction, and international disputes.",
    url: "https://amalegalsolutions.com/services/arbitration",
    type: "website",
    images: [
      {
        url: "/services/9.png",
        width: 1200,
        height: 630,
        alt: "Arbitration Services India",
      },
    ],
  },
};

export default function ArbitrationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-arbitration", title: "What is Arbitration?" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "types-of-arbitration", title: "Types of Services" },
    { id: "advantages", title: "Advantages" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Arbitration", href: "/services/arbitration" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert Legal Solutions for <span className="text-[#D2A02A]">Arbitration in India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Resolve your commercial and civil disputes efficiently with our top-rated arbitration lawyers. Fast, confidential, and legally binding resolutions tailored to your needs.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Efficient Dispute Resolution in a Complex Business World</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In today's fast-paced global economy, commercial disputes are inevitable. However, resolving these disputes through traditional court litigation can be a time-consuming, expensive, and public process. For businesses and individuals alike, the need for a faster, more flexible, and confidential method of dispute resolution is paramount. This is where <strong>arbitration</strong> steps in as a preferred alternative.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand that time is money. Our dedicated team of <strong>arbitration lawyers in India</strong> specializes in providing strategic, results-oriented legal representation in domestic and international arbitrations. We move beyond the adversarial nature of courtrooms to find commercially viable solutions that protect your interests and preserve business relationships.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you are a multinational corporation facing a cross-border dispute or a local business dealing with a contract breach, our expertise ensures that your case is handled with the highest level of professional competence and legal acumen.
                  </p>
                </section>

                {/* What is Arbitration */}
                <section id="what-is-arbitration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Arbitration?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Arbitration is a private dispute resolution process where parties agree to submit their differences to one or more impartial arbitrators who make a binding decision, known as an arbitral award."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike litigation, where a judge appointed by the state decides the case in a public courtroom, arbitration is a consensual process. The parties have the autonomy to choose their decision-maker (the arbitrator), the rules of procedure, the language of proceedings, and even the venue. This flexibility makes it a highly attractive option for commercial entities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The decision made by the arbitrator, called the <strong>arbitral award</strong>, is final and binding on the parties. It has the same legal effect as a court decree and can be enforced in the same manner. This ensures that the outcome of the arbitration is not just a recommendation but a legally enforceable order.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Characteristics of Arbitration</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Consensual:</strong> Arbitration can only take place if both parties have agreed to it, usually through an arbitration clause in their contract or a separate submission agreement.
                    </li>
                    <li>
                      <strong>Neutral:</strong> The arbitrator is a neutral third party with no interest in the outcome of the dispute. Parties can select arbitrators with specific technical or legal expertise relevant to their case.
                    </li>
                    <li>
                      <strong>Confidential:</strong> Unlike court proceedings which are open to the public, arbitration hearings and awards are generally confidential, protecting sensitive business information and reputation.
                    </li>
                    <li>
                      <strong>Finality:</strong> Arbitral awards are final and subject to very limited grounds for challenge in court, ensuring a definitive end to the dispute.
                    </li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework for Arbitration in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Arbitration in India is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>, which is based on the UNCITRAL Model Law on International Commercial Arbitration. This legislation provides a robust framework for the conduct of arbitration proceedings and the enforcement of awards.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Provisions of the Act</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Act is divided into two main parts: Part I deals with arbitrations held in India (domestic and international commercial arbitrations with a seat in India), and Part II deals with the enforcement of certain foreign awards (New York Convention and Geneva Convention awards).
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Section 8 & 45: Reference to Arbitration</h4>
                      <p className="text-gray-600">If a dispute is brought before a court which is the subject of an arbitration agreement, the court must refer the parties to arbitration.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Section 9 & 17: Interim Relief</h4>
                      <p className="text-gray-600">Parties can seek interim measures of protection from the court (Sec 9) or the arbitral tribunal (Sec 17) to preserve assets or evidence pending the outcome of arbitration.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Section 11: Appointment of Arbitrators</h4>
                      <p className="text-gray-600">If parties fail to agree on an arbitrator, they can approach the Supreme Court or High Court for the appointment of an arbitrator.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Section 34: Challenge to Award</h4>
                      <p className="text-gray-600">An arbitral award can be set aside by a court only on very specific grounds, such as incapacity, invalid agreement, or conflict with public policy.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Recent amendments to the Act in 2015, 2019, and 2021 have further strengthened the arbitration regime in India, introducing strict timelines for completion of proceedings (12 months) and promoting institutional arbitration. At AMA Legal Solutions, we stay abreast of these evolving legal standards to provide you with the most current and effective legal advice.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Arbitration Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Arbitration requires a different strategic approach than traditional litigation. We have developed a comprehensive 4-step process to ensure the best possible outcome for our clients.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Assessment & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by thoroughly analyzing the dispute and the underlying contract. We assess the strength of the arbitration clause, potential jurisdictional issues, and the merits of the claim. Based on this, we formulate a tailored strategy, whether it involves invoking arbitration, seeking interim relief, or preparing a defense.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Initiation & Appointment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We handle all procedural aspects of initiating the arbitration, including drafting the Notice of Arbitration. If the other party refuses to cooperate in appointing an arbitrator, we file necessary petitions under Section 11 of the Act before the appropriate court to ensure the tribunal is constituted without delay.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Pleadings & Evidence</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This is the core of the arbitration. We draft comprehensive Statements of Claim or Defense, prepare witness statements, and collate documentary evidence. Our team is skilled in cross-examining witnesses and presenting compelling legal arguments before the arbitral tribunal to substantiate your case.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Award & Enforcement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once the arbitral award is passed, our job isn't done. If the award is in your favor, we assist in its execution and enforcement as a court decree. If the award is unfavorable, we analyze the grounds for challenging it under Section 34 of the Act and represent you in the challenge proceedings.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Types of Arbitration Services */}
                <section id="types-of-arbitration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Arbitration Expertise</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We provide a wide range of arbitration services tailored to specific industries and types of disputes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Commercial Arbitration</h3>
                      <p className="text-gray-700">
                        Handling disputes arising from business contracts, shareholder agreements, joint ventures, and supply chain contracts. We ensure that commercial realities are prioritized alongside legal arguments.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Construction & Infrastructure</h3>
                      <p className="text-gray-700">
                        Specialized arbitration for construction delays, defect claims, and payment disputes. We work with technical experts to present complex engineering evidence effectively.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">International Arbitration</h3>
                      <p className="text-gray-700">
                        Representing clients in international commercial arbitrations under rules of major institutions like SIAC, ICC, LCIA, and UNCITRAL. We navigate complex conflict of law issues.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Banking & Finance</h3>
                      <p className="text-gray-700">
                        Resolving disputes related to loan agreements, debt recovery, and financial instruments through expedited arbitration procedures to ensure quick recovery of dues.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Advantages */}
                <section id="advantages" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Arbitration?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Arbitration is not just an alternative; it is often the superior choice for commercial dispute resolution.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-green-50 p-6 rounded-xl">
                    <li><strong>Speed:</strong> With statutory timelines, arbitration is significantly faster than the years-long delays of Indian courts.</li>
                    <li><strong>Expertise:</strong> You can choose an arbitrator with specific industry knowledge (e.g., an engineer for construction disputes), ensuring a better understanding of the issues.</li>
                    <li><strong>Confidentiality:</strong> Keep your business disputes out of the public eye and protect your trade secrets.</li>
                    <li><strong>Finality:</strong> Limited appeal rights mean the dispute ends sooner, allowing you to get back to business.</li>
                    <li><strong>Enforceability:</strong> Arbitral awards are easier to enforce internationally than court judgments due to the New York Convention.</li>
                  </ul>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    When the stakes are high, you need an arbitration team that combines legal excellence with strategic foresight.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Specialized Expertise</h3>
                      <p className="text-gray-600">Our team focuses specifically on arbitration law, ensuring you get specialized advice rather than general litigation support.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌍</div>
                      <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                      <p className="text-gray-600">We have experience handling international arbitrations and enforcing foreign awards in India.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client-Centric</h3>
                      <p className="text-gray-600">We prioritize your business goals and work towards cost-effective resolutions that minimize disruption.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions handled our complex commercial arbitration with exceptional skill. Their strategic approach and deep understanding of the Arbitration Act led to a favorable award for our company."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">Director, Tech Solutions Pvt Ltd</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We were facing a deadlock in a partnership dispute. The arbitration team at AMA guided us through the process efficiently. Their professionalism and dedication are commendable."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Reddy</p>
                          <p className="text-sm text-gray-500">Partner, Reddy Constructions</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Resolve Disputes Efficiently</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let legal battles drain your resources. Choose expert arbitration for a faster, smarter resolution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Binding • Professional
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Advice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our expert arbitration lawyers today.
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
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/drafting" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Legal Drafting
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Arbitration" servicePath="arbitration" />
          </div>
        </div>
      </div>
    </>
  );
}
