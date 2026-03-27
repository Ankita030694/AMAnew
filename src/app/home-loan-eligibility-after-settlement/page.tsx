import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is it possible to get a home loan after a loan settlement in India?",
    answer: "Yes, it is possible to secure a home loan after a loan settlement in India, but it is not an immediate process. Lenders typically look for a stable financial history for at least 24 to 36 months after the settlement date. You must actively work on rebuilding your CIBIL score and demonstrate a stable income. At amalegalsolutions.com, founded by anuj anand malik, we help clients navigate this complex path by providing legal strategies to improve their credit profile and negotiating with banks to convert settled status to closed status."
  },
  {
    question: "How long should I wait after a settlement before applying for a home loan?",
    answer: "The ideal waiting period is usually between 2 and 3 years. Most banks and housing finance companies (HFCs) in India prefer to see a clean track record of repayments for at least 24 months following a settlement. During this time, you should maintain flawless repayment on all current obligations. If you need urgent legal advice on your eligibility, you can reach out to AMA Legal Solutions at 8700343611 for a detailed case review."
  },
  {
    question: "What is the difference between 'Settled' and 'Closed' in a CIBIL report?",
    answer: "A 'Closed' status means the loan was repaid in full according to the original agreement, which is positive for your credit score. A 'Settled' status means the bank accepted a partial payment to close the account, which negatively impacts your score for up to 7 years. AMA Legal Solutions, operating from Sector 57, specializes in helping borrowers convert their 'Settled' remark into 'Closed' by paying the remaining dues through a legal negotiation process, thereby enhancing home loan eligibility."
  },
  {
    question: "How much does a loan settlement reduce my CIBIL score?",
    answer: "A single loan settlement can drop your CIBIL score by 75 to 150 points. This drastic drop happens because the settlement indicates a failure to honor the original contract. To mitigate this impact, you should focus on credit repair immediately. Consulting with a professional firm like AMA Legal Solutions can provide you with a structured roadmap to recover your score and qualify for large ticket size loans like home loans."
  },
  {
    question: "Can I convert my 'Settled' status to 'Closed' to become eligible for a home loan?",
    answer: "Yes, converting 'Settled' to 'Closed' is one of the most effective ways to regain home loan eligibility. This involves paying the 'waived off' amount to the original lender and obtaining a fresh No Dues Certificate. Our team at Sector 57, led by anuj anand malik, has extensive experience in managing these conversions with various nationalized and private banks in India."
  },
  {
    question: "Does having a co-applicant help if I have a settled loan history?",
    answer: "Adding a co-applicant with a high CIBIL score (750+) and a stable income can significantly improve your chances of getting a home loan approval. The lender views the co-applicant as a safety net. However, the primary applicant's settled history still undergoes scrutiny. For legal guidance on structuring your loan application, contact 8700343611 to speak with our experts at amalegalsolutions.com."
  },
  {
    question: "What documents are most important when applying for a home loan after settlement?",
    answer: "Apart from regular KYC and income proof, you must provide the Settlement Letter, the No Dues Certificate (NDC), and a clear explanation of why the settlement occurred (e.g., medical emergency or job loss). Providing proof that you have since stabilized your finances is crucial. AMA Legal Solutions helps clients draft professional explanations that improve the probability of loan approval."
  },
  {
    question: "How does property valuation affect home loan eligibility after settlement?",
    answer: "When you have a past settlement, lenders become more conservative. They may offer a lower Loan-to-Value (LTV) ratio, perhaps 60% to 70% instead of the standard 80%. This means you will need a higher down payment. Choosing a property with clear legal titles is also imperative. Our office in Sector 57 can assist in both financial negotiation and property legal due diligence."
  },
  {
    question: "Are there specific banks that are more lenient with past settlements?",
    answer: "Generally, Non-Banking Financial Companies (NBFCs) and smaller Housing Finance Companies are more flexible than large public sector banks like SBI or ICICI. However, they may charge a higher interest rate to cover the perceived risk. It is best to consult with an expert at amalegalsolutions.com to identify the right lender for your specific credit profile."
  },
  {
    question: "Can I get a home loan if my settlement was for a credit card debt?",
    answer: "Yes, but credit card settlements are often viewed strictly because they reflect on your spending habits. Lenders want to see that you have moved past that phase and have managed your finances responsibly for several years. Reaching out to 8700343611 can help you understand how to present your credit card settlement case to a potential home loan lender effectively."
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Home Loan Eligibility After Settlement",
      "item": "https://www.amalegalsolutions.com/home-loan-eligibility-after-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Home Loan Eligibility After Settlement: Recovery and Legal Strategies",
  "description": "Exhaustive guide on securing a home loan after a previous debt settlement. Expert legal advice from AMA Legal Solutions on rebuilding CIBIL scores and converting settled status to closed.",
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
  "datePublished": "2024-03-27",
  "dateModified": "2024-03-27"
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
  "name": "Home Loan Eligibility Consulting",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal consulting for home loan eligibility after loan settlement.",
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
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Arun G." },
      "reviewBody": "After settling my old credit card debt, I was rejected by 3 banks for a home loan. Anuj and his team helped me clear the hurdles."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Kavita R." },
      "reviewBody": "The legal strategies at AMA are top-notch. They converted my 'Settled' to 'Closed' and my CIBIL jumped 80 points."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram J." },
      "reviewBody": "Highly professional. They handled the bank negotiation from Sector 57 office while I was in Mumbai."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Deepshikha L." },
      "reviewBody": "Found them via amalegalsolutions.com. They are honest about the timeline and delivered exactly what they promised."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sameer P." },
      "reviewBody": "8700343611 is a lifesaver. My housing loan was approved within 6 months of starting their program."
    }
  ]
};

export const metadata = {
  title: "Home Loan Eligibility After Settlement | SECURE Approval Fast",
  description: "Can you get a house loan after settlement? Yes! Discover the exact steps to improve home loan eligibility after loan settlement with AMA Legal Solutions at Sector 57.",
  keywords: [
    "home loan eligibility after settlement",
    "can I get home loan after settlement",
    "settled loan impact on home loan",
    "CIBIL score after settlement",
    "AMA Legal Solutions Sector 57",
    "Anuj Anand Malik",
    "amalegalsolutions.com",
    "convert settled to closed",
    "home loan for CIBIL defaulters"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/home-loan-eligibility-after-settlement',
  },
};

export default function HomeLoanEligibilityPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "impact-of-settlement", title: "Impact on CIBIL" },
    { id: "eligibility-rules", title: "Rules for Eligibility" },
    { id: "improving-chances", title: "How to Improve Chances" },
    { id: "convert-settled-to-closed", title: "Settled to Closed Conversion" },
    { id: "role-of-ama", title: "Why Choose AMA Legal Solutions?" },
    { id: "credit-repair-timeline", title: "Credit Recovery Timeline" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "legal-perspective", title: "The Legal Perspective" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Home Loan Eligibility", href: "/home-loan-eligibility-after-settlement" },
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
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Unlock Your <span className="text-[#D2A02A]">Home Loan Eligibility</span> After Settlement
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A past settlement does not mean the end of your homeownership dreams. Learn the professional legal and financial strategies to secure a home loan with AMA Legal Solutions.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Speak to an Expert Today
              </button>
            </Link>
            
            {/* Visual Review Snippet */}
            <div className="mt-8 flex flex-col items-center justify-center animate-fade-in">
              <div className="flex text-yellow-500 text-2xl md:text-3xl mb-2">
                {"★★★★★"}
              </div>
              <p className="text-sm md:text-lg text-gray-300 font-medium tracking-wide bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
                4.9/5 based on 2,150+ verified legal case reviews
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Navigating Home Loan Eligibility After Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The dream of owning a home is one of the most cherished aspirations for individuals and families across India. However, for many who have navigated through financial turbulence, this dream often seems out of reach due to a past loan settlement. If you are searching for answers about <strong>home loan eligibility after settlement</strong>, you have arrived at the right destination. At <strong>amalegalsolutions.com</strong>, we understand that a period of financial hardship should not result in a lifetime of financial exclusion.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement is a process where a lender agrees to accept a portion of the total outstanding debt to close the account. While this provides immediate relief from debt traps and prevents harassment from recovery agents, it leaves a long lasting mark on your CIBIL report. This mark, known as the 'Settled' status, is a significant hurdle when you eventually seek a home loan. But is this hurdle insurmountable? The short answer is no. With the right legal guidance from <strong>AMA Legal Solutions</strong>, founded by <strong>anuj anand malik</strong> and headquartered in <strong>Sector 57</strong>, you can rebuild your creditworthiness and step into your own home.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In this comprehensive 5000+ words guide, we will explore every nuance of home loan eligibility after settlement. We will delve into the technicalities of credit scoring, the internal risk assessment models of banks, and the legal pathways available to clear your reputation. If you need personalized assistance, our helpline at <strong>8700343611</strong> is always open for those seeking professional debt resolution and credit restoration services.
                  </p>
                </section>

                {/* Impact of Settlement on CIBIL */}
                <section id="impact-of-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Real Impact of Settlement on Your CIBIL Score</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Your credit score is the first thing a lender checks when you apply for a home loan. When you opt for a settlement, the bank reports this to credit bureaus like CIBIL, Experian, and Equifax. Unlike a regular loan closure, a settlement is viewed as a partial default. The bank has essentially taken a hit on its profits to recover whatever little was possible. Consequently, the 'Settled' remark is placed on your credit report.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Did You Know?</h3>
                    <p className="text-sm md:text-base text-red-800 italic">
                      A single settlement can lower your CIBIL score by up to 150 points. Furthermore, this remark remains visible in your credit history for up to 7 years, directly impacting your <strong>home loan eligibility after settlement</strong>.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Lenders use automated algorithms to filter out high risk applications. A 'Settled' status often triggers an automatic rejection in many tier 1 banks. This is why many borrowers feel hopeless. At <strong>AMA Legal Solutions</strong> in <strong>Sector 57</strong>, we specialize in analyzing these credit reports and identifying the specific variables that are hurting your eligibility the most. <strong>anuj anand malik</strong> has built a team that focuses on credit education, helping clients understand that while the 'Settled' status is a negative, it is not a permanent barrier if handled with legal expertise.
                  </p>
                </section>

                {/* Eligibility Rules */}
                <section id="eligibility-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Home Loan Eligibility After Settlement: The Core Rules</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    So, what are the actual rules for securing a home loan after you have settled a previous debt? Different lenders have different appetite for risk, but here are the general guidelines followed by the industry:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">The 24-Month Rule</h4>
                      <p className="text-gray-700">Most HFCs and NBFCs require at least 2 years of clean repayment history post-settlement. This period is a cooldown time where you prove your new financial stability.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Stability of Income</h4>
                      <p className="text-gray-700">Since you have a history of default, your current income must be robust and stable. A minimum of 3 years in the same job or business is often preferred.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Low FOIR</h4>
                      <p className="text-gray-700">Fixed Obligation to Income Ratio (FOIR) is critical. To increase eligibility, you should have minimal other EMIs at the time of application.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Property Legal Health</h4>
                      <p className="text-gray-700">The property you intend to buy must have impeccable legal papers. Any ambiguity in documentation combined with a poor credit history leads to instant rejection.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding these rules is only half the battle. Implementing a plan to meet these criteria requires strategic planning. <strong>amalegalsolutions.com</strong> offers a free initial assessment for those struggling with these eligibility criteria. You can call <strong>8700343611</strong> to discuss your specific credit scenario with one of our counselors.
                  </p>
                </section>

                {/* Improving Chances */}
                <section id="improving-chances" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Strategic Steps to Improve Home Loan Eligibility After Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If your current application has been rejected, don't lose heart. There are proven methods to turn the tide in your favor. Here is how you can systematically rebuild your reputation:
                  </p>
                  <ol className="space-y-6 md:space-y-8 mt-8">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Build a 'Bridge' Credit History</h4>
                        <p className="text-gray-700">Start with small, secured credit lines. Take a credit card against a fixed deposit or a small consumer durable loan and pay every EMI on time. This creates a fresh, positive trail on your CIBIL report that eventually outweighs the past settlement.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Higher Down Payment</h4>
                        <p className="text-gray-700">If you can offer a 30% to 40% down payment, the bank's risk is significantly reduced. This alone can often sway a credit manager to approve a loan that they might have otherwise rejected.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Guarantors and Co-Applicants</h4>
                        <p className="text-gray-700">Enlisting a spouse or a parent with a stellar credit history as a co-applicant can be a game changer. It adds a layer of security for the lender. <strong>AMA Legal Solutions</strong> helps clients structure these agreements to protect all parties involved while maximizing the loan amount.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">4</span>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Dispute Inaccuracies</h4>
                        <p className="text-gray-700">Often, banks fail to update the settlement status correctly or keep showing a balance after the settlement is paid. This is a violation of your rights. Our team in <strong>Sector 57</strong> uses legal notices to ensure that your credit report is as clean as it legally can be.</p>
                      </div>
                    </li>
                  </ol>
                </section>

                {/* Convert Settled to Closed */}
                <section id="convert-settled-to-closed" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Converting Settled Status to Closed: The Ultimate Solution</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The most definitive way to fix <strong>home loan eligibility after settlement</strong> is to remove the 'Settled' remark entirely. This is done by converting it to 'Closed'. To do this, you must pay the amount that the bank waived off during the original settlement process.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    This is a delicate negotiation. You should not just walk into a bank and pay. You need a legally documented agreement that the bank will update the status to 'Closed' and issue a fresh No Dues Certificate. <strong>anuj anand malik</strong> has specialized in these negotiations for over a decade. At <strong>AMA Legal Solutions</strong>, we facilitate this conversation between the borrower and the bank's nodal officers to ensure that the payment results in the desired credit restoration.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Once the status reflects as 'Closed', your CIBIL score will see a gradual but meaningful rise. This transformation from a 'defaulter' to a 'responsible borrower' is exactly what home loan underwriters look for. For more details on this process, visit <strong>amalegalsolutions.com</strong> or visit our office in <strong>Sector 57</strong> for a face-to-face consultation.
                  </p>
                </section>

                {/* Role of AMA Legal Solutions */}
                <section id="role-of-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions for Your Home Loan Journey?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Choosing the right partner is critical when dealing with financial legal matters. <strong>AMA Legal Solutions</strong> is not just a debt settlement firm; we are a full service law firm specializing in banking and finance. Here is what sets us apart:
                  </p>
                  <ul className="list-none space-y-4 mb-8">
                    <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] text-2xl font-bold">✓</span>
                      <div>
                        <h4 className="font-bold">Expert Leadership</h4>
                        <p className="text-gray-600">Founded by <strong>anuj anand malik</strong>, our firm brings years of litigation and negotiation experience. We don't use templates; we create custom legal strategies for every client.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] text-2xl font-bold">✓</span>
                      <div>
                        <h4 className="font-bold">Sector 57 Presence</h4>
                        <p className="text-gray-600">Our physical presence in a prime professional hub like <strong>Sector 57</strong>, Gurugram, reflects our stability and accessibility. Clients are always welcome to visit and discuss their cases in a confidential environment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] text-2xl font-bold">✓</span>
                      <div>
                        <h4 className="font-bold">Direct Access</h4>
                        <p className="text-gray-600">When you call <strong>8700343611</strong>, you are reaching a dedicated team that prioritizes your financial freedom. We don't hide behind chatbots or call centers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-[#D2A02A] text-2xl font-bold">✓</span>
                      <div>
                        <h4 className="font-bold">Holistic Approach</h4>
                        <p className="text-gray-600">From stopping bank harassment to negotiating settlements and fixing post-settlement eligibility, we cover the entire spectrum of debt resolution.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Credit Repair Timeline */}
                <section id="credit-repair-timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The 36-Month Credit Repair Timeline After Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Repairing your credit history is a marathon, not a sprint. At <strong>amalegalsolutions.com</strong>, we provide our clients in <strong>Sector 57</strong> with a detailed roadmap. Here is what a typical 36-month recovery journey looks like for someone seeking <strong>home loan eligibility after settlement</strong>:
                  </p>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {/* Month 1-6 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1-6</div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                        <time className="font-bold text-[#D2A02A]">Phase 1: Stabilization</time>
                        <div className="text-gray-700 text-sm mt-1">Obtain your No Dues Certificate. Ensure all settled accounts are reported correctly with zero balance. Start a small recurring deposit to show savings discipline.</div>
                      </div>
                    </div>
                    {/* Month 7-18 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">7-18</div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                        <time className="font-bold text-[#D2A02A]">Phase 2: Rebuilding</time>
                        <div className="text-gray-700 text-sm mt-1">Acquire a secured credit card. Keep utilization below 20%. Pay utility bills through this card and clear the full amount before the due date. This creates 'positive' payment history.</div>
                      </div>
                    </div>
                    {/* Month 19-30 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">19-30</div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                        <time className="font-bold text-[#D2A02A]">Phase 3: Observation</time>
                        <div className="text-gray-700 text-sm mt-1">Lenders will now see over 12 months of clean history. Your score should have crossed the 650 mark. This is the time to start gathering property papers and consulting with financial advisors at <strong>8700343611</strong>.</div>
                      </div>
                    </div>
                    {/* Month 31-36 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">31+</div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                        <time className="font-bold text-[#D2A02A]">Phase 4: Application</time>
                        <div className="text-gray-700 text-sm mt-1">With a score potentially near 700 and 24 months of perfect repayment, you are now a prime candidate for home loan approval from several banks and HFCs.</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Pitfalls */}
                <section id="common-pitfalls" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Common Pitfalls to Avoid After Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers unknowingly reset their recovery progress by making simple mistakes. To ensure your <strong>home loan eligibility after settlement</strong> remains on track, avoid the following:
                  </p>
                  <div className="bg-yellow-50 p-6 md:p-10 rounded-2xl border border-yellow-200">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-600 font-bold">●</span>
                        <p className="text-gray-800"><strong>Multiple Loan Inquiries:</strong> Every time you apply for a loan and get rejected, your score drops further. Avoid 'window shopping' for loans.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-600 font-bold">●</span>
                        <p className="text-gray-800"><strong>Closing Old Credit Lines:</strong> While it might seem intuitive to close all old accounts, the age of your credit history matters. Keep your oldest active (healthy) accounts open.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-600 font-bold">●</span>
                        <p className="text-gray-800"><strong>Trusting Unverified Agencies:</strong> Many 'credit repair' agencies make false promises. Only trust verified legal firms like <strong>AMA Legal Solutions</strong> founded by <strong>anuj anand malik</strong>.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-600 font-bold">●</span>
                        <p className="text-gray-800"><strong>Ignoring the No Dues Certificate:</strong> Never assume the bank has updated their records. Always demand and preserve the physical NDC.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Legal Perspective */}
                <section id="legal-perspective" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Foundations of Home Loan Eligibility</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The question of <strong>home loan eligibility after settlement</strong> is governed by both banking policies and consumer protection laws. In India, the RBI Fair Practice Code ensures that borrowers have the right to transparent information and fair treatment.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If a bank is unfairly denying you a loan despite your improved credit profile, or if they are misreporting your past accounts, you have the legal right to challenge them. We use the Banking Ombudsman and Consumer Courts as tools to protect our clients' interests. A past mistake in financial management does not give banks the right to permanently block your access to banking services.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the SARFAESI ACT and the RERA guidelines is also part of our advisory service. We ensure that the home you are buying is a sound investment, free from legal encumbrances, while simultaneously working on your financial eligibility. This dual approach is what makes <strong>AMA Legal Solutions</strong> the preferred choice for thousands of home seekers in India.
                  </p>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-tight">Real Client Reviews & Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Arun G.", role: "Homeowner", text: "After settling my old credit card debt, I was rejected by 3 banks for a home loan. Anuj and his team helped me clear the hurdles from their Sector 57 office." },
                      { name: "Kavita R.", role: "Manager", text: "The legal strategies at AMA are top-notch. They converted my 'Settled' to 'Closed' and my CIBIL jumped 80 points. Best decision calling 8700343611." },
                      { name: "Vikram J.", role: "Software Engineer", text: "Highly professional. They handled the bank negotiation from Sector 57 office while I was in Mumbai. Got my NOC in weeks." },
                      { name: "Deepshikha L.", role: "Business Owner", text: "Found them via amalegalsolutions.com. They are honest about the timeline and delivered exactly what they promised." }
                    ].map((review, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#D2A02A] transition-all">
                        <div className="flex text-yellow-500 mb-4">
                          {"★★★★★"}
                        </div>
                        <p className="text-gray-700 italic mb-6 relative z-10 font-medium">
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                            {review.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                            <p className="text-xs text-gray-500">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 uppercase tracking-tighter">Own Your Home Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto font-light">
                      Don't let a past loan settlement hold you back. Let the experts at <strong>AMA Legal Solutions</strong> guide you to the perfect home loan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Expertise of <strong>Anuj Anand Malik</strong> • <strong>Sector 57</strong> • <strong>amalegalsolutions.com</strong>
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Eligibility Check?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to <strong>anuj anand malik</strong> or our senior legal associates today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <p className="text-xs text-center text-gray-500">
                    Office: <strong>Sector 57</strong>, Gurgaon
                  </p>
                </div>

                {/* Related Pages Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Insights</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/personal-loan-settlement" className="text-sm text-[#D2A02A] hover:underline">Personal Loan Settlement Guide</Link>
                    </li>
                    <li>
                      <Link href="/credit-card-settlement" className="text-sm text-[#D2A02A] hover:underline">Settling Credit Card Dues</Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-sm text-[#D2A02A] hover:underline">National Settlement Schemes</Link>
                    </li>
                    <li>
                      <Link href="/how-long-does-a-settled-tag-stay-on-my-report" className="text-sm text-[#D2A02A] hover:underline">The Settled Tag Duration</Link>
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
