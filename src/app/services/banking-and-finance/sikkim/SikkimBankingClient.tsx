"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const SikkimBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "banking-landscape", title: "Banking Landscape: Pharma & Tourism" },
    { id: "special-status", title: "Article 371F & Land Laws" },
    { id: "nbfc-registration", title: "Detailed NBFC Registration Guide" },
    { id: "industrial-finance", title: "Industrial Project Finance" },
    { id: "nidhi-company", title: "Nidhi Company Registration" },
    { id: "money-lending", title: "Money Lenders License" },
    { id: "drt-litigation", title: "DRT & Debt Recovery" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Sikkim", href: "/services/banking-and-finance/sikkim" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
       
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Sikkim</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premier legal consultancy for Gangtok and Rangpo. From Industrial Project Finance in tax-free zones to navigating Article 371F restrictions in Banking & Recovery.
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
                  Banking in the Himalayan Commercial Hub
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Sikkim is a unique financial market. As India's first organic state and a pharmaceutical hub, it attracts significant industrial investment. However, its special constitutional status under <strong>Article 371F</strong> creates a distinct legal environment for banking and finance.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The most critical challenge for lenders is the restriction on land ownership. Non-Sikkimese entities (including most banks) cannot own land, making mortgage enforcement via SARFAESI complex. Lenders must rely on leasehold rights and personal guarantees.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we specialize in these Himalayan legal nuances. We assist banks, NBFCs, and industrial borrowers in structuring deals that are compliant with both Central Banking Laws and Sikkim's Old Laws.
                </p>
              </section>

              {/* Banking Landscape */}
              <section id="banking-landscape" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Banking Landscape: Pharma, Tourism & Hydro
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Sikkim's economy is driven by three pillars, each needing specialized finance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Pharmaceuticals</h3>
                    <p className="text-gray-700">
                      The industrial belt in Rangpo and Singtam hosts major pharma giants. They require large working capital limits and term loans. We handle the "Lease Deed" based mortgage documentation, which is the standard here.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Eco-Tourism</h3>
                    <p className="text-gray-700">
                      Hotels and homestays in North and West Sikkim need project finance. Since land title is often with local tribals (Bhutia/Lepcha), we structure loans using "Revenue Sharing Agreements" or "Management Contracts" as security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Special Status */}
              <section id="special-status" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Article 371F & Land Law Restrictions
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>The Challenge:</strong> Under Sikkim's old laws protected by the Constitution, land can only be transferred between Sikkimese subjects. A bank (non-Sikkimese entity) cannot buy the land in an auction if a borrower defaults.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Our Legal Solution</h4>
                  <p className="text-yellow-800 text-sm">
                    We structure the "Enforcement of Security" such that in case of default, the property is sold ONLY to another eligible Sikkimese subject. We draft specific clauses in the loan agreement acknowledging this restriction to prevent future legal deadlocks.
                  </p>
                </div>
              </section>

              {/* NBFC Registration Guide */}
              <section id="nbfc-registration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Detailed Guide to NBFC Registration in Sikkim
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  NBFCs play a crucial role in bridging the credit gap in remote areas. The registration is with the RBI (Kolkata/Guwahati Office).
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
                          - <strong>Name Availability:</strong> Ensure name contains "Finance".<br/>
                          - <strong>Director Vetting:</strong> RBI "Fit and Proper" check.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-semibold text-[#D2A02A]">2. Incorporation</td>
                        <td className="p-4 border-b text-gray-700">
                          - Register with ROC (Sikkim comes under ROC Kolkata jurisdiction usually, but local filings required).<br/>
                          - <strong>MoA Drafting:</strong> Financial objects clause.
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
                          - Submit physical dossier to <strong>RBI</strong>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Project Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  We assist in financing large projects in Sikkim, including Hydro Power and Pharmaceuticals.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                  <li>
                    <strong>Leasehold Mortgage:</strong> Since industries operate on leased government land, we draft "Mortgage of Leasehold Rights" and get it registered with the Sub-Registrar in Gangtok.
                  </li>
                  <li>
                    <strong>Tripartite Agreements:</strong> Agreements between the Borrower (Industry), Lender (Bank), and the Government (Lessor) to ensure the lender's rights are protected if the lease is cancelled.
                  </li>
                </ul>
              </section>

              {/* Nidhi Company */}
              <section id="nidhi-company" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nidhi Company: Local Savings
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For local communities in East and South Sikkim, Nidhi Companies are popular for savings and gold loans.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Compliance Essentials</h3>
                  <p className="text-gray-700 mb-4">
                    1. <strong>Members Only:</strong> Deal only with shareholders.<br/>
                    2. <strong>NDH-4 Filing:</strong> Mandatory for Nidhi status.<br/>
                    3. <strong>Gold Loans:</strong> Secure lending against jewelry is the safest model here.
                  </p>
                </div>
              </section>

              {/* Money Lending */}
              <section id="money-lending" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sikkim Money Lenders Licensing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Private lending without a license is illegal.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Services</h3>
                  <p className="text-gray-700 mb-4">
                    We assist in obtaining the Money Lender License from the District Collector's office, ensuring you can legally recover your principal and interest.
                  </p>
                </div>
              </section>

              {/* DRT Litigation */}
              <section id="drt-litigation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT & Debt Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Recovery cases for Sikkim are typically heard at the <strong>DRT Guwahati</strong>.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">SARFAESI in Sikkim</h3>
                    <p className="text-gray-700">
                      While SARFAESI applies, the <strong>sale of assets</strong> is restricted to Sikkimese subjects. We manage this delicate process of finding eligible buyers to ensure successful auction and recovery.
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
                      <li>• MoA & AoA</li>
                      <li>• Trade License (Sikkim specific)</li>
                      <li>• CIBIL Reports</li>
                      <li>• Police Clearance</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#D2A02A] mb-4">For Recovery</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Loan Agreement (Sikkim Law compliant)</li>
                      <li>• Lease Deeds (for industry)</li>
                      <li>• Demand Promissory Note</li>
                      <li>• Statement of Account</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What Our Clients in Sikkim Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed legal help for our pharmaceutical unit in Rangpo regarding project finance. AMA Legal Solutions understood the special status of Sikkim and structured the deal perfectly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900">Karma Bhutia</p>
                        <p className="text-sm text-gray-500">Director, Himalayan Pharma</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Setting up a Nidhi Company in Gangtok was smooth with their guidance. They helped us comply with the Nidhi Rules and local trade license requirements."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">T</div>
                      <div>
                        <p className="font-bold text-gray-900">Tenzing Dorjee</p>
                        <p className="text-sm text-gray-500">Promoter, Gangtok Savings Nidhi</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We hired them for a recovery suit. Since DRT jurisdiction for Sikkim is in Guwahati, we needed a firm with reach. They handled the case very professionally."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                      <div>
                        <p className="font-bold text-gray-900">Sandeep Sharma</p>
                        <p className="text-sm text-gray-500">Manager, Pvt Sector Bank</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Great advice on money lending laws in Sikkim. They helped us get the necessary licenses and drafted compliant loan agreements."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                      <div>
                        <p className="font-bold text-gray-900">Pema Lepcha</p>
                        <p className="text-sm text-gray-500">Investor, Namchi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We Are Sikkim's Trusted Banking Lawyers
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⛰️</div>
                    <h3 className="font-bold text-xl mb-2">Article 371F Experts</h3>
                    <p className="text-gray-600">Deep understanding of land transfer restrictions for non-Sikkimese entities.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-xl mb-2">Litigation Network</h3>
                    <p className="text-gray-600">Representation in DRT Guwahati and Sikkim High Court.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                    <div className="text-4xl mb-4">💊</div>
                    <h3 className="font-bold text-xl mb-2">Industrial Finance</h3>
                    <p className="text-gray-600">Specialized in Pharma and Hydro project finance documentation.</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Secure Your Financial Future in Sikkim
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
                  Speak to our senior banking lawyers in Gangtok today.
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

export default SikkimBankingClient;

