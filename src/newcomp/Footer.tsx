import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative py-[48px] px-[24px] md:px-[72px] bg-[#30261C]"
    >
      <div className="max-w-[1600px] mx-auto relative">
        {/* Radial Gradient */}
        <div 
          className="absolute top-1/2 left-1/2 md:left-[40%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 0%)',
          }}
        />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-[48px] gap-[48px] md:gap-0">
          {/* Left Section - Logo, Social Icons, App Badges */}
          <div className="flex flex-col gap-[32px] md:gap-[68px] w-full md:w-[272px]">
            {/* Logo */}
            <Link href="/">
              <Image 
                src="/newAssets/logo/ama-white.svg" 
                alt="AMA Legal Solutions" 
                width={206} 
                height={40}
                className="w-[206px] h-[40px]"
              />
            </Link>

            {/* Social Icons and App Badges */}
            <div className="flex flex-col gap-[24px]">
              {/* Social Icons */}
              <div className="flex items-center gap-[28px]">
                <Link 
                  href="https://www.instagram.com/amalegalsolutions/?hl=en" 
                  target="_blank"
                  className="text-[#EAE6DB] hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <FaInstagram size={26} />
                </Link>
                <Link 
                  href="https://www.facebook.com/amalegalsolutions/" 
                  target="_blank"
                  className="text-[#EAE6DB] hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={26} />
                </Link>
                <Link 
                  href="https://in.linkedin.com/company/ama-legal-solutions" 
                  target="_blank"
                  className="text-[#EAE6DB] hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={26} />
                </Link>
                <Link 
                  href="https://www.youtube.com/@amalegalsolution" 
                  target="_blank"
                  className="text-[#EAE6DB] hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <FaYoutube size={26} />
                </Link>
              </div>

              {/* App Store Badges */}
              <div className="flex items-center gap-[12px]">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src="/newAssets/appstore.svg" 
                    alt="Download on App Store" 
                    width={130} 
                    height={36}
                    className="w-[130px] h-[36px]"
                  />
                </Link>
                <Link 
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src="/newAssets/playstore.svg" 
                    alt="Get it on Google Play" 
                    width={130} 
                    height={36}
                    className="w-[130px] h-[36px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Expertise and Contact */}
          <div className="flex flex-col md:flex-row items-start gap-[40px] md:gap-[72px] w-full md:w-auto">
            {/* Our Expertise Column 1 */}
            <div className="flex flex-col gap-[16px] w-[198px]">
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px]">
                Our Expertise
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {[
                  { name: 'Arbitration', href: '/services/arbitration' },
                  { name: 'Banking and Finance', href: '/services/banking-and-finance' },
                  { name: 'Civil', href: '/services/civil' },
                  { name: 'Corporate', href: '/services/corporate' },
                  { name: 'Criminal Law', href: '/services/criminal-law' },
                  { name: 'Cyber', href: '/services/cyber' },
                ].map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href}
                      className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Expertise Column 2 */}
            <div className="flex flex-col gap-[16px] w-[198px]">
              {/* Invisible header for alignment */}
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] opacity-0 select-none hidden md:block">
                Our Expertise
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {[
                  { name: 'Drafting', href: '/services/drafting' },
                  { name: 'Entertainment', href: '/services/entertainment' },
                  { name: 'Intellectual Property Rights', href: '/services/intellectual-property-rights' },
                  { name: 'Litigation', href: '/services/litigation' },
                  { name: 'Legal Notice Delhi', href: '/send-legal-notice-in-delhi' },
                  { name: 'Loan Settlement', href: '/services/loan-settlement' },
                  { name: 'Real Estate', href: '/services/real-estate' },
                  { name: 'Success Stories', href: '/success-stories' },
                ].map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href}
                      className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

         
            {/* Contact Details */}
            <div className="flex flex-col gap-[16px] w-[252px]">
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px]">
                Contact Details
              </h3>
              <div className="flex flex-col gap-[12px]">
                <a 
                  href="https://maps.app.goo.gl/C11eKgqm46oUwdio9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors block"
                >
                  2493AP, Block G, Sushant Lok 2,Sector 57, Gurugram, Haryana – 122001
                </a>
                <a 
                  href="tel:+918700343611" 
                  className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors block"
                >
                  +91 87003 43611
                </a>
                <a 
                  href="mailto:notify@amalegalsolutions.com" 
                  className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors block"
                >
                  notify@amalegalsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[rgba(53,43,32,0.35)] via-[rgba(255,255,255,0.35)] to-[rgba(48,38,28,0.35)] mb-[24px]" />

        {/* Copyright */}
        <p className="text-[rgba(255,255,255,0.75)] text-[12px] md:text-[14px] font-light leading-[14px] text-center md:text-left">
          © 2025 AMA Legal Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
