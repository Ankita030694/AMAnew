import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is loan settlement and how does it work in India?",
    answer: "Loan settlement, also known as debt settlement in India, is a legal financial process where a borrower negotiates with the lender to pay a lump sum amount that is lower than the total outstanding debt to close the loan account. This is typically an option for borrowers who are unable to repay their full dues due to genuine financial hardship such as job loss, medical emergencies, or business failure. In India, this process involves a formal agreement called a One Time Settlement (OTS) scheme, where the bank agrees to waive a portion of the interest and penalties in exchange for a one-time payment."
  },
  {
    question: "Is loan settlement legal in India?",
    answer: "Yes, loan settlement is a completely legal process in India. It is governed by guidelines issued by the Reserve Bank of India (RBI) and is a standard banking practice for recovering non-performing assets (NPAs). Banks and NBFCs prefer settlement over long-drawn legal battles when they are convinced of the borrower's genuine inability to pay. However, it is crucial to have proper legal representation from a loan settlement lawyer to ensure the settlement terms are fair and documented correctly."
  },
  {
    question: "How much can I save through loan settlement?",
    answer: "The amount you can save depends on various factors including the type of loan, the age of the default, your current financial status, and the bank's policies. Typically, borrowers can save anywhere from 30% to 50% of the total outstanding amount. In some cases involving older defaults or high accumulated interest, savings can be even higher. Our expert negotiators aim to maximize these savings while ensuring the settlement amount is manageable for you."
  },
  {
    question: "Will loan settlement affect my CIBIL score?",
    answer: "Yes, opting for a loan settlement will have an impact on your CIBIL score. When a loan is settled instead of being paid in full, the account status is reported as 'Settled' rather than 'Closed' to credit bureaus. This can drop your score by 50-100 points. However, this is often a better alternative to a 'Written Off' status or continuing default. Once your finances stabilize, you can rebuild your score over 12-24 months through disciplined credit behavior."
  },
  {
    question: "Can I settle a secured loan like a home loan?",
    answer: "Settling a secured loan like a home loan or car loan is more complex than settling unsecured loans. Since the bank has collateral it can seize and sell to recover dues, they are less likely to agree to a significant reduction. However, settlement is still possible if the value of the asset has depreciated significantly or if there are legal disputes regarding the property. In such cases, expert legal intervention is essential to negotiate a favorable outcome."
  },
  {
    question: "How long does the entire settlement process take?",
    answer: "The timeline for loan settlement varies from case to case. On average, the loan settlement process in India takes between 3 to 6 months to reach a final agreement. This duration allows for multiple rounds of negotiation, verification of financial documents, and internal approvals from the bank's credit committee. Our team works diligently to expedite this process while ensuring no shortcuts are taken that could jeopardize your legal standing."
  },
  {
    question: "What is the role of a lawyer in loan settlement?",
    answer: "A loan settlement lawyer plays a critical role in protecting your rights during the settlement process. They handle all communications with the bank, preventing harassment and ensuring you are not coerced into unfair terms. Lawyers understand the legal nuances of the SARFAESI Act, DRT proceedings, and RBI guidelines, allowing them to negotiate from a position of strength. They also ensure the final settlement letter is legally sound and that you receive a proper No Dues Certificate."
  },
  {
    question: "Can banks harass me for recovery during the settlement process?",
    answer: "Harassment by recovery agents is illegal under RBI guidelines and Supreme Court judgments. Once you engage a legal firm like AMA Legal Solutions, we formally notify the bank of your representation. This typically stops direct harassment as all communication must then be routed through your legal counsel. If harassment continues, we can take legal action against the bank and recovery agents for violating your rights."
  },
  {
    question: "What is a One Time Settlement (OTS) scheme?",
    answer: "A One Time Settlement (OTS) is a scheme offered by banks to recover dues from borrowers who have defaulted. Under an OTS, the borrower agrees to pay a specific negotiated amount in a single payment (or a few installments) to close the loan account. This amount is usually less than the total outstanding dues. Once the OTS amount is paid, the bank issues a No Dues Certificate, and the legal relationship regarding that loan ends."
  },
  {
    question: "Can I get a loan after settlement?",
    answer: "Getting a new loan immediately after a settlement can be difficult due to the negative impact on your credit score. Most lenders view 'Settled' accounts as a risk. However, this is not a permanent ban. By practicing good financial habits, such as paying other bills on time and using secured credit cards, you can improve your score. Typically, after 2-3 years of good credit behavior, you become eligible for new loans again."
  },
  {
    question: "Do I need to pay the entire settlement amount at once?",
    answer: "Ideally, banks prefer a single lump-sum payment for settlements. However, depending on your financial situation and negotiation, it is often possible to pay the settlement amount in a few installments over 3 to 6 months. Our negotiators strive to arrange a payment schedule that aligns with your cash flow to ensure you do not default on the settlement agreement itself."
  },
  {
    question: "What happens if I fail to pay the settlement amount?",
    answer: "If you fail to pay the agreed settlement amount within the stipulated time, the OTS agreement becomes null and void. The bank will then revert to the original outstanding amount, adding back all waived interest and penalties. They may also initiate or resume legal proceedings. Therefore, it is crucial to agree only to a settlement amount that you are certain you can pay."
  },
  {
    question: "Is settlement better than bankruptcy?",
    answer: "For most individuals in India, loan settlement is a far better option than filing for bankruptcy or insolvency. Bankruptcy is a long, complex legal process that severely damages your financial reputation and restricts your ability to hold certain positions or assets. Settlement offers a dignified exit route that resolves the debt specifically without the sweeping legal incapacities associated with bankruptcy."
  },
  {
    question: "Can credit card debt be settled?",
    answer: "Yes, credit card debt settlement is one of the most common types of debt settled in India. Due to the unsecured nature of credit cards and the exorbitant interest rates (often 30-40% per annum), banks are often willing to settle for a reasonable principal amount rather than write off the entire debt. We specialize in negotiating credit card settlements to save you from the debt trap of minimum due payments."
  },
  {
    question: "What documents are required for loan settlement?",
    answer: "To initiate a loan settlement, you generally need to provide proof of your financial hardship. This may include termination letters from employment, medical records, bank statements showing loss of income, or income tax returns. You will also need your loan account statements and any correspondence with the bank. Our team helps you compile and present these documents effectively to build a strong case for settlement."
  },
  {
    question: "Does AMA Legal Solutions guarantee a specific settlement amount?",
    answer: "No ethical legal firm can guarantee a specific settlement percentage as the final decision lies with the bank's credit committee. However, based on our extensive experience and track record, we can give you a realistic estimate of what can be achieved. Our goal is always to secure the lowest possible amount that the bank will accept, often achieving savings significantly better than what individuals can negotiate on their own."
  },
  {
    question: "What is the difference between loan settlement and loan restructuring?",
    answer: "Loan settlement involves paying a reduced lump sum to close the account permanently. Loan restructuring, on the other hand, involves changing the terms of the loan -- such as extending the tenure or lowering the EMI -- to make repayment easier, but you still pay the full principal and interest. Restructuring is better for your credit score but requires you to pay the full debt eventually. Settlement is for those who cannot pay the full amount at all."
  },
  {
    question: "Can I settle a loan that is already in court or DRT?",
    answer: "Yes, a loan can be settled at any stage, even if a case has been filed in the Debt Recovery Tribunal (DRT) or under the SARFAESI Act. In fact, many settlements happen during legal proceedings as banks want to avoid the time and cost of litigation. We can represent you in court while simultaneously negotiating an out-of-court settlement to resolve the matter faster."
  },
  {
    question: "Why should I choose AMA Legal Solutions over a debt settlement agency?",
    answer: "AMA Legal Solutions is a team of qualified lawyers, not just financial agents. This means we offer legal protection that agencies cannot. We can represent you in court, send legal notices to stop harassment, and ensure the settlement agreement is legally binding. Debt settlement agencies often lack the legal authority to intervene in harassment cases or court matters, leaving you vulnerable."
  },
  {
    question: "How do I get started with AMA Legal Solutions?",
    answer: "Getting started is simple. You can book a consultation through our website or call our helpline. We will first conduct a detailed assessment of your debt portfolio and financial situation. Once we understand your case, we will propose a customized strategy. Upon your approval, we take over all communication with your creditors and begin the negotiation process to help you become debt-free."
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
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in India: Expert Legal Help for Debt Relief",
  "description": "Comprehensive guide to loan settlement in India. Learn how to legally settle personal loans and credit card debt with expert legal assistance.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
  "datePublished": "2023-10-01",
  "dateModified": "2025-12-02"
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
  "name": "Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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
        "name": "Rahul Sharma"
      },
      "reviewBody": "I was drowning in credit card debt. AMA Legal Solutions helped me settle my 8 Lakh debt for just 3.5 Lakhs. The harassment stopped immediately after I hired them."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Malhotra"
      },
      "reviewBody": "Professional and empathetic team. They handled my personal loan settlement with HDFC Bank very smoothly. Highly recommended for anyone facing financial trouble."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement Services India | #1 Debt Settlement Lawyers",
  description:
    "Struggling with debt? AMA Legal Solutions offers expert loan settlement services in India. We negotiate with banks to reduce your debt by up to 50% and stop harassment. Legal, safe, and effective.",
  keywords: [
    "loan settlement",
    "loan settlement india",
    "debt settlement india",
    "one time settlement scheme",
    "credit card settlement",
    "personal loan settlement",
    "loan settlement lawyer",
    "debt relief services",
    "npa settlement",
    "settle loan with bank"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement',
  },
  openGraph: {
    title: "Loan Settlement Services India | #1 Debt Settlement Lawyers",
    description: "Struggling with debt? AMA Legal Solutions offers expert loan settlement services in India. We negotiate with banks to reduce your debt and stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services India",
      },
    ],
  },
};

export default function LoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "when-to-consider", title: "When to Consider?" },
    { id: "pros-and-cons", title: "Pros & Cons" },
    { id: "comparison", title: "Settlement vs Others" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents Required" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Regain Your Financial Freedom with <span className="text-[#D2A02A]">Loan Settlement</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation to negotiate with banks, reduce your debt burden by up to 50%, and stop harassment. Legally. Ethically. Effectively.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming the Debt Trap in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the dynamic economic landscape of India, financial instability can strike anyone. Whether due to an unexpected job loss, a medical emergency in the family, or a business downturn, finding yourself in a debt trap is a stressful and isolating experience. The constant pressure of mounting interest, the fear of legal notices, and the relentless calls from recovery agents can take a severe toll on your mental peace and personal life.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, it is crucial to understand that being in debt is not a crime, and there are legal avenues available to help you navigate this difficult phase. <strong>Loan settlement</strong> (often searched as <em>debt settlement India</em>) is one such powerful tool that provides a dignified exit route for honest borrowers who are genuinely unable to repay their full debts. At AMA Legal Solutions, we believe that everyone deserves a second chance at financial stability. Our mission is to provide you with the expert legal support needed to negotiate with financial institutions on equal footing.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We are not just a debt settlement agency; we are a team of experienced <strong>loan settlement lawyers</strong> who understand the intricacies of banking laws in India. We stand between you and the harassment, ensuring that your rights are protected while we work tirelessly to secure a settlement that you can afford.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement is a mutual agreement between a lender and a borrower to close a loan account for an amount less than the total outstanding dues."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement, often referred to as a <strong>One Time Settlement (OTS) scheme</strong>, is a process utilized when a borrower is unable to service their debt obligations due to verifiable financial hardship. Unlike a standard loan closure where you pay back every rupee of the principal and interest, a settlement involves the lender agreeing to accept a lower amount to close the account.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks and Non-Banking Financial Companies (NBFCs) are business entities. When a loan turns into a Non-Performing Asset (NPA), it costs them money to maintain it on their books and pursue legal recovery. If they are convinced that a borrower genuinely cannot pay the full amount, they often prefer to recover a portion of the money immediately rather than spending years in litigation with uncertain results. This is where <strong>NPA settlement</strong> strategies become crucial.
                  </p>
                </section>

                {/* When to Consider */}
                <section id="when-to-consider" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">When Should You Consider Loan Settlement?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement is not for everyone. It is a strategic option for those facing genuine financial distress. You should consider this option if:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">⚠️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Job Loss or Income Reduction</h4>
                        <p className="text-gray-600 text-sm">You have lost your primary source of income or faced a significant pay cut.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🏥</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Medical Emergency</h4>
                        <p className="text-gray-600 text-sm">Severe illness in the family has drained your savings and ability to pay EMIs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Business Failure</h4>
                        <p className="text-gray-600 text-sm">Your business has suffered heavy losses, making debt servicing impossible.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🔄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Debt Trap</h4>
                        <p className="text-gray-600 text-sm">You are borrowing from one source to pay another, with no end in sight.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is vital to weigh the benefits against the drawbacks before proceeding.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">Advantages (Pros)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 w-1/2">Disadvantages (Cons)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>Debt Reduction:</strong> Pay significantly less than what you owe (often 30-50% savings).</li>
                              <li><strong>Avoid Bankruptcy:</strong> Prevents the severe legal consequences of insolvency.</li>
                              <li><strong>Stop Harassment:</strong> Legal representation stops recovery agent calls.</li>
                              <li><strong>Immediate Relief:</strong> Closes the loan account permanently.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>Credit Score Impact:</strong> Score may drop by 50-100 points.</li>
                              <li><strong>"Settled" Status:</strong> Loan is marked as "Settled" in CIBIL report.</li>
                              <li><strong>Future Loans:</strong> Getting new unsecured loans might be tough for 12-24 months.</li>
                              <li><strong>Tax Implications:</strong> Waived amount might be considered taxable income.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Settlement vs. Restructuring vs. Insolvency</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Feature</th>
                          <th scope="col" className="px-6 py-3 bg-blue-50 text-blue-900">Loan Settlement</th>
                          <th scope="col" className="px-6 py-3">Loan Restructuring</th>
                          <th scope="col" className="px-6 py-3">Insolvency/Bankruptcy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">What is it?</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900">Paying a reduced lump sum to close the loan.</td>
                          <td className="px-6 py-4">Changing terms (tenure/EMI) to make repayment easier.</td>
                          <td className="px-6 py-4">Legal declaration of inability to pay debts.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Amount Paid</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">Reduced (30-50% less)</td>
                          <td className="px-6 py-4">Full Amount + Interest</td>
                          <td className="px-6 py-4">Varies (Assets liquidated)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Credit Impact</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900">Negative ("Settled" status)</td>
                          <td className="px-6 py-4">Neutral/Slightly Negative</td>
                          <td className="px-6 py-4">Severe (Long-term damage)</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900">Those unable to pay full amount.</td>
                          <td className="px-6 py-4">Those with temporary cash flow issues.</td>
                          <td className="px-6 py-4">Complete financial collapse.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework for Debt Settlement in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers worry about the legality of loan settlement. It is important to state clearly: <strong>Loan settlement is a 100% legal financial process.</strong> It is recognized and regulated by the Reserve Bank of India (RBI) and is a standard part of banking operations.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">RBI Guidelines and Borrower Rights</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The RBI has issued various circulars and guidelines that empower banks to compromise on settlements to clean up their balance sheets. Furthermore, as a borrower, you have specific rights that protect you during this process:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Fair Treatment</h4>
                      <p className="text-gray-600">Lenders cannot use abusive language, physical threats, or public shaming to recover debts. This is a violation of your fundamental rights.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Privacy</h4>
                      <p className="text-gray-600">Recovery agents cannot contact your friends, family, or employer to discuss your debt details without your consent.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Representation</h4>
                      <p className="text-gray-600">You have the legal right to appoint a lawyer to represent you in discussions with the bank. Once appointed, the bank should communicate through your legal counsel.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Due Process</h4>
                      <p className="text-gray-600">Even if you have defaulted, banks must follow due process under the SARFAESI Act and cannot seize assets without proper notice.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Proven Loan Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the bureaucracy of banks can be daunting. We have streamlined the <strong>loan settlement process</strong> into four clear steps to ensure transparency and efficiency.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by analyzing your complete financial portfolio. We review your loan agreements, payment history, and current income status. We identify which loans are eligible for settlement and calculate a realistic settlement amount that you can afford. This stage involves setting clear expectations and preparing the necessary hardship documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Intervention & Protection</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once engaged, we formally notify your creditors that AMA Legal Solutions represents you. We direct all future communication to our office. This step is crucial for stopping the incessant calls and harassment from recovery agents. If any legal notices (such as Section 138 or SARFAESI notices) have been issued against you, our legal team prepares appropriate responses to defend your position.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation with Lenders</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This is where our expertise shines. Our negotiators engage with the bank's recovery officers and credit managers. We present your hardship case with evidence and negotiate firmly to waive penal interest, regular interest, and even a portion of the principal. Our goal is to reach the lowest possible settlement figure. This process can take several rounds of negotiation to achieve the best result.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once a settlement amount is agreed upon, we ensure the bank issues a formal Settlement Letter detailing the terms. We review this document to ensure there are no hidden clauses. After you make the payment, we follow up to obtain the <strong>No Dues Certificate (NDC)</strong> and ensure the loan account is closed in the bank's records. We also guide you on checking your CIBIL report to verify the status update.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To build a strong case for settlement, we need to prove your financial hardship to the bank. The following documents are typically required:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> KYC Documents (Aadhar, PAN)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Loan Account Statements
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Salary Slips / Income Proof (Current)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Bank Statements (Last 6 months)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Termination Letter (if unemployed)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Medical Records (if applicable)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Closure Letters of other loans
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Correspondence with Bank
                    </li>
                  </ul>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Not all loans are the same, and the strategy for settlement differs based on the nature of the debt. We specialize in settling various types of unsecured and secured debts.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        <strong>Personal loan settlement</strong> is a common solution for unsecured debts with high interest rates. Banks are often willing to negotiate significantly on these as they have no collateral to fall back on.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700">
                        <strong>Credit card settlement</strong> is notoriously difficult to manage due to compounding interest. We help clients settle credit card dues, often achieving substantial reductions from the inflated outstanding amounts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Business Loans (Unsecured)</h3>
                      <p className="text-gray-700">
                        For MSMEs and entrepreneurs, business loans can become a burden during market downturns. We assist in settling unsecured business loans to help you save your business from bankruptcy.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Education Loans</h3>
                      <p className="text-gray-700">
                        In cases of genuine hardship where employment is not secured post-education, we can negotiate settlement terms for education loans to prevent long-term financial distress for young professionals.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-500 italic">
                    *Note: Secured loans (Home Loans, Car Loans) are harder to settle as banks can seize the asset. However, we provide legal consultancy for these cases to explore options like restructuring or time-extension.
                  </p>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Impact on Your Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is one of our core values. We want you to make an informed decision. It is true that <strong>loan settlement negatively impacts your credit score</strong>. When you settle a loan, the bank reports the status as "Settled" to credit bureaus like CIBIL, Experian, and Equifax.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This "Settled" tag indicates that the loan was not paid in full. It can lower your score by 50 to 100 points and remains on your report for several years. However, you must weigh this against the alternative. A "Default" or "Written Off" status is far more damaging and suggests a complete failure to pay.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Path to Redemption</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The good news is that a credit score is dynamic. It is not damaged permanently. Once you have settled your debts and relieved your financial burden, you can start rebuilding your score.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-green-50 p-6 rounded-xl">
                    <li><strong>Step 1:</strong> Obtain a secured credit card (against a fixed deposit) and use it responsibly.</li>
                    <li><strong>Step 2:</strong> Ensure all other utility bills and active EMIs are paid on time.</li>
                    <li><strong>Step 3:</strong> Avoid applying for new unsecured loans for at least 12-18 months.</li>
                    <li><strong>Step 4:</strong> Regularly check your credit report for errors and dispute them if necessary.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    At AMA Legal Solutions, we don't just help you settle; we provide post-settlement guidance on how to repair your financial health and improve your CIBIL score over time.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    In a market flooded with "debt relief agencies" and "settlement companies," AMA Legal Solutions stands apart as a legitimate law firm. Here is why thousands of clients trust us with their financial freedom:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600">We are lawyers, not just agents. We have the power to represent you in court and send legal notices.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take a zero-tolerance approach to harassment and take legal action against abusive recovery agents.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Ethical Practice</h3>
                      <p className="text-gray-600">We operate with complete transparency. No false promises, no hidden fees, and complete confidentiality.</p>
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
                        "I was drowning in credit card debt and getting 20 calls a day. AMA Legal Solutions stepped in and stopped the harassment immediately. They settled my 8 Lakh debt for just 3.5 Lakhs. I can finally sleep peacefully."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rahul Sharma</p>
                          <p className="text-sm text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My business loan was becoming unmanageable after the lockdown. The bank was threatening to seize my property. The lawyers at AMA guided me legally and negotiated a fair OTS. Highly professional and empathetic team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Malhotra</p>
                          <p className="text-sm text-gray-500">Entrepreneur, Delhi</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Let Debt Control Your Life</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
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

                {/* Quick Links */}
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
                <Link 
                  href="/services/loan-settlement/sbi-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SBI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hdfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">HDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/icici-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">ICICI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kotak-mahindra"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kotak Mahindra</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/idfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/yes-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Yes Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bajaj-finserv"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bajaj Finserv</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/axis-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Axis Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bank-of-baroda"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bank of Baroda</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hero-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Hero Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/poonawalla-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Poonawalla Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/tata-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tata Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/federal-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Federal Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/payu-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">PayU Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/krazybee"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">KrazyBee</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/au-small-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">AU Small Finance Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/northern-arc"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Northern Arc</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dmi-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DMI Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/piramal-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Piramal Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dbs-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DBS Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/south-indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">South Indian Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/si-creva"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Si Creva (Kissht/Ring)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/stashfin"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Stashfin</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/l-and-t-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">L&T Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/american-express"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">American Express</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/standard-chartered"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Standard Chartered</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/true-credits"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">True Credits (TrueBalance)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/moneyview"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Moneyview</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/vivriti-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Vivriti Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kisetsu-saison-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kisetsu Saison Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/indusind-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IndusInd Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/smfg-india-credit"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SMFG India Credit</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/fibe"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Fibe (EarlySalary)</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our loan settlement services are available for all major banks in India
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "AndhraPradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "Jharkhand",
                "Karnataka": "Karnataka",
                "Kerala": "Kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "Maharashtra",
                "Manipur": "Manipur",
                "Meghalaya": "Meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "Odisha",
                "Puducherry": "Puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
                "Tripura": "Tripura",
                "Uttar Pradesh": "UttarPradesh",
                "Uttarakhand": "Uttrakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
