import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Extensive FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the difference between civil and criminal litigation in India?",
    answer: "Civil litigation deals with disputes between individuals or organizations where the remedy usually sought is compensation or specific performance. Examples include property disputes, contract breaches, and family matters. Criminal litigation involves the state prosecuting individuals for acts classified as crimes, such as theft, fraud, or assault, where the objective is punishment (imprisonment or fines). The burden of proof is higher in criminal cases (beyond reasonable doubt) compared to civil cases (preponderance of probabilities)."
  },
  {
    question: "How long does a typical litigation case take to resolve in Indian courts?",
    answer: "The duration of litigation in India varies significantly depending on the complexity of the case, the court level, and the specific nature of the dispute. A civil suit in a lower court might take 2 to 5 years, while complex commercial disputes or appeals in High Courts can take longer. However, with the introduction of Commercial Courts and fast track procedures, timelines are improving. Our strategy focuses on expedited proceedings and, where appropriate, alternative dispute resolution to minimize delays."
  },
  {
    question: "What are the initial steps to file a civil lawsuit in India?",
    answer: "The process typically begins with sending a Legal Notice to the opposing party, giving them a chance to resolve the dispute. If that fails, we draft a Plaint (complaint) detailing the facts, legal grounds, and relief sought. This Plaint is filed in the court with appropriate jurisdiction along with the court fee. The court then issues a Summons to the defendant to appear and file a Written Statement. This initiates the formal trial process."
  },
  {
    question: "Can I appeal a court judgment if I am not satisfied with the outcome?",
    answer: "Yes, the Indian judicial system provides a robust hierarchy for appeals. If you are dissatisfied with a District Court judgment, you can appeal to the High Court. Decisions of the High Court can be challenged in the Supreme Court of India. There are specific limitation periods for filing appeals (usually 30 to 90 days), so it is crucial to act swiftly and consult with appellate lawyers immediately after a judgment is pronounced."
  },
  {
    question: "What is Alternative Dispute Resolution (ADR) and is it better than litigation?",
    answer: "ADR includes methods like Arbitration, Mediation, and Conciliation, which resolve disputes outside the traditional courtroom. ADR is generally faster, more confidential, and often less expensive than litigation. It allows parties to have more control over the outcome. However, litigation is necessary when a binding legal precedent is needed, when the other party is uncooperative, or when urgent interim relief (injunctions) is required from a court."
  },
  {
    question: "How do you charge for litigation services?",
    answer: "Our fee structure is transparent and tailored to the case requirements. We typically charge a professional fee for drafting and filing, followed by appearance fees for court hearings. For certain corporate clients, we offer retainer models. We discuss all costs upfront, including court fees, clerkage, and miscellaneous expenses, ensuring there are no surprises during the legal battle."
  },
  {
    question: "Do you handle cases in tribunals like NCLT, DRT, or RERA?",
    answer: "Absolutely. We have specialized teams for various tribunals. We represent clients in the National Company Law Tribunal (NCLT) for insolvency and corporate disputes, the Debt Recovery Tribunal (DRT) for banking matters, and the Real Estate Regulatory Authority (RERA) for property disputes. These tribunals have specific procedures, and our expertise ensures compliance and effective representation."
  },
  {
    question: "What documents are needed to start a litigation case?",
    answer: "The documents depend on the case type. Generally, you need proof of identity, proof of address, and all substantive documents related to the dispute (contracts, invoices, email correspondence, property deeds, photographs, etc.). A 'Vakalatnama' (Power of Attorney) must be signed to authorize us to represent you in court. We guide you through compiling a comprehensive evidence bank to strengthen your case."
  },
  {
    question: "Can a case be settled after it has been filed in court?",
    answer: "Yes, a case can be settled at any stage of the litigation process, even up to the final judgment. Courts actively encourage settlement through Lok Adalats or mediation centers. If a settlement is reached, we draft a Compromise Decree or Settlement Agreement, which is submitted to the court to close the case formally. This is often a win win solution saving time and resources."
  },
  {
    question: "Why should I choose AMA Legal Solutions for my litigation needs?",
    answer: "AMA Legal Solutions combines deep legal knowledge with a strategic, results oriented approach. We have a proven track record in diverse areas of law, from complex corporate litigation to sensitive family matters. Our team is accessible, transparent, and dedicated to fighting for your rights. We don't just argue cases; we engineer legal strategies to achieve your specific business or personal objectives."
  },
  {
    question: "What is an ex-parte order and how can it be set aside?",
    answer: "An ex-parte order is a judgment passed by the court when the defendant fails to appear despite being served with a summons. If an ex-parte decree has been passed against you, we can file an application under Order 9 Rule 13 of the CPC to set it aside. We must prove that there was 'sufficient cause' for your non-appearance, such as not receiving the summons or a medical emergency."
  },
  {
    question: "What is a Caveat Petition and when should I file one?",
    answer: "A Caveat Petition is a precautionary measure filed in court by a person who expects a legal suit to be filed against them. It ensures that the court will not pass any adverse order (like a stay order) without first giving you a notice and a hearing. It is valid for 90 days. We recommend filing a caveat if you anticipate litigation from a competitor or an aggrieved party."
  },
  {
    question: "Can I file a case against the government?",
    answer: "Yes, you can file a Writ Petition against the State or government authorities in the High Court (Article 226) or Supreme Court (Article 32) for violation of fundamental rights or statutory duties. You can also file civil suits against government departments after serving a mandatory notice under Section 80 of the CPC. We have extensive experience in constitutional and administrative law litigation."
  },
  {
    question: "What is the difference between a Review, Revision, and Appeal?",
    answer: "An Appeal is a rehearing of the case by a higher court on both facts and law. A Review is a request to the same court to reconsider its judgment due to an apparent error on the face of the record. A Revision is filed in a higher court (usually High Court) to check if a lower court has exercised its jurisdiction illegally or irregularly. Choosing the right remedy is critical for success."
  },
  {
    question: "How does the Commercial Courts Act help in business disputes?",
    answer: "The Commercial Courts Act, 2015 was introduced to fast-track commercial disputes of a specified value. It mandates strict timelines for filing pleadings, limits adjournments, and encourages pre-institution mediation. This has significantly reduced the time taken for resolving business disputes. We specialize in commercial suits and leverage these provisions to get quick relief for our corporate clients."
  },
  {
    question: "What is a Summary Suit?",
    answer: "A Summary Suit (Order 37 CPC) is a faster legal remedy for recovering debts where the claim is based on written contracts, bills of exchange, or cheques. In these suits, the defendant does not have an automatic right to defend; they must first seek the 'leave to defend' from the court. If leave is not granted, the plaintiff gets a judgment immediately. It is an excellent tool for debt recovery."
  },
  {
    question: "Can I change my lawyer during an ongoing case?",
    answer: "Yes, a client has the absolute right to change their legal counsel at any stage. You need to obtain a 'No Objection Certificate' (NOC) from your current lawyer. If they refuse without valid reason, you can approach the court for permission to engage a new counsel. We ensure a smooth transition of your case file and strategy so that your legal representation does not suffer during the switch."
  },
  {
    question: "What is the limitation period for filing a civil suit?",
    answer: "The Limitation Act prescribes specific time limits for filing different types of suits. For example, the limitation for a money recovery suit is 3 years from the date the debt became due. For possession of immovable property, it is 12 years. If you miss this deadline, your case may be dismissed on technical grounds. We always advise clients to act promptly to preserve their legal remedies."
  },
  {
    question: "Does AMA Legal Solutions handle Public Interest Litigation (PIL)?",
    answer: "Yes, we handle Public Interest Litigations (PILs) for matters that affect the larger public interest, such as environmental protection, consumer rights, or social justice. PILs are filed directly in the High Court or Supreme Court. We assist NGOs, activists, and concerned citizens in drafting and arguing PILs to bring about positive social change through judicial intervention."
  },
  {
    question: "What is the cost of filing a suit in India?",
    answer: "The cost involves Court Fees and Professional Fees. Court fees are paid to the government and vary from state to state, usually calculated as a percentage of the claim amount (ad valorem). Professional fees depend on the lawyer's expertise. Additionally, there are miscellaneous expenses for typing, photocopying, and process service. We provide a detailed estimate of all potential costs before initiating litigation."
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
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in India: Expert Civil & Criminal Lawyers",
  "description": "Comprehensive guide to litigation in India. Learn about civil suits, criminal defense, commercial disputes, and the court process with AMA Legal Solutions.",
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
  "datePublished": "2023-11-15",
  "dateModified": "2024-01-20"
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
  "name": "Litigation Legal Services",
  "image": "https://www.amalegalsolutions.com/services/13.png",
  "description": "Expert litigation and dispute resolution services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "620"
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "AMA Legal Solutions handled our property dispute with exceptional skill. Their strategic approach in the High Court led to a favorable judgment after years of deadlock. Highly recommended for complex civil litigation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anita Desai"
      },
      "reviewBody": "We engaged them for a corporate commercial dispute. Their team was thorough, professional, and very aggressive in protecting our interests. The settlement we reached was far better than we anticipated."
    }
  ]
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Litigation Services in India | Civil & Criminal Lawyers",
  "description": "Expert litigation services for civil, criminal, and commercial disputes in India. AMA Legal Solutions provides top-tier court representation and legal advocacy.",
  "url": "https://www.amalegalsolutions.com/services/litigation",
};

export const metadata = {
  title: "Litigation Services in India | AMA Legal Solutions",
  description:
    "Top litigation lawyers in India for civil disputes, criminal defense, corporate arbitration, and High Court appeals with AMA Legal Solutions.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/litigation',
  },
  openGraph: {
    title: "Litigation Services in India | AMA Legal Solutions",
    description: "Top litigation lawyers in India for civil, criminal, corporate, and High Court matters with AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/services/litigation",
    type: "website",
    images: [
      {
        url: "/services/13.png",
        width: 1200,
        height: 630,
        alt: "Litigation Services India",
      },
    ],
  },
};

export default function LitigationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-litigation", title: "Understanding Litigation" },
    { id: "practice-areas", title: "Practice Areas" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "court-hierarchy", title: "Judicial Hierarchy" },
    { id: "strategies", title: "Litigation Strategy" },
    { id: "tribunals", title: "Specialized Tribunals" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Litigation Services", href: "/services/litigation" },
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
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 bg-black" 
            style={{ backgroundImage: "url('/services/litigation-hero.jpg')", backgroundColor: "#1a1a1a" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Litigation Services</span> in India
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 font-light">
              Defending your rights with strategic advocacy. We provide robust legal representation for civil, criminal, and commercial disputes across all Indian courts.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg border-2 border-[#D2A02A]">
                Get Legal Representation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-12 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28 self-start">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-20">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#D2A02A]">
                    Navigating the Complexities of Indian Litigation
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                    <p>
                      The Indian judicial system involves a complex web of laws, procedural codes, and court precedents. Whether you are an individual fighting for your property rights or a corporation defending a commercial contract, the stakes in litigation are invariably high. A favorable judgment can secure your future, while a loss can have severe financial and reputational consequences. In this adversarial system, having a skilled legal partner is not a luxury; it is a necessity.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we understand the intricacies of the Indian courtroom. Litigation is not merely about filing papers; it is about crafting a compelling narrative backed by irrefutable evidence and sound legal logic. Our team of seasoned litigators brings decades of combined experience across District Courts, High Courts, and the Supreme Court of India. We pride ourselves on our ability to demystify the legal process for our clients, providing transparent, aggressive, and results driven representation.
                    </p>
                    <p>
                      This guide provides an in depth look at our litigation services, the judicial process in India, and how we engineer strategies to win your case.
                    </p>
                  </div>
                </section>

                {/* Understanding Litigation */}
                <section id="understanding-litigation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Litigation in India</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-white border-l-8 border-blue-600 p-8 mb-8 rounded-r-xl">
                    <p className="text-xl text-blue-900 font-medium italic">
                      "Litigation is the process of taking legal action in a court of law. It is the formal mechanism for resolving disputes where a judge (or bench of judges) adjudicates based on the evidence presented and the applicable statutory laws."
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Broadly, Indian litigation is divided into two primary categories, each with its own distinct standard of proof and procedure.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Civil Litigation</h3>
                      <p className="text-gray-700">
                        <strong>Focus:</strong> Disputes between private parties (individuals or organizations).<br/>
                        <strong>Objective:</strong> To seek compensation (damages), specific performance of a contract, or injunctions.<br/>
                        <strong>Standard of Proof:</strong> "Preponderance of probabilities" – meaning it is more likely than not that the claim is true.<br/>
                        <strong>Examples:</strong> Property disputes, breach of contract, family law, torts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Criminal Litigation</h3>
                      <p className="text-gray-700">
                        <strong>Focus:</strong> Offenses against the state and society.<br/>
                        <strong>Objective:</strong> To punish the offender through imprisonment, fines, or both.<br/>
                        <strong>Standard of Proof:</strong> "Beyond reasonable doubt" – the prosecution must prove guilt with near absolute certainty.<br/>
                        <strong>Examples:</strong> Theft, assault, fraud, cybercrime, murder.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Practice Areas */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Areas of Litigation Expertise</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Civil */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">⚖️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Civil Litigation</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Property & Real Estate Disputes (Title suits, Possession)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Breach of Contract & Specific Performance</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Recovery of Money Suits</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Injunctions (Stay Orders)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Defamation & Torts</li>
                      </ul>
                    </div>

                    {/* Criminal */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">🚔</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Criminal Defense</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Bail Matters (Anticipatory & Regular)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Cheque Bounce (Section 138 NI Act)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>White Collar Crimes & Corporate Fraud</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Cyber Crime Defense</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Quashing of FIRs (Section 482 CrPC)</li>
                      </ul>
                    </div>

                    {/* Commercial */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">🏢</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial & Corporate</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Shareholder & Partnership Disputes</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Insolvency & Bankruptcy (IBC)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Mergers & Acquisitions Litigation</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Intellectual Property Infringement</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Commercial Arbitration Enforcement</li>
                      </ul>
                    </div>

                    {/* Family */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">👨‍👩‍👧</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Family & Constitutional</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Divorce & Child Custody</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Succession & Wills</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Writ Petitions (High Court & Supreme Court)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Public Interest Litigations (PIL)</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2">▪</span>Service & Employment Matters</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">The Lifecycle of a Lawsuit</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Understanding the procedural steps can help reduce the anxiety associated with litigation. While every case is unique, a typical civil suit follows this trajectory:
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 space-y-12">
                    
                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Legal Notice (Pre-Litigation)</h3>
                      <p className="text-gray-700">
                        Before approaching the court, we send a formal Legal Notice to the opposing party. This notice outlines the grievance, legal basis, and demands. It serves as a final warning and often leads to an out of court settlement, saving significant time and cost.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Filing of Plaint</h3>
                      <p className="text-gray-700">
                        If the notice is ignored, we draft and file a 'Plaint' (complaint) in the court of competent jurisdiction. The court then issues a 'Summons' to the defendant, ordering them to appear.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Pleadings</h3>
                      <p className="text-gray-700">
                        The defendant files a 'Written Statement' defending their position. The plaintiff may file a 'Replication' to counter this. These documents form the 'Pleadings' and set the boundaries of the dispute.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Evidence & Trial</h3>
                      <p className="text-gray-700">
                        The court frames 'Issues' to be decided. Both parties then lead evidence. This involves submitting documents and examining witnesses. Cross examination is the most critical tool here to dismantle the opponent's case.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. Final Arguments & Judgment</h3>
                      <p className="text-gray-700">
                        Lawyers present final oral arguments, summarizing the evidence and citing case law. The judge then pronounces the 'Judgment' and passes a 'Decree'.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">6. Appeal / Execution</h3>
                      <p className="text-gray-700">
                        If favorable, we move to 'Execute' the decree to recover dues or assets. If unfavorable, we file an 'Appeal' in a higher court (High Court or Supreme Court) to challenge the verdict.
                      </p>
                    </div>

                  </div>
                </section>

                {/* Court Hierarchy */}
                <section id="court-hierarchy" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Judicial Hierarchy in India</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    India follows a unified judicial system. Knowing which court has jurisdiction is vital for the success of your petition.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Supreme Court</h4>
                      <p className="text-sm text-gray-600">The apex court. Hears appeals from High Courts and matters involving violation of fundamental rights (Article 32).</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">High Courts</h4>
                      <p className="text-sm text-gray-600">The highest court in a state. Has power of superintendence over all lower courts and hears writ petitions (Article 226).</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">District Courts</h4>
                      <p className="text-sm text-gray-600">The first tier of the judiciary. Divided into Civil Courts (District Judges) and Criminal Courts (Sessions Judges).</p>
                    </div>
                  </div>
                </section>

                {/* Strategies */}
                <section id="strategies" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Winning Litigation Strategies</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Success in court is rarely accidental. It is the result of meticulous planning and strategic foresight. At AMA, we employ specific tactics to gain an edge:
                  </p>
                  <div className="space-y-6">
                    <div className="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Pre-Litigation Settlement</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          We aggressively pursue settlement through aggressive legal notices and negotiation. Avoiding court is often the best victory.
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Forum Shopping (Legitimate)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          We analyze whether a Specialized Tribunal (like NCLT) offers a faster remedy than a Civil Court and file accordingly.
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Caveat Petitions</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          If we anticipate a suit against you, we file a 'Caveat' to ensure the court gives us a hearing before passing any adverse ex parte interim orders.
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">4</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Summary Suits</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          For debt recovery, we file Summary Suits (Order 37 CPC) where the defendant has no automatic right to defend, speeding up the judgment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Specialized Tribunals */}
                <section id="tribunals" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Specialized Tribunals Representation</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Modern litigation has moved beyond traditional courts. We have specialized teams for quasi-judicial bodies that handle specific subject matters.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">NCLT</span>
                      <span className="text-xs text-gray-500">Company Law</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">DRT / DRAT</span>
                      <span className="text-xs text-gray-500">Debt Recovery</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">RERA</span>
                      <span className="text-xs text-gray-500">Real Estate</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">NGT</span>
                      <span className="text-xs text-gray-500">Environment</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">CAT / SAT</span>
                      <span className="text-xs text-gray-500">Service / Securities</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">Consumer</span>
                      <span className="text-xs text-gray-500">Consumer Forum</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">ITAT</span>
                      <span className="text-xs text-gray-500">Income Tax</span>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <span className="block text-xl font-bold text-gray-900 mb-1">Labour</span>
                      <span className="text-xs text-gray-500">Labour Courts</span>
                    </div>
                  </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <div className="bg-[#1a202c] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose AMA Legal Solutions?</h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Litigation is a marathon, not a sprint. It requires patience, persistence, and specialized knowledge. At AMA, we combine the personalized attention of a boutique firm with the robust capabilities of a large practice. Our attorneys are accessible, transparent about fees, and relentless in their pursuit of justice. We don't just protect your legal rights; we protect your peace of mind.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Proven Track Record in High Stakes Cases</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Multi-Jurisdictional Capabilities</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Transparent & Honest Fee Structure</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Dedicated Appellate Team</span>
                        </li>
                      </ul>
                    </div>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full blur-3xl"></div>
                  </div>
                </section>

                {/* Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        AMA Legal Solutions handled our property dispute with exceptional skill. Their strategic approach in the High Court led to a favorable judgment after years of deadlock. Highly recommended for complex civil litigation.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">Real Estate Developer, Delhi</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        We engaged them for a corporate commercial dispute. Their team was thorough, professional, and very aggressive in protecting our interests. The settlement we reached was far better than we anticipated.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anita Desai</p>
                          <p className="text-sm text-gray-500">Director, Tech Solutions</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="grid gap-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-[#D2A02A] to-[#b88a22] rounded-xl md:rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Fight for Your Rights?</h2>
                  <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Don't let legal battles overwhelm you. Get credible, strategic, and aggressive legal representation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-white text-[#b88a22] font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md text-lg w-full sm:w-auto">
                        Schedule Consultation
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-white/10 text-lg w-full sm:w-auto">
                        Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                </section>
                
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-28 self-start">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    In litigation, deadlines matter. Missing a limitation period can be fatal to your case.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4 shadow-md"
                  >
                    Call Now
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-gray-200 text-gray-700 text-center py-4 rounded-xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Request Callback
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Practice Areas</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/services/arbitration" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/criminal-law" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Criminal Defense
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/real-estate" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Real Estate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Family Law
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-20">
             <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Serving Clients Across Indian Courts</h2>
            <GenericStatesGrid serviceName="Litigation Services" servicePath="litigation" />
          </div>
        </div>
      </div>
    </>
  );
}