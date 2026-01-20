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
  { label: "Chhattisgarh", href: "/services/intellectual-property-rights/chhattisgarh" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Chhattisgarh" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function ChhattisgarhClient() {
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
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Chhattisgarh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting the innovation and heritage of the Rice Bowl of India. Expert IPR legal services for Trademarks, Patents, and GI Tags in Chhattisgarh.
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
                    Empowering Innovation in Chhattisgarh
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chhattisgarh, known as the "Rice Bowl of India," is a state of immense potential. From its rich mineral resources and booming steel industry to its exquisite tribal handicrafts and agricultural diversity, the state is a hub of economic activity. As Chhattisgarh accelerates its industrial growth and promotes its cultural heritage, the protection of <strong>Intellectual Property Rights (IPR)</strong> becomes indispensable.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we are committed to supporting the entrepreneurs, artisans, and innovators of Chhattisgarh. Whether you are a steel manufacturer in Bhilai, a Dhokra artisan in Bastar, or a tech startup in Raipur, securing your intellectual property is the key to sustainable success. We provide comprehensive legal services to help you identify, register, and enforce your rights.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the gap between Chhattisgarh and the national IP offices. Our digital-first approach ensures that you receive top-tier legal expertise without the need to travel to Mumbai or Delhi. We handle the complexities of IP law, allowing you to focus on growing your business and preserving your heritage.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Vital for Chhattisgarh's Economy
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a rapidly evolving market, intellectual property is a strategic asset. For a resource-rich state like Chhattisgarh, IPR offers a way to move up the value chain and protect local distinctiveness.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Protecting Tribal Art</h3>
                      <p className="text-gray-700">
                        Geographical Indications (GI) protect the unique craftsmanship of Bastar's tribal communities, ensuring that their traditional knowledge is not exploited by mass manufacturers.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">Enhancing Agriculture</h3>
                      <p className="text-gray-700">
                        Registered IP rights for unique crop varieties like Jeeraphool Rice help farmers command better prices and access premium markets.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Fostering Industry</h3>
                      <p className="text-gray-700">
                        For the industrial hubs of Raipur and Bhilai, patents and trademarks are essential for protecting technological innovations and building strong corporate brands.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Attracting Investment</h3>
                      <p className="text-gray-700">
                        A robust IP portfolio signals to investors that a business is innovative and legally secure, making it easier to raise capital for expansion.
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
                    In the competitive markets of Bilaspur, Durg, and Korba, a strong brand is your biggest asset. Registering your trademark protects your brand name, logo, and reputation from infringement.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Trademark Services:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Comprehensive Search:</strong> We conduct thorough searches to ensure your proposed mark is unique and available for registration.</li>
                    <li><strong>Strategic Filing:</strong> We advise on the correct classification of goods and services (e.g., Class 6 for metal goods, Class 30 for rice) to ensure maximum protection.</li>
                    <li><strong>Objection Management:</strong> If the Registry raises objections, our expert attorneys draft persuasive responses to secure acceptance.</li>
                    <li><strong>Opposition Defense:</strong> We represent you in opposition proceedings if a third party challenges your application.</li>
                    <li><strong>Renewal & Maintenance:</strong> We track deadlines and handle renewals to keep your trademark rights active indefinitely.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Did You Know?</strong> MSMEs in Chhattisgarh are eligible for significant fee rebates on trademark filing. We help you claim these benefits to reduce your costs.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Inventors
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Innovation is driving growth in Chhattisgarh's industrial and agricultural sectors. Whether it's a new mining technology or an agricultural implement, a patent gives you the exclusive right to commercialize your invention for 20 years.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The patenting process is complex and requires technical and legal expertise. Our team of patent agents works closely with you to draft a robust application that provides the broadest possible protection for your invention.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patent Workflow:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Prior Art Search</h4>
                        <p className="text-gray-700">We search global databases to ensure your invention is novel and non-obvious.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting</h4>
                        <p className="text-gray-700">We prepare the complete specification, ensuring all technical details and claims are accurately described.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Filing & Prosecution</h4>
                        <p className="text-gray-700">We file the application and handle all correspondence with the Patent Office, including responding to examination reports.</p>
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
                    Chhattisgarh has a vibrant cultural scene, with a rich tradition of folk music, dance, and literature. Copyright law protects the rights of creators over their literary, musical, dramatic, and artistic works.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, musicians, filmmakers, and software developers in registering their copyrights. This registration serves as prima facie evidence of ownership, which is essential for enforcing your rights against piracy.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For manufacturers and artisans, the visual appeal of a product is often a key selling point. The Designs Act protects the aesthetic features of an article, such as its shape, pattern, or configuration.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether it's a unique furniture design, a textile pattern, or a handicraft item, registering it as an Industrial Design prevents others from copying the look of your product.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Chhattisgarh
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chhattisgarh is home to several unique products that have earned Geographical Indication (GI) tags. These tags certify the origin and quality of the products, boosting their market value and protecting traditional livelihoods.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Bastar Dhokra</h3>
                      <p className="text-gray-700">
                        A traditional metal casting art form practiced by the tribes of Bastar. Known for its intricate designs and use of the lost-wax technique. The GI tag protects this ancient craft from imitation.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Bastar Wooden Craft</h3>
                      <p className="text-gray-700">
                        Exquisite wood carvings depicting tribal life, deities, and animals. The GI tag ensures that only authentic wooden crafts from Bastar can be sold under this name.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Bastar Iron Craft</h3>
                      <p className="text-gray-700">
                        Wrought iron artifacts made by the Lohar community. These items are known for their rustic appeal and durability. The GI tag helps preserve this traditional skill.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Jeeraphool Rice</h3>
                      <p className="text-gray-700">
                        An ancient aromatic rice variety from the Sarguja district. It is known for its small grain size and distinct flavor. The GI tag helps farmers market this premium rice effectively.
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
                    Our Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have streamlined the IPR registration process to be simple, transparent, and efficient for our clients in Chhattisgarh.
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
                          We conduct rigorous searches to ensure your IP is unique. This step is critical to avoid rejection and future legal disputes.
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
                    We are dedicated to providing world-class legal services with a deep understanding of Chhattisgarh's business landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Digital Convenience</h3>
                      <p className="text-gray-600">Access expert legal services from anywhere in Chhattisgarh. No need to travel to metro cities.</p>
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
                        "We are a handicraft cooperative in Bastar. AMA Legal Solutions helped us register our GI authorized user status. Their support was invaluable in protecting our traditional art."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ramesh Baghel</p>
                          <p className="text-sm text-gray-500">Jagdalpur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I needed a trademark for my new food processing unit in Raipur. The team at AMA made the process smooth and hassle-free. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Agrawal</p>
                          <p className="text-sm text-gray-500">Raipur</p>
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
                      Don't let your hard work go unprotected. Partner with Chhattisgarh's trusted IPR experts.
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
                    Have questions about Trademark or Patent registration in Chhattisgarh? Speak to our experts today.
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
                "Delhi": "Delhi",
                "Gujarat": "Gujarat",
                "Maharashtra": "Maharashtra",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Tamil Nadu": "TamilNadu",
                "Uttar Pradesh": "UttarPradesh",
                "Puducherry": "pudducherry"
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
            "headline": "Intellectual Property Rights Services in Chhattisgarh",
            "description": "Comprehensive IPR services in Chhattisgarh including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://amalegalsolutions.com/services/ipr-chhattisgarh.jpg",
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
            "name": "IPR Services Chhattisgarh",
            "image": "https://amalegalsolutions.com/services/ipr-chhattisgarh.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Chhattisgarh.",
            "brand": {
              "@type": "Brand",
              "name": "AMA Legal Solutions"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "135"
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
                  "name": "Ramesh Baghel"
                },
                "reviewBody": "We are a handicraft cooperative in Bastar. AMA Legal Solutions helped us register our GI authorized user status. Their support was invaluable in protecting our traditional art."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Suresh Agrawal"
                },
                "reviewBody": "I needed a trademark for my new food processing unit in Raipur. The team at AMA made the process smooth and hassle-free. Highly recommended."
              }
            ]
          })
        }}
      />
    </>
  );
}
