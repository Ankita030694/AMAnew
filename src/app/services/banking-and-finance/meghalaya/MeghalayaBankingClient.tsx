"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const MeghalayaBankingClient = () => {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "land-transfer-act", title: "Land Transfer Act & Banking" },
    { id: "matrilineal-banking", title: "The Matrilineal Advantage" },
    { id: "focus-scheme", title: "FOCUS & Agriculture Finance" },
    { id: "tourism-finance", title: "Tourism & Homestay Loans" },
    { id: "industrial-finance", title: "Industrial Estates (MIDC)" },
    { id: "green-finance", title: "Green Finance & Carbon Credits" },
    { id: "nbfc-cooperative", title: "NBFC & Cooperative Societies" },
    { id: "drt-guwahati", title: "DRT Litigation Services" },
    { id: "sarfaesi-enforcement", title: "SARFAESI Enforcement" },
    { id: "prime-meghalaya", title: "PRIME Entrepreneurship" },
    { id: "border-haats", title: "Banking in Border Haats" },
    { id: "documentation", title: "Documentation Checklist" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
    { label: "Meghalaya", href: "/services/banking-and-finance/meghalaya" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#1a202c] text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
            Banking and Finance Legal Services in <span className="text-[#D2A02A]">Meghalaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Expert legal consultancy for the Abode of Clouds. Navigating Land Transfer Act hurdles, PRIME Meghalaya funding, and DRT Litigation in Guwahati.
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
                  Financial Legal Services in the Hills of Meghalaya
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Meghalaya, the "Abode of Clouds," offers a distinct banking environment shaped by its Sixth Schedule status, a unique matrilineal social structure, and the stringent <strong>Meghalaya Transfer of Land (Regulation) Act, 1971</strong>. While Shillong serves as the historic educational and banking capital for much of the North East, extending credit in the rural districts of Khasi, Jaintia, and Garo Hills requires navigating a labyrinth of customary laws and statutory regulations.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Recent years have seen a paradigm shift with government initiatives like <strong>PRIME Meghalaya</strong> (Promotion and Incubation of Market-driven Enterprises) and the <strong>FOCUS</strong> scheme for farmers injecting significant liquidity into the rural economy. However, for banks, NBFCs, and private investors, the core challenge remains: how to secure loans with enforceable collateral when land transfer to non-tribals is prohibited.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  At <strong>AMA Legal Solutions</strong>, we bridge the gap between formal banking requirements and local customary laws. Whether you are a hotelier in Cherrapunji seeking project finance, a startup in Tura looking for venture capital, or a bank looking to enforce a mortgage in Jowai, our legal expertise ensures your financial interests are protected and your compliance is absolute.
                </p>
              </section>

              {/* Land Transfer Act */}
              <section id="land-transfer-act" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Land Transfer Act & Banking
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Meghalaya Transfer of Land (Regulation) Act, 1971</strong> is the single biggest legal determinant in the state's finance sector. It was enacted to protect the interests of the Scheduled Tribes by prohibiting the transfer of land to non-tribals.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">The Core Restriction</h3>
                  <p className="text-red-800">
                    Section 3 of the Act prohibits the transfer of land by a tribal to a non-tribal or by a non-tribal to another non-tribal without the permission of the Competent Authority. Since most commercial banks and financial institutions are legally "non-tribal" entities, they cannot automatically acquire the mortgaged land in the event of a default. This renders the mortgage "imperfect" in the eyes of traditional banking risk assessment.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Legal Workarounds & Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Despite these restrictions, banking flourishes in Meghalaya. We assist clients in structuring compliant security mechanisms:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Permission from Competent Authority:</strong> For high-value loans, we assist in obtaining specific permission from the Revenue Department or the District Council to mortgage the land to the bank. This permission usually includes a clause that in case of default, the land can be sold only to another eligible tribal.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Government Guarantees:</strong> For industrial projects promoted by the state, we assist borrowers in applying for state government guarantees, which provide banks with the necessary comfort to lend without traditional land collateral.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">✔</span>
                      <span>
                        <strong>Third-Party Tribal Guarantees:</strong> We structure loans where a prominent local tribal entity or individual acts as a guarantor, pledging their assets which can be legally attached and sold within the community.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Matrilineal Banking */}
              <section id="matrilineal-banking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Matrilineal Advantage in Microfinance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Meghalaya is famous for its matrilineal system, where lineage and inheritance are traced through women. The youngest daughter (Khatduh) is the custodian of ancestral property. This social structure has profound implications for banking, particularly in <strong>Microfinance</strong> and <strong>SHG (Self Help Group)</strong> lending.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Women in Meghalaya are economically active and often control household finances. This makes the state an ideal market for microfinance institutions (MFIs) that primarily target women borrowers. The repayment rates among women-led SHGs in Meghalaya are among the highest in the country.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Legal Nuance:</strong> While women own the land, men often manage the business. Banks need to ensure that the loan documentation includes both the land-owning female (as mortgagor/guarantor) and the business-managing male (as co-borrower) to prevent future disputes regarding liability. We specialize in drafting these dual-liability loan agreements.
                </p>
              </section>

              {/* FOCUS Scheme */}
              <section id="focus-scheme" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  FOCUS & Agriculture Finance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>FOCUS (Farmers' Collectivization for Upscaling of Production and Marketing Systems)</strong> scheme is a flagship initiative of the Meghalaya government. It provides interest-free loans to <strong>Producer Groups (PGs)</strong> to boost agriculture and value addition.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Our Role in FOCUS Implementation</h3>
                  <p className="text-gray-700">
                    We assist Farmer Producer Organizations (FPOs) and Producer Groups in:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-green-800">
                    <li><strong>Entity Formation:</strong> Registering the group as a Cooperative Society or a Section 8 Company to become a legal entity eligible for government funds.</li>
                    <li><strong>Bank Account Opening:</strong> Navigating the KYC norms for group accounts, which requires resolution from all members.</li>
                    <li><strong>Compliance:</strong> Ensuring that the utilization of funds matches the scheme guidelines (e.g., buying machinery, seeds) to avoid penalties or clawback of the grant.</li>
                  </ul>
                </div>
              </section>

              {/* Tourism Finance */}
              <section id="tourism-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tourism & Homestay Loans
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  With Meghalaya becoming a top tourist destination, financing for eco-resorts, homestays, and adventure parks is in high demand. The <strong>PMEGP (Prime Minister's Employment Generation Programme)</strong> is widely used for this sector.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">PMEGP for Tourism</h3>
                  <p className="text-yellow-800">
                    Loans up to ₹25 Lakhs (Service Sector) are available under PMEGP with a subsidy ranging from 15% to 35%. The critical document for bank sanction is the <strong>No Objection Certificate (NOC)</strong> from the local <strong>Rangbah Shnong</strong> (Village Headman) and registration with the Meghalaya Tourism Department. We facilitate the issuance of these local clearances and prepare the project report.
                  </p>
                </div>
              </section>

              {/* Industrial Finance */}
              <section id="industrial-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Estates (MIDC)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For larger industries (cement, ferro-alloys, bottling plants), the <strong>Meghalaya Industrial Development Corporation (MIDC)</strong> plays a vital role. Industrial activity is concentrated in the Byrnihat and Umiam industrial estates.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Units in these estates usually operate on leasehold land provided by MIDC. Financing these units involves a <strong>Leasehold Mortgage</strong>. We specialize in drafting and registering these mortgage deeds, ensuring that the bank's charge is properly noted by MIDC and the Revenue Authority, allowing for secure lending against industrial assets.
                </p>
              </section>

              {/* Green Finance */}
              <section id="green-finance" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Green Finance & Carbon Credits
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Meghalaya is a pioneer in "Green Finance." The government is actively exploring <strong>Payment for Ecosystem Services (PES)</strong>, where communities are paid to preserve forests.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We advise community forests and NGOs on:
                  <br />• <strong>Carbon Credit Verification:</strong> structuring agreements with verifying agencies.
                  <br />• <strong>Green Bonds:</strong> Advising potential issuers on SEBI regulations for Green Bonds.
                  <br />• <strong>Eco-Tourism Financing:</strong> Securing loans specifically earmarked for sustainable, zero-waste tourism projects.
                </p>
              </section>

              {/* NBFC & Cooperative */}
              <section id="nbfc-cooperative" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  NBFC & Cooperative Societies
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The <strong>Meghalaya Co-operative Apex Bank (MCAB)</strong> is a lifeline for rural credit, reaching areas where commercial banks are absent. We assist new cooperative societies in registration under the <strong>Meghalaya Cooperative Societies Act</strong> and in establishing credit linkages.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  For private players, registering an NBFC or Microfinance institution in Shillong requires RBI approval (Guwahati jurisdiction). The RBI is particularly strict about the "Fit and Proper" criteria for directors in the North East. We guide clients through the application process, Net Owned Fund (NOF) verification, and compliance with Fair Practices Codes.
                </p>
              </section>

              {/* DRT Guwahati */}
              <section id="drt-guwahati" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  DRT Litigation Services
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Meghalaya falls under the jurisdiction of <strong>DRT Guwahati</strong>. All recovery suits for debts above ₹20 Lakhs must be filed there.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Strategic Representation</h3>
                  <p className="text-gray-700">
                    Litigation here often involves a conflict between the SARFAESI Act (a central law) and local land laws (state/district council laws). Our lawyers are experts in arguing these constitutional points to protect our clients' interests.
                    <br /><br />
                    For banks, we ensure that the recovery application accounts for the specific restrictions on asset sale. For borrowers, we file Securitization Applications (SA) to challenge procedural lapses in the bank's recovery notice, often securing stay orders to allow time for debt restructuring.
                  </p>
                </div>
              </section>

              {/* SARFAESI Enforcement */}
              <section id="sarfaesi-enforcement" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SARFAESI Enforcement
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  While the SARFAESI Act is applicable, taking physical possession of assets in Meghalaya is practically challenging. The District Magistrate (DM) often delays Section 14 orders due to fear of law and order issues or community backlash.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Our Approach:</strong> We work closely with the DM's office and local police stations to execute possession orders peacefully. We often facilitate a negotiated settlement (One Time Settlement) between the bank and the borrower before forceful eviction becomes necessary, preserving the social standing of the borrower while ensuring the bank's recovery.
                </p>
              </section>

              {/* PRIME Meghalaya */}
              <section id="prime-meghalaya" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  PRIME Meghalaya
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  PRIME is the hub for startup funding in the state. While not a bank, it provides grants (Kickstart Grant, Scale-up Grant) that make a project bankable for further credit.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We help startups with:
                  <br />• <strong>Legal Entity Incorporation:</strong> Advising on the choice between LLP and Pvt Ltd for scalability.
                  <br />• <strong>Compliance:</strong> Handling IPR registration (Trademarks for unique Meghalaya products like Lakadong Turmeric) and contract drafting.
                  <br />• <strong>Pitch Deck Legal Verification:</strong> Ensuring financial projections and claims made to investors are legally sound and verifiable.
                </p>
              </section>

              {/* Border Haats */}
              <section id="border-haats" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Banking in Border Haats
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Meghalaya shares a long border with Bangladesh, dotted with "Border Haats" (markets) like Kalaichar and Balat.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Trade in these haats is regulated and often involves specific currency exchange mechanisms. We advise traders on the legal limits of cash carriage, compliance with customs regulations for local produce, and dispute resolution in cross-border transactions.
                </p>
              </section>

              {/* Documentation */}
              <section id="documentation" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation Checklist
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">For Loans in Meghalaya</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Scheduled Tribe (ST) Certificate</li>
                      <li>• NOC from Rangbah Shnong / Nokma</li>
                      <li>• Land Documents (Pattas / Lease Deed)</li>
                      <li>• Trading License (District Council)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Detailed Project Report (DPR)</li>
                      <li>• Registration with Tourism Dept (for hotels)</li>
                      <li>• Pollution Control Board NOC</li>
                      <li>• KYC Documents (Voter ID, Aadhar)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section id="testimonials" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Client Reviews from Meghalaya
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "I run a homestay in Cherrapunji. Getting a bank loan was tough because of land papers. AMA Legal Solutions helped me get the Headman's NOC and the PMEGP subsidy documentation in order."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">B</div>
                      <div>
                        <p className="font-bold text-gray-900">Banrishisha L.</p>
                        <p className="text-sm text-gray-500">Homestay Owner, Cherrapunji</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We needed working capital for our cement plant in Byrnihat. They handled the leasehold mortgage documentation with MIDC and the bank consortium professionally."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">R</div>
                      <div>
                        <p className="font-bold text-gray-900">Rahul Jain</p>
                        <p className="text-sm text-gray-500">Industrialist, Byrnihat</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "Our Cooperative Society needed guidance on the FOCUS scheme. They helped us draft our bylaws, register the society, and open the group account."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">W</div>
                      <div>
                        <p className="font-bold text-gray-900">Wansuk M.</p>
                        <p className="text-sm text-gray-500">Secretary, Farmers Group</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-6 relative z-10">
                      "We faced a SARFAESI notice on our commercial complex. Their legal team in Guwahati DRT fought for us, arguing the land transfer act points, and got a settlement approved."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">J</div>
                      <div>
                        <p className="font-bold text-gray-900">James K.</p>
                        <p className="text-sm text-gray-500">Businessman, Shillong</p>
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
                    Secure Your Business in Meghalaya
                  </h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    From the markets of Police Bazar to the industrial zones of Ri-Bhoi, we provide the legal expertise you need to grow.
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
                    100% Confidential • Expert Legal Advice • Serving Shillong & Tura
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
                  Get professional legal advice for your financial business in Meghalaya.
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

export default MeghalayaBankingClient;
