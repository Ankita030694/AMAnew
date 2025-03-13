import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faBuildingColumns,  
  faHouse, 
  faScaleBalanced, 
  faUsers,  
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";
import Locations from "@/components/locations";

// Testimonials data
export const metadata = {
  title: 'Legal Services in Gurugram | AMA Legal Solutions',
  description: 'Explore our comprehensive legal services, including banking and finance law, loan settlements, intellectual property rights, and more in India,UK & Dubai.',
}
export default function Services() {
  // Removed client-side hooks and animations
  
  return (
    <main className="overflow-hidden">
      {/* Dynamic Hero Section with Parallax */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
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
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 z-10 flex flex-col items-center mt-12 md:mt-20">
            <div>
              <h1 className="text-5xl font-bold mb-4 md:mb-8 text-shadow-lg relative text-center">
                <span className="inline-block">Our Legal </span>
                <span className="inline-block relative">
                  &nbsp;Services
                  <div className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 bg-[#D2A02A]" />
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-center px-4">
              Comprehensive legal solutions tailored to your needs with 
              <span className="relative font-semibold px-2">
                <span className="relative z-10">decades of expertise</span>
                <span className="absolute inset-0 bg-[#D2A02A]/20 -skew-x-6 rounded z-0" />
              </span>
            </p>
            
            <div className="mt-6 md:mt-10">
              <Link href="/contact">
                <button 
                  type="button"
                  className="bg-[#D2A02A] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#b88a24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10">Consult Now</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Removed floating decorative elements that used motion */}
      </div>

      {/* Practice Areas Section with enhanced styling */}
      <div className="bg-white py-10 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-20 md:h-32 bg-[#D2A02A]/5 rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-[#5A4C33]/5 rounded-tl-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">Our Expertise</h2>
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
              <div
                key={index}
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
                    <p className="text-[#5A4C33]/80 ">
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
              </div>
            ))}
          </div>
        </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Have legal questions? Ask our experts!
            </h2>
            <div className="inline-block">
              <Link href="/contact">
                <button 
                  type="button"
                  className="bg-[#D2A02A] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-all duration-300 group relative overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">Schedule a Consultation</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </Link>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center md:space-x-6 space-y-2 md:space-y-0">
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Call us:</span> +918700343611 
              </div>
              <div className="border-1">
              </div>
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Email:</span> info@amalegalsolutions.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10 mb-10">
        
        
        <Locations />
      </div>
    </main>
  );
}