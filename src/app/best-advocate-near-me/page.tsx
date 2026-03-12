import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Review data for rendering and Schema
const reviews = [
  {
    author: "Rajesh Khanna",
    dateValue: "2024-01-15",
    reviewBody: "Exceptional legal advice on a complex property dispute in Delhi. The team at AMA Legal Solutions was thorough, professional, and helped me resolve the matter through strategic mediation, saving me years of litigation.",
    ratingValue: 5,
    location: "New Delhi"
  },
  {
    author: "Priya Sharma",
    dateValue: "2024-01-22",
    reviewBody: "I was struggling with bank harassment for a loan I couldn't pay due to medical emergencies. Their advocates negotiated a fair OTS for me. They are truly the best advocates for loan settlement.",
    ratingValue: 5,
    location: "Mumbai"
  },
  {
    author: "Anil Deshmukh",
    dateValue: "2024-02-01",
    reviewBody: "Highly skilled criminal defense lawyers. They helped our family during a very difficult time with an anticipatory bail application. Their knowledge of the CrPC is impressive.",
    ratingValue: 5,
    location: "Pune"
  },
  {
    author: "Meera Iyer",
    dateValue: "2024-02-10",
    reviewBody: "Secured our trademark registration in record time. The IPR team is very knowledgeable and kept us updated at every step of the process. Excellent corporate legal services.",
    ratingValue: 5,
    location: "Bengaluru"
  },
  {
    author: "Sanjeev Gupta",
    dateValue: "2024-02-15",
    reviewBody: "The best experience with civil litigation. They handled my partition suit with great sensitivity and technical precision. I highly recommend their legal services for family matters.",
    ratingValue: 5,
    location: "Chandigarh"
  }
];

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I find the best advocate near me?",
    answer: "Finding the best advocate requires looking for professional expertise, relevant experience, and clear communication. AMA Legal Solutions simplifies this process by connecting you with top-rated lawyers who specialize in your specific legal needs, whether it's civil, criminal, or corporate law."
  },
  {
    question: "What are the charges for a legal consultation in India?",
    answer: "Legal consultation fees vary based on the advocate's experience and the complexity of the case. At AMA Legal Solutions, we offer transparent pricing and initial consultations to help you understand your legal position without any hidden costs."
  },
  {
    question: "Do you have advocates for divorce and family matters?",
    answer: "Yes, we have a specialized team of family law advocates who handle divorce, child custody, alimony, and property division with the utmost sensitivity and professionalism. We serve clients in all major Indian cities."
  },
  {
    question: "Can an advocate help me with bank harassment and loan settlement?",
    answer: "Absolutely. Our legal experts are highly experienced in negotiating with banks for One Time Settlements (OTS) and protecting clients from illegal harassment by recovery agents, ensuring your rights are upheld under RBI guidelines."
  },
  {
    question: "What documents should I carry for my first meeting with a lawyer?",
    answer: "You should bring all documents related to your case, such as contracts, notices from courts or banks, police reports, and any correspondence. Having a clear timeline of events also helps the advocate provide better advice."
  },
  {
    question: "How long does a typical civil case take in India?",
    answer: "The duration of a civil case depends on its nature and the court's backlog. However, with the right legal strategy and proactive representation from skilled advocates, many matters can be resolved through mediation or faster court proceedings."
  },
  {
    question: "Is it possible to consult an advocate online?",
    answer: "Yes, AMA Legal Solutions provides digital legal services, including online consultations via video calls and email. This allows you to get expert legal advice from the comfort of your home, regardless of your location."
  },
  {
    question: "What is the difference between a lawyer and an advocate?",
    answer: "While 'lawyer' is a general term for someone trained in law, an 'advocate' is a lawyer who is registered with a Bar Council and is authorized to represent clients in a court of law. All our practitioners are registered advocates."
  },
  {
    question: "Do you provide legal assistance for property disputes?",
    answer: "Yes, we handle property-related legal matters, including title verification, documentation, builder-buyer disputes, and RERA complaints. Our property advocates ensure your investments are legally secure."
  },
  {
    question: "How can I check the status of my case?",
    answer: "Our team provides regular updates on your case progress. Additionally, most Indian courts have online portals (e-Courts) where you can track the case status using your CNR number or filing details."
  },
  {
    question: "What is the importance of a legal notice?",
    answer: "A legal notice is a formal communication to an individual or entity, informing them of your intention to undertake legal proceedings. It often settles disputes without going to court by providing a final opportunity for resolution."
  },
  {
    question: "Can I switch my advocate in middle of a case?",
    answer: "Yes, you have the right to change your legal representation at any time. You will need to obtain a No Objection Certificate (NOC) from your current advocate and file it with the court along with the new vakalatnama."
  },
  {
    question: "What is a Vakalatnama?",
    answer: "A Vakalatnama is a document by which a client authorizes an advocate to represent them in a court of law. It is a power of attorney specifically for legal proceedings and is filed in the court where the case is pending."
  },
  {
    question: "How is alimony calculated in India?",
    answer: "Alimony depends on various factors including the income of both spouses, their lifestyle, age, duration of marriage, and any children. Courts aim to ensure the dependent spouse maintains a standard of living similar to what they had during the marriage."
  },
  {
    question: "What is the process for trademark registration?",
    answer: "Trademark registration involves a search for similar marks, filing an application with the IPR office, examination by the registrar, publication in the journal for objections, and finally, issuance of the registration certificate."
  },
  {
    question: "Are prenuptial agreements valid in India?",
    answer: "Currently, prenuptial agreements are not legally binding in Indian courts as marriage is considered a sacrament, not a contract. However, they can serve as evidence of intent or assist in establishing the financial status of parties during a divorce."
  },
  {
    question: "What should I do if my cheque bounces?",
    answer: "If a cheque is dishonoured, you must send a legal notice to the drawer within 30 days of receiving the memo. If payment is not made within 15 days of the notice, you can file a criminal complaint under Section 138 of the NI Act."
  },
  {
    question: "What is public interest litigation (PIL)?",
    answer: "A PIL is a legal action initiated in a court of law for the enforcement of public interest or general social welfare. It can be filed by any citizen or organization on behalf of those whose rights have been violated."
  },
  {
    question: "Can an advocate help with cybercrime cases?",
    answer: "Yes, specialized cyber law advocates provide assistance in cases of online fraud, data breaches, cyber bullying, and identity theft. They help in filing complaints with the Cyber Cell and represent you in relevant proceedings."
  },
  {
    question: "How do I verify a property's title before buying?",
    answer: "Title verification involves checking the Chain of Deeds for the last 30 years, verifying encumbrances, ensuring taxes are paid, and checking if the property is subject to any pending litigation or acquisition by the government."
  }
];

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
      "name": "Best Advocate Near Me",
      "item": "https://www.amalegalsolutions.com/best-advocate-near-me"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Advocate Near Me: Expert Legal Help in India",
  "description": "Looking for the best advocate near you? AMA Legal Solutions provides expert legal services in civil, criminal, family, and corporate law across India. Consult with top-rated lawyers today.",
  "image": "https://www.amalegalsolutions.com/newAssets/hero-bg.jpg",
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
  "datePublished": "2024-02-04",
  "dateModified": "2024-02-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.amalegalsolutions.com/best-advocate-near-me"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Services - Best Advocate Near Me",
  "description": "Professional legal consultation and representation across India by highly rated advocates.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": rev.author
    },
    "datePublished": rev.dateValue,
    "reviewBody": rev.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rev.ratingValue,
      "bestRating": "5",
      "worstRating": "1"
    }
  }))
};

export const metadata = {
  title: "Best Advocate Near Me | Expert Lawyers in India | AMA Legal Solutions",
  description: "Consult the best advocates near you for civil, criminal, family, and property law. AMA Legal Solutions offers professional legal advice across Delhi, Mumbai, Bangalore, and more.",
  keywords: [
    "best advocate near me",
    "lawyer near me",
    "top advocates in India",
    "legal consultation",
    "divorce lawyer near me",
    "criminal advocate near me",
    "property lawyer near me",
    "corporate lawyer India",
    "AMA Legal Solutions",
    "hire an advocate"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-advocate-near-me',
  },
};

export default function BestAdvocatePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-need-best", title: "Importance of Advocacy" },
    { id: "client-reviews", title: "Client Experiences" },
    { id: "our-expertise", title: "Practice Areas" },
    { id: "civil-litigation", title: "Civil Law Deep Dive" },
    { id: "family-law", title: "Matrimonial Matters" },
    { id: "criminal-law", title: "Criminal Defense" },
    { id: "property-law", title: "Real Estate Legal" },
    { id: "corporate-law", title: "Business & Company" },
    { id: "cyber-it-law", title: "Cyber & Tech Law" },
    { id: "labour-law", title: "Labour & Employment" },
    { id: "mediation-adr", title: "Mediation & ADR" },
    { id: "intellectual-property", title: "IP & Trademarks" },
    { id: "consumer-rights", title: "Consumer Protection" },
    { id: "constitutional-law", title: "Fundamental Rights" },
    { id: "international-law", title: "International Disputes" },
    { id: "environmental-law", title: "Environmental Safety" },
    { id: "legal-aid", title: "Legal Aid Services" },
    { id: "banking-ombudsman", title: "Banking Disputes" },
    { id: "legal-ethics", title: "Professional Ethics" },
    { id: "legal-procedure", title: "Case Process Guide" },
    { id: "judiciary-hierarchy", title: "Indian Court System" },
    { id: "choosing-lawyer", title: "How to Choose" },
    { id: "service-cities", title: "Pan-India Presence" },
    { id: "faqs", title: "Expanded FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Best Advocate Near Me", href: "/best-advocate-near-me" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - Scaled down 20% */}
        <div className="relative bg-[#30261C] text-white">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight">
              Best <span className="text-[#D2A02A]">Advocate Near Me</span>: <br className="hidden md:block"/> Strategic Legal Representation
            </h1>
            <p className="text-base md:text-xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-100">
              Your comprehensive guide to finding the finest legal counsel in India. 
              Protecting interests, securing rights, and delivering excellence across all legal domains.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                Book Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Scaled down) */}
            <div className="hidden lg:block sticky top-24 h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold mb-3 text-gray-900 border-b pb-2">Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-10 rounded-2xl shadow-md space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Strategic Legal Partners in the Indian Landscape</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The quest for justice often begins with a fundamental question: How can I find the best advocate near me? This search is more than just a matter of convenience; it is about securing a future where your rights are protected by the most competent hands available. In the complex legal environment of India, where legacy laws from the colonial era meet modern digital regulations, the difference between a successful outcome and a protracted struggle often boils down to the caliber of your legal advisor. The Indian legal system, with its millions of pending cases and intricate procedural requirements, demands not just a representative, but a strategist.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    At AMA Legal Solutions, we understand that legal challenges do not come with a warning. A sudden property dispute, a challenging matrimonial issue, or a surprise legal notice from a bank require immediate, expert attention. Our platform is designed to provide that critical connection, offering a curated selection of experienced advocates who are specialists in their respective fields. We have meticulously vetted our legal partners based on their track record in various High Courts and the Supreme Court, ensuring that you receive representation that is both authoritative and result-oriented.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The evolution of Indian law in recent years has been historic. From the introduction of the Insolvency and Bankruptcy Code (IBC) to the transformation of the Jammu and Kashmir legal landscape, staying updated is a full-time job. Our advocates are lifelong students of these changes, participating in national seminars and contributing to legal journals. This ensures that the advice you receive today is not just valid for the current month but is prepared for the legal shifts expected in the coming years. We help you navigate the 'Doctrine of Precedent', where past judgments of higher courts bind the lower ones, using this hierarchy to your absolute advantage.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Furthermore, the impact of technology on the Indian judiciary cannot be overstated. With 'e-Courts' and digital filing becoming the norm, an advocate must be as comfortable with a computer as they are with a law book. We lead this digital transition, providing our clients with a seamless experience where case updates and documents are just a click away. This transparency is at the core of our practice, removing the 'opacity' that has traditionally plagued the legal profession in India. By choosing the best advocate through our network, you are choosing a futuristic legal partner who uses every tool available to ensure your victory.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    From the high-tech hubs of Bengaluru to the historic courts of Kolkata, our reach is truly pan-India. We understand that local context matters, which is why we blend national standards of excellence with an intimate knowledge of local court procedures and judicial sentiments. This dual approach gives our clients a decisive advantage, ensuring that their voice is heard clearly in any forum, be it a District Court, a High Court, or the Supreme Court of India. We believe that justice delayed is justice denied, and our mission is to accelerate your path to a fair resolution using every legal avenue available.
                  </p>
                </section>

                {/* Why You Need the Best */}
                <section id="why-need-best" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">The Value of Exceptional Legal Counsel</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The impact of an exceptional advocate extends far beyond the final judgment. In many ways, the best legal counsel is like a strategist who prepares you for a long journey through uncertain terrain. In India, where litigation can sometimes take years, a professional advocate helps you manage your expectations, resources, and emotional well-being. They provide a clear roadmap, identifying the risks and rewards of every decision you make during the lifecycle of your case.
                  </p>
                  <div className="bg-[#fff9e6] border-l-6 border-[#D2A02A] p-5 md:p-8 my-6 rounded-r-xl shadow-inner text-center">
                    <p className="text-base md:text-xl text-gray-800 italic font-medium">
                      "A great advocate does not just fight for you; they empower you with the knowledge and strategy needed to prevail."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    One of the most critical roles of an advocate is that of a negotiator. A high-rated lawyer knows that the best outcome is often one achieved outside the courtroom. By using pre-litigation strategies such as formal legal notices and mediation sessions, they can often resolve disputes in a matter of weeks that would otherwise take years in court. This saves not only money but also the invaluable asset of time, allowing you to move on with your life or business without the shadow of a pending lawsuit.
                  </p>
                </section>

                {/* Client Reviews Section - NEW Visual Review Snippets */}
                <section id="client-reviews" className="scroll-mt-32 py-4">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center underline decoration-[#D2A02A] decoration-3 underline-offset-4">Success Stories & Client Reviews</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((rev, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:border-[#D2A02A] transition-all">
                        <div>
                          <div className="flex text-[#D2A02A] mb-3 text-sm">
                            {[...Array(rev.ratingValue)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-gray-700 italic mb-4 leading-relaxed">
                            "{rev.reviewBody}"
                          </p>
                        </div>
                        <div className="border-t pt-3 flex justify-between items-center text-[10px] md:text-xs">
                          <span className="font-bold text-gray-900">{rev.author}</span>
                          <span className="text-gray-500">{rev.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-xs font-medium">
                      <span className="flex text-[#D2A02A]">★★★★★</span>
                      <span className="text-gray-900">4.9/5 based on 1,250+ certified reviews</span>
                    </div>
                  </div>
                </section>

                {/* Our Legal Expertise */}
                <section id="our-expertise" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-3">A Multi-Dimensional Legal Firm</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Modern life is interconnected, and so are the legal issues that arise from it. A property dispute might have criminal implications, or a corporate disagreement might involve labour law complexities. Our firm is structured to handle this complexity by providing a full spectrum of services under one roof. Our practice areas are not just folders in a cabinet; they are specialized ecosystems managed by senior advocates who are leaders in their respective fields.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <div className="text-3xl mb-3">⚖️</div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Litigation</h4>
                      <p className="text-gray-600 text-xs">Dynamic representation across all Indian courts and tribunals.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <div className="text-3xl mb-3">💼</div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Corporate</h4>
                      <p className="text-gray-600 text-xs">Strategic advice for startups, SMEs, and large corporations.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <div className="text-3xl mb-3">🏠</div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Real Estate</h4>
                      <p className="text-gray-600 text-xs">Securing your investments with rigorous due diligence.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <div className="text-3xl mb-3">🛠️</div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Labour</h4>
                      <p className="text-gray-600 text-xs">Ensuring fairness in the workplace for both parties.</p>
                    </div>
                  </div>
                </section>

                {/* Civil Law Deep Dive */}
                <section id="civil-litigation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Advanced Civil Advocacy and Procedure</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Civil law is the bedrock of societal interactions, governing how we buy, sell, live, and work. In India, the Code of Civil Procedure (CPC) provides the framework, but the art of civil advocacy lies in its strategic application. Our practitioners are experts in various forms of civil litigation, from suits for injunctions that prevent immediate harm to complex suits for declaration of ownership. We understand that in a civil matter, the preparation of the case file is just as important as the performance in the courtroom.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We specialize in resolving high-stakes inheritance and succession disputes. When family property is involved, emotions can run high, making a cold, legal perspective necessary. We assist in the drafting of Wills and the obtaining of probate or letters of administration from the competent courts. Our team also handles partition suits, ensuring that every legal heir gets their fair and lawful share of ancestral or self-acquired property, as per the relevant personal laws like the Hindu Succession Act or the Indian Succession Act.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In the commercial sphere, we assist businesses in recovering outstanding dues through summary suits and regular recovery proceedings. We handle breach of contract cases with a focus on 'Specific Performance', ensuring that parties fulfill their legal obligations or provide appropriate compensation. Our civil team also manages tortious claims, where we seek damages for negligence, defamation, or other civil wrongs that have caused harm to your reputation or assets. By maintaining a meticulous focus on evidence and procedural compliance, we ensure that your civil rights are fully Vindicated.
                  </p>
                </section>

                {/* Family Law expanded */}
                <section id="family-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Matrimonial Excellence and Family Rights</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Matters of the family are the most sensitive parts of our practice. A matrimonial advocate at AMA Legal Solutions does more than just file papers; they provide a foundation of support during a client's most vulnerable moments. We specialize in both mutual consent and contested divorces, always striving for an outcome that allows all parties to move forward with peace. Our approach to divorce is centered on mediation and collaborative law, aiming to reduce the psychological impact on spouses and, most importantly, children.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Child custody is often the most contentious part of any family dispute. We believe that the welfare of the child is the supreme priority, a view that is also held by the Indian judiciary. Our advocates work tirelessly to create parenting plans that ensure the child's emotional and educational stability while protecting the rights of both parents. We handle matters of visitation, interim custody, and permanent guardianship with a level of care and precision that ensures long-term stability for the child's future.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In cases of domestic violence, we provide immediate legal protection and residence orders. Using the Protection of Women from Domestic Violence Act, we obtain urgent orders for protection and monetary relief. Our advocates are available for emergency situations, providing a legal shield that ensures the safety and dignity of our clients. We believe that every family deserves a safe, respectful environment, and our legal services are dedicated to making that a reality in every corner of India.
                  </p>
                </section>

                {/* Criminal Law expanded */}
                <section id="criminal-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Criminal Defense and Judicial Protection</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Being accused of a crime is an experience that can destroy a person's life and reputation in a matter of hours. In these high-stakes situations, you need a criminal defense team that is proactive, fearless, and intellectually sharp. Our criminal advocates are among the most respected in India, with a deep understanding of the Indian Penal Code (IPC) and the Code of Criminal Procedure (CrPC). We represent clients from the initial stage of an FIR to the final appeal in the Supreme Court, ensuring that the principle of "innocence until proven guilty" is strictly adhered to.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We specialize in obtaining bails, including anticipatory bail, which is critical for preventing wrongful arrest in frivolous cases. Our team is expert at identifying procedural lapses by investigative agencies that can lead to the discharge of the accused or the quashing of a malicious FIR. We also handle complex white-collar crime cases involving federal agencies like the ED, CBI, or the SFIO. Our strategic defense in these matters involves a deep dive into financial records and a thorough challenge to the prosecution's narrative.
                  </p>
                </section>

                {/* Property Law expanded */}
                <section id="property-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Real Estate Safety and Property Rights</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In India, property is often the most significant asset an individual or a family owns. Protecting this asset requires a deep understanding of land laws, revenue records, and real estate regulations. Our property advocates provide a complete suite of services designed to ensure that your land transactions are safe and your ownership is unassailable. We conduct 'Title Searches' that go back three decades, verifying the chain of ownership and ensuring there are no hidden liens, mortgages, or legal disputes that could affect your purchase.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The registration of property is a critical step that requires meticulous drafting. We assist in the preparation of Sale Deeds, Lease Deeds, and Mortgage Deeds, ensuring they are compliant with both central and state-specific laws. We also specialize in matters related to RERA (Real Estate Regulatory Authority), representing homebuyers facing project delays or deviations from the sanctioned plan. Our goal is to balance the scales in a sector that has traditionally been skewed in favor of large builders.
                  </p>
                </section>

                {/* Corporate Law expanded */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Corporate Governance and Commercial Excellence</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Business in India is a dynamic journey that requires a solid legal foundation to navigate successfully. Our corporate law department acts as a strategic partner for companies at every stage of their lifecycle. From the initial incorporation of a Private Limited Company or an LLP to the complexities of corporate restructuring, we provide the legal guidance needed to maintain compliance and facilitate growth. We understand that in business, time is money, and our team is designed to provide quick, practical solutions that allow you to focus on your core operations.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Contracts are the lifeblood of any commercial entity. We specialize in drafting, reviewing, and negotiating a wide range of agreements. Our focus is on risk mitigation; we identify potential points of failure and create legal mechanisms to resolve them before they become expensive disputes. In the area of Intellectual Property, we help businesses register and protect their Trademarks, Patents, and Copyrights, ensuring that their brand identity and innovations are safe from infringement.
                  </p>
                </section>

                {/* Cyber and IT Law expanded */}
                <section id="cyber-it-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Digital Law and Cyber Security Protection</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    As we move deeper into the digital age, the law must evolve to protect our online interactions and assets. Our cyber law practice is at the forefront of this evolution, providing expert counsel in the realm of the Information Technology Act and emerging data protection rules. We assist businesses in creating robust data privacy frameworks and provide legal audits of tech products to ensure they comply with local and international digital regulations.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Cybercrimes are a growing threat to individuals and corporations. We provide immediate legal response in cases of online financial fraud, identity theft, and cyberstalking. Our advocates work closely with technical experts to gather digital evidence that is admissible in court. We help victims file complaints with the Cyber Cell and the Adjudicating Officer under the IT Act, seeking both the prosecution of the offenders and compensation for the losses incurred.
                  </p>
                </section>

                {/* Labour and Employment Law expanded */}
                <section id="labour-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Labour Law and Employee Rights</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The relationship between employers and employees is governed by a complex web of labour laws in India. Whether you are an industrial worker or a white-collar professional, knowing your rights is essential for a fair work environment. Our labour law advocates assist in matters related to wrongful termination, unpaid wages, and violations of employment contracts. We represent clients before Labour Courts and Industrial Tribunals, seeking justice for unfair labour practices.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    For employers, we provide strategic advice on compliance with various statutes like the Factories Act and the POSH (Prevention of Sexual Harassment) Act. We help in drafting comprehensive employment manuals and separation agreements that minimize the risk of future litigation. By ensuring a legally compliant workplace, we help businesses focus on productivity and employee welfare while maintaining industrial harmony.
                  </p>
                </section>

                {/* Mediation and ADR expanded */}
                <section id="mediation-adr" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Mediation and Alternative Dispute Resolution (ADR)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In an era where court backlogs can lead to years of waiting, Mediation and Arbitration offer a faster and more confidential way to resolve disputes. Alternative Dispute Resolution (ADR) is becoming the preferred method for commercial and family matters alike. Our advocates are trained mediators and arbitrators who focus on finding common ground and reaching win-win solutions without the adversarial atmosphere of a traditional trial.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We handle domestic and international arbitration matters, representing clients before arbitration tribunals. Our experts help in drafting effective arbitration clauses in contracts, ensuring that any future disputes are handled efficiently. Mediation is particularly effective in sensitive family and partnership disputes where preserving relationships is a priority. By choosing ADR, our clients save significant time and legal fees while maintaining control over the final outcome.
                  </p>
                </section>

                {/* Intellectual Property expanded */}
                <section id="intellectual-property" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Intellectual Property Rights and Innovation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In the knowledge economy, your ideas are your most valuable assets. Intellectual Property Rights (IPR) provide the legal protection needed to ensure that your creativity and innovation are not exploited by others. Our IPR department is dedicated to helping inventors and businesses secure and monetize their intellectual assets. We handle the entire lifecycle of IPR, from the initial search and filing to the enforcement of your rights in court.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Trademarks are essential for brand identity. We assist in registering your logos and brand names, providing a legal monopoly over their use. Our team conducts comprehensive trademark searches and handles trademark opposition proceedings. For those facing infringement, we initiate 'Passing Off' actions and suits for permanent injunctions to stop unauthorized use of your trademark, ensuring your brand equity remains protected.
                  </p>
                </section>

                {/* Consumer Protection expanded */}
                <section id="consumer-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Consumer Protection and Market Fairness</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The Consumer Protection Act, 2019, is a powerful tool designed to protect buyers from being exploited by sellers and service providers. At AMA Legal Solutions, we believe in using this tool to ensure that every consumer gets what they paid for. We represent clients in cases of medical negligence, insurance claim rejections, and unfair trade practices by airlines or telecom companies.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Unfair trade practices and misleading advertisements are major challenges in the modern marketplace. We help consumers take a stand against companies that make false promises or use predatory pricing. If a service provider fails to resolve a legitimate grievance, we file a complaint before the Consumer Commission, seeking not just a refund but also significant compensation for the mental agony and litigation costs caused by their actions.
                  </p>
                </section>

                {/* Constitutional Law expanded */}
                <section id="constitutional-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Fundamental Rights and Constitutional Remedies</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The Constitution of India is the supreme law, and the fundamental rights guaranteed under it are the ultimate protection for every citizen. When the state or its agencies act in a way that violates these rights, the judiciary is our final resort. Our constitutional law practice involves the filing of Writ Petitions under Article 32 (before the Supreme Court) and Article 226 (before various High Courts). Whether it is a violation of the right to equality or a challenge to an arbitrary administrative action, we provide the highest level of advocacy.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We specialize in 'Habeas Corpus' petitions to seek the release of individuals who have been illegally detained by investigative agencies. We also file petitions for 'Certiorari' to quash orders passed by tribunals or lower authorities that have acted beyond their jurisdiction or in violation of natural justice. Our advocates are experts at constitutional interpretation, using historical context and modern precedents to build a case that challenges the misuse of power. We believe that the 'Basic Structure' of our Constitution must be protected at all costs, and our litigation is a testament to this commitment.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The power of judicial review is the cornerstone of our democracy. We handle matters relating to 'Quo Warranto', challenging the legal right of a person to hold a public office, and 'Mandamus', where we seek a court order to compel a public official to perform their legal duty. These remedies are vital for holding the executive accountable and ensuring that the rule of law prevails over arbitrary governance. Our team has handled landmark cases that have helped shape administrative law in India, providing our clients with a level of expertise that stands up to the most complex legal scrutiny.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Public Interest Litigation (PIL) is another vital aspect of our practice. We believe that the law should be a force for social good, and we represent individuals and NGOs who seek to draw the court's attention to issues affecting the general public. From protecting urban green spaces to ensuring the rights of workers in the unorganized sector, our PIL work is aimed at creating a more equitable society. By combining legal rigor with social commitment, we ensure that the promises of our Constitution are not just words on a page but a living reality for every Indian citizen.
                  </p>
                </section>

                {/* International Law & Cross-Border Disputes - NEW SECTION */}
                <section id="international-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">International Law and Cross Border Legalities</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    In an increasingly globalized world, legal issues often transcend national borders. Whether it is an international commercial contract, a cross-border family dispute, or a matter involving private international law (Conflict of Laws), expert guidance is essential. Our international law department provides a bridge between Indian statutes and global legal standards. We assist clients in navigating the complexities of international treaties, conventions, and the enforcement of foreign judgments and arbitral awards in Indian courts.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We provide specialized counsel for NRIs (Non-Resident Indians) facing legal challenges in India. From managing ancestral property disputes to handling divorce proceedings that involve assets in multiple countries, we provide a central point of contact that simplifies the process. We understand the unique challenges of coordinating legal actions across different time zones and jurisdictions, and our digital infrastructure is designed to keep our international clients informed and involved throughout their case. We also handle extradition matters and cases involving international human rights violations, providing a voice for those caught between different legal systems.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    For businesses, we provide strategic advice on international trade law, including compliance with WTO regulations and anti-dumping investigations. We help companies draft 'Choice of Law' and 'Choice of Forum' clauses that protect them in the event of an international dispute. Our advocates are experienced in the New York Convention and the Singapore Convention on Mediation, ensuring that their clients' interests are protected in any global forum. By maintaining partnership with international law firms, we offer a truly global legal service that is rooted in Indian excellence and aligned with international best practices.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We also assist in matters relating to 'Mutual Legal Assistance Treaties' (MLAT) and letters rogatory, assisting in the gathering of evidence for criminal and civil cases that have an international component. Our deep understanding of the Hague Convention on the Service Abroad of Judicial and Extrajudicial Documents ensures that all international communications are legally valid and enforceable. Whether you are an individual seeking to protect your rights abroad or a corporation expanding into the global market, AMA Legal Solutions provides the international legal backbone you need to succeed.
                  </p>
                </section>

                {/* Environmental Law expanded */}
                <section id="environmental-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Environmental Law and Sustainable Protection</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    As industrial growth continues, the protection of our environment has become a legal priority. Our environmental law practice involves representing clients before the National Green Tribunal (NGT) and various pollution control boards. We assist businesses in obtaining environmental clearances and ensuring they are compliant with statutes like the Water Act and the Air Act, believing that development and ecology can coexist responsibly.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We handle litigation related to industrial pollution and waste management regulations, helping organizations manage hazardous waste according to law. Our experts provided counsel on compensatory afforestation and the protection of wildlife habitats, ensuring that industrial projects do not come at a prohibitive cost to the planet's future and the health of local communities.
                  </p>
                </section>

                {/* Legal Aid expanded */}
                <section id="legal-aid" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Legal Aid and Accessible Justice</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Justice should not be a privilege reserved for those who can afford high fees. At AMA Legal Solutions, we are committed to making legal services accessible to all sections of society. We provide pro bono services for those from marginalized backgrounds and assist in matters referred by the Legal Services Authorities. Our advocates volunteer their time to conduct legal awareness camps, helping people understand their basic rights.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    We assist in filing applications for free legal aid in various courts, ensuring that lack of funds does not prevent anyone from presenting their case. Our team also handles matters related to social welfare schemes, ensuring that the benefits intended for the poor are correctly delivered. By bridge-building between the courtroom and the community, we fulfill our ethical obligation to ensure that the rule of law serves every individual.
                  </p>
                </section>

                {/* Banking Ombudsman expanded */}
                <section id="banking-ombudsman" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">The Banking Ombudsman and Financial Resolution</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    When you have a dispute with a bank that cannot be resolved at the branch level, the Banking Ombudsman is a vital quasi-judicial forum for resolution. We assist clients in preparation of complaints with the Ombudsman for issues such as non-disclosure of charges or unauthorized transactions. This process is often faster than traditional litigation, providing a practical way for retail bank customers to get justice.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Our experts help in articulating the 'deficiency of service' in a way that aligns with the RBI's Banking Ombudsman Scheme. We provide representation during conciliation meetings and help in challenging decisions if necessary. By understanding the operational guidelines of the RBI, we help our clients hold financial institutions to the highest standards of transparency and fairness in their commercial dealings.
                  </p>
                </section>

                {/* Legal Ethics expanded */}
                <section id="legal-ethics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Professional Ethics and the Integrity of Practice</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The legal profession is a noble one, governed by a strict code of ethics set by the Bar Council of India. Integrity is our most important asset. Every advocate at our firm is committed to the highest standards of professional conduct, ensuring that the trust placed in us by our clients is never compromised. We maintain absolute confidentiality and avoid all conflicts of interest in every matter we handle.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    Ethics also means being honest about the strengths and weaknesses of a case. We do not make false promises or encourage unnecessary litigation. Our goal is to provide the most efficient path to resolution, even if it means recommending a settlement over a multi-year trial. This transparency is what build's long-term trust and ensures that AMA Legal Solutions remains a respected name in the Indian legal market.
                  </p>
                </section>

                {/* Step-by-Step Legal Procedure */}
                <section id="legal-procedure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Guide to the Judicial Lifecycle</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While every case has its own path, understanding the general structure of a lawsuit helps in managing the journey. Here is a simplified guide to how a matter moves through the system:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Phase 1: Notice</h4>
                      <p className="text-xs md:text-sm text-gray-600">The formal demand for resolution, often the final chance to settle outside of court.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Phase 2: Filing</h4>
                      <p className="text-xs md:text-sm text-gray-600">Preparing and submitting the formal plaint or complaint to the court of jurisdiction.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Phase 3: Trial</h4>
                      <p className="text-xs md:text-sm text-gray-600">The active stage involving evidence, witness examination, and legal arguments.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Phase 4: Decree</h4>
                      <p className="text-xs md:text-sm text-gray-600">The final order of the court that decides the rights and liabilities of the parties.</p>
                    </div>
                  </div>
                </section>

                {/* Judiciary Hierarchy */}
                <section id="judiciary-hierarchy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">The Indian Court Hierarchy Explained</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The Indian judiciary is a pyramid, designed to provide multiple opportunities for review and correction. This ensure's that any error at a lower level can be corrected by a higher authority.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#D2A02A] pl-4">
                      <h4 className="font-bold text-gray-900">1. District and Sessions Courts</h4>
                      <p className="text-xs md:text-sm text-gray-600">The foundation of the system, where most cases begin. Each district has its own set of civil and criminal courts.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-4">
                      <h4 className="font-bold text-gray-900">2. High Courts of States</h4>
                      <p className="text-xs md:text-sm text-gray-600">The supreme legal authority in each state, handling complex appeals and protecting fundamental rights.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-4">
                      <h4 className="font-bold text-gray-900">3. The Supreme Court of India</h4>
                      <p className="text-xs md:text-sm text-gray-600">The final word on any legal matter in India, with its judgments binding on every other court and authority.</p>
                    </div>
                  </div>
                </section>

                {/* Choosing the Best Lawyer */}
                <section id="choosing-lawyer" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 underline decoration-[#D2A02A] decoration-3 underline-offset-4">Finding Your Ideal Legal Representative</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    The choice of an advocate is one of the most important decisions you will ever make. When you look for the best advocate near me, you are looking for a combination of deep expertise, absolute integrity, and a proven track record of success in your area of concern.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-5 text-gray-700">
                    At AMA Legal Solutions, we bridge the gap between people and the law. We provide a platform where excellence is the standard and client satisfaction is the only metric of success. We invite you to experience the difference that professional advocacy can make for your peace of mind and success.
                  </p>
                </section>

                {/* Service Cities */}
                <section id="service-cities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-3">A Presence Across Every Major Hub</h2>
                  <div className="flex flex-wrap gap-2 text-center justify-center">
                    {["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", "Indore", "Bhopal", "Gwalior", "Jabalpur", "Coimbatore", "Kochi", "Madurai", "Vishakhapatnam", "Nagpur", "Surat", "Vadodara", "Nashik", "Aurangabad", "Rajkot"].map((city) => (
                      <span key={city} className="px-3 py-1 bg-gray-100 rounded-full text-[10px] md:text-xs text-gray-500">{city}</span>
                    ))}
                  </div>
                </section>

                {/* FAQ Section (Expanded) */}
                <section id="faqs" className="scroll-mt-32 pt-8 border-t border-gray-100">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Comprehensive Legal FAQ</h2>
                  <div className="space-y-6 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="bg-[#D2A02A] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-3 mt-1 flex-shrink-0 font-bold uppercase">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-8 border-l border-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA (Scaled down) */}
                <section className="bg-gradient-to-br from-[#30261C] to-[#4a3b2a] rounded-2xl md:rounded-[3rem] p-6 md:p-14 text-center text-white relative overflow-hidden shadow-xl">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#D2A02A]">Secure Your Legal Future Today</h2>
                    <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                      Legal disputes don't solve themselves. Take the first step towards resolution by speaking to a qualified advocate in your area. Professional help is only a call away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-white hover:text-[#30261C] text-white font-bold py-3 px-8 md:py-4 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base w-full sm:w-auto">
                          Consult Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-14 rounded-full transition-all text-base w-full sm:w-auto">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar (Scaled down) */}
            <div className="hidden lg:block space-y-6 sticky top-24 h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
              <div className="bg-gradient-to-br from-[#30261C] to-[#251e16] p-5 rounded-xl shadow-xl border border-white/5">
                <h3 className="text-lg font-bold text-[#D2A02A] mb-3">Help Needed?</h3>
                <p className="text-gray-300 mb-5 text-xs leading-relaxed">
                  Speak to our legal experts from any location in India.
                </p>
                <div className="space-y-2">
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-2.5 rounded-lg font-bold hover:bg-[#b88a22] transition-all text-xs">
                    Quick Call
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-2.5 rounded-lg font-bold hover:bg-[#D2A02A] hover:text-white transition-all text-xs">
                    Message Us
                  </Link>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">Practice Areas</h3>
                <ul className="space-y-2.5">
                  {["Loan Settlement", "Civil Litigation", "Criminal Law", "Corporate Law", "Intellectual Property Rights"].map((item) => (
                    <li key={item}>
                      <Link href={`/services/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-xs">
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-2"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
