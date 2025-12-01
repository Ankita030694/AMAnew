"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const TripuraBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "rubber-economy", title: "Rubber Industry Finance" },
    { id: "tiipis-scheme", title: "TIIPIS Incentive Scheme" },
    { id: "border-trade", title: "Indo-Bangla Trade Finance" },
    { id: "nbfc-registration", title: "NBFC Registration in Agartala" },
    { id: "drt-guwahati", title: "DRT Litigation (Guwahati)" },
    { id: "sarfaesi-tribal", title: "SARFAESI in TTAADC Areas" },
    { id: "swabalamban", title: "Swabalamban Scheme" },
    { id: "tea-industry", title: "Tea Industry Revival" },
    { id: "cooperative-banking", title: "Cooperative Banking Sector" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Tripura", href: "/services/banking-and-finance/tripura" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Tripura</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the Rubber Capital of the North East. Expert in TIIPIS Subsidies, Cross-Border Trade Finance, and DRT Litigation.
          </p>
          <Link href="/contact">
            <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
              Consult a Finance Lawyer
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
                  Financial Legal Services in Agartala & Beyond
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tripura's economy is undergoing a rapid transformation, leveraging its strategic location as the "Third Internet Gateway" of India and its status as the country's second-largest rubber producer. With Agartala developing into a Smart City and the proximity to Bangladesh offering a gateway to the Chittagong port, the demand for sophisticated banking and legal services is at an all-time high.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The state government's investor-friendly <strong>Tripura Industrial Investment Promotion Incentive Scheme (TIIPIS)</strong> has catalyzed growth in the MSME sector. However, the banking landscape is nuanced, dealing with land collateral issues in <strong>Tripura Tribal Areas Autonomous District Council (TTAADC)</strong> zones and the intricate regulatory framework of cross-border trade finance under FEMA.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide comprehensive legal support to businesses, banks, and exporters. Whether you are a rubber planter in Udaipur seeking a long-term loan, an IT startup in the new SEZ, or a trader in Akhaura dealing with Letter of Credit disputes, our expertise ensures your financial interests are secure and compliant.
                </p>
              </section>

              {/* Rubber Economy */}
              <section id="rubber-economy" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Rubber Industry Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Rubber is the backbone of Tripura's rural economy. Financing rubber plantations is specialized because of the long gestation period (7 years) before the trees start yielding latex. Banks need to structure term loans with a repayment holiday (moratorium) that matches this biological cycle.
                </p>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Comprehensive Loan Structuring</h3>
                  <p className="text-gray-700">
                    We assist planters and Rubber Producer Societies (RPS) in navigating the bank loan process:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-green-800">
                    <li><strong>Land Verification:</strong> Ensuring clear title (Khatian/Porcha) to mortgage the plantation area. In TTAADC areas, we facilitate the necessary permissions for creating a charge on tribal land.</li>
                    <li><strong>Subsidy Claims:</strong> Filing for subsidies from the <strong>Rubber Board</strong>, which can cover a significant portion of the planting and maintenance cost.</li>
                    <li><strong>Legal Agreements:</strong> Drafting supply contracts with latex processing units (Manimalayar) to demonstrate assured cash flow for loan repayment.</li>
                  </ul>
                </div>
              </section>

              {/* TIIPIS Scheme */}
              <section id="tiipis-scheme" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  TIIPIS Incentive Scheme
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Tripura Industrial Investment Promotion Incentive Scheme (TIIPIS), 2022</strong> is a powerful tool for business viability. It offers fiscal incentives that directly improve the Debt Service Coverage Ratio (DSCR) of a project.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Key Benefits Breakdown</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Capital Subsidy:</strong> 30% of Fixed Capital Investment (Plant & Machinery), with a higher cap for "Thrust Sectors" like bamboo and food processing.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Interest Subvention:</strong> Reimbursement of 4% interest on working capital loans for 5 years.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Transport Subsidy:</strong> Reimbursement of transport costs for raw materials and finished goods, crucial for overcoming Tripura's geographical isolation.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    We help businesses navigate the "Single Window System" (SWA) to obtain the Eligibility Certificate required by banks to sanction loans factoring in these subsidies.
                  </p>
                </div>
              </section>

              {/* Border Trade */}
              <section id="border-trade" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Indo-Bangla Trade Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Agartala's proximity to Bangladesh and the <strong>Srimantapur Integrated Check Post (ICP)</strong> offers immense trade potential. Financing import-export businesses involves strict compliance with the <strong>Foreign Exchange Management Act (FEMA)</strong>.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist traders in:
                  <br />• <strong>Letter of Credit (LC):</strong> Drafting and vetting LC terms (UCP 600 norms) to prevent payment defaults and ensure discrepancies don't delay payments.
                  <br />• <strong>Export Credit Guarantee Corporation (ECGC):</strong> Handling insurance claims for non-payment by foreign buyers due to political or commercial risks.
                  <br />• <strong>Border Haats:</strong> Advising on the legal limits of cash carriage and commodity lists for trade in border haats like Kamalasagar and Srinagar.
                </p>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Agartala
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The microfinance sector in Tripura is robust, supported by a strong network of Self Help Groups (SHGs). Registering a Non-Banking Financial Company (NBFC) allows for formal lending operations.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Regulatory Process</h3>
                  <p className="text-yellow-800">
                    1. <strong>Incorporation:</strong> Register a Public/Private Limited Company in Tripura.<br/>
                    2. <strong>Capital Requirement:</strong> Deposit ₹2 Crores Net Owned Fund (NOF) in a bank FD.<br/>
                    3. <strong>RBI Application:</strong> Submit the application to the RBI Regional Office (Guwahati).<br/>
                    4. <strong>Director Diligence:</strong> Ensure all directors have a clean CIBIL record and no criminal history, a key check by RBI.
                  </p>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation (Guwahati Jurisdiction)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tripura does not have a local Debt Recovery Tribunal. All recovery cases involving amounts above ₹20 Lakhs fall under the jurisdiction of <strong>DRT Guwahati</strong>. For a borrower in Agartala, fighting a case in Guwahati can be logistically burdensome.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Solution:</strong> We have a dedicated legal team in Guwahati to handle filings and daily hearings for our Tripura clients. We extensively leverage the video conferencing facilities of the tribunal to allow clients to attend important proceedings remotely, saving time and travel costs. We handle Original Applications (OA), Securitization Applications (SA), and appeals in DRAT.
                </p>
              </section>

              {/* SARFAESI Tribal */}
              <section id="sarfaesi-tribal" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI in TTAADC Areas
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Tripura Land Revenue and Land Reforms Act (TLR & LR Act)</strong> restricts the transfer of tribal land to non-tribals. This significantly impacts the enforcement of the SARFAESI Act in <strong>Autonomous District Council (TTAADC)</strong> areas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Bank Advisory:</strong> Banks cannot auction tribal land to general category bidders. This often leads to failed auctions. We assist banks in:
                  <br />• Identifying a pool of eligible tribal buyers before initiating the auction.
                  <br />• Obtaining necessary permissions from the District Collector under Section 187 of the TLR & LR Act to conclude the sale legally.
                  <br />• Executing Section 14 orders for possession with sensitivity to local community dynamics.
                </p>
              </section>

              {/* Swabalamban */}
              <section id="swabalamban" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Swabalamban Scheme
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Swabalamban</strong> scheme is a vital initiative to support unemployed youth in Tripura. It involves a bank loan with a significant subsidy component.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Legal issues often arise regarding the "unemployed" certification and project viability. We help applicants draft error-free project reports and affidavits to ensure quick sanctioning by banks like <strong>Tripura Gramin Bank</strong> and <strong>Tripura State Cooperative Bank</strong>. We also guide them on the interview process with the district selection committee.
                </p>
              </section>

              {/* Tea Industry */}
              <section id="tea-industry" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tea Industry Revival
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tripura has a historic tea industry that is now being revived. Financing tea gardens requires specialized legal knowledge regarding land ceiling exemptions and labor laws.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist tea estates in:
                  <br />• <strong>Hypothecation:</strong> Creating charges on the standing crop for working capital loans.
                  <br />• <strong>Tea Board Schemes:</strong> Applying for subsidies for replantation and rejuvenation.
                  <br />• <strong>Debt Restructuring:</strong> Negotiating with banks for restructuring overdue term loans under specific RBI guidelines for the tea sector.
                </p>
              </section>

              {/* Cooperative Banking */}
              <section id="cooperative-banking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cooperative Banking Sector
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Tripura State Cooperative Bank (TSCB)</strong> has the widest network in the state. Cooperative societies play a crucial role in rural credit.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We advise Cooperative Societies and LAMPs (Large Area Multi-Purpose Societies) on:
                  <br />• <strong>Bylaw Amendments:</strong> Aligning society bylaws with the 97th Constitutional Amendment and state acts.
                  <br />• <strong>Election Disputes:</strong> Representing members in disputes before the Registrar of Cooperative Societies.
                  <br />• <strong>Recovery Proceedings:</strong> Initiating recovery certificates (RC) under the Cooperative Societies Act, which is often faster than civil courts.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Loans in Tripura</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Land Khatian / Porcha (Certified Copy)</li>
                      <li>• TTAADC Resident Certificate (if applicable)</li>
                      <li>• Rubber Board License (for plantations)</li>
                      <li>• TIIPIS Registration / Eligibility Certificate</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Detailed Project Report (DPR)</li>
                      <li>• Udyam Registration (MSME)</li>
                      <li>• Trade License (Agartala Municipal Corp)</li>
                      <li>• IEC Code (for Exporters)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Tripura
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "I wanted to expand my rubber plantation in Udaipur. The bank loan process was stuck on land valuation. AMA Legal Solutions helped clarify the title issues regarding the joint patta and got the loan sanctioned."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Subrata Debnath</p>
                        <p className="text-sm text-gray-500">Planter, Udaipur</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We are an export house in Agartala. We had a payment dispute with a buyer in Bangladesh. Their team helped us enforce the LC terms through the bank and recover our money without litigation."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Manish Saha</p>
                        <p className="text-sm text-gray-500">Exporter, Agartala</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Applying for the TIIPIS subsidy was complicated. They prepared our project report and handled the single window clearance efficiently, ensuring we got the 30% capital subsidy."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Ratan Das</p>
                        <p className="text-sm text-gray-500">Entrepreneur, Bodhjungnagar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our SARFAESI case was transferred to DRT Guwahati. Since we couldn't travel often, their local team represented us there, filed the SA, and kept us updated on every hearing."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">B</div>
                      <div>
                        <p className="font-bold text-gray-900">Bimal Roy</p>
                        <p className="text-sm text-gray-500">Businessman, Dharmanagar</p>
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
                    Secure Your Financial Future in Tripura
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the rubber gardens of South Tripura to the trade centers of Agartala, we provide the legal expertise you need to grow.
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
                    100% Confidential • Expert Legal Advice • Guwahati DRT Representation
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
                  Get professional legal advice for your financial business in Tripura.
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

export default TripuraBankingClient;
