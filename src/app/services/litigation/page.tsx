import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
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
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Litigation Services in India: Expert Civil & Criminal Lawyers",
  "description": "Comprehensive guide to litigation in India. Learn about civil suits, criminal defense, commercial disputes, and the court process with AMA Legal Solutions.",
  "image": "https://amalegalsolutions.com/services/13.png",
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
  "datePublished": "2023-11-15",
  "dateModified": "2023-11-20"
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
  "image": "https://amalegalsolutions.com/services/13.png",
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
  "url": "https://amalegalsolutions.com/services/litigation",
};

export const metadata = {
  title: "Litigation Services in India | Civil, Criminal & Commercial Lawyers",
  description:
    "Expert litigation lawyers in India. AMA Legal Solutions provides comprehensive services for civil suits, criminal defense, commercial disputes, and appellate matters. Secure your legal rights today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation',
  },
  openGraph: {
    title: "Litigation Services in India | Civil, Criminal & Commercial Lawyers",
    description: "Expert litigation services for civil, criminal, and commercial disputes in India. AMA Legal Solutions provides top-tier court representation.",
    url: "https://amalegalsolutions.com/services/litigation",
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
    { id: "types-of-litigation", title: "Types of Litigation" },
    { id: "litigation-process", title: "The Litigation Process" },
    { id: "court-hierarchy", title: "Court Hierarchy in India" },
    { id: "challenges", title: "Common Challenges" },
    { id: "strategy", title: "Pre-Litigation Strategy" },
    { id: "tribunals", title: "Specialized Tribunals" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
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
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Litigation Services</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Defending your rights with strategic advocacy. From civil disputes to complex criminal defense, we are your trusted legal partners in Indian courts.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Legal Representation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Indian Legal System</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Indian legal landscape is vast, complex, and often daunting for individuals and businesses alike. <strong>Litigation</strong> is the process of taking legal action in a court of law to resolve a dispute. It is the ultimate mechanism for enforcing rights, seeking redressal for wrongs, and ensuring justice is served. Whether it is a property dispute, a breach of contract, or a criminal accusation, the outcome of litigation can have profound personal and financial implications.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we believe that effective litigation is not just about knowing the law; it is about understanding the strategy of the courtroom. Our team of experienced <strong>litigation lawyers in India</strong> brings a wealth of knowledge across various practice areas. We are committed to providing robust representation that is both aggressive in protecting your interests and pragmatic in achieving your goals.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We handle cases across the entire judicial hierarchy, from District Courts to High Courts and the Supreme Court of India. Our approach is client centric: we listen, we analyze, and we fight tirelessly to secure the best possible outcome for you. We understand that every case is unique, and therefore, we tailor our legal strategies to meet the specific needs and objectives of our clients.
                  </p>
                </section>

                {/* Types of Litigation */}
                <section id="types-of-litigation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Areas of Litigation Expertise</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Litigation is a broad field encompassing various branches of law. Our firm offers specialized services in the following key areas, ensuring that you have expert guidance regardless of the nature of your dispute:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Civil Litigation</h3>
                      <p className="text-gray-700 mb-3">
                        Civil law governs disputes between individuals or organizations. We handle:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Property and Real Estate Disputes</li>
                        <li>Breach of Contract & Specific Performance</li>
                        <li>Recovery Suits (Money Recovery)</li>
                        <li>Injunctions and Stay Orders</li>
                        <li>Defamation Suits</li>
                        <li>Consumer Protection Cases</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h3 className="text-xl font-bold text-red-900 mb-3">Criminal Litigation</h3>
                      <p className="text-gray-700 mb-3">
                        Criminal law involves prosecution by the state. Our defense services include:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Bail Matters (Regular & Anticipatory)</li>
                        <li>Cheque Bounce Cases (Section 138 NI Act)</li>
                        <li>White Collar Crimes & Fraud</li>
                        <li>Cyber Crime Defense</li>
                        <li>Quashing of FIRs in High Court</li>
                        <li>Criminal Appeals & Revisions</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <h3 className="text-xl font-bold text-yellow-900 mb-3">Commercial & Corporate</h3>
                      <p className="text-gray-700 mb-3">
                        Business disputes require a keen understanding of commerce and law. We manage:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Shareholder & Partnership Disputes</li>
                        <li>Mergers & Acquisitions Litigation</li>
                        <li>Intellectual Property Infringement</li>
                        <li>Insolvency & Bankruptcy (IBC)</li>
                        <li>Arbitration & Mediation</li>
                        <li>Commercial Contract Enforcement</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Family & Matrimonial</h3>
                      <p className="text-gray-700 mb-3">
                        Sensitive handling of personal matters is our priority. We assist with:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Divorce Proceedings (Mutual & Contested)</li>
                        <li>Child Custody & Visitation Rights</li>
                        <li>Maintenance & Alimony</li>
                        <li>Domestic Violence Cases</li>
                        <li>Succession & Wills</li>
                        <li>Restitution of Conjugal Rights</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Litigation Process */}
                <section id="litigation-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Litigation Process: Step by Step</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the lifecycle of a lawsuit helps reduce anxiety and allows for better preparation. While every case is unique, most civil litigation in India follows this general trajectory:
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Legal Notice</h3>
                      <p className="text-gray-700">
                        Before approaching the court, it is often mandatory or strategic to send a formal Legal Notice to the opposite party. This notice outlines the grievance and demands a resolution within a specific timeframe. Many disputes are resolved at this stage itself.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Filing of Plaint</h3>
                      <p className="text-gray-700">
                        If the notice yields no result, we draft and file a 'Plaint' in the court of appropriate jurisdiction. The Plaint details the facts, the cause of action, and the relief claimed. The court then issues a summons to the defendant.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Written Statement & Replication</h3>
                      <p className="text-gray-700">
                        The defendant must file a 'Written Statement' (defense) responding to the allegations. The plaintiff may then file a 'Replication' to counter the defense. This completes the pleadings stage.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Evidence & Trial</h3>
                      <p className="text-gray-700">
                        The court frames the 'Issues' to be decided. Both parties then present their evidence—documents and witnesses. Witnesses are examined in chief and cross examined by the opposing lawyer. This is the most critical phase of the trial.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Arguments & Judgment</h3>
                      <p className="text-gray-700">
                        After evidence is concluded, final arguments are heard. The judge then pronounces the 'Judgment' and passes a 'Decree'. If favorable, the decree is executed; if not, an appeal can be filed in a higher court.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Court Hierarchy */}
                <section id="court-hierarchy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Court Hierarchy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    India follows a unified judicial system with a clear hierarchy. Knowing where your case stands is vital for effective representation.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                      <div className="text-4xl mr-4">🏛️</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">Supreme Court of India</h3>
                        <p className="text-gray-700">
                          The apex court of the land, located in New Delhi. It hears appeals from High Courts and cases involving fundamental rights or substantial questions of law. Its decisions are binding on all other courts.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                      <div className="text-4xl mr-4">⚖️</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">High Courts</h3>
                        <p className="text-gray-700">
                          The highest judicial authority in a state. They have jurisdiction over civil and criminal appeals from lower courts and also original jurisdiction in certain matters like writ petitions.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                      <div className="text-4xl mr-4">🏢</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">District & Sessions Courts</h3>
                        <p className="text-gray-700">
                          The backbone of the judicial system. Civil cases are heard by District Judges, and criminal cases by Sessions Judges. Most litigation begins here.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Challenges */}
                <section id="challenges" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Challenges in Indian Litigation</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Litigation in India is often perceived as slow and cumbersome. While challenges exist, an experienced legal team knows how to navigate them effectively.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Delays & Adjournments</h3>
                      <p className="text-gray-700">
                        <strong>Challenge:</strong> Frequent adjournments can drag cases for years.<br/>
                        <strong>Our Solution:</strong> We oppose unnecessary adjournments and file applications for expedited hearings, especially in urgent matters or for senior citizens.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Complex Procedures</h3>
                      <p className="text-gray-700">
                        <strong>Challenge:</strong> Procedural errors can lead to case dismissal.<br/>
                        <strong>Our Solution:</strong> Our team is meticulous with drafting and filing, ensuring compliance with the Code of Civil Procedure (CPC) and Evidence Act to prevent technical setbacks.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Execution of Decree</h3>
                      <p className="text-gray-700">
                        <strong>Challenge:</strong> Winning the case is half the battle; getting the money/property is the other half.<br/>
                        <strong>Our Solution:</strong> We aggressively pursue Execution Petitions, including attachment of assets and arrest warrants, to ensure you get the fruits of your judgment.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">4. Cost Management</h3>
                      <p className="text-gray-700">
                        <strong>Challenge:</strong> Legal costs can spiral out of control.<br/>
                        <strong>Our Solution:</strong> We provide transparent fee structures and cost-benefit analyses at every stage, advising settlement when it is financially more prudent than continued litigation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Pre-Litigation Strategy */}
                <section id="strategy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Importance of Pre-Litigation Strategy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many cases are won or lost before they even reach the courtroom. A solid pre-litigation strategy is the foundation of success. At AMA Legal Solutions, we emphasize:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                      <div>
                        <strong>Evidence Preservation:</strong> We guide clients on collating and preserving critical evidence (emails, contracts, chats) that might be lost over time.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                      <div>
                        <strong>Risk Assessment:</strong> We conduct a thorough SWOT analysis of your case to identify strengths, weaknesses, and potential risks.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                      <div>
                        <strong>Demand Letters:</strong> A well-drafted legal notice can often compel the other party to settle without litigation, saving time and money.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                      <div>
                        <strong>Forum Selection:</strong> Choosing the right court or tribunal (e.g., NCLT vs. Civil Court) can significantly impact the speed and outcome of the case.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Specialized Tribunals */}
                <section id="tribunals" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Tribunals Representation</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Apart from traditional courts, India has established various quasi judicial bodies to handle specific types of disputes efficiently. We have specialized teams for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">NCLT / NCLAT</span>
                      <span className="text-gray-700">Company Law & Insolvency</span>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">DRT / DRAT</span>
                      <span className="text-gray-700">Debt Recovery & Banking</span>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">RERA</span>
                      <span className="text-gray-700">Real Estate Regulatory Authority</span>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">CAT / SAT</span>
                      <span className="text-gray-700">Administrative & Securities Tribunals</span>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">NGT</span>
                      <span className="text-gray-700">National Green Tribunal</span>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] font-bold mr-3">Consumer Forums</span>
                      <span className="text-gray-700">Consumer Disputes Redressal</span>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the right lawyer can make the difference between winning and losing. Here is why we are the preferred choice for litigation in India:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🧠</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Thinking</h3>
                      <p className="text-gray-600">We don't just follow procedure; we design legal strategies that anticipate the opponent's moves and maximize your advantage.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Deep Expertise</h3>
                      <p className="text-gray-600">Our team comprises experts in various fields, ensuring that your case is handled by a specialist, not a generalist.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client Partnership</h3>
                      <p className="text-gray-600">We view ourselves as your partners. We keep you informed at every step and work collaboratively towards your goals.</p>
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
                        "AMA Legal Solutions handled our property dispute with exceptional skill. Their strategic approach in the High Court led to a favorable judgment after years of deadlock. Highly recommended for complex civil litigation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">Real Estate Developer, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We engaged them for a corporate commercial dispute. Their team was thorough, professional, and very aggressive in protecting our interests. The settlement we reached was far better than we anticipated."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anita Desai</p>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Fight for Your Rights?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let legal disputes overwhelm you. Get the expert representation you deserve with AMA Legal Solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Schedule Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Strategic • Results-Driven
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to a senior litigation lawyer today.
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
                    Book Appointment
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/criminal-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Criminal Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Real Estate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/drafting" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Legal Drafting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                  </ul>
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