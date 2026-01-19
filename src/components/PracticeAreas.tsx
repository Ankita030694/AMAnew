'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuildingColumns,
  faUsers,
  faHouse,
  faScaleBalanced,
  faBuilding,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

// Simplified dynamic import with better performance
const MotionDiv = ({ 
  children, 
  className, 
  initial, 
  whileInView, 
  viewport, 
  transition, 
  ...props 
}: any) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Simple intersection observer without heavy motion library initially
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: viewport?.threshold || 0.1 }
    );
    
    const element = document.getElementById(props.id);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [viewport?.threshold, props.id]);
  
  return (
    <div 
      {...props}
      className={`${className} transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default function PracticeAreas() {
  const [isDesktop, setIsDesktop] = useState(true);
  
  // Memoize the resize handler to prevent unnecessary re-renders
  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      // Set initial value
      handleResize();
      
      // Add event listener with passive flag for better performance
      window.addEventListener('resize', handleResize, { passive: true });
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  const practiceAreas = [
    {
      icon: faHouse,
      title: "Banking and Finance",
      description: "Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues | Financial Litigation | Frozen Bank Accounts |",
      link: "/services/banking-and-finance"
    },
    {
      icon: faScaleBalanced,
      title: "Loan Settlement",
      description: "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |",
      link: "/services/loan-settlement"
    },
    {
      icon: faBuilding,
      title: "Intellectual Property Rights",
      description: "Trademark Registration | Patent Filing | Copyright Protection | IP Infringement | Brand Protection | Pharmaceutical Patent Attorney |",
      link: "/services/intellectual-property-rights"
    },
    {
      icon: faBuildingColumns,
      title: "Entertainment Law",
      description: "Media and entertainment | Film Industry | Music Industry Legal Consultant | Digital Media and OTT Platform Legal Advisor |",
      link: "/services/entertainment"
    },
    {
      icon: faUsers,
      title: "Real Estate",
      description: "Property Dispute | RERA Compliance | Property Registration | Land Dispute | Title Verification & Property Due Diligence | Real Estate Fraud |",
      link: "/services/real-estate"
    },
    {
      icon: faHouse,
      title: "Criminal Law",
      description: "Legal Help for FIR & Police Cases | Arrest & Police Interrogation | Cyber Crime & Online Fraud | Money Laundering Case | Bank & Insurance Fraud | Criminal Breach |",
      link: "/services/criminal-law"
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Simplified decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-[#D2A02A]/10 rounded-br-full -translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#5A4C33]/10 rounded-tl-full translate-x-20 translate-y-20" />
      
      {/* Optimized dotted pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#5A4C33 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <MotionDiv 
          id="practice-header"
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-6 relative inline-block">
            Our Expertise
            <div className="h-1 bg-[#D2A02A] absolute -bottom-2 left-1/4 right-1/4 mx-auto" />
          </h2>
          <div className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
            Our firm combines decades of legal experience with personalized service to deliver exceptional results for all our clients. AMA focuses on providing strategic, result-driven legal advisory services that protect our client's rights and support their growth and success.
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.slice(0, isDesktop ? 6 : 4).map((item, index) => (
            <MotionDiv
              key={index}
              id={`practice-area-${index}`}
              className="bg-[#F8F5EC] rounded-lg border-l-4 border-[#D2A02A] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={item.link} className="block h-full">
                <div className="p-6 relative">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#D2A02A]/20 flex items-center justify-center text-[#D2A02A] mr-4">
                      <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#5A4C33]">{item.title}</h3>
                  </div>
                  
                  <p className="text-[#5A4C33]/80 hidden md:block">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 flex justify-end">
                    <div className="inline-flex items-center text-[#D2A02A] font-medium group">
                      <span className="mr-2">Learn More</span>
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
        
        <MotionDiv 
          id="practice-cta"
          className="flex justify-center mt-14"
        >
          <Link href="/services">
            <button className="bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
              View All Services
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>
          </Link>
        </MotionDiv>
      </div>
    </div>
  )
}