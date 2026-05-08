import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What are the latest RBI rules for bank loan settlement in India?",
    answer: "The Reserve Bank of India (RBI) mandates that every bank must have a Board-approved policy for the resolution of stressed assets, including loan settlements. While the RBI doesn't fix the settlement amount, it requires banks to follow a fair and transparent process. Recent guidelines emphasize that settlement should be a last resort after a loan becomes a Non-Performing Asset (NPA), typically after 90 days of non-payment. Banks are encouraged to offer One-Time Settlements (OTS) to recover dues without prolonged litigation."
  },
  {
    question: "Does a 90-day default automatically make me eligible for settlement?",
    answer: "A 90-day default is the threshold where a loan is classified as an NPA. While this is often the stage where banks begin considering settlement options, eligibility isn't automatic. Banks evaluate the borrower's genuine financial hardship, the value of collateral (if any), and the probability of recovery through legal means. If the bank believes you have the capacity to pay but are choosing not to, they may reject a settlement request in favor of legal recovery."
  },
  {
    question: "What is the difference between 'Settled' and 'Closed' status in CIBIL?",
    answer: "A 'Closed' status means the borrower has paid the entire principal and interest amount as per the original agreement, which is positive for your credit score. A 'Settled' status indicates that the bank accepted a lower amount than what was owed to close the account. This status remains on your credit report for up to seven years and can negatively impact your ability to get unsecured loans in the future. However, it is better than a 'Written Off' or 'Defaulted' status."
  },
  {
    question: "Can I settle a secured loan like a home loan?",
    answer: "Settling a secured loan is more challenging because the bank holds collateral. However, it is possible under specific rules if the property value has significantly dropped, if there are legal complications with the asset, or if the borrower's financial situation is dire. Banks might prefer a settlement over a long and expensive auction process under the SARFAESI Act. Expert legal negotiation is highly recommended for secured loan settlements."
  },
  {
    question: "How much waiver can I expect in a personal loan settlement?",
    answer: "In personal loan settlements, which are unsecured, waivers can range from 30% to 70% of the total outstanding amount, including interest and penalties. The exact percentage depends on the age of the debt, the bank's specific internal policies, and the strength of your negotiation. Professional legal firms often achieve better waivers by presenting a strong case of financial hardship and legal leverage."
  },
  {
    question: "Is it true that a settlement stays on my credit report for 7 years?",
    answer: "Yes, the 'Settled' status typically remains on your credit report for about seven years. While this sounds daunting, the negative impact on your score decreases over time if you maintain good financial habits elsewhere. By using secured credit cards and paying all other bills on time, you can often become eligible for fresh credit within 24 to 36 months after a settlement."
  },
  {
    question: "Can a bank reject my one-time settlement (OTS) request?",
    answer: "Yes, banks have the discretion to reject an OTS request. Common reasons for rejection include the bank's belief that you have hidden assets, previous history of willful default, or if the offered amount is significantly lower than their internal recovery targets. If rejected, it is important to re-evaluate your offer and perhaps engage a legal expert to re-negotiate based on the bank's feedback."
  },
  {
    question: "Do I really need a lawyer for a loan settlement?",
    answer: "While you can technically approach the bank yourself, having a lawyer ensures that your rights are protected. Lawyers understand the legal framework (like the SARFAESI Act and RBI guidelines) and can prevent recovery agent harassment. They also ensure that the settlement letter is legally binding and contains all necessary clauses to protect you from future claims by the bank or its collection agencies."
  },
  {
    question: "What happens if I fail to pay the agreed settlement installments?",
    answer: "If you default on a settlement agreement, the agreement usually becomes null and void. The bank will typically revert to the original outstanding balance, adding back all the waived interest and penalties. They may also resume legal proceedings or recovery actions. It is crucial to only agree to a settlement amount and payment schedule that you are 100% confident you can fulfill."
  },
  {
    question: "Are there tax implications on the waived loan amount in India?",
    answer: "Under the Income Tax Act, the amount waived by a lender in a settlement can sometimes be treated as 'perquisite' or 'income' in the hands of the borrower, especially for business loans. However, for personal loans, the rules can be complex and often depend on whether the loan was used for personal or business purposes. It is advisable to consult a tax professional or your legal counsel to understand your specific tax liability after a settlement."
  }
];

// Review Schema
const reviews = [
  {
    name: "Amit Varma",
    body: "AMA Legal Solutions helped me navigate the complex rules of loan settlement when I was lost. They handled everything with the bank professionally.",
    rating: "5"
  },
  {
    name: "Sneha Kapoor",
    body: "Professional team. They secured a 60% waiver on my credit card dues. I am finally debt-free thanks to their expertise.",
    rating: "5"
  },
  {
    name: "Rajesh Iyer",
    body: "I was worried about my CIBIL, but the team explained the rules clearly and helped me settle my personal loan without any hassle.",
    rating: "5"
  },
  {
    name: "Megha Singh",
    body: "Best decision to hire AMA for my bank loan settlement. No more harassment from recovery agents. Truly a lifesaver.",
    rating: "5"
  },
  {
    name: "Vikram Rathore",
    body: "The legal expertise they bring to the table is unmatched. They know the RBI guidelines inside out and got me a great deal.",
    rating: "5"
  }
];

// Schema Definitions
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
      "name": "Bank Loan Settlement Rules",
      "item": "https://www.amalegalsolutions.com/bank-loan-settlement-rules"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Bank Loan Settlement Rules in India: A Comprehensive Legal Guide 2024-25",
  "description": "Understand the latest bank loan settlement rules in India. Learn about RBI guidelines, OTS schemes, and how to legally settle your debt while protecting your rights.",
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
  "name": "Bank Loan Settlement Advisory",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1500"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amit Varma" },
      "reviewBody": "AMA Legal Solutions helped me navigate the complex rules of loan settlement when I was lost. They handled everything with the bank professionally.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sneha Kapoor" },
      "reviewBody": "Professional team. They secured a 60% waiver on my credit card dues. I am finally debt-free thanks to their expertise.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rajesh Iyer" },
      "reviewBody": "I was worried about my CIBIL, but the team explained the rules clearly and helped me settle my personal loan without any hassle.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Megha Singh" },
      "reviewBody": "Best decision to hire AMA for my bank loan settlement. No more harassment from recovery agents. Truly a lifesaver.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vikram Rathore" },
      "reviewBody": "The legal expertise they bring to the table is unmatched. They know the RBI guidelines inside out and got me a great deal.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    }
  ]
};

export const metadata = {
  title: "Bank Loan Settlement Rules India 2024 | RBI Guidelines & OTS",
  description: "Complete guide to bank loan settlement rules in India. Learn about RBI guidelines, One-Time Settlement (OTS) schemes, and legal ways to settle personal, business, and credit card loans.",
  keywords: ["bank loan settlement rules", "loan settlement rules india", "rbi guidelines for loan settlement", "one time settlement scheme rules", "ots rules india", "personal loan settlement rules"],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/bank-loan-settlement-rules',
  },
};

export default function BankLoanSettlementRulesPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Bank Loan Settlement?" },
    { id: "rbi-guidelines", title: "RBI Guidelines for Settlement" },
    { id: "eligibility-rules", title: "Eligibility Rules" },
    { id: "psychology", title: "Psychology of Negotiation" },
    { id: "negotiation-secrets", title: "Negotiation Secrets" },
    { id: "ots-schemes", title: "One-Time Settlement (OTS) Schemes" },
    { id: "settlement-process", title: "Step-by-Step Process" },
    { id: "legal-rights", title: "Your Legal Rights" },
    { id: "credit-impact", title: "Impact on Credit Score" },
    { id: "common-pitfalls", title: "Common Pitfalls to Avoid" },
    { id: "why-legal-help", title: "Why Legal Guidance Matters" },
    { id: "faqs", title: "FAQs" },
    { id: "testimonials", title: "Reviews" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Bank Loan Settlement Rules", href: "/bank-loan-settlement-rules" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Mastering <span className="text-[#D2A02A]">Bank Loan Settlement Rules</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Your comprehensive guide to navigating RBI guidelines, One-Time Settlements, and legal strategies to resolve your debt effectively and ethically.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Settlement Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-8">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">The Complex World of Bank Loan Settlement Rules</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    In the current economic climate, debt is a reality for millions of Indians. While loans are designed to facilitate growth, unforeseen circumstances such as job losses, medical emergencies, or business downturns can turn a manageable debt into a crushing burden. When the cycle of interest and penalties becomes unbreakable, understanding the <strong>bank loan settlement rules</strong> becomes not just a matter of financial literacy, but a necessity for survival.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Many borrowers live in constant fear of recovery agents, legal notices, and social stigma. However, the Indian legal and banking framework provides structured pathways for debt resolution. Loan settlement is a legitimate process recognized by the Reserve Bank of India (RBI) that allows honest but distressed borrowers to exit their debt obligations with dignity. This guide is designed to provide you with the most up-to-date and comprehensive information on how these rules work and how you can leverage them to reclaim your financial freedom.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we have witnessed firsthand how knowledge of the right rules can change lives. Whether you are dealing with a personal loan, a credit card debt, or a large business loan, the principles of settlement remain largely consistent. Our goal is to demystify these rules and empower you with the legal perspective needed to negotiate with multi-billion dollar financial institutions on an even playing field.
                  </p>
                </section>

                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">What Exactly is Bank Loan Settlement?</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Bank loan settlement is a process where the lender agrees to accept a lump-sum payment that is lower than the total outstanding amount to close the loan account permanently. This is distinct from regular loan closure, where you pay the full principal plus all accrued interest. In a settlement, the bank essentially 'writes off' a portion of your debt.
                  </p>
                  <div className="bg-[#fff9e6] border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-6">
                    <h3 className="font-bold text-gray-900 mb-2">The Essential Definition</h3>
                    <p className="italic text-gray-800">
                      "A mutual agreement between a borrower in financial distress and a lender to terminate the loan contract for a mutually agreed reduced amount, usually after the loan has been classified as a Non-Performing Asset (NPA)."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    From the bank's perspective, they prefer to recover at least a portion of the money now rather than spending years in litigation with no guarantee of recovery. This business logic is the foundation of every settlement rule. However, banks do not offer settlements easily; they must be convinced of the borrower's genuine inability to pay.
                  </p>
                </section>

                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">RBI Guidelines for Loan Settlement 2024-25</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    The Reserve Bank of India (RBI) provides the broad framework within which all banks and NBFCs must operate. While the RBI does not micromanage individual settlements, its circulars on "Prudential Framework for Resolution of Stressed Assets" are the governing documents.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#D2A02A] mb-3 text-lg">Board-Approved Policies</h4>
                      <p className="text-gray-600 text-sm">RBI mandates that every bank must have a transparent, Board-approved policy for settlements. This prevents arbitrary decisions and ensures a level of consistency in how settlements are handled.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#D2A02A] mb-3 text-lg">NPA Classification</h4>
                      <p className="text-gray-600 text-sm">Rules typically require a loan to be classified as an NPA (Non-Performing Asset) before a settlement is considered. This usually happens after 90 days of continuous default.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#D2A02A] mb-3 text-lg">Compromise Settlements</h4>
                      <p className="text-gray-600 text-sm">The RBI allows 'compromise settlements' where the bank agrees to a haircut. This is legally recognized as a valid recovery tool to clean up balance sheets.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#D2A02A] mb-3 text-lg">Reporting Requirements</h4>
                      <p className="text-gray-600 text-sm">Banks are required to report all settled accounts to credit bureaus like CIBIL. This ensures transparency in the credit ecosystem but also highlights the impact on the borrower's credit history.</p>
                    </div>
                  </div>
                </section>

                <section id="eligibility-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Who is Eligible for Loan Settlement?</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Not every default leads to a settlement. Banks follow strict internal rules to determine eligibility. Understanding these can help you position your case effectively.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 mt-1 font-bold">●</span>
                      <div>
                        <strong>Genuine Financial Hardship:</strong> This is the most critical rule. You must prove that your inability to pay is due to factors beyond your control, such as job loss, medical catastrophe, or business failure.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 mt-1 font-bold">●</span>
                      <div>
                        <strong>Default Duration:</strong> Typically, banks won't even talk about settlement until the loan is at least 3-6 months overdue. The longer the default, the more likely the bank is to settle.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 mt-1 font-bold">●</span>
                      <div>
                        <strong>Unsecured vs. Secured:</strong> Unsecured loans (personal loans, credit cards) are easier to settle because the bank has no collateral. Secured loans require a much higher level of negotiation and proof of hardship.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 mt-1 font-bold">●</span>
                      <div>
                        <strong>No Willful Default:</strong> If the bank suspects you have the money but are choosing not to pay (willful default), they will not offer a settlement and may instead initiate criminal proceedings.
                      </div>
                    </li>
                  </ul>
                </section>

                <section id="psychology" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Psychology of Debt Negotiation</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Negotiating a loan settlement is as much about psychology as it is about numbers. When you approach a bank, you are not just dealing with a cold institution; you are dealing with individuals who have their own targets, pressures, and guidelines. Understanding this human element is the secret to a successful settlement.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Banks often use "fear-based" tactics to recover money. They know that most borrowers are honest people who are terrified of legal trouble. By sending stern notices and making aggressive calls, they hope to jump you to the top of your payment priority list. However, once you understand the <strong>bank loan settlement rules</strong>, the fear dissipates. You realize that the bank is actually in a weaker position than you are when a loan becomes an NPA. They want to avoid the cost of recovery as much as you want to avoid the debt.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The key is to remain calm and consistent. If you show desperation, the bank will offer a lower waiver. If you show that you are legally prepared and have other options (like restructuring or even a long-drawn legal battle), the bank becomes more willing to compromise. It's a delicate dance, and knowing when to push and when to pause is what separates a good settlement from a great one.
                  </p>
                </section>

                <section id="negotiation-secrets" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Negotiation Secrets from Legal Experts</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Over the years, we have developed a set of "insider secrets" that can significantly tip the scales in your favor. These aren't loopholes; they are strategic applications of existing <strong>loan settlement rules</strong>.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-t-4 border-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">1. The 'Quarter-End' Advantage</h4>
                      <p className="text-gray-600 text-sm">Banks are under immense pressure to show lower NPA numbers at the end of every financial quarter (June, September, December, and especially March). This is the time when they are most likely to offer deeper discounts and faster approvals. If you can time your final offer for the last week of March, you have a significantly higher chance of a massive waiver.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">2. The Principal vs. Interest Tactic</h4>
                      <p className="text-gray-600 text-sm">Always negotiate on the 'Total Outstanding' first, but keep your eye on the 'Principal'. Banks find it easier to waive 100% of the interest and penalties than to waive the principal. However, in cases of extreme hardship, they can and do waive a portion of the principal as well. Our goal is always to get you a settlement that is close to the original principal amount.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">3. The 'Lump-Sum' Power</h4>
                      <p className="text-gray-600 text-sm">Cash is king in the world of settlement. If you can offer to pay the entire settled amount in one go, the bank will give you a much better deal than if you ask for installments. Banks hate the risk of a settlement itself defaulting. Offering a single payment eliminates that risk for them, and they will reward you with a better waiver.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">4. Documentation is Your Shield</h4>
                      <p className="text-gray-600 text-sm">Don't just say you are in trouble; show it. A hospital bill, a job termination letter, or a business loss statement is worth more than a thousand words in a negotiation. We help our clients package these documents into a 'Hardship File' that makes it nearly impossible for the bank's credit committee to say no.</p>
                    </div>
                  </div>
                </section>

                <section id="ots-schemes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">One-Time Settlement (OTS) Schemes Explained</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Banks frequently launch special One-Time Settlement (OTS) schemes to recover long-pending dues. These schemes are often more standardized and can offer significant waivers compared to individual negotiations. Understanding the difference between a regular settlement and an OTS is crucial.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100 text-gray-900">
                          <th className="p-4 text-left border-b border-gray-200">Feature</th>
                          <th className="p-4 text-left border-b border-gray-200">Regular Settlement</th>
                          <th className="p-4 text-left border-b border-gray-200">OTS Scheme</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Initiation</td>
                          <td className="p-4">Usually initiated by the borrower.</td>
                          <td className="p-4">Launched by the bank for many borrowers.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Negotiation</td>
                          <td className="p-4">High degree of negotiation possible.</td>
                          <td className="p-4">Terms are often fixed or semi-fixed.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Timeline</td>
                          <td className="p-4">Can happen any time of the year.</td>
                          <td className="p-4">Valid for a specific limited period.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Approval</td>
                          <td className="p-4">Requires case-by-case approval.</td>
                          <td className="p-4">Faster approval if you fit the criteria.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Step-by-Step Loan Settlement Process</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Step 1: Preparation of Hardship Evidence</h4>
                        <p className="text-gray-700">Before approaching the bank, you must compile documents that prove your financial distress. This includes medical reports, termination letters, bank statements showing a lack of funds, and legal notices received. Without this, your request is unlikely to be taken seriously.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Step 2: Formal Request Submission</h4>
                        <p className="text-gray-700">Submit a formal written request to the bank's branch manager or the recovery department. This letter should clearly state your intention to settle and explain your hardship in detail. It's often beneficial to have this letter drafted by a legal expert to ensure it hits the right notes.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Step 3: The Negotiation Phase</h4>
                        <p className="text-gray-700">The bank will likely come back with an offer that is higher than what you can afford. This is where the real work begins. Multiple rounds of meetings and letters may be required to reach a figure that is manageable for you and acceptable to the bank's credit committee.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">4</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Step 4: Obtaining the Settlement Letter</h4>
                        <p className="text-gray-700">Crucial Rule: NEVER pay a single rupee until you have a formal settlement letter on the bank's letterhead. This letter must state the total amount, the payment deadline, and confirm that the account will be closed as 'Settled' upon payment.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">5</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Step 5: Payment and NOC</h4>
                        <p className="text-gray-700">Make the payment as per the letter (usually via DD or bank transfer for a paper trail). Once the payment is cleared, follow up aggressively for the 'No Dues Certificate' (NOC). This is your ultimate protection against any future claims by the bank.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Your Legal Rights as a Borrower</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    A default doesn't mean you lose your fundamental rights. The Indian legal system provides several protections to borrowers during the debt recovery and settlement process.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-900 mb-2">Protection from Harassment</h5>
                      <p className="text-sm text-gray-600">RBI guidelines strictly prohibit recovery agents from using abusive language, physical threats, or contacting you at odd hours. Harassment is a criminal offense.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-900 mb-2">Right to Notice</h5>
                      <p className="text-sm text-gray-600">Banks cannot seize assets or initiate legal proceedings without giving you proper written notice (e.g., Section 13(2) notice under the SARFAESI Act).</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-900 mb-2">Right to Representation</h5>
                      <p className="text-sm text-gray-600">You have the right to appoint a legal counsel to represent you. Once notified, the bank must direct its communications through your lawyer.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-900 mb-2">Right to Dispute</h5>
                      <p className="text-sm text-gray-600">You have the right to challenge incorrect interest calculations, hidden charges, or the classification of your loan as an NPA in appropriate forums like the DRT.</p>
                    </div>
                  </div>
                </section>

                <section id="credit-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Hard Truth: Impact on Your Credit Score</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    We believe in full transparency. The most significant downside of bank loan settlement rules is the impact on your credit history. When a loan is settled, it is not marked as "Paid in Full" or "Closed." Instead, it carries the status of "Settled."
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    This status signals to future lenders that you were unable to fulfill your original promise. It typically leads to a 75-100 point drop in your credit score. Most banks will be hesitant to give you an unsecured loan for at least 2-3 years after a settlement. However, this is not a life sentence.
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Steps to Rebuild Your Credit Post-Settlement:</h4>
                  <ul className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li><strong>Wait for the NOC:</strong> Ensure the bank has updated the status with credit bureaus correctly.</li>
                    <li><strong>Get a Secured Card:</strong> Apply for a credit card against a Fixed Deposit (FD). Use it for small purchases and pay the bill in full every month.</li>
                    <li><strong>Utility Bills:</strong> Pay all your utility and phone bills on time. Some bureaus are starting to factor these into scores.</li>
                    <li><strong>Avoid New Inquiries:</strong> Do not apply for multiple loans immediately after a settlement, as hard inquiries will further lower your score.</li>
                    <li><strong>Time is the Healer:</strong> As the settlement gets older, its impact on your score diminishes. Typically, in 24 months, you can see a significant recovery.</li>
                  </ul>
                </section>

                <section id="common-pitfalls" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Common Pitfalls to Avoid in Loan Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    The settlement process is full of traps for the unwary. Avoiding these common mistakes can save you from further financial ruin.
                  </p>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 font-bold">✘</span>
                        <p className="text-gray-800"><strong>Paying Without a Letter:</strong> Never trust a verbal promise from a bank officer or recovery agent. Always insist on a formal settlement letter first.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 font-bold">✘</span>
                        <p className="text-gray-800"><strong>Trusting Third-Party Agents:</strong> Be wary of "settlement agencies" that ask for fees upfront without providing legal representation. Only deal with qualified legal firms.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 font-bold">✘</span>
                        <p className="text-gray-800"><strong>Ignoring Legal Notices:</strong> If you receive a court summons or a Section 138 notice, ignoring it will only lead to an arrest warrant. Always respond legally.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 font-bold">✘</span>
                        <p className="text-gray-800"><strong>Over-Promising:</strong> Don't agree to a settlement amount that you can't pay. Defaulting on a settlement is worse than defaulting on the original loan.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="why-legal-help" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Why Professional Legal Guidance is Essential</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Negotiating with a bank is like a game of chess where the bank has all the high-value pieces. A <strong>loan settlement lawyer</strong> acts as your grandmaster, helping you navigate the rules and protect your king (your financial future).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Legal firms like AMA Legal Solutions provide a buffer between you and the bank. We stop the harassment, evaluate the legality of the bank's charges, and use our experience to secure the best possible waiver. We ensure that every document you sign is in your best interest and that you receive a clean exit from your debt.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 items-center bg-[#1a202c] p-8 rounded-2xl text-white">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4">Ready to take the first step?</h3>
                      <p className="opacity-80 mb-6">Don't let the complex rules of loan settlement overwhelm you. Get a free evaluation from our legal experts today.</p>
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b88a22] transition-all">Get Free Case Review</button>
                      </Link>
                    </div>
                    <div className="hidden md:block w-48 h-48 relative opacity-20">
                      <Image src="/ama-legal-solutions-logo.png" alt="AMA Logo" fill className="object-contain" />
                    </div>
                  </div>
                </section>

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

                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex text-yellow-400 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4 text-sm">"{review.body}"</p>
                        <p className="font-bold text-gray-900 text-sm">- {review.name}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Additional Help Section */}
                <section className="bg-blue-50 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Helpful Resources</h2>
                    <p className="text-blue-800 mb-6">Explore more about your rights and debt resolution strategies:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="/personal-loan-settlement" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> Personal Loan Settlement Guide
                        </Link>
                        <Link href="/credit-card-settlement" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> Credit Card Settlement Process
                        </Link>
                        <Link href="/business-loan-settlement" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> Business Loan Debt Resolution
                        </Link>
                        <Link href="/legal-notice-for-loan-settlement-harassment" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> Dealing with Recovery Agent Harassment
                        </Link>
                        <Link href="/what-is-ots" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> What is One-Time Settlement (OTS)?
                        </Link>
                        <Link href="/is-loan-settlement-illegal-in-india-truth" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                            <span>→</span> Is Loan Settlement Legal? (The Truth)
                        </Link>
                    </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Contact Form Placeholder or Quick Info */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Case Evaluation</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Struggling with bank loans? Let our experts review your case for free and suggest the best legal path.
                </p>
                <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-bold hover:bg-[#b88a22] transition-colors">
                  Contact Us Now
                </Link>
              </div>
              
              <div className="bg-[#1a202c] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Call Our Helpline</h3>
                <p className="text-gray-400 text-sm mb-6">Available 10 AM - 7 PM</p>
                <a href="tel:+918700343611" className="text-2xl font-bold text-[#D2A02A] block mb-2">+91 8700343611</a>
                <p className="text-xs text-gray-500">Professional Legal Support for Debt Relief</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
