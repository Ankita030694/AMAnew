import Image from 'next/image'
import Link from 'next/link'
import { m, LazyMotion, domMax } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa'
import { Attorney } from '@/lib/attorneys';

export default function OurAttorneys({ attorneys = [] }: { attorneys?: Attorney[] }) {
  
  return (
    <div className="bg-white py-6">
      <LazyMotion features={domMax}>
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#6B5B3D] mb-4">
            Our Team
          </h2>
          <div className="relative flex items-center justify-center">
            <div className="h-[1px] bg-[#D2A02A] w-24"></div>
            <span className="px-4 bg-white text-[#D2A02A]">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
              </svg>
            </span>
            <div className="h-[1px] bg-[#D2A02A] w-24"></div>
          </div>
        </m.div>

        {/* All Team Members */}
        {attorneys.length > 0 ? (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {attorneys.map((attorney, index) => (
                <m.div
                  key={attorney.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
                  className="flex flex-col items-center"
                >
                  <AttorneyCard attorney={attorney} index={index} />
                </m.div>
              ))}
            </div>
          </m.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No team members found. Please check back later.</p>
          </div>
        )}
      </m.div>
      </LazyMotion>
    </div>
  );
}

const AttorneyCard = ({ attorney, index }: { attorney: Attorney; index: number }) => {
  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    telegram: FaTelegram,
    linkedin: FaLinkedin
  };

  return (
    <>
      <m.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-64 h-64 mb-6 overflow-hidden rounded-lg shadow-lg"
      >
        {attorney.image ? (
          <Image
            src={attorney.image}
            alt={attorney.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            priority={index < 4}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-4xl">
              {attorney.name.charAt(0)}
            </span>
          </div>
        )}
      </m.div>
      
      <h3 className="text-xl font-semibold text-[#6B5B3D] mb-2">
        {attorney.name}
      </h3>
      <p className="text-gray-600 mb-4">{attorney.position}</p>
      
      <div className="flex space-x-4">
        {Object.entries(attorney.socials).map(([platform, url]) => {
          const Icon = socialIcons[platform as keyof typeof socialIcons];
          return (
            <m.div
              key={platform}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={url}
                className="w-10 h-10 rounded-full bg-[#6B5B3D] border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors duration-300 text-white"
              >
                <Icon className="w-5 h-5" />
              </Link>
            </m.div>
          );
        })}
      </div>
    </>
  );
};