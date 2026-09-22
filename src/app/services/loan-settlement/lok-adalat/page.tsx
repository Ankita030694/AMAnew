import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import Image from "next/image";

export const metadata = {
  title: "Loan Settlement in Lok Adalat 2026 | NALSA Schedule & Process",
  description:
    "Settle your bank loan or credit card in Lok Adalat. Official 2026 NALSA dates, Section 19-21 Legal Services Act rules, zero court fees, and advocate support.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat',
  },
  openGraph: {
    title: "Loan Settlement in Lok Adalat 2026 | NALSA Schedule & Process",
    description: "Settle your bank loan or credit card in Lok Adalat. Official 2026 NALSA dates, Section 19-21 Legal Services Act rules, zero court fees, and advocate support.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement in Lok Adalat 2026",
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
  "headline": "Loan Settlement in Lok Adalat 2026: NALSA Schedule & Legal Process",
  "description": "In-depth statutory guide on how to settle bank loans and credit cards through National Lok Adalat in India. Covers 2026 dates, Section 19/20/21 Legal Services Authorities Act, and Section 138 compounding.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "datePublished": "2023-12-02",
  "dateModified": "2026-09-22",
  "author": {
    "@type": "Person",
    "name": "Adv. Anuj Anand Malik",
    "jobTitle": "Founder & Managing Partner",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "image": "https://www.amalegalsolutions.com/anujbhiya.png",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  }
};

export default function LokAdalatLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "nalsa-schedule", title: "2026 NALSA Schedule" },
    { id: "what-is-lok-adalat", title: "What is Lok Adalat?" },
    { id: "legal-framework", title: "Legal Framework (Sec 19-21)" },
    { id: "pre-vs-pending", title: "Pre-Litigation vs Pending" },
    { id: "cheque-bounce", title: "Cheque Bounce (Sec 138)" },
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

                {/* 2026 NALSA National Lok Adalat Schedule */}
                <section id="nalsa-schedule" className="scroll-mt-32">
                  <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-12 text-white shadow-xl">
                    <span className="text-[#D2A02A] text-xs font-bold uppercase tracking-widest block mb-2">Statutory ADR Calendar</span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Official 2026 National Lok Adalat Schedule</h2>
                    <p className="text-gray-300 text-sm md:text-base mb-8 max-w-3xl leading-relaxed">
                      Constituted under the directive of the <strong>National Legal Services Authority (NALSA)</strong> and State Legal Services Authorities (SLSAs), National Lok Adalats for the year 2026 are scheduled across all District Courts, High Courts, and DRT benches on the following designated second Saturdays:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center">
                      <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                        <span className="text-xs text-[#D2A02A] font-bold uppercase block mb-1">1st National Lok Adalat</span>
                        <div className="text-xl md:text-2xl font-black text-white">March 14, 2026</div>
                        <span className="text-[11px] text-gray-400 block mt-2">NPA Recovery & Pre-Litigation</span>
                      </div>
                      <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                        <span className="text-xs text-[#D2A02A] font-bold uppercase block mb-1">2nd National Lok Adalat</span>
                        <div className="text-xl md:text-2xl font-black text-white">May 09, 2026</div>
                        <span className="text-[11px] text-gray-400 block mt-2">Banking & Cheque Bounce Benches</span>
                      </div>
                      <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                        <span className="text-xs text-[#D2A02A] font-bold uppercase block mb-1">3rd National Lok Adalat</span>
                        <div className="text-xl md:text-2xl font-black text-white">September 12, 2026</div>
                        <span className="text-[11px] text-gray-400 block mt-2">Half-Year Bank OTS Quotas</span>
                      </div>
                      <div className="p-5 bg-white/10 rounded-2xl border border-white/10">
                        <span className="text-xs text-[#D2A02A] font-bold uppercase block mb-1">4th National Lok Adalat</span>
                        <div className="text-xl md:text-2xl font-black text-white">December 12, 2026</div>
                        <span className="text-[11px] text-gray-400 block mt-2">Annual Debt Resolution Closure</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-300 leading-relaxed">
                      <strong className="text-[#D2A02A]">Crucial Practice Insight (Pre-Conciliation Sittings):</strong> Under NALSA guidelines, actual settlement figures are negotiated during <em>Pre-Lok Adalat / Pre-Conciliation sittings</em> conducted 7 to 14 days before the main Saturday bench. Do not wait for the final day; having legal representation during pre-conciliation secures maximum waivers from the bank's Authorized Officer.
                    </div>
                  </div>
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
                    The concept of Lok Adalat is deeply rooted in Indian tradition, but its modern statutory status makes it a powerful tool for justice. Unlike a regular court where a judge adjudicates based on strict evidence and legal technicalities, a Lok Adalat is presided over by a panel (usually a sitting or retired judicial officer, an advocate, and a social worker) who act as conciliators. Their role is not to judge who is right or wrong, but to facilitate a dialogue and help the parties arrive at a mutually acceptable settlement.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Statutory Legal Framework (Sections 19, 20 & 21)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legitimacy, jurisdiction, and binding power of Lok Adalats stem from the <strong>Legal Services Authorities Act, 1987 (Act No. 39 of 1987)</strong>. Three critical provisions define borrower rights in debt disputes:
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Section 19: Organization of Lok Adalats</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Grants authority to SLSAs, DLSAs, and High Court Legal Services Committees to organize Lok Adalat benches. Each bench consists of a judicial officer and an advocate or social worker with jurisdiction to determine and arrive at a compromise between the parties.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Section 20: Cognizance of Cases & Voluntary Nature</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        A case can be referred to Lok Adalat either on the joint application of parties or when one party applies and the court is satisfied that there are chances of settlement. Crucially, <strong>Lok Adalat proceedings are 100% voluntary</strong>. A borrower cannot be coerced into accepting an unreasonable demand by the bank; if compromise fails, the matter reverts to regular court without prejudice.
                      </p>
                    </div>

                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Section 21: Non-Appealable Civil Court Decree</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Section 21 explicitly mandates that every award made by a Lok Adalat <strong>shall be deemed to be a decree of a Civil Court</strong>. The award is final and binding on all parties, and <strong>no appeal shall lie to any court</strong> against the award.
                      </p>
                      <div className="p-3 bg-white rounded-lg border border-amber-100 text-xs text-gray-600">
                        <strong>Supreme Court Precedent (*State of Punjab v. Jalour Singh, 2008*):</strong> The Apex Court held that a Lok Adalat award cannot be challenged by filing an appeal or revision petition under CPC or CrPC. It can only be questioned in extraordinarily rare cases of established fraud via a writ petition under Article 226/227 of the Constitution. Once signed, the bank cannot demand residual amounts or reopen the loan account.
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund of Court Fees Under Section 21(1)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under Section 21(1) read with Section 16 of the Court Fees Act, 1870, if a pending civil suit or DRT claim is settled in Lok Adalat, the plaintiff bank is entitled to a <strong>full refund of the court fees paid</strong>. This gives banks a strong financial incentive to compromise on interest rather than risking protracted litigation.
                  </p>
                </section>

                {/* Pre-Litigation vs Pending Litigation */}
                <section id="pre-vs-pending" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Litigation vs. Pending Litigation Lok Adalat</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers receive a "Lok Adalat Notice" and panic, fearing an imminent arrest or court trial. It is essential to distinguish between the two types of matters:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <span className="text-xs font-bold text-[#D2A02A] uppercase block mb-1">Type 1: Pre-Litigation Notice</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Before Any Lawsuit is Filed</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        The bank has not filed a court case yet. They approached the District Legal Services Authority (DLSA) to invite you for an amicable discussion. 
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4">
                        <li>No court summons or warrant involved.</li>
                        <li>Non-attendance does not create a criminal record.</li>
                        <li>Best opportunity to secure 40%–60% waivers before litigation costs accumulate.</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <span className="text-xs font-bold text-emerald-600 uppercase block mb-1">Type 2: Pending Litigation Referral</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Active Civil, DRT or Sec 138 Case</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        A lawsuit (Summary Suit under Order 37 CPC, Section 138 NI Act, or DRT Recovery Application) is already pending. The judge referred the matter to Lok Adalat to explore compromise.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4">
                        <li>If settled, the court case is dismissed permanently.</li>
                        <li>Court fees are refunded to the lender.</li>
                        <li>If compromise fails, the trial continues from the same stage.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 138 NI Act Cheque Bounce Compounding */}
                <section id="cheque-bounce" className="bg-emerald-50/50 p-6 md:p-10 rounded-2xl border border-emerald-200/60 scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Compounding Cheque Bounce (Section 138 NI Act) at Lok Adalat</h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-6">
                    A significant percentage of banking matters listed before Lok Adalats involve <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (cheque bounce) and <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> (NACH/e-mandate failure).
                  </p>
                  <div className="space-y-4 text-xs md:text-sm text-gray-700">
                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Compoundable Quasi-Criminal Nature</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Under Section 147 of the NI Act, cheque bounce offenses are compoundable. When settled before a Lok Adalat panel, the criminal complaint is formally compounded, resulting in complete acquittal of the drawer without any criminal record or conviction.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Exemption from High Court Compounding Penalties (*Damodar S. Prabhu Case*)</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        While the Supreme Court in <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em> mandated a graded penalty of 10% to 15% on cheque bounce settlements reached at late stages in regular courts, it specifically exempted settlements achieved through Lok Adalats to encourage early dispute resolution without financial burden.
                      </p>
                    </div>
                  </div>
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

                {/* Author Bio Box */}
                <aside className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A] shadow-md">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik - Founder & Managing Partner"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Reviewed & Authored by Adv. Anuj Anand Malik</h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                        Verified Bar Council Advocate
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-gray-700">
                      Founder & Managing Partner, AMA Legal Solutions | Enrolled with Bar Council of Delhi & Delhi High Court Bar Association
                    </p>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      Advocate Anuj Anand Malik is an established banking dispute and loan settlement counsel. He regularly represents distressed borrowers before National Lok Adalats, High Courts, and Debt Recovery Tribunals across India, securing binding settlement decrees under Section 21 of the Legal Services Authorities Act and compounding Section 138 NI Act disputes.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-1 text-xs font-bold">
                      <a 
                        href="https://www.linkedin.com/in/iamanujmalik/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#D2A02A] hover:text-[#b88a22] flex items-center gap-1"
                      >
                        LinkedIn Profile →
                      </a>
                      <Link 
                        href="/author/anuj-anand-malik" 
                        className="text-gray-800 hover:text-black flex items-center gap-1"
                      >
                        Author Profile & Credentials →
                      </Link>
                    </div>
                  </div>
                </aside>

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
