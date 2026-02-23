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
  { label: "Tripura", href: "/services/intellectual-property-rights/tripura" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Tripura" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function TripuraClient() {
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Tripura</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding the heritage and innovation of the Queen of Hills. Expert IPR legal services for Trademarks, Patents, and GI Tags in Tripura.
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
                    Fostering Innovation in Tripura
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tripura, a state rich in history, culture, and biodiversity, is rapidly evolving into a hub of economic activity in Northeast India. From its world-renowned Queen Pineapple to the exquisite craftsmanship of its handloom weavers, the state possesses a wealth of intellectual assets. As Tripura integrates more deeply with national and international markets, the protection of these assets through <strong>Intellectual Property Rights (IPR)</strong> is paramount.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we are dedicated to empowering the businesses, artisans, and innovators of Tripura. Whether you are a bamboo artisan in Agartala, a tea planter in Unakoti, or a tech entrepreneur in the capital, securing your intellectual property is essential for sustainable growth. We provide comprehensive legal services to help you identify, register, and enforce your rights.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the geographical gap between Tripura and the national IP offices. Our digital-first approach ensures that you receive top-tier legal expertise without the need to travel to Kolkata or Delhi. We handle the complexities of the law so you can focus on what you do best—creating and innovating.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Vital for Tripura's Economy
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In today's knowledge-driven economy, intellectual property is a key driver of value. For a state like Tripura, with its unique blend of traditional knowledge and modern aspirations, IPR offers a pathway to economic prosperity.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Protecting Tradition</h3>
                      <p className="text-gray-700">
                        Geographical Indications (GI) and traditional knowledge laws protect the unique heritage of Tripura's tribes, ensuring that their art and produce are not exploited by unauthorized parties.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Enhancing Exports</h3>
                      <p className="text-gray-700">
                        Registered IP rights, especially for agricultural products like pineapple and scented lemon, build trust in international markets, facilitating exports to neighboring countries like Bangladesh and beyond.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Attracting Investment</h3>
                      <p className="text-gray-700">
                        Investors look for secure assets. A strong portfolio of trademarks and patents signals that a business is serious, innovative, and legally protected, making it more attractive for funding.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Brand Building</h3>
                      <p className="text-gray-700">
                        A registered trademark allows businesses to build a distinct brand identity, fostering customer loyalty and distinguishing their products in a crowded marketplace.
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
                    Your brand name is your promise to your customers. In the bustling markets of Agartala and Dharmanagar, a unique brand sets you apart. Registering your trademark is the only way to legally own your brand name and logo.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Comprehensive Services:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Trademark Search:</strong> We perform deep searches to verify that your chosen mark is available, avoiding potential legal conflicts down the road.</li>
                    <li><strong>Filing Strategy:</strong> We advise on the best way to file—whether as a word mark, device mark (logo), or composite mark—to ensure maximum protection.</li>
                    <li><strong>Objection Management:</strong> If the Registry raises objections (e.g., on grounds of distinctiveness), our attorneys draft persuasive replies to secure acceptance.</li>
                    <li><strong>Opposition Defense:</strong> We represent you in opposition proceedings if a third party challenges your application.</li>
                    <li><strong>Renewal Services:</strong> We manage your portfolio and ensure timely renewals every 10 years.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Expert Tip:</strong> For Tripura's growing food processing industry, registering trademarks for packaged goods (Class 29/30) is crucial to prevent counterfeiting.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Inventors
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is not limited to big cities. Tripura's researchers and grassroots innovators are developing solutions in agriculture, bamboo technology, and more. A patent secures your invention, giving you the exclusive right to profit from it.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The patenting process is rigorous. It demands a detailed technical description and precise legal claims. Our team of patent experts works closely with you to translate your invention into a robust patent application.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patent Workflow:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Novelty Search</h4>
                        <p className="text-gray-700">We search global patent databases to confirm that your invention is new and non-obvious.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting</h4>
                        <p className="text-gray-700">We prepare the complete specification, ensuring all technical aspects are covered to prevent loopholes.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Filing & Prosecution</h4>
                        <p className="text-gray-700">We file the application and handle all interactions with the Patent Office, including responding to examination reports.</p>
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
                    Tripura has a rich literary and artistic tradition. Copyright law protects the rights of authors, musicians, filmmakers, and artists. It ensures that you control how your work is used and monetized.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether it's a novel, a music album, a software program, or a documentary film, we assist you in registering your copyright. This provides a public record of your ownership and is essential for pursuing legal action against infringement.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the handicraft and manufacturing sectors, the visual design of a product is a key competitive advantage. The Designs Act protects the aesthetic features of an article.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For Tripura's bamboo and cane industry, registering unique product designs prevents mass-market imitations. We help you secure these rights to maintain the exclusivity of your creations.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Tripura
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tripura has made significant strides in recognizing its unique local products through GI tags. These tags certify the origin and quality of the products, boosting their marketability and protecting traditional livelihoods.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tripura Queen Pineapple</h3>
                      <p className="text-gray-700">
                        Known for its golden yellow color, pleasant aroma, and sweetness, this pineapple variety is a pride of the state. The GI tag has opened doors for export to international markets.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Risa Textile</h3>
                      <p className="text-gray-700">
                        A traditional handwoven cloth used by the indigenous communities. It is known for its vibrant colors and intricate designs. The GI tag protects this cultural heritage from appropriation.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Matabari Pera</h3>
                      <p className="text-gray-700">
                        A milk-based sweet offered as prasad at the Tripurasundari temple. Its unique taste and preparation method have earned it a GI tag, protecting the local confectioners.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Pachra Textile</h3>
                      <p className="text-gray-700">
                        Another significant handloom product, Pachra is a wide piece of cloth used by women. The GI tag ensures that only authentic, handwoven Pachra from Tripura can be sold under this name.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist producer groups and cooperative societies in filing for new GI tags and help authorized users register to use the GI logo, enhancing the value of their products.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Seamless Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have streamlined the IPR registration process to be efficient, transparent, and accessible to everyone in Tripura.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start with a detailed discussion to understand your business and identify your IP assets. We explain the process, costs, and timelines clearly.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Search & Verification</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We conduct thorough searches to ensure your IP is unique. This step is critical to avoid rejection and future legal disputes.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Filing</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We prepare all necessary documents and file your application online. You receive immediate acknowledgement and priority.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Management</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We monitor your application, handle all correspondence with the IP office, and guide you through to the final grant of registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to providing world-class legal services with a local understanding of Tripura's business landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Digital Convenience</h3>
                      <p className="text-gray-600">Access expert legal services from anywhere in Tripura. No need to travel to metro cities.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                      <p className="text-gray-600">Our team includes experienced lawyers and patent agents who specialize in IPR law.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client Focused</h3>
                      <p className="text-gray-600">We provide personalized attention and strategic advice to help your business grow.</p>
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
                        "We are a bamboo handicraft unit in Agartala. AMA Legal Solutions helped us register our trademark and protect our designs. Their service was excellent and very professional."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Subrata Deb</p>
                          <p className="text-sm text-gray-500">Agartala</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Registering a patent seemed daunting, but the team at AMA made it easy. They understood our invention and drafted the application perfectly. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Roy</p>
                          <p className="text-sm text-gray-500">Udaipur</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Intellectual Property Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work go unprotected. Partner with Tripura's trusted IPR experts.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Expert Advice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Have questions about Trademark or Patent registration in Tripura? Speak to our experts today.
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
            <GenericStatesGrid 
              serviceName="Intellectual Property Rights" 
              servicePath="intellectual-property-rights"
              customSlugs={{
                "Delhi": "delhi",
                "Gujarat": "gujarat",
                "Maharashtra": "maharashtra",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Tamil Nadu": "tamil-nadu",
                "Uttar Pradesh": "uttar-pradesh",
                "Puducherry": "puducherry"
              }}
            />
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
            "headline": "Intellectual Property Rights Services in Tripura",
            "description": "Comprehensive IPR services in Tripura including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-tripura.jpg",
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
            "name": "IPR Services Tripura",
            "image": "https://amalegalsolutions.com/services/ipr-tripura.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Tripura.",
            "brand": {
              "@type": "Brand",
              "name": "AMA Legal Solutions"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "130"
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
                  "name": "Subrata Deb"
                },
                "reviewBody": "We are a bamboo handicraft unit in Agartala. AMA Legal Solutions helped us register our trademark and protect our designs. Their service was excellent and very professional."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Anjali Roy"
                },
                "reviewBody": "Registering a patent seemed daunting, but the team at AMA made it easy. They understood our invention and drafted the application perfectly. Highly recommended."
              }
            ]
          })
        }}
      />
    </>
  );
}
