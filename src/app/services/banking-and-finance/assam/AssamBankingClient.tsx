"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const AssamBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Assam's Financial Landscape" },
    { id: "microfinance-regulation", title: "Microfinance Crisis & Regulation" },
    { id: "regulatory-compliance", title: "Regulatory Compliance (RBI/RoC)" },
    { id: "nbfc-registration", title: "NBFC Registration in Guwahati" },
    { id: "tea-finance", title: "Tea Industry Finance" },
    { id: "nedfi-role", title: "NEDFi & Industrial Loans" },
    { id: "money-lending", title: "Assam Money Lenders Act" },
    { id: "drt-guwahati", title: "DRT Guwahati & Recovery" },
    { id: "industrial-policy", title: "Assam Industrial Policy" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Assam", href: "/services/banking-and-finance/assam" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Assam</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal consultancy for the Gateway to North East India. From Microfinance Regulation compliance to Tea Industry financing and DRT Litigation in Guwahati.
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
                  Navigating the Financial Hub of the North East
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Assam is the economic engine of North East India. With Guwahati acting as the central node for commerce, logistics, and finance for the entire region, the state offers unique opportunities for financial institutions. The landscape is dominated by the tea industry, oil & gas sector, and a rapidly growing MSME base.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, banking in Assam has recently faced regulatory headwinds, particularly in the microfinance sector. The <strong>Assam Micro Finance Institutions (Regulation of Money Lending) Act, 2020</strong> was a watershed moment, introduced to curb predatory lending practices. For NBFCs and MFIs, compliance is no longer just a checklist; it is a survival imperative.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, headquartered in New Delhi but with deep networks in Guwahati, we guide financial entities through this evolving regulatory terrain. Whether you are setting up a new NBFC, seeking NEDFi funding, or fighting a recovery suit in the Guwahati DRT, our legal expertise ensures your interests are protected.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Assam
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Assam's financial sector is a mix of specialized regional institutions and national players.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Guwahati: The Regional HQ</h3>
                    <p className="text-gray-700">
                      Guwahati hosts the Regional Office of the RBI, the North Eastern Development Finance Corporation (NEDFi), and the Assam Financial Corporation (AFC). It is the mandatory base for any financial entity looking to cover the "Seven Sisters".
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Rural Banking</h3>
                    <p className="text-gray-700">
                      The Assam Gramin Vikash Bank (AGVB) and the Apex Bank play a vital role in rural credit. However, the penetration of private credit remains low, creating an opportunity for Fintechs and ethical MFIs to step in.
                    </p>
                  </div>
                </div>
              </section>

              {/* Microfinance Regulation */}
              <section id="microfinance-regulation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Microfinance Act, 2020: A Game Changer
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Following a crisis of over-indebtedness in rural Assam, the state government enacted stringent laws.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Key Compliance Mandates</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Registration:</strong> Every MFI operating in Assam must register with the designated state authority, in addition to RBI registration.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Lending Caps:</strong> A borrower cannot have loans from more than 3 lenders. Total indebtedness is capped relative to income.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Coercive Recovery:</strong> Strict ban on coercive recovery practices. Agents must be trained and certified. Violation can lead to arrest.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    We assist MFIs in auditing their loan portfolios to ensure they meet these statutory limits and represent them in case of disputes with the district administration.
                  </p>
                </div>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance (RBI/RoC)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Operating in Assam requires a dual focus: Central RBI norms and State-specific rules.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>RBI Guwahati:</strong> This regional office has jurisdiction over all NE states. All NBFC applications, NBS returns, and diverse reporting must be submitted here.</li>
                  <li><strong>RoC Guwahati:</strong> Handles corporate filings for companies registered in Assam, Meghalaya, Manipur, Tripura, Mizoram, Nagaland, and Arunachal Pradesh.</li>
                  <li><strong>Assam Financial Corporation (AFC):</strong> For state-level term loans and subsidies.</li>
                </ul>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process in Guwahati
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Registering an NBFC in the North East has certain strategic advantages, as the RBI is keen to promote financial inclusion in the region.
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
                          Register a Company with <strong>RoC Guwahati</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital</td>
                        <td className="p-4 border-b text-gray-700">
                          Minimum NOF of ₹2 Crores. (Note: Check for any NE-specific relaxations in the latest master directions).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Application</td>
                        <td className="p-4 border-b text-gray-700">
                          File on RBI COSMOS. Physical submission to <strong>DNBS, RBI Guwahati</strong> (Station Road, Pan Bazar).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Due Diligence</td>
                        <td className="p-4 border-b text-gray-700">
                          Expect scrutiny regarding the business plan's focus on the NE region.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Tea Finance */}
              <section id="tea-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Financing the Tea Industry
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Tea is the backbone of Assam's economy. Financing tea gardens involves complex legalities due to the unique land tenure system (Grant Lands/Periodic Patta).
                </p>
                <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Legal Challenges in Tea Finance</h3>
                  <ul className="list-disc pl-6 space-y-3 text-green-800">
                    <li><strong>Hypothecation of Crops:</strong> Annual working capital is secured against the tea crop. Proper registration of charge with the RoC is critical.</li>
                    <li><strong>Land Ceiling Issues:</strong> Tea gardens are exempted from land ceiling acts, but using this land for non-tea purposes (like tourism resorts) requires specific government permissions.</li>
                    <li><strong>Labour Laws:</strong> Compliance with the Plantation Labour Act is often linked to loan covenants.</li>
                  </ul>
                </div>
              </section>

              {/* NEDFi Role */}
              <section id="nedfi-role" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NEDFi & Industrial Loans
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>North Eastern Development Finance Corporation Ltd. (NEDFi)</strong> is a Public Financial Institution under Section 4A of the Companies Act. It provides term loans, equity support, and advisory services.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist entrepreneurs in preparing "Bankable Projects" for NEDFi schemes, ensuring that land titles and collateral documents meet their strict due diligence standards.
                </p>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Assam Money Lenders Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending is regulated to protect the vulnerable. Operating without a license is illegal.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Legal Warning</h3>
                  <p className="text-yellow-800">
                    Under the Act, courts are barred from passing decrees in favor of unregistered money lenders. If you lend money without a license, you cannot legally recover it.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Service:</strong> We facilitate the licensing process with the local District Magistrate/Registrar, ensuring your lending business is legitimate.
                </p>
              </section>

              {/* DRT Guwahati */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Guwahati: Serving the Seven Sisters
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong> has a massive jurisdiction covering all 7 North Eastern states.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">For Banks (SARFAESI)</h3>
                    <p className="text-gray-700">
                      We handle Section 13(2) and 13(4) notices. Since the jurisdiction is vast, coordinating with District Magistrates in remote areas of Assam or neighboring states for possession is our specialty.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">For Borrowers</h3>
                    <p className="text-gray-700">
                      If a bank violates RBI guidelines during recovery, we file Securitization Applications (SA) to stay the auction of assets, giving borrowers time to restructure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Industrial Policy */}
              <section id="industrial-policy" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Assam Industrial Policy Benefits
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Assam Industrial and Investment Policy, 2019</strong> is highly attractive.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>GST Reimbursement:</strong> Up to 200% of Fixed Capital Investment.</li>
                  <li><strong>Power Subsidy:</strong> ₹2 per unit for 5 years.</li>
                  <li><strong>Interest Subsidy:</strong> 2% on working capital.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We help industries structure their finances to maximize eligibility for these claims.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/MFI Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Directors' KYC (PAN, Aadhar, DIN)</li>
                      <li>• Clean Police Record (Non-Encumbrance)</li>
                      <li>• Net Worth Certificates (CA Certified)</li>
                      <li>• Office Proof in Assam</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Bank FD Receipt (NOF)</li>
                      <li>• Detailed Business Plan (Focus on NE)</li>
                      <li>• Experience Certificates</li>
                      <li>• Board Resolutions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Assam
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to start a microfinance operation in Barpeta. The new Act was confusing. AMA Legal Solutions helped us register and set up our loan documentation to be fully compliant."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rafiqul Islam</p>
                        <p className="text-sm text-gray-500">Director, Rural FinCorp</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our tea garden needed working capital restructuring. They handled the legal liaison with the bank consortium and the Tea Board subsidy process efficiently."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">B</div>
                      <div>
                        <p className="font-bold text-gray-900">Bipul Baruah</p>
                        <p className="text-sm text-gray-500">Manager, Brahmaputra Estates</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Setting up an NBFC in Guwahati required a lot of RBI coordination. Their team in Delhi and Guwahati managed it seamlessly. Highly recommended."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Sanjay Agarwal</p>
                        <p className="text-sm text-gray-500">MD, East India Finance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced a tough recovery case in DRT Guwahati. Their lawyers are aggressive and knowledgeable. We got our property possession order in record time."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                      <div>
                        <p className="font-bold text-gray-900">Pranab Das</p>
                        <p className="text-sm text-gray-500">Authorized Officer, PSU Bank</p>
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
                    Secure Your Financial Future in Assam
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the tea gardens of Jorhat to the boardrooms of Guwahati, we provide the legal expertise you need to grow with confidence.
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
                    100% Confidential • Expert Legal Advice • Pan-North East Reach
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
                  Get professional legal advice for your financial business in Assam.
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

export default AssamBankingClient;

