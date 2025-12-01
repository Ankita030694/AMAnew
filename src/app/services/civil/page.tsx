import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What does a civil lawyer do in India?",
    answer: "A civil lawyer in India represents individuals, businesses, or government entities in legal disputes that are non-criminal in nature. Their primary role is to advocate for their client's rights in matters such as property disputes, breach of contract, family law issues, and torts. They draft legal documents, file lawsuits (plaints), represent clients in court hearings, negotiate settlements, and provide legal advice to prevent future litigation. Their goal is to achieve a favorable resolution, whether through a court judgment or an out-of-court settlement."
  },
  {
    question: "How much does it cost to hire a civil lawyer in India?",
    answer: "The cost of hiring a civil lawyer in India varies significantly based on the complexity of the case, the lawyer's experience, and the location of the court. Fees can range from a few thousand rupees for a consultation to several lakhs for representing a case in the High Court or Supreme Court. Some lawyers charge a flat fee for the entire case, while others charge per hearing. At AMA Legal Solutions, we believe in transparent pricing and offer cost-effective legal packages tailored to your specific needs."
  },
  {
    question: "What is the difference between civil law and criminal law?",
    answer: "The main difference lies in the nature of the offense and the punishment. Civil law deals with disputes between individuals or organizations where the aggrieved party seeks compensation (damages) or specific performance (e.g., fulfilling a contract). Examples include property disputes and divorce. Criminal law deals with offenses against the state or society, such as theft or assault, where the punishment involves fines, imprisonment, or both. In civil cases, the burden of proof is usually 'preponderance of probability,' whereas in criminal cases, it is 'beyond reasonable doubt.'"
  },
  {
    question: "How long does a civil case take in India?",
    answer: "Civil cases in India can be time-consuming, often taking anywhere from 2 to 5 years or even longer to reach a final judgment in the lower courts. This duration depends on factors like the complexity of the case, the backlog of the specific court, and procedural delays. However, with an experienced civil lawyer from AMA Legal Solutions, we strive to expedite the process by filing timely applications, ensuring proper evidence presentation, and exploring alternative dispute resolution mechanisms like mediation to resolve the matter faster."
  },
  {
    question: "Can I settle a civil dispute out of court?",
    answer: "Yes, settling a civil dispute out of court is not only possible but often encouraged by the judiciary to reduce the burden on courts. Methods such as arbitration, mediation, and conciliation are effective ways to resolve disputes amicably. An out-of-court settlement saves time, money, and emotional stress. Our civil lawyers are skilled negotiators who can help you reach a fair settlement agreement that protects your interests without the need for a prolonged trial."
  },
  {
    question: "What documents are required to file a civil suit?",
    answer: "To file a civil suit, you typically need documents that prove your claim. This includes the cause of action (the reason for the lawsuit), proof of identity, and relevant evidence such as contracts, property deeds, bank statements, email correspondence, and legal notices sent to the opposing party. A Vakalatnama (power of attorney) authorizing your lawyer to represent you is also mandatory. Our team assists you in compiling and verifying all necessary documents to build a strong case."
  },
  {
    question: "What is a legal notice and is it mandatory?",
    answer: "A legal notice is a formal communication sent to the opposing party, warning them of legal action if they do not fulfill a specific demand (e.g., paying a debt or vacating a property). In many civil cases, sending a legal notice is a mandatory first step before filing a lawsuit. It gives the other party a chance to resolve the dispute without litigation. Even where not strictly mandatory, it is a strategic move to establish your bona fides and intention to seek legal remedy."
  },
  {
    question: "Do you handle property disputes?",
    answer: "Yes, property disputes are a core area of our practice. We handle cases related to title suits, partition of ancestral property, landlord-tenant disputes, illegal possession, and specific performance of sale agreements. Our civil lawyers have in-depth knowledge of the Transfer of Property Act, Rent Control Acts, and local land laws, ensuring that your property rights are vigorously defended in court."
  },
  {
    question: "Can you represent me in the High Court or Supreme Court?",
    answer: "Absolutely. AMA Legal Solutions has a dedicated team of senior advocates and litigators who practice in District Courts, High Courts across various states, and the Supreme Court of India. Whether you are filing an appeal against a lower court order or initiating a writ petition, we have the expertise and standing to represent you at the highest levels of the Indian judiciary."
  },
  {
    question: "What is an injunction order?",
    answer: "An injunction is a court order that either requires a person to do something or prohibits them from doing something. In civil cases, temporary injunctions are often sought to maintain the status quo while the case is pending (e.g., stopping someone from selling a disputed property). A permanent injunction is granted as a final relief at the end of the trial. We help clients obtain necessary injunctions to prevent immediate harm to their rights or property."
  },
  {
    question: "How do I check the status of my civil case?",
    answer: "You can check the status of your civil case online through the e-Courts Services portal or app using your case number (CNR number). Alternatively, your lawyer will keep you updated on the proceedings, next hearing dates, and any orders passed by the court. At AMA Legal Solutions, we maintain proactive communication with our clients, providing regular updates so you are never left in the dark about your case's progress."
  },
  {
    question: "What is the limitation period for filing a civil suit?",
    answer: "The Limitation Act, 1963, prescribes specific time limits for filing different types of civil suits. For example, the limitation period for a suit for recovery of money is generally 3 years from the date the debt became due. For possession of immovable property, it is often 12 years. If you fail to file within this period, your suit may be dismissed as time-barred. It is crucial to consult a lawyer immediately to ensure you do not lose your right to sue due to delay."
  },
  {
    question: "Can I change my lawyer during a case?",
    answer: "Yes, you have the right to change your lawyer at any stage of the case if you are unsatisfied with their services. You will need to obtain a 'No Objection Certificate' (NOC) from your current lawyer before engaging a new one. If the lawyer refuses to give an NOC without valid reason, you can approach the court for permission to change counsel. We often take over cases where clients feel their previous representation was inadequate."
  },
  {
    question: "What happens if the defendant does not appear in court?",
    answer: "If the defendant fails to appear in court despite being duly served with the summons, the court may proceed 'ex-parte' against them. This means the court will hear only the plaintiff's side and may pass a judgment in your favor based on the evidence you present. However, the defendant can later apply to set aside the ex-parte order if they can prove they had a valid reason for non-appearance."
  },
  {
    question: "Do you provide online legal consultation?",
    answer: "Yes, we understand that visiting a lawyer's office is not always convenient. We offer detailed online legal consultations via video call or phone. You can discuss your case, share documents securely, and get expert legal advice from the comfort of your home. Our online services are designed to be as effective and comprehensive as in-person meetings."
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
      "name": "Civil Lawyers",
      "item": "https://amalegalsolutions.com/services/civil"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Civil Lawyers in India: Expert Legal Representation for Civil Disputes",
  "description": "Looking for top civil lawyers in India? AMA Legal Solutions offers expert legal services for property disputes, family law, contracts, and civil litigation. Get a free consultation.",
  "image": "https://amalegalsolutions.com/services/civil-law.png",
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
  "name": "Civil Legal Services",
  "image": "https://amalegalsolutions.com/services/civil-law.png",
  "description": "Professional civil law services in India.",
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
        "name": "Amit Verma"
      },
      "reviewBody": "I was involved in a complex property dispute for years. AMA Legal Solutions handled my case with such professionalism and expertise that we won the case in the High Court. Their civil lawyers are truly the best."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "Excellent service for my breach of contract case. They explained every step of the legal process clearly and achieved a settlement that was better than I expected. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Civil Lawyers in India | Top Civil Litigation Services & Legal Advice",
  description:
    "Need expert civil lawyers in India? AMA Legal Solutions provides top-tier legal representation for property disputes, family law, contract breaches, and more. Secure your rights today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/civil',
  },
  openGraph: {
    title: "Civil Lawyers in India | Top Civil Litigation Services & Legal Advice",
    description: "Need expert civil lawyers in India? AMA Legal Solutions provides top-tier legal representation for property disputes, family law, contract breaches, and more.",
    url: "https://amalegalsolutions.com/services/civil",
    type: "website",
    images: [
      {
        url: "/services/civil-law.png",
        width: 1200,
        height: 630,
        alt: "Civil Lawyers in India",
      },
    ],
  },
};

export default function CivilPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-civil-law", title: "What is Civil Law?" },
    { id: "areas-of-practice", title: "Areas of Practice" },
    { id: "civil-process", title: "Civil Litigation Process" },
    { id: "role-of-lawyer", title: "Role of a Civil Lawyer" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Civil Lawyers", href: "/services/civil" },
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
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Secure Your Rights with Expert <span className="text-[#D2A02A]">Civil Lawyers in India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal representation for property disputes, contract breaches, family matters, and more. We fight for your justice with strategy and dedication.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get Expert Legal Advice
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Civil Disputes in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Civil law is the backbone of a structured society, governing the interactions and conflicts between individuals, organizations, and entities. In a country as vast and diverse as India, civil disputes are commonplace, ranging from property disagreements within families to complex contractual breaches between corporations. These disputes, while not criminal in nature, can have profound implications on your financial stability, personal relationships, and peace of mind.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand that every civil case is unique and carries its own set of emotional and financial burdens. Whether you are fighting for your rightful share in an ancestral property, seeking justice for a breach of trust, or navigating the complexities of a divorce, you need more than just a lawyer; you need a strategic partner. Our team of expert <strong>civil lawyers in India</strong> is dedicated to providing you with robust legal representation that is both ethical and effective.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The Indian judicial system can be intimidating with its procedural intricacies and delays. However, with the right legal counsel, you can navigate this maze with confidence. We believe in a results-oriented approach, prioritizing out-of-court settlements where possible to save you time and money, while being fully prepared to fight aggressively in court to protect your rights.
                  </p>
                </section>

                {/* What is Civil Law */}
                <section id="what-is-civil-law" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Civil Law?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Civil law is the body of law that deals with the private rights of individuals and provides remedies for civil wrongs, distinct from criminal proceedings."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Civil law in India is primarily governed by the <strong>Code of Civil Procedure, 1908 (CPC)</strong>, which lays down the procedural rules for civil litigation. Unlike criminal law, which focuses on punishment for offenses against the state, civil law focuses on dispute resolution and compensation. The objective is to restore the aggrieved party to the position they were in before the wrong occurred.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a civil case, the person filing the suit is called the "Plaintiff," and the person against whom the suit is filed is the "Defendant." The burden of proof lies on the plaintiff to prove their case based on the "preponderance of probability," which is a lower standard than the "beyond reasonable doubt" required in criminal cases.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Characteristics of Civil Law</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Remedial Nature:</strong> The primary goal is to provide a remedy (such as damages, injunctions, or specific performance) rather than punishment.
                    </li>
                    <li>
                      <strong>Private Disputes:</strong> It deals with disputes between private parties (individuals or organizations) rather than the state prosecuting an individual.
                    </li>
                    <li>
                      <strong>Compensation:</strong> The losing party is usually ordered to pay financial compensation to the winning party for the loss or injury suffered.
                    </li>
                  </ul>
                </section>

                {/* Areas of Practice */}
                <section id="areas-of-practice" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Areas of Civil Practice</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Civil law is a broad umbrella covering various specialized fields. Our team comprises subject matter experts in each of these domains, ensuring that you get specialized advice for your specific problem.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Property Disputes</h3>
                      <p className="text-gray-700">
                        Property litigation is one of the most common types of civil cases in India. We handle Title Suits, Partition Suits for ancestral property, disputes related to wills and probate, illegal possession, and landlord-tenant conflicts. We ensure your property rights are legally secured.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Family Law</h3>
                      <p className="text-gray-700">
                        Family disputes require a sensitive yet firm legal approach. We provide representation for Divorce (mutual and contested), Child Custody, Alimony, Restitution of Conjugal Rights, and Domestic Violence cases. Our focus is on resolving these personal matters with dignity.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Contractual Disputes</h3>
                      <p className="text-gray-700">
                        Contracts are the foundation of business and personal dealings. We represent clients in cases of Breach of Contract, Specific Performance, recovery of dues, and disputes arising from commercial agreements, partnership deeds, and employment contracts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tort Claims</h3>
                      <p className="text-gray-700">
                        Torts involve civil wrongs that cause harm or loss. We handle cases related to Defamation, Negligence, Nuisance, and Trespass. If you have suffered harm due to someone else's action or inaction, we help you claim the compensation you deserve.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Consumer Protection</h3>
                      <p className="text-gray-700">
                        If you have been cheated by a seller or service provider, we help you file complaints in Consumer Commissions (District, State, or National). We fight against unfair trade practices, defective goods, and deficiency in services.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Recovery Suits</h3>
                      <p className="text-gray-700">
                        Recovering money from defaulters can be challenging. We file Summary Suits (Order 37 CPC) and ordinary money recovery suits to help you get your hard-earned money back, along with interest and legal costs.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Civil Litigation Process */}
                <section id="civil-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Civil Litigation Process in India</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the procedural steps of a civil suit can help alleviate the anxiety associated with litigation. While every case is different, the general stages of a civil suit under the CPC are as follows:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Filing of Plaint</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The process begins with the filing of a "Plaint" by the plaintiff. This written document details the facts of the case, the nature of the dispute, the cause of action, and the specific relief or compensation sought from the court.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Vakalatnama & Summons</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Along with the plaint, a "Vakalatnama" is filed, authorizing a lawyer to represent the plaintiff. Once the court admits the case, it issues "Summons" to the defendant, notifying them of the lawsuit and directing them to appear in court.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Written Statement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The defendant must file a "Written Statement" within a specified period (usually 30-90 days) replying to the allegations made in the plaint. This is their opportunity to present their defense and counter-claims.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Framing of Issues & Evidence</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The court examines the pleadings of both parties and frames the "Issues" – the specific points of dispute that need to be decided. Both parties then present their evidence, including documents and witness testimonies, which are cross-examined by the opposing counsel.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Final Arguments & Judgment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          After the evidence stage, lawyers from both sides present their final oral arguments, summarizing their case and citing relevant laws and precedents. The judge then pronounces the "Judgment" and passes a "Decree," which is the formal order of the court.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Role of Lawyer */}
                <section id="role-of-lawyer" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Critical Role of a Civil Lawyer</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Civil litigation is not just about knowing the law; it's about strategy, timing, and presentation. An experienced civil lawyer plays a multifaceted role in ensuring the success of your case.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Strategic Planning</h4>
                      <p className="text-gray-600">Developing a legal roadmap that anticipates the opponent's moves and positions your case for the best possible outcome.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Drafting Excellence</h4>
                      <p className="text-gray-600">Precision in drafting plaints, written statements, and applications is crucial. A single error in pleading can be fatal to the case.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Evidence Management</h4>
                      <p className="text-gray-600">Identifying which evidence is admissible and relevant, and presenting it effectively to substantiate your claims.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Negotiation Skills</h4>
                      <p className="text-gray-600">Many civil cases are settled out of court. A skilled lawyer negotiates from a position of strength to secure favorable terms.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    When your property, reputation, or financial interests are at stake, you cannot afford to take chances. Here is why AMA Legal Solutions is the preferred choice for civil litigation in India:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Courtroom Expertise</h3>
                      <p className="text-gray-600">Decades of combined experience representing clients in District Courts, High Courts, and the Supreme Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Detail-Oriented</h3>
                      <p className="text-gray-600">We leave no stone unturned. Our meticulous research and preparation often make the difference between winning and losing.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Cost-Effective</h3>
                      <p className="text-gray-600">We offer transparent fee structures and strive to resolve cases efficiently to minimize your legal costs.</p>
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
                        "I was involved in a complex property dispute for years. AMA Legal Solutions handled my case with such professionalism and expertise that we won the case in the High Court. Their civil lawyers are truly the best."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Verma</p>
                          <p className="text-sm text-gray-500">Business Owner, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Excellent service for my breach of contract case. They explained every step of the legal process clearly and achieved a settlement that was better than I expected. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Gupta</p>
                          <p className="text-sm text-gray-500">Corporate Executive, Mumbai</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Let Legal Disputes Drain You</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Take the first step towards justice. Our expert civil lawyers are ready to fight for your rights and secure your future.
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
                      Confidential • Legal • Effective
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior civil lawyers today.
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
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
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
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Civil Law" servicePath="civil" />
          </div>
        </div>
      </div>
    </>
  );
}
