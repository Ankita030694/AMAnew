import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is it possible to settle a 10 lakhs loan in India legally?",
    answer: "Yes, settling a 10 lakhs loan is a completely legal process in India. It is recognized by the Reserve Bank of India (RBI) as a mechanism through which banks can recover dues from non-performing assets (NPAs). When a borrower faces extreme financial hardship, the bank can agree to a One Time Settlement (OTS) to close the account for a lower amount."
  },
  {
    question: "How much discount can I expect for a 10 lakhs loan settlement?",
    answer: "The discount varies based on several factors, including the type of loan (secured vs unsecured), the length of default, and your negotiation skills. Generally, for unsecured loans like personal loans or credit cards amounting to 10 lakhs, you can negotiate for a waiver of 30% to 70% of the total outstanding amount. Banks usually focus on recovering the principal amount while waiving interest and penalties."
  },
  {
    question: "Does a 10 lakhs loan settlement affect my CIBIL score?",
    answer: "Yes, any loan settlement will impact your CIBIL score negatively. Once settled, your credit report will show the status as 'Settled' rather than 'Closed.' This can lower your score by 75 to 100 points. However, this is often a better alternative to a 'Default' or 'Written Off' status, which indicates a complete failure to pay and can prevent you from getting any credit for a decade."
  },
  {
    question: "Can I settle a credit card debt of 10 lakhs?",
    answer: "Absolutely. Credit card debts are unsecured and often carry the highest interest rates. Because there is no collateral for the bank to seize, they are often more willing to settle for a reasonable amount if they are convinced of your financial incapacity. Professional legal representation can help you navigate this process without falling into the bank's traps."
  },
  {
    question: "What documents are required for a 10 lakhs loan settlement?",
    answer: "You will typically need to provide proof of financial hardship. This includes your latest bank statements, salary slips (if any), PAN and Aadhar cards, the loan agreement, and any legal notices received from the bank. If your default is due to medical reasons or job loss, documents like medical reports or a termination letter are essential to build a strong case."
  },
  {
    question: "Will the bank stop harassment once I start the settlement process?",
    answer: "RBI guidelines strictly prohibit harassment by recovery agents. When you engage a legal firm like AMA Legal Solutions, we formally notify the bank of your representation. This typically redirects all communication through your lawyers, effectively stopping direct harassment at your home or workplace. If harassment continues, we can take legal action against the bank."
  },
  {
    question: "Can I settle a car loan or home loan of 10 lakhs?",
    answer: "Settling secured loans is more challenging because the bank has the right to seize the asset (the car or the house) under the SARFAESI Act. However, if the asset's value has depreciated significantly or if there are legal complications, settlement is still possible. Usually, restructuring or extending the tenure is the first step for secured loans before settlement is considered."
  },
  {
    question: "What is a Settlement Letter and why is it important?",
    answer: "A Settlement Letter is a formal document issued by the bank stating the agreed-upon amount and terms of the settlement. It is critical because it serves as legal proof of the agreement. You should never make a settlement payment without having this letter in hand, as verbal promises from recovery agents are not legally binding and can lead to further demands later."
  },
  {
    question: "How long does it take to rebuild CIBIL after a 10 lakhs settlement?",
    answer: "After a settlement, you can start rebuilding your credit score immediately, but it takes time to see results. By using a secured credit card (backed by a fixed deposit) and making timely payments on other small utility bills, you can significantly improve your score within 18 to 24 months. Disciplined financial behavior is the key to regaining a high credit score."
  },
  {
    question: "Why should I use a lawyer for a 10 lakhs loan settlement instead of doing it myself?",
    answer: "Banks have experienced recovery departments and legal teams. Negotiating on your own can be intimidating and may lead to unfavorable terms. A lawyer understands the legal nuances of banking laws, RBI circulars, and the SARFAESI Act. They ensure that your rights are protected, harassment is stopped, and the final settlement is legally sound and truly beneficial for you."
  }
];

// Content for Related Pages
const relatedPages = [
  { name: "Loan Settlement Services", href: "/services/loan-settlement" },
  { name: "What is OTS (One Time Settlement)?", href: "/what-is-ots" },
  { name: "Impact of Settlement on CIBIL", href: "/does-loan-settlement-affect-cibil" },
  { name: "How to Negotiate with Banks", href: "/how-to-negotiate-a-loan-settlement-with-lenders-online" },
  { name: "Harassment Complaint Guide", href: "/loan-recovery-agents-harassment-complaint" },
  { name: "Stop Recovery Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
];

// Schema Data
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
      "name": "10 Lakhs Loan Settlement",
      "item": "https://www.amalegalsolutions.com/10-lakhs-loan-settlement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "10 Lakhs Loan Settlement Guide: Legal Process, Savings, and CIBIL Impact",
  "description": "Exhaustive guide on 10 lakhs loan settlement in India. Learn the legal steps, how much you can save, and how to stop bank harassment with expert legal help.",
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
  "datePublished": "2024-02-25",
  "dateModified": "2024-02-25"
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
  "name": "10 Lakhs Loan Settlement Service",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert assistance in settling personal loans of 10 lakhs with high waiver offers.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "840"
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
        "name": "Sandeep Verma"
      },
      "reviewBody": "AMA Legal Solutions helped me settle my 10 lakh personal loan from HDFC. They stopped the recovery calls within 2 days and got a 55% waiver. The process was stress-free and professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenal Gupta"
      },
      "reviewBody": "Professional and transparent. They handled my credit card debt of 12 lakhs very effectively. Highly recommended for anyone in financial trouble. They saved me from a major financial crisis."
    },
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
      "reviewBody": "I was drowning in multiple personal loans totaling around 10 lakhs. AMA Legal Solutions consolidated my cases and negotiated a settlement that I could actually afford. Highly grateful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Singh"
      },
      "reviewBody": "The recovery agents were calling my office and neighbors. AMA's legal notice stopped them immediately. They eventually settled my 8.5 lakh loan for just 3.2 lakhs. A life saver!"
    }

  ]
};

export const metadata = {
  title: "10 Lakhs Loan Settlement India | Expert Legal Guide to Debt Relief",
  description: "Struggling with a 10 lakhs loan? Our expert lawyers provide a comprehensive guide to loan settlement, RBI rules, and how to save up to 70% on your debt.",
  keywords: [
    "10 lakhs loan settlement",
    "loan settlement process india",
    "debt settlement 10 lakhs",
    "personal loan settlement guide",
    "credit card debt settlement",
    "rbi guidelines loan settlement",
    "stop recovery agent harassment",
    "ots scheme for 10 lakhs",
    "loan settlement lawyer",
    "cibil score after settlement"
  ],
};

export default function TenLakhsLoanSettlement() {
  const reviews = [
    {
      name: "Sandeep Verma",
      location: "New Delhi",
      rating: 5,
      text: "AMA Legal Solutions helped me settle my 10 lakh personal loan from HDFC. They stopped the recovery calls within 2 days and got a 55% waiver. The process was stress-free and professional.",
      date: "January 2025"
    },
    {
      name: "Meenal Gupta",
      location: "Mumbai",
      rating: 5,
      text: "Professional and transparent. They handled my credit card debt of 12 lakhs very effectively. Highly recommended for anyone in financial trouble. They saved me from a major financial crisis.",
      date: "February 2025"
    },
    {
      name: "Rahul Sharma",
      location: "Bengaluru",
      rating: 5,
      text: "I was drowning in multiple personal loans totaling around 10 lakhs. AMA Legal Solutions consolidated my cases and negotiated a settlement that I could actually afford. Highly grateful.",
      date: "February 2025"
    },
    {
        name: "Anjali Singh",
        location: "Pune",
        rating: 5,
        text: "The recovery agents were calling my office and neighbors. AMA's legal notice stopped them immediately. They eventually settled my 8.5 lakh loan for just 3.2 lakhs. A life saver!",
        date: "December 2024"
    }
  ];

  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "bank-strategies", title: "Bank-Specific Strategies" },
    { id: "tax-implications", title: "Tax Implications" },
    { id: "digital-apps", title: "Digital Lending Apps" },
    { id: "checklist", title: "Post-Settlement Checklist" },
    { id: "what-is-it", title: "What is 10 Lakhs Loan Settlement?" },
    { id: "why-10-lakhs", title: "Why 10 Lakhs is Critical" },
    { id: "legal-framework", title: "Legal Framework & RBI Rules" },
    { id: "step-by-step", title: "Step-by-Step Process" },
    { id: "savings-calc", title: "How Much Can You Save?" },
    { id: "cibil-score", title: "CIBIL Score Impact" },
    { id: "recovery-harassment", title: "Stopping Recovery Harassment" },
    { id: "secured-vs-unsecured", title: "Secured vs Unsecured Debt" },
    { id: "why-lawyer", title: "Why Professional Help?" },
    { id: "alternatives", title: "Alternatives" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "10 Lakhs Loan Settlement", href: "/10-lakhs-loan-settlement" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
              Settle Your <span className="text-[#D2A02A]">10 Lakhs Loan</span> with Expert Legal Support
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-300">
              Escape the debt trap legally. Reduce your 10 lakhs burden by up to 70%, stop recovery harassment immediately, and regain your financial peace of mind.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg">
                Start Your Debt-Free Journey Today
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-10 items-start">
            {/* Left Column - Table of Contents */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">On This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl space-y-16">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">The Reality of a 10 Lakhs Debt Burden in India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      In the current economic climate of India, carrying a debt of 10 lakhs is more common than most people realize. For many middle class families, this amount is often the cumulative result of multiple personal loans, credit card outstanding balances, and small business credit lines. What starts as a manageable monthly EMI can quickly spiral out of control due to unforeseen circumstances like medical emergencies, job losses, or business downturns.
                    </p>
                    <p>
                      When you cross the 10 lakh threshold, the character of your debt changes. Banks become more aggressive, recovery agents become more persistent, and the psychological weight of the interest alone can be paralyzing. However, it is essential to remember that financial distress is not a crime. The legal system in India provides robust mechanisms for honest borrowers to settle their debts and start fresh.
                    </p>
                    <p>
                      At AMA Legal Solutions, we have witnessed thousands of individuals struggle under the weight of 10 lakhs in debt. We understand that the fear of public shaming and the constant ping of legal notices is exhausting. Our mission is to provide you with a clear, legal, and dignified path toward settlement, ensuring that you are treated with respect throughout the process.
                    </p>
                    <p>
                        Searching for terms like <strong>10 lakhs loan settlement</strong> is the first step in acknowledging the situation. This guide is designed to be the ultimate resource for understanding how to resolve such a significant debt amount without losing your assets or your peace of mind.
                    </p>
                  </div>
                </section>

                {/* Bank Specific Strategies */}
                <section id="bank-strategies" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Bank-Specific Strategies for 10 Lakhs Settlement</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                        Negotiating a 10 lakhs settlement is not a one-size-fits-all process. Different banks in India have different internal policies and OTS (One Time Settlement) cycles. Understanding the behavior of your specific lender can give you a significant advantage.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">1. Public Sector Banks (SBI, PNB, BOB)</h3>
                    <p>
                        Public sector banks usually have very rigid structures but are governed by clear government mandates. They often announce massive OTS schemes during the last quarter of the financial year (January to March) or before Lok Adalats. For a 10 lakhs loan, SBI often focuses on recovering the principal amount. Their approval process can be slower as it needs to move through several committees, so patience is key when dealing with PSUs.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">2. Major Private Banks (HDFC, ICICI, Axis)</h3>
                    <p>
                        Private banks are more commercially driven. They are faster to settle but can be more aggressive in the initial recovery stages. For a 10 lakhs personal loan, these banks often use high-pressure recovery agencies. However, once we initiate legal communication, they are often willing to reach a settlement quickly to clean their balance sheets and avoid the cost of legal action in the Debt Recovery Tribunal (DRT).
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">3. Digital Lenders and NBFCs (Bajaj, Fullerton, Navi)</h3>
                    <p>
                        Non-Banking Financial Companies (NBFCs) and digital lending apps have been very active in the 10 lakhs personal loan market. They often charge higher interest rates. Because their cost of capital is higher, they are sometimes more desperate to recover at least the principal. We have successfully negotiated settlements with many digital lenders where the final payment was even lower than the original principal disbursed.
                    </p>
                  </div>
                </section>

                {/* Tax Implications */}
                <section id="tax-implications" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Tax Implications of a 10 Lakhs Loan Settlement</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      One often overlooked aspect of a 10 lakhs settlement is the tax consequence. Under the Income Tax Act in India, the amount of debt waived by a lender can be considered 'income' in the hands of the borrower. For example, if you settle a 10 lakhs debt for 4 lakhs, the remaining 6 lakhs could theoretically be seen as a financial gain.
                    </p>
                    <p>
                      However, there are nuances. If the debt was personal (like a personal loan or credit card used for household expenses), the tax treatment is different than if it was a business loan. For business loans, the waived amount is usually treated as business income under Section 28 of the Income Tax Act.
                    </p>
                    <p>
                      At AMA Legal Solutions, we don't just stop at the settlement letter. We provide preliminary guidance on how to report this in your ITR (Income Tax Return) to avoid future notices from the tax department. We recommend consulting with a Chartered Accountant after the settlement to ensure full compliance with current tax laws.
                    </p>
                  </div>
                </section>

                {/* Digital Lending Apps Warning */}
                <section id="digital-apps" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">10 Lakhs Debt on Digital Lending Apps: A Modern Crisis</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      In the last few years, we have seen a surge in clients who have accumulated 10 lakhs in debt through multiple digital lending apps. This is the 'death by a thousand cuts' scenario. You might have ten different apps, each with a 1 lakh limit. Individually they seem small, but collectively they create a massive 10 lakhs burden with compounding interest that is often predatory.
                    </p>
                    <p>
                      Digital apps are notorious for aggressive and sometimes unethical recovery practices, such as accessing your contact list or threatening to leak data. If you are in this situation, do not panic. The RBI's Digital Lending Guidelines issued in 2022 provide strong protection for you. These apps must follow the same recovery rules as traditional banks. We specialize in consolidated settlements for multiple app debts, bringing all your creditors to the table for a single legal resolution.
                    </p>
                  </div>
                </section>

                {/* Final Checklist */}
                <section id="checklist" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Ultimate Post-Settlement Checklist</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Winning the settlement is only the first half of the battle. The second half is ensuring that the bank follows through on its promises. After paying for your 10 lakhs settlement, you must collect and verify the following:
                    </p>
                     <div className="bg-gray-100 p-8 rounded-3xl">
                        <ul className="space-y-4 list-none p-0">
                            <li className="flex items-center gap-3">
                                <span className="bg-green-500 text-white p-1 rounded-full text-xs">✓</span>
                                <strong>Original No Dues Certificate:</strong> Ensure it has the bank's holographic seal and the signature of a senior manager.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-green-500 text-white p-1 rounded-full text-xs">✓</span>
                                <strong>Return of Post-Dated Cheques:</strong> If you gave any cheques at the time of loan disbursement, get them back or get an official letter stating they have been destroyed.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-green-500 text-white p-1 rounded-full text-xs">✓</span>
                                <strong>Closure of Court Cases:</strong> If there were Section 138 (cheque bounce) cases or DRT proceedings, ensure the bank's lawyer files a 'Withdrawal Memo' in the respective court.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-green-500 text-white p-1 rounded-full text-xs">✓</span>
                                <strong>CIBIL Status Check:</strong> Wait for 45 to 60 days and then download your credit report. Verify that the account is marked as 'Settled' and the 'Amount Overdue' is shown as zero.
                            </li>
                        </ul>
                     </div>
                  </div>
                </section>

                {/* What is 10 Lakhs Loan Settlement? */}
                <section id="what-is-it" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What exactly is a 10 Lakhs Loan Settlement?</h2>
                  <div className="bg-amber-50 border-l-8 border-[#D2A02A] p-8 md:p-10 mb-10 rounded-r-2xl shadow-inner">
                    <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
                        "Loan settlement is a formal, legal agreement where the lender agrees to accept a lump-sum payment that is lower than the total outstanding debt to close the account permanently."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      A 10 lakhs loan settlement is essentially a compromise between the borrower and the financial institution. When a bank realizes that a borrower is genuinely unable to pay the full amount due to verifiable financial hardship, they prefer to recover a portion of the money immediately rather than entering into long, expensive legal battles.
                    </p>
                    <p>
                      In the banking world, this is often referred to as a <strong>One Time Settlement (OTS)</strong>. It is important to distinguish this from 'Loan Closure' (paying the full amount) and 'Loan Write-Off' (the bank removing the debt from their active books while still pursuing you for recovery). A 'Settlement' means the debt is legally extinguished, and the bank issues a No Dues Certificate, though it does leave a mark on your credit report.
                    </p>
                    <p>
                        For an amount like 10 lakhs, banks are particularly interested in settlements if the loan has been classified as a Non Performing Asset (NPA) for more than six months. This duration signals to the bank that the standard recovery measures have failed and that a compromise might be the most logical business decision.
                    </p>
                  </div>
                </section>

                {/* Why 10 Lakhs is Critical */}
                <section id="why-10-lakhs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why the 10 Lakhs Threshold is a Turning Point</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Why do we focus specifically on the 10 lakh figure? Because in the Indian banking hierarchy, this amount marks a shift in how banks handle recovery. For smaller amounts, banks usually rely on automated calls and low-level recovery agents. Once the debt reaches 10 lakhs, the file often moves to the 'High Value Recovery' desk or is outsourced to specialized agencies with higher targets.
                    </p>
                    <p>
                      At this level, the interest alone can exceed 2 lakhs per year if the rates are around 20% (common for credit cards and personal loans). This means that even if you pay 15,000 rupees a month, you aren't even covering the interest, and your total debt continues to grow. This is the classic <strong>debt trap</strong>.
                    </p>
                    <p>
                      Furthermore, for secured loans, the 10 lakh mark is often the point where banks decide that the cost of initiating SARFAESI proceedings (seizing the property) is worth the expected recovery amount. Therefore, if your total debt is around this figure, the urgency to find a legal solution through settlement is much higher.
                    </p>
                  </div>
                </section>

                {/* Legal Framework & RBI Rules */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Legal Framework: RBI Guidelines and Your Rights</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Many people fear that settling a loan is an 'illegal' shortcut. This is completely false. Loan settlement is a standard banking practice governed by guidelines from the Reserve Bank of India (RBI). The RBI's Prudential Framework for Resolution of Stressed Assets provides the legal backbone for how banks can negotiate settlements.
                    </p>
                    <p>
                      As a borrower in India, you have specific legal rights that are often ignored by recovery agents. Knowing these rights is half the battle:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-8 my-10 list-none p-0">
                      <li className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#D2A02A] shadow-sm">
                        <h4 className="font-extrabold text-[#D2A02A] text-xl mb-3 uppercase tracking-wider">The Right to Privacy</h4>
                        <p className="text-sm">Recovery agents cannot contact your relatives, neighbors, or colleagues to shame you. Your financial dealings are strictly between you and the lender.</p>
                      </li>
                      <li className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#D2A02A] shadow-sm">
                        <h4 className="font-extrabold text-[#D2A02A] text-xl mb-3 uppercase tracking-wider">The Right to Dignity</h4>
                        <p className="text-sm">Abusive language, physical threats, or harassment during ungodly hours is strictly prohibited. Recovery calls can only be made between 8:00 AM and 7:00 PM.</p>
                      </li>
                      <li className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#D2A02A] shadow-sm">
                        <h4 className="font-extrabold text-[#D2A02A] text-xl mb-3 uppercase tracking-wider">The Right to Notice</h4>
                        <p className="text-sm">Banks cannot seize your assets without providing proper legal notice under the SARFAESI Act, giving you time to respond or settle.</p>
                      </li>
                      <li className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#D2A02A] shadow-sm">
                        <h4 className="font-extrabold text-[#D2A02A] text-xl mb-3 uppercase tracking-wider">The Right to Representative</h4>
                        <p className="text-sm">You have the absolute right to hire a lawyer to represent you. Once a lawyer is involved, the bank must direct its legal communications to them.</p>
                      </li>
                    </ul>
                    <p>
                        The RBI's master circular on 'Recovery Agents' and the 'Internal Ombudsman Scheme' are critical documents that protect you. If a bank violates these rules during the recovery of your 10 lakhs loan, you have the right to file a formal complaint that can even result in the bank paying you compensation.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Process */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Proven 10 Lakhs Loan Settlement Process</h2>
                  <div className="space-y-12">
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:rotate-6 transition-transform">01</div>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4">Comprehensive Financial Audit</h3>
                        <p className="text-lg text-gray-600">
                          The first step is a deep dive into your financial reality. We analyze your total debt across all banks, identify the specific 10 lakhs loan that needs urgent attention, and evaluate your ability to pay a lump sum. We look at your income, expenses, and existing assets to determine what a 'fair' settlement amount looks like for you.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:rotate-6 transition-transform">02</div>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4">Cease and Desist (Stopping Harassment)</h3>
                        <p className="text-lg text-gray-600">
                          We immediately send a formal legal notice to the bank notifying them that AMA Legal Solutions is representing you. This notice includes a 'Cease and Desist' demand against unauthorized recovery agents. This step is crucial for restoring your mental peace so you can focus on making sound financial decisions.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:rotate-6 transition-transform">03</div>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4">Strategic Negotiation</h3>
                        <p className="text-lg text-gray-600">
                          Our expert negotiators engage with the bank's recovery managers. We present your case as one of genuine financial hardship, backed by documentation. For a 10 lakhs loan, we aim to waive the entire penal interest and a significant portion of the accumulated regular interest. We fight to bring the payable amount as close to the original principal as possible, or even lower.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:rotate-6 transition-transform">04</div>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4">Settlement Letter Verification</h3>
                        <p className="text-lg text-gray-600">
                          Once an agreement is reached, the bank must issue a formal Settlement Letter. We meticulously review this document to ensure there are no hidden clauses that could allow the bank to demand more money later. We confirm the timeline for payment and ensure the letter explicitly states that the account will be closed and a No Dues Certificate will be issued.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg group-hover:rotate-6 transition-transform">05</div>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4">Final Payment and Closure</h3>
                        <p className="text-lg text-gray-600">
                          You make the payment as per the agreed schedule. We then follow up with the bank to obtain the <strong>No Dues Certificate (NDC)</strong>. This document is your 'get out of jail free' card. It is the legal proof that you no longer owe a single rupee for that 10 lakh loan. We also ensure that the bank updates its records so the harassment doesn't restart due to some clerical error.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Savings Calculation */}
                <section id="savings-calc" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">How Much Can You Really Save on 10 Lakhs?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                        The most common question we hear is: "How much of the 10 lakhs can I save?" The answer is that it depends on the age and type of the loan. However, typical savings range between 30% and 70% of the total outstanding amount.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 overflow-x-auto my-10">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-blue-200">
                                <tr className="text-blue-900 font-black uppercase text-sm tracking-widest">
                                    <th className="py-4 px-6">Loan Type</th>
                                    <th className="py-4 px-6">Principal</th>
                                    <th className="py-4 px-6">Typical Settlement Range</th>
                                    <th className="py-4 px-6">Potential Savings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-100">
                                <tr>
                                    <td className="py-4 px-6 font-bold">Credit Card Debt</td>
                                    <td className="py-4 px-6">10 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">3 - 5 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">50% - 70%</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-bold">Personal Loan</td>
                                    <td className="py-4 px-6">10 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">4.5 - 6.5 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">35% - 55%</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-bold">Business Loan</td>
                                    <td className="py-4 px-6">10 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">5 - 7 Lakhs</td>
                                    <td className="py-4 px-6 text-green-700 font-bold">30% - 50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                      These numbers are estimates based on our extensive experience. The key to maximizing your savings is time. The longer a loan has been in default, the more likely the bank is to accept a lower amount. However, you must balance this against the risk of the bank initiating legal action. This is where our legal expertise is invaluable because we know exactly when to push and when to settle.
                    </p>
                  </div>
                </section>

                {/* CIBIL Score Impact */}
                <section id="cibil-score" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Understanding the CIBIL Score Impact</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      We believe in 100% transparency. Any loan settlement will have an impact on your CIBIL score. When you settle a 10 lakhs loan, the status will be reported to credit bureaus as 'Settled.' This remains on your credit report for seven years and can lower your score by 75 to 100 points initially.
                    </p>
                    <p>
                        However, you must consider the alternative. If you do nothing, your score will continue to plumet every month you miss an EMI. A 'Default' or 'Written Off' status is a permanent red flag for any future lender. A 'Settled' status, while not perfect, shows that the debt was resolved. It is a closed chapter.
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 !mt-12 mb-6">How to Rebuild After Settlement</h3>
                    <p>
                      The good news is that a credit score is not a terminal sentence. It is a living number that reacts to your behavior. Once your 10 lakhs loan is settled and your stress is gone, you can start the rebuilding process:
                    </p>
                    <ul className="list-disc pl-8 space-y-4">
                        <li><strong>Secured Credit Cards:</strong> Apply for a credit card against a fixed deposit of 20,000 or 50,000 rupees. Use it for small monthly expenses and pay the full balance every month.</li>
                        <li><strong>Small Gold Loans:</strong> Taking a tiny gold loan and paying it back over 6 months is an excellent way to show repayment discipline.</li>
                        <li><strong>Timely Utility Payments:</strong> Ensure every other loan or bill is paid on time. Even one late payment can set back your progress.</li>
                    </ul>
                    <p>
                      Usually, within 24 months of a 10 lakhs loan settlement, many of our clients see their scores climb back into the 700s, making them eligible for credit again.
                    </p>
                  </div>
                </section>

                {/* Stopping Recovery Harassment */}
                <section id="recovery-harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Stopping Recovery Harassment: You Are Protected</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      The most traumatic part of a 10 lakhs default is the harassment. Recovery agents often use intimidation because they know that most people are unaware of the law. They use 'spoofing' to call from different numbers, they threaten to come to your office, and they sometimes use abusive language over the phone.
                    </p>
                    <p>
                        <strong>This ends when you hire a lawyer.</strong> Under the RBI guidelines and specifically the guidelines on Freeing Stressed Assets, banks are responsible for the actions of their outsourced recovery agents. If an agent harasses you, the bank is legally liable. 
                    </p>
                    <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100 my-10">
                        <h4 className="text-red-900 font-black text-xl mb-4">What to do if an agent visits your home:</h4>
                        <ol className="list-decimal pl-8 space-y-2 text-red-800">
                            <li>Ask for their ID card and the bank's authorization letter. If they don't have it, they are trespassing.</li>
                            <li>Record the conversation on your mobile phone politely.</li>
                            <li>Inform them that the matter is being handled by your legal counsel at AMA Legal Solutions.</li>
                            <li>Tell them that if they do not leave, you will call the local police for harassment.</li>
                        </ol>
                    </div>
                    <p>
                      Our legal team takes a zero tolerance approach to harassment. We have successfully field complaints with the Banking Ombudsman that resulted in significant penalties for lenders. No 10 lakh debt justifies the violation of your human dignity.
                    </p>
                  </div>
                </section>

                {/* Secured vs Unsecured Debt */}
                <section id="secured-vs-unsecured" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">10 Lakhs in Secured vs. Unsecured Debt</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                        The strategy for settling 10 lakhs varies widely depending on whether the debt is secured or unsecured.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 !mt-10">
                        <div className="bg-white border shadow-sm p-8 rounded-2xl">
                            <h4 className="font-bold text-2xl mb-4 text-[#D2A02A]">Unsecured (Personal/Cards)</h4>
                            <p>This is the most common type of settlement. Since there is no collateral, the bank's leverage is your credit score and social reputation. Our tactic here is to prove your inability to pay while highlighting the high cost of litigation for the bank. Savings here are maximum.</p>
                        </div>
                        <div className="bg-white border shadow-sm p-8 rounded-2xl">
                            <h4 className="font-bold text-2xl mb-4 text-[#D2A02A]">Secured (Home/Car/Gold)</h4>
                            <p>Here, the bank has the asset as leverage. Settleing a 10 lakh home loan is harder because the bank can auction the property. Our strategy involves challenging the SARFAESI notices on technical grounds and negotiating a settlement that is higher than the liquidation value but lower than the total dues.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Why Professional Help? */}
                <section id="why-lawyer" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why You Need a Specialized Lawyer for 10 Lakhs</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Many people turn to 'debt relief agencies' or 'settlement consultants.' It is crucial to understand that these are often just marketing firms with no legal authority. They cannot represent you in court, they cannot respond to legal notices, and they have no immunity from recovery agents.
                    </p>
                    <p>
                        AMA Legal Solutions is a legitimate law firm. When we represent you for a 10 lakhs loan settlement, we provide:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Legal Immunity:</strong> Our representation acts as a shield against illegal recovery tactics.</li>
                        <li><strong>Expert Negotiation:</strong> We speak the language of bank senior management, not just the low-level recovery agents.</li>
                        <li><strong>Procedural Knowledge:</strong> We know the loopholes in the bank's own processes that can be used to your advantage.</li>
                        <li><strong>Closure Verification:</strong> We ensure that the settlement is not just a temporary pause but a permanent legal closure of your debt.</li>
                    </ul>
                  </div>
                </section>

                {/* Alternatives */}
                <section id="alternatives" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Alternatives to Settlement for 10 Lakhs</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Settlement should be your last resort. If your 10 lakhs debt is still relatively fresh and you have some income, we might suggest alternatives that protect your credit score:
                    </p>
                    <ul className="space-y-6 list-none p-0">
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                            <div>
                                <strong>Debt Consolidation:</strong> Taking one low interest loan (like a Loan Against Property) to pay off ten high interest debts. This simplifies your EMIs and reduces your total interest cost.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                            <div>
                                <strong>Loan Restructuring:</strong> Negotiating with the bank to extend the loan tenure. This reduces your monthly EMI to a manageable level, although it increases the total interest you pay over time.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                            <div>
                                <strong>Asset Liquidation:</strong> Sometimes, selling a non essential asset to pay off the 10 lakhs is better than facing the long term consequences of a settlement on your credit report.
                            </div>
                        </li>
                    </ul>
                  </div>
                </section>

                {/* Success Stories / Review Snippets */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Verified Review Snippets & Success Stories</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    Real stories from real clients who successfully settled their 10 lakhs+ loans with our expert legal help.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                        <div className="absolute top-8 right-8 text-[#D2A02A] opacity-20">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 16.6569 20.6739 18 19.017 18H17.017L17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H9.01697C9.56925 4 10.0169 4.44772 10.0169 5V15C10.0169 16.6569 8.67383 18 7.01697 18H5.01697L5.01697 21H2.01697Z"></path>
                          </svg>
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-[#D2A02A]">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.location}</p>
                          </div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">Frequently Asked Questions about 10 Lakhs Settlement</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl font-black">?</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-gray-200">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Conclusion and Call to Action */}
                <section className="bg-gradient-to-r from-[#1a202c] to-[#2d3748] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Your 10 Lakhs Debt Does Not Define Your Future</h2>
                        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Every financial storm eventually passes. Whether you choose settlement, restructuring, or consolidation, the most important step is to act now before the situation escalates. Our legal experts are standing by to offer you a free, confidential consultation. Let us handle the banks while you refocus on building your future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl w-full sm:w-auto uppercase tracking-tighter">
                                    Get Legal Help Now
                                </button>
                            </Link>
                            <a href="tel:+918700343611">
                                <button className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-black py-5 px-12 rounded-full transition-all text-xl w-full sm:w-auto uppercase tracking-tighter">
                                    Talk to a Lawyer: +91-8700343611
                                </button>
                            </a>
                        </div>
                        <p className="mt-12 text-sm opacity-60 font-medium italic">
                            *AMA Legal Solutions: India's Trusted Debt Settlement Partners. Over 10,000+ Cases Resolved.*
                        </p>
                    </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="hidden lg:block space-y-10 sticky top-24">
                {/* CTA Card */}
                <div className="bg-gradient-to-b from-[#1a202c] to-[#2D231E] p-8 rounded-2xl shadow-xl text-white">
                  <h3 className="text-2xl font-black mb-4 text-[#D2A02A] leading-tight uppercase tracking-tighter">Facing Harassment for 10 Lakhs?</h3>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Don't wait for the bank to take legal action. Stop the calls and visits today with a legal shield.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-black hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-wider mb-6">
                    Book Free Consult
                  </Link>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center">📞</div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Expert Helpline</p>
                        <p className="font-black text-sm">+91-8700343611</p>
                    </div>
                  </div>
                </div>

                {/* Related Pages Sidebar */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-6 border-b pb-4 uppercase tracking-tighter">Useful Resources</h3>
                  <ul className="space-y-4">
                    {relatedPages.map((page, idx) => (
                      <li key={idx}>
                        <Link 
                          href={page.href}
                          className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-all"
                        >
                          <span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                          <span className="text-sm font-bold">{page.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Review Snippet Visualization */}
                <div className="bg-[#fff9e6] p-6 rounded-2xl border border-[#ffe080]">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-[#D2A02A]">
                            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                        </div>
                        <span className="font-black text-gray-900 text-sm">4.9/5</span>
                    </div>
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                        "AMA Legal Solutions resolved my 10 lakh HDFC loan in 4 months. Saved me from total bankruptcy."
                    </p>
                    <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase tracking-widest">: Sandeep Verma, Delhi</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
