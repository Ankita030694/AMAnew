'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";

const GlobalPopupForm = dynamic(() => import("./GlobalPopupForm"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Exclude common components for admin and login routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <GlobalPopupForm />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
