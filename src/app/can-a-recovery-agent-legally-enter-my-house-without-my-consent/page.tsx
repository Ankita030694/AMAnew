import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// SEO Keywords:
// amalegalsolutions.com
// sector 57
// anuj anand malik
// 8700343611
// AMA Connect

const faqs = [
  {
    question: "Can a recovery agent legally enter my house without my consent?",
    answer: "No. Under the Fair Practices Code of the Reserve Bank of India (RBI) and Section 329 of the Bharatiya Nyaya Sanhita (BNS), a recovery agent has no legal authority to enter your private home without your explicit permission. Forcing entry constitutes criminal trespass. AMA Legal Solutions, founded by Anuj Anand Malik in Sector 57, Gurugram, can help you send a legal notice to banks and report these violations. Contact us at 8700343611 for assistance."
  },
  {
    question: "What are the permitted hours for recovery agents to visit or call?",
    answer: "Under RBI guidelines, recovery agents are strictly permitted to call or visit your residence only between 8:00 AM and 7:00 PM. Calls or home visits outside this time window constitute regulatory harassment. If agents violate these hours, log their timing via the AMA Connect app or contact our team at 8700343611 to initiate legal action against the lender."
  },
  {
    question: "What documents must a recovery agent show when visiting my home?",
    answer: "Any visiting recovery agent must carry and present a valid company-issued photo ID card, an official authorization letter from the lending bank or NBFC specific to your account, and a copy of the demand notice. If they cannot produce these credentials, do not let them enter and call 8700343611 to report them."
  },
  {
    question: "What legal action can I take if an agent enters my house without consent?",
    answer: "If an agent enters without consent, you can record the interaction, refuse to negotiate, call the emergency police helpline (112), file an FIR for criminal trespass under Section 329 of the BNS, and submit a formal complaint to the bank and the RBI Banking Ombudsman. The AMA Connect app simplifies this by helping you record calls and automatically draft these complaints."
  },
  {
    question: "Can recovery agents contact my neighbors or employers about my debt?",
    answer: "No. RBI guidelines strictly prohibit recovery agents from disclosing your debt details to third parties, including neighbors, security guards, relatives, or employers. Doing so is a direct violation of your fundamental right to privacy. AMA Legal Solutions can help you file a complaint and seek compensation of up to 1 Lakh Rupees from the Banking Ombudsman."
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
      "name": "Articles",
      "item": "https://www.amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can a Recovery Agent Legally Enter My House Without My Consent",
      "item": "https://www.amalegalsolutions.com/can-a-recovery-agent-legally-enter-my-house-without-my-consent"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can a Recovery Agent Legally Enter My House Without My Consent?",
  "description": "Comprehensive legal guide explaining borrower rights against unauthorized entry by recovery agents, trespass laws under BNS 329, RBI Fair Practices Code, and how the AMA Connect app helps.",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
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
  "name": "Legal Protection Against Recovery Agent Forcible Entry",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal help to stop recovery agent harassment, illegal home trespass, and negotiate loan settlements in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Surendra Rao" },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vinod Marskole" },
      "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
    }
  ]
};

export const metadata = {
  title: "Can Recovery Agents Enter Your Home Without Consent?",
  description: "Can a recovery agent legally enter your house without consent? No. Discover RBI guidelines, trespass laws, and how to protect your home from harassment.",
  keywords: [
    "can a recovery agent legally enter my house without my consent",
    "can recovery agents enter house without permission",
    "recovery agent home visit guidelines",
    "rights against recovery agents",
    "rbi recovery guidelines",
    "criminal trespass",
    "ama connect app",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57 gurugram",
    "8700343611"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/can-a-recovery-agent-legally-enter-my-house-without-my-consent',
  }
};

export default function RecoveryHouseEntryPage() {
  const sections = [
    { id: "direct-answer", title: "Quick Answer" },
    { id: "your-home-sanctuary", title: "Legality of Home Entry" },
    { id: "rbi-fair-practices", title: "RBI Fair Practices Code" },
    { id: "prohibited-conduct", title: "Prohibited Conduct Rules" },
    { id: "ama-connect-shield", title: "AMA Connect App Protection" },
    { id: "actionable-steps", title: "Actionable Steps" },
    { id: "client-testimonials", title: "What Our Clients Say" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Recovery Agent Home Entry Legality", href: "/can-a-recovery-agent-legally-enter-my-house-without-my-consent" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/newAssets/legal-bg.jpg')", backgroundColor: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Can a Recovery Agent Legally <span className="text-[#D2A02A]">Enter My House</span> Without My Consent?
            </h1>
            <p className="text-lg md:text-3xl mb-12 max-w-4xl mx-auto text-gray-200 font-medium">
              Understand the legal boundaries protecting your private space. Stop coercive recovery tactics with AMA Legal Solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg">
                  Get Immediate Protection
                </button>
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all text-lg flex items-center justify-center gap-2">
                Call: 8700343611
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-10 items-start mt-8">
            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-28 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Guide Navigation</h3>
              <TableOfContents sections={sections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-10 sticky top-24 z-10">
                 <TableOfContents sections={sections} />
               </div>

              <article className="bg-white p-6 md:p-16 rounded-3xl shadow-xl space-y-10 md:space-y-16 leading-relaxed">
                
                <section id="direct-answer" className="scroll-mt-32">
                  <div className="p-8 bg-amber-50 border-l-8 border-[#D2A02A] rounded-r-2xl mb-8">
                    <p className="text-xl md:text-2xl text-amber-900 font-bold leading-relaxed">
                      No, a debt recovery agent cannot legally enter your house without your explicit consent. Under Reserve Bank of India (RBI) guidelines and Indian civil law, unauthorized entry into a private residence constitutes criminal trespass. You possess the absolute legal right to deny entry and request they leave your premises immediately.
                    </p>
                  </div>
                </section>

                <section id="your-home-sanctuary" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Your Home is a Sanctuary: The Legality of Unauthorized Entry</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In the eyes of the law, your private residence is a sanctuary. No individual, representative, or corporate entity has the unilateral right to breach the threshold of your home without your express invitation or a valid order issued by a court of competent jurisdiction. When banks or Non-Banking Financial Companies (NBFCs) hire third-party entities to collect outstanding debts, these individuals operate strictly as agents of the lender—they do not possess law enforcement powers, judicial warrants, or executive authority.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Trespass and Private Space under Indian Civil and Criminal Law</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Under Indian jurisprudence, entering another person's property without permission is not merely a civil wrong; it can escalate into a criminal offense. According to Section 329 of the Bharatiya Nyaya Sanhita (BNS), 2023 (which supersedes the traditional Section 441 and 442 of the Indian Penal Code), criminal trespass occurs when someone enters into or upon property in the possession of another with the intent to commit an offense, or to intimidate, insult, or annoy any person in possession of such property.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When a recovery agent steps onto your property, pushes past your door, or refuses to leave when explicitly instructed to do so, they cross the line from standard communication into criminal house-trespass. The law recognizes that even the entry of any part of the trespasser’s body without consent is sufficient to constitute house-trespass, making the agent and the employing financial institution liable for serious legal consequences.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">The Demarcation Between a "Home Visit" and a "Forcible Entry"</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Lenders frequently argue that their representatives are merely conducting routine home visits to establish contact with a defaulting borrower. While a polite knock on the door to deliver a letter or request a peaceful conversation is legally permissible, there is a strict legal demarcation between a visit and a forcible entry.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A visit respects boundaries: the agent remains outside the threshold, speaks politely, and departs immediately if the borrower refuses to engage. A forcible entry, by contrast, involves physical coercion, stepping into the living room without an invitation, blocking doorways, or refusing to step back. Any attempt by an agent to cross your threshold without your permission strips away the veneer of a "routine visit" and exposes the agent to immediate charges of trespass.
                  </p>
                </section>

                <section id="rbi-fair-practices" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Decoding the Reserve Bank of India (RBI) Fair Practices Code</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    To protect retail consumers from predatory collection tactics, the Reserve Bank of India (RBI) has instituted a comprehensive Fair Practices Code. This regulatory framework governs how commercial banks, cooperative banks, and NBFCs manage debt recovery. The central bank has made it clear that while lenders have a right to recover their dues, they must do so through legal, ethical, and structured channels.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Visited Hours and Timing Rules: 8:00 AM to 7:00 PM Limits</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    One of the most clear-cut protections under the RBI guidelines concerns the timing of recovery operations. Debt recovery agents are strictly prohibited from visiting a borrower's residence or calling their phone numbers at odd hours. The permissible window for visits and communications is strictly limited to between <strong>8:00 AM and 7:00 PM</strong>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Any visit attempted before 8:00 AM or after 7:00 PM is a direct violation of the Fair Practices Code, regardless of the default amount or the duration of the non-payment. Lenders are required to ensure that their agents do not disrupt the domestic peace, privacy, and rest of borrowers and their family members outside these specified hours.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Mandatory Identification, Verification, and Authorization Letter Requirements</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A recovery agent cannot simply show up at your home and demand money. Before you engage in any discussion, the visiting representative must proactively present credentials to verify their identity and authority. Under RBI directives, an authorized agent must carry:
                  </p>
                  <ul className="list-disc pl-8 mb-6 space-y-3 text-lg text-gray-700">
                    <li>A valid, company-issued physical identity card displaying their photograph, name, and employee code.</li>
                    <li>An official authorization letter from the lending bank or NBFC, specifically naming the recovery agency and authorizing them to collect the debt associated with your specific account.</li>
                    <li>A copy of the formal demand notice or loan statement details.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As a borrower, you have the absolute right to examine these documents through a window or safety gate before opening your door. If the agent fails to produce these credentials, you are legally entitled to treat them as unauthorized intruders, refuse interaction, and instruct them to leave your property immediately.
                  </p>
                </section>

                <section id="prohibited-conduct" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Prohibited Conduct: What Debt Recovery Agents Cannot Do</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The RBI guidelines on recovery agents leave no room for ambiguity regarding the behavior expected of collection representatives. The regulatory body has repeatedly issued circulars warning banks and NBFCs of severe penalties—including temporary bans on employing recovery agencies—if their representatives engage in coercive recovery methods.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Verbal Abuse, Threats of Jail, and Harassment of Family Members</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A debt recovery agent is legally obligated to maintain professional decorum at all times. The Fair Practices Code strictly prohibits:
                  </p>
                  <ul className="list-disc pl-8 mb-6 space-y-3 text-lg text-gray-700">
                    <li><strong>Verbal Abuse and Humiliation:</strong> Using derogatory language, raising their voice, or shouting in public spaces to shame the borrower.</li>
                    <li><strong>Harassment of Family Members:</strong> Threatening, intimidating, or calling relatives, spouses, parents, or children who are not co-borrowers or guarantors on the loan.</li>
                    <li><strong>Privacy Violations:</strong> Disclosing the details of the outstanding debt to neighbors, security guards, or employers to exert social pressure.</li>
                    <li><strong>Threats of Incarceration:</strong> Claiming that the borrower will be arrested, jailed, or subjected to immediate police detention.</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">The Myth of Police Powers: Loan Default as a Civil Dispute</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A common tactic employed by unscrupulous recovery agents is to threaten borrowers with immediate arrest or police intervention. It is critical to understand that a loan default or credit card delinquency is fundamentally a civil dispute. Under Indian law, defaulting on a personal loan, credit card, or business loan is not a criminal offense.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Only a judicial court can order a foreclosure, property attachment, or summon law enforcement. Recovery agents have absolutely no police powers, and they cannot bring police officers to your home to coerce payment. Any claim to the contrary is a fraudulent misrepresentation designed to exploit fear.
                  </p>
                </section>

                <section id="ama-connect-shield" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">How the AMA Connect App Serves as Your Digital Shield</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In the digital age, documenting violations in real-time is the most powerful tool a borrower possesses. This is where the <strong>AMA Connect app</strong> (developed by <strong>AMA Legal Solutions</strong>) becomes an indispensable asset, acting as a comprehensive digital shield for individuals facing unlawful recovery practices.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Secure Call Recording, Real-Time Incident Logging, and Evidence Gathering</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When a recovery agent arrives at your doorstep or calls your phone, having concrete proof of their behavior is vital. The <strong>AMA Connect app</strong> is custom-built to help you gather legally resilient evidence. By launching the app, you can:
                  </p>
                  <ul className="list-disc pl-8 mb-6 space-y-3 text-lg text-gray-700">
                    <li>Activate secure, encrypted video and audio recording of the doorstep interaction, capturing the agent's identity, words, and body language.</li>
                    <li>Log the exact timestamp and geo-location of the visit, automatically proving if the agent visited outside the permissible 8:00 AM to 7:00 PM window.</li>
                    <li>Securely store call logs and threatening text messages in a centralized vault, preventing accidental deletion and ensuring the chain of custody for legal proceedings.</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Direct Escalation to RBI Banking Ombudsman and Legal Advisors</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Gathering evidence is only the first step; taking decisive action is what stops the harassment. The <strong>AMA Connect app</strong> streamlines the grievance process by connecting you directly with legal remedies. Through the app, you can:
                  </p>
                  <ol className="list-decimal pl-8 mb-6 space-y-3 text-lg text-gray-700">
                    <li><strong>Draft Instant Legal Notices:</strong> Auto-generate cease-and-desist letters and notice templates based on the specific violations logged (e.g., trespass, verbal abuse, night visits).</li>
                    <li><strong>Escalate to the Banking Ombudsman:</strong> Seamlessly compile your logged evidence and submit a formal complaint directly to the RBI Banking Ombudsman if the bank fails to resolve your grievance within 30 days.</li>
                    <li><strong>Access Expert Advocates:</strong> Connect with the dedicated legal panel at AMA Legal Solutions for real-time guidance, ensuring you never have to face aggressive lenders alone.</li>
                  </ol>
                </section>

                <section id="actionable-steps" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Actionable Steps: What to Do When a Recovery Agent Attempts Forcible Entry</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    If a recovery agent is at your gate or door attempting to gain unauthorized entry, keeping a calm head and following a structured legal protocol is your best defense.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">How to Legally Refuse Entry and Order Agents to Leave</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Follow these four direct steps immediately:
                  </p>
                  <ul className="space-y-4 text-lg text-gray-700 mb-8">
                    <li className="flex gap-3"><span className="text-[#D2A02A] font-bold">1.</span> <strong>Keep the Door Closed:</strong> Do not open your door fully or invite the agent inside. Speak to them through a security grill, intercom, or window.</li>
                    <li className="flex gap-3"><span className="text-[#D2A02A] font-bold">2.</span> <strong>Demand Credentials:</strong> Ask them to hold their physical ID card and the bank's specific authorization letter up to the window or camera. Take a photograph of these documents using your phone or the AMA Connect app.</li>
                    <li className="flex gap-3"><span className="text-[#D2A02A] font-bold">3.</span> <strong>State Your Refusal Clearly:</strong> Speak firmly and clearly: <em>"I do not consent to you entering my home. Please leave my property immediately. If you have documentation, you may send it via registered post or leave it in my mailbox."</em></li>
                    <li className="flex gap-3"><span className="text-[#D2A02A] font-bold">4.</span> <strong>Do Not Engage in Arguments:</strong> Avoid getting drawn into shouting matches. Stick to your refusal of entry and record the entire interaction.</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Filing a Police Complaint (FIR) and Bank Grievance Escalation</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    If the agent refuses to leave, acts aggressively, or attempts to force their way in, immediately call the Emergency Helpline (112) and inform them that unauthorized individuals are trespassing on your property.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Subsequently, visit your local police station and file a formal First Information Report (FIR) under Section 329 of the BNS for criminal trespass, and Section 351 for criminal intimidation. Use the recordings from your AMA Connect app as evidence. Do not forget to send a written complaint to the bank’s Principal Nodal Officer, attaching the police complaint and evidence, as banks are vicariously liable for the actions of their agents.
                  </p>
                </section>

                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Transforming Despair into Hope: Client Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border p-8 rounded-3xl shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-bl-[100px]"></div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed">
                        "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Surendra Rao</p>
                          <p className="text-sm text-gray-500">Verified Client</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border p-8 rounded-3xl shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-bl-[100px]"></div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed">
                        "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vinod Marskole</p>
                          <p className="text-sm text-gray-500">Verified Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 bg-white border p-8 rounded-3xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-bl-[100px]"></div>
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">D</div>
                      <div>
                        <p className="font-bold text-gray-900">deepak</p>
                        <p className="text-sm text-gray-500">Verified Client</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </article>
            </div>

            {/* Right Column: CTA & Related */}
            <div className="hidden lg:block space-y-8 sticky top-28">
              <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] p-8 rounded-2xl shadow-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Under Pressure?</h3>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  Join 10,000+ borrowers who stopped harassment through AMA Legal Solutions. We represent you from Sector 57.
                </p>
                <div className="space-y-4">
                    <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors shadow-lg">
                        Call: 8700343611
                    </a>
                    <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        Free Case Review
                    </Link>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-4">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-[#D2A02A]">12k+</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">Cases Won</p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-[#D2A02A]">4.9</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">Rating</p>
                    </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Related Expertise</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/loan-settlement" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full group-hover:scale-150 transition-transform"></span>
                      Loan Settlement Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-do-i-stop-recovery-agent-from-coming-home" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full group-hover:scale-150 transition-transform"></span>
                       Stop Home Visits
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-recovery-agents-abuse-you-legally-india" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full group-hover:scale-150 transition-transform"></span>
                       Abuse & Harassment Rights
                    </Link>
                  </li>
                   <li>
                    <Link href="/what-are-the-rbi-guidelines-for-recovery-agents-in-india" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full group-hover:scale-150 transition-transform"></span>
                       RBI Recovery Rules
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full group-hover:scale-150 transition-transform"></span>
                       Online Harassment Complaint
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Expert Legal Support at Your Fingertips</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    AMA Legal Solutions in Sector 57, Gurugram, is the #1 choice for borrowers facing harassment in India. Led by Anuj Anand Malik.
                </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+918700343611" className="bg-[#D2A02A] text-white px-10 py-5 rounded-full font-black text-2xl shadow-2xl hover:bg-[#b88a22] transition-all">
                    8700343611
                  </a>
                  <Link href="https://www.amalegalsolutions.com" className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-2xl shadow-xl hover:bg-gray-50 border border-gray-200 transition-all">
                    Visit amalegalsolutions.com
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
