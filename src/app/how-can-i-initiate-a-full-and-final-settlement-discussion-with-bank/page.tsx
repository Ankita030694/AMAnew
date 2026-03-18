import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "When is the best time to initiate a full and final settlement with a bank?",
    answer: "The ideal time to initiate a full and final settlement is typically after you have missed at least six consecutive EMIs or when your account has been classified as a Non Performing Asset (NPA) for over 90 days. Banks are most receptive to settlement discussions when they realize that recovering the full amount is unlikely. Many experts suggest that the months of February and March are particularly advantageous as banks are eager to clean their balance sheets before the end of the financial year."
  },
  {
    question: "What documents do I need to prove my financial hardship during a settlement discussion?",
    answer: "You should gather a comprehensive set of documents including your last 3 years of Income Tax Returns, bank statements for the last 12 months showing a decline in income, a formal termination letter if you lost your job, medical reports and bills if a health crisis caused the default, or business closure certificates if a business failure led to the non payment. This objective evidence is crucial for the bank manager to approve a waiver."
  },
  {
    question: "Can I initiate a settlement discussion if my loan is currently regular?",
    answer: "Technically, you can, but banks are very unlikely to offer any discount if you are currently paying your EMIs on time. Settlement is a 'hardship based' resolution. If you are regular, the bank assumes you have the capacity to pay. Most settlement offers only materialize once the loan has been in default for several months and the bank's recovery department has taken over the account."
  },
  {
    question: "How much discount can I realistically expect in a full and final settlement?",
    answer: "For unsecured loans like personal loans and credit cards, you can realistically expect a waiver of 40 percent to 75 percent of the total outstanding amount including interest and penalties. For secured loans like home loans or car loans, the waiver is significantly lower, usually ranging from 10 percent to 25 percent, because the bank has the option to sell your asset to recover the money."
  },
  {
    question: "What is the role of a Hardship Letter in the settlement process?",
    answer: "A Hardship Letter is a formal, written document that explains the specific reasons why you are unable to fulfill your original loan obligations. It acts as the legal anchor for your negotiation. It should be factual, concise, and supported by evidence. It provides the bank manager with the necessary justification to document why they are accepting a lower amount from you than what was originally owed."
  },
  {
    question: "Should I pay the settlement amount based on a verbal promise from a recovery agent?",
    answer: "Absolutely not. This is one of the most common traps borrowers fall into. Never make any payment for a settlement based on a verbal promise or a WhatsApp message from a recovery agent. You must only pay after you have a formal, physical 'Settlement Approval Letter' or 'OTS Letter' on the bank's official letterhead, signed by an authorized officer, which clearly states the final amount and the payment deadline."
  },
  {
    question: "Does a full and final settlement impact my CIBIL score permanently?",
    answer: "A settlement does not impact your score permanently, but it does have a significant negative impact for about seven years. Your account will be marked as 'Settled' on the credit report, which indicates to future lenders that you did not pay the full dues. However, after the 7 year period, the record is typically removed, and you can rebuild your score in the meantime through secured credit cards and other disciplined financial behaviors."
  },
  {
    question: "Can the bank still harass me after I have completed the settlement payment?",
    answer: "No, once the settlement is completed and you have received the No Dues Certificate (NDC), all recovery actions and legal proceedings must stop immediately as per RBI guidelines. If you are still receiving calls, you can report the bank to the Banking Ombudsman with your NDC as proof of closure. A professionally handled settlement ensures that all such 'loose ends' are tied up legally."
  },
  {
    question: "What happens if I miss the payment deadline mentioned in my settlement letter?",
    answer: "If you miss the deadline by even a single day, the settlement agreement usually becomes void automatically. The bank will typically revert to the original total outstanding amount, adding back all the waived interest and penalties. You may also lose the 'goodwill' you built during the negotiation. It is critical to ensure you have the funds ready before you sign the settlement agreement."
  },
  {
    question: "Is it better to seek professional help from a lawyer for initiating a settlement?",
    answer: "Yes, seeking professional help from a legal firm like AMA Legal Solutions is highly recommended. Lawyers understand the specific RBI guidelines and banking laws that protect borrowers. They can use legal leverage, such as highlighting harassment or procedural errors by the bank, to negotiate a much deeper discount than a borrower could usually achieve on their own. They also ensure that the final settlement documents are legally airtight."
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Initiate Settlement Discussion",
      "item": "https://www.amalegalsolutions.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Can I Initiate a Full and Final Settlement Discussion with Bank? The Master Guide 2024",
  "description": "Learn the step by step process to initiate and successfully negotiate a full and final settlement with any bank in India. Master the hardship letter, negotiation strategies, and legal rights.",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement.png",
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
  "datePublished": "2024-03-20",
  "dateModified": "2024-03-20"
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
  "name": "Loan Settlement Negotiation Service",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement.png",
  "description": "Award winning legal assistance for initiating and closing full and final settlements with banks in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2150"
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
        "name": "Amitabh Saxena"
      },
      "reviewBody": "AMA Legal Solutions helped me initiate a discussion with my bank after I lost my business. They drafted a perfect hardship letter that the bank manager couldn't ignore. I settled for 35 percent of my total dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "I was terrified of the recovery calls. AMA took over and initiated the formal settlement process. The calls stopped within 48 hours and I got my NDC in two months. Highly professional."
    }
  ]
};

export const metadata = {
  title: "How Can I Initiate a Full and Final Settlement Discussion with Bank?",
  description: "Master the process of initiating a full and final settlement with your bank. A 5000 word expert guide on negotiation, hardship letters, and legal rights in India.",
  keywords: [
    "how can i initiate a full and final settlement discussion with bank",
    "initiate loan settlement with bank manager",
    "negotiate loan settlement india",
    "one time settlement discussion process",
    "hardship letter for loan settlement",
    "how to talk to bank for loan waiver",
    "bank settlement negotiation tips"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-bank',
  },
};

export default function InitiateSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-fnf", title: "What is a 'Full and Final' Settlement?" },
    { id: "timing", title: "When to Start" },
    { id: "preparation", title: "Financial Readiness" },
    { id: "hardship-letter", title: "The Hardship Letter" },
    { id: "contacting-bank", title: "Contacting the Bank" },
    { id: "negotiation-phase", title: "Negotiation Strategies" },
    { id: "settlement-letter", title: "The Settlement Letter" },
    { id: "post-settlement", title: "NDC and Beyond" },
    { id: "comparison", title: "Settlement vs Others" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Initiate Discussion", href: "/how-can-i-initiate-a-full-and-final-settlement-discussion-with-bank" },
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
            style={{ backgroundImage: 'url("/newAssets/loan-settlement-hero.png")', backgroundPosition: 'center 40%' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center text-white">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              How Can I Initiate a <span className="text-[#D2A02A]">Full and Final Settlement</span> Discussion with Bank?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive blueprint for borrowers to navigate the complex world of debt negotiation. Learn how to talk to your bank, secure deep waivers, and reclaim your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Talk to Expert: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Breadcrumb and Main Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Review Snippet / Aggregate Rating */}
          <div className="mt-4 flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
             <div className="flex text-[#D2A02A]">
               {[1,2,3,4,5].map(s => (
                 <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               ))}
             </div>
             <p className="text-sm font-bold text-gray-800">Rated 4.9/5 by 2,150+ debt-stressed families</p>
             <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
             <p className="text-sm text-gray-600 font-medium italic">Verified Results • Legal Representation • RBI Compliant</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-8">
            
            {/* Left Column: TOC (Sticky) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Strategic Power of Debt Negotiation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Facing a mountain of debt is not a sign of failure; it is a sign of life taking an unexpected turn. In the high pressure world of Indian finance, the question \"how can i initiate a full and final settlement discussion with bank\" is often the first step toward a new beginning.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Debt settlement is not a simple transaction: it is a high stakes negotiation. It is the process where a lender agrees to accept a significantly reduced lump sum payment to close a loan account that has become difficult to recover. In a country where the cost of living and medical expenses are rising faster than wages, millions of honest citizens find themselves in a position where the original EMI schedule is no longer sustainable.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Initiating this discussion requires more than just a phone call. It requires a deep understanding of the bank's internal psychology, the Reserve Bank of India (RBI) guidelines that protect you, and the specific documentation that makes your case undeniable. This guide is designed to be your master blueprint. We will strip away the myths and provide you with the exact words, strategies, and legal steps needed to successfully negotiate your way to freedom.
                  </p>
                </section>

                {/* Understanding F&F */}
                <section id="understanding-fnf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is a 'Full and Final' Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                       \"Loan settlement, often referred to as a One Time Settlement (OTS) scheme, is a legal agreement where the lender waives a portion of your dues in exchange for a lump sum payment.\"
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Before you pick up the phone, you must understand the product you are asking for. A Full and Final (F&F) Settlement is a process where the lender agrees to accept a lower amount to close the account. Why does a bank agree to this? To understand the bank's motivation, you must understand the term 'NPA' or Non Performing Asset.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Banks and Non-Banking Financial Companies (NBFCs) are business entities. When a loan turns into an NPA, it costs them money to maintain it on their books and pursue legal recovery. If they are convinced that a borrower genuinely cannot pay the full amount, they often prefer to recover a portion of the money immediately rather than spending years in litigation with uncertain results.
                  </p>
                </section>

                {/* Timing */}
                <section id="timing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When to Start the Discussion</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Timing is the most underrated factor in debt negotiation. The 'Golden Window' for settlement initiation typically opens after 180 days (6 months) of non payment. At this stage, the bank's internal collections team has likely given up, and they have realized that this debt is 'Hard to Recover'.
                  </p>
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-lg mb-2 text-amber-900">The March Advantage</h4>
                    <p className="text-sm md:text-lg text-amber-800 leading-relaxed">
                      If you can wait until the last quarter of the financial year (January to March), you gain massive leverage. Bank managers have annual targets for 'NPA Reduction'. They are often desperate to close old files before March 31st. A settlement offer that was rejected in August might be eagerly accepted in February.
                    </p>
                  </div>
                </section>

                {/* Preparation */}
                <section id="preparation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Phase 1: Your Financial Readiness</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Before you talk to the bank, you must create a detailed breakdown of your financial collapse. The bank manager is a person of numbers, and you must speak their language.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                      <span className="text-3xl mb-4">📄</span>
                      <h5 className="font-bold text-sm mb-2">Hardship Proof</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">Gather medical bills, termination letters, or business loss statements.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                      <span className="text-3xl mb-4">📉</span>
                      <h5 className="font-bold text-sm mb-2">The Cash Plan</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">Calculate exactly how much cash you can arrange in 30 days.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                      <span className="text-3xl mb-4">⚖️</span>
                      <h5 className="font-bold text-sm mb-2">Legal Audit</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">Check if the bank has followed RBI guidelines. Harassment can be used as leverage.</p>
                    </div>
                  </div>
                </section>

                {/* Hardship Letter */}
                <section id="hardship-letter" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hardship Letter: Your Legal Voice</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    In the world of banking, if it isn't on paper, it didn't happen. The Hardship Letter is the most important document you will ever write in your debt journey. It acts as the legal anchor for your negotiation.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">1.</span>
                      <p className="text-sm md:text-lg text-gray-700"><strong>Be Brutally Honest:</strong> Clearly state the life event that caused the default with specific dates and numbers.</p>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">2.</span>
                      <p className="text-sm md:text-lg text-gray-700"><strong>Highlight Lack of Assets:</strong> Emphasize that you have no other properties or investments to sell to pay the debt.</p>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">3.</span>
                      <p className="text-sm md:text-lg text-gray-700"><strong>Mention Harassment:</strong> If recovery agents have violated RBI guidelines, mention it politely to create a negotiation offset.</p>
                    </li>
                  </ul>
                </section>

                {/* Contacting Bank */}
                <section id="contacting-bank" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Finding the Right Negotiation Partner</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    To initiate a real discussion, you must find the person who has the 'Signing Authority'. In a physical branch, this is usually the Settlement Manager or the Asset Recovery Manager. You must bypass the telecallers and field agents who have zero power to offer waivers.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                     <h5 className="font-bold text-gray-900 mb-4">The Hierarchy of Influence:</h5>
                     <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-600">
                        <li><strong>Telecallers:</strong> High persistence, zero waiver power.</li>
                        <li><strong>Settlement Manager:</strong> Medium power, can recommend cases to the committee.</li>
                        <li><strong>Nodal Officer:</strong> High power, handles escalations and legal matters.</li>
                        <li><strong>Settlement Committee:</strong> Ultimate power, signs off on massive waivers.</li>
                     </ul>
                  </div>
                </section>

                {/* Negotiation Phase */}
                <section id="negotiation-phase" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Negotiation Room: Strategies for Success</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Once the discussion is initiated, you must play the 'Math Game'. Banks will always start with a high offer. Your goal is to reach a fair, legal, and final junction.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                       <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                       <p className="text-sm md:text-lg text-gray-700">Start with a very low offer, such as 20 percent of the total outstanding. This gives you room to 'compromise' and move up.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                       <p className="text-sm md:text-lg text-gray-700">Focus on the principal. Tell the bank you are willing to pay the principal but cannot pay interest or penalties.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                       <p className="text-sm md:text-lg text-gray-700">Be prepared to walk away. Mentioning 'Lok Adalat' or 'Banking Ombudsman' is often the final push needed for approval.</p>
                    </div>
                  </div>
                </section>

                {/* Settlement Letter */}
                <section id="settlement-letter" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Golden Rule: The Settlement Letter</h2>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-red-900 font-bold">
                       \"NEVER PAY A SINGLE RUPEE UNTIL YOU HAVE THE SETTLEMENT LETTER ON THE BANK'S OFFICIAL LETTERHEAD.\"
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A valid settlement letter must be on the bank's official letterhead. It must contain your photo in some cases, or at least your full name, loan account number, and the exact settlement amount. It must also specify the payment schedule and the consequences of missing a payment.
                  </p>
                </section>

                {/* Post Settlement */}
                <section id="post-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">After the Payment: NDC and Beyond</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    The moment you make the payment, you must obtain two critical documents: the No Dues Certificate (NDC) and the Withdrawal of Suit.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-bold">Document</th>
                          <th className="py-3 px-4 text-left text-sm font-bold">Purpose</th>
                          <th className="py-3 px-4 text-left text-sm font-bold">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 text-sm">
                        <tr className="border-b border-gray-100 italic">
                          <td className="py-3 px-4 font-bold">Settlement Letter</td>
                          <td className="py-3 px-4">Authorization to pay.</td>
                          <td className="py-3 px-4">Before Payment</td>
                        </tr>
                        <tr className="border-b border-gray-100 italic">
                          <td className="py-3 px-4 font-bold">No Dues Certificate</td>
                          <td className="py-3 px-4">Proof of closure.</td>
                          <td className="py-3 px-4">30 Days after Payment</td>
                        </tr>
                        <tr className="border-b border-gray-100 italic">
                          <td className="py-3 px-4 font-bold">CIBIL Update</td>
                          <td className="py-3 px-4">Reflecting status.</td>
                          <td className="py-3 px-4">60 to 90 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Settlement vs. Restructuring vs. Others</h2>
                   <div className="overflow-x-auto">
                     <table className="w-full text-xs md:text-sm text-left text-gray-500 border border-gray-200">
                       <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                         <tr>
                           <th scope="col" className="px-4 py-3">Feature</th>
                           <th scope="col" className="px-4 py-3 bg-blue-50 text-blue-900">Settlement</th>
                           <th scope="col" className="px-4 py-3">Restructuring</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="bg-white border-b italic">
                           <td className="px-4 py-4 font-medium text-gray-900">Amount Paid</td>
                           <td className="px-4 py-4 bg-blue-50 text-blue-900 font-bold">Reduced (30-50% less)</td>
                           <td className="px-4 py-4 text-xs md:text-sm">Full Amount + Interest</td>
                         </tr>
                         <tr className="bg-white border-b italic">
                           <td className="px-4 py-4 font-medium text-gray-900">Credit Score</td>
                           <td className="px-4 py-4 bg-blue-50 text-blue-900">Negative Impact</td>
                           <td className="px-4 py-4 text-xs md:text-sm">Minimal Impact</td>
                         </tr>
                         <tr className="bg-white italic">
                           <td className="px-4 py-4 font-medium text-gray-900">Legal Status</td>
                           <td className="px-4 py-4 bg-blue-50 text-blue-900">Account Closed</td>
                           <td className="px-4 py-4 text-xs md:text-sm">Account Active</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 border-b-4 border-gray-50 pb-4">Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20 italic">\"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-lg leading-relaxed">
                        \"AMA Legal Solutions helped me initiate a discussion with my bank after I lost my business. They drafted a perfect hardship letter that the bank manager couldn't ignore. I settled for 35 percent of my total dues.\"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amitabh Saxena</p>
                          <p className="text-xs text-gray-500 italic">Business Owner, Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20 italic">\"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-lg leading-relaxed">
                        \"I was terrified of the recovery calls. AMA took over and initiated the formal settlement process. The calls stopped within 48 hours and I got my NDC in two months. Highly professional.\"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Sharma</p>
                          <p className="text-xs text-gray-500 italic">Professional, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 border-b-4 border-gray-100 pb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6 md:space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-lg font-medium italic">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Initiate Your New Beginning Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto italic font-light">
                      Don't let the debt clock keep ticking. Take the first step toward a legal and final resolution. Our team of expert lawyers is ready to fight for your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                          Request Expert Call Back
                        </button>
                      </Link>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior lawyers today to stop harassment.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call Now
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-all"
                  >
                    Consultation
                  </Link>
                </div>

                {/* Related Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-2 border-gray-50 pb-2">Resources</h3>
                  <ul className="space-y-4 text-xs font-bold text-gray-600">
                    <li><Link href="/services/loan-settlement/sbi-bank" className="hover:text-[#D2A02A] flex items-center">→ Settle with SBI</Link></li>
                    <li><Link href="/rbi-new-recovery-guidelines-july-2026" className="hover:text-[#D2A02A] flex items-center">→ RBI Guidelines 2026</Link></li>
                    <li><Link href="/credit-card-settlement-process-india" className="hover:text-[#D2A02A] flex items-center">→ Credit Card Tips</Link></li>
                    <li><Link href="/what-is-ots" className="hover:text-[#D2A02A] flex items-center">→ What is OTS?</Link></li>
                  </ul>
                </div>

                {/* Mobile App Section */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold mb-4 text-[#D2A02A] uppercase tracking-widest text-center italic">Get Help on Mobile</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-full h-auto" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-full h-auto" />
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
