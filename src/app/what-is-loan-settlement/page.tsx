import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is loan settlement and how does it work in India?",
    answer: "Loan settlement, often referred to as debt settlement, is a financial process where a borrower and a lender agree to close an outstanding debt for a lump sum payment that is less than the total amount owed. This typically happens when a borrower faces genuine financial hardship and is unable to continue regular EMIs. In India, this usually results in the loan account being marked as 'Settled' in the CIBIL report, which reflects that the bank accepted a partial payment to close the account."
  },
  {
    question: "Is using a loan settlement app safe for managing my debts?",
    answer: "Using a loan settlement app can be a convenient way to track your debt resolution progress, manage documentation, and receive updates on negotiations. However, it is essential to ensure that the app is provided by a reputable legal firm or a regulated entity. While an app provides the interface, the actual negotiation with banks requires legal expertise to ensure that the settlement terms are fair and that your rights are protected against recovery agent harassment."
  },
  {
    question: "How does the loan settlement process impact my credit score?",
    answer: "Opting for a loan settlement does have a negative impact on your credit score. When an account is marked as 'Settled' instead of 'Closed' or 'Paid in Full,' credit bureaus like CIBIL may reduce your score by 50 to 100 points. This happens because the lender is essentially losing a portion of the agreed-upon money. However, for many borrowers, this is a better alternative than continuing in a state of default or facing legal action, as it provides a clear path to rebuilding financial health over time."
  },
  {
    question: "Can I settle my credit card debt through a loan settlement app?",
    answer: "Yes, credit card debt is one of the most common types of unsecured debt handled through loan settlement processes. Since credit cards carry high interest rates, banks are often willing to negotiate a settlement if they believe the borrower is in genuine distress. A professional loan settlement platform can help you organize your financial records and present a strong case to the bank for a reasonable one-time settlement."
  },
  {
    question: "What is the difference between a 'Settled' and a 'Closed' loan status?",
    answer: "A 'Closed' status in your credit report means you have paid back the entire principal, interest, and any applicable fees in full. This is the ideal status. A 'Settled' status means you reached an agreement with the bank to pay a reduced amount to end the debt obligation. While both statuses indicate that you no longer owe money for that specific loan, the 'Settled' tag informs future lenders that you did not fulfill the original contract, which can make getting new loans harder in the short term."
  },
  {
    question: "What documents are required for a loan settlement application?",
    answer: "To apply for a loan settlement, you generally need to provide proof of financial hardship. This includes your latest loan account statements, income tax returns, bank statements for the last six months, and evidence of the hardship itself, such as a medical report or a job termination letter. Providing a comprehensive set of documents helps the bank understand that your inability to pay is genuine, which increases the chances of a favorable settlement."
  },
  {
    question: "Can banks refuse my request for a loan settlement?",
    answer: "Yes, banks have the discretion to accept or reject a settlement proposal. A settlement is not a borrower's right but a mutual agreement. Lenders are more likely to agree to a settlement if the loan has been in default for more than six months (NPA status) and they are convinced that the borrower cannot repay the full amount even with more time. Having legal representation can help in presenting the case more effectively to the bank's credit committee."
  },
  {
    question: "Will the harassment from recovery agents stop after I start the settlement process?",
    answer: "When you engage a professional legal firm to handle your settlement, they formally notify the bank of their representation. This often leads to a significant reduction or complete cessation of direct harassment from recovery agents, as all communication must then be routed through your legal counsel. If agents continue to use abusive tactics, your lawyers can take legal action against them for violating RBI guidelines regarding debt recovery."
  },
  {
    question: "Is loan settlement legal according to RBI guidelines?",
    answer: "Yes, loan settlement is a fully legal and recognized process under the banking norms established by the Reserve Bank of India (RBI). Banks and NBFCs use settlement as a tool to recover funds from non-performing assets (NPAs). The RBI provides guidelines to ensure that the process is conducted fairly and that borrowers are not subjected to unethical recovery practices during the negotiation period."
  },
  {
    question: "Can I get a new loan after settling an old one?",
    answer: "Getting a new loan immediately after a settlement is challenging because of the 'Settled' status on your credit report. Most banks prefer lending to individuals with a clean 'Closed' status. However, this is not a permanent restriction. By practicing disciplined financial behavior, such as paying utility bills on time and using a secured credit card to rebuild your score, you can become eligible for new loans again, typically after 18 to 24 months of consistent improvement."
  },
  {
    question: "How long does the entire loan settlement process take?",
    answer: "The timeline for loan settlement varies, but on average, it takes between 3 to 6 months from the initial application to receiving the final No Dues Certificate. This duration includes the time needed for financial assessment, multiple rounds of negotiation with the bank, internal bank approvals, and the processing of the settlement payment."
  },
  {
    question: "What is a No Dues Certificate (NDC)?",
    answer: "A No Dues Certificate, or NDC, is a formal document issued by a lender once a loan account has been closed through repayment or settlement. It serves as legal proof that the borrower has no further financial obligations toward that specific loan. It is a critical document for clearing your name and ensuring that the 'Settled' status is correctly reported to credit bureaus."
  },
  {
    question: "Can I settle a business loan that was taken for a startup?",
    answer: "Yes, business loans can be settled, especially if the business has failed or is facing severe losses. However, the process for business loan settlement can be more complex than personal loans, especially if there was collateral involved. Banks will require detailed business financial statements and proof of business closure or downturn to consider a settlement proposal."
  },
  {
    question: "What happens if I miss a payment during an installment settlement?",
    answer: "If you agree to a settlement that is to be paid in installments and you miss a payment, the agreement usually becomes null and void. The bank may then demand the full original outstanding amount, including all waived interest and penalties. This is why it is crucial to only agree to a payment plan that you are absolutely certain you can fulfill."
  },
  {
    question: "Should I hire a lawyer for loan settlement or do it myself?",
    answer: "While you can attempt to negotiate yourself, hiring a lawyer specialized in loan settlement provides several benefits. They offer legal protection against harassment, understand the complex banking laws (like the SARFAESI Act), and have the experience to negotiate much deeper discounts than an individual usually can. A lawyer ensures that the settlement is legally binding and that all your rights as a borrower are upheld."
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
      "name": "What is Loan Settlement",
      "item": "https://www.amalegalsolutions.com/what-is-loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Loan Settlement? Comprehensive Guide to Debt Relief in India",
  "description": "Learn everything about loan settlement in India. Understand how a loan settlement app can help you manage debts, the impact on your CIBIL score, and the legal process involved.",
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
  "dateModified": "2026-05-08"
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
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services and advice in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
        "name": "Sanjay Verma"
      },
      "reviewBody": "I was struggling with my credit card debt for two years. AMA Legal Solutions helped me understand the process and settle for a manageable amount. The loan settlement app made it easy to track my case."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Reddy"
      },
      "reviewBody": "The team at AMA was very empathetic. They handled my personal loan settlement application with great care and stopped the constant calls from recovery agents."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Khanna"
      },
      "reviewBody": "Expert legal advice! They knew exactly what the bank was looking for in the settlement proposal. I saved nearly 45 percent of my total outstanding dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Sharma"
      },
      "reviewBody": "Very transparent process. They explained the impact on my CIBIL score beforehand so I could make an informed decision. Highly recommend their services."
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
      "reviewBody": "Professional and effective. They handled everything from drafting the application to getting the final No Dues Certificate. The stress relief is immeasurable."
    },
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
      "reviewBody": "Excellent guidance on how to improve CIBIL score after settlement. The app provided a roadmap that I am currently following to rebuild my financial life."
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
      "reviewBody": "I was afraid of the legal consequences of not paying my EMIs. The lawyers at AMA clarified what is loan settlement and helped me navigate the entire process with dignity."
    }
  ]
};

export const metadata = {
  title: "What is Loan Settlement? | Guide to Loan Settlement App India",
  description:
    "Discover what is loan settlement and how it works in India. Use our expert guide to understand the loan settlement app features, benefits, and impact on CIBIL. Get professional legal help today.",
  keywords: [
    "what is loan settlement",
    "loan settlement app",
    "loan settlement india",
    "debt settlement process",
    "cibil score impact",
    "one time settlement scheme",
    "personal loan settlement",
    "credit card settlement",
    "recovery agent harassment",
    "npa settlement guide"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-loan-settlement',
  },
};

export default function WhatIsLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "defining-settlement", title: "Defining Loan Settlement" },
    { id: "how-it-works", title: "How it Works" },
    { id: "loan-settlement-app", title: "Loan Settlement App Benefits" },
    { id: "legal-framework", title: "Legal Framework & RBI" },
    { id: "economic-impact", title: "Impact on the Economy" },
    { id: "process", title: "The Step-by-Step Process" },
    { id: "pros-and-cons", title: "Pros & Cons" },
    { id: "credit-score", title: "Impact on Credit Score" },
    { id: "rebuilding-roadmap", title: "24-Month Roadmap" },
    { id: "documents", title: "Documents Required" },
    { id: "harassment-protection", title: "Protection from Harassment" },
    { id: "choosing-expert", title: "Choosing the Right Expert" },
    { id: "helpful-resources", title: "Helpful Resources" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "What is Loan Settlement", href: "/what-is-loan-settlement" },
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
              Understanding <span className="text-[#D2A02A]">What is Loan Settlement</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Discover how a professional loan settlement app and expert legal guidance can help you resolve debts and regain financial stability.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Free Debt Analysis
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
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Path to Financial Recovery</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Navigating the complexities of debt in India can be an overwhelming experience. Many individuals find themselves trapped in a cycle of high interest rates and constant recovery calls, wondering about their options. One term that frequently comes up is <strong>loan settlement</strong>. But what exactly does it mean? And how can a <strong>loan settlement app</strong> transform the way you handle your financial burdens? This guide is designed to answer these questions and provide you with a clear, human-centric understanding of the process.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At its core, understanding <strong>what is loan settlement</strong> involves recognizing it as a strategic tool for those facing genuine financial hardship. It is not just about paying less money; it is about reaching a mutual agreement with your lender to close a chapter of financial distress and start fresh. With the rise of technology, using a dedicated app for this purpose has become a standard way to bring transparency and efficiency to a traditionally opaque process.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The concept of a <strong>loan settlement app</strong> has gained traction because it simplifies the documentation and negotiation phases, which are often the most stressful parts of debt resolution. By digitizing these steps, borrowers can stay informed and empowered, rather than feeling like passive victims of their financial circumstances.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    In the following sections, we will delve deep into the mechanics of settlement, the legal protections available to you, and the practical steps you can take to move towards a debt-free future. Whether you are dealing with credit card dues or a personal loan that has become unmanageable, the right information is your first step toward relief. We will also explore the long-term implications and how you can rebuild your financial life after the process is complete.
                  </p>
                </section>

                {/* Defining Loan Settlement */}
                <section id="defining-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement is a legal agreement between a borrower and a lender where the lender agrees to accept a one-time payment that is less than the total outstanding debt to close the account permanently."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To fully grasp <strong>what is loan settlement</strong>, one must understand that it is often a last-resort option for both the borrower and the bank. For the borrower, it provides an immediate end to the mounting interest and the psychological pressure of debt. For the bank, it is a way to recover a portion of the principal from an account that has been classified as a Non-Performing Asset (NPA), rather than writing off the entire amount as a loss.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This process is also known as a <strong>One Time Settlement (OTS)</strong>. It is a formal procedure that requires proper documentation and a clear agreement on the final amount to be paid. Unlike restructuring, where you change the EMI or tenure but still pay the full amount, settlement explicitly involves a reduction in the total debt burden. This is why it is often searched for as a <strong>loan settlement app</strong> solution, as technology helps in calculating these figures and managing the negotiation flow.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is also important to distinguish settlement from other debt relief measures. While restructuring aims to make repayment easier over a longer period, settlement aims to terminate the debt immediately. This choice is usually determined by the severity of the financial hardship and the likelihood of the borrower's income recovering in the near future.
                  </p>
                </section>

                {/* How it Works */}
                <section id="how-it-works" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How Loan Settlement Works in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The journey of a loan settlement usually begins when a borrower defaults on their EMIs for several consecutive months. Once a loan reaches the 90-day mark of non-payment, it is classified as an NPA. At this stage, the bank's focus shifts from regular collection to recovery.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Communication Initiation</h4>
                        <p className="text-gray-600 text-sm">The process often starts with the bank sending a notice or the borrower reaching out to express their inability to pay the full amount due to financial distress.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Financial Disclosure</h4>
                        <p className="text-gray-600 text-sm">The borrower provides evidence of their hardship, such as medical bills, loss of employment documents, or business loss statements, to justify the request for a settlement.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-bold text-bold text-gray-900">Negotiation Phase</h4>
                        <p className="text-gray-600 text-sm">Both parties negotiate a lump-sum amount. This is where a <strong>loan settlement app</strong> or a legal expert becomes invaluable in ensuring the borrower gets a fair deal.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Final Agreement</h4>
                        <p className="text-gray-600 text-sm">Once the amount is agreed upon, the bank issues a formal settlement letter. The borrower then makes the payment within the stipulated time frame.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    The complexity of this process often depends on the type of loan. Unsecured loans, such as personal loans and credit cards, are generally easier to settle because the bank has no collateral to seize. Secured loans, like home or car loans, require much more careful negotiation as the lender has the legal right to auction the asset to recover their dues.
                  </p>
                </section>

                {/* Loan Settlement App Benefits */}
                <section id="loan-settlement-app" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Benefits of Using a Loan Settlement App</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the modern financial landscape, technology plays a pivotal role in democratizing access to professional services. A <strong>loan settlement app</strong> is not just a digital interface; it is a comprehensive tool that brings order to the chaos of debt management.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                        <p className="text-gray-700"><strong>Real-time Case Tracking:</strong> Monitor every step of your negotiation process directly from your smartphone. No more wondering what the status of your application is.</p>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                        <p className="text-gray-700"><strong>Document Management:</strong> Securely upload and store all your financial records and hardship proofs in one place. This ensures that you have all necessary evidence ready for any legal review.</p>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                        <p className="text-gray-700"><strong>Communication Bridge:</strong> Receive alerts about bank responses and expert advice without having to wait for traditional mail or phone calls, which can often be missed.</p>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                        <p className="text-gray-700"><strong>Educational Resources:</strong> Access a library of articles and videos that explain <strong>what is loan settlement</strong> and how to protect your rights, tailored to the Indian context.</p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Using such an app ensures that you are never left in the dark about your financial status. It provides a level of transparency that was previously impossible, allowing you to feel in control of your journey towards becoming debt-free. It also serves as a secure repository for your settlement letter and No Dues Certificate, which are crucial for long-term credit rebuilding.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework & RBI Guidelines</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One common misconception is that loan settlement is an informal or potentially illegal shortcut. This could not be further from the truth. In India, the process of settling debts is governed by strict guidelines issued by the Reserve Bank of India (RBI).
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The RBI recognizes that debt defaults can happen due to genuine reasons. Therefore, it has provided banks with a framework to resolve these accounts efficiently. This framework is part of the broader strategy to manage NPAs in the Indian banking system. By settling a loan, a bank can recover at least a portion of its funds and reduce the administrative costs associated with pursuing a non-paying borrower.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protecting Borrower Rights</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The RBI has established clear rules regarding how banks should handle non-performing assets and how they should treat borrowers in distress. These guidelines are designed to prevent predatory practices and ensure that the recovery process remains ethical and legal. Key points include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Fair Recovery Practices</h4>
                      <p className="text-gray-600 text-sm">Banks and their recovery agents are strictly prohibited from using physical force, verbal abuse, or any form of harassment to recover debts. Any violation of this can be reported to the banking ombudsman and can lead to severe penalties for the bank.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Transparency in Settlement</h4>
                      <p className="text-gray-600 text-sm">Lenders must provide a clear and written settlement letter that outlines the exact amount to be paid and the date by which the payment must be made to close the account. Oral promises of settlement have no legal standing.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    By understanding these legal foundations, you can approach the settlement process with confidence, knowing that your rights are backed by the highest regulatory authority in the country. It is also important to note that you have the legal right to be represented by a lawyer during these negotiations, which often serves as a deterrent to unethical collection practices.
                  </p>
                </section>

                {/* Impact on the Economy */}
                <section id="economic-impact" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact of NPAs and Settlements on the Economy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While individual loan settlements are personal matters, they are also part of a larger economic picture. Non-Performing Assets (NPAs) are a significant challenge for the Indian economy. When a large number of loans go unpaid, it reduces the bank's ability to lend to new businesses and individuals, which in turn slows down economic growth.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    By facilitating settlements, the system allows for a 'cleaning' of balance sheets. It enables capital that was stuck in non-productive, defaulted loans to be recovered and redeployed. For the individual borrower, it means they can eventually return to the credit market and contribute to the economy once again. This is why understanding <strong>what is loan settlement</strong> is not just beneficial for the debtor, but also for the health of the financial ecosystem.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The availability of professional services and a <strong>loan settlement app</strong> makes this clearing process more efficient. It ensures that settlements are handled professionally, reducing the time and legal costs for both the bank and the borrower. This efficiency is crucial for maintaining the stability of the credit market in India.
                  </p>
                </section>

                {/* Step-by-Step Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Step-by-Step Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While every case is unique, the general flow of a professional loan settlement involves several key milestones. Following a structured path ensures that no critical steps are missed and that the final outcome is legally sound.
                  </p>
                  
                  <div className="relative border-l-2 border-[#D2A02A] ml-4 pl-8 space-y-12">
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Assessment and Planning</h3>
                      <p className="text-gray-700">The first step is a deep dive into your financial situation. You must calculate your total outstanding debt across all lenders and determine what lump-sum amount you can realistically afford to pay. This is where case studies and calculators in a <strong>loan settlement app</strong> can be extremely helpful in setting realistic expectations for the negotiation.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Formal Representation</h3>
                      <p className="text-gray-700">It is often advisable to have a legal expert or a professional firm represent you. They will send a formal notice to the bank stating that you are seeking a settlement due to hardship. This step usually serves to halt or reduce recovery agent activities, as all communication must then go through the legal representative.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Hardship Documentation</h3>
                      <p className="text-gray-700">You will need to gather and submit all relevant proofs of your financial distress. This could include bank statements showing a lack of funds, medical records, or a termination letter. The goal is to prove to the bank that your inability to pay is not a lack of intention but a lack of capacity. Clear and organized documentation is the backbone of a successful settlement.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Negotiation and Approval</h3>
                      <p className="text-gray-700">This phase involves multiple rounds of discussions with the bank's recovery department. Once an agreement is reached, the bank's internal credit committee must approve the proposal. Patience is key during this stage, as it can take several weeks for the internal bureaucracy of the bank to process the approval.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. Execution and Closure</h3>
                      <p className="text-gray-700">After receiving the formal settlement letter, you make the payment. Once the payment is processed, the bank should issue a No Dues Certificate (NDC). It is vital to keep this document safe as it is the ultimate proof that your debt obligation has ended and that the account should no longer be reported as a default.</p>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To make an informed choice, you must weigh the immediate benefits against the long-term consequences. Understanding <strong>what is loan settlement</strong> requires a balanced view of its impact on your financial life today and in the years to come.
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
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm md:text-base">
                              <li><strong>Debt Reduction:</strong> Pay significantly less than what you owe (often saving 30 to 50 percent). This allows you to close the debt using your existing savings.</li>
                              <li><strong>Stop Harassment:</strong> Legal representation stops unethical recovery agent calls and visits, giving you the mental space to focus on your recovery.</li>
                              <li><strong>Mental Peace:</strong> Ends the cycle of stress associated with unmanageable debt and the fear of legal notices.</li>
                              <li><strong>Legal Closure:</strong> Provides a formal, documented end to your debt obligation, preventing future legal claims from the lender.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm md:text-base">
                              <li><strong>Credit Score Impact:</strong> Your score will drop significantly (50 to 100 points) almost immediately after the status is reported.</li>
                              <li><strong>'Settled' Status:</strong> The tag remains on your credit report for up to seven years, visible to every future lender.</li>
                              <li><strong>Future Borrowing:</strong> It will be very difficult to get new unsecured loans for at least 24 months as most banks avoid 'Settled' accounts.</li>
                              <li><strong>Lump Sum Requirement:</strong> Requires you to have a significant amount of cash ready for a one-time payment, which can be difficult for someone in distress.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Impact on Your Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most frequent questions about <strong>what is loan settlement</strong> is how it affects the future ability to borrow. It is important to be realistic: a settlement is a negative mark on your credit history. When a lender sees a 'Settled' tag, it tells them that you did not pay back the full amount you borrowed according to the original contract.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, it is also important to view this in context. If you are already defaulting on your loans, your credit score is already being damaged every month. A default is generally seen as worse than a settlement because a settlement shows that you eventually made an effort to resolve the debt. A settlement provides a way to stop that ongoing damage and start the clock on your financial recovery.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Most credit bureaus in India, such as CIBIL, Experian, and Equifax, will reflect the 'Settled' status. This status indicates that the bank accepted a compromise. While this lowers your score, it is a definitive end to the delinquency. Without a settlement, the account remains 'Active Default,' which continues to drag down your score indefinitely.
                  </p>
                </section>

                {/* 24-Month Roadmap */}
                <section id="rebuilding-roadmap" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Rebuilding Your Life After Debt: A 24-Month Roadmap</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The damage to your credit score is not a life sentence. With discipline and the right approach, you can rebuild your financial health. Here is a roadmap to follow after your settlement is complete:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-lg mb-2">Months 1-6: Stabilization</h4>
                      <p className="text-gray-600 text-sm">Focus on ensuring that all other active accounts and utility bills are paid on time. Do not apply for any new loans or credit cards during this period, as the 'Settled' status is very fresh and will lead to automatic rejections.</p>
                    </div>
                    <div className="relative">
                       <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-lg mb-2">Months 7-12: The Rebuilding Phase</h4>
                        <p className="text-gray-600 text-sm">Apply for a secured credit card against a fixed deposit (FD). Use this card for small, manageable expenses and pay the bill in full every month. This creates a new, positive credit history that starts to overshadow the old settlement tag.</p>
                      </div>
                    </div>
                    <div className="relative">
                       <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-lg mb-2">Months 13-24: Score Improvement</h4>
                        <p className="text-gray-600 text-sm">Continue the disciplined use of your secured card. By now, your score should have started to climb back up. You may be eligible for small consumer durable loans. Successfully paying these off will further boost your credibility with lenders.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    A <strong>loan settlement app</strong> often includes features to track this progress and provide tips on credit rebuilding. By following this roadmap, many borrowers find that they are eligible for significant loans like home or car loans again within two to three years of their settlement.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Preparation is key to a successful settlement negotiation. Having all your documents ready shows the bank that you are serious and organized. Most professional services and any quality <strong>loan settlement app</strong> will ask you for the following:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">1.</span> KYC Documents (Aadhar Card and PAN Card)
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">2.</span> Loan Account Statements for all debts
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">3.</span> Salary Slips or Income Proof (if currently employed)
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">4.</span> Bank Statements for the last 6 to 12 months
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">5.</span> Proof of Hardship (Medical reports, job loss letter, etc.)
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3 font-bold">6.</span> Income Tax Returns (ITR) for the last two years
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    The bank's credit committee uses these documents to verify your financial status. If they see that you have hidden assets or income, they will likely reject the settlement proposal. Honesty and transparency in your documentation are essential for a successful outcome.
                  </p>
                </section>

                {/* Protection from Harassment */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection from Recovery Agent Harassment</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the primary reasons people seek help with <strong>what is loan settlement</strong> is to escape the constant harassment from recovery agents. It is important to know that you have strong legal protections against such behavior.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under RBI guidelines, recovery agents cannot call you before 8 AM or after 7 PM. They cannot call your friends, family, or employer to shames you or discuss your debt. Most importantly, they cannot use physical threats or intimidation. If any of these occur, it is a violation of your rights.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    A professional legal firm can stop this harassment by formally notifying the bank. Once a lawyer is involved, the bank is legally required to route all communications through them. This immediate relief from harassment is often the most valued part of the settlement service, as it allows the borrower to regain their dignity and peace of mind.
                  </p>
                </section>

                {/* Choosing the Right Expert */}
                <section id="choosing-expert" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Expert Help</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While you can theoretically negotiate a settlement on your own, the process is often fraught with legal pitfalls and aggressive tactics from lenders. This is why many choose to work with a professional legal firm.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A qualified <strong>loan settlement lawyer</strong> or a reputable firm like AMA Legal Solutions brings several advantages to the table. They understand the language of the bank's credit committee, they know the latest RBI circulars by heart, and most importantly, they can provide you with genuine legal protection.
                  </p>
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-xl mb-4 text-amber-900">What to look for in a service provider:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-amber-800">
                      <li><strong>Legal Credentials:</strong> Ensure they are actual lawyers and not just a collection agency in disguise. Lawyers are bound by ethical codes that agencies are not.</li>
                      <li><strong>Transparency:</strong> They should be upfront about the fees and the impact on your credit score. Avoid any service that promises to 'delete' your settlement history overnight, as that is impossible.</li>
                      <li><strong>Technology:</strong> A user friendly <strong>loan settlement app</strong> for tracking your case is a good sign of professional and modern operations.</li>
                      <li><strong>Track Record:</strong> Look for reviews and success stories from previous clients who were in similar situations. A high success rate in negotiating with major banks is a key indicator of expertise.</li>
                    </ul>
                  </div>
                </section>

                {/* Helpful Resources */}
                <section id="helpful-resources" className="scroll-mt-32 border-t pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Helpful Resources for Your Journey</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/loan-settlement-process-in-hindi" className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D2A02A] transition-colors shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Guide in Hindi</h4>
                      <p className="text-gray-600 text-sm">Understand the loan settlement process in your preferred language for better clarity and confidence.</p>
                    </Link>
                    <Link href="/how-to-negotiate-a-loan-settlement-with-lenders-online" className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D2A02A] transition-colors shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Online Negotiation Tips</h4>
                      <p className="text-gray-600 text-sm">Learn the best strategies for negotiating with banks through digital channels effectively and professionally.</p>
                    </Link>
                    <Link href="/what-is-ots" className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D2A02A] transition-colors shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">The OTS Guide</h4>
                      <p className="text-gray-600 text-sm">A deep dive into the One Time Settlement scheme and how it differs from other debt relief options in India.</p>
                    </Link>
                    <Link href="/loan-settlement-amount-calculator" className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D2A02A] transition-colors shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Settlement Calculator</h4>
                      <p className="text-gray-600 text-sm">Estimate the potential settlement amount based on your current outstanding dues and financial hardship factors.</p>
                    </Link>
                    <Link href="/documents-needed-for-loan-settlement-noc" className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D2A02A] transition-colors shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Documentation Checklist</h4>
                      <p className="text-gray-600 text-sm">A complete list of documents you will need to prepare for a successful loan settlement application and NDC.</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Take Control of Your Debt?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let the stress of debt define your future. Our expert legal team and advanced <strong>loan settlement app</strong> are here to guide you every step of the way towards financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book a Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-xs opacity-70 italic">Confidential legal help for borrowers in distress.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Expert Advice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our senior legal consultants to discuss your debt resolution plan and stop harassment.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Get Help Online
                  </Link>
                </div>

                {/* App Promo */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl text-white">
                  <h4 className="font-bold text-lg mb-3 text-[#D2A02A]">Download Our App</h4>
                  <p className="text-gray-300 text-xs mb-6">Track your loan settlement case, manage documents, and get expert help on the go. Available for iOS and Android.</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                      <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto" />
                    </Link>
                  </div>
                </div>

                {/* Success Stats */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#D2A02A]">1500+</p>
                      <p className="text-gray-500 text-xs">Settlements Resolved Successfully</p>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#D2A02A]">40%</p>
                      <p className="text-gray-500 text-xs">Average Debt Reduction Achieved</p>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#D2A02A]">100%</p>
                      <p className="text-gray-500 text-xs">Legal Compliance and Transparency</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
