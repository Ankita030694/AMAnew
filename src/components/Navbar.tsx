import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/ama6.png"
                alt="AMA Logo"
                width={192}
                height={192}
                className="h-48 w-48"
              />
              {/* <span className="ml-2 text-white text-xl font-semibold">AMA</span> */}
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block w-full" style={{marginLeft: "-170px"}}>
            <div className="flex items-center justify-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">
                About us
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
                Contact us
              </Link>
            </div>
          </div>

          {/* Phone Number */}
          <div className="hidden md:block">
            <a href="tel:(257) 388-6895" className="text-white">
              1234567890
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}