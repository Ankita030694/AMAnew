"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EC] flex flex-col font-[family-name:var(--font-polysans)]">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-[100px] md:pt-[120px] px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white p-12 rounded-[30px] shadow-2xl border border-[#D2A02A]/10 text-center relative overflow-hidden"
        >
          {/* Success Icon Animation */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center"
            >
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </motion.div>
          </div>

          <h1 className="text-3xl font-bold text-[#30261C] mb-4">
            Payment Successful
          </h1>
          <p className="text-[#30261C]/70 mb-10 text-lg leading-relaxed">
            Thank you for choosing AMA Legal Solutions. Your transaction has been processed successfully.
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              href="/"
              className="w-full bg-[#E19100] text-white font-bold py-4 rounded-xl hover:bg-[#d08600] transition-colors shadow-lg active:scale-95 transform"
            >
              Back to Home
            </Link>
          </div>

          {/* Decorative backdrop blobs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D2A02A]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D2A02A]/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessPage;
