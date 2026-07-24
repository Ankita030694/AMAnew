import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  "Civil Law",
  "Criminal Law",
  "Family Law",
  "Business Law",
  "Tax Law",
  "Real Estate Law"
]

export default function Form() {
  return (
    <div className="bg-[#1C1C1C] py-24 relative">
      <div className="absolute inset-0">
        <Image
          src="/formbg.png"
          alt="Form background"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Lawyer Logo"
                  width={64}
                  height={64}
                  className="text-white"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Request A Free<br />Consultation
            </h2>
            <p className="text-gray-300 max-w-md mx-auto">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque.Potenti porta mauris nec vulputate.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your Phone"
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                    />
                    <FaWhatsapp 
                      className="absolute right-3 text-[#25D366] text-lg pointer-events-none" 
                      title="OTP will be sent on WhatsApp"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                >
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-400">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B5B3D] focus:border-[#6B5B3D] placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B5B3D] hover:bg-[#5A4C33] text-white py-3 rounded-md transition-colors duration-300"
              >
                Request consultation
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our <Link href="/privacy-policy" className="text-[#6B5B3D] hover:underline">Privacy Policy</Link> for more details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 