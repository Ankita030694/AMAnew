import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "What should I do if a recovery agent calls me outside designated hours?",
    answer: "Under RBI regulations, recovery professionals can only contact you between 8:00 AM and 7:00 PM. If they call outside this window, immediately record the call, take a screenshot of the call log, and file a complaint with the bank's Grievance Redressal Officer."
  },
  {
    question: "Is the bank liable for the abusive behavior of its recovery agents?",
    answer: "Yes, banks and NBFCs are vicariously liable for the conduct of the outsourced debt recovery agents they hire. The Reserve Bank of India holds the lending institution accountable for any violations of collection guidelines."
  },
  {
    question: "How do I file a complaint on the RBI CMS portal?",
    answer: "Visit cms.rbi.org.in, click 'File a Complaint', select your financial institution, provide details of your initial grievance filed with the bank, and upload your documented evidence (such as call recordings and chat history)."
  },
  {
    question: "When can I file a police complaint against a recovery professional?",
    answer: "You can file a police complaint or First Information Report (FIR) if a recovery agent threatens physical violence, enters your home without permission, uses force, or sends forged legal notices."
  },
  {
    question: "How does the AMA Connect app help in stopping recovery agent harassment?",
    answer: "The AMA Connect app helps you build an evidence vault, generates automated notice replies to bank notices, creates pre-formatted complaints for the GRO and RBI Ombudsman, and connects you directly to experienced legal professionals."
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
      "name": "How to report harassment by a recovery professional to a banking authority?",
      "item": "https://www.amalegalsolutions.com/how-to-report-harassment-by-a-recovery-professional-to-a-banking-authority"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to report harassment by a recovery professional to a banking authority?",
  "description": "Comprehensive expert guide on reporting recovery agent harassment to the RBI CMS portal, complaining to the bank's GRO, and legal borrower rights.",
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
    }
  ]
};

export const metadata = {
  title: "Report Recovery Agent Harassment: Step-by-Step RBI Guide",
  description: "Facing recovery agent harassment? Learn how to document evidence, complain to your bank's GRO, and escalate to the RBI CMS portal for quick relief.",
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
    canonical: 'https://www.amalegalsolutions.com/how-to-report-harassment-by-a-recovery-professional-to-a-banking-authority',
  },
  openGraph: {
    title: "Report Recovery Agent Harassment: Step-by-Step RBI Guide",
    description: "Facing recovery agent harassment? Learn how to document evidence, complain to your bank's GRO, and escalate to the RBI CMS portal for quick relief.",
    url: "https://www.amalegalsolutions.com/how-to-report-harassment-by-a-recovery-professional-to-a-banking-authority",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Report Harassment by a Recovery Professional to a Banking Authority",
      },
    ],
  },
};

export default function ReportRecoveryHarassmentPage() {
  const tocSections = [
    { id: "direct-answer", title: "Quick Direct Answer" },
    { id: "legal-rights", title: "Legal Rights Against Harassment" },
    { id: "escalation-steps", title: "Step-by-Step Escalation" },
    { id: "police-complaint", title: "Filing a Police Complaint" },
    { id: "ama-connect", title: "Your Shield: AMA Connect App" },
    { id: "escalation-table", title: "Escalation Matrix Table" },
    { id: "client-testimonials", title: "Client Testimonials" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Report Recovery Harassment to Banking Authority", href: "/how-to-report-harassment-by-a-recovery-professional-to-a-banking-authority" },
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
              How to Report Harassment by a Recovery Professional to a <span className="text-[#D2A02A]">Banking Authority</span>?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive legal guide on documenting collector abuse, lodging formal complaints, and utilizing the RBI CMS portal.
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
                      To report harassment by a recovery professional to a banking authority, first document all evidence (recordings, messages) and submit a formal complaint to your bank's Grievance Redressal Officer. If unresolved within 30 days, escalate your complaint online using the official Reserve Bank of India (RBI) Complaint Management System (CMS) portal.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Your Legal Rights Against Recovery Agent Harassment</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Securing a loan or utilizing a credit line is a standard financial arrangement, yet falling into default can sometimes expose borrowers to aggressive collection tactics. It is vital to understand that financial distress does not strip you of your fundamental civil liberties. Under the laws governed by the <strong>Reserve Bank of India (RBI)</strong>, commercial banks, co-operative banks, and Non-Banking Financial Companies (NBFCs) are strictly regulated in how they pursue outstanding liabilities. You have the right to be treated with dignity and fairness throughout the recovery process.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">What Constitutes &quot;Harassment&quot; Under RBI Regulations?</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>RBI guidelines for debt collection</strong> explicitly outline what behaviors are prohibited during the recovery process. Harassment is not limited to physical confrontation; it extends to various forms of psychological and social pressure. The following actions by <strong>debt recovery agents</strong> constitute clear violations of regulatory standards:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li>Using threatening, uncivil, or abusive language during calls or face-to-face visits.</li>
                    <li>Making anonymous calls or repeatedly calling from unverified phone numbers to cause distress.</li>
                    <li>Humiliating the borrower publicly or attempting to shame them in front of friends, neighbors, or colleagues.</li>
                    <li>Contacting family members, friends, or employers who are not co-borrowers or legal guarantors of the loan.</li>
                    <li>Entering the borrower’s home or workplace without prior notice, authorization, or consent.</li>
                    <li>Falsifying legal documents, such as sending fake police notices, court summons, or arbitral warnings.</li>
                  </ul>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Designated Calling Hours and Contact Restrictions</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    To prevent recovery professionals from disrupting the personal lives of consumers, the central bank has set rigid boundaries around contact hours. Recovery agents are legally permitted to call or visit you only between <strong>8:00 AM and 7:00 PM</strong>. Calls or visits outside this window—such as late-night threats or early-morning wake-up calls—are severe violations of the <strong>Integrated Ombudsman Scheme</strong> and should be documented immediately. Furthermore, agents are prohibited from calling you at your workplace if you have explicitly requested them to contact you only on your personal phone numbers.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="escalation-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Grievance Escalation Process for Banking Authority Complaints</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are experiencing harassment, you must follow a structured escalation path. Jumping straight to the central banking authority without engaging the lender first will result in your complaint being redirected. The following step-by-step procedure ensures that your complaint is legally sound and carries maximum weight.
                  </p>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Gathering and Documenting Bulletproof Evidence</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A complaint is only as strong as the evidence supporting it. When a recovery professional crosses the line, you must systematically build a dossier:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li><strong>Call Recordings:</strong> Set your phone to automatically record calls from unknown or collection-related numbers. Ensure the recording captures the agent's tone, language, and statements.</li>
                    <li><strong>Text Messages and Screenshots:</strong> Save all SMS messages, WhatsApp communications, and emails. Take screenshots showing the sender’s number, the date, the timestamp, and the content.</li>
                    <li><strong>Visitor Records:</strong> If agents visit your home or office, note down their names, employee IDs, and the name of the agency they represent. Ask for their official authorization letter from the bank. If they refuse to provide it, document their refusal.</li>
                    <li><strong>Log of Events:</strong> Keep a simple spreadsheet tracking the date, time, caller number, agent name, and summary of what was said during every interaction.</li>
                  </ol>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Filing a Formal Complaint with the Bank's Grievance Redressal Officer (GRO)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Your first official recourse is to complain directly to the creditor bank or NBFC. Under RBI directives, lenders are vicariously liable for the actions of their outsourced collection agencies.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Draft a formal email or registered letter addressed to the bank's <strong>Grievance Redressal Officer (GRO)</strong>. State your loan account number, provide a factual description of the harassment, and attach your documented evidence. Explicitly state the specific RBI guidelines that have been violated. Request an immediate halt to all unauthorized contact and demand that communication be restricted to writing or formal channels. Ensure you receive an acknowledgment of this complaint along with a unique complaint tracking reference number.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Escalating to the Principal Nodal Officer (PNO)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the GRO fails to resolve the issue within 15 days, or if the harassment continues unabated, you should escalate the matter to the bank's <strong>Principal Nodal Officer (PNO)</strong>. The PNO is a senior executive responsible for managing customer grievances across all branches. Send a copy of your initial complaint, the GRO's response (or proof of their silence), and a clear statement explaining why the resolution offered is unacceptable.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Submitting a Complaint on the RBI CMS Portal</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the bank fails to provide a satisfactory resolution within <strong>30 days</strong> of your initial complaint, or if they reject your complaint entirely, you have the legal right to escalate to the <strong>Banking Ombudsman</strong>.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm md:text-lg text-gray-700">
                    <li>Navigate to the official RBI <strong>Complaint Management System (CMS)</strong> portal at <Link href="https://cms.rbi.org.in" target="_blank" className="text-[#D2A02A] hover:underline font-semibold">cms.rbi.org.in</Link>.</li>
                    <li>Click on the &quot;File a Complaint&quot; tab.</li>
                    <li>Select the type of financial institution (Bank or NBFC) and enter your basic details.</li>
                    <li>Provide details of your initial complaint to the bank, including the date of filing and the bank's response.</li>
                    <li>Upload your compiled evidence file (PDFs of chats, audio recordings, or call logs).</li>
                    <li>Submit the form and record your <strong>Complaint Reference Number</strong> to monitor the progress of the investigation.</li>
                  </ol>
                </section>

                {/* Section 3 */}
                <section id="police-complaint" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When and How to File a Police Complaint / FIR for Criminal Intimidation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    While the RBI handles regulatory violations and can penalize banks financially, it does not handle criminal acts directly. If the actions of a recovery professional cross into criminal behavior, you must seek police intervention.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Distinguishing Civil Debt Disputes from Criminal Intimidation</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A default on a loan is primarily a civil matter. However, the tactics used by recovery professionals can quickly become criminal. If an agent threatens physical violence, uses force to enter your property, confiscates assets without a court order, or threatens your reputation, they are committing criminal offences.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mt-4">
                    You should file a detailed written complaint at your local police station under the relevant sections of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS), such as criminal intimidation, criminal trespass, and defamation. Present the same dossier of evidence to the police officer and obtain a signed copy of the First Information Report (FIR) or a police station diary entry (GD entry). Provide a copy of this police complaint to your bank's PNO to put immediate pressure on the lender to rein in their agents.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="ama-connect" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Introducing the AMA Connect App: Your Shield Against Illegal Debt Collection</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Navigating the escalation process can be overwhelming, especially when dealing with constant harassment. To simplify this journey, the <strong>AMA Connect app</strong> (also known as the AMA Legal Solutions app) provides a digital shield for consumers. Designed by legal and financial technology experts, the app empowers you to take control of your financial disputes.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">Real-Time Legal Guidance and Automated Documentation</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>AMA Connect app</strong> is built to bridge the gap between harassed consumers and legal recourse:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700">
                    <li><strong>Evidence Collection Vault:</strong> Securely upload call recordings, screenshots, and call logs directly to a secure workspace, generating a clean, structured chronological evidence report.</li>
                    <li><strong>Automated Notice Replies:</strong> If you receive a legal notice or demand letter from a bank, the app can generate automated, legally vetted drafts replying to the notice, highlighting violations of the <strong>RBI guidelines for debt collection</strong>.</li>
                    <li><strong>Direct Expert Consultation:</strong> Connect directly with experienced banking advocates to seek advice on how to secure a <strong>No Due Certificate (NDC)</strong> or discuss loan settlement options.</li>
                    <li><strong>Grievance Generator:</strong> Automatically generate formatted complaints addressed to the bank's GRO, PNO, and the RBI Ombudsman based on the details of your case.</li>
                  </ul>
                </section>

                {/* Section 5 - Table */}
                <section id="escalation-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Escalation Matrix Table</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] font-bold">Escalation Phase</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Target Authority</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Mandatory Waiting Period</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Actionable Step</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700 font-bold">Required Evidence</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Phase 1: Recording &amp; Tracking</td>
                          <td className="p-4 text-gray-700">Self-Documentation</td>
                          <td className="p-4 text-gray-700">Immediate</td>
                          <td className="p-4 text-gray-700">Log every interaction, record calls, save screenshots.</td>
                          <td className="p-4 text-gray-700">Audio files, call logs, text messages.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Phase 2: Internal Grievance</td>
                          <td className="p-4 text-gray-700">Bank's GRO</td>
                          <td className="p-4 text-gray-700">15 Days</td>
                          <td className="p-4 text-gray-700">Submit formal email/letter detailing the harassment.</td>
                          <td className="p-4 text-gray-700">Acknowledgment email, ticket ID.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Phase 3: Senior Escalation</td>
                          <td className="p-4 text-gray-700">Bank's PNO</td>
                          <td className="p-4 text-gray-700">15 Days</td>
                          <td className="p-4 text-gray-700">Escalate if GRO response is absent or unsatisfactory.</td>
                          <td className="p-4 text-gray-700">Copy of GRO complaint, new evidence.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Phase 4: Regulatory Escalation</td>
                          <td className="p-4 text-gray-700">RBI Banking Ombudsman via CMS</td>
                          <td className="p-4 text-gray-700">30 Days (from first GRO complaint)</td>
                          <td className="p-4 text-gray-700">File a formal complaint online at cms.rbi.org.in.</td>
                          <td className="p-4 text-gray-700">GRO/PNO correspondence, full evidence log.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Phase 5: Criminal Recourse</td>
                          <td className="p-4 text-gray-700">Local Police Station</td>
                          <td className="p-4 text-gray-700">Immediate</td>
                          <td className="p-4 text-gray-700">File a written complaint / FIR for threats or trespass.</td>
                          <td className="p-4 text-gray-700">Signed copy of the FIR or GD entry receipt.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 6 - Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Voices of Trust: Testimonials from our Homepage</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        &quot;I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-right">— Santharaman Rajarajeswari</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        &quot;Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-right">— Shourya Sharma</p>
                    </div>
                  </div>
                </section>

                {/* Section 7 - FAQs */}
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
