"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

interface Content {
  title: string;
  description: string;
  city: string;
  state: string;
  jurisdiction: string;
  specializations: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface DraftingClientProps {
  content: Content;
  faqs: FAQ[];
}

export default function DraftingClient({ content, faqs }: DraftingClientProps) {
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "state-info", title: "State Information" },
    { id: "services", title: "Our Services" },
    { id: "expertise", title: "Our Expertise" },
    { id: "how-we-help", title: "How We Help" },
    { id: "benefits", title: "Benefits" },
    { id: "process", title: "Our Process" },
    { id: "faqs", title: "FAQs" },
    { id: "contact", title: "Contact" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
        <img
          src="/services/12.png"
          alt={`Legal Drafting Services in ${content.state}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Table of Contents */}
      <TableOfContents sections={sections} />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        
        {/* Hero Section */}
        <div id="hero" className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Expert <span className="text-[#D2A02A]">Legal Drafting</span> Services in {content.state}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Need legal document drafting in {content.city}? Get professional legal help for contract drafting, legal document writing, and legal drafting services with our experienced drafting lawyers in {content.state}.
          </p>
        </div>

        {/* State-Specific Information */}
        <section id="state-info" className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Legal Drafting Services in {content.state}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our legal drafting services in {content.city}, {content.state} are designed to provide comprehensive legal document preparation. We understand the local legal requirements and work within the jurisdiction of the {content.jurisdiction} to ensure your legal documents are professionally drafted.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>drafting lawyers in {content.state}</strong> ensure you get the best possible legal documents while protecting your interests and legal rights.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Specializations</h3>
                <ul className="space-y-3 text-gray-700">
                  {content.specializations.map((specialization, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      {specialization}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Jurisdiction:</strong> {content.jurisdiction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Legal Drafting Services in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide comprehensive <strong>legal drafting services in {content.city}</strong> covering all aspects of legal document preparation, from contract drafting to legal opinion writing. Our expertise spans all areas of legal drafting within the {content.jurisdiction} jurisdiction.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  Our expert <strong>drafting lawyers in {content.state}</strong> ensure you get the best possible legal documents while protecting your interests and legal rights.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services in {content.state}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Contract drafting & agreements
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Legal document writing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Legal opinion writing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Legal notice drafting
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="expertise" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Legal Drafting Expertise in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Contract Drafting</h3>
              <p className="text-gray-600 text-center">
                <strong>Contract drafting</strong> including commercial contracts, employment agreements, partnership agreements, and service contracts in {content.state}.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✍️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Legal Document Writing</h3>
              <p className="text-gray-600 text-center">
                <strong>Legal document writing</strong> including legal notices, legal memoranda, and various legal documents with proper legal language within {content.jurisdiction} jurisdiction.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Agreement Drafting</h3>
              <p className="text-gray-600 text-center">
                <strong>Agreement drafting</strong> including business agreements, property agreements, service agreements, and various commercial agreements.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Legal Opinion Writing</h3>
              <p className="text-gray-600 text-center">
                <strong>Legal opinion writing</strong> including legal analysis, legal advice, and comprehensive legal opinions on various legal matters.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section id="how-we-help" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How AMA Legal Solutions Helps with Legal Drafting in {content.state}
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Legal Document Analysis & Preparation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide comprehensive legal document analysis and preparation for clients in {content.state}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Legal requirement analysis and document planning</li>
                <li>• Legal research and precedent analysis</li>
                <li>• Understanding local legal requirements in {content.jurisdiction}</li>
                <li>• Client consultation and requirement gathering</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Professional Legal Drafting</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our experienced drafting lawyers provide professional legal drafting services in {content.city}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Contract drafting and agreement preparation</li>
                <li>• Legal document writing and legal notices</li>
                <li>• Legal opinion writing and legal analysis</li>
                <li>• Document review and revision services</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Document Review & Finalization</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive document review and finalization services:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Legal document review and quality assurance</li>
                <li>• Legal language refinement and structure optimization</li>
                <li>• Compliance verification and legal accuracy</li>
                <li>• Final document delivery and ongoing support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Choosing Our Drafting Lawyers in {content.state}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Drafting</h3>
              <p className="text-gray-600">
                Professional legal drafting with deep understanding of legal requirements in {content.state}.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Language</h3>
              <p className="text-gray-600">
                Proper legal language and structure with comprehensive legal terminology.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agreement Expertise</h3>
              <p className="text-gray-600">
                Specialized expertise in contract drafting and agreement preparation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Opinions</h3>
              <p className="text-gray-600">
                Comprehensive legal opinion writing and legal analysis services.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Review</h3>
              <p className="text-gray-600">
                Thorough document review and quality assurance processes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Successful track record in legal drafting with numerous satisfied clients in {content.state}.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="mb-20">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Proven 4-Step Legal Drafting Process in {content.state}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Requirement Analysis</h3>
                <p className="text-gray-300">Comprehensive legal requirement analysis and document planning for {content.state} jurisdiction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Legal Research</h3>
                <p className="text-gray-300">Thorough legal research and precedent analysis for document preparation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Document Drafting</h3>
                <p className="text-gray-300">Professional legal document drafting and preparation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Review & Finalization</h3>
                <p className="text-gray-300">Document review, quality assurance, and final delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQs on Legal Drafting Services in {content.state}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Have more questions about legal drafting services in {content.state}?
            </p>
            <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
              Contact our drafting lawyers in {content.city} for expert advice →
            </Link>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Drafting Services in {content.state}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert legal assistance for legal document drafting and legal writing in {content.city}, {content.state} today.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Call Now</p>
                <p className="text-lg">+91-8700343611</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-semibold">Visit Online</p>
                <a href="http://www.amalegalsolutions.com" className="text-lg hover:underline">
                  www.amalegalsolutions.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Office Location</p>
                <p className="text-lg">Sector-57, Gurugram</p>
              </div>
            </div>
          </div>
          
          <Link href="/contact">
            <div className="inline-block bg-white text-[#D2A02A] px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started with Legal Drafting
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
