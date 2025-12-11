"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);
  const [isMobileBlogsDropdownOpen, setIsMobileBlogsDropdownOpen] =
    useState(false);

  const blogdropdownhandler = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsBlogsDropdownOpen(false);
    setIsMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/ama-legal-solutions-logo.png"
                alt="AMA Logo"
                width={192}
                height={192}
                className="h-48 w-48"
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div
            className="hidden md:block w-full"

          >
            <div className="flex items-center justify-center space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={handleLinkClick}
              >
                About us
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={handleLinkClick}
              >
                Contact us
              </Link>
              <div className="relative">
                <button
                  onClick={() => blogdropdownhandler()}
                  className="text-gray-300 hover:text-white px-3 py-2 flex items-center"
                >
                  Advocate&apos;s Insights
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isBlogsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/amalive"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={handleLinkClick}
                    >
                      AMA Live
                    </Link>
                    <Link
                      href="/articles"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={handleLinkClick}
                    >
                      Articles &amp; Publications
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* App Store Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
              target="_blank"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-all duration-300 border border-white/20"
              title="Download on Google Play"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
              </svg>
            </Link>
            <Link
              href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
              target="_blank"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-all duration-300 border border-white/20"
              title="Download on App Store"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
              </svg>
            </Link>
          </div>

          {/* Phone Number - Desktop */}
          {/* <div className="hidden md:block">
            <a href="tel:1234567890" className="text-white">
              1234567890
            </a>
          </div> */}

          {/* Hamburger Menu Button - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
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
        <div
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-screen"
              : "opacity-0 -translate-y-4 max-h-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About us" },
              { href: "/services", text: "Services" },
              { href: "/contact", text: "Contact us" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                onClick={handleLinkClick}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {link.text}
              </Link>
            ))}

            {/* Advocate's Insights dropdown for mobile */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsMobileBlogsDropdownOpen(!isMobileBlogsDropdownOpen)
                }
                className="text-gray-300 hover:text-white flex items-center w-full px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: "400ms",
                }}
              >
                Advocate&apos;s Insights
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                    isMobileBlogsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`pl-4 overflow-hidden transition-all duration-200 ${
                  isMobileBlogsDropdownOpen
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
                <Link
                  href="/amalive"
                  className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  AMA Live
                </Link>
                <Link
                  href="/articles"
                  className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  Articles &amp; Publications
                </Link>
              </div>
            </div>

            {/* App Store Links - Mobile */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                target="_blank"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-300 border border-white/20"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: '500ms'
                }}
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Link>
              
              <Link
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                target="_blank"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-300 border border-white/20"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: '550ms'
                }}
              >
                <svg className="w-6 h-6 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Link>
            </div>

            {/* <a 
              href="tel:1234567890" 
              className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: '500ms'
              }}
            >
              1234567890
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
