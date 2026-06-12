import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 15 unique YMYL-compliant FAQs for Section 21
const section21Faqs = [
  {
    question: "Is a notice under Section 21 mandatory before filing a Section 11 petition?",
    answer: "Yes. The Supreme Court and various High Courts, notably in the Alupro Building Systems (2017) judgment, have established that a Section 21 notice invoking arbitration is a mandatory jurisdictional prerequisite. Directly filing a Section 11 petition in the High Court without first serving this notice is legally unsustainable."
  },
  {
    question: "Does the date of dispatch of the arbitration notice stop the limitation period?",
    answer: "No. Under Section 21 of the Act, arbitral proceedings commence on the date on which the request to refer the dispute to arbitration is received by the respondent, not when it is sent. Therefore, you must ensure actual receipt by the respondent within the three-year limitation period."
  },
  {
    question: "What is the limitation period for filing a Section 11 petition?",
    answer: "Under Article 137 of the Limitation Act, 1963, the limitation period for filing a Section 11 petition is three years. This clock starts ticking from the date the respondent refuses to appoint an arbitrator, or upon the expiry of the 30-day response window from the receipt of the Section 21 notice."
  },
  {
    question: "What constitutes a valid notice invoking arbitration under Section 21?",
    answer: "A valid notice must refer to the underlying contract and quote the arbitration clause, clearly outline the nature of the dispute, explicitly state the intention to refer the disputes to arbitration, propose neutral arbitrators (complying with Perkins Eastman), and be served to the respondent's valid address."
  },
  {
    question: "What happens if a respondent refuses to receive the Section 21 notice?",
    answer: "Under Section 3 of the Act, delivery is deemed complete if the notice is sent to the respondent's last-known place of business, residence, or mailing address. A refusal to accept service is legally treated as constructive receipt, and the 30-day timeline still begins."
  },
  {
    question: "Can a claimant unilaterally appoint a sole arbitrator in the Section 21 notice?",
    answer: "No. In view of the Supreme Court's landmark judgments in TRF Ltd. (2017) and Perkins Eastman (2020), unilateral appointment of an arbitrator by a party with an interest in the outcome of the dispute is illegal. The notice must propose neutral candidates and invite mutual agreement."
  },
  {
    question: "Can a single Section 21 notice cover multiple connected contracts?",
    answer: "Generally, separate agreements require separate Section 21 notices. However, if the contracts are deeply interconnected, form part of a single transaction, and share a common arbitration clause, courts may accept a single composite notice, though separate notices are always safer."
  },
  {
    question: "Does Section 21 apply to institutional arbitrations?",
    answer: "Yes, but Section 21 starts with 'Unless otherwise agreed'. Institutional rules (like MCIA, SIAC, or DIAC) specify that proceedings commence when the request is filed with the registrar of the institution, which contractually overrides the default 'receipt by respondent' rule."
  },
  {
    question: "Can the requirement of a Section 21 notice be waived by the parties?",
    answer: "No. High Courts have held that the Section 21 notice is a matter of public policy and natural justice. It is a mandatory procedural gateway that cannot be waived, bypassed, or ignored, even by the arbitral tribunal itself."
  },
  {
    question: "Does a simple demand letter or invoice reminder count as a Section 21 notice?",
    answer: "No. A mere demand for payment or an invoice reminder does not satisfy Section 21. The notice must express a clear, active, and unequivocal intention to refer the disputes specifically to arbitration."
  },
  {
    question: "What is the relationship between Section 21 and Section 9 (Interim Relief)?",
    answer: "You can file an application for interim relief under Section 9 before issuing a Section 21 notice. However, under Section 9(2), you must commence arbitral proceedings (by serving the Section 21 notice) within 90 days from the date of the interim order."
  },
  {
    question: "Who is authorized to sign and send the Section 21 notice?",
    answer: "The notice must be signed and sent either by the claimant themselves (proprietor, director, or authorized partner) or by their legally authorized representative, such as their legal counsel or advocate."
  },
  {
    question: "Can the arbitrator or the court extend the limitation period for the substantive dispute?",
    answer: "No. Limitation is a statutory bar under the Limitation Act, 1963. If a claim is time-barred (i.e., Section 21 notice was received more than 3 years after the cause of action arose), neither the arbitrator nor the court can condone the delay or extend the limitation period."
  },
  {
    question: "What should a respondent do immediately upon receiving a Section 21 notice?",
    answer: "The respondent should immediately check the date of receipt, evaluate the validity of the arbitration clause, assess whether the claims are within the 3-year limitation period, review the proposed arbitrator's neutrality, and draft a formal reply within 30 days."
  },
  {
    question: "What happens if a party participates in arbitration without objecting to the lack of Section 21 notice?",
    answer: "If a party participates in the proceedings and submits their statement of defense without raising an objection to the jurisdiction or lack of Section 21 notice at the threshold, they may be deemed to have waived their right to object under Section 4 of the Act. However, raising it early is critical."
  }
];

// JSON-LD Schemas
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
      "name": "What is Section 21 of Arbitration and Conciliation Act",
      "item": "https://www.amalegalsolutions.com/what-is-section-21-of-arbitration-and-conciliation-act"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Section 21 of Arbitration and Conciliation Act? Commencement Notice Guide",
  "description": "Master Section 21 of the Arbitration and Conciliation Act. Learn why the notice invoking arbitration is a mandatory jurisdictional prerequisite, how it affects limitation, and view a free draft template.",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
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
  },
  "datePublished": "2026-06-12",
  "dateModified": "2026-06-12"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": section21Faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Invoke Arbitration under Section 21",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify the Dispute & Clause",
      "text": "Locate the arbitration clause within your commercial agreement and identify the specific breaches or defaults."
    },
    {
      "@type": "HowToStep",
      "name": "Draft the Section 21 Notice",
      "text": "Draft a formal notice detailing the claims, referencing the clause, and proposing three independent arbitrators."
    },
    {
      "@type": "HowToStep",
      "name": "Serve the Notice to the Respondent",
      "text": "Send the notice via Speed Post, courier, or email to ensure proof of receipt within the 3-year limitation window."
    },
    {
      "@type": "HowToStep",
      "name": "Wait for the 30-Day Response Window",
      "text": "Allow the respondent 30 days to reply or agree to one of the proposed arbitrator candidates."
    },
    {
      "@type": "HowToStep",
      "name": "File a Section 11 Petition if Appointment Fails",
      "text": "If the respondent fails to agree, file a Section 11 petition in the High Court within 3 years of the failure date."
    }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anuj Anand Malik",
  "jobTitle": "Advocate & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "sameAs": [
    "https://www.linkedin.com/in/iamanujmalik/",
    "https://www.instagram.com/amalegalsolutions/?hl=en"
  ]
};

export const metadata = {
  title: "Section 21 of Arbitration & Conciliation Act: Commencement Notice Guide",
  description: "Master Section 21 of the Arbitration and Conciliation Act. Learn why the notice invoking arbitration is a mandatory jurisdictional prerequisite, how it affects limitation, and view a free draft template.",
  keywords: [
    "section 21 of arbitration and conciliation act",
    "commencement of arbitral proceedings",
    "notice invoking arbitration",
    "limitation act 1963",
    "appointment of arbitrator",
    "section 11 arbitration act",
    "alupro building systems",
    "arif azim vs aptech",
    "ama legal solutions",
    "banking lawyers delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-section-21-of-arbitration-and-conciliation-act',
  },
  openGraph: {
    title: "Section 21 of Arbitration & Conciliation Act: Commencement Notice Guide",
    description: "Master Section 21 of the Arbitration and Conciliation Act. Learn why the notice invoking arbitration is a mandatory jurisdictional prerequisite, how it affects limitation, and view a free draft template.",
    url: 'https://www.amalegalsolutions.com/what-is-section-21-of-arbitration-and-conciliation-act',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik resolving Section 21 arbitration notice issues',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function Section21ArbitrationPage() {
  const tocSections = [
    { id: "intro", title: "What is Section 21 of the Act?" },
    { id: "statutory-breakdown", title: "Statutory Breakdown: Autonomy & Receipt" },
    { id: "mandatory-notice", title: "Why Section 21 Notice is Mandatory" },
    { id: "limitation-interplay", title: "Interplay with the Limitation Act, 1963" },
    { id: "landmark-judgments", title: "Landmark Judgments (Up to 2026)" },
    { id: "valid-notice-elements", title: "Ingredients of a Valid Notice" },
    { id: "process-timeline", title: "Timeline and Steps" },
    { id: "draft-template", title: "Section 21 Notice Draft Template" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Section 21 Arbitration Act", href: "/what-is-section-21-of-arbitration-and-conciliation-act" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Understanding Section 21 of the Arbitration & Conciliation Act
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 text-center">
              The definitive guide on the commencement of arbitral proceedings, the mandatory notice invoking arbitration, the two-stage limitation test, and standard drafting compliance.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Banking & Arbitration Lawyer
              </button>
            </Link>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            {/* Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction: What is Section 21 of the Arbitration and Conciliation Act?</h2>
                  
                  {/* Direct Answer snippet */}
                  <div className="bg-[#fcf8ee] border-l-4 border-[#D2A02A] p-6 mb-6 rounded-r-xl">
                    <p className="font-semibold text-gray-900">
                      Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings officially commence on the date the respondent receives a formal request to refer the dispute to arbitration, unless the parties have contractually agreed to a different trigger date. This notice is a mandatory jurisdictional prerequisite for invoking arbitration.
                    </p>
                  </div>

                  <p className="mb-4">
                    In civil litigation, the filing of a plaint before the competent court marks the clear beginning of legal proceedings. However, because arbitration is a private, contractual dispute resolution mechanism, a precise statutory marker is required to determine the exact moment the legal process begins. Section 21 of the Arbitration and Conciliation Act, 1996 (the "Act") serves as this temporal anchor.
                  </p>
                  <p className="mb-4">
                    This provision holds immense significance for both claimants and respondents. For claimants, the commencement date is the moment the limitation clock stops running on their substantive commercial claims. For respondents, it represents the formal notification of a dispute, ensuring they have an opportunity to participate in the choice of the arbitrator, raise jurisdictional objections, and prepare their defense. Bypassing this procedural gateway or failing to serve a valid notice can invalidate the entire arbitration.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="statutory-breakdown" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Statutory Breakdown: Autonomy & Receipt</h2>
                  
                  <p className="mb-4">
                    To fully understand Section 21, it is necessary to examine the statutory language. The provision reads:
                  </p>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6 italic text-gray-800">
                    "Unless otherwise agreed by the parties, the arbitral proceedings in respect of a particular dispute commence on the date on which a request for that dispute to be referred to arbitration is received by the respondent."
                  </div>

                  <p className="mb-4">
                    This statutory framework contains two primary legal principles: **party autonomy** and the **receipt rule**.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Party Autonomy ("Unless otherwise agreed")</h3>
                  <p className="mb-4">
                    The Act prioritizes the contract between the parties. If the arbitration clause specifies that proceedings commence on the date the claimant files a request with a particular institution (e.g., the Delhi International Arbitration Centre - DIAC, or the Singapore International Arbitration Centre - SIAC), that agreement overrides the default rule of Section 21. It is only in the absence of a specific contractual agreement that the default statutory rule is applied.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. The Receipt Rule ("received by the respondent")</h3>
                  <p className="mb-4">
                    Under the default rule, the date of commencement is not the date the claimant signs, drafts, or dispatches the notice. It is determined exclusively by the **date of receipt of the notice** by the respondent. This is a critical distinction, as any delay in transit, non-delivery, or service at an incorrect address can result in the claim becoming time-barred under the Limitation Act, 1963.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="mandatory-notice" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why the Section 21 Notice is a Mandatory Jurisdictional Prerequisite</h2>
                  
                  <p className="mb-4">
                    A frequent error in commercial disputes is to overlook the notice under Section 21 and proceed directly to filing a petition under Section 11 for the court-directed appointment of an arbitrator. However, the judiciary has consistently ruled that a Section 21 notice is not a mere procedural courtesy; it is a mandatory jurisdictional prerequisite.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Alupro Doctrine</h3>
                  <p className="mb-4">
                    The landmark judgment of the Delhi High Court in ***Alupro Building Systems Pvt. Ltd. v. Ozone Overseas Pvt. Ltd. (2017)*** clarified the mandatory nature of this notice. The Court ruled that unless the parties have agreed otherwise, the service of a notice under Section 21 is a mandatory requirement. The Court highlighted that the notice serves several vital functions:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>It informs the respondent that a specific dispute is being referred to arbitration, allowing them to prepare their defense.</li>
                    <li>It provides an opportunity for the parties to mutually agree on the appointment of a neutral arbitrator, preserving party autonomy.</li>
                    <li>It allows the respondent to contest the referral or argue that the claims are time-barred or outside the scope of the agreement.</li>
                  </ul>
                  <p className="mb-4">
                    Consequently, if a party initiates arbitration, appoints an arbitrator, and secures an arbitral award without serving a valid Section 21 notice, the entire proceedings are invalid. The resulting award is liable to be set aside under Section 34 of the Act for lack of proper notice and jurisdiction.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="limitation-interplay" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Interplay with the Limitation Act, 1963</h2>
                  
                  <p className="mb-4">
                    Under Section 43 of the Act, the Limitation Act, 1963 applies to all arbitrations. For most commercial disputes, the limitation period for initiating legal action is three years from the date the cause of action arises (the date of breach or default).
                  </p>
                  <p className="mb-4">
                    The receipt of the Section 21 notice is the exact event that stops the limitation clock for the substantive claim. If the notice is received within three years of the cause of action, the claim is timely, even if the actual tribunal is constituted or the hearings begin much later.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The "Double Limitation" Challenge</h3>
                  <p className="mb-4">
                    Legal practitioners must navigate two separate limitation periods when initiating arbitration:
                  </p>
                  <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                    <li>
                      <strong>Limitation of the Substantive Claim:</strong> The claimant must ensure that the Section 21 notice is actually received by the respondent within **three years** from the date the cause of action arose.
                    </li>
                    <li>
                      <strong>Limitation of the Section 11 Application:</strong> If the respondent receives the Section 21 notice but fails to agree to the appointment of an arbitrator within **30 days**, a dispute arises regarding the appointment. The claimant must file an application under Section 11 in court within **three years** from the expiry of that 30-day response window. This second limitation period is governed by Article 137 of the Limitation Act, 1963.
                    </li>
                  </ol>
                </section>

                {/* Section 4 */}
                <section id="landmark-judgments" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Landmark Judgments (Up to 2026)</h2>
                  
                  <p className="mb-4">
                    The Supreme Court of India has delivered several key judgments that clarify the application of Section 21 and its impact on limitation.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-950 mb-2">1. BSNL v. Nortel Networks (India) (P) Ltd. (2021)</h3>
                  <p className="mb-4 text-gray-700">
                    The Supreme Court clarified that the limitation period for filing a Section 11 application is governed by Article 137 of the Limitation Act, which allows three years from the date when the right to apply accrues (i.e., 30 days after the receipt of the Section 21 notice). The Court also ruled that while courts should generally refer disputes to arbitration, they can reject a Section 11 petition at the referral stage if the underlying claim is *ex facie* (manifestly) time-barred.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-950 mb-2">2. Arif Azim Co. Ltd. v. Aptech Ltd. (2024)</h3>
                  <p className="mb-4 text-gray-700">
                    The Supreme Court established a strict two-stage test to evaluate limitation challenges at the Section 11 stage:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li><strong>Stage 1:</strong> The court must determine whether the Section 11 petition itself is within the three-year limitation period (calculated from the failure of the appointment process after the Section 21 notice).</li>
                    <li><strong>Stage 2:</strong> The court must examine whether the underlying commercial claims are within the three-year limitation period from the date the cause of action arose to the date the Section 21 notice was served.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-950 mb-2">3. Regenta Hotels Pvt. Ltd. v. Hotel Grand Centre Point (2026)</h3>
                  <p className="mb-4 text-gray-700">
                    In this recent decision, the Supreme Court reaffirmed that the actual date of receipt of the arbitration notice under Section 21 is the only legal marker for the commencement of proceedings for limitation purposes. The Court dismissed claims where the notice was sent within three years but received by the respondent after the limitation period had expired, highlighting the absolute necessity of ensuring actual receipt within the statutory window.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="valid-notice-elements" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Key Ingredients of a Valid Section 21 Notice</h2>
                  
                  <p className="mb-4">
                    To ensure that a Section 21 notice is legally valid and capable of surviving judicial scrutiny, it must contain specific structural and substantive elements:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                    <li>
                      <strong>Explicit Reference to the Arbitration Agreement:</strong> The notice must clearly identify the underlying contract and quote the specific clause that provides for arbitration.
                    </li>
                    <li>
                      <strong>Clear Description of the Dispute:</strong> The notice must outline the nature of the dispute, the facts giving rise to the claims, and, where possible, the approximate monetary value of the claims.
                    </li>
                    <li>
                      <strong>Clear Invocation of the Arbitration Clause:</strong> The language must show a clear, unequivocal intent to refer the disputes to arbitration. Using phrases like *"we hereby invoke the arbitration clause"* is highly recommended.
                    </li>
                    <li>
                      <strong>Proposing the Arbitrator Name (Perkins Compliance):</strong> Following the Supreme Court judgments in *TRF Ltd. (2017)* and *Perkins Eastman (2020)*, unilateral appointment of an arbitrator by one of the parties is invalid. The Section 21 notice should propose a panel of independent, neutral arbitrators and call upon the respondent to agree to one of the proposed names or suggest their own neutral candidates within 30 days.
                    </li>
                    <li>
                      <strong>Proper Service:</strong> The notice must be served to the respondent's valid address in compliance with the service rules under Section 3 of the Act.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="process-timeline" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Section 21 Notice Timeline and Process</h2>
                  
                  <div className="space-y-6">
                    {/* Step-by-step UI Timeline */}
                    <div className="relative border-l-2 border-[#D2A02A] ml-4 pl-6 space-y-8">
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white rounded-full w-4 h-4 flex items-center justify-center ring-4 ring-white"></span>
                        <h4 className="font-bold text-gray-900">Step 1: Cause of Action arises</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          A breach of contract or default occurs. The limitation clock starts ticking. The claimant must act within three years.
                        </p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white rounded-full w-4 h-4 flex items-center justify-center ring-4 ring-white"></span>
                        <h4 className="font-bold text-gray-900">Step 2: Draft and Send Section 21 Notice</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          The claimant drafts the notice invoking arbitration, proposes neutral arbitrator names, and sends it to the respondent's registered address.
                        </p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white rounded-full w-4 h-4 flex items-center justify-center ring-4 ring-white"></span>
                        <h4 className="font-bold text-gray-900">Step 3: Actual Receipt of Notice by Respondent</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          The notice is received by the respondent. Arbitral proceedings officially commence on this date, and the limitation clock for the substantive claim stops running.
                        </p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white rounded-full w-4 h-4 flex items-center justify-center ring-4 ring-white"></span>
                        <h4 className="font-bold text-gray-900">Step 4: 30-Day Response Window</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          The respondent has 30 days to agree to a proposed arbitrator or suggest alternative candidates.
                        </p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white rounded-full w-4 h-4 flex items-center justify-center ring-4 ring-white"></span>
                        <h4 className="font-bold text-gray-900">Step 5: File Section 11 Application (If needed)</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          If the respondent fails to respond or agree within 30 days, the claimant must file a Section 11 petition in the High Court within three years from the date of failure.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="draft-template" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Standard Draft Template: Section 21 Notice</h2>
                  
                  <p className="mb-4">
                    Below is a standard template for a notice invoking arbitration under Section 21. This draft complies with the anti-unilateral appointment rules established in *Perkins Eastman*.
                  </p>

                  <div className="bg-gray-950 text-gray-200 p-6 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed shadow-lg">
                    <pre className="whitespace-pre-wrap">
{`BY REGISTERED A.D. / SPEED POST / EMAIL

Date: [Insert Date]

To,
[Respondent's Name]
[Respondent's Address]

Subject: Notice invoking Arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 in respect of disputes arising out of the Agreement dated [Insert Date].

Sir/Madam,

Under instructions from and on behalf of our Client, [Claimant's Name], having their office at [Claimant's Address], we hereby serve you with the following notice:

1. That you entered into an Agreement dated [Insert Date] (the "Agreement") with our Client for [Insert Brief Purpose of the Agreement]. 
2. Clause [Insert Clause Number] of the Agreement contains the Arbitration Agreement between the parties, which reads as follows:
   "[Quote the Arbitration Clause verbatim]"
3. That disputes have arisen between the parties due to your failure to [Describe the breach/default, e.g., clear outstanding invoices amounting to INR X]. Despite multiple reminders dated [Insert Dates], you have failed to resolve these disputes.
4. Accordingly, our Client hereby invokes the Arbitration Clause (Clause [Number]) of the Agreement and refers the disputes to arbitration.
5. In terms of the judgments of the Hon'ble Supreme Court in TRF Ltd. and Perkins Eastman, we propose the following panel of three independent arbitrators for your consideration to act as the Sole Arbitrator:
   a. Justice (Retd.) [Name], Retired Judge of the [Name] High Court.
   b. Justice (Retd.) [Name], Retired Judge of the [Name] High Court.
   c. Mr. [Name], Senior Advocate, [Name] High Court.
6. You are requested to confirm your agreement to the appointment of any one of the above-named individuals as the Sole Arbitrator within 30 days from the receipt of this notice, failing which our Client shall be constrained to file an application under Section 11 of the Arbitration and Conciliation Act, 1996 before the Hon'ble High Court at [Jurisdiction].

Yours faithfully,

For [Name of Law Firm / Advocate]

[Signature]
[Advocate's Name]`}
                    </pre>
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {section21Faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Author Bio Box */}
                <section className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/newAssets/bhiya.png"
                      alt="Advocate Anuj Anand Malik resolving Section 21 arbitration notice issues"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking Law & Arbitration Specialist</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is an expert in banking, debt recovery, and commercial arbitration law. He has represented corporate entities and individual borrowers in numerous complex arbitration matters, challenging unilateral arbitrator appointments and securing favorable settlements. He is a registered advocate with the Bar Council of Delhi and actively participates in panels with the Mumbai Centre for International Arbitration (MCIA).
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Trust Signals Footer Block */}
                <div className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </div>

                {/* Final CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Received an Arbitration Notice?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Do not ignore legal notices. Challenge unilateral appointments, verify limitation periods, and protect your commercial interests. Talk to our senior advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking and arbitration lawyers in Sector 57, Gurugram.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Got Arbitration Notice?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-kya-hota-hai" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Settlement Kya Hota Hai
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Credit Card Dues Settle
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
