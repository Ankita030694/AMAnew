import Image from 'next/image'

const practiceAreas = [
  {
    title: "Banking and Finance",
    icon: "/icons/banking.svg",
  },
  {
    title: "Family Law",
    icon: "/icons/family.svg",
  },
  {
    title: "Business Law",
    icon: "/icons/business.svg",
  },
  {
    title: "Real Estate",
    icon: "/icons/real-estate.svg",
  },
  {
    title: "Civil Law",
    icon: "/icons/civil.svg",
  },
  {
    title: "Corporate Law",
    icon: "/icons/corporate.svg",
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
              className="group p-8 rounded-lg transition-all duration-300 hover:bg-[#6B5B3D]/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    width={48}
                    height={48}
                    className="text-[#6B5B3D]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#6B5B3D]">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus.
                </p>
                <button className="text-[#6B5B3D] font-medium hover:underline">
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