import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#D2A02A] via-[#E8B547] to-[#F5C842] text-[#1a1a1a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Logo and Description Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="group">
                <Link
                  href="/"
                  className="inline-block transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <Image
                      src="/ama-legal-solutions-logo.png"
                      alt="AMA Legal Solutions"
                      width={280}
                      height={80}
                      className="w-full h-auto max-w-[280px]"
                      priority
                    />
                  </div>
                </Link>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed font-medium text-[#2a2a2a] max-w-md">
                  Committed to delivering exceptional legal services guided by
                  <span className="text-[#1a1a1a] font-semibold"> values, expertise, and client satisfaction.</span>
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/amalegalsolutions/"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaFacebookF className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/amalegalsolutions/?hl=en"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaInstagram className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="https://in.linkedin.com/company/ama-legal-solutions"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaLinkedin className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@amalegalsolution"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaYoutube className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* App Download Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#1a1a1a]">Download Our App</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                      target="_blank"
                      className="flex items-center gap-3 bg-[#1a1a1a] text-white px-4 py-3 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </Link>
                    
                    <Link
                      href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                      target="_blank"
                      className="flex items-center gap-3 bg-[#1a1a1a] text-white px-4 py-3 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-7 h-7 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] relative">
                  Visit
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#1a1a1a] to-transparent rounded-full"></div>
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/services", label: "Services" },
                    { href: "/contact", label: "Contact Us" },
                    { href: "/blog", label: "Blogs" },
                    { href: "/terms-and-conditions", label: "T&C" },
                    { href: "/privacy-policy", label: "Privacy Policy" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group text-lg font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors duration-300 relative inline-block"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] relative">
                  Find Us
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#1a1a1a] to-transparent rounded-full"></div>
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <a
                      href="https://www.google.com/maps/place/AMA+LEGAL+SOLUTIONS/@28.4256874,77.0878512,17z/data=!3m1!4b1!4m6!3m5!1s0x8b74fa3c4bce8f29:0x9c0cf35a3104b12e!2sAMA+LEGAL+SOLUTIONS!8m2!3d28.4256874!4d77.0878512"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg leading-relaxed text-[#2a2a2a] font-medium hover:text-[#1a1a1a] transition-colors duration-300"
                    >
                      2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-sm" />
                    </div>
                    <a
                      href="tel:+918700343611"
                      className="text-lg font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors duration-300"
                    >
                      +91 8700343611
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <a
                      href="mailto:notify@amalegalsolutions.com"
                      className="text-lg font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors duration-300 break-all"
                    >
                      notify@amalegalsolutions.com
                    </a>
                  </li>
                </ul>
                
                
              </div>
            </div>

            {/* Practice Areas */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] relative">
                  Our Expertise
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#1a1a1a] to-transparent rounded-full"></div>
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "/services/banking-and-finance", label: "Banking and Finance" },
                    { href: "/services/loan-settlement", label: "Loan Settlement" },
                    { href: "/services/loan-settlement/lok-adalat", label: "Lok Adalat Settlement" }
                  ].map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="group text-lg font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors duration-300 relative inline-block"
                      >
                        {service.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Queries Section */}
          <div className="mt-12 pt-8 border-t border-[#1a1a1a]/10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] relative mb-8">
              Queries
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#1a1a1a] to-transparent rounded-full"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/get-fssai-licence-in-7-days", label: "Get FSSAI Licence in 7 Days" },
                { href: "/how-to-register-fssai-licence", label: "How to Register FSSAI Licence" },
                { href: "/free-loan-settlement-guide", label: "Free Loan Settlement Guide" },
                { href: "/services/loan-settlement/what-is-loan-settlement", label: "What is Loan Settlement?" },
                { href: "/legal-services-in-gurgaon", label: "Legal Services in Gurgaon" },
                { href: "/services/intellectual-property-rights", label: "Intellectual Property Rights" },
                { href: "/trademark-registration-fees", label: "Trademark Registration Fees" },
                { href: "/trademark-objection-reply-procedure", label: "Trademark Objection Reply" },
                { href: "/services/entertainment", label: "Entertainment Law" },
                { href: "/services/real-estate", label: "Real Estate" },
                { href: "/services/criminal-law", label: "Criminal Law" },
    { href: "/how-to-negotiate-a-loan-settlement-with-lenders-online", label: "How to Negotiate Loan Settlement" },
    { href: "/special-lok-adalat-for-loan-settlement", label: "Special Lok Adalat for Loan Settlement" },
    { href: "/top-loan-settlement-services-with-good-customer-reviews", label: "Top Loan Settlement Services" },
    { href: "/steps-to-trademark-registration", label: "Steps to Trademark Registration" },
    { href: "/best-apps-for-managing-loan-settlement-offers-in-India", label: "Best Loan Settlement Apps" },
    { href: "/trademark-opposition-procedure", label: "Trademark Opposition Procedure" },
    { href: "/is-trademark-registration-mandatory-to-sell-on-amazon", label: "Is Trademark Mandatory for Amazon" },
    { href: "/trademark-infringement-without-registration", label: "Trademark Infringement Without Registration" },
    { href: "/is-registering-a-name-instead-of-the-logo-enough", label: "Name vs Logo Trademark" },
    { href: "/is-trademark-internationally-valid", label: "Is Trademark Internationally Valid" },
    { href: "/special-lok-adalat-for-challan", label: "Special Lok Adalat for Challan" },
    { href: "/trademark-registration-office-delhi", label: "Trademark Registration Office Delhi" },
    { href:    '/is-trademark-registration-one-time', label: "Is Trademark Registration One Time?" },
    { href: "/not-being-paid-fnf-want-to-send-legal-notice", label: "Legal Notice for Unpaid F&F" },
    { href: "/employer-not-paying-salary-after-resignation", label: "Salary Not Paid After Resignation" },
    { href: "/how-do-i-stop-recovery-agent-from-coming-home", label: "Stop Recovery Agent Home Visits" },
    { href: "/bajaj-finance-agent-visiting-home", label: "Bajaj Finance Agent Help" },
    { href: "/documents-needed-for-loan-settlement-noc", label: "Documents for Loan Settlement NOC" },
    { href: "/can-bank-file-case-for-personal-loan", label: "Can Bank File Case for Personal Loan" },
    { href: "/business-loan-settlement", label: "Business Loan Settlement" },
    { href: "/credit-card-settlement-process-india", label: "Credit Card Settlement Process India" },
    { href: "/best-time-for-loan-settlement", label: "Best Time for Loan Settlement" },
    { href: "/benefits-of-settling-your-loan-in-march", label: "Benefits of Settling Loan in March" }
  ].map((query) => (
                <Link
                  key={query.href}
                  href={query.href}
                  className="group flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="text-sm font-medium text-[#2a2a2a] group-hover:text-[#1a1a1a] transition-colors duration-300">
                    {query.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="relative z-10 border-t border-white/20 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-base font-medium text-[#1a1a1a]">
              © {new Date().getFullYear()} AMA Legal Solutions. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-sm font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
