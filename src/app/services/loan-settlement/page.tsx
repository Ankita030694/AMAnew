import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "How long does the loan settlement process take?",
    answer: "The loan settlement process typically takes 3-6 months, depending on the complexity of your case and the bank's response. Our loan settlement lawyers work to expedite the process while ensuring the best possible outcome."
  },
  {
    question: "Will loan settlement affect my CIBIL score?",
    answer: "Yes, loan settlement may impact your credit score initially. However, our experts guide you on strategies to restore your creditworthiness post-settlement and avoid future debt traps."
  },
  {
    question: "Can I settle credit card debt legally?",
    answer: "Absolutely. Our legal team specializes in helping clients settle credit card debt through proper legal channels, ensuring protection from harassment and achieving favorable settlement terms."
  },
  {
    question: "Is EMI default help available for business loans?",
    answer: "Yes, we provide comprehensive EMI default help for both personal and business loans, including representation in DRT cases and SARFAESI matters."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Loan Settlement Legal Services in India",
  "description": "Need expert help with loan settlement in India? AMA Legal Solutions offers legal support to negotiate and settle personal loans, credit card debts, and EMI defaults.",
  "url": "https://amalegalsolutions.com/services/loansettlement",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Loan Settlement Services FAQs",
    "description": "Frequently asked questions about loan settlement, debt settlement, and EMI default help in India",
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
  title: "Loan Settlement in India | Best Legal Help to Settle Your Loans – AMA Legal Solutions",
  description:
    "Need expert help with loan settlement in India? AMA Legal Solutions offers legal support to negotiate and settle personal loans, credit card debts, and EMI defaults. Book your consultation now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/3.png", // Replace with your actual image path
    description:
      "Our professional consultation service provides expert guidance tailored to your specific needs. We work closely with you to understand your requirements and deliver solutions that exceed your expectations. Our team of experienced consultants brings years of industry knowledge to help you navigate complex challenges and achieve your goals.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* FAQ Schema Markup - Using Next.js Script component for proper SSR */}
      {/* Removed duplicate FAQPage schema */}
      
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="loan-settlement-webpage-schema"
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
              Expert Legal Support for <span className="text-[#D2A02A]">Loan Settlement</span> in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Struggling with loan repayments? Get professional legal help for debt settlement and achieve financial freedom through our proven loan settlement process.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Overwhelmed by Debt? We're Here to Help
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Managing debt can be overwhelming, especially when faced with high-interest rates, legal notices, collection harassment, and financial uncertainty. If you are struggling with loan repayment, experiencing harassment from banks and NBFCs, or looking for a way to <strong>settle loan legally</strong>, expert legal intervention can help.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>debt settlement</strong> and loan resolution, ensuring that individuals and businesses achieve a fair and legally compliant loan settlement with banks, NBFCs, and financial institutions across India.
              </p>
            </div>
          </section>

          {/* What is Loan Settlement Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What is Loan Settlement in India?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Loan settlement</strong> is a legal process where borrowers negotiate with banks and financial institutions to reduce the outstanding loan amount and close the loan at a mutually agreed-upon amount. This <strong>loan settlement process</strong> is different from loan closure and is often a strategic option when a borrower faces financial hardship.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>loan settlement lawyer India</strong> team ensures you get the best possible settlement while protecting your legal rights throughout the process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Reduce total outstanding amount
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Eliminate excessive penalties
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Stop collection harassment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Legal protection throughout
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Needs Loan Settlement Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Who Needs Loan Settlement?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💳</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Credit Card Holders</h3>
                <p className="text-gray-600 text-center">
                  Individuals struggling to <strong>settle credit card debt</strong> due to high interest rates and mounting penalties.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏠</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Home Loan Borrowers</h3>
                <p className="text-gray-600 text-center">
                  Property owners facing foreclosure threats who need <strong>EMI default help</strong> and legal protection.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Business Owners</h3>
                <p className="text-gray-600 text-center">
                  Entrepreneurs facing financial distress due to business loans and seeking professional debt settlement solutions.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Also ideal for salaried professionals with multiple unsecured loans and anyone receiving legal notices from banks/NBFCs.
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Reach out to our loan settlement lawyers today →
              </Link>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps You Settle Loans Legally
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Legal Consultation & Debt Assessment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We assess your financial situation and determine the best approach for your <strong>loan settlement process</strong>:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Reviewing loan agreements and outstanding dues</li>
                  <li>• Evaluating legal options for debt resolution</li>
                  <li>• Advising on restructuring, settlement, or waiver options</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Expert Negotiation with Banks & NBFCs</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced lawyers negotiate directly with financial institutions to:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Reduce the total outstanding loan amount significantly</li>
                  <li>• Eliminate excessive penalties and late payment charges</li>
                  <li>• Prevent legal action and minimize credit score damage</li>
                  <li>• Achieve favorable one-time settlement (OTS) agreements</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Protection & Recovery Defense</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive legal support including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Defense against loan recovery lawsuits</li>
                  <li>• Filing complaints against illegal harassment</li>
                  <li>• Protection under RBI guidelines and banking laws</li>
                  <li>• SARFAESI Act and DRT representation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Loan Settlement Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in banking laws, financial negotiations, and <strong>debt settlement</strong> cases.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Bank Negotiation</h3>
                <p className="text-gray-600">
                  We negotiate directly with banks & NBFCs to secure the best possible settlement terms for our clients.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Legal Protection</h3>
                <p className="text-gray-600">
                  Full legal protection against harassment and unethical debt recovery practices throughout the process.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Support</h3>
                <p className="text-gray-600">
                  Complete assistance from case evaluation to final settlement agreement and documentation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential Service</h3>
                <p className="text-gray-600">
                  Your financial matters remain strictly confidential with a client-focused approach to achieving the best outcome.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Score Guidance</h3>
                <p className="text-gray-600">
                  Expert advice on minimizing credit impact and strategies for post-settlement credit restoration.
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
                  <h3 className="text-lg font-bold mb-2">Case Evaluation</h3>
                  <p className="text-gray-300">Comprehensive financial analysis and loan assessment</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Strategy</h3>
                  <p className="text-gray-300">Create strong legal strategy and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Negotiation</h3>
                  <p className="text-gray-300">Direct settlement discussions with banks and NBFCs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Final Agreement</h3>
                  <p className="text-gray-300">Legally valid settlement protecting your interests</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Loan Settlement in India
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
                Have more questions about the loan settlement process?
              </p>
              <Link href="/blog" className="text-[#D2A02A] font-semibold hover:underline">
                Learn more about how loan settlement affects your CIBIL score →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Settle Your Loans Legally?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert legal assistance for loan settlement and achieve financial freedom today.
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
