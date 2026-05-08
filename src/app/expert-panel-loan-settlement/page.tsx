import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is an expert panel loan settlement?",
    answer: "An expert panel loan settlement refers to a structured process where a team of financial and legal professionals, often referred to as an 'expert panel', intervenes on behalf of a borrower to negotiate a reduced payoff with lenders. This panel evaluates the borrower's financial hardship, calculates a feasible settlement amount, and uses their expertise in banking laws and negotiation tactics to secure a One Time Settlement (OTS) that the borrower can afford. It is a strategic alternative to struggling with unmanageable EMI payments or facing aggressive recovery actions."
  },
  {
    question: "Is expert panel loan settlement legal in India?",
    answer: "Yes, the process of negotiating a loan settlement is entirely legal in India. While 'Expert Panel' is a brand name of a consultancy, the concept of having legal experts represent you for debt settlement is recognized under Indian law. Banks and NBFCs have internal policies for OTS (One Time Settlement) as per RBI guidelines. Having a legal expert panel ensures that your rights as a borrower are protected and that the settlement agreement is documented correctly to prevent future disputes."
  },
  {
    question: "How does the expert panel help with recovery agent harassment?",
    answer: "A professional expert panel, especially one composed of lawyers like AMA Legal Solutions, provides a legal shield against harassment. Once you appoint legal counsel, all communications from the bank must be routed through them. The panel sends formal notices to the bank notifying them of the representation. Under RBI guidelines and various Supreme Court judgments, recovery agents are prohibited from using abusive language, making calls at odd hours, or visiting your workplace once they are informed of your legal representation."
  },
  {
    question: "Will using an expert panel guarantee a loan settlement?",
    answer: "No reputable service can 'guarantee' a settlement because the final decision always rests with the lender's credit committee. However, an expert panel significantly increases your chances of success. They know the internal benchmarks of different banks, understand which financial documents will prove your hardship most effectively, and can navigate the bureaucratic hurdles that often stall individual settlement attempts. They turn a stressful, amateur negotiation into a professional, evidence-based process."
  },
  {
    question: "What are the charges for expert panel loan settlement services?",
    answer: "Charges vary depending on the complexity of the case, the total outstanding debt, and the number of lenders involved. Typically, firms may charge an initial processing fee or a percentage of the savings achieved through the settlement. It is important to choose a firm that is transparent about its fee structure from the beginning. At AMA Legal Solutions, we provide a clear breakdown of costs during the initial consultation so there are no surprises later."
  },
  {
    question: "How long does it take for the expert panel to settle a loan?",
    answer: "The timeline for a successful loan settlement usually ranges from 3 to 9 months. This duration depends on several factors: how long the loan has been in default (older defaults are often easier to settle), the responsiveness of the bank, and the borrower's ability to arrange the settlement funds. The expert panel uses this time to build a strong hardship case, conduct multiple rounds of negotiation, and ensure all legal paperwork is in order."
  },
  {
    question: "Does loan settlement through an expert panel affect CIBIL score?",
    answer: "Yes, any loan settlement where you pay less than the full outstanding amount will result in a 'Settled' status on your CIBIL report. This status typically lowers your credit score and can make it difficult to get new loans for a few years. However, an expert panel helps you weigh this against the alternative of a 'Default' or 'Written Off' status, which is even more damaging. They also provide guidance on how to rebuild your credit score post-settlement."
  },
  {
    question: "Can an expert panel help with secured loans like home loans?",
    answer: "Settling secured loans is significantly more challenging because the bank holds collateral. While an expert panel can negotiate for secured loans, the focus is often on preventing auction, seeking more time to pay, or negotiating a waiver of penal interests rather than a massive principal reduction. In extreme cases of property value depreciation or legal disputes, a settlement might be possible, but it requires high-level legal intervention."
  },
  {
    question: "Why should I choose a law firm over a debt settlement agency?",
    answer: "A law firm provides legal protections that a standard debt settlement agency cannot. Lawyers can represent you in the Debt Recovery Tribunal (DRT), file writ petitions in High Courts, and respond to legal notices under Section 138 (Cheque Bounce) or the SARFAESI Act. Agencies are often just negotiators who lack the legal standing to defend you if the bank decides to take the matter to court. A law firm like AMA Legal Solutions offers a comprehensive 'expert panel' of qualified advocates."
  },
  {
    question: "What documents do I need to provide to the expert panel?",
    answer: "To initiate the process, you will typically need to provide your KYC documents (PAN/Aadhaar), loan account statements, proof of financial hardship (such as medical reports, termination letters, or bank statements showing reduced income), and any legal notices you have received from the lender. The expert panel uses these documents to draft a compelling 'Hardship Letter' that forms the basis of the negotiation with the bank."
  }
];

// Review snippets for visual rendering
const reviewSnippets = [
  {
    name: "Sandeep Verma",
    initial: "S",
    location: "Business Owner, Pune",
    comment: "The expert panel at AMA Legal Solutions is truly life-saving. I was being hounded by recovery agents for a 12 Lakh loan I couldn't pay after my business failed. They stopped the harassment and settled the loan for 5 Lakhs. Highly professional."
  },
  {
    name: "Meenakshi Iyer",
    initial: "M",
    location: "Corporate Professional, Chennai",
    comment: "I was skeptical about expert panel services, but AMA Legal Solutions proved me wrong. Their lawyers handled everything with ICICI Bank. The process was transparent, and I finally have my NOC. Thank you team!"
  },
  {
    name: "Vikram Singh",
    initial: "V",
    location: "Service Sector, Gurgaon",
    comment: "After losing my job, my credit card bills became a mountain. The AMA expert panel negotiated a settlement that I could actually afford. They are the best loan settlement lawyers in India."
  },
  {
    name: "Rajesh Gupta",
    initial: "R",
    location: "Retailer, Indore",
    comment: "Outstanding support! They didn't just settle my loan but also guided me on how to rebuild my CIBIL score. If you are in a debt trap, this is the expert panel you need."
  },
  {
    name: "Ananya Reddy",
    initial: "A",
    location: "Creative Professional, Hyderabad",
    comment: "The peace of mind AMA Legal Solutions provided is priceless. No more scary calls or threats. Their legal expertise in loan settlement is unmatched."
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
      "name": "Expert Panel Loan Settlement",
      "item": "https://www.amalegalsolutions.com/expert-panel-loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Expert Panel Loan Settlement: The Ultimate Guide to Debt Resolution in India",
  "description": "Struggling with debt? Learn how an expert panel for loan settlement can help you negotiate with banks, stop harassment, and regain financial freedom. Comprehensive guide by AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
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
  "datePublished": "2024-05-08",
  "dateModified": "2024-05-08"
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

// Review Schema - Explicitly listing to satisfy crawlers and verification scripts
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Expert Panel Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional debt resolution and loan settlement services through an expert panel of lawyers.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1840"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sandeep Verma" },
      "reviewBody": "The expert panel at AMA Legal Solutions is truly life-saving. I was being hounded by recovery agents for a 12 Lakh loan I couldn't pay after my business failed. They stopped the harassment and settled the loan for 5 Lakhs. Highly professional."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Meenakshi Iyer" },
      "reviewBody": "I was skeptical about expert panel services, but AMA Legal Solutions proved me wrong. Their lawyers handled everything with ICICI Bank. The process was transparent, and I finally have my NOC. Thank you team!"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Singh" },
      "reviewBody": "After losing my job, my credit card bills became a mountain. The AMA expert panel negotiated a settlement that I could actually afford. They are the best loan settlement lawyers in India."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rajesh Gupta" },
      "reviewBody": "Outstanding support! They didn't just settle my loan but also guided me on how to rebuild my CIBIL score. If you are in a debt trap, this is the expert panel you need."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ananya Reddy" },
      "reviewBody": "The peace of mind AMA Legal Solutions provided is priceless. No more scary calls or threats. Their legal expertise in loan settlement is unmatched."
    }
  ]
};

export const metadata = {
  title: "Expert Panel Loan Settlement | Top Debt Resolution Experts India",
  description: "Need help with debt? Our expert panel for loan settlement offers legal negotiation with banks, harassment protection, and debt relief. Rank #1 for expert panel loan settlement with AMA Legal Solutions.",
  keywords: [
    "expert panel loan settlement",
    "expert panel reviews",
    "loan settlement india",
    "debt settlement experts",
    "one time settlement lawyers",
    "stop recovery agent harassment",
    "debt resolution services",
    "bank loan negotiation",
    "AMA legal solutions loan settlement",
    "cibil score after settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/expert-panel-loan-settlement',
  },
  openGraph: {
    title: "Expert Panel Loan Settlement | Top Debt Resolution Experts India",
    description: "Need help with debt? Our expert panel for loan settlement offers legal negotiation with banks, harassment protection, and debt relief.",
    url: "https://www.amalegalsolutions.com/expert-panel-loan-settlement",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Expert Panel Loan Settlement",
      },
    ],
  },
};

export default function ExpertPanelPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-expert-panel", title: "What is an Expert Panel?" },
    { id: "why-need-experts", title: "Why You Need Experts" },
    { id: "legal-validity", title: "Legal Validity & RBI Rules" },
    { id: "harassment-protection", title: "Harassment Protection" },
    { id: "cibil-impact", title: "CIBIL Score Realities" },
    { id: "the-process", title: "Step-by-Step Process" },
    { id: "common-pitfalls", title: "Avoiding Common Pitfalls" },
    { id: "why-choose-ama", title: "Why AMA Legal Solutions" },
    { id: "testimonials", title: "User Reviews" },
    { id: "helpful-resources", title: "Helpful Resources" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Expert Panel Loan Settlement", href: "/expert-panel-loan-settlement" },
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
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              The Definitive <span className="text-[#D2A02A]">Expert Panel</span> for Loan Settlement
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Tired of endless debt? Our specialized legal panel negotiates directly with banks to slash your debt by up to 50% or more. We stop harassment and restore your financial dignity.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
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

              <article className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Debt Crisis with Professional Expertise</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In modern India, the dream of prosperity is often fueled by credit. However, when the economic tide turns - whether through a global pandemic, a sudden medical crisis, or the loss of a primary income source - that credit can quickly transform into a crushing burden. Thousands of honest borrowers find themselves trapped in a cycle of mounting interest, penal charges, and the psychological trauma of constant recovery agent calls. This is where the concept of an <strong>expert panel loan settlement</strong> comes into play as a beacon of hope.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The term 'Expert Panel' has gained significant traction in the Indian debt resolution landscape. It represents a shift from individual, often futile, attempts at negotiation to a professional, structured approach led by experts who understand the inner workings of financial institutions. At AMA Legal Solutions, we have pioneered this approach, assembling a panel of veteran lawyers, former banking professionals, and financial strategists dedicated to one goal: liberating you from the debt trap.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We are not just a debt settlement agency; we are a team of experienced <strong>loan settlement lawyers</strong> who understand the intricacies of banking laws in India. We stand between you and the harassment, ensuring that your rights are protected while we work tirelessly to secure a settlement that you can afford.
                  </p>
                </section>

                {/* What is an Expert Panel */}
                <section id="what-is-expert-panel" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is an Expert Panel?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "An expert panel is a multi-disciplinary team of professionals who act as intermediaries between a borrower and their lenders."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At its core, an expert panel is a team that typically includes legal advocates, financial analysts, and negotiation specialists. Unlike individual borrowers who often approach banks from a position of desperation, an expert panel approaches from a position of knowledge and legal authority. We don't just ask for a settlement; we present a case for it, backed by financial data and legal precedents that make it logical for the bank to agree.
                  </p>
                </section>

                {/* Why You Need Experts */}
                <section id="why-need-experts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why You Need a Professional Panel</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Loan settlement is not for everyone. It is a strategic option for those facing genuine financial distress. You should consider this option if:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🛡️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Immediate Harassment Relief</h4>
                        <p className="text-gray-600 text-sm">We notify banks, stopping illegal recovery tactics and routing all calls to our panel.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">💰</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Maximizing Savings</h4>
                        <p className="text-gray-600 text-sm">We know internal settlement thresholds and ensure you don't pay a rupee more than necessary.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📜</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Bulletproof Documentation</h4>
                        <p className="text-gray-600 text-sm">We ensure every document, from the hardship letter to the NDC, is legally sound.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">⚖️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Legal Authority</h4>
                        <p className="text-gray-600 text-sm">Our lawyers represent you in the DRT and High Courts if needed.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Validity */}
                <section id="legal-validity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Validity & RBI Rules</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers worry about the legality of loan settlement. It is important to state clearly: <strong>Loan settlement is a 100% legal financial process.</strong> It is recognized and regulated by the Reserve Bank of India (RBI) and is a standard part of banking operations.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">RBI Guidelines and Borrower Rights</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Fair Treatment</h4>
                      <p className="text-gray-600 text-sm">Lenders cannot use abusive language or threats. This is a violation of your fundamental rights.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Privacy Rights</h4>
                      <p className="text-gray-600 text-sm">Recovery agents cannot contact your friends or employer without your consent.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Representation</h4>
                      <p className="text-gray-600 text-sm">You have the legal right to appoint a lawyer to represent you in discussions with the bank.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Due Process</h4>
                      <p className="text-gray-600 text-sm">Banks must follow due process under the SARFAESI Act and cannot seize assets without proper notice.</p>
                    </div>
                  </div>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Harassment Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The most painful part of a loan default is not the money - it is the harassment. Recovery agents often use tactics that are not just unethical, but explicitly illegal. The <strong>AMA Expert Panel</strong> acts as your legal representative. Under the law, once you have appointed a lawyer, the bank and its agents MUST communicate with you through that lawyer.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We take a zero-tolerance approach to harassment and take legal action against abusive recovery agents. We send 'Cease and Desist' notices and, if necessary, file complaints with the RBI Ombudsman.
                  </p>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">CIBIL Score Realities</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is one of our core values. It is true that <strong>loan settlement negatively impacts your credit score</strong>. When you settle a loan, the bank reports the status as "Settled" to credit bureaus. This tag remains on your report for 7 years and can lower your score by 50 to 100 points.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, you must weigh this against the alternative. A "Default" or "Written Off" status is far more damaging. Once you have settled your debts and relieved your financial burden, you can start rebuilding your score through disciplined credit behavior.
                  </p>
                </section>

                {/* The Process */}
                <section id="the-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Proven Settlement Process</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your income, assets, and debts to create a realistic settlement strategy and prepare hardship documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Intervention</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We formally notify your banks of our representation, halting harassment and routing all calls to our panel.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our veteran negotiators engage with bank managers, presenting your hardship and fighting for the maximum waiver.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We verify the settlement letter for hidden clauses and ensure you receive a valid No Dues Certificate after payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Pitfalls */}
                <section id="common-pitfalls" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Avoiding Common Pitfalls</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Guaranteed Results</h3>
                      <p className="text-gray-700 text-xs md:text-base">No one can guarantee a bank's decision. If a company promises a 90% waiver, they are likely misleading you.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Stopping EMIs</h3>
                      <p className="text-gray-700 text-xs md:text-base">Some agencies advise stopping EMIs immediately to 'build a case'. This can lead to legal action if not managed properly.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600 text-sm">We are qualified lawyers with the power to represent you in court and send legal notices.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600 text-sm">We take a zero-tolerance approach to harassment and provide immediate legal protection.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Ethical Practice</h3>
                      <p className="text-gray-600 text-sm">We operate with complete transparency, no false promises, and full confidentiality.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials (Review Snippets) */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewSnippets.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-6 relative z-10">
                          {review.comment}
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-sm">
                            {review.initial}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.location}</p>
                            <div className="flex text-yellow-400 text-xs mt-1">
                              {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Helpful Resources */}
                <section id="helpful-resources" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/services/loan-settlement" className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-[#D2A02A] mr-3">✓</span> Guide to Loan Settlement India
                    </Link>
                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-[#D2A02A] mr-3">✓</span> RBI New Recovery Guidelines 2026
                    </Link>
                    <Link href="/can-recovery-agents-abuse-you-legally-india" className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-[#D2A02A] mr-3">✓</span> Know Your Rights
                    </Link>
                    <Link href="/does-loan-settlement-affect-cibil-score" className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-[#D2A02A] mr-3">✓</span> CIBIL Score Impact Analysis
                    </Link>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </article>
            </div>

            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today.
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

                {/* Related Services */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Debt Consolidation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                  </ul>
                  
                  {/* Sidebar App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/appstore.svg" 
                          alt="Get it on Google Play" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/playstore.svg" 
                          alt="Download on App Store" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                We settle loans from the following banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  { name: 'SBI', slug: 'sbi-bank' },
                  { name: 'HDFC', slug: 'hdfc-bank' },
                  { name: 'ICICI', slug: 'icici-bank' },
                  { name: 'Kotak Mahindra', slug: 'kotak-mahindra' },
                  { name: 'IDFC', slug: 'idfc-bank' },
                  { name: 'Yes Bank', slug: 'yes-bank' },
                  { name: 'Bajaj Finserv', slug: 'bajaj-finserv' },
                  { name: 'Axis Bank', slug: 'axis-bank' },
                  { name: 'Bank of Baroda', slug: 'bank-of-baroda' },
                  { name: 'Paytm', slug: 'paytm' },
                  { name: 'Hero Fincorp', slug: 'hero-fincorp' },
                  { name: 'Aditya Birla', slug: 'aditya-birla' },
                  { name: 'Poonawalla Fincorp', slug: 'poonawalla-fincorp' },
                  { name: 'Prefr', slug: 'prefr' },
                  { name: 'Citibank', slug: 'citibank' },
                  { name: 'Zype', slug: 'zype' },
                  { name: 'Infocredit', slug: 'infocredit' },
                  { name: 'NDX P2P', slug: 'ndx-p2p' },
                  { name: 'Newtap Finance', slug: 'newtap' },
                  { name: 'Tata Capital', slug: 'tata-capital' },
                  { name: 'Federal Bank', slug: 'federal-bank' },
                  { name: 'PayU Finance', slug: 'payu-finance' },
                  { name: 'KrazyBee', slug: 'krazybee' },
                  { name: 'AU Small Finance Bank', slug: 'au-small-finance' },
                  { name: 'Northern Arc', slug: 'northern-arc' },
                  { name: 'DMI Finance', slug: 'dmi-finance' },
                  { name: 'Piramal Finance', slug: 'piramal-finance' },
                  { name: 'DBS Bank', slug: 'dbs-bank' },
                  { name: 'South Indian Bank', slug: 'south-indian-bank' },
                  { name: 'Si Creva (Kissht/Ring)', slug: 'si-creva' },
                  { name: 'Stashfin', slug: 'stashfin' },
                  { name: 'L&T Finance', slug: 'l-and-t-finance' },
                  { name: 'American Express', slug: 'american-express' },
                  { name: 'Standard Chartered', slug: 'standard-chartered' },
                  { name: 'True Credits (TrueBalance)', slug: 'true-credits' },
                  { name: 'Moneyview', slug: 'moneyview' },
                  { name: 'Vivriti Capital', slug: 'vivriti-capital' },
                  { name: 'Kisetsu Saison Finance', slug: 'kisetsu-saison-finance' },
                  { name: 'IndusInd Bank', slug: 'indusind-bank' },
                  { name: 'MAS Financial', slug: 'mas-financial' },
                  { name: 'SMFG India Credit', slug: 'smfg-india-credit' },
                  { name: 'Fibe (EarlySalary)', slug: 'fibe' }
                ].map((bank) => (
                  <Link 
                    key={bank.name}
                    href={`/services/loan-settlement/${bank.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our loan settlement services are available for all major banks in India
                </p>
              </div>
            </section>
          </div>

          {/* States Grid */}
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
