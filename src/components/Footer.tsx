
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19h20L12 2zm0 3l7 14H5l7-14z"/>
              </svg>
              <span className="ml-2 text-xl font-semibold">AMA</span>
            </Link>
            <p className="text-gray-400">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Find Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>43 W. Wellington Road Fairhope AL 36532</li>
              <li><a href="tel:(257) 388-6895" className="hover:text-white transition-colors">(257) 388-6895</a></li>
              <li><a href="mailto:temmink@outlook.com" className="hover:text-white transition-colors">temmink@outlook.com</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Banking and Finance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Business Law</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Family Law</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          ©Copyright AMA. Design by Xerxes
        </div>
      </div>
    </footer>
  )
} 