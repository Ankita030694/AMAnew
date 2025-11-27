"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const ManipurBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Hills vs Valley" },
    { id: "regulatory-challenges", title: "Regulatory Challenges & Solutions" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "microfinance-model", title: "Microfinance & JLG Models" },
    { id: "nidhi-company", title: "Nidhi Company: The Local Solution" },
    { id: "money-lending", title: "Money Lenders License & Compliance" },
    { id: "trade-finance", title: "Moreh Trade Finance & Forex" },
    { id: "drt-litigation", title: "DRT & Debt Recovery Strategies" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Manipur", href: "/services/banking-and-finance/manipur" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Manipur</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the financial sector in Imphal. From NBFC & Nidhi registration to complex Debt Recovery Tribunal (DRT) litigation and Cross-Border Trade Finance.
          </p>
          <Link href="/contact">
            <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
              Consult a Banking Expert
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
                  Navigating the Financial Frontier of North East India
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Manipur is not just a state; it is the strategic gateway to Southeast Asia. With the government's aggressive push towards the "Act East Policy," the financial landscape of Manipur is undergoing a seismic shift. The planned trans-Asian highway and railway connectivity have opened up unprecedented opportunities for trade, commerce, and industry. However, fueling this economic engine requires a robust, compliant, and agile banking sector.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For entrepreneurs, investors, and financial institutions, Manipur offers a fertile ground that is yet to be fully tapped. Whether it is providing micro-credit to the vibrant handloom clusters in Sualkuchi or financing large-scale infrastructure projects in Imphal, the demand for capital is immense. But this opportunity comes wrapped in a complex layer of legal and regulatory nuances that are unique to this region.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we understand that banking in Manipur is different from banking in Mumbai or Delhi. The socio-political fabric, the land holding laws in hill districts versus the valley, and the specific exemptions available under central laws require a specialized legal approach. We are the leading banking law firm in the region, dedicated to guiding you through every regulatory hoop—from registering your financial entity to recovering your dues through the legal system.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: A Tale of Two Geographies
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To operate successfully in Manipur, one must understand the dichotomy of its geography and how it influences banking behavior. The state is divided into the Imphal Valley, which is the commercial hub, and the surrounding Hill Districts, which are governed by different land and administrative laws.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Imphal Valley</h3>
                    <p className="text-gray-700">
                      Dominated by commercial banks like SBI, UBI, and HDFC. The credit culture here is similar to other tier-2 cities in India. Collateral-based lending is feasible as land titles (Patta) are clearly defined under the Manipur Land Revenue and Land Reforms Act. This is where most NBFCs and Nidhi companies set up their registered offices.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">The Hill Districts</h3>
                    <p className="text-gray-700">
                      Comprising districts like Churachandpur, Ukhrul, and Senapati. Here, land is often community-owned or subject to tribal customary laws, making traditional mortgage-based lending difficult. This "Credit Vacuum" creates a massive opportunity for Microfinance Institutions (MFIs) and Cooperative Societies that rely on social collateral (Joint Liability Groups) rather than physical collateral.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>The Digital Divide & Fintech Opportunity:</strong> While physical bank branches are sparse in remote hill areas, smartphone penetration is high. This has led to a surge in demand for digital lending solutions. We assist Fintech companies in navigating the RBI's Digital Lending Guidelines to offer lawful, app-based credit solutions that bridge this geographical gap.
                </p>
              </section>

              {/* Regulatory Challenges */}
              <section id="regulatory-challenges" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Challenges & Strategic Legal Solutions
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Operating a financial entity in Manipur involves a tripartite compliance structure: Central RBI regulations, Ministry of Corporate Affairs (MCA) norms, and State-specific laws.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Land as Collateral (SARFAESI Issues)</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> In hill areas, transfer of land to non-tribals is restricted. This complicates the enforcement of security interest under the SARFAESI Act. <br/>
                        <strong>Our Solution:</strong> We draft specialized loan agreements that utilize long-term lease rights or movable assets (hypothecation of crops/machinery) as security, ensuring you have a legally enforceable recovery path even in restricted zones.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Money Laundering Risks (PMLA)</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Being a border state, there is heightened scrutiny regarding the source of funds to prevent money laundering and terror financing. <br/>
                        <strong>Our Solution:</strong> We implement stringent KYC/AML (Anti-Money Laundering) policies for your NBFC or Nidhi company, ensuring full compliance with the Prevention of Money Laundering Act (PMLA) and reporting standards of FIU-IND.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Local Insurgency & Extortion</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Operating cash-intensive businesses can be risky. <br/>
                        <strong>Our Solution:</strong> We advise on "Cashless Operations" models, integrating UPI and digital wallets into your lending workflow to minimize physical cash handling and associated security risks.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Manipur
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A Non-Banking Financial Company (NBFC) is the gold standard for private lending. It allows for massive scalability and the ability to raise funds from banks. However, the RBI's gatekeeping is strict. Here is the granular process we follow to ensure a 100% success rate for our clients.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Stage</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Action Items & Legal Nuances</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Pre-Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - <strong>Name Availability:</strong> Ensure name contains "Finance", "Finvest", or "Lending".<br/>
                          - <strong>Director Vetting:</strong> All directors must have a clean CIBIL record and no criminal antecedents. At least one director should have a background in finance/banking (RBI requirement).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Register as Pvt Ltd or Public Ltd.<br/>
                          - <strong>MoA Drafting:</strong> The "Main Objects" clause must be precisely drafted to reflect financial activities as per Section 45I(a) of the RBI Act.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Capitalization</td>
                        <td className="p-4 border-b text-gray-700">
                          - <strong>NOF Requirement:</strong> Raise ₹2 Crores (or the applicable reduced amount for NE states, currently subject to RBI discretion).<br/>
                          - Open a "No Lien" Fixed Deposit account in the company's name.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Documentation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Prepare <strong>Business Plan</strong> (3-year projection).<br/>
                          - Statutory Auditor's Certificate regarding NOF.<br/>
                          - Board Resolutions adopting the "Fair Practices Code".<br/>
                          - Banker's Report on the company/directors.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">5. RBI Application</td>
                        <td className="p-4 text-gray-700">
                          - File online application on <strong>COSMOS</strong> portal.<br/>
                          - Submit hard copy (physical dossier) to the <strong>RBI Regional Office in Guwahati</strong>.<br/>
                          - Respond to queries raised by RBI officers during the scrutiny phase.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Why Applications Get Rejected:</strong> The most common reasons are: (1) Source of funds for the initial capital is not transparent, (2) Directors lack financial experience, or (3) Adverse police verification reports. We preemptively address these issues before filing.
                </p>
              </section>

              {/* Microfinance & JLG */}
              <section id="microfinance-model" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & The Joint Liability Group (JLG) Model
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For the hill districts of Manipur, where land collateral is an issue, the <strong>Joint Liability Group (JLG)</strong> model is the most effective legal instrument for lending.
                </p>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How the JLG Model Works Legally</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Group Guarantee:</strong> A group of 5-10 borrowers (usually women) is formed. They mutually guarantee each other's loans. If one defaults, the others are liable to pay.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Inter-se Agreement:</strong> We draft a robust "Inter-se Agreement" signed by all group members, making the mutual guarantee legally binding and admissible in court.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Social Pressure vs Legal Action:</strong> While legal action is possible, the JLG model leverages social capital. However, legally, the bank has the right to recover dues from any member of the group.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-6 text-gray-600 italic">
                    We assist Section 8 Companies and NBFC-MFIs in setting up the legal framework for JLG lending, ensuring that the loan cards and group agreements are compliant with RBI's Master Directions on Microfinance Loans (2022).
                  </p>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company: The Local Banking Solution
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For community leaders in places like Kakching, Thoubal, or Bishnupur who want to mobilize local savings, a <strong>Nidhi Company</strong> is often superior to an NBFC. It is a "Mutual Benefit Society" that operates somewhat like a bank but only for its members.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advantages Over NBFCs</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                  <li><strong>Lower Capital Entry:</strong> Start with just ₹10 Lakhs (vs ₹2 Crores for NBFC).</li>
                  <li><strong>No RBI Approval:</strong> No need to wait for months for an RBI license. Incorporation with the MCA is sufficient to start.</li>
                  <li><strong>Secured Lending:</strong> Nidhi companies can lend against Gold, Silver, Property, and Deposits. Gold loans are particularly popular in Manipur.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">⚠️ Critical Compliance Warning</h4>
                  <p className="text-yellow-800 text-sm">
                    Many Nidhi companies in Manipur have been shut down for non-compliance. The key rules to survive are:
                    <br/>1. Ensure you have 200 members within 1 year.
                    <br/>2. Maintain a Net Owned Fund to Deposit ratio of 1:20.
                    <br/>3. Do NOT advertise to the general public (only to members).
                    <br/>4. File form <strong>NDH-4</strong> to get "Nidhi Status" declaration from the Central Government.
                  </p>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Manipur Money Lenders License: Avoiding the Trap
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Informal lending is rampant in Imphal, but it is fraught with danger. Under the <strong>Manipur Money Lenders Act</strong>, any loan given without a license is considered "unregulated". If a borrower defaults, you cannot go to court or police. In fact, the borrower can file a case of harassment against you.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>The Legal Shield:</strong> Obtaining a Money Lenders License is the only way to protect your capital.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Our Licensing Service Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div>• Application filing with the Deputy Commissioner (DC).</div>
                    <div>• Character Certificate procurement from Police.</div>
                    <div>• Documentation of registers (Register of Accounts).</div>
                    <div>• Annual renewal filing.</div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    *Note: Licensed money lenders are restricted in the interest rates they can charge. We advise on the maximum permissible interest rates to ensure your contracts are valid.
                  </p>
                </div>
              </section>

              {/* Trade Finance */}
              <section id="trade-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Moreh Border Trade: Trade Finance & Forex
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Moreh, the border town, is the hub of Indo-Myanmar trade. Traders dealing in timber, betel nuts, and manufactured goods often face liquidity crunches. We provide legal structuring for:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Letters of Credit (LC):</strong> Drafting and reviewing LC terms to ensure payment security in cross-border transactions.
                  </li>
                  <li>
                    <strong>Export-Import Financing:</strong> Structuring "Packing Credit" and "Post-shipment Credit" agreements with banks.
                  </li>
                  <li>
                    <strong>FEMA Compliance:</strong> Ensuring all forex transactions comply with the Foreign Exchange Management Act (FEMA) to avoid heavy penalties from the Enforcement Directorate (ED).
                  </li>
                </ul>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation & Debt Recovery Strategy
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When a borrower defaults, time is money. The legal machinery in Manipur includes Civil Courts, CJM Courts (for SARFAESI), and the <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong> (which has jurisdiction over Manipur).
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">SARFAESI Act Proceedings</h3>
                    <p className="text-gray-700">
                      For secured loans (NPAs), we initiate action under the SARFAESI Act, 2002. This empowers the bank to seize assets without court intervention. Our team handles the drafting of Section 13(2) Demand Notices, Section 13(4) Possession Notices, and filing applications under Section 14 with the District Magistrate (DM) for physical possession of the property.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Cheque Bounce (NI Act)</h3>
                    <p className="text-gray-700">
                      For unsecured loans, the most potent weapon is Section 138 of the Negotiable Instruments Act. We file criminal complaints against defaulters in the Judicial Magistrate First Class (JMFC) courts in Imphal, Thoubal, and other districts. The threat of imprisonment often forces a settlement.
                    </p>
                  </div>
                </div>
              </section>

               {/* Documentation */}
               <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Essential Documentation Checklist
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Documentation is the first line of defense in banking. Incomplete documents lead to lost cases. We ensure your files are watertight.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For NBFC Registration</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Certificate of Incorporation</li>
                      <li>• MoA & AoA (Financial Objects)</li>
                      <li>• Fixed Deposit Receipt (NOF)</li>
                      <li>• CIBIL Reports of all Directors</li>
                      <li>• Net Worth Certificates of Directors</li>
                      <li>• Educational Qualifications of Directors</li>
                      <li>• Police Clearance Certificates</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For Loan Recovery (Legal Case)</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Original Loan Application Form</li>
                      <li>• Sanction Letter (Signed by Borrower)</li>
                      <li>• Demand Promissory Note</li>
                      <li>• Guarantee Deed (Personal/Corporate)</li>
                      <li>• Statement of Account (Certified under Bankers Books Evidence Act)</li>
                      <li>• Acknowledgement of Debt (AOD)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What Our Clients in Manipur Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We struggled for months to get our Nidhi Company registered due to compliance issues. AMA Legal Solutions streamlined the entire process. Their understanding of the Nidhi Rules and local operational challenges in Imphal is unmatched."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Sanatomba Singh</p>
                        <p className="text-sm text-gray-500">Director, Imphal Valley Nidhi Ltd.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As a Microfinance NGO, we needed guidance on JLG documentation and FCA compliance. The team at AMA Legal provided us with watertight contracts that have significantly improved our recovery rates in the hill districts."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Mary Kom</p>
                        <p className="text-sm text-gray-500">Secretary, Women's Empowerment Trust</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Their expertise in DRT litigation is impressive. We engaged them for a high-value recovery case involving a default in the hospitality sector, and they secured a favorable order from the Guwahati Bench in record time."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rajesh Sharma</p>
                        <p className="text-sm text-gray-500">Regional Manager, Nationalized Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to start a private finance business but were worried about the legalities. They helped us get the Money Lenders License from the DC office and set up our entire documentation process. Professional and reliable."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">L</div>
                      <div>
                        <p className="font-bold text-gray-900">L. Ibobi</p>
                        <p className="text-sm text-gray-500">Proprietor, Ibobi Finance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Manipur's Trusted Banking Lawyers
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  In a sector as regulated as banking, experience is the only currency that matters. Our track record in Manipur speaks for itself.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏛️</div>
                    <h3 className="font-bold text-xl mb-2">RBI Liaison</h3>
                    <p className="text-gray-600">Direct experience in dealing with RBI regional offices for licensing and compliance matters.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Powerhouse</h3>
                    <p className="text-gray-600">A dedicated team for DRT, DRAT, and NCLT matters, ensuring your recovery is fast-tracked.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">📜</div>
                    <h3 className="font-bold text-xl mb-2">Drafting Experts</h3>
                    <p className="text-gray-600">We create loan agreements that stand up in court, specifically tailored for Manipur's legal environment.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Manipur
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Don't let regulatory hurdles slow down your growth. Partner with the experts who know the law, the land, and the banking system inside out.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                        Book a Consultation
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                        Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-8 text-sm opacity-70">
                    100% Confidential • Professional Legal Advice • Client-Centric Approach
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
                  Need Legal Help?
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our senior banking lawyers in Imphal today.
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
                      href="/services/startup-registration"
                      className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                    >
                      <span className="mr-2">›</span> Startup Registration
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
                  <li>
                    <Link
                      href="/services/cheque-bounce-lawyer"
                      className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                    >
                      <span className="mr-2">›</span> Cheque Bounce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/company-registration"
                      className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                    >
                      <span className="mr-2">›</span> Company Registration
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

export default ManipurBankingClient;
