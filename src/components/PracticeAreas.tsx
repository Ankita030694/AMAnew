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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg transition-all duration-300 bg-[#6B5B3D] hover:bg-[#5A4C33]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center text-white">
                  <FontAwesomeIcon 
                    icon={area.icon}
                    className="w-8 h-32"
                    style={{height: "5rem"}}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="text-white/80">
                  Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus.
                </p>
                <button className="text-white font-medium hover:underline">
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