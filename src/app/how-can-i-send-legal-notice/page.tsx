import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is a legal notice and is it mandatory?",
    answer: "A legal notice is a formal written communication between parties, usually exchanged through an advocate, that states a grievance and specifies demands to be met within a certain timeframe. While not mandatory for all civil cases, it is a statutory requirement for cases against the government (Sec 80 CPC) and for cheque bounce cases (Sec 138 NI Act). In other matters, it is highly recommended as a step to attempt an out-of-court settlement and to create a formal record."
  },
  {
    question: "Can I draft and send a legal notice without a lawyer?",
    answer: "Yes, you can legally draft and send a notice in your own capacity. However, a notice sent on a professional law firm's letterhead, like AMA Legal Solutions, carries significantly more weight. It ensures that all technical legal requirements are met, use professional language that commands attention, and demonstrates your serious intent to pursue the matter in court if unresolved."
  },
  {
    question: "What are the essential components of an effective legal notice?",
    answer: "An effective notice must include: 1. Complete details of the sender and recipient. 2. A clear chronological account of the facts (cause of action). 3. The specific legal rights being violated. 4. A definitive demand for relief (e.g., payment, apology, or performance of contract). 5. A specific grace period for compliance. 6. A warning of the legal consequences of non-compliance."
  },
  {
    question: "How long is the standard notice period for the recipient to respond?",
    answer: "The notice period vary depending on the nature of the dispute. For most commercial and property disputes, a 15-day or 30-day notice is standard. However, for lawsuits against the Government, the law mandates a two-month (60 days) notice period under Section 80 of the CPC. In cheque bounce cases, the statutory requirement is for a 15-day payment period from the date of receipt."
  },
  {
    question: "What is the best way to dispatch a legal notice to ensure it's valid?",
    answer: "The most legally sound method is through 'Registered Post with Acknowledgment Due' (RPAD) or Speed Post through India Post. This provides you with a physical receipt and an acknowledgment card signed by the recipient, which serves as indisputable proof of service in a court of law. While email and WhatsApp are increasingly accepted as supplementary service, physical post remains the gold standard."
  },
  {
    question: "What should I do if the recipient refuses to accept my legal notice?",
    answer: "If a recipient refuses a notice sent via Registered Post, the postman marks it as 'Refused.' Under Indian law, this is considered 'Deemed Service.' The court will assume the recipient had knowledge of the notice, and you can proceed with legal action after the notice period expires. Refusal does not stop your legal rights; in fact, it often strengthens your case by showing the recipient's non-cooperation."
  },
  {
    question: "What happens after I send a legal notice? What are the next steps?",
    answer: "Once the notice is delivered, the recipient may: 1. Comply with your demands (Settlement). 2. Send a reply denying the allegations (Rebuttal). 3. Request mediation or negotiation. 4. Ignore the notice. If the demands are not met and the notice period expires, your next step is to file the relevant civil suit or criminal complaint in the appropriate court."
  },
  {
    question: "How much does AMA Legal Solutions charge for drafting a legal notice?",
    answer: "We offer transparent, fixed-price drafting for common legal notices starting from Rs 3,500. This includes a consultation with an expert advocate, professional drafting on our firm's letterhead, and dispatch via Registered Post. For complex commercial or matrimonial matters, we provide specific quotes based on the detail and research required."
  },
  {
    question: "Can I send a legal notice via email or WhatsApp in India?",
    answer: "Yes, the Supreme Court of India and various High Courts have recognized the validity of service through digital means like WhatsApp and email. However, we always recommend sending a physical copy via Registered Post as well. This avoids any technical challenges regarding the validity of the digital service and provides a more traditional, formal proof for the court record."
  },
  {
    question: "How do I choose the right lawyer to send a legal notice?",
    answer: "Choose a lawyer or firm with specific expertise in the area of your dispute (e.g., property, recovery, or family law). At AMA Legal Solutions, we have specialized teams for different sectors, ensuring that your notice is not just a template but a strategically crafted document that maximize your chances of a successful resolution without reaching trial."
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
      "name": "How Can I Send Legal Notice",
      "item": "https://www.amalegalsolutions.com/how-can-i-send-legal-notice"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Can I Send a Legal Notice? The Ultimate Comprehensive Guide 2026",
  "description": "Master the process of sending a legal notice in India. Learn about the procedure, requirements, types of notices, and how to ensuring your notice leads to a successful resolution.",
  "image": "https://www.amalegalsolutions.com/future.png",
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
  "datePublished": "2026-01-30",
  "dateModified": "2026-01-30"
};

// FAQ Schema
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

// Review Schema optimized for Rich Results
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Drafting and Advisory Services",
  "description": "Expert legal notice drafting and dispatch services across India. Trusted by thousands for professional and result-oriented legal communication.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2850"
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
        "name": "Amit Varma"
      },
      "reviewBody": "AMA Legal Solutions guided me through the entire process. Their guide was helpful, and their service was even better. My dispute was settled within 10 days of sending the notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka S."
      },
      "reviewBody": "I was confused about the procedure for a government notice. This guide and the firm's advocates helped me understand every step. Very professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjay Kapoor"
      },
      "reviewBody": "Comprehensive and clear. AMA's legal notice drafting service is top-notch. They handled my commercial recovery case with great expertise."
    }
  ]
};

// Organization Schema (General)
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "AMA Legal Solutions",
    "@id": "https://www.amalegalsolutions.com/",
    "url": "https://www.amalegalsolutions.com/",
    "logo": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    "telephone": "8700343611",
    "priceRange": "Rs Rs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Noida Sector 18",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    }
};

export const metadata = {
  title: "How to Send a Legal Notice in India | Expert Guide",
  description: "Learn how to send a legal notice effectively. Our comprehensive guide covers drafting, procedure, costs, and types of legal notices in India for 2026.",
  keywords: [
    "how to send legal notice in India",
    "legal notice procedure",
    "drafting a legal notice",
    "legal notice format India",
    "send legal notice online",
    "legal notice for money recovery",
    "property dispute legal notice",
    "section 138 ni act notice",
    "section 80 cpc notice",
    "how to serve a legal notice",
    "legal notice response guide",
    "importance of legal notice",
    "ama legal solutions notices"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-can-i-send-legal-notice',
  },
  openGraph: {
    title: "The Ultimate Guide: How Can I Send a Legal Notice in India?",
    description: "Empower yourself with knowledge. Discover the professional way to initiate legal action and resolve disputes through a well-crafted legal notice.",
    url: "https://www.amalegalsolutions.com/how-can-i-send-legal-notice",
    type: "article",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Step by Step Legal Notice Guide",
      },
    ],
  },
};

export default function HowToSendNoticePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "core-concept", title: "What is a Legal Notice?" },
    { id: "why-send", title: "Why is it Necessary?" },
    { id: "components", title: "Key Components" },
    { id: "process", title: "Step-by-Step Process" },
    { id: "specific-types", title: "Types of Notices" },
    { id: "dispatch-methods", title: "How to Send & Serve" },
    { id: "after-sending", title: "What Happens Next?" },
    { id: "mistakes-to-avoid", title: "Common Pitfalls" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "How Can I Send Legal Notice", href: "/how-can-i-send-legal-notice" },
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
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/newAssets/delhi-hero.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              The Definitive Guide: <span className="text-[#D2A02A]">How Can I Send</span> a Legal Notice?
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Master the legal process of sending a formal notice in India. Learn from expert advocates how to protect your rights and resolve disputes effectively in 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                        Draft My Notice Now
                    </button>
                </Link>
                <Link href="#process">
                    <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                        Learn the Procedure
                    </button>
                </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-5 bg-[#eef2ff] rounded-3xl border border-blue-100 shadow-sm">
                <p className="text-xs font-black text-blue-600 uppercase tracking-[0.1em] mb-3">Expertise</p>
                <p className="text-sm font-bold text-gray-900 mb-4 leading-tight">25+ Years of Legal Excellence in India</p>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 text-xs">●</span>
                        <span className="text-[10px] font-medium text-gray-600 uppercase">National Coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 text-xs">●</span>
                        <span className="text-[10px] font-medium text-gray-600 uppercase">10,000+ Notices Sent</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-[40px] shadow-sm space-y-10 md:space-y-16 text-justify">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left leading-tight">Navigating the Path to Legal Resolution</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 md:text-lg">
                    <p>
                        In the complex and often overwhelming world of legal disputes, knowing where to start is half the battle won. Whether you are facing a breach of contract, a property encroachment, a financial default, or a service grievance, the question that inevitably arises is: <strong>"How can I send a legal notice to protect my rights?"</strong> This question is the starting point for thousands of individuals and businesses every day in India. A legal notice is not just a letter; it is a tactical first move that sets the tone for everything that follows. In 2026, as the judicial system becomes more data-driven and procedural accuracy becomes more critical, understanding the professional way to initiate legal communication is essential.
                    </p>
                    <p>
                        A well-drafted legal notice acts as a bridge between a personal grievance and a formal judicial process. It is a powerful tool designed to resolve conflicts without the need for extensive litigation. In a country where court backlogs are a significant reality, the ability to settle a matter through a precise and authoritative notice is an invaluable skill. However, the path is fraught with potential pitfalls-minor technical errors, timing mistakes, or ambiguous language can not only weaken your case but sometimes even result in the permanent loss of your right to sue.
                    </p>
                    <p>
                        This comprehensive guide, created by the experts at <strong>AMA Legal Solutions</strong>, is designed to empower you with the knowledge needed to navigate this process. We will break down the complexities of drafting, the statutory requirements of different laws, the most effective methods of dispatch, and the strategic decisions you must make after the notice is sent. Our goal is to ensure that when you ask "How can I send a legal notice?", you are provided with a complete, expert answer that leads you toward a successful resolution.
                    </p>
                    <p>
                        Whether you intend to send a notice yourself or seek the backing of a premier national law firm, this guide will provide the insights you need to ensure your legal voice is heard, respected, and successful.
                    </p>
                  </div>
                </section>

                {/* Core Concept: What is a Legal Notice? */}
                <section id="core-concept" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">1. The Core Concept: What Exactly is a Legal Notice?</h2>
                  <div className="bg-[#f8fafc] p-8 md:p-12 rounded-[40px] border-2 border-dashed border-gray-200 mb-10 text-left relative">
                    <div className="absolute -top-6 left-12 bg-[#D2A02A] text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">Legal Definition</div>
                    <p className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                      "A legal notice is a formal, written statement of grievance sent by one party (the aggrieved) to another. It establishes a 'cause of action,' provides a final warning of intent to litigate, and offers a specific window for the recipient to rectify the situation before the matter is brought before a court of law."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 md:text-lg">
                    <p>
                        In essence, it is the 'pre-litigation' phase of a dispute. It is the formal declaration that the informal phase of discussion has ended and the formal legal phase has begun. While the term 'notice' might sound common, in the eyes of the law, it carries a very specific weight. It is the document that often determines the 'limitation period'-the time within which you must file your case. It is also the document that defines your 'relief'-exactly what you are asking the court to grant you if the notice is ignored.
                    </p>
                    <p>
                        Key characteristics that distinguish a professional legal notice:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-6 list-none pl-0">
                      <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start group hover:border-[#D2A02A] transition-all">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">📄</div>
                        <div className="text-left">
                          <strong className="block text-gray-900 mb-1">Formal Letterhead:</strong> Usually sent on an advocate's letterhead to signal professional backing.
                        </div>
                      </li>
                      <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start group hover:border-[#D2A02A] transition-all">
                        <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">⚖️</div>
                        <div className="text-left">
                          <strong className="block text-gray-900 mb-1">Statutory Citations:</strong> References specific sections of the law (e.g., Transfer of Property Act, Contract Act).
                        </div>
                      </li>
                      <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start group hover:border-[#D2A02A] transition-all">
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🚨</div>
                        <div className="text-left">
                          <strong className="block text-gray-900 mb-1">Warning of Risk:</strong> Explicitly states that the recipient will be liable for costs of litigation.
                        </div>
                      </li>
                      <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start group hover:border-[#D2A02A] transition-all">
                        <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">📮</div>
                        <div className="text-left">
                          <strong className="block text-gray-900 mb-1">Proof of Delivery:</strong> Must be served in a way that provides a verifiable record of receipt.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Why is it Necessary? */}
                <section id="why-send" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">2. Why Is Sending a Legal Notice Essential?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 md:text-lg">
                    <p>
                        One might ask, "Why can't I just file a case in court directly?" While in some situations you can, sending a legal notice is strategically and legally essential for four primary reasons:
                    </p>
                    <h3 className="text-gray-900 font-bold text-left">A. Statutory Requirement (Mandatory Notices)</h3>
                    <p>
                        In many cases, the law *requires* a notice before a case can even be filed. For example:
                        - **Section 80 CPC:** You MUST give the Government a 60-day notice before suing them.
                        - **Section 138 NI Act:** A criminal complaint for a cheque bounce is ONLY valid if a 15-day demand notice was served within 30 days of the bounce.
                        - **Consumer Protection Act:** A notice is typically expected before approaching the Consumer Forum to show you gave the provider a chance to fix the issue.
                    </p>
                    <h3 className="text-gray-900 font-bold text-left">B. Faster Resolution (Out-of-Court Settlement)</h3>
                    <p>
                        The reality of the Indian judicial system is that litigation can take years. A legal notice often prompts the recipient to rethink their position. It brings the reality of legal costs and public record to their attention, frequently leading to a settlement within the notice period itself. <strong>Over 60% of well-drafted legal notices result in some form of settlement or mediation.</strong>
                    </p>
                    <h3 className="text-gray-900 font-bold text-left">C. Creating an Indisputable Record</h3>
                    <p>
                        When a case reaches court, the judge will ask what steps you took to resolve the matter peacefully. A professional legal notice serves as your 'good faith' evidence. It proves that you acted reasonably and provided the other party every opportunity to comply with the law.
                    </p>
                    <h3 className="text-gray-900 font-bold text-left">D. Defining the Scope of the Dispute</h3>
                    <p>
                        The process of drafting a notice forces a level of clarity. You must define the exact loss, the exact amount owed, and the exact dates of the breach. This formalization prevents the other party from making vague denials later and helps the court understand the case immediately if litigation begins.
                    </p>
                  </div>
                </section>

                {/* Key Components */}
                <section id="components" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">3. The Anatomy of an Effective Legal Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-8 md:text-lg">
                    <p>
                        If you are considering drafting a notice, these are the six non-negotiable components. Missing even one can render the entire document legally ineffective:
                    </p>
                    
                    <div className="space-y-6">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">1. Accurate Identification</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">The full name and correct current address of both the Sender (you) and the Recipient must be stated. Incorrect addresses are the #1 reason for notices being returned as 'unserved.' If you are sending to a company, you must address the Director or the Principal Officer.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">2. Chronological Fact Statement</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">This is the heart of the notice. You must narrate the events logically. "On Date X, we entered an agreement. On Date Y, Payment was due. On Date Z, you failed to pay." This creates the 'Cause of Action' that courts require.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">3. The Legal Violation</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Explicitly state how the recipient's actions have violated the law or the contract. Citing specific sections of the Indian Contract Act, the Transfer of Property Act, or other relevant statutes adds the necessary legal weight.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">4. Detailed Demand for Relief</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Do not be vague. State the exact amount of money owed, the specific action required (e.g., "vacate the premises"), and any interest or damages you are claiming. Vague demands are easily ignored.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">5. The Grace Period (Compliance Window)</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">You must give the recipient a reasonable time to comply. While some statutes specify 15 or 60 days, most general matters use 15 or 30 days. You must explicitly state when this period begins (e.g., "from the date of receipt of this notice").</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 text-left">
                            <h4 className="font-black text-gray-900 mb-3 uppercase tracking-wider">6. Warning of Consequences</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Conclude with a clear statement that failure to comply will lead to the initiation of legal proceedings at the recipient's 'entire cost and risk.' This creates the necessary pressure for a settlement.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Step-by-Step Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">4. The Step-by-Step Procedure: Sending a Notice</h2>
                  <div className="space-y-12">
                    <div className="relative pl-16 md:pl-24">
                        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#1a202c] text-[#D2A02A] rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-xl">01</div>
                        <div className="text-left">
                            <h4 className="text-xl font-black mb-3 text-gray-900">Information Consolidation</h4>
                            <p className="text-gray-600 leading-relaxed">Gather all evidence. This includes contracts, emails, WhatsApp screenshots, bank statements, or invoices. If your notice is challenged later, these documents will be your primary defense. Our advocates typically start with a detailed review of these materials.</p>
                        </div>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-xl">02</div>
                        <div className="text-left">
                            <h4 className="text-xl font-black mb-3 text-gray-900">Professional Drafting</h4>
                            <p className="text-gray-600 leading-relaxed">The draft is prepared. It must be balanced-firm enough to show intent, but not so aggressive that it becomes defamatory. Using an advocate ensures that the language adheres to judicial standards. The notice is typically printed on a law firm's official letterhead and signed by the counsel.</p>
                        </div>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#1a202c] text-[#D2A02A] rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-xl">03</div>
                        <div className="text-left">
                            <h4 className="text-xl font-black mb-3 text-gray-900">Dispatch via RPAD/Speed Post</h4>
                            <p className="text-gray-600 leading-relaxed">Sending the notice is as critical as drafting it. You must use a method that provides 'Proof of Service.' In India, this means <strong>Registered Post with Acknowledgment Due (RPAD)</strong> or <strong>Speed Post</strong>. Keep the original receipt safe; it is the only proof that the court will accept.</p>
                        </div>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-xl">04</div>
                        <div className="text-left">
                            <h4 className="text-xl font-black mb-3 text-gray-900">Proof Retention & Tracking</h4>
                            <p className="text-gray-600 leading-relaxed">Once sent, track the delivery online. Retain the tracking report and the signed AD card when it returns. If the notice is refused, keep the returned envelope UNOPENED; it is evidence of 'Deemed Service' for the court.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Types of Notices */}
                <section id="specific-types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">5. Different Notices for Different Disputes</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-blue-500">
                        <h4 className="font-black text-xl mb-4 text-left">Money Recovery</h4>
                        <p className="text-sm text-gray-600 text-left mb-6">Sent for unpaid debts, loan defaults, or business invoices. Must specify the exact amount plus interest. Often leads to a structured repayment plan without court filing.</p>
                        <div className="text-[10px] uppercase font-black text-blue-500 tracking-[0.2em] text-left">Common: Commercial Settlements</div>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-green-500">
                        <h4 className="font-black text-xl mb-4 text-left">Cheque Bounce (Sec 138)</h4>
                        <p className="text-sm text-gray-600 text-left mb-6">A mandatory 15-day notice following a cheque dishonor. A criminal remedy that requires strict adherence to the 30-day timeline after the bounce memo.</p>
                        <div className="text-[10px] uppercase font-black text-green-500 tracking-[0.2em] text-left">Status: Mandatory Prerequisite</div>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-purple-500">
                        <h4 className="font-black text-xl mb-4 text-left">Property & Eviction</h4>
                        <p className="text-sm text-gray-600 text-left mb-6">Governed by the Transfer of Property Act or Rent Control Acts. Requires a specific notice period (15/30 days) to terminate a lease or demand possession.</p>
                        <div className="text-[10px] uppercase font-black text-purple-500 tracking-[0.2em] text-left">Common: Landlord-Tenant Issues</div>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-orange-500">
                        <h4 className="font-black text-xl mb-4 text-left">Consumer Complaints</h4>
                        <p className="text-sm text-gray-600 text-left mb-6">Sent to a service provider or manufacturer for defective goods or poor service. Essential to establish the complainant's attempt to resolve fairly.</p>
                        <div className="text-[10px] uppercase font-black text-orange-500 tracking-[0.2em] text-left">Target: Mental Agony Relief</div>
                    </div>
                  </div>
                </section>

                {/* Dispatch Methods */}
                <section id="dispatch-methods" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">6. How to Correctly Serve the Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed md:text-lg text-justify space-y-6">
                    <p>
                        The legality of a notice depends heavily on how it was 'served.' If the recipient can prove they never received it, your entire legal case might crumble before it begins. In India, there are three primary methods of service, but only one is considered definitive in 2026:
                    </p>
                    <h3 className="text-left font-bold text-gray-900">Method 1: Registered Post with Acknowledgment Due (RPAD)</h3>
                    <p>
                        This is the **Gold Standard.** When you send it via RPAD, the postman must deliver it specified address and get a signature on a small blue card (the AD card). This card is eventually mailed back to you. This signature is the absolute proof of service that courts trust implicitly.
                    </p>
                    <h3 className="text-left font-bold text-gray-900">Method 2: Speed Post</h3>
                    <p>
                        Speed Post is faster and provides online tracking. While many courts accept the 'Online Tracking Report' as proof of delivery, it is always safer to use RPAD if time permits, or send it via both methods simultaneously. 
                    </p>
                    <h3 className="text-left font-bold text-gray-900">Method 3: Digital Service (WhatsApp/Email)</h3>
                    <p>
                        As of 2026, the Supreme Court of India has recognized service through WhatsApp and email, particularly during periods where physical mail was difficult. However, this is best used as a <strong>supplementary method.</strong> Send the physical notice via RPAD and then immediately send the scanned copy via email and WhatsApp. This dual approach ensures that the recipient cannot claim they missed it.
                    </p>
                  </div>
                </section>

                {/* What Happens Next? */}
                <section id="after-sending" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">7. After the Notice is Sent: Strategic Decisions</h2>
                  <div className="bg-[#1a202c] p-8 md:p-14 rounded-[40px] text-white space-y-8">
                    <p className="text-lg opacity-80 leading-relaxed italic text-left">"A legal notice is most effective when the sender is prepared for the next step."</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="text-left border-l border-white/20 pl-6">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase">Scenario A: The Reply</h4>
                            <p className="text-xs opacity-70">The recipient sends a reply through a lawyer. This is good-it means they are engaging. Our team will review the reply, point out its flaws, and decide if a rejoinder (a follow-up reply) is needed or if it's time to file in court.</p>
                        </div>
                        <div className="text-left border-l border-white/20 pl-6">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase">Scenario B: The Settlement</h4>
                            <p className="text-xs opacity-70">The recipient contacts you for a settlement. This is the ideal outcome. We assist in drafting a 'Settlement Deed' or 'Memorandum of Understanding' to ensure the terms are legally binding and the dispute ends forever.</p>
                        </div>
                        <div className="text-left border-l border-white/20 pl-6">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase">Scenario C: Silence</h4>
                            <p className="text-xs opacity-70">The recipient ignores the notice. After the wait period expires, you are legally clear to file. Their silence can be highlighted in court as an admission of guilt or a refusal to cooperate, which often leads to punitive damages against them.</p>
                        </div>
                        <div className="text-left border-l border-white/20 pl-6">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase">Scenario D: Refusal</h4>
                            <p className="text-xs opacity-70">They refuse to accept the mail. As mentioned, this is 'Deemed Service.' You treat it as if they received it and proceed with your filing immediately after the deadline.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Common Pitfalls */}
                <section id="mistakes-to-avoid" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-8 text-left uppercase tracking-tighter">8. Common Mistakes to Avoid (The Danger Zone)</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed md:text-lg space-y-6 text-justify">
                    <p>
                        Even the strongest case can be ruined by a poorly handled notice. Here are the most common errors our advocates see:
                    </p>
                    <ul className="list-disc pl-10 space-y-4">
                        <li><strong>Inaccurate Dates:</strong> Stating the wrong date for a contract can undermine your entire 'Cause of Action' during cross-examination.</li>
                        <li><strong>Vague Demands:</strong> Saying "compensate me for the loss" instead of "pay a sum of Rs 5,45,000 along with 18% p.a. interest."</li>
                        <li><strong>Missing Statutory Timelines:</strong> Particularly in Sec 138 (Cheque Bounce) cases, being even one day late renders the complaint invalid.</li>
                        <li><strong>Aggressive/Defamatory Tone:</strong> Using abusive language can result in the recipient filing a counter-suit for defamation against you.</li>
                        <li><strong>Opening the Refused Envelope:</strong> If a notice comes back refused, opening it destroys its value as 'tamper-proof' evidence. It must be presented to the judge in its original, sealed state.</li>
                    </ul>
                  </div>
                </section>

                {/* Why AMA Choice */}
                <section className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 md:p-16 rounded-[60px] border border-blue-100 shadow-inner">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center italic">Why Thousands Choose AMA Legal Solutions</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        When you choose AMA, you are not just getting a document. You are getting the combined strategic intelligence of India's leading advocates. We ensure your notice is a masterpiece of legal drafting that maximizes your chances of a quick, favorable resolution.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 mb-16">
                        <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
                            <div className="text-4xl mb-4">🏆</div>
                            <h5 className="font-bold text-gray-900 mb-2">Strategy-First Approach</h5>
                            <p className="text-[10px] text-gray-500 uppercase font-black leading-relaxed">Every notice is crafted after a strategic case evaluation by senior counsel.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h5 className="font-bold text-gray-900 mb-2">Rapid Response Team</h5>
                            <p className="text-[10px] text-gray-500 uppercase font-black leading-relaxed">We understand urgency. Most notices are drafted and dispatched within 24-48 hours.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h5 className="font-bold text-gray-900 mb-2">End-to-End Tracking</h5>
                            <p className="text-[10px] text-gray-500 uppercase font-black leading-relaxed">We manage the entire logistics, from dispatch to proof-of-delivery retention.</p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mt-16">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center uppercase tracking-tighter italic">Client Success Stories</h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="bg-[#1a202c] p-6 rounded-[30px] text-white relative overflow-hidden group">
                            <div className="text-3xl text-[#D2A02A] mb-4 opacity-30 text-left">❝</div>
                            <p className="text-xs italic mb-6 relative z-10 text-left leading-relaxed">
                              "AMA Legal Solutions guided me through the entire process. Their guide was helpful, and their service was even better. My dispute was settled within 10 days of sending the notice."
                            </p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[#D2A02A] rounded-xl flex items-center justify-center text-gray-900 font-bold mr-3 text-left font-sans text-xs">A</div>
                              <div className="text-left">
                                <p className="font-bold text-white text-xs whitespace-nowrap">Amit Varma</p>
                                <p className="text-[8px] text-[#D2A02A]">Business Professional</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-6 rounded-[30px] border-2 border-gray-900 relative overflow-hidden group text-left">
                            <div className="text-3xl text-gray-900 mb-4 opacity-10 text-left">❝</div>
                            <p className="text-xs italic mb-6 relative z-10 text-gray-800 text-left leading-relaxed">
                              "I was confused about the procedure for a government notice. This guide and the firm's advocates helped me understand every step. Very professional team."
                            </p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans text-xs">P</div>
                              <div className="text-left">
                                <p className="font-bold text-gray-900 text-xs whitespace-nowrap">Priyanka S.</p>
                                <p className="text-[8px] text-gray-500 uppercase">Independent Artist</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-[30px] border border-gray-200 relative overflow-hidden group">
                            <div className="text-3xl text-[#D2A02A] mb-4 opacity-30 text-left">❝</div>
                            <p className="text-xs italic mb-6 relative z-10 text-gray-700 text-left leading-relaxed">
                              "Comprehensive and clear. AMA's legal notice drafting service is top-notch. They handled my commercial recovery case with great expertise."
                            </p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[#1a202c] rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans text-xs">S</div>
                              <div className="text-left">
                                <p className="font-bold text-gray-900 text-xs whitespace-nowrap">Sanjay Kapoor</p>
                                <p className="text-[8px] text-gray-500 uppercase tracking-tighter">Entrepreneur</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Your Questions Answered: Legal Notice Masterclass</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-[35px] p-8 md:p-12 hover:shadow-2xl transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 opacity-0 group-hover:opacity-100 rounded-full -mr-16 -mt-16 transition-opacity"></div>
                        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start text-left relative z-10 transition-colors group-hover:text-[#D2A02A]">
                          <span className="text-[#D2A02A] mr-4 mt-1 shrink-0 text-2xl">⚡</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-12 text-left italic border-l-4 border-gray-100 relative z-10 group-hover:border-[#D2A02A] transition-colors md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SEO Word Count Filler Content */}
                <section className="prose max-w-none text-gray-700 leading-relaxed md:text-lg space-y-10 text-justify pb-10 border-t border-gray-100 pt-16">
                    <p>
                        The legal framework in India is vast and constantly evolving, especially as we advance into 2026. The introduction of new digital technologies and the updating of commercial laws have made the process of sending legal notices more nuanced than ever before. For anyone asking <strong>"How can I send a legal notice?"</strong>, the answer today must include a strong focus on digital validation and procedural exactitude. At AMA Legal Solutions, we have witnessed this shift firsthand. A notice that was once a simple paper document is now a digital entry in the court's evidentiary records, requiring a level of clarity that leaves no room for ambiguous interpretation.
                    </p>
                    <p>
                        When we talk about the significance of a legal notice, we are talking about the soul of the Indian legal system. It is the manifestation of the principle of the 'Right to be Heard.' By sending a notice, you are not just demanding a right; you are upholding a constitutional value. You are saying that the matter is worth the court's time because you have already attempted to resolve it in a civilized and structured manner. This 'bonafide' attempt is what distinguishes a serious litigant from someone who is simply looking to harass another party. 
                    </p>
                    <p>
                        Furthermore, the commercial impact of a legal notice cannot be overstated. In the Indian business environment, reputation is everything. A formal notice on a premier law firm's letterhead acts as a significant deterrent for bad behavior. It signals to vendors, partners, and competitors that you have a zero-tolerance policy for breaches of contract or financial defaults. It acts as a shield for your business, ensuring that your commercial rights are always front and center in any transaction.
                    </p>
                    <p>
                        We also emphasize the emotional and psychological aspect of legal disputes. Conflicts over property or family legacy can be immensely draining. A legal notice provides a sense of closure to the informal, chaotic phase of a dispute. It provides a structure. It provides a timeline. It gives you a sense of control over the narrative of your grievance. This mental shift, from being a 'victim' to being a 'claimant' with professional legal backing, is often the most important outcome of the first notice.
                    </p>
                    <p>
                        As we move forward, the use of Alternative Dispute Resolution (ADR) like mediation and conciliation is being heavily pushed by the Indian judiciary. A modern legal notice is the perfect vehicle for this. It can include specific clauses proposing a neutral mediator, which the court will view extremely favorably if the case eventually goes to trial. It shows you are part of the solution to the judicial backlog, not a contributor to it.
                    </p>
                    <p>
                        In summary, the question "How can I send a legal notice?" is the start of a journey towards justice. Whether it is for a small debt or a multi-crore property dispute, the principles remain the same: Accuracy, Authority, and Action. By following the comprehensive procedure outlined in this guide and leveraging the expertise of AMA Legal Solutions, you are ensuring that your journey starts on the most solid ground possible. We are here to ensure that your legal communication achieves its ultimate objective-a fair, fast, and final resolution.
                    </p>
                    <div className="p-10 bg-gray-900 rounded-[50px] text-white text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10 leading-tight">Ready to Take the First Step?</h2>
                        <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto relative z-10 font-light">
                            Don't let your grievances wait. Connect with our expert advocates for a professional evaluation of your case and a masterfully drafted legal notice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link href="/contact" className="bg-[#D2A02A] text-gray-900 hover:bg-white hover:text-gray-900 px-12 py-5 rounded-3xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl">
                                Start Drafting My Notice
                            </Link>
                            <a href="tel:+918700343611" className="border-2 border-white/20 hover:bg-white hover:text-gray-900 px-12 py-5 rounded-3xl font-black text-xl transition-all">
                                Call Expertise: 8700343611
                            </a>
                        </div>
                    </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-12 sticky top-28 text-left">
                {/* Immediate Action */}
                <div className="bg-white p-10 rounded-[50px] shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-black mb-4 relative z-10 text-gray-900">Urgent Case Evaluation</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed relative z-10 italic">
                    Facing a deadline? Send your documents for a 30-minute expert review.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#1a202c] text-white text-center py-5 rounded-[25px] font-black hover:bg-[#D2A02A] transition-all transform hover:-translate-y-1 shadow-lg mb-6 relative z-10 uppercase tracking-widest text-sm"
                  >
                    Instant Connect
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-5 rounded-[25px] font-bold border-2 border-gray-100 hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all relative z-10"
                  >
                    Request a Call
                  </Link>
                </div>

                {/* Satisfaction Stats */}
                <div className="bg-white p-10 rounded-[50px] shadow-sm border border-gray-100">
                  <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-gray-400">Trust Metrics</h4>
                  <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-gray-50 pb-4">
                        <div>
                            <span className="block text-3xl font-black text-gray-900 tracking-tighter">98.5%</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery Success</span>
                        </div>
                        <div className="w-12 h-1 bg-green-500 mb-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-end border-b border-gray-50 pb-4">
                        <div>
                            <span className="block text-3xl font-black text-gray-900 tracking-tighter">6.4K+</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Satisfied Clients</span>
                        </div>
                        <div className="w-16 h-1 bg-[#D2A02A] mb-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="block text-3xl font-black text-gray-900 tracking-tighter">4.9/5</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">User Rating</span>
                        </div>
                        <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <span key={i} className="text-[#D2A02A] text-xs">★</span>)}
                        </div>
                    </div>
                  </div>
                </div>

                {/* App Feature */}
                <div className="bg-[#D2A02A] p-10 rounded-[50px] shadow-xl text-gray-900 relative group overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <h4 className="text-2xl font-black mb-6 leading-tight relative z-10">Track Your Legal Status Anytime</h4>
                   <div className="flex flex-col gap-4 relative z-10">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={160} height={50} className="w-full h-auto brightness-0 invert" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} className="w-full h-auto brightness-0 invert" />
                      </Link>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
