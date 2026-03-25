import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "I lost my job and cannot pay my loan EMIs. What should I do?",
    answer: "The first step is not to panic. Inform your bank immediately about your job loss and submit proof such as your termination letter. Do not ignore their calls. If you are unable to sustain payments, you can propose a loan settlement. Engaging a legal firm like AMA Legal Solutions early can help you negotiate better terms and stop harassment while you look for a new job."
  },
  {
    question: "Can I settle my personal loan due to job loss?",
    answer: "Yes, job loss is considered a genuine financial hardship by banks and NBFCs. They are often willing to settle personal loans under a One Time Settlement (OTS) scheme if they are convinced that you have no current income source to service the full debt. We help present your case effectively to the bank's credit committee."
  },
  {
    question: "Will the bank seize my assets if I don't pay due to unemployment?",
    answer: "For unsecured loans like personal loans and credit cards, banks cannot seize your assets directly without a court order, which is rare for smaller amounts. However, for secured loans (home/car loans), they have rights under the SARFAESI Act. Legal representation is crucial to delay these actions and negotiate a settlement or restructuring before they proceed to asset possession."
  },
  {
    question: "How does loan settlement affect my future employment prospects?",
    answer: "Loan settlement itself generally does not affect your employment prospects, as it is a private financial matter between you and the bank. It does not show up on background checks done by most employers. However, it does impact your credit score, which might be checked for specific roles in the banking or finance sector."
  },
  {
    question: "Can I get a moratorium on my loan until I find a new job?",
    answer: "Banks may grant a temporary moratorium or restructuring of your loan tenure under RBI guidelines for stressed assets, but this is discretionary. You must make a formal application proving your loss of income. If the bank refuses, settlement might be the only viable option to close the debt permanently."
  },
  {
    question: "What documents do I need to prove my job loss for settlement?",
    answer: "You will need to provide your termination or relieving letter, your last 3-6 months' bank statements showing the cessation of salary credit, and your previous salary slips. If you have medical emergencies alongside job loss, those records also strengthen your hardship case."
  },
  {
    question: "Can recovery agents harass me if I am unemployed?",
    answer: "No. The RBI Fair Practices Code strictly prohibits harassment, regardless of your employment status. Agents cannot abuse you, threaten you, or contact your family/friends. If you face such harassment, our lawyers can send a legal notice to the bank and file a complaint with the Banking Ombudsman on your behalf."
  },
  {
    question: "How much of the loan amount can be waived off?",
    answer: "The waiver amount depends on the severity of your financial situation and the bank's internal policies. In cases of job loss, where recovery chances are low for the bank, we have successfully negotiated settlements where clients paid only 40% to 50% of the principal outstanding, with a 100% waiver on interest and penalties."
  },
  {
    question: "Is it better to use my Provident Fund (PF) to pay off the loan?",
    answer: "Using your long-term savings like PF to pay off an unsecured loan is generally not a wise financial decision, especially when you are unemployed. That money is your safety net. Loan settlement is a better strategic option as it allows you to get rid of the debt at a reduced cost without wiping out your entire life savings."
  },
  {
    question: "Will legal action be taken against me for defaulting on a loan?",
    answer: "Banks may initiate legal action such as filing a civil suit or checking bounce cases (Section 138) if you default. However, having a lawyer represent you shows the bank that you are aware of your rights. We handle all legal notices and court appearances, pushing the bank towards an out-of-court settlement instead of prolonged litigation."
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
      "name": "Job Lost Loan Settlement",
      "item": "https://www.amalegalsolutions.com/job-lost-loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Job Lost Loan Settlement: Expert Legal Help for Unemployed Borrowers",
  "description": "Lost your job and can't pay your loan? Learn how to settle your debt legally. Expert lawyers for job loss loan settlement in India. Stop harassment today.",
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
  "datePublished": "2024-02-04",
  "dateModified": "2024-02-04"
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
  "name": "Job Lost Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Specialized loan settlement services for individuals facing job loss.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1850"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "I lost my job in the IT layoffs and had a huge personal loan. The bank was threatening me daily. AMA Legal Solutions took over my case, stopped the calls, and settled the loan for 40% of the amount. Lifesavers!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Joshi"
      },
      "reviewBody": "Extremely professional team. They understood my situation with empathy. Being unemployed is stressful enough, but they handled the legal stress for me. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Job Lost Loan Settlement | Settle Debt After Job Loss India",
  description:
    "Struggling with loans after job loss? AMA Legal Solutions offers expert loan settlement services. We negotiate with banks to reduce your debt and stop harassment.",
  keywords: [
    "job lost loan settlement",
    "loan settlement after job loss",
    "unable to pay loan due to job loss",
    "debt settlement india",
    "one time settlement job loss",
    "personal loan settlement unemployment",
    "credit card settlement after job loss",
    "npa settlement india",
    "stop recovery harassment"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/job-lost-loan-settlement',
  },
  openGraph: {
    title: "Job Lost Loan Settlement | Settle Debt After Job Loss India",
    description: "Struggling with loans after job loss? AMA Legal Solutions offers expert loan settlement services. We negotiate with banks to reduce your debt.",
    url: "https://www.amalegalsolutions.com/job-lost-loan-settlement",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Job Lost Loan Settlement Services",
      },
    ],
  },
};

export default function JobLostLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "impact-of-job-loss", title: "Impact of Job Loss" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Rights" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "mental-wellbeing", title: "Mental Health" },
    { id: "alternatives", title: "Alternatives" },
    { id: "documents-required", title: "Documents Required" },
    { id: "why-ama-legal", title: "Why Choose AMA Legal" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Job Lost Loan Settlement", href: "/job-lost-loan-settlement" },
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
              Lost Your Job? <span className="text-[#D2A02A]">Don't Let Debt Drown You.</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert Loan Settlement Services Specifically for Unemployment Situations. Reduce Debt by up to 50% and Stop Harassment Legally.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Free Legal Advice
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Main Layout: 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-8">
            
            {/* Left Column: Sticky Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 px-2">Table of Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
               </div>

              <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Navigating Debt After Job Loss</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Losing a job is one of the most stressful events in a person's life. The sudden loss of income brings with it a wave of uncertainty, affecting not just your career but your entire financial stability. In the midst of updating your resume and interviewing for new roles, the looming pressure of outstanding loans - be it Personal Loans, Credit Card bills, or Home Loans - can feel overwhelming.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    If you are searching for <strong>job lost loan settlement</strong> solutions, know that you are not alone. Thousands of professionals across India face this crisis annually. The good news is that the Indian banking system and the Reserve Bank of India (RBI) have provisions for borrowers in genuine distress. You do not have to ruin your life over debt.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in helping unemployed individuals manage and settle their debts with dignity. We step in to handle the banks, stop the harassment, and negotiate a settlement that gives you the breathing room you need to get your career back on track.
                  </p>
                </section>

                {/* Impact of Job Loss */}
                <section id="impact-of-job-loss" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Financial Impact of Unemployment on Loans</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    When your monthly salary credit stops, your EMI cycle does not. This mismatch creates a domino effect that can quickly spiral out of control if not managed legally and strategically.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-700 mb-3">The Debt Trap</h3>
                      <p className="text-gray-700">
                        Many borrowers wipe out their savings to pay EMIs for the first few months. Once savings run dry, they borrow from apps or use credit cards, entering a vicious cycle of debt.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-700 mb-3">Harassment Stress</h3>
                      <p className="text-gray-700">
                        Recovery agents often do not care about your job loss. Their relentless calls can destroy your mental peace, affecting your ability to perform well in job interviews.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-700 mb-3">Legal Consequences</h3>
                      <p className="text-gray-700">
                        Defaults can lead to legal notices under Section 138 (Cheque Bounce) or arbitration proceedings, adding legal fees to your existing financial burden.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-700 mb-3">Credit Score Damage</h3>
                      <p className="text-gray-700">
                        Missing just one payments hurts your CIBIL score. A series of defaults can lock you out of the formal financial system for years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Is Loan Settlement an Option After Job Loss?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Yes, loan settlement is often the most practical solution for unemployed borrowers. Also known as a <strong>One Time Settlement (OTS)</strong>, it is a legal agreement between you and the lender.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#D2A02A] p-6 mb-6">
                    <p className="text-lg italic text-blue-900">
                      "In a settlement, the bank agrees to accept a reduced lump-sum payment (often 30-50% less than the outstanding) to close the loan account permanently, considering your inability to pay due to job loss."
                    </p>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Banks are pragmatic institutions. They understand that an unemployed borrower cannot pay. Rather than spending money on legal cases to recover nothing, they prefer to recover a portion of the principal amount and close the file. This is where our legal expertise comes in - to convince the bank of your genuine hardship and secure the lowest possible settlement amount.
                  </p>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">RBI Guidelines Protecting Unemployed Borrowers</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    You have rights even if you are a defaulter. The Reserve Bank of India (RBI) has laid down strict frameworks to protect borrowers from predatory practices.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                      <div>
                        <strong className="text-gray-900">Right to Fair Treatment:</strong> Lenders cannot use muscle power or intimidation specific to your vulnerability as an unemployed person.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                      <div>
                        <strong className="text-gray-900">Privacy Protection:</strong> Recovery agents cannot visit your previous workplace to defame you or contact your prospective employers.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                      <div>
                        <strong className="text-gray-900">Notice Period:</strong> For secured loans, banks must issue a 60-day notice under the SARFAESI Act before initiating any asset steps, giving you time to seek legal counsel.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                      <div>
                        <strong className="text-gray-900">Right to Approach Ombudsman:</strong> If a bank refuses to acknowledge your hardship or harasses you, you can file a complaint with the Banking Ombudsman.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Step-by-Step Process for Job Loss Settlement</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Hardship Documentation</h3>
                        <p className="text-gray-700">We collect your termination letter, bank statements showing income stoppage, and other financial documents. This "Evidence of Hardship" is the foundation of our negotiation strategy.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Notification</h3>
                        <p className="text-gray-700">We send a formal legal representation letter to your creditors, informing them of your unemployment and our involvement. This legally mandates them to route communication through us, often stopping direct harassment.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Negotiation</h3>
                        <p className="text-gray-700">Our lawyers negotiate with the bank's recovery department. We leverage your "Job Loss" status to demand maximum waiver on interest and principal. We aim for a settlement amount that fits your current depleted savings.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Closure and Fresh Start</h3>
                        <p className="text-gray-700">Upon agreement, we review the Settlement Letter for any hidden clauses. Once paid, we ensure you receive the No Dues Certificate. You are now debt-free and can focus solely on your career.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">5 Common Mistakes Unemployed Borrowers Make</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Panic often leads to poor decision-making. In our experience handling thousands of cases, we see borrowers making the same critical errors that worsen their situation. Avoid these pitfalls:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Going Incommunicado</h3>
                      <p className="text-gray-700">
                        The biggest mistake is stopping all communication with the bank. If you stop picking up calls, the bank marks you as a "willful defaulter" rather than someone in genuine hardship. This triggers aggressive legal action. Instead, communicate your status in writing.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Taking New Loans to Pay Old Ones</h3>
                      <p className="text-gray-700">
                        Do not take a high-interest instant loan from an app to pay your credit card bill. This is the classic "Debt Trap." You are digging a deeper hole. Settlement handles the existing debt; borrowing more just adds to the fire.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Liquidating Long-Term Assets</h3>
                      <p className="text-gray-700">
                        Your Provident Fund (PF) and Insurance Policies are your safety net for old age. Cashing them out now to pay an unsecured loan is a financial disaster. Unsecured loans can be settled for cheap; your retirement savings are irreplaceable.
                      </p>
                    </div>
                     <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Paying Token Amounts</h3>
                      <p className="text-gray-700">
                         Recovery agents often say, "Just pay ₹5,000 now and we will hold the account." This small payment often goes towards interest/charges and does not reduce the principal. Only pay when you have a formal written settlement agreement.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. Trusting Fake Settlement Agencies</h3>
                      <p className="text-gray-700">
                        The internet is full of "Debt Doctors" promising to wipe your debt for a fee. Ensure you are hiring a registered Law Firm. Only lawyers have the standing to represent you legally and protect you from harassment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mental Well-being */}
                <section id="mental-wellbeing" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Mental Health During Financial Crisis</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      It is impossible to separate your financial health from your mental health. The stress of debt collection can lead to anxiety, depression, and family conflict.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      <strong>Remember: Your Net Worth is Not Your Self-Worth.</strong>
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Losing a job is a temporary setback, not a life sentence. Debt is a contractual problem, not a moral failure. By taking proactive legal steps like loan settlement, you are taking control back from the banks. This empowerment is the first step to feeling better.
                   </p>
                   <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-blue-50 p-6 rounded-xl">
                      <li><strong>Talk to Family:</strong> Do not hide the debt. The secrecy is more stressful than the debt itself.</li>
                      <li><strong>Focus on What You Can Control:</strong> You cannot control the bank's automated calls (until you hire us), but you can control your job search and expenses.</li>
                      <li><strong>Seek Professional Help:</strong> If the stress is overwhelming, please speak to a counselor. For the legal stress, let us carry the burden.</li>
                   </ul>
                </section>

                {/* Alternatives */}
                <section id="alternatives" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Alternatives: Settlement or Restructuring?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Is settlement the only way? Not necessarily. Depending on your confidence in finding a new job soon, you might consider:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">Option</th>
                          <th className="px-6 py-3">What is it?</th>
                          <th className="px-6 py-3">Pros</th>
                          <th className="px-6 py-3">Cons</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Loan Settlement</td>
                          <td className="px-6 py-4">Paying a reduced lump sum to close the loan.</td>
                          <td className="px-6 py-4 text-green-600">Huge savings, immediate debt freedom.</td>
                          <td className="px-6 py-4 text-red-600">Impacts credit score temporarily.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Loan Restructuring</td>
                          <td className="px-6 py-4">Extending tenure to reduce EMI amount.</td>
                          <td className="px-6 py-4 text-green-600">Protects credit score better.</td>
                          <td className="px-6 py-4 text-red-600">Total interest burden increases significantly.</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-bold">Moratorium</td>
                          <td className="px-6 py-4">A temporary pause on EMI payments (3-6 months).</td>
                          <td className="px-6 py-4 text-green-600">Immediate cash flow relief.</td>
                          <td className="px-6 py-4 text-red-600">Hard to get approval; interest keeps piling up.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">
                    *Our lawyers can help you evaluate which option is best suited for your specific career and financial outlook.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Required Documents for Job Loss Settlement</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    To process your request specifically under the "Job Loss" hardship category, keep these ready:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">1.</span> Termination / Relieving Letter</li>
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">2.</span> Last 3 Salary Slips</li>
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">3.</span> Bank Statement (Last 6 Months)</li>
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">4.</span> PAN Card & Aadhar Card</li>
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">5.</span> Loan Account Details</li>
                    <li className="bg-gray-50 p-4 rounded-lg flex items-center"><span className="text-[#D2A02A] mr-3 font-bold">6.</span> Proof of Zero Income (if available)</li>
                  </ul>
                </section>

                {/* Why AMA Legal */}
                <section id="why-ama-legal" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Why Trust AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Shield</h3>
                      <p className="text-gray-600 text-sm">We are a law firm, not a call center. Our legal notices carry weight and force banks to act fairly.</p>
                    </div>
                    <div className="p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Max Savings</h3>
                      <p className="text-gray-600 text-sm">We know the lowest limits banks are authorized to accept. We fight for every rupee of savings.</p>
                    </div>
                    <div className="p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="text-4xl mb-4">❤️</div>
                      <h3 className="font-bold text-xl mb-2">Empathy First</h3>
                      <p className="text-gray-600 text-sm">We understand the trauma of job loss. Our approach is supportive, confidential, and judgment-free.</p>
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Real Stories of Relief</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                      <p className="text-gray-700 italic mb-4">"After 10 years in software, I was laid off overnight. The credit card bills were huge. I was scared to pick up the phone. AMA Legal stepped in, handled the bank, and settled the debt. I could finally focus on interviews and landed a new job last month."</p>
                      <p className="font-bold text-gray-900">- Ankit M., Pune</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                      <p className="text-gray-700 italic mb-4">"I had a personal loan and no savings when my company shut down. The harassment was unbearable. AMA Legal not only stopped the calls but got me a 60% waiver on the interest. I am debt-free today."</p>
                      <p className="font-bold text-gray-900">- Sarah J., Mumbai</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
                <section className="bg-[#1a202c] rounded-xl p-8 text-center text-white mt-12">
                  <h2 className="text-2xl font-bold mb-4">Restart Your Career Without Debt Stress</h2>
                  <p className="mb-6 opacity-90">Let us handle the banks while you focus on finding your next job.</p>
                  <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all text-lg">
                      Schedule a Free Consultation
                    </button>
                  </Link>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar with 2 Containers */}
            <div className="hidden lg:block sticky top-24 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Loss Support</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Specific legal help for unemployed borrowers. Complete confidentiality assured.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact"
                  className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Get Help Now
                </Link>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/check-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Cheque Bounce Lawyer
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-legal-notice" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Send Legal Notice
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-services-near-me" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Legal Services Near Me
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
