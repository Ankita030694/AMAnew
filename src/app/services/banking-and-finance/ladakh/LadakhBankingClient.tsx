"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const LadakhBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking at 11,000 Feet" },
    { id: "sarfaesi-land-rights", title: "SARFAESI & Land Rights" },
    { id: "tourism-finance", title: "Tourism & Homestay Finance" },
    { id: "nbfc-registration", title: "NBFC Registration in Ladakh" },
    { id: "solar-finance", title: "Renewable Energy Financing" },
    { id: "drt-chandigarh", title: "DRT Litigation (Chandigarh)" },
    { id: "lahdc-role", title: "Role of LAHDC & Administration" },
    { id: "project-finance", title: "Infrastructure Project Finance" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Ladakh", href: "/services/banking-and-finance/ladakh" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Ladakh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Specialized legal counsel for the Union Territory of High Passes. Navigating SARFAESI enforcement, Hotel Financing, and Green Energy projects in Leh and Kargil.
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
                  Financial Legal Services for the New Union Territory
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The formation of Ladakh as a Union Territory has opened new floodgates for economic development, yet the region remains one of the most challenging financial environments in the world. With extreme geography, a limited working season, and a unique land tenure system protecting indigenous rights, standard banking procedures often hit a wall.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The banking sector in Ladakh is evolving rapidly. From the traditional dominance of J&K Bank to the aggressive expansion of SBI and private players like HDFC, the competition is heating up. However, the legal framework is in a state of transition, blending Central laws with local customary protections.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we bridge the gap between national banking regulations and local realities. Whether you are a hotelier in Leh seeking project finance, a solar power developer in Changthang, or a bank trying to enforce a mortgage in Kargil, our expertise ensures your capital is secure.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Banking at 11,000 Feet: The Landscape
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Ladakh's economy is bifurcated between the Buddhist-majority Leh district and the Shia-majority Kargil district. Each has distinct economic drivers and banking behaviors.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Leh: The Tourism Hub</h3>
                    <p className="text-gray-700">
                      The economy here is 80% tourism-driven. Credit demand is high for hotel construction, luxury camps, and transport fleets. Seasonality of cash flow is a major issue for loan repayments.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Kargil: Trade & Agriculture</h3>
                    <p className="text-gray-700">
                      Kargil serves as a transit hub and agricultural center (apricots). Banking penetration is improving, with a focus on SME loans and trade finance for goods moving to Zanskar.
                    </p>
                  </div>
                </div>
              </section>

              {/* SARFAESI Land Rights */}
              <section id="sarfaesi-land-rights" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI Act vs. Land Protection Laws
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This is the most critical legal issue in Ladakh. While the <strong>SARFAESI Act, 2002</strong> allows banks to auction defaulted properties, local land laws restrict the sale of land to non-residents (non-Ladakhis).
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">The Deadlock</h3>
                  <p className="text-red-800">
                    Banks often struggle to find buyers for auctioned properties because outsiders cannot bid. This leads to failed auctions and rising NPAs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Our Solution Strategy</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Local Buyer Networks:</strong> We help banks connect with eligible local investors who can legally participate in SARFAESI auctions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Leasehold Rights Auction:</strong> Instead of selling the land, we structure the sale of leasehold rights for commercial properties, which may have broader acceptability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>District Magistrate Coordination:</strong> We liaise with the DM of Leh and Kargil for Section 14 orders to take physical possession of assets.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tourism Finance */}
              <section id="tourism-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tourism & Homestay Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  With the government promoting sustainable tourism, financing homestays has become a priority sector.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">PMEGP & Mudra Loans</h3>
                  <p className="text-yellow-800">
                    Many locals avail loans under PMEGP for setting up guest houses. We assist in drafting the Project Report to ensure it meets the "viability gap" criteria often scrutinized by banks due to the short tourist season.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Hotel Projects:</strong> For larger hotels, we handle loan syndication, title verification of the land (often ancestral), and compliance with the <strong>Ladakh Pollution Control Committee</strong> norms, which is a prerequisite for loan disbursement.
                </p>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration in Ladakh
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Registering a Non-Banking Financial Company (NBFC) in Ladakh allows you to tap into the underserved credit market.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Requirement</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Regulator</td>
                        <td className="p-4 border-b text-gray-700">
                          <strong>RBI Regional Office, Jammu</strong> (Jurisdiction covers Ladakh).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Net Owned Fund</td>
                        <td className="p-4 border-b text-gray-700">
                          Minimum ₹2 Crores.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Director KYC</td>
                        <td className="p-4 border-b text-gray-700">
                          Must pass "Fit and Proper" criteria. CIBIL score is critical.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">Physical Presence</td>
                        <td className="p-4 border-b text-gray-700">
                          Must have a registered office in Ladakh (Leh or Kargil) with signage.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Solar Finance */}
              <section id="solar-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Renewable Energy Financing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Ladakh is designated as a carbon-neutral region. This has led to massive investments in solar energy.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>SECI Projects:</strong> We assist developers in bidding for Solar Energy Corporation of India (SECI) tenders and securing project finance from banks/IREDA.</li>
                  <li><strong>Land Acquisition:</strong> Securing land for solar parks is complex due to grazing rights (Changthang region). We handle the legal liaison with the <strong>Hill Councils (LAHDC)</strong> for land allotment.</li>
                  <li><strong>Power Purchase Agreements (PPA):</strong> We draft and vet PPAs to ensure bankability.</li>
                </ul>
              </section>

              {/* DRT Chandigarh */}
              <section id="drt-chandigarh" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation (Chandigarh Jurisdiction)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Since Ladakh does not have its own DRT, all cases involving debts above ₹20 Lakhs are heard by <strong>DRT Chandigarh</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Logistical Challenges & Solutions</h3>
                  <p className="text-gray-700">
                    Litigants from Ladakh face high travel costs and delays. We provide:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li><strong>Remote Representation:</strong> Our lawyers based in Chandigarh appear on your behalf, saving you travel time.</li>
                    <li><strong>Video Conferencing:</strong> We advocate for virtual hearings for Ladakhi clients.</li>
                    <li><strong>Local Filing:</strong> We manage the filing of OAs and SAs efficiently.</li>
                  </ul>
                </div>
              </section>

              {/* LAHDC Role */}
              <section id="lahdc-role" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Role of LAHDC in Banking
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Ladakh Autonomous Hill Development Councils (LAHDC)</strong> of Leh and Kargil play a pivotal role.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  They control land allotment and implement local subsidy schemes. Any major project finance deal requires their NOC. We maintain professional relations with the Council secretariats to expedite approvals for our clients.
                </p>
              </section>

              {/* Project Finance */}
              <section id="project-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Infrastructure Project Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  With the BRO and NHIDCL executing massive road and tunnel projects (like Zojila Tunnel), there is huge demand for working capital limits for contractors.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We assist contractors in securing:
                  <br />• <strong>Bank Guarantees (BG):</strong> Performance and Financial BGs.
                  <br />• <strong>Letter of Credit (LC):</strong> For procuring heavy machinery from outside.
                  <br />• <strong>Consortium Lending:</strong> For large ticket loans involving multiple banks.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Commercial Loans in Ladakh</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• LAHDC Allotment Letter (for land)</li>
                      <li>• Resident Certificate (PRC/Domicile)</li>
                      <li>• Pollution Control Committee NOC</li>
                      <li>• Tourism Department Registration</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Project Report (DPR)</li>
                      <li>• Income Tax Returns (ITR)</li>
                      <li>• Udyam Registration (MSME)</li>
                      <li>• Collateral Deeds (Verified)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Ladakh
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Building a luxury camp in Nubra required a big loan. The bank was stuck on land papers. AMA Legal Solutions helped clarify the title issues with the Tehsildar and got our loan sanctioned."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">T</div>
                      <div>
                        <p className="font-bold text-gray-900">Tsering Namgyal</p>
                        <p className="text-sm text-gray-500">Owner, Nubra Eco Camps</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "I am a contractor for BRO. I needed a Bank Guarantee quickly for a tender. They guided me through the documentation and compliance with the bank in Leh."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Mohd. Hussain</p>
                        <p className="text-sm text-gray-500">Civil Contractor, Kargil</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced a SARFAESI notice. Since we are in a remote area, we didn't know what to do. Their team handled the case in DRT Chandigarh and saved our property."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Stanzin Dorjee</p>
                        <p className="text-sm text-gray-500">Hotelier, Leh</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "For our solar power project, land acquisition was a nightmare. Their understanding of LAHDC rules helped us navigate the approvals smoothly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rahul Sharma</p>
                        <p className="text-sm text-gray-500">Director, SunRise Energy</p>
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
                    Secure Your Business in the Himalayas
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the high passes of Khardung La to the valleys of Suru, we bring world-class financial legal expertise to your doorstep.
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
                    100% Confidential • Expert Legal Advice • Serving Leh & Kargil
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
                  Get professional legal advice for your financial business in Ladakh.
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

export default LadakhBankingClient;


