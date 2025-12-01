"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const JammuKashmirBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "J&K's Unique Financial Ecosystem" },
    { id: "sarfaesi-act", title: "SARFAESI & Debt Recovery" },
    { id: "industrial-policy", title: "New Industrial Policy 2021-30" },
    { id: "horticulture-finance", title: "Horticulture & Apple Economy" },
    { id: "tourism-finance", title: "Tourism & Hotel Financing" },
    { id: "nbfc-registration", title: "NBFC Registration in Jammu" },
    { id: "drt-litigation", title: "DRT Litigation (Chandigarh)" },
    { id: "jk-bank-role", title: "The Role of J&K Bank" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Jammu & Kashmir", href: "/services/banking-and-finance/jammu-and-kashmir" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Jammu & Kashmir</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the Union Territory. Navigating SARFAESI post-Article 370, Industrial Subsidies, Horticulture Loans, and DRT Litigation.
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
                  Navigating the New Financial Era in J&K
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The financial landscape of Jammu & Kashmir has undergone a seismic shift in recent years. With the abrogation of Article 370 and the subsequent reorganization, the regulatory framework has aligned more closely with the rest of India, yet distinct regional challenges remain. The application of central banking laws like the SARFAESI Act is now absolute, changing the dynamics of lending and recovery.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The region's economy, anchored by horticulture, tourism, and handicrafts, is seeing a surge in credit demand driven by the <strong>New Industrial Policy 2021-30</strong>. However, businesses often struggle with the complex documentation required for subsidies, and banks face hurdles in enforcing mortgages due to land record issues.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we offer specialized legal expertise for this transition. From helping apple growers secure high-density plantation loans to representing banks in the Chandigarh DRT, our team understands the nuances of banking law in both the Jammu and Kashmir divisions.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  J&K's Unique Financial Ecosystem
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The banking sector here is dominated by the <strong>J&K Bank</strong>, which holds a unique position as a major lender and a developmental partner.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Kashmir Division</h3>
                    <p className="text-gray-700">
                      The economy is heavily seasonal, dependent on agriculture (Fruit Mandis in Sopore/Shopian) and tourism (Gulmarg/Pahalgam). Credit cycles must be structured around the harvest season.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Jammu Division</h3>
                    <p className="text-gray-700">
                      Jammu serves as the industrial and trading hub (Bari Brahmana, Samba). There is significant demand for SME finance, transport loans, and warehousing project finance.
                    </p>
                  </div>
                </div>
              </section>

              {/* SARFAESI Act */}
              <section id="sarfaesi-act" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The legal ambiguity surrounding the application of the <strong>SARFAESI Act, 2002</strong> in J&K has been resolved by the Supreme Court. Banks can now sell mortgaged properties to recover dues.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">Crucial Insight</h3>
                  <p className="text-red-800">
                    While banks can auction properties, the transfer of land to non-residents is still a sensitive issue in practice. We assist banks in finding eligible local buyers to ensure the auction process is legally compliant and practically feasible.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Services:</strong> We handle Section 13(2) notices, possession notices under Section 13(4), and applications to the District Magistrate (DM) for physical possession assistance.
                </p>
              </section>

              {/* Industrial Policy */}
              <section id="industrial-policy" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  New Industrial Policy 2021-30
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The J&K government has rolled out an aggressive industrial policy to attract investment.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Key Incentives</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Capital Investment Incentive:</strong> 30% investment subsidy on Plant & Machinery (Zone A) and 50% (Zone B).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Interest Subvention:</strong> 5% on working capital for 5 years.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>GST Linked Incentive:</strong> 100% reimbursement of SGST for 10 years.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    We assist investors in drafting the Detailed Project Report (DPR) and navigating the single-window clearance portal to secure these benefits.
                  </p>
                </div>
              </section>

              {/* Horticulture Finance */}
              <section id="horticulture-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Horticulture & Apple Economy
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The Apple industry is the backbone of Kashmir's economy. The shift to <strong>High-Density Apple Plantation</strong> requires significant capital investment.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We provide legal support for:
                  <br />• <strong>Term Loans:</strong> Verifying land titles (avoiding disputes over ancestral "Shamilat" land).
                  <br />• <strong>KCC Loans:</strong> Resolving issues related to Kisan Credit Cards.
                  <br />• <strong>CA Stores:</strong> Project finance for Controlled Atmosphere (CA) storage units.
                </p>
              </section>

              {/* Tourism Finance */}
              <section id="tourism-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tourism & Hotel Financing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  With record tourist arrivals, the hospitality sector is booming. Financing new hotels in areas like Pahalgam, Gulmarg, and Sonamarg involves complex land laws (Forest Acts, Ribbon Development Act).
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Homestay Policy</h3>
                  <p className="text-yellow-800">
                    The government is promoting homestays in rural areas. We help locals register their properties with the Tourism Department to become eligible for bank loans under the Prime Minister's Employment Generation Programme (PMEGP).
                  </p>
                </div>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Jammu
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Establishing a Non-Banking Financial Company (NBFC) in J&K offers opportunities to serve the micro-credit needs of artisans and traders.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Step</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          Company registration with RoC (Jammu jurisdiction).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Capital</td>
                        <td className="p-4 border-b text-gray-700">
                          Minimum Net Owned Fund (NOF) of ₹2 Crores.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          Submission to RBI Regional Office in Jammu (Rail Head Complex).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. Due Diligence</td>
                        <td className="p-4 border-b text-gray-700">
                          Background check of directors and source of funds is stringent due to security concerns.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation (Chandigarh Jurisdiction)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Debt recovery cases involving amounts above ₹20 Lakhs fall under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) in Chandigarh</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">How We Help</h3>
                  <p className="text-gray-700">
                    Litigation in Chandigarh can be costly and logistically difficult for J&K residents. We provide:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li><strong>Local Representation:</strong> Our associates in Chandigarh handle the day-to-day hearings.</li>
                    <li><strong>Virtual Hearings:</strong> We actively petition for video conferencing to save travel time.</li>
                    <li><strong>Stay Orders:</strong> Quick action to secure stays against arbitrary SARFAESI actions.</li>
                  </ul>
                </div>
              </section>

              {/* J&K Bank Role */}
              <section id="jk-bank-role" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Role of J&K Bank
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>J&K Bank</strong> is more than just a bank; it is the financial lifeline of the UT. It handles government treasury business and implements state schemes.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist corporate and retail clients in:
                  <br />• Negotiating One Time Settlements (OTS) under the bank's specific schemes.
                  <br />• Restructuring loans for industries affected by civil unrest or natural calamities.
                  <br />• Compliance with the bank's rigorous KYC and AML norms.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Industrial/Horticulture Loans</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Revenue Extracts (Jamabandi/Girdawari)</li>
                      <li>• Domicile Certificate</li>
                      <li>• Udyam Registration</li>
                      <li>• Pollution Control Board NOC</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Detailed Project Report (DPR)</li>
                      <li>• Horticulture Dept. Recommendation</li>
                      <li>• Partnership Deed/MOA</li>
                      <li>• Net Worth Certificate</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from J&K
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to convert our apple orchard to high-density. The bank loan process was stuck due to revenue record errors. AMA Legal Solutions got the records corrected with the Patwari and facilitated the loan."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">F</div>
                      <div>
                        <p className="font-bold text-gray-900">Fayaz Ahmed</p>
                        <p className="text-sm text-gray-500">Orchardist, Sopore</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Starting a manufacturing unit in Samba required navigating the new industrial policy. They helped us prepare the DPR and get the 30% capital subsidy approved."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rajesh Gupta</p>
                        <p className="text-sm text-gray-500">Industrialist, Jammu</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our hotel in Pahalgam was facing auction under SARFAESI. Their team represented us in DRT Chandigarh and secured a stay, giving us time to restructure our debt."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">G</div>
                      <div>
                        <p className="font-bold text-gray-900">Ghulam Nabi</p>
                        <p className="text-sm text-gray-500">Hotel Owner, Pahalgam</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Registering an NBFC in Jammu was tough due to strict RBI checks. Their professional guidance through the documentation and interview process was invaluable."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vikram Singh</p>
                        <p className="text-sm text-gray-500">Director, Jammu FinCorp</p>
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
                    Secure Your Financial Future in J&K
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the apple orchards of Kashmir to the industrial estates of Jammu, we provide expert legal counsel for all your banking needs.
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
                    100% Confidential • Expert Legal Advice • Pan-J&K Reach
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
                  Get professional legal advice for your financial business in Jammu & Kashmir.
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

export default JammuKashmirBankingClient;


