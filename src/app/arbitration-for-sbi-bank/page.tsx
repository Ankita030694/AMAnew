import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 15 unique FAQs for State Bank of India (SBI)
const sbiFaqs = [
  {
    question: "Can State Bank of India unilaterally nominate a sole arbitrator?",
    answer: "No. The Supreme Court of India in the Perkins Eastman ruling held that no party with a financial interest in a dispute can unilaterally appoint an arbitrator. SBI must obtain the borrower's written consent, otherwise the appointment is invalid under Section 12(5) of the Arbitration Act."
  },
  {
    question: "What is the SBI Rinn Samadhan Scheme?",
    answer: "The Rinn Samadhan Scheme is a special compromise settlement program introduced by SBI to resolve chronic non-performing assets (NPAs). It offers substantial waivers on accumulated interest, penalties, and legal charges, allowing borrowers to settle accounts with a lump-sum payment."
  },
  {
    question: "What should I do if I receive an SBI Lok Adalat notice?",
    answer: "Do not ignore it. A Lok Adalat notice is a court-sponsored opportunity to negotiate a compromise settlement directly with SBI's recovery team in a supervised environment. Attending can help you secure high waiver percentages."
  },
  {
    question: "Can I settle my SBI credit card or personal loan during active arbitration?",
    answer: "Yes. SBI regularly settles outstanding debts through a One-Time Settlement (OTS) even while arbitration proceedings are underway. The bank prefers a compromise to avoid protracted court litigation."
  },
  {
    question: "How long do SBI arbitration proceedings usually take?",
    answer: "Under Section 29A of the Arbitration and Conciliation Act, the arbitrator must pass the final award within 12 months from the completion of pleadings. Most SBI cases are resolved in seven to ten months."
  },
  {
    question: "What is the procedure to challenge a final SBI arbitral award?",
    answer: "You must file a set-aside petition under Section 34 of the Arbitration Act in a civil or commercial court. This challenge must be submitted within 90 days from the date you received the signed copy of the award."
  },
  {
    question: "Where are SBI arbitration hearings and Lok Adalat sessions held?",
    answer: "SBI arbitration hearings may take place online or at designated physical venues in cities like Kolkata or Mumbai. Lok Adalat sessions are conducted at the local district court complex corresponding to your location."
  },
  {
    question: "Can SBI file a police case if I fail to pay my EMI?",
    answer: "No, simple loan default is a civil matter. However, if your repayment cheques or NACH auto-debit mandates bounce, SBI can file a criminal case under Section 138 of the Negotiable Instruments Act."
  },
  {
    question: "What is the function of the arbitrator in SBI debt disputes?",
    answer: "The arbitrator functions as an independent private judge to examine the claims submitted by SBI and the objections of the borrower, eventually issuing a legally binding decision known as an arbitral award."
  },
  {
    question: "Can SBI directly attach my salary or freeze bank accounts?",
    answer: "No. SBI cannot attach your assets or freeze your accounts directly. The bank must first obtain a final arbitral award or a Lok Adalat consent decree and then file an execution petition under Section 36 in civil court."
  },
  {
    question: "What documentation is required to qualify for an SBI OTS?",
    answer: "You need to show evidence of genuine financial distress. This includes employment termination letters, salary slips showing pay cuts, medical summaries, or audited financial statements showing business losses."
  },
  {
    question: "Does the SBI settlement letter specify the waived amount?",
    answer: "Yes, the official settlement letter issued by SBI will clearly state the outstanding balance, the waived portion, the final compromise amount, and the payment schedule. Verify it directly with SBI's branch manager."
  },
  {
    question: "Can SBI initiate arbitration against a loan guarantor?",
    answer: "Yes. Under Section 128 of the Indian Contract Act, the guarantor's liability is co-extensive with the borrower. SBI can initiate joint arbitration proceedings against both parties to recover the dues."
  },
  {
    question: "Is Sama ODR platform legal for SBI disputes?",
    answer: "Yes, ODR platforms are legal under the Arbitration Act, 1996, provided they comply with principles of natural justice and independent arbitrator appointments."
  },
  {
    question: "How do I clear my CIBIL score after settling with SBI?",
    answer: "Rebuild your credit history by obtaining a secured credit card against a fixed deposit. Make regular small purchases and pay the outstanding amount in full monthly to restore your score over 12 to 24 months."
  }
];

// Schemas
const sbiBreadcrumbSchema = {
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
      "name": "SBI Bank Arbitration Guide",
      "item": "https://www.amalegalsolutions.com/arbitration-for-sbi-bank"
    }
  ]
};

const sbiArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SBI Bank Arbitration & Lok Adalats: Defend Your Rights",
  "description": "Facing SBI Bank arbitration or Lok Adalat notices? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
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

const sbiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": sbiFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const sbiLegalServiceSchema = {
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

const sbiHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Settle SBI Loan Under Lok Adalat or Arbitration",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Review the Notice Details",
      "text": "Carefully read the Lok Adalat summons or arbitration notice to verify the outstanding balance and arbitrator details."
    },
    {
      "@type": "HowToStep",
      "name": "Prepare hard copies of Hardship",
      "text": "Collect documented proofs of your financial hardship, including termination letters, medical summaries, or business loss audits."
    },
    {
      "@type": "HowToStep",
      "name": "Attend the Session",
      "text": "Present your case before the Lok Adalat panel or submit written objections challenging unilateral arbitrator appointments under Section 12(5)."
    },
    {
      "@type": "HowToStep",
      "name": "Secure the compromise terms",
      "text": "Negotiate a compromise OTS, checking that the settlement letter details all waived amounts and payment dates."
    },
    {
      "@type": "HowToStep",
      "name": "Clear the settled sum",
      "text": "Pay the compromise balance, secure a No Dues Certificate, and verify that the bank has formally withdrawn the case."
    }
  ]
};

const sbiPersonSchema = {
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
  title: "SBI Bank Arbitration: Defend Your Rights and Settle Dues",
  description: "Facing SBI Bank arbitration or Lok Adalat notices? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
  keywords: [
    "loan settlement",
    "sbi bank arbitration",
    "sbi loan settlement",
    "sbi lok adalat notice",
    "unilateral arbitrator sbi",
    "sbi card settlement",
    "recovery agent harassment help",
    "banking lawyers delhi",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/arbitration-for-sbi-bank',
  },
  openGraph: {
    title: "SBI Bank Arbitration: Defend Your Rights and Settle Dues",
    description: "Facing SBI Bank arbitration or Lok Adalat notices? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
    url: 'https://www.amalegalsolutions.com/arbitration-for-sbi-bank',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik resolving SBI Bank loan arbitration',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function SBIArbitrationPage() {
  const tocSections = [
    { id: "intro", title: "State Bank of India (SBI) Loan Defaults: Understanding Your Rights" },
    { id: "recovery-channels", title: "SBI Recovery Mechanisms: Lok Adalats vs. Arbitration" },
    { id: "arbitrator-challenges", title: "Challenging the Appointed SBI Arbitrator" },
    { id: "settlement-schemes", title: "Navigating the SBI Rinn Samadhan & OTS Process" },
    { id: "harassment-rules", title: "Filing Complaints Against SBI Recovery Agents" },
    { id: "award-objections", title: "How to Object to SBI Arbitral Awards & Summon Orders" },
    { id: "cibil-recovery", title: "Credit Score Restoration After SBI Settlement" },
    { id: "success-cases", title: "SBI Dispute Resolution Case Studies" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "SBI Bank Arbitration", href: "/arbitration-for-sbi-bank" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiBreadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiArticleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiFaqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiLegalServiceSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiHowToSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sbiPersonSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Dealing with State Bank of India (SBI) Arbitration or Lok Adalats?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Understand the legal framework of SBI Bank arbitration and Lok Adalat notices. Learn how to settle your outstanding personal loans or credit cards, stop recovery calls, and protect your credit history.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Free Legal Consultation
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">State Bank of India (SBI) Loan Defaults: Understanding Your Rights</h2>
                  <p className="mb-4">
                    Unforeseen financial hardships like salary cuts, medical emergencies, or commercial losses can cause honest borrowers to default on their credit card bills, agricultural loans, or personal loans from State Bank of India (SBI). When a default occurs, SBI's collection department takes action to recover the money. To bypass the clogged civil court system, SBI regularly invokes out-of-court recovery options, including online arbitration or referring pre-litigation disputes to Lok Adalats.
                  </p>
                  <p className="mb-4">
                    If you receive a pre-litigation Lok Adalat summons or an online arbitration notice from SBI, ignoring the notice is a severe mistake. Doing so will lead to ex-parte arbitral awards or the Lok Adalat panel recording your non-cooperation. This allows the bank to approach civil courts to attach your wages, freeze accounts, or garnish assets. Taking active steps early enables you to negotiate a compromise One-Time Settlement (OTS) and close the case legally.
                  </p>
                  <p className="mb-4">
                    Our team of legal professionals at AMA Legal Solutions, led by Advocate Anuj Anand Malik, regularly assists clients in resolving outstanding SBI debts. We defend you against biased sole arbitrator appointments, represent you at Lok Adalat sessions, and help execute legally binding settlement contracts under RBI parameters.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="recovery-channels" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">SBI Recovery Mechanisms: Lok Adalats vs. Arbitration</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    State Bank of India employs two primary out-of-court recovery avenues. For larger personal or business debts, they initiate arbitration proceedings under the 1996 Act. For credit card defaults and small consumer loans, they regularly refer cases to district-level Lok Adalats, which provide a direct, court-guided settlement environment.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding SBI Lok Adalat Summons</h3>
                  <p className="mb-4 text-gray-700">
                    Lok Adalats are statutory forums organized under the Legal Services Authorities Act, 1987. They are held inside local district court complexes. When SBI refers a pre-litigation case to a Lok Adalat, it is a formal invitation to reach a mutual compromise. If an agreement is signed, the panel passes a consent decree, which holds the same weight as a civil court decree. There is no appeal allowed against this decree. If you want general guidance on responding to such notices, read our post <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-[#D2A02A] hover:underline font-semibold">got an arbitration notice dont worry we got you</Link> for key details.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="arbitrator-challenges" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Challenging the Appointed SBI Arbitrator</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    A common issue in SBI arbitration cases is the bank's unilateral appointment of a sole arbitrator from their internal panel. Under Section 12(5) of the Arbitration Act, any arbitrator unilaterally selected by one interested party without the other party's written consent is illegal. Borrowers have the right to challenge this unilateral appointment to ensure a fair and independent trial.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Perkins Eastman Precedent</h3>
                  <p className="mb-4 text-gray-700">
                    The Supreme Court in *Perkins Eastman Architects DPC v. HSCC (India) Ltd.* held that an interested entity cannot appoint an arbitrator unilaterally. This precedent applies directly to SBI debt cases. If you want to understand how this rule applies to personal loan recoveries, refer to <Link href="/personal-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">personal loan settlement</Link> for detailed legal context.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="settlement-schemes" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Navigating the SBI Rinn Samadhan & OTS Process</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    An OTS (One-Time Settlement) is a practical legal route to resolve an SBI debt. Once an account remains unpaid for over 90 days and is classified as a Non-Performing Asset (NPA), the bank is open to compromise settlements. Depending on your financial distress, you can negotiate waivers of 50% to 80% on accumulated interest and penalties under SBI's compromise guidelines.
                  </p>

                  <h3 className="The Rinn Samadhan Scheme">The Rinn Samadhan Scheme</h3>
                  <p className="mb-4 text-gray-700">
                    SBI occasionally launches settlement schemes like *Rinn Samadhan* targeting stressed assets. These public sector initiatives offer predefined compromise parameters. To qualify, you must show proof of genuine financial hardship, such as medical records, business loss audits, or job loss letters. Our advocates draft formal compromise representations to present to SBI's credit committee.
                  </p>
                  <p className="mb-4 text-gray-700">
                    For a simple explanation of how loan settlements work in Hindi, visit our translation guide <Link href="/loan-settlement-kya-hota-hai" className="text-[#D2A02A] hover:underline font-semibold">loan settlement kya hota hai</Link>.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Make sure you receive a genuine and signed settlement letter. Read our guide on <Link href="/loan-settlement-letter-from-bank" className="text-[#D2A02A] hover:underline font-semibold">loan settlement letter from bank</Link> to ensure authenticity.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="harassment-rules" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Filing Complaints Against SBI Recovery Agents</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    If SBI's third-party recovery agents call your colleagues, use abusive language, or make unannounced home visits at odd hours, they are violating the RBI Fair Practices Code. Borrowers can stop this harassment by filing a formal complaint with SBI's nodal officer, reporting them to the RBI Ombudsman, or sending a cease-and-desist legal notice.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Legal Rights Against Agents</h3>
                  <p className="mb-4 text-gray-700">
                    Under Reserve Bank guidelines, collection agents can only call you between 8:00 AM and 7:00 PM. They cannot violate your privacy or threaten legal action they cannot take. Defaulters should record calls and preserve text messages as proof. For business or commercial loan defaults, read our specific guide at <Link href="/business-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">business loan settlement</Link>.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="award-objections" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">How to Object to SBI Arbitral Awards & Summon Orders</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    If SBI obtains an ex-parte arbitral award against you, you have 90 days to challenge it by filing a petition under Section 34 of the Arbitration Act in a civil court. Common grounds include lack of proper notice of the proceedings or a unilaterally appointed arbitrator. You should also file a Section 36 stay application to block the bank from executing the award.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Staying Execution Proceedings</h3>
                  <p className="mb-4 text-gray-700">
                    A Section 34 petition does not automatically stop SBI from executing the award. You must file a stay application under Section 36(3). Without this stay, the bank's panel lawyers will file an execution petition in court to garnish your salary or freeze accounts. Our legal team represents borrowers in civil courts to obtain stay orders.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="cibil-recovery" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Credit Score Restoration After SBI Settlement</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    Settling an SBI loan harms your credit score because the bank reports the account status as 'Settled' to credit bureaus. This status remains on your credit record for seven years, making it difficult to qualify for unsecured loans. You can rebuild your credit score by getting a secured credit card and paying the bills in full monthly.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rebuilding Your Score</h3>
                  <p className="mb-4 text-gray-700">
                    After you receive your No Dues Certificate, verify that SBI reports the 'Settled' status to CIBIL. For credit card settlements, check our page on <Link href="/credit-card-settlement" className="text-[#D2A02A] hover:underline font-semibold">credit card settlement</Link>.
                  </p>
                  <p className="mb-4 text-gray-700">
                    For a step-by-step credit rebuilding program, consult our guide on <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">how to improve CIBIL score after loan settlement</Link>.
                  </p>
                </section>

                {/* Client Success Stories */}
                <section id="success-cases" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">SBI Dispute Resolution Case Studies</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I received a pre-litigation Lok Adalat notice from SBI regarding a defaulted business/personal loan of 8 Lakhs. I consulted AMA Legal Solutions. Advocate Anuj Anand Malik accompanied me to the Lok Adalat session at the Bhopal court complex. He negotiated a compromise settlement under the bank's ongoing OTS scheme, reducing the final payable amount to 2.4 Lakhs."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Devendra Kumar</p>
                          <p className="text-xs text-gray-500">Bhopal, Madhya Pradesh</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "SBI obtained an ex-parte arbitral award against me in Kolkata for a personal loan of 5 Lakhs. They then filed an execution petition in court to attach my properties. AMA Legal Solutions filed a Section 34 petition and obtained an interim stay. Subsequently, they negotiated a settlement at a National Lok Adalat bench for 1.7 Lakhs, resolving my case permanently."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita Banerjee</p>
                          <p className="text-xs text-gray-500">Kolkata, West Bengal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {sbiFaqs.map((faq, index) => (
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
                      alt="Advocate Anuj Anand Malik resolving SBI Bank loan arbitration"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking Law & Loan Settlement Lawyer</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is a recognized legal consultant and banking lawyer. He has represented thousands of borrowers in debt restructurings, One-Time Settlements (OTS), and arbitration disputes across India. He is a registered advocate with the Bar Council of Delhi, a member of the Indo-American Chamber of Commerce (IACC), and the Mumbai Centre for International Arbitration (MCIA).
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
                    <h2 className="text-2xl md:text-4xl font-bold">Struggling with SBI Arbitration?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Get professional legal protection against recovery harassment and resolve your outstanding loan under RBI guidelines. Talk to our senior advocates today.
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
                  Talk to our banking lawyers in Sector 57, Gurugram.
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
