
import React from "react";
import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in West Bengal | Expert Intellectual Property Registration",
  description:
    "Leading IPR services in West Bengal. We assist with Trademark, Patent, Copyright, and GI registration. Protect your innovations with expert legal guidance in Kolkata and beyond.",
  keywords: [
    "IPR services in West Bengal",
    "Trademark registration Kolkata",
    "Patent registration West Bengal",
    "Copyright registration Kolkata",
    "GI tag registration West Bengal",
    "Intellectual Property Rights West Bengal",
    "IP attorneys Kolkata",
    "Patent Office Kolkata",
    "Industrial Design registration West Bengal",
    "Trade Secret protection West Bengal",
  ],
  openGraph: {
    title:
      "IPR Services in West Bengal | Expert Intellectual Property Registration",
    description:
      "Secure your intellectual property in West Bengal with our expert services. From Trademarks to GI tags, we provide comprehensive legal support.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/west-bengal",
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
    type: "article",
  },
};

const WestBengalIPRPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.amalegalsolutions.com/",
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
        name: "Intellectual Property Rights",
        item: "https://www.amalegalsolutions.com/services/intellectual-property-rights",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "West Bengal",
        item: "https://www.amalegalsolutions.com/services/intellectual-property-rights/west-bengal",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Comprehensive IPR Services in West Bengal: Protecting Innovation in the Cultural Capital",
    description:
      "A detailed guide to Intellectual Property Rights services in West Bengal, covering Trademarks, Patents, Copyrights, and Geographical Indications.",
    author: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
      },
    },
    datePublished: "2024-11-24",
    dateModified: "2024-11-24",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: "IPR Services West Bengal",
      image: "https://www.amalegalsolutions.com/images/ipr-west-bengal.jpg",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Amitava Roy",
    },
    reviewBody:
      "AMA Legal Solutions provided excellent support for our patent filing in Kolkata. Their team is very professional and guided us through the entire process at the Patent Office.",
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "importance", title: "Importance" },
    { id: "trademark", title: "Trademark" },
    { id: "patent", title: "Patent" },
    { id: "copyright", title: "Copyright" },
    { id: "design", title: "Design" },
    { id: "trade-secrets", title: "Trade Secrets" },
    { id: "gi-tags", title: "GI Tags" },
    { id: "enforcement", title: "Enforcement" },
    { id: "startups", title: "Startups" },
    { id: "incentives", title: "Incentives" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Intellectual Property Rights",
      href: "/services/intellectual-property-rights",
    },
    {
      label: "West Bengal",
      href: "/services/intellectual-property-rights/west-bengal",
    },
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
              Protect Your Innovation with{" "}
              <span className="text-[#D2A02A]">IPR Services in West Bengal</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding Creativity and Commerce in the East. Expert legal
              guidance for Trademarks, Patents, Copyrights, and GI Tags.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free IP Consultation
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
                    Introduction to IPR in West Bengal
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      West Bengal, with its rich legacy of art, literature, and
                      industry, has always been a cradle of creativity. From the
                      bustling IT sector in Salt Lake to the traditional weavers
                      of Bishnupur, the state represents a diverse economic
                      landscape. As Kolkata continues to serve as the commercial
                      gateway to Eastern India, the importance of **Intellectual
                      Property Rights (IPR)** cannot be overstated.
                    </p>
                    <p>
                      The presence of the **Patent Office (Kolkata)** and the
                      **Trademark Registry** in the city makes it a strategic hub
                      for IP filings in the region. Whether you are a tech
                      startup, a manufacturing unit, or an artisan, protecting
                      your intellectual assets is crucial for sustaining growth
                      and preventing infringement.
                    </p>
                    <p>
                      At AMA Legal Solutions, we offer specialized IPR services
                      tailored to the needs of West Bengal's businesses. Our team
                      of expert attorneys provides end-to-end support, from
                      conducting searches at the Kolkata registry to enforcing
                      your rights in the courts, ensuring your innovations remain
                      secure.
                    </p>
                  </div>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for West Bengal
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "In West Bengal, where tradition meets modernity, IPR is the
                      key to monetizing creativity and protecting industrial
                      innovation."
                    </p>
                  </div>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Strategic Location:</strong> Kolkata hosts the
                        Patent Office for the entire Eastern region, making it a
                        focal point for IP administration.
                      </li>
                      <li>
                        <strong>Cultural Heritage:</strong> The state is famous
                        for its handicrafts and textiles. GI tags for products
                        like *Nakshi Kantha* and *Baluchari Sarees* are essential
                        to protect artisans from cheap imitations.
                      </li>
                      <li>
                        <strong>IT & Startups:</strong> With the growth of Sector
                        V in Salt Lake and New Town, software patents and
                        copyrights are vital for the burgeoning tech industry.
                      </li>
                      <li>
                        <strong>Tea Industry:</strong> *Darjeeling Tea* was the
                        first product in India to get a GI tag. Protecting such
                        agro-based IP is critical for the state's economy.
                      </li>
                      <li>
                        <strong>MSME Sector:</strong> West Bengal has a vast MSME
                        base. Trademarks help these small businesses build distinct
                        brands and compete in national markets.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration in West Bengal
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      A trademark distinguishes your goods and services from
                      competitors. In a crowded market like West Bengal, a
                      registered trademark is your most powerful marketing tool.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      The Registration Process
                    </h3>
                    <p>
                      The **Trademark Registry in Kolkata** has jurisdiction over
                      West Bengal, Assam, Bihar, Odisha, and other eastern states.
                      The process is streamlined and online.
                    </p>
                    <div className="relative border-l-4 border-gray-200 ml-6 space-y-10 mt-8">
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Trademark Search
                        </h3>
                        <p className="text-gray-700">
                          We conduct a thorough search to ensure your brand name
                          or logo is available. This prevents rejection due to
                          similarity with existing marks.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Filing Application
                        </h3>
                        <p className="text-gray-700">
                          We file Form TM-A with the Kolkata Registry. The
                          application includes the mark representation and goods/
                          services classification (Nice Classification).
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Examination
                        </h3>
                        <p className="text-gray-700">
                          The Registrar examines the application. If objections
                          are raised, we file a legal reply. Our attorneys also
                          attend show-cause hearings at the Kolkata office if
                          required.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Registration
                        </h3>
                        <p className="text-gray-700">
                          Upon successful completion of the process and
                          publication, the registration certificate is issued,
                          valid for 10 years.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Patent Registration */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Registration Process
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      The **Patent Office, Kolkata** is one of the four main
                      patent offices in India. It handles applications from the
                      entire eastern region. Securing a patent grants you
                      exclusive rights to your invention.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      Key Steps
                    </h3>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Patentability Check:</strong> Ensuring the
                        invention is novel, non-obvious, and useful.
                      </li>
                      <li>
                        <strong>Drafting:</strong> Creating a robust patent
                        specification. This requires technical and legal
                        expertise.
                      </li>
                      <li>
                        <strong>Filing:</strong> Submitting the application to the
                        Kolkata Patent Office. E-filing is encouraged.
                      </li>
                      <li>
                        <strong>Prosecution:</strong> Responding to examination
                        reports and attending hearings at the patent office.
                      </li>
                      <li>
                        <strong>Grant:</strong> Receiving the patent grant, valid
                        for 20 years.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Copyright Protection */}
                <section id="copyright" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Copyright Protection
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      West Bengal is the land of Tagore and Ray. Copyright
                      protection is vital for the state's vibrant creative
                      industries, including literature, cinema, music, and art.
                    </p>
                    <p>
                      <strong>Scope of Protection:</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Literary Works:
                        </span>{" "}
                        Books, scripts, software.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Artistic Works:
                        </span>{" "}
                        Paintings, sculptures, logos.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Musical Works:
                        </span>{" "}
                        Songs, compositions.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Cinematography:
                        </span>{" "}
                        Films, documentaries.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Industrial Design Registration */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      For the leather goods industry in Bantala or the jewelry
                      makers of Bowbazar, design registration is crucial. It
                      protects the visual appearance of products.
                    </p>
                    <p>
                      <strong>Why Register?</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Prevents competitors from copying your product's look.
                      </li>
                      <li>Adds aesthetic value to your brand.</li>
                      <li>
                        Essential for export-oriented industries like leather and
                        gems.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Trade Secret Protection */}
                <section id="trade-secrets" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trade Secret Protection
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      From the secret recipe of a famous sweetmeat shop to the
                      client list of a BPO, trade secrets are valuable assets.
                      We help you protect them through legal contracts.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Our Services:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>NDA Drafting:</strong> Robust agreements for
                        employees and partners.
                      </li>
                      <li>
                        <strong>Confidentiality Policies:</strong> Internal
                        protocols to safeguard data.
                      </li>
                      <li>
                        <strong>Non-Compete Clauses:</strong> Preventing employees
                        from joining competitors with your secrets.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Geographical Indications */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of West Bengal
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      West Bengal takes pride in its unique products. GI tags
                      ensure that the reputation of these products is linked to
                      their geographical origin.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      Famous GI Tags
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            <th className="border-b-2 border-gray-200 py-4 px-4 text-gray-900">
                              Product Name
                            </th>
                            <th className="border-b-2 border-gray-200 py-4 px-4 text-gray-900">
                              Category
                            </th>
                            <th className="border-b-2 border-gray-200 py-4 px-4 text-gray-900">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Darjeeling Tea
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              The "Champagne of Teas," known for its aroma.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Nakshi Kantha
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Embroidered quilt with artistic motifs.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Santiniketan Leather
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Leather goods with embossed batik work.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Baluchari Saree
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Silk sarees depicting mythological scenes.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Joynagarer Moa
                            </td>
                            <td className="py-4 px-4">Food Stuff</td>
                            <td className="py-4 px-4">
                              Sweet made from puffed rice and date palm jaggery.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* IPR Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    IPR Enforcement in West Bengal
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Enforcement is key to protecting your IP assets. West Bengal
                      has a strong legal system to deal with infringement.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Legal Remedies:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Civil Litigation:</strong> Filing suits in the
                        Calcutta High Court or District Courts for injunctions
                        and damages.
                      </li>
                      <li>
                        <strong>Criminal Prosecution:</strong> Filing complaints
                        with the police for trademark and copyright violations.
                      </li>
                      <li>
                        <strong>Commercial Courts:</strong> Specialized courts in
                        Kolkata ensure faster disposal of commercial disputes,
                        including IP cases.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Startups */}
                <section id="startups" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Startups & Innovation
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      The **West Bengal Startup Policy** aims to build a robust
                      startup ecosystem. IPR is a core component of this vision.
                    </p>
                    <p>
                      <strong>Support Available:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Financial Incentives:</strong> Reimbursement of
                        patent filing costs for registered startups.
                      </li>
                      <li>
                        <strong>IP Facilitation:</strong> The Patent Information
                        Centre (PIC) provides guidance and support.
                      </li>
                      <li>
                        <strong>Incubation:</strong> Access to IP cells in
                        incubators at IIM Calcutta, IIT Kharagpur, and others.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Incentives */}
                <section id="incentives" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Government Incentives
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      The state government encourages IP creation through various
                      schemes.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mt-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Key Benefits
                      </h4>
                      <p className="mb-2">
                        <strong>Patent Reimbursement:</strong> Startups can claim
                        reimbursement for patent filing fees.
                      </p>
                      <p className="mb-2">
                        <strong>MSME Support:</strong> Assistance for obtaining GI
                        registration and trademarks.
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        *Benefits are subject to the state's policy guidelines.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <FaqSection />

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Ready to Protect Your Intellectual Property?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Partner with AMA Legal Solutions for expert IPR services in
                      West Bengal. From Kolkata to Darjeeling, we are your trusted
                      legal advisors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Schedule Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

                {/* Review Snippet */}
                <section className="mt-16 border-t border-gray-200 pt-12">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 font-medium">
                        4.9/5 based on client reviews
                      </span>
                    </div>
                    <blockquote className="text-xl text-gray-700 italic mb-6">
                      "AMA Legal Solutions provided excellent support for our
                      patent filing in Kolkata. Their team is very professional
                      and guided us through the entire process at the Patent
                      Office."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg">
                        AR
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-gray-900">
                          Amitava Roy
                        </div>
                        <div className="text-sm text-gray-500">
                          Director, TechNova Solutions
                        </div>
                      </div>
                    </div>
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
                    Talk to an IP Expert
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get immediate assistance for trademark filing and objections
                    in West Bengal.
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
                        href="/services/corporate"
                        className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                      >
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/entertainment"
                        className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                      >
                        <span className="mr-2">›</span> Entertainment Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/cyber"
                        className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                      >
                        <span className="mr-2">›</span> Cyber Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/litigation"
                        className="text-gray-600 hover:text-[#D2A02A] flex items-center"
                      >
                        <span className="mr-2">›</span> Litigation Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <GenericStatesGrid
              serviceName="Trademark Registration"
              servicePath="intellectual-property-rights"
              customSlugs={{
                "Delhi": "Delhi",
                "Gujarat": "Gujarat",
                "Maharashtra": "Maharashtra",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Tamil Nadu": "TamilNadu",
                "Uttar Pradesh": "UttarPradesh",
                "Puducherry": "pudducherry",
                "Kerala": "kerala"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WestBengalIPRPage;
