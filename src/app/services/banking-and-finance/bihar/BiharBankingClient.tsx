"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const BiharBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Bihar's Financial Landscape" },
    { id: "regulatory-compliance", title: "Regulatory Compliance" },
    { id: "nbfc-registration", title: "NBFC Registration in Patna" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "microfinance-sector", title: "Microfinance & SHGs" },
    { id: "money-lending", title: "Bihar Money Lenders Act" },
    { id: "drt-patna", title: "DRT Patna & Debt Recovery" },
    { id: "industrial-finance", title: "Industrial & Agri-Finance" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Bihar", href: "/services/banking-and-finance/bihar" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Bihar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal consultancy in Patna for NBFC Registration, Nidhi Companies, and Debt Recovery. Navigating the Bihar Money Lenders Act and RBI regulations with precision.
          </p>
          <Link href="/contact">
            <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
              Consult a Legal Expert
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <TableOfContents sections={tocSections} />

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Powering Bihar's Economic Resurgence
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Bihar is witnessing a silent economic transformation. With a GDP growth rate consistently higher than the national average, the state is shedding its old image and emerging as a hub for agro-industries, food processing, and MSMEs. Central to this growth story is capital. Access to credit is the lifeline of Bihar's burgeoning entrepreneurial ecosystem, from the textile parks in Bhagalpur to the ethanol plants in Bhojpur.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, the banking penetration in Bihar, though improving, still leaves a massive gap. This "Credit Gap" presents a golden opportunity for private players-Non-Banking Financial Companies (NBFCs), Microfinance Institutions (MFIs), and Nidhi Companies. Yet, operating in Bihar requires a deep understanding of the local regulatory terrain, which can be complex and bureaucratic.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we specialize in Bihar's financial laws. With a strong presence in Patna, we guide entrepreneurs through the maze of RBI approvals, RoC filings, and local money lending compliances. We don't just register companies; we build legally fortified financial businesses that can weather regulatory storms and thrive in Bihar's unique market conditions.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Bihar
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Bihar's financial sector is a mix of traditional state-run machinery and an aggressive new wave of micro-lending. Understanding this landscape is crucial for any new entrant.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Patna Hub</h3>
                    <p className="text-gray-700">
                      Patna is the undisputed financial capital. It houses the Regional Office of the RBI, the Registrar of Companies (RoC), and the Debt Recovery Tribunal (DRT). For any NBFC or corporate financial entity, having a registered office or strong liaison in Patna is non-negotiable for smooth regulatory operations.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Rural Credit & Jeevika</h3>
                    <p className="text-gray-700">
                      Rural Bihar is dominated by the <strong>Jeevika</strong> model (Bihar Rural Livelihoods Project), which has organized millions of women into Self Help Groups (SHGs). New MFIs entering Bihar must design their products to complement or compete with this massive SHG network, focusing on "Income Generating Loans" for agriculture and livestock.
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>The Opportunity:</strong> There is a huge demand for "Bridge Finance" and "Personal Loans" for the salaried class in tier-2 cities like Muzaffarpur, Gaya, and Darbhanga, which traditional banks are slow to service.
                </p>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Navigating Regulatory Compliance in Bihar
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Setting up a finance business involves dealing with multiple authorities. In Bihar, enforcement can be strict, and "Fly-by-night" operators are heavily cracked down upon.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>RBI Compliance:</strong> For NBFCs, the Reserve Bank of India's Patna Regional Office is the controlling authority. Regular filing of NBS returns is mandatory.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>RoC Patna:</strong> All corporate filings, including annual returns (MGT-7, AOC-4) and director changes, are handled here.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>State Laws:</strong> The Bihar Protection of Interest of Depositors (in Financial Establishments) Act, 2002 is a draconian law used to curb illegal deposit schemes. We ensure your business model does not violate this act.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process in Patna
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A Non-Banking Financial Company (NBFC) is the most prestigious structure for lending. It requires a "Certificate of Registration" (CoR) from the RBI. Given the history of financial scams in Eastern India, the RBI Patna office conducts extremely thorough due diligence.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Detailed Procedure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          Register a Company (Pvt Ltd or Ltd) with <strong>RoC Patna</strong>. The name should reflect financial activity (e.g., "Patliputra Finance Pvt Ltd"). The MoA must have "Finance" as the main object.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital Infusion</td>
                        <td className="p-4 border-b text-gray-700">
                          The minimum Net Owned Fund (NOF) required is <strong>₹2 Crores</strong>. This amount must be deposited in a bank account as fixed deposits free from any lien.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          File the application online via the RBI <strong>COSMOS</strong> portal. This includes submission of the Business Plan, projected financials for 3 years, and Banker's Report.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Physical Submission</td>
                        <td className="p-4 border-b text-gray-700">
                          A hard copy of the application (the "Physical Dossier") must be submitted to the <strong>Department of Non-Banking Supervision (DNBS), RBI Patna</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">5. Scrutiny & CoR</td>
                        <td className="p-4 text-gray-700">
                          RBI officers will scrutinize the application and background of directors ("Fit and Proper" criteria). Queries will be raised, which our legal team answers. Upon satisfaction, the CoR is issued.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Expert Insight:</strong> In Bihar, showing a clean source of funds is critical. Any cash deposit in the initial capital is viewed with suspicion. We advise creating a complete "Fund Flow Statement" for all promoters.
                </p>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company Registration: A Popular Choice
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For localized lending in districts like Saran, Vaishali, or Begusarai, a <strong>Nidhi Company</strong> is often preferred over an NBFC. It allows you to accept deposits and lend money, but <em>only</em> within your member group.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Why Nidhi in Bihar?</h3>
                    <p className="text-gray-700">
                      - <strong>Low Capital:</strong> Can be started with ₹10 Lakhs.<br/>
                      - <strong>No RBI License:</strong> Saves 6-8 months of processing time.<br/>
                      - <strong>Gold Loans:</strong> Ideal for the gold-loving demographics of Bihar.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Strict Compliance (NDH-4)</h3>
                    <p className="text-gray-700">
                      The government is cracking down on non-compliant Nidhis. You MUST file form <strong>NDH-4</strong> to get declared as a Nidhi. Without this, you cannot open new branches or operate legally after the initial period.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance Sector */}
              <section id="microfinance-sector" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance (MFI) & Self Help Groups (SHGs)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Bihar is one of the largest markets for Microfinance in India. The success of the Jeevika model has created a disciplined credit culture among rural women.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starting an MFI in Bihar</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  You can enter this sector via two routes:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Section 8 Company (Non-Profit):</strong> Best for NGOs and social enterprises. It allows you to give micro-loans without RBI registration (subject to certain caps). This is ideal for starting small in a specific block or district.
                  </li>
                  <li>
                    <strong>NBFC-MFI:</strong> For large-scale operations. Requires ₹5 Crore capital (₹2 Crore for NE, but Bihar usually falls under standard norms). This allows for profit distribution and equity investment.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist in drafting the <strong>Joint Liability Group (JLG) Agreements</strong>, which are the legal backbone of microfinance recovery. These agreements ensure that group members guarantee each other's loans, creating a social safety net for your capital.
                </p>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Bihar Money Lenders Act, 1974
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Traditional "Sahukari" or money lending is regulated under the <strong>Bihar Money Lenders Act, 1974</strong>. This is a crucial piece of legislation that every private financier must understand.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Legal Warning</h3>
                  <p className="text-yellow-800">
                    Lending money without a license in Bihar is a punishable offense. More importantly, if you lend without a license, <strong>Section 30</strong> of the Act bars you from filing any suit in court to recover that money. Your capital is entirely at risk.
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Get a License</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The license is granted by the <strong>Circle Officer (CO)</strong> or the Sub-Divisional Magistrate (SDM) of the area. The process involves:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Application in the prescribed statutory form.</li>
                  <li>Affidavit regarding the capital to be invested.</li>
                  <li>Character verification by the local police station.</li>
                  <li>Payment of the prescribed fee.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We handle the entire liaison process with the district administration to secure your license, ensuring you can operate fearlessly.
                </p>
              </section>

              {/* DRT Patna */}
              <section id="drt-patna" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Debt Recovery Tribunal (DRT) Patna
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For loans above ₹20 Lakhs, the recovery process moves to the <strong>Debt Recovery Tribunal (DRT) in Patna</strong>. It has jurisdiction over the entire state of Bihar.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Banks & FIs</h3>
                    <p className="text-gray-700">
                      We represent banks in filing <strong>Original Applications (OA)</strong> for recovery. We also specialize in <strong>SARFAESI</strong> measures-issuing 13(2) notices, 13(4) possession notices, and getting DM orders for physical possession of mortgaged properties.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Borrowers</h3>
                    <p className="text-gray-700">
                      If a bank is aggressively seizing your assets illegally, we file <strong>Securitization Applications (SA)</strong> in DRT Patna to get a stay order and negotiate a One Time Settlement (OTS).
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Cheque Bounce Cases:</strong> For smaller unsecured loans, we file criminal complaints under Section 138 of the Negotiable Instruments Act in the CJM courts across Bihar. This is a fast-track method to pressure defaulters into payment.
                </p>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial & Agri-Finance Consulting
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Under the <strong>Bihar Industrial Investment Promotion Policy</strong>, there are significant subsidies for setting up food processing units, maize processing, and textile units. Financing these projects requires a mix of equity, term loans, and government grants.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  We assist clients in:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Project Reports:</strong> Creating bankable Detailed Project Reports (DPR).</li>
                  <li><strong>Subsidy Liaison:</strong> Legal documentation for claiming SIPB (State Investment Promotion Board) approvals.</li>
                  <li><strong>Legal Due Diligence:</strong> Verifying land titles for industrial plots in BIADA (Bihar Industrial Area Development Authority) zones.</li>
                </ul>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Proper paperwork is the foundation of any legal financial business.
                </p>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/Nidhi Registration in Bihar</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• PAN & Aadhar of all Directors</li>
                      <li>• Digital Signature Certificates (DSC)</li>
                      <li>• Proof of Registered Office in Bihar (Electricity Bill/Rent Agreement)</li>
                      <li>• NoC from the Landlord</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Bank Statement showing Initial Capital</li>
                      <li>• CIBIL Reports of Directors</li>
                      <li>• Educational Qualification Certificates</li>
                      <li>• Police Character Certificate (for Money Lenders License)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Bihar
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to register an NBFC in Patna. The process seemed impossible with the strict RBI scrutiny. AMA Legal Solutions guided us through the 'fund flow' documentation and we got our CoR within 5 months."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Ravi Shankar Prasad</p>
                        <p className="text-sm text-gray-500">Director, Patliputra Finvest Pvt Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Their knowledge of the Bihar Money Lenders Act saved us. We were operating informally and facing issues. They helped us get a license from the Circle Officer in Muzaffarpur, legalizing our business."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Amit Kumar</p>
                        <p className="text-sm text-gray-500">Proprietor, Kumar Finance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Best lawyers for DRT Patna cases. They handled our SARFAESI matter professionally and helped us recover a bad loan of ₹45 Lakhs from a defaulting rice mill owner."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Suresh Jha</p>
                        <p className="text-sm text-gray-500">Branch Manager, Pvt Sector Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We set up a Nidhi Company in Gaya. The AMA team handled everything from RoC incorporation to NDH-4 filing. Very professional service."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Md. Aslam</p>
                        <p className="text-sm text-gray-500">Director, Gaya Mutual Benefits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Start Your Finance Business in Bihar
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From Patna to Purnia, we are the trusted legal partners for Bihar's financial entrepreneurs. Compliance, Registration, and Litigation - we handle it all.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                        Get Expert Consultation
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                        Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-8 text-sm opacity-70">
                    100% Confidential • Expert Legal Advice • Pan-Bihar Presence
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Banking Law Experts
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get professional legal advice for your financial business in Bihar.
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Related Services
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/services/banking-and-finance"
                      className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                    >
                      <span className="mr-2">›</span> Banking & Finance
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href="/services/loan-settlement"
                      className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                    >
                      <span className="mr-2">›</span> Loan Settlement
                    </Link>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <GenericStatesGrid
            serviceName="Banking & Finance"
            servicePath="banking-and-finance"
          />
        </div>
      </div>
    </div>
  );
};

export default BiharBankingClient;


