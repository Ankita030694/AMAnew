"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const MizoramBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "lsc-mortgage", title: "LSC & Land Mortgage" },
    { id: "money-lenders-act", title: "Mizoram Money Lenders Act" },
    { id: "sedp-scheme", title: "SEDP Scheme Assistance" },
    { id: "bamboo-finance", title: "Bamboo Industry Finance" },
    { id: "nbfc-registration", title: "NBFC Registration in Aizawl" },
    { id: "drt-guwahati", title: "DRT Litigation (Guwahati)" },
    { id: "sarfaesi-customary", title: "SARFAESI & Customary Law" },
    { id: "startup-mizoram", title: "Startup Mizoram Initiative" },
    { id: "horticulture-finance", title: "Horticulture & Food Processing" },
    { id: "rural-bank", title: "Mizoram Rural Bank Services" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Mizoram", href: "/services/banking-and-finance/mizoram" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Mizoram</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for Aizawl and beyond. Expert guidance on Land Settlement Certificates (LSC), SEDP Loans, Money Lenders Act, and DRT Litigation.
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
                  Navigating Financial Laws in the Blue Mountains
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Mizoram, known for its high literacy rate and peaceful social fabric, presents a unique landscape for banking and finance. The state's economy is transitioning from shifting cultivation (Jhum) to settled agriculture and services. However, the legal framework governing property and finance is distinct, heavily influenced by the <strong>Mizo District (Land and Revenue) Act, 1956</strong> and the special provisions of Article 371G.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The primary hurdle for credit expansion in Mizoram is the "Land Settlement Certificate" (LSC). Unlike the rest of India where "Patta" or "Sale Deed" is the norm, in Mizoram, the LSC is the definitive proof of ownership required for creating a mortgage. A vast number of landholders possess only "Periodic Pattas" or "Village Council Passes," which banks do not accept as valid collateral.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  With the state government aggressively pushing for economic self-sufficiency through the <strong>Socio-Economic Development Policy (SEDP)</strong>, there is a surge in demand for project finance in bamboo processing, horticulture (Dragon Fruit, Anthurium), and entrepreneurship. At <strong>AMA Legal Solutions</strong>, we provide specialized legal services to navigate this landscape. Whether you are a bank trying to verify an LSC in Lunglei, an entrepreneur in Aizawl seeking SEDP funding, or a private lender needing a license, our expertise ensures compliance and security.
                </p>
              </section>

              {/* LSC Mortgage */}
              <section id="lsc-mortgage" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  LSC & Land Mortgage
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  In Mizoram, land tenure is governed by the state. The <strong>Land Settlement Certificate (LSC)</strong> gives the holder permanent heritable and transferable rights, akin to a freehold title.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">The Banking Bottleneck</h3>
                  <p className="text-red-800">
                    Banks in Mizoram strictly follow the rule: <strong>No LSC, No Mortgage</strong>. A large percentage of land, especially in rural areas, is held under "Periodic Patta" (temporary lease) or "Village Council Pass" (customary right). These documents do not create a mortgageable interest under the Transfer of Property Act.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">How We Solve This</h3>
                  <p className="text-gray-700 mb-4">
                    We assist clients in the administrative process of upgrading their land title:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Conversion Application:</strong> Filing applications with the Land Revenue & Settlement Department to convert Periodic Patta to LSC.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Non-Encumbrance Certificate (NEC):</strong> Obtaining a 13-year or 30-year NEC from the Sub-Registrar's office to prove the land is free from prior debts.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Valuation Reports:</strong> Liaising with government-approved valuers to get a realistic valuation of the property for loan eligibility.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Money Lenders Act */}
              <section id="money-lenders-act" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mizoram Money Lenders Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending has deep roots in Mizo society, often governed by the code of <em>Tlawmngaihna</em> (selfless service). However, commercial lending is now strictly regulated by the <strong>Mizoram Money Lenders Act</strong> to prevent exploitation.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Licensing:</strong> Any person or firm lending money at interest must obtain a license from the Deputy Commissioner (DC) of the district. Operating without a license is a criminal offense.</li>
                  <li><strong>Interest Cap:</strong> The Act empowers the government to fix the maximum interest rate. Loans with interest rates exceeding this cap are considered void to the extent of the excess interest.</li>
                  <li><strong>Loan Agreements:</strong> We draft loan agreements that comply with the Act's format, ensuring that Promissory Notes are legally enforceable in civil courts. Informal chits or verbal agreements are difficult to recover legally.</li>
                </ul>
              </section>

              {/* SEDP Scheme */}
              <section id="sedp-scheme" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SEDP Scheme Assistance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Socio-Economic Development Policy (SEDP)</strong> is the Mizoram government's flagship program to accelerate economic growth. It focuses on two components: <strong>Family Oriented SEDP</strong> (for individual households) and <strong>Infrastructure Oriented SEDP</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Navigating SEDP for Beneficiaries</h3>
                  <p className="text-gray-700">
                    We assist individuals and groups in accessing SEDP benefits:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-blue-800">
                    <li><strong>Trade Selection:</strong> Advising on the choice of trade (e.g., piggery, poultry, ginger cultivation) based on the government's focus for that district.</li>
                    <li><strong>DPR Preparation:</strong> Creating the Detailed Project Report required by the implementing department (Agriculture, Horticulture, AH & Veterinary).</li>
                    <li><strong>Bank Linkage:</strong> Facilitating the loan component where SEDP provides the margin money or interest subvention.</li>
                  </ul>
                </div>
              </section>

              {/* Bamboo Finance */}
              <section id="bamboo-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bamboo Industry Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  With 57% of its geographical area under bamboo cover, Mizoram calls bamboo its "Green Gold." Financing the bamboo value chain-from harvesting to processing (flooring, incense sticks, charcoal)-is a priority.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Legal Challenges:</strong> Bamboo forests are often on community land or unclassed state forests. Creating a mortgage on the raw material source is impossible.
                  <br /><strong>Our Solution:</strong> We structure financing based on <strong>Supply Contracts</strong>. We draft enforceable agreements between the Bamboo Processing Unit and the Bamboo Growers/Collectors, which banks accept as assurance of raw material availability. We also assist in claiming subsidies under the <strong>National Bamboo Mission</strong>.
                </p>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Aizawl
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Aizawl has a high literacy rate, high per capita consumption, and a growing service sector. This creates a strong market for consumer finance (vehicle loans, gadget loans). Registering a <strong>Non-Banking Financial Company (NBFC)</strong> here is a strategic move.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Registration Steps</h3>
                  <p className="text-yellow-800">
                    1. <strong>Incorporate:</strong> A Private/Public Limited Company with Registrar of Companies (RoC).<br/>
                    2. <strong>Capital:</strong> Deposit ₹2 Crores Net Owned Fund (NOF) in a fixed deposit.<br/>
                    3. <strong>RBI Application:</strong> Submit the application to the RBI Regional Office in Guwahati via the COSMOS portal.<br/>
                    4. <strong>Compliance:</strong> We ensure your board of directors meets the "Fit and Proper" criteria, a critical check for North East applications.
                  </p>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation (Guwahati Jurisdiction)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Mizoram is under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong>. For a borrower in Lunglei or Champhai, fighting a case in Guwahati is logistically difficult and expensive.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Solution:</strong> We bridge this geographical gap. Our dedicated team in Guwahati handles all filings (Original Applications, Securitization Applications) and appears for daily hearings. We actively use the <strong>Video Conferencing</strong> facilities of the DRT to allow our Mizoram clients to depose or attend hearings remotely, ensuring they get justice without the travel burden.
                </p>
              </section>

              {/* SARFAESI Customary */}
              <section id="sarfaesi-customary" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI & Customary Law
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  While the SARFAESI Act applies to Mizoram, the sale of attached assets is restricted. Under the <strong>Mizoram Transfer of Land (Regulation) Act</strong>, land cannot be sold to a non-tribal.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Implication for Banks:</strong> If a borrower defaults, the bank can attach the property but cannot auction it to the general public in India. The bidder must be a Mizo tribal.
                  <br /><strong>Our Advisory:</strong> We advise banks to create a "Local Buyers List" before initiating the auction under Rule 8(6) of the Security Interest Rules. We also coordinate with the District Magistrate for Section 14 possession orders, which requires navigating the sensitivities of the <strong>Village Council</strong> and the <strong>Young Mizo Association (YMA)</strong>.
                </p>
              </section>

              {/* Startup Mizoram */}
              <section id="startup-mizoram" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Startup Mizoram Initiative
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Entrepreneurship Development Scheme (EDS)</strong> under the Startup Mizoram initiative provides seed funding and incubation support.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We help startups:
                  <br />• <strong>Incorporate:</strong> Choosing the right legal structure (LLP vs Pvt Ltd) to be investment-ready.
                  <br />• <strong>Register:</strong> With the Planning & Programme Implementation Department to access EDS grants.
                  <br />• <strong>Compliance:</strong> Managing annual filings (ROC, GST) to ensure they remain eligible for government procurement preferences.
                </p>
              </section>

              {/* Horticulture Finance */}
              <section id="horticulture-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Horticulture & Food Processing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Mizoram is becoming a hub for exotic crops like Dragon Fruit, Anthurium, and Bird's Eye Chili. Financing these requires specialized agricultural loans.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist farmers and processing units in:
                  <br />• <strong>Contract Farming Agreements:</strong> Drafting legally binding contracts between farmers and processing companies.
                  <br />• <strong>Subsidy Applications:</strong> Under the Mission for Integrated Development of Horticulture (MIDH).
                  <br />• <strong>Export Documentation:</strong> For sending produce to markets in Bangladesh or Myanmar.
                </p>
              </section>

              {/* Rural Bank */}
              <section id="rural-bank" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mizoram Rural Bank Services
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Mizoram Rural Bank (MRB)</strong> has the largest branch network in the state. It is the primary lender for government schemes.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist clients in:
                  <br />• <strong>KCC Loans:</strong> Resolving issues related to Kisan Credit Cards and land documents.
                  <br />• <strong>SHG Linkage:</strong> Helping Self Help Groups form and grade themselves to access MRB credit.
                  <br />• <strong>OTS Negotiation:</strong> Representing borrowers in One Time Settlement negotiations with MRB for bad loans.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Loans in Mizoram</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Land Settlement Certificate (LSC) - Original</li>
                      <li>• Non-Encumbrance Certificate (from Sub-Registrar)</li>
                      <li>• Tribal Certificate</li>
                      <li>• Village Council NOC / Residential Certificate</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Detailed Project Report (DPR)</li>
                      <li>• Tax Clearance Certificate</li>
                      <li>• Valid Trade License (Aizawl Municipal Corp)</li>
                      <li>• KYC (Voter ID/Aadhar)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Mizoram
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "I had only a Periodic Patta for my land, and the bank refused my housing loan. AMA Legal Solutions guided me through the process of converting it to an LSC with the Revenue Department. It took time, but we got the loan."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">Z</div>
                      <div>
                        <p className="font-bold text-gray-900">Zothanpuii</p>
                        <p className="text-sm text-gray-500">Teacher, Aizawl</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We run a bamboo processing unit. Applying for the National Bamboo Mission subsidy was confusing. They handled the paperwork and legal agreements perfectly, helping us secure the grant."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">L</div>
                      <div>
                        <p className="font-bold text-gray-900">Lalremruata</p>
                        <p className="text-sm text-gray-500">Entrepreneur, Kolasib</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As a private lender, I wanted to be 100% legal. They helped me get the Money Lenders License from the DC office and drafted proper loan agreements that I can actually enforce in court."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vanlalhriata</p>
                        <p className="text-sm text-gray-500">Lender, Champhai</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "My business faced a SARFAESI notice. I was worried about losing my shop. Their team represented me in DRT Guwahati via video conference and got a stay order, giving me time to settle."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rualthankhuma</p>
                        <p className="text-sm text-gray-500">Trader, Aizawl</p>
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
                    Secure Your Financial Growth in Mizoram
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the hills of Aizawl to the valleys of Champhai, we provide the legal expertise you need to navigate the banking landscape.
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
                  Get professional legal advice for your financial business in Mizoram.
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

export default MizoramBankingClient;
