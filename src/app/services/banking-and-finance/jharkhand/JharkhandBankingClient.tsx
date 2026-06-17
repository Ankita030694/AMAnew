"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const JharkhandBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Jharkhand's Financial Landscape" },
    { id: "tribal-banking", title: "Banking in Tribal Areas (CNT/SPT)" },
    { id: "regulatory-compliance", title: "Regulatory Compliance" },
    { id: "nbfc-registration", title: "NBFC Registration in Ranchi" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "microfinance-sector", title: "Microfinance & JSLPS" },
    { id: "money-lending", title: "Jharkhand Money Lenders Act" },
    { id: "drt-ranchi", title: "DRT Ranchi & Debt Recovery" },
    { id: "industrial-finance", title: "Industrial Finance Policy" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Jharkhand", href: "/services/banking-and-finance/jharkhand" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Jharkhand</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy in Ranchi for NBFC Registration, Tribal Finance Law, and Debt Recovery. Navigating the CNT/SPT Acts and RBI regulations for financial growth.
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
                  Empowering Jharkhand's Financial Ecosystem
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Jharkhand, the land of forests and minerals, is rapidly evolving into an industrial and commercial powerhouse. With cities like Jamshedpur, Dhanbad, and Ranchi leading the charge, the state is seeing a surge in demand for credit-from heavy industrial financing to micro-loans for tribal artisans. The state's GDP growth is fueled by mining, steel, and increasingly, the service sector.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, banking in Jharkhand comes with a unique set of legal complexities. The presence of scheduled areas protected under the <strong>Chotanagpur Tenancy (CNT) Act</strong> and <strong>Santhal Pargana Tenancy (SPT) Act</strong> makes traditional collateral-based lending a legal minefield. Financial institutions often struggle to enforce mortgages on tribal land, leading to a distinct "Credit Gap" in rural areas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we specialize in bridging this gap. Based in Ranchi, our legal team provides expert counsel on navigating these land laws, registering compliant financial entities (NBFCs/Nidhis), and executing recovery strategies that respect local statutes while protecting lender rights. We are the trusted partners for banks, fintechs, and entrepreneurs looking to unlock Jharkhand's economic potential.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Jharkhand
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Jharkhand's financial sector is dualistic. On one hand, you have the industrial belt of Jamshedpur and Bokaro with sophisticated corporate banking needs. On the other, you have vast rural hinterlands dependent on micro-credit and government schemes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Industrial Hubs</h3>
                    <p className="text-gray-700">
                      Jamshedpur and Dhanbad are centers for MSME finance. There is high demand for working capital loans, invoice discounting, and machinery finance. NBFCs focusing on supply chain finance for the steel and mining ecosystem thrive here.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Rural & Tribal Finance</h3>
                    <p className="text-gray-700">
                      In rural districts, the <strong>Jharkhand State Livelihood Promotion Society (JSLPS)</strong> has created a massive network of Women SHGs (Sakhi Mandals). This social capital is the foundation for Microfinance Institutions (MFIs) looking to lend without physical collateral.
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>The Opportunity:</strong> With 40% of the population being unbanked or underbanked, there is immense scope for Fintech companies offering digital lending solutions, provided they comply with the RBI's digital lending guidelines.
                </p>
              </section>

              {/* Tribal Banking (CNT/SPT) */}
              <section id="tribal-banking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Banking in Tribal Areas: The CNT & SPT Act Challenge
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The biggest hurdle for banking in Jharkhand is the restriction on land transfer. Under the <strong>CNT Act (1908)</strong> and <strong>SPT Act (1949)</strong>, land belonging to Scheduled Tribes (ST), Scheduled Castes (SC), and Backward Classes (OBC) in scheduled areas cannot be sold or transferred to non-tribals.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Impact on Mortgages</h3>
                  <p className="text-yellow-800">
                    Banks cannot easily enforce a mortgage on tribal land. Even if they win a recovery suit, they cannot sell the land to a general category buyer to recover dues. This makes standard "Loan against Property" (LAP) products risky in these zones.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Legal Solutions</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Movable Asset Hypothecation:</strong> Structuring loans against standing crops, machinery, or vehicles rather than land.</li>
                  <li><strong>Guarantee Models:</strong> Using Government Credit Guarantee Schemes (CGTMSE) to cover the risk where collateral is weak.</li>
                  <li><strong>Specific Performance:</strong> Drafting loan agreements that focus on cash flow attachment rather than asset liquidation.</li>
                </ul>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance in Jharkhand
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Running a finance business in Ranchi requires adherence to multiple regulators. The <strong>RBI Regional Office in Ranchi</strong> is very active in monitoring unauthorized deposit schemes.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>RBI Ranchi:</strong> Supervises all NBFCs and MFIs. Mandatory quarterly reporting (NBS returns) via COSMOS is enforced strictly.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>RoC Ranchi:</strong> The Registrar of Companies handles all corporate filings. We handle annual compliance (AOC-4, MGT-7) to prevent disqualification of directors.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>State Vigilance:</strong> The Jharkhand Protection of Interest of Depositors Act is used to prosecute Ponzi schemes. We ensure your business model is legally watertight to avoid any "unregulated deposit" tag.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process in Ranchi
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For serious lending operations, an NBFC license is essential. It gives you credibility and the legal right to lend. The process in Jharkhand follows the RBI's centralized system but has local nuances.
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
                          Register a Company with <strong>RoC Ranchi</strong>. The MoA must explicitly state "Financial Business" as the main object.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital Requirement</td>
                        <td className="p-4 border-b text-gray-700">
                          Deposit <strong>₹2 Crores</strong> as Net Owned Fund (NOF) in a Fixed Deposit. This is the entry barrier to ensure only serious players enter the market.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Online Application</td>
                        <td className="p-4 border-b text-gray-700">
                          File the application on RBI's <strong>COSMOS</strong> portal. Upload documents like CIBIL reports, Net Worth certificates, and Business Plan.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Physical Submission</td>
                        <td className="p-4 border-b text-gray-700">
                          Submit the physical application file to the <strong>Department of Non-Banking Supervision (DNBS), RBI Ranchi</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">5. Due Diligence</td>
                        <td className="p-4 text-gray-700">
                          RBI conducts a background check. In Jharkhand, they often verify if the directors have any links to illegal mining or money laundering activities.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Timeframe:</strong> The entire process typically takes 4-6 months. We expedite this by ensuring your documentation is "First-Time-Right" to avoid query loops.
                </p>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company: The Community Banking Model
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For localized operations in semi-urban areas like Hazaribagh, Giridih, or Deoghar, a <strong>Nidhi Company</strong> is highly effective. It fosters the habit of thrift among members.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Key Benefits</h3>
                    <p className="text-gray-700">
                      - <strong>Start Small:</strong> Minimum capital of ₹10 Lakhs.<br/>
                      - <strong>No RBI CoR:</strong> Exempted from core RBI registration.<br/>
                      - <strong>Secured Loans:</strong> Can lend against Gold, Property, and Deposits.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Compliance Alert</h3>
                    <p className="text-gray-700">
                      You must file <strong>Form NDH-4</strong> to get declared as a Nidhi Company by the Central Government. Without this, you cannot open new branches. We handle this critical filing for you.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance Sector */}
              <section id="microfinance-sector" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & JSLPS Integration
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Jharkhand is a focus state for microfinance due to its high rural population. The <strong>Jharkhand State Livelihood Promotion Society (JSLPS)</strong> actively promotes financial inclusion.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Structuring Your MFI</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To enter this sector legally, we recommend:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Section 8 Company:</strong> Ideal for NGOs wanting to do micro-credit. No RBI registration needed if lending is below certain caps. Best for working with tribal SHGs in remote districts like Gumla or Simdega.
                  </li>
                  <li>
                    <strong>NBFC-MFI:</strong> For commercial scaling. Requires ₹5 Crore capital. Allows you to tap into bank funding for on-lending.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We draft the <strong>Joint Liability Group (JLG)</strong> agreements that are essential for recovering loans without collateral. These agreements create social pressure for repayment, which is the only effective security in tribal areas.
                </p>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Jharkhand Money Lenders Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private money lending is regulated under the state's specific Money Lenders Act. Lending without a license is a risky proposition in Jharkhand.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
                  <h3 className="font-bold text-lg mb-4">Why Get Licensed?</h3>
                  <p className="text-gray-700 mb-4">
                    Unlicensed lenders cannot approach the court for recovery. Section 30 of the Act typically bars courts from entertaining suits by unlicensed lenders. Furthermore, charging exorbitant interest can lead to criminal prosecution under usury laws.
                  </p>
                  <h3 className="font-bold text-lg mb-4">Licensing Process</h3>
                  <p className="text-gray-700">
                    The license is issued by the district administration (Circle Officer/SDO). We assist in compiling the application, police verification, and submitting the necessary affidavits to secure your license in districts like Ranchi, Dhanbad, and Bokaro.
                  </p>
                </div>
              </section>

              {/* DRT Ranchi */}
              <section id="drt-ranchi" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Ranchi & Debt Recovery Strategies
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Debt Recovery Tribunal (DRT) in Ranchi</strong> has jurisdiction over the entire state of Jharkhand. It is the battleground for recovering bad loans above ₹20 Lakhs.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">For Banks & FIs</h3>
                    <p className="text-gray-700">
                      We specialize in filing <strong>Original Applications (OA)</strong> and executing <strong>SARFAESI</strong> actions. Our team coordinates with District Magistrates to get physical possession of non-tribal collateral assets.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Cheque Bounce (NI Act)</h3>
                    <p className="text-gray-700">
                      For unsecured loans, we file criminal complaints under Section 138 of the Negotiable Instruments Act in CJM courts. This is highly effective for recovering smaller ticket loans in urban centers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Finance & Subsidies
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Jharkhand Industrial and Investment Promotion Policy 2021</strong> offers attractive incentives for new industries. We help clients leverage these schemes.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Capital Subsidy:</strong> Up to 25% of investment in plant & machinery.</li>
                  <li><strong>Interest Subsidy:</strong> 5-7% subvention on term loans for 5-7 years.</li>
                  <li><strong>Stamp Duty Exemption:</strong> 100% reimbursement on land registration.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our team assists in preparing the legal documentation for Single Window Clearance and banking consortium loan agreements for large projects.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To ensure smooth processing of licenses and recovery suits, maintain these documents:
                </p>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/Nidhi Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Directors' PAN, Aadhar, DIN</li>
                      <li>• Digital Signature Certificates (DSC)</li>
                      <li>• Proof of Office Address in Jharkhand</li>
                      <li>• CIBIL Reports of Directors</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Fixed Deposit Receipt (NOF proof)</li>
                      <li>• Net Worth Certificates</li>
                      <li>• Police Character Certificates</li>
                      <li>• Business Plan (3-5 Years)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Jharkhand
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Registering an NBFC in Ranchi was daunting due to the strict RBI norms. AMA Legal Solutions handled the entire COSMOS application and liaison with the regional office. We got our license smoothly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vikram Singh</p>
                        <p className="text-sm text-gray-500">Director, Coalfield Finance Ltd, Dhanbad</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced huge issues recovering loans in tribal areas due to CNT Act restrictions. Their team helped us restructure our loan agreements and use the JLG model effectively."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Anjali Soren</p>
                        <p className="text-sm text-gray-500">CEO, Tribal Livelihood MFI, Dumka</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Excellent support for DRT Ranchi cases. They know the procedures inside out and helped us vacate a stay order on a SARFAESI property in Jamshedpur."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rahul Gupta</p>
                        <p className="text-sm text-gray-500">Bank Manager, Jamshedpur</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They helped us get the Money Lenders License in Hazaribagh. The process was transparent and quick. Now we operate without any legal fear."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Manoj Prasad</p>
                        <p className="text-sm text-gray-500">Proprietor, Prasad Lending</p>
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
                    Start Your Finance Business in Jharkhand
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From Ranchi to Jamshedpur, we provide end-to-end legal support for NBFCs, MFIs, and Banks. Navigate the CNT/SPT laws with confidence.
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
                    100% Confidential • Expert Legal Advice • Pan-Jharkhand Presence
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
                  Get professional legal advice for your financial business in Jharkhand.
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

export default JharkhandBankingClient;


