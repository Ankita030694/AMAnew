'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, ShieldAlert, BookOpen, Briefcase, Phone, MessageSquare } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#EBE9E4] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Texture/Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#30261C 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side: Large 404 and main message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#D29E0D]/10 text-[#D29E0D] font-medium text-sm mb-8 border border-[#D29E0D]/20">
              Error 404
            </div>
            
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl font-normal text-[#30261C] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-polysans)' }}
            >
              Lost in <br />
              <span className="text-[#D29E0D]">Transit?</span>
            </h1>
            
            <p className="text-[#30261C]/70 text-xl mb-10 max-w-lg leading-relaxed font-light">
              The page you are looking for might have been moved, deleted, or never existed. Don't worry, we'll help you find your way back to the right legal solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#30261C] text-white rounded-full hover:bg-[#30261C]/90 transition-all duration-300 shadow-xl shadow-black/10 text-lg font-light"
              >
                <Home size={20} />
                Return Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 border border-[#30261C]/20 text-[#30261C] rounded-full hover:bg-white transition-all duration-300 text-lg font-light"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Right side: Quick links / Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 gap-5"
          >
            <Link href="/services" className="group">
              <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-[#D29E0D]/30 hover:bg-white/60 transition-all duration-500 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#D29E0D] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#D29E0D]/20 group-hover:rotate-6 transition-transform duration-500">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#30261C] mb-1" style={{ fontFamily: 'var(--font-polysans)' }}>Our Expertise</h3>
                  <p className="text-[#30261C]/60 font-light text-sm md:text-base">Explore our range of specialized legal services.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-[#D29E0D]/30 hover:bg-white/60 transition-all duration-500 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#30261C] flex items-center justify-center text-[#EBE9E4] shrink-0 shadow-lg shadow-black/10 group-hover:-rotate-6 transition-transform duration-500">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#30261C] mb-1" style={{ fontFamily: 'var(--font-polysans)' }}>Legal Insights</h3>
                  <p className="text-[#30261C]/60 font-light text-sm md:text-base">Read latest articles from our legal experts.</p>
                </div>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="p-8 rounded-3xl bg-[#D29E0D]/5 backdrop-blur-md border border-[#D29E0D]/10 hover:border-[#D29E0D]/30 hover:bg-[#D29E0D]/10 transition-all duration-500 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#D29E0D] shrink-0 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#30261C] mb-1" style={{ fontFamily: 'var(--font-polysans)' }}>Immediate Help</h3>
                  <p className="text-[#30261C]/60 font-light text-sm md:text-base">Get in touch for any legal assistance.</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Support section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-[#30261C]/10 text-center"
        >
          <p className="text-[#30261C]/40 text-sm uppercase tracking-[0.2em] font-medium mb-8">Direct Assistance</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
             <a href="tel:+918700343611" className="flex items-center gap-3 text-[#30261C] hover:text-[#D29E0D] transition-colors group font-light text-lg">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#D29E0D]/10 transition-colors">
                  <Phone size={18} className="text-[#D29E0D]" />
                </div>
                +91 8700343611
             </a>
             <a href="mailto:notify@amalegalsolutions.com" className="flex items-center gap-3 text-[#30261C] hover:text-[#D29E0D] transition-colors group font-light text-lg">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#D29E0D]/10 transition-colors">
                  <MessageSquare size={18} className="text-[#D29E0D]" />
                </div>
                notify@amalegalsolutions.com
             </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D29E0D]/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#30261C]/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      
      {/* Background Accent Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.03] font-bold text-[15vw] text-[#30261C] whitespace-nowrap pointer-events-none select-none hidden lg:block uppercase tracking-tighter">
        Not Found • Not Found • Not Found
      </div>
    </main>
  )
}
