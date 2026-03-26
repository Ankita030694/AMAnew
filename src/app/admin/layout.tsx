'use client'

import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faUsers, 
  faChartLine, 
  faClipboardList, 
  faCog, 
  faBriefcase,
  faSignOutAlt,
  faBars,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: faHome, href: '/admin/dashboard' },
  { id: 'users', label: 'Users', icon: faUsers, href: '/admin/users' },
  { id: 'blogs', label: 'Blogs', icon: faChartLine, href: '/admin/blogs' },
  { id: 'articles', label: 'Articles', icon: faClipboardList, href: '/admin/articles' },
  { id: 'amalive', label: 'AMA Live', icon: faCog, href: '/admin/ama-live' },
  { id: 'careers', label: 'Careers', icon: faBriefcase, href: '/admin/careers' },
]

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Handle responsive sidebar initial state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
      // For desktop, we respect the current state but might default to open
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-[#F8F5EC] flex flex-col lg:flex-row overflow-x-hidden">
      {/* Script for Cloudinary */}
      <Script
        id="cloudinary-widget-script-next"
        src="https://upload-widget.cloudinary.com/global/all.js"
        strategy="beforeInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#5A4C33] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-3">
          <img src="/newAssets/logo/ama_box.svg" alt="AMA Admin" className="h-8 w-8" />
          <span className="font-bold tracking-tight text-[#D2A02A]">ADMIN PANEL</span>
        </div>
        <button onClick={toggleSidebar} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Desktop Toggle Button (Floating when sidebar is closed) */}
      {!isMobile && !isSidebarOpen && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={toggleSidebar}
          className="fixed top-6 left-6 z-[60] bg-[#5A4C33] text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:bg-[#D2A02A] transition-all group"
        >
          <img src="/newAssets/logo/ama_box.svg" alt="AMA" className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      {/* Sidebar Navigation */}
      <AnimatePresence mode="wait">
        {(isSidebarOpen || !isMobile) && (
          <motion.aside
            initial={isMobile ? { x: -300 } : { width: 0, opacity: 0 }}
            animate={isMobile ? { x: 0 } : { width: isSidebarOpen ? 288 : 0, opacity: isSidebarOpen ? 1 : 0 }}
            exit={isMobile ? { x: -300 } : { width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
              ${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'sticky top-0 h-screen'}
              bg-[#5A4C33] text-white shadow-2xl flex flex-col overflow-hidden whitespace-nowrap
            `}
            style={{ width: isMobile ? '288px' : undefined }}
          >
            {/* Sidebar Branding & Collapse Button */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex flex-col items-start">
                <img src="/newAssets/logo/ama.svg" alt="AMA Legal Solutions" className="h-8 w-auto mb-1" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D2A02A] font-bold ml-1">Administration</p>
              </div>
              {!isMobile && (
                <button 
                  onClick={toggleSidebar}
                  className="p-2 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              )}
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.id} 
                    href={item.href}
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                    className={`
                      flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group
                      ${isActive 
                        ? 'bg-[#D2A02A] text-white shadow-lg' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'}
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className={`text-lg transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'} flex-shrink-0`} 
                      />
                      <span className="font-medium tracking-wide">{item.label}</span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeInd" className="w-1.5 h-1.5 bg-white rounded-full shadow-glow flex-shrink-0" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-white/10 space-y-3">
              <Link 
                href="/" 
                className="flex items-center space-x-4 px-4 py-3 text-white/50 hover:text-[#D2A02A] transition-colors group mb-2"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-lg group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="font-medium">Go to Website</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-4 px-4 py-4 bg-white/5 hover:bg-red-500/10 text-white/70 hover:text-red-400 rounded-xl transition-all duration-300 group border border-transparent hover:border-red-500/20"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="text-lg group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                <span className="font-bold tracking-wide">Sign Out</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
        <div className="flex-1 relative">
          <div className="p-4 lg:p-10 min-h-screen">
             {children}
          </div>
        </div>
        <Toaster position="top-right" />
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
 