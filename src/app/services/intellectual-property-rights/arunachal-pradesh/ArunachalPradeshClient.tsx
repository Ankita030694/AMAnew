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
  { label: "Arunachal Pradesh", href: "/services/intellectual-property-rights/arunachal-pradesh" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Arunachal Pradesh" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function ArunachalPradeshClient() {
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Arunachal Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting the heritage and innovation of the Land of Dawn-Lit Mountains. Expert IPR legal services for Trademarks, Patents, and GI Tags in Arunachal Pradesh.
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
                    Empowering Innovation in Arunachal Pradesh
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Arunachal Pradesh, the largest state in Northeast India, is a land of immense cultural diversity, biodiversity, and untapped potential. From the fertile valleys producing unique agricultural products to the vibrant handloom traditions of its tribes, the state is a treasure trove of intellectual capital. As the state moves towards sustainable development and economic modernization, the role of <strong>Intellectual Property Rights (IPR)</strong> becomes increasingly critical.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we are committed to helping the entrepreneurs, artisans, farmers, and innovators of Arunachal Pradesh protect their creations. Whether you are a startup in Itanagar, an orange grower in Wakro, or a textile weaver in the Changlang district, securing your intellectual property is the first step towards commercial success and global recognition.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We understand the unique challenges of the region. While the patent office in Kolkata and the trademark registry in Mumbai/Kolkata may seem distant, our digital-first legal services bring the IP office to your doorstep. We provide comprehensive support for registration, enforcement, and commercialization of your IP assets.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR Matters for Arunachal Pradesh
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a digital age, the value of a business lies not just in its physical stock but in its ideas and brand reputation. For a state like Arunachal Pradesh, which is focusing on tourism, organic agriculture, and handicrafts, IPR is the tool that turns local heritage into global brands.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Preserving Heritage</h3>
                      <p className="text-gray-700">
                        Traditional Knowledge and Geographical Indications (GI) protect the unique cultural expressions and agricultural products of the state from being misappropriated by outsiders.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Boosting Agribusiness</h3>
                      <p className="text-gray-700">
                        For products like Kiwi, Orange, and Large Cardamom, branding and GI certification can significantly increase market value and export potential.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Supporting Startups</h3>
                      <p className="text-gray-700">
                        A registered trademark or patent is a key asset for startups seeking funding. It demonstrates credibility and innovation to investors.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Preventing Counterfeits</h3>
                      <p className="text-gray-700">
                        Legal protection allows you to take action against anyone selling fake or inferior quality goods under your brand name, protecting your reputation.
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
                    A trademark is more than just a logo; it is the symbol of your business's goodwill. In the growing markets of Pasighat, Tawang, and Itanagar, establishing a distinct brand identity is crucial for customer retention.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Trademark Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Brand Name Search:</strong> We conduct thorough searches to ensure your proposed brand name is unique and available for registration.</li>
                    <li><strong>Class Selection:</strong> We help you identify the correct Nice Classification for your goods or services (e.g., Class 30 for tea/coffee, Class 25 for clothing).</li>
                    <li><strong>Filing & Prosecution:</strong> We file your application (Form TM-A) and handle all subsequent legal procedures, including responding to examination reports.</li>
                    <li><strong>Renewal & Maintenance:</strong> We track deadlines to ensure your trademark registration is renewed every 10 years, keeping your rights alive indefinitely.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Did You Know?</strong> Startups and MSMEs in Arunachal Pradesh are eligible for a 50% rebate on official government fees for trademark filing. We help you claim these benefits.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Inventors
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is taking root in Arunachal Pradesh, supported by institutions like NIT Arunachal Pradesh and NERIST. If you have invented a new product or process, a patent gives you the exclusive right to commercialize it for 20 years.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Patenting is a complex legal-technical process. It requires describing your invention in a specific legal format to ensure broad protection. Our team of patent agents specializes in various fields including agriculture technology, engineering, and pharmaceuticals.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Steps in Patenting:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Prior Art Search</h4>
                        <p className="text-gray-700">Checking global databases to ensure your invention is truly new.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting</h4>
                        <p className="text-gray-700">Preparing the Provisional or Complete Specification with detailed claims and drawings.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Filing & Examination</h4>
                        <p className="text-gray-700">Submitting the application and requesting examination. We respond to any technical objections raised by the Patent Office.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Copyright Protection */}
                <section id="copyright" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Copyright for Creative Minds
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Arunachal Pradesh has a vibrant culture of music, literature, and art. Copyright law protects literary, dramatic, musical, and artistic works, as well as cinematograph films and sound recordings.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, musicians, filmmakers, and software developers in registering their copyrights. This registration acts as a powerful deterrent against piracy and is essential for licensing your work to others.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For artisans and manufacturers, the visual appeal of a product is often its selling point. The Designs Act protects the shape, configuration, pattern, or ornament of an article.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether it's a unique furniture design, a handicraft pattern, or a packaging shape, registering it as an Industrial Design prevents others from copying the look of your product.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Arunachal Pradesh
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Arunachal Pradesh has been proactive in securing GI tags for its indigenous products. These tags certify the origin and quality of the products, boosting their market value and protecting traditional knowledge.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Arunachal Wakro Orange</h3>
                      <p className="text-gray-700">
                        Grown in the Lohit district, this mandarin orange is famous for its sweetness, juice content, and long shelf life. The GI tag helps farmers command a premium price in national markets.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Idu Mishmi Textiles</h3>
                      <p className="text-gray-700">
                        The Idu Mishmi tribe is known for their intricate handloom designs, particularly the diamond and rhomboid patterns. The GI tag protects this traditional weaving art from imitation.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Yak Churpi</h3>
                      <p className="text-gray-700">
                        A traditional fermented cheese made from the milk of Arunachali Yaks. It is a staple food for the high-altitude tribes and has now gained recognition as a unique GI product.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Khamti Rice</h3>
                      <p className="text-gray-700">
                        A variety of sticky rice grown by the Khamti tribe in Namsai district. It is known for its distinct aroma and taste, making it a sought-after delicacy.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We work with producer groups, cooperative societies, and government bodies to file for new GI tags and help authorized users register to use the GI logo on their packaging.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We make the IPR registration process simple, transparent, and hassle-free for our clients in Arunachal Pradesh.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We discuss your business needs and identify which IP assets (Trademark, Patent, etc.) need protection. We provide a clear roadmap and cost estimate.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Search & Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We perform comprehensive database searches to ensure your IP is unique and does not infringe on existing rights. This step is crucial to avoid rejection.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Documentation & Filing</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our experts draft the necessary legal documents and file them online with the respective IP offices. You receive the filing receipt and application number immediately.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitoring & Grant</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We monitor the status of your application, respond to any office actions, and guide you until the registration certificate is granted.
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
                    We are dedicated to bringing world-class legal services to the remote corners of Arunachal Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">100% Online Process</h3>
                      <p className="text-gray-600">No need to travel to metro cities. We handle everything digitally via email and video calls.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Expert Protection</h3>
                      <p className="text-gray-600">Our team comprises experienced lawyers and patent agents who understand the nuances of IP law.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Affordable Pricing</h3>
                      <p className="text-gray-600">Transparent pricing with no hidden costs. We offer special packages for startups and MSMEs.</p>
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
                        "I run a small organic tea business in Pasighat. AMA Legal Solutions helped me register my brand name. The process was so smooth, and I didn't have to leave my town even once."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">T</div>
                        <div>
                          <p className="font-bold text-gray-900">Tashi Dorjee</p>
                          <p className="text-sm text-gray-500">Pasighat</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed help with patenting a new agricultural tool. The team at AMA was very knowledgeable and guided us through the technical drafting process perfectly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Pema Khandu</p>
                          <p className="text-sm text-gray-500">Itanagar</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Ideas?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Secure your brand and innovations with Arunachal Pradesh's most trusted IPR legal partners.
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
                    Have questions about Trademark or Patent registration in Arunachal Pradesh? Talk to us today.
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
            "headline": "Intellectual Property Rights Services in Arunachal Pradesh",
            "description": "Comprehensive IPR services in Arunachal Pradesh including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-arunachal-pradesh.jpg",
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
            "name": "IPR Services Arunachal Pradesh",
            "image": "https://amalegalsolutions.com/services/ipr-arunachal-pradesh.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Arunachal Pradesh.",
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
                  "name": "Tashi Dorjee"
                },
                "reviewBody": "I run a small organic tea business in Pasighat. AMA Legal Solutions helped me register my brand name. The process was so smooth, and I didn't have to leave my town even once."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Pema Khandu"
                },
                "reviewBody": "We needed help with patenting a new agricultural tool. The team at AMA was very knowledgeable and guided us through the technical drafting process perfectly."
              }
            ]
          })
        }}
      />
    </>
  );
}
