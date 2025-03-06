'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
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

          {/* Phone Number - Desktop */}
          <div className="hidden md:block">
            <a href="tel:(257) 388-6895" className="text-white">
              1234567890
            </a>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2">
                About us
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2">
                Contact us
              </Link>
              <a href="tel:(257) 388-6895" className="text-gray-300 hover:text-white block px-3 py-2">
                1234567890
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}