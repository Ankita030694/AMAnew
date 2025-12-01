"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const GoaBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Tourism & Mining" },
    { id: "regulatory-challenges", title: "Portuguese Civil Code & Regulations" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "tourism-finance", title: "Tourism & Casino Finance" },
    { id: "nidhi-company", title: "Nidhi Company: Community Banking" },
    { id: "money-lending", title: "Money Lenders License & Compliance" },
    { id: "drt-litigation", title: "DRT & Debt Recovery Strategies" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Goa", href: "/services/banking-and-finance/goa" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Goa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the financial sector in Panaji, Margao, and Vasco. From NBFC Registration and Tourism Project Finance to navigating the Portuguese Civil Code in banking transactions.
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
                  Financial Growth in the Pearl of the Orient
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Goa is India's smallest state by area but packs a massive economic punch. Known globally for its tourism, it also has a robust pharmaceutical and mining sector. The financial ecosystem here is vibrant, catering to luxury resorts, casinos, MSMEs, and startups.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, banking in Goa is unique due to the legacy of the <strong>Portuguese Civil Code</strong>, which still governs property ownership and succession. This creates complex scenarios for mortgage creation, loan documentation, and recovery that don't exist elsewhere in India. A standard loan agreement used in Mumbai might be legally flawed in Margao.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we understand these nuances perfectly. We provide specialized banking law services that bridge the gap between central RBI regulations and Goa's specific civil laws, ensuring your financial interests are protected.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: Tourism, Mining & Startups
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The credit demand in Goa is driven by three distinct engines, each requiring a tailored legal approach.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Tourism & Hospitality</h3>
                    <p className="text-gray-700">
                      Hotels, shacks, and casinos require significant capital. The seasonality of cash flows often necessitates flexible loan structuring (e.g., lower EMIs during monsoon). Lenders must also be wary of CRZ (Coastal Regulation Zone) norms when accepting coastal property as collateral.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Mining & Industry</h3>
                    <p className="text-gray-700">
                      With the resumption of sustainable mining, there is a renewed demand for heavy equipment financing. We assist NBFCs in drafting Equipment Lease and Hypothecation agreements that are enforceable under local laws.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>The Startup Wave:</strong> Goa is emerging as a startup hub for digital nomads. We assist Fintech companies and Angel Networks in structuring Convertible Notes and SAFE agreements compliant with Indian laws.
                </p>
              </section>

              {/* Regulatory Challenges */}
              <section id="regulatory-challenges" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Challenges: The Portuguese Civil Code Factor
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The most critical differentiator in Goa's legal system is the Portuguese Civil Code, 1867.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Communion of Assets</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Under this code, both spouses automatically own equal shares in all assets acquired during the marriage, regardless of whose name is on the title deed. A mortgage signed by only the husband is legally voidable by the wife.<br/>
                        <strong>Our Solution:</strong> We ensure "Spousal Consent" and joint execution of all loan and security documents to create a valid and enforceable mortgage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Inventory Proceedings</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Succession in Goa involves "Inventory Proceedings" in court, which can be lengthy. Establishing clear title for inherited property is complex.<br/>
                        <strong>Our Solution:</strong> Our due diligence team conducts deep title searches to verify the "Title Flow" through the inventory proceedings before you accept a property as collateral.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">CRZ Violations</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Properties in CRZ areas may face demolition orders, rendering the security worthless.<br/>
                        <strong>Our Solution:</strong> We verify the CRZ status and approvals from the Goa Coastal Zone Management Authority (GCZMA) as part of our pre-disbursement due diligence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Goa
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A Non-Banking Financial Company (NBFC) allows for scalable lending operations. The registration is centralized with the RBI Mumbai Office for the western region.
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
                          - <strong>Name Availability:</strong> Ensure name reflects financial activity.<br/>
                          - <strong>Director Vetting:</strong> Clean CIBIL and financial background.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Register as Pvt Ltd or Public Ltd Company.<br/>
                          - <strong>MoA Drafting:</strong> Specific financial objects clause as per RBI Act.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Capitalization</td>
                        <td className="p-4 border-b text-gray-700">
                          - <strong>NOF Requirement:</strong> Minimum ₹2 Crores Net Owned Fund.<br/>
                          - Fixed Deposit in company name.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Documentation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Business Plan (3-5 years).<br/>
                          - Auditor's Certificate, Board Resolutions, Banker's Report.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">5. RBI Application</td>
                        <td className="p-4 text-gray-700">
                          - File online on <strong>COSMOS</strong> portal.<br/>
                          - Submit physical dossier to <strong>RBI Mumbai Office</strong>.<br/>
                          - Handle RBI queries.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We handle the entire liaison with the RBI to ensure your application moves smoothly through the scrutiny process.
                </p>
              </section>

              {/* Tourism & Casino Finance */}
              <section id="tourism-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tourism & Casino Finance: High Risk, High Reward
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Goa is the only state with legal land-based and offshore casinos. Financing this sector is lucrative but complex due to "Sin Industry" regulations.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Casino License as Collateral?</strong> No, licenses are generally not assignable. Lenders must rely on cash flow escrow mechanisms and personal guarantees.
                  </li>
                  <li>
                    <strong>Escrow Accounts:</strong> We structure "Waterfall Mechanisms" in escrow agreements to ensure that casino revenues are first used to service debt before any other expense.
                  </li>
                  <li>
                    <strong>AML/KYC:</strong> Financial institutions lending to casinos must ensure the borrower has robust Anti-Money Laundering controls to prevent the flow of illicit funds.
                  </li>
                </ul>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company: Community Banking
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For local communities in places like Ponda, Mapusa, or Bicholim, a Nidhi Company promotes savings.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                  <li><strong>Lower Capital:</strong> Start with ₹10 Lakhs equity.</li>
                  <li><strong>No RBI License:</strong> Regulated by MCA under Nidhi Rules, 2014.</li>
                  <li><strong>Secured Loans:</strong> Gold loans are very popular.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">⚠️ Compliance Alert</h4>
                  <p className="text-yellow-800 text-sm">
                    Strict compliance with Nidhi Rules is mandatory. You must file <strong>NDH-4</strong> to get status confirmation. Failure to do so can lead to company strike-off. We ensure your Nidhi company stays compliant with all filings (NDH-1, NDH-3, etc.).
                  </p>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Goa Money Lenders Act Compliance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending without a license is illegal under the <strong>Goa Money Lenders Act</strong>.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Why Get Licensed?</h3>
                  <p className="text-gray-700 mb-4">
                    Unlicensed lenders cannot sue borrowers for recovery. Courts will dismiss the suit at the admission stage itself.
                  </p>
                  <h3 className="font-bold text-lg mb-4">Our Services:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div>• Application to the Mamlatdar/Dy. Collector.</div>
                    <div>• Maintenance of statutory registers (Register of Accounts).</div>
                    <div>• Drafting compliant loan agreements.</div>
                    <div>• Annual license renewal.</div>
                  </div>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Recovery of dues in Goa typically falls under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) Mumbai</strong> (often Pune Bench). We provide aggressive representation.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">SARFAESI Action</h3>
                    <p className="text-gray-700">
                      We handle the entire SARFAESI lifecycle: Issuing 13(2) notices, handling borrower objections, issuing 13(4) possession notices, and obtaining District Magistrate (North/South Goa) orders for physical possession.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Section 138 NI Act</h3>
                    <p className="text-gray-700">
                      For bounced cheques, we file criminal complaints in the local JMFC courts in Panaji, Mapusa, Margao, etc.
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
                  Proper documentation is the backbone of legal safety.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For NBFC Registration</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Certificate of Incorporation</li>
                      <li>• MoA & AoA (Financial Objects)</li>
                      <li>• Fixed Deposit Receipt (NOF)</li>
                      <li>• CIBIL Reports of Directors</li>
                      <li>• Net Worth Certificates</li>
                      <li>• Educational Qualifications</li>
                      <li>• Police Clearance Certificates</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For Loan Recovery</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Loan Agreement (with Spousal Consent)</li>
                      <li>• Sanction Letter</li>
                      <li>• Demand Promissory Note</li>
                      <li>• Guarantee Deed</li>
                      <li>• Statement of Account (Bankers Books Evidence Act)</li>
                      <li>• Cheque Return Memos</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What Our Clients in Goa Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed legal structuring for a boutique hotel project finance. AMA Legal Solutions handled the loan syndication and due diligence flawlessly. Their knowledge of Portuguese Civil Code implications was crucial."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Anthony D'Souza</p>
                        <p className="text-sm text-gray-500">MD, Goan Heritage Resorts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As a Nidhi Company in Margao, we were facing compliance issues. The team guided us through the NDH-4 filing process and helped us restructure our loan portfolio."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rajesh Naik</p>
                        <p className="text-sm text-gray-500">Director, Konkan Nidhi Ltd.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Excellent support for our NBFC registration. They managed the RBI liaison in Mumbai effectively and got us our CoR without any major hassles."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Sima Fernandes</p>
                        <p className="text-sm text-gray-500">Director, Coastal Finvest Pvt Ltd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We engaged them for a DRT matter regarding a resort property auction. Their aggressive representation helped us secure a stay and negotiate a settlement."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vijay Kamat</p>
                        <p className="text-sm text-gray-500">Proprietor, Kamat Finance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Goa's Trusted Banking Lawyers
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  In a state with unique civil laws, you need specialized legal counsel.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏛️</div>
                    <h3 className="font-bold text-xl mb-2">Portuguese Civil Code</h3>
                    <p className="text-gray-600">Experts in aligning banking documents with Goa's unique family and property laws.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Experts</h3>
                    <p className="text-gray-600">Dedicated team for DRT Mumbai/Pune and local courts in Goa.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">📜</div>
                    <h3 className="font-bold text-xl mb-2">RBI Liaison</h3>
                    <p className="text-gray-600">Direct experience dealing with RBI Mumbai for licensing.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Goa
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
                  Speak to our senior banking lawyers in Panaji today.
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

export default GoaBankingClient;

