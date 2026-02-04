import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Best Advocate Near Me",
      "item": "https://amalegalsolutions.com/best-advocate-near-me"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Advocate Near Me: Expert Legal Help in India",
  "description": "Looking for the best advocate near you? AMA Legal Solutions provides expert legal services in civil, criminal, family, and corporate law across India. Consult with top-rated lawyers today.",
  "image": "https://amalegalsolutions.com/newAssets/hero-bg.jpg",
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
  "datePublished": "2024-02-04",
  "dateModified": "2024-02-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/best-advocate-near-me"
  }
};

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Services - Best Advocate Near Me",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  }
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
    canonical: 'https://amalegalsolutions.com/best-advocate-near-me',
  },
};

export default function BestAdvocatePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-need-best", title: "Why You Need the Best" },
    { id: "our-expertise", title: "Our Legal Expertise" },
    { id: "family-law", title: "Family & Divorce Law" },
    { id: "criminal-law", title: "Criminal Defense" },
    { id: "property-law", title: "Property & Real Estate" },
    { id: "corporate-law", title: "Corporate & Business" },
    { id: "debt-recovery", title: "Debt & Loan Settlement" },
    { id: "choosing-lawyer", title: "How to Choose" },
    { id: "service-cities", title: "Cities We Serve" },
    { id: "faqs", title: "FAQs" },
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
        {/* Hero Section */}
        <div className="relative bg-[#30261C] text-white">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Best <span className="text-[#D2A02A]">Advocate Near Me</span>: <br className="hidden md:block"/> Expert Legal Solutions
            </h1>
            <p className="text-lg md:text-2xl mb-10 md:mb-14 max-w-4xl mx-auto text-gray-100">
              Navigate the complex legal landscape of India with the help of top-rated advocates. 
              From civil disputes to criminal defense, we provide specialized expertise tailored to your needs.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg md:text-xl">
                Get a Free Consultation Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-10 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-28 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Table of Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-14 rounded-3xl shadow-md space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Finding the Right Legal Partner in India</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    When life presents unexpected legal challenges, the first question on everyone's mind is usually: "Where can I find the best advocate near me?" Legal issues, whether they are related to personal disputes, business matters, or criminal accusations, can be life-altering. In a vast and diverse country like India, the legal system is often seen as a labyrinthine structure that requires a seasoned guide to navigate.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Choosing an advocate is not just about finding someone who knows the law; it is about finding a partner who understands your unique situation and is committed to protecting your interests. At AMA Legal Solutions, we bridge the gap between complex legal requirements and accessible, expert representation. We provide a platform where excellence meets empathy, ensuring that every client receives the highest standard of legal care.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed text-gray-700">
                    Across India, from the bustling streets of Mumbai’s financial district to the judicial heart of Delhi, people seek reliable legal advice to protect their assets, families, and reputations. Our mission is to simplify this search. By understanding the local nuances of various High Courts and district courts, our network of advocates offers localized expertise with a national standard of professional ethics.
                  </p>
                </section>

                {/* Why You Need the Best */}
                <section id="why-need-best" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">The Critical Importance of Quality Advocacy</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Success in any legal matter often hinges on the quality of advocacy. A professional advocate does far more than just appear in court; they strategize, research, negotiate, and provide a buffer between you and the adversities of litigation. When you search for the best-rated lawyer, you are looking for someone who can anticipate the opponent's moves and prepare a robust defense or claim.
                  </p>
                  <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-6 md:p-10 my-8 rounded-r-2xl shadow-inner">
                    <p className="text-lg md:text-2xl text-gray-800 italic font-medium">
                      "Legal representation is not merely about reciting statutes; it is about the art of persuasion and the precision of strategy."
                    </p>
                  </div>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    In India, where court proceedings can occasionally span several years, the right advocate can help expedite matters through mediation or by filing well-timed applications. They ensure that all procedural requirements are met, preventing cases from being dismissed on technicalities. Moreover, a local advocate understands the temperament of the local bench and the customary practices of the specific court, which can be an invaluable advantage.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Whether you are dealing with a complex corporate merger or a sensitive child custody battle, the stakes are undeniably high. A minor error in a legal document or a missed deadline can lead to irreparable damage. Professional advocates bring a level of scrutiny that guarantees every detail is accounted for, providing you with the peace of mind you deserve during stressful times.
                  </p>
                </section>

                {/* Our Legal Expertise */}
                <section id="our-expertise" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">A Multi-Disciplinary Approach to Law</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-8 text-gray-700">
                    Law is not a monolithic entity. It is a vast field divided into numerous specializations, each requiring its own unique set of skills and knowledge. At AMA Legal Solutions, we do not believe in a "one size fits all" approach. Instead, we offer specialized departments managed by experts in their respective fields.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#D2A02A] hover:bg-[#fffcf5] transition-all transform hover:-translate-y-2 shadow-sm">
                      <div className="text-5xl mb-6">🏛️</div>
                      <h3 className="font-bold text-2xl mb-4 text-gray-900">Civil Litigation</h3>
                      <p className="text-gray-600 text-lg">Managing disputes related to contracts, compensation, property, and civil rights with strategic precision.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#D2A02A] hover:bg-[#fffcf5] transition-all transform hover:-translate-y-2 shadow-sm">
                      <div className="text-5xl mb-6">⚖️</div>
                      <h3 className="font-bold text-2xl mb-4 text-gray-900">Criminal Defense</h3>
                      <p className="text-gray-600 text-lg">Protecting your liberty and reputation through aggressive defense and thorough investigative work.</p>
                    </div>
                  </div>
                </section>

                {/* Family Law */}
                <section id="family-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Family Law and Divorce Advocacy</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Matters of the heart and home require more than just legal knowledge; they require sensitivity and discretion. Family law disputes, including divorce, child custody, and alimony, are often the most emotionally draining experiences a person can go through. The best family lawyer near you is one who prioritizes the well-being of the family while ensuring that your legal rights are not compromised.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Our team of matrimonial advocates specializes in both contested and mutual consent divorces. We work towards amicable settlements through mediation whenever possible, reducing the trauma for all parties involved, especially children. In cases where settlement is not an option, we provide rigorous representation to ensure fair division of assets and appropriate maintenance.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Additionally, we handle matters under the Hindu Marriage Act, the Special Marriage Act, and other personal laws applicable in India. Whether it is filing for restitution of conjugal rights or seeking a decree of nullity, our practitioners bring extensive experience to the table, helping you navigate the Family Courts with confidence and dignity.
                  </p>
                </section>

                {/* Criminal Defense */}
                <section id="criminal-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Criminal Defense and Fundamental Rights</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Being accused of a crime is a harrowing experience that can jeopardize your future. In such situations, speed and expertise are of the essence. A criminal defense advocate acts as your shield against the vast machinery of the state. They ensure that your fundamental rights, as guaranteed by the Constitution of India, are protected at every stage of the legal process.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    From seeking anticipatory bail to representing you during trial, our criminal law team handles a wide range of cases, including white-collar crimes, cyber offenses, and serious IPC violations. We meticulously examine the evidence, challenge the prosecution's narrative, and build a defense based on hard facts and legal precedents.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    We understand that a criminal charge involves more than just a potential sentence; it involves your reputation and social standing. Our advocates maintain strict confidentiality and provide proactive legal advice to prevent further complications. Whether you are dealing with a summons, an FIR, or an ongoing investigation, having the best criminal lawyer by your side is non-negotiable.
                  </p>
                </section>

                {/* Property & Real Estate */}
                <section id="property-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Property and Real Estate Legal Services</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Real estate is often the most significant investment an individual or a business will ever make. However, the property landscape in India is fraught with legal complexities, from title disputes to registration issues. A property advocate ensures that your investment is secure and that you are not being misled by developers or fraudulent sellers.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Our services include comprehensive title verification, drafting of sale deeds, lease agreements, and power of attorney. We also specialize in RERA (Real Estate Regulatory Authority) complaints, helping homebuyers get justice against unscrupulous builders. If you are facing an illegal encroachment or a dispute over ancestral property, our seasoned litigation team can help restore your rights through the appropriate civil channels.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    With the rising number of property frauds, it is essential to have a legal expert perform due diligence before any transaction. We check for encumbrances, pending litigation, and verify all development permissions from local authorities. This proactive approach saves our clients from years of costly litigation and ensures a smooth transfer of ownership.
                  </p>
                </section>

                {/* Corporate Law */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Corporate and Business Legal Solutions</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    In the competitive world of business, legal compliance is the foundation of sustainability. From startups to established corporations, every entity needs a legal partner to manage contracts, protect intellectual property, and handle regulatory filings. Our corporate advocates act as strategic advisors, helping you navigate the Companies Act and other commercial laws with ease.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    We assist in company incorporation, drafting of partnership deeds, and managing shareholder agreements. Our expertise also extends to mergers and acquisitions, where we perform thorough legal audits and facilitate smooth transitions. In the event of commercial disputes, we offer robust arbitration and litigation services to protect your business interests and minimize financial disruption.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Intellectual Property is another key focus area. We help businesses register their trademarks, copyrights, and patents, ensuring that their brand identity and innovations are legally protected across India and internationally. By staying ahead of regulatory changes, we ensure that your business remains compliant and resilient in a dynamic market environment.
                  </p>
                </section>

                {/* Debt Recovery and Loan Settlement */}
                <section id="debt-recovery" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">Debt Management and Loan Settlement</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The burden of debt can be overwhelming, especially when it leads to harassment by recovery agents. At AMA Legal Solutions, we specialize in helping individuals and businesses regain their financial freedom through legal debt settlement. We negotiate with banks and financial institutions to reach a One Time Settlement (OTS), allowing you to close your accounts for a fraction of the outstanding amount.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Our advocates are experts in RBI guidelines and the Fair Practice Code for lenders. We stop illegal harassment by handling all communications with recovery agencies and ensuring that your rights are respected. Whether it is a credit card debt, a personal loan, or a small business loan, we provide a structured legal path to resolve the matter and repair your financial standing.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    We believe that every financial crisis has a solution. By analyzing your income status and valid financial hardships, we build a strong case for settlement that lenders cannot ignore. This process not only settles the debt but also puts an end to the psychological stress of ongoing defaults and collection calls.
                  </p>
                </section>

                {/* Choosing the Best Lawyer */}
                <section id="choosing-lawyer" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4 underline-offset-8">How to Choose the Best Advocate Near You</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The choice of an advocate can make or break your case. When searching for a legal professional, consider factors beyond just their office location. Experience in the relevant field of law is the most critical factor. An advocate who primarily handles property cases might not be the best choice for a criminal matter.
                  </p>
                  <ul className="list-disc pl-8 space-y-4 text-gray-700 text-lg md:text-xl mb-8">
                    <li><strong>Track Record:</strong> Look for an advocate with a proven history of successfully handling cases similar to yours.</li>
                    <li><strong>Transparent Communication:</strong> The best advocates explain complex legal terms in simple language and keep you updated on case progress.</li>
                    <li><strong>Fee Structure:</strong> Ensure that the billing process is clear from the start, with no hidden charges.</li>
                    <li><strong>Availability:</strong> A lawyer who is too busy to answer your queries might not provide the personalized attention your case requires.</li>
                  </ul>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we pride ourselves on meeting all these criteria. Our practitioners are selected for their combination of legal acumen and dedication to client service. We encourage prospective clients to have an initial consultation to gauge the compatibility and expertise of the advocate before making a commitment.
                  </p>
                </section>

                {/* Service Cities */}
                <section id="service-cities" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Serving Every Corner of India</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-8 text-gray-700">
                    Our digital-first approach allows us to serve clients in every major city across India. We combine local court expertise with a centralized management system to provide seamless legal services.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Delhi NCR</h4>
                      <p className="text-xs text-gray-500">Legal Capital</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Mumbai</h4>
                      <p className="text-xs text-gray-500">Financial Hub</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Bangalore</h4>
                      <p className="text-xs text-gray-500">Tech City</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Hyderabad</h4>
                      <p className="text-xs text-gray-500">Pharma & IT</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Pune</h4>
                      <p className="text-xs text-gray-500">Education Hub</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Chennai</h4>
                      <p className="text-xs text-gray-500">Gateway to South</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Kolkata</h4>
                      <p className="text-xs text-gray-500">Cultural Capital</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Ahmedabad</h4>
                      <p className="text-xs text-gray-500">Industrial Center</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Jaipur</h4>
                      <p className="text-xs text-gray-500">Pink City</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900">Chandigarh</h4>
                      <p className="text-xs text-gray-500">Modern Urban Hub</p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32 pt-10 border-t-2 border-gray-100">
                  <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                  <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed pl-12 border-l-2 border-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#30261C] to-[#4a3b2a] rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D2A02A]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-10">Get Expert Legal Counsel Locally</h2>
                    <p className="text-lg md:text-2xl opacity-90 mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                      Don't let legal uncertainty cloud your future. Speak to the best advocate in your city today. 
                      Professional, transparent, and result-oriented legal services are just a click away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-white hover:text-[#30261C] text-white font-bold py-5 px-10 md:py-6 md:px-20 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl w-full sm:w-auto">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-10 md:py-6 md:px-20 rounded-full transition-all text-xl w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              {/* Main CTA Card */}
              <div className="bg-gradient-to-br from-[#30261C] to-[#251e16] p-8 rounded-[2rem] shadow-xl border border-white/5">
                <h3 className="text-2xl font-bold text-[#D2A02A] mb-6">Need Legal Help Immediately?</h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed">
                  Connect with our top-rated legal experts for a comprehensive consultation today.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-lg">
                    Speak to an Advocate
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-xl font-bold hover:bg-[#D2A02A] hover:text-white transition-all transform hover:scale-105">
                    Schedule Callback
                  </Link>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Our Specialized Areas</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/loan-settlement" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/civil" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      Civil Litigation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/criminal-law" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      Criminal Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/banking-and-finance" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      Banking & Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/intellectual-property-rights" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors text-lg">
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D2A02A] mr-3 transition-colors"></span>
                      IPR & Trademark
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
