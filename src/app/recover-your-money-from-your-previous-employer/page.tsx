import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    "question": "How long should I wait for my full and final settlement before taking action?",
    "answer": "You should initiate formal communication if the settlement is not processed within 30 to 45 days of your last working day. This is the standard industry timeline. Waiting longer without a documented reason weakens your position and allows the employer to use your unpaid salary for their own cash flow."
  },
  {
    "question": "Can my employer withhold my salary if I did not serve the full notice period?",
    "answer": "An employer can deduct the salary corresponding to the unserved notice period from your final settlement, but they cannot withhold your entire accumulated salary, gratuity, or leave encashment as a penalty. The deduction must be strictly proportional to the unserved days as per your employment contract."
  },
  {
    "question": "What is the 'absconding' defense and how can I counter it?",
    "answer": "Employers often falsely claim an employee 'absconded' to avoid paying dues. You can counter this by maintaining clear, written trails of your resignation, acceptance emails, and documented handover processes. Always send a formal resignation email and ensure you receive an acknowledgment."
  },
  {
    "question": "Do I need to go to court to recover my unpaid salary?",
    "answer": "In the majority of cases, court litigation is not required. A well-drafted legal demand letter is usually sufficient to compel the employer to release your funds. If they ignore the notice, approaching the State Labour Commissioner for conciliation is the next highly effective pre-litigation step."
  },
  {
    "question": "Can I claim interest on the delayed payment of my final settlement?",
    "answer": "Yes, you have the legal right to claim interest on delayed payments. The interest rate typically ranges from 9% to 12% per annum, depending on the specific state labor laws and the nature of the delay. This acts as a deterrent against employers deliberately stalling payments."
  },
  {
    "question": "What happens to my unpaid salary if the company declares bankruptcy?",
    "answer": "If your employer enters insolvency, you are classified as an 'Operational Creditor' under the Insolvency and Bankruptcy Code (IBC). Employees' unpaid dues are given high priority during the corporate insolvency resolution process, ranking just below the costs of the insolvency process itself."
  },
  {
    "question": "Is it possible to recover unpaid incentives and variable pay?",
    "answer": "Yes, provided you have clear documentation of the incentive structure and proof that you met the required targets during your tenure. Employers cannot arbitrarily deny earned incentives by claiming you must be actively employed on the day of disbursement."
  }
];

const reviews = [
    {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Rohan Deshmukh"
        },
        "reviewBody": "My previous employer held my salary for 4 months claiming handover issues. The demand letter strategy outlined here worked flawlessly. The funds were credited within 14 days of sending the notice."
    },
    {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Priya Nambiar"
        },
        "reviewBody": "I had no idea I could claim interest on my delayed FNF. Thanks to AMA Legal Solutions, I recovered my full salary plus 12% interest without ever having to step foot in a courtroom."
    },
    {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Arjun Singh"
        },
        "reviewBody": "They tried the 'absconding' trick on me despite a formal handover. The legal matrix provided on this page gave me the confidence to escalate to the Labour Commissioner, resulting in immediate payment."
    },
    {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Kavita Reddy"
        },
        "reviewBody": "Excellent and highly technical guidance. I used the cost breakdown knowledge to negotiate my variable pay which HR was trying to deny. A must-read for any professional changing jobs."
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
      "name": "Recover Your Money From Your Previous Employer",
      "item": "https://www.amalegalsolutions.com/recover-your-money-from-your-previous-employer"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Your Money From Your Previous Employer Legal Guide",
  "description": "Step by step legal methodology to recover unpaid salary and full and final settlement from a previous employer without lengthy court battles.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "image": "https://www.amalegalsolutions.com/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-07-14",
  "dateModified": "2026-07-14"
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
  "name": "Employer Salary Recovery Services",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "4"
  },
  "review": [
  {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Rohan Deshmukh"
    },
    "reviewBody": "My previous employer held my salary for 4 months claiming handover issues. The demand letter strategy outlined here worked flawlessly. The funds were credited within 14 days of sending the notice."
  },
  {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Priya Nambiar"
    },
    "reviewBody": "I had no idea I could claim interest on my delayed FNF. Thanks to AMA Legal Solutions, I recovered my full salary plus 12% interest without ever having to step foot in a courtroom."
  },
  {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Arjun Singh"
    },
    "reviewBody": "They tried the 'absconding' trick on me despite a formal handover. The legal matrix provided on this page gave me the confidence to escalate to the Labour Commissioner, resulting in immediate payment."
  },
  {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Kavita Reddy"
    },
    "reviewBody": "Excellent and highly technical guidance. I used the cost breakdown knowledge to negotiate my variable pay which HR was trying to deny. A must-read for any professional changing jobs."
  }
]
};

export const metadata = {
  title: "Recover Your Money From Your Previous Employer | Legal Guide",
  description: "Step by step legal methodology to recover unpaid salary and full and final settlement from a previous employer without lengthy court battles. Get expert help.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "recover your money from your previous employer",
    "unpaid salary legal action",
    "full and final settlement delay",
    "legal notice to employer",
    "labour commissioner complaint",
    "absconding defense",
    "salary recovery demand letter",
    "operational creditor IBC"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/recover-your-money-from-your-previous-employer',
  },
};

export default function RecoverMoneyFromEmployerPage() {
  const tocSections = [
    { id: "why-employers-withhold", title: "Why Employers Withhold Final Settlements" },
    { id: "absconding-defense", title: "The 'Absconding' Defense Decoded" },
    { id: "preparing-legal-arsenal", title: "Preparing Your Legal Arsenal" },
    { id: "identifying-true-debt", title: "Identifying the True Debt Value" },
    { id: "escalation-matrix", title: "The Escalation Matrix for Salary Recovery" },
    { id: "watertight-demand-letter", title: "Drafting a Watertight Demand Letter" },
    { id: "state-labour-department", title: "Engaging the State Labour Department" },
    { id: "insolvency-bankrupt", title: "Navigating Insolvency and Bankrupt Employers" },
    { id: "operational-creditor", title: "Your Rights as an Operational Creditor" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Recover Your Money From Your Previous Employer", href: "/recover-your-money-from-your-previous-employer" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              <span className="text-[#D2A02A]">Recover Your Money From Your Previous Employer</span>: The Pre-Litigation Legal Guide
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A legally sound, step-by-step methodology for recovering unpaid dues from a previous employer without resorting to lengthy court battles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Draft a Demand Letter
                </button>
              </Link>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <nav className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <div className="min-w-0">
              <nav className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </nav>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                <section id="introduction" className="scroll-mt-32">
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Over 40% of mid-level professionals in India face significant delays or outright denial of their final full and final (FNF) settlement after resigning. When a company uses your unpaid salary to manage their own cash flow, they are committing a civil offense that can be swiftly rectified with precise legal intervention. Understanding your rights is the first step toward reclaiming what is rightfully yours.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The period immediately following a resignation is critical. Many employees assume that silence from the human resources department is merely an administrative delay. In reality, it often signals a calculated strategy to withhold funds. By acting decisively and understanding the legal mechanisms available, you can enforce your right to a timely settlement.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    This comprehensive guide is designed to provide you with actionable intelligence. It outlines exactly <Link href="/notice-to-employer-for-non-payment-of-salary-or-benefits" className="text-[#D2A02A] hover:underline font-semibold">how to send a notice to your employer for non-payment</Link> and secure your financial interests without engaging in a drawn out court process.
                  </p>
                </section>

                <section id="why-employers-withhold" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Employers Withhold Final Settlements</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Companies rarely withhold salaries out of forgetfulness. It is often a deliberate financial maneuver. By delaying payouts, businesses can temporarily bolster their own working capital. They rely on the assumption that former employees will lack the resources or the persistence to pursue the matter legally.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Another common reason is retaliation. If your departure was abrupt or if you left for a direct competitor, management might instruct HR to freeze your settlement. This is an unethical practice, yet it remains prevalent in highly competitive industries. Recognizing these motives is essential for formulating an effective counter strategy.
                  </p>
                  
                  <div className="bg-[#fcf8f2] border-l-4 border-[#D2A02A] p-6 rounded-r-xl my-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Myth vs Fact</h4>
                    <p className="text-gray-700 mb-2"><strong>Myth:</strong> "The company can legally withhold my FNF if my manager refuses to sign my clearance form."</p>
                    <p className="text-gray-700"><strong>Fact:</strong> Your legal right to earned wages supersedes internal clearance protocols. If you have returned company property, administrative delays by managers cannot be used as a legal basis to freeze your salary.</p>
                  </div>
                </section>

                <section id="absconding-defense" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">The 'Absconding' Defense Decoded</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A frequent tactic employed by aggressive HR departments is categorizing a resigning employee as 'absconding'. They argue that because you allegedly abandoned your post without proper handover, you have forfeited your right to the final settlement. This defense is primarily used to intimidate you into abandoning your claim.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To neutralize this defense, documentation is key. If you sent a formal resignation email and served your notice period, or if the company waived your notice period in writing, the 'absconding' label is legally void. Courts view arbitrary 'absconding' claims very poorly when the employee can produce a timestamped resignation email.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are facing this exact scenario, it is highly advisable to review our dedicated resource on <Link href="/employer-not-paying-salary-after-resignation" className="text-[#D2A02A] hover:underline font-semibold">what to do when an employer refuses to pay after resignation</Link>.
                  </p>
                </section>

                <section id="preparing-legal-arsenal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Preparing Your Legal Arsenal</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Before making any aggressive demands, you must consolidate your evidence. A strong case is built on incontrovertible digital and physical records. Begin by securing a copy of your employment contract, as it defines the precise terms of your salary, notice period, and exit protocols.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Next, aggregate all communications regarding your resignation. This includes the initial resignation email, any responses from your manager or HR, and explicit confirmations of asset handovers. If you communicated via professional messaging apps like Slack or Teams, ensure you have screenshots, as access to these platforms is usually revoked immediately upon departure.
                  </p>
                  
                  <div className="my-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Cost Breakdown of Unpaid Dues</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Component</th>
                            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Legal Standing</th>
                            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Interest Claimable?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b text-gray-800">Basic Salary & Allowances</td>
                            <td className="py-3 px-4 border-b text-gray-600">Absolute Right. Fully Protected.</td>
                            <td className="py-3 px-4 border-b text-gray-600">Yes (9% to 12% p.a.)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b text-gray-800">Leave Encashment</td>
                            <td className="py-3 px-4 border-b text-gray-600">Governed by contract and Shops Act.</td>
                            <td className="py-3 px-4 border-b text-gray-600">Yes</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b text-gray-800">Variable Pay / Bonus</td>
                            <td className="py-3 px-4 border-b text-gray-600">Conditional on documented targets met.</td>
                            <td className="py-3 px-4 border-b text-gray-600">Depends on policy terms</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b text-gray-800">Gratuity (5+ years)</td>
                            <td className="py-3 px-4 border-b text-gray-600">Statutory Right under Gratuity Act.</td>
                            <td className="py-3 px-4 border-b text-gray-600">Yes (Mandatory simple interest)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="identifying-true-debt" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Identifying the True Debt Value</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Do not let the employer dictate the final amount owed to you. It is imperative that you independently calculate the true debt value. Review your recent payslips to understand your daily run rate. Factor in any pending reimbursements for travel, client meetings, or equipment purchases that you made out of pocket.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Additionally, if the employer has delayed the payment significantly beyond the standard 30 to 45 days, you must calculate the accrued interest. Presenting a meticulously calculated ledger in your communications demonstrates that you are legally informed and cannot be easily manipulated with a lowball settlement offer.
                  </p>
                </section>

                <section id="escalation-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Escalation Matrix for Salary Recovery</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Approaching salary recovery requires a strategic, phased escalation. Jumping straight to a lawsuit is expensive and time consuming. Instead, follow a structured matrix that increases pressure incrementally. The goal is to force a settlement before litigation becomes necessary.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 my-8 relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#D2A02A] rounded-l-2xl"></div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 ml-4">Recovery Action Timeline</h4>
                    <ul className="space-y-4 ml-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold mr-3 mt-1">1</span>
                        <div>
                          <h5 className="font-semibold text-gray-800">Day 1 to 15 Post-Exit: Polite Follow up</h5>
                          <p className="text-sm text-gray-600">Send cordial emails requesting the status of your FNF. Establish a documented paper trail of their delay tactics.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">2</span>
                        <div>
                          <h5 className="font-semibold text-gray-800">Day 30 to 45 Post-Exit: The Firm Demand</h5>
                          <p className="text-sm text-gray-600">Send an email containing your independent calculation of the true debt value, explicitly requesting clearance within 7 days.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">3</span>
                        <div>
                          <h5 className="font-semibold text-gray-800">Day 45+ Post-Exit: Formal Legal Notice</h5>
                          <p className="text-sm text-gray-600">Engage a lawyer to dispatch a formal legal notice threatening action under the Payment of Wages Act and civil recovery laws.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="watertight-demand-letter" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Drafting a Watertight Demand Letter</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A demand letter (or legal notice) is the most potent weapon in the pre-litigation phase. It is a formal declaration of your intent to pursue legal action if the dues are not cleared. To be effective, the letter must be drafted with precision, citing specific clauses from your contract and relevant labor laws.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The notice must clearly state the exact amount owed, the period of delay, and the interest accrued. It should provide a strict deadline, typically 7 to 15 days, for the employer to make the payment. Importantly, it should be sent via registered post with acknowledgment due (RPAD) and via email to ensure undeniable proof of delivery.
                  </p>
                </section>

                <section id="state-labour-department" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Engaging the State Labour Department</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the legal notice does not yield results, your next move is the State Labour Department. You can file a complaint with the Labour Commissioner in the jurisdiction where the company is registered. This initiates a conciliation process.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A Labour Inspector will summon the employer to explain the non-payment. Because employers strongly prefer to avoid regulatory scrutiny, a summons from the Labour Commissioner frequently results in an immediate settlement. For guidance on initiating this, see <Link href="/where-to-file-a-complaint-if-your-employer-doesnt-pay-you" className="text-[#D2A02A] hover:underline font-semibold">where to file a complaint against an employer</Link>.
                  </p>
                </section>

                <section id="insolvency-bankrupt" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating Insolvency and Bankrupt Employers</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A highly complex scenario arises when the company is genuinely out of funds and facing bankruptcy. In such cases, standard demand letters may be ignored because the company's accounts might be frozen or managed by an insolvency professional. You must act swiftly to secure your position in the hierarchy of creditors.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the company is undergoing the Corporate Insolvency Resolution Process (CIRP) under the NCLT, you cannot file individual civil suits. Instead, you must submit your claim using the designated forms provided by the Insolvency and Bankruptcy Board of India (IBBI).
                  </p>
                </section>

                <section id="operational-creditor" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Your Rights as an Operational Creditor</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Under the Insolvency and Bankruptcy Code (IBC), employees owed wages are classified as Operational Creditors. While Financial Creditors (like banks) hold significant power, the law mandates that the liquidation value due to operational creditors must be paid in priority over financial creditors.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    You must file Form D (or the relevant form as per the latest IBBI regulations) with the appointed Resolution Professional (RP) to register your claim. Ensure you attach all evidence of your unpaid salary. By formally registering as an operational creditor, you guarantee that your dues are legally acknowledged and prioritized during the asset distribution phase.
                  </p>
                </section>

                <section id="faqs" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-bold text-gray-800 text-lg mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>
            
            {/* Right Sidebar - Author Bio & Reviews */}
            <aside className="hidden lg:block space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center sticky top-24">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-2 border-[#D2A02A]">
                   <Image src="/anujbhiya.png" alt="Anuj Anand Malik Legal Expert" width={96} height={96} className="object-cover" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Anuj Anand Malik</h3>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Counsel</p>
                <Link href="/contact">
                  <button className="w-full bg-[#1a202c] hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Book Consultation
                  </button>
                </Link>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 sticky top-80">
                <h3 className="font-bold text-md text-gray-900 mb-4 border-b pb-2">Client Reviews</h3>
                <div className="space-y-4">
                  {reviews.slice(0, 2).map((review, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 mb-1">"{review.reviewBody}"</p>
                      <p className="text-xs font-semibold text-gray-800">- {review.author.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
