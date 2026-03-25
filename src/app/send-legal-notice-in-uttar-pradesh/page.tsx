import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for rendering and Schema focused on Uttar Pradesh
const faqs = [
  {
    question: "What is a legal notice and why is it essential in Uttar Pradesh?",
    answer: "A legal notice is a formal written communication between parties, typically exchanged through legal counsel, that provides a detailed statement of grievances and specifies demands to be met to avoid litigation. In a vast state like Uttar Pradesh, with major hubs like Noida, Lucknow, and Kanpur, a legal notice is essential to establish a formal record of your claim and often prompts an out-of-court settlement, saving years of effort in the state's judicial system."
  },
  {
    question: "How long is the mandatory notice period for suing the UP Government?",
    answer: "Under Section 80 of the Code of Civil Procedure (CPC), if you intend to file a lawsuit against the State Government of Uttar Pradesh or a public officer in their official capacity, a mandatory notice period of two months (60 days) is required. This gives the government an opportunity to resolve the matter before burdening the court."
  },
  {
    question: "Which courts in UP handle disputes arising from legal notices?",
    answer: "Depending on the location and nature of the dispute, cases may be filed in the District Courts (such as Gautam Buddh Nagar for Noida, or the District & Sessions Court in Lucknow). For high-value matters or constitutional issues, the High Court of Judicature at Allahabad or its Lucknow Bench has jurisdiction. Consumer disputes are handled by the District Consumer Redressal Commissions across the state."
  },
  {
    question: "Can I send a legal notice for a property dispute in Noida?",
    answer: "Yes, sending a legal notice is highly recommended for property disputes in Noida, including builder delays, illegal possession, or tenant issues. It is often a prerequisite for filing a complaint with UP RERA or a civil suit. A professional notice drafted by AMA Legal Solutions ensures your property rights are clearly articulated according to UP state laws."
  },
  {
    question: "What is the procedure for a cheque bounce notice in Uttar Pradesh?",
    answer: "In Uttar Pradesh, as per Section 138 of the Negotiable Instruments Act, you must send a legal notice to the drawer within 30 days of receiving the cheque return memo from the bank. The notice must demand payment within 15 days. If the payment is not made, you can proceed with a criminal complaint in the relevant magistrate's court in UP."
  },
  {
    question: "Does AMA Legal Solutions handle cases in the Allahabad High Court?",
    answer: "Yes, AMA Legal Solutions has an extensive network and provides expert legal representation in both the Allahabad High Court and its Lucknow Bench. We handle writ petitions, appeals, and complex litigation for clients across Uttar Pradesh following the dispatch of our professional legal notices."
  },
  {
    question: "How much does it cost to draft a legal notice in Lucknow or Noida?",
    answer: "The cost vary depending on the complexity of the matter. At AMA Legal Solutions, we offer transparent pricing starting from Rs 3,500 for standard recovery notices in UP. This includes consultation, drafting by expert advocates, and dispatch via Registered Post AD. We provide high-quality legal services that are accessible throughout Uttar Pradesh."
  },
  {
    question: "Can a legal notice be sent via WhatsApp in Uttar Pradesh?",
    answer: "While courts in India, including those in Uttar Pradesh, are increasingly recognizing digital service through WhatsApp or email, it is best practice to send a physical notice via Registered Post AD or Speed Post. This provides a 'Proof of Delivery' that is incontestable as evidence. AMA Legal Solutions typically sends both to ensure maximum legal impact."
  },
  {
    question: "What happens if the recipient refuses to accept the notice in UP?",
    answer: "If the recipient in Uttar Pradesh refuses to accept a legal notice sent via Registered Post, it is recorded as 'Refused' by the postman. Under Indian law, this is considered 'Deemed Service,' meaning the court will assume the notice was successfully delivered, and you can proceed with legal action after the notice period expires."
  },
  {
    question: "Do I need a lawyer's letterhead for a notice in Uttar Pradesh?",
    answer: "While you can send a notice in your own capacity, a notice on a professional law firm's letterhead like AMA Legal Solutions carries significantly more weight in UP. It signals to the recipient that you have professional backing and are prepared for litigation, which significantly increases the chances of a favorable settlement."
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
      "name": "Send Legal Notice in Uttar Pradesh",
      "item": "https://www.amalegalsolutions.com/send-legal-notice-in-uttar-pradesh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Professional Legal Notice Services in Uttar Pradesh: Your Complete 2026 Guide",
  "description": "Expert advice on sending a legal notice in Uttar Pradesh. Learn about the laws, procedure, and importance of legal notices in Noida, Lucknow, and across UP.",
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
  "name": "Legal Notice Services in Uttar Pradesh",
  "description": "Expert legal notice drafting and dispatch services in Uttar Pradesh by AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1380"
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
      "reviewBody": "AMA Legal Solutions helped me recover my dues from a vendor in Noida. Their legal notice was clear and effective. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Sharma"
      },
      "reviewBody": "Excellent service for a property matter in Lucknow. The team is very professional and knowledgeable about UP state laws."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Srivastava"
      },
      "reviewBody": "I was impressed by the quick response and the quality of the legal notice drafted for my case in Kanpur. Great experience with AMA."
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
      "streetAddress": "Noida Sector 18",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    }
};

export const metadata = {
  title: "Send Legal Notice in Uttar Pradesh | Top Lawyers",
  description: "Want to send a legal notice in Uttar Pradesh? AMA Legal Solutions provides expert drafting and dispatch in Noida, Lucknow, and all UP districts. Fast & professional.",
  keywords: [
    "send legal notice in Uttar Pradesh",
    "legal notice lawyers Noida",
    "legal notice Lucknow",
    "UP RERA legal notice",
    "money recovery notice Uttar Pradesh",
    "property dispute legal notice UP",
    "how to send legal notice in UP",
    "legal notice service Uttar Pradesh",
    "Allahabad High Court lawyers",
    "cheque bounce notice Noida",
    "Kanpur court lawyers",
    "Varanasi legal notice",
    "Agra legal notice",
    "Ghaziabad legal notice lawyers"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/send-legal-notice-in-uttar-pradesh',
  },
  openGraph: {
    title: "Send Legal Notice in Uttar Pradesh | Expert Drafting Services",
    description: "Protect your rights in UP with a professional legal notice. Trusted by thousands in Noida, Lucknow, and across Uttar Pradesh.",
    url: "https://www.amalegalsolutions.com/send-legal-notice-in-uttar-pradesh",
    type: "website",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Services Uttar Pradesh",
      },
    ],
  },
};

export default function LegalNoticeUPPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-notice", title: "What is a Legal Notice?" },
    { id: "importance", title: "Significance in UP" },
    { id: "situations", title: "When to Send One?" },
    { id: "procedure", title: "Procedure in UP" },
    { id: "costs", title: "Costs & Transparency" },
    { id: "noida-focus", title: "Focus: Noida & Ghaziabad" },
    { id: "lucknow-focus", title: "Focus: Lucknow & Central UP" },
    { id: "why-ama", title: "Why AMA Legal Solutions?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Uttar Pradesh", href: "/send-legal-notice-in-uttar-pradesh" },
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
              Professional <span className="text-[#D2A02A]">Legal Notice</span> Services in Uttar Pradesh
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Expert legal drafting and dispatch for Noida, Lucknow, Kanpur, and all 75 districts of UP. Fast resolution for property, recovery, and commercial disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Talk to a UP Advocate Now
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
              <div className="mt-8 p-4 bg-[#f0f9ff] rounded-xl border border-blue-100">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Service Area</p>
                <p className="text-sm font-bold text-gray-900">Coverage across all 75 Districts of UP</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Noida', 'Lucknow', 'Kanpur', 'Agra', 'Meerut', 'Prayagraj'].map(city => (
                    <span key={city} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{city}</span>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Legal Excellence in the Heart of Uttar Pradesh</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Uttar Pradesh, the most populous state in India, is a land of immense diversity, rapid urbanization, and a complex legal heritage. From the high tech industrial corridors of Noida and Ghaziabad in the West to the administrative and judicial centers of Lucknow and Prayagraj, the state's legal landscape is both vast and challenging. Whether you are an individual navigating a personal grievance, a homeowner dealing with property issues, or a business managing commercial contracts, the need for a definitive and professional legal path is evident. In a system where the courts carry a significant load, taking a proactive and structured first step is the most effective way to protect your rights.
                    </p>
                    <p>
                      This is where the strategic use of a professionally drafted <strong>legal notice in Uttar Pradesh</strong> becomes an invaluable asset. A legal notice is not just a letter of complaint; it is a formal, legally grounded document that signals a transition from informal discussions to a serious legal process. It serves to formalize your claims, provide the recipient with a clear understanding of the legal consequences of their actions, and offer a final chance for a resolution without approaching the court. In cities like Noida and Lucknow, where time is of the essence, a well drafted notice is often the catalyst that brings parties to the negotiating table.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we pride ourselves on our deep understanding of the unique jurisdictional and statutory requirements of Uttar Pradesh. Our team of expert advocates is well versed in the state's specific laws, including the <strong>UP Revenue Code</strong>, the <strong>UP Tenancy Act</strong>, and the regulations governing <strong>UP RERA</strong>. We combine local legal expertise with a modern, efficient approach to ensure that your legal journey starts with the strongest possible foundation. By choosing to send a legal notice through our firm, you are leveraging decades of collective experience to ensure your voice is heard and your rights are defended.
                    </p>
                    <p>
                      Whether you are dealing with a builder dispute in Greater Noida, a financial recovery matter in Kanpur, or a service issue in Allahabad, our mission remains the same: to provide you with clear, powerful, and successful legal representation. This comprehensive guide will walk you through every aspect of sending a <strong>legal notice in UP</strong>, ensuring you have the knowledge and the backing of a premier law firm.
                    </p>
                  </div>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Definition of a Legal Notice</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-10 mb-8 md:mb-12 rounded-3xl border-l-8 border-[#D2A02A]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "A legal notice is a formal written communication between parties, usually exchanged through legal counsel, that provides a detailed statement of grievances, establishes the legal basis for a claim, and specifies the precise demands to be met within a certain timeframe to avoid formal legal action."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the eyes of the law, particularly under the Code of Civil Procedure, a legal notice acts as a formal warning. It is the first definitive action that marks the potential commencement of a legal case. However, its most positive outcome is to facilitate an out of court settlement. By informing the recipient of your formal intent and the specific legal consequences of their failure to comply, you are providing them with one final opportunity to rectify the situation fairly.
                    </p>
                    <p>
                      Crucial functions of a professional legal notice include:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📢</span>
                        <div className="text-left">
                          <strong>Statement of Intent:</strong> It establishes that you are serious and prepared to pursue your legal rights.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📝</span>
                        <div className="text-left">
                          <strong>Permanent Record:</strong> It serves as vital evidence that you attempted to resolve the matter peacefully first.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⚖️</span>
                        <div className="text-left">
                          <strong>Legal Grounding:</strong> It forces both parties to examine the facts and the applicable laws clearly.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⏳</span>
                        <div className="text-left">
                          <strong>Time Pressure:</strong> It sets a formal deadline for a response, preventing further delays.
                        </div>
                      </li>
                    </ul>
                    <p>
                        A professionally drafted notice by AMA Legal Solutions ensured the language is precise, the tone is balanced, and the legal weight is maximum.
                    </p>
                  </div>
                </section>

                {/* Significance in UP */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Why Sending a Legal Notice is Vital in Uttar Pradesh</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The legal environment in Uttar Pradesh demands a high degree of precision and procedural adherence. Sending a legal notice is a strategic move for several significant reasons:
                    </p>
                    <h3 className="text-left">1. Avoiding the 'Tariqh-pe-Tariqh' Syndrome</h3>
                    <p>
                      The judicial system, especially in a populous state like UP, can face significant backlogs. A legal notice can often resolve a dispute within 15 to 30 days, bypassing the need for a lawsuit that could take years to conclude. It is the fastest path to resolution.
                    </p>
                    <h3 className="text-left">2. Mandatory Requirements for Suits Against the State</h3>
                    <p>
                      Under <strong>Section 80 of the CPC</strong>, a two month notice is a mandatory prerequisite for any lawsuit against the UP Government or its officers. This is a common situation for citizens dealing with administrative grievances or land acquisition issues.
                    </p>
                    <h3 className="text-left">3. Strengthening Your Position in UP Courts</h3>
                    <p>
                      When a case eventually reaches the District Court or the Allahabad High Court, the judge will see that you acted in good faith by sending a detailed and professional legal notice first. This establishes your 'bonafides' and can influence the court’s view on the merits of your case.
                    </p>
                    <h3 className="text-left">4. Clarity on the Dispute</h3>
                    <p>
                      The process of drafting a notice forces a thorough review of the facts and evidence. This early stage analysis, provided by our experts, often reveals the strengths and weaknesses of a claim, allowing for a more informed legal strategy.
                    </p>
                  </div>
                </section>

                {/* When to Send One? */}
                <section id="situations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Common Situations Requiring a Legal Notice in UP</h2>
                  <p className="text-lg mb-8 text-left">
                    Legal notices are versatile tools used across various sectors in Uttar Pradesh:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">🏙️</div>
                      <h4 className="font-bold mb-4 text-left">Real Estate & UP RERA</h4>
                      <p className="text-gray-600 text-sm text-left">Essential for builder buyer disputes in Noida, Greater Noida, and Ghaziabad. A prerequisite for filing a complaint with the Uttar Pradesh Real Estate Regulatory Authority.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-6">📉</div>
                      <h4 className="font-bold mb-4 text-left">Money Recovery & Business Dues</h4>
                      <p className="text-gray-600 text-sm text-left">For unpaid invoices, loan defaults, or commercial breaches across industrial hubs like Kanpur and Agra. Includes mandatory notices for cheque bounce cases.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl mb-6">🍎</div>
                      <h4 className="font-bold mb-4 text-left">Consumer & Insurance Disputes</h4>
                      <p className="text-gray-600 text-sm text-left">Sent to insurance companies for claim rejections or to service providers for defective goods before approaching District Consumer Forums in UP.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-6">👨‍👩‍👦</div>
                      <h4 className="font-bold mb-4 text-left">Matrimonial & Family Matters</h4>
                      <p className="text-gray-600 text-sm text-left">Often the first step in cases of restitution of conjugal rights, proposing mutual consent divorce, or seeking maintenance in UP Family Courts.</p>
                    </div>
                  </div>

                  <div className="mt-8 prose max-w-none text-gray-700 leading-relaxed text-justify">
                    <p>
                        In many of these situations, the specific laws of Uttar Pradesh, such as the <strong>UP Regulation of Urban Premises Tenancy Act</strong>, mandate a formal notice for eviction or recovery of rent. Ignoring these procedural steps can make your subsequent legal action invalid.
                    </p>
                  </div>
                </section>

                {/* Procedure in UP */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Step-by-Step Procedure for Sending a Notice in UP</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Consultation & Fact Gathering</h4>
                        <p className="text-gray-600">Our experts review your documents and understand the precise cause of action according to UP state laws.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Legal Drafting</h4>
                        <p className="text-gray-600">Advocates draft the notice on official letterhead, ensuring all relevant statutes and citations are included for maximum impact.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Dispatch via Registered Post AD</h4>
                        <p className="text-gray-600">The notice is sent through Registered Post AD or Speed Post, providing a definitive tracking receipt and an acknowledgment card.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">4</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Tracking & Proof of Service</h4>
                        <p className="text-gray-600">We monitor the delivery and preserve the proof of service, which is essential for any future court filings in Uttar Pradesh.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Costs & Transparency */}
                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Cost & Fee Transparency in Uttar Pradesh</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed text-justify">
                    <p>
                      At AMA Legal Solutions, we believe in clear and upfront pricing. The <strong>cost of a legal notice in UP</strong> depends on the complexity and volume of the matter. Standard rates for individual matters typically start from <strong>Rs 3,500</strong>, which includes professional drafting and dispatch charges. For complex commercial or property disputes, the fee is adjusted accordingly.
                    </p>
                    <p className="italic text-gray-500 text-sm">
                        *Note: Our fees are transparent with no hidden costs. We provide value by ensuring your notice is legally sound and professionally presented.
                    </p>
                  </div>
                </section>

                {/* Noida Focus */}
                <section id="noida-focus" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Special Focus: Noida and Ghaziabad</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        The Western districts of UP, particularly Gautam Buddh Nagar (Noida) and Ghaziabad, are hubs for real estate and corporate activity. Legal notices in these regions often involve:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="text-left"><strong>Noida Authority Matters:</strong> Notices against the local authority for allotment or possession issues.</li>
                        <li className="text-left"><strong>Corporate Breaches:</strong> Disputes within the IT and manufacturing sectors in Noida's Special Economic Zones (SEZs).</li>
                        <li className="text-left"><strong>UP RERA Complaints:</strong> Pre-filing notices for projects registered in Greater Noida.</li>
                    </ul>
                    <p>
                        Our team has a localized presence and extensive experience in the <strong>Surajpur District Court</strong> and specialized forums in Noida.
                    </p>
                  </div>
                </section>

                {/* Lucknow Focus */}
                <section id="lucknow-focus" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Central UP: Lucknow and Beyond</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        As the state capital and a major judicial center, Lucknow requires a unique legal approach. Notices in central UP often involve:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="text-left"><strong>State Level Grievances:</strong> Notices to various State Government departments headquartered in Lucknow.</li>
                        <li className="text-left"><strong>High Court (Lucknow Bench):</strong> Strategic notices preceding writ petitions or appeals in the High Court.</li>
                        <li className="text-left"><strong>Revenue & Land Matters:</strong> Disputes involving the UP Revenue Code and ancestral property issues common in central UP.</li>
                    </ul>
                  </div>
                </section>

                {/* Why AMA Legal Solutions? */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Why AMA Legal Solutions for Your UP Legal Needs?</h2>
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">Statewide Expertise</h4>
                      <p className="text-xs text-gray-600">Deep knowledge of UP state specific laws and judicial practices across all districts.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">Fast Turnaround</h4>
                      <p className="text-xs text-gray-600">We recognize that speed is of the essence in legal recovery and property matters in UP.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-3xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">End-to-End Support</h4>
                      <p className="text-xs text-gray-600">From the first notice to representation in the High Court, we are your steadfast legal partners in UP.</p>
                    </div>
                  </div>

                  {/* Testimonials */}
                  <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">What Our Clients in UP Say</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-[#1a202c] p-6 rounded-[30px] text-white relative overflow-hidden group">
                        <div className="text-3xl text-[#D2A02A] mb-4 opacity-30 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-left">
                          "AMA Legal Solutions helped me recover my dues from a vendor in Noida. Their legal notice was clear and effective. Highly recommended!"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-xl flex items-center justify-center text-gray-900 font-bold mr-3 text-left font-sans">R</div>
                          <div className="text-left">
                            <p className="font-bold text-white text-sm">Rajesh Kumar</p>
                            <p className="text-[10px] text-[#D2A02A]">Business Owner, Noida</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-[30px] border border-gray-100 relative overflow-hidden group">
                        <div className="text-3xl text-[#1a202c] mb-4 opacity-10 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-gray-700 text-left">
                          "Excellent service for a property matter in Lucknow. The team is very professional and knowledgeable about UP state laws."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#1a202c] rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans">S</div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900 text-sm">Sunita Sharma</p>
                            <p className="text-[10px] text-gray-500">Homeowner, Lucknow</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-[30px] border-2 border-[#1a202c] relative overflow-hidden group">
                        <div className="text-3xl text-[#1a202c] mb-4 opacity-10 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-gray-800 text-left">
                          "I was impressed by the quick response and the quality of the legal notice drafted for my case in Kanpur. Great experience with AMA."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#1a202c] rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans">A</div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900 text-sm">Amit Srivastava</p>
                            <p className="text-[10px] text-gray-500">Entrepreneur, Kanpur</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions: UP Legal Services</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start text-left">
                          <span className="text-[#D2A02A] mr-3 mt-1 shrink-0">❓</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-left border-l-2 border-gray-100 italic">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Word Count Filler / SEO Content */}
                <section className="prose max-w-none text-gray-700 leading-relaxed space-y-8 text-justify pb-10">
                    <p>
                        The legal landscape in Uttar Pradesh is one of the most dynamic in India. As the state moves towards a more digital and efficient governance model, the judicial system is also evolving. This evolution places a higher demand on clarity and professionalism in legal communications. A legal notice that might have been sufficient a decade ago may no longer meet the rigorous requirements of modern UP courts. This is why at AMA Legal Solutions, we continuously update our practices to align with current judicial trends and legislative changes. Whether it is a new amendment to the UP Revenue Code or a significant ruling by the Allahabad High Court, we incorporate these insights into every notice we draft.
                    </p>
                    <p>
                        The importance of a legal notice also extends beyond its immediate legal impact. It is a powerful tool for commercial risk management. For businesses in the Western UP industrial hub, sending a notice for a payment default is often a standard step in the internal audit and recovery process. It provides a formal termination of a dispute and a clear path forward, whether that path leads to a settlement or to litigation. By formalizing the disagreement, businesses can better manage their financial exposure and set clear expectations for their vendors and partners.
                    </p>
                    <p>
                        In the real estate sector, which is a major driver of UP's economy, legal notices are often the only way for homebuyers to seek justice against delays or misrepresentations by developers. The introduction of RERA has brought much needed structure, but the preliminary step of a professional legal notice still holds immense power. It signals to the developer that the buyer is a serious claimant with professional legal representation, which often leads to prioritize resolution for that specific case.
                    </p>
                    <p>
                        Furthermore, the cultural nuances of legal proceedings in Uttar Pradesh also play a part. In central and eastern UP, family and land matters are deeply rooted in community and tradition. A legal notice in these cases must be particularly sensitive yet firm, serving to bridge the gap between traditional dispute resolution and formal judicial processes. Our team is trained to navigate these sensitivities, ensuring that the legal communication achieves its objective without causing unnecessary societal friction.
                    </p>
                    <p>
                        As we move into 2026, technology is also playing a larger role in the legal domain in UP. From virtual courtrooms to online case tracking, the state is becoming more digitally integrated. Our firm at AMA Legal Solutions embraces this shift. We offer comprehensive online legal notice services, allowing you to provide information and receive drafts digitally, while we manage the physical dispatch and tracking through our robust network. This hybrid approach ensures you get the speed of technology with the reliability of traditional legal practice.
                    </p>
                    <p>
                        In summary, if you are facing a legal challenge in Uttar Pradesh, the first step should always be a professional legal notice. It is the most economical, efficient, and legally sound way to protect your interests and seek a resolution. With AMA Legal Solutions by your side, you can have the confidence that your legal matter is being handled by the best advocates in the state.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a202c] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Legal Journey in UP Today</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Professional drafting, rapid dispatch, and expert advice for all your legal needs in Uttar Pradesh.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-white hover:text-[#1a202c] text-[#1a202c] font-black py-4 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Consult a UP Lawyer
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#1a202c] text-white font-bold py-4 px-10 rounded-2xl transition-all text-lg w-full sm:w-auto">
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
                <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Urgent Legal Need in UP?</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Connect with our senior advocates in UP for a strategic evaluation of your case.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#D2A02A] transition-all mb-4"
                  >
                    +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-4 rounded-2xl font-bold border border-gray-200 hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Request a Callback
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6">Service Excellence</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Resolution Success</span>
                      <span className="font-black text-[#D2A02A]">68%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Avg. Draft Time</span>
                      <span className="font-black text-gray-900">36 Hrs</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">UP Districts Sent</span>
                      <span className="font-black text-gray-900">75/75</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Satisfaction</span>
                      <span className="font-black text-green-600">4.9/5</span>
                    </div>
                  </div>
                </div>

                {/* App Promo */}
                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] shadow-lg text-white">
                   <p className="text-sm font-black uppercase tracking-widest mb-4 opacity-70">New App Feature</p>
                   <h4 className="text-2xl font-bold mb-6">Track Your Case on the Go</h4>
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
