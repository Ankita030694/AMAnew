import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#D2A02A] text-[#000000] pt-16 pb-6 text-bold">
      <div className="max-w-[80%] mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center justify-center sm:justify-start"
            >
              <Image
                src="/ama6.png"
                alt="AMA Logo"
                width={500}
                height={20}
                className="w-64 -mt-20"
              />
            </Link>
            <p className="-mt-18 text-center sm:text-left text-base text-xl">
              Committed to delivering exceptional legal services guided by
              values, expertise, and client satisfaction.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link
                href="https://www.facebook.com/amalegalsolutions/"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/amalegalsolutions/%3Fhl%3Den&ved=2ahUKEwjGiZGYv_qLAxVSyzgGHesQLlsQFnoECCEQAQ&usg=AOvVaw3XAY8vcpLwCWkAQkv3NZFA"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="https://in.linkedin.com/company/ama-legal-solutions"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-6">Visit</h3>
            <ul className="space-y-4 text-xl">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          {/* Find Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
            <ul className="space-y-4 text-xl">
              <li className="break-words">
                2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana
                122001
              </li>
              <li>
                <a
                  href="tel:(257) 388-6895"
                  className="hover:text-white transition-colors"
                >
                  +918700343611
                </a>
              </li>
              <li>
                <a
                  href="mailto:temmink@outlook.com"
                  className="hover:text-white transition-colors break-words"
                >
                  info@amalegalsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="/termscondition"
                  className="hover:text-white transition-colors break-words"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-white transition-colors break-words"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Practice Areas */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-6">Our Expertise</h3>
            <ul className="space-y-4 text-lg text-xl">
              <li>
                <Link href="/services/banking" className="hover:text-white transition-colors">
                  Banking and Finance
                </Link>
              </li>
              <li>
                <Link href="/services/loansettlement" className="hover:text-white transition-colors">
                  Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/ipr" className="hover:text-white transition-colors">
                  Intellectual Property Rights
                </Link>
              </li>
              <li>
                <Link href="/services/entertainment" className="hover:text-white transition-colors">
                  Entertainment Law
                </Link>
              </li>
              <li>
                <Link href="/services/realestate" className="hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services/criminal" className="hover:text-white transition-colors">
                  Criminal Law
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-base sm:text-sm">
          ©Copyright AMA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
