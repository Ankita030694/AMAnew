"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const NagalandBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "article-371a", title: "Article 371A & Land Banking" },
    { id: "money-lending-act", title: "Nagaland Money Lenders Act" },
    { id: "cmmfi-scheme", title: "CM's Micro Finance Initiative" },
    { id: "nbfc-registration", title: "NBFC & Nidhi Registration" },
    { id: "cooperative-banking", title: "The Role of Cooperative Banks" },
    { id: "drt-guwahati", title: "DRT Guwahati Jurisdiction" },
    { id: "sarfaesi-challenges", title: "SARFAESI Enforcement Challenges" },
    { id: "nedfi-nidc", title: "Role of NEDFi & NIDC" },
    { id: "digital-banking", title: "Digital Banking & Financial Literacy" },
    { id: "tourism-finance", title: "Hornbill & Tourism Finance" },
    { id: "handloom-finance", title: "Handloom & Handicraft Finance" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Nagaland", href: "/services/banking-and-finance/nagaland" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Nagaland</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Specialized legal consultancy for the Land of Festivals. Navigating Article 371A complexities, Money Lenders Act compliance, CMMFI subsidies, and DRT Litigation in Guwahati.
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
                  Navigating Financial Laws in Nagaland
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nagaland presents a unique legal and operational environment for banking and finance, distinct from any other state in India. The state's financial landscape is heavily influenced by the special constitutional protection under <strong>Article 371A</strong>, which safeguards Naga religious or social practices, customary law and procedure, administration of civil and criminal justice involving decisions according to Naga customary law, and crucially, ownership and transfer of land and its resources.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Historically, the Naga economy was barter-based and community-centric. The transition to a formal banking system has been gradual but is now accelerating. Dimapur has emerged as the commercial and financial hub, hosting regional offices of major banks, while Kohima serves as the administrative center driving government-sponsored schemes. However, the rural hinterlands still face significant credit gaps, often bridged by informal lending or community-based credit.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For financial institutions, this creates a distinct set of challenges in secured lending. Standard mortgage enforcement mechanisms under the SARFAESI Act often conflict with customary land laws that prohibit land alienation to non-Nagas. This "collateral conundrum" makes credit underwriting more complex, relying heavily on cash flow assessment and social guarantees rather than asset backing.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we have deep expertise in reconciling central banking statutes with Nagaland's specific legal framework. We understand the nuances of the <strong>Nagaland Village and Area Councils Act</strong> and how it intersects with banking norms. Whether you are a bank seeking to recover dues via DRT Guwahati, a fintech startup trying to penetrate the rural market, or an entrepreneur in Kohima looking for NEDFi funding, we provide the strategic legal roadmap to navigate these complexities.
                </p>
              </section>

              {/* Article 371A */}
              <section id="article-371a" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Article 371A & Land Banking
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The restriction on land transfer to non-Nagas is the central pillar of banking law in the state. Under Article 371A(1)(a)(iv), no Act of Parliament in respect of ownership and transfer of land and its resources shall apply to the State of Nagaland unless the Legislative Assembly of Nagaland by a resolution so decides.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">The Collateral Conundrum</h3>
                  <p className="text-red-800">
                    Most commercial banks are "non-Naga" entities. While they can technically hold a mortgage, they cannot simply auction a defaulter's land to the open market to recover dues. The buyer must be a local indigenous inhabitant of Nagaland. This severely limits the marketability of the collateral and reduces the "forced sale value" (FSV) of the asset, making banks hesitant to extend large ticket loans against property.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Strategic Solutions for Secured Lending</h3>
                  <p className="text-gray-700 mb-4">
                    To overcome these barriers, we assist clients in structuring loans using innovative legal frameworks:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Tripartite Agreements:</strong> We draft robust agreements involving the Borrower, the Bank, and the <strong>Village Council</strong> or <strong>Gaon Burah (GB)</strong>. The traditional authority acts as a guarantor or witness, ensuring social pressure for repayment. In case of default, the Village Council often facilitates the sale of the land to another villager to settle the bank dues.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Lease Financing:</strong> In commercial hubs like Dimapur, we recommend financing against long-term lease rights rather than land ownership. We ensure the lease deeds are registered and have clear clauses regarding the transfer of leasehold rights in events of default.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Government Guarantees:</strong> For large industrial or infrastructure projects, we assist borrowers in applying for state government guarantees, which provide banks with the necessary comfort to lend without traditional land collateral.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Money Lending Act */}
              <section id="money-lending-act" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nagaland Money Lenders Act, 2005
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Informal lending has always been part of the Naga economy. However, to curb usurious practices and the exploitation of vulnerable borrowers, the state enacted the <strong>Nagaland Money Lenders Act, 2005</strong>. This Act brings private money lending under a regulatory ambit.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Key Compliance & Provisions</h3>
                  <ul className="list-disc pl-6 space-y-2 text-yellow-800">
                    <li><strong>Registration:</strong> Every money lender must register with the District Authority (Deputy Commissioner). Operating without a license is a cognizable offense punishable with imprisonment and fines.</li>
                    <li><strong>Interest Rate Cap:</strong> The Act empowers the government to prescribe the maximum rate of interest. Charging interest above this cap (often benchmarked at 3% above the prevailing bank rate) makes the excess interest non-recoverable in court.</li>
                    <li><strong>Maintenance of Accounts:</strong> Lenders are legally required to maintain clear books of accounts and issue receipts for every payment. Failure to do so can lead to the dismissal of recovery suits.</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Services:</strong> We assist private finance firms and individual lenders in obtaining the Money Lenders License. We also draft compliant loan agreements that stand up to judicial scrutiny, ensuring that your lending business is both profitable and legal.
                </p>
              </section>

              {/* CMMFI Scheme */}
              <section id="cmmfi-scheme" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Chief Minister's Micro Finance Initiative (CMMFI)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Chief Minister's Micro Finance Initiative (CMMFI)</strong> is a flagship scheme designed to ensure the availability of affordable credit for undertaking economic activities in the agriculture, allied, and micro-enterprise sectors. It aims to improve credit flow in rural areas and generate self-employment.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The scheme is implemented through the <strong>Nagaland State Cooperative Bank (NStCB)</strong> and other commercial banks. It involves a subsidy component and an interest subvention, making loans highly affordable.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">How We Assist Beneficiaries</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Eligibility Verification:</strong> Ensuring applicants meet the criteria (Indigenous Inhabitant, age 18-60, no default history).</li>
                    <li><strong>Project Report Preparation:</strong> Drafting Detailed Project Reports (DPR) that align with the "Bankable Projects" list of the Department of Agriculture or Industries.</li>
                    <li><strong>DLIC Liaison:</strong> The selection is done by the District Level Implementation Committee (DLIC) headed by the Deputy Commissioner. We guide clients on the documentation required for DLIC approval.</li>
                    <li><strong>Mou & Agreement:</strong> Reviewing the loan agreement to ensure the subsidy terms (back-ended vs front-ended) are clearly understood by the borrower.</li>
                  </ul>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC & Nidhi Registration in Dimapur
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Dimapur, being the rail head and commercial capital, is the ideal location for financial institutions. Setting up a <strong>Non-Banking Financial Company (NBFC)</strong> or a <strong>Nidhi Company</strong> here allows access to the trade flows of the entire state.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Entity Type</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Regulatory Authority</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Key Requirement & Nuances</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">NBFC</td>
                        <td className="p-4 border-b text-gray-700">RBI (Guwahati Regional Office)</td>
                        <td className="p-4 border-b text-gray-700">
                          Min Net Owned Fund (NOF) of ₹2 Crores (or ₹10 Crores for certain categories). Directors must pass the "Fit and Proper" test. We handle the RBI COSMOS portal application and physical dossier submission in Guwahati.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Nidhi Company</td>
                        <td className="p-4 border-b text-gray-700">RoC (Guwahati) / MCA</td>
                        <td className="p-4 border-b text-gray-700">
                          Min Capital ₹10 Lakhs. Can only lend to members. Must comply with Nidhi Rules, 2014 (amended). Form NDH-4 filing is critical for status declaration. We ensure the "Object Clause" in MOA is perfectly drafted.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Microfinance (Sec 8)</td>
                        <td className="p-4 border-b text-gray-700">MCA / Central Govt</td>
                        <td className="p-4 border-b text-gray-700">
                          For non-profit lending. Suitable for NGOs focusing on rural alleviation. Loan caps apply (₹50k / ₹1.25 Lakhs). We assist in Section 8 incorporation and 12A/80G tax exemptions.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Cooperative Banking */}
              <section id="cooperative-banking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Role of Cooperative Banks
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Nagaland State Cooperative Bank Ltd. (NStCB)</strong> plays a pivotal role in the state's economy, often having a wider reach in remote hill districts than commercial banks. It is the primary channel for agricultural credit and government subsidy schemes.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We advise new and existing <strong>Primary Agricultural Credit Societies (PACS)</strong> and other cooperative societies on:
                  <br />• <strong>Registration:</strong> Under the Nagaland Cooperative Societies Act.
                  <br />• <strong>Bylaws Drafting:</strong> Ensuring democratic management and financial propriety.
                  <br />• <strong>Audit Compliance:</strong> Preparing for statutory audits by the Registrar of Cooperative Societies.
                  <br />• <strong>Credit Linkage:</strong> Facilitating bulk loans from NStCB or NABARD for on-lending to members.
                </p>
              </section>

              {/* DRT Guwahati */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Guwahati Jurisdiction & Litigation
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nagaland does not have its own Debt Recovery Tribunal. All banking recovery cases involving debts above ₹20 Lakhs are adjudicated by the <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong>. This geographic distance often puts Nagaland-based borrowers and smaller banks at a disadvantage.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Strategic Advantage:</strong>
                  <br />Since Guwahati is the legal hub for the entire North East, our team has a permanent presence there. We provide seamless representation for Nagaland clients, handling:
                  <br />• <strong>Original Applications (OA):</strong> Filing efficient recovery suits for banks.
                  <br />• <strong>Securitization Applications (SA):</strong> Defending borrowers against wrongful SARFAESI notices.
                  <br />• <strong>Interim Relief:</strong> Moving urgent applications to stay auctions or possession orders.
                  <br />• <strong>Virtual Hearings:</strong> We actively advocate for video conferencing to save our clients the time and cost of traveling from Kohima or Mokokchung to Guwahati.
                </p>
              </section>

              {/* SARFAESI Challenges */}
              <section id="sarfaesi-challenges" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI Enforcement Challenges
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Enforcing the SARFAESI Act in Nagaland is one of the most legally complex tasks in Indian banking. While the Act technically applies, the <strong>Nagaland Land and Revenue Regulation</strong> and Article 371A create significant practical hurdles.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Possession Notices (Section 13(4)):</strong> Serving these notices can trigger community unrest. We advise banks to involve local administration and village elders before pasting notices.</li>
                  <li><strong>District Magistrate's Role (Section 14):</strong> The DC's order is vital for taking physical possession. However, DCs in Nagaland are cautious about using force. We liaise with the DC office to present the bank's case effectively, emphasizing the "public money" aspect of the default.</li>
                  <li><strong>Auction Strategy:</strong> The auction notice must explicitly state that only "Indigenous Inhabitants of Nagaland" are eligible to bid. We assist banks in identifying and marketing distressed assets to eligible local High Net Worth Individuals (HNIs) to ensure the auction does not fail.</li>
                </ul>
              </section>

              {/* NEDFi & NIDC */}
              <section id="nedfi-nidc" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Role of NEDFi & NIDC
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For industrial and infrastructure projects, commercial banks often lack the risk appetite. This is where the <strong>North Eastern Development Finance Corporation (NEDFi)</strong> and the <strong>Nagaland Industrial Development Corporation (NIDC)</strong> step in.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  They provide term loans, equity support, and advisory services for projects like hotels, nursing homes, and manufacturing units.
                  <br /><strong>Our Service:</strong> We assist entrepreneurs in navigating the rigorous due diligence process of these corporations. This includes verifying land documents (Patta/Jamabandi/Land Settlement Certificates) which is the most common reason for loan rejection. We also help in structuring the "promoter's contribution" and collateral security to meet their specific norms.
                </p>
              </section>

              {/* Digital Banking */}
              <section id="digital-banking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Digital Banking & Financial Literacy
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The difficult terrain of Nagaland makes physical banking branches unviable in many remote villages. This has led to a push for <strong>Customer Service Points (CSPs)</strong> and Digital Banking Units.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We provide legal consultancy for:
                  <br />• <strong>CSP Agreements:</strong> Reviewing contracts between banks and Corporate Business Correspondents (BCs).
                  <br />• <strong>Fintech Compliance:</strong> Advising payment startups on RBI's PPI (Pre-paid Payment Instrument) norms and data localization requirements.
                  <br />• <strong>Cyber Fraud:</strong> Representing victims of phishing and banking fraud in filing complaints with the Cyber Crime Police Station and the Banking Ombudsman.
                </p>
              </section>

               {/* Tourism Finance */}
               <section id="tourism-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Hornbill & Tourism Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Hornbill Festival</strong> has put Nagaland on the global tourism map. This has spurred a demand for financing high-end homestays, eco-resorts, and tour operator fleets.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Financing these projects requires demonstrating year-round viability beyond the festival week. We help clients prepare robust financial models and legal contracts for tour operator tie-ups to satisfy bank credit committees. We also assist in obtaining the "Tourist Trade License" which is a prerequisite for bank loans in this sector.
                </p>
              </section>

              {/* Handloom Finance */}
              <section id="handloom-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Handloom & Handicraft Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nagaland's handloom sector is vibrant but largely informal. Schemes like the <strong>Mudra Yojana</strong> and <strong>Stand Up India</strong> are available but underutilized due to lack of documentation.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We work with artisan clusters and Self Help Groups (SHGs) to:
                  <br />• Formalize their business (Udyam Registration).
                  <br />• Apply for the "Weaver's Credit Card" and Mudra loans.
                  <br />• Draft agreements for bulk supply to state emporiums, which serves as proof of income for banks.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Loans in Nagaland</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Indigenous Inhabitant Certificate (IIC)</li>
                      <li>• Gaon Burah (GB) Certificate (Residential Proof)</li>
                      <li>• Land Patta / Jamabandi (Originals)</li>
                      <li>• Non-Encumbrance Certificate</li>
                      <li>• Trading License (from Municipal Council)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Detailed Project Report (DPR)</li>
                      <li>• PAN & Aadhar (KYC)</li>
                      <li>• Income Tax Returns (ITR) for last 3 years</li>
                      <li>• NOC from Village Council / Ward Chairman</li>
                      <li>• Quotations for Machinery/Construction</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Nagaland
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "I applied for a CMMFI loan for my food processing unit in Dimapur. The paperwork and DLIC process were overwhelming. AMA Legal Solutions helped me organize my documents, prepare the DPR, and get the subsidy approved smoothly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Akum Jamir</p>
                        <p className="text-sm text-gray-500">Entrepreneur, Dimapur</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We are a private finance firm in Kohima. We needed the Money Lenders License to operate legally and avoid police harassment. They guided us through the Deputy Commissioner's office procedures and drafted our loan agreements."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">T</div>
                      <div>
                        <p className="font-bold text-gray-900">Temjen Ao</p>
                        <p className="text-sm text-gray-500">Director, Hill Finance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "My hotel project in Kohima was stalled due to land collateral issues with the bank. Their legal opinion on Article 371A and the structure of a tripartite agreement helped convince the bank manager to sanction the loan."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Kevi Rengma</p>
                        <p className="text-sm text-gray-500">Hotelier, Kohima</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We had a complex recovery case in DRT Guwahati. Since we are based in Mokokchung, travelling was hard. They represented us effectively in Guwahati, handling all the filings and arguments."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">L</div>
                      <div>
                        <p className="font-bold text-gray-900">Limasunep</p>
                        <p className="text-sm text-gray-500">Businessman, Mokokchung</p>
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
                    Secure Your Financial Growth in Nagaland
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the hills of Kohima to the plains of Dimapur, we provide the legal expertise you need to navigate the complex banking landscape.
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
                  Get professional legal advice for your financial business in Nagaland.
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

export default NagalandBankingClient;
