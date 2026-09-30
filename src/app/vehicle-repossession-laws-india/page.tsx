import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

// FAQ data for rendering and JSON-LD Schema
const faqs = [
  {
    question: "Can a bank or recovery agent forcibly seize my vehicle on the road?",
    answer: "No, absolutely not. The Supreme Court of India in landmark judgments (including ICICI Bank v. Prakash Kaur and Citicorp Maruti Finance v. Vijayalaxmi) has explicitly ruled that banks and NBFCs cannot use physical force, intimidation, or hired musclemen to seize vehicles on roads, public places, or residences. Forcible snatching without a court order or strict adherence to statutory due process amounts to wrongful restraint and theft under the Indian Penal Code."
  },
  {
    question: "What are the RBI guidelines on repossession of vehicles by banks and NBFCs?",
    answer: "Under the RBI Master Directions and Fair Practices Code: 1) Financiers must provide a statutory written demand notice giving reasonable time to regularize dues; 2) Recovery agents are strictly restricted from contacting or visiting borrowers before 8:00 AM or after 7:00 PM; 3) Agents must display authentic bank identity cards and official authorization letters; 4) A detailed inventory sheet of all personal belongings inside the vehicle must be handed over; 5) A mandatory pre-sale notice of 14 to 30 days must be served before any auction."
  },
  {
    question: "How many EMIs must bounce before a bank can initiate vehicle repossession?",
    answer: "Legally, an account is classified as a Special Mention Account (SMA-0, SMA-1, SMA-2) as EMIs bounce. Only after 90 days of continuous non-payment is the account declared a Non-Performing Asset (NPA). While loan agreements often contain acceleration clauses after 2 to 3 missed EMIs, lenders cannot immediately confiscate the vehicle without issuing a formal demand notice and a pre-repossession notice detailing exact outstanding arrears."
  },
  {
    question: "Can recovery agents seize my vehicle or household property for an unsecured personal loan default?",
    answer: "No. For unsecured debts such as personal loans or credit cards, lenders have zero legal claim or charge on your car, bike, or household items. Recovery agents who threaten to seize your vehicle, refrigerator, or furniture for personal loan default are committing criminal intimidation and extortion. A vehicle can only be repossessed if that specific vehicle was pledged as hypothecated collateral under an auto/vehicle loan agreement."
  },
  {
    question: "What should I do immediately if recovery agents threaten to seize my vehicle?",
    answer: "If threatened: 1) Demand the agent's official employee ID, police verification certificate, and bank authorization letter; 2) Clearly state that forcible seizure violates Supreme Court rulings; 3) Record the interaction (audio/video) as evidence; 4) Dial 112 or visit the local police station to report criminal intimidation; 5) Contact AMA Legal Solutions immediately to issue a formal advocate notice that freezes recovery visits and halts illegal repossession."
  },
  {
    question: "What is the Supreme Court judgment on repossession of vehicles (ICICI Bank v. Prakash Kaur)?",
    answer: "In ICICI Bank Ltd. v. Prakash Kaur (2007), the Supreme Court condemned the practice of hiring musclemen and recovery agencies to snatch vehicles. The apex court held that banks cannot take the law into their own hands and must recover hypothecated assets solely through recognized legal procedures. This was reaffirmed in Citicorp Maruti Finance Ltd. v. Vijayalaxmi (2012), establishing that taking possession by muscle power violates the fundamental rule of law."
  },
  {
    question: "Can I get my repossessed vehicle back before the bank auctions it (Right of Redemption)?",
    answer: "Yes. Under Section 176 of the Indian Contract Act, 1872, the borrower holds a statutory 'Right of Redemption'. You have the legal right to pay the agreed dues or settle the loan account at any point before the auction sale is completed. Once a settlement is reached or an injunction is obtained, the financier is legally obligated to release the vehicle from their holding yard."
  },
  {
    question: "Can a bank repossess my vehicle due to an insurance lapse?",
    answer: "While vehicle loan contracts require the borrower to maintain comprehensive motor insurance, an inadvertent insurance lapse alone does not give the lender the right to summarily seize the vehicle without notice. The lender must first notify the borrower in writing and provide an opportunity to renew the policy or purchase bank-assisted insurance before taking extreme recovery measures."
  },
  {
    question: "What is an illegal repossession legal notice?",
    answer: "An illegal repossession notice is a formal legal notice dispatched by a High Court advocate to the lender's Board of Directors, Zonal Recovery Head, and the local police station. It documents the procedural violations, breaches of RBI guidelines, and criminal intimidation committed by recovery agents, warning the bank of civil damages and criminal prosecution if the vehicle is unlawfully touched."
  },
  {
    question: "How does AMA Legal Solutions help stop vehicle repossession and settle dues?",
    answer: "AMA Legal Solutions provides end-to-end legal protection: 1) We issue emergency advocate notices within 24 hours that immediately stop recovery agent visits and road ambushes; 2) If the vehicle is already in a yard, we invoke Section 176 to freeze auction proceedings; 3) We represent you before banking ombudsmen and consumer courts; 4) We negotiate a lump-sum One-Time Settlement (OTS) with substantial waivers, ensuring safe return of the vehicle and clean Form 35 hypothecation cancellation."
  }
];

// JSON-LD Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Vehicle Repossession Laws India", "item": "https://www.amalegalsolutions.com/vehicle-repossession-laws-india" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vehicle Repossession Laws in India: Supreme Court Rulings, RBI Guidelines & Borrower Defense",
  "description": "Facing vehicle seizure threats from banks or recovery agents? Know your legal rights under Supreme Court rulings and RBI guidelines. Stop illegal car and bike repossession with AMA Legal Solutions.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2025-02-20",
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
  "name": "Vehicle Repossession Legal Protection & Defense Service",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1650"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vikram Singhania" },
      "reviewBody": "Recovery agents from a private bank cornered my car outside my office and attempted to tow it away without any written notice. I contacted AMA Legal Solutions immediately. Their advocate spoke directly to the local police and bank nodal officer, stopped the seizure, and filed a formal legal notice. Within two weeks, we settled the loan with a 50% waiver."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Arun Prasad" },
      "reviewBody": "My commercial vehicle was seized and parked in a yard by an NBFC while I was waiting for freight payments. AMA Legal Solutions invoked Section 176 of the Contract Act, stopped the yard auction, and helped me redeem my vehicle through an affordable OTS. Lifesavers!"
    }
  ]
};

export const metadata = {
  title: "Vehicle Repossession Laws in India | Supreme Court & RBI Guidelines Defense",
  description: "Can banks seize your car or bike? Learn your legal rights against recovery agents under Supreme Court rulings and RBI guidelines. Stop illegal vehicle repossession with AMA Legal Solutions.",
  keywords: [
    "vehicle repossession laws in india",
    "supreme court judgement on repossession of vehicle",
    "can bank seize vehicle for loan default",
    "can bajaj recovery agent seize my vehicle or property",
    "rbi guidelines on repossession of vehicle",
    "vehicle seizing procedure by finance company",
    "how many emi should bounce to seize vehicle",
    "illegal repossession of vehicle legal notice",
    "stop car repossession",
    "procedure for seizure of hypothecated vehicle",
    "icici bank vehicle repossession legality",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/vehicle-repossession-laws-india',
  }
};

export default function VehicleRepossessionLawsPage() {
  const tocSections = [
    { id: 'introduction', title: 'The Menace of Illegal Repossession' },
    { id: 'supreme-court-rulings', title: 'Supreme Court Landmark Rulings' },
    { id: 'rbi-guidelines', title: 'RBI Fair Practices Code Mandates' },
    { id: 'legal-procedure', title: 'The Lawful 5-Step Seizure Procedure' },
    { id: 'unsecured-vs-secured', title: 'Personal Loan vs Vehicle Loan Seizure' },
    { id: 'how-to-stop-seizure', title: 'What to Do if Agents Threaten Seizure' },
    { id: 'section-176-redemption', title: 'Section 176: Getting Your Vehicle Back' },
    { id: 'settlement-alternative', title: 'OTS: The Permanent Legal Solution' },
    { id: 'why-ama', title: 'Why Hire AMA Legal Solutions' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: "Vehicle Repossession Laws India", href: "/vehicle-repossession-laws-india" },
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
          <div className="absolute inset-0 bg-black opacity-65 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
            style={{ background: "radial-gradient(circle at 50% 50%, #2d3748 0%, #1a202c 100%)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-14 md:py-28 text-center max-w-5xl">
            <span className="inline-block bg-red-600/20 text-red-400 border border-red-500/40 text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Emergency Legal Defense Against Recovery Agent Intimidation
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight uppercase tracking-tight">
              Vehicle Repossession Laws in India: <span className="text-[#D2A02A]">Stop Illegal Seizure</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Banks and recovery agents cannot use physical force, roadside muscle power, or unannounced tow-aways. Know your constitutional rights under Supreme Court rulings and RBI Master Directions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                  Emergency Repossession Defense
                </button>
              </Link>
              <a href="tel:+918700343611" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border-2 border-gray-400 hover:border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Hotline: +91-8700343611
                </button>
              </a>
            </div>

            {/* Legal Defense Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10 md:mt-14 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Supreme Court</div>
                <div className="text-xs text-gray-300">Ban on Muscle Power</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">RBI Guidelines</div>
                <div className="text-xs text-gray-300">Mandatory 60-Day Notice</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">24-Hr Notice</div>
                <div className="text-xs text-gray-300">Injunction to Lenders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Sec. 176 Contract</div>
                <div className="text-xs text-gray-300">Redemption of Asset</div>
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
                    The Menace of Illegal Vehicle Repossession in India
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6 text-justify">
                    <p>
                      Every day across India, car, bike, and commercial vehicle owners wake up to aggressive phone calls, intimidating doorstep visits, and outright threats of roadside vehicle seizure. Private recovery agents hired on commission by commercial banks and Non-Banking Financial Companies (NBFCs) regularly act as if vehicle hypothecation grants them the authority to bypass the judicial system, track borrowers through unauthorized GPS devices, and forcibly drag vehicles away.
                    </p>
                    <p>
                      This aggressive conduct is not only unethical; <strong>it is strictly illegal under Indian law</strong>. A loan default is purely a civil breach of contract. It does not empower financial institutions to deploy musclemen, bouncers, or goons to harass citizens or confiscate private property on public thoroughfares.
                    </p>
                    <p>
                      If a bank or NBFC (such as Bajaj Finance, HDFC Bank, ICICI Bank, Shriram Finance, or Mahindra Finance) is threatening to seize your vehicle, you do not have to endure the humiliation in silence. The Constitution of India, the Supreme Court of India, and the Reserve Bank of India have established robust statutory protections that penalize lenders who violate due process.
                    </p>
                  </div>
                </section>

                {/* Section 2: Supreme Court Landmark Rulings */}
                <section id="supreme-court-rulings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Supreme Court Landmark Judgments on Vehicle Repossession
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      The Supreme Court of India has repeatedly condemned recovery through muscle power in authoritative precedents:
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="border border-blue-200 bg-blue-50/40 p-5 md:p-6 rounded-xl">
                        <span className="text-xs font-bold text-blue-800 bg-blue-100 uppercase px-3 py-1 rounded-full mb-2 inline-block">
                          Apex Precedent 1
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          The Supreme Court observed with grave concern that banks were employing recovery agents who resort to strong-arm tactics and muscle power to repossess vehicles. The Court held:
                        </p>
                        <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-xs md:text-sm text-gray-800 my-2">
                          &ldquo;We are governed by the rule of law in the country, and the recovery of loans or seizure of vehicles could be done only through legal means. Banks cannot employ goondas or recovery agents who take the law into their own hands.&rdquo;
                        </blockquote>
                      </div>

                      <div className="border border-blue-200 bg-blue-50/40 p-5 md:p-6 rounded-xl">
                        <span className="text-xs font-bold text-blue-800 bg-blue-100 uppercase px-3 py-1 rounded-full mb-2 inline-block">
                          Apex Precedent 2
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Citicorp Maruti Finance Ltd. v. Vijayalaxmi (2012) 1 SCC 1
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          A three-judge bench of the Supreme Court held that even if the loan agreement contains a clause permitting the financier to take possession of the vehicle upon default, <strong>such possession cannot be taken by use of force</strong>. Possession must be obtained peacefully through due process of law or court intervention. Forcible repossession was held to be completely unlawful.
                        </p>
                      </div>

                      <div className="border border-blue-200 bg-blue-50/40 p-5 md:p-6 rounded-xl">
                        <span className="text-xs font-bold text-blue-800 bg-blue-100 uppercase px-3 py-1 rounded-full mb-2 inline-block">
                          Apex Precedent 3
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Patna High Court Ruling on Vehicle Seizure (CWJC No. 3456 of 2021)
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          The High Court reiterated that banks and finance companies cannot seize vehicles on highways using recovery agents. The court directed state police to register FIRs against recovery personnel and bank managers who participate in roadside vehicle snatching.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: RBI Fair Practices Code Mandates */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    RBI Fair Practices Code & Master Directions on Recovery
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      The Reserve Bank of India strictly regulates the engagement and conduct of recovery agents. Any financier violating these rules faces regulatory penalties and civil liability:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                        <h3 className="font-bold text-gray-900 text-base mb-2">Permitted Calling & Visit Hours</h3>
                        <p className="text-sm text-gray-700">
                          Recovery agents are strictly prohibited from calling or visiting borrowers before <strong>8:00 AM</strong> or after <strong>7:00 PM</strong>. Calls outside these hours constitute harassment.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                        <h3 className="font-bold text-gray-900 text-base mb-2">Mandatory Identity & Authorization</h3>
                        <p className="text-sm text-gray-700">
                          Every agent must carry an official bank-issued ID card, police verification certificate, and a specific case authorization letter. If they refuse to show these, they are trespassing.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                        <h3 className="font-bold text-gray-900 text-base mb-2">Absolute Ban on Intimidation</h3>
                        <p className="text-sm text-gray-700">
                          Agents cannot use abusive, threatening, or vulgar language. They cannot publicly humiliate borrowers in front of family members, neighbors, or workplace colleagues.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                        <h3 className="font-bold text-gray-900 text-base mb-2">Strict Privacy Protection</h3>
                        <p className="text-sm text-gray-700">
                          Financiers cannot disclose your loan default or debt status to your neighbors, relatives, employer, or contacts. Breaching borrower confidentiality is actionable before the Banking Ombudsman.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: The Lawful 5-Step Seizure Procedure */}
                <section id="legal-procedure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    The Lawful 5-Step Procedure for Vehicle Repossession
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      If a bank genuinely intends to enforce its hypothecation rights, it must execute five mandatory statutory steps. If even one step is skipped, the entire repossession is legally invalid:
                    </p>

                    <div className="relative border-l-2 border-[#D2A02A] pl-6 ml-3 space-y-8 my-6">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Formal Demand Notice</h3>
                        <p className="text-sm text-gray-700">
                          The lender must issue a written notice specifying the exact overdue amount and grant a reasonable cure period (typically 60 days under standard recovery protocols) to pay the arrears.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">2</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Pre-Repossession Notice</h3>
                        <p className="text-sm text-gray-700">
                          Before seizing the asset, the lender must serve an explicit written notice stating that failure to clear dues within a specified date will compel the bank to take physical custody.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">3</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Peaceful Custody & Detailed Inventory Sheet</h3>
                        <p className="text-sm text-gray-700">
                          Possession must be peaceful, never violent or coercive. At the time of repossession, an official Inventory List of all personal items left inside the vehicle must be created, signed by witnesses, and a copy handed to the borrower.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">4</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Pre-Sale / Auction Notice (14 - 30 Days)</h3>
                        <p className="text-sm text-gray-700">
                          The financier cannot sell the vehicle immediately. Under Section 176 of the Contract Act, they must serve a 14 to 30-day pre-sale notice providing the asset valuation and reserve price, giving the borrower a final window to redeem the vehicle.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">5</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Transparent Public Auction & Account Balance</h3>
                        <p className="text-sm text-gray-700">
                          The vehicle must be auctioned transparently at fair market value. Any surplus realized from the auction above the actual loan dues must be returned directly to the borrower.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Unsecured vs Secured Seizure */}
                <section id="unsecured-vs-secured" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Can Recovery Agents Seize Vehicles for Personal Loans or Credit Card Dues?
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      One of the most frequent panic queries we receive is: <em>&ldquo;Can Bajaj Finserv, HDFC, or ICICI recovery agents seize my car, motorcycle, or household items for a personal loan default?&rdquo;</em>
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-600 p-5 md:p-6 rounded-r-xl">
                      <h3 className="text-lg md:text-xl font-bold text-red-950 mb-2">
                        The Legal Truth: Absolute Prohibition on Unsecured Asset Seizure
                      </h3>
                      <p className="text-gray-800 text-sm md:text-base">
                        <strong>NO. Personal loans and credit cards are 100% UNSECURED debts.</strong> In an unsecured loan, no collateral or asset is hypothecated to the bank. A lender cannot touch your car, your bike, your house, or your household goods without first obtaining a formal money decree from a competent Civil Court or DRT through a lengthy trial. Any recovery agent threatening to seize your property for an unsecured personal loan is committing criminal extortion punishable under Section 383 of the IPC.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6: How to Stop Seizure */}
                <section id="how-to-stop-seizure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    What to Do if Recovery Agents Threaten Immediate Seizure
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      If recovery agents show up at your doorstep or corner you on the road, execute this battle-tested defense protocol:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="border border-gray-200 p-5 rounded-xl">
                        <div className="text-[#D2A02A] font-bold text-base mb-1">Step 1: Demand Documentation</div>
                        <p className="text-sm text-gray-600">
                          Ask for their original Bank Identity Card, DRC certificate, and written Letter of Authority. Do not entertain verbal claims.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl">
                        <div className="text-[#D2A02A] font-bold text-base mb-1">Step 2: Record Everything</div>
                        <p className="text-sm text-gray-600">
                          Turn on your smartphone video camera or voice recorder. State clearly: &ldquo;I am recording this interaction for the Banking Ombudsman and Police.&rdquo; Agents usually retreat immediately.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl">
                        <div className="text-[#D2A02A] font-bold text-base mb-1">Step 3: Dial 112 / Local Police</div>
                        <p className="text-sm text-gray-600">
                          If agents use foul language, block your path, or attempt to tow the vehicle, call 112 immediately and report an attempted robbery/wrongful restraint under IPC Section 341.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl">
                        <div className="text-[#D2A02A] font-bold text-base mb-1">Step 4: Engage Legal Protection</div>
                        <p className="text-sm text-gray-600">
                          Call AMA Legal Solutions. We serve an emergency advocate legal notice to the bank&apos;s legal head, putting an immediate freeze on recovery attempts.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7: Section 176 Contract Act Redemption */}
                <section id="section-176-redemption" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Section 176 Indian Contract Act: Reclaiming a Repossessed Vehicle
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Even if the worst has happened and the bank has already taken your car, bike, or truck to a yard, the battle is not lost:
                    </p>
                    <div className="bg-amber-50/70 border border-amber-200 p-5 md:p-6 rounded-xl space-y-3">
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        Your Statutory Right of Redemption (Section 176):
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 176 of the Indian Contract Act, 1872, the pawnee (bank) cannot sell the pledged asset without giving reasonable notice of sale. Crucially, the law guarantees you the <strong>Right of Redemption</strong>—you have the legal entitlement to pay the debt or reach a settlement at any time prior to the actual sale and take back full physical possession of your asset.
                      </p>
                      <p className="text-xs text-gray-600">
                        AMA Legal Solutions routinely intervenes in holding-yard disputes, halting fire-sale auctions and securing vehicle release through court injunctions and emergency compromise agreements.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8: OTS Alternative */}
                <section id="settlement-alternative" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    One-Time Settlement (OTS): The Permanent Legal Solution
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Stopping repossession is the first step. Closing the loan account permanently is the ultimate objective. Rather than living with continuous fear of recovery agents, a legally negotiated <strong>One-Time Settlement (OTS)</strong>:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                      <li>Eliminates 100% of accumulated late fees, penal charges, and yard storage penalties.</li>
                      <li>Secures a 40% to 65% waiver on the remaining loan principal.</li>
                      <li>Ensures immediate withdrawal of all Section 138 cheque bounce or arbitration cases.</li>
                      <li>Obtains an authentic No Dues Certificate (NDC) and RTO Form 35 to delete the hypothecation from your RC.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: Why AMA Legal Solutions */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Why Choose AMA Legal Solutions for Repossession Defense?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">01</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Immediate Legal Injunction</h3>
                      <p className="text-sm text-gray-600">
                        Formal advocate representation notices served to bank corporate legal heads and local police within 24 hours, stopping field agents in their tracks.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">02</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Yard Auction Stay</h3>
                      <p className="text-sm text-gray-600">
                        Emergency legal interventions under Section 176 Contract Act and Consumer Protection Act, freezing illegal distressed vehicle auctions.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">03</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Full Debt Closure</h3>
                      <p className="text-sm text-gray-600">
                        Negotiating board-level OTS agreements with 40%–60% waivers, releasing hypothecation, and returning clean ownership of your asset.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 10: FAQs */}
                <section id="faqs" className="scroll-mt-32 pb-6">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
                    Frequently Asked Questions: Vehicle Repossession & Borrower Rights
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
                      Stop Illegal Vehicle Repossession Today
                    </h2>
                    <p className="text-sm md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Do not let recovery agents intimidate you or snatch your vehicle. Protect your asset with high-court banking advocates who understand recovery jurisprudence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                          Get Urgent Legal Protection
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg">
                          Emergency Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-6 text-xs md:text-sm text-gray-300">
                      100% Confidential • High Court Advocates • Pan-India Repossession Defense
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Emergency Help Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Immediate Legal Injunction
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vehicle Seizure Threats Today?</h3>
                <p className="text-gray-600 mb-6 text-xs leading-relaxed">
                  Our advocates dispatch emergency legal notices to bank recovery directors and local police stations within 24 hours.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-red-600 text-white text-center py-3 rounded-xl font-bold hover:bg-red-700 transition-colors mb-3 text-sm shadow-md"
                >
                  Emergency: +91-8700343611
                </a>
                <Link href="/contact" className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm">
                  Free Case Consultation
                </Link>
              </div>

              {/* Related Vehicle Services */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Defense</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/car-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Car Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/two-wheeler-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Two-Wheeler Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/commercial-vehicle-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Commercial Vehicle Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/special-lok-adalat-for-challan" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Vehicle Challan Lok Adalat
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents-needed-for-loan-settlement-noc" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Form 35 & Hypothecation NOC
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/will-police-come-for-loan-default-india-truth" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Will Police Come for Loan Default?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-gradient-to-br from-red-50 to-amber-50 border border-red-200 p-5 rounded-2xl">
                <div className="font-bold text-gray-900 text-sm mb-1">Supreme Court Compliance</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Protecting borrowers under the landmark rulings of <em>ICICI Bank v. Prakash Kaur</em> and <em>Citicorp v. Vijayalaxmi</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
