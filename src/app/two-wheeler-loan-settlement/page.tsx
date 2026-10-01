import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import InteractiveLeadModalTrigger from "@/components/InteractiveLeadModalTrigger";

// FAQ data for rendering and JSON-LD Schema
const faqs = [
  {
    question: "Kya bike loan settlement hota hai? Can we settle a two-wheeler loan in India?",
    answer: "Haan, bilkul. Kya bike loan settlement hota hai? Yes, two-wheeler and bike loan settlement is 100% legal and permissible under Indian banking regulations and the Contract Act. When a bike owner faces genuine financial hardship—such as job loss, medical emergency, business setback, or family distress—banks and NBFCs prefer a One-Time Settlement (OTS) rather than spending money on prolonged recovery or auctioning a depreciated two-wheeler."
  },
  {
    question: "Bike loan settlement kaise kare? (Two wheeler loan settlement step-by-step process)",
    answer: "Bike loan settlement kaise kare: 1) Apne loan statement ka legal audit karwayen taaki unfair penal interest aur bounce charges hataye ja sakein. 2) Advocate ke zariye bank ko legal notice bhejkar recovery agent harassment aur illegal bike seizure turant rokein. 3) Bank ke nodal/settlement officer ke samne genuine financial hardship documents submit karein. 4) Formal OTS table par 40% se 65% tak ka waiver negotiate karein. 5) Bank ka official settlement letter aane par direct bank account mein payment karein aur No Dues Certificate (NDC) aur Form 35 hasil karein."
  },
  {
    question: "Agar bike ki kist na bhare to kya hoga? Can banks seize my bike on the road?",
    answer: "Agar bike ki kist (EMI) na bhare to bank pehle reminders bhejta hai aur account ko SMA/NPA mark karta hai. Recovery agents aksar gadi cheen lene ya ghar par aakar dhamki dete hain. Lekin Supreme Court ke aadesh aur RBI Fair Practices Code ke mutabik, koi bhi recovery agent raste mein ya bina 60-day demand notice aur formal legal procedure ke aapki bike zabardasti nahi cheen sakta. Physical force ya muscle power ka istemal gair-kanooni (illegal) hai."
  },
  {
    question: "Can recovery agents take my bike away without a court order?",
    answer: "No. The Supreme Court of India in landmark judgments (such as ICICI Bank vs. Prakash Kaur) has clearly ruled that banks and NBFCs cannot employ recovery agents who use strong-arm tactics, intimidation, or muscle power to seize vehicles. Lenders must follow the due process of law: issue a prior written default notice, give reasonable time to cure the default, and obtain lawful custody. Spot confiscation on roads or public spaces without documentation is an offence under the Indian Penal Code."
  },
  {
    question: "How much percentage waiver can I get in a two-wheeler loan settlement?",
    answer: "In two-wheeler loan settlements, waivers typically range between 40% and 65% of the total outstanding dues, depending on how long the account has been in default, the depreciated market value of the bike, and the borrower's proven inability to pay. 100% of accumulated penal interest and late fees are usually waived, and a substantial discount on the remaining principal is negotiated by our legal team."
  },
  {
    question: "How do I settle my two-wheeler loan with L&T Finance, Bajaj Auto Finance, or TVS Credit?",
    answer: "Major NBFCs like L&T Finance, Bajaj Auto Finance, TVS Credit, and Hero Fincorp have dedicated NPA recovery desks and periodic OTS schemes (often during quarterly/annual book closures or National Lok Adalats). However, dealing with their field recovery staff directly often leads to false verbal promises. By routing the matter through legal representation, AMA Legal Solutions communicates directly with authorized legal managers to lock in binding OTS letters."
  },
  {
    question: "What happens to the bike hypothecation on RC after settlement?",
    answer: "Once the negotiated settlement amount is cleared, the lender is legally required to issue a No Dues Certificate (NDC) and two copies of Form 35 (Notice of Termination of an Agreement of Hypothecation). You submit these signed and stamped documents along with your original RC book to the local RTO to delete the hypothecation endorsement, making you the 100% unencumbered owner of the vehicle."
  },
  {
    question: "Will bike loan settlement ruin my CIBIL score permanently?",
    answer: "A settlement will cause the lender to report the account as 'Settled' rather than 'Closed', which reduces your credit score in the short term. However, if you are already multiple EMIs overdue, your score is already suffering continuous monthly damage from active DPD (Days Past Due) and NPA status. A settlement stops this ongoing damage, closes the liability, and allows you to begin rebuilding your credit score immediately."
  },
  {
    question: "Can I settle my bike loan if a Lok Adalat notice or arbitration notice has been issued?",
    answer: "Yes, absolutely. In fact, Lok Adalat is one of the safest and most effective forums to finalize a two-wheeler loan settlement. An award passed in Lok Adalat carries the statutory force of a civil court decree, ensuring the bank can never demand another rupee once the agreed amount is paid."
  },
  {
    question: "Why should I engage AMA Legal Solutions for my two-wheeler loan settlement?",
    answer: "AMA Legal Solutions provides an immediate legal shield against harassment and illegal repossession threats. We issue formal advocate notices that halt field agent harassment, conduct an audit to eliminate inflated hidden charges, negotiate the maximum achievable waiver with the lender's senior legal team, and verify every settlement letter before you make any payment."
  }
];

// JSON-LD Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Two-Wheeler Loan Settlement", "item": "https://www.amalegalsolutions.com/two-wheeler-loan-settlement" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Two-Wheeler & Bike Loan Settlement India: The Complete Legal Guide to Stop Seizure & Settle Dues",
  "description": "Facing trouble with bike or scooter loan EMIs? Discover how to settle two-wheeler loans legally, stop recovery agent harassment, prevent illegal vehicle repossession, and remove RTO hypothecation.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2025-01-15",
  "dateModified": "2026-09-30"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Two-Wheeler & Bike Loan Settlement Legal Service",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1420"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ramesh Yadav" },
      "reviewBody": "Recovery agents from a major two-wheeler financier were repeatedly harassing my family and threatening to pull my bike away on the street. AMA Legal Solutions intervened, sent a strict legal notice that stopped the agents immediately, and negotiated an OTS at a 55% discount. Got my NOC and Form 35 smoothly."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Deepak Kulkarni" },
      "reviewBody": "I had defaulted on my bike loan after losing my delivery job. The bank had piled on huge penal interest and bounce charges. AMA's advocates represented me and settled the loan for just the principal balance. Truly life-saving legal help."
    }
  ]
};

export const metadata = {
  title: "Two-Wheeler & Bike Loan Settlement India | Stop Seizure & Harassment",
  description: "Can't pay your bike or two-wheeler loan EMI? Stop recovery agent harassment and illegal bike repossession. Negotiate One-Time Settlement (OTS) with AMA Legal Solutions.",
  keywords: [
    "two wheeler loan settlement",
    "bike loan settlement",
    "bike loan settlement kaise kare",
    "two wheeler loan settlement letter",
    "bike loan settlement calculator",
    "l&t finance two wheeler loan settlement",
    "bajaj bike loan settlement",
    "tvs credit bike loan settlement",
    "hero fincorp bike loan settlement",
    "hdfc two wheeler loan settlement",
    "agar bike ki kist na bhare to kya hoga",
    "can bank seize bike for loan default",
    "bike repossession laws india",
    "hypothecation removal bike form 35",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/two-wheeler-loan-settlement',
  }
};

export default function TwoWheelerLoanSettlementPage() {
  const tocSections = [
    { id: 'introduction', title: 'The Two-Wheeler Debt Dilemma' },
    { id: 'kya-settlement-hota-hai', title: 'Kya Bike Loan Settlement Hota Hai?' },
    { id: 'repossession-laws', title: 'Your Rights Against Illegal Bike Seizure' },
    { id: 'major-lenders', title: 'L&T, Bajaj, TVS & Hero Loan Settlement' },
    { id: 'settlement-process', title: 'Step-by-Step Settlement Process' },
    { id: 'calculator-waiver', title: 'Waiver Percentages & Calculator' },
    { id: 'hypothecation-removal', title: 'RTO Form 35 & Hypothecation Removal' },
    { id: 'cibil-rehabilitation', title: 'Credit Score Impact & Recovery' },
    { id: 'why-ama', title: 'Why Choose AMA Legal Solutions' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: "Two-Wheeler Loan Settlement", href: "/two-wheeler-loan-settlement" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
            style={{ background: "radial-gradient(circle at 50% 50%, #2d3748 0%, #1a202c 100%)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-14 md:py-28 text-center max-w-5xl">
            <span className="inline-block bg-[#D2A02A]/20 text-[#D2A02A] border border-[#D2A02A]/40 text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Authorized Legal Defense & NPA Debt Settlement
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight uppercase tracking-tight">
              Resolve Two-Wheeler Debt with <span className="text-[#D2A02A]">Bike Loan Settlement</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Stop aggressive recovery agent visits and unlawful bike repossession. Negotiate a legally protected One-Time Settlement (OTS) with major banks and NBFCs, saving up to 60% of total dues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <InteractiveLeadModalTrigger className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                Free Legal Assessment
              </InteractiveLeadModalTrigger>
              <a href="tel:+918700343611" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border-2 border-gray-400 hover:border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Call: +91-8700343611
                </button>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10 md:mt-14 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">40% - 65%</div>
                <div className="text-xs text-gray-300">Average OTS Waiver</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">100% Legal</div>
                <div className="text-xs text-gray-300">RBI & Court Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Zero Seizure</div>
                <div className="text-xs text-gray-300">Repossession Shield</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Form 35 / NOC</div>
                <div className="text-xs text-gray-300">Clean RTO Clearance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-10 items-start mt-4">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12 border border-gray-100">
                
                {/* Section 1: Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    The Reality of Two-Wheeler Debt: Why Bike Loan Defaults Turn Aggressive
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6 text-justify">
                    <p>
                      In India, a two-wheeler is rarely a luxury. For millions of gig-workers, delivery professionals, small shop owners, and salaried commuters, a motorcycle or scooter is an indispensable livelihood asset. However, automobile financing in the two-wheeler sector operates on high interest rates, short repayment windows, and merciless penalty structures. When personal emergencies, medical crises, or job layoffs occur, missing even two consecutive Equated Monthly Installments (EMIs) triggers a brutal spiral of compounding bounce fees, penal interest, and relentless field recovery.
                    </p>
                    <p>
                      Unlike unsecured personal loans where recovery takes place through phone calls and digital notices, two-wheeler loan recovery frequently manifests as boots-on-the-ground intimidation. Borrowers regularly face unannounced home visits, threatening calls at odd hours, and outright threats of roadside bike snatching by third-party recovery boys hired on commission.
                    </p>
                    <p>
                      It is crucial to recognize that <strong>financial default is purely a civil issue, not a criminal offence</strong>. The Reserve Bank of India (RBI) and the Supreme Court of India have established rigorous safeguards protecting borrowers from strong-arm collection tactics. If you are struggling with unpaid bike loan EMIs, a legally negotiated <strong>Two-Wheeler Loan Settlement (One-Time Settlement / OTS)</strong> provides an honorable, final closure that wipes out inflated penalties and terminates all recovery actions.
                    </p>
                  </div>
                </section>

                {/* Section 2: Kya Bike Loan Settlement Hota Hai? */}
                <section id="kya-settlement-hota-hai" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Kya Bike Loan Settlement Hota Hai? Understanding Two-Wheeler OTS
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      A common misconception among borrowers is: <em>"Since a bike loan is a secured loan hypothecated to the financier, can it actually be settled?"</em>
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-5 md:p-6 rounded-r-xl">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Kya Bike Loan Settlement Hota Hai? (Can We Settle a Two-Wheeler Loan?)
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        <strong>Haan, bike loan settlement 100% kanoonan sambhav hai.</strong> Jab borrower ki aarthik sthiti kharab ho jati hai (nokri jana, health issue, ya delivery/business me loss) aur wo baki bachi kistein nahi bhar pata, to bank ya NBFC bike ko auction karne ke jhanjhat aur legal kharche se bachne ke liye One-Time Settlement (OTS) offer accept karti hai. Is process me extra charges aur interest maaf karke ek compromise amount par account permanently close ho jata hai.
                      </p>
                    </div>

                    <p>
                      Lenders are corporate entities driven by economic viability. A two-wheeler depreciates by 20% the moment it leaves the showroom and loses 10% to 15% value each subsequent year. If a lender repossesses a defaulting bike, they incur towing costs, yard parking fees, valuation charges, and auction broker cuts. At auction, distressed two-wheelers often fetch barely 25% to 40% of their original book value.
                    </p>
                    <p>
                      Consequently, when represented by an experienced legal firm that demonstrates genuine borrower insolvency, banks and NBFCs realize that accepting a lump-sum OTS is far more advantageous than dragging out unviable asset recovery.
                    </p>
                  </div>
                </section>

                {/* Section 3: Repossession Laws & Legal Rights */}
                <section id="repossession-laws" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Your Legal Rights Against Illegal Bike Repossession & Seizure
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Financiers often use the threat of vehicle seizure as psychological leverage. However, the law of the land strictly prohibits banks from acting like private police.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6">
                      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-xs">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-red-600 font-bold">✕</span> What Financiers CANNOT Do
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                          <li>They cannot stop you on the road or seize your bike in public spaces.</li>
                          <li>They cannot hire musclemen, bouncers, or goons to intimidate you or your family.</li>
                          <li>They cannot repossess without a statutory 60-day default notice and a 14-day pre-sale notice.</li>
                          <li>They cannot call or visit before 8:00 AM or after 7:00 PM.</li>
                          <li>They cannot withhold personal belongings left inside the vehicle trunk.</li>
                        </ul>
                      </div>

                      <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-xl shadow-xs">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-green-700 font-bold">✓</span> Your Protected Legal Rights
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                          <li><strong>Right to Due Process:</strong> Mandatory written notices detailing exact overdue figures.</li>
                          <li><strong>Right to Privacy:</strong> Harassment of neighbours, employers, or relatives is illegal.</li>
                          <li><strong>Right to Verification:</strong> Any recovery agent must produce an RBI identity card and authorization letter.</li>
                          <li><strong>Right to Settle:</strong> The right to propose an OTS at any stage before auction.</li>
                          <li><strong>Right to Police Protection:</strong> Filing an immediate FIR for extortion/unlawful restraint if physically threatened.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-blue-100 bg-blue-50/50 p-5 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                        Landmark Supreme Court Precedent: ICICI Bank Ltd. v. Prakash Kaur (2007)
                      </h4>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        The Supreme Court held in unequivocal terms that banks cannot employ musclemen or recovery agents who resort to violence, intimidation, or uncivilized behavior to take possession of hypothecated vehicles. Any repossession conducted without adherence to due legal process constitutes an unlawful act punishable under Indian penal laws.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Major Two-Wheeler Lenders */}
                <section id="major-lenders" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Settling with Major Two-Wheeler Lenders: L&T, Bajaj, TVS & Hero
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Each financial institution in India follows internal credit risk guidelines, NPA aging buckets, and OTS approval matrices. Knowing which authority within the lender has the mandate to approve waivers is vital:
                    </p>

                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 md:p-6 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                          1. L&T Finance Two-Wheeler Loan Settlement
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          L&T Finance holds an extensive rural and semi-urban two-wheeler loan book. When accounts cross 90 days DPD (NPA classification), they engage external agency panels. Because their collection teams work on commission, negotiating verbally with field boys usually fails. AMA Legal Solutions issues formal advocate notices to L&T's legal and grievance desks, bypassing agency noise to lock in 45%–60% OTS waivers with genuine settlement letters.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-4 md:p-6 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                          2. Bajaj Auto Finance (Bajaj Finserv) Bike Loan Settlement
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          Financing popular bikes like Pulsar, Avenger, and Chetak, Bajaj Auto Finance deploys automated calling systems and aggressive local recovery tracking. Borrowers frequently receive warnings regarding asset repossession. By establishing hardship proof and invoking RBI circulars, our legal team shifts the file to their formal OTS desk for clean settlement.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-4 md:p-6 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                          3. TVS Credit Services Two-Wheeler Settlement
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          TVS Credit operates extensively in Tier-2 and Tier-3 towns. In cases of default, field agents often threaten to seize the bike or issue arbitration notices. We handle TVS Credit arbitrations and section notices, settling the entire loan balance via structured OTS agreements.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-4 md:p-6 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                          4. Hero Fincorp, HDFC Bank & Muthoot Capital
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          Whether it is commuter bikes financed through Hero Fincorp, premium two-wheelers through HDFC Bank, or quick-disbursal loans with Muthoot Capital, our advocates ensure that all illegal penal charges are eliminated and the final settlement amount strictly reflects real settlement affordability.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Step-by-Step Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Bike Loan Settlement Kaise Kare: The Step-by-Step Legal Process
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Settling a bike loan requires an organized, legally documented strategy. Never hand over cash or pay unverified bank accounts on the verbal promise of a recovery agent. Follow this proven protocol:
                    </p>

                    <div className="relative border-l-2 border-[#D2A02A] pl-6 ml-3 space-y-8 my-6">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Portfolio & Loan Audit</h3>
                        <p className="text-sm text-gray-700">
                          We dissect your loan statement to segregate the genuine principal balance from predatory late fees, cheque bounce penal charges, and processing fees added during default.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">2</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Advocate Representation & Harassment Cessation</h3>
                        <p className="text-sm text-gray-700">
                          We dispatch a formal legal representation notice to the lender's grievance nodal officer and legal department. This puts an immediate freeze on recovery agent visits and protects your vehicle from unlawful seizure.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">3</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Financial Hardship Dossier Submission</h3>
                        <p className="text-sm text-gray-700">
                          We compile your genuine financial distress documents (medical records, job termination letter, income drop proof, delivery platform earnings drop) to substantiate why full recovery is impossible.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">4</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Strategic OTS Negotiation</h3>
                        <p className="text-sm text-gray-700">
                          Our seasoned advocates negotiate across the table with regional settlement authorities, aiming for a 40% to 65% reduction based on the two-wheeler's depreciated valuation.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">5</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Settlement Letter Verification & Final Closure</h3>
                        <p className="text-sm text-gray-700">
                          Before you pay a single rupee, our legal team verifies the official settlement letter generated on the lender's authentic corporate letterhead, verifying the amount, account number, and closure terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Waiver Percentages & Calculator */}
                <section id="calculator-waiver" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Two-Wheeler Loan Settlement Calculator: Realistic Expectations
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      The settlement figure is never arbitrary; it depends on the age of your bike, months in default, and your verifiable disposable income:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-sm border border-gray-200 rounded-xl overflow-hidden">
                        <thead className="bg-gray-100 text-gray-900 font-bold">
                          <tr>
                            <th className="p-3 md:p-4 border-b">Loan Status / Aging</th>
                            <th className="p-3 md:p-4 border-b">Outstanding Dues</th>
                            <th className="p-3 md:p-4 border-b">Expected Waiver Range</th>
                            <th className="p-3 md:p-4 border-b">Approximate OTS Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                          <tr>
                            <td className="p-3 md:p-4 font-medium">Early Default (90 - 180 Days)</td>
                            <td className="p-3 md:p-4">₹50,000 - ₹80,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">35% - 45%</td>
                            <td className="p-3 md:p-4">₹28,000 - ₹45,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-3 md:p-4 font-medium">Chronic NPA (6 Months - 1 Year)</td>
                            <td className="p-3 md:p-4">₹80,000 - ₹1,40,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">45% - 55%</td>
                            <td className="p-3 md:p-4">₹38,000 - ₹70,000</td>
                          </tr>
                          <tr>
                            <td className="p-3 md:p-4 font-medium">Severe Default (1+ Year / Legal Notice)</td>
                            <td className="p-3 md:p-4">₹1,20,000 - ₹2,20,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">50% - 65%</td>
                            <td className="p-3 md:p-4">₹45,000 - ₹85,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 7: Hypothecation Removal */}
                <section id="hypothecation-removal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Removing Hypothecation (HPA) from Bike RC: Form 35 & NOC
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Paying the settlement amount is only half the battle. Because the bike was purchased on finance, the Registration Certificate (RC) bears an endorsement: <em>"Hypothecated to [Lender Name]"</em>. Until this hypothecation is removed at the Regional Transport Office (RTO), you cannot sell, transfer ownership, or obtain full insurance claims.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-5 md:p-6 rounded-xl space-y-3">
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        Documents Needed for RTO Hypothecation Cancellation:
                      </h3>
                      <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                        <li><strong>No Dues Certificate (NDC) / Loan Closure Letter:</strong> Original stamped letter from the bank stating zero liability remaining.</li>
                        <li><strong>Form 35 (Duplicate Copies):</strong> Signed and stamped by the authorized officer of the bank/NBFC.</li>
                        <li><strong>Original Registration Certificate (RC):</strong> To endorse hypothecation removal.</li>
                        <li><strong>Valid Insurance Policy & Pollution Under Control (PUC) Certificate.</strong></li>
                        <li><strong>Identity Proof (Aadhaar Card, PAN Card).</strong></li>
                      </ul>
                      <p className="text-xs text-gray-600 pt-2 border-t border-gray-200">
                        At AMA Legal Solutions, our settlement mandate includes ensuring that the lender issues clear, unencumbered Form 35 documents and original NOCs without delay.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8: CIBIL Rehabilitation */}
                <section id="cibil-rehabilitation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    CIBIL Score Impact & Credit Score Rebuilding
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      When a two-wheeler loan is settled, the lender reports the account to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax with the status <strong>'Settled'</strong>. While this prevents the account from reaching 'Suit Filed' or 'Willful Defaulter' status, it does impact your score by 50 to 100 points initially.
                    </p>
                    <p>
                      However, keeping an active defaulting bike loan is far worse—every month of unpaid EMIs adds a fresh 30-day DPD delinquency mark, pushing your CIBIL score into freefall. Settlement caps the damage immediately. Once settled, you can rebuild your credit score above 750 within 12 to 18 months using secured credit cards (FD-backed cards) and punctual utility payments.
                    </p>
                  </div>
                </section>

                {/* Section 9: Why AMA Legal Solutions */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Why Choose AMA Legal Solutions for Your Bike Loan Settlement?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">01</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Repossession Shield</h3>
                      <p className="text-sm text-gray-600">
                        Immediate advocate notices that halt unauthorized field agents and prevent illegal vehicle seizure on roads or at home.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">02</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Maximum OTS Waivers</h3>
                      <p className="text-sm text-gray-600">
                        Senior advocates negotiating directly with bank management, eliminating predatory interest and securing 40%–65% debt relief.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">03</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Complete Legal Security</h3>
                      <p className="text-sm text-gray-600">
                        Zero cash risks. Every payment goes directly to the lender against a verified settlement letter, followed by genuine NOC & Form 35.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 10: FAQs */}
                <section id="faqs" className="scroll-mt-32 pb-6">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
                    Frequently Asked Questions: Two-Wheeler & Bike Loan Settlement
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-5 md:pb-6">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex gap-3">
                          <span className="text-[#D2A02A] font-extrabold">Q.</span> {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-7">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Card */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-6 md:p-14 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-extrabold mb-4 text-white uppercase tracking-tight">
                      Protect Your Two-Wheeler & Settle Your Loan Today
                    </h2>
                    <p className="text-sm md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Don't live in fear of recovery agents pulling your bike away. Speak with an experienced banking advocate at AMA Legal Solutions and resolve your debt legally.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <InteractiveLeadModalTrigger className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                        Request Free Case Evaluation
                      </InteractiveLeadModalTrigger>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg">
                          Direct Line: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-6 text-xs md:text-sm text-gray-300">
                      100% Confidential • High Court Advocates • Pan-India Legal Protection
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Urgent Help Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Urgent Legal Assistance
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Facing Bike Seizure or Recovery Harassment?</h3>
                <p className="text-gray-600 mb-6 text-xs leading-relaxed">
                  Our advocates issue legal representation notices within 24 hours to halt recovery agents and safeguard your two-wheeler.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow-md"
                >
                  Call +91-8700343611
                </a>
                <InteractiveLeadModalTrigger className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm">
                  Schedule Free Case Review
                </InteractiveLeadModalTrigger>
              </div>

              {/* Related Vehicle Services */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/car-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Car Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/special-lok-adalat-for-challan" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Vehicle Challan Lok Adalat
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents-needed-for-loan-settlement-noc" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Loan Settlement NOC & Form 35
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/l-and-t-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> L&T Finance Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Settlement Amount Calculator
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl">
                <div className="font-bold text-gray-900 text-sm mb-1">RBI Compliant Process</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every negotiation is conducted strictly under the RBI Fair Practices Code and Banking Ombudsman frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
