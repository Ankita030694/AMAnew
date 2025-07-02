import Link from "next/link";
import Image from "next/image";

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
                    <i className="fab fa-facebook-f text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </Link>
                  <Link
                    href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/amalegalsolutions/%3Fhl%3Den&ved=2ahUKEwjGiZGYv_qLAxVSyzgGHesQLlsQFnoECCEQAQ&usg=AOvVaw3XAY8vcpLwCWkAQkv3NZFA"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <i className="fab fa-instagram text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </Link>
                  <Link
                    href="https://in.linkedin.com/company/ama-legal-solutions"
                    className="group w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <i className="fab fa-linkedin text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </Link>
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
                    { href: "/termscondition", label: "T&C" },
                    { href: "/privacypolicy", label: "Privacy Policy" }
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
                      <i className="fas fa-map-marker-alt text-sm"></i>
                    </div>
                    <span className="text-lg leading-relaxed text-[#2a2a2a] font-medium">
                      2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-sm"></i>
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
                      <i className="fas fa-envelope text-sm"></i>
                    </div>
                    <a
                      href="mailto:info@amalegalsolutions.com"
                      className="text-lg font-medium text-[#2a2a2a] hover:text-[#1a1a1a] transition-colors duration-300 break-all"
                    >
                      info@amalegalsolutions.com
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
                    { href: "/services/banking", label: "Banking and Finance" },
                    { href: "/services/loansettlement", label: "Loan Settlement" },
                    { href: "/services/ipr", label: "Intellectual Property Rights" },
                    { href: "/services/entertainment", label: "Entertainment Law" },
                    { href: "/services/realestate", label: "Real Estate" },
                    { href: "/services/criminal", label: "Criminal Law" }
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
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="relative z-10 border-t border-white/20 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-base font-medium text-[#1a1a1a]">
              © {new Date().getFullYear()} AMA Legal Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
