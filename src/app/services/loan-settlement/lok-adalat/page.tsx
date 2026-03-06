import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import Image from "next/image";

export const metadata = {
  title: "Loan Settlement in Lok Adalat | Legal Process & Benefits",
  description:
    "Complete guide to Loan Settlement in Lok Adalat. Learn the process, benefits, eligibility, and how to legally settle your debt with no court fees and binding results.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat',
  },
  openGraph: {
    title: "Loan Settlement in Lok Adalat | Legal Process & Benefits",
    description: "Complete guide to Loan Settlement in Lok Adalat. Learn the process, benefits, eligibility, and how to legally settle your debt with no court fees and binding results.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement in Lok Adalat",
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
      "name": "Lok Adalat",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement in Lok Adalat: A Comprehensive Legal Guide",
  "description": "In-depth guide on how to settle loans through Lok Adalat in India. Covers process, eligibility, benefits, and legal framework.",
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
  "datePublished": "2023-12-02",
  "dateModified": "2023-12-02"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lok Adalat Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Legal assistance for settling loans through Lok Adalat.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
        "name": "Vikram Singh"
      },
      "reviewBody": "The Lok Adalat process was explained to me very clearly by AMA Legal Solutions. They helped me settle my 3-year-old personal loan dispute in a single day. Highly professional."
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
      "reviewBody": "I was worried about court cases, but the team guided me to the Lok Adalat route. It was fast, dignified, and I got a good waiver on the interest. Thank you!"
    }
  ]
};

export default function LokAdalatLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-lok-adalat", title: "What is Lok Adalat?" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "why-choose-lok-adalat", title: "Benefits of Lok Adalat" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "process", title: "Step-by-Step Process" },
    { id: "role-of-lawyers", title: "Role of Lawyers" },
    { id: "settlement-vs-litigation", title: "Settlement vs. Litigation" },
    { id: "credit-score", title: "Impact on Credit Score" },
    { id: "documents", title: "Required Documents" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Lok Adalat", href: "/services/loan-settlement/lok-adalat" },
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
              Legal Debt Resolution via <span className="text-[#D2A02A]">Lok Adalat</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              A fast, cost-effective, and legally binding way to settle your loan disputes. Stop harassment and clear your debts with dignity through the People's Court.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Start Your Settlement Journey
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction to Loan Settlement in Lok Adalat</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the complex landscape of financial liabilities and debt recovery in India, the burden of unpaid loans can weigh heavily on both borrowers and financial institutions. For a borrower, the stress of mounting interest, aggressive recovery agents, and the looming threat of legal action can be overwhelming. For banks, Non-Performing Assets (NPAs) represent locked capital and a drain on resources. In this scenario, the <strong>Lok Adalat</strong> system emerges as a beacon of hope and a pragmatic solution for dispute resolution.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Lok Adalat, which literally translates to "People's Court," is an innovative contribution of the Indian legal system to world jurisprudence. It is an Alternative Dispute Resolution (ADR) mechanism where disputes pending in courts or at the pre-litigation stage are settled amicably. It is not just about clearing a debt; it is about finding a middle ground where the dignity of the borrower is preserved, and the rights of the lender are respected.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in guiding our clients through the Lok Adalat process. We understand that every debt story is unique, often stemming from genuine financial hardship rather than willful default. Whether it is a personal loan, a credit card debt, or a small business loan, utilizing the Lok Adalat platform can provide a swift, final, and legally secure closure to your financial troubles.
                  </p>
                </section>

                {/* What is Lok Adalat */}
                <section id="what-is-lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Lok Adalat?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Lok Adalat is a forum where disputes/cases pending in the court of law or at pre-litigation stage are settled/compromised amicably." - National Legal Services Authority (NALSA)
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The concept of Lok Adalat is deeply rooted in Indian tradition, but its modern statutory status makes it a powerful tool for justice. Unlike a regular court where a judge adjudicates based on strict evidence and legal technicalities, a Lok Adalat is presided over by a panel (usually a sitting or retired judicial officer, a lawyer, and a social worker) who act as conciliators. Their role is not to judge who is right or wrong, but to facilitate a dialogue and help the parties arrive at a mutually acceptable settlement.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For loan settlements, this is particularly advantageous. Regular courts are adversarial – one side wins, the other loses. Lok Adalat is collaborative – both sides win. The bank recovers a portion of its dues without further legal expense, and the borrower gets a waiver on interest/penalties and a clean slate.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of Lok Adalats</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>National Lok Adalat:</strong> Held quarterly across the country on a single day. These handle a massive volume of cases and are ideal for settling bank recovery matters.
                    </li>
                    <li>
                      <strong>Permanent Lok Adalat:</strong> Established for public utility services (like transport, postal, etc.) but can also play a role in certain financial disputes up to a specific value.
                    </li>
                    <li>
                      <strong>Mobile Lok Adalat:</strong> Courts that travel to different locations to bring justice to the people's doorstep, often used in rural areas for agricultural loan settlements.
                    </li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legitimacy and power of Lok Adalats are derived from the <strong>Legal Services Authorities Act, 1987</strong>. This Act gives statutory status to Lok Adalats and outlines their jurisdiction and powers.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Section 21: Finality of Award</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Perhaps the most critical provision for a borrower is Section 21 of the Act. It states that every award of the Lok Adalat shall be deemed to be a decree of a Civil Court. Furthermore, this award is <strong>final and binding</strong> on all the parties to the dispute, and <strong>no appeal shall lie to any court against the award</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This provision provides immense security. Once you settle a loan in Lok Adalat and the award is passed, the bank cannot turn around six months later and claim that the calculation was wrong or demand more interest. The matter is legally closed forever.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund of Court Fees</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under the Court Fees Act, if a pending case is settled in Lok Adalat, the plaintiff (the bank) is entitled to a refund of the court fees paid. This acts as a financial incentive for banks to agree to settlements in this forum, often making them more flexible with their terms.
                  </p>
                </section>

                {/* Benefits */}
                <section id="why-choose-lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of Settling in Lok Adalat</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the Lok Adalat route for loan settlement offers distinct advantages over traditional litigation or out-of-court settlements that lack legal backing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Speed of Resolution</h3>
                      <p className="text-gray-700">
                        Civil suits can drag on for years. A Lok Adalat settlement can often be concluded in a single day. Once the terms are agreed upon, the award is drafted and signed immediately.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Cost-Effective</h3>
                      <p className="text-gray-700">
                        There are no court fees to be paid by the borrower. Since the process is quick, legal expenses are also significantly lower compared to a full-blown trial.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Amicable Atmosphere</h3>
                      <p className="text-gray-700">
                        The environment is informal and non-intimidating. The focus is on finding a solution, not on proving guilt. This reduces the mental stress associated with court appearances.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Legal Enforceability</h3>
                      <p className="text-gray-700">
                        Unlike a private settlement letter which a bank might renege on, a Lok Adalat award is a court order. It gives you ironclad legal protection against future claims on the same debt.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria for Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Not every legal dispute can be brought before a Lok Adalat. For loan settlements, specific criteria usually apply:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Nature of Dispute:</strong> The case must be civil in nature. Criminal cases that are non-compoundable cannot be settled here. However, Section 138 (Cheque Bounce) cases, which are quasi-criminal but compoundable, are frequently settled in Lok Adalats.
                    </li>
                    <li>
                      <strong>Stage of Dispute:</strong>
                      <ul className="list-circle pl-6 mt-2 space-y-2">
                        <li><em>Pre-Litigation:</em> Even if the bank hasn't filed a case yet, you can approach the District Legal Services Authority (DLSA) for pre-litigation counseling and settlement.</li>
                        <li><em>Pending Litigation:</em> If a case is already running in a Civil Court or DRT, it can be referred to Lok Adalat.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Monetary Limit:</strong> Generally, Lok Adalats handle cases up to ₹20 Lakhs. However, this is not a hard cap for all types. DRT-organized Lok Adalats can handle higher value cases (₹10 Lakhs and above). The key is the willingness of the bank to settle.
                    </li>
                    <li>
                      <strong>Consent:</strong> Both parties must agree to participate. You cannot force a bank to settle in Lok Adalat if they wish to pursue the matter in court, and vice versa.
                    </li>
                  </ul>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process of Settlement</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the workflow can help you prepare better. Here is how we at AMA Legal Solutions navigate the process for you:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Evaluation & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your loan documents, outstanding amount, and financial capability. We determine if your case is suitable for Lok Adalat and what a realistic settlement amount would be.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Application / Referral</h3>
                        <p className="text-gray-700 leading-relaxed">
                          If a case is pending, we move an application to refer it to Lok Adalat. If it's pre-litigation, we approach the DLSA. We also open channels of communication with the bank's legal team to express intent to settle.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This is the most crucial phase. On the designated date, we appear before the Lok Adalat panel. The conciliators assist in bridging the gap between your offer and the bank's demand. We argue for waivers based on your genuine hardship.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Award & Payment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once a figure is agreed upon, the terms are recorded. An award is passed. You are given a timeline (usually 30-45 days) to pay the settlement amount.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Upon payment, the bank issues a No Dues Certificate. The court case is formally withdrawn/disposed of. We ensure you receive all necessary closure documents.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Role of Lawyers */}
                <section id="role-of-lawyers" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Need a Lawyer in Lok Adalat</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A common misconception is that since Lok Adalat is informal, you don't need a lawyer. While you <em>can</em> represent yourself, it is often disadvantageous when dealing with banks.
                  </p>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                        <span><strong>Level Playing Field:</strong> Banks will always have their legal officers present. Without your own counsel, you may be out-negotiated or pressured into agreeing to terms you can't fulfill.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                        <span><strong>Understanding Legal Jargon:</strong> The settlement agreement (compromise deed) contains legal terms. A lawyer ensures there are no hidden clauses that could hurt you later.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                        <span><strong>Maximizing Waivers:</strong> We know the regulatory limits and the bank's internal policies. We can push for the maximum possible waiver on interest and penalties, which a layman might not be aware of.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3 text-xl">✓</span>
                        <span><strong>Ensuring Finality:</strong> We ensure the award is drafted correctly to cover all aspects of the loan, preventing the bank from claiming "residual dues" later.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Settlement vs Litigation */}
                <section id="settlement-vs-litigation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Settlement vs. Litigation: A Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Feature</th>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Litigation (Regular Court)</th>
                          <th className="p-4 bg-[#D2A02A] text-white font-bold border-b border-[#b88a22]">Lok Adalat Settlement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border-b border-gray-200 font-semibold">Time Taken</td>
                          <td className="p-4 border-b border-gray-200">Years (3-5+ years)</td>
                          <td className="p-4 border-b border-gray-200 bg-yellow-50">Days or Weeks</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-200 font-semibold">Cost</td>
                          <td className="p-4 border-b border-gray-200">High (Court fees, lawyer fees per hearing)</td>
                          <td className="p-4 border-b border-gray-200 bg-yellow-50">Low (No court fees, one-time legal fee)</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-200 font-semibold">Outcome</td>
                          <td className="p-4 border-b border-gray-200">Win/Lose (Uncertain)</td>
                          <td className="p-4 border-b border-gray-200 bg-yellow-50">Win-Win (Mutually Agreed)</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-200 font-semibold">Appeal</td>
                          <td className="p-4 border-b border-gray-200">Possible (Can drag on in higher courts)</td>
                          <td className="p-4 border-b border-gray-200 bg-yellow-50">None (Final & Binding)</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b border-gray-200 font-semibold">Stress</td>
                          <td className="p-4 border-b border-gray-200">High (Adversarial process)</td>
                          <td className="p-4 border-b border-gray-200 bg-yellow-50">Low (Conciliatory process)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score (CIBIL)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is important to be transparent about the impact of settlement on your credit health. When you settle a loan for less than the full amount, the bank reports the status as <strong>"Settled"</strong> to credit bureaus like CIBIL, Equifax, etc.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A "Settled" status is viewed negatively by future lenders because it indicates a past inability to repay the full debt. It will lower your credit score. However, it is far better than the alternatives:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>"Written Off":</strong> Indicates the bank has given up on recovery. Very damaging.</li>
                    <li><strong>"Suit Filed" / "Wilful Default":</strong> The worst possible statuses, effectively barring you from future credit.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>The Path to Recovery:</strong> A settlement stops the downward spiral. Once the account is closed, you can start rebuilding your score. We advise our clients to take a secured credit card (against a fixed deposit) immediately after settlement. Regular usage and payment of this card can help improve your score significantly within 12-24 months.
                    </p>
                  </div>
                </section>

                {/* Documents */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents Checklist</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To ensure a smooth process in the Lok Adalat, you should have the following documents organized and ready:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity & Loan Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Original Loan Agreement (if available)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Latest Statement of Account</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Copies of all Legal Notices received</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Evidence</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Salary Slips showing reduction/loss</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (last 6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical records (if applicable)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of other liabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Real Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a personal loan of ₹8 Lakhs that ballooned to ₹14 Lakhs due to interest. I lost my job during the pandemic. AMA Legal Solutions represented me in the National Lok Adalat. They negotiated a settlement of ₹4.5 Lakhs. It was a huge relief."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My credit card dues were causing me sleepless nights. The bank was threatening legal action. The team at AMA guided me to the Lok Adalat. The process was dignified, and I settled for 35% of the claimed amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Mehta</p>
                          <p className="text-sm text-gray-500">Mumbai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Settle Your Debt?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Take the first step towards financial freedom. Our experts are ready to represent you in the next Lok Adalat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      100% Confidential • Expert Legal Guidance
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Don't face the bank alone. Get expert representation for your settlement.
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
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce (138 NI)
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Debt Recovery Tribunal
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
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
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Karnataka": "karnataka",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
