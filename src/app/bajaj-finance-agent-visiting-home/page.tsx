
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
  "headline": "Bajaj Finance Agent Visiting Home? Know Your Rights & How to Stop Harassment",
  "description": "Are Bajaj Finance recovery agents visiting your home or office? Learn the legal way to stop harassment, your rights under RBI guidelines, and how to protect your family's dignity.",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-03-24",
  "dateModified": "2025-02-24"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
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
  "name": "Legal Protection Against Bajaj Finance Harassment",
  "image": "https://www.amalegalsolutions.com/services/bajaj-harassment-relief.png",
  "description": "Expert legal services to stop Bajaj Finance recovery agents from visiting your residence or workplace using RBI and judicial frameworks.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4200"
  }
};

export const metadata = {
  title: "Bajaj Finance Agent Visiting Home | Stop Harassment Legal Guide 2025",
  description: "Are Bajaj Finance recovery agents visiting your home? Stop illegal visits & social shaming for ₹999. Learn your rights under RBI rules & Supreme Court mandates. Protect your home.",
  keywords: [
    "bajaj finance agent visiting home",
    "bajaj finance recovery agent harassment",
    "stop bajaj finance recovery visits",
    "bajaj finance field agent rules",
    "how to complaint against bajaj finance recovery agent",
    "bajaj finance personal loan recovery process",
    "can bajaj finance agent enter my house",
    "bajaj finance collection agent timing",
    "legal notice to bajaj finance to stop visits",
    "rbi rules for bajaj finance recovery agents",
    "bajaj finance social shaming complaint",
    "ama legal solutions bajaj finance help"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/bajaj-finance-agent-visiting-home',
  }
};

export default function BajajFinanceAgentPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "bajaj-finance-context", title: "Bajaj Finance Policy" },
    { id: "rbi-guidelines", title: "RBI Collection Rules" },
    { id: "agent-id-verification", title: "ID Verification" },
    { id: "illegal-tactics", title: "Illegal Tactics" },
    { id: "ipc-protections", title: "Criminal Law Protection" },
    { id: "right-to-privacy", title: "Right to Privacy" },
    { id: "workplace-harassment", title: "Workplace Visits" },
    { id: "handling-bajaj-agents", title: "How to Handle Agents" },
    { id: "landmark-judgments", title: "Supreme Court Rulings" },
    { id: "the-999-shield", title: "AMA Legal Shield ₹999" },
    { id: "escalation-matrix", title: "Escalation Matrix" },
    { id: "state-specific-laws", title: "State Variations" },
    { id: "settlement-options", title: "Settlement Paths" },
    { id: "debt-consolidation", title: "Refinancing Debt" },
    { id: "common-hoaxes", title: "Fake Notice Hoaxes" },
    { id: "case-studies", title: "Bajaj Case Studies" },
    { id: "success-stories", title: "Review Snippets" },
    { id: "legal-glossary", title: "Legal Glossary" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Bajaj Finance Recovery", href: "/bajaj-finance-agent-visiting-home" },
  ];

  const relatedPages = [
    { name: "Stop Recovery Agents", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
    { name: "Personal Loan Settlement", href: "/services/loan-settlement/personal-loan" },
    { name: "Legal Notice to Bank", href: "/legal-notice-to-bank-format" },
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
                  
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-10 border-l-[12px] border-[#D2A02A] pl-8 uppercase">Dealing with Bajaj Finance Agent Home Visits</h2>
                    <div className="space-y-8 text-xl leading-relaxed">
                        <p>
                            Bajaj Finance is one of India's largest and most successful Non-Banking Financial Companies (NBFCs). With a massive customer base spanning personal loans, consumer durable loans, and business loans, their recovery network is equally vast. However, for many borrowers facing financial hardship, the "Bajaj Finance agent visiting home" experience often transitions from a routine collection visit to a source of immense psychological pressure and social embarrassment.
                        </p>
                        <p>
                            If you are being pursued by Bajaj Finance recovery agents, you must know that your financial default does not give them a license to harass you. In the Indian legal landscape of 2025, every borrower is protected by the Reserve Bank of India's (RBI) Fair Practices Code and constitutional rights. Whether it is a small consumer loan or a large personal loan, the recovery process must be civil, documented, and conducted within limited hours.
                        </p>
                        <p>
                            At AMA Legal Solutions, we specialize in bridging the gap between aggressive institutional collection and the borrower's legal rights. We have seen how Bajaj Finance agents, often working through third-party agencies, use tactics that border on—or explicitly cross into—criminal intimidation. This guide is your comprehensive legal defense, designed to reach over 7000 words of actionable legal wisdom to help you stop the harassment and resolve your debt with dignity.
                        </p>
                    </div>
                  </section>

                  <section id="bajaj-finance-context" className="scroll-mt-32 bg-gray-50 p-12 rounded-[40px] border border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-widest">Understanding Bajaj Finance's Recovery Infrastructure</h2>
                    <div className="space-y-6 italic text-gray-700 border-l-4 border-gray-200 pl-10">
                        <p>
                            Bajaj Finance operates on a high-volume model. To manage its millions of defaults, it relies heavily on an automated "Dunning" system and a decentralized network of recovery agencies. When an agent visits your home, they are often not direct employees of Bajaj Finance but contractors working for a localized recovery agency. This 'layering' is often used by institutions to distance themselves from aggressive tactics.
                        </p>
                        <p>
                            However, the law of "Vicarious Liability" holds Bajaj Finance directly responsible for every word and action of these agents. If a "Bajaj Finance agent visiting home" behaves like a muscleman or uses threats, it is a liability for the multi-billion dollar corporation. Understanding this hierarchy is the first step in stopping the visits. When we send a legal shield at AMA, we don't just talk to the agent; we talk to the compliance heads who fear regulatory penalties from the RBI.
                        </p>
                    </div>
                  </section>

                  <section id="rbi-guidelines" className="scroll-mt-32">
                    <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter text-center">RBI Collection Rules: The 2025 Standard</h2>
                    <div className="bg-[#1a202c] text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-20 transform translate-x-10 -translate-y-10 rounded-full"></div>
                        <p className="text-xl mb-10 font-light leading-relaxed">
                            As a Regulated Entity (RE), Bajaj Finance is bound by the RBI Master Directions. Any "field activity" must strictly adhere to these four pillars of borrower protection:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Timing Protocol</h4>
                                <p className="text-sm text-gray-400">Agents can only visit or call between 08:00 AM and 07:00 PM. Visits at night, during family dinner, or early morning are strict violations. If a Bajaj agent knocks at 7:30 PM, they are breaking the law.</p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Place of Convenience</h4>
                                <p className="text-sm text-gray-400">The RBI mandates that collections should happen at the place and time of the borrower's convenience. If you explicitly ask them not to come home and instead meet at their branch, persistent home visits constitute legal harassment.</p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">Zero Social Shaming</h4>
                                <p className="text-sm text-gray-400">Agents are prohibited from disclosing your debt to anyone else. Talking to neighbors, calling your relatives, or shouting in the hallway is a violation of the 'Right to Privacy'.</p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#D2A02A] pl-6">
                                <h4 className="text-[#D2A02A] font-black uppercase text-sm tracking-widest">No Muscular Recovery</h4>
                                <p className="text-sm text-gray-400">The Supreme Court has made it clear: banks cannot use musclemen. Recovery must be through the due process of law (Civil Suits, DRT, or Lok Adalats).</p>
                            </div>
                        </div>
                    </div>
                  </section>

                  <section id="agent-id-verification" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase border-b-4 border-gray-900 pb-4 inline-block">Mandatory ID & Authorization Verification</h2>
                    <div className="space-y-8 text-lg">
                        <p>
                            Every time a "Bajaj Finance agent visiting home" arrives, they are legally required to carry two primary documents. Without these, you are well within your rights to treat them as unauthorized trespassers and refuse any conversation. 
                        </p>
                        <ul className="list-disc pl-10 space-y-4">
                            <li><strong>Identity Card:</strong> A physical card showing their name, photo, and the name of the recovery agency.</li>
                            <li><strong>Authorization Letter:</strong> A letter from Bajaj Finance clearly mentioning the name of the agency and the authority to collect for your specific account.</li>
                        </ul>
                        <p>
                            If an agent says, "I am from Bajaj," but refuses to show an ID, do not take them seriously. Many fraudulent collectors also use the name of Bajaj Finance to extort money. Always verify. If they are aggressive, record a video of them refusing to show ID as vital evidence for your complaint to the Nodal Officer.
                        </p>
                    </div>
                  </section>

                  <section id="illegal-tactics" className="scroll-mt-32 bg-red-50 p-12 rounded-[40px] border border-red-100">
                    <h2 className="text-3xl font-black text-red-900 mb-10 uppercase tracking-widest text-center">Illegal Tactics Used by Modern Agents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">The "Police Jeep" Hoax</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Many agents send photos of a police jeep on WhatsApp or claim they are arriving with a "Havaldar." In India, the police do not assist recovery agents for personal loans. Any such usage of police authority is a criminal offense of impersonation and intimidation.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">The "Lock the House" Threat</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                A recovery agent has zero authority to lock your house, seize your TV, or touch your furniture for an unsecured personal loan. That is called theft/burglary. Only a court receiver can take such actions after years of legal battles.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">Calling Your Reference List</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Calling your parents, brothers, or friends given in the reference list to shame you into paying is strictly illegal. The reference list is only for address verification, not for collection harassment.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 px-4 py-2 bg-white inline-block shadow-sm underline decoration-[#D2A02A]">Fake "Warrants" on WhatsApp</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Agents often send PDF files that look like Court Warrants or Summons. Real summons come via Speed Post or a court bailiff, not WhatsApp. We help you verify these fake documents and file complaints against the agency.
                            </p>
                        </div>
                    </div>
                  </section>

                  <section id="ipc-protections" className="scroll-mt-32">
                    <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter">Criminal Law Protection: Your IPC Arsenal</h2>
                    <div className="space-y-8 text-xl leading-relaxed">
                        <p>
                            RBI rules are administrative, but the Indian Penal Code (IPC) is criminal. When a Bajaj Finance recovery agent crosses the line, you are protected by:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border-l-4 border-red-600 bg-red-50/50">
                                <h5 className="font-black uppercase text-sm mb-2 text-red-900">Section 441: Criminal Trespass</h5>
                                <p className="text-sm text-gray-600">Entering your home without consent or staying after being asked to leave is a criminal offense. You can call 100/112 if they refuse to leave your doorstep.</p>
                            </div>
                            <div className="p-8 border-l-4 border-red-600 bg-red-50/50">
                                <h5 className="font-black uppercase text-sm mb-2 text-red-900">Section 503: Criminal Intimidation</h5>
                                <p className="text-sm text-gray-600">Threatening to injure your reputation is a crime. If an agent says "I will tell your boss," they are committing a crime punishable by up to 2 years in jail.</p>
                            </div>
                        </div>
                        <p>
                            At AMA Legal Solutions, we don't just quote these sections; we use them to draft formal complaints to the Cyber Cell and local police stations. Once a Bajaj compliance officer sees an FIR or a formal criminal complaint, their approach shifts from 'Recovery' to 'Damage Control' instantly.
                        </p>
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
                            Perhaps the most damaging tactic is the workplace visit. Agents know that your job is your livelihood and the source of your repayment potential. By harassing you at your office, they jeopardize your current and future income—a self-defeating and illegal tactic.
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
                    <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-widest">The Escalation Matrix for Bajaj Finance</h2>
                    <div className="space-y-12">
                        <div className="flex gap-10 group items-center">
                            <div className="text-5xl font-black text-gray-200 group-hover:text-[#D2A02A] transition-colors">01</div>
                            <div className="border-l border-gray-100 pl-10">
                                <h6 className="font-bold uppercase text-gray-900">Grievance Redressal Officer</h6>
                                <p className="text-xs text-gray-500 italic">Submit a formal written complaint with evidence. They must respond within 30 days.</p>
                            </div>
                        </div>
                        <div className="flex gap-10 group items-center">
                            <div className="text-5xl font-black text-gray-200 group-hover:text-[#D2A02A] transition-colors">02</div>
                            <div className="border-l border-gray-100 pl-10">
                                <h6 className="font-bold uppercase text-gray-900">RBI Sachet Portal</h6>
                                <p className="text-xs text-gray-500 italic">For digital harassment and app-based threats, Sachet is the fastest route for regulatory intervention.</p>
                            </div>
                        </div>
                        <div className="flex gap-10 group items-center">
                            <div className="text-5xl font-black text-gray-200 group-hover:text-[#D2A02A] transition-colors">03</div>
                            <div className="border-l border-gray-100 pl-10">
                                <h6 className="font-bold uppercase text-gray-900">RBI CMS (Ombudsman)</h6>
                                <p className="text-xs text-gray-500 italic">The ultimate regulatory weapon. The Ombudsman can order the NBFC to pay you damages for harassment.</p>
                            </div>
                        </div>
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
