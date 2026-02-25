import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerColumns = [
    // ROW 1
    {
      title: "",
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Success Stories', href: '/success-stories' },
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
        { name: 'Settlement Services', href: '/services/loan-settlement' },
        { name: 'Debt Consolidation', href: '/services/debt-consolidation' },
        { name: 'Loan & Debt Consolidation', href: '/services/loan-and-debt-consolidation' },
        { name: 'SBI Loan Settlement', href: '/services/loan-settlement/sbi-bank' },
        { name: 'ICICI Bank Settlement', href: '/services/loan-settlement/icici-bank' },
        { name: 'HDFC Bank Settlement', href: '/services/loan-settlement/hdfc-bank' },
        { name: 'Axis Bank Settlement', href: '/services/loan-settlement/axis-bank' },
        { name: 'Kotak Mahindra Settlement', href: '/services/loan-settlement/kotak-mahindra' },
        { name: 'Reduce Debt Quickly', href: '/what-loan-settlement-service-can-help-me-reduce-my-outstanding-debt-quickly' },
        { name: 'Reliable Settlement', href: '/where-can-i-find-reliable-loan-settlement-services-with-flexible-payment-options' },
        { name: 'Best Settlement Companies', href: '/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans' },
        { name: 'Low Fee Settlement', href: '/who-provides-loan-settlement-solutions-with-minimal-processing-fees' },
        { name: 'Unsecured Loan Specialists', href: '/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans' },
        { name: 'Good Customer Support', href: '/what-loan-settlement-services-have-good-customer-support-in-india' },
        { name: 'Home Loan Dues', href: '/can-i-get-a-loan-settlement-service-that-handles-home-loan-dues' },
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
        
      ]
    },
    {
      title: "Additional Services",
      links: [
        {name:"Trademark Registration Fees",href:"/trademark-registration-fees"},
        {name:"MSME Registration",href:"/msme-registration"},
        {name:"DIY Trademark Registration",href:"/can-i-register-my-trademark-by-myself"},
        {name:"Required Documents for Trademark",href:"/what-documents-are-required-for-trademark-registration"},
        {name:"GST for Trademarks",href:"/is-gst-required-for-trademarks"},
        {name:"TM vs R: Which is Better?",href:"/which-is-better-tm-or-r"},
        {name:"Trademark Objection Reply Procedure",href:"/trademark-objection-reply-procedure"},
        {name:"Can I Sell Without Trademark?",href:"/can-i-sell-my-products-without-trademark"},
      ]
    },
    {
      title: "Queries",
      links: [
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
        {name: "How to Settle Loans Above 1 Cr", href: "/how-to-settle-loans-above-1-crore"}
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

        {/* Row 1 Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] md:gap-[40px] mb-[64px]">
          {/* Logo & Branding - Part of Column 1 */}
          <div className="flex flex-col gap-[24px]">
            <Link href="/ama-legal-solutions">
              <Image 
                src="/newAssets/logo/ama-white.svg" 
                alt="AMA Legal Solutions" 
                width={206} 
                height={40}
                className="w-[206px] h-[40px] mb-4"
              />
            </Link>
            <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4">
              {footerColumns[0].title}
            </h3>
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

        {/* Row 3 - Queries Grid */}
        <div className="mb-[48px]">
          <h3 className="text-white text-[18px] md:text-[20px] font-semibold leading-[20px] border-b border-white/10 pb-4 mb-[24px]">
            {footerColumns[8].title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
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
          © 2025 AMA Legal Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
