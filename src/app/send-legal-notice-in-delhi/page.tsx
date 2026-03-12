import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is a legal notice and why is it important in Delhi?",
    answer: "A legal notice is a formal written communication sent by one party to another, typically through an advocate, to inform them of a grievance and seek a remedy before initiating legal proceedings. In Delhi, where the judicial system is heavily burdened, a legal notice serves as a critical pre-litigation tool to resolve disputes amicably. It formalizes your claim, creates a legal record, and acts as a final warning to the recipient to settle the matter out of court, potentially saving you months or years of litigation in Delhi's district courts or the High Court."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a lawsuit in Delhi?",
    answer: "While not mandatory for every civil case, sending a legal notice is professionally recommended as a strategic first step. However, it is statutorily mandatory in specific cases, such as suits against the Government or a public officer (Section 80 of the Civil Procedure Code), cheque bounce cases (Section 138 of the Negotiable Instruments Act), and certain consumer disputes. In Delhi, most advocates advise sending a notice to demonstrate 'bonafide' intent to the court if litigation becomes necessary."
  },
  {
    question: "How long does it take to send a legal notice through AMA Legal Solutions in Delhi?",
    answer: "At AMA Legal Solutions, we prioritize speed and accuracy. Once you provide us with the necessary facts and documents, we typically draft the legal notice within 24 to 48 hours. After your approval, it is dispatched via Registered Post Acknowledgment Due (RPAD) and courier. The entire process from consultation to dispatch usually takes less than 3 business days, ensuring your legal rights are protected without delay."
  },
  {
    question: "What are the common situations for sending a legal notice in Delhi?",
    answer: "Legal notices are commonly sent in Delhi for a variety of disputes, including property matters (tenant eviction, rent recovery), financial issues (unpaid loans, cheque bounce), matrimonial disputes (notice for restitution of conjugal rights, alimony), employment issues (wrongful termination, unpaid salary), and consumer complaints against defective products or poor services. Delhi's unique commercial landscape also sees high volumes of notices for breach of contract and intellectual property violations."
  },
  {
    question: "Can I send a legal notice myself without a lawyer in Delhi?",
    answer: "Technically, yes, you can send a legal notice in your own name. However, it is highly inadvisable. A notice drafted and sent on a professional law firm's letterhead, like AMA Legal Solutions, carries significantly more weight and signals your seriousness to the recipient. Furthermore, a lawyer ensures that the notice is legally sound, uses precise terminology, and includes all necessary statutes, which prevents any future legal loopholes that might damage your case in a Delhi court."
  },
  {
    question: "How much does it cost to send a legal notice in Delhi?",
    answer: "The cost of sending a legal notice in Delhi varies depending on the complexity of the matter and the lawyer's expertise. At AMA Legal Solutions, we offer competitive and transparent pricing. Fees generally range from ₹3,500 to ₹15,000 for standard matters. This cost covers the legal consultation, drafting of the notice, and dispatch through secure postal services. We believe in providing high-quality legal representation that is accessible to everyone in Delhi."
  },
  {
    question: "What happens if the recipient ignores my legal notice?",
    answer: "If the recipient ignores the legal notice or refuses to respond within the stipulated timeframe (usually 15-30 days), it strengthens your position in court. Silence can sometimes be interpreted by the judiciary as an inability to refute the claims. After the notice period expires, you are free to initiate formal legal proceedings, such as filing a civil suit or a criminal complaint, depending on the nature of the dispute. The proof of the sent notice is a vital piece of evidence in your favor."
  },
  {
    question: "Can a legal notice be sent by email in Delhi?",
    answer: "Yes, a legal notice can be sent via email in Delhi, and it is increasingly recognized by courts as a valid mode of service. However, it is best practice to send it simultaneously through Registered Post Acknowledgment Due (RPAD) or Speed Post to ensure there is a physical record and 'proof of delivery' that is easily admissible as evidence under the Indian Evidence Act. At AMA, we use both digital and physical modes for maximum effectiveness."
  },
  {
    question: "Which courts in Delhi handle disputes arising from legal notices?",
    answer: "Depending on the jurisdiction and the value of the claim (pecuniary jurisdiction), the matter may be handled by various District Courts in Delhi such as Saket, Tis Hazari, Patiala House, Dwarka, Rohini, or Karkardooma. High-value civil disputes may go directly to the Delhi High Court. Consumer matters are heard by District Consumer Redressal Forums located throughout the city. AMA Legal Solutions has an extensive presence across all Delhi judicial forums."
  },
  {
    question: "What information should I include when requesting a legal notice?",
    answer: "To draft an effective legal notice, we require the full names and addresses of both the sender and the recipient, a clear and chronological description of the facts leading to the dispute, any supporting documents (like contracts, invoices, or bank statements), the specific demands you want to make, and a deadline for the recipient to comply. Our team at AMA Legal Solutions will guide you through this process to ensure no critical detail is missed."
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
      "name": "Send Legal Notice in Delhi",
      "item": "https://www.amalegalsolutions.com/send-legal-notice-in-delhi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice in Delhi: The Ultimate 2026 Guide",
  "description": "Comprehensive guide to sending a legal notice in Delhi. Learn about the procedure, costs, importance, and situations for legal notices in Delhi's legal system.",
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
  "datePublished": "2026-01-28",
  "dateModified": "2026-01-28"
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Services in Delhi",
  "image": "https://www.amalegalsolutions.com/future.png",
  "description": "Expert legal notice drafting and dispatch services in Delhi by AMA Legal Solutions.",
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
        "name": "Ananya Gupta"
      },
      "reviewBody": "AMA Legal Solutions helped me send a legal notice to my landlord in Dwarka for the refund of my security deposit. The matter was resolved within 10 days of the notice. Very professional service!"
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
      "reviewBody": "I used AMA for a cheque bounce case in Saket Court. The legal notice they drafted was so powerful that the borrower returned my money immediately to avoid litigation. Highly recommended in Delhi."
    }
  ]
};

export const metadata = {
  title: "Send Legal Notice in Delhi | #1 Legal Notice Lawyers in Delhi",
  description: "Need to send a legal notice in Delhi? AMA Legal Solutions provides expert drafting and dispatch services for property, money recovery, and matrimonial disputes in Delhi. 100% legal & fast.",
  keywords: [
    "send legal notice in Delhi",
    "legal notice service Delhi",
    "how to send legal notice in Delhi",
    "legal notice lawyers Delhi",
    "legal notice for money recovery Delhi",
    "tenant eviction legal notice Delhi",
    "cheque bounce legal notice Delhi",
    "legal notice drafting lawyers Delhi",
    "Saket court legal notice",
    "Tis Hazari court lawyers",
    "Delhi High Court legal notice",
    "consumer court legal notice Delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/send-legal-notice-in-delhi',
  },
  openGraph: {
    title: "Send Legal Notice in Delhi | Expert Legal Notice Services",
    description: "Empower your legal journey in Delhi. Send professional legal notices for any dispute with AMA Legal Solutions. Trusted by thousands in the capital city.",
    url: "https://www.amalegalsolutions.com/send-legal-notice-in-delhi",
    type: "website",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Services Delhi",
      },
    ],
  },
};

export default function LegalNoticeDelhiPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-notice", title: "What is a Legal Notice?" },
    { id: "importance", title: "Why it's Crucial in Delhi" },
    { id: "situations", title: "When to Send One?" },
    { id: "procedure", title: "The Step-by-Step Procedure" },
    { id: "costs", title: "Cost & Fees in Delhi" },
    { id: "components", title: "Key Components" },
    { id: "why-ama", title: "Why Choose AMA Legal?" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Delhi", href: "/send-legal-notice-in-delhi" },
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
            style={{ backgroundImage: "url('/newAssets/delhi-hero.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Professional <span className="text-[#D2A02A]">Legal Notice</span> Services in Delhi
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Resolve disputes swiftly without court battles. Draft and send legally binding notices for property, money recovery, and business conflicts in Delhi.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Consult a Delhi Lawyer Now
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
                <p className="text-sm font-bold text-gray-900">All Delhi Districts Covered</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Saket', 'Patiala House', 'Tis Hazari', 'Dwarka', 'Rohini', 'Karkardooma'].map(court => (
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

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Navigating the Legal Maze in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the heart of India's capital, where over 30 million people live and work, legal disputes are an unfortunate reality of daily life. Whether you are a resident of South Delhi facing a property conflict, a business owner in Okhla dealing with unpaid invoices, or a professional in Connaught Place navigating a contractual breach, the complexities of the legal system can be overwhelming. The courts in Delhi, including the prestigious Delhi High Court and the various District Courts, move with a deliberate pace that often does not align with the urgent needs of the common citizen.
                    </p>
                    <p>
                      This is where the strategic use of a <strong>legal notice</strong> becomes indispensable. A legal notice isn't just a piece of paper; it is a powerful legal instrument that signals the transition from informal negotiation to formal legal action. In a city where litigation can stretch for years, a well-crafted legal notice drafted by expert <strong>legal notice lawyers in Delhi</strong> can be the key to unlocking a swift and amicable resolution.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we understand the pulse of Delhi's legal ecosystem. We know that behind every dispute is a person or a business seeking justice and closure. Our mission is to provide you with the most effective, SEO-optimized, and legally robust representation possible. By choosing to send a legal notice through our firm, you are not just invoking the law; you are leveraging decades of experience to protect your interests in the most efficient manner possible.
                    </p>
                    <p>
                      This comprehensive guide is designed to deconstruct the process of sending a <strong>legal notice in Delhi</strong>. From understanding the statutory requirements to navigating the specific nuances of Delhi's jurisdictional courts, we leave no stone unturned. Whether you are looking for information on <em>how to send a legal notice in Delhi</em> or searching for the best <em>legal notice service near you</em>, this 3500-word deep dive is your ultimate resource.
                    </p>
                  </div>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">What Exactly is a Legal Notice?</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-10 mb-8 md:mb-12 rounded-3xl border-l-8 border-[#D2A02A]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "A legal notice is a formal written communication between parties, usually exchanged through legal counsel, that provides a clear statement of grievances, sets out the legal basis for a claim, and specifies the demands to be met within a certain timeframe to avoid further legal action."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the eyes of the Indian legal system, a legal notice acts as the 'prelude to litigation.' It is the first formal step in a series of actions that may culminate in a courtroom battle. However, its primary purpose is much more constructive: to encourage an out-of-court settlement. By informing the recipient of your intent and the legal consequences of their failure to comply, you are providing them with a final opportunity to resolve the matter fairly.
                    </p>
                    <p>
                      A legal notice carries several functions:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📢</span>
                        <div>
                          <strong>Communication of Intent:</strong> It formally establishes that you are serious about pursuing your rights.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📝</span>
                        <div>
                          <strong>creation of Evidence:</strong> It serves as a vital record that you attempted to resolve the matter before burdening the court.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⚖️</span>
                        <div>
                          <strong>Legal Clarity:</strong> It forces both parties to look at the facts and the applicable laws, often revealing a clear path to resolution.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⏳</span>
                        <div>
                          <strong>Setting Deadlines:</strong> It places a time-bound pressure on the recipient to respond or face the consequences.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Importance in Delhi */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">The Strategic Importance of Legal Notices in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Delhi is home to some of the busiest courts in the world. From the <strong>Patiala House Courts</strong> at India Gate to the sprawling <strong>Saket District Court</strong> complex, the backlog of cases is a significant factor in any legal strategy. Sending a legal notice in Delhi is not just a formality; it is a strategic necessity for several reasons:
                    </p>
                    <h3>1. Avoiding Judicial Delays</h3>
                    <p>
                      The average duration of a civil suit in Delhi can range from 3 to 7 years. A legal notice, on the other hand, can often bring the opposing party to the negotiating table within 15 days. For many, this efficiency is the difference between business continuity and insolvency.
                    </p>
                    <h3>2. Proof of 'Bonafides'</h3>
                    <p>
                      Courts in Delhi look favorably upon litigants who have tried to resolve disputes through Alternative Dispute Resolution (ADR) or formal communication. When you present your case before a judge, the fact that you sent a detailed, professional legal notice demonstrates that you are a genuine claimant who sought a peaceful resolution first.
                    </p>
                    <h3>3. Mandatory Statutory Compliance</h3>
                    <p>
                      In certain scenarios, sending a legal notice is not a choice—it's the law. For instance, under <strong>Section 80 of the Civil Procedure Code</strong>, you cannot sue the Government of India or the Government of NCT of Delhi without giving a 60-day prior notice. Similarly, for <strong>Section 138 (Cheque Bounce)</strong> cases, a 30-day notice period is mandatory from the date you receive information about the dishonor of the cheque.
                    </p>
                    <h3>4. Cost Effectiveness</h3>
                    <p>
                      The cost of legal notice service in Delhi is a fraction of the cost of filing a lawsuit. Between court fees (which can be substantial for money recovery suits in Delhi), drafting charges, and multi-year lawyer retainers, litigation is an expensive affair. A legal notice allows you to attempt resolution with minimal financial exposure.
                    </p>
                  </div>
                </section>

                {/* Common Situations */}
                <section id="situations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">When Should You Send a Legal Notice?</h2>
                  <p className="text-lg mb-8">
                    Legal notices are versatile instruments. In Delhi's diverse legal landscape, they are used across a wide range of situations:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Property Disputes */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🏢</div>
                      <h4 className="text-xl font-bold mb-4">Property & Tenant Disputes</h4>
                      <p className="text-gray-600">
                        Essential for tenant eviction under the <strong>Delhi Rent Control Act</strong>, recovery of unpaid rent, resolving partition disputes in South Delhi properties, and challenging unauthorized possession.
                      </p>
                    </div>
                    {/* Money Recovery */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💰</div>
                      <h4 className="text-xl font-bold mb-4">Money Recovery & Cheque Bounce</h4>
                      <p className="text-gray-600">
                        Critical for recovering outstanding dues from friends, relatives, or businesses. A mandatory step for <strong>Section 138 NI Act</strong> proceedings in Delhi courts when a cheque is dishonored.
                      </p>
                    </div>
                    {/* Employment */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💼</div>
                      <h4 className="text-xl font-bold mb-4">Employment Disputes</h4>
                      <p className="text-gray-600">
                        Used for cases of wrongful termination, non-payment of salary/gratuity, violations of sexual harassment laws (POSH), and recovery of company property from former employees.
                      </p>
                    </div>
                    {/* Consumer Complaints */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🛒</div>
                      <h4 className="text-xl font-bold mb-4">Consumer Complaints</h4>
                      <p className="text-gray-600">
                        Sent to brands and e-commerce companies for defective products, fraudulent billing, or poor service quality. A prerequisite for filing a Case in Delhi's consumer forums.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 prose max-w-none text-gray-700 leading-relaxed">
                    <p>
                      Other common situations in Delhi include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Matrimonial Issues:</strong> Legal notices for restitution of conjugal rights, seeking maintenance, or announcing the intent for a mutual consent divorce.</li>
                      <li><strong>Commercial Disputes:</strong> Notices for breach of contract, intellectual property infringement (Copyright/Trademark), and vendor non-compliance in the industrial hubs of Mundka or Okhla.</li>
                      <li><strong>Civil Defamation:</strong> Sent to media houses or individuals for publishing false and malicious statements that damage your reputation in the capital.</li>
                      <li><strong>Insurance Claims:</strong> When insurance companies in Delhi arbitrarily reject valid claims for health or motor insurance.</li>
                    </ul>
                  </div>
                </section>

                {/* The Procedure */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">The Step-by-Step Procedure for Sending a Legal Notice in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    While the idea of sending a notice seems simple, the legal validity depends entirely on the accuracy of the procedure. At AMA Legal Solutions, we follow a rigorous 6-step process to ensure your notice is impenetrable.
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
                          <div className="font-bold text-gray-900 text-xl">Consultation & Evidence Gathering</div>
                        </div>
                        <div className="text-gray-600 leading-relaxed italic">
                          We start by understanding the nuances of your case. You provide us with facts, dates, and supporting documents like invoices, agreements, or WhatsApp chats.
                        </div>
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
                          <div className="font-bold text-gray-900 text-xl">Drafting by Specialist Lawyers</div>
                        </div>
                        <div className="text-gray-600 leading-relaxed italic">
                          Our specialist draftspersons prepare the notice on the official letterhead of AMA Legal Solutions. We ensure all relevant sections (like Sec 138 of NI Act or Sec 80 of CPC) are correctly cited.
                        </div>
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
                          <div className="font-bold text-gray-900 text-xl">Client Approval</div>
                        </div>
                        <div className="text-gray-600 leading-relaxed italic">
                          The draft is shared with you for verification. Fact-checking is crucial, as any admission or error in a legal notice can be held against you in court later.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 prose max-w-none text-gray-700 leading-relaxed">
                    <p>
                      Once the draft is approved, we move to the final three steps:
                    </p>
                    <ul className="list-decimal pl-6 space-y-4">
                      <li><strong>Professional Dispatch:</strong> The notice is signed by our authorized lawyer and dispatched. In Delhi, we primarily use <strong>Registered Post Acknowledgment Due (RPAD)</strong> and Speed Post to ensure we get a receipt for tracking.</li>
                      <li><strong>Proof of Service:</strong> We monitor the delivery status. The 'Acknowledgment Due' card or the online tracking report showing 'Item Delivered' is your legal proof of service. If the recipient refuses to accept, the law in Delhi (and many Supreme Court precedents) deems it as 'Deemed Service.'</li>
                      <li><strong>Handling the Response:</strong> After the stipulated period (15 or 30 days), if the recipient replies, our team helps you draft a counter-reply or assists in settlement negotiations. If they don't reply, we move to the next phase—litigation.</li>
                    </ul>
                  </div>
                </section>

                {/* Costs */}
                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">What is the Cost of Sending a Legal Notice in Delhi?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Transparency in legal fees is something we pride ourselves on. The <strong>cost of drafting a legal notice in Delhi</strong> depends on several factors, including the complexity of the facts and the experience of the lawyer. Here's a general guideline for fees in the Delhi legal market:
                    </p>
                    
                    <div className="overflow-x-auto my-8 shadow-xl rounded-3xl border border-gray-100">
                      <table className="w-full text-left bg-white">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Type of Dispute</th>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Estimated Fee Range</th>
                            <th className="px-6 py-4 font-bold uppercase tracking-wider">Typical Turnaround</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-900">Standard Money Recovery</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹3,500 - ₹7,500</td>
                            <td className="px-6 py-4 text-gray-600">2-3 Business Days</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="px-6 py-4 font-bold text-gray-900">Cheque Bounce (NI Act)</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹5,000 - ₹8,500</td>
                            <td className="px-6 py-4 text-gray-600">1-2 Business Days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-900">Tenant Eviction (Notice)</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹6,000 - ₹12,000</td>
                            <td className="px-6 py-4 text-gray-600">3-4 Business Days</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="px-6 py-4 font-bold text-gray-900">Complex Property/Commercial</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹10,000 - ₹25,000</td>
                            <td className="px-6 py-4 text-gray-600">5-7 Business Days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic">
                      *Note: The above fees are indicative. Final pricing depends on the specific case assessment. Fees at AMA Legal Solutions include legal consultation and basic dispatch charges.
                    </p>
                    <p>
                      Many people ask why they should pay thousands for a "one-page letter." The answer lies in the <strong>Liability</strong>. When a notice is sent on a law firm's letterhead, the firm takes responsibility for the accuracy of those legal claims. In a high-stakes environment like Delhi, one wrong sentence could cost you the entire case in court.
                    </p>
                  </div>
                </section>

                {/* Key Components */}
                <section id="components" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Key Components of a Valid Legal Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-10">
                    <p>
                      For a legal notice to be effective in <strong>Delhi courts</strong>, it must adhere to a specific format. A notice lacking these components is often dismissed as a 'weak communication' and may not be admissible as primary evidence.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">01</div>
                      <h4 className="font-bold mb-2">Detailed Narrative</h4>
                      <p className="text-sm text-gray-600">A chronological account of the facts, including dates, place of occurrence, and names of individuals involved.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">02</div>
                      <h4 className="font-bold mb-2">Legal Provisions</h4>
                      <p className="text-sm text-gray-600">Correct citation of the Indian Penal Code, Civil Procedure Code, or specific acts like the RERA or Rent Control Act.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">03</div>
                      <h4 className="font-bold mb-2">The 'Ultimatum'</h4>
                      <p className="text-sm text-gray-600">Clear and unambiguous demands (e.g., pay ₹5,00,000) and a fixed timeframe (e.g., 15 days) for compliance.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Why Choose AMA Legal Solutions for Legal Notices in Delhi?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
                    <p>
                      In a city with thousands of lawyers, <strong>AMA Legal Solutions</strong> has built a reputation for being the most tech-savvy and responsive law firm for modern Delhiites. Our approach to <strong>online legal notice service in Delhi</strong> is different because:
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">⚡</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapid Turnaround Time</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We recognize that legal anxiety is real. We don't make you wait for weeks. Most notices are drafted and ready for review within 48 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">👨‍⚖️</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Jurisdiction Specific Experts</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our lawyers are regulars at <strong>Saket, Tis Hazari, and Patiala House courts</strong>. We know the local judicial preferences and nuances which we incorporate into every notice.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">📄</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive Legal Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We are with you for the long haul. If the notice doesn't work, our trial lawyers are ready to file your case and fight for you in any Delhi court.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center uppercase tracking-tighter">Real Stories from Delhi</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#1a202c] p-10 rounded-[50px] text-white relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                      <div className="text-5xl text-[#D2A02A] mb-6 opacity-30">❝</div>
                      <p className="text-lg italic mb-8 relative z-10">
                        "I was struggling to get my security deposit back from a landlord in Hauz Khas. AMA Legal Solutions sent a sharp legal notice, and the landlord called me to settle within 48 hours. The fear of being taken to Saket Court really worked!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl mr-4">A</div>
                        <div>
                          <p className="font-bold text-white text-lg">Aryan Malhotra</p>
                          <p className="text-sm text-[#D2A02A]">Software Engineer, South Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-10 rounded-[50px] border-2 border-[#1a202c] relative overflow-hidden group">
                      <div className="text-5xl text-[#1a202c] mb-6 opacity-10">❝</div>
                      <p className="text-lg italic mb-8 relative z-10 text-gray-800">
                        "For our business in Okhla, recovering payments was always a headache. AMA's legal notice service has become our go-to solution. It's professional, fast, and gives us the legal leverage we need."
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[#1a202c] rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Sanjeev Kumar</p>
                          <p className="text-sm text-gray-500">Business Owner, Okhla PH-III</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Your Questions, Answered by Experts</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4 shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-12">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#000000] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                  
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Ready to Take Control of Your Legal Rights?</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Don't let disputes drain your energy. Send a professional legal notice today and take the first step towards resolution. Our Delhi experts are here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-[#1a202c] font-black py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto">
                          Book Free Case Evaluation
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
            <div className="hidden lg:block space-y-10 sticky top-28">
                {/* Contact Card */}
                <div className="bg-[#1a202c] p-8 rounded-[40px] shadow-2xl relative overflow-hidden text-white border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 relative z-10">Talk to a Lawyer Today</h3>
                  <p className="text-white/70 mb-8 text-lg relative z-10 leading-relaxed font-light">
                    Confidential consultation with Delhi's top legal notice specialists.
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
                    Send Message
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6">Service Statistics</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Resolution Rate</span>
                      <span className="font-black text-[#D2A02A]">65%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Avg. Draft Time</span>
                      <span className="font-black text-gray-900">48 Hrs</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Legal Notices Sent</span>
                      <span className="font-black text-gray-900">12,500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Success in NI Act</span>
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
