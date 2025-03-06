import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#D2A02A] text-[#5A4C33] pt-16 pb-6 text-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center justify-center sm:justify-start">
              <Image
                src="/ama6.png"
                alt="AMA Logo"
                width={192}
                height={20}
                className="w-48 sm:w-auto"
                style={{marginTop: "-60px"}}
              />
            </Link>
            <p className="-mt-18 text-center sm:text-left text-base sm:text-sm">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="fab fa-telegram-plane"></i>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-lg font-semibold mb-6">Links</h3>
            <ul className="space-y-4 text-lg sm:text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Find Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-lg font-semibold mb-6">Find Us</h3>
            <ul className="space-y-4 text-lg sm:text-sm">
              <li className="break-words">43 W. Wellington Road Fairhope AL 36532</li>
              <li><a href="tel:(257) 388-6895" className="hover:text-white transition-colors">(257) 388-6895</a></li>
              <li><a href="mailto:temmink@outlook.com" className="hover:text-white transition-colors break-words">temmink@outlook.com</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-4 text-lg sm:text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Banking and Finance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Business Law</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Family Law</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-base sm:text-sm">
          ©Copyright AMA. Design by 
        </div>
      </div>
    </footer>
  )
}