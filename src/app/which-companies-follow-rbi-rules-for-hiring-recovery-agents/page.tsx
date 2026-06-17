import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "Which companies are required to follow RBI rules for recovery agents?",
    answer: "All Regulated Entities (REs) under the Reserve Bank of India, including commercial banks (such as Axis Bank and Kotak Mahindra Bank), NBFCs (like Bajaj Finserv), Co-operative banks, Asset Reconstruction Companies (ARCs), and All India Financial Institutions, are legally bound to follow RBI rules for hiring and managing recovery agents."
  },
  {
    question: "What are the allowed timings for recovery agents to call or visit a borrower?",
    answer: "According to the RBI/2022-23/108 circular, recovery agents are strictly permitted to contact or visit a borrower only between 8:00 AM and 7:00 PM. Any call or physical visit outside this window constitutes a regulatory violation."
  },
  {
    question: "Can a bank escape liability if its recovery agent harasses a borrower?",
    answer: "No, banks and NBFCs cannot escape liability. The RBI guidelines state that lenders are fully responsible for the actions of their outsourced service providers. If a recovery agent violates the code of conduct, the lender is held legally accountable."
  },
  {
    question: "What qualification is required for a recovery agent under RBI rules?",
    answer: "Under RBI guidelines, recovery agents must undergo a mandatory 100-hour or 50-hour debt recovery agent training course and clear the exam conducted by the Indian Institute of Banking and Finance to earn their IIBF certification, alongside passing a police verification check."
  },
  {
    question: "How can a borrower report a violation of RBI recovery agent guidelines?",
    answer: "A borrower can first submit a written complaint to the lender's Grievance Redressal Officer. If the lender fails to resolve the issue within 30 days, the borrower can escalate the matter online through the RBI's Complaint Management System (CMS) at cms.rbi.org.in."
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
      "name": "Which Companies Follow RBI Rules for Hiring Recovery Agents",
      "item": "https://www.amalegalsolutions.com/which-companies-follow-rbi-rules-for-hiring-recovery-agents"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Which Companies Follow RBI Rules for Hiring Recovery Agents?",
  "description": "Discover which commercial banks & NBFCs follow RBI rules for hiring recovery agents, how to spot illegal harassment, and protect your rights today.",
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
  "name": "Debt Collection Legal Assistance Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal help and negotiation support against debt recovery agent harassment.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2480"
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
        "name": "Surendra Rao"
      },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Imlitoshi Sangtam"
      },
      "reviewBody": "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services."
    }
  ]
};

export const metadata = {
  title: "Which Companies Follow RBI Rules for Hiring Recovery Agents?",
  description: "Understand which commercial banks & NBFCs must follow RBI rules for hiring recovery agents. Learn how to identify violations and protect your rights.",
  keywords: [
    "regulated entities",
    "hiring recovery agents",
    "fair practices code",
    "debt recovery agent training",
    "iibf certification",
    "recovery agent code of conduct",
    "harassment by recovery agents",
    "commercial banks and nbfcs",
    "rbi 2022 23 108 circular",
    "grievance redressal mechanism"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/which-companies-follow-rbi-rules-for-hiring-recovery-agents',
  },
  openGraph: {
    title: "Which Companies Follow RBI Rules for Hiring Recovery Agents?",
    description: "Understand which commercial banks & NBFCs must follow RBI rules for hiring recovery agents. Learn how to identify violations and protect your rights.",
    url: "https://www.amalegalsolutions.com/which-companies-follow-rbi-rules-for-hiring-recovery-agents",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Which Companies Follow RBI Rules for Hiring Recovery Agents?",
      },
    ],
  },
};

export default function WhichCompaniesFollowRbiRulesPage() {
  const tocSections = [
    { id: "direct-answer", title: "Quick Direct Answer" },
    { id: "legal-mandate", title: "Which Companies Must Follow RBI Rules?" },
    { id: "circular-directives", title: "Key Directives of RBI Circular 108" },
    { id: "lenders-compliance", title: "Real-World Bank & NBFC Compliance" },
    { id: "violations-remedies", title: "Actionable Steps Against Violations" },
    { id: "ama-connect-shield", title: "Shielding with AMA Connect App" },
    { id: "comparison-table", title: "Comparison Table of Directives" },
    { id: "testimonials-section", title: "Client Testimonials" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Which Companies Follow RBI Rules for Hiring Recovery Agents", href: "/which-companies-follow-rbi-rules-for-hiring-recovery-agents" },
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
              Which Companies Follow <span className="text-[#D2A02A]">RBI Rules</span> for Hiring Recovery Agents?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Discover the legal compliance requirements for banks, NBFCs, and third-party recovery agents in India.
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
                      All Reserve Bank of India (RBI) regulated financial entities-including commercial banks (e.g., Axis Bank, Kotak Mahindra Bank), Non-Banking Financial Companies (NBFCs like Bajaj Finance), co-operative banks, and Asset Reconstruction Companies (ARCs)-are legally mandated to strictly follow RBI rules and circulars when hiring and managing third-party recovery agents.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="legal-mandate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    The Legal Mandate: Which Companies Are Required to Follow RBI Recovery Agent Rules?
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In the Indian financial ecosystem, the deployment of third-party collection agencies has long been a source of friction between lenders and borrowers. To bring order and protect consumer rights, the Reserve Bank of India (RBI) has instituted strict regulatory protocols. Lenders frequently contract with third-party recovery agencies to optimize operations; however, the RBI has made it unequivocally clear that outsourcing does not constitute an abdication of responsibility. Under the law, the relationship between a lender and a recovery agency is that of principal and agent.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If an outsourced agency violates the <strong>recovery agent code of conduct</strong>, the parent bank or NBFC is held directly liable. Regulated entities must ensure that their third-party agents do not resort to intimidation, harassment, or unethical practices. The RBI holds the board of directors and senior management of the bank or NBFC responsible for establishing a robust due diligence process for <strong>hiring recovery agents</strong>, verifying their backgrounds (including police verification), and monitoring their field behavior.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Regulated Entities (REs) Under RBI Supervision
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A common misconception is that only public sector or large private banks are subject to the central bank's directives. In reality, the RBI's guidelines on outsourcing financial services and debt recovery are binding on a broad category of institutions collectively known as <strong>Regulated Entities (REs)</strong>. This list includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                    <li>All Scheduled <strong>commercial banks and NBFCs</strong>, encompassing public sector giants, private institutions (like Kotak Mahindra Bank and Axis Bank), foreign banks operating in India, Small Finance Banks (SFBs), and Regional Rural Banks (RRBs).</li>
                    <li>Non-Banking Financial Companies (NBFCs), including major retail lenders like Bajaj Finserv (Bajaj Finance), microfinance institutions, and housing finance companies.</li>
                    <li>Primary Urban Co-operative Banks, State Co-operative Banks, and District Central Co-operative Banks.</li>
                    <li>Asset Reconstruction Companies (ARCs) that purchase non-performing assets (NPAs) from traditional lenders.</li>
                    <li>All-India Financial Institutions (AIFIs) such as SIDBI, NABARD, NHB, and EXIM Bank.</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Any entity that is registered with, licensed by, or regulated under the aegis of the Reserve Bank of India is legally required to follow these exact guidelines. If a digital lending app or local financier claims exemption, it is either operating outside the regulatory framework or in direct violation of the law. You can read more about borrower rights in cases of debt recovery by visiting our comprehensive guide on <Link href="/can-recovery-agents-abuse-you-legally-india" className="text-[#D2A02A] hover:underline">legal limits of recovery agents in India</Link>.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="circular-directives" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Core Directives of RBI Circular RBI/2022-23/108
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Following an increase in cases of aggressive collection tactics, digital shaming, and agent misconduct, the RBI issued a decisive update via the <strong>rbi 2022 23 108 circular</strong> on August 12, 2022. This circular reinforced existing guidelines and closed loopholes that some lenders exploited to escape regulatory scrutiny.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Permissible Communication Hours
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Under these directives, recovery agents are bound by strict calling and visiting hours. They are permitted to contact or visit a borrower only between <strong>8:00 AM and 7:00 PM</strong>. Any communication-whether a phone call, WhatsApp text, or physical visit to a home or workplace-initiated before 8:00 AM or after 7:00 PM is a direct violation of the circular. Lenders cannot defend late-night calls by claiming the borrower was unreachable during the day; the window is absolute.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Absolute Banning of Intimidation, Harassment, and Social Media Abuse
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The RBI has established a zero-tolerance policy for <strong>harassment by recovery agents</strong>. The circular explicitly forbids:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                    <li><strong>Verbal or Physical Abuse:</strong> The use of threatening language, shouting, or physical intimidation during visits or phone calls.</li>
                    <li><strong>Privacy Intrusions:</strong> Calling, messaging, or visiting a borrower’s family members, friends, colleagues, or references. Lenders are only authorized to contact the primary borrower or guarantor.</li>
                    <li><strong>Digital Harassment:</strong> Sending inappropriate, threatening, or anonymous messages on mobile platforms (SMS, WhatsApp) or exposing a borrower's debt status on social media platforms.</li>
                    <li><strong>Persistent Harassment:</strong> Making repetitive, nuisance phone calls or sending automated threats designed to overwhelm the borrower.</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are facing harassment by third-party collectors, you should know that you have formal channels to seek relief. Read our step-by-step instructions on <Link href="/loan-recovery-agents-harassment-complaint" className="text-[#D2A02A] hover:underline">harassment by third-party collectors</Link> to understand your immediate options.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Mandatory IIBF Certification and Training Standards
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The RBI does not permit financial institutions to send untrained personnel to recover outstanding dues. Any individual employed as a recovery agent must undergo a structured <strong>debt recovery agent training</strong> program. This program consists of a mandatory 100-hour education course (reduced to 50 hours for graduates) covering legal rights, financial basics, customer psychology, and ethical behavior.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Following this training, agents must pass an examination conducted by the Indian Institute of Banking and Finance to earn their <strong>iibf certification</strong>. Regulated entities are prohibited from deploying any agent who does not hold a valid certification and a clean police clearance record.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="lenders-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Real-World Implementation: How Banks and NBFCs Operationalize RBI Guidelines
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To comply with the regulator, major Indian banks and NBFCs publish their recovery policies online. Understanding how these institutions structure their compliance helps borrowers spot deviations and defend their rights.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Corporate Compliance Frameworks: Axis Bank, Kotak Bank, and Bajaj Finserv
                  </h3>
                  <ul className="list-disc list-inside space-y-4 text-sm md:text-lg text-gray-700 mb-6">
                    <li>
                      <strong>Bajaj Finserv (Bajaj Finance):</strong> As a leading retail NBFC, Bajaj Finance publishes a clear Code of Conduct for Recovery Agents on its portal. They maintain a public list of authorized third-party recovery agencies and mandate that all agents carry a digital identity card and follow the RBI-mandated calling hours. However, field practices often differ, leading borrowers to search for ways to <Link href="/how-to-stop-bajaj-recovery-agent-harassment-instantly" className="text-[#D2A02A] hover:underline">stop collection agent harassment</Link> from Bajaj recovery agents.
                    </li>
                    <li>
                      <strong>Axis Bank:</strong> Axis Bank operates under a board-approved <strong>fair practices code</strong> that covers the recovery of dues. Their policy outlines that the bank will provide the borrower with details of the recovery agency assigned to their account prior to any field action.
                    </li>
                    <li>
                      <strong>Kotak Mahindra Bank:</strong> Kotak Bank’s recovery framework details its commitment to professional debt collection. They emphasize that their recovery agents must not enter a borrower’s property without permission, must maintain confidentiality, and must provide a formal receipt for any cash collected.
                    </li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Verifying Agent Credentials: The Borrower’s Shield
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When a recovery agent visits your home or workplace, you are not obligated to speak with them unless they prove their identity and authorization. Under RBI rules, you have the right to request:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                    <li>A valid employee identity card issued by the recovery agency, featuring the agent's photograph.</li>
                    <li>A formal authorization letter from the lending bank or NBFC, showing that this specific agency has been assigned to your loan account.</li>
                    <li>The agent’s <strong>iibf certification</strong> card.</li>
                    <li>A copy of the lender’s <strong>recovery agent code of conduct</strong>.</li>
                  </ol>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the agent fails to provide these documents, you have the right to refuse entry, stop the conversation, and report the encounter as an unauthorized visit by unidentified individuals.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="violations-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Legal Remedies and Actionable Rights Against Defaulter Harassment
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you face harassment by recovery agents, you do not have to suffer in silence. The legal framework provides multiple layers of protection to help you resolve the situation and report institutions that are violating guidelines set by the central bank.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Step 1: Leveraging the Lender's Internal Grievance Redressal Mechanism
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The first step in addressing harassment is filing a formal complaint with the lender.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                    <li><strong>Document the Violation:</strong> Record all calls, save screenshot evidence of threatening messages, note down the dates/times of calls outside permitted hours, and record video/audio of physical visits if possible.</li>
                    <li><strong>Submit a Written Complaint:</strong> Write directly to the Grievance Redressal Officer (GRO) of your bank or NBFC. Provide details of your loan account, describe the agent's behavior, and attach your evidence.</li>
                    <li><strong>Wait for Resolution:</strong> Under RBI rules, the lender has a maximum of 30 days to address your grievance, investigate the agency, and provide a resolution.</li>
                  </ol>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Step 2: Escalate to the RBI Ombudsman
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the bank or NBFC fails to resolve your complaint within 30 days, or if you are unsatisfied with their response, you can escalate the matter directly to the Reserve Bank of India. You can submit your complaint online by utilizing the <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-[#D2A02A] hover:underline">filing a recovery agent complaint online</Link> portal.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    On the RBI's Complaint Management System (CMS) website (cms.rbi.org.in), upload your call logs showing calls outside the 8:00 AM to 7:00 PM window, screenshots of harassment, and copies of your initial complaint to the bank’s GRO. The RBI Ombudsman has the authority to penalize banks, suspend recovery agencies, and award compensation to borrowers for mental harassment. If you need details on how to format this, check our guide on filing an <Link href="/rbi-guideline-violation-complaint" className="text-[#D2A02A] hover:underline">violating guidelines set by the central bank</Link>.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="ama-connect-shield" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Empowering Defaulters: The AMA Legal Solutions App & Professional Advocacy
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Navigating debt collection rules and documenting violations can be challenging when dealing with financial stress. To simplify this process, specialized legal tools and advocacy services are available.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Real-Time Protection with the AMA Connect App
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To address this challenge, <strong>AMA Legal Solutions</strong> developed the <strong>AMA Connect app</strong> (also known as the <strong>AMA Legal Solutions app</strong>). This mobile application serves as a dedicated digital assistant for borrowers facing recovery challenges, acting as your digital shield against recovery harassment.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The AMA Connect app enables users to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                    <li><strong>Log and Verify Calls:</strong> Record incoming collection calls and log call timings automatically to identify violations of the RBI's 8:00 AM to 7:00 PM window.</li>
                    <li><strong>Verify Agent Credentials:</strong> Search a registry of recovery agents to confirm if an individual is authorized, certified, and compliant with the <strong>fair practices code</strong>.</li>
                    <li><strong>Generate Legal Notices:</strong> Access automated legal notice templates designed to stop agent harassment, draft replies to bank recall notices, and file complaints with the RBI Ombudsman.</li>
                    <li><strong>Consult Expert Lawyers:</strong> Connect directly with experienced financial advocates to discuss debt restructuring, loan settlement strategies, and consumer court representations.</li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                    Professional Legal Consultation and Debt Resolution
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Instead of dealing with aggressive agent calls directly, you can leverage AMA Connect to route all legal communications through professional advocates, draft and send formal replies to bank legal notices, negotiate a lawful, affordable Debt Settlement directly with senior banking officials, and log, document, and report harassment violations directly to regulatory authorities. The AMA Legal Solutions App ensures that you are never left to fight large financial institutions alone, restoring your peace of mind while establishing a clear, legal path to financial recovery.
                  </p>
                </section>

                {/* Section 6 - Directives Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comparison Table of Directives</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] font-bold">Directive Domain</th>
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 font-bold">Allowed Practices (Legal Standards)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 font-bold">Prohibited Practices (Harassment Indicators)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Legal Reference / Authority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Calling & Visiting Hours</td>
                          <td className="p-4 text-gray-700">Contacts only between 8:00 AM and 7:00 PM.</td>
                          <td className="p-4 text-gray-700">Calls or visits before 8:00 AM, after 7:00 PM, or late-night calls.</td>
                          <td className="p-4 text-gray-700 italic">RBI August 12, 2022 Circular</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Privacy Boundaries</td>
                          <td className="p-4 text-gray-700">Contacting only the primary borrower, co-borrower, or guarantor.</td>
                          <td className="p-4 text-gray-700">Calling family, friends, references, or neighbors to discuss the debt.</td>
                          <td className="p-4 text-gray-700 italic">RBI Code of Conduct</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Agent Credentials</td>
                          <td className="p-4 text-gray-700">Must carry valid employee ID, bank authorization letter, and IIBF certificate.</td>
                          <td className="p-4 text-gray-700">Deploying agents without ID, authorization letters, or training certificates.</td>
                          <td className="p-4 text-gray-700 italic">RBI Outsourcing Guidelines</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Communication Tone</td>
                          <td className="p-4 text-gray-700">Professional, polite, and clear communication regarding outstanding dues.</td>
                          <td className="p-4 text-gray-700">Using abusive language, shouting, physical intimidation, or threats.</td>
                          <td className="p-4 text-gray-700 italic">RBI Fair Practices Code</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Due Diligence</td>
                          <td className="p-4 text-gray-700">Lenders must perform pre-employment police verification for all recovery agents.</td>
                          <td className="p-4 text-gray-700">Hiring individuals with criminal records or without background checks.</td>
                          <td className="p-4 text-gray-700 italic">RBI Board-approved policies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 7 - Testimonials */}
                <section id="testimonials-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Client Testimonials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                      </p>
                      <p className="font-bold text-gray-900 text-right">- Surendra Rao</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would recommend their services."
                      </p>
                      <p className="font-bold text-gray-900 text-right">- Imlitoshi Sangtam</p>
                    </div>
                  </div>
                </section>

                {/* Section 8 - FAQs */}
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
                      <span className="mr-2">›</span> Banking & Finance Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Arbitration Services
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
