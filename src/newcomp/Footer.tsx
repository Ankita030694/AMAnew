"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const footerColumns: { title: string; links: { name: string; href: string; external?: boolean; hiddenLink?: boolean }[] }[] = [
    // ROW 1
    {
      title: "Quick Links",
      links: [
        { name: 'Home', href: '/' },
        { name: 'Free Will Drafting Consultation', href: '/free-will-drafting-consultation-in-delhi-ncr' },
        { name: 'About Us', href: '/about' },
        { name: 'Support / Escalations', href: '/support' },
        { name: 'Careers', href: '/careers' },
        { name: 'AMA Connect App', href: '/ama-legal-solutions-application' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms and Conditions', href: '/terms-and-conditions' },
        { name: 'Types of Unsecured Loans', href: '/what-are-the-types-of-unsecured-loans-available-in-india' },

      ]
    },
    {
      title: "Our Expertise",
      links: [
        { name: 'Arbitration', href: '/services/arbitration' },
        { name: 'Banking & Finance', href: '/services/banking-and-finance' },
        { name: 'Civil Law', href: '/services/civil' },
        { name: 'Corporate Law', href: '/services/corporate' },
        { name: 'Criminal Law', href: '/services/criminal-law' },
        { name: 'Cyber Law', href: '/services/cyber' },
        { name: 'Legal Drafting', href: '/services/drafting' }
      ]
    },
    {
      title: "Connect With Us",
      links: [
        { name: 'Our Location', href: 'https://maps.app.goo.gl/C11eKgqm46oUwdio9', external: true },
        { name: 'Call Support', href: 'tel:+918700343611' },
        { name: 'Email Us', href: 'mailto:notify@amalegalsolutions.com' },
        { name: 'Instagram', href: 'https://www.instagram.com/amalegalsolutions/?hl=en', external: true },
        { name: 'Facebook', href: 'https://www.facebook.com/amalegalsolutions/', external: true },
        { name: 'LinkedIn', href: 'https://in.linkedin.com/company/ama-legal-solutions', external: true },
        { name: 'YouTube', href: 'https://www.youtube.com/@amalegalsolution', external: true }
      ]
    },
    {
      title: "Top Locations",
      links: [
        { name: 'Delhi NCR', href: '/locations/newdelhi' },
        { name: 'Mumbai', href: '/locations/mumbai' },
        { name: 'Bengaluru', href: '/locations/bengaluru' },
        { name: 'Kolkata', href: '/locations/kolkata' },
        { name: 'Chennai', href: '/locations/chennai' },
        { name: 'Jaipur', href: '/locations/jaipur' },
        { name: 'Chandigarh', href: '/locations/chandigarh' }
      ]
    },
    // ROW 2
    {
      title: "Send Legal Notice",
      links: [
        { name: 'Online Notice India', href: '/send-legal-notice' },
        { name: 'Legal Notice Delhi', href: '/send-legal-notice-in-delhi' },
        { name: 'Legal Notice Gurugram', href: '/send-legal-notice-in-gurugram' },
        { name: 'Legal Notice Noida', href: '/send-legal-notice-in-noida' },
        { name: 'Legal Notice Haryana', href: '/send-legal-notice-haryana' },
        { name: 'Legal Notice Uttar Pradesh', href: '/send-legal-notice-in-uttar-pradesh' },
        { name: 'Legal Notice Punjab', href: '/send-legal-notice-in-punjab' },
        { name: 'How to Send Notice', href: '/how-can-i-send-legal-notice' },
        { name: 'Legal Services in Gurgaon', href: '/legal-services-in-gurgaon' },
        { name: 'Legal Services in Noida', href: '/legal-services-in-noida' },
        { name: 'Legal Services in Delhi', href: '/legal-services-in-delhi' },
        { name: 'Legal Services in Ghaziabad', href: '/legal-services-in-ghaziabad' },
        { name: 'Harassment Legal Notice', href: '/legal-notice-for-loan-settlement-harassment' }
      ]
    },
    {
      title: "Loan Settlement",
      links: [
        { name: "How to Trust AMA's Law Associates", href: "/how-to-trust-amas-law-associates", hiddenLink: true },
        { name: "Bank Arbitration Settlement Guide", href: "/bank-arbitration-settlement", hiddenLink: true },
        { name: 'Loan Settlement Guide', href: '/loan-settlement' },
        { name: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
        { name: 'Business Loan Settlement', href: '/business-loan-settlement' },
        { name: 'Car Loan Settlement', href: '/car-loan-settlement' },
        { name: 'App Loan Settlement', href: '/app-loan-settlement' },
        { name: 'Loan Settlement Services', href: '/loan-settlement-services' },
        { name: 'Settlement Services', href: '/services/loan-settlement' },
        { name: 'Debt Consolidation', href: '/services/debt-consolidation' },
        { name: 'Loan & Debt Consolidation', href: '/services/loan-and-debt-consolidation' },
        { name: 'SBI Loan Settlement', href: '/services/loan-settlement/sbi-bank' },
        { name: "Unsecured Loan Settlement", href: "/unsecured-loan-settlement" },
        { name: "Secured Loan Settlement", href: "/secured-loan-settlement" },
        { name: "Trading Loan Settlement", href: "/trading-loan-settlement" },
        { name: "Medical Loan Settlement Support", href: "/support-for-loan-settlement-during-medical-emergencies" },
        { name: "Settlement Letter From Bank", href: "/loan-settlement-letter-from-bank" }
      ]
    },

    {
      title: "IPR & Trademark",
      links: [
        { name: 'IPR Services', href: '/services/intellectual-property-rights' },
        { name: 'Trademark Registration', href: '/services/trademark-registration' },
        { name: 'Expert Vakil Search', href: '/services/expert-vakil-search-for-trademark-registration' },
        { name: 'Company Registration', href: '/services/quick-company-registration-and-trademark' },
        { name: 'IPIndia Guide', href: '/services/how-to-register-trademark-with-ipindia' },
        { name: "Trademark Search", href: "/services/trademark-search" },
        { name: "Trademark Status", href: "/services/trademark-status" },
        { name: "Trademark Registration India", href: "/services/comprehensive-guide-trademark-registration-india" },
        { name: "Validity of Trademark Registration", href: "/validity-of-trademark-registration" },
        { name: "Trademark Registration Timeline", href: "/how-much-time-it-takes-to-get-your-trademark-registered" },
        { name: "Expedited Trademark Process", href: "/expedited-process-for-trademark-registration" },
        { name: "Trademark in 180 Days", href: "/get-your-trademark-in-180-days" },

      ]
    },
    {
      title: "Additional Services",
      links: [
        { name: "Get FSSAI Licence in 7 Days", href: "/get-fssai-licence-in-7-days" },
        { name: "How to Register FSSAI Licence", href: "/how-to-register-fssai-licence" },
        { name: "Trademark Registration Fees", href: "/trademark-registration-fees" },
        { name: "MSME Registration", href: "/msme-registration" },
        { name: "DIY Trademark Registration", href: "/can-i-register-my-trademark-by-myself" },
        { name: "Required Documents for Trademark", href: "/what-documents-are-required-for-trademark-registration" },
        { name: "GST for Trademarks", href: "/is-gst-required-for-trademarks" },
        { name: "TM vs R: Which is Better?", href: "/which-is-better-tm-or-r" },
        { name: "Trademark Objection Reply Procedure", href: "/trademark-objection-reply-procedure" },
        { name: "Can I Sell Without Trademark?", href: "/can-i-sell-my-products-without-trademark" },
        { name: "Got an Arbitration Notice? Don't Worry", href: "/got-an-arbitration-notice-dont-worry-we-got-you" }

      ]
    },
    {
      title: "Queries",
      links: [
        { name: "Recovery for NBFCs", href: "/recovery-for-nbfcs" },
        { name: "Recovery for Pay Day Loan", href: "/recovery-for-pay-day-loan" }
      ]
    }
  ];

  return (
    <footer className="relative py-[64px] px-[24px] md:px-[72px] bg-[#30261C]">
      <div className="max-w-8xl mx-auto relative">
        {/* Radial Gradient */}
        <div
          className="absolute top-1/2 left-1/2 md:left-[40%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 0%)',
          }}
        />

        {/* Logo - Centered on Desktop */}
        <div className="hidden lg:flex justify-center mb-[48px]">
          <Link href="/ama-legal-solutions">
            <Image
              src="/newAssets/logo/ama-white.svg"
              alt="AMA Legal Solutions"
              width={206}
              height={40}
              className="w-[206px] h-[40px]"
            />
          </Link>
        </div>

        {/* Row 1 Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] md:gap-[40px] mb-[64px]">
          {/* Logo on Mobile Only + Column 1 Links */}
          <div className="flex flex-col gap-[24px]">
            <Link href="/ama-legal-solutions" aria-label="Home" className="lg:hidden">
              <Image
                src="/newAssets/logo/ama-white.svg"
                alt="AMA Legal Solutions"
                width={206}
                height={40}
                className="w-[206px] h-[40px] mb-4"
              />
            </Link>
            {footerColumns[0].title && (
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4">
                {footerColumns[0].title}
              </h3>
            )}
            <ul className="flex flex-col gap-[12px]">
              {footerColumns[0].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2-4 of Row 1 */}
          {footerColumns.slice(1, 4).map((column, idx) => (
            <div key={idx} className="flex flex-col gap-[24px]">
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        {/* Row 2 Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] md:gap-[40px] mb-[48px]">
          {footerColumns.slice(4, 8).map((column, idx) => (
            <div key={idx} className="flex flex-col gap-[24px]">
              <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {column.links.map((link) => (
                  <li key={link.href} style={link.hiddenLink ? { fontSize: 0, lineHeight: 0, margin: 0, padding: 0, overflow: 'hidden', height: '1px', width: '1px' } : undefined}>
                    <Link
                      href={link.href}
                      className={link.hiddenLink ? "text-[#30261C] cursor-default" : "text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"}
                      style={link.hiddenLink ? { fontSize: '1px', lineHeight: '1px', padding: 0, margin: 0, display: 'inline', width: '1px', height: '1px', overflow: 'hidden' } : undefined}
                      tabIndex={link.hiddenLink ? -1 : undefined}
                      aria-hidden={link.hiddenLink ? true : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 3 - Legal Services Directory Link */}
        <div className="mb-[48px] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/5 transition-colors">
          <div>
            <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-2">Looking for a specific legal service or draft?</h3>
            <p className="text-[rgba(255,255,255,0.75)] text-[16px]">Browse our comprehensive directory of over 150+ legal notices, settlement guides, and arbitration resources.</p>
          </div>
          <Link href="/directory" className="flex-shrink-0 bg-[#D2A02A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B8860B] transition-colors whitespace-nowrap">
            View Legal Directory
          </Link>
        </div>

        {/* NAP Block - Name, Address, Phone (Social Proof & Contact) */}
        <div
          className="mb-[48px] border border-white/10 rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div>
                  <h4 className="text-white text-[16px] font-semibold mb-1">Call Us</h4>
                  <a
                    href="tel:+918700343611"
                    className="text-white/60 text-[13px] hover:text-white/90 transition-colors"
                  >
                    +91-8700343611
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div
              className="flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-[16px] font-semibold mb-1">Office Address</h4>
                <a
                  href="https://maps.app.goo.gl/C11eKgqm46oUwdio9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-[13px] leading-relaxed hover:text-white/90 transition-colors block"
                >
                  <span>2493AP, Block G, Sushant Lok 2, Sector 57</span>,{' '}
                  <span>Gurugram</span>,{' '}
                  <span>Haryana</span>{' '}
                  <span>122001</span>,{' '}
                  <span>India</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start gap-3 mb-4">
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[16px] font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:notify@amalegalsolutions.com"
                    className="text-white/60 text-[13px] hover:text-white/90 transition-colors"
                  >
                    notify@amalegalsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info already covered by global schema in layout.tsx */}

        {/* Apps & Socials Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 gap-8">
          <div className="flex items-center gap-[12px]">
            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
              <Image src="/newAssets/appstore.svg" alt="Play Store" width={130} height={36} className="w-[130px] h-[36px]" />
            </Link>
            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
              <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-[130px] h-[36px]" />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/amalegalsolutions/" target="_blank" className="text-white/60 hover:text-white" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/amalegalsolutions/" target="_blank" className="text-white/60 hover:text-white" aria-label="Facebook"><FaFacebookF size={20} /></a>
            <a href="https://in.linkedin.com/company/ama-legal-solutions" target="_blank" className="text-white/60 hover:text-white" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            <a href="https://www.youtube.com/@amalegalsolution" target="_blank" className="text-white/60 hover:text-white" aria-label="YouTube"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[rgba(255,255,255,0.75)] text-[12px] md:text-[14px] font-light leading-[14px] text-center mt-8">
          © 2022 AMA Legal Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
