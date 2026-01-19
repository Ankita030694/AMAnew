
import React from "react";
import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Bihar | Expert Intellectual Property Registration",
  description:
    "Leading IPR services in Bihar. We assist with Trademark, Patent, Copyright, and GI registration. Protect your innovations with expert legal guidance in Patna and beyond.",
  keywords: [
    "IPR services in Bihar",
    "Trademark registration Patna",
    "Patent registration Bihar",
    "Copyright registration Bihar",
    "GI tag registration Bihar",
    "Intellectual Property Rights Bihar",
    "IP attorneys Patna",
    "Bihar Startup Policy IPR",
    "Industrial Design registration Bihar",
    "Trade Secret protection Bihar",
  ],
  openGraph: {
    title:
      "IPR Services in Bihar | Expert Intellectual Property Registration",
    description:
      "Secure your intellectual property in Bihar with our expert services. From Trademarks to GI tags, we provide comprehensive legal support.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/bihar",
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
    type: "article",
  },
};

const BiharIPRPage = () => {
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
        name: "Bihar",
        item: "https://www.amalegalsolutions.com/services/intellectual-property-rights/bihar",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Comprehensive IPR Services in Bihar: Protecting Innovation in the Land of History",
    description:
      "A detailed guide to Intellectual Property Rights services in Bihar, covering Trademarks, Patents, Copyrights, and Geographical Indications.",
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
      name: "IPR Services Bihar",
      image: "https://www.amalegalsolutions.com/images/ipr-bihar.jpg",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Rajesh Kumar",
    },
    reviewBody:
      "AMA Legal Solutions helped us secure the trademark for our food processing unit in Patna. Their team is very professional and handled all the legalities smoothly.",
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
      label: "Bihar",
      href: "/services/intellectual-property-rights/bihar",
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
              <span className="text-[#D2A02A]">IPR Services in Bihar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding Heritage and Enterprise in Patna and Beyond. Expert
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
                    Introduction to IPR in Bihar
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Bihar, a land steeped in history and culture, is rapidly
                      transforming into a hub of enterprise and innovation. From
                      the traditional artisans of Madhubani to the emerging tech
                      startups in Patna, the state's economic landscape is
                      diverse. In this growing economy, **Intellectual Property
                      Rights (IPR)** serve as a critical tool for protecting
                      creativity and fostering business growth.
                    </p>
                    <p>
                      The Bihar Startup Policy and other government initiatives
                      are actively promoting an IP-conscious environment. Whether
                      you are an agricultural producer seeking a GI tag or a
                      software company looking to patent your code, securing your
                      intellectual assets is essential.
                    </p>
                    <p>
                      At AMA Legal Solutions, we understand the unique challenges
                      and opportunities in Bihar. Our specialized IPR services
                      are designed to guide businesses, creators, and innovators
                      through the legal complexities of registration and
                      enforcement, ensuring your ideas remain your competitive
                      advantage.
                    </p>
                  </div>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for Bihar
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Bihar's resurgence lies in its ability to blend ancient
                      heritage with modern enterprise. IPR is the shield that
                      protects both."
                    </p>
                  </div>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Agricultural Heritage:</strong> Bihar is famous
                        for unique produce like *Shahi Litchi* and *Katarni Rice*.
                        GI tags are vital to protect these brands from misuse and
                        ensure farmers get fair prices.
                      </li>
                      <li>
                        <strong>Handicrafts & Arts:</strong> *Madhubani Paintings*
                        and *Bhagalpuri Silk* are global brands. IPR protection
                        safeguards the livelihood of thousands of artisans.
                      </li>
                      <li>
                        <strong>Startup Ecosystem:</strong> With the government's
                        push for startups, patents and trademarks are essential
                        for attracting investment and building valuation.
                      </li>
                      <li>
                        <strong>Food Processing:</strong> As the food processing
                        sector grows in districts like Muzaffarpur and Hajipur,
                        trademarks help build trusted consumer brands.
                      </li>
                      <li>
                        <strong>Education & Research:</strong> With institutes
                        like IIT Patna and NIT Patna, academic research needs
                        patent protection for commercialization.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration in Bihar
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      A registered trademark is your brand's identity. It builds
                      trust and prevents others from using your goodwill.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      The Registration Process
                    </h3>
                    <p>
                      For applicants in Bihar, the appropriate jurisdiction is the
                      **Trademark Registry in Kolkata**. However, the entire
                      process is digital.
                    </p>
                    <div className="relative border-l-4 border-gray-200 ml-6 space-y-10 mt-8">
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Trademark Search
                        </h3>
                        <p className="text-gray-700">
                          We conduct a detailed search to ensure your proposed
                          mark is not already in use. This is the first step to a
                          successful registration.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Filing Application
                        </h3>
                        <p className="text-gray-700">
                          We file Form TM-A online. Startups and MSMEs in Bihar
                          can avail of a 50% fee concession.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Examination
                        </h3>
                        <p className="text-gray-700">
                          If the Registry raises objections, we draft a legal
                          response citing relevant case laws to overcome them.
                        </p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Registration
                        </h3>
                        <p className="text-gray-700">
                          Once approved and published, the trademark is registered
                          for 10 years, renewable indefinitely.
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
                      Innovators in Bihar, from agricultural scientists to tech
                      entrepreneurs, need patents to protect their inventions.
                      Patents grant exclusive commercial rights for 20 years.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                      Key Steps
                    </h3>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Prior Art Search:</strong> Verifying that the
                        invention is truly new globally.
                      </li>
                      <li>
                        <strong>Drafting:</strong> Writing the patent
                        specification. This is a technical-legal document that
                        defines the scope of protection.
                      </li>
                      <li>
                        <strong>Filing:</strong> Submitting the application to the
                        Patent Office (Kolkata jurisdiction).
                      </li>
                      <li>
                        <strong>Examination:</strong> Responding to technical
                        objections raised by the patent examiner.
                      </li>
                      <li>
                        <strong>Grant:</strong> Issuance of the patent
                        certificate.
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
                      Bihar has a vibrant literary and artistic tradition.
                      Copyright protects original works of authorship.
                    </p>
                    <p>
                      <strong>What we protect:</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Literary Works:
                        </span>{" "}
                        Books, articles, software code.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Artistic Works:
                        </span>{" "}
                        Paintings, sketches, logos.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Musical Works:
                        </span>{" "}
                        Songs, folk music compositions.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                        <span className="font-bold text-[#D2A02A]">
                          Cinematography:
                        </span>{" "}
                        Films, documentaries, videos.
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
                      For manufacturers of furniture, textiles, and consumer
                      goods, the visual appeal is key. Design registration
                      protects the shape, pattern, and ornamentation of a
                      product.
                    </p>
                    <p>
                      <strong>Benefits:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Prevents imitation of the product's aesthetic look.
                      </li>
                      <li>Enhances the market value of the product.</li>
                      <li>Crucial for export-oriented handicrafts.</li>
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
                      Many businesses rely on confidential information like
                      customer lists, manufacturing processes, or recipes. Trade
                      secrets protect this data.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Protection Measures:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Non-Disclosure Agreements (NDAs):</strong> Legal
                        contracts to bind employees and partners.
                      </li>
                      <li>
                        <strong>Access Control:</strong> Limiting access to
                        sensitive information.
                      </li>
                      <li>
                        <strong>Employee Policies:</strong> Clear guidelines on
                        confidentiality.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Geographical Indications */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Bihar
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Bihar is home to some of India's most celebrated GI tags.
                      These tags certify that the product possesses certain
                      qualities due to its geographical origin.
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
                              Madhubani Paintings
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Folk art from the Mithila region.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Bhagalpuri Silk
                            </td>
                            <td className="py-4 px-4">Handicraft</td>
                            <td className="py-4 px-4">
                              Renowned Tussar silk from Bhagalpur.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Shahi Litchi
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              Juicy litchi from Muzaffarpur.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Katarni Rice
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              Aromatic rice variety.
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 px-4 font-medium">
                              Magahi Paan
                            </td>
                            <td className="py-4 px-4">Agricultural</td>
                            <td className="py-4 px-4">
                              Betel leaf known for its unique taste.
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
                    IPR Enforcement in Bihar
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p>
                      Registering your IP is the first step. Enforcing it is
                      equally important. Bihar's legal system provides remedies
                      against infringement.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                      Legal Remedies:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Civil Suits:</strong> Filing for injunctions and
                        damages in District Courts or the Patna High Court.
                      </li>
                      <li>
                        <strong>Criminal Action:</strong> Filing FIRs with the
                        police for counterfeiting and piracy.
                      </li>
                      <li>
                        <strong>Cease & Desist Notices:</strong> Sending legal
                        notices to infringers to stop unauthorized use.
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
                      The **Bihar Startup Policy** is a game-changer for
                      entrepreneurs. It recognizes the value of IPR in building
                      scalable businesses.
                    </p>
                    <p>
                      <strong>Support Available:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Reimbursement:</strong> Startups can claim
                        reimbursement for patent and trademark filing costs.
                      </li>
                      <li>
                        <strong>Incubation:</strong> Access to IP cells in
                        incubators like CIMP and IIT Patna.
                      </li>
                      <li>
                        <strong>Mentorship:</strong> Guidance on IP strategy and
                        commercialization.
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
                      The state government offers various incentives to promote
                      IPR awareness and registration.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mt-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Key Benefits
                      </h4>
                      <p className="mb-2">
                        <strong>Startup Policy:</strong> Financial assistance for
                        IP filings.
                      </p>
                      <p className="mb-2">
                        <strong>MSME Support:</strong> Subsidies for obtaining
                        quality certifications and IPR.
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        *Benefits are subject to eligibility under state policies.
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
                      Bihar. From Patna to Bhagalpur, we are your trusted legal
                      advisors.
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
                      "AMA Legal Solutions helped us secure the trademark for our
                      food processing unit in Patna. Their team is very
                      professional and handled all the legalities smoothly."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg">
                        RK
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-gray-900">
                          Rajesh Kumar
                        </div>
                        <div className="text-sm text-gray-500">
                          Director, Magadh Foods Pvt Ltd
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
                    in Bihar.
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiharIPRPage;
