"use client";

import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <motion.div
      className="bg-white text-gray-900 p-12 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] max-w-6xl mx-auto my-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-[#5A4C33]">
        ABOUT US
      </h1>
      <div className="w-24 h-1 bg-[#6B5B3D] mx-auto mb-12 text-center"></div>
      <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center px-5">
        Welcome to AMA Legal Solutions – Your Trusted Law Firm in Gurugram,
        India. We take pride in our 35-year legacy of providing expert legal
        services in India, built on integrity, professionalism, and excellence.
        As a top-rated law firm in Gurugram, we specialize in banking and
        finance law, corporate law, arbitration, real estate law, and
        entertainment law, offering strategic legal solutions tailored to the
        unique needs of individuals, businesses, and startups.
      </p>
      <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center px-5">
        With a proven track record, we have successfully assisted over 1000
        clients, concluding 650+ cases and delivering excellence in 300+ legal
        closures. Our seasoned legal consultants and advocates bring extensive
        experience in loan settlements, debt restructuring, business compliance,
        contract negotiations, financial litigation, and dispute resolution.
      </p>
      <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center px-5">
        What sets us apart is our personalized approach. We believe that every
        legal matter is unique, requiring customized legal strategies that
        prioritize your best interests. At AMA Legal Solutions, you are not just
        a case number—you are our priority, and we are committed to delivering
        top-tier legal representation with a strong emphasis on ethics and
        professionalism.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 text-center px-5">
        As members of the Indo-American Chamber of Commerce (IACC), Mumbai
        Centre for International Arbitration (MCIA), Bar Council of Delhi, and
        Bar Council of India, we bring global legal perspectives to every case.
        Our legal team continuously stays updated with evolving laws to provide
        cutting-edge legal advice and effective legal representation. Contact us
        today and experience the difference of working with a client-focused,
        ethical, and results-driven law firm.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 text-center px-5 mt-5">
        <a
          href="https://www.amalegalsolutions.com"
          className="text-lg leading-relaxed text-danger px-5"
        >
          www.amalegalsolutions.com
        </a>
      </p>
    </motion.div>
  );
};

export default AboutInfo;
