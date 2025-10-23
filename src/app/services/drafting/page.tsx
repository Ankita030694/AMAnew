import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of legal drafting services do you provide?",
    answer: "We provide comprehensive legal drafting services including contract drafting, agreement preparation, legal documents, corporate documentation, and legal notices. Our drafting lawyers handle all aspects of legal document preparation."
  },
  {
    question: "How important is proper legal document drafting?",
    answer: "Proper legal document drafting is crucial for protecting your interests and avoiding future disputes. Our drafting lawyers ensure documents are legally sound, comprehensive, and enforceable in courts of law."
  },
  {
    question: "Can you help with contract drafting and review?",
    answer: "Yes, we specialize in contract drafting and review including business contracts, employment agreements, service contracts, partnership agreements, and vendor contracts with expertise in contract law and best practices."
  },
  {
    question: "Do you provide corporate documentation services?",
    answer: "Absolutely. We provide corporate documentation services including board resolutions, shareholder agreements, corporate policies, and compliance documentation with expertise in corporate laws and regulations."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Legal Drafting Services in India",
  "description": "Expert legal drafting services in India. AMA Legal Solutions provides contract drafting, legal documentation, and agreement preparation services.",
  "url": "https://amalegalsolutions.com/services/drafting",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Legal Drafting Services FAQs",
    "description": "Frequently asked questions about legal drafting services, contract drafting, and legal documentation in India",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
};

export const metadata = {
  title: "Legal Document Drafting Services in India | Contract & Agreement Drafting – AMA Legal Solutions",
  description:
    "Expert legal document drafting services in India. AMA Legal Solutions provides contract drafting, agreement preparation, legal notices, and document review services. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/drafting',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Legal Document Drafting Services",
    bannerImage: "/services/12.png", // Replace with your actual image path
    description:
      "Our legal document drafting services provide comprehensive support for all legal document needs. We work closely with you to understand your requirements and deliver accurate, legally valid documents.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="drafting-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
          <img
            src={service.bannerImage}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Expert <span className="text-[#D2A02A]">Legal Document Drafting</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Need professionally drafted legal documents? Get expert legal drafting services for contracts, agreements, notices, and all legal documents with our experienced drafting lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Professional Legal Document Drafting & Review
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Legal documents form the foundation of all legal transactions and relationships. Whether you need contracts, agreements, legal notices, or compliance documents, having professionally drafted legal documents is crucial for protecting your interests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>legal document drafting</strong>, providing comprehensive services for contract drafting, agreement preparation, legal notices, and document review. Our expert <strong>legal drafting lawyers in India</strong> ensure your documents are legally sound and protect your interests.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Legal Document Drafting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>legal document drafting services</strong> covering all types of legal documents, from simple agreements to complex contracts. Our expertise spans individual documents to corporate legal documentation.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>legal drafting lawyers</strong> ensure you get professionally drafted documents that are legally valid and protect your interests.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Contract & agreement drafting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Legal notices & petitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Document review & modification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Compliance documentation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Legal Drafting Expertise
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
                  <strong>Contract drafting</strong> services including business contracts, employment agreements, partnership deeds, and commercial agreements with legal protection clauses.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Legal Notices</h3>
                <p className="text-gray-600 text-center">
                  <strong>Legal notices</strong> and demand letters including notice drafting, legal correspondence, and formal communication with proper legal language and structure.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Document Review</h3>
                <p className="text-gray-600 text-center">
                  <strong>Document review</strong> and modification services including legal analysis, risk assessment, and improvement suggestions for existing documents.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Corporate Documents</h3>
                <p className="text-gray-600 text-center">
                  <strong>Corporate documents</strong> including company policies, compliance documents, board resolutions, and corporate governance documentation.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Legal Document Drafting
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Document Assessment & Requirements Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We analyze your requirements and assess document needs:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Understanding your specific legal requirements</li>
                  <li>• Identifying necessary clauses and protections</li>
                  <li>• Determining appropriate legal structure and format</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Professional Document Drafting</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced legal drafting experts create comprehensive documents:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Drafting legally valid and enforceable documents</li>
                  <li>• Including necessary legal protections and clauses</li>
                  <li>• Ensuring compliance with applicable laws and regulations</li>
                  <li>• Providing clear and unambiguous language</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Document Review & Finalization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive document review and finalization including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Thorough legal review and validation</li>
                  <li>• Risk assessment and mitigation strategies</li>
                  <li>• Client consultation and modifications</li>
                  <li>• Final document preparation and execution guidance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Legal Drafting Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Expertise</h3>
                <p className="text-gray-600">
                  Expert legal drafting with deep understanding of laws, regulations, and legal requirements.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Protection</h3>
                <p className="text-gray-600">
                  Comprehensive risk assessment and protection clauses to safeguard your interests.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Quick document drafting with efficient turnaround times while maintaining quality.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Review</h3>
                <p className="text-gray-600">
                  Thorough document review and modification services to ensure legal validity.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Solutions</h3>
                <p className="text-gray-600">
                  Tailored document drafting based on your specific requirements and legal needs.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in legal document drafting with numerous satisfied clients.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Document Drafting Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Requirements Analysis</h3>
                  <p className="text-gray-300">Comprehensive analysis of your legal document requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Document Drafting</h3>
                  <p className="text-gray-300">Professional drafting with legal protections and clauses</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Review</h3>
                  <p className="text-gray-300">Thorough legal review and validation of documents</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Finalization</h3>
                  <p className="text-gray-300">Document finalization and execution guidance</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Legal Document Drafting Services
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
                Have more questions about legal document drafting services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our legal drafting experts for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Legal Document Drafting?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal document drafting services and protect your interests today.
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
            
            <Link href={service.buttonLink}>
              <div className="inline-block bg-white text-[#D2A02A] px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                {service.buttonText}
              </div>
            </Link>
          </section>

          <GenericStatesGrid serviceName="Legal Drafting" servicePath="drafting" />
        </div>
      </div>
    </>
  );
}