"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [queriesOpen, setQueriesOpen] = useState(false);
  const footerColumns = [
    // ROW 1
    {
      title: "Quick Links",
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'AMA Connect App', href: '/ama-legal-solutions-application' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-and-conditions' },
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
        { name: 'Legal Drafting', href: '/services/drafting' },
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
        { name: 'YouTube', href: 'https://www.youtube.com/@amalegalsolution', external: true },
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
        { name: 'Chandigarh', href: '/locations/chandigarh' },
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
        { name: 'Legal Services in Gurgaon', href: '/legal-services-in-gurgaon'},
        { name: 'Legal Services in Noida', href: '/legal-services-in-noida'},
        { name: 'Legal Services in Delhi', href: '/legal-services-in-delhi'},
        { name: 'Legal Services in Ghaziabad', href: '/legal-services-in-ghaziabad'}
      ]
    },
    {
      title: "Loan Settlement",
      links: [
        { name: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
        { name: 'Credit Card Settlement', href: '/credit-card-settlement' },
        { name: 'Business Loan Settlement', href: '/business-loan-settlement' },
        { name: 'Car Loan Settlement', href: '/car-loan-settlement' },
        { name: 'App Loan Settlement', href: '/app-loan-settlement' },
        { name: 'Settlement Services', href: '/services/loan-settlement' },
        { name: 'Debt Consolidation', href: '/services/debt-consolidation' },
        { name: 'Loan & Debt Consolidation', href: '/services/loan-and-debt-consolidation' },
        { name: 'SBI Loan Settlement', href: '/services/loan-settlement/sbi-bank' },
        { name: "Unsecured Loan Settlement", href: "/unsecured-loan-settlement" },
        { name: "Secured Loan Settlement", href: "/secured-loan-settlement" },
        { name: "Trading Loan Settlement", href: "/trading-loan-settlement" },
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
        {name:"Trademark Search",href:"/services/trademark-search"},
        {name:"Trademark Status",href:"/services/trademark-status"},
        {name:"Trademark Registration India",href:"/services/comprehensive-guide-trademark-registration-india"},
         {name:"Validity of Trademark Registration",href:"/validity-of-trademark-registration"},
        {name:"Trademark Registration Timeline",href:"/how-much-time-it-takes-to-get-your-trademark-registered"},
        {name:"Expedited Trademark Process",href:"/expedited-process-for-trademark-registration"},
        {name:"Trademark in 180 Days",href:"/get-your-trademark-in-180-days"},
      ]
    },
    {
      title: "Additional Services",
      links: [
        {name:"Get FSSAI Licence in 7 Days",href:"/get-fssai-licence-in-7-days"},
        {name:"How to Register FSSAI Licence",href:"/how-to-register-fssai-licence"},
        {name:"Trademark Registration Fees",href:"/trademark-registration-fees"},
        {name:"MSME Registration",href:"/msme-registration"},
        {name:"DIY Trademark Registration",href:"/can-i-register-my-trademark-by-myself"},
        {name:"Required Documents for Trademark",href:"/what-documents-are-required-for-trademark-registration"},
        {name:"GST for Trademarks",href:"/is-gst-required-for-trademarks"},
        {name:"TM vs R: Which is Better?",href:"/which-is-better-tm-or-r"},
        {name:"Trademark Objection Reply Procedure",href:"/trademark-objection-reply-procedure"},
        {name:"Can I Sell Without Trademark?",href:"/can-i-sell-my-products-without-trademark"},
        { name: "Got an Arbitration Notice? Don't Worry", href: "/got-an-arbitration-notice-dont-worry-we-got-you" }

      ]
    },
    {
      title: "Queries",
      links: [
        // Moved from Loan Settlement (after ICICI Bank)
        { name: 'HDFC Bank Settlement', href: '/services/loan-settlement/hdfc-bank' },
        { name: 'ICICI Bank Settlement', href: '/services/loan-settlement/icici-bank' },

        { name: 'Axis Bank Settlement', href: '/services/loan-settlement/axis-bank' },
        { name: 'Kotak Mahindra Settlement', href: '/services/loan-settlement/kotak-mahindra' },
        { name: 'Reduce Debt Quickly', href: '/what-loan-settlement-service-can-help-me-reduce-my-outstanding-debt-quickly' },
        { name: 'Reliable Settlement', href: '/where-can-i-find-reliable-loan-settlement-services-with-flexible-payment-options' },
        { name: 'Best Settlement Companies', href: '/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans' },
        { name: 'Low Fee Settlement', href: '/who-provides-loan-settlement-solutions-with-minimal-processing-fees' },
        { name: 'Reasonable Settlement Offer', href: '/what-is-a-reasonable-settlement-offer' },
        { name: 'Top Settlement Companies', href: '/loan-settlement-companies' },
        { name: 'Steps to Apply for Settlement', href: '/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider' },
        { name: 'Benefits & Drawbacks of Settlement', href: '/key-benefits-and-drawbacks-of-persuing-loan-settlement' },
        { name: 'Initiate Settlement Discussion', href: '/how-can-i-initiate-a-full-and-final-settlement-discussion-with-bank' },
        { name: 'Check Genuine Settlement Offer', href: '/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms' },
        { name: 'Effective Negotiation Services', href: '/find-debt-settlement-services-known-for-effective-negotiation' },
        { name: 'Third Party Credit Card Settlement', href: '/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies' },
        { name: 'Debt Resolution Companies India', href: '/get-contact-details-for-top-rated-debt-resolution-companies-in-india' },
        // Original Queries links
        {name:"How to Get Trademark Certificate",href:"/how-can-i-get-trademark-certificate"},
        {name:"Registration Office Locations",href:"/where-to-register-trademark"},
        {name:"Best Advocate Near Me",href:"/best-advocate-near-me"},
        {name:"Best Law Firm Near Me",href:"/best-law-firm-near-me"},
        {name:"Legal Services Near Me",href:"/legal-services-near-me"},
        {name:"Delhi NCR Law Firm",href:"/delhi-ncr-law-firm"},
        {name:"Job Lost Loan Settlement",href:"/job-lost-loan-settlement"},
        {name:"How to Negotiate Loan Settlement",href:"/how-to-negotiate-a-loan-settlement-with-lenders-online"},
        {name:"Special Lok Adalat for Loan Settlement",href:"/special-lok-adalat-for-loan-settlement"},
        {name:"Top Loan Settlement Services",href:"/top-loan-settlement-services-with-good-customer-reviews"},
        {name:"Steps to Trademark Registration",href:"/steps-to-trademark-registration"},
        {name:"Best Apps for Loan Settlement",href:"/best-apps-for-managing-loan-settlement-offers-in-India"},
        {name:"Trademark Agency Near Me",href:"/trademark-registration-agency-near-me"},
        {name:"Trademark Opposition Procedure",href:"/trademark-opposition-procedure"},
        {name:"Is Trademark Mandatory for Amazon",href:"/is-trademark-registration-mandatory-to-sell-on-amazon"},
        {name:"Trademark Infringement Without Registration",href:"/trademark-infringement-without-registration"},
        {name:"Name vs Logo Trademark",href:"/is-registering-a-name-instead-of-the-logo-enough"},
        {name:"Is Trademark Internationally Valid",href:"/is-trademark-internationally-valid"},
        {name:"Special Lok Adalat for Challan",href:"/special-lok-adalat-for-challan"},
        {name:"Trademark Registration Office Delhi",href:"/trademark-registration-office-delhi"},
        {name:"Is Trademark Registration One Time?",href:"/is-trademark-registration-one-time"},
        {name:"Legal Notice for Unpaid F&F",href:"/not-being-paid-fnf-want-to-send-legal-notice"},
        {name:"What is OTS? - Comprehensive Guide",href:"/what-is-ots"},
        {name:"Procedure of Sending Legal Notice",href:"/procedure-of-sending-legal-notice"},
        {name: "Does Foreclosure Affect CIBIL?", href: "/does-foreclosure-of-loan-affect-cibil"},
        {name:"Compare Loan Settlement Companies",href:"/compare-loan-settlement-companies-that-work-with-personal-loans"},
        {name: "Loan for CIBIL Defaulters", href: "/which-bank-provide-personal-loan-for-cibil-defaulters"},
        {name: "Stop Recovery Harassment", href: "/loan-recovery-agent-harassment-complaint-online"},
        {name: "Legal Relief from Harassment", href: "/loan-recovery-agents-harassment-complaint"},
        {name: "Employer not paying salary", href: "/employer-not-paying-salary-after-resignation"},
        {name: "Where to File Salary Complaint", href: "/where-to-file-a-complaint-if-your-employer-doesnt-pay-you"},
        {name: "Can Company Hold Salary?", href: "/can-company-hold-my-salary-after-resignation"},
        {name: "Expert Panel Reviews", href: "/expert-panel-loan-settlement-reviews"},
        {name: "Stop Recovery Agent Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home"},
        {name: "Bajaj Finance Agent Help", href: "/bajaj-finance-agent-visiting-home"},
        {name: "How to Settle Loans Above 1 Cr", href: "/how-to-settle-loans-above-1-crore"},
        {name: "How to Settle Loans Above 5 Cr", href: "/how-to-settle-loans-above-5-crore"},
        { name: 'Unsecured Loan Specialists', href: '/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans' },
        { name: 'Good Customer Support', href: '/what-loan-settlement-services-have-good-customer-support-in-india' },
        { name: 'Home Loan Dues', href: '/can-i-get-a-loan-settlement-service-that-handles-home-loan-dues' },
        { name: '10 Lakhs Settlement', href: '/10-lakhs-loan-settlement' },
        { name: 'Loan Settlement Near Me', href: '/loan-settlement-near-me' },
        { name: 'Settlement Calculator', href: '/loan-settlement-amount-calculator' },
        { name: 'How to Settle with Bank', href: '/how-to-settle-loan-with-bank' },
        { name: 'Settled Tag Duration', href: '/how-long-does-a-settled-tag-stay-on-my-report' },
        { name: 'Documents Needed for Loan Settlement NOC', href: '/documents-needed-for-loan-settlement-noc' },
        { name: 'Charities That Pay Off Debt', href: '/charities-that-pay-off-debt' },
        {name:"Best Time for Loan Settlement",href:"/best-time-for-loan-settlement"},
        { name: "Benefits of Settling Your Loan in March", href: "/benefits-of-settling-your-loan-in-march" },
        { name: "Can Bank File Case for Personal Loan", href: "/can-bank-file-case-for-personal-loan" },
        { name: "Credit Card Settlement Process India", href: "/credit-card-settlement-process-india" },
                {name:"Sales Job Vacancies in Gurgaon",href:"/sales-job-vacancies-in-gurgaon"},
                {name:"Telecaller Vacancies in Gurgaon",href:"/telecaller-vacancies-in-gurgaon"},
                {name: "RBI Recovery Guidelines July 2026", href: "/rbi-new-recovery-guidelines-july-2026"},
                {name: "Drafting of Will", href: "/drafting-of-will"},
        {name: "Will Drafting for NRI", href: "/will-drafting-for-nri"},
        {name:"Simple Will Format - Download",href:"/simple-will-format-download-free-legal-document-sample"},
        {name:"Google's Trusted Legal Advisor",href:"/googles-trusted-legal-advisor"},
        {name:"Google's Trusted Law Firm",href:"/googles-trusted-law-firm"},
        {name:"Legal Notice to Hospital",href:"/legal-notice-to-hospital"},
        {name:"Hospital Harassment Protection",href:"/protection-from-hospital-harrassement"},
         {name:"Overcharged at Hospital - Legal Notice",href:"/overcharged-at-hospital-send-legal-notice"},
         {name:"Workplace Harassment Notice",href:"/workplace-harassment-legal-notice-service"},
         {name:"Best Law Firms in India for Corporate Law",href:"/best-law-firms-in-india-for-corporate-law"},
         {name:"Reputable Debt Relief Agencies Bangalore",href:"/reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-banglore"},
           { name: "Tax Implications of Settled Debt", href: "/what-are-the-income-tax-implications-of-a-settled-debt-amount" },
            { name: "Credit Counseling Chennai", href: "/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai" },
            { name: "Settle Credit Card Using Third Party", href: "/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies" },
            { name: "CFP specialized in Debt Restructuring", href: "/certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement" },
            { name: "Which one is REAL AMA?", href: "/which-one-is-the-real-amalegalsolutions" },
            { name: "Is Loan Settlement in Installments Possible", href: "/is-loan-settlement-in-installments-possible" },
            { name: "Loan Settlement Process in Hindi", href: "/loan-settlement-process-in-hindi" },
            { name: "Can I Settle My Loan Without A Lawyer?", href: "/can-i-settle-my-loan-without-a-lawyer" },
            { name: "Does Settlement Impact a Co-borrower", href: "/does-settlement-impact-a-co-borrower" },
            { name: "Can I Convert Settled To Closed Later", href: "/can-i-convert-settled-to-closed-later" },
            {name:"Trademark Class 35",href:"/trademark-registration-in-class-35"},
            {name:"Trademark Class 38",href:"/trademark-registration-in-class-38"},
            {name:"Trademark Class 14",href:"/trademark-registration-in-class-14"},
            {name:"Trademark Class 45",href:"/trademark-registration-in-class-45"},


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
            <Link href="/ama-legal-solutions" className="lg:hidden">
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
          ))}
        </div>

        {/* Row 3 - Queries Collapsible Section */}
        <div className="mb-[48px]">
          <button
            onClick={() => setQueriesOpen(!queriesOpen)}
            className="w-full flex items-center justify-between text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4 mb-[24px] cursor-pointer bg-transparent hover:opacity-80 transition-opacity"
            aria-expanded={queriesOpen}
          >
            <span>{footerColumns[8].title}</span>
            <FaChevronDown
              className={`text-[14px] text-white/70 transition-transform duration-300 ${
                queriesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] overflow-hidden transition-all duration-500 ease-in-out ${
              queriesOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
             {footerColumns[8].links.map((link) => (
                <div key={link.href}>
                   <Link 
                     href={link.href}
                     className="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[16px] font-normal leading-[16px] hover:text-white transition-colors"
                   >
                     {link.name}
                   </Link>
                </div>
             ))}
          </div>
        </div>

        {/* NAP Block — Name, Address, Phone (Social Proof & Contact) */}
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

        {/* LocalBusiness JSON-LD for consistent NAP on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "AMA Legal Solutions",
              "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
              "url": "https://www.amalegalsolutions.com",
              "telephone": "+918700343611",
              "email": "notify@amalegalsolutions.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4167,
                "longitude": 77.0500
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "19:00"
              },
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/amalegalsolutions/",
                "https://www.facebook.com/amalegalsolutions/",
                "https://in.linkedin.com/company/ama-legal-solutions",
                "https://www.youtube.com/@amalegalsolution"
              ]
            })
          }}
        />

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
              <a href="https://www.instagram.com/amalegalsolutions/" target="_blank" className="text-white/60 hover:text-white"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/amalegalsolutions/" target="_blank" className="text-white/60 hover:text-white"><FaFacebookF size={20} /></a>
              <a href="https://in.linkedin.com/company/ama-legal-solutions" target="_blank" className="text-white/60 hover:text-white"><FaLinkedinIn size={20} /></a>
              <a href="https://www.youtube.com/@amalegalsolution" target="_blank" className="text-white/60 hover:text-white"><FaYoutube size={20} /></a>
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
