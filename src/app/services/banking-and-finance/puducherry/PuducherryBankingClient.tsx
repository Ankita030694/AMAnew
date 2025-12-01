"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const PuducherryBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Puducherry's Banking Landscape" },
    { id: "money-lending", title: "Money Lenders & Pawn Brokers Act" },
    { id: "chit-funds", title: "Chit Funds Registration" },
    { id: "nbfc-nidhi", title: "NBFC & Nidhi Compliance" },
    { id: "pipdic-finance", title: "PIPDIC & Industrial Finance" },
    { id: "drt-litigation", title: "DRT Litigation (Chennai Jurisdiction)" },
    { id: "depositor-protection", title: "Protection of Depositors Act" },
    { id: "french-treaty", title: "French Treaty & Cross-Border" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Puducherry", href: "/services/banking-and-finance/puducherry" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Puducherry</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal counsel for the Union Territory. From Chit Fund Registration and NBFC Compliance to DRT Litigation in Chennai and PIPDIC subsidies.
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
                  Financial Legal Expertise in the French Riviera of the East
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Puducherry (formerly Pondicherry) is a unique financial hub, blending tourism, heritage, and a growing industrial sector. As a Union Territory, it operates under a mix of Central laws and specific local enactments. The financial sector here is characterized by a strong presence of Chit Funds, Nidhi Companies, and traditional money lenders, alongside modern banking institutions.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For businesses and financial entities, navigating the regulatory framework involves dealing with the <strong>Registrar of Companies (RoC) Chennai</strong>, the <strong>Reserve Bank of India (RBI) Chennai</strong>, and local authorities like the <strong>Registrar of Chits</strong>.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide specialized legal services tailored to Puducherry's unique ecosystem. Whether you are dealing with the <strong>Puducherry Money Lenders Act</strong>, seeking subsidies from <strong>PIPDIC</strong>, or fighting a recovery case in <strong>DRT Chennai</strong>, our team ensures compliance and strategic advantage.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Puducherry's Banking Landscape
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The UT has a high density of bank branches and a vibrant co-operative sector.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Commercial & Co-operative</h3>
                    <p className="text-gray-700">
                      Major PSBs and private banks operate alongside the robust <strong>Puducherry State Co-operative Bank</strong>. We assist in loan syndication and project finance documentation for resorts, educational institutions, and SMEs.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Non-Banking Finance</h3>
                    <p className="text-gray-700">
                      The NBFC sector is growing, particularly in gold loans and vehicle finance. However, strict adherence to the <strong>Puducherry Protection of Interests of Depositors Act</strong> is crucial to avoid legal pitfalls.
                    </p>
                  </div>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Money Lenders & Pawn Brokers Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending is governed by the <strong>Puducherry Money Lenders Act, 1970</strong> and the <strong>Puducherry Pawn Brokers Act, 1966</strong>.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Licensing & Compliance</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>License Requirement:</strong> Mandatory license from the Tehsildar/Deputy Tehsildar of the respective commune (e.g., Pondicherry, Oulgaret, Villianur).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Rate of Interest:</strong> Interest rates are capped. Charging "kandhu vatti" (exorbitant interest) is a criminal offense under special provisions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Pawn Brokers:</strong> Strict rules on pledging, safe custody of jewelry, and auctioning of unredeemed pledges only through approved auctioneers.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Chit Funds */}
              <section id="chit-funds" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Chit Funds Registration
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Chit funds are a popular savings instrument in Puducherry. However, the <strong>Chit Funds Act, 1982</strong> requires rigorous compliance.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Crucial Steps</h3>
                  <p className="text-yellow-800">
                    1. <strong>Prior Sanction:</strong> Apply to the Registrar of Chits for prior sanction before launching any scheme.<br/>
                    2. <strong>Registration:</strong> Register the Chit Agreement.<br/>
                    3. <strong>Security:</strong> Deposit 100% of the chit value in a scheduled bank in the name of the Registrar.<br/>
                    4. <strong>Commencement Certificate:</strong> Obtain CC to start business.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We handle the entire lifecycle of Chit Fund registration and ongoing compliance filings.
                </p>
              </section>

              {/* NBFC & Nidhi */}
              <section id="nbfc-nidhi" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC & Nidhi Company Compliance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For entrepreneurs looking to start a finance business, Nidhi Companies and NBFCs are the primary vehicles.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Entity Type</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Key Requirement</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Our Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Nidhi Company</td>
                        <td className="p-4 border-b text-gray-700">
                          Min Capital ₹10L. Lend only to members. NDH-4 filing mandatory.
                        </td>
                        <td className="p-4 border-b text-gray-700">
                          Incorporation, NDH Form filings, Loan Policy drafting.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">NBFC</td>
                        <td className="p-4 border-b text-gray-700">
                          Min NOF ₹2 Cr (or ₹10 Cr depending on type). RBI Registration.
                        </td>
                        <td className="p-4 border-b text-gray-700">
                          RBI Application (COSMOS), Director Fit & Proper scrutiny.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Microfinance (Sec 8)</td>
                        <td className="p-4 border-b text-gray-700">
                          NGO model. Loan cap ₹50k/₹1.25L. Social motive.
                        </td>
                        <td className="p-4 border-b text-gray-700">
                          Section 8 Incorporation, FCRA (if applicable).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PIPDIC Finance */}
              <section id="pipdic-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  PIPDIC & Industrial Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Pondicherry Industrial Promotion Development and Investment Corporation (PIPDIC)</strong> is the nodal agency for industrial growth.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Term Loans:</strong> For land, building, and machinery.</li>
                  <li><strong>Subsidies:</strong> Capital Investment Subsidy for MSMEs, Interest Subsidy, and GST reimbursement schemes.</li>
                  <li><strong>Legal Due Diligence:</strong> We ensure your land documents (Patta, Settlement Deed) are in order to mortgage them for PIPDIC loans.</li>
                </ul>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation (Chennai Jurisdiction)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Puducherry does not have its own Debt Recovery Tribunal. Cases involving debts above ₹20 Lakhs are heard by the <strong>DRT in Chennai</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Strategic Representation</h3>
                  <p className="text-gray-700">
                    Our team has a strong presence in Chennai DRT. We represent Puducherry-based borrowers and banks in:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li><strong>Original Applications (OA):</strong> Filing for recovery of dues.</li>
                    <li><strong>Securitization Applications (SA):</strong> Challenging SARFAESI measures (Section 13(4) possession notices).</li>
                    <li><strong>Stay Orders:</strong> Obtaining interim relief against auctions.</li>
                  </ul>
                </div>
              </section>

              {/* Depositor Protection */}
              <section id="depositor-protection" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Protection of Depositors
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Puducherry Protection of Interests of Depositors in Financial Establishments Act, 2004</strong> is a powerful tool against fraudulent schemes.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  If a financial establishment defaults on returning deposits, the Competent Authority (District Magistrate) can attach its properties. We represent depositor groups in filing complaints and financial establishments in defending against wrongful attachment.
                </p>
              </section>

               {/* French Treaty */}
               <section id="french-treaty" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  French Connection & Cross-Border Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many Puducherry residents have dual citizenship (French-Indian) or receive pensions/remittances from France. This creates unique banking scenarios involving <strong>FEMA compliance</strong>, NRE/NRO accounts, and taxation of foreign income.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist in legal matters related to repatriation of funds, property purchase by OCIs/NRIs, and compliance with RBI's FEMA regulations.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Financial Business Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Identity Proofs (Aadhar, PAN)</li>
                      <li>• Address Proof (Registered Office in Puducherry)</li>
                      <li>• Net Worth Certificate (for NBFC/Nidhi)</li>
                      <li>• Police Clearance Certificate</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Banker's Report</li>
                      <li>• Project Report (for PIPDIC/Bank Loans)</li>
                      <li>• No Objection Certificate (NOC) from landlord</li>
                      <li>• Bylaws (for Chit Funds/Nidhi)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Puducherry
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We run a Chit Fund in Villianur. The registration process was complex, but AMA Legal Solutions handled the Registrar of Chits efficiently. Their ongoing compliance support is excellent."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Kumaravel P.</p>
                        <p className="text-sm text-gray-500">Director, Auro Chits Pvt Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As an NRI based in France, I had issues with my property loan and FEMA regulations. Their team guided me through the legalities and resolved the bank dispute."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">J</div>
                      <div>
                        <p className="font-bold text-gray-900">Jean-Pierre M.</p>
                        <p className="text-sm text-gray-500">Property Investor</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Getting a subsidy from PIPDIC required perfect documentation. They prepared our project report and legal due diligence, helping us secure the capital investment subsidy."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">L</div>
                      <div>
                        <p className="font-bold text-gray-900">Lakshmi Narayanan</p>
                        <p className="text-sm text-gray-500">MD, Coastal Processors</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our hotel faced a SARFAESI notice from a bank. AMA Legal Solutions represented us in DRT Chennai and got a stay, giving us time to settle the loan."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Ramesh Gupta</p>
                        <p className="text-sm text-gray-500">Owner, Heritage Residency</p>
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
                    Secure Your Financial Business in Puducherry
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From Heritage Town to the industrial estates of Sedarapet, we provide top-tier legal support for all your banking and finance needs.
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
                    100% Confidential • Expert Legal Advice • Chennai DRT Representation
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
                  Get professional legal advice for your financial business in Puducherry.
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

export default PuducherryBankingClient;


