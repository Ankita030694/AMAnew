"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import Script from "next/script";

const breadcrumbItems = [
  { label: "Services", href: "/services" },
  { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
  { label: "Jammu & Kashmir", href: "/services/intellectual-property-rights/jammu-and-kashmir" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in J&K" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function JammuKashmirClient() {
  return (
    <>
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Jammu & Kashmir</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting the timeless heritage and modern innovation of the Crown of India. Expert IPR legal services for Trademarks, Patents, and GI Tags in J&K.
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
                    Empowering Innovation in Jammu & Kashmir
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jammu & Kashmir, renowned for its breathtaking landscapes and rich cultural heritage, is also a hub of unparalleled craftsmanship and emerging entrepreneurship. From the intricate artistry of Pashmina weavers in Srinagar to the bustling trade centers of Jammu, the region possesses a wealth of intellectual assets. As the Union Territory strides towards economic revitalization and global trade, the protection of these assets through <strong>Intellectual Property Rights (IPR)</strong> has never been more critical.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we are dedicated to safeguarding the creative and commercial interests of J&K's businesses, artisans, and innovators. Whether you are a saffron grower in Pampore, a walnut wood carver in Anantnag, or a tech startup in Jammu, securing your intellectual property is the foundation of long-term success. We provide comprehensive legal services to help you identify, register, and enforce your rights.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the distance between J&K and the national IP offices in New Delhi. Our digital-first approach ensures that you receive top-tier legal expertise without the need for physical travel. We handle the complexities of IP law, allowing you to focus on preserving your heritage and building your business.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for Jammu & Kashmir
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a globalized market, the value of a product is often defined by its brand and authenticity. For J&K, with its unique traditional knowledge and premium agricultural products, IPR is a powerful tool for economic empowerment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Preserving Authenticity</h3>
                      <p className="text-gray-700">
                        Geographical Indications (GI) protect the reputation of world-famous products like Kashmir Saffron and Pashmina from cheap imitations, ensuring that the benefits go to the true artisans.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Boosting Exports</h3>
                      <p className="text-gray-700">
                        Registered IP rights are recognized globally. They build trust with international buyers, facilitating the export of J&K's handicrafts and horticulture produce to high-value markets.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Supporting Startups</h3>
                      <p className="text-gray-700">
                        For the growing startup ecosystem in Jammu and Srinagar, a patent or trademark is a key asset that attracts venture capital and government grants.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Legal Protection</h3>
                      <p className="text-gray-700">
                        Registration gives you the legal standing to sue counterfeiters. This is vital for protecting the "Kashmir" brand name from misuse in domestic and international markets.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration Services
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Your brand name is your identity. In the competitive markets of tourism, hospitality, and retail in J&K, a registered trademark distinguishes your services from the rest. It is your most valuable commercial asset.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Trademark Solutions:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Comprehensive Search:</strong> We conduct exhaustive searches to ensure your brand name or logo is unique and available for registration.</li>
                    <li><strong>Strategic Filing:</strong> We advise on the appropriate classes for your goods/services (e.g., Class 24 for textiles, Class 30 for saffron/spices) to ensure broad protection.</li>
                    <li><strong>Objection Handling:</strong> If the Registry raises objections, our experienced attorneys draft legally sound responses to overcome them.</li>
                    <li><strong>Opposition Proceedings:</strong> We defend your application against third-party oppositions and prosecute oppositions against infringing marks.</li>
                    <li><strong>Portfolio Management:</strong> We handle renewals, assignments, and licensing agreements to keep your trademark rights active and profitable.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Note for Exporters:</strong> If you plan to export your products, we can also assist with international trademark registration under the Madrid Protocol.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Inventors
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is thriving in J&K's educational institutions and research centers. Whether it's a new agricultural tool, a pharmaceutical formulation, or a software algorithm, a patent secures your invention for 20 years.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Patenting is a technical legal process. It requires a precise description of the invention's novelty and industrial application. Our team of patent agents, with expertise in various scientific domains, ensures your application is drafted to withstand scrutiny.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patent Services:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Patentability Assessment</h4>
                        <p className="text-gray-700">We evaluate your invention against prior art to determine its chances of being granted a patent.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting & Filing</h4>
                        <p className="text-gray-700">We prepare detailed provisional and complete specifications and file them with the Indian Patent Office.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Prosecution</h4>
                        <p className="text-gray-700">We handle all office actions, attend hearings, and argue your case until the patent is granted.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Copyright Protection */}
                <section id="copyright" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Copyright for Creative Works
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From the poets of Kashmir to the Dogri writers of Jammu, the region is a cradle of literature and art. Copyright law protects the rights of creators over their literary, musical, dramatic, and artistic works.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, musicians, filmmakers, and software developers in registering their copyrights. This registration serves as prima facie evidence of ownership in court, which is essential for fighting piracy.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For J&K's handicraft sector, the visual appeal of a product—be it a carpet pattern, a papier-mâché design, or a wood carving motif—is its main selling point. The Designs Act protects these aesthetic features.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering your design prevents others from copying the look and feel of your product. We help artisans and manufacturers secure these rights to maintain the exclusivity of their craftsmanship.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of J&K
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jammu & Kashmir holds a prestigious position in India's GI map. These tags are not just labels; they are a guarantee of quality, history, and origin. They protect the livelihoods of thousands of artisans and farmers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kashmir Saffron</h3>
                      <p className="text-gray-700">
                        The only saffron in the world grown at such a high altitude. Known for its deep red color, potent aroma, and chemical composition. The GI tag combats adulteration in the market.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kashmir Pashmina</h3>
                      <p className="text-gray-700">
                        Woven from the fleece of the Changthangi goat, this fabric is synonymous with luxury. The GI tag ensures that only genuine, hand-spun, and hand-woven Pashmina carries the name.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kani Shawl</h3>
                      <p className="text-gray-700">
                        A masterpiece of weaving where the design is created using small wooden sticks (kanis). It is a time-intensive art form protected to preserve the skill of the weavers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Walnut Wood Carving</h3>
                      <p className="text-gray-700">
                        Intricate carving on the wood of the walnut tree, native to Kashmir. The GI tag protects the unique motifs and the traditional tools used by the artisans.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist producer groups in filing for new GI tags (like the recently granted Basohli Painting) and help authorized users register to use the official GI logo on their packaging.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have simplified the IPR registration process to make it accessible for everyone in J&K, from remote artisans to city-based entrepreneurs.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by understanding your business and identifying the IP assets that need protection. We provide a clear roadmap and cost estimate upfront.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Search & Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We perform rigorous database searches to ensure your IP is unique. This minimizes the risk of rejection and future litigation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Documentation & Filing</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our experts draft all legal documents and file your application online. You receive the filing receipt and application number immediately.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitoring & Grant</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We track your application's status, respond to office actions, and guide you through to the final grant of the registration certificate.
                        </p>
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
                    We are committed to bringing professional, reliable, and affordable legal services to the people of Jammu & Kashmir.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">100% Digital</h3>
                      <p className="text-gray-600">Complete the entire process from the comfort of your home or office. No travel required.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Expert Protection</h3>
                      <p className="text-gray-600">Our team comprises seasoned lawyers and patent agents with deep knowledge of IP law.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden fees. We offer competitive rates and special packages for startups and artisans.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I am a saffron grower from Pampore. AMA Legal Solutions helped me understand the value of the GI tag and registered me as an authorized user. It has really helped my business."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">G</div>
                        <div>
                          <p className="font-bold text-gray-900">Ghulam Nabi</p>
                          <p className="text-sm text-gray-500">Pampore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We run a dry fruit business in Jammu. The team at AMA handled our trademark registration very professionally. They kept us updated at every step."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rahul Sharma</p>
                          <p className="text-sm text-gray-500">Jammu</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your hard work unprotected. Partner with J&K's most trusted IPR legal experts.
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
                      Confidential • Professional • Reliable
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
                    Have questions about Trademark or Patent registration in Jammu & Kashmir? Talk to us today.
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
                      <Link href="/services/company-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Company Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/startup-india-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Startup India Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/gst-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> GST Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/legal-notices" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Legal Notices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <GenericStatesGrid serviceName="Intellectual Property Rights" servicePath="intellectual-property-rights" />
          </div>
        </div>
      </div>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Intellectual Property Rights Services in Jammu & Kashmir",
            "description": "Comprehensive IPR services in Jammu & Kashmir including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-jammu-kashmir.jpg",
            "author": {
              "@type": "Organization",
              "name": "AMA Legal Solutions",
              "url": "https://amalegalsolutions.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AMA Legal Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://amalegalsolutions.com/logo.png"
              }
            },
            "datePublished": "2024-11-26",
            "dateModified": "2024-11-26"
          })
        }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IPR Services Jammu & Kashmir",
            "image": "https://amalegalsolutions.com/services/ipr-jammu-kashmir.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Jammu & Kashmir.",
            "brand": {
              "@type": "Brand",
              "name": "AMA Legal Solutions"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "145"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Ghulam Nabi"
                },
                "reviewBody": "I am a saffron grower from Pampore. AMA Legal Solutions helped me understand the value of the GI tag and registered me as an authorized user. It has really helped my business."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Rahul Sharma"
                },
                "reviewBody": "We run a dry fruit business in Jammu. The team at AMA handled our trademark registration very professionally. They kept us updated at every step."
              }
            ]
          })
        }}
      />
    </>
  );
}
