'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import { isUtilityPath } from '@/components/InteractiveLeadModal';

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });
const InteractiveLeadModal = dynamic(() => import("@/components/InteractiveLeadModal"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Exclude common components for admin, login, and contact routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      {/* Modal available only for explicit user button triggers, zero auto-popups */}
      <InteractiveLeadModal />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
