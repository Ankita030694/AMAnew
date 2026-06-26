import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      "name": "Legal Assistance for Consumer Debt Settlement Disputes",
      "item": "https://www.amalegalsolutions.com/legal-assistance-for-consumer-debt-settlement-disputes"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Assistance for Consumer Debt Settlement Disputes",
  "description": "Discover how professional legal assistance can protect you from recovery agent harassment and secure fair terms during consumer debt settlement disputes.",
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
  "datePublished": "2026-06-26",
  "dateModified": "2026-06-26"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I hire a lawyer for debt settlement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should hire a lawyer immediately if you face harassment from recovery agents, receive formal legal notices, or if the lender refuses to provide a written settlement offer."
      }
    },
    {
      "@type": "Question",
      "name": "Can legal assistance stop recovery agents from calling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a lawyer can send a formal cease and desist notice to the bank and the recovery agency, which often stops the harassment immediately by citing specific RBI guidelines and penal codes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a debt settlement agency and a law firm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A law firm provides legal representation, can draft binding contracts, and defend you in court. Many settlement agencies lack legal authority and cannot protect you from legal action by banks."
      }
    },
    {
      "@type": "Question",
      "name": "Are verbal settlement agreements valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, verbal agreements are highly risky and legally unenforceable. Always insist on a formal, written settlement letter on the bank's official letterhead before making any payment."
      }
    },
    {
      "@type": "Question",
      "name": "Will hiring a lawyer for debt settlement impact my credit score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hiring a lawyer itself does not affect your credit score. However, entering into a settlement (paying less than the full amount) will result in a 'Settled' status on your credit report, which negatively impacts your score temporarily."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Assistance for Consumer Debt Disputes",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "215"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The legal intervention provided by AMA Legal Solutions was a game changer. The harassment stopped within a week, and they negotiated a settlement I could actually afford. Highly recommended."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Patel"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I was overwhelmed by legal notices from the bank. The team thoroughly reviewed my case, explained my rights, and handled all negotiations professionally. Excellent service."
    }
  ]
};

export const metadata = {
  title: "Legal Assistance for Consumer Debt Settlement Disputes | AMA",
  description: "Discover how professional legal assistance can protect you from recovery agent harassment and secure fair terms during consumer debt settlement disputes.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Legal assistance for consumer debt settlement disputes",
    "loan settlement",
    "debt dispute lawyer",
    "stop recovery harassment",
    "legal help for loan defaults",
    "debt settlement in India"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/legal-assistance-for-consumer-debt-settlement-disputes',
  },
};

export default function LegalAssistanceForDebtDisputesPage() {
  const tocSections = [
    { id: "role-of-legal-assistance", title: "The Role of Legal Assistance in Debt Settlement Disputes" },
    { id: "common-debt-disputes", title: "Common Consumer Debt Disputes and Legal Remedies" },
    { id: "legal-process-map", title: "Legal Process Map for Resolving Disputes" },
    { id: "myth-vs-fact", title: "Myth vs Fact: Legal Protection in Debt Settlement" },
    { id: "finding-right-assistance", title: "Finding the Right Legal Assistance for Your Case" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Assistance for Debt Settlement Disputes", href: "/legal-assistance-for-consumer-debt-settlement-disputes" },
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
              Legal Assistance for <span className="text-[#D2A02A]">Consumer Debt Settlement</span> Disputes
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Secure professional legal representation to resolve debt disputes effectively, halt aggressive recovery tactics, and negotiate fair terms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Consult a Debt Lawyer Today
                </button>
              </Link>
              <a href="https://wa.me/918700343611" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <div className="hidden lg:block sticky top-24">
              <nav aria-label="Table of Contents">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </nav>
            </div>

            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <nav aria-label="Mobile Table of Contents">
                  <TableOfContents sections={tocSections} />
                </nav>
              </div>

              <article className="bg-white p-4 md:p-10 rounded-2xl shadow-xl space-y-12">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl border-l-4 border-[#D2A02A]">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                    <span className="text-3xl font-bold text-[#1a202c] float-left mr-2 mt-[-6px]">O</span>
                    ver 65% of Indian consumers facing debt settlement issues experience aggressive or unlawful recovery tactics from lenders. Securing professional legal assistance for consumer debt settlement disputes is often the only reliable shield against these predatory practices.
                  </p>
                </div>
                
                <section id="role-of-legal-assistance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                    <svg className="w-8 h-8 text-[#D2A02A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    The Role of Legal Assistance
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The journey toward becoming debt-free is rarely straightforward, particularly when dealing with unsecured loans and credit cards. When financial hardship strikes, borrowers often find themselves overwhelmed not just by the mounting interest, but by the relentless and often intimidating tactics employed by recovery agencies.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Many consumers assume that negotiating a settlement is a simple administrative task that can be handled through customer service channels. However, the reality is far more complex. Lenders possess dedicated legal departments and employ sophisticated strategies designed to maximize recovery, often at the expense of the borrower's rights.
                      </p>
                    </div>
                    <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A]/20 rounded-full blur-2xl"></div>
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Recognizing the Red Flags</h3>
                      <ul className="space-y-3 text-sm md:text-base text-gray-200 relative z-10">
                        <li className="flex items-start"><svg className="w-5 h-5 text-red-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>Receiving calls outside permitted hours (before 8 AM or after 7 PM).</span></li>
                        <li className="flex items-start"><svg className="w-5 h-5 text-red-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>Threats of physical harm, police action, or public humiliation.</span></li>
                        <li className="flex items-start"><svg className="w-5 h-5 text-red-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>Recovery agents contacting your employer or family members.</span></li>
                        <li className="flex items-start"><svg className="w-5 h-5 text-red-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>Receiving formal legal notices (Arbitration, Sec 138 NI Act).</span></li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <Link href="/legal-help-for-loan-defaulters" className="text-[#D2A02A] hover:text-white transition-colors text-sm font-bold flex items-center">
                          Explore legal help for defaulters <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="common-debt-disputes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Common Consumer Debt Disputes & Legal Remedies</h2>
                  
                  <div className="space-y-6">
                    {/* Dispute 1 */}
                    <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Unlawful Harassment by Recovery Agents</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The most prevalent issue in consumer debt disputes is unlawful harassment. Collection agencies frequently employ coercive tactics to force payments, including incessant calls, abusive language, and unauthorized home visits. These actions are not only unethical but constitute criminal offenses under the Indian Penal Code.
                      </p>
                      <div className="bg-[#fcf8f2] p-4 rounded-lg">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-sm uppercase tracking-wider">The Legal Remedy</h4>
                        <p className="text-gray-800 text-sm md:text-base">
                          A lawyer can draft a robust legal notice addressed to the recovery agency and the lending institution, citing violations of <Link href="/what-are-the-rbi-guidelines-for-recovery-agents-in-india" className="underline font-semibold hover:text-[#D2A02A]">RBI guidelines</Link> and relevant sections of the IPC (e.g., Sec 503 and 506 for criminal intimidation). If harassment persists, formal police complaints and civil suits for mental agony damages can be filed.
                        </p>
                      </div>
                    </div>

                    {/* Dispute 2 */}
                    <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Unfair and Deceptive Practices by Lenders</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Lenders may apply exorbitant penal interest rates, hidden charges, or arbitrarily change loan terms without consent. During negotiations, they might offer favorable terms verbally but refuse to provide them in writing, or issue ambiguous settlement letters leaving borrowers vulnerable to future claims.
                      </p>
                      <div className="bg-[#fcf8f2] p-4 rounded-lg">
                        <h4 className="font-bold text-[#D2A02A] mb-2 text-sm uppercase tracking-wider">The Legal Remedy</h4>
                        <p className="text-gray-800 text-sm md:text-base">
                          Legal counsel meticulously reviews the loan agreement and demands transparency in the bank's accounting. They ensure the settlement agreement is comprehensive and strictly outlines the settlement amount, payment schedule, and the lender's obligation to issue an NOC and update credit bureau records.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="my-12 bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-200 shadow-inner">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Deep Dive: Understanding the RBI Master Circular on Recovery Agents</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Reserve Bank of India (RBI) is highly aware of the rogue tactics employed by third-party recovery agencies. To curb these abuses, the RBI regularly issues and updates Master Circulars governing the code of conduct for recovery agents. These circulars are not merely suggestions; they are binding directives that all banks, Non-Banking Financial Companies (NBFCs), and their outsourced agents must strictly follow.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A critical component of effective legal assistance is leveraging these circulars to hold lenders accountable. A qualified debt dispute lawyer will instantly recognize when a recovery agent crosses the line from legitimate debt collection into regulatory violation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-red-500">
                      <h4 className="font-bold text-gray-900 mb-2">The 'Time & Place' Restriction</h4>
                      <p className="text-gray-600 text-sm">Agents cannot call or visit borrowers outside the designated hours of 8:00 AM to 7:00 PM. They are strictly prohibited from visiting the borrower's workplace unless absolutely necessary, and they must never discuss the debt with colleagues, employers, or extended family.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-[#D2A02A]">
                      <h4 className="font-bold text-gray-900 mb-2">The 'Intimidation' Clause</h4>
                      <p className="text-gray-600 text-sm">Any use of verbal abuse, threatening language, or physical intimidation is an immediate violation of RBI guidelines. Agents cannot threaten borrowers with police arrest, as loan default is a civil matter, not a criminal one.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-blue-500">
                      <h4 className="font-bold text-gray-900 mb-2">Mandatory Identity Disclosure</h4>
                      <p className="text-gray-600 text-sm">Before initiating any conversation, recovery agents must clearly state their identity, the name of the agency they represent, and the specific bank they are calling on behalf of. Anonymous or deceptive calls are strictly forbidden.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-green-500">
                      <h4 className="font-bold text-gray-900 mb-2">Data Privacy & Protection</h4>
                      <p className="text-gray-600 text-sm">Lenders and their agents are prohibited from accessing the borrower's phone contacts or sending defamatory messages to the borrower's social circle—a tactic commonly used by illegal digital lending apps.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Litigation Defense: Section 138, Arbitration, and Lok Adalat</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When informal recovery tactics fail, lenders often escalate to formal litigation. This is where professional legal assistance transitions from being beneficial to absolutely vital. Borrowers attempting to navigate the complex Indian judicial system without representation often find themselves outmaneuvered by the banks' seasoned legal teams.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Section 138 of the Negotiable Instruments (NI) Act</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          The most common legal weapon used by banks is filing a case under Sec 138 for a "bounced cheque." Lenders typically take the blank security cheques provided at the time of loan disbursal, fill them with the outstanding amount, and deposit them. When they bounce, the bank initiates criminal proceedings.
                        </p>
                        <p className="text-gray-800 font-medium text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                          <strong>The Legal Strategy:</strong> A lawyer can challenge the validity of the Sec 138 notice. If the cheque was provided as "security" rather than for the discharge of a legally enforceable debt, the case can often be contested and quashed in the High Court.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 bg-[#D2A02A]/20 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Arbitration Proceedings</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Most personal loan and credit card agreements contain an arbitration clause. When a borrower defaults, the bank may unilaterally appoint an arbitrator and send a notice. If the borrower ignores this notice, the arbitrator may pass an "ex-parte award" (an order passed in the borrower's absence), which the bank can then execute to seize assets.
                        </p>
                        <p className="text-gray-800 font-medium text-sm bg-[#fcf8f2] p-3 rounded-lg border border-[#D2A02A]/30">
                          <strong>The Legal Strategy:</strong> Legal representation ensures that the borrower files a reply to the arbitration notice, challenges the unilateral appointment of the arbitrator (which the Supreme Court has heavily restricted), and defends the case during hearings, forcing the bank back to the negotiation table.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Lok Adalat Summons</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Lok Adalats (People's Courts) are alternative dispute resolution forums. Banks frequently send pre-litigation notices urging borrowers to appear before a Lok Adalat to settle the debt. While Lok Adalats are generally favorable for settlements, borrowers who attend without legal counsel are often pressured into accepting poor terms.
                        </p>
                        <p className="text-gray-800 font-medium text-sm bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <strong>The Legal Strategy:</strong> A lawyer can evaluate the settlement offer prior to the Lok Adalat session, counter-offer aggressively on your behalf, and ensure that any settlement reached in the Lok Adalat is formally recorded, legally binding, and completely absolves the borrower of future liability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <section id="legal-process-map" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Legal Process Map for Resolving Disputes</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 group-hover:text-[#D2A02A]/10 transition-colors z-0">1</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-sm">1</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Initial Case Assessment</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Comprehensive review of loan documents, correspondence, and evidence of harassment to determine legal standing.</p>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 group-hover:text-[#D2A02A]/10 transition-colors z-0">2</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-sm">2</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Dispatching Legal Notices</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Formal cease-and-desist notices sent to the lender and recovery agency, demanding an immediate end to illegal activities.</p>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 group-hover:text-[#D2A02A]/10 transition-colors z-0">3</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-sm">3</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Formal Negotiations</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Legal counsel engages directly with the bank's legal department to negotiate a fair, legally binding settlement amount.</p>
                      </div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="bg-[#1a202c] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 group-hover:text-[#D2A02A]/10 transition-colors z-0">4</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-sm">4</div>
                        <h3 className="font-bold text-white text-lg mb-3">Execution & NOC</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">After payment is made, the lawyer ensures the bank issues a valid No Objection Certificate (NOC) and updates the credit bureaus.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="myth-vs-fact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Myth vs Fact: Legal Protection in Debt Settlement</h2>
                  
                  <div className="overflow-x-auto my-8 rounded-2xl shadow-xl border border-gray-200 relative">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-5 md:p-8 w-1/2 font-bold text-xl md:text-2xl border-r border-gray-700">
                            <div className="flex items-center">
                              <svg className="w-8 h-8 text-red-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                              The Fear (Myth)
                            </div>
                          </th>
                          <th className="p-5 md:p-8 w-1/2 font-bold text-xl md:text-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"></div>
                            <div className="flex items-center relative z-10">
                              <svg className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              The Legal Reality (Fact)
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Myth 1 */}
                        <tr className="hover:bg-gray-50 transition-colors group">
                          <td className="p-5 md:p-8 align-top border-r border-gray-200">
                            <p className="text-gray-800 leading-relaxed font-semibold">Borrowers who default on unsecured personal loans can be immediately arrested and sent to jail without a trial.</p>
                          </td>
                          <td className="p-5 md:p-8 align-top bg-[#fcf8f2]/30 group-hover:bg-[#fcf8f2] transition-colors">
                            <p className="text-gray-800 leading-relaxed font-medium">Defaulting on a loan is a civil breach of contract, not a criminal offense. Arrest is highly unlikely unless there is proven, deliberate fraud.</p>
                          </td>
                        </tr>
                        
                        {/* Myth 2 */}
                        <tr className="hover:bg-gray-50 transition-colors group">
                          <td className="p-5 md:p-8 align-top border-r border-gray-200">
                            <p className="text-gray-800 leading-relaxed font-semibold">Legal assistance is too expensive and will cost more than the actual debt you are trying to settle.</p>
                          </td>
                          <td className="p-5 md:p-8 align-top bg-[#fcf8f2]/30 group-hover:bg-[#fcf8f2] transition-colors">
                            <p className="text-gray-800 leading-relaxed font-medium">Reputable legal professionals often operate on structured fees, and the principal amount they save you in the settlement virtually always outweighs the legal costs.</p>
                          </td>
                        </tr>

                        {/* Myth 3 */}
                        <tr className="hover:bg-gray-50 transition-colors group">
                          <td className="p-5 md:p-8 align-top border-r border-gray-200">
                            <p className="text-gray-800 leading-relaxed font-semibold">A verbal agreement over the phone with a recovery agent is sufficient to settle the debt permanently.</p>
                          </td>
                          <td className="p-5 md:p-8 align-top bg-[#fcf8f2]/30 group-hover:bg-[#fcf8f2] transition-colors">
                            <p className="text-gray-800 leading-relaxed font-medium">Only a formal, written settlement letter on the bank's official letterhead is legally binding. Verbal agreements are unenforceable and lead to further demands.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-10">Understanding Your Rights Under Indian Law</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The foundation of effectively fighting back against unlawful recovery tactics and unfair lending practices is a thorough understanding of your rights under Indian law. The legal system provides several robust mechanisms to shield consumers from abuse and ensure fair treatment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Key among these are the directives issued by the Reserve Bank of India (RBI). The RBI's Fair Practices Code explicitly prohibits lenders and their appointed recovery agents from resorting to intimidation or harassment. Furthermore, the Indian Penal Code (IPC) offers powerful protections against criminal behavior by recovery agents. For more comprehensive details on how the settlement mechanism functions within this legal framework, refer to our guide on <Link href="/how-does-loan-settlement-process-work-in-india" className="text-[#D2A02A] hover:underline font-bold">how does loan settlement process work in india</Link>.
                  </p>
                  
                  <div className="my-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Anatomy of a Bulletproof Settlement Agreement (NOC)</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      One of the primary reasons consumers require legal assistance during debt disputes is to ensure that the final settlement agreement is watertight. A poorly drafted settlement letter can leave the door open for the lender (or a third-party debt buyer) to resurrect the debt years later. Here is what a legally sound settlement letter must contain, which a lawyer will rigorously verify before allowing you to make any payment:
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Clear Identification of Accounts</h4>
                            <p className="text-sm text-gray-600 mt-1">The letter must explicitly state the correct loan account number, credit card number, and the names of all borrowers/co-borrowers.</p>
                          </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Full & Final Settlement Clause</h4>
                            <p className="text-sm text-gray-600 mt-1">The document must explicitly use the phrase "Full and Final Settlement." It must state that upon payment of the agreed amount, the bank waives all rights to claim the remaining balance.</p>
                          </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Precise Payment Schedule</h4>
                            <p className="text-sm text-gray-600 mt-1">Whether it's a lump sum or structured EMIs, the exact dates and amounts must be documented. Missing a date in a structured settlement can nullify the entire agreement.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Withdrawal of Legal Cases</h4>
                            <p className="text-sm text-gray-600 mt-1">If the bank has filed an FIR, a Sec 138 case, or an arbitration proceeding, the settlement letter must contain a binding clause that the bank will withdraw all pending litigation immediately upon payment.</p>
                          </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Credit Bureau Update Timeline</h4>
                            <p className="text-sm text-gray-600 mt-1">The letter must mandate that the bank will update the borrower's status to "Settled" with CIBIL, Equifax, Experian, and CRIF High Mark within a specified timeframe (usually 30-45 days).</p>
                          </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-green-500 transition-colors flex items-start gap-4">
                          <div className="mt-1 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold shrink-0">6</div>
                          <div>
                            <h4 className="font-bold text-gray-900">Official Bank Letterhead & Seal</h4>
                            <p className="text-sm text-gray-600 mt-1">Emails from generic Gmail accounts or WhatsApp messages from agents are legally worthless. The NOC must be on the official bank letterhead, signed by an authorized signatory.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-12 bg-gradient-to-br from-[#1a202c] to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D2A02A] rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The Psychological Toll of Debt Collection: How Legal Counsel Shields You</h2>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        While the financial implications of debt settlement are massive, the psychological toll is often completely debilitating. Relentless harassment from recovery agents destroys mental health, causes severe anxiety, impacts workplace performance, and strains family relationships. Many borrowers are driven to the brink by the constant fear of public shaming or legal prosecution.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        This is perhaps the most underrated aspect of hiring a legal professional. When you retain a debt dispute lawyer, you are not just buying legal strategy; you are buying a shield.
                      </p>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-[#D2A02A] mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          <div>
                            <h4 className="font-bold text-white text-lg">The "Talk to My Lawyer" Effect</h4>
                            <p className="text-gray-400 mt-1">Once you inform a recovery agent that you have retained counsel, the dynamic changes instantly. Bullies thrive on power imbalances. Introducing a lawyer into the equation removes their perceived power.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-[#D2A02A] mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          <div>
                            <h4 className="font-bold text-white text-lg">Centralization of Communication</h4>
                            <p className="text-gray-400 mt-1">A lawyer can officially demand that all further communication from the bank be routed through their legal office, legally barring the agents from contacting you directly.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-[#D2A02A] mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          <div>
                            <h4 className="font-bold text-white text-lg">Restoring Focus</h4>
                            <p className="text-gray-400 mt-1">By removing the daily harassment, you regain the mental bandwidth necessary to focus on your career, your business, and rebuilding your financial stability.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="finding-right-assistance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Finding the Right Legal Assistance for Your Case</h2>
                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      Selecting the appropriate legal representation is a critical decision that can significantly influence the outcome of your debt settlement dispute. The ideal legal counsel should possess a deep understanding of banking laws, extensive experience in negotiating with financial institutions, and a proven track record.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✓</div>
                        <span className="font-semibold text-gray-800">Clear Fee Transparency</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✓</div>
                        <span className="font-semibold text-gray-800">Proven Negotiation Track Record</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✓</div>
                        <span className="font-semibold text-gray-800">Specialization in Consumer Debt</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✓</div>
                        <span className="font-semibold text-gray-800">No Guarantees of Immediate Eradication</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="mt-12 scroll-mt-32 border-t border-gray-100 pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqSchema.mainEntity.map((faq, index) => (
                      <details key={index} className="group bg-[#1a202c] p-6 rounded-xl border border-gray-800 shadow-md cursor-pointer transition-all hover:border-[#D2A02A]">
                        <summary className="font-bold text-white text-lg md:text-xl flex justify-between items-center outline-none list-none">
                          {faq.name}
                          <span className="transition group-open:rotate-180 bg-[#D2A02A]/20 p-2 rounded-full text-[#D2A02A]">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </span>
                        </summary>
                        <div className="text-gray-300 mt-4 leading-relaxed pl-2 border-l-2 border-[#D2A02A] text-sm md:text-base">
                          {faq.acceptedAnswer.text}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

                <section id="reviews" className="mt-12 scroll-mt-32 border-t border-gray-100 pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Verified Client Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform group">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-inner group-hover:bg-[#fcf8f2] transition-colors">
                          <span className="text-3xl font-serif text-[#D2A02A] mt-2">"</span>
                        </div>
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#1a202c] to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg leading-tight">{rev.author.name}</h4>
                            <div className="flex text-yellow-400 text-sm mt-1 filter drop-shadow-sm">
                              {"★".repeat(parseInt(rev.reviewRating.ratingValue))}{"☆".repeat(5 - parseInt(rev.reviewRating.ratingValue))}
                            </div>
                            <span className="text-xs text-green-600 font-semibold uppercase tracking-wider flex items-center mt-1">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                              Verified Client
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{rev.reviewBody}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            </div>

            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">About Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                    <Image 
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Anuj Anand Malik</h4>
                    <Link href="/author/anuj-anand-malik" className="text-xs text-[#D2A02A] hover:underline font-medium">
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience, he leads a result-driven law firm based in India that helps individuals and businesses achieve legal and financial stability.
                </p>
                <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="nofollow noopener noreferrer" className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
