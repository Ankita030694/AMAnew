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
                src="/ama6.png"
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
            style={{ marginLeft: "-120px" }}
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
                      Blogs
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
                  href="/blogs"
                  className="text-gray-300 hover:text-white block px-3 py-2 transform transition-all duration-300 hover:translate-x-2"
                  onClick={handleLinkClick}
                >
                  Blogs
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
