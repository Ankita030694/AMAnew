import Image from 'next/image'
import Link from 'next/link'

const attorneys = [
  {
    image: "/attorneys/finance-lawyer.jpg",
    title: "Shrey Arora",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      telegram: "#"
    }
  },
  {
    image: "/attorneys/criminal-defence-lawyer.jpg",
    title: "Rahul Gour",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      telegram: "#"
    }
  },
  {
    image: "/attorneys/tax-lawyer.jpg",
    title: "Ritika Harplani",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      telegram: "#"
    }
  }
]

export default function OurAttorneys() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#6B5B3D] text-center mb-16">
          Our Attorneys
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square relative mb-6">
                <Image
                  src={attorney.image}
                  alt={attorney.title}
                  fill
                  className="object-cover bg-gray-100"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-[#6B5B3D] mb-4">
                {attorney.title}
              </h3>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <Link href={attorney.socials.facebook} className="w-10 h-10 rounded-full bg-white border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href={attorney.socials.twitter} className="w-10 h-10 rounded-full bg-white border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href={attorney.socials.instagram} className="w-10 h-10 rounded-full bg-white border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href={attorney.socials.telegram} className="w-10 h-10 rounded-full bg-white border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors">
                  <i className="fab fa-telegram-plane"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 