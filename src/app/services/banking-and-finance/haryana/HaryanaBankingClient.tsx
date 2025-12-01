"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const HaryanaBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Haryana's Financial Landscape" },
    { id: "gurugram-fintech", title: "Gurugram: The Fintech Hub" },
    { id: "regulatory-compliance", title: "Regulatory Compliance & RBI" },
    { id: "nbfc-registration", title: "NBFC Registration Process" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "microfinance-sector", title: "Microfinance & SHGs" },
    { id: "money-lending", title: "Money Lenders Licensing" },
    { id: "drt-chandigarh", title: "DRT Chandigarh & Debt Recovery" },
    { id: "industrial-finance", title: "Industrial Finance & Subsidies" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Haryana", href: "/services/banking-and-finance/haryana" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Haryana</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the Financial Powerhouse of North India. From Fintech setup in Gurugram to Agri-Finance in Karnal, we cover all RBI, DRT, and Corporate compliances.
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
                  Banking in the Heart of India's Growth Story
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Haryana is a study in contrasts that offers immense financial opportunity. On one side stands Gurugram, the Millennium City, home to Fortune 500 companies and a bustling Fintech ecosystem. On the other lies the rich agrarian belt of Karnal, Kurukshetra, and Hisar, which drives the state's rural economy. Bridging these two worlds is a robust banking and financial services sector.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The state boasts a Credit-Deposit (CD) ratio significantly higher than the national average, indicating an aggressive lending environment. However, with high credit volume comes high regulatory scrutiny. Whether it is an NBFC navigating the RBI's digital lending norms or a traditional cooperative bank dealing with agricultural NPAs, legal compliance is paramount.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide specialized banking law services across Haryana. Our expertise ranges from corporate finance restructuring in Manesar to handling bulk Section 138 (Cheque Bounce) litigation in Faridabad courts. We are the legal bridge between financial institutions and the regulatory framework.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Haryana
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Haryana's financial sector is one of the most diversified in India.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Corporate Belt (NCR)</h3>
                    <p className="text-gray-700">
                      Gurugram and Faridabad are hubs for private equity, venture capital, and NBFCs. The demand here is for structured finance, trade credit, and M&A advisory. Legal needs focus on contract drafting, due diligence, and RBI compliance for foreign direct investment (FDI).
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">The Agrarian Hinterland</h3>
                    <p className="text-gray-700">
                      Districts like Sirsa and Fatehabad rely on the <strong>Sarva Haryana Gramin Bank</strong> and Cooperative Banks. Here, the focus is on Kisan Credit Cards (KCC), warehousing receipt finance, and tractor loans. Legal issues often revolve around land mortgage enforceability and recovery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Gurugram Fintech */}
              <section id="gurugram-fintech" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gurugram: The Fintech Capital
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gurugram hosts over 50% of North India's Fintech startups. From digital wallets to P2P lending platforms, the innovation here is rapid. But so is the regulatory catch-up.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Legal Challenges for Fintechs</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Digital Lending Guidelines:</strong> Ensuring your app's privacy policy, data storage (data localization), and loan recovery practices comply with the RBI's strict 2022 guidelines.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>FLDG (First Loss Default Guarantee):</strong> Structuring partnership agreements between regulated entities (REs) and lending service providers (LSPs) to stay within permissible FLDG limits.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>P2P Registration:</strong> Obtaining the NBFC-P2P license from RBI to operate a Peer-to-Peer lending platform legally.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance in Haryana
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Operating in Haryana means dealing with regulators in Chandigarh (Regional) and Delhi (Central).
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>RBI Chandigarh:</strong> The Regional Office covers Haryana. All NBFC applications and NBS returns are processed here.</li>
                  <li><strong>RoC Delhi/Haryana:</strong> Corporate filings are handled by the Registrar of Companies.</li>
                  <li><strong>Department of Institutional Finance:</strong> The state department monitors credit flow and implements schemes like the Annual Credit Plan.</li>
                </ul>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Registering an NBFC in Haryana follows the standard RBI procedure but requires impeccable documentation due to the high volume of applications from the region.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          Register a Company with RoC. Minimum paid-up equity capital should be ₹2 Crores.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital Deposit</td>
                        <td className="p-4 border-b text-gray-700">
                          Park the Net Owned Fund (₹2 Cr) in a Fixed Deposit.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          File online via COSMOS. Upload director profiles (CIBIL score &gt; 750 preferred).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Hard Copy</td>
                        <td className="p-4 border-b text-gray-700">
                          Submit physical dossier to <strong>RBI Chandigarh Regional Office</strong>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Companies in Haryana
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nidhi companies are popular in trading towns like Panipat and Rohtak. They offer a community-based banking model.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Registration</h3>
                    <p className="text-gray-700">
                      Incorporation as a Public Limited Company. Minimum capital ₹10 Lakhs. Must add "Nidhi Limited" to the name.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">NDH-4 Compliance</h3>
                    <p className="text-gray-700">
                      Mandatory filing of form NDH-4 within 1 year to get Nidhi status. Haryana has seen many rejections recently due to non-compliance with the "Fit and Proper" criteria for promoters.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance Sector */}
              <section id="microfinance-sector" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & Rural Credit
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Haryana State Rural Livelihoods Mission (HSRLM)</strong> promotes SHG-Bank linkages. Private MFIs also operate extensively in Mewat (Nuh) and Mahendragarh.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Legal Structure:</strong> We assist clients in setting up <strong>Section 8 Microfinance Companies</strong> which are exempted from RBI registration if lending is below ₹50,000 per borrower (subject to RBI guidelines). This is the fastest way to enter the rural credit market.
                </p>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Money Lenders Licensing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Under the <strong>Punjab Registration of Money Lenders Act, 1938</strong> (applicable to Haryana), private lending without a license is illegal.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
                  <h3 className="font-bold text-lg mb-4">Consequences of Non-Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    If you lend without a license, the court will dismiss your recovery suit. We help individuals and firms obtain this license from the District Collector's office, ensuring your capital is legally protected.
                  </p>
                </div>
              </section>

              {/* DRT Chandigarh */}
              <section id="drt-chandigarh" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Chandigarh: Jurisdiction & Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Recovery of debts above ₹20 Lakhs for banks in Haryana falls under the <strong>Debt Recovery Tribunal (DRT) in Chandigarh</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">SARFAESI Actions</h3>
                    <p className="text-gray-700">
                      We handle the issuance of notices under Section 13(2) and 13(4) of the SARFAESI Act. Our team coordinates with the District Magistrate (DM) in districts like Gurugram and Faridabad to take physical possession of mortgaged properties.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Cheque Bounce</h3>
                    <p className="text-gray-700">
                      For corporate loans and unsecured debt, Section 138 litigation is the most effective tool. We manage bulk filings for NBFCs in the busy courts of Gurugram and Ambala.
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
                  The <strong>Haryana Enterprise and Employment Policy 2020</strong> provides substantial subsidies.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Interest Subsidy:</strong> 5% on term loans for MSMEs.</li>
                  <li><strong>Technology Acquisition:</strong> Grant of up to ₹50 Lakhs.</li>
                  <li><strong>Stamp Duty Refund:</strong> 100% in certain blocks.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist manufacturers in the IMT Manesar and Rai industrial estates to structure their financing to maximize these government benefits.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/Nidhi Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• PAN & Aadhar of Directors</li>
                      <li>• Digital Signature Certificates (DSC)</li>
                      <li>• Proof of Registered Office in Haryana</li>
                      <li>• Clean CIBIL Reports</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Fixed Deposit Receipt (NOF)</li>
                      <li>• Net Worth Certificates (CA Certified)</li>
                      <li>• Police Clearance Certificates</li>
                      <li>• Detailed Business Plan</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Haryana
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Setting up a Fintech NBFC in Gurugram required complex structuring for FDI. AMA Legal Solutions handled the RBI compliance perfectly. Their knowledge of digital lending norms is top-notch."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Siddharth Gupta</p>
                        <p className="text-sm text-gray-500">Founder, FinTech startup, Gurugram</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced recovery issues with our tractor loans in Hisar. Their team helped us file cases in DRT Chandigarh and we got possession of assets within months."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rakesh Dalal</p>
                        <p className="text-sm text-gray-500">Manager, Agri-Finance Co., Hisar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our Nidhi Company in Rohtak was stuck with NDH-4 issues. They audited our books, fixed the compliance gaps, and got our status approved."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Mohit Sharma</p>
                        <p className="text-sm text-gray-500">Director, Rohtak Nidhi Ltd.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They helped us obtain the Money Lenders License in Karnal. Professional service and clear guidance on interest rate caps."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">J</div>
                      <div>
                        <p className="font-bold text-gray-900">Joginder Singh</p>
                        <p className="text-sm text-gray-500">Proprietor, Singh Finance</p>
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
                    Grow Your Finance Business in Haryana
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the boardroom in Gurugram to the farmlands of Sirsa, we provide the legal expertise you need to lend with confidence.
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
                    Trusted by Banks & NBFCs • Confidential • Pan-Haryana Reach
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
                  Finance Legal Experts
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get professional legal advice for your financial business in Haryana.
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

export default HaryanaBankingClient;

