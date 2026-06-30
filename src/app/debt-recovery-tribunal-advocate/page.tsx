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
      "name": "Debt Recovery Tribunal Advocate",
      "item": "https://www.amalegalsolutions.com/debt-recovery-tribunal-advocate"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Debt Recovery Tribunal Advocate: Defend Against SARFAESI",
  "description": "Find the best Debt Recovery Tribunal Advocate to defend your property against SARFAESI Act notices. Get expert legal strategy and protect your assets today.",
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
  "datePublished": "2026-06-30",
  "dateModified": "2026-06-30"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the role of a Debt Recovery Tribunal Advocate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Debt Recovery Tribunal Advocate represents borrowers or guarantors who are facing aggressive recovery actions from banks and financial institutions. They challenge illegal property auctions and file Securitization Applications under the SARFAESI Act to secure stay orders and protect your assets."
      }
    },
    {
      "@type": "Question",
      "name": "When should I hire a DRT Lawyer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must hire a specialized DRT Lawyer immediately upon receiving a 60-day demand notice under Section 13(2) of the SARFAESI Act. Delaying legal consultation significantly reduces your chances of successfully challenging the bank's claims and preventing physical possession of your property."
      }
    },
    {
      "@type": "Question",
      "name": "Can a DRT Advocate stop a property auction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, an experienced DRT Advocate can stop a property auction by identifying procedural lapses by the bank, proving irregularities in the valuation report, or demonstrating that the borrower was denied a fair opportunity to restructure the loan. They achieve this by securing an interim stay order from the Tribunal."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a DRT Lawyer cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of a DRT Lawyer in India varies widely based on their experience and the complexity of your case. Fees typically range from a few thousand rupees per hearing to a comprehensive package for the entire litigation process. Transparency in fee structures is a critical factor when choosing representation."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Securitization Application (SA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Securitization Application (SA) is the formal legal petition filed by a DRT Advocate under Section 17 of the SARFAESI Act. It is the primary legal mechanism used by borrowers to challenge the recovery measures initiated by the bank and seek relief from the Debt Recovery Tribunal."
      }
    },
    {
      "@type": "Question",
      "name": "Are civil courts involved in DRT cases?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, civil courts generally do not have jurisdiction to intervene in matters governed by the SARFAESI Act. All disputes related to debt recovery by secured creditors must be adjudicated exclusively by the Debt Recovery Tribunal, making specialized legal representation absolutely mandatory."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Debt Recovery Tribunal Legal Services",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rakesh Varma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "When the bank issued a possession notice, we were devastated. The DRT advocates at AMA Legal Solutions stepped in, filed the SA within the critical window, and secured a stay order. Their expertise saved our family home."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sonia Gupta"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "reviewBody": "Highly professional and deeply knowledgeable about the intricacies of the SARFAESI Act. The legal process map they provided made everything clear, and they successfully challenged the bank's illegal auction procedures."
    }
  ]
};

export const metadata = {
  title: "Debt Recovery Tribunal Advocate: Defend Against SARFAESI",
  description: "Find the best Debt Recovery Tribunal Advocate to defend your property against SARFAESI Act notices. Get expert legal strategy and protect your assets today.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "Debt Recovery Tribunal Advocate",
    "DRT Lawyer",
    "SARFAESI Act lawyer",
    "stop property auction",
    "Securitization Application",
    "DRT legal fees",
    "Section 13(2) notice"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-recovery-tribunal-advocate',
  },
};

export default function DebtRecoveryTribunalAdvocatePage() {
  const tocSections = [
    { id: "why-drt-advocate", title: "Why You Need a Specialized DRT Advocate" },
    { id: "key-responsibilities", title: "Key Responsibilities of a DRT Lawyer" },
    { id: "drt-proceeding-timeline", title: "Timeline of a Typical DRT Proceeding" },
    { id: "costs-and-fees", title: "Costs and Fee Structures for DRT Cases" },
    { id: "warning-signs", title: "Warning Signs of an Inexperienced DRT Lawyer" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Debt Recovery Tribunal Advocate", href: "/debt-recovery-tribunal-advocate" },
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

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Debt Recovery Tribunal Advocate: Defend Against SARFAESI
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation to challenge illegal bank actions, file Securitization Applications, and secure stay orders against property auctions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Consult a DRT Expert
                </button>
              </Link>
              <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <nav aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <nav className="hidden lg:block sticky top-24" aria-label="Table of Contents Desktop">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <article className="min-w-0">
              <nav className="lg:hidden mb-6 sticky top-20 z-10" aria-label="Table of Contents Mobile">
                <TableOfContents sections={tocSections} />
              </nav>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                <section id="why-drt-advocate" className="scroll-mt-32">
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    As of 2023, Indian Debt Recovery Tribunals (DRTs) are handling over 1.6 lakh pending cases involving staggering sums of non-performing assets. When a bank issues a 60-day demand notice under Section 13(2) of the SARFAESI Act, hiring an experienced DRT advocate becomes the only legally viable way to prevent the imminent auction of your property.
                  </p>
                  
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why You Need a Specialized Debt Recovery Tribunal Advocate</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Navigating the complex landscape of debt recovery law requires more than just general legal knowledge. A specialized Debt Recovery Tribunal Advocate possesses the distinct expertise required to challenge the aggressive recovery mechanisms employed by banks and financial institutions. The legislative framework, particularly the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, grants sweeping powers to secured creditors. Without a dedicated legal professional who understands the intricate procedural nuances, borrowers are often left defenseless against sudden property seizures and public auctions. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    General practitioners may lack the specific tactical experience needed to secure interim stay orders in these high-stakes scenarios. It is critical to consult a competent <Link href="/sarfaesi-act-lawyer" className="text-[#D2A02A] hover:underline font-semibold">SARFAESI Act lawyer</Link> who is deeply familiar with the tribunal's working procedures, the strict statutory deadlines, and the historical precedents that can be leveraged to halt coercive bank actions. Their specialized knowledge forms the bedrock of a robust defense strategy, transforming a seemingly hopeless situation into a legally defensible position.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, the Debt Recovery Tribunal operates under specialized rules of evidence and procedure, which differ significantly from ordinary civil courts. The velocity at which cases progress in the DRT demands a legal representative who can draft compelling Securitization Applications rapidly and argue them persuasively. Any procedural misstep or delayed filing can result in the irrevocable loss of valuable real estate assets.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, securing the services of a highly qualified Debt Recovery Tribunal Advocate is not merely an option; it is an absolute necessity for anyone facing serious debt recovery proceedings. They act as the essential shield between the borrower's fundamental rights and the often disproportionate might of institutional lenders.
                  </p>
                </section>

                <section id="key-responsibilities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Responsibilities of a DRT Lawyer</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The responsibilities of a Debt Recovery Tribunal Advocate extend far beyond simple court appearances. They assume total control over the strategic and administrative aspects of the litigation, ensuring that every legal avenue is thoroughly explored. Their primary objective is to deconstruct the bank's claims, identify statutory violations, and enforce the borrower's rights to a fair hearing and due process.
                  </p>
                  
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Drafting and Filing Securitization Applications (SA)</h3>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    One of the most critical responsibilities is the meticulous drafting and timely filing of the Securitization Application (SA). Under Section 17 of the SARFAESI Act, the SA is the borrower's primary weapon to challenge the actions initiated by the bank. A proficient Debt Recovery Tribunal Advocate understands that the SA must be comprehensive, clearly articulating every procedural deviation, valuation irregularity, and statutory breach committed by the creditor. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The advocate meticulously reviews the initial loan agreements, account statements, and correspondence to build a compelling narrative. They ensure that all documentary evidence is correctly annexed, paginated, and presented in accordance with the strict procedural guidelines of the tribunal. A well-drafted SA forms the foundation upon which a successful defense is constructed, making this drafting process incredibly significant. Sometimes, related financial disputes like a sudden <Link href="/cheque-bounce-lawyer" className="text-[#D2A02A] hover:underline font-semibold">cheque bounce lawyer</Link> requirement also arise during these stressful periods, and comprehensive representation is essential.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The timely filing of the SA is equally crucial. The law mandates a strict 45-day window from the date the bank takes measures under Section 13(4) of the Act. A diligent advocate monitors these deadlines meticulously, ensuring that the borrower's right to appeal is not extinguished due to procedural delays.
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Defending Against SARFAESI Act Notices</h3>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The defense strategy formally begins the moment a demand notice under Section 13(2) is received. A seasoned Debt Recovery Tribunal Advocate will immediately analyze the notice to verify the accurate classification of the account as a Non-Performing Asset (NPA). They scrutinize the exact amount claimed, checking for illegal penal interest, unapproved charges, or accounting errors that frequently inflate the bank's demands. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The advocate is responsible for drafting a robust and legally sound reply under Section 13(3A) within the mandated timeline. This reply systematically raises objections and challenges the fundamental basis of the bank's claim, legally compelling the bank to respond with reasoned justifications before proceeding further.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    By proactively defending against these initial notices, the advocate sets the stage for future litigation. If the bank fails to consider the objections reasonably or proceeds with coercive measures illegally, this early correspondence becomes vital evidence in the tribunal, proving the bank's arbitrary and high-handed conduct.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Extensive experience in this area allows the advocate to anticipate the bank's maneuvers and prepare counter-strategies, ensuring the borrower remains one step ahead throughout the grueling recovery process.
                  </p>
                </section>

                <section id="drt-proceeding-timeline" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Timeline of a Typical DRT Proceeding</h2>
                  
                  <div className="bg-[#f8f9fa] border-l-4 border-[#2c5282] p-6 rounded-r-xl my-8">
                    <h4 className="text-lg font-bold text-[#2c5282] mb-4">Legal Process Map: The DRT Litigation Journey</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#2c5282] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">1</div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">Receipt of Section 13(2) Notice</p>
                          <p className="text-sm text-gray-700">Bank issues a 60-day demand notice. The borrower must consult a Debt Recovery Tribunal Advocate immediately.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#2c5282] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">2</div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">Filing the Section 13(3A) Objection</p>
                          <p className="text-sm text-gray-700">The advocate drafts and submits a formal objection detailing errors in the bank's claim and NPA classification.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#2c5282] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">3</div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">Bank's Action under Section 13(4)</p>
                          <p className="text-sm text-gray-700">If objections are rejected, the bank attempts to take symbolic or physical possession of the secured asset.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#2c5282] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">4</div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">Filing the Securitization Application (SA)</p>
                          <p className="text-sm text-gray-700">Within 45 days of the bank's action, the advocate files an SA before the DRT to challenge the measures and seek a stay.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#2c5282] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">5</div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">Hearings and Evidence Submission</p>
                          <p className="text-sm text-gray-700">The tribunal conducts hearings, reviews evidence, and evaluates the legality of the bank's procedures.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Initial Notice and Reply Period</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The timeline initiates officially with the service of the demand notice. This period is critical. Borrowers have precisely 60 days to clear the stated dues. However, practically, this time must be utilized by the Debt Recovery Tribunal Advocate to formulate a comprehensive legal strategy, analyze the account statements, and draft the mandatory objection reply. Often, prior to this, a <Link href="/legal-notice-for-dues" className="text-[#D2A02A] hover:underline font-semibold">legal notice for dues</Link> might have been exchanged, establishing the preliminary groundwork for the dispute.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The bank is then legally obligated to consider the objections and communicate its reasoned conclusions within 15 days of receiving the borrower's reply. This exchange of formal communications forms the foundational record for all subsequent tribunal proceedings.
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Hearing and Evidence Submission</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Once the SA is filed, the tribunal issues notices to the bank, and a series of hearings commences. The initial hearings are usually focused on urgent interim relief, where the Debt Recovery Tribunal Advocate passionately argues for a stay on the impending auction or physical possession. Following this, both parties are directed to complete their pleadings, file rejoinders, and submit compelling documentary evidence.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The evidence phase requires meticulous attention to detail, as the advocate must conclusively prove procedural violations by the bank, such as improper service of notices, flawed valuation of the property, or lack of authorization by the bank's officers.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Final arguments are then presented, culminating in the tribunal's decisive judgment. The entire process, from the initial notice to the final verdict, can span several months to a few years, underscoring the need for enduring, competent legal counsel.
                  </p>
                </section>

                <section id="costs-and-fees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Costs and Fee Structures for DRT Cases</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the financial implications of hiring a Debt Recovery Tribunal Advocate is essential for effective legal planning. Legal fees are not standardized and vary based on several factors, including the seniority of the advocate, the complexity of the legal issues, the location of the tribunal, and the total quantum of the disputed debt. It is imperative to have a transparent discussion regarding costs during the initial consultation.
                  </p>

                  <div className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden my-8">
                    <div className="bg-[#D2A02A] text-white px-6 py-4">
                      <h4 className="text-lg font-bold m-0">Cost Breakdown: Typical DRT Legal Expenses</h4>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                          <p className="font-semibold text-gray-900">Initial Consultation & Strategy</p>
                          <p className="text-sm text-gray-600 mt-1">Reviewing the SARFAESI notice, analyzing the NPA classification, and defining the legal approach.</p>
                          <p className="text-[#D2A02A] font-bold mt-2">₹5,000 to ₹15,000</p>
                        </div>
                        <div className="pb-4 md:pb-0 md:pl-4">
                          <p className="font-semibold text-gray-900">Drafting and Filing Objections / SAs</p>
                          <p className="text-sm text-gray-600 mt-1">Preparation of formal replies under Section 13(3A) and drafting the comprehensive Securitization Application.</p>
                          <p className="text-[#D2A02A] font-bold mt-2">₹25,000 to ₹75,000</p>
                        </div>
                      </div>
                      <hr className="my-4 border-gray-200" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                          <p className="font-semibold text-gray-900">Per Hearing Fees</p>
                          <p className="text-sm text-gray-600 mt-1">Professional fees charged for each appearance before the Debt Recovery Tribunal.</p>
                          <p className="text-[#D2A02A] font-bold mt-2">₹10,000 to ₹35,000 per hearing</p>
                        </div>
                        <div className="pb-4 md:pb-0 md:pl-4">
                          <p className="font-semibold text-gray-900">Miscellaneous Costs</p>
                          <p className="text-sm text-gray-600 mt-1">Tribunal filing fees, clerkage, printing, notarization, and out-of-pocket expenses.</p>
                          <p className="text-[#D2A02A] font-bold mt-2">Variable, approx. ₹10,000 onwards</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Many accomplished advocates offer a lump-sum package that covers the entire litigation process up to the final judgment, providing financial predictability for the borrower. When evaluating fee structures, always prioritize the advocate's track record and expertise in SARFAESI matters over seeking the lowest possible cost, as inadequate representation can lead to devastating financial losses.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A highly competent advocate ensures that their fees represent a worthwhile investment by fiercely protecting assets that are often worth millions, making their professional remuneration entirely justified by the complex, specialized nature of the work involved.
                  </p>
                </section>

                <section id="warning-signs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Warning Signs of an Inexperienced DRT Lawyer</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Selecting the right legal representation is the most consequential decision a borrower makes when facing debt recovery proceedings. An inexperienced or incompetent lawyer can inadvertently sabotage a highly defensible case through procedural blunders or a fundamental misunderstanding of the statutory framework. Recognizing the red flags early can prevent catastrophic outcomes.
                  </p>

                  <div className="bg-[#fff5f5] border-l-4 border-red-600 p-6 rounded-r-xl my-8">
                    <h4 className="text-lg font-bold text-red-700 mb-4">Red Flags List: Identifying Inadequate Representation</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span className="text-gray-800"><strong>Guarantees of Absolute Success:</strong> The legal process is inherently unpredictable. A Debt Recovery Tribunal Advocate who promises a guaranteed victory is demonstrating unethical behavior and a fundamental lack of professional integrity.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span className="text-gray-800"><strong>Lack of SARFAESI Act Fluency:</strong> If the lawyer struggles to explain the nuances of Section 13(4) measures or the specific timelines mandated for filing a Securitization Application, they lack the specialized expertise required for DRT litigation.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span className="text-gray-800"><strong>Advising to Ignore Bank Notices:</strong> Any legal professional who suggests ignoring official notices from the bank or tribunal is providing highly detrimental advice. Such inaction inevitably leads to ex-parte orders and the immediate loss of the disputed property.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span className="text-gray-800"><strong>Unclear or Evasive Fee Structures:</strong> Transparency is paramount. A lawyer who refuses to provide a clear, written outline of their expected fees, preferring vague estimates or unexpected demands for cash, should be avoided entirely.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span className="text-gray-800"><strong>Failure to Discuss Pre-Deposit Rules:</strong> An experienced advocate will always prepare the client for the mandatory pre-deposit requirements when appealing to the Debt Recovery Appellate Tribunal, ensuring there are no financial surprises.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Always conduct thorough due diligence. Request references, inquire about their specific experience with cases involving similar asset classes, and assess their communication style. A competent advocate is transparent, proactive, and demonstrates an encyclopedic knowledge of the relevant banking and property laws.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The stakes in DRT proceedings are extraordinarily high, often involving lifelong savings and generational properties. Trusting this critical defense to an inexperienced practitioner based solely on lower legal fees is a strategic error that invariably results in the permanent loss of the asset and compounding financial distress.
                  </p>
                </section>

                <section id="frequently-asked-questions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>What is the role of a Debt Recovery Tribunal Advocate?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>A Debt Recovery Tribunal Advocate represents borrowers or guarantors who are facing aggressive recovery actions from banks and financial institutions. They challenge illegal property auctions and file Securitization Applications under the SARFAESI Act to secure stay orders and protect your assets.</p>
                      </div>
                    </details>
                    
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>When should I hire a DRT Lawyer?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>You must hire a specialized DRT Lawyer immediately upon receiving a 60-day demand notice under Section 13(2) of the SARFAESI Act. Delaying legal consultation significantly reduces your chances of successfully challenging the bank's claims and preventing physical possession of your property.</p>
                      </div>
                    </details>
                    
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>Can a DRT Advocate stop a property auction?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>Yes, an experienced DRT Advocate can stop a property auction by identifying procedural lapses by the bank, proving irregularities in the valuation report, or demonstrating that the borrower was denied a fair opportunity to restructure the loan. They achieve this by securing an interim stay order from the Tribunal.</p>
                      </div>
                    </details>
                    
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>How much does a DRT Lawyer cost in India?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>The cost of a DRT Lawyer in India varies widely based on their experience and the complexity of your case. Fees typically range from a few thousand rupees per hearing to a comprehensive package for the entire litigation process. Transparency in fee structures is a critical factor when choosing representation.</p>
                      </div>
                    </details>
                    
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>What is a Securitization Application (SA)?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>A Securitization Application is the formal legal petition filed by a DRT Advocate under Section 17 of the SARFAESI Act. It is the primary legal mechanism used by borrowers to challenge the recovery measures initiated by the bank and seek relief from the Debt Recovery Tribunal.</p>
                      </div>
                    </details>
                    
                    <details className="group border border-gray-200 rounded-lg bg-gray-50">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 md:p-5 text-gray-900 text-sm md:text-base">
                        <span>Are civil courts involved in DRT cases?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-700 mt-3 group-open:animate-fadeIn p-4 md:p-5 pt-0 text-sm md:text-base">
                        <p>No, civil courts generally do not have jurisdiction to intervene in matters governed by the SARFAESI Act. All disputes related to debt recovery by secured creditors must be adjudicated exclusively by the Debt Recovery Tribunal, making specialized legal representation absolutely mandatory.</p>
                      </div>
                    </details>
                  </div>
                </section>
                
                {/* Client Reviews Section */}
                <section className="mt-12 bg-[#f8f9fa] rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Client Success Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex text-[#D2A02A] mb-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-gray-700 italic mb-4">"When the bank issued a possession notice, we were devastated. The DRT advocates at AMA Legal Solutions stepped in, filed the SA within the critical window, and secured a stay order. Their expertise saved our family home."</p>
                      <p className="font-semibold text-gray-900">- Rakesh Varma</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex text-[#D2A02A] mb-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <p className="text-gray-700 italic mb-4">"Highly professional and deeply knowledgeable about the intricacies of the SARFAESI Act. The legal process map they provided made everything clear, and they successfully challenged the bank's illegal auction procedures."</p>
                      <p className="font-semibold text-gray-900">- Sonia Gupta</p>
                    </div>
                  </div>
                </section>
              </div>
            </article>

            {/* Right Sidebar - Author Profile & CTA */}
            <aside className="space-y-6 hidden lg:block sticky top-24">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-24 bg-[#1a202c]"></div>
                <div className="px-6 pb-6 relative text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 -mt-12 mb-4 relative z-10 shadow-md">
                    <Image 
                      src="/anujbhiya.png" 
                      alt="Anuj Anand Malik Legal Expert" 
                      width={96} 
                      height={96} 
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Anuj Anand Malik</h3>
                  <p className="text-sm text-[#D2A02A] font-semibold mb-3">Senior Legal Expert</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">Specializing in SARFAESI Act defense, DRT litigation, and protecting borrower rights against institutional lenders.</p>
                  <Link href="/author/anuj-anand-malik" className="text-sm text-blue-600 hover:underline">Read Full Profile</Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a202c] to-gray-900 rounded-xl shadow-lg p-6 text-white text-center">
                <h4 className="font-bold text-lg mb-2">Immediate Legal Defense</h4>
                <p className="text-sm text-gray-300 mb-6">Received a possession notice? Do not wait. Secure an expert DRT Advocate today.</p>
                <Link href="/contact" className="block w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 rounded-lg transition-colors text-center shadow-md">
                  Get a Case Evaluation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
