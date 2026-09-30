import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import InteractiveLeadModal from "@/components/InteractiveLeadModal";
import InteractiveLeadModalTrigger from "@/components/InteractiveLeadModalTrigger";

// FAQ data for rendering and JSON-LD Schema
const faqs = [
  {
    question: "Can commercial vehicle loans (trucks, tractors, buses, tippers) be settled?",
    answer: "Yes, commercial vehicle loans can be settled through a formal One-Time Settlement (OTS). When transport contractors, fleet owners, or farmers face genuine business downturns—such as delayed freight payments, route permit cancellations, medical crises, or agricultural losses—banks and NBFCs prefer accepting a lump-sum compromise settlement rather than expending legal capital on seizing, parking, and auctioning a heavily depreciated commercial asset."
  },
  {
    question: "How do I settle a commercial vehicle loan with Shriram Finance, Cholamandalam, or Mahindra Finance?",
    answer: "Major transport and commercial vehicle NBFCs like Shriram Finance, Cholamandalam, Mahindra Finance, and Sundaram Finance operate dedicated regional legal and NPA recovery verticals. Dealing with their field recovery agents is often counterproductive because agents earn commission on vehicle seizures. By retaining legal counsel, AMA Legal Solutions communicates directly with zonal legal managers and OTS sanctioning committees, presenting a formal insolvency dossier to negotiate waivers between 40% and 60% of total dues."
  },
  {
    question: "What legal actions can financiers take if I default on my commercial truck or tipper loan?",
    answer: "Financiers typically initiate three legal actions: 1) Issuance of demand notices under the loan agreement or Section 13(2) of SARFAESI (for eligible lenders); 2) Criminal complaints under Section 138 of the Negotiable Instruments Act for bounced cheques or Section 25 of the Payment and Settlement Systems Act for bounced NACH mandates; 3) Unilateral appointment of an arbitrator for asset attachment. Our advocates handle arbitration defense and court proceedings while simultaneously negotiating an out-of-court OTS."
  },
  {
    question: "Can a financier seize my truck or tractor on the highway without prior notice?",
    answer: "No. The Supreme Court of India has ruled in multiple judgments that neither banks nor NBFCs have the legal authority to intercept vehicles on highways or deploy strong-arm recovery agencies to seize commercial vehicles forcibly. Financiers are mandated by RBI guidelines to serve a formal written default notice, provide reasonable time to cure the default, and give a pre-sale notice before any auction. Highway snatching without due legal process constitutes an offence under the Indian Penal Code."
  },
  {
    question: "How does tractor loan settlement work for farmers and rural borrowers (e.g. L&T Tractor Finance)?",
    answer: "Tractor loans involve unique socio-legal considerations. Under Indian civil law, agricultural implements and tools of an agriculturist are often protected from routine civil court attachments. When farmers default with lenders like L&T Tractor Finance, Mahindra Finance, or nationalized banks due to crop failure or monsoon delays, our advocates leverage agricultural relief circulars, Lok Adalat mechanisms, and NPA aging matrices to secure maximum waiver on accumulated interest and penalties."
  },
  {
    question: "What percentage waiver can I expect in a commercial vehicle loan settlement?",
    answer: "Depending on the vintage and mechanical condition of the vehicle, the duration of default, and the verified financial distress of the transporter, commercial vehicle settlements generally range from 35% to 60% of the gross outstanding liability. 100% of penal interest, overdue interest, and administrative parking/yard charges are typically waived, followed by a substantial discount on the principal balance."
  },
  {
    question: "What happens to the commercial National Permit and RTO fitness after settlement?",
    answer: "Once the negotiated settlement sum is paid, the lender is legally obligated to issue a No Dues Certificate (NDC) and two signed copies of Form 35 (Notice of Termination of Hypothecation). You submit these documents to the Regional Transport Office (RTO) to remove the financier's endorsement from the vehicle's Registration Certificate (RC), freeing your National Permit, fitness certificate, and state route clearances from all encumbrances."
  },
  {
    question: "What if the financier has already repossessed my commercial vehicle and parked it in a yard?",
    answer: "Even if your commercial vehicle has been repossessed, the financier cannot immediately sell or auction it. They must serve a mandatory 14 to 30-day pre-sale notice specifying the reserve price. You retain the legal 'Right of Redemption' under Section 176 of the Indian Contract Act to settle the account and reclaim possession before the auction gavel falls. AMA Legal Solutions regularly intervenes in post-repossession scenarios to halt distressed auctions and secure release via emergency settlement."
  },
  {
    question: "Can fleet operators with multiple defaulted commercial vehicles settle together?",
    answer: "Yes. Fleet owners operating multiple trucks, buses, or commercial taxis can negotiate a consolidated portfolio settlement across all loan accounts with the same lender or across multiple lenders. Consolidated settlements often yield higher percentage discounts because the lender recovers a substantial lump-sum recovery in a single transaction."
  },
  {
    question: "Why should commercial vehicle owners hire AMA Legal Solutions instead of settling on their own?",
    answer: "Commercial vehicle disputes involve complex contracts, arbitration clauses, cross-state jurisdiction, and high financial stakes (often ₹15 Lakhs to ₹1 Crore+). Individual transporters who try to negotiate are routinely bullied by recovery teams and tricked with fake 'token settlement' receipts. AMA Legal Solutions provides an unshakeable legal shield, stops illegal yard auctions, negotiates at the board/nodal level, and ensures every rupee paid results in full legal discharge and RTO hypothecation deletion."
  }
];

// JSON-LD Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Commercial Vehicle Loan Settlement", "item": "https://www.amalegalsolutions.com/commercial-vehicle-loan-settlement" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Commercial Vehicle Loan Settlement India: Settle Truck, Tractor & Fleet Loans Legally",
  "description": "Facing default on commercial vehicle, truck, tractor, or tipper loan EMIs? Stop illegal highway repossession, halt yard auctions, and negotiate legal One-Time Settlement (OTS) with AMA Legal Solutions.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2025-02-10",
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
  "name": "Commercial Vehicle Loan Settlement Legal Service",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1180"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Gurpreet Singh Gill" },
      "reviewBody": "Our transport firm in Ludhiana was struggling with 3 commercial multi-axle truck loans after severe freight rate drops. Shriram Finance had issued arbitration notices and threatened yard seizure. AMA Legal Solutions stepped in, represented us legally, and negotiated a combined OTS saving us over ₹18 Lakhs. Truly exceptional banking lawyers."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Manoj Patil" },
      "reviewBody": "Defaulted on an L&T tractor finance loan due to crop damage in Maharashtra. Local collection agents were constantly threatening seizure of agricultural equipment. AMA advocates issued an injunction notice, stopped the harassment, and settled the loan for nearly 50% waiver with clean Form 35 clearance."
    }
  ]
};

export const metadata = {
  title: "Commercial Vehicle Loan Settlement India | Truck, Tractor & Fleet Debt Relief",
  description: "Defaulted on commercial truck, tractor, tipper, or bus loan EMIs? Stop highway repossession and yard auctions. Negotiate One-Time Settlement (OTS) with AMA Legal Solutions.",
  keywords: [
    "commercial vehicle loan settlement",
    "truck loan settlement",
    "tractor loan settlement",
    "shriram transport finance loan default",
    "l&t tractor finance settlement",
    "cholamandalam commercial vehicle loan settlement",
    "mahindra commercial vehicle loan settlement",
    "commercial vehicle repossession laws india",
    "tipper loan settlement",
    "fleet loan settlement",
    "icici bank commercial vehicle loan settlement",
    "hypothecation removal commercial vehicle form 35",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/commercial-vehicle-loan-settlement',
  }
};

export default function CommercialVehicleLoanSettlementPage() {
  const tocSections = [
    { id: 'introduction', title: 'Crisis in Commercial Fleet Financing' },
    { id: 'what-is-settlement', title: 'What is Commercial Vehicle OTS?' },
    { id: 'truck-tractor-fleet', title: 'Truck, Tractor, Tipper & Cab Loans' },
    { id: 'repossession-laws', title: 'Highway Seizures & Legal Rights' },
    { id: 'major-nbfcs', title: 'Shriram, Chola, Mahindra & L&T Loans' },
    { id: 'settlement-process', title: 'The Legal Settlement Process' },
    { id: 'waiver-matrix', title: 'Waiver Benchmarks & Calculator' },
    { id: 'hypothecation-permits', title: 'RTO Form 35 & National Permits' },
    { id: 'why-ama', title: 'Why Fleet Owners Choose AMA' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: "Commercial Vehicle Loan Settlement", href: "/commercial-vehicle-loan-settlement" },
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
            <span className="inline-block bg-[#D2A02A]/20 text-[#D2A02A] border border-[#D2A02A]/40 text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              High-Ticket Commercial Asset Protection & NPA Resolution
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight uppercase tracking-tight">
              Settle Commercial Vehicle Debt with <span className="text-[#D2A02A]">Truck & Fleet OTS</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Facing default on commercial trucks, tractors, tippers, buses, or taxi fleets? Halt illegal highway repossession, freeze yard auction proceedings, and negotiate formal One-Time Settlement (OTS) with senior banking advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <InteractiveLeadModalTrigger className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                Free Commercial Case Review
              </InteractiveLeadModalTrigger>
              <a href="tel:+918700343611" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border-2 border-gray-400 hover:border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Direct Line: +91-8700343611
                </button>
              </a>
            </div>

            {/* Commercial Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10 md:mt-14 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">35% - 60%</div>
                <div className="text-xs text-gray-300">Commercial OTS Waiver</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Stay on Auction</div>
                <div className="text-xs text-gray-300">Halt Distressed Yard Sale</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Sec. 176 Relief</div>
                <div className="text-xs text-gray-300">Right of Asset Redemption</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                <div className="text-[#D2A02A] text-xl md:text-2xl font-bold">Permit NOC</div>
                <div className="text-xs text-gray-300">RTO Form 35 Clearance</div>
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
                    The Crisis in India's Commercial Transport & Fleet Financing Sector
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6 text-justify">
                    <p>
                      India&apos;s logistics, construction, and agricultural sectors are the lifeblood of our nation&apos;s economy. From multi-axle freight trucks traversing the Golden Quadrilateral to heavy-duty tippers in mining corridors, agricultural tractors in Punjab and Maharashtra, and commercial taxi fleets in metropolitan cities, millions of livelihoods rely on commercial vehicle loans.
                    </p>
                    <p>
                      However, operating commercial vehicles is fraught with systemic volatility. Transporters are constantly hit by fluctuating diesel prices, chronic freight payment delays from manufacturing conglomerates, unpredictable monsoon impacts on agricultural haulage, steep toll and permit costs, and stringent vehicular scrappage regulations. When working capital dries up, paying high commercial vehicle EMIs—often ranging from ₹35,000 to ₹1,50,000 per vehicle each month—becomes virtually impossible.
                    </p>
                    <p>
                      Unlike personal car owners, commercial vehicle defaulters face intense predatory pressure. NBFC collection wings frequently deploy highway recovery networks that intercept loaded trucks, intimidate drivers, seize machinery at construction sites, and park assets in remote holding yards where equipment rapidly rusts.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we believe commercial operators deserve robust legal representation. Financial default caused by economic shocks is not a crime. By leveraging the Indian Contract Act, RBI Master Directions on asset recovery, and Debt Recovery Tribunal (DRT) jurisprudence, we stand as an ironclad barrier between transporters and predatory financiers, negotiating structured <strong>Commercial Vehicle One-Time Settlements (OTS)</strong> that preserve your financial solvency.
                    </p>
                  </div>
                </section>

                {/* Section 2: What is Commercial Vehicle OTS? */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    What is Commercial Vehicle Loan Settlement (OTS)?
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      A Commercial Vehicle One-Time Settlement (OTS) is a formal, legally enforceable agreement entered into between the borrower (or fleet entity) and the financing bank or NBFC. Under an OTS, the lender agrees to accept a significantly reduced lump sum to settle the entire outstanding liability, permanently extinguishing all legal disputes, criminal cheque bounce proceedings, and asset encumbrances.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-5 md:p-6 rounded-r-xl">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Why Do Commercial Financiers Agree to Large OTS Waivers?
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Commercial vehicles are rapidly depreciating, high-wear assets. When an NBFC forcibly repossesses a heavy truck, tractor, or bus, the asset immediately stops generating revenue while incurring substantial costs: towing charges (often ₹25,000 to ₹50,000), yard parking fees (₹300 to ₹800 daily), asset valuation fees, and broker commissions. By the time the vehicle is placed on the auction block, rust, tire degradation, and engine seizure drastically lower its real value. When our advocates present a credible, ready-to-pay OTS backed by proof of commercial insolvency, lenders recognize that a cash recovery today is far superior to a distressed auction tomorrow.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3: Truck, Tractor, Tipper & Fleet Loans */}
                <section id="truck-tractor-fleet" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Specialized Solutions: Trucks, Tractors, Tippers & Commercial Cabs
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Commercial debts require tailored legal strategies based on the operational nature of the machinery:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                          1. Heavy Commercial Trucks & Multi-Axle Trailers
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                          Financed through NBFCs like Shriram Transport Finance and Tata Motors Finance, heavy freight vehicles face severe highway risks. When defaults occur, financiers attempt to intercept vehicles across state borders. We issue jurisdictional notices that protect your vehicles while negotiating portfolio settlements for single trucks or multi-unit fleets.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                          2. Agricultural Tractors & Harvesters (L&T, Mahindra)
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                          Tractor loans through lenders like L&T Tractor Finance and Mahindra Finance affect farming families directly. Under Section 60(1)(b) of the Code of Civil Procedure, tools of an artisan and implements of husbandry are granted special legal protections against arbitrary attachment. We invoke these provisions alongside state agricultural relief circulars to secure steep waivers.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                          3. Mining Tippers, Dumpers & JCBs
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                          Construction machinery financed through Srei Equipment Finance, IndusInd Bank, or HDB involves heavy capital investments. Regulatory bans in mining or stalled infrastructure projects often halt cash flows. We negotiate moratoriums, structured restructurings, or comprehensive OTS packages based on residual machinery valuation.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                          4. Commercial Taxi Fleets & Tour Buses
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                          Fleet operators running app-based cabs (Ola/Uber) or inter-city tourist buses frequently face systemic insolvency when platform commission structures shift. We negotiate consolidated settlements across entire vehicle portfolios, ensuring clean title release for individual sale.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Repossession Laws & Legal Rights */}
                <section id="repossession-laws" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Highway Repossession, Yard Auctions & Your Protected Legal Rights
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Lenders frequently act as if vehicle hypothecation gives them unfettered authority to seize assets at will. The Supreme Court of India and the Reserve Bank of India have established strict guardrails:
                    </p>

                    <div className="bg-red-50/50 border border-red-200 p-5 md:p-6 rounded-xl space-y-3">
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        Illegal Tactics Commonly Practiced by Commercial Financiers:
                      </h3>
                      <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                        <li><strong>Highway Interception:</strong> Blocking loaded trucks with private vehicles, threatening drivers, and forcibly taking vehicle keys.</li>
                        <li><strong>Cargo Abandonment:</strong> Forcing drivers out while leaving third-party commercial cargo stranded on highways without legal inventory documentation.</li>
                        <li><strong>Surreptitious Night Seizures:</strong> Pulling machinery out of private worksites, agricultural fields, or transport yards without police presence or magistrate orders.</li>
                        <li><strong>Distressed Fire-Sales:</strong> Conducting closed-door auctions to favored scrap dealers below fair market value without informing the borrower.</li>
                      </ul>
                    </div>

                    <div className="border border-blue-100 bg-blue-50/50 p-5 rounded-xl space-y-2">
                      <h4 className="font-bold text-gray-900 text-base">
                        The Statutory Law: Section 176 of the Indian Contract Act, 1872
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 176, the pawnee (financier) has no right to sell the pledged asset without giving the pawner (borrower) <strong>reasonable notice of sale</strong>. Furthermore, the borrower maintains the statutory <em>Right of Redemption</em>—the right to pay the dues and redeem the asset at any moment before the actual sale is consummated. Repossession without strict procedural compliance makes the financier liable for conversion damages in court.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Major NBFCs Handled */}
                <section id="major-nbfcs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Settling with Major Commercial NBFCs & Banks
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Each financial institution has distinct operational hierarchies and quarterly OTS approval windows:
                    </p>

                    <div className="space-y-4">
                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          1. Shriram Finance (Shriram Transport Finance Company - STFC)
                        </h3>
                        <p className="text-sm text-gray-700">
                          As India&apos;s largest commercial vehicle financier, Shriram Finance possesses an aggressive field recovery network. When accounts default past 90 days, field teams initiate arbitration in Chennai or Mumbai. By filing formal legal appearances and petitioning their Zonal Compromise Committees, AMA Legal Solutions bypasses field harassment to secure substantial waivers on penal interest and overdue charges.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          2. Cholamandalam Investment and Finance Company (Chola)
                        </h3>
                        <p className="text-sm text-gray-700">
                          Financing heavy commercial vehicles, light commercial trucks (LCVs), and tractors across semi-urban corridors, Chola swiftly files Section 9 petitions or arbitrations upon default. Our legal team enters appearances, contests unilateral arbitrator appointments, and navigates the file toward structured OTS resolutions.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          3. Mahindra & Mahindra Financial Services (Mahindra Finance)
                        </h3>
                        <p className="text-sm text-gray-700">
                          Dominating the agricultural tractor, Bolero Maxi Truck, and utility commercial segment, Mahindra Finance frequently participates in National Lok Adalats. We represent borrowers during quarterly settlement drives, locking in legally binding awards that cancel vehicle warrants.
                        </p>
                      </div>

                      <div className="border border-gray-200 p-5 rounded-xl hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          4. ICICI Bank, IndusInd Bank & Tata Capital Commercial Vehicle Desks
                        </h3>
                        <p className="text-sm text-gray-700">
                          Commercial vehicle desks of private banks follow rigid internal risk matrices. Our banking lawyers negotiate directly with regional asset recovery managers, ensuring that all inflated yard maintenance, penal interest, and bounce fees are stripped from the closing balance.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Step-by-Step Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    The Step-by-Step Commercial Legal Settlement Process
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      A successful commercial settlement requires meticulous legal orchestration to prevent financiers from pocketing partial payments as penalties:
                    </p>

                    <div className="relative border-l-2 border-[#D2A02A] pl-6 ml-3 space-y-8 my-6">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Commercial Fleet & Loan Statement Audit</h3>
                        <p className="text-sm text-gray-700">
                          Our legal team examines your statement of accounts, isolating actual outstanding principal from predatory overdue interest, bounce penalties, and unauthorized yard/seizure fees.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">2</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Injunction Notice & Harassment Protection</h3>
                        <p className="text-sm text-gray-700">
                          We dispatch formal advocate notices to the lender&apos;s corporate management and local branches. This legally warns them against unlawful highway interception or strong-arm repossession tactics.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">3</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Financial Hardship Dossier Preparation</h3>
                        <p className="text-sm text-gray-700">
                          We construct an unassailable insolvency dossier (GST return drops, delayed client bills, vehicle repair estimates, fuel cost escalations) proving that full recovery is commercially impossible.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">4</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">OTS Sanction Table Negotiations</h3>
                        <p className="text-sm text-gray-700">
                          Our senior advocates interface directly with the zonal credit risk committee, securing waivers ranging between 35% and 60% of total claimed liabilities.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 bg-[#D2A02A] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">5</div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Letter Verification, Payment & Encumbrance Release</h3>
                        <p className="text-sm text-gray-700">
                          We verify the authenticity of the official settlement sanction letter. Once payment is made directly to the lender&apos;s loan account, we ensure full withdrawal of court cases, issuance of No Dues Certificates, and Form 35 release.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7: Waiver Matrix & Calculator */}
                <section id="waiver-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Commercial Vehicle Settlement Calculator: Realistic Waiver Expectations
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      Settlement percentages reflect asset depreciation, machinery age, and default duration:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-sm border border-gray-200 rounded-xl overflow-hidden">
                        <thead className="bg-gray-100 text-gray-900 font-bold">
                          <tr>
                            <th className="p-3 md:p-4 border-b">Vehicle Category / Loan Vintage</th>
                            <th className="p-3 md:p-4 border-b">Typical Dues Claimed</th>
                            <th className="p-3 md:p-4 border-b">Expected Waiver Range</th>
                            <th className="p-3 md:p-4 border-b">Typical Settled Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                          <tr>
                            <td className="p-3 md:p-4 font-medium">Agricultural Tractor (1 - 2 Years Old)</td>
                            <td className="p-3 md:p-4">₹4,50,000 - ₹8,00,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">35% - 45%</td>
                            <td className="p-3 md:p-4">₹2,80,000 - ₹4,80,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-3 md:p-4 font-medium">Commercial Freight Truck / LCV (2 - 4 Years Old)</td>
                            <td className="p-3 md:p-4">₹12,00,000 - ₹24,00,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">40% - 55%</td>
                            <td className="p-3 md:p-4">₹6,50,000 - ₹13,00,000</td>
                          </tr>
                          <tr>
                            <td className="p-3 md:p-4 font-medium">Heavy Mining Tipper / Trailer (Multiple Years Default)</td>
                            <td className="p-3 md:p-4">₹25,00,000 - ₹55,00,000</td>
                            <td className="p-3 md:p-4 text-green-700 font-bold">45% - 60%</td>
                            <td className="p-3 md:p-4">₹12,00,000 - ₹25,00,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 8: Hypothecation & National Permits */}
                <section id="hypothecation-permits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Commercial RTO Form 35, NOC & National Permit Release
                  </h2>
                  <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4 md:space-y-6">
                    <p>
                      For commercial transporters, vehicle paperwork is tied directly to daily revenue. When a loan defaults, financiers freeze RTO transactions, preventing the renewal of National Permits, fitness certificates, and state carriage authorizations.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-5 md:p-6 rounded-xl space-y-3">
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        Post-Settlement Commercial Clearance Protocol:
                      </h3>
                      <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                        <li><strong>Execution of Form 35 in Duplicate:</strong> Stamped and executed by the authorized signatory of the lender.</li>
                        <li><strong>No Dues Certificate (NDC):</strong> Affirming full and final settlement of all loan and ancillary charges.</li>
                        <li><strong>Intimation to RTO / State Transport Authority (STA):</strong> Deletion of the HPA endorsement on VAHAN database.</li>
                        <li><strong>Unconditional Release of Commercial Permits:</strong> Allowing smooth renewal of All India Tourist Permits (AITP) or National Goods Vehicle Permits.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 9: Why Choose AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Why Transport Operators & Fleet Owners Choose AMA Legal Solutions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">01</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Highway Legal Shield</h3>
                      <p className="text-sm text-gray-600">
                        Immediate advocate interventions preventing unauthorized highway intercepts, vehicle tow-aways, and physical driver intimidation.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">02</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Court & Arbitration Defense</h3>
                      <p className="text-sm text-gray-600">
                        Seasoned defense against Section 138 cheque bounce complaints, Section 9 arbitration asset attachments, and SARFAESI notices.
                      </p>
                    </div>

                    <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                      <div className="text-[#D2A02A] text-3xl font-bold mb-2">03</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Board-Level OTS Waivers</h3>
                      <p className="text-sm text-gray-600">
                        Direct access to corporate credit risk committees, securing authentic settlement letters and genuine RTO Form 35 releases.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 10: FAQs */}
                <section id="faqs" className="scroll-mt-32 pb-6">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
                    Frequently Asked Questions: Commercial Vehicle Loan Settlement
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
                      Protect Your Commercial Fleet & Resolve Vehicle Debt
                    </h2>
                    <p className="text-sm md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Do not let defaulting commercial vehicle loans paralyze your transport business or livelihood. Speak confidentially with our senior banking and transport advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <InteractiveLeadModalTrigger className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg text-center">
                        Schedule Commercial Case Review
                      </InteractiveLeadModalTrigger>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3.5 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg">
                          Direct Hotline: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-6 text-xs md:text-sm text-gray-300">
                      Confidential Consultation • High Court Advocates • Pan-India Fleet Representation
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
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Commercial Fleet Notice?
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Truck Seizure or Arbitration Threats?</h3>
                <p className="text-gray-600 mb-6 text-xs leading-relaxed">
                  Our senior advocates issue immediate legal injunctions to stop highway interception, halt yard auctions, and initiate formal OTS.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow-md"
                >
                  Call +91-8700343611
                </a>
                <InteractiveLeadModalTrigger className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm">
                  Request Transporter Consultation
                </InteractiveLeadModalTrigger>
              </div>

              {/* Related Vehicle Services */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">Related Transport Services</h3>
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
                    <Link href="/business-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Business Loan Settlement
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
                    <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center gap-2 transition-colors">
                      <span className="text-[#D2A02A] font-bold">›</span> Settlement Calculator
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl">
                <div className="font-bold text-gray-900 text-sm mb-1">Contract Act Protected</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every commercial settlement is drafted to extinguish all Section 138, arbitration, and civil liability with full legal indemnity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InteractiveLeadModal />
    </>
  );
}
