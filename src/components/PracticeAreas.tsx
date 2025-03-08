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
          Why Choose Us
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
            description: "Our attorneys bring decades of combined experience across various practice areas."
          },
          {
            icon: faScaleBalanced,
            title: "Family Law",
            description: "We prioritize understanding your unique needs to deliver tailored legal solutions."
          },
          {
            icon: faBuilding,
            title: "Proven Results",
            description: "Successfully handled thousands of cases with exceptional results for our clients."
          },
          {
            icon: faBuildingColumns,
            title: "Ethical Practice",
            description: "We maintain the highest standards of integrity and professional ethics in all our work."
          },
          {
            icon: faUsers,
            title: "Ethical Practice",
            description: "We maintain the highest standards of integrity and professional ethics in all our work."
          },
          {
            icon: faHouse,
            title: "Ethical Practice",
            description: "We maintain the highest standards of integrity and professional ethics in all our work."
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
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D2A02A]/20 to-[#5A4C33]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  )
}