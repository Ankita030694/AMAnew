"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const HimachalPradeshBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Tourism & Horticulture" },
    { id: "regulatory-challenges", title: "Regulatory Challenges & Solutions" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "microfinance-model", title: "Microfinance & Self-Help Groups" },
    { id: "nidhi-company", title: "Nidhi Company: Local Banking" },
    { id: "money-lending", title: "Money Lenders License & Compliance" },
    { id: "project-finance", title: "Project Finance: Hydro & Tourism" },
    { id: "drt-litigation", title: "DRT & Debt Recovery Strategies" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Himachal Pradesh", href: "/services/banking-and-finance/himachal-pradesh" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Himachal Pradesh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the financial sector in Shimla and beyond. From NBFC & Nidhi registration to complex Debt Recovery Tribunal (DRT) litigation and Hydro Project Finance.
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
                  Financial Growth in the Land of Gods
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Himachal Pradesh is a state of unique economic character, driven by tourism, horticulture, and hydroelectric power. The financial needs of a hotelier in Manali differ vastly from an apple grower in Kinnaur or a hydro-project developer in Mandi. While the state boasts a high literacy rate and banking penetration, the specific legal nuances of operating a financial institution here require deep local knowledge.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The state's strict land laws, particularly Section 118 of the Tenancy and Land Reforms Act, create a distinct environment for secured lending. Financial institutions must navigate these restrictions carefully to ensure their collateral is enforceable. Whether you are looking to register an NBFC, start a Microfinance operation, or recover dues through the DRT, understanding the local legal terrain is crucial.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we combine our national banking law expertise with a strong grip on Himachal's local regulations. We assist banks, NBFCs, and private lenders in establishing compliant operations and ensuring robust recovery mechanisms across the state.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: Tourism, Apples & Power
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To succeed in Himachal's financial market, one must align with its economic pillars. The lending landscape is diverse, ranging from small agricultural loans to massive infrastructure financing.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Horticulture & Agriculture</h3>
                    <p className="text-gray-700">
                      The apple economy alone is worth thousands of crores. Farmers need seasonal credit for inputs, packaging, and storage. KCC (Kisan Credit Card) saturation is high, but there is a significant gap for private financing in post-harvest infrastructure and cold chains.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Tourism & Hospitality</h3>
                    <p className="text-gray-700">
                      From homestays in remote valleys to 5-star resorts in Shimla, the hospitality sector is capital intensive. Lenders often face challenges with property valuation and title verification due to old land records and Section 118 restrictions.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>The Digital Shift:</strong> With improving connectivity even in remote areas like Spiti and Lahaul, digital lending apps are gaining traction. We help Fintech companies comply with RBI guidelines while tailoring their products for the Himachali market.
                </p>
              </section>

              {/* Regulatory Challenges */}
              <section id="regulatory-challenges" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Challenges & Strategic Legal Solutions
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Operating a financial entity in Himachal Pradesh involves navigating specific state laws alongside central regulations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Section 118 Land Restrictions</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Non-agriculturists (including most financial institutions) cannot buy land without government permission. This complicates mortgage creation and enforcement.<br/>
                        <strong>Our Solution:</strong> We assist in obtaining necessary permissions under Section 118 for setting up offices and ensure loan documents are drafted to create valid security interests that can be enforced despite these restrictions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Recovery from Agriculturists</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Agricultural land is often protected from attachment in certain civil recovery proceedings.<br/>
                        <strong>Our Solution:</strong> We focus on SARFAESI compliant mortgages for eligible properties and utilize Negotiable Instruments Act (Section 138) for effective recovery where land attachment is difficult.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Remote Geography</h3>
                      <p className="text-gray-700 mt-2">
                        <strong>Challenge:</strong> Physical verification and collection in remote areas can be costly and difficult.<br/>
                        <strong>Our Solution:</strong> We advise on digital-first lending models and legally binding e-agreements to minimize physical overheads while maintaining legal enforceability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Himachal Pradesh
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A Non-Banking Financial Company (NBFC) allows for scalable lending operations. The registration is centralized with the RBI, but local presence requirements must be met.
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
                          - <strong>Director Vetting:</strong> Clean CIBIL and financial background required.
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
                          - Submit physical dossier to <strong>RBI Regional Office (Chandigarh)</strong>.<br/>
                          - Handle RBI queries.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We handle the entire liaison with the RBI Chandigarh Regional Office to ensure your application moves smoothly through the scrutiny process.
                </p>
              </section>

              {/* Microfinance & SHG */}
              <section id="microfinance-model" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Microfinance & Self-Help Groups (SHGs)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Himachal Pradesh has a strong culture of cooperation. Self-Help Groups (SHGs) and Joint Liability Groups (JLGs) are effective models for lending in rural areas where individual collateral is scarce.
                </p>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Structure for Microfinance</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Section 8 Company:</strong> Ideal for non-profit MFIs. Can start with less capital and focuses on social upliftment.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>NBFC-MFI:</strong> For commercial scale microfinance. Requires ₹5 Crore NOF (subject to current norms) and strict adherence to RBI pricing and fair practices codes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>JLG Documentation:</strong> We draft robust inter-se agreements and loan cards that are legally binding and culturally accepted in Himachali villages.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company: The Community Banking Solution
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For localized lending within a specific community or district (e.g., only in Solan or Kangra), a Nidhi Company is an excellent vehicle. It cultivates the habit of thrift and savings among members.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                  <li><strong>Lower Capital:</strong> Start with ₹10 Lakhs equity.</li>
                  <li><strong>No RBI License:</strong> Regulated by MCA under Nidhi Rules, 2014.</li>
                  <li><strong>Secured Loans:</strong> Can lend against Gold, Silver, Immovable Property, and Deposits.</li>
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
                  Himachal Pradesh Registration of Money Lenders Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending without a license is risky and illegal in Himachal Pradesh. The state enforces the <strong>Himachal Pradesh Registration of Money Lenders Act, 1976</strong>.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Why Get Licensed?</h3>
                  <p className="text-gray-700 mb-4">
                    Without a license, civil courts in Himachal Pradesh will not entertain your suit for recovery of money. A license legitimizes your business and allows you to seek legal recourse.
                  </p>
                  <h3 className="font-bold text-lg mb-4">Our Services:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div>• Application to the Collector/SDM.</div>
                    <div>• Maintenance of statutory registers.</div>
                    <div>• Compliance with interest rate caps.</div>
                    <div>• Annual license renewal.</div>
                  </div>
                </div>
              </section>

              {/* Project Finance */}
              <section id="project-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Project Finance: Hydro & Infrastructure
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Himachal is the power bowl of India. We specialize in legal structuring for large-scale project finance, particularly in the hydropower and renewable energy sectors.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Due Diligence:</strong> Comprehensive land title search and project approval verification (forest clearance, pollution control board, etc.).
                  </li>
                  <li>
                    <strong>Loan Syndication Agreements:</strong> Drafting and reviewing consortium lending agreements for large projects.
                  </li>
                  <li>
                    <strong>Security Creation:</strong> Creating valid mortgages and charges on project assets, navigating Section 118 permissions where applicable.
                  </li>
                </ul>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Recovery of dues in Himachal Pradesh typically falls under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) Chandigarh</strong>. We provide aggressive representation for banks and FIs.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">SARFAESI Action</h3>
                    <p className="text-gray-700">
                      We handle the entire SARFAESI lifecycle: Issuing 13(2) notices, handling borrower objections, issuing 13(4) possession notices, and obtaining District Magistrate orders for physical possession of secured assets in any district of HP.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Section 138 NI Act</h3>
                    <p className="text-gray-700">
                      For bounced cheques, we file criminal complaints in the local judicial magistrate courts across Himachal. This is a fast and effective pressure tactic for recovery.
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
                      <li>• Loan Agreement & Application</li>
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
                  What Our Clients in Himachal Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We struggled for months to get our Nidhi Company registered due to compliance issues. AMA Legal Solutions streamlined the entire process. Their knowledge of local and central laws is impressive."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vikram Singh</p>
                        <p className="text-sm text-gray-500">Director, Shimla Hills Nidhi Ltd.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As a Microfinance NGO, we needed guidance on JLG documentation. The team provided us with watertight contracts that have significantly improved our recovery rates in the hill districts."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                      <div>
                        <p className="font-bold text-gray-900">Priya Sharma</p>
                        <p className="text-sm text-gray-500">Secretary, Him Vikas Sanstha</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Their expertise in DRT litigation is impressive. We engaged them for a high-value recovery case involving a default in the hospitality sector, and they secured a favorable order."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rahul Verma</p>
                        <p className="text-sm text-gray-500">Regional Manager, Public Sector Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to start a private finance business but were worried about the legalities. They helped us get the Money Lenders License from the DC office. Professional and reliable."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Amit Kapoor</p>
                        <p className="text-sm text-gray-500">Proprietor, Kapoor Finance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Himachal's Trusted Banking Lawyers
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  In a state with unique land and lending laws, you need specialized legal counsel.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏛️</div>
                    <h3 className="font-bold text-xl mb-2">RBI Liaison</h3>
                    <p className="text-gray-600">Experience dealing with RBI Regional Office Chandigarh for licensing and compliance.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Experts</h3>
                    <p className="text-gray-600">Dedicated team for DRT Chandigarh and local courts in HP for fast recovery.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">📜</div>
                    <h3 className="font-bold text-xl mb-2">Land Law Experts</h3>
                    <p className="text-gray-600">Deep understanding of Section 118 HP Tenancy and Land Reforms Act for secure lending.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Himachal Pradesh
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
                  Speak to our senior banking lawyers in Shimla today.
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

export default HimachalPradeshBankingClient;

