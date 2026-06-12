import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 12 unique YMYL-compliant FAQs for Invocation of Arbitration
const invocationFaqs = [
  {
    question: "What is meant by invocation of arbitration?",
    answer: "The invocation of arbitration refers to the formal process by which a disputing party triggers a contract's arbitration clause to resolve a conflict outside of court. It begins when one party serves a written Notice of Invocation on the other, officially requesting that the dispute be referred to an arbitrator."
  },
  {
    question: "Is a notice under Section 21 mandatory to invoke arbitration in India?",
    answer: "Yes. The Supreme Court and various High Courts have established that a Section 21 notice invoking arbitration is a mandatory jurisdictional prerequisite. Bypassing this step and filing a Section 11 application for arbitrator appointment will lead to dismissal."
  },
  {
    question: "What is the difference between invocation and commencement of arbitration?",
    answer: "Invocation is the unilateral act of one party sending a notice to refer the dispute to arbitration. Commencement is the legal milestone (under Section 21) that officially starts on the exact date the respondent receives that Notice of Invocation."
  },
  {
    question: "What happens if a party ignores a notice of invocation of arbitration?",
    answer: "If the respondent ignores the notice or fails to agree on an arbitrator nominee within 30 days of receipt, the claimant can file a Section 11 application in the appropriate High Court or the Supreme Court to seek judicial appointment of the arbitrator."
  },
  {
    question: "What is the limitation period for invoking arbitration?",
    answer: "The limitation period is three years from the date the cause of action (the dispute or breach) arises, as governed by the Limitation Act, 1963. The service and receipt of the Notice of Invocation within this window stops the limitation clock."
  },
  {
    question: "Can arbitration be invoked without a pre-existing arbitration clause?",
    answer: "Yes. Even in the absence of a pre-existing clause, parties can mutually agree to submit their dispute to arbitration by executing a separate 'Submission Agreement' after the dispute has arisen."
  },
  {
    question: "Can a party unilaterally appoint an arbitrator in the invocation notice?",
    answer: "No. In view of the Supreme Court's landmark judgments in TRF Ltd. (2017) and Perkins Eastman (2020), unilateral appointment of an arbitrator by an interested party is illegal. The notice must propose neutral candidates and invite mutual agreement."
  },
  {
    question: "What details must be included in a notice invoking arbitration?",
    answer: "A valid notice must refer to the underlying contract and quote the arbitration clause, outline the nature of the dispute (the cause of action), state the intention to refer the disputes to arbitration, propose neutral arbitrators, and be served to the respondent's valid address."
  },
  {
    question: "What is the relationship between Section 21 and Section 9 (Interim Relief)?",
    answer: "You can file an application for interim relief under Section 9 before invoking arbitration. However, under Section 9(2), you must commence arbitral proceedings (by serving the invocation notice) within 90 days from the date of the interim order."
  },
  {
    question: "Does the death of a party terminate the right to invoke arbitration?",
    answer: "No. Under Section 40 of the Arbitration and Conciliation Act, 1996, an arbitration agreement remains enforceable by or against the legal representatives of the deceased party."
  },
  {
    question: "How is a notice of invocation served legally in India?",
    answer: "The notice must be served via trackable methods such as Registered Post AD, Speed Post, or email with delivery confirmation. If the respondent refuses service, it is treated as deemed service under Section 3 of the Act."
  },
  {
    question: "Can a party file multiple notices of invocation for the same agreement?",
    answer: "Generally, all disputes existing at the time of the invocation must be referred in a single notice. Successive invocations for the same dispute are barred by res judicata, though new disputes arising later under the same contract can be invoked separately."
  }
];

// JSON-LD Schemas
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
      "name": "What is Meant by Invocation of Arbitration",
      "item": "https://www.amalegalsolutions.com/what-is-meant-by-invocation-of-arbitration"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Meant by Invocation of Arbitration? A Complete Legal Guide",
  "description": "Learn what invocation of arbitration means, the role of a Section 21 notice, limitation periods, and how to commence the arbitration process.",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
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
  },
  "datePublished": "2026-06-12",
  "dateModified": "2026-06-12"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": invocationFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Invoke Arbitration",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify the Breach & Arbitration Clause",
      "text": "Identify the cause of action (contract breach) and locate the arbitration clause or dispute resolution clause within your contract."
    },
    {
      "@type": "HowToStep",
      "name": "Check Limitation Period",
      "text": "Ensure that the cause of action is within the 3-year limitation period for arbitration as governed by the Limitation Act, 1963."
    },
    {
      "@type": "HowToStep",
      "name": "Draft the Notice of Invocation",
      "text": "Draft a formal Notice of Invocation under Section 21, stating the disputes and proposing neutral arbitrator nominees."
    },
    {
      "@type": "HowToStep",
      "name": "Serve the Notice to the Respondent",
      "text": "Ensure the receipt of notice by respondent via Speed Post, Registered Post AD, or trackable email to stop the limitation clock."
    },
    {
      "@type": "HowToStep",
      "name": "Await Agreement or File Section 11",
      "text": "Allow the respondent 30 days to agree to the appointment of arbitrator. If ignored, file a Section 11 application in court."
    }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anuj Anand Malik",
  "jobTitle": "Advocate & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "sameAs": [
    "https://www.linkedin.com/in/iamanujmalik/",
    "https://www.instagram.com/amalegalsolutions/?hl=en"
  ]
};

export const metadata = {
  title: "What is Invocation of Arbitration? Process & Notice Guide",
  description: "Learn what invocation of arbitration means, the role of a Section 21 notice, limitation periods, and how to commence the arbitration process.",
  keywords: [
    "what is meant by invocation of arbitration",
    "notice of invocation of arbitration",
    "commencement of arbitral proceedings",
    "Section 21 of the Arbitration and Conciliation Act",
    "limitation period for arbitration",
    "appointment of arbitrator",
    "arbitration clause",
    "cause of action",
    "receipt of notice by respondent",
    "Section 11 application",
    "dispute resolution clause",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-meant-by-invocation-of-arbitration',
  },
  openGraph: {
    title: "What is Invocation of Arbitration? Process & Notice Guide",
    description: "Learn what invocation of arbitration means, the role of a Section 21 notice, limitation periods, and how to commence the arbitration process.",
    url: 'https://www.amalegalsolutions.com/what-is-meant-by-invocation-of-arbitration',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik explaining how to invoke arbitration',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function InvocationArbitrationPage() {
  const tocSections = [
    { id: "concept", title: "What is Invocation?" },
    { id: "contractual-basis", title: "Contractual Powerhouse" },
    { id: "legal-core", title: "Section 21 & Commencement" },
    { id: "importance", title: "Why the Commencement Date Matters" },
    { id: "mandatory-notice", title: "Is a Section 21 Notice Mandatory?" },
    { id: "anatomy", title: "Anatomy of a Valid Notice" },
    { id: "step-by-step", title: "Step-by-Step Guide" },
    { id: "respondent-checklist", title: "Respondent's Checklist" },
    { id: "deadlocks", title: "Resolving Deadlocks" },
    { id: "milestones", title: "Key Milestones Summary" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Invocation of Arbitration", href: "/what-is-meant-by-invocation-of-arbitration" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              What is Meant by Invocation of Arbitration?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 text-center">
              A complete legal guide explaining how to invoke arbitration clauses, draft Section 21 notices, prevent limitation challenges, and resolve disputes.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Consult an Arbitration Expert
              </button>
            </Link>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            {/* Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                {/* Introduction & Direct Answer */}
                <section id="concept" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction: What is Meant by Invocation of Arbitration?</h2>
                  
                  <div className="bg-[#fcf8ee] border-l-4 border-[#D2A02A] p-6 mb-6 rounded-r-xl">
                    <p className="font-semibold text-gray-900">
                      The invocation of arbitration refers to the formal process by which a disputing party triggers a contract's arbitration clause to resolve a conflict outside of court. It begins when one party serves a written Notice of Invocation on the other, officially requesting that the dispute be referred to an arbitrator.
                    </p>
                  </div>

                  <p className="mb-4">
                    When a commercial dispute escalates, parties frequently look to alternative dispute resolution (ADR) mechanisms to avoid the protracted and financially draining nature of court litigation. Among these, arbitration is the most dominant. However, the transition from a private disagreement to a legally binding arbitral proceeding does not happen automatically. It requires a precise, legally recognized action: the invocation of arbitration. Under commercial agreements, this process functions as the key that unlocks the dispute resolution mechanism, moving the conflict from informal negotiations into a formal forum.
                  </p>
                  <p className="mb-4">
                    In legal terms, to &quot;invoke&quot; is to call upon or put into operation a specific right, rule, or remedy. In the context of dispute resolution, invoking arbitration means that one of the contracting parties is unilaterally exercising their contractual right to have a third-party neutral—the arbitrator—hear and decide the matter. This act signifies that the party has moved beyond discussions and is setting a formal legal process in motion. Once invoked, the parties are bound to submit their arguments and evidence to the arbitrator rather than seeking remedy in a civil court.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="contractual-basis" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Contractual Powerhouse: The Arbitration Clause vs. Submission Agreement</h2>
                  <p className="mb-4">
                    The power to invoke arbitration stems from mutual consent, which is established in one of two ways. Most commonly, it is embedded within the contract itself through an **arbitration clause**. This clause is drafted at the inception of the contract, long before any conflict arises, and dictates that any future disputes arising out of the agreement must be arbitrated.
                  </p>
                  <p className="mb-4">
                    Alternatively, if the original contract did not contain such a clause, the parties can execute a separate &quot;Submission Agreement&quot; after a dispute arises, mutually agreeing to refer their existing conflict to arbitration. Without either an arbitration clause or a submission agreement, a party has no legal standing to force the other into arbitration.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="legal-core" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Legal Core: Section 21 & Commencement</h2>
                  <p className="mb-4">
                    In Indian jurisprudence, the **commencement of arbitral proceedings** is governed by **Section 21 of the Arbitration and Conciliation Act**, 1996. The statute provides a clear default rule for when proceedings are deemed to begin:
                  </p>
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6 italic text-gray-800">
                    &quot;Unless otherwise agreed by the parties, the arbitral proceedings in respect of a particular dispute commence on the date on which a request for that dispute to be referred to arbitration is received by the respondent.&quot;
                  </div>
                  <p className="mb-4">
                    This statutory framework contains two primary legal principles: party autonomy and the receipt rule. Under the default rule, the date of commencement is not the date the claimant signs, drafts, or dispatches the notice. It is determined exclusively by the **receipt of notice by respondent**, not the date it was written, signed, or mailed by the claimant.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="importance" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why the Commencement Date is Critical for Litigants</h2>
                  <p className="mb-4">
                    The determination of the exact commencement date is not a mere procedural formality; it carries significant legal consequences:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-3">
                    <li>
                      <strong>Limitation Period for Arbitration:</strong> The law of limitation dictates that a claim must be referred to arbitration within a specific timeframe (usually three years under the Limitation Act, 1963) from the date the **cause of action** arose. Serving the notice of invocation &quot;stops the clock&quot; on this limitation period.
                    </li>
                    <li>
                      <strong>Interim Relief:</strong> Under Section 9 of the Act, a party can petition a court for interim measures of protection before, during, or after the arbitral proceedings. The commencement of proceedings helps courts assess the urgency and necessity of such interim reliefs.
                    </li>
                    <li>
                      <strong>Interest Calculations:</strong> The date of receipt of the invocation notice often acts as the starting point for calculating pre-reference interest on the disputed claim amount.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="mandatory-notice" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Is a Section 21 Notice Mandatory to Invoke Arbitration?</h2>
                  <p className="mb-4">
                    A common point of contention is whether a claimant can bypass the notice phase and directly petition the court for the appointment of an arbitrator. The judicial consensus in India is clear: sending a formal **Notice of Invocation** is mandatory.
                  </p>
                  <p className="mb-4">
                    The courts have repeatedly held that the notice under Section 21 is a condition precedent to the constitution of the arbitral tribunal. Skipping this step and filing a **Section 11 application** for court-appointed arbitrators will lead to dismissal, as the court cannot step in until the respondent has been given a fair opportunity to agree or disagree on an arbitrator nominee.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="anatomy" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Anatomy of a Valid Arbitration Notice</h2>
                  <p className="mb-4">
                    A professionally drafted notice of invocation must include several non-negotiable details to be considered valid and enforceable:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-3">
                    <li><strong>Party Identification:</strong> Complete names and registered addresses of the claimant and respondent.</li>
                    <li><strong>Dispute Resolution Clause:</strong> Reference to the underlying agreement and the verbatim text of the arbitration clause.</li>
                    <li><strong>Cause of Action Details:</strong> A chronological outline of the dispute, breaches committed, and the claim amount.</li>
                    <li><strong>Arbitrator Proposal (Perkins Compliance):</strong> Proposing names of independent, neutral candidates for the **appointment of arbitrator** to avoid unilateral appointment illegality.</li>
                    <li><strong>Delivery:</strong> Proper service via Registered Post AD, Speed Post, or trackable email to prove receipt.</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="step-by-step" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Step-by-Step Guide: How to Invoke Arbitration</h2>
                  <div className="space-y-6">
                    <ol className="list-decimal pl-6 mb-6 space-y-4">
                      <li>
                        <strong>Identify the Breach & Timeline:</strong> Ensure that the **cause of action** is active and within the three-year **limitation period for arbitration**.
                      </li>
                      <li>
                        <strong>Fulfill Pre-conditions:</strong> Satisfy any mandatory contract clauses requiring negotiation, mediation, or conciliation prior to arbitration.
                      </li>
                      <li>
                        <strong>Draft and Dispatch the Notice:</strong> Work with an advocate to draft a legally compliant Section 21 notice, proposing neutral arbitrator names.
                      </li>
                      <li>
                        <strong>Track Service and Await Reply:</strong> Verify the delivery date to record the **receipt of notice by respondent**. Allow the respondent 30 days to reply.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="respondent-checklist" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Receiving a Notice: The Respondent's Checklist</h2>
                  <p className="mb-4">
                    If you receive a Notice of Invocation, you must immediately take these steps to protect your interests:
                  </p>
                  <ol className="list-decimal pl-6 mb-6 space-y-3">
                    <li>
                      <strong>Verify the Validity:</strong> Ensure the disputes fall within the scope of the **dispute resolution clause** and all contract pre-conditions were met.
                    </li>
                    <li>
                      <strong>Evaluate Limitation:</strong> Assess if the claimant's claims are time-barred or non-arbitrable under the law.
                    </li>
                    <li>
                      <strong>Reply within 30 Days:</strong> Draft a reply contesting claims, raising counterclaims, and accepting or objecting to the proposed arbitrator.
                    </li>
                  </ol>
                </section>

                {/* Section 8 */}
                <section id="deadlocks" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Resolving Deadlocks: What If the Notice is Ignored?</h2>
                  <p className="mb-4">
                    If the respondent ignores the notice, rejects the proposed arbitrator, or if the parties fail to agree on a nominee within 30 days of receipt, a deadlock occurs.
                  </p>
                  <p className="mb-4">
                    To resolve this, the claimant must file a **Section 11 application** in the appropriate High Court or the Supreme Court, requesting the court to step in and appoint the arbitrator. While effective, this step introduces court delays and additional legal costs, which is why proper initial notice drafting is crucial.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="milestones" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Key Milestones in the Invocation Process</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border text-sm md:text-base">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 border text-left font-semibold text-gray-900">Milestone / Metric</th>
                          <th className="px-4 py-2 border text-left font-semibold text-gray-900">Legal Provision / Standard</th>
                          <th className="px-4 py-2 border text-left font-semibold text-gray-900">Significance / Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Trigger Event</td>
                          <td className="px-4 py-2 border text-gray-700">Cause of Action (Breach/Dispute)</td>
                          <td className="px-4 py-2 border text-gray-700">Starts the clock for limitation and dispute escalation.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Limitation Period</td>
                          <td className="px-4 py-2 border text-gray-700">Limitation Act, 1963</td>
                          <td className="px-4 py-2 border text-gray-700"><strong>3 years</strong> from the date the cause of action arises to invoke arbitration.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Official Commencement</td>
                          <td className="px-4 py-2 border text-gray-700">Section 21 of the Arbitration Act</td>
                          <td className="px-4 py-2 border text-gray-700">Deemed to start on the date the <strong>Notice of Invocation</strong> is received by the respondent.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Statutory Notice Period</td>
                          <td className="px-4 py-2 border text-gray-700">Section 11(4) / Section 21</td>
                          <td className="px-4 py-2 border text-gray-700">Respondent has <strong>30 days</strong> from receipt to agree to an arbitrator nominee.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Recourse for Deadlock</td>
                          <td className="px-4 py-2 border text-gray-700">Section 11 Application</td>
                          <td className="px-4 py-2 border text-gray-700">Filed in High Court or Supreme Court to appoint an arbitrator if notice is ignored.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border font-medium text-gray-900">Primary Notice Methods</td>
                          <td className="px-4 py-2 border text-gray-700">Judicial Standards (CPC / Act)</td>
                          <td className="px-4 py-2 border text-gray-700">Registered Post AD, Speed Post, or Email with trackable metadata.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {invocationFaqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
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

                {/* Author Bio Box */}
                <section className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/newAssets/bhiya.png"
                      alt="Advocate Anuj Anand Malik resolving arbitration notice issues"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking Law & Arbitration Specialist</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is an expert in banking, debt recovery, and commercial arbitration law. He has represented corporate entities and individual borrowers in numerous complex arbitration matters, challenging unilateral arbitrator appointments and securing favorable settlements. He is a registered advocate with the Bar Council of Delhi and actively participates in panels with the Mumbai Centre for International Arbitration (MCIA).
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Trust Signals Footer Block */}
                <div className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </div>

                {/* Final CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Received an Arbitration Notice?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Do not ignore legal notices. Challenge unilateral appointments, verify limitation periods, and protect your commercial interests. Talk to our senior advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking and arbitration lawyers in Sector 57, Gurugram.
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

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/what-is-section-21-of-arbitration-and-conciliation-act" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Section 21 of Arbitration Act
                    </Link>
                  </li>
                  <li>
                    <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Got Arbitration Notice?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Personal Loan Settle
                  </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Credit Card Dues Settle
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
