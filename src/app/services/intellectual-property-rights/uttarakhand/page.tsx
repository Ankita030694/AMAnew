
import React from "react";
import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Uttarakhand | IP Registration",
  description:
    "Leading IPR services in Uttarakhand. We assist with Trademark, Patent, Copyright, and GI registration. Protect your innovations with expert legal guidance in Dehradun, Haridwar, and beyond.",
  keywords: [
    "IPR services in Uttarakhand",
    "Trademark registration Uttarakhand",
    "Patent registration Uttarakhand",
    "Copyright registration Uttarakhand",
    "GI tag registration Uttarakhand",
    "Intellectual Property Rights Uttarakhand",
    "IP attorneys Dehradun",
    "Startup Uttarakhand IP services",
    "Industrial Design registration Uttarakhand",
    "Trade Secret protection Uttarakhand",
  ],
  openGraph: {
    title:
      "IPR Services in Uttarakhand | Expert Intellectual Property Registration",
    description:
      "Secure your intellectual property in Uttarakhand with our expert services. From Trademarks to GI tags, we provide comprehensive legal support.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/uttarakhand",
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
    type: "article",
  },
};

const UttarakhandIPRPage = () => {
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
        name: "Uttarakhand",
        item: "https://www.amalegalsolutions.com/services/intellectual-property-rights/uttarakhand",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Comprehensive IPR Services in Uttarakhand: Protecting Innovation in the Himalayas",
    description:
      "A detailed guide to Intellectual Property Rights services in Uttarakhand, covering Trademarks, Patents, Copyrights, and Geographical Indications.",
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
      name: "IPR Services Uttarakhand",
      image: "https://www.amalegalsolutions.com/images/ipr-uttarakhand.jpg",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Suresh Negi",
    },
    reviewBody:
      "AMA Legal Solutions helped us secure the GI tag for our local organic produce. Their team in Dehradun is extremely knowledgeable and supportive.",
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
      label: "Uttarakhand",
      href: "/services/intellectual-property-rights/uttarakhand",
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
              <span className="text-[#D2A02A]">IPR Services in Uttarakhand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding Biodiversity and Business in the Himalayas. Expert
              legal guidance for Trademarks, Patents, Copyrights, and GI Tags.
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
                    Introduction to IPR in Uttarakhand
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Uttarakhand, known as "Devbhoomi" (Land of Gods), is not
                      only a spiritual haven but also a rapidly developing
                      industrial and educational hub. From the pharmaceutical
                      manufacturing units in Pantnagar and Haridwar to the
                      thriving tourism sector and the rich biodiversity of the
                      Himalayas, the state offers immense opportunities. In this
                      evolving landscape, **Intellectual Property Rights (IPR)**
                      play a pivotal role in protecting innovation, brand
                      identity, and traditional knowledge.
                    </p>
                    <p>
                      The state government, through initiatives like Startup
                      Uttarakhand and the MSME Policy, is actively promoting an
                      IP-conscious ecosystem. Whether you are a startup in
                      Dehradun, a manufacturer in SIDCUL, or an artisan in
                      Almora, securing your intellectual property is essential
                      for long-term success and competitiveness.
                    </p>
                    <p>
                      At AMA Legal Solutions, we understand the unique economic
                      and cultural fabric of Uttarakhand. Our specialized IPR
                      services are designed to assist businesses, researchers,
                      and creators in navigating the legal complexities of
                      registration and enforcement. We provide comprehensive
                      solutions to protect your ideas and innovations, ensuring
                      they remain your exclusive assets.
                    </p>
                  </div>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for Uttarakhand
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Uttarakhand's strength lies in its biodiversity and
                      industrial growth. IPR acts as a bridge, protecting
                      traditional wisdom while fostering modern innovation."
                    </p>
                  </div>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Pharmaceutical Hub:</strong> With major pharma
                        companies operating in the state, patents are critical
                        for protecting drug formulations and manufacturing
                        processes.
                      </li>
                      <li>
                        <strong>Biodiversity & Traditional Knowledge:</strong>{" "}
                        Uttarakhand is rich in medicinal plants and herbs. IPR
                        tools like Geographical Indications (GI) and Access and
                        Benefit Sharing (ABS) mechanisms help protect this
                        natural wealth from biopiracy.
                      </li>
                      <li>
                        <strong>Tourism & Hospitality:</strong> For the booming
                        tourism industry, trademarks are vital for hotels, travel
                        agencies, and adventure sports companies to build a
                        trusted brand.
                      </li>
                      <li>
                        <strong>Handicrafts & Handlooms:</strong> The state is
                        famous for Woolen products (Thulma), Copperware (Tamta),
                        and Aipan art. GI tags and trademarks help artisans
                        market these unique products globally and prevent cheap
                        imitations.
                      </li>
                      <li>
                        <strong>Education & Research:</strong> With premier
                        institutes like IIT Roorkee and GB Pant University,
                        academic research generates significant IP that needs
                        patent protection for commercialization.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration in Uttarakhand
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      A strong brand is your most valuable asset. Registering a
                      trademark in Uttarakhand ensures that your brand name,
                      logo, or slogan is legally protected against misuse.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      The Registration Process
                    </h3>
                    <p>
                      Trademark registration is a centralized process in India.
                      For applicants in Uttarakhand, the appropriate jurisdiction
                      is the **Trademark Registry in New Delhi**. However, the
                      entire process is online.
                    </p>
                    <div className="relative border-l-4 border-gray-200 ml-6 space-y-10 mt-8">
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Trademark Search
                        </h3>
                        <p className="text-gray-700">
                          We conduct a comprehensive search to ensure your mark
                          is unique and does not infringe on existing trademarks.
                          This minimizes the risk of objection and opposition.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Filing (Form TM-A)
                        </h3>
                        <p className="text-gray-700">
                          We file the application online with the requisite details
                          and fees. Startups and MSMEs in Uttarakhand can avail
                          of reduced filing fees (50% concession).
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Examination & Response
                        </h3>
                        <p className="text-gray-700">
                          If the Registry raises any objections in the examination
                          report, we draft and file a legal response within the
                          stipulated time to justify the registrability of your
                          mark.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Registration
                        </h3>
                        <p className="text-gray-700">
                          Once accepted and published, if there is no opposition
                          for 4 months, the trademark is registered for 10 years.
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
                      For the industrial units in SIDCUL and the research labs in
                      Uttarakhand's universities, patents are essential to
                      protect inventions. A patent grants exclusive rights for 20
                      years.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      Steps to Secure a Patent
                    </h3>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Novelty Search:</strong> Checking global databases
                        to ensure the invention is new.
                      </li>
                      <li>
                        <strong>Drafting:</strong> Preparing a detailed technical
                        and legal document (Specification). This is the most
                        critical step.
                      </li>
                      <li>
                        <strong>Filing:</strong> Submitting the application to the
                        Patent Office (New Delhi jurisdiction).
                      </li>
                      <li>
                        <strong>Examination:</strong> Responding to the First
                        Examination Report (FER) issued by the patent office.
                      </li>
                      <li>
                        <strong>Grant:</strong> Obtaining the patent certificate
                        upon successful prosecution.
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
                      Uttarakhand has a rich tradition of folk music, literature,
                      and art. Copyright law protects these creative expressions.
                      It also covers software code, which is crucial for the
                      growing IT sector in Dehradun.
                    </p>
                    <p>
                      <strong>What we protect:</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Literary Works:
                        </span>{" "}
                        Books, blogs, software code.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Artistic Works:
                        </span>{" "}
                        Logos, paintings, photographs.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Musical Works:
                        </span>{" "}
                        Compositions and songs.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Cinematography:
                        </span>{" "}
                        Films and documentaries.
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
                      For manufacturers of consumer goods, packaging, and
                      handicrafts, the visual appeal is a key differentiator.
                      Industrial Design registration protects the aesthetic
                      aspects of a product.
                    </p>
                    <p>
                      <strong>Benefits:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Protects the unique shape, pattern, or color combination.
                      </li>
                      <li>Increases the commercial value of the product.</li>
                      <li>Prevents copycats from selling look-alike products.</li>
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
                      Many businesses in Uttarakhand, especially in the herbal
                      and food processing sectors, rely on secret recipes and
                      processes. Trade secrets protect this confidential
                      information without registration.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Protection Strategies:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Non-Disclosure Agreements (NDAs):</strong> Essential
                        for employees and vendors.
                      </li>
                      <li>
                        <strong>Physical & Digital Security:</strong> Restricting
                        access to sensitive data.
                      </li>
                      <li>
                        <strong>Employee Training:</strong> Educating staff about
                        confidentiality obligations.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Geographical Indications */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Uttarakhand
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Uttarakhand has successfully registered several GI tags that
                      highlight the state's unique agricultural and handicraft
                      heritage. These tags are a mark of quality and authenticity.
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
                              Uttarakhand Tejpatta
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              Aromatic bay leaf grown in the Himalayas.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Aipan Art
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Traditional ritualistic folk art made with rice
                              paste.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Munsyari Rajma
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              Kidney beans known for their unique taste and
                              texture.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Ringal Craft
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Bamboo craft used for making baskets and mats.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Tamta Product
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Traditional copperware of the Tamta community.
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
                    IPR Enforcement in Uttarakhand
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Protecting your rights doesn't stop at registration.
                      Uttarakhand has a legal framework to enforce IPR and combat
                      infringement.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Legal Remedies:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Civil Suits:</strong> Filing for injunctions and
                        damages in the District Courts or the High Court of
                        Uttarakhand in Nainital.
                      </li>
                      <li>
                        <strong>Criminal Action:</strong> Filing FIRs for
                        trademark counterfeiting and copyright piracy.
                      </li>
                      <li>
                        <strong>Customs Enforcement:</strong> Preventing the
                        import/export of infringing goods.
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
                      **Startup Uttarakhand** is the state's flagship initiative
                      to foster entrepreneurship. The policy recognizes IPR as a
                      key driver of innovation.
                    </p>
                    <p>
                      <strong>Support for Startups:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Reimbursement:</strong> Startups can claim
                        reimbursement for patent and trademark filing fees.
                      </li>
                      <li>
                        <strong>Incubation:</strong> Access to IP cells in
                        incubators at IIT Roorkee, UPES, and Graphic Era
                        University.
                      </li>
                      <li>
                        <strong>Mentorship:</strong> Guidance from IP experts on
                        commercializing technology.
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
                      The Government of Uttarakhand offers financial incentives to
                      encourage IPR registration among MSMEs.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mt-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        MSME Policy Benefits
                      </h4>
                      <p className="mb-2">
                        <strong>Patents:</strong> Reimbursement of up to 75% of
                        the cost incurred for obtaining a patent, subject to a
                        maximum of ₹2 Lakhs.
                      </p>
                      <p className="mb-2">
                        <strong>Trademarks:</strong> Reimbursement of filing fees
                        for trademark registration.
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        *Benefits are subject to the terms and conditions of the
                        state's MSME policy.
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
                      Uttarakhand. From Dehradun to Nainital, we are your trusted
                      legal partners.
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
                      "AMA Legal Solutions helped us secure the GI tag for our
                      local organic produce. Their team in Dehradun is extremely
                      knowledgeable and supportive."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg">
                        SN
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-gray-900">
                          Suresh Negi
                        </div>
                        <div className="text-sm text-gray-500">
                          Founder, Himalayan Organics
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
                    in Uttarakhand.
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
                "Delhi": "delhi",
                "Gujarat": "gujarat",
                "Maharashtra": "maharashtra",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Tamil Nadu": "tamil-nadu",
                "Uttar Pradesh": "uttar-pradesh",
                "Puducherry": "puducherry",
                "Kerala": "kerala"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UttarakhandIPRPage;
