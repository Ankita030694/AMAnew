"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banking and Finance",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Uttarakhand",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/uttarakhand",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Uttarakhand: Financing the Devbhoomi",
  description:
    "Expert legal consultancy for banking and finance services in Uttarakhand. Assistance with NBFC registration in Dehradun, tourism finance, and hydropower project lending.",
  image: "https://www.amalegalsolutions.com/services/banking-finance-uttarakhand.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Uttarakhand",
  image: "https://www.amalegalsolutions.com/services/banking-finance-uttarakhand.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Dehradun, Haridwar, and across Uttarakhand.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "890",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rajesh Rawat",
      },
      reviewBody:
        "AMA Legal Solutions helped us secure project finance for our boutique resort near Rishikesh. Their understanding of tourism-specific loan products and land laws in the hills is exceptional.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Deepak Sharma",
      },
      reviewBody:
        "We needed assistance with NBFC registration in Dehradun. The team at AMA Legal guided us through the entire RBI process smoothly and efficiently.",
    },
  ],
};

export default function UttarakhandBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "uttarakhand-advantage", title: "The Uttarakhand Advantage" },
    { id: "dehradun-hub", title: "Dehradun: The Financial Capital" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "tourism-finance", title: "Tourism & Pilgrimage Finance" },
    { id: "hydropower-finance", title: "Hydropower & Renewable Energy" },
    { id: "regulatory-framework", title: "Regulatory Framework" },
    { id: "compliance-checklist", title: "Compliance Checklist" },
    { id: "challenges-solutions", title: "Challenges & Solutions" },
    { id: "why-choose-us", title: "Why Choose AMA Legal" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking and Finance", href: "/services/banking-and-finance" },
    { label: "Uttarakhand", href: "/services/banking-and-finance/uttarakhand" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Uttarakhand
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Financing the Devbhoomi. From Hydropower Projects in the Himalayas to Wellness Resorts in Rishikesh, we are your trusted legal partners.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
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
                    Uttarakhand, known as "Devbhoomi" (Land of Gods), is experiencing a unique economic trajectory driven by religious tourism, hydropower generation, and a booming pharmaceutical industry in the plains. Dehradun, the capital, serves as the administrative and financial hub, while industrial estates in Haridwar and Pantnagar are attracting significant investment. This growth has created a robust demand for specialized banking and financial services.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state's financial ecosystem is characterized by a mix of public sector banks catering to the remote hill districts and private lenders focusing on the industrial belts. Non-Banking Financial Companies (NBFCs) and Nidhi Companies play a crucial role in providing last-mile credit connectivity. However, the unique geography and ecological sensitivity of the region mean that financial operations often face distinct regulatory challenges, including environmental clearances for projects and specific land laws for mortgage creation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we offer specialized legal consultancy tailored to Uttarakhand's specific needs. Whether you are a hotelier looking for expansion finance for the Char Dham Yatra season, a developer seeking funding for a small hydro project, or an NBFC planning to set up in Dehradun, our team provides expert guidance to ensure your financial ventures are legally compliant and sustainable.
                  </p>
                </section>

                {/* Uttarakhand Advantage */}
                <section id="uttarakhand-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Uttarakhand Advantage: Nature & Industry
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttarakhand offers a unique blend of natural resources and industrial incentives, creating diverse opportunities for the financial sector.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Tourism & Wellness</h3>
                      <p className="text-gray-700">
                        The Char Dham Yatra and the rise of Rishikesh as the "Yoga Capital of the World" drive massive demand for hospitality finance.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Hydropower Potential</h3>
                      <p className="text-gray-700">
                        With abundant rivers, the state is a hub for hydropower projects, requiring long-term infrastructure financing.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Pharma Hub</h3>
                      <p className="text-gray-700">
                        Haridwar and Pantnagar host one of India's largest pharmaceutical clusters, creating demand for working capital and export credit.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Organic Agriculture</h3>
                      <p className="text-gray-700">
                        The push for organic farming in the hills is opening up new avenues for agri-finance and supply chain funding.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Dehradun Hub */}
                <section id="dehradun-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Dehradun: The Financial Capital
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Dehradun is the heart of Uttarakhand's administration and finance. It hosts the Regional Office of the Reserve Bank of India (RBI) and key state government departments.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial entities in Dehradun with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Regulatory Liaison:</strong> Facilitating smooth communication with RBI officials for approvals and filings.</li>
                    <li><strong>Corporate Setup:</strong> Legal support for establishing registered offices and navigating local municipal laws.</li>
                    <li><strong>Government Schemes:</strong> Advising on state-sponsored subsidy schemes for tourism and MSMEs.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The diverse economy of Uttarakhand drives demand for a wide range of financial services. We provide specialized legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs are vital for reaching remote hill villages. We handle registration and compliance with the RBI Regional Office in Dehradun.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Popular in small towns for promoting savings. We assist in incorporation and ensure adherence to the Nidhi Rules, 2014.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Finance</h3>
                      <p className="text-gray-700">
                        Structuring complex loan agreements for hydropower and renewable energy projects, ensuring bankability and risk mitigation.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">MSME Finance</h3>
                      <p className="text-gray-700">
                        Supporting the industrial units in Pantnagar and Haridwar with working capital and term loan documentation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Landscape */}
                <section id="nbfc-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration & Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Establishing an NBFC in Uttarakhand requires strict adherence to RBI norms. The RBI Regional Office in Dehradun oversees the jurisdiction for the state.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC (Kanpur/Dehradun jurisdiction). The MoA must clearly state financial activities as the main object.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Maintain a minimum NOF of ₹2 Crore (or ₹10 Crore as per latest norms) in a bank deposit.</li>
                      <li><strong>Director Due Diligence:</strong> Ensure directors meet the 'Fit and Proper' criteria, with clean CIBIL records.</li>
                      <li><strong>COSMOS Application:</strong> File the application online via the RBI's COSMOS portal, uploading all necessary documents.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy of the application to the DNBS at the RBI Regional Office in Dehradun.</li>
                      <li><strong>Query Resolution:</strong> Respond promptly to any queries raised by the RBI during the scrutiny process.</li>
                    </ol>
                  </div>
                </section>

                {/* Tourism Finance */}
                <section id="tourism-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tourism & Pilgrimage Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tourism is the backbone of the hill economy. Financing hotels, resorts, and homestays involves unique legal considerations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise lenders and borrowers on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Land Laws:</strong> Navigating the restrictions on land purchase by non-residents in Uttarakhand (Section 118 of the Land Reforms Act equivalent).</li>
                    <li><strong>Homestay Registration:</strong> Ensuring compliance with the state's Homestay Policy to avail subsidies and bank loans.</li>
                    <li><strong>Seasonal Cash Flows:</strong> Structuring loan repayments to align with the peak tourist seasons (May-June and Sept-Oct).</li>
                    <li><strong>Eco-Tourism Compliance:</strong> Ensuring projects meet environmental norms to avoid legal stays and funding blocks.</li>
                  </ul>
                </section>

                {/* Hydropower Finance */}
                <section id="hydropower-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Hydropower & Renewable Energy
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttarakhand is a powerhouse of renewable energy. Financing these projects requires specialized legal expertise.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Power Purchase Agreements (PPAs):</strong> Reviewing and negotiating PPAs with UJVNL or private off-takers.</li>
                    <li><strong>Environmental Clearances:</strong> Ensuring all MoEFCC clearances are in place, which is critical for financial closure.</li>
                    <li><strong>Local Area Development:</strong> Advising on CSR and local development fund obligations mandated for hydro projects.</li>
                    <li><strong>Due Diligence:</strong> Conducting thorough legal due diligence on project sites to avoid litigation related to land or water rights.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Operating in Uttarakhand means adhering to a multi-layered regulatory structure.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Dehradun Regional Office is the primary regulator for banking and non-banking financial activities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> Corporate compliance is overseen by the ROC (jurisdiction shared with UP/Kanpur for some aspects, but filings are online).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Uttarakhand Protection of Interests of Depositors (in Financial Establishments) Act is strictly enforced.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RERA Uttarakhand:</strong> For housing finance companies, compliance with RERA norms is essential for project approvals.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Compliance Checklist */}
                <section id="compliance-checklist" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Essential Compliance Checklist
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Ensure your financial entity in Uttarakhand stays compliant with this checklist:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed on time.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of NBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Strict adherence to KYC norms and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>State Act Compliance:</strong> Ensuring no violation of the Uttarakhand Protection of Interests of Depositors Act.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Fair Practices Code:</strong> Displaying the code in Hindi/English at all branches.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Grievance Redressal:</strong> Appointing a Nodal Officer and displaying their contact details.</li>
                    </ul>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Common Challenges & Our Solutions
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We help you overcome specific regional hurdles.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Hill Land Laws</h3>
                        <p className="text-gray-700">Strict regulations on land purchase by outsiders make mortgage creation difficult for banks.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on alternative collateral structures and ensure strict compliance with land ceiling acts to secure loans.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Environmental Clearances</h3>
                        <p className="text-gray-700">Projects often face delays due to stringent environmental norms in the Himalayas.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct proactive environmental due diligence and assist in obtaining necessary clearances to prevent funding stalls.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Remote Connectivity</h3>
                        <p className="text-gray-700">Physical verification of assets in remote hill villages can be challenging for lenders.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We coordinate with local legal associates for reliable field verification and due diligence reports.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Partner with AMA Legal Solutions?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine national expertise with local insights to deliver superior legal services.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Regional Insight</h3>
                      <p className="text-gray-600">Deep understanding of Uttarakhand's land laws and regulatory landscape.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏔️</div>
                      <h3 className="font-bold text-xl mb-2">Sector Expertise</h3>
                      <p className="text-gray-600">Specialized knowledge in Tourism, Hydropower, and Pharma finance.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Proactive Compliance</h3>
                      <p className="text-gray-600">We help you stay ahead of regulatory changes, minimizing legal risks.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Uttarakhand</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions helped us secure project finance for our boutique resort near Rishikesh. Their understanding of tourism-specific loan products and land laws in the hills is exceptional."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Rawat</p>
                          <p className="text-sm text-gray-500">Rishikesh, Uttarakhand</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed assistance with NBFC registration in Dehradun. The team at AMA Legal guided us through the entire RBI process smoothly and efficiently. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Deepak Sharma</p>
                          <p className="text-sm text-gray-500">Dehradun, Uttarakhand</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Uttarakhand</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Partner with the state's most trusted banking and finance legal consultants.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Expert Legal Guidance • Dehradun • Haridwar • Rishikesh
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Advice</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Consult with our banking law experts in Uttarakhand today.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    
                    
                    
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Banking and Finance" servicePath="banking-and-finance" />
          </div>
        </div>
      </div>
    </>
  );
}
