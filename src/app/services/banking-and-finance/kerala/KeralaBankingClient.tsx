"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const KeralaBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Kerala's Financial Landscape" },
    { id: "gold-loans", title: "The Gold Loan Economy" },
    { id: "chitty-business", title: "Chitty (Chit Fund) Registration" },
    { id: "nbfc-registration", title: "NBFC Registration in Kochi" },
    { id: "nidhi-company", title: "Nidhi Companies & Challenges" },
    { id: "microfinance-kudumbashree", title: "Microfinance & Kudumbashree" },
    { id: "money-lending", title: "Kerala Money Lenders Act" },
    { id: "ksidc-kfc", title: "KSIDC & KFC Schemes" },
    { id: "drt-ernakulam", title: "DRT Ernakulam & Recovery" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Kerala", href: "/services/banking-and-finance/kerala" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Kerala</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal consultancy for God's Own Country. From Gold Loan NBFC registration in Kochi to KSIDC project finance and DRT litigation in Ernakulam.
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
                  Navigating Kerala's Unique Financial Ecosystem
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Kerala's financial sector is distinct from the rest of India. With high remittance inflows from the Gulf, a literacy rate near 100%, and a culture deeply rooted in gold savings, the banking dynamics here are unique. The state is home to some of India's largest Gold Loan NBFCs (Muthoot, Manappuram) and a robust network of cooperative banks.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, regulatory compliance in Kerala is stringent. The state government actively monitors private lending through the <strong>Kerala Money Lenders Act</strong> and the <strong>Chitties Act</strong>. Operation Kubera, a crackdown on illegal money lenders, is a testament to this vigilance. For new entrants-be it a Fintech startup in Kochi's Infopark or a Nidhi company in Thrissur-legal adherence is the key to survival.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide specialized banking law services tailored to Kerala's environment. We assist in NBFC registration, Chitty business setup, and handling complex debt recovery litigation in DRT Ernakulam. We are your legal shield in a highly regulated market.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Kerala
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The banking sector in Kerala is characterized by high deposit mobilization (thanks to NRI remittances) and a credit culture dominated by personal and gold loans.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">NBFC Hub</h3>
                    <p className="text-gray-700">
                      Kochi and Thrissur are the headquarters for major NBFCs. The business model here revolves around quick disbursal of loans against gold jewelry. Legal issues often involve auction notices, LTV (Loan to Value) compliance, and branch expansion permissions.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Cooperative Power</h3>
                    <p className="text-gray-700">
                      The Kerala Bank (Kerala State Co-operative Bank) and thousands of PACS (Primary Agricultural Credit Societies) form a dense network. We advise these societies on compliance with the Banking Regulation Act (Amendment) 2020, which brought them under tighter RBI supervision.
                    </p>
                  </div>
                </div>
              </section>

              {/* Gold Loans */}
              <section id="gold-loans" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Gold Loan Economy: Legal Aspects
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gold loans are the fastest way to raise capital in Kerala. However, running a gold loan business requires strict adherence to RBI's "Fair Practices Code".
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Key Compliance Points</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>LTV Ratio:</strong> Ensuring loans do not exceed 75% of the gold value (as per RBI norms).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Auction Procedures:</strong> If a borrower defaults, proper legal notice must be served. The auction must be public and transparent. We handle the drafting of these legal notices to prevent future litigation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Security & Insurance:</strong> Mandates regarding strong rooms and insurance coverage for the pledged gold.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Chitty Business */}
              <section id="chitty-business" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Starting a Chitty (Chit Fund) Business
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Chitties are an indigenous financial instrument in Kerala, regulated by the <strong>Kerala Chitties Act, 1975</strong> and the central act. While KSFE (Kerala State Financial Enterprises) dominates, there is space for private players.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Registration is Mandatory</h3>
                  <p className="text-yellow-800">
                    Conducting a "Kuri" or Chitty without registration is a non-bailable offense. You must obtain a "Previous Sanction" for every single chitty scheme you launch.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Service:</strong> We assist in incorporating the Chit company, depositing the security amount (100% of chit value) in the Treasury, and obtaining the Commencement Certificate from the Registrar of Chits.
                </p>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Thiruvananthapuram/Kochi
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To operate a lending business at scale, NBFC registration with the RBI is essential. The <strong>RBI Regional Office in Thiruvananthapuram</strong> oversees this.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          Register a Company with <strong>RoC Ernakulam</strong>. Minimum NOF ₹2 Crores.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Bank Deposit</td>
                        <td className="p-4 border-b text-gray-700">
                          Fixed Deposit of ₹2 Crores in a scheduled bank free from lien.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Application</td>
                        <td className="p-4 border-b text-gray-700">
                          Online filing on RBI COSMOS portal. Physical submission to RBI Thiruvananthapuram.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">4. Management</td>
                        <td className="p-4 text-gray-700">
                          Directors must have a clean CIBIL record and experience in finance.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Companies: Opportunities & Risks
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nidhi companies are popular in rural Kerala. However, the central government has rejected hundreds of NDH-4 applications from Kerala recently due to non-compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Why Nidhi?</h3>
                    <p className="text-gray-700">
                      - Low capital entry (₹10 Lakhs).<br/>
                      - No RBI license needed.<br/>
                      - Can accept deposits from members.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">The NDH-4 Hurdle</h3>
                    <p className="text-gray-700">
                      To get "Nidhi Status", you must have 200 members and Net Owned Funds of ₹10 Lakhs within 1 year. We conduct a pre-audit to ensure your ratios are perfect before filing NDH-4 to avoid rejection.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance & Kudumbashree */}
              <section id="microfinance-kudumbashree" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & The Kudumbashree Factor
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Kudumbashree</strong> is one of the world's largest women's empowerment projects. Private MFIs in Kerala often compete or collaborate with this network.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Legal Entry:</strong> To operate a commercial microfinance business, registering as an <strong>NBFC-MFI</strong> is the safest route. For smaller, community-focused lending, a <strong>Section 8 Company</strong> is viable. We draft the loan agreements that respect the social fabric while ensuring legal enforceability.
                </p>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kerala Money Lenders Act, 1958
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The state has a zero-tolerance policy towards unauthorized lending ("Blade Mafia").
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Licensing:</strong> Mandatory to get a license from the Commercial Taxes Department.</li>
                  <li><strong>Interest Cap:</strong> Cannot charge more than 2% above the maximum commercial bank rate.</li>
                  <li><strong>Security:</strong> Must deposit security amounts with the government based on lending volume.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We help financiers obtain this license and maintain the statutory registers (Day Book, Ledger) required to pass surprise inspections.
                </p>
              </section>

              {/* KSIDC & KFC */}
              <section id="ksidc-kfc" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  KSIDC & KFC: Industrial Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Kerala State Industrial Development Corporation (KSIDC)</strong> and <strong>Kerala Financial Corporation (KFC)</strong> are the go-to bodies for project finance.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  We assist entrepreneurs in:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Project Reports:</strong> Legal vetting of DPRs for KFC's CM Entrepreneurship Development Programme.</li>
                  <li><strong>Title Search:</strong> Verifying land titles (Jenmam/Pandaram lands) for collateral.</li>
                  <li><strong>Loan Documentation:</strong> Drafting hypothecation and mortgage deeds.</li>
                </ul>
              </section>

              {/* DRT Ernakulam */}
              <section id="drt-ernakulam" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Ernakulam & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Kerala has two DRTs in Ernakulam. They handle a high volume of cases due to the active banking sector.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">SARFAESI Litigation</h3>
                    <p className="text-gray-700">
                      We represent banks in obtaining Chief Judicial Magistrate (CJM) orders for taking physical possession of secured assets. We also defend borrowers against procedural lapses by banks.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Revenue Recovery</h3>
                    <p className="text-gray-700">
                      In Kerala, banks can also use the <strong>Revenue Recovery (RR) Act</strong> for certain loans (like education loans). We advise on the legality of RR notices (RR Japthi).
                    </p>
                  </div>
                </div>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/Chitty Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• PAN & Aadhar of Directors</li>
                      <li>• Police Clearance Certificate (PCC)</li>
                      <li>• Net Worth Certificate (CA Certified)</li>
                      <li>• Office Rent Agreement</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• FD Receipt (Security Deposit)</li>
                      <li>• CIBIL Reports</li>
                      <li>• Experience Certificates in Finance</li>
                      <li>• Educational Qualifications</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Kerala
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced huge hurdles registering our Nidhi company in Palakkad due to the new NDH-4 rules. AMA Legal Solutions audited our files and handled the compliance perfectly. We got our status approved."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Mathew Joseph</p>
                        <p className="text-sm text-gray-500">Director, Palakkad Nidhi Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Starting a private Chitty business in Kottayam seemed impossible with all the regulations. Their team guided us through the Treasury deposit and Registrar sanction process step-by-step."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Anand Nair</p>
                        <p className="text-sm text-gray-500">Proprietor, Nair Chits</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed a large term loan from KFC for our resort project in Wayanad. They handled the legal scrutiny of our land documents and project report, ensuring smooth disbursement."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">F</div>
                      <div>
                        <p className="font-bold text-gray-900">Fathima Beevi</p>
                        <p className="text-sm text-gray-500">MD, GreenValley Resorts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Their expertise in DRT Ernakulam is unmatched. They helped our bank recover a bad loan of ₹80 Lakhs through SARFAESI action within 8 months."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Krishnan Unni</p>
                        <p className="text-sm text-gray-500">Branch Manager, Scheduled Bank</p>
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
                    Grow Your Finance Business in Kerala
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the backwaters of Alappuzha to the high-rises of Kochi, we provide the legal expertise you need to lend with confidence.
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
                    Trusted by Banks & NBFCs • Confidential • Pan-Kerala Reach
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
                  Finance Law Experts
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get professional legal advice for your financial business in Kerala.
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

export default KeralaBankingClient;


