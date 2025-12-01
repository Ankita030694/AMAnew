"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const KarnatakaBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Silicon Valley of India" },
    { id: "fintech-compliance", title: "Fintech & Digital Lending" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "money-lending", title: "Money Lenders & 'Meter Baddi' Act" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "corporate-debt", title: "Corporate Debt & NCLT" },
    { id: "drt-litigation", title: "DRT & SARFAESI" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Karnataka", href: "/services/banking-and-finance/karnataka" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Karnataka</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for the financial hub of Bengaluru. From high-growth Fintech compliance and NBFC Registration to complex Corporate Debt Restructuring and DRT Litigation.
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
                  Powering the Financial Engine of the South
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Karnataka, with Bengaluru at its heart, is the epicenter of India's Fintech revolution. It is home to the country's largest digital lending platforms, payment gateways, and tech-driven NBFCs. But beyond the tech glamour, the state has a deep-rooted traditional banking sector, a thriving cooperative movement in districts like Dakshina Kannada, and a massive MSME base requiring credit.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The regulatory environment here is dual-faced: one that encourages innovation (through RBI's Innovation Hub in Bengaluru) and another that strictly enforces borrower protection (through the Karnataka Money Lenders Act and the "Meter Baddi" Prohibition Act). Navigating this requires a legal partner who speaks both "Tech" and "Law".
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we are the bridge. We help Fintech startups comply with RBI's evolving digital norms, assist traditional lenders in recovery, and guide investors through the complex NCLT insolvency process.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: From startups to Coffee Plantations
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The diverse economy of Karnataka demands diverse financial products.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Fintech & Startups</h3>
                    <p className="text-gray-700">
                      Bengaluru accounts for over 40% of India's Fintech funding. The demand here is for "embedded finance" legal structuring, peer-to-peer (P2P) lending compliance, and payment aggregator licensing.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Agri & Coffee Estates</h3>
                    <p className="text-gray-700">
                      In regions like Kodagu and Chikmagalur, lending against plantation land is common. However, the <strong>Karnataka Land Reforms Act</strong> restricts the transfer of agricultural land to non-agriculturists, making mortgage enforcement tricky for non-banking entities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Fintech Compliance */}
              <section id="fintech-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fintech & Digital Lending Compliance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  If you are running a lending app or platform in Bengaluru, the <strong>RBI Digital Lending Guidelines, 2022</strong> are your bible. We ensure your product is compliant to avoid bans and penalties.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">LSP & RE Agreements</h3>
                      <p className="text-gray-700 mt-2">
                        We draft the outsourcing agreement between the Regulated Entity (Bank/NBFC) and the Loan Service Provider (App), ensuring clear roles on data handling and recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Data Localization & Privacy</h3>
                      <p className="text-gray-700 mt-2">
                        We audit your app's data flow to ensure all customer data is stored on servers within India and that you are not collecting excessive permissions (like contact list access), which is now banned.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Key Fact Statement (KFS)</h3>
                      <p className="text-gray-700 mt-2">
                        We review your user interface (UI) to ensure the Key Fact Statement is displayed prominently to the borrower before loan execution, including the all-inclusive APR.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Karnataka
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For those who want to lend from their own balance sheet, an NBFC license is mandatory. The application is processed by the <strong>RBI Regional Office on Nrupathunga Road, Bengaluru</strong>.
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
                          - <strong>Director Vetting:</strong> RBI requires "Fit and Proper" criteria.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Register with ROC Bengaluru.<br/>
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
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">4. RBI Application</td>
                        <td className="p-4 border-b text-gray-700">
                          - File online on <strong>COSMOS</strong> portal.<br/>
                          - Submit physical dossier to <strong>RBI Bengaluru</strong>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Karnataka Money Lenders & 'Meter Baddi' Act
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Karnataka has some of the strictest anti-usury laws in India. The <strong>Karnataka Prohibition of Charging Exorbitant Interest Act, 2004</strong> (locally known as the Anti-Meter Baddi Act) empowers police to arrest lenders charging interest above the state-fixed cap.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">How to Stay Safe?</h3>
                  <p className="text-gray-700 mb-4">
                    1. <strong>Get Licensed:</strong> Obtain a Money Lenders License from the Registrar of Cooperative Societies.<br/>
                    2. <strong>Cap Interest Rates:</strong> Strictly adhere to the maximum interest rate notification issued by the Karnataka Government (currently around 14-16% for secured loans, subject to change).<br/>
                    3. <strong>Documentation:</strong> Maintain the 'Register of Accounts' and issue receipts for every payment.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    *We assist in obtaining the Money Lenders License and defending against false harassment complaints.
                  </p>
                </div>
              </section>

              {/* Corporate Debt */}
              <section id="corporate-debt" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Corporate Debt & NCLT Litigation
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For recovering dues from companies, the <strong>National Company Law Tribunal (NCLT) Bengaluru Bench</strong> is the venue.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>IBC Section 7 & 9:</strong> We file insolvency petitions for Financial Creditors (Banks/NBFCs) and Operational Creditors (Suppliers/Vendors) to initiate CIRP against defaulting companies.
                  </li>
                  <li>
                    <strong>Mergers & Acquisitions:</strong> We advise on the acquisition of distressed assets and companies through the NCLT process.
                  </li>
                </ul>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation & SARFAESI
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Bengaluru has two DRT benches (DRT-1 and DRT-2). We handle high-stakes recovery matters here.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">SARFAESI Action</h3>
                    <p className="text-gray-700">
                      We handle the complete process: 13(2) Notice -&gt; 13(4) Possession -&gt; CMM/DM Application for physical possession. In Bengaluru Urban, getting the CMM order for physical possession is a critical step we specialize in.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Cheque Bounce (NI Act)</h3>
                    <p className="text-gray-700">
                      Bengaluru courts are flooded with Section 138 cases. We have a specialized team to fast-track these complaints in the ACMM courts (Nrupathunga Road and Mayohall).
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
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For Fintech/NBFC</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Certificate of Incorporation</li>
                      <li>• MoA & AoA (Financial Objects)</li>
                      <li>• RBI Registration Certificate</li>
                      <li>• Board Resolutions for Lending Policy</li>
                      <li>• Digital Lending App Audit Report</li>
                      <li>• Fair Practices Code</li>
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
                  What Our Clients in Karnataka Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "As a Fintech startup in Indiranagar, we needed help with RBI's Digital Lending Guidelines. AMA Legal Solutions audited our entire app flow and user agreements. Highly recommended for tech-savvy legal advice."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Anand Rao</p>
                        <p className="text-sm text-gray-500">Co-founder, QuickCash Tech</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They helped us register our NBFC-MFI in record time. The team in Bengaluru is very knowledgeable about the local money lending compliances and RBI nodal officer interactions."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">D</div>
                      <div>
                        <p className="font-bold text-gray-900">Deepa Reddy</p>
                        <p className="text-sm text-gray-500">Director, Gramina Vikas Finance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We engaged them for a complex SARFAESI matter involving industrial land in Peenya. They handled the CMM application and physical possession seamlessly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Srinivas Gowda</p>
                        <p className="text-sm text-gray-500">Authorized Officer, City Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Best legal firm for Nidhi Company registration in Mysore. They guided us on the NDH-4 filing and membership norms clearly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Kiran Kumar</p>
                        <p className="text-sm text-gray-500">Promoter, Mysore Wealth Nidhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Karnataka's Trusted Banking Lawyers
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="font-bold text-xl mb-2">Fintech Experts</h3>
                    <p className="text-gray-600">Deep expertise in RBI's Digital Lending Guidelines and tech-contract structuring.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Power</h3>
                    <p className="text-gray-600">Presence in DRT Bengaluru, NCLT Bengaluru, and High Court of Karnataka.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">🏦</div>
                    <h3 className="font-bold text-xl mb-2">RBI Liaison</h3>
                    <p className="text-gray-600">Smooth handling of applications with RBI Regional Office, Bengaluru.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Karnataka
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
                  Speak to our senior banking lawyers in Bengaluru today.
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

export default KarnatakaBankingClient;

