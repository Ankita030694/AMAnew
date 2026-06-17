import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is it legal for recovery agents to call 100 times a day in India?",
    answer: "No, calling a borrower 100 times a day is completely illegal. Under the RBI guidelines on debt collection, recovery agents are strictly prohibited from harassing, pestering, or intimidating borrowers. Continuous and spam calling constitutes harassment and is punishable under Indian civil and criminal laws."
  },
  {
    question: "What are the allowed call timings for recovery agents?",
    answer: "According to the RBI directives, recovery agents are only permitted to call or visit a borrower between 8:00 AM and 7:00 PM. Calls or visits before 8:00 AM or after 7:00 PM are considered violations of consumer privacy and illegal recovery practices."
  },
  {
    question: "Where can I file a complaint against recovery agent harassment?",
    answer: "You can start by lodging a written complaint with the lender bank's Principal Nodal Officer. If the bank fails to resolve your complaint within 30 days, you can escalate the matter by filing a banking ombudsman complaint online through the RBI CMS portal. Alternatively, you can seek legal representation through AMA Legal Solutions to send a formal legal notice."
  },
  {
    question: "Can recovery agents contact my family members, neighbors, or workplace?",
    answer: "No. Recovery agents are legally barred from contacting your family members, friends, coworkers, or neighbors to discuss your debt. They are also prohibited from threatening, abusing, or visiting your workplace to humiliate you. Doing so violates the RBI's Fair Practice Code and constitutes a breach of privacy."
  },
  {
    question: "Can a One-Time Settlement (OTS) stop recovery harassment?",
    answer: "Yes, a One-Time Settlement (OTS) is a legally binding agreement where the lender accepts a mutually agreed lump-sum amount (often with a 50% to 80% waiver) to close your debt. Once the OTS is finalized and paid, the bank issues a No Dues Certificate (NOC), which permanently halts all recovery attempts."
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
      "name": "Recovery Agent Calling 100 Times Per Day",
      "item": "https://www.amalegalsolutions.com/recovery-agent-calling-100-times-per-day"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery Agent Calling 100 Times Per Day? Learn Your Rights & Stop Harassment",
  "description": "Are recovery agents calling you 100 times a day? Learn your legal rights under RBI rules and how to stop debt collector harassment with AMA Legal Solutions.",
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
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
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

// Review Schema matching home page metrics
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Recovery Agent Harassment Legal Defense",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional legal representation and protection from illegal recovery agent harassment, specializing in One-Time Settlements (OTS).",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "910"
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
        "name": "Vinod Marskole"
      },
      "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
    }
  ]
};

export const metadata = {
  title: "Recovery Agent Calling 100 Times Per Day? Stop Harassment",
  description: "Are recovery agents calling you 100 times a day? Learn your legal rights, RBI guidelines, and how to stop debt collector harassment legally.",
  keywords: [
    "recovery agent calling 100 times per day",
    "recovery agent harassment",
    "One-Time Settlement (OTS)",
    "RBI guidelines on debt collection",
    "commercial debt settlement",
    "banking ombudsman complaint",
    "illegal recovery practices",
    "credit card default",
    "personal loan default",
    "legal notice to bank",
    "Advocate Anuj Anand Malik"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/recovery-agent-calling-100-times-per-day',
  },
};

export default function RecoveryAgentHarassmentPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "direct-answer", title: "Direct Answer" },
    { id: "legality", title: "Is Calling 100 Times Legal?" },
    { id: "borrower-rights", title: "Your Legal Rights" },
    { id: "rbi-rules", title: "RBI Guidelines" },
    { id: "action-plan", title: "Harassment Action Plan" },
    { id: "comparison-matrix", title: "Illegal Actions Table" },
    { id: "debt-resolution", title: "OTS & Debt Settlement" },
    { id: "ama-defense", title: "Why Choose AMA" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Recovery Agent Harassment Guide", href: "/recovery-agent-calling-100-times-per-day" },
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Google Review Snippet */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="h-4 w-auto object-contain opacity-90" />
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex text-[#D2A02A]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 910+ Dues Resolved</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Recovery Agent Calling <span className="text-[#D2A02A]">100 Times Per Day</span>?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Stop illegal collection harassment immediately. Understand the RBI guidelines and protect yourself with professional legal representation.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction & Direct Answer Box */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-6">
                    Handling Extreme Call Harassment from Debt Collectors
                  </h2>
                  
                  {/* Direct Answer Box (50 words optimized for answer engines) */}
                  <div id="direct-answer" className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8 scroll-mt-32">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      Calling 100 times per day is an illegal recovery practice violating RBI guidelines on debt collection. In India, recovery agents cannot harass, abuse, or contact borrowers at unreasonable hours. You can file a banking ombudsman complaint and retain AMA Legal Solutions to issue a legal notice to stop the harassment.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Falling into a financial crisis is emotionally exhausting. Whether due to job cuts, sudden medical emergencies, or failed businesses, default on a personal loan or credit card outstanding balance can happen to anyone. However, what is completely unacceptable is the weaponization of communications by lenders. When a recovery agent calls you 100 times a day, it crosses the line from business follow-up into systematic psychological torture and illegal intimidation.
                    </p>
                    <p>
                      Borrowers facing such relentless spam feel isolated, embarrassed, and desperate. They face constant threats of police intervention, social humiliation, and workplace disruption. In many cases, collection agents begin dialing relatives, coworkers, and references, hacking personal contact lists to force payments. This guide outlines your legal shield against these predatory practices.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we believe that every citizen is entitled to live with dignity, irrespective of their financial status. Led by <strong>Advocate Anuj Anand Malik</strong>, our specialized legal team intervenes to stop the harassment instantly, using robust legal notices and formal complaints to the highest regulatory channels. We redirect all lender contact to our firm, paving the way for a fair and stress-free compromise negotiation.
                    </p>
                  </div>
                </section>

                {/* Section 1: Is Calling 100 Times Legal? */}
                <section id="legality" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Is It Legal for Recovery Agents to Call 100 Times a Day?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The straightforward answer is absolutely not. Banking operations in India are strictly regulated by the central bank. Spamming a customer with dozens or hundreds of calls daily is recognized as a form of illegal coercion. Lenders, including public banks, private banks, and Non-Banking Financial Companies (NBFCs), are legally responsible for the actions of the third-party collection agencies they hire.
                    </p>
                    <p>
                      Under the Indian Penal Code (IPC), calling persistently to threaten, intimidate, or abuse a person constitutes criminal intimidation (Section 506) and stalking or harassment via telecommunications. The Reserve Bank of India has repeatedly issued stern warnings against these high-handed recovery tactics, emphasizing that recovery must be conducted through civil, lawful means.
                    </p>
                    <p>
                      Many digital instant loan apps and aggressive recovery panels rely on the borrower's ignorance of these laws to maintain constant pressure. Recognizing that this behavior is illegal is your first step toward reclamation.
                    </p>
                  </div>
                </section>

                {/* Section 2: Your Legal Rights */}
                <section id="borrower-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Your Core Rights as a Distressed Borrower
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In India, defaulting on a personal loan or credit card bill is a civil breach of contract, not a crime. You cannot be arrested or jailed simply because you cannot pay your unsecured dues. Knowing your legal rights prevents collectors from taking advantage of your fear:
                    </p>
                    <ul>
                      <li>
                        <strong>Right to Privacy:</strong> Lenders cannot contact your family members, friends, or neighbors to discuss your loan. Any call made to a third party to humiliate you is a severe breach of privacy laws.
                      </li>
                      <li>
                        <strong>Right to Workplace Protection:</strong> Recovery agents have no legal authority to visit or call your office, HR manager, or coworkers. Your employment status cannot be threatened by third-party collectors.
                      </li>
                      <li>
                        <strong>Right to Professional Dialogue:</strong> You have the right to request all communications to be documented. If you are represented by a legal firm like AMA Legal Solutions, you have the right to request that all negotiations be handled through your advocate.
                      </li>
                      <li>
                        <strong>Right to Rest:</strong> Recovery agents cannot call you during late-night hours or early mornings. They cannot call you continuously to cause mental agony.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 3: RBI Guidelines */}
                <section id="rbi-rules" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    RBI Guidelines on Debt Recovery and Collection
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The Reserve Bank of India (RBI) has issued comprehensive directives to curb recovery agent harassment. The Master Circular on Loans and Advances details the expected code of conduct:
                    </p>
                    <ol>
                      <li>
                        <strong>Permitted Hours:</strong> Recovery agents can call or visit only between 8:00 AM and 7:00 PM. Calls at 10:00 PM, midnight, or 6:00 AM are severe violations.
                      </li>
                      <li>
                        <strong>No Verbal or Physical Abuse:</strong> Agents cannot use abusive language, humiliate the borrower publicly, or resort to physical threats.
                      </li>
                      <li>
                        <strong>No False Identity:</strong> Recovery agents cannot pose as police officers, CBI agents, or court representatives. Threatening with fake court summonses or police FIRs is a criminal offense under the IPC (Impersonation).
                      </li>
                      <li>
                        <strong>Training and Verification:</strong> Banks must ensure their agents are certified by the Indian Institute of Banking and Finance (IIBF) and carry proper authorization letters.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Section 4: Action Plan */}
                <section id="action-plan" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Step-by-Step Action Plan to Stop Call Harassment
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      If you are receiving an overwhelming number of collection calls, follow this structured roadmap to build your legal defense:
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900">Step 1: Document the Evidence</h3>
                    <p>
                      Do not delete call logs or block all numbers immediately without saving proof. Take screenshots of call logs showing 50 to 100 calls a day. Use call recorders to record abusive conversations. Save WhatsApp threat messages. This documentation is crucial when filing complaints.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">Step 2: Lodge a Nodal Officer Complaint</h3>
                    <p>
                      Every commercial bank and NBFC has a Principal Nodal Officer (PNO) designated to handle grievances. Submit a detailed email containing your call logs, recordings, and case details. By law, the bank must respond and attempt to resolve the grievance.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">Step 3: Escalate to the RBI Ombudsman</h3>
                    <p>
                      If the PNO does not resolve the harassment within 30 days, file an official banking ombudsman complaint via the RBI’s Complaint Management System (CMS) portal. The RBI has the authority to penalize banks and halt recovery actions during an investigation.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">Step 4: Issue a Cease & Desist Legal Notice</h3>
                    <p>
                      Retaining a law firm to send a formal legal notice to the bank's legal division is the most effective way to stop recovery agent harassment. The notice formally establishes that you are represented by counsel, warns the bank of civil and criminal liability for harassment, and instructs them to route all communications through your lawyers.
                    </p>
                  </div>
                </section>

                {/* Section 5: Markdown Table */}
                <section id="comparison-matrix" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    RBI Compliant vs. Illegal Recovery Practices Matrix
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Action / Scenario</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">RBI Compliant Practice</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Illegal Harassment Practice</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Legal Remedy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Call Frequency</td>
                          <td className="py-3 px-4">Reasonable calls (2 to 3 per day max) to seek updates.</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Spam calling 10 to 100 times per day.</td>
                          <td className="py-3 px-4">Document logs; Send Legal Notice to Bank.</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Call Timings</td>
                          <td className="py-3 px-4">Strictly between 8:00 AM and 7:00 PM.</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Late-night calls, early morning wakeups.</td>
                          <td className="py-3 px-4">Record time stamps; File RBI Ombudsman complaint.</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Identity Disclosure</td>
                          <td className="py-3 px-4">Clearly stating identity and bank authorization.</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Impersonating police, CBI officers, or court staff.</td>
                          <td className="py-3 px-4">Ask for ID; File criminal complaint under IPC.</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Third-Party Contacts</td>
                          <td className="py-3 px-4">Calling only the borrower and co-signer/guarantor.</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Contacting HR, office colleagues, or relatives.</td>
                          <td className="py-3 px-4">Serve cease & desist; claim damages for defamation.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Physical Visits</td>
                          <td className="py-3 px-4">Pre-notified residential visit with identity proof.</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Trespassing, shouting, causing public scenes.</td>
                          <td className="py-3 px-4">Call local police; use CCTV footage to file complaint.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 6: Debt Resolution */}
                <section id="debt-resolution" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    One-Time Settlement (OTS): Resolve Your Debt Permanently
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      While stopping harassment provides temporary peace, the underlying debt must be resolved to protect your long-term financial health. The most viable legal exit strategy for a default on unsecured debt is a One-Time Settlement (OTS). 
                    </p>
                    <p>
                      An OTS is a compromise agreement where the lender writes off a significant portion of your outstanding dues (including interest, penalties, and principal) in exchange for a single, lump-sum payment. Typical waivers on unsecured products range between 50% and 80%, depending on the age of default and your documented financial hardship.
                    </p>
                    <p>
                      Attempting to negotiate a settlement independently often leads to banks offering poor terms. Lenders frequently try to trick borrowers into paying small amounts (token money) without issuing a formal settlement letter, which resets the NPA clock and leaves the debt active. Professional legal advisors ensure that negotiations are documented, letters are verified, and a clean No Dues Certificate is obtained.
                    </p>
                  </div>
                </section>

                {/* Section 7: Why Choose AMA Legal Solutions */}
                <section id="ama-defense" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions for Harassment Defense?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Unlike commercial debt settlement companies, which operate as unregulated marketing agencies and have no legal standing, <strong>AMA Legal Solutions</strong> is a registered, professional law firm. This distinction is critical:
                    </p>
                    <ul>
                      <li>
                        <strong>Legal Authority:</strong> Only qualified lawyers can issue legal notices and defend you in court if a bank files a civil suit, Section 138 cheque bounce case, or Section 25 Payment and Settlement Act case. Commercial agencies cannot represent you in court.
                      </li>
                      <li>
                        <strong>Direct Negotiations:</strong> We bypass low-level recovery call centers and negotiate directly with the bank's internal legal committees and nodal officers, securing maximum waivers.
                      </li>
                      <li>
                        <strong>Shield of Counsel:</strong> Once we serve notice, the bank is legally required to redirect all communications to our team, immediately stopping the daily barrage of 100 calls.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Client Success Stories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Samrat Basu</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Nikka Kheda</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- deepak</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Ganesh Pawar</h4>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Side Panel */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Harassment Evaluation</h3>
                <p className="text-xs text-gray-500 mb-4">Contact Advocate Anuj Anand Malik for a quick case study.</p>
                <div className="bg-[#D2A02A]/10 text-[#D2A02A] py-2 px-4 rounded-xl font-bold text-sm mb-4">
                  Call: +91 8700343611
                </div>
                <Link href="/contact">
                  <button className="w-full bg-[#30261C] hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                    Send Query Online
                  </button>
                </Link>
              </div>

              {/* App Showcase Card */}
              <div className="bg-[#30261C] text-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-base font-bold mb-1" style={{ color: 'rgba(210, 158, 13, 0.9)' }}>AMA Legal App</h3>
                <p className="text-xs text-gray-300 mb-4">Monitor cases & settlement letters on your phone.</p>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/appstore.svg" 
                      alt="Google Play" 
                      width={120} 
                      height={34}
                      className="w-[110px] h-auto"
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
                      height={34}
                      className="w-[110px] h-auto"
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
