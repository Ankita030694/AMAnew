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
                <span className="inline-block">Terms & Conditions </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Review Our Terms and Conditions
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

      {/* Terms & Conditions Content Section */}
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
              Welcome to AMA Legal Solutions. These Terms and Conditions govern your use of our website (www.amalegalsolutions.com) and the legal services we provide. By accessing our website or engaging our services, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </div>

          {/* 2. Definitions */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>"Firm," "We," "Us," or "Our" refers to AMA Legal Solutions.</li>
              <li>"Client," "You," or "Your" refers to any individual or entity engaging with our legal services or visiting our website.</li>
              <li>"Services" refers to the legal consultation, advisory, representation, and other professional services provided by AMA Legal Solutions.</li>
            </ul>
          </div>

          {/* 3. Scope of Services */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">3. Scope of Services</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>AMA Legal Solutions provides legal advisory, representation, documentation, and dispute resolution services in accordance with Indian laws.</li>
              <li>The services offered are based on the information provided by the client. We are not responsible for the consequences of inaccurate or incomplete information shared by the client.</li>
              <li>Our legal advice is based on the applicable laws and regulations at the time of consultation and may change due to amendments in the law.</li>
            </ul>
          </div>

          {/* 4. Client Obligations */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">4. Client Obligations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">By engaging our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information required for legal representation.</li>
              <li>Respond promptly to our requests for information and documentation.</li>
              <li>Adhere to the payment terms specified in our fee agreement or service contract.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          {/* 5. Fees and Payments */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">5. Fees and Payments</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All service fees are clearly communicated and agreed upon before the commencement of legal services.</li>
              <li>Payments must be made in full as per the agreed terms and schedule.</li>
              <li>Once the service fee is received, no refunds will be provided under any circumstances.</li>
            </ul>
          </div>

          {/* 6. Refund Policy */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">6. Refund Policy</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>AMA Legal Solutions maintains a strict No Refund Policy.</li>
              <li>Once you make a payment for our legal services, the amount is non-refundable, regardless of the outcome or your decision to discontinue the services.</li>
              <li>In the event of early termination by the client, no refund or credit will be issued for the remaining duration or unused services.</li>
            </ul>
          </div>

          {/* 7. Confidentiality */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">7. Confidentiality</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All client information and case details shared with us will be treated as strictly confidential.</li>
              <li>We will not disclose any information to third parties without your consent, except as required by law.</li>
            </ul>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AMA Legal Solutions will exercise due diligence and provide legal services to the best of our professional ability.
              However, we shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Any loss, damages, or legal consequences arising from inaccurate or incomplete information provided by the client.</li>
              <li>Outcomes beyond our control, including court decisions, regulatory changes, or unforeseen events.</li>
              <li>Any indirect, incidental, or consequential damages arising from the use of our services.</li>
            </ul>
          </div>

          {/* 9. Intellectual Property */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">9. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All content, materials, and legal documents provided by AMA Legal Solutions are the property of the firm.</li>
              <li>You may not reproduce, distribute, or use any content or documentation for commercial purposes without our prior written consent.</li>
            </ul>
          </div>

          {/* 10. Termination of Services */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">10. Termination of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AMA Legal Solutions reserves the right to terminate services in the following cases:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Non-payment of fees.</li>
              <li>Breach of these Terms and Conditions.</li>
              <li>Misuse of our services for unlawful or unethical purposes.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, you remain liable for all unpaid fees and costs incurred.
            </p>
          </div>

          {/* 11. Indemnification */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold AMA Legal Solutions harmless from any claims, liabilities, damages, or expenses arising out of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your breach of these Terms and Conditions.</li>
              <li>Your misuse of our services.</li>
              <li>Any third-party claims related to your actions or omissions.</li>
            </ul>
          </div>

          {/* 12. Governing Law and Jurisdiction */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">12. Governing Law and Jurisdiction</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>These Terms and Conditions are governed by the laws of India.</li>
              <li>Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#5A4C33] mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about these Terms and Conditions, please contact us:
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
