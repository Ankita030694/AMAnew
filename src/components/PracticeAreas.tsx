'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuildingColumns,
  faUsers,
  faBriefcase,
  faHouse,
  faScaleBalanced,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'

const practiceAreas = [
  {
    title: "Banking and Finance",
    icon: faBuildingColumns,
  },
  {
    title: "Family Law", 
    icon: faUsers,
  },
  {
    title: "Business Law",
    icon: faBriefcase,
  },
  {
    title: "Real Estate",
    icon: faHouse,
  },
  {
    title: "Civil Law",
    icon: faScaleBalanced,
  },
  {
    title: "Corporate Law",
    icon: faBuilding,
  },
]

export default function PracticeAreas() {
  return (
    <div className="bg-white relative z-20 -mt-32 md:-mt-40 pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">OUR SERVICES</h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D2A02A]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-[#D2A02A]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="group p-1 md:p-3 rounded-lg transition-all duration-300 bg-[#D2A02A] hover:bg-[#5A4C33]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-[#ffffff]">
                  <FontAwesomeIcon 
                    icon={area.icon}
                    className="w-6 h-24 md:w-8 md:h-32"
                    style={{height: "2rem"}}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#5A4C33] group-hover:text-white">
                  {area.title}
                </h3>
                <p className="text-sm md:text-base text-[#5A4C33] group-hover:text-white p-3">
                  Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus.
                </p>
                <button className="text-sm md:text-base text-[#5A4C33] font-medium hover:underline group-hover:text-white">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}