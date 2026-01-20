import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import Image from "next/image";

export const metadata = {
  title: "What is Loan Settlement? | Complete Guide to Debt Relief in India",
  description:
    "Understand what loan settlement is, how it works, its benefits, and its impact on your credit score. A comprehensive guide by AMA Legal Solutions.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/what-is-loan-settlement',
  },
  openGraph: {
    title: "What is Loan Settlement? | Complete Guide to Debt Relief in India",
    description: "Understand what loan settlement is, how it works, its benefits, and its impact on your credit score. A comprehensive guide by AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/services/loan-settlement/what-is-loan-settlement",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "What is Loan Settlement Guide",
      },
    ],
  },
};

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
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "What is Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/what-is-loan-settlement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Loan Settlement? The Ultimate Guide for Borrowers",
  "description": "A detailed explanation of loan settlement (OTS), its process, pros and cons, and legal aspects in India.",
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
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-12-02",
  "dateModified": "2023-12-02"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Advisory Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal advice and representation for loan settlement.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "950"
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
      "reviewBody": "This guide helped me understand my options. I contacted AMA Legal Solutions and they helped me settle my credit card debt professionally."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Verma"
      },
      "reviewBody": "Clear, concise, and very helpful information. It saved me from making a bad financial decision."
    }
  ]
};

export default function WhatIsLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "definition", title: "What is Loan Settlement?" },
    { id: "how-it-works", title: "How Does It Work?" },
    { id: "eligibility", title: "Who is Eligible?" },
    { id: "pros-cons", title: "Pros and Cons" },
    { id: "process", title: "The Settlement Process" },
    { id: "credit-score", title: "Impact on Credit Score" },
    { id: "alternatives", title: "Alternatives to Settlement" },
    { id: "rbi-guidelines", title: "RBI Guidelines" },
    { id: "why-hire-expert", title: "Why Hire an Expert?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "What is Loan Settlement", href: "/services/loan-settlement/what-is-loan-settlement" },
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
              What is <span className="text-[#D2A02A]">Loan Settlement?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive guide to understanding One Time Settlement (OTS), how it can free you from debt traps, and the legal way to negotiate with banks.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get Expert Advice
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In today's volatile economic climate, financial instability can strike anyone. A sudden job loss, a medical emergency, or a business downturn can quickly turn manageable EMIs into an insurmountable mountain of debt. When you find yourself unable to repay your loans, the stress is compounded by constant calls from recovery agents and the fear of legal action.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers in this situation feel trapped, unaware that there is a legal and structured exit route available: <strong>Loan Settlement</strong>. It is not a loophole or a scam; it is a recognized financial process used globally and in India to resolve bad debts.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    This guide aims to demystify loan settlement. We will explain what it is, how it works, the pros and cons, and how you can use it to regain control of your financial life. At AMA Legal Solutions, we believe that an informed borrower is an empowered borrower.
                  </p>
                </section>

                {/* Definition */}
                <section id="definition" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan Settlement, also known as One Time Settlement (OTS), is a process where a lender agrees to accept a lump-sum payment that is lower than the total outstanding amount to close a loan account permanently."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Essentially, it is a negotiation. The bank realizes that due to your financial hardship, you cannot pay the full amount (Principal + Interest + Penalties). Instead of receiving nothing or spending years and money on legal battles to recover the money, the bank agrees to take a "haircut" (a loss) and accept whatever amount you can pay right now.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For example, if you owe ₹5 Lakhs (₹3 Lakhs principal + ₹2 Lakhs interest/penalties), the bank might agree to settle the account for ₹2.5 Lakhs paid in one go. Once this amount is paid, the remaining ₹2.5 Lakhs is waived off, and the account is closed.
                  </p>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does Loan Settlement Work?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The mechanism of loan settlement is based on the classification of assets. When you stop paying your EMIs, your loan account goes through several stages:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li><strong>SMA (Special Mention Account):</strong> When payment is overdue by 1-90 days.</li>
                    <li><strong>NPA (Non-Performing Asset):</strong> When payment is overdue by more than 90 days.</li>
                    <li><strong>Written-Off Asset:</strong> When the bank deems the loan unrecoverable after a long period.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks are most willing to settle when an account becomes an NPA or is about to be written off. At this stage, they are under pressure to clean up their balance sheets. They set aside a "provision" for bad loans, and recovering even a part of it releases that capital.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The settlement is usually offered on <strong>unsecured loans</strong> like personal loans and credit cards. Secured loans (home loans, car loans) are harder to settle because the bank can simply seize and sell the collateral to recover their money.
                  </p>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Who is Eligible for Loan Settlement?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement is not a right; it is a discretion of the bank. You cannot simply demand a settlement because you don't want to pay. You must prove <strong>genuine financial hardship</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Common grounds for eligibility include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">Job Loss</h3>
                      <p className="text-gray-600">Sudden unemployment leading to a complete loss of income.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">Medical Emergency</h3>
                      <p className="text-gray-600">Severe illness or accident requiring expensive treatment that depleted savings.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">Business Failure</h3>
                      <p className="text-gray-600">Significant losses in business making debt servicing impossible.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">Divorce/Death</h3>
                      <p className="text-gray-600">Loss of a supporting partner or spouse affecting household income.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    You will need to provide documentary evidence (termination letter, medical bills, bank statements) to support your claim.
                  </p>
                </section>

                {/* Pros and Cons */}
                <section id="pros-cons" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Like any financial decision, loan settlement has its advantages and disadvantages. It is crucial to weigh them carefully.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-4">The Pros (Advantages)</h3>
                      <ul className="space-y-3 text-green-800">
                        <li className="flex items-start"><span className="mr-2">✓</span> <strong>Debt Freedom:</strong> Get rid of your debt burden instantly.</li>
                        <li className="flex items-start"><span className="mr-2">✓</span> <strong>Stop Harassment:</strong> Once settled, recovery agents stop calling.</li>
                        <li className="flex items-start"><span className="mr-2">✓</span> <strong>Avoid Legal Action:</strong> Prevents the bank from filing civil or criminal cases against you.</li>
                        <li className="flex items-start"><span className="mr-2">✓</span> <strong>Save Money:</strong> You pay significantly less than the total outstanding amount (often 50% or less).</li>
                        <li className="flex items-start"><span className="mr-2">✓</span> <strong>Mental Peace:</strong> The biggest benefit is the relief from stress and anxiety.</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-900 mb-4">The Cons (Disadvantages)</h3>
                      <ul className="space-y-3 text-red-800">
                        <li className="flex items-start"><span className="mr-2">✕</span> <strong>Credit Score Impact:</strong> Your CIBIL score will drop significantly.</li>
                        <li className="flex items-start"><span className="mr-2">✕</span> <strong>"Settled" Status:</strong> Your credit report will show the account as "Settled," which is a negative remark.</li>
                        <li className="flex items-start"><span className="mr-2">✕</span> <strong>Future Borrowing:</strong> Getting new unsecured loans or credit cards will be difficult for the next few years.</li>
                        <li className="flex items-start"><span className="mr-2">✕</span> <strong>Blacklisting:</strong> The settling bank may blacklist you internally, meaning you can never borrow from <em>them</em> again.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Step-by-Step Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the settlement process requires patience and strategy. Here is a typical roadmap:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Default & Communication</h3>
                        <p className="text-gray-700">You stop paying EMIs due to hardship. The bank starts sending notices and calls. Do not ignore them; inform them of your situation.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Proposal</h3>
                        <p className="text-gray-700">After 3-6 months, propose a settlement. Offer a specific amount you can pay as a lump sum. The bank will likely reject the first offer.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation</h3>
                        <p className="text-gray-700">This is where an expert helps. There will be back-and-forth on the amount. The goal is to reach a figure acceptable to both.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Settlement Letter</h3>
                        <p className="text-gray-700">Once agreed, the bank issues a formal Settlement Letter. <strong>Crucial:</strong> Check this document for the amount, payment deadline, and clause stating "full and final settlement".</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Payment & Closure</h3>
                        <p className="text-gray-700">Pay the amount before the deadline. Keep the receipt. After 2-3 weeks, collect the "No Dues Certificate" (NDC).</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact Detail */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep Dive: Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is the most common concern. When you settle, the bank reports the account status as "Settled" to bureaus like CIBIL.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Closed vs. Settled:</strong>
                    <br />
                    - <strong>Closed:</strong> Means you paid every penny due. Positive impact.
                    <br />
                    - <strong>Settled:</strong> Means you paid less than due. Negative impact.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, a "Settled" status is <strong>temporary damage</strong>. A "Written Off" status (which happens if you don't settle) is permanent damage. With a settled status, you can start rebuilding your score immediately. By taking a secured credit card (against a fixed deposit) and paying it on time, you can push your score back to 750+ within 18-24 months.
                  </p>
                </section>

                {/* Alternatives */}
                <section id="alternatives" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternatives to Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Before jumping into settlement, consider if these options work for you:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg text-[#D2A02A]">Loan Restructuring</h3>
                      <p className="text-gray-700">Ask the bank to increase your loan tenure to reduce the monthly EMI. You pay the full amount but in smaller chunks.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg text-[#D2A02A]">Debt Consolidation</h3>
                      <p className="text-gray-700">Take one large low-interest loan to pay off multiple high-interest loans (like credit cards). This simplifies payment.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg text-[#D2A02A]">Family Borrowing</h3>
                      <p className="text-gray-700">Borrow interest-free from family/friends to close the bank loan. This saves your credit score.</p>
                    </div>
                  </div>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">RBI Guidelines on Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Reserve Bank of India (RBI) encourages banks to have a non-discriminatory and transparent One Time Settlement (OTS) policy.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Banks must have a board-approved policy for OTS.</li>
                    <li>The settlement should be based on the realizable value of securities (for secured loans).</li>
                    <li>For MSME loans, there are specific simplified settlement schemes.</li>
                    <li>Banks are required to be transparent about the eligibility criteria for OTS.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700">
                    These guidelines ensure that you are treated fairly and that the settlement process is not arbitrary.
                  </p>
                </section>

                {/* Why Hire Expert */}
                <section id="why-hire-expert" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Need a Settlement Expert</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Negotiating with a bank is not easy. Their recovery agents are trained to extract the maximum amount from you. They may use intimidation tactics or misinformation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>AMA Legal Solutions</strong> acts as your shield and your voice.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Protection</h3>
                      <p className="text-gray-600">We handle all calls and legal notices, stopping the harassment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Savings</h3>
                      <p className="text-gray-600">Our experts negotiate the lowest possible settlement amount, often saving you lakhs.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legality</h3>
                      <p className="text-gray-600">We ensure the settlement agreement is watertight and legally binding.</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Let Debt Define You</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      There is a way out. Let us help you settle your loans legally and start fresh.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Free Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Settling?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our loan settlement experts today for a personalized plan.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/loan-settlement/lok-adalat" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Lok Adalat Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce Laws
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> DRT Proceedings
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
