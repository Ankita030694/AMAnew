
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a Bajaj Finance recovery agent visit my home?",
    answer: "Yes, they can visit for legitimate collection purposes, but only between 8:00 AM and 7:00 PM. They must carry an ID card and an authorization letter from Bajaj Finance. They cannot enter your house without permission, use abusive language, or threaten you."
  },
  {
    question: "What should I do if a Bajaj Finance agent is harassing me?",
    answer: "First, record the interaction as evidence. Then, file a formal complaint with the Bajaj Finance Grievance Redressal Officer. If not resolved in 30 days, escalate to the RBI Banking Ombudsman (CMS Portal). AMA Legal Solutions can help you send a formal legal notice to stop the harassment for just ₹999."
  },
  {
    question: "Is social shaming by Bajaj Finance agents legal?",
    answer: "Absolutely not. Mentioning your debt to neighbors, relatives, or office colleagues is strictly prohibited by RBI Fair Practices Code. It is a violation of your Right to Privacy under Article 21. You can sue for defamation and harassment."
  },
  {
    question: "Can Bajaj Finance agents seize my vehicle at my home?",
    answer: "For vehicle loans, they can repossess the asset only after following the legal notice procedure. However, they cannot use force or 'musclemen'. Any forceful repossession without valid court orders or DM permission is illegal and can be reported as theft or criminal trespass."
  },
  {
    question: "What legal sections protect me against aggressive recovery?",
    answer: "Section 441 IPC (Criminal Trespass) if they enter without consent, Section 503 (Criminal Intimidation) for threats, and Section 506 for punishment for intimidation. The Supreme Court in Prakash Kaur vs ICICI Bank explicitly banned the use of goons for recovery."
  },
  {
    question: "Can I stop Bajaj Finance agents from visiting my office?",
    answer: "Yes. You can explicitly state in writing that visits to your workplace cause professional damage and you prefer communication via registered email or phone during business hours. Persistent office visits after such a request qualify as professional harassment."
  },
  {
    question: "How long does a legal shield from AMA take to work?",
    answer: "In most cases, once our formal legal representation is sent to Bajaj Finance and their recovery agency, the field visits stop within 24 to 48 hours. Banks prioritize legal compliance over aggressive collection once they know a lawyer is involved."
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
      "name": "Bajaj Finance Agent Visiting Home",
      "item": "https://www.amalegalsolutions.com/bajaj-finance-agent-visiting-home"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Bajaj Finance Agent Visiting Home? Know Your Rights & RBI Rules 2026",
  "description": "Are Bajaj Finance recovery agents visiting your home or office? Learn how to stop illegal field visits under RBI 2022 guidelines, the Bharatiya Nyaya Sanhita (BNS), and Supreme Court rulings.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "datePublished": "2024-03-24",
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

export const metadata = {
  title: "Bajaj Finance Agent Visiting Home? RBI Rules & Legal Rights",
  description: "Are Bajaj Finance agents visiting your home? Stop illegal visits under the August 2022 RBI circular, Bharatiya Nyaya Sanhita (BNS), and Supreme Court rulings.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/bajaj-finance-agent-visiting-home',
  },
  openGraph: {
    title: "Bajaj Finance Agent Visiting Home? RBI Rules & Legal Rights",
    description: "Are Bajaj Finance agents visiting your home? Stop illegal visits under the August 2022 RBI circular, Bharatiya Nyaya Sanhita (BNS), and Supreme Court rulings.",
    url: 'https://www.amalegalsolutions.com/bajaj-finance-agent-visiting-home',
    type: 'article',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/services/3.png',
        width: 1200,
        height: 630,
        alt: 'Bajaj Finance Agent Visiting Home Legal Defense',
      },
    ],
  },
};

export default function BajajFinanceAgentPage() {
  const tocSections = [
    { id: "emergency-action", title: "Emergency Action Plan" },
    { id: "introduction", title: "Introduction" },
    { id: "bajaj-finance-context", title: "Bajaj Finance Policy" },
    { id: "rbi-guidelines", title: "RBI Collection Rules (2022)" },
    { id: "agent-id-verification", title: "ID Verification" },
    { id: "illegal-tactics", title: "Illegal Tactics" },
    { id: "ipc-bns-protections", title: "BNS & IPC Protections" },
    { id: "right-to-privacy", title: "Right to Privacy (Art 21)" },
    { id: "workplace-harassment", title: "Workplace Visits" },
    { id: "handling-bajaj-agents", title: "How to Handle Agents" },
    { id: "landmark-judgments", title: "Supreme Court Rulings" },
    { id: "the-999-shield", title: "AMA Legal Shield ₹999" },
    { id: "escalation-matrix", title: "3-Tier Escalation Matrix" },
    { id: "cease-desist-template", title: "Legal Notice Template" },
    { id: "state-specific-laws", title: "State Variations" },
    { id: "case-studies", title: "Bajaj Case Studies" },
    { id: "success-stories", title: "Review Snippets" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/blog" },
    { label: "Bajaj Finance Recovery", href: "/bajaj-finance-agent-visiting-home" },
  ];

  const relatedPages = [
    { name: "Stop Recovery Agents", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
    { name: "Personal Loan Settlement", href: "/personal-loan-settlement" },
    { name: "Legal Notice to Bank", href: "/how-can-i-send-legal-notice" },
    { name: "Contact Legal Expert", href: "/contact" },
  ];

  const reviews = [
    {
      name: "Rohit Deshmukh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Bajaj agents were standing outside my flat and shouting every evening. AMA sent a legal notice and everything changed. The bank finally called me to apologize and offered a realistic EMI reduction plan.",
      date: "January 2025"
    },
    {
      name: "Anjali Gupta",
      location: "Lucknow, Uttar Pradesh",
      rating: 5,
      text: "Was getting 50+ calls a day from Bajaj and their agents were threatening my parents. After taking the ₹999 legal shield, the calls stopped completely within 24 hours. Professional and efficient service.",
      date: "February 2025"
    },
    {
      name: "Vikram Singh",
      location: "New Delhi",
      rating: 5,
      text: "The office visits from Bajaj Finance agents were going to cost me my job. AMA's intervention through the Ombudsman saved my career and my dignity. Highly thankful to the entire legal team!",
      date: "February 2025"
    }
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
              <span className="text-[#D2A02A]">Bajaj Finance Agent</span> Visiting Home?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
                Stop illegal field visits, harassment, and social shaming from Bajaj Finance recovery agents. Reclaim your dignity today.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Stop Bajaj Recovery Visits
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
                <article className="prose prose-lg max-w-none text-gray-800 space-y-12">
                  
                  {/* Emergency Doorstep Action Protocol */}
                  <section id="emergency-action" className="scroll-mt-32 bg-amber-50 p-6 md:p-10 rounded-2xl border-2 border-[#D2A02A] shadow-md not-prose">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-xl animate-pulse flex-shrink-0">!</span>
                      <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight m-0">
                        Emergency Doorstep Action Protocol: 5 Immediate Rules
                      </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 font-medium mb-6 leading-relaxed">
                      If a Bajaj Finance recovery agent is currently knocking at your door or standing in your building corridor, follow this instant legal self-defense protocol before answering:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs md:text-sm">
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                        <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">1</div>
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Keep Door Latched</h4>
                        <p className="text-gray-600 leading-relaxed">Never allow an agent inside your living room or bedrooms. Communicate only through a locked safety grille or door chain.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                        <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">2</div>
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Demand Physical DRA ID</h4>
                        <p className="text-gray-600 leading-relaxed">Demand their official IIBF/DRA identity card and account-specific Authorization Letter issued by Bajaj Finance Ltd. No ID = unauthorized trespasser.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                        <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">3</div>
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Check The Clock (8am-7pm)</h4>
                        <p className="text-gray-600 leading-relaxed">RBI mandates zero visits before 8:00 AM or after 7:00 PM. A knock at 7:05 PM is a per se regulatory violation of RBI Master Directions.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                        <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">4</div>
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Turn On Video Recording</h4>
                        <p className="text-gray-600 leading-relaxed">Hold up your smartphone and state: &quot;I am recording this interaction for the Banking Ombudsman and local police records.&quot; Aggressors back down immediately.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                        <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">5</div>
                        <h4 className="font-bold text-red-700 uppercase text-xs tracking-wider">Dial 112 If Refused</h4>
                        <p className="text-gray-600 leading-relaxed">If they shout, create a scene, or refuse to vacate your premises after being asked, call Police 112 immediately for Criminal Trespass under Section 329 BNS.</p>
                      </div>
                    </div>
                  </section>

                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-10 border-l-[12px] border-[#D2A02A] pl-8 uppercase">Dealing with Bajaj Finance Agent Home Visits</h2>
                    <div className="space-y-8 text-xl leading-relaxed">
                        <p>
                            Bajaj Finance is one of India&apos;s largest Non-Banking Financial Companies (NBFCs). With a massive customer base spanning personal loans, consumer durable loans, and business loans, their recovery network is equally vast. However, for many borrowers facing financial hardship, the &quot;Bajaj Finance agent visiting home&quot; experience often transitions from a routine collection visit to a source of immense psychological pressure and social embarrassment.
                        </p>
                        <p>
                            If you are being pursued by Bajaj Finance recovery agents, you must know that your financial default does not give them a license to harass you. Under Indian law, every borrower is protected by the Reserve Bank of India&apos;s (RBI) Fair Practices Code and constitutional rights. Whether it is an EMI card loan or a high-value personal loan, recovery procedures must remain civil, documented, and conducted strictly within daylight hours.
                        </p>
                        <p>
                            At AMA Legal Solutions, we bridge the gap between aggressive institutional collection and your statutory rights. We routinely witness recovery agents, often working through outsourced third-party agencies, employing coercive tactics that cross into criminal intimidation and trespass. This guide provides comprehensive, actionable legal defenses to permanently stop harassment and resolve your debts with complete legal safety.
                        </p>
                    </div>
                  </section>

                  <section id="bajaj-finance-context" className="scroll-mt-32 bg-gray-50 p-12 rounded-[40px] border border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-widest">Understanding Bajaj Finance&apos;s Recovery Infrastructure</h2>
                    <div className="space-y-6 italic text-gray-700 border-l-4 border-gray-200 pl-10">
                        <p>
                            Bajaj Finance operates on an automated &quot;Dunning&quot; system backed by a decentralized network of outsourced third-party recovery agencies. When an agent knocks on your door, they are rarely direct payroll employees of Bajaj Finance Ltd. Instead, they are typically field telecallers and agency executives incentivized by commissions on recoveries.
                        </p>
                        <p>
                            However, the doctrine of <strong>Vicarious Liability</strong> establishes that Bajaj Finance remains directly and jointly accountable for every illegality, threat, or breach committed by its collection partners. Under RBI regulations, the NBFC cannot disown the unlawful actions of its recovery agents. When AMA Legal Solutions issues a formal legal intervention, we do not waste time arguing with street agents; we hold the Principal Nodal Officer and Compliance Directorate legally liable.
                        </p>
                    </div>
                  </section>

                  <section id="rbi-guidelines" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight text-center">RBI Recovery Norms: Circular DOR.ORG.REC.65/2022-23</h2>
                    <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                        Under Reserve Bank of India Directive <strong>DOR.ORG.REC.65/21.04.158/2022-23 dated August 12, 2022</strong> (&quot;Outsourcing of Financial Services - Responsibilities of Regulated Entities Employing Recovery Agents&quot;), Bajaj Finance and its agents are bound by non-negotiable statutory mandates:
                    </p>
                    <div className="bg-[#1a202c] text-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-20 transform translate-x-10 -translate-y-10 rounded-full"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Strict 8 AM to 7 PM Hours</h4>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">Field visits and collection telephone calls are strictly permitted only between 08:00 AM and 07:00 PM. Any visit before 8 AM or after 7 PM constitutes a punishable breach of RBI directions.</p>
                            </div>
                            <div className="space-y-3 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Mandatory IIBF DRA Certification</h4>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">Every recovery representative must hold a valid Debt Recovery Agent (DRA) certificate from the Indian Institute of Banking &amp; Finance (IIBF) and have clean police verification records on file with the NBFC.</p>
                            </div>
                            <div className="space-y-3 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Total Ban on Third-Party Shaming</h4>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">Agents are prohibited from contacting neighbors, building guards, employers, or relatives whose names are not co-borrowers or guarantors on the loan agreement. Public disclosure violates Section 19(1) of the RBI Master Directions.</p>
                            </div>
                            <div className="space-y-3 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Right to Designate Place of Meeting</h4>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">The borrower has the legal right to request that all recovery discussions occur at a mutually convenient venue (such as the bank branch) rather than an unannounced home doorstep.</p>
                            </div>
                        </div>
                    </div>
                  </section>

                  <section id="agent-id-verification" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase border-b-4 border-gray-900 pb-4 inline-block">Mandatory ID &amp; Authorization Verification</h2>
                    <div className="space-y-8 text-lg">
                        <p>
                            Every time a recovery agent visits your residence, they are legally required under paragraph 2.1 of the RBI Outsourcing Directions to produce two non-negotiable documents before initiating any conversation:
                        </p>
                        <ul className="list-disc pl-10 space-y-4">
                            <li><strong>Physical Identity Card:</strong> Displaying the agent&apos;s full name, photograph, DRA accreditation number, and the registered agency name.</li>
                            <li><strong>Specific Authorization Letter:</strong> An official document signed by Bajaj Finance Ltd specifying the borrower&apos;s name, loan account number, and explicit authorization for that designated agency to discuss recovery.</li>
                        </ul>
                        <p>
                            If an individual arrives claiming to be from Bajaj Finance but refuses to present these two physical documents, they are legally considered an unauthorized impersonator and trespasser. Do not entertain them. Immediately capture video footage of their refusal and request security or police assistance.
                        </p>
                    </div>
                  </section>

                  <section id="illegal-tactics" className="scroll-mt-32 bg-red-50 p-12 rounded-[40px] border border-red-100">
                    <h2 className="text-3xl font-black text-red-900 mb-10 uppercase tracking-widest text-center">Illegal Tactics Used by Rogue Collection Agents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">The &quot;Police Jeep &amp; Havaldar&quot; Hoax</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Unscrupulous agents frequently WhatsApp photos of police jeeps or threaten to arrive with a police sub-inspector. In India, local police cannot act as collection agents for unsecured personal loans. Threatening police involvement is a criminal offense of criminal intimidation and criminal impersonation.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">The &quot;Home Lock &amp; Asset Seizure&quot; Threat</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Recovery agents possess zero authority to lock your residence, enter without permission, or seize household electronics, jewelry, or appliances for an unsecured loan. Any attempt to touch private movable assets constitutes criminal theft and burglary.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">Harassing Emergency Reference Contacts</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Calling your parents, siblings, or friends provided as emergency references to intimidate or defame you is strictly illegal. The reference list is solely for contact validation, not debt recovery enforcement.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">Counterfeit Court Notices on WhatsApp</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Sending PDF documents stamped &quot;Non-Bailable Arrest Warrant&quot; or &quot;Court Execution Order&quot; over WhatsApp is fraudulent. Genuine judicial process is issued exclusively through registered court bailiffs or certified Speed Post, never via instant messaging.
                            </p>
                        </div>
                    </div>
                  </section>

                  {/* Dual Criminal Protections: BNS 2023 & IPC 1860 */}
                  <section id="ipc-bns-protections" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">Criminal Law Defense: BNS 2023 &amp; IPC Arsenal</h2>
                    <p className="text-base text-gray-600 mb-8 leading-relaxed">
                        While RBI directives govern regulatory compliance, the criminal penal code provides immediate personal protection against rogue agents. Under India&apos;s new criminal framework—the <strong>Bharatiya Nyaya Sanhita (BNS) 2023</strong>, read alongside the legacy <strong>Indian Penal Code (IPC) 1860</strong>—recovery agent excesses are punishable criminal offenses:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border-l-4 border-red-600 bg-red-50/70 rounded-r-2xl space-y-2">
                            <div className="flex justify-between items-center">
                              <h5 className="font-black uppercase text-sm text-red-900">Criminal Trespass</h5>
                              <span className="text-xs font-bold bg-white px-2 py-1 rounded text-red-800 border border-red-200">Sec 329 BNS / Sec 441 IPC</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              Entering your private property, balcony, or apartment entryway without express permission—or refusing to depart immediately upon being requested to leave—is a cognizable offense.
                            </p>
                        </div>
                        <div className="p-6 border-l-4 border-red-600 bg-red-50/70 rounded-r-2xl space-y-2">
                            <div className="flex justify-between items-center">
                              <h5 className="font-black uppercase text-sm text-red-900">Criminal Intimidation</h5>
                              <span className="text-xs font-bold bg-white px-2 py-1 rounded text-red-800 border border-red-200">Sec 351 BNS / Sec 503, 506 IPC</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              Threatening injury to your person, reputation, or livelihood (e.g. &quot;we will shame you in your society or tell your employer&quot;) is punishable with up to 2 years rigorous imprisonment.
                            </p>
                        </div>
                        <div className="p-6 border-l-4 border-red-600 bg-red-50/70 rounded-r-2xl space-y-2">
                            <div className="flex justify-between items-center">
                              <h5 className="font-black uppercase text-sm text-red-900">Extortion &amp; Coercion</h5>
                              <span className="text-xs font-bold bg-white px-2 py-1 rounded text-red-800 border border-red-200">Sec 308 BNS / Sec 383, 384 IPC</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              Intentionally putting any person in fear of injury or social disgrace to extort cash, cheques, or property dishonestly constitutes criminal extortion.
                            </p>
                        </div>
                        <div className="p-6 border-l-4 border-red-600 bg-red-50/70 rounded-r-2xl space-y-2">
                            <div className="flex justify-between items-center">
                              <h5 className="font-black uppercase text-sm text-red-900">Criminal Defamation</h5>
                              <span className="text-xs font-bold bg-white px-2 py-1 rounded text-red-800 border border-red-200">Sec 356 BNS / Sec 499, 500 IPC</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              Publicly proclaiming a borrower to be a &quot;chor&quot; or &quot;fraud&quot; in apartment hallways, building lifts, or neighborhood WhatsApp groups warrants direct defamation complaints and substantial civil damages.
                            </p>
                        </div>
                    </div>
                  </section>

                  <section id="right-to-privacy" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase bg-[#D2A02A] text-white py-4 px-8 transform -skew-x-6 inline-block">Article 21: The Unbreakable Right to Privacy</h2>
                    <div className="space-y-8 text-lg bg-gray-50 p-12 rounded-[60px] border-2 border-dashed border-gray-200">
                        <p>
                            In the landmark <i>Justice K.S. Puttaswamy</i> case, the Supreme Court held that the Right to Privacy is a fundamental right under Article 21. Your financial status, your debt amount, and your repayment history are your private data. 
                        </p>
                        <p>
                            A Bajaj Finance recovery agent coming home and shouting to let neighbors know about your default is a "Constitutional Tort." They are violating your fundamental right to live with dignity. The bank cannot defend this by saying you owe them money. Debt is a civil matter; human dignity is a constitutional matter. We specialize in using these constitutional grounds to obtain protection orders for our clients.
                        </p>
                    </div>
                  </section>

                  <section id="workplace-harassment" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-widest text-center border-l-8 border-[#D2A02A] pl-10 text-left">The Professional Shield: Stopping Office Visits</h2>
                    <div className="space-y-8 text-lg leading-relaxed">
                        <p>
                            Perhaps the most damaging tactic is the workplace visit. Agents know that your job is your livelihood and the source of your repayment potential. By harassing you at your office, they jeopardize your current and future income-a self-defeating and illegal tactic.
                        </p>
                        <p>
                            If an agent visits your office, inform them through a registered email that: 1. You are available for meetings at the bank branch only. 2. Any further workplace visits will be treated as "Professional Sabotage" and "Defamation." AMA Legal Solutions can help you send this "Cease and Desist" formally to Bajaj Finance HR and Compliance, which usually puts an end to office harassment immediately.
                        </p>
                    </div>
                  </section>

                  <section id="handling-bajaj-agents" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-widest text-center">How to Handle Bajaj Agents: The 4-Step Script</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-8 border border-gray-100 shadow-lg text-center rounded-2xl">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-black">1</div>
                            <h6 className="font-black uppercase text-[10px] tracking-widest mb-4">Gate Protocol</h6>
                            <p className="text-[11px] text-gray-500">Do not let them inside your house. Talk to them through the gate or door window.</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 shadow-lg text-center rounded-2xl">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-black">2</div>
                            <h6 className="font-black uppercase text-[10px] tracking-widest mb-4">ID Verification</h6>
                            <p className="text-[11px] text-gray-500">Ask for ID and Authorization Letter. No ID = No Conversation. Period.</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 shadow-lg text-center rounded-2xl">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-black">3</div>
                            <h6 className="font-black uppercase text-[10px] tracking-widest mb-4">Record 📱</h6>
                            <p className="text-[11px] text-gray-500">Explicitly tell them: "I am recording this. Anything you say will be used in an RBI complaint."</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 shadow-lg text-center rounded-2xl">
                            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-black">4</div>
                            <h6 className="font-black uppercase text-[10px] tracking-widest mb-4">The Shield</h6>
                            <p className="text-[11px] text-gray-500">Say: "My lawyer at AMA Legal Solutions is handling my debt. Please talk to them."</p>
                        </div>
                    </div>
                  </section>

                  <section id="landmark-judgments" className="scroll-mt-32">
                    <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter">Supreme Court Mandates: The Power of Law</h2>
                    <div className="space-y-12">
                        <div className="bg-[#1a202c] text-white p-12 rounded-[50px] shadow-2xl">
                            <h4 className="text-[#D2A02A] font-black uppercase tracking-widest mb-8">Prakash Kaur vs. ICICI Bank (2007)</h4>
                            <p className="text-2xl font-light italic opacity-80 mb-8 leading-relaxed">
                                "In a country governed by the Rule of Law, recovery must be done in accordance with the law."
                            </p>
                            <p className="text-sm opacity-60 leading-loose">
                                This judgment changed everything. The Supreme Court established that banks are responsible for the 'tactics' of their agents. If a Bajaj agent uses force, they are in contempt of the spirit of this Supreme Court ruling. This case provides you with a direct legal shield against institutional bullying.
                            </p>
                        </div>
                    </div>
                  </section>

                  <section id="the-999-shield" className="scroll-mt-32 bg-[#D2A02A] text-white p-12 md:p-24 rounded-[80px] text-center space-y-12 shadow-2xl">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">The AMA Legal Shield for <span className="text-gray-900 italic">₹999</span></h2>
                    <div className="max-w-4xl mx-auto space-y-8 text-xl md:text-2xl font-light opacity-95 leading-relaxed">
                        <p>
                            Why handle a massive corporation like Bajaj Finance alone? Our ₹999 protection plan starts with a formal "Legal Representation" notice sent directly to Bajaj Finance's compliance team and the local recovery agency. 
                        </p>
                        <p>
                            Once they know a registered law firm is monitoring every call and visit, the harassment stops. We use the law to create a buffer between you and the bank, allowing you to breathe, think, and solve your debt problems without the fear of a knock on the door. Reclaim your home's peace today for the price of a dinner.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-center pt-10">
                        <Link href="/contact">
                            <button className="bg-gray-900 hover:bg-black text-white font-black py-6 px-16 uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-110">
                                Stop Bajaj Harassment ₹999
                            </button>
                        </Link>
                        <a href="tel:+918700343611" className="bg-white hover:bg-gray-100 text-[#D2A02A] font-black py-6 px-16 uppercase tracking-widest text-sm shadow-2xl transition-all">
                            Talk to Advocate
                        </a>
                    </div>
                  </section>

                  <section id="escalation-matrix" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-widest">The 3-Tier Escalation Matrix for Bajaj Finance</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-10 leading-relaxed">
                      If agents violate the 8 AM to 7 PM hours, make unannounced home visits after being warned, or threaten your family, escalate through this structured statutory hierarchy:
                    </p>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="text-4xl md:text-5xl font-black text-[#D2A02A] flex-shrink-0">01</div>
                            <div className="space-y-2">
                                <h6 className="font-bold uppercase text-gray-900 text-base">Tier 1: Bajaj Finance Principal Nodal Officer (PNO)</h6>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                  Submit a formal written complaint with audio/video evidence and call recordings to <a href="mailto:nodalofficer@bajajfinserv.in" className="text-[#D2A02A] font-bold underline">nodalofficer@bajajfinserv.in</a> or through the <a href="https://www.bajajfinserv.in/reach-us" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold underline">Bajaj Grievance Portal</a>. Under RBI Fair Practices Code, the NBFC has a mandatory 30-day window to resolve your complaint.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="text-4xl md:text-5xl font-black text-[#D2A02A] flex-shrink-0">02</div>
                            <div className="space-y-2">
                                <h6 className="font-bold uppercase text-gray-900 text-base">Tier 2: RBI Integrated Ombudsman (CMS Portal)</h6>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                  If Bajaj fails to resolve within 30 days or rejects your complaint, lodge a regulatory complaint on the <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold underline">RBI CMS Portal (cms.rbi.org.in)</a> or call RBI Helpline <strong>14448</strong>. The Ombudsman operates under the Reserve Bank - Integrated Ombudsman Scheme, 2021 and can penalize the lender and award monetary compensation for harassment.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="text-4xl md:text-5xl font-black text-[#D2A02A] flex-shrink-0">03</div>
                            <div className="space-y-2">
                                <h6 className="font-bold uppercase text-gray-900 text-base">Tier 3: Police Emergency (112) &amp; Cyber Crime Portal</h6>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                  For doorstep violence, forcible entry, or extortion, dial <strong>112</strong> immediately. For morphed images or unauthorized phone contact harvesting by recovery apps, lodge an official cyber complaint on the <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold underline">National Cyber Crime Reporting Portal (cybercrime.gov.in)</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                  </section>

                  {/* Cease and Desist Legal Notice Template */}
                  <section id="cease-desist-template" className="scroll-mt-32 bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                      Free Cease &amp; Desist Notice Template for Bajaj Finance
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed">
                      You can copy, fill in your account specifics, and send this formal notice via registered email to Bajaj Finance Compliance (<a href="mailto:grievanceredressalteam@bajajfinserv.in" className="text-[#D2A02A] font-bold">grievanceredressalteam@bajajfinserv.in</a>) to immediately halt unlawful field visits:
                    </p>
                    <div className="bg-[#1a202c] text-gray-200 p-6 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto border border-gray-700 shadow-inner">
                      <p className="text-[#D2A02A] font-bold mb-4">// FORMAL CEASE &amp; DESIST NOTICE UNDER RBI CIRCULAR DOR.ORG.REC.65/2022-23</p>
                      <p>To,</p>
                      <p>The Principal Nodal Officer &amp; Head of Compliance,</p>
                      <p>Bajaj Finance Limited,</p>
                      <p>Corporate Office: 4th Floor, Mantri Sterling, Pune-Ahmednagar Road, Pune - 411014.</p>
                      <br />
                      <p><strong>SUBJECT:</strong> FORMAL CEASE AND DESIST NOTICE REGARDING UNLAWFUL FIELD VISITS, HARASSMENT, AND BREACH OF PRIVACY UNDER RBI MASTER DIRECTIONS AND SECTIONS 329 &amp; 351 OF THE BHARATIYA NYAYA SANHITA (BNS), 2023.</p>
                      <br />
                      <p><strong>LOAN ACCOUNT NUMBER:</strong> [Insert Your Loan / EMI Card Number]</p>
                      <p><strong>BORROWER NAME:</strong> [Insert Your Full Name]</p>
                      <p><strong>REGISTERED ADDRESS:</strong> [Insert Your Residential Address]</p>
                      <br />
                      <p>Sir/Madam,</p>
                      <br />
                      <p>1. I am the borrower in the captioned loan account. Due to unforeseen financial distress [mention job loss, business downturn, or medical crisis], I have been unable to maintain regular EMIs.</p>
                      <p>2. Take notice that on [Insert Date &amp; Time], individual(s) claiming to represent Bajaj Finance visited my residence unannounced. They failed to show valid IIBF Debt Recovery Agent (DRA) certification and written loan authorization letters as mandated by RBI Master Circular DOR.ORG.REC.65/21.04.158/2022-23.</p>
                      <p>3. The aforementioned representatives attempted to cause public humiliation in my neighborhood and used threatening language, which constitutes offenses of Criminal Trespass (Section 329 BNS) and Criminal Intimidation (Section 351 BNS).</p>
                      <p>4. You are hereby called upon to immediately <strong>CEASE AND DESIST</strong> all unannounced visits to my residential and official premises. I hereby express my willingness to communicate solely in writing or at your designated branch office during official working hours.</p>
                      <p>5. Should any agent repeat these unlawful actions, I shall be constrained to initiate formal complaints before the Banking Ombudsman under the Reserve Bank - Integrated Ombudsman Scheme, 2021, and lodge a criminal FIR against Bajaj Finance Ltd and its recovery agency for vicarious criminal liability.</p>
                      <br />
                      <p>Yours faithfully,</p>
                      <p>[Your Full Name]</p>
                      <p>[Your Contact Phone &amp; Email]</p>
                    </div>
                  </section>

                  <section id="state-specific-laws" className="scroll-mt-32 text-gray-600 bg-gray-50 p-12 rounded-3xl">
                    <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase">State-Wise Nuances in Recovery</h2>
                    <p className="text-sm leading-relaxed mb-8">
                        Whether you are in Maharashtra, Delhi, Karnataka, or West Bengal, local police and high court sentiments vary. For example, the Bombay High Court has been extremely harsh on banks for using musclemen, often ordering heavy penalties. In Kerala, the High Court has explicitly ruled that no recovery activities can happen at the borrower's workplace. At AMA Legal Solutions, we tailor your response based on your local jurisdiction and state precedents.
                    </p>
                  </section>

                  <section id="case-studies" className="scroll-mt-32 bg-white p-12 rounded-[60px] border-2 border-gray-50 shadow-inner">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-widest text-center">Bajaj Finance Case Studies: How We Stopped the Visits</h2>
                    <div className="space-y-16">
                        <div className="bg-gray-50 p-10 rounded-3xl border-l-[10px] border-[#D2A02A]">
                            <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase">The Midnight Door-Bang (Pune, 2024)</h4>
                            <p className="text-sm text-gray-600 leading-loose italic">
                                A client with a Bajaj Finance Personal Loan of ₹5 lakhs faced agents at 10:30 PM. They were shouting and threatening his parents. We drafted a complaint quoting the 'Rule of Hours' and 'Vicarious Liability'. By the next morning, the agency was blacklisted by Bajaj Finance, and the bank offered a 'Moratorium' period to resolve the debt. Harassment stopped in less than 12 hours.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-3xl border-l-[10px] border-gray-900">
                            <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase">The Office Defamation Attempt (Delhi, 2024)</h4>
                            <p className="text-sm text-gray-600 leading-loose italic">
                                Bajaj agents visited a client's MNC office and spoke to HR. We filed a 'Writ Petition' for violation of privacy. The High Court issued an immediate stay order on field visits. Not only did the harassment stop, but the client was also able to negotiate a settlement at 40% of the principal due to the 'Trauma and Professional Damage' caused.
                            </p>
                        </div>
                    </div>
                  </section>

                  {/* Review Snippets Section */}
                  <section id="success-stories" className="scroll-mt-32">
                    <h2 className="text-xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Verified Review Snippets</h2>
                    <p className="text-xl text-gray-500 font-light mb-12 italic">Real success stories from Bajaj Finance borrowers we've protected.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {reviews.map((review, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-[32px] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
                          <div className="absolute top-6 right-8 text-gray-200 group-hover:text-[#D2A02A]/20 transition-colors">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 16.6569 20.6739 18 19.017 18H17.017L17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H9.01697C9.56925 4 10.0169 4.44772 10.0169 5V15C10.0169 16.6569 8.67383 18 7.01697 18H5.01697L5.01697 21H2.01697Z"></path></svg>
                          </div>
                          <div className="flex gap-1 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-[#D2A02A] text-lg">★</span>
                            ))}
                          </div>
                          <p className="text-gray-600 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
                          <div>
                            <h6 className="text-lg font-black text-gray-900">{review.name}</h6>
                            <div className="flex justify-between items-center text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
                              <span>{review.location}</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-4xl font-black text-gray-900 mb-12 uppercase tracking-[0.3em] text-center border-b-[10px] border-gray-900 pb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                      {faqs.map((faq, idx) => (
                        <div key={idx} className="space-y-3">
                          <h6 className="font-black text-gray-900 uppercase text-xs tracking-widest border-l-4 border-[#D2A02A] pl-4">{faq.question}</h6>
                          <p className="text-sm font-light text-gray-500 leading-relaxed italic">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </article>

                {/* Author Bio Box */}
                <aside className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center shadow-sm">
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
                      Founder &amp; Managing Partner, AMA Legal Solutions | Bar Council of Delhi &amp; Delhi High Court Bar Association
                    </p>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      Advocate Anuj Anand Malik is an authority on borrower rights defense, banking regulations, and debt dispute litigation. Having handled thousands of recovery harassment interventions and High Court writ petitions against unlawful NBFC collection practices, he safeguards clients against coercive doorstep visits and secures legally binding settlements.
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
                        Author Profile &amp; Credentials →
                      </Link>
                    </div>
                  </div>
                </aside>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 uppercase tracking-tighter">Secure Your Home's Peace Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Don't let the fear of a knock on the door break your spirit. Get professional legal protection against Bajaj Finance recovery harassment for just <span className="text-[#D2A02A] font-black">₹999</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                          Start Protection ₹999
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                          Lawyer Consultation
                        </button>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase">Urgent Bajaj Help</h3>
                  <p className="text-gray-600 mb-6 text-[11px] font-light leading-relaxed">
                    Under constant threat from field agents? Speak to our senior counsel for immediate cease and desist orders.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-black hover:bg-[#b88a22] transition-colors mb-4 uppercase text-[10px] tracking-widest">
                    Call counsel
                  </a>
                  <Link href="/contact" className="block w-full border border-gray-200 text-gray-900 text-center py-3 rounded-lg font-black hover:bg-gray-50 transition-colors uppercase text-[10px] tracking-widest">
                    Book Appointment
                  </Link>
                </div>

                {/* Success Stats */}
                <div className="p-6 bg-[#fff9e6] rounded-xl border border-[#D2A02A]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#D2A02A]">
                      <span className="text-[#D2A02A] font-black italic text-[10px]">AMA</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">4,200+ Bajaj Cases</span>
                  </div>
                  <p className="text-[9px] text-gray-500 font-light uppercase tracking-widest leading-relaxed">99.2% success in halting illegal home visits for Bajaj Finance borrowers in 2024.</p>
                </div>

                {/* Related Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Related Knowledge</h4>
                  <div className="space-y-4">
                    {relatedPages.map((page, idx) => (
                      <Link key={idx} href={page.href} className="group flex justify-between items-center py-2 border-b border-gray-50 last:border-0 hover:border-[#D2A02A] transition-all">
                        <span className="text-[10px] uppercase font-bold text-gray-700 group-hover:text-[#D2A02A] tracking-widest">{page.name}</span>
                        <span className="text-gray-300 group-hover:text-[#D2A02A] transform group-hover:translate-x-1 transition-all">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
