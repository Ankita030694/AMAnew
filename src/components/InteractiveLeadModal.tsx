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
 * Maps high-traffic and all-time top performing pages to their tailored legal funnel preset.
 */
export function getPresetForPath(pathname: string | null): FunnelPreset | null {
  if (!pathname) return null;
  const path = pathname.toLowerCase();
  
  // Specific exclusions
  if (
    path.startsWith("/admin") || 
    path.startsWith("/login") || 
    path.startsWith("/payment") || 
    path.startsWith("/thank-you") ||
    path.startsWith("/contact") ||
    path.startsWith("/careers")
  ) {
    return null;
  }

  // Exact & Prefix matches for top pages
  if (path === "/" || path === "") return "homepage";
  if (path.includes("calculator")) return "calculator";
  if (path.includes("axis-bank") || path.includes("axis")) return "axis-bank";
  if (
    path.includes("payday") || 
    path.includes("7-day") || 
    path.includes("harassment-from-instant-loan") || 
    path.includes("bharat-loan") || 
    path.includes("mpokket")
  ) {
    return "payday-loans";
  }
  if (
    path.includes("best-loan-settlement") || 
    path.includes("loan-settlement-app") || 
    path.includes("best-apps-for-managing") ||
    path.includes("expert-panel") ||
    path.includes("compare-loan-settlement")
  ) {
    return "best-agencies";
  }
  if (path.includes("lok-adalat") || path.includes("challan")) {
    return "lok-adalat";
  }
  if (
    path.includes("salary") || 
    path.includes("employer") || 
    path.includes("fnf") || 
    path.includes("resignation")
  ) {
    return "employment-salary";
  }
  if (
    path.includes("recovery-agent") || 
    path.includes("visiting-home") || 
    path.includes("harassment") || 
    path.includes("rbi-guidelines") ||
    path.includes("hdfc-credit-card-settlement")
  ) {
    return "recovery-harassment";
  }
  if (
    path.includes("loan-settlement") || 
    path.includes("navi") || 
    path.includes("sbi") || 
    path.includes("pnb") || 
    path.includes("si-creva") || 
    path.includes("northern-arc") ||
    path.includes("freed-loan-settlement") ||
    path.includes("bank-complaint-in-rbi") ||
    path.includes("bank-of-baroda") ||
    path.includes("kotak") ||
    path.includes("paytm") ||
    path.includes("icici") ||
    path.includes("moneyview") ||
    path.includes("poonawalla") ||
    path.includes("charities") ||
    path.includes("recall-notice") ||
    path.includes("section-25") ||
    path.includes("billdesk") ||
    path.includes("personal-loan") ||
    path.includes("credit-card") ||
    path.includes("settlement") ||
    path.includes("npa") ||
    path.includes("ots") ||
    path.includes("drt")
  ) {
    return "bank-settlement";
  }

  // Blog general & contextual handling
  if (path.startsWith("/blog")) {
    if (
      path.includes("recovery") || 
      path.includes("agent") || 
      path.includes("harass") || 
      path.includes("threat") || 
      path.includes("police")
    ) {
      return "recovery-harassment";
    }
    if (
      path.includes("payday") || 
      path.includes("7-day") || 
      path.includes("instant") || 
      path.includes("chinese") || 
      path.includes("app")
    ) {
      return "payday-loans";
    }
    if (
      path.includes("salary") || 
      path.includes("employer") || 
      path.includes("resignation") || 
      path.includes("fnf") ||
      path.includes("unpaid")
    ) {
      return "employment-salary";
    }
    if (path.includes("lok-adalat") || path.includes("challan")) {
      return "lok-adalat";
    }
    if (
      path.includes("settle") || 
      path.includes("bank") || 
      path.includes("loan") || 
      path.includes("credit-card") || 
      path.includes("cibil") || 
      path.includes("npa") || 
      path.includes("ots") ||
      path.includes("notice") || 
      path.includes("drt")
    ) {
      return "bank-settlement";
    }
    return "homepage";
  }

  return null;
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
