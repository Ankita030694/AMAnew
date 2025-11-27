"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const ChhattisgarhBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Industry & Tribal Areas" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "industrial-finance", title: "Industrial & Mining Project Finance" },
    { id: "microfinance-model", title: "Microfinance in Tribal Belts" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "money-lending", title: "Money Lenders License" },
    { id: "drt-litigation", title: "DRT Jabalpur & Debt Recovery" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Chhattisgarh", href: "/services/banking-and-finance/chhattisgarh" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Chhattisgarh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the industrial heartland of Raipur and Bhilai. From heavy industry Project Finance to Microfinance in tribal belts and NBFC Registration.
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
                  Powering Growth in the Rice Bowl of India
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Chhattisgarh is a land of contrasts—housing massive steel plants and power hubs in Raipur-Bhilai-Korba, while also sustaining a vast agrarian and tribal population in Bastar and Sarguja. The financial needs here are equally diverse: multi-crore syndicated loans for heavy industries versus micro-credit for forest produce collectors.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Navigating the legal landscape involves understanding the <strong>Chhattisgarh Land Revenue Code</strong> (especially restrictions on tribal land transfer), compliance with <strong>PESA Act</strong> in scheduled areas, and the nuances of industrial financing.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we provide specialized counsel that bridges the gap between modern banking requirements and local statutory protections. Whether you are a Bank, NBFC, or a Fintech startup, we ensure your operations in Chhattisgarh are legally sound and commercially viable.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: Steel, Coal & Agriculture
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To succeed in Chhattisgarh, one must align with its economic engines.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Industrial Finance</h3>
                    <p className="text-gray-700">
                      Raipur and Bhilai are industrial hubs. The demand is for Working Capital limits, Letter of Credit (LC) facilities, and Term Loans for capacity expansion. Lenders need robust due diligence on industrial land titles and environmental clearances.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Rural & Tribal Banking</h3>
                    <p className="text-gray-700">
                      In tribal districts, traditional banking penetration is low. This creates a massive opportunity for Microfinance Institutions (MFIs) and Banking Correspondents (BCs) to provide last-mile credit, provided they navigate the tribal protection laws carefully.
                    </p>
                  </div>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Chhattisgarh
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  An NBFC allows you to lend legally and scale up. The registration is centralized with the <strong>RBI Regional Office in Bhopal</strong> (which has jurisdiction over Chhattisgarh).
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
                          - <strong>Director Vetting:</strong> RBI "Fit and Proper" norms check.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Register with ROC Chhattisgarh (Bilaspur).<br/>
                          - <strong>MoA Drafting:</strong> Specific financial objects clause.
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
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          - File online on <strong>COSMOS</strong> portal.<br/>
                          - Submit physical dossier to <strong>RBI Bhopal</strong>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We handle the complete liaison with RBI Bhopal to ensure your application is processed smoothly.
                </p>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial & Mining Project Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Financing a steel plant or a mining operation carries unique risks. We provide legal structuring to mitigate them.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Due Diligence</h3>
                      <p className="text-gray-700 mt-2">
                        Verifying the validity of Mining Leases, Environmental Clearances (EC), and Forest Rights Act (FRA) compliances before disbursement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Consortium Lending</h3>
                      <p className="text-gray-700 mt-2">
                        Drafting "Inter-Creditor Agreements" and "Common Loan Agreements" for multi-bank financing arrangements to ensure clarity on security sharing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Security Creation</h3>
                      <p className="text-gray-700 mt-2">
                        Registering charges with ROC and CERSAI on heavy machinery, plant land, and book debts to secure the lender's position.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Microfinance */}
              <section id="microfinance-model" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance in Tribal Belts
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Lending in Schedule V areas (tribal districts like Bastar, Dantewada) requires sensitivity to local laws.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Legal Strategy for MFIs</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>
                      <strong>Section 8 vs NBFC-MFI:</strong> We advise on the best entity structure based on your funding scale and social goals.
                    </li>
                    <li>
                      <strong>Land Restrictions:</strong> Tribal land cannot be taken as collateral by non-tribals. We structure loans based on "Social Collateral" (JLG model) rather than physical mortgage.
                    </li>
                    <li>
                      <strong>Fair Practices:</strong> Ensuring collection practices comply with RBI norms to avoid conflict with local administration in sensitive zones.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Chhattisgarh Money Lenders Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To curb illegal lending, the state enforces the Money Lenders Act strictly.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Licensing Services</h3>
                  <p className="text-gray-700 mb-4">
                    1. <strong>Application:</strong> Filing with the Tahsildar/Sub-Divisional Officer.<br/>
                    2. <strong>Registers:</strong> Mandatory maintenance of loan registers.<br/>
                    3. <strong>Interest Caps:</strong> Adherence to state-notified interest rate limits.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    *Lending without a license renders the debt recoverable only to the extent of the principal, and often not even that in courts.
                  </p>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Jabalpur & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Banking recovery cases for Chhattisgarh are heard at the <strong>Debt Recovery Tribunal (DRT) in Jabalpur</strong> (Madhya Pradesh).
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Our Representation</h3>
                    <p className="text-gray-700">
                      We have a dedicated legal team that travels to DRT Jabalpur for regular hearings, ensuring your Original Applications (OAs) and SARFAESI matters are pursued aggressively.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">NCLT Cuttack</h3>
                    <p className="text-gray-700">
                      For corporate insolvency (IBC cases), the jurisdiction lies with the <strong>NCLT Cuttack Bench</strong>. We handle Section 7 and Section 9 petitions for creditors there.
                    </p>
                  </div>
                </div>
              </section>

               {/* Documentation */}
               <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Essential Documentation Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For NBFC/MFI</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Certificate of Incorporation</li>
                      <li>• MoA & AoA (Financial Objects)</li>
                      <li>• Fixed Deposit Receipt (NOF)</li>
                      <li>• CIBIL Reports of Directors</li>
                      <li>• Police Clearance Certificates</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For Recovery</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Loan Agreement</li>
                      <li>• Sanction Letter</li>
                      <li>• Demand Promissory Note</li>
                      <li>• Mortgage Deed (Registered)</li>
                      <li>• Statement of Account</li>
                      <li>• Cheque Return Memos</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What Our Clients in Chhattisgarh Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed legal assistance for syndicating a large loan for our steel plant in Bhilai. AMA Legal Solutions handled the documentation and bank consortium meetings professionally."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rakesh Agrawal</p>
                        <p className="text-sm text-gray-500">Director, Chhattisgarh Steel & Power</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They helped us register our Nidhi Company in Bilaspur. The team is very knowledgeable about the NDH-4 filing requirements and guided us through the entire process."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Sunita Sahu</p>
                        <p className="text-sm text-gray-500">Promoter, Bilaspur Nidhi Ltd.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Excellent support for our NBFC registration. They managed the liaison with RBI Bhopal effectively and resolved all queries promptly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Manish Verma</p>
                        <p className="text-sm text-gray-500">Director, Raipur Finvest</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We engaged them for a DRT Jabalpur matter regarding a defaulted commercial loan. Their legal strategy was sound and helped us recover a significant portion of the dues."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                      <div>
                        <p className="font-bold text-gray-900">Prakash Chand</p>
                        <p className="text-sm text-gray-500">Authorized Officer, Nationalized Bank</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Chhattisgarh's Trusted Banking Lawyers
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏭</div>
                    <h3 className="font-bold text-xl mb-2">Industrial Finance</h3>
                    <p className="text-gray-600">Expertise in project finance for Steel, Coal, and Power sectors.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Network</h3>
                    <p className="text-gray-600">Strong presence in DRT Jabalpur, NCLT Cuttack, and Chhattisgarh High Court (Bilaspur).</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏦</div>
                    <h3 className="font-bold text-xl mb-2">RBI Liaison</h3>
                    <p className="text-gray-600">Smooth handling of licensing with RBI Regional Office, Bhopal.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Chhattisgarh
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
                  Speak to our senior banking lawyers in Raipur today.
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

export default ChhattisgarhBankingClient;

