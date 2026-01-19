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
  { label: "Puducherry", href: "/services/intellectual-property-rights/pudducherry" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Puducherry" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function PudducherryClient() {
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Puducherry</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protect your brand, innovations, and creative works with expert IPR legal services in Puducherry. From Trademark Registration to Patent Filing and GI Tags, we secure your intellectual assets.
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
                    Securing Intellectual Property in the Coastal Union Territory
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Puducherry, formerly known as Pondicherry, is not just a charming tourist destination with French colonial heritage; it is a thriving hub of economic activity, education, and cultural richness. From the bustling industrial estates of Thattanchavady and Sedarapet to the serene Auroville township known for its sustainable innovations, the Union Territory is a breeding ground for creativity and entrepreneurship. In this dynamic environment, the protection of <strong>Intellectual Property Rights (IPR)</strong> becomes paramount for businesses, artisans, researchers, and creators.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the unique fabric of Puducherry's economy. Whether you are a startup in the IT sector, a traditional artisan crafting the famous papier-mâché dolls, or a pharmaceutical company in the PIPDIC Industrial Estate, your intellectual assets are your most valuable capital. Our dedicated team of IPR attorneys provides comprehensive legal support to identify, protect, and enforce your rights, ensuring that your innovations remain exclusively yours.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the gap between local creators and the national IPR framework. While the physical registries for trademarks and patents are located in Chennai, our digital-first approach combined with local legal expertise ensures that clients in Puducherry receive seamless, world-class service without the need for constant travel.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR Protection is Critical for Puducherry's Growth
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In an increasingly competitive global market, Intellectual Property is the currency of the future. For a region like Puducherry, which blends traditional craftsmanship with modern industry, IPR serves as a dual shield—preserving heritage while fostering innovation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Brand Identity & Trust</h3>
                      <p className="text-gray-700">
                        For the hospitality and tourism sector, a registered trademark distinguishes your boutique hotel or cafe from imitators, building lasting customer loyalty and trust.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Monetization of Innovation</h3>
                      <p className="text-gray-700">
                        Patents allow tech startups and manufacturing units to license their inventions, creating new revenue streams and attracting venture capital investment.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Preserving Cultural Heritage</h3>
                      <p className="text-gray-700">
                        GI tags and copyright protection ensure that the traditional knowledge of Puducherry's artisans is not exploited by mass manufacturers, keeping the profits within the local community.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Legal Recourse</h3>
                      <p className="text-gray-700">
                        Registration provides a solid legal footing to sue infringers. Without it, proving ownership in a court of law becomes a complex and often losing battle.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration Services in Puducherry
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Your brand name, logo, slogan, or even a unique sound can be your most powerful asset. A registered trademark grants you the exclusive right to use that mark in commerce and prevents others from using confusingly similar marks. In Puducherry's vibrant retail and service sectors, a unique identity is essential.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Trademark Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Comprehensive Search:</strong> We conduct thorough searches in the Trademark Registry database to ensure your proposed mark is available and does not infringe on existing rights.</li>
                    <li><strong>Class Classification:</strong> We help you identify the correct Nice Classification (Classes 1-45) for your goods or services to ensure broad protection.</li>
                    <li><strong>Filing & Prosecution:</strong> We handle the entire application process (Form TM-A), from filing to responding to examination reports (office actions) issued by the Registrar.</li>
                    <li><strong>Opposition Handling:</strong> If a third party opposes your application, or if you need to oppose a conflicting mark, our experienced attorneys represent you in hearings.</li>
                    <li><strong>Renewal & Maintenance:</strong> Trademarks are valid for 10 years. We manage your portfolio and ensure timely renewals to keep your rights active indefinitely.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Did You Know?</strong> Puducherry businesses fall under the jurisdiction of the Trademark Registry in Chennai. However, with our digital filing capabilities, you don't need to visit Chennai. We handle everything remotely, saving you time and resources.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing and Prosecution
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is at the heart of progress. Whether it's a new pharmaceutical formulation, a mechanical device, or a software-related invention, a patent grants you a monopoly over your creation for 20 years. Puducherry, with its growing educational and research institutions like Pondicherry University and JIPMER, is a significant contributor to scientific advancements.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Securing a patent is a complex legal and technical process. It requires not just a description of the invention, but a strategic drafting of "claims" that define the scope of protection. A poorly drafted patent can be easily circumvented by competitors.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Patent Process:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Prior Art Search</h4>
                        <p className="text-gray-700">Checking global databases to ensure your invention is truly novel and non-obvious.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting Specifications</h4>
                        <p className="text-gray-700">Preparing Provisional or Complete Specifications with detailed drawings and robust claims.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Filing & Publication</h4>
                        <p className="text-gray-700">Submitting the application to the Indian Patent Office and tracking its publication in the official journal.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Examination & Grant</h4>
                        <p className="text-gray-700">Responding to the First Examination Report (FER) and attending hearings to overcome objections before the grant.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Copyright Protection */}
                <section id="copyright" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Copyright Registration for Creatives
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Puducherry has a rich literary and artistic tradition. Copyright protects original literary, dramatic, musical, and artistic works, as well as cinematograph films and sound recordings. While copyright exists automatically upon creation, registration is crucial for enforcement. It serves as prima facie evidence of ownership in court.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, software developers, filmmakers, and artists in registering their works with the Copyright Office. This is particularly important for the software industry in Puducherry, where source code protection is vital against piracy and unauthorized use.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Protecting Industrial Designs
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a market flooded with products, visual appeal often drives consumer choice. The <strong>Designs Act, 2000</strong> protects the aesthetic features of a product—its shape, pattern, configuration, or ornamentation. This is distinct from a patent (which protects function) and a trademark (which protects brand identity).
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For Puducherry's handicraft and manufacturing sectors, design registration is a powerful tool. Whether it's a unique furniture design, a textile pattern, or the shape of a bottle, registering the design prevents competitors from making "look-alike" products that confuse customers.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Puducherry
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A Geographical Indication (GI) tag is a badge of honor for products that have a specific geographical origin and possess qualities or a reputation that are due to that origin. Puducherry is home to exquisite craftsmanship that has been recognized with GI status.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Villianur Terracotta Works</h3>
                      <p className="text-gray-700">
                        The terracotta craft of Villianur is centuries old. Artisans use locally available fine clay to create intricate idols, lamps, and decorative items. The GI tag ensures that only authentic products from this region can carry the name, protecting the livelihood of traditional potters.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Thirukannur Papier Mache Craft</h3>
                      <p className="text-gray-700">
                        Known for its detailed workmanship and vibrant colors, the papier-mâché craft of Thirukannur involves creating dolls and utility items from paper pulp. The GI registration helps in marketing these products globally as authentic Puducherry handicrafts.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we assist producer groups and associations in filing for new GI tags and help authorized users register themselves to legally use the GI logo on their products.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Step-by-Step IPR Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While each type of IP has its specific procedure, the general workflow we follow ensures maximum protection and minimum rejection risk.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Audit</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by understanding your business and identifying your intellectual assets. Many clients are unaware that their business processes or client lists can also be protected as Trade Secrets.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Search & Opinion</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We conduct a rigorous search in national and international databases. We provide a legal opinion on the registrability of your mark or invention, saving you from filing applications that are likely to be rejected.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Documentation & Filing</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team prepares the necessary legal documents—be it the User Affidavit for trademarks or the Complete Specification for patents. We file the application electronically for immediate acknowledgement.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Examination Response</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This is the most critical stage. When the IP office raises objections, we draft a point-by-point legal reply citing relevant case laws to overcome the objections and move the application towards acceptance.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions for IPR in Puducherry?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Intellectual Property is a specialized field requiring a blend of technical understanding and legal acumen. Here is why businesses in Puducherry trust us:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏆</div>
                      <h3 className="font-bold text-xl mb-2">Expertise</h3>
                      <p className="text-gray-600">Our team comprises registered patent agents and trademark attorneys with years of experience.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">Startup Focus</h3>
                      <p className="text-gray-600">We are well-versed with the SIPP scheme and help startups avail government benefits for IP protection.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Local Understanding</h3>
                      <p className="text-gray-600">We understand the specific needs of Puducherry's industries, from tourism to handicrafts and pharma.</p>
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
                        "Excellent service for trademark registration in Puducherry. The team guided me through the entire process seamlessly and handled the objections very professionally."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anand Kumar</p>
                          <p className="text-sm text-gray-500">Puducherry</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Very knowledgeable about patent filing. They helped us secure our invention with great professionalism. Highly recommended for any startup in Puducherry."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sarah Thomas</p>
                          <p className="text-sm text-gray-500">Auroville</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Intellectual Assets Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work be copied. Secure your brand and innovations with Puducherry's trusted IPR legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Your Registration
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need IPR Advice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our IPR experts in Puducherry for a preliminary assessment of your trademark or patent.
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
            "headline": "Intellectual Property Rights Services in Puducherry",
            "description": "Comprehensive IPR services in Puducherry including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-puducherry.jpg",
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
                "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
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
            "name": "IPR Services Puducherry",
            "image": "https://amalegalsolutions.com/services/ipr-puducherry.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Puducherry.",
            "brand": {
              "@type": "Brand",
              "name": "AMA Legal Solutions"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120"
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
                  "name": "Anand Kumar"
                },
                "reviewBody": "Excellent service for trademark registration in Puducherry. The team guided me through the entire process seamlessly and handled the objections very professionally."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah Thomas"
                },
                "reviewBody": "Very knowledgeable about patent filing. They helped us secure our invention with great professionalism. Highly recommended for any startup in Puducherry."
              }
            ]
          })
        }}
      />
    </>
  );
}
