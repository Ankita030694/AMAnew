"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";


// Testimonials data

export default function Services() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // For floating decorative elements
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className="overflow-hidden">
      {/* Dynamic Hero Section with Parallax */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: useTransform(scrollYProgress, [0, 0.5], [0, 100]),
          }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 z-10 flex flex-col items-center mt-12 md:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-4 md:mb-8 text-shadow-lg relative text-center">
                <span className="inline-block">Privacy Policy </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Review Our Privacy Policy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 md:mt-10"
            >
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-[#D2A02A] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#b88a24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10">Consult Now</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating decorative elements - only visible on larger screens */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 rounded-full border-4 border-[#D2A02A]/30 hidden md:block"
          style={{ y: floatingY, rotate: floatingRotate }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-16 h-16 bg-[#5A4C33]/10 rounded-lg hidden md:block"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 30]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          }}
        />
      </div>

      {/* Privacy Policy Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* 1. Introduction */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to AMA Legal Solutions. We are committed to protecting your privacy and ensuring that your personal information is handled with care and transparency. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website (www.amalegalsolutions.com) or engage with our legal services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our website or services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">We may collect and process the following types of information:</p>
            
            <h3 className="text-xl font-semibold text-[#5A4C33] mt-6 mb-3">a) Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name, contact details (phone number, email address, mailing address)</li>
              <li>Identification documents (PAN, Aadhaar, passport)</li>
              <li>Billing and payment information</li>
              <li>Any other information you provide during consultations or through our website forms</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#5A4C33] mt-6 mb-3">b) Non-Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Website usage data (cookies, page visits, interaction history)</li>
              <li>Anonymous statistical data for analytics</li>
            </ul>
          </div>

          {/* 3. How We Collect Information */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">3. How We Collect Information</h2>
            <p className="text-gray-700 leading-relaxed">We collect information through:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Direct interactions: When you contact us, fill out forms, or provide information during consultations.</li>
              <li>Website and cookies: When you visit our website, we use cookies and tracking technologies to collect usage data.</li>
              <li>Third-party services: When you interact with us through social media platforms or other service providers.</li>
            </ul>
          </div>

          {/* 4. How We Use Your Information */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Legal services: To provide legal consultation, representation, and case management.</li>
              <li>Communication: To respond to inquiries, send legal updates, and provide service-related notifications.</li>
              <li>Billing and payments: To process invoices, payments, and refunds.</li>
              <li>Marketing: To share newsletters, legal insights, and promotional offers (with your consent).</li>
              <li>Compliance: To comply with legal obligations, prevent fraud, and protect our legal rights.</li>
            </ul>
          </div>

          {/* 5. Data Sharing and Disclosure */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal information. However, we may share your data with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Service providers: Third-party vendors for payment processing, IT support, and data storage.</li>
              <li>Legal authorities: When required by law, regulation, or legal process.</li>
              <li>Affiliated partners: With your consent, for collaborative legal services.</li>
            </ul>
          </div>

          {/* 6. Data Security */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Encrypted data storage and secure servers</li>
              <li>Restricted access to authorized personnel only</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no online transmission is entirely secure, and we cannot guarantee absolute data security.
            </p>
          </div>

          {/* 7. Your Privacy Rights */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Access your data: Request details of the personal information we hold about you.</li>
              <li>Rectify inaccuracies: Correct any incomplete or inaccurate information.</li>
              <li>Withdraw consent: Opt-out of marketing communications at any time.</li>
              <li>Request deletion: Ask us to delete your personal information, subject to legal obligations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:info@amalegalsolutions.com" className="text-[#D2A02A] hover:underline">info@amalegalsolutions.com</a>
            </p>
          </div>

          {/* 8-11. Remaining Sections */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">8. Cookies Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing any information.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with the revised date. We encourage you to review this policy regularly.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us:
            </p>
            <p className="text-gray-700 mt-4 flex items-center">
              <span className="text-[#D2A02A] mr-2">📧</span> Email: <a href="mailto:Info@amalegalsolutions.com" className="text-[#D2A02A] hover:underline ml-2">Info@amalegalsolutions.com</a>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
