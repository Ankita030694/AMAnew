"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const GujaratBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Gujarat's Financial Landscape" },
    { id: "gift-city", title: "GIFT City & IFSC" },
    { id: "regulatory-compliance", title: "Regulatory Compliance" },
    { id: "nbfc-registration", title: "NBFC Registration in Ahmedabad" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "money-lending", title: "Gujarat Money Lenders Act" },
    { id: "industrial-finance", title: "Industrial Finance & MSMEs" },
    { id: "drt-ahmedabad", title: "DRT Ahmedabad & Recovery" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Gujarat", href: "/services/banking-and-finance/gujarat" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Background image removed as requested */}
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Gujarat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal consultancy for the Growth Engine of India. From GIFT City IFSC setups to NBFC Registration in Ahmedabad and Industrial Finance in Surat.
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
                  Fueling the Enterprise Capital of India
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gujarat is synonymous with business. With its vast coastline, industrial corridors, and the ambitious GIFT City project, the state is at the forefront of India's financial evolution. The demand for credit here is driven by a unique mix of large-scale heavy industries, a vibrant MSME sector (Textiles, Diamonds, Chemicals), and a deeply ingrained culture of entrepreneurship.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, navigating the financial regulations in Gujarat requires specialized knowledge. The state has its own specific laws like the <strong>Gujarat Money Lenders Act, 2011</strong>, and strict enforcement of the <strong>PASA Act</strong> against defaulting borrowers in certain cases. Furthermore, the emergence of the International Financial Services Centre (IFSC) at GIFT City has introduced a new layer of global banking regulations.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we serve as the legal backbone for financial institutions and businesses across Gujarat. Whether you are an NBFC looking to set up in Ahmedabad, a Fintech startup eyeing GIFT City, or a manufacturer in Vadodara seeking industrial subsidies, our team provides end-to-end legal compliance and litigation support.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Financial Landscape of Gujarat
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gujarat's banking sector is characterized by a high Credit-Deposit (CD) ratio and a dense network of cooperative banks.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Cooperative Movement</h3>
                    <p className="text-gray-700">
                      Gujarat is the cradle of the cooperative movement. Urban Cooperative Banks (UCBs) like Kalupur Bank and Rajkot Nagarik Sahakari Bank are major players. We assist these banks in regulatory compliance with RBI's new tighter norms for UCBs.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">MSME & Trade Finance</h3>
                    <p className="text-gray-700">
                      In hubs like Surat, Rajkot, and Morbi, "Bill Discounting" and "Letter of Credit" (LC) transactions are the lifeblood of trade. Legal disputes over dishonored bills and LC frauds are common, requiring swift legal intervention.
                    </p>
                  </div>
                </div>
              </section>

              {/* GIFT City */}
              <section id="gift-city" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  GIFT City: India's Global Financial Hub
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Located between Ahmedabad and Gandhinagar, <strong>GIFT City (Gujarat International Finance Tec-City)</strong> is India's first operational Smart City and International Financial Services Centre (IFSC).
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Setting Up in IFSC</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>IFSCA Approval:</strong> The unified regulator is the International Financial Services Centres Authority (IFSCA). We assist in obtaining the unified license for Banking Units (IBUs), Finance Companies, and Fintech entities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Tax Benefits:</strong> Entities in IFSC enjoy a 10-year tax holiday. We help structure your business to ensure you meet the "substance" requirements to claim these benefits legally.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Global Compliance:</strong> Operations here deal in foreign currency. Compliance with global AML/CFT standards and FATCA is mandatory.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Regulatory Compliance */}
              <section id="regulatory-compliance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance in Gujarat
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For domestic finance businesses (Non-IFSC), the regulatory framework is governed by:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>RBI Ahmedabad:</strong> The Regional Office near Income Tax Circle handles all NBFC and MFI registrations for Gujarat, Daman & Diu, and Dadra & Nagar Haveli.</li>
                  <li><strong>RoC Ahmedabad:</strong> Handles corporate filings. Gujarat has a very active corporate sector, so timely filing of annual returns is critical.</li>
                  <li><strong>Registrar of Money Lenders:</strong> District-level authorities that grant licenses for private lending.</li>
                </ul>
              </section>

              {/* NBFC Registration */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC Registration Process in Ahmedabad
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Registering an NBFC in Gujarat is a rigorous process. The RBI Ahmedabad office is known for its strict scrutiny of the "Source of Funds".
                </p>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-gray-900 border-b">Stage</th>
                        <th className="p-4 font-bold text-gray-900 border-b">Critical Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">1. Pre-Filing</td>
                        <td className="p-4 border-b text-gray-700">
                          Incorporate a Company with ₹2 Crore NOF. Ensure directors have a clean track record (no willful defaults).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. COSMOS Filing</td>
                        <td className="p-4 border-b text-gray-700">
                          Submit application online. Upload CIBIL reports, Experience Certificates in Finance (Banking background is a plus).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">3. Physical Dossier</td>
                        <td className="p-4 border-b text-gray-700">
                          Submit the hard copy to <strong>DNBS, RBI Ahmedabad</strong>. This must include the Banker's Report and Statutory Auditors Certificate.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#D2A02A]">4. Clarifications</td>
                        <td className="p-4 text-gray-700">
                          RBI will raise queries regarding the business model and beneficiary ownership. We draft legal responses to satisfy these queries.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Companies in Gujarat
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Nidhi Companies are popular in Saurashtra (Rajkot, Jamnagar) for community lending within specific business communities (e.g., diamond traders, textile merchants).
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Gold Loans</h3>
                    <p className="text-gray-700">
                      Gold loans are the safest product for Nidhis. We help draft loan agreements that comply with Nidhi Rules regarding loan-to-value (LTV) ratios and interest caps.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">NDH-4 Filing</h3>
                    <p className="text-gray-700">
                      Getting "Nidhi Status" from the Central Govt is now mandatory. We conduct a pre-filing audit to ensure you meet the 200-member and 1:20 deposit ratio criteria before filing form NDH-4.
                    </p>
                  </div>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gujarat Money Lenders Act, 2011
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gujarat has cracked down heavily on illegal money lending ("Vyaaj Khori"). The <strong>Gujarat Money Lenders Act, 2011</strong> requires every lender to be licensed.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Legal Consequences</h3>
                  <p className="text-yellow-800">
                    Lending without a license is a non-bailable offense. Police can file FIRs under the Act and also invoke the PASA Act (Prevention of Anti-Social Activities) to detain repeat offenders. Borrowers are not legally liable to repay illegal lenders.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Service:</strong> We assist legitimate financiers in obtaining the Money Lenders License from the local Registrar (Mamlatdar office), ensuring they maintain statutory registers (Form 4, Form 7) to keep their business 100% legal.
                </p>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Finance & MSME Subsidies
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Gujarat Industrial Policy 2020</strong> is one of the most investor-friendly policies in India.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li><strong>Capital Subsidy:</strong> Up to 25% for MSMEs.</li>
                  <li><strong>Interest Subsidy:</strong> Up to 7% for 5-7 years.</li>
                  <li><strong>Technology Acquisition:</strong> Assistance for buying patents/technology.</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  We help industries in GIDC zones (Sanand, Dahej, Ankleshwar) structure their term loans to be eligible for these subsidies and handle the legal liaison with the District Industries Centre (DIC).
                </p>
              </section>

              {/* DRT Ahmedabad */}
              <section id="drt-ahmedabad" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Ahmedabad & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gujarat has two Debt Recovery Tribunals (DRT-I and DRT-II) in Ahmedabad. They handle a high volume of commercial disputes.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">For Banks (SARFAESI)</h3>
                    <p className="text-gray-700">
                      We specialize in taking physical possession of industrial units and commercial properties under the SARFAESI Act. We coordinate with the Chief Metropolitan Magistrate (CMM) in Ahmedabad and DMs in other districts.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Commercial Arbitration</h3>
                    <p className="text-gray-700">
                      For disputes involving MSMEs, we also use the MSME Samadhaan council for faster recovery of delayed payments, which is often faster than civil suits.
                    </p>
                  </div>
                </div>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For NBFC/Money Lender Registration</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Directors' KYC (PAN, Aadhar)</li>
                      <li>• Net Worth Certificate (from CA)</li>
                      <li>• Clean Police Record (No criminal cases)</li>
                      <li>• Office Proof (Gumastha Dhara / Shop Act)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Bank FD Receipt (for NOF)</li>
                      <li>• Education Certificates</li>
                      <li>• CIBIL Reports (Score > 750)</li>
                      <li>• Business Plan / Projected Financials</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Gujarat
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Registering an NBFC in Ahmedabad is tough, but AMA Legal Solutions made it smooth. They handled the RBI queries regarding our capital source professionally. Highly recommended."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                      <div>
                        <p className="font-bold text-gray-900">Patel Brothers</p>
                        <p className="text-sm text-gray-500">Directors, PB Finvest, Rajkot</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We wanted to set up a unit in GIFT City. Their team guided us through the IFSCA regulations and tax benefits. They are true experts in corporate finance law."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900">Ankit Shah</p>
                        <p className="text-sm text-gray-500">CEO, FinTech Solutions, Gandhinagar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "The Money Lenders License process was confusing until we met them. They sorted our paperwork and got the license from the Mamlatdar office in Surat quickly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                      <div>
                        <p className="font-bold text-gray-900">Vijay Desai</p>
                        <p className="text-sm text-gray-500">Proprietor, Desai Finance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "They handled our SARFAESI case in DRT Ahmedabad efficiently. We recovered possession of a factory in Sanand GIDC within 6 months."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">M</div>
                      <div>
                        <p className="font-bold text-gray-900">Mehul Jhaveri</p>
                        <p className="text-sm text-gray-500">Authorized Officer, Cooperative Bank</p>
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
                    Accelerate Your Financial Business in Gujarat
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Partner with the legal experts who understand the pulse of Gujarat's economy. From GIFT City to GIDC, we cover it all.
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
                    100% Confidential • Experienced Legal Team • Pan-Gujarat Service
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
                  Finance Law Experts
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get professional legal advice for your financial business in Gujarat.
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

export default GujaratBankingClient;

