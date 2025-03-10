'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuildingColumns,
  faUsers,
  faHouse,
  faScaleBalanced,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import Link from 'next/link';




export default function PracticeAreas() {
  return (
    <div className="bg-white py-10 relative">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-[#D2A02A]/5 rounded-br-full" />
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#5A4C33]/5 rounded-tl-full" />
    
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="text-center mb-20">
        <motion.h2 
          className="text-5xl font-bold text-[#5A4C33] mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-[#D2A02A] mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="max-w-2xl mx-auto mt-6 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our firm combines decades of legal experience with personalized service to deliver exceptional results for all our clients.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: faHouse,
            title: "Banking and Finance",
            description: "Financial Fraud | Financial Scam | Bnaking Regulatory Compilance | Commercial Banking Issues | Financial Litigation | Frozen Bank Accounts |"
          },
          {
            icon: faScaleBalanced,
            title: "Loan Settlement",
            description: "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |"
          },
          {
            icon: faBuilding,
            title: "Intellectual Property Rights",
            description: "Trademark Registration | Patent Filing | Copyright Protection | IP Infringement | Brand Protection | Pharmaceutical Patent Attorney |"
          },
          {
            icon: faBuildingColumns,
            title: "Entertainment Law",
            description: "Media and entertainment | Film Industry | Music Industry Legal Consultant | Digital Media and OTT Platform Legal Advisor |"
          },
          {
            icon: faUsers,
            title: "Real Estate",
            description: "Property Dispute | RERA Compliance | Property Registration | Land Dispute | Title Verification & Property Due Diligence | Real Estate Fraud |"
          },
          {
            icon: faHouse,
            title: "Criminal Law",
            description: "Legal Help for FIR & Police Cases | Arrest & Police Interrogation | Cyber Crime & Online Fraud | Money Laundering Case | Bank & Insurance Fraud | Criminal Breach |"
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-8 rounded-xl border border-gray-200 hover:border-[#D2A02A] transition-all duration-300 h-full group-hover:shadow-lg group-hover:-translate-y-2 bg-white relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#5A4C33]/10 flex items-center justify-center text-[#D2A02A] mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-all duration-300 mx-auto">
                <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#5A4C33] mb-4 text-center">{item.title}</h3>
              <p className="text-blue-600 text-center">{item.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D2A02A]/20 to-[#5A4C33]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/services">
          <button className="relative overflow-hidden bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group cursor-pointer">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D2A02A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative inline-flex items-center">
                View More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </Link>
      </div>
    </motion.div>
  </div>
  )
}