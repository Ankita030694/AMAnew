import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "What are the legal calling hours for debt recovery agents in India?",
    answer: "According to the Reserve Bank of India (RBI) circular dated August 12, 2022, debt recovery agents are strictly prohibited from calling or visiting borrowers before 8:00 AM in the morning and after 7:00 PM in the evening."
  },
  {
    question: "Can a bank recovery agent contact my family members or friends?",
    answer: "No. RBI directives strictly forbid recovery agents from violating a borrower's privacy. They are not permitted to contact family members, friends, colleagues, or references, nor can they disclose any details regarding your outstanding debt or loan default to third parties."
  },
  {
    question: "What constitutes harassment by a recovery agent under RBI guidelines?",
    answer: "Harassment includes calling outside permitted hours (8 AM - 7 PM), using abusive or threatening language, making persistent/repeated calls, threatening physical harm, sending inappropriate messages on social media or mobile apps, and showing up at a residence or workplace without official ID and authorization."
  },
  {
    question: "How do I file a complaint against a bank for recovery agent harassment?",
    answer: "First, submit a formal written complaint to the bank or NBFC's Grievance Redressal Officer. If the lender fails to resolve the issue within 30 days, or if you are dissatisfied with the response, you can file a complaint online with the RBI Ombudsman via the CMS Portal (cms.rbi.org.in)."
  },
  {
    question: "Are banks legally responsible for the behavior of third-party recovery agents?",
    answer: "Yes. Under the RBI's Fair Practices Code and the August 12, 2022 Circular, Regulated Entities (banks, NBFCs, and ARCs) are held vicariously liable for the actions of their outsourced recovery agents. Any misconduct by the agent can result in heavy regulatory penalties for the bank."
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
      "name": "Central Bank Directives for Debt Collection Practices",
      "item": "https://www.amalegalsolutions.com/what-are-the-primary-directives-from-the-central-bank-for-debt-collection-practices"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What are the primary directives from the central bank for debt collection practices?",
  "description": "Comprehensive expert guide on RBI directives and guidelines for debt collection, recovery agent harassment rules, and customer rights in India.",
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
  title: "RBI Directives on Debt Collection: Your Legal Rights",
  description: "Understand the official central bank (RBI) directives on debt collection. Learn how to stop recovery agent harassment and protect your rights.",
  keywords: [
    "primary directives from the central bank for debt collection practices",
    "rbi recovery guidelines",
    "stop recovery agent harassment",
    "recovery agent calling hours",
    "debt collection practices india",
    "rbi ombudsman complaint",
    "debt settlement legal support"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-are-the-primary-directives-from-the-central-bank-for-debt-collection-practices',
  },
  openGraph: {
    title: "RBI Directives on Debt Collection: Your Legal Rights",
    description: "Understand the official central bank (RBI) directives on debt collection. Learn how to stop recovery agent harassment and protect your rights.",
    url: "https://www.amalegalsolutions.com/what-are-the-primary-directives-from-the-central-bank-for-debt-collection-practices",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Central Bank Directives for Debt Collection Practices",
      },
    ],
  },
};

export default function CentralBankDirectivesPage() {
  const tocSections = [
    { id: "direct-answer", title: "Quick Direct Answer" },
    { id: "regulatory-framework", title: "RBI Regulatory Framework" },
    { id: "permitted-vs-illegal", title: "Permitted vs Prohibited Practices" },
    { id: "responsibility-diligence", title: "Lenders Responsibility & Due Diligence" },
    { id: "step-by-step-recourse", title: "Step-by-Step Grievance Redressal" },
    { id: "ama-legal-support", title: "Protecting Peace with AMA Connect" },
    { id: "directives-table", title: "Directives Comparison Table" },
    { id: "client-testimonials", title: "Client Testimonials" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Central Bank Directives for Debt Collection Practices", href: "/what-are-the-primary-directives-from-the-central-bank-for-debt-collection-practices" },
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
              What are the Primary Directives from the Central Bank for <span className="text-[#D2A02A]">Debt Collection Practices</span>?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Understand the official RBI guidelines, stop illegal recovery agent harassment, and assert your legal rights as a borrower.
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
                      The primary directives from the central bank (Reserve Bank of India) for debt collection mandate that regulated entities and recovery agents strictly avoid harassment, physical or verbal intimidation, and calling outside 8:00 AM to 7:00 PM. Lenders must maintain absolute confidentiality, perform agent due diligence, and offer clear grievance redressal.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Regulatory Framework: Reserve Bank of India (RBI) and the Fair Practices Code</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Securing a loan or utilizing a credit card comes with a contractual obligation to repay. However, when financial hardships arise, borrowers often find themselves facing not just financial stress, but also aggressive, intimidating recovery tactics. The Reserve Bank of India (RBI), acting as the country's central bank, has established strict regulations to govern debt collection practices. These directives ensure that recovery processes are carried out in a civilized manner, respecting the fundamental dignity and privacy of the borrower.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The bedrock of borrower protection in India is the <strong>Fair Practices Code</strong> formulated by the <strong>Reserve Bank of India (RBI)</strong>. This code outlines the ethical standards that all <strong>Regulated Entities (REs)</strong>-which include commercial banks, cooperative banks, Non-Banking Financial Companies (NBFCs), and Asset Reconstruction Companies (ARCs)-must adhere to during the loan lifecycle. Under this code, lenders must maintain transparency, provide clear communication, and ensure that their recovery practices align with the rule of law.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    To address a surge in customer complaints regarding high-handed collection methods, the central bank issued the landmark <strong>August 12, 2022 Circular</strong> (Reference: RBI/2022-23/108, \"Outsourcing of Financial Services – Responsibilities of Regulated Entities Employing Recovery Agents\"). This directive explicitly reinforces that Regulated Entities remain legally responsible for the actions of their outsourced recovery agencies. The RBI made it clear that outsourcing recovery operations does not absolve banks and NBFCs of their regulatory accountability. Under this circular, lenders must ensure that their agents do not cross legal boundaries.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="permitted-vs-illegal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Permitted Practices vs. Illegal Harassment and Intimidation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The central bank's directives strictly distinguish between acceptable, professional communication and prohibited activities. Debt recovery agents are authorized to contact borrowers to discuss outstanding dues, explain repayment options, or discuss a potential <strong>Debt Settlement</strong>. However, they must do so under strict guidelines:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-sm md:text-lg text-gray-700 mb-6">
                    <li>
                      <strong>Restricted Calling Hours:</strong> Recovery agents are prohibited from calling borrowers before <strong>8:00 AM</strong> and after <strong>7:00 PM</strong>. Calling during late nights or early mornings is a direct violation of RBI guidelines and is classified as harassment.
                    </li>
                    <li>
                      <strong>Privacy and Confidentiality:</strong> Lenders must maintain absolute confidentiality regarding a borrower's financial information. Agents cannot contact a borrower's family members, friends, colleagues, or referees to reveal details about the debt. They cannot call references unless the borrower is unreachable for a prolonged period, and even then, they cannot disclose details of the loan or default.
                    </li>
                    <li>
                      <strong>Prohibition of Harassment and Intimidation:</strong> The RBI strictly prohibits the use of physical force, verbal abuse, threat of violence, or any form of mental torture. Threatening messages sent via SMS, WhatsApp, or email, as well as public shaming on social media platforms, constitute serious violations.
                    </li>
                    <li>
                      <strong>Identification Requirements:</strong> Whenever a recovery agent visits a borrower's home or office, they must carry a valid identity card issued by the financial institution or the authorized agency, along with a copy of the bank's authorization letter. Visits without proper identification are illegal.
                    </li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    If you are dealing with persistent calls or visits, you should cross-reference agent behavior with these boundaries. If you need help with stopping visits, read our guide on how to <Link href="/how-do-i-stop-recovery-agent-from-coming-home" className="text-[#D2A02A] hover:underline">stop recovery agent visits</Link>.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="responsibility-diligence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Regulated Entities' Responsibility and Agent Due Diligence</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A critical aspect of the RBI's directives is the principle of vicarious liability. The <strong>August 12, 2022 Circular</strong> places the burden of compliance squarely on the lenders. Before hiring a third-party recovery agency, Regulated Entities must perform rigorous due diligence. They must ensure that the agency is registered, has a clean track record, and uses agents who have undergone standard training.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    All recovery agents must undergo a mandatory training program (typically a 100-hour course certified by the Indian Institute of Banking and Finance - IIBF) covering customer relation skills, legal frameworks, and ethical practices. REs must also establish a code of conduct for their agents and monitor their performance. If an agent violates these guidelines, the RBI holds the sponsoring bank or NBFC directly accountable, which can result in heavy penalties, regulatory restrictions, or bans on outsourcing recovery activities for that institution.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="step-by-step-recourse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Recourse: Grievance Redressal and the Ombudsman Scheme</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are facing abusive behavior or threats from recovery agents, you do not have to endure it in silence. The central bank has structured a clear path for dispute resolution:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-sm md:text-lg text-gray-700">
                    <li>
                      <strong>Document and Record Evidence:</strong> Save all call logs, record conversation audio, take screenshots of threatening messages, and note the names of agents and the times of their calls.
                    </li>
                    <li>
                      <strong>Lodge a Formal Complaint with the Lender:</strong> Submit a detailed written complaint to the bank or NBFC’s internal <strong>Grievance Redressal</strong> Officer (GRO). The lender is legally required to acknowledge your complaint and provide a resolution within 30 days.
                    </li>
                    <li>
                      <strong>Escalate to the RBI Ombudsman Scheme:</strong> If the lender rejects your complaint, fails to respond within 30 days, or offers an unsatisfactory response, you can escalate the matter to the RBI Ombudsman. Complaints can be filed online via the central bank's Integrated Customer Management System (CMS) Portal (cms.rbi.org.in).
                    </li>
                    <li>
                      <strong>Seek Specialized Legal Guidance:</strong> In cases of severe mental trauma or illegal trespass, you can initiate legal proceedings. Settle your debt legally through structured negotiations or file a police complaint for harassment and criminal intimidation.
                    </li>
                  </ol>
                </section>

                {/* Section 5 */}
                <section id="ama-legal-support" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Protecting Your Peace with AMA Connect and the AMA Legal Solutions App</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Navigating debt collection issues while dealing with financial distress can be overwhelming. This is where professional legal intervention becomes invaluable. While navigating these challenges, having a dedicated advocate changes the dynamic completely.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>AMA Legal Solutions App</strong> is designed specifically to act as your digital shield against recovery harassment. By using the app's <strong>AMA Connect</strong> feature, you gain direct access to seasoned legal experts who specialize in banking laws, debt restructuring, and borrower rights.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Instead of dealing with aggressive agent calls directly, you can leverage AMA Connect to route all legal communications through professional advocates, draft and send formal replies to bank legal notices, negotiate a lawful, affordable <strong>Debt Settlement</strong> directly with senior banking officials, and log, document, and report harassment violations directly to regulatory authorities. The AMA Legal Solutions App ensures that you are never left to fight large financial institutions alone, restoring your peace of mind while establishing a clear, legal path to financial recovery.
                  </p>
                </section>

                {/* Section 6 - Directives Table */}
                <section id="directives-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Directives Comparison Table</h2>
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
                          <td className="p-4 font-semibold text-gray-900">Calling Hours</td>
                          <td className="p-4 text-gray-700">Contacts only between 8:00 AM and 7:00 PM.</td>
                          <td className="p-4 text-gray-700">Calls before 8:00 AM, after 7:00 PM, or late-night calls.</td>
                          <td className="p-4 text-gray-700 italic">August 12, 2022 Circular</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Privacy Boundaries</td>
                          <td className="p-4 text-gray-700">Contacting the borrower directly at verified addresses or phone numbers.</td>
                          <td className="p-4 text-gray-700">Calling family members, relatives, friends, or referees; disclosing loan defaults publicly.</td>
                          <td className="p-4 text-gray-700 italic">Fair Practices Code</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Identity Verification</td>
                          <td className="p-4 text-gray-700">Must display official bank/agency ID card and carry authorization letters during visits.</td>
                          <td className="p-4 text-gray-700">Unidentified visits, anonymous calls, or refusing to show authorization.</td>
                          <td className="p-4 text-gray-700 italic">August 12, 2022 Circular</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Communication Tone</td>
                          <td className="p-4 text-gray-700">Polite, civil, and professional language focused on repayment options.</td>
                          <td className="p-4 text-gray-700">Abusive language, threats of physical force, social shaming, or intimidation.</td>
                          <td className="p-4 text-gray-700 italic">Fair Practices Code</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-gray-900">Escalation Path</td>
                          <td className="p-4 text-gray-700">Resolving complaints internally within 30 days.</td>
                          <td className="p-4 text-gray-700">Ignoring customer complaints or failing to provide grievance details.</td>
                          <td className="p-4 text-gray-700 italic">RBI Integrated Ombudsman</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 7 - Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Voices of Trust: Testimonials from our Homepage</h2>
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
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 col-span-1 md:col-span-2">
                      <p className="text-gray-700 italic mb-4">
                        "I want to thanks the team for handling my case and providing valuable support in distress and supporting at all the steps be it dealing with agents or handling legal notices from bank."
                      </p>
                      <p className="font-bold text-gray-900 text-right">- SUMITKUMAR KANOUJIYA</p>
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
