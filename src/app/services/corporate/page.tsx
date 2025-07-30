import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of corporate legal services do you provide?",
    answer: "We provide comprehensive corporate legal services including company registration, incorporation, startup compliance, MSME registration, partnership agreements, contract drafting, corporate governance, and regulatory compliance. Our corporate lawyers handle all aspects of business law."
  },
  {
    question: "How long does company registration take in India?",
    answer: "Company registration typically takes 15-20 working days in India, depending on the type of company and completeness of documentation. Our corporate lawyers ensure proper documentation and follow-up to expedite the process."
  },
  {
    question: "Can you help with startup compliance and regulations?",
    answer: "Yes, we specialize in startup compliance including company incorporation, regulatory filings, employment agreements, intellectual property protection, and ongoing compliance management to ensure your startup meets all legal requirements."
  },
  {
    question: "Do you provide contract drafting and review services?",
    answer: "Absolutely. We provide comprehensive contract drafting and review services for employment agreements, service contracts, partnership agreements, vendor contracts, and other business agreements to protect your interests."
  }
];

// FAQ Schema Markup for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: "Corporate Lawyers in India | Company Registration & Business Law – AMA Legal Solutions",
  description:
    "Expert corporate lawyers in India. AMA Legal Solutions provides company registration, incorporation, startup compliance, and corporate legal services. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/corporate',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Corporate Law Legal Services",
    bannerImage: "/services/8.png", // Replace with your actual image path
    description:
      "Our corporate law legal services provide comprehensive support for all business-related legal matters. We work closely with you to understand your corporate needs and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* FAQ Schema Markup - Using Next.js Script component for proper SSR */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
              Expert <span className="text-[#D2A02A]">Corporate Law</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Starting a business or need corporate legal assistance? Get professional legal help for company registration, incorporation, and corporate compliance with our experienced corporate lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Corporate Legal Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Corporate law encompasses all legal aspects of business operations, from formation to governance and compliance. Whether you're starting a new business, expanding operations, or ensuring regulatory compliance, having the right legal guidance is essential for business success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>corporate law</strong>, providing comprehensive legal services for company registration, incorporation, startup compliance, and corporate governance. Our expert <strong>corporate lawyers in India</strong> ensure your business operates within legal frameworks.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Corporate Law Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>corporate law services</strong> covering all aspects of business law, from initial formation to ongoing compliance and governance. Our expertise spans startups to established corporations.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>corporate lawyers</strong> ensure you get the best possible legal guidance while protecting your business interests throughout the corporate lifecycle.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Company registration & incorporation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Startup compliance & regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Contract drafting & review
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Corporate governance & compliance
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Corporate Law Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Company Registration</h3>
                <p className="text-gray-600 text-center">
                  <strong>Company registration</strong> and incorporation services including private limited, public limited, LLP, and partnership firm registration with complete documentation.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Startup Compliance</h3>
                <p className="text-gray-600 text-center">
                  <strong>Startup compliance</strong> services including MSME registration, regulatory filings, employment law compliance, and ongoing legal support for startups.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Contract Drafting</h3>
                <p className="text-gray-600 text-center">
                  <strong>Contract drafting</strong> and review services for employment agreements, service contracts, partnership agreements, and business contracts.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Corporate Governance</h3>
                <p className="text-gray-600 text-center">
                  <strong>Corporate governance</strong> and compliance services including board meetings, regulatory compliance, and corporate restructuring.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Corporate Matters
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Business Formation & Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We assist with all aspects of business formation and registration:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Company incorporation and registration with MCA</li>
                  <li>• LLP and partnership firm registration</li>
                  <li>• MSME registration and compliance</li>
                  <li>• Business structure optimization and legal advice</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Startup & Business Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced corporate lawyers ensure regulatory compliance:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Employment law compliance and HR policies</li>
                  <li>• Tax compliance and regulatory filings</li>
                  <li>• Intellectual property protection and registration</li>
                  <li>• Ongoing compliance monitoring and updates</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Contract & Legal Documentation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive contract and documentation services including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Employment agreements and HR documentation</li>
                  <li>• Service contracts and vendor agreements</li>
                  <li>• Partnership agreements and joint ventures</li>
                  <li>• Corporate governance documentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Corporate Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Processing</h3>
                <p className="text-gray-600">
                  Quick company registration and incorporation with minimal delays and efficient documentation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in corporate laws, business regulations, and startup compliance.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Protection</h3>
                <p className="text-gray-600">
                  Comprehensive risk assessment and legal protection to safeguard your business interests.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Management</h3>
                <p className="text-gray-600">
                  Ongoing compliance monitoring and regulatory updates to ensure your business stays compliant.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Startup Focus</h3>
                <p className="text-gray-600">
                  Specialized services for startups including compliance, funding, and growth-stage legal support.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in corporate law with numerous business formations and compliance cases.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Corporate Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Business Assessment</h3>
                  <p className="text-gray-300">Comprehensive business evaluation and legal structure planning</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Registration</h3>
                  <p className="text-gray-300">Company incorporation and registration with proper documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Compliance Setup</h3>
                  <p className="text-gray-300">Establish compliance framework and regulatory requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-300">Continuous legal support and compliance monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Corporate Law Services
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
                Have more questions about corporate law services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our corporate lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert legal assistance for company registration and corporate compliance today.
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
        </div>
      </div>
    </>
  );
}
