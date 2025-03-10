'use client'


import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faBuildingColumns,  
  faHouse, 
  faScaleBalanced, 
  faUsers,  
} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";

// Testimonials data

export default function Services() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  

  
  // For floating decorative elements
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);




  
  return (
    <main className="overflow-hidden">
      {/* Dynamic Hero Section with Parallax */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        <motion.div 
          style={{ 
            scale: heroScale,
            opacity: heroOpacity,
            y: useTransform(scrollYProgress, [0, 0.5], [0, 100])
          }}
          className="absolute inset-0"
        >
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover" 
            style={{ objectFit: 'cover' }}
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 z-10 flex flex-col items-center mt-12 md:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 text-shadow-lg relative text-center">
                <span className="inline-block">Our Legal </span>
                <span className="inline-block relative">
                  &nbsp;Services
                  <motion.div 
                    className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 bg-[#D2A02A]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive legal solutions tailored to your needs with 
              <span className="relative font-semibold px-2">
                <span className="relative z-10">decades of expertise</span>
                <span className="absolute inset-0 bg-[#D2A02A]/20 -skew-x-6 rounded z-0" />
              </span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 md:mt-10"
            >
              <button 
                type="button"
                className="bg-[#D2A02A] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#b88a24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Consult Now</span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating decorative elements - only visible on larger screens */}
        <motion.div 
          className="absolute top-20 right-20 w-24 h-24 rounded-full border-4 border-[#D2A02A]/30 hidden md:block"
          style={{ y: floatingY, rotate: floatingRotate }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-16 h-16 bg-[#5A4C33]/10 rounded-lg hidden md:block"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]), rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
        />
      </div>

      {/* Practice Areas Section with enhanced styling */}
      <div className="bg-white py-10 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-20 md:h-32 bg-[#D2A02A]/5 rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-[#5A4C33]/5 rounded-tl-full" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4C33] mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-[#D2A02A] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: faHouse,
                title: "Banking and Finance",
                description: "Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues | Financial Litigation | Frozen Bank Accounts |",
                link: "/services/banking"
              },
              {
                icon: faScaleBalanced,
                title: "Loan Settlement",
                description: "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |",
                link: "/services/loansettlement"
              },
              {
                icon: faBuilding,
                title: "Intellectual Property Rights",
                description: "Trademark Registration | Patent Filing | Copyright Protection | IP Infringement | Brand Protection | Pharmaceutical Patent Attorney |",
                link: "/services/ipr"
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
                link: "/services/realestate"
              },
              {
                icon: faHouse,
                title: "Criminal Law",
                description: "Legal Help for FIR & Police Cases | Arrest & Police Interrogation | Cyber Crime & Online Fraud | Money Laundering Case | Bank & Insurance Fraud | Criminal Breach |",
                link: "/services/criminal"
              },
              {
                icon: faHouse,
                title: "Corporate Law",
                description: "Company Registration | Company Incorporation | Startup Compliance | MSME Registration | Partnership Agreement | Contract Drafting |",
                link: "/services/corporate"
              },
              {
                icon: faHouse,
                title: "Arbitration Law",
                description: "Arbitration Agreement Drafting | Arbitration Awards | Arbitral Award | Interim Relief | Banking and finance arbitration |",
                link: "/services/arbitration"
              },
              {
                icon: faHouse,
                title: "IT and Cyber Law",
                description: "Filing Cybercrime Complaint | FIR for Cyber Fraud | Cybercrime Police Complaint | Defamation on Social Media | Cyber Harassment Legal Remedies |",
                link: "/services/cyber"
              },
              {
                icon: faHouse,
                title: "Civil Law",
                description: "Property Dispute | Landlord Tenant Issue | Illegal Possession | Breach of Contract | Agreement Drafting | Specific Performance |",
                link: "/services/civil"
              },
              {
                icon: faHouse,
                title: "Drafting",
                description: "Business Contract | Employment Agreement | Service Agreement | Property Sale Deed | Lease Agreement | NDA Drafting (India & UK) | Legal Notice |",
                link: "/services/drafting"
              },
              {
                icon: faHouse,
                title: "Litigation",
                description: "Banking & Financial Dispute Litigation | Intellectual Property (IP) Litigation | Real Estate & Construction Litigation | Debt Recovery & Financial Disputes | Criminal Litigation | Civil Litigation |",
                link: "/services/litigation"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 3) }} // Limit delay for mobile performance
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link href={item.link}>
                  <div className="p-4 md:p-8 rounded-xl border border-gray-200 hover:border-[#D2A02A] transition-all duration-300 h-full group-hover:shadow-lg group-hover:-translate-y-2 bg-white relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5A4C33]/10 flex items-center justify-center text-[#D2A02A] mb-4 md:mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-all duration-300 mx-auto">
                      <FontAwesomeIcon icon={item.icon} className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#5A4C33] mb-2 md:mb-4 text-center">{item.title}</h3>
                    <p className="text-sm md:text-base text-center text-blue-600">{item.description}</p>
                  </div>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D2A02A]/20 to-[#5A4C33]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Call to Action Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/bannerbg.png"
            alt="Background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="relative text-white py-16 md:py-24 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Have legal questions? Ask our experts!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <button 
                type="button"
                className="bg-[#D2A02A] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
            <motion.div 
              className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center md:space-x-6 space-y-2 md:space-y-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Call us:</span> +918700343611 
              </div>
              <div className="border-1">

              </div>
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Email:</span> info@amalegalsolutions.com
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
      {/* Testimonials Carousel */}
      {/* <div className="bg-[#F9F9F9] py-16 md:py-24 relative overflow-hidden">
        <motion.div 
          className="absolute -right-16 top-20 w-80 h-80 rounded-full bg-[#D2A02A]/5 hidden md:block"
          style={{ 
            y: useTransform(scrollYProgress, [0.5, 1], [100, -100]),
            opacity: useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1])
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4C33] mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-[#D2A02A] mx-auto" />
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 sm:p-8 md:p-12 shadow-xl mx-4 sm:mx-0"
              >
                <div className="text-3xl md:text-4xl text-[#D2A02A] mb-4 md:mb-6">&quot;</div>
                <p className="text-base md:text-lg lg:text-xl italic text-gray-700 mb-6 md:mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5A4C33] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div className="ml-4 text-left">
                    <div className="font-semibold text-[#5A4C33]">{testimonials[currentTestimonial].author}</div>
                    <div className="text-xs md:text-sm text-gray-500">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-4">
              <button 
                type="button"
                onClick={handlePrevTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="flex space-x-1 md:space-x-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleTestimonialSelect(i)}
                    className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-[#D2A02A] w-4 md:w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button 
                type="button"
                onClick={handleNextTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">Our Locations</h2>
            <div className="w-24 h-1 bg-[#D2A02A] mx-auto" />
            <p className="max-w-2xl mx-auto mt-6 text-gray-600">
              With offices strategically located throughout the region, we make expert legal counsel accessible wherever you are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-3">
            {[
              {
                id: 1,
                image: "/city1.svg", 
                name: "Downtown Office",
                address: "123 Legal Avenue, Downtown",
                phone: "(555) 123-4567",
                link: "/locations/newdelhi"
              },
              {
                id: 2,
                image: "/city2.svg",
                name: "Westside Branch",
                address: "456 Justice Blvd, Westside",
                phone: "(555) 234-5678",
                link: "/locations/mumbai"
              },
              {
                id: 3,
                image: "/city3.svg",
                name: "Suburban Office",
                address: "789 Counsel Lane, Suburbia",
                phone: "(555) 345-6789",
                link: "/locations/kolkata"
              },
              {
                id: 4,
                image: "/city4.svg",
                name: "Suburban Office",
                address: "789 Counsel Lane, Suburbia",
                phone: "(555) 345-6789",
                link: "/locations/jaipur"
              },
              {
                id: 5,
                image: "/city5.svg",
                name: "Suburban Office",
                address: "789 Counsel Lane, Suburbia",
                phone: "(555) 345-6789",
                link: "/locations/bengaluru"
              },
              {
                id: 6,
                image: "/city6.svg",
                name: "Suburban Office",
                address: "789 Counsel Lane, Suburbia",
                phone: "(555) 345-6789",
                link: "/locations/chennai"
              }
            ].map((location) => (
              <div key={location.id} className="group relative">
                <a href={location.link} className="block h-full">
                  <div className="overflow-hidden rounded-t-xl">
                    <div className="h-64 overflow-hidden">
                      <div 
                        className="h-full w-full bg-no-repeat bg-contain bg-center transform group-hover:scale-110 transition-transform duration-500 group-hover:filter group-hover:brightness-50"
                        style={{ backgroundImage: `url(${location.image})`}}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[#D2A02A] text-white font-semibold py-2 px-4 rounded">
                      View More
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
    </main>
  );
}