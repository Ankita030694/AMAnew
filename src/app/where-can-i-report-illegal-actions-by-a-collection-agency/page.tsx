import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "What illegal actions by a collection agency can I report?",
    answer: "You can report actions such as calling outside the permitted hours of 8:00 AM to 7:00 PM, using abusive or vulgar language, making physical threats, trespassing on your property, contacting family members or references to expose your debt, and threatening you with arrest or criminal prosecution for a civil debt default."
  },
  {
    question: "Where can I report recovery agent harassment online?",
    answer: "You can file an online complaint through the Reserve Bank of India (RBI) Complaint Management System (CMS) portal at cms.rbi.org.in, or register a consumer grievance on the National Consumer Helpline website at consumerhelpline.gov.in."
  },
  {
    question: "Can a collection agency call my office or family members?",
    answer: "No. Under RBI's strict guidelines and customer privacy laws, collection agencies are prohibited from contacting your relatives, colleagues, neighbors, or employer. They cannot disclose your debt details or use third parties to exert social pressure."
  },
  {
    question: "How do I file a police complaint against a recovery agent?",
    answer: "If a recovery agent threatens physical harm, enters your home without permission, or locks your property, visit your local police station and file a First Information Report (FIR) for criminal intimidation, trespass, or extortion. For digital harassment, submit a complaint at cybercrime.gov.in."
  },
  {
    question: "What is the penalty if a bank's recovery agent violates RBI rules?",
    answer: "The RBI can impose significant financial penalties on the lending bank or NBFC, order them to pay compensation to the borrower for harassment, and in severe or repetitive cases, ban the institution from employing recovery agents in specific regions."
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
      "name": "Where can I report illegal actions by a collection agency?",
      "item": "https://www.amalegalsolutions.com/where-can-i-report-illegal-actions-by-a-collection-agency"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where Can I Report Illegal Actions by a Collection Agency?",
  "description": "Comprehensive expert guide on reporting recovery agent harassment, filing complaints with RBI CMS, NCH, and police, and legal borrower rights in India.",
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
  "datePublished": "2026-06-16",
  "dateModified": "2026-06-16"
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
  "name": "Debt Recovery Agent Harassment Legal Support",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal assistance to stop recovery agent harassment, file complaints, and settle outstanding banking loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1790"
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
        "name": "Ganesh Pawar"
      },
      "reviewBody": "I approached AMA Legal Solution during a challenging time, and I must say—it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Surendra Rao"
      },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    }
  ]
};

export const metadata = {
  title: "Where to Report Collection Agency Harassment in India",
  description: "Face recovery agent harassment? Learn exactly where and how to report illegal collection agency actions using RBI CMS, NCH, and legal solutions.",
  keywords: [
    "rbi guidelines for debt collection",
    "Reserve Bank of India (RBI)",
    "Banking Ombudsman",
    "Complaint Management System (CMS)",
    "Grievance Redressal Officer (GRO)",
    "debt recovery agents",
    "No Due Certificate (NDC)",
    "Integrated Ombudsman Scheme",
    "AMA Connect app",
    "Principal Nodal Officer"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/where-can-i-report-illegal-actions-by-a-collection-agency',
  },
  openGraph: {
    title: "Where to Report Collection Agency Harassment in India",
    description: "Face recovery agent harassment? Learn exactly where and how to report illegal collection agency actions using RBI CMS, NCH, and legal solutions.",
    url: "https://www.amalegalsolutions.com/where-can-i-report-illegal-actions-by-a-collection-agency",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Where can I report illegal actions by a collection agency?",
      },
    ],
  },
};

export default function ReportIllegalActionsPage() {
  const tocSections = [
    { id: "direct-answer", title: "Quick Direct Answer" },
    { id: "legal-rights", title: "Legal Rights Against Harassment" },
    { id: "rbi-circular", title: "The August 2022 RBI Circular" },
    { id: "supreme-court", title: "Landmark Supreme Court Rulings" },
    { id: "reporting-hierarchy", title: "Step-by-Step Reporting Hierarchy" },
    { id: "evidence-checklist", title: "How to Build an Evidence Package" },
    { id: "ama-shield", title: "Your Shield: AMA Connect App" },
    { id: "escalation-table", title: "Escalation Matrix Table" },
    { id: "client-testimonials", title: "Client Testimonials" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Where can I report illegal actions by a collection agency?", href: "/where-can-i-report-illegal-actions-by-a-collection-agency" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10 max-w-5xl mx-auto">
              Where Can I Report <span className="text-[#D2A02A]">Illegal Actions</span> by a Collection Agency?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive regulatory and legal guide to reporting debt collector harassment to bank Nodal Officers, the RBI CMS portal, consumer protection agencies, and law enforcement.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Expert Legal Protection
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto"/>
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto"/>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - Desktop TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Direct Answer Section */}
                <section id="direct-answer" className="scroll-mt-32 border-b pb-6 md:pb-10">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Quick Direct Answer</h2>
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-4 md:p-6 rounded-r-lg">
                    <p className="text-sm md:text-lg leading-relaxed text-gray-900 font-semibold">
                      To report illegal actions by a collection agency in India, document all communications, then submit a written complaint to the lender's Grievance Redressal Officer. If unresolved within 30 days, escalate to the Reserve Bank of India (RBI) via the Complaint Management System (CMS) portal or contact the National Consumer Helpline at 1915.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Your Legal Protections Against Debt Collection Harassment</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Debt recovery is a legitimate business process, but when a third-party debt collection agency resorts to threats, public shaming, verbal abuse, cyber-harassment, or calling outside of business hours, they cross the line into criminal misconduct. The Reserve Bank of India (RBI) maintains strict regulations governing how financial institutions and their recovery agents interact with borrowers. Knowing your rights and navigating the correct reporting hierarchy is essential to protect your dignity and secure your financial peace.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Many borrowers believe that defaulting on a personal loan, credit card, or digital loan strips them of their civil rights. This is a critical misconception. In India, a loan default is a breach of contract—a civil dispute, not a criminal offense. Consequently, lenders and their representatives have no legal authority to treat borrowers like criminals, violate their privacy, or subject them to physical or mental abuse.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">The RBI Code of Conduct for Recovery Agents</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The central bank mandates a strict code of conduct that every regulated bank and Non-Banking Financial Company (NBFC) must enforce. Under these directives, agents are strictly forbidden from engaging in intimidation, harassment, or physical coercion. Verbal abuse, shouting, or using vulgar language during phone calls or home visits constitutes a direct violation of these regulatory mandates. Lenders are held vicariously liable for the actions of their recovery agents, meaning they cannot escape accountability by blaming the agency they hired.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Permitted Hours and Contact Protocols</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    One of the most common complaints is receiving threatening calls late at night or early in the morning. RBI guidelines draw a clear line: recovery agents may only contact or visit a borrower between 8:00 AM and 7:00 PM. Calls placed outside of this specific window are illegal. Furthermore, agents must introduce themselves clearly, state the bank or NBFC they represent, and provide their employee identification during every single interaction.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Privacy Protection and Third-Party Harassment Rules</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Debt collection agencies often try to bypass the borrower by contacting family members, neighbors, colleagues, or employers to exert social pressure. This tactic is entirely illegal under Indian law. Lenders and recovery agents are bound by customer confidentiality and data privacy regulations. They cannot disclose details of your outstanding dues or default to any third party. Any attempt to contact your workplace, publish your name in public spaces, or send threatening messages to your references constitutes a severe breach of privacy.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="rbi-circular" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The August 2022 RBI Circular: The Definitive Regulatory Shield</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    On August 12, 2022, the RBI issued a landmark circular titled <strong>&quot;Outsourcing of Financial Services – Responsibilities of Regulated Entities Employing Recovery Agents&quot; (Reference: RBI/2022-23/108, DOR.ORG.REC.65/21.04.158/2022-23)</strong>. This directive was created to address rising instances of harsh debt collection methods that led to severe mental stress, public humiliation, and in tragic instances, borrower suicides.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The circular places the ultimate responsibility for the behavior of recovery agents squarely on the shoulders of the hiring Regulated Entities (REs), which include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li>All Commercial Banks (including Small Finance Banks, Local Area Banks, and Regional Rural Banks)</li>
                    <li>All NBFCs (including digital lending platforms and housing finance companies)</li>
                    <li>Primary (Urban) Co-operative Banks and District Central Co-operative Banks</li>
                    <li>Asset Reconstruction Companies (ARCs)</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The RBI explicitly warned that any violation of its guidelines would attract severe regulatory action, including massive financial penalties and bans on employing recovery agents in specific geographic areas. The circular outlines a zero-tolerance policy for physical or verbal abuse, invasion of privacy, sending inappropriate text or WhatsApp messages, making anonymous calls, or persistently calling before 8:00 AM or after 7:00 PM.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="supreme-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Landmark Supreme Court Rulings Condemning Recovery Agent Intimidation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The Indian judiciary has repeatedly condemned the use of &quot;musclemen&quot; and strong-arm tactics by financial institutions. If you are preparing a legal notice or complaint, citing these landmark Supreme Court cases adds significant authority to your argument.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">1. ICICI Bank Ltd. vs. Prakash Kaur and Others (2007)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In this case, the Supreme Court of India took severe objection to banks hiring private recovery agents who resorted to force, intimidation, and high-handedness to repossess vehicles from defaulting borrowers. The Court ruled that banks cannot employ &quot;musclemen&quot; or recovery agents to take physical possession of vehicles or properties without following the due process of law. Recovery must be carried out under the rule of law. A resort to extra-constitutional or unlawful means of recovery is a direct violation of a citizen's right to life and liberty under Article 21 of the Constitution.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">2. ICICI Bank vs. Shanti Devi Sharma and Others (2008)</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    This tragic case involved the suicide of a borrower who was repeatedly harassed, humiliated, and threatened in public by recovery agents. The Supreme Court dismissed the bank's argument that it was not responsible for the actions of independent contractors, establishing that lenders are vicariously liable for the actions of their recovery agents. The use of force, intimidation, or public humiliation by recovery agents is a flagrant violation of law. Financial institutions must ensure their recovery processes are humane and respect the basic human rights of borrowers.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="reporting-hierarchy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Reporting Hierarchy for Illegal Collection Actions</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When confronting illegal actions by a collection agency, you must navigate the reporting channels systematically. This structured progression ensures your case is documented and creates a paper trail that regulatory authorities can act upon.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Phase 1: Internal Grievance Redressal (Lender Level)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Your initial step must always be to file a formal complaint directly with the creditor. Approach the bank or NBFC that issued the loan. Every regulated institution is legally required to establish an internal grievance redressal mechanism.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Find the contact details of the bank or NBFC's Grievance Redressal Officer (GRO) on their official website. Draft a formal email or registered letter outlining your loan account details, the timeline of harassment, names of the agents, and specific violations. If the GRO fails to respond within 15 days, or if their response is dismissive, escalate your complaint to the bank’s Principal Nodal Officer (PNO). Under RBI mandates, lenders have a maximum of 30 days to resolve customer grievances.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Phase 2: The Reserve Bank of India (RBI) Complaint Management System (CMS)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the bank fails to provide a satisfactory resolution within 30 days of your initial complaint, or if they reject your complaint entirely, you have the legal right to escalate to the Banking Ombudsman.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The RBI operates a centralized, online Complaint Management System (CMS) at <Link href="https://cms.rbi.org.in" target="_blank" className="text-[#D2A02A] hover:underline font-semibold">cms.rbi.org.in</Link>. Log in to the portal, click &quot;File a Complaint&quot;, select the bank or NBFC, detail the illegal recovery practices under the &quot;harassment/coercive tactics&quot; sub-category, and upload your documented evidence. The Ombudsman acts as an independent arbitrator and can direct the bank to pay compensation up to ₹20 Lakhs for mental harassment and legal costs.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Phase 3: National Consumer Helpline (NCH) and Consumer Courts</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the financial dispute involves a clear deficiency in service or an unfair trade practice, you can seek remedy through consumer protection channels:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li><strong>National Consumer Helpline:</strong> Register a complaint by calling the toll-free number <strong>1915</strong>, sending a WhatsApp message to <strong>8800001915</strong>, or filing online at <strong>consumerhelpline.gov.in</strong>.</li>
                    <li><strong>Consumer Disputes Redressal Commission:</strong> File a formal case online through the <strong>e-Daakhil portal</strong> (edaakhil.nic.in) under the Consumer Protection Act, 2019. The court can penalize the lender for deficiency in service and award damages.</li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Phase 4: Law Enforcement and Police Complaints (FIRs)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When collection agencies cross the line from regulatory violations into criminal offenses (such as physical trespass, assault, extortion, or threats of violence), you must engage law enforcement.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Draft a written complaint to the Station House Officer (SHO) of your local police station, citing relevant sections of the <strong>Bharatiya Nyaya Sanhita (BNS)</strong> / Indian Penal Code (IPC):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li><strong>Criminal Intimidation:</strong> Section 351 BNS (previously Section 503/506 IPC) for threats of harm.</li>
                    <li><strong>Extortion:</strong> Section 308 BNS (previously Section 383/384 IPC) for extracting money through fear.</li>
                    <li><strong>Criminal Trespass:</strong> Section 329 BNS (previously Section 441/447 IPC) for entering your property without permission.</li>
                    <li><strong>Defamation &amp; Public Shaming:</strong> Section 356 BNS (previously Section 499/500 IPC) for defaming you to references or neighbors.</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Obtain a stamped copy of the complaint or file a First Information Report (FIR). For digital harassment (such as morphing photos or contacts hacking by instant loan apps), register a complaint online at <strong>cybercrime.gov.in</strong> or call the national helpline at <strong>1930</strong>.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Build an Irrefutable Evidence Package</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A complaint is only as strong as the evidence supporting it. Regulators and police require concrete proof before they can take action against a bank or NBFC. Document everything systematically:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li><strong>Call Logs:</strong> Capture screenshots of call history, highlighting calls received before 8:00 AM or after 7:00 PM.</li>
                    <li><strong>Audio Recordings:</strong> Record conversations with agents to capture abusive language, shouting, or physical threats.</li>
                    <li><strong>Digital Messages:</strong> Save screenshots of SMS, WhatsApp, and social media messages containing threats or vulgar remarks. Do not delete the threads.</li>
                    <li><strong>Physical Visit Evidence:</strong> Record video or voice of agents visiting your home. Ask for their official employee ID and authorization letter from the lender. Save CCTV footage if they create a public scene.</li>
                  </ol>
                </section>

                {/* Section 6 */}
                <section id="ama-shield" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How AMA Connect and AMA Legal Solutions Protect Your Rights</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Dealing with aggressive recovery agents while trying to manage financial stress can feel overwhelming. That is why having dedicated legal advocates on your side is critical.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">AMA Connect App: Automated Spam Blocking &amp; Legal Escalation</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>AMA Connect</strong> app (also known as the <strong>AMA Legal Solutions</strong> application) is designed specifically to protect borrowers from debt collection harassment. The app acts as an active digital shield. Once installed, it automatically identifies and blocks known recovery agent numbers, instantly filtering out spam.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Moreover, AMA Connect features a direct legal routing system. When a recovery agent calls, you can route the call directly to the app’s legal helpline. This puts the agent in direct contact with legal professionals who understand the law, forcing them to cease harassment and speak to your representatives.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Direct Legal Defense and Loan Settlement Support</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Beyond blocking calls, the legal experts at AMA Legal Solutions provide end-to-end representation. They issue formal legal replies to bank demand notices, represent you in discussions, and draft complaints to the RBI and police. If your goal is to settle your unsecured debt, their legal associates negotiate directly with the bank’s Nodal Officers to secure a fair, structured, and legally binding settlement, allowing you to rebuild your financial future in peace.
                  </p>
                </section>

                {/* Section 7 - Table */}
                <section id="escalation-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Critical Action Steps Summary Table</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] font-bold">Step</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Reporting Channel / Authority</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Primary Purpose</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Required Evidence</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Expected Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">1</td>
                          <td className="p-4 text-gray-700"><strong>Lender Grievance Redressal</strong> (GRO/Nodal Officer)</td>
                          <td className="p-4 text-gray-700">First escalation; mandatory under RBI guidelines to allow internal bank review.</td>
                          <td className="p-4 text-gray-700">Written complaint with call logs, recordings, and dates.</td>
                          <td className="p-4 text-gray-700">Up to 30 Days</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">2</td>
                          <td className="p-4 text-gray-700"><strong>RBI CMS Portal</strong> (cms.rbi.org.in)</td>
                          <td className="p-4 text-gray-700">Regulator escalation; holds the bank accountable for systemic code violations.</td>
                          <td className="p-4 text-gray-700">Complaint copy to bank, proof of 30-day non-resolution, audio recordings.</td>
                          <td className="p-4 text-gray-700">30 Days</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">3</td>
                          <td className="p-4 text-gray-700"><strong>Banking Ombudsman</strong> (Integrated Scheme)</td>
                          <td className="p-4 text-gray-700">Arbitration of dispute; seeks compensation for harassment and mental agony.</td>
                          <td className="p-4 text-gray-700">Full transaction history, communication logs, copy of RBI CMS filing.</td>
                          <td className="p-4 text-gray-700">30 to 45 Days</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">4</td>
                          <td className="p-4 text-gray-700"><strong>National Consumer Helpline</strong> (NCH - 1915)</td>
                          <td className="p-4 text-gray-700">Pre-litigation consumer grievance filing to prompt fast corporate reviews.</td>
                          <td className="p-4 text-gray-700">Loan details, agency name, harassment timestamps.</td>
                          <td className="p-4 text-gray-700">15 to 30 Days</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">5</td>
                          <td className="p-4 text-gray-700"><strong>Police Station / Cyber Cell</strong> (cybercrime.gov.in / 1930)</td>
                          <td className="p-4 text-gray-700">Filing an FIR for criminal intimidation, physical trespass, extortion, or morphing.</td>
                          <td className="p-4 text-gray-700">Physical threat recordings, WhatsApp chat screenshots, CCTV footage.</td>
                          <td className="p-4 text-gray-700">Immediate (FIR registration)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 8 - Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Voices of Trust: Client Testimonials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        &quot;I approached AMA Legal Solution during a challenging time, and I must say—it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-right">— Ganesh Pawar</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        &quot;Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-right">— Samrat Basu</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        &quot;I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-right">— Surendra Rao</p>
                    </div>
                  </div>
                </section>

                {/* Section 9 - FAQs */}
                <section id="faqs-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Assert Your Legal Rights Against Recovery Harassment</h2>
                    <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not let banking recovery agents intimidate you. Get structured legal support, stop the harassment, and negotiate a clean debt settlement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Desktop Quick Info */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Legal Support?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Connect immediately with expert loan settlement attorneys who specialize in protecting borrowers from abusive banking recovery agents.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Dial Now: +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Request Secure Callback
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Legal Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Swift Loan Settlement
                  </Link>
                  </li>
                  <li>
                    <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Banking &amp; Finance Law
                  </Link>
                  </li>
                  <li>
                    <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Arbitration Services
                  </Link>
                  </li>
                  <li>
                    <Link href="/can-recovery-agents-abuse-you-legally-india" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Recovery Agents Legality
                  </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil-score" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> CIBIL Score Impact
                  </Link>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Official Application</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
