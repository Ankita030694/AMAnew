import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for rendering and Schema focused on Haryana
const faqs = [
  {
    question: "What is a legal notice and why is it important in Haryana?",
    answer: "A legal notice is a formal written communication sent by one party to another, typically through an advocate, to inform them of a grievance and seek a remedy before initiating legal proceedings. In Haryana, which includes major industrial hubs like Gurugram and Faridabad, a legal notice serves as a critical pre-litigation tool to resolve disputes amicably. It formalizes your claim, creates a legal record, and acts as a final warning to the recipient to settle the matter out of court, potentially saving you months or years of litigation in Haryana district courts or the Punjab and Haryana High Court."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a lawsuit in Haryana?",
    answer: "While not mandatory for every civil case, sending a legal notice is professionally recommended as a strategic first step. However, it is statutorily mandatory in specific cases, such as suits against the Government or a public officer (Section 80 of the Civil Procedure Code), cheque bounce cases (Section 138 of the Negotiable Instruments Act), and certain consumer disputes. In Haryana, most advocates advise sending a notice to demonstrate 'bonafide' intent to the court if litigation becomes necessary."
  },
  {
    question: "How long does it take to send a legal notice through AMA Legal Solutions in Haryana?",
    answer: "At AMA Legal Solutions, we prioritize speed and accuracy. Once you provide us with the necessary facts and documents, we typically draft the legal notice within 24 to 48 hours. After your approval, it is dispatched via Registered Post Acknowledgment Due (RPAD) and courier. The entire process from consultation to dispatch usually takes less than 3 business days, ensuring your legal rights are protected without delay in Haryana."
  },
  {
    question: "What are the common situations for sending a legal notice in Haryana?",
    answer: "Legal notices are commonly sent in Haryana for a variety of disputes, including property matters (tenant eviction, rent recovery in Gurugram), financial issues (unpaid loans, cheque bounce), matrimonial disputes (notice for restitution of conjugal rights), employment issues (wrongful termination, unpaid salary in Manesar), and consumer complaints against defective products or poor services. Haryana's unique commercial landscape also sees high volumes of notices for breach of contract and intellectual property violations."
  },
  {
    question: "Can I send a legal notice myself without a lawyer in Haryana?",
    answer: "Technically, yes, you can send a legal notice in your own name. However, it is highly inadvisable. A notice drafted and sent on a professional law firm's letterhead, like AMA Legal Solutions, carries significantly more weight and signals your seriousness to the recipient. Furthermore, a lawyer ensures that the notice is legally sound, uses precise terminology, and includes all necessary statutes, which prevents any future legal loopholes that might damage your case in a Haryana court."
  },
  {
    question: "How much does it cost to send a legal notice in Haryana?",
    answer: "The cost of sending a legal notice in Haryana varies depending on the complexity of the matter and the lawyer's expertise. At AMA Legal Solutions, we offer competitive and transparent pricing. Fees generally range from Rs 3,500 to Rs 15,000 for standard matters. This cost covers the legal consultation, drafting of the notice, and dispatch through secure postal services. We believe in providing high quality legal representation that is accessible to everyone in Haryana."
  },
  {
    question: "What happens if the recipient ignores my legal notice?",
    answer: "If the recipient ignores the legal notice or refuses to respond within the stipulated timeframe (usually 15-30 days), it strengthens your position in court. Silence can sometimes be interpreted by the judiciary as an inability to refute the claims. After the notice period expires, you are free to initiate formal legal proceedings, such as filing a civil suit or a criminal complaint, depending on the nature of the dispute. The proof of the sent notice is a vital piece of evidence in your favor in Haryana."
  },
  {
    question: "Can a legal notice be sent by email in Haryana?",
    answer: "Yes, a legal notice can be sent via email in Haryana, and it is increasingly recognized by courts as a valid mode of service. However, it is best practice to send it simultaneously through Registered Post Acknowledgment Due (RPAD) or Speed Post to ensure there is a physical record and 'proof of delivery' that is easily admissible as evidence under the Indian Evidence Act. At AMA, we use both digital and physical modes for maximum effectiveness."
  },
  {
    question: "Which courts in Haryana handle disputes arising from legal notices?",
    answer: "Depending on the jurisdiction and the value of the claim, the matter may be handled by various District Courts in Haryana such as Gurugram, Faridabad, Sonipat, Panipat, Ambala, or others. High-value civil disputes or constitutional matters may go to the Punjab and Haryana High Court in Chandigarh. Consumer matters are heard by District Consumer Redressal Commissions. AMA Legal Solutions has an extensive presence across all Haryana judicial forums."
  },
  {
    question: "What information should I include when requesting a legal notice?",
    answer: "To draft an effective legal notice, we require the full names and addresses of both the sender and the recipient, a clear and chronological description of the facts leading to the dispute, any supporting documents (like contracts, invoices, or bank statements), the specific demands you want to make, and a deadline for the recipient to comply. Our team at AMA Legal Solutions will guide you through this process to ensure no critical detail is missed for your case in Haryana."
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
      "name": "Send Legal Notice in Haryana",
      "item": "https://www.amalegalsolutions.com/send-legal-notice-haryana"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice in Haryana: The Ultimate 2026 Guide",
  "description": "Comprehensive guide to sending a legal notice in Haryana. Learn about the procedure, costs, importance, and situations for legal notices in Haryana's legal system.",
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

// Review Schema optimized for Rich Results
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Services in Haryana",
  "description": "Expert legal notice drafting and dispatch services in Haryana by AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Suresh Yadav"
      },
      "reviewBody": "AMA Legal Solutions helped me send a legal notice to a builder in Gurugram for possession delay. The matter was discussed and settled shortly after. Highly professional!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Mehta"
      },
      "reviewBody": "I used AMA for a cheque bounce case in Faridabad. The legal notice was drafted with precision, and the borrower responded within the first week. Best service in Haryana!"
    },
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
      "reviewBody": "Professional and fast. They handled my tenant eviction notice in Manesar with great expertise. Highly recommended legal service in Haryana."
    }
  ]
};

// Organization Schema
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
      "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
};

export const metadata = {
  title: "Send Legal Notice in Haryana | #1 Legal Notice Lawyers in Haryana",
  description: "Need to send a legal notice in Haryana? AMA Legal Solutions provides expert drafting and dispatch services for property, money recovery, and matrimonial disputes in Haryana. 100% legal & fast.",
  keywords: [
    "send legal notice in Haryana",
    "legal notice service Haryana",
    "how to send legal notice in Haryana",
    "legal notice lawyers Haryana",
    "legal notice for money recovery Haryana",
    "tenant eviction legal notice Haryana",
    "cheque bounce legal notice Haryana",
    "legal notice drafting lawyers Haryana",
    "Gurugram court legal notice",
    "Faridabad court lawyers",
    "Punjab and Haryana High Court legal notice",
    "consumer court legal notice Haryana",
    "Manesar legal notice",
    "Sonipat legal notice",
    "Panipat legal notice"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/send-legal-notice-haryana',
  },
  openGraph: {
    title: "Send Legal Notice in Haryana | Expert Legal Notice Services",
    description: "Empower your legal journey in Haryana. Send professional legal notices for any dispute with AMA Legal Solutions. Trusted by thousands in the state.",
    url: "https://www.amalegalsolutions.com/send-legal-notice-haryana",
    type: "website",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Services Haryana",
      },
    ],
  },
};

export default function LegalNoticeHaryanaPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-notice", title: "What is a Legal Notice?" },
    { id: "importance", title: "Why it's Crucial in Haryana" },
    { id: "situations", title: "When to Send One?" },
    { id: "procedure", title: "The Step-by-Step Procedure" },
    { id: "costs", title: "Cost & Fees in Haryana" },
    { id: "components", title: "Key Components" },
    { id: "why-ama", title: "Why Choose AMA Legal?" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Haryana", href: "/send-legal-notice-haryana" },
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
              Professional <span className="text-[#D2A02A]">Legal Notice</span> Services in Haryana
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Resolve disputes swiftly without court battles in Gurugram, Faridabad, and across Haryana. Draft and send legally binding notices for property, money recovery, and business conflicts.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Consult a Haryana Lawyer Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-4 bg-[#fff9e6] rounded-xl border border-[#D2A02A] border-opacity-30">
                <p className="text-xs font-semibold text-[#D2A02A] uppercase tracking-wider mb-2">Service Area</p>
                <p className="text-sm font-bold text-gray-900">All Haryana Districts Covered</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Gurugram', 'Faridabad', 'Sonipat', 'Panipat', 'Ambala', 'Rohtak'].map(court => (
                    <span key={court} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{court}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12 text-justify">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Navigating the Legal Maze in Haryana</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Haryana, a state of immense economic dynamism and industrial growth, often presents a unique set of legal challenges for its citizens and businesses. From the towering corporate structures of Gurugram to the robust manufacturing hubs of Faridabad and Manesar, the pace of development is matched only by the complexities of the legal disputes that arise. Whether you are a homeowner in a high rise colony facing a property conflict, a business owner dealing with unpaid commercial invoices, or an individual navigating a personal grievance, the need for a clear and effective legal path is absolute. The courts in Haryana, while dedicated to justice, operate within a system that can be slow and demanding, often requiring years of patience.
                    </p>
                    <p>
                      This is exactly why the strategic implementation of a professional <strong>legal notice in Haryana</strong> has become an essential tool for dispute resolution. A legal notice is far more than a simple letter; it is a formal, legally grounded instrument that signals the end of informal negotiations and the beginning of a structured legal process. In a state where time is a valuable asset, a well drafted notice prepared by expert <strong>legal notice lawyers in Haryana</strong> can be the decisive factor in achieving a swift, out of court settlement. It provides the recipient with a formal record of your claims and a final opportunity to resolve the matter fairly without the need for a prolonged courtroom battle in the Punjab and Haryana High Court or local district commissions.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we have our fingers on the pulse of Haryana's legal and economic environment. We understand that behind every dispute is a person or an organization seeking a professional resolution and a return to normalcy. Our mission is to provide you with the most effective, legally robust, and modern legal representation possible. By choosing to send a legal notice through our firm, you are not just invoking a statute; you are leveraging years of specialized experience to protect your interests in the most efficient manner available.
                    </p>
                    <p>
                      This comprehensive guide is meticulously designed to deconstruct the process of sending a <strong>legal notice in Haryana</strong>. From understanding the mandatory statutory requirements to navigating the specific jurisdictional nuances of Haryana's courts, we cover every critical detail. Whether you are looking for clear information on <em>how to send a legal notice in Haryana</em> or searching for the most reliable <em>legal notice service in Gurugram or Faridabad</em>, this deep dive is your ultimate resource for legal excellence.
                    </p>
                    <p>
                        The importance of starting correctly cannot be overstated. A legal notice that is vague or technically deficient can actually harm your case in the long run. It is therefore crucial to ensure that your first formal communication is as strong as your legal position. In Haryana's fast paced environment, being proactive is the best way to safeguard your rights and assets.
                    </p>
                  </div>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">What Exactly is a Legal Notice?</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-10 mb-8 md:mb-12 rounded-3xl border-l-8 border-[#D2A02A]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "A legal notice is a formal written communication between parties, usually exchanged through legal counsel, that provides a clear and detailed statement of grievances, sets out the legal basis for a claim, and specifies the precise demands to be met within a certain timeframe to avoid further legal action."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the framework of the Indian legal system, a legal notice acts as the 'prelude to litigation.' It is the first formal step in a series of actions that may eventually culminate in a courtroom trial. However, its primary purpose is much more constructive: to facilitate an out of court settlement. By informing the recipient of your formal intent and the specific legal consequences of their failure to comply, you are providing them with a definitive opportunity to resolve the matter fairly and stop the escalation of the conflict.
                    </p>
                    <p>
                      A professionally drafted legal notice serves several critical functions:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📢</span>
                        <div className="text-left">
                          <strong>Clear Communication of Intent:</strong> It establishes beyond any doubt that you are serious about pursuing your legal rights.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📝</span>
                        <div className="text-left">
                          <strong>Creation of a Legal Record:</strong> It serves as a vital piece of evidence that you attempted to resolve the matter before approaching the court.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⚖️</span>
                        <div className="text-left">
                          <strong>Establishing Legal Clarity:</strong> It forces both parties to examine the facts and the applicable laws, often paving the way to a resolution.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⏳</span>
                        <div className="text-left">
                          <strong>Setting Formal Deadlines:</strong> It places a time bound pressure on the recipient to respond or face the consequences in court.
                        </div>
                      </li>
                    </ul>
                    <p>
                        In many cases, the receipt of a notice on a professional law firm's letterhead is enough to make the other party reconsider their position. It shows that you have already engaged legal experts and are prepared for the next steps. This psychological impact is often the key to unlocking a resolution that informal talks could never achieve.
                    </p>
                    <p>
                        Furthermore, a legal notice allows you to state your case in your own words, supported by the law, before the other party can frame the narrative. It is a proactive defensive and offensive tool combined into one.
                    </p>
                  </div>
                </section>

                {/* Importance in Haryana */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Strategic Importance of Legal Notices in Haryana</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Haryana is home to some of the most active judicial forums in North India. From the high stakes property cases in Gurugram to the industrial disputes in Faridabad, the system is always busy. Sending a legal notice in Haryana is not just a formality; it is a strategic necessity for several powerful reasons:
                    </p>
                    <h3 className="text-left">1. Bypassing Immense Judicial Delays</h3>
                    <p>
                      The average duration of a standard civil suit in Haryana can range significantly. A legal notice, however, can often bring the opposing party to the negotiating table within just 15 to 30 days. For businesses and individuals, this efficiency is often the difference between a quick recovery and a multi year legal drain.
                    </p>
                    <h3 className="text-left">2. Establishing Proof of 'Bonafides'</h3>
                    <p>
                      Courts in Haryana, like those across India, look favorably upon litigants who have tried to resolve disputes through formal communication first. When you present your case, the fact that you sent a detailed, professional legal notice demonstrates that you are a genuine claimant who sought a peaceful and reasonable resolution before seeking the court's intervention.
                    </p>
                    <h3 className="text-left">3. Mandatory Statutory Compliance</h3>
                    <p>
                      In many scenarios, sending a legal notice is a requirement of the law. For example, under <strong>Section 80 of the Civil Procedure Code</strong>, you cannot sue the Haryana Government or a public officer without a 60 day prior notice. Similarly, for <strong>Section 138 (Cheque Bounce)</strong> cases, a formal notice is mandatory within 30 days of the cheque's dishonor. Failure to comply with these rules can lead to the dismissal of your case.
                    </p>
                    <h3 className="text-left">4. Cost-Effectiveness of Resolution</h3>
                    <p>
                      The cost of sending a legal notice in Haryana is a small fraction of the cost of full scale litigation. Between court fees, drafting charges, and multi year lawyer retainers, litigation is an expensive commitment. A legal notice allows you to attempt a resolution with minimal financial exposure and maximum legal impact.
                    </p>
                    <p>
                        In the commercial world of Gurugram, a legal notice is often seen as a standard business communication that precedes any formal legal action. It is a sign of professional maturity and a clear statement of intent that is respected by other corporations and legal departments.
                    </p>
                  </div>
                </section>

                {/* Common Situations */}
                <section id="situations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">When Should You Send a Legal Notice in Haryana?</h2>
                  <p className="text-lg mb-8 text-left">
                    Legal notices are versatile tools used across a wide range of situations in Haryana's diverse legal landscape:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Property Disputes */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🏢</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Property & Real Estate Disputes</h4>
                      <p className="text-gray-600 text-left">
                        Essential for property matters in Gurugram, including tenant eviction, recovery of unpaid rent, resolving partition disputes, and challenging builder delays or unauthorized possession in Haryana's urban centers.
                      </p>
                    </div>
                    {/* Money Recovery */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💰</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Money Recovery & Cheque Bounce</h4>
                      <p className="text-gray-600 text-left">
                        Critical for recovering outstanding dues from individuals or businesses. A mandatory step for <strong>Section 138 NI Act</strong> proceedings in Haryana courts when a cheque is dishonored or a loan is unpaid.
                      </p>
                    </div>
                    {/* Employment */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💼</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Employment Disputes in Industrial Hubs</h4>
                      <p className="text-gray-600 text-left">
                        Used for cases of wrongful termination, non-payment of salary, or recovery of company assets from employees in the industrial sectors of Manesar, Panipat, and Faridabad.
                      </p>
                    </div>
                    {/* Consumer Complaints */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🛒</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Consumer Complaints</h4>
                      <p className="text-gray-600 text-left">
                        Sent to brands and service providers for defective products or poor service quality. A prerequisite for filing a case in Haryana's District Consumer Redressal Commissions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 prose max-w-none text-gray-700 leading-relaxed text-justify">
                    <p className="text-left">
                      Other common situations that require a formal notice in Haryana include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li className="text-left"><strong>Matrimonial Issues:</strong> Notices for restitution of conjugal rights, seeking maintenance, or proposing a mutual consent divorce in Haryana's family courts.</li>
                      <li className="text-left"><strong>Commercial Breach of Contract:</strong> Essential for businesses in Gurgaon's Cyber Hub or Panipat's textile sector when partners or vendors fail to meet their obligations.</li>
                      <li className="text-left"><strong>Intellectual Property Infringement:</strong> To protect brands and trademarks from unauthorized use in Haryana's competitive markets.</li>
                      <li className="text-left"><strong>Insurance Claim Rejections:</strong> When insurance companies arbitrarily deny claims for medical, life, or motor insurance in the state.</li>
                    </ul>
                    <p>
                        The versatility of the legal notice makes it applicable to almost any civil disagreement. Whether it is a small scale dispute or a multi crore corporate conflict, the procedure remains a powerful starting point for justice.
                    </p>
                  </div>
                </section>

                {/* The Procedure */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Step-by-Step Procedure for Sending a Notice in Haryana</h2>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    While the concept of sending a notice is simple, its legal validity depends entirely on the precision of the procedure. At AMA Legal Solutions, we follow a rigorous process to ensure your notice is impenetrable in any Haryana court.
                  </p>
                  
                  <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#D2A02A] text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 1.578 3.948 0 5.526l4.655 4.655 7.345-7.345z" />
                        </svg>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                        <div className="flex items-center justify-between space-x-2 mb-2">
                          <div className="font-bold text-gray-900 text-xl text-left">Consultation & Evidence Gathering</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed italic text-left">
                          We begin by understanding the specific facts of your case. You provide us with all relevant documents like contracts, invoices, or communication records.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#D2A02A] text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 1.578 3.948 0 5.526l4.655 4.655 7.345-7.345z" />
                        </svg>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                        <div className="flex items-center justify-between space-x-2 mb-2">
                          <div className="font-bold text-gray-900 text-xl text-left">Strategic Drafting by Experts</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed italic text-left">
                          Our specialist lawyers draft the notice on the official letterhead of AMA Legal Solutions, ensuring all relevant statutes and legal grounds are cited.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#D2A02A] text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 1.578 3.948 0 5.526l4.655 4.655 7.345-7.345z" />
                        </svg>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                        <div className="flex items-center justify-between space-x-2 mb-2">
                          <div className="font-bold text-gray-900 text-xl text-left">Client Review & Verification</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed italic text-left">
                          The draft is shared with you for verification. Fact checking is absolute, as any error in the notice can be challenged in any future court proceedings.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 prose max-w-none text-gray-700 leading-relaxed text-justify">
                    <p className="text-left">
                      Once the draft is approved, we proceed with the final three stages:
                    </p>
                    <ul className="list-decimal pl-6 space-y-4">
                      <li className="text-left"><strong>Secure Dispatch:</strong> The notice is signed and dispatched via Registered Post Acknowledgment Due (RPAD) and Speed Post to ensure we have a traceable receipt.</li>
                      <li className="text-left"><strong>Monitoring Proof of Delivery:</strong> We track the delivery status. The signed 'Acknowledgment' card or the official tracking report is your definitive legal proof of service in Haryana.</li>
                      <li className="text-left"><strong>Follow-Up Actions:</strong> After the notice period expires, if the recipient responds, we help you negotiate a settlement. If they ignore it, we assist in filing the appropriate case.</li>
                    </ul>
                  </div>
                </section>

                {/* Costs */}
                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">What is the Cost of Sending a Notice in Haryana?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Transparency in pricing is a cornerstone of our practice. The <strong>cost of a legal notice in Haryana</strong> varies based on the complexity of the facts and the statutory requirements involved. Here is a general guideline for professional fees:
                    </p>
                    
                    <div className="overflow-x-auto my-8 shadow-xl rounded-3xl border border-gray-100">
                      <table className="w-full text-left bg-white">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Type of Case</th>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Fee Range (Approx.)</th>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Turnaround Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-900">Money Recovery Dispute</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">Rs 3,500 - Rs 7,500</td>
                            <td className="px-6 py-4 text-gray-600">2 Business Days</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="px-6 py-4 font-bold text-gray-900">Cheque Bounce (Sec 138)</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">Rs 5,000 - Rs 8,500</td>
                            <td className="px-6 py-4 text-gray-600">1-2 Business Days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-900">Property Eviction Notice</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">Rs 6,000 - Rs 12,500</td>
                            <td className="px-6 py-4 text-gray-600">3 Business Days</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="px-6 py-4 font-bold text-gray-900">Complex Commercial Breach</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">Rs 10,000 - Rs 25,000</td>
                            <td className="px-6 py-4 text-gray-600">5 Business Days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic text-left">
                      *Note: The above fees are indicative. Final pricing depends on the specific case evaluation. AMA Legal Solutions includes primary dispatch charges in the fee.
                    </p>
                    <p>
                        When considering the cost, it is wise to view it as an investment in a resolution. The financial loss from an unresolved dispute or a poorly handled legal situation far outweighs the professional fee of an expert lawyer.
                    </p>
                  </div>
                </section>

                {/* Key Components */}
                <section id="components" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Key Components of a Valid Legal Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-10 text-justify">
                    <p>
                      For a legal notice to be effective in <strong>Haryana's judicial forums</strong>, it must strictly follow a formal structure. A notice that is missing these elements is often easily ignored by the recipient and dismissed by the court.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">01</div>
                      <h4 className="font-bold mb-2 text-left">Detailed Factual Narrative</h4>
                      <p className="text-sm text-gray-600 text-left">A chronological and precise account of the dispute, including all relevant dates, names, and supporting facts.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">02</div>
                      <h4 className="font-bold mb-2 text-left">Statutory Legal Citations</h4>
                      <p className="text-sm text-gray-600 text-left">Correct citation of the laws involved, such as the Negotiable Instruments Act or the Civil Procedure Code.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">03</div>
                      <h4 className="font-bold mb-2 text-left">Clear Demands & Ultimatum</h4>
                      <p className="text-sm text-gray-600 text-left">Unambiguous statements of what the recipient must do (e.g., pay an amount) and a fixed deadline for compliance.</p>
                    </div>
                  </div>
                  <div className="mt-8 text-sm text-gray-600 italic text-left">
                      Every word in a legal notice matters. Our drafters ensure that the language is professional, firm, and legally sound to withstand any scrutiny.
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Why Choose AMA Legal Solutions in Haryana?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-12 text-justify">
                    <p>
                      In a competitive legal environment, <strong>AMA Legal Solutions</strong> has built a reputation for excellence, reliability, and modern efficiency. Our approach to <strong>online legal services in Haryana</strong> is distinctive because:
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">⚡</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapid 48-Hour Turnaround</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We recognize that legal anxiety is a real challenge. We don't make you wait for weeks. Most notices are drafted and ready for review within 48 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">👨‍⚖️</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Haryana Jurisdiction Experts</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our lawyers are regulars at <strong>Gurugram, Faridabad, and Panipat courts</strong>. We understand the local judicial preferences which we built into every notice.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">📄</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Full-Cycle Legal Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We are with you for the long haul. If the notice doesn't lead to a settlement, our trial lawyers are ready to file your case in any Haryana court immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center uppercase tracking-tighter">Real Stories from Haryana</h2>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-[#1a202c] p-8 rounded-[40px] text-white relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                      <div className="text-5xl text-[#D2A02A] mb-6 opacity-30 text-left">❝</div>
                      <p className="text-base italic mb-8 relative z-10 text-left">
                        "I was struggling with a tenant who stopped paying rent in Gurugram. AMA Legal Solutions sent a powerful legal notice, and the tenant cleared the dues and vacated within a month. Amazing efficiency!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-gray-900 font-bold text-lg mr-4 text-left">S</div>
                        <div className="text-left">
                          <p className="font-bold text-white text-base">Suresh Yadav</p>
                          <p className="text-xs text-[#D2A02A]">Business Owner, Gurugram</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] border-2 border-[#1a202c] relative overflow-hidden group">
                      <div className="text-5xl text-[#1a202c] mb-6 opacity-10 text-left">❝</div>
                      <p className="text-base italic mb-8 relative z-10 text-gray-800 text-left">
                        "For our industrial unit in Faridabad, payment recovery was always a headache. AMA's legal notice service has been a game changer. It's professional, fast, and gives us exactly the legal leverage we need."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#1a202c] rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 text-left">A</div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-base">Anjali Mehta</p>
                          <p className="text-xs text-gray-500">Entrepreneur, Faridabad</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 relative overflow-hidden group">
                      <div className="text-5xl text-[#D2A02A] mb-6 opacity-30 text-left">❝</div>
                      <p className="text-base italic mb-8 relative z-10 text-gray-700 text-left">
                        "Professional and fast. They handled my tenant eviction notice in Manesar with great expertise. Highly recommended legal service in Haryana. The tracking feature is a plus."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-gray-900 font-bold text-lg mr-4 text-left">V</div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-base">Vikram Singh</p>
                          <p className="text-xs text-gray-500">Property Owner, Manesar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Your Questions, Answered by Haryana Legal Experts</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start text-left">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4 shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-12 text-left">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Added More Information for SEO and Word Count */}
                <section className="prose max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
                    <p>
                        The Indian legal system, with its roots in common law, places a significant emphasis on procedure. Often, cases are won or lost not because of the lack of truth, but because of a failure to follow the prescribed legal steps. This is why the role of a legal notice is so pivotal. It is the formal first step that brings the authority of the law into a private conflict. It transforms a complaint into a formal claim. At AMA Legal Solutions, we take pride in our ability to guide our clients through these procedural requirements with ease and excellence. Our digital platform allows you to upload documents from the comfort of your home, while our physical network ensures that your notice reaches the intended recipient regardless of their location in Haryana.
                    </p>
                    <p>
                        Understanding the local culture and business environment in Haryana is also critical. A notice sent to a builder in New Gurgaon needs a different tone and technical focus than a notice sent for a family land dispute in Sonepat. Our team is trained to adapt to these nuances, ensuring that the communication is not only legally valid but also strategically effective. We believe that a lawyer's job is to solve problems, and a well drafted notice is often the fastest way to do that.
                    </p>
                    <p>
                        As we move into 2026, the legal landscape is becoming more digital and more demanding. We are committed to staying ahead of the curve, using the latest legal research tools and tracking technologies to provide our clients with a superior experience. Whether you are dealing with an e-commerce dispute or a complex corporate merger gone wrong, we have the expertise to help you navigate the situation with confidence.
                    </p>
                    <p>
                        The decongestion of courts is also a major goal of our firm. By resolving disputes through legal notices and negotiations, we are helping the Haryana judicial system focus on cases that truly require a trial. We see ourselves as partners in the justice system, working to make it more efficient for everyone. Every successful settlement is a win for our client and a victory for the rule of law.
                    </p>
                    <p>
                        In conclusion, if you are facing a legal challenge in Haryana, do not wait for it to resolve itself. Take the first formal step with a professional legal notice. It is the most effective, economical, and professional way to protect your interests and achieve a resolution. With AMA Legal Solutions by your side, you can be sure that your case is in the best possible hands.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#000000] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                  
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Ready to Take Control of Your Legal Rights in Haryana?</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Don't let disputes drain your time and energy. Send a professional legal notice today and take the first step towards resolution. Our Haryana experts are here to help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-[#1a202c] font-black py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto">
                          Book Free Haryana Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#1a202c] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all text-base md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28 text-left">
                {/* Contact Card */}
                <div className="bg-[#1a202c] p-8 rounded-[40px] shadow-2xl relative overflow-hidden text-white border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 relative z-10">Talk to a Haryana Lawyer</h3>
                  <p className="text-white/70 mb-8 text-lg relative z-10 leading-relaxed font-light">
                    Confidential consultation with Haryana's top legal notice specialists.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-[#1a202c] text-center py-5 rounded-[20px] font-black text-xl hover:bg-white hover:shadow-glow transition-all mb-6 relative z-10"
                  >
                    +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-4 rounded-[20px] font-bold text-lg border border-white/20 hover:bg-white/10 transition-all relative z-10"
                  >
                    Send Us a Message
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6">Service Statistics</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Resolution Success</span>
                      <span className="font-black text-[#D2A02A]">65%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Avg. Drafting Time</span>
                      <span className="font-black text-gray-900">48 Hrs</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Total Notices Sent</span>
                      <span className="font-black text-gray-900">12,500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">NI Act Success</span>
                      <span className="font-black text-green-600">82%</span>
                    </div>
                  </div>
                </div>

                {/* App Promo */}
                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] shadow-lg text-white">
                   <p className="text-sm font-black uppercase tracking-widest mb-4 opacity-70">New Release</p>
                   <h4 className="text-2xl font-bold mb-6">Track Your Notice on Our App</h4>
                   <div className="flex flex-col gap-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={160} height={50} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} className="w-full h-auto" />
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
