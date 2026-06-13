import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 15 unique YMYL-compliant FAQs for Loan Mediation
const loanMediationFaqs = [
  {
    question: "Is a mediation settlement agreement legally binding in a loan dispute?",
    answer: "Yes, a signed Mediation Settlement Agreement is legally binding and enforceable. Under the Mediation Act, 2023, and Section 89 of the Code of Civil Procedure (CPC), a settlement reached through mediation carries the same status as a civil court decree. Once filed and registered with the appropriate court or authority, it prevents both parties from initiating future litigation on the same dispute."
  },
  {
    question: "Can a bank refuse to participate in mediation for debt settlement?",
    answer: "Yes. Except in cases of mandatory pre-institution mediation for commercial disputes, mediation is a voluntary process, meaning a bank or lender can refuse to participate. However, courts, tribunals (like the DRT), and regulatory bodies strongly encourage banks to settle non-performing assets (NPAs) through mediation or Lok Adalats to save time and recovery costs."
  },
  {
    question: "How does a mediated loan settlement affect my credit score?",
    answer: "A mediated settlement usually results in the lender reporting your account to credit bureaus (like CIBIL) as 'Settled' rather than 'Closed.' While this successfully stops all legal action, a 'Settled' tag represents a negative credit score impact that can lower your score and make securing future credit cards or loans difficult for up to seven years."
  },
  {
    question: "What is the role of a mediator in a bank loan dispute?",
    answer: "A mediator is a neutral, independent third party who facilitates communication and negotiation between the borrower and the lender. Unlike an arbitrator or a judge, a mediator has no authority to impose a decision or force a settlement. Instead, they help both parties understand each other's constraints, identify common ground, and voluntarily agree to a mutually acceptable solution."
  },
  {
    question: "Can I initiate mediation after the bank has filed a case in the Debt Recovery Tribunal (DRT)?",
    answer: "Yes. Even after the bank has initiated formal recovery proceedings under the SARFAESI Act or filed a recovery application in the Debt Recovery Tribunal (DRT), you can request the tribunal to refer the matter to mediation under Section 89 of the CPC. If both parties agree, the legal proceedings will be put on hold while mediation is conducted."
  },
  {
    question: "How long does the mediation process take for loan recovery?",
    answer: "Compared to litigation, which can drag on for years, mediation is highly time-efficient. Typically, a loan mediation process is completed within 30 to 90 days. Under the Mediation Act 2023, the process must be completed within 120 days from its commencement, although an extension of up to 60 days can be granted if both parties agree."
  },
  {
    question: "What documents should I prepare for a loan settlement mediation?",
    answer: "Borrowers should prepare all relevant financial documents to establish a genuine financial hardship. This includes the original loan agreement, detailed bank statements, tax returns, proof of income loss (e.g., termination letter, business closure details), or medical reports in case of health emergencies. A written One-Time Settlement (OTS) proposal should also be ready."
  },
  {
    question: "Can recovery agents contact or harass me while mediation is ongoing?",
    answer: "No. Once a formal mediation process has commenced, banks and NBFCs must halt all aggressive recovery actions. Harassment by recovery agents during this phase violates RBI guidelines on fair practices and can be raised as a serious breach of good faith before the mediator and reported to the RBI Ombudsman."
  },
  {
    question: "What happens if mediation fails during a loan settlement?",
    answer: "If mediation fails and the parties cannot reach an agreement, the mediator will file a 'non-settlement report' to the referring court or tribunal. The dispute will then return to the normal legal channel, and the bank can resume its litigation, arbitration, or tribunal recovery proceedings."
  },
  {
    question: "Is mediation cheaper than hiring a lawyer for a court battle?",
    answer: "Yes, mediation is significantly more cost-effective. It avoids heavy court fees, miscellaneous litigation expenses, and ongoing legal representation costs. While you can choose to have a lawyer represent you during mediation, the streamlined nature of the sessions means total legal expenses remain a fraction of what a court trial would cost."
  },
  {
    question: "Can a co-borrower or guarantor be protected by a mediation agreement?",
    answer: "Yes, provided they are active participants in the mediation and are specifically named in the final Mediation Settlement Agreement. The terms should explicitly state that the settlement releases both the primary borrower and the co-borrower/guarantor from all outstanding liabilities to prevent the bank from pursuing them later."
  },
  {
    question: "What is pre-institution mediation in commercial loan disputes?",
    answer: "Under the Commercial Courts Act, 2015, lenders must go through a mandatory pre-institution mediation process before filing a commercial suit in court (provided no urgent interim relief is required). This gives commercial borrowers a legal opportunity to negotiate restructuring or an OTS before a formal lawsuit is filed."
  },
  {
    question: "Can I negotiate a waiver on interest and penalties during mediation?",
    answer: "Yes. Mediation is highly flexible and allows for custom terms that standard court judgments cannot grant. Borrowers can negotiate substantial waivers on accumulated interest, penal interest, late payment fees, and legal expenses, focusing the settlement payment on the principal outstanding."
  },
  {
    question: "Who pays for the mediation session fees in bank disputes?",
    answer: "In court-annexed mediation or Lok Adalats, the service is generally free or carries nominal charges. In private mediation, the costs are usually shared equally between the borrower and the lender. However, the sharing ratio can be negotiated and documented as a term within the final settlement agreement."
  },
  {
    question: "Can the mediator force me to accept a bank's settlement offer?",
    answer: "No. The mediator is purely a facilitator and does not have the power to decide who is right or wrong, nor can they force either party to accept an offer. If the bank's final One-Time Settlement (OTS) proposal is financially unfeasible for you, you have the absolute right to reject it and end the mediation."
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
      "name": "Mediation Process for Loan Settlement",
      "item": "https://www.amalegalsolutions.com/mediation-process-for-loan-settlement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mediation Process for Loan Settlement: The Definitive Guide for Borrowers",
  "description": "Learn the step-by-step mediation process for bank and NBFC loan settlements. Understand CPC Section 89, pre-institution commercial mediation, CIBIL impacts, and how to negotiate a One-Time Settlement (OTS).",
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
  "datePublished": "2026-06-13",
  "dateModified": "2026-06-13"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": loanMediationFaqs.map(faq => ({
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
  "name": "AMA Legal Solutions - Debt Mediation & Financial Defense",
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
  "name": "How to Resolve a Loan Default Through Mediation",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Initiate Mediation Request",
      "text": "Formalize a request for mediation with the lender or seek reference from a court/tribunal under Section 89 of CPC."
    },
    {
      "@type": "HowToStep",
      "name": "Appoint a Neutral Financial Mediator",
      "text": "Choose a qualified, neutral mediator with banking and debt dispute resolution experience."
    },
    {
      "@type": "HowToStep",
      "name": "Prepare Hardship and Financial Evidence",
      "text": "Compile documents showing financial hardship (e.g., job loss, medical emergencies, bank statements) to support your case."
    },
    {
      "@type": "HowToStep",
      "name": "Participate in Joint and Private Sessions",
      "text": "Engage in discussions to bridge gaps, leveraging private caucuses with the mediator to convey constraints."
    },
    {
      "@type": "HowToStep",
      "name": "Execute the Mediation Settlement Agreement",
      "text": "Draft and sign a legally binding settlement detailing the One-Time Settlement (OTS) or restructuring terms."
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
  title: "Mediation Process for Loan Settlement: A Borrower's Guide",
  description: "Understand the mediation process for bank loan settlement. Learn about Section 89 CPC, pre-institution commercial mediation, CIBIL scores, and OTS negotiations.",
  keywords: [
    "mediation process for loan settlement",
    "debt mediation process",
    "Section 89 CPC mediation",
    "One-Time Settlement",
    "OTS",
    "Alternative Dispute Resolution",
    "Mediation Settlement Agreement",
    "Debt Recovery Tribunal",
    "credit score impact",
    "pre-institution mediation",
    "AMA Legal Solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/mediation-process-for-loan-settlement',
  },
  openGraph: {
    title: "Mediation Process for Loan Settlement: A Borrower's Guide",
    description: "Understand the mediation process for bank loan settlement. Learn about Section 89 CPC, pre-institution commercial mediation, CIBIL scores, and OTS negotiations.",
    url: 'https://www.amalegalsolutions.com/mediation-process-for-loan-settlement',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik assisting with loan settlement mediation',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function LoanMediationProcessPage() {
  const tocSections = [
    { id: "intro", title: "What is Loan Mediation?" },
    { id: "framework", title: "Legal Framework (Section 89 CPC)" },
    { id: "timeline", title: "Step-by-Step Mediation Process" },
    { id: "comparison", title: "Mediation vs. Arbitration vs. Litigation" },
    { id: "implications", title: "Financial & Credit Score Implications" },
    { id: "redressal", title: "Debt Settlement Agencies & Ombudsman" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Loan Settlement Mediation", href: "/mediation-process-for-loan-settlement" }
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
              The Mediation Process for Loan Settlement
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 text-center">
              A detailed roadmap to resolving bank defaults, understanding your rights under the Mediation Act, and negotiating a legal One-Time Settlement.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Debt Mediation Specialist
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
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction: What is Loan Mediation?</h2>
                  
                  {/* Direct Answer snippet */}
                  <div className="bg-[#fcf8ee] border-l-4 border-[#D2A02A] p-6 mb-6 rounded-r-xl">
                    <p className="font-semibold text-gray-900">
                      The mediation process for loan settlement is a voluntary, non-adversarial Alternative Dispute Resolution (ADR) mechanism where defaulted borrowers and financial institutions work with a neutral mediator to negotiate a debt settlement or repayment restructuring plan, avoiding costly litigation.
                    </p>
                  </div>

                  <p className="mb-4">
                    Facing a loan default can be an incredibly stressful experience, especially when dealing with constant calls from recovery agents, formal bank demand notices, or threats of legal lawsuits. While traditional recovery methods place the borrower and lender in an adversarial battleground, the modern legal system offers a more constructive alternative: **Alternative Dispute Resolution (ADR)** through mediation.
                  </p>
                  <p className="mb-4">
                    Loan mediation provides a structured, private environment where both parties can openly discuss the default. Unlike court proceedings or arbitration, which focus on assigning blame and enforcing strict contractual penalties, mediation centers on finding a practical, compromise-based solution that matches the borrower's current financial capacity.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="framework" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Legal Framework: Section 89 CPC & Mediation Act 2023</h2>
                  
                  <p className="mb-4">
                    In India, mediation is not just an informal talk; it has strong statutory backing. The primary legal pillars governing this process are:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">Section 89 of the Code of Civil Procedure (CPC)</h4>
                      <p className="text-sm">
                        Under **Section 89 of the CPC**, civil courts and tribunals are legally empowered to refer pending disputes to out-of-court settlement methods—including mediation, arbitration, conciliation, and Lok Adalats. If a bank has filed a recovery suit against you, you can submit an application under Section 89 to request a court referral to the mediation cell.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">The Mediation Act, 2023</h4>
                      <p className="text-sm">
                        The enactment of the **Mediation Act, 2023** has completely modernized the ADR landscape in India. Under this Act, a signed **Mediation Settlement Agreement** is treated as a final, binding document that has the legal force of a court decree. Furthermore, the Act mandates that mediation proceedings remain strictly confidential and must be completed within a maximum timeframe of 120 to 180 days.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">Pre-Institution Mediation (Commercial Courts Act)</h4>
                      <p className="text-sm">
                        For commercial loans, the Commercial Courts Act, 2015, makes it mandatory for lenders to opt for **pre-institution mediation** before filing any commercial suit, unless they need urgent interim relief. This provides businesses with a statutory window to negotiate a restructuring or a One-Time Settlement (OTS) before the bank can initiate litigation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Step-by-Step Process */}
                <section id="timeline" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Step-by-Step Mediation Process for Loan Settlement</h2>
                  
                  <p className="mb-6">
                    A successful loan mediation requires structured preparation and negotiation. Here is the step-by-step timeline of how a debt mediation unfolds:
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-2 border-[#D2A02A] pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Initiation of Mediation</h3>
                      <p className="mb-2">
                        Mediation can be initiated in two ways: either voluntarily by the borrower proposing mediation to the bank’s recovery team, or through a judicial referral under Section 89 CPC after a recovery case is filed. Both parties must formally consent to enter the mediation cell.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#D2A02A] pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Selection of the Neutral Mediator</h3>
                      <p className="mb-2">
                        A certified mediator is assigned to the case. The mediator must be completely independent and neutral, with no financial interest in the bank or the borrower's businesses. Their primary job is to moderate the sessions and help clarify complex issues without passing judgments.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#D2A02A] pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Document Gathering & Demonstrating Hardship</h3>
                      <p className="mb-2">
                        Before sessions begin, the borrower must gather all evidence documenting their **financial hardship** (such as proof of job loss, medical emergency files, or tax returns). Demonstrating a genuine inability to pay is critical to gaining the bank's willingness to grant interest or principal waivers.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#D2A02A] pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Joint Sessions and Private Caucuses</h3>
                      <p className="mb-2">
                        The mediation involves joint sessions where both sides state their terms. It also relies heavily on "private caucuses," where the mediator meets with each party individually. In these private talks, you can share sensitive financial details or constraints that you wouldn’t want to disclose directly to the bank's representatives.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#D2A02A] pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 5: Signing the Mediation Settlement Agreement</h3>
                      <p className="mb-2">
                        Once mutually acceptable terms (like a structured One-Time Settlement plan or a revised interest rate) are reached, the mediator drafts the final agreement. Both parties sign this **Mediation Settlement Agreement**, making the terms legally binding and bringing a permanent end to the recovery dispute.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Comparison Section */}
                <section id="comparison" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Mediation vs. Arbitration vs. Litigation in Debt Recovery</h2>
                  
                  <p className="mb-4">
                    Understanding the difference between the three primary methods of resolving loan defaults is essential for choosing the best defense strategy.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Parameter</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b bg-amber-50 text-amber-900">Mediation</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Arbitration</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Court/DRT Litigation</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r">Nature of Process</td>
                          <td className="px-6 py-4 text-sm bg-amber-50 text-amber-900 border-r font-medium">Voluntary & Cooperative</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">Adversarial & Imposed</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Strictly Adversarial</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r">Final Authority</td>
                          <td className="px-6 py-4 text-sm bg-amber-50 text-amber-900 border-r font-medium">The Parties (Mutual Consent)</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">The Arbitrator (Imposes Award)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">The Judge (Passes Decree)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r">Cost & Time</td>
                          <td className="px-6 py-4 text-sm bg-amber-50 text-amber-900 border-r font-medium">Very Low Cost; 30-90 Days</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">Medium Cost; 6-12 Months</td>
                          <td className="px-6 py-4 text-sm text-gray-700">High Cost; Dragged over Years</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r">Confidentiality</td>
                          <td className="px-6 py-4 text-sm bg-amber-50 text-amber-900 border-r font-medium">Highly Private</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">Private (But awards recorded)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Public Records</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r">Control Over Outcome</td>
                          <td className="px-6 py-4 text-sm bg-amber-50 text-amber-900 border-r font-medium">Absolute (Can reject terms)</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">None (Arbitrator decides)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">None (Judge decides)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Implications Section */}
                <section id="implications" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Financial & Credit Score Implications of Mediation</h2>
                  
                  <p className="mb-4">
                    While mediation is an exceptional legal path to escape litigation, default borrowers must understand its long-term financial consequences, specifically regarding credit ratings.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding the Credit Score Impact</h3>
                  <p className="mb-4">
                    When you negotiate a One-Time Settlement (OTS) during mediation, you pay a reduced lump-sum amount, and the bank writes off the remaining interest and principal. Consequently, the bank will report the loan status to bureaus like CIBIL as **"Settled."**
                  </p>
                  <p className="mb-4">
                    Unlike a "Closed" tag (which indicates full payment), a "Settled" status signals to future lenders that you defaulted on your initial commitment. This can cause a significant credit score drop and make it challenging to secure fresh credit cards or loans for several years.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mitigation: Negotiating the Reporting Terms</h3>
                  <p className="mb-4">
                    A key advantage of mediation's flexible nature is that you can negotiate how the bank reports your account closure. An experienced debt lawyer can help you include a clause in the Mediation Settlement Agreement requiring the bank to issue a clean **No-Dues Certificate (NDC)** and, if possible, update the credit bureaus to mark the account as "Closed" rather than "Settled" upon payment of the agreed sum.
                  </p>
                </section>

                {/* Redressal and Agencies */}
                <section id="redressal" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Navigating Third-Party Debt Agencies & Ombudsman Escalations</h2>
                  
                  <p className="mb-4">
                    Borrowers are often approached by third-party debt settlement companies claiming they can settle loans quickly. It is vital to exercise caution:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Always verify the credentials of any debt relief service to avoid upfront fee scams.</li>
                    <li>Ensure all settlement communications go through formal, written channels with the bank's authorized officers.</li>
                    <li>Remember that bank recovery agents are legally prohibited from abusing or harassing you.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Escalating to the Principal Nodal Officer (PNO) & RBI Ombudsman</h3>
                  <p className="mb-4">
                    If the bank’s branch or recovery agents refuse to engage in mediation or violate fair practices, you should immediately escalate the matter. Reach out to the bank's **Principal Nodal Officer (PNO)**. If you do not receive a satisfactory resolution within 30 days, you can file a complaint with the **RBI Integrated Ombudsman** under the grievance redressal mechanism.
                  </p>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    {loanMediationFaqs.map((faq, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Form / Consultation Widget */}
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-3">Need Debt Legal Help?</h3>
              <p className="text-sm text-gray-600">
                If you are facing loan default, bank recovery notices, or want to resolve your debt disputes via professional mediation, our legal team can assist.
              </p>
              
              <div className="bg-[#fff9e6] p-4 rounded-xl border border-[#D2A02A] text-xs text-amber-900 font-semibold text-center">
                Call Us: +91 87003 43611
              </div>

              <Link href="/contact">
                <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl transition-all text-sm text-center">
                  Book a Consultation
                </button>
              </Link>

              {/* Legal App Badges */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Download App</p>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/appstore.svg" 
                      alt="Google Play" 
                      width={120} 
                      height={32}
                    />
                  </Link>
                  <Link 
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/playstore.svg" 
                      alt="App Store" 
                      width={120} 
                      height={32}
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
