"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const ArunachalPradeshBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Financial Landscape: The Last Frontier" },
    { id: "land-tenure", title: "Land Laws & Banking (LPC vs Patta)" },
    { id: "regulatory-compliance", title: "Regulatory Compliance & ILP" },
    { id: "nbfc-registration", title: "NBFC Registration in Itanagar" },
    { id: "govt-schemes", title: "DDUSY & Govt Schemes" },
    { id: "microfinance-sector", title: "Microfinance & SHGs" },
    { id: "nedfi-role", title: "Role of NEDFi" },
    { id: "drt-guwahati", title: "DRT Guwahati Jurisdiction" },
    { id: "money-lending", title: "Money Lending Regulations" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Arunachal Pradesh", href: "/services/banking-and-finance/arunachal-pradesh" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Arunachal Pradesh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Specialized legal consultancy for the Dawn-Lit Mountains. We navigate the complexities of Land Possession Certificates (LPC), NBFC Registration, and Industrial Finance in Itanagar and beyond.
          </p>
          <Link href="/contact">
            <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
              Consult a Finance Expert
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
                  Banking on the "Land of the Rising Sun"
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Arunachal Pradesh is geographically the largest state in the North East, yet it remains one of the most underbanked regions in India. The rugged terrain, sparse population density, and unique land tenure systems create a challenging environment for traditional banking. However, with the advent of digital connectivity and the central government's Act East Policy, the financial sector is witnessing a dawn of new opportunities.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Entrepreneurs in sectors like tourism (homestays), horticulture (kiwi/orange), and hydropower need capital. While state-run banks like SBI and the Arunachal Pradesh Rural Bank (APRB) have a presence, there is a massive vacuum for private NBFCs and Microfinance Institutions to fill the "last-mile credit" gap.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we understand that banking in Arunachal is not just about RBI rules; it's about respecting local customary laws. Whether it's dealing with the Inner Line Permit (ILP) regime for non-local directors or structuring loans against Land Possession Certificates (LPC) instead of Pattas, our legal expertise is tailored for this unique frontier.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Financial Landscape: The Last Frontier
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The banking ecosystem here is evolving from a subsidy-driven model to a credit-driven one.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Public Sector Dominance</h3>
                    <p className="text-gray-700">
                      SBI is the Lead Bank in almost all districts. The Arunachal Pradesh State Co-operative Apex Bank is crucial for rural credit. However, their stringent collateral norms often exclude first-generation entrepreneurs.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">The Private Sector Void</h3>
                    <p className="text-gray-700">
                      Private banks and NBFCs are hesitant due to "enforceability risk" of collateral. This creates a high-yield market for those who can legally mitigate this risk through innovative loan structuring and community guarantees.
                    </p>
                  </div>
                </div>
              </section>

              {/* Land Tenure (LPC vs Patta) */}
              <section id="land-tenure" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The LPC Conundrum: Land Laws & Banking
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  In most of India, banks lend against a Land Patta (Title Deed). In Arunachal Pradesh, the formal Patta system is limited mostly to urban pockets like Itanagar and Naharlagun. In the rest of the state, people hold a <strong>Land Possession Certificate (LPC)</strong> issued by the District Administration based on customary rights.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Why Banks Reject LPCs</h3>
                  <p className="text-yellow-800">
                    An LPC is often seen as a "right to use" rather than "right to alienate". Courts have given varying judgments on whether LPC-held land can be auctioned to recover dues, especially given the restrictions on land transfer to non-indigenous people.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Legal Workarounds</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Third-Party Guarantees:</strong> Using salaried govt employees (who are abundant in the state) as guarantors.</li>
                  <li><strong>CGTMSE Coverage:</strong> We help borrowers and lenders file for Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) cover, which eliminates the need for collateral up to ₹2 Crores (ideal for tourism/MSME projects).</li>
                  <li><strong>Tripartite Agreements:</strong> Drafting agreements involving the borrower, the bank, and the local village council (Gaon Burah) to ensure social pressure for repayment.</li>
                </ul>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance: ILP & Trade Licenses
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Starting a financial office in Arunachal isn't just about the RBI. You face the <strong>Bengal Eastern Frontier Regulation, 1873</strong>.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Inner Line Permit (ILP):</strong> Any non-indigenous staff or director you send to the state needs a valid ILP. Operating without it can lead to immediate deportation and business closure.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Trading License:</strong> To open a branch, you need a Trading License from the local municipality or district authority. This is reserved mostly for locals. We help structure Joint Ventures (JVs) where a local partner holds the license while the NBFC operates the business.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>RBI Guwahati:</strong> The controlling office for NBFCs in Arunachal is RBI Guwahati. All regulatory reporting goes there.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process in Itanagar
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Registering an NBFC in Arunachal Pradesh follows the standard RBI process but requires careful handling of the "registered office" proof due to land laws.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Action Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Company Formation</td>
                        <td className="p-4 border-b text-gray-700">
                          Incorporate a Pvt Ltd/Public Ltd company. <strong>RoC Guwahati</strong> has jurisdiction. Ensure the registered office address is backed by a valid Rent Agreement with an indigenous landlord.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital</td>
                        <td className="p-4 border-b text-gray-700">
                          Raise <strong>₹2 Crores</strong> NOF. (Check for any NE-specific relaxation from RBI). Deposit in a fixed deposit.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. COSMOS Application</td>
                        <td className="p-4 border-b text-gray-700">
                          Apply online on RBI's COSMOS portal. Upload Board Resolutions, Director Profiles, and Business Plan focusing on financial inclusion in NE.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Regional Office</td>
                        <td className="p-4 border-b text-gray-700">
                          Submit hard copy to <strong>RBI Guwahati</strong>. We handle the liaison to answer queries regarding the source of funds and business model in tribal areas.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Govt Schemes (DDUSY) */}
              <section id="govt-schemes" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DDUSY & Government Schemes
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Deen Dayal Upadhyaya Swavalamban Yojana (DDUSY)</strong> is the biggest driver of credit in the state. It offers a 30% subsidy on project cost.
                </p>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">How We Help</h3>
                  <p className="text-gray-700">
                    Many applications get rejected due to poor Detailed Project Reports (DPR) or lack of proper land documents. We assist entrepreneurs in:
                  </p>
                  <ul className="list-disc pl-6 mt-3 text-gray-700">
                    <li>Drafting bankable DPRs for Tourism (Homestays), Agriculture, and Textile units.</li>
                    <li>Legal vetting of land documents (LPC/Non-Encumbrance Certificate) to satisfy bank managers.</li>
                    <li>Liaison with the District Level Screening Committee (DLSC).</li>
                  </ul>
                </div>
              </section>

              {/* Microfinance Sector */}
              <section id="microfinance-sector" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance: The SHG Movement
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Given the collateral issues, <strong>Microfinance (MFI)</strong> is the most viable lending model. The <strong>Arunachal State Rural Livelihoods Mission (ArSRLM)</strong> promotes SHGs aggressively.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Legal Structure:</strong> We recommend the <strong>Section 8 Company</strong> model for NGOs entering this space. It allows for "micro-credit" activities without full RBI registration (subject to caps) and is tax-efficient. We also draft the "Inter-se Agreements" for Joint Liability Groups (JLGs) to ensure group guarantee is legally binding.
                </p>
              </section>

              {/* NEDFi Role */}
              <section id="nedfi-role" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Leveraging NEDFi for Big Ticket Loans
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For projects above ₹50 Lakhs, the <strong>North Eastern Development Finance Corporation Ltd. (NEDFi)</strong> is a key lender. They have specialized schemes like the North East Entrepreneurs Development Scheme (NEEDS).
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We act as legal counsels for borrowers, helping them navigate NEDFi's strict due diligence process, which includes title search of land and valuation of assets in remote locations.
                </p>
              </section>

              {/* DRT Guwahati */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Guwahati & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  There is no DRT in Arunachal Pradesh. All recovery cases for debts > ₹20 Lakhs fall under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Challenges</h3>
                    <p className="text-gray-700">
                      The distance to Guwahati makes litigation expensive and slow. Enforcement of DRT orders (like attaching property) in Arunachal requires cooperation from the local DC, which can be politically sensitive.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Our Strategy</h3>
                    <p className="text-gray-700">
                      We focus on <strong>Pre-Litigation Mediation</strong>. We also use the SARFAESI Act's provisions to appoint "Receivers" to take possession of movable assets (vehicles/machinery) which are easier to liquidate than tribal land.
                    </p>
                  </div>
                </div>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist for Arunachal
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Finance Business Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• ILP for non-local Directors</li>
                      <li>• Trading License (Municipal/District)</li>
                      <li>• Rent Agreement (Attested by Magistrate)</li>
                      <li>• Police Verification (from home state)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Bank FD for NOF (₹2 Cr)</li>
                      <li>• Educational & Net Worth Certificates</li>
                      <li>• Digital Signature Certificates (DSC)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Voices from the Mountains
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Starting a finance company in Itanagar was tough because of the Trading License issue. AMA Legal Solutions helped us structure a Joint Venture with a local partner that satisfied all legal norms."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">T</div>
                      <div>
                        <p className="font-bold text-gray-900">Tashi Dorjee</p>
                        <p className="text-sm text-gray-500">Director, Himalaya Finvest</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed a loan under DDUSY for our Kiwi wine plant in Ziro. The bank rejected our LPC initially. The legal team helped us get a Non-Encumbrance Certificate and CGTMSE cover, and the loan was sanctioned."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Kago Yubbey</p>
                        <p className="text-sm text-gray-500">Entrepreneur, Ziro</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Recovering dues in Pasighat was impossible until we engaged them. They guided us on how to file a case in DRT Guwahati and use the local administration for pressure. Highly effective."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Subhash Agarwal</p>
                        <p className="text-sm text-gray-500">Regional Head, Private Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They handled our Section 8 Microfinance registration smoothly. Their knowledge of NEDFi schemes and local tribal laws is exceptional."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">L</div>
                      <div>
                        <p className="font-bold text-gray-900">Lobsang Wangchu</p>
                        <p className="text-sm text-gray-500">Social Entrepreneur, Tawang</p>
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
                    Unlock Financial Opportunities in Arunachal
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Navigate the complex terrain of laws, land rights, and licenses with the state's premier banking legal experts.
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
                    Trusted by Locals & Investors • Confidential • Expert Legal Advice
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
                  Get professional legal advice for your financial business in Itanagar & beyond.
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

export default ArunachalPradeshBankingClient;

