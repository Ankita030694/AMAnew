import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of banking and finance legal services do you provide?",
    answer: "We provide comprehensive banking and finance legal services including loan documentation, regulatory compliance, banking disputes, financial contracts, RBI compliance, and banking litigation. Our banking lawyers handle all aspects of financial law."
  },
  {
    question: "Can you help with banking regulatory compliance?",
    answer: "Yes, we specialize in banking regulatory compliance including RBI guidelines, banking regulations, compliance audits, and regulatory filings. Our experts ensure your banking operations meet all legal requirements."
  },
  {
    question: "Do you handle banking disputes and litigation?",
    answer: "Absolutely. We handle banking disputes, loan recovery cases, banking litigation, and represent clients in banking-related legal proceedings with expertise in banking laws and regulations."
  },
  {
    question: "What banking documentation services do you offer?",
    answer: "We offer comprehensive banking documentation services including loan agreements, security documents, banking contracts, compliance documentation, and regulatory filings for banks and financial institutions."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Banking and Finance Legal Services in India",
  "description": "Expert banking and finance lawyers in India. AMA Legal Solutions provides banking legal services, regulatory compliance, and financial law expertise.",
  "url": "https://amalegalsolutions.com/services/banking-and-finance",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Banking and Finance Services FAQs",
    "description": "Frequently asked questions about banking and finance legal services, regulatory compliance, and financial law in India",
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
  title: "Banking & Finance Lawyers in India | Expert Legal Solutions – AMA Legal Solutions",
  description:
    "Need expert banking and finance lawyers? AMA Legal Solutions provides trusted legal advice on loan disputes, financial regulations, and corporate finance matters. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/banking-and-finance',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Banking & Finance Legal Services",
    bannerImage: "/services/2.png", // Replace with your actual image path
    description:
      "Our banking and finance legal services provide expert guidance for all financial disputes and regulatory compliance matters. We work closely with you to understand your requirements and deliver solutions that exceed your expectations.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="banking-finance-webpage-schema"
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
              Expert <span className="text-[#D2A02A]">Banking & Finance</span> Legal Solutions in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing banking disputes or financial legal issues? Get professional legal help for banking and finance matters with our experienced banking lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Banking & Financial Legal Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's fast-paced financial world, banking and financial disputes have become increasingly common, affecting both individuals and businesses. Whether it's a loan default, cheque bounce case, banking fraud, or corporate financial dispute, having the right legal experts by your side is crucial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in banking and financial dispute litigation, providing legal solutions tailored to your needs. With a team of seasoned <strong>banking lawyers in Gurugram</strong>, we ensure swift and effective resolution of your financial legal matters.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Banking & Financial Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>banking and finance legal services</strong> covering all aspects of financial disputes, regulatory compliance, and corporate finance matters. Our expertise spans from individual banking issues to complex corporate financial litigation.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>banking dispute lawyers</strong> ensure you get the best possible legal representation while protecting your financial interests throughout the process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Loan default & debt recovery litigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Cheque bounce & dishonored payments
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Banking & financial fraud assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Corporate & commercial banking disputes
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Banking & Financial Legal Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Loan Default & Debt Recovery</h3>
                <p className="text-gray-600 text-center">
                  Legal action against unlawful debt recovery tactics, DRT cases, and <strong>SARFAESI Act</strong> representation for secured loan disputes.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏦</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cheque Bounce Cases</h3>
                <p className="text-gray-600 text-center">
                  Legal notices under Section 138, defense in false allegations, and representation in cheque dishonor complaints.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🛡️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Banking Fraud Protection</h3>
                <p className="text-gray-600 text-center">
                  Legal support for victims of financial fraud, phishing scams, and unauthorized transactions with regulatory bodies.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Corporate Banking Disputes</h3>
                <p className="text-gray-600 text-center">
                  Business loan disputes, breach of financial contracts, and commercial banking arbitration services.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Banking Disputes
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Consultation & Case Evaluation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We assess your banking dispute and determine the most effective legal course of action:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Reviewing banking documents and legal notices</li>
                  <li>• Evaluating legal options for dispute resolution</li>
                  <li>• Advising on litigation, negotiation, or arbitration approaches</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Legal Representation & Negotiation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced banking lawyers represent you in all legal proceedings:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Filing and defending cases in appropriate courts</li>
                  <li>• Negotiating with banks and financial institutions</li>
                  <li>• Representing clients in DRT, consumer courts, and high courts</li>
                  <li>• Handling regulatory compliance and RBI matters</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Comprehensive Legal Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete legal support including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Protection against unlawful debt recovery practices</li>
                  <li>• Filing complaints with banking ombudsman</li>
                  <li>• Legal remedies for financial fraud and cyber crimes</li>
                  <li>• Enforcement of settlement agreements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Banking Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in banking laws, financial regulations, and dispute resolution.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successfully handled numerous banking disputes, fraud cases, and corporate financial matters.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach</h3>
                <p className="text-gray-600">
                  Combination of litigation, negotiation, and arbitration for optimal outcomes in banking disputes.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Support</h3>
                <p className="text-gray-600">
                  Complete assistance from case evaluation to final resolution and legal enforcement.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Focused</h3>
                <p className="text-gray-600">
                  Customized legal strategies based on your specific banking dispute and financial situation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Swift Resolution</h3>
                <p className="text-gray-600">
                  Efficient handling of banking disputes to minimize financial impact and legal complications.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Case Assessment</h3>
                  <p className="text-gray-300">Comprehensive review of banking documents and legal position</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Strategy</h3>
                  <p className="text-gray-300">Develop strong legal strategy and prepare documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Action</h3>
                  <p className="text-gray-300">File cases, represent in court, and negotiate with banks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Resolution</h3>
                  <p className="text-gray-300">Achieve favorable settlement or court judgment</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Banking & Finance Legal Services
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
                Have more questions about banking and finance legal services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our banking lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Banking Legal Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal help for banking disputes and financial matters today.
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

          <GenericStatesGrid serviceName="Banking & Finance" servicePath="banking-and-finance" />
        </div>
      </div>
    </>
  );
}