"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InteractiveLeadFunnel, { FunnelPreset } from "./InteractiveLeadFunnel";

interface ModalEventDetail {
  preset?: FunnelPreset;
  calculatorData?: {
    loanAmount?: number;
    interest?: number;
    penalty?: number;
    estimatedMin?: number;
    estimatedMax?: number;
    waiverPercent?: string;
    lenderType?: string;
  };
}

export function openLeadModal(detail?: ModalEventDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openInteractiveLeadModal", { detail }));
  }
}

/**
 * Checks whether a path is a utility, operational, checkout, or administrative route.
 */
export function isUtilityPath(pathname: string | null): boolean {
  if (!pathname) return true;
  const path = pathname.toLowerCase();
  
  return (
    path.startsWith("/admin") ||
    path.startsWith("/login") ||
    path.startsWith("/careers") ||
    path.startsWith("/api") ||
    path === "/contact" ||
    path === "/support" ||
    path === "/privacy-policy" ||
    path === "/terms-and-conditions" ||
    path === "/failure" ||
    path === "/payment-success" ||
    path.startsWith("/payment-success/") ||
    path === "/payment" ||
    path.startsWith("/payment/") ||
    path === "/thank-you" ||
    path.startsWith("/thank-you/") ||
    path === "/settlement-thank-you" ||
    path.startsWith("/settlement-thank-you/") ||
    path === "/sales-job-vacancies-in-gurgaon" ||
    path === "/telecaller-vacancies-in-gurgaon"
  );
}

/**
 * Maps all SEO, pSEO, blog, and service pages to their tailored legal funnel preset.
 * Utility and administrative routes strictly return null.
 */
export function getPresetForPath(pathname: string | null): FunnelPreset | null {
  if (!pathname || isUtilityPath(pathname)) return null;
  const path = pathname.toLowerCase();

  // 1. Exact & High-Priority Specific Matches
  if (path === "/" || path === "") return "homepage";
  if (path.includes("calculator")) return "calculator";
  if (path.includes("axis-bank") || path.includes("axis")) return "axis-bank";

  // 2. Payday & Instant Lending App Harassment
  if (
    path.includes("payday") || 
    path.includes("pay-day") || 
    path.includes("7-day") || 
    path.includes("7-days") ||
    path.includes("7days") ||
    path.includes("instant-loan") || 
    path.includes("instant-loans") || 
    path.includes("harassment-from-instant-loan") || 
    path.includes("bharat-loan") || 
    path.includes("mpokket") ||
    path.includes("app-loan") ||
    path.includes("lending-app") ||
    path.includes("chinese-loan") ||
    path.includes("ring-app")
  ) {
    return "payday-loans";
  }

  // 3. Comparison & Unregulated Agency Warnings
  if (
    path.includes("best-loan-settlement") || 
    path.includes("loan-settlement-app") || 
    path.includes("best-apps-for-managing") ||
    path.includes("expert-panel") ||
    path.includes("compare-loan-settlement") ||
    path.includes("best-debt-settlement") ||
    path.includes("best-debt-relief") ||
    path.includes("top-loan-settlement")
  ) {
    return "best-agencies";
  }

  // 4. Lok Adalat & Traffic Challans
  if (path.includes("lok-adalat") || path.includes("challan")) {
    return "lok-adalat";
  }

  // 5. Employment Law, Unpaid Salary & FnF Recovery
  if (
    path.includes("salary") || 
    path.includes("employer") || 
    path.includes("fnf") || 
    path.includes("resignation") ||
    path.includes("unpaid") ||
    path.includes("workplace-harassment") ||
    path.includes("termination")
  ) {
    return "employment-salary";
  }

  // 6. Recovery Harassment, Agent Threats & Police Complaints
  if (
    path.includes("recovery") || 
    path.includes("visiting-home") || 
    path.includes("harass") || 
    path.includes("threat") || 
    path.includes("agent") || 
    path.includes("abusing") || 
    path.includes("calling") || 
    path.includes("rbi-guidelines") || 
    path.includes("repossession") || 
    path.includes("seizure") || 
    path.includes("police") || 
    path.includes("hacked") ||
    path.includes("morphed") ||
    path.includes("hdfc-credit-card-settlement")
  ) {
    return "recovery-harassment";
  }

  // 7. Bank Settlement, NPA, OTS, Sec 138, Arbitration & Demand Notices
  if (
    path.includes("settle") || 
    path.includes("loan") || 
    path.includes("bank") || 
    path.includes("credit-card") || 
    path.includes("cibil") || 
    path.includes("npa") || 
    path.includes("ots") || 
    path.includes("drt") || 
    path.includes("debt") || 
    path.includes("arbitration") || 
    path.includes("notice") || 
    path.includes("cheque") || 
    path.includes("138") || 
    path.includes("defaulter") || 
    path.includes("emi") || 
    path.includes("bounce") || 
    path.includes("recall") || 
    path.includes("section-25") || 
    path.includes("moratorium") || 
    path.includes("foreclosure") || 
    path.includes("two-wheeler") || 
    path.includes("commercial-vehicle") || 
    path.includes("car-loan") || 
    path.includes("navi") || 
    path.includes("sbi") || 
    path.includes("pnb") || 
    path.includes("kotak") || 
    path.includes("icici") || 
    path.includes("hdfc") || 
    path.includes("paytm") || 
    path.includes("moneyview") || 
    path.includes("poonawalla") || 
    path.includes("cred") || 
    path.includes("bajaj") || 
    path.includes("indusind") || 
    path.includes("idfc") || 
    path.includes("rbl") || 
    path.includes("yes-bank") || 
    path.includes("billdesk") || 
    path.includes("si-creva") || 
    path.includes("northern-arc") || 
    path.includes("charities")
  ) {
    return "bank-settlement";
  }

  // 8. Universal Catch-All for all other SEO / pSEO / IPR / Litigation / Location / Guide pages
  return "homepage";
}

export default function InteractiveLeadModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<FunnelPreset>("homepage");
  const [calculatorData, setCalculatorData] = useState<ModalEventDetail["calculatorData"]>();

  // Sync preset with route
  useEffect(() => {
    const routePreset = getPresetForPath(pathname);
    if (routePreset) {
      setPreset(routePreset);
    }
  }, [pathname]);

  // Handle explicit modal triggers from UI buttons
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ModalEventDetail>;
      if (customEvent.detail?.preset) {
        setPreset(customEvent.detail.preset);
      }
      if (customEvent.detail?.calculatorData) {
        setCalculatorData(customEvent.detail.calculatorData);
      }
      setIsOpen(true);
    };

    window.addEventListener("openInteractiveLeadModal", handleOpen);
    return () => {
      window.removeEventListener("openInteractiveLeadModal", handleOpen);
    };
  }, []);

  // Automatic trigger on top pages after optimal engagement
  useEffect(() => {
    if (typeof window === "undefined") return;
    const routePreset = getPresetForPath(pathname);
    if (!routePreset) return;

    // Check if user already submitted or dismissed in this session
    const hasSubmitted = 
      localStorage.getItem("form_submitted") || 
      localStorage.getItem("global_popup_submitted");
    const hasDismissed = sessionStorage.getItem("interactive_lead_modal_dismissed");

    if (hasSubmitted || hasDismissed) return;

    let timer: NodeJS.Timeout;
    let didTrigger = false;

    const triggerOpen = () => {
      if (didTrigger) return;
      didTrigger = true;
      setPreset(routePreset);
      setIsOpen(true);
    };

    // Auto-open timer: 7.5 seconds for in-depth blogs, 4.5 seconds for landing/service pages
    const isBlog = pathname?.toLowerCase().startsWith("/blog");
    const delayMs = isBlog ? 7500 : 4500;
    timer = setTimeout(triggerOpen, delayMs);

    // Or auto-open when user scrolls down into the legal guide (35% for blogs, 30% for service pages)
    const scrollThreshold = isBlog ? 0.35 : 0.30;
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && (scrollPos / totalHeight) >= scrollThreshold) {
        triggerOpen();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleClose = () => {
    try {
      sessionStorage.setItem("interactive_lead_modal_dismissed", "true");
    } catch {}
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const isBlog = pathname?.toLowerCase().startsWith("/blog");

  return (
    <div className={`fixed inset-0 z-[9999] flex justify-center bg-black/65 backdrop-blur-sm animate-fadeIn ${
      isBlog 
        ? "items-center p-3 sm:p-4" 
        : "items-end sm:items-center p-0 sm:p-4"
    }`}>
      {/* Backdrop touch dismiss */}
      <div 
        className="absolute inset-0" 
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Box (Vertically centered on mobile for blog pages) */}
      <div className={`relative z-10 w-full overflow-y-auto shadow-2xl bg-[#FAF9F5] transition-all ${
        isBlog
          ? "w-[94%] max-w-lg sm:max-w-2xl max-h-[88vh] rounded-[24px] sm:rounded-[32px] border border-[#30261C]/15 my-auto"
          : "sm:max-w-2xl max-h-[92vh] rounded-t-[24px] sm:rounded-[32px] border-t sm:border border-[#30261C]/15"
      }`}>
        {!isBlog && (
          <div className="w-10 h-1 bg-[#30261C]/25 mx-auto rounded-full mt-2.5 mb-1 sm:hidden" />
        )}

        <InteractiveLeadFunnel 
          preset={preset}
          theme="light"
          isModal={true}
          onClose={handleClose}
          calculatorData={calculatorData}
          className="border-none shadow-none rounded-none !p-4 sm:!p-7 md:!p-8"
        />
      </div>
    </div>
  );
}
