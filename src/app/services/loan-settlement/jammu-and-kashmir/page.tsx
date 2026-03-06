import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Jammu & Kashmir | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in J&K? AMA Legal Solutions offers expert loan settlement services in Srinagar, Jammu & across the UT. Stop harassment & settle legally.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/jammu-and-kashmir',
  },
  openGraph: {
    title: "Loan Settlement in Jammu & Kashmir | Expert Debt Relief Lawyers",
    description: "Struggling with debt in J&K? AMA Legal Solutions offers expert loan settlement services in Srinagar, Jammu & across the UT. Stop harassment & settle legally.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/jammu-and-kashmir",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Jammu & Kashmir",
      },
    ],
  },
};

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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jammu & Kashmir",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/jammu-and-kashmir"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Jammu & Kashmir: Legal Debt Relief",
  "description": "Comprehensive guide to loan settlement in Jammu & Kashmir. Learn how to legally settle personal loans and credit card debt in J&K using Lok Adalat and DRT Chandigarh jurisdiction.",
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
  "datePublished": "2023-11-21",
  "dateModified": "2024-01-20"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Jammu & Kashmir",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Jammu & Kashmir.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "580"
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
        "name": "Bilal Ahmed"
      },
      "reviewBody": "I was facing issues with my business loan in Srinagar. AMA Legal Solutions helped me navigate the settlement process smoothly and stopped the bank auctions."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Sharma"
      },
      "reviewBody": "Great support for credit card settlement in Jammu. They handled the harassment calls effectively and closed my file."
    }
  ]
};

export default function JammuKashmirLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "financial-landscape", title: "J&K Financial Landscape" },
    { id: "legal-framework", title: "Legal Framework (SARFAESI & DRT)" },
    { id: "jk-bank-settlement", title: "J&K Bank Settlement Policy" },
    { id: "lok-adalat", title: "Process of Lok Adalat" },
    { id: "sector-challenges", title: "Sector Specific Relief" },
    { id: "drt-challenges", title: "DRT Chandigarh Challenges" },
    { id: "strategic-process", title: "Our Settlement Process" },
    { id: "documentation", title: "Required Documentation" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Jammu & Kashmir", href: "/services/loan-settlement/jammu-and-kashmir" },
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/cities/srinagar-dal-lake.jpg')", backgroundBlendMode: 'overlay', backgroundColor: '#333' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Jammu & Kashmir</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Specialized legal defense against debt harassment in the Union Territory. We help residents of Srinagar, Jammu, Anantnag, and Baramulla settle loans with dignity under SARFAESI and RBI guidelines.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
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
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Debt Freedom in the Valley and Plains</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The economic narrative of Jammu and Kashmir is one of resilience amidst uncertainty. Residents and business owners here face a unique set of challenges that are unlike any other region in India. The periodic disruptions to trade, tourism, and transport have historically severely impacted cash flows, often leading to unavoidable debt traps. When a Shikara owner's season is cut short, or an apple grower's harvest cannot reach the mandi on time, the repayment schedules set by banks do not pause. This reality creates a disconnect between the rigid banking timelines and the fluid economic ground reality of the Union Territory.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand that a default in J&K is often circumstantial rather than willful. Whether you are dealing with a term loan from J&K Bank, a business credit line from SBI, or personal debts from private lenders, the pressure can be immense. The transition of J&K to a Union Territory has also streamlined the application of central banking laws, bringing agencies like the Debt Recovery Tribunal (DRT) into sharper focus.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our mission is to bridge the gap between your financial capability and the bank's recovery demands. Loan settlement is not merely a financial transaction; for the people of Jammu and Kashmir, it is a pathway to reclaiming peace of mind. We provide the legal fortitude required to stand up against intimidation and negotiate a settlement that respects your dignity and your family's future.
                  </p>
                </section>

                {/* Financial Landscape */}
                <section id="financial-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unique Financial Landscape of J&K</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The banking ecosystem in Jammu and Kashmir is dominated by regional giants and nationalized players. The <strong>Jammu & Kashmir Bank (J&K Bank)</strong> holds a systemic importance here, serving as the primary lender for a vast majority of the population. Understanding the internal policies of J&K Bank is crucial for effective settlement, as they often have specific "Rehabilitation" and "One Time Settlement" (OTS) schemes tailored for the region's specific distress periods.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike metropolitan cities where credit card debt dominates, J&K sees a high volume of <strong>MSME loans, KCC (Kisan Credit Card) loans, and transport loans</strong> turning into Non-Performing Assets (NPAs). The reason is often external:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li><strong>Tourism Volatility:</strong> Hotels in Gulmarg, Pahalgam, and Katra rely on a few peak months. A single bad season can trigger a default.</li>
                    <li><strong>Horticulture Dependencies:</strong> Apple and Saffron trade is weather and logistics dependent. Supply chain blockades can wipe out a year's revenue, making KCC repayment impossible.</li>
                    <li><strong>Transport Sector:</strong> From local matadors to interstate trucks, the transport sector often faces operational halts, leading to vehicle seizures by banks.</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700">
                    In this landscape, a "one size fits all" approach to debt settlement fails. A legal team must argue on the basis of <em>force majeure</em> or genuine economic hardship specific to the valley's conditions to secure a favorable waiver.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: SARFAESI and the J&K Context</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legal machinery for debt recovery in J&K has evolved. Prior to recent legislative changes, the applicability of the SARFAESI Act was a subject of intense legal debate. However, the Supreme Court has clarified its application, meaning banks in J&K now have full powers to enforce security interest without court intervention.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">SARFAESI Act, 2002</h3>
                    <p className="text-blue-800">
                      This Act allows banks to take possession of collateral (your home or shop) if the loan is classified as NPA. In J&K, we see aggressive use of Section 13(2) (Demand Notice) and Section 13(4) (Possession Notice). <strong>Crucially, you have 60 days to respond to a 13(2) notice.</strong> Failing to do so can be fatal to your case. We draft robust legal objections citing specific procedural lapses by the bank.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of District Magistrates</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under Section 14 of the SARFAESI Act, banks approach the District Magistrate (DM) in Srinagar, Jammu, or other districts to seek physical possession of the property. Our legal interventions often happen at this stage. We represent clients before the DM's office to prove that the bank has not followed due process, often delaying or halting the possession orders to buy time for a structured settlement.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">J&K Debtors Relief Act & Money Lenders Act</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     While central laws focus on banks, the <strong>Jammu and Kashmir Debtors Relief Act, 1976</strong> and the <strong>J&K Money Lenders and Accredited Loan Providers Act, 2010</strong> provide specific shields against private money lenders and informal debts. These acts are designed to protect the weaker sections from usurious interest rates and coercive recovery, a common issue in rural districts of the UT.
                  </p>
                </section>

                {/* J&K Bank Settlement */}
                <section id="jk-bank-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating J&K Bank Settlements</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    As the premier financial institution, J&K Bank has specific protocols. They frequently release <strong>Special One Time Settlement (SOTS)</strong> schemes. These schemes are often time-bound and offer significant waivers on accumulated interest.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, simply applying for an OTS does not guarantee approval. The bank assesses the "Net worth" and "Repaying Capacity" of the borrower. A common mistake borrowers make is disclosing liquid assets or income sources during negotiations, which leads the bank to demand a higher settlement amount.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our team specializes in:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mb-6 text-gray-700">
                    <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong>Analyzing the Sanction Letter:</strong> Finding clauses that may have been violated by the bank itself during the loan tenure.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong>Challenging NPA Dates:</strong> Banks often wrongly classify accounts as NPA. If we can prove the classification was premature, the entire recovery proceeding can be quashed.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong>Negotiating Waivers:</strong> We push for the removal of penal interest, legal charges, and other hidden costs that inflate the outstanding amount.
                    </li>
                    <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong>Structured Payments:</strong> Negotiating for the settlement amount to be paid in installments (e.g., upfront 10-25% and balance in 3-6 months).
                    </li>
                  </ul>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Lok Adalat in J&K</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Jammu & Kashmir Legal Services Authority</strong> actively organizes National Lok Adalats. These take place in District Court Complexes across all districts including Anantnag, Pulwama, Udhampur, and Kathua.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why Lok Adalat is Effective</h3>
                    <p className="text-green-800 mb-4">
                      For amounts up to ₹20 Lakhs (and sometimes higher depending on the bench), Lok Adalats offer the fastest route. The process is non-adversarial. It's not about winning or losing, but about finding a middle ground.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-green-800">
                      <li><strong>Finality:</strong> The award passed by the Lok Adalat is deemed a decree of a civil court and is <strong>final and non-appealable</strong>. This brings immediate closure.</li>
                      <li><strong>Court Fee Refund:</strong> If a pending court case is settled in Lok Adalat, the court fees paid are refunded to the parties.</li>
                      <li><strong>Amicable Environment:</strong> The setting is less formal than a courtroom, encouraging open negotiation between the bank manager and the borrower.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We prepare our clients for Lok Adalat sessions, advising them on the maximum and minimum limits for settlement. We ensure that the settlement deed is drafted correctly to prevent any future claims by the bank.
                  </p>
                </section>

                {/* Sector Specific Challenges */}
                <section id="sector-challenges" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Sector-Specific Relief Strategies</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Hospitality & Houseboats</h3>
                      <p className="text-gray-700">
                        Houseboat owners on Dal and Nigeen lakes and hoteliers often face capital-intensive maintenance costs even when tourism is low. We help these businesses restructure their term loans, often converting the interest into a separate funded interest term loan (FITL) or settling the debt outright based on the asset's realizable value rather than book value.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Education Loans</h3>
                      <p className="text-gray-700">
                        Many students from J&K struggle with education loan repayments due to delayed employment. We work with banks to apply the Model Educational Loan Scheme guidelines, seeking moratorium extensions or settlements that consider the student's current income rather than the guarantor's assets.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Government Employees</h3>
                      <p className="text-gray-700">
                        Government employees in J&K are often targeted for personal loans. When over-leveraged, they face the threat of salary attachment directions sent to their DDOs (Drawing and Disbursing Officers). We intervene legally to stay such attachments, arguing that a minimum subsistence allowance must remain untouched.
                      </p>
                    </div>
                  </div>
                </section>

                {/* DRT Challenges */}
                <section id="drt-challenges" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge of DRT Chandigarh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most significant procedural hurdles for J&K residents is that the jurisdiction for debt recovery lies with the <strong>Debt Recovery Tribunal (DRT) in Chandigarh</strong>. There is no operational DRT bench permanently sitting in Srinagar or Jammu.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This geographic distance creates a severe access to justice issue. Banks often file cases in Chandigarh, and borrowers are unable to travel or hire expensive Chandigarh-based counsel to defend themselves. This often leads to <em>ex-parte</em> orders where the bank wins simply because the borrower didn't show up.
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-xl font-bold text-red-900 mb-3">How We Bridge This Gap</h3>
                    <p className="text-red-800">
                      AMA Legal Solutions has a dedicated network. We handle the filings and representation at DRT Chandigarh so you don't have to travel. Furthermore, citing the lack of a local forum, we frequently approach the <strong>High Court of Jammu & Kashmir and Ladakh</strong> under its writ jurisdiction (Article 226). The High Court has been sympathetic to borrowers who cannot access the DRT, often granting stays on auction notices to protect the fundamental right to shelter.
                    </p>
                  </div>
                </section>

                {/* Process */}
                <section id="strategic-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We treat every case as a project with clear milestones. Here is the detailed roadmap we follow for our J&K clients:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Assessment & Preservation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by assessing the stage of your default. Is it SMA-2? NPA? Has a 13(2) notice been served? Our first priority is asset preservation—ensuring your home or shop is not immediately sealed. We advise you on handling recovery agents and stopping illegal communication.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Reply & Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We draft a comprehensive legal reply to the bank's notices. In this reply, we highlight discrepancies in relevant statements of accounts and challenge the interest calculations. This formal legal stance forces the bank to treat the matter seriously and often shifts the file from the recovery department to the settlement table.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">The OTS Proposal</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We draft a realistic One Time Settlement (OTS) proposal. We submit this not just to the branch manager, who often has limited powers, but escalate it to the Zonal or Circle office of the bank. We substantiate the proposal with proof of financial hardship to justify the haircut (waiver) we are demanding.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This is where our experience counts. We negotiate the final figure, ensuring it is within your means. Once agreed, we vet the settlement letter to ensure there are no hidden clauses. Upon payment, we ensure the release of the 'No Dues Certificate' and the return of your original property documents / cheques.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documentation</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To build a strong case for settlement, we require a comprehensive set of documents. Having these ready expedites the process.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity & Loan Details</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> PAN Card & Aadhar Card (of borrower and guarantors)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Loan Sanction Letter (Original)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Statement of Account (From start to date)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> All Legal Notices received (13(2), 13(4), Summons)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Evidence</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Income Tax Returns (Last 3 years - to show income drop)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Medical records (if health issues caused default)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Business closure proof (GST cancellation etc.)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Details of other liabilities and loans</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Reclaim Your Financial Freedom</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt define your future in Jammu & Kashmir. Our legal experts are ready to stand by your side and secure the relief you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Serving Srinagar, Jammu, Anantnag, Baramulla, and all of J&K.
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our loan settlement lawyers in Jammu & Kashmir today.
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

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Debt Consolidation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Banking & Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Civil Litigation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Arbitration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                We settle loans from the following banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                <Link 
                  href="/services/loan-settlement/sbi-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SBI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hdfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">HDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/icici-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">ICICI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kotak-mahindra"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kotak Mahindra</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/idfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/yes-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Yes Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bajaj-finserv"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bajaj Finserv</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/axis-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Axis Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bank-of-baroda"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bank of Baroda</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hero-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Hero Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/poonawalla-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Poonawalla Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/tata-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tata Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/federal-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Federal Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/payu-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">PayU Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/krazybee"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">KrazyBee</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/au-small-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">AU Small Finance Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/northern-arc"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Northern Arc</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dmi-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DMI Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/piramal-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Piramal Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dbs-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DBS Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/south-indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">South Indian Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/si-creva"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Si Creva (Kissht/Ring)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/stashfin"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Stashfin</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/l-and-t-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">L&T Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/american-express"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">American Express</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/standard-chartered"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Standard Chartered</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/true-credits"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">True Credits (TrueBalance)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/moneyview"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Moneyview</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/vivriti-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Vivriti Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kisetsu-saison-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kisetsu Saison Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/indusind-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IndusInd Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/smfg-india-credit"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SMFG India Credit</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/fibe"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Fibe (EarlySalary)</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our loan settlement services are available for all major banks in India
                </p>
              </div>
            </section>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Karnataka": "karnataka",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
