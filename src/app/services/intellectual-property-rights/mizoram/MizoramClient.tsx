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
  { label: "Mizoram", href: "/services/intellectual-property-rights/mizoram" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Mizoram" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function MizoramClient() {
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Mizoram</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding the unique heritage and entrepreneurial spirit of the Land of Blue Mountains. Expert IPR legal services for Trademarks, Patents, and GI Tags in Mizoram.
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
                    Empowering Innovation in Mizoram
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Mizoram, known as the "Land of the Hill People," is a state rich in culture, biodiversity, and traditional craftsmanship. From the intricate weaves of its handlooms to the cultivation of high-value spices like Bird's Eye Chilli, Mizoram possesses a wealth of intellectual assets. As the state moves towards economic modernization and sustainable development, the protection of these assets through <strong>Intellectual Property Rights (IPR)</strong> is becoming increasingly vital.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we are dedicated to supporting the artisans, farmers, and entrepreneurs of Mizoram. Whether you are a weaver in Aizawl, a ginger farmer in Serchhip, or a young innovator in Lunglei, securing your intellectual property is essential for long-term growth. We provide comprehensive legal services to help you identify, register, and enforce your rights.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the geographical distance between Mizoram and the national IP offices in Kolkata and Delhi. Our digital-first approach ensures that you receive world-class legal expertise without the need for physical travel. We handle the complexities of IP law, allowing you to focus on preserving your heritage and building your business.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for Mizoram
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In today's global economy, intellectual property is a key driver of value. For Mizoram, with its unique products and traditional knowledge, IPR offers a pathway to economic empowerment and cultural preservation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Preserving Heritage</h3>
                      <p className="text-gray-700">
                        Geographical Indications (GI) protect the unique identity of Mizo textiles like Pawndum and Puanchei, ensuring that the traditional skills of weavers are recognized and rewarded.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Boosting Agriculture</h3>
                      <p className="text-gray-700">
                        Registered IP rights for agricultural products like Mizo Chilli and Ginger help farmers access premium markets and prevent the sale of inferior substitutes.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Supporting Startups</h3>
                      <p className="text-gray-700">
                        For the emerging startup ecosystem in Aizawl, trademarks and patents are essential assets that attract investment and build brand credibility.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Legal Protection</h3>
                      <p className="text-gray-700">
                        Registration gives you the legal standing to take action against counterfeiters. This is vital for protecting the "Mizo" brand from misuse in national and international markets.
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
                    Your brand name is your promise to your customers. In the growing markets of tourism, food processing, and retail in Mizoram, a registered trademark sets you apart. It protects your logo, brand name, and reputation from unauthorized use.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Trademark Solutions:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Comprehensive Search:</strong> We conduct thorough searches to ensure your brand name or logo is unique and available for registration.</li>
                    <li><strong>Strategic Filing:</strong> We advise on the appropriate classes for your goods/services (e.g., Class 24 for textiles, Class 30 for spices) to ensure broad protection.</li>
                    <li><strong>Objection Handling:</strong> If the Registry raises objections, our experienced attorneys draft legally sound responses to overcome them.</li>
                    <li><strong>Opposition Proceedings:</strong> We defend your application against third-party oppositions and prosecute oppositions against infringing marks.</li>
                    <li><strong>Portfolio Management:</strong> We handle renewals, assignments, and licensing agreements to keep your trademark rights active and profitable.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Note for Entrepreneurs:</strong> Startups and MSMEs in Mizoram are eligible for significant government fee rebates. We help you claim these benefits to reduce your registration costs.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Inventors
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is taking root in Mizoram's educational institutions and research centers. Whether it's a new agricultural tool, a food processing method, or a software solution, a patent secures your invention for 20 years.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Patenting is a technical legal process that requires precise drafting. Our team of patent agents, with expertise in various scientific domains, ensures your application is robust and capable of withstanding scrutiny.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patent Services:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Patentability Search</h4>
                        <p className="text-gray-700">We evaluate your invention against existing technologies to determine its novelty.</p>
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
                    Mizoram is known for its vibrant music scene and rich literary tradition. Copyright law protects the rights of creators over their literary, musical, dramatic, and artistic works.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist musicians, authors, filmmakers, and software developers in registering their copyrights. This registration serves as prima facie evidence of ownership in court, which is essential for fighting piracy and unauthorized distribution.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For Mizoram's handicraft sector, the visual appeal of a product—be it a bamboo craft, a textile pattern, or a furniture design—is its main selling point. The Designs Act protects these aesthetic features.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering your design prevents others from copying the look and feel of your product. We help artisans and manufacturers secure these rights to maintain the exclusivity of their craftsmanship.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Mizoram
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Mizoram has a proud collection of GI-tagged products that showcase its cultural identity and agricultural prowess. These tags are a guarantee of authenticity and quality, protecting the livelihoods of local producers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mizo Chilli (Bird's Eye Chilli)</h3>
                      <p className="text-gray-700">
                        Known locally as "Hmarcha," this small chilli is famous for its extreme pungency and distinct flavor. The GI tag helps farmers market this high-value spice globally.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Pawndum</h3>
                      <p className="text-gray-700">
                        A traditional Mizo cloth with deep cultural significance, often used as a mark of respect or mourning. The GI tag protects the traditional weaving methods and patterns.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Ngotekherh</h3>
                      <p className="text-gray-700">
                        A traditional Puan (wrap-around skirt) featuring black and white stripes. It is a symbol of Mizo identity and is worn on special occasions.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mizo Ginger</h3>
                      <p className="text-gray-700">
                        Known for its low fiber content and high gingerol, Mizo Ginger is a premium variety. The GI tag ensures that only ginger grown in Mizoram can carry this name.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist producer groups in filing for new GI tags and help authorized users register to use the official GI logo on their packaging, enhancing the marketability of their products.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have simplified the IPR registration process to make it accessible for everyone in Mizoram, from remote artisans to city-based businesses.
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
                    We are committed to bringing professional, reliable, and affordable legal services to the people of Mizoram.
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
                        "I am a weaver from Aizawl. AMA Legal Solutions helped me understand the importance of the GI tag for my Pawndum designs. They made the registration process very easy."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">L</div>
                        <div>
                          <p className="font-bold text-gray-900">Lalremruati</p>
                          <p className="text-sm text-gray-500">Aizawl</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We run a food processing unit in Lunglei. The team at AMA handled our trademark registration efficiently. Their digital service is a blessing for businesses in Mizoram."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">Z</div>
                        <div>
                          <p className="font-bold text-gray-900">Zothanpuii</p>
                          <p className="text-sm text-gray-500">Lunglei</p>
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
                      Don't leave your hard work unprotected. Partner with Mizoram's most trusted IPR legal experts.
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
                    Have questions about Trademark or Patent registration in Mizoram? Talk to us today.
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
            "headline": "Intellectual Property Rights Services in Mizoram",
            "description": "Comprehensive IPR services in Mizoram including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-mizoram.jpg",
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
            "name": "IPR Services Mizoram",
            "image": "https://amalegalsolutions.com/services/ipr-mizoram.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Mizoram.",
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
                  "name": "Lalremruati"
                },
                "reviewBody": "I am a weaver from Aizawl. AMA Legal Solutions helped me understand the importance of the GI tag for my Pawndum designs. They made the registration process very easy."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Zothanpuii"
                },
                "reviewBody": "We run a food processing unit in Lunglei. The team at AMA handled our trademark registration efficiently. Their digital service is a blessing for businesses in Mizoram."
              }
            ]
          })
        }}
      />
    </>
  );
}
