"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const tamil-naduBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Tamil Nadu's Financial Landscape" },
    { id: "chit-funds", title: "Chit Funds Registration" },
    { id: "nbfc-registration", title: "NBFC Registration in Chennai" },
    { id: "nidhi-company", title: "Nidhi Companies: The Origin" },
    { id: "microfinance-shg", title: "Microfinance & SHG Movement" },
    { id: "money-lending", title: "Money Lenders Act & Kandhu Vatti" },
    { id: "industrial-finance", title: "TIIC & Industrial Finance" },
    { id: "drt-litigation", title: "DRT Litigation (Chennai/Madurai)" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Tamil Nadu", href: "/services/banking-and-finance/tamil-nadu" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Tamil Nadu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Leading legal consultancy in Chennai for Chit Fund Registration, Nidhi Companies, and Industrial Finance. Expert guidance on RBI compliance and DRT litigation.
          </p>
          <Link href="/contact">
            <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
              Consult a Banking Lawyer
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
                  Financing the Detroit of India
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tamil Nadu is a financial powerhouse, boasting one of the highest Credit-Deposit ratios in the country. From the bustling automobile hubs of Chennai to the textile centers of Tirupur and Coimbatore, the demand for capital is insatiable. The state is unique in its deep-rooted financial culture, being the birthplace of the <strong>Nidhi Company</strong> model and having a thriving <strong>Chit Fund</strong> industry that rivals formal banking in reach.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, this vibrant sector operates under a strict regulatory framework. The state government is notably aggressive against usury ("Kandhu Vatti"), and the RBI's Chennai Regional Office is vigilant about NBFC compliance. Navigating the overlap between central banking laws and state-specific acts like the <strong>Tamil Nadu Chit Funds Act</strong> requires precise legal expertise.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide specialized legal services for Tamil Nadu's financial sector. Whether you are registering a Chit Fund in Madurai, setting up a Fintech NBFC in Chennai's OMR, or fighting a recovery case in DRT Coimbatore, our team delivers results-oriented legal counsel.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Tamil Nadu
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tamil Nadu's financial ecosystem is a blend of modern banking and traditional community finance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Formal Sector</h3>
                    <p className="text-gray-700">
                      Home to headquarters of major public sector banks like Indian Bank and Indian Overseas Bank. The state has a dense network of branches ensuring high financial inclusion. Industrial credit is facilitated by <strong>TIIC (Tamil Nadu Industrial Investment Corporation)</strong>.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">The Informal/Semi-Formal Sector</h3>
                    <p className="text-gray-700">
                      Chit Funds and Nidhi Companies play a massive role in household savings and MSME finance. Gold loans are an integral part of the culture, with specialized NBFCs originating from the state dominating the national market.
                    </p>
                  </div>
                </div>
              </section>

              {/* Chit Funds */}
              <section id="chit-funds" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Chit Fund Registration: A Lucrative Business
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Chit funds are not just savings schemes; they are a way of life in Tamil Nadu. However, running an unregistered chit fund is a criminal offense under the <strong>Chit Funds Act, 1982</strong>.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Process</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Incorporation:</strong> Register a Private Limited Company with RoC Chennai/Coimbatore. Minimum capital ₹1 Lakh.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Prior Sanction:</strong> Apply to the <strong>Chit Registrar</strong> of your district for "Prior Sanction" before floating any chit group.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Security Deposit:</strong> You must deposit 100% of the chit value in a scheduled bank in the name of the Registrar.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Commencement Certificate:</strong> Once security is verified, the Registrar issues the certificate to start operations.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Chennai
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Chennai is a hub for commercial vehicle finance and gold loan NBFCs. Registering an NBFC here involves strict scrutiny by the <strong>RBI Chennai Regional Office</strong>.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Key Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Company Setup</td>
                        <td className="p-4 border-b text-gray-700">
                          Incorporate under Companies Act, 2013 with "Finance" in the main objects clause.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. NOF Requirement</td>
                        <td className="p-4 border-b text-gray-700">
                          Minimum Net Owned Fund of <strong>₹2 Crores</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          File via COSMOS. Submit hard copy to DNBS, RBI Chennai (Fort Glacis).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">4. Management Profile</td>
                        <td className="p-4 text-gray-700">
                          Directors must have a clean police record and experience in the financial sector.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Companies: The Tamil Nadu Model
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tamil Nadu is the birthplace of the Nidhi movement (e.g., Kumbakonam Mutual Benefit Fund). These "Mutual Benefit Companies" are ideal for local community banking.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Advantages</h3>
                    <p className="text-gray-700">
                      - No RBI License required.<br/>
                      - Can start with ₹10 Lakhs capital.<br/>
                      - Can accept deposits from members (Recurring/Fixed).<br/>
                      - Excellent for gold loan business.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Compliance (NDH-4)</h3>
                    <p className="text-gray-700">
                      Recent amendments make it mandatory to file Form NDH-4 to get "Nidhi Status". Without this, you cannot open branches. We ensure your ratios (1:20 deposit leverage) are perfect for approval.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance & SHG */}
              <section id="microfinance-shg" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & The SHG Movement
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tamil Nadu pioneered the Self Help Group (SHG) movement with the <strong>Mahalir Thittam</strong> project. Today, it is one of the safest markets for microfinance due to high repayment discipline.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Starting an MFI:</strong> You can register as a Section 8 Company (Non-Profit) to lend to SHGs without high capital requirements. For larger operations, the NBFC-MFI route (₹5 Cr Capital) allows you to tap into bank funding. We draft the <strong>Joint Liability Group (JLG)</strong> agreements that secure these unsecured loans.
                </p>
              </section>

              {/* Money Lending & Kandhu Vatti */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Money Lenders Act & "Kandhu Vatti"
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending is regulated under the <strong>Tamil Nadu Money Lenders Act, 1957</strong>.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">The Kandhu Vatti Act</h3>
                  <p className="text-yellow-800">
                    The <strong>Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003</strong> was enacted to stop predatory lending ("Kandhu Vatti", "Meter Vatti"). Charging interest beyond the secured/unsecured limits set by the government is a non-bailable offense.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Service:</strong> We help ethical lenders obtain the Money Lenders License from the Tahsildar's office, ensuring they stay on the right side of the law and can legally recover their dues.
                </p>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  TIIC & Industrial Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Tamil Nadu Industrial Investment Corporation (TIIC)</strong> is the prime state-level financial institution. It offers loans for setting up industries, modernizing plants, and service sector projects.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>NEEDS Scheme:</strong> 25% subsidy (up to ₹50 Lakhs) for new entrepreneurs.</li>
                  <li><strong>UYEGP:</strong> Subsidy for youth unemployment generation.</li>
                  <li><strong>General Term Loans:</strong> For purchase of land, machinery, and construction.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist clients in preparing the legal project report and documentation required for TIIC loan sanction and subsidy disbursement.
                </p>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation: Chennai, Madurai, Coimbatore
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Debt recovery in Tamil Nadu is handled by three Debt Recovery Tribunals (DRTs).
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Jurisdictions</h3>
                    <p className="text-gray-700">
                      - <strong>DRT-1 & DRT-2 Chennai:</strong> Cover Chennai and northern districts.<br/>
                      - <strong>DRT Madurai:</strong> Covers southern districts.<br/>
                      - <strong>DRT Coimbatore:</strong> Covers western industrial belt.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Services</h3>
                    <p className="text-gray-700">
                      We handle SARFAESI actions (Section 13 notices), physical possession of assets, and defending borrowers against illegal bank seizures. We also manage appeals in the <strong>DRAT Chennai</strong>.
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
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Chit Fund / NBFC Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Directors' KYC (PAN, Aadhar)</li>
                      <li>• Solvency Certificate (for Chit Funds)</li>
                      <li>• Bank Guarantee/FD Receipt</li>
                      <li>• Police Clearance Certificate</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Proof of Registered Office in TN</li>
                      <li>• Detailed Bylaws (for Chit/Nidhi)</li>
                      <li>• CIBIL Reports</li>
                      <li>• Net Worth Certificates</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Tamil Nadu
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to start a Chit Fund in Salem. The process of getting 'Prior Sanction' was complex. AMA Legal Solutions guided us through the deposit requirements and bylaws drafting. Excellent service."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Karthik Raja</p>
                        <p className="text-sm text-gray-500">Director, Salem Chits Pvt Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Registering our Nidhi Company in Chennai was smooth with their help. They handled the NDH-4 compliance which is very strict now. We are now operating successfully."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Senthil Kumar</p>
                        <p className="text-sm text-gray-500">Chairman, Mylapore Nidhi Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our textile unit in Tirupur faced a DRT case in Coimbatore. Their legal team defended us well and helped negotiate a One Time Settlement (OTS) with the bank."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Ramesh Bala</p>
                        <p className="text-sm text-gray-500">MD, TexFab Exports</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They helped us get the Money Lenders License in Madurai. They explained the interest rate caps clearly so we don't violate the Kandhu Vatti Act."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">G</div>
                      <div>
                        <p className="font-bold text-gray-900">Ganesh Moorthy</p>
                        <p className="text-sm text-gray-500">Proprietor, GM Finance</p>
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
                    Start Your Finance Business in Tamil Nadu
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From Chit Funds to Nidhi Companies, we provide expert legal guidance to navigate Tamil Nadu's financial regulations.
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
                    100% Confidential • Experienced Legal Team • Pan-Tamil Nadu Service
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
                  Get professional legal advice for your financial business in Tamil Nadu.
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

export default tamil-naduBankingClient;


