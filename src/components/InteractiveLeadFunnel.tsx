"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  AlertTriangle, 
  Scale, 
  PhoneCall,
  Check,
  X
} from "lucide-react";

export type FunnelPreset = 
  | "homepage" 
  | "calculator" 
  | "axis-bank" 
  | "payday-loans" 
  | "best-agencies" 
  | "lok-adalat"
  | "bank-settlement"
  | "employment-salary"
  | "recovery-harassment";

interface InteractiveLeadFunnelProps {
  preset: FunnelPreset;
  className?: string;
  theme?: "light" | "dark";
  isModal?: boolean;
  onClose?: () => void;
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

interface FunnelConfig {
  badge: string;
  title: string;
  subtitle: string;
  source: string;
  serviceRequired: string;
  step1Label: string;
  step1Title: string;
  step1Options: string[];
  step2Label: string;
  step2Title: string;
  step2Options: string[];
  step3Label: string;
  ctaText: string;
}

const CONFIGS: Record<FunnelPreset, FunnelConfig> = {
  homepage: {
    badge: "AMA Legal Solutions • Advocate Intake",
    title: "Schedule a Formal Case Assessment",
    subtitle: "Consult directly with experienced High Court advocates for structured debt settlement, banking disputes, and defense against unauthorized recovery tactics under RBI directives.",
    source: "Homepage Assessment Widget",
    serviceRequired: "Loan Settlement",
    step1Label: "01. Legal Matter",
    step1Title: "Select nature of legal matter:",
    step1Options: [
      "Loan Settlement & Banking Dispute",
      "Cheque Bounce (Section 138 NI Act)",
      "Illegal Recovery Agent Harassment",
      "Credit Bureau & DPD Rectification"
    ],
    step2Label: "02. Financial Exposure",
    step2Title: "Estimated total financial liability:",
    step2Options: [
      "Under ₹2 Lakhs",
      "₹2 Lakhs to ₹5 Lakhs",
      "₹5 Lakhs to ₹15 Lakhs",
      "Above ₹15 Lakhs"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Request Legal Consultation"
  },
  calculator: {
    badge: "Statutory OTS Evaluation • Compromise Advisory",
    title: "Formalize Your Loan Settlement Proposal",
    subtitle: "Calculators provide indicative mathematical ranges. An advocate must formally structure your hardship petition, past DPD status, and bank-specific compromise parameters.",
    source: "Calculator Interactive Gate",
    serviceRequired: "Loan Settlement",
    step1Label: "01. Account Status",
    step1Title: "Select default classification:",
    step1Options: [
      "Early Default (Missed 1-2 EMIs)",
      "NPA Classification (Over 90 Days DPD)",
      "Legal / Section 138 Notice Received",
      "Debt Sold to Asset Reconstruction (ARC)"
    ],
    step2Label: "02. Collection Status",
    step2Title: "Recovery agent harassment faced:",
    step2Options: [
      "Hostile: Unauthorized residence or workplace visits",
      "Severe: Intimidation of family and reference contacts",
      "Persistent: High-frequency automated calls & SMS",
      "None: Seeking proactive compromise closure"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Request Compromise Settlement Review"
  },
  "axis-bank": {
    badge: "Axis Bank Legal Counsel • Debt Resolution",
    title: "Axis Bank Compromise Settlement Evaluation",
    subtitle: "Review realistic 40%–60% waiver brackets under Axis Bank's compromise policy and enforce RBI Fair Practices against collection agency intimidation.",
    source: "Axis Bank Dedicated Page",
    serviceRequired: "Loan Settlement - Axis Bank",
    step1Label: "01. Axis Facility",
    step1Title: "Select Axis Bank loan facility:",
    step1Options: [
      "Axis Bank Credit Card Outstandings",
      "Axis Bank Unsecured Personal Loan",
      "Axis 24x7 Digital Instant Loan",
      "Multiple Axis Bank Facilities"
    ],
    step2Label: "02. Outstanding Dues",
    step2Title: "Total outstanding liability:",
    step2Options: [
      "Under ₹2 Lakhs",
      "₹2 Lakhs to ₹5 Lakhs",
      "₹5 Lakhs to ₹15 Lakhs",
      "Above ₹15 Lakhs"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Verify Axis Bank Settlement Eligibility"
  },
  "payday-loans": {
    badge: "Cyber Crime & Lending Harassment Defense",
    title: "Halt Predatory Loan App Harassment & Blackmail",
    subtitle: "Immediate Advocate Cease-and-Desist notices and Cyber Cell representation. Complete legal protection against contact hacking and morphed media threats.",
    source: "Payday Loan Emergency Shield",
    serviceRequired: "Loan Settlement / Cyber Harassment",
    step1Label: "01. Lending Application",
    step1Title: "Type of lending application:",
    step1Options: [
      "Unregistered 7-Day Chinese Lending App",
      "RBI-Registered Fintech NBFC Platform",
      "Multiple Instant Digital Loan Apps",
      "Unverified Aggregator / Fake App"
    ],
    step2Label: "02. Harassment Type",
    step2Title: "Immediate harassment being faced:",
    step2Options: [
      "Threats to broadcast morphed photos or contacts",
      "Defamatory calls to family & employers",
      "Unlawful penal charges exceeding principal",
      "Verbal abuse and intimidation by recovery callers"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Initiate Immediate Legal Defense"
  },
  "best-agencies": {
    badge: "Licensed Advocate Counsel • High Court Practice",
    title: "Retain Licensed Advocates for Debt Settlement",
    subtitle: "Commercial settlement companies are unregulated intermediaries unable to represent you in court or halt police complaints. Secure licensed High Court counsel.",
    source: "Best Agencies Comparison Card",
    serviceRequired: "Loan Settlement - Advocate Shield",
    step1Label: "01. Primary Lender",
    step1Title: "Select your primary lender category:",
    step1Options: [
      "Private Commercial Bank (HDFC, Axis, ICICI)",
      "Nationalized Public Sector Bank (SBI, PNB, BOB)",
      "Non-Banking Financial Company (NBFC)",
      "Multiple Banking Institutions & Cards"
    ],
    step2Label: "02. Legal Stage",
    step2Title: "Current legal urgency level:",
    step2Options: [
      "Summons / Section 138 NI Act Notice Received",
      "Arbitration or Lok Adalat Notice Received",
      "Active physical harassment by third-party agents",
      "Pre-litigation compromise settlement sought"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Request Advocate Representation"
  },
  "lok-adalat": {
    badge: "National Lok Adalat • Pre-Litigation Compromise",
    title: "Lok Adalat Settlement Representation",
    subtitle: "Settle bank disputes, recovery claims, and legal notices with zero court fees and a binding judicial decree under the Legal Services Authorities Act.",
    source: "Lok Adalat Case Intake",
    serviceRequired: "Loan Settlement - Lok Adalat",
    step1Label: "01. Dispute Category",
    step1Title: "Select matter category:",
    step1Options: [
      "Bank Loan & Credit Card OTS Settlement",
      "Special Lok Adalat Traffic Challan Disposal",
      "Section 138 Cheque Bounce Compound",
      "Pre-Litigation Bank Dispute Notice"
    ],
    step2Label: "02. Notice Status",
    step2Title: "Notice or hearing status:",
    step2Options: [
      "Lok Adalat Notice / Summons received",
      "Bank requested appearance before Adalat bench",
      "Looking to list loan for upcoming Lok Adalat",
      "Need counsel to negotiate compromise on hearing"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Represent Case in Lok Adalat"
  },
  "bank-settlement": {
    badge: "Banking Ombudsman & OTS Advisory",
    title: "Bank Compromise Settlement & Debt Relief",
    subtitle: "Enforce RBI Prudential Framework guidelines, halt unauthorized collection harassment, and negotiate legal debt haircuts with nationalized banks and NBFCs.",
    source: "Bank Settlement Service Intake",
    serviceRequired: "Loan Settlement",
    step1Label: "01. Lender Type",
    step1Title: "Select banking institution:",
    step1Options: [
      "Nationalized Bank (SBI, PNB, Bank of Baroda)",
      "Private Bank (HDFC, ICICI, Kotak, Axis)",
      "Fintech NBFC (Navi, Bajaj, Ring, Tata)",
      "Multiple Banking Facilities / Cards"
    ],
    step2Label: "02. DPD Classification",
    step2Title: "Default duration & status:",
    step2Options: [
      "SMA-1 / SMA-2 (30 to 89 Days Overdue)",
      "NPA Classification (Over 90 Days DPD)",
      "Recall Notice / Demand Notice Received",
      "Account Written Off or Transferred to ARC"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Negotiate Bank Loan Settlement"
  },
  "employment-salary": {
    badge: "Employment & Labor Law Practice",
    title: "Recover Withheld Salary & FnF Dues",
    subtitle: "Send a formal Advocate Legal Notice under the Payment of Wages Act and Industrial Disputes Act to recover unpaid wages, gratuity, and severance.",
    source: "Employment Salary Recovery Intake",
    serviceRequired: "Employment Law / Salary Recovery",
    step1Label: "01. Dispute Nature",
    step1Title: "Select dispute category:",
    step1Options: [
      "Withheld Full & Final (FnF) Settlement",
      "Unpaid Monthly Salary (2+ Months)",
      "Delayed Gratuity, Bonus or PF Dues",
      "Wrongful Termination Without Notice Pay"
    ],
    step2Label: "02. Outstanding Dues",
    step2Title: "Total unpaid salary / severance:",
    step2Options: [
      "Under ₹1 Lakh",
      "₹1 Lakh to ₹3 Lakhs",
      "₹3 Lakhs to ₹8 Lakhs",
      "Above ₹8 Lakhs"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Issue Legal Demand Notice"
  },
  "recovery-harassment": {
    badge: "Anti-Harassment Legal Shield • RBI Directives",
    title: "Halt Recovery Agent Harassment Legally",
    subtitle: "Enforce RBI's Master Circular on Recovery Agents. Serve an immediate Advocate Cease-and-Desist Notice to ban home/office visits and abusive collection calls.",
    source: "Anti-Harassment Dedicated Shield",
    serviceRequired: "Anti-Harassment Defense",
    step1Label: "01. Lending Entity",
    step1Title: "Select entity sending recovery agents:",
    step1Options: [
      "NBFC (Bajaj Finance, Tata Capital, Hero, etc.)",
      "Private Commercial Bank (HDFC, Axis, ICICI)",
      "Digital Instant Loan Application",
      "Third-Party Collection Agency"
    ],
    step2Label: "02. Harassment Type",
    step2Title: "Harassment being faced:",
    step2Options: [
      "Agents showing up at home / workplace",
      "Abusive calls, vulgarity & threats to family",
      "Continuous calling outside 8 AM – 7 PM window",
      "Threatening criminal prosecution or arrest"
    ],
    step3Label: "03. Privileged Contact",
    ctaText: "Issue Immediate Cease-and-Desist"
  }
};

export default function InteractiveLeadFunnel({
  preset,
  className = "",
  theme = "light",
  isModal = false,
  onClose,
  calculatorData
}: InteractiveLeadFunnelProps) {
  const config = CONFIGS[preset] || CONFIGS.homepage;
  const storageKey = `ama_lead_draft_${preset}`;

  // Progressive Step State: 1 | 2 | 3
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [step1Value, setStep1Value] = useState<string>("");
  const [step2Value, setStep2Value] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isDark = theme === "dark";

  // Load drafts from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.step1) setStep1Value(parsed.step1);
        if (parsed.step2) setStep2Value(parsed.step2);
        if (parsed.name) setName(parsed.name);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.email) setEmail(parsed.email);
      }
    } catch {
      // Ignore
    }
  }, [storageKey]);

  // Persist selections to localStorage
  const saveDraft = (updates: Partial<{ step1: string; step2: string; name: string; phone: string; email: string }>) => {
    try {
      const current = {
        step1: updates.step1 !== undefined ? updates.step1 : step1Value,
        step2: updates.step2 !== undefined ? updates.step2 : step2Value,
        name: updates.name !== undefined ? updates.name : name,
        phone: updates.phone !== undefined ? updates.phone : phone,
        email: updates.email !== undefined ? updates.email : email
      };
      localStorage.setItem(storageKey, JSON.stringify(current));
    } catch {
      // Ignore
    }
  };

  const handleStep1Select = (val: string) => {
    setStep1Value(val);
    saveDraft({ step1: val });
    // Auto-advance to Step 2 smoothly
    setTimeout(() => {
      setCurrentStep(2);
    }, 200);
  };

  const handleStep2Select = (val: string) => {
    setStep2Value(val);
    saveDraft({ step2: val });
    // Auto-advance to Step 3 smoothly
    setTimeout(() => {
      setCurrentStep(3);
    }, 200);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    
    // Auto-detect and strip country code +91 or 91 (common in iOS/Android AutoFill)
    if (digits.length === 12 && digits.startsWith("91")) {
      digits = digits.slice(2);
    } else if (digits.length === 11 && digits.startsWith("0")) {
      // Auto-detect and strip leading trunk 0
      digits = digits.slice(1);
    } else if (digits.length > 10) {
      // If autofilled with international prefix like 0091 or longer, keep last 10 digits
      digits = digits.slice(-10);
    }

    setPhone(digits);
    saveDraft({ phone: digits });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your legal name");
      return;
    }

    if (!phone || phone.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    try {
      const dossierParts: string[] = [
        `[Case Intake Dossier: ${config.title}]`,
        `• ${config.step1Label} -> ${step1Value || "Not specified"}`,
        `• ${config.step2Label} -> ${step2Value || "Not specified"}`
      ];

      if (calculatorData) {
        if (calculatorData.loanAmount) {
          dossierParts.push(`• Total Claimed Liability: ₹${calculatorData.loanAmount.toLocaleString("en-IN")}`);
        }
        if (calculatorData.estimatedMin && calculatorData.estimatedMax) {
          dossierParts.push(`• Estimated Target OTS: ₹${calculatorData.estimatedMin.toLocaleString("en-IN")} – ₹${calculatorData.estimatedMax.toLocaleString("en-IN")}`);
        }
        if (calculatorData.waiverPercent) {
          dossierParts.push(`• Haircut Bracket: ${calculatorData.waiverPercent}`);
        }
        if (calculatorData.lenderType) {
          dossierParts.push(`• Lender Category: ${calculatorData.lenderType}`);
        }
      }

      const submissionUrl = typeof window !== "undefined" ? window.location.href : "";

      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        serviceRequired: config.serviceRequired,
        source: config.source,
        submissionUrl,
        message: dossierParts.join("\n"),
        verified: true
      };

      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit assessment");
      }

      try {
        localStorage.removeItem(storageKey);
      } catch {}

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please connect with our registry directly.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className={`relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] p-4 sm:p-7 md:p-10 transition-all duration-300 ${
        isDark 
          ? "bg-[#231F1B] border border-white/10 text-[#FAF9F5] shadow-2xl" 
          : "bg-[#FAF9F5] border border-[#30261C]/10 text-[#30261C] shadow-sm"
      } ${className}`}
      style={{ fontFamily: "var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif" }}
    >
      {/* Optional Close Button in Modal Mode */}
      {isModal && onClose && (
        <button 
          onClick={onClose}
          className={`absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full transition-colors z-20 ${
            isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-[#30261C]/5 text-[#30261C]"
          }`}
          aria-label="Close Case Intake"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Watermarked Chamber Emblem in Background */}
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none opacity-[0.04] select-none">
        <Image
          src="/newAssets/logo/ama_box.svg"
          alt="AMA Emblem"
          fill
          className="object-contain"
        />
      </div>

      {submitted ? (
        <div className="relative z-10 text-center py-4 sm:py-8 space-y-4 max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D29E0D]/15 border border-[#D29E0D] text-[#D29E0D]">
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="space-y-1.5">
            <span className="text-[#D29E0D] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              Assessment Registered
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-medium sm:font-normal text-current">
              Your Case Has Been Assigned to Counsel
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-[#554E45]"}`}>
              A Senior Advocate at <strong>AMA Legal Solutions</strong> will review your details under statutory attorney-client privilege and reach out to you at <strong>+91 {phone}</strong>.
            </p>
          </div>

          <div className={`p-3 sm:p-4 rounded-[14px] sm:rounded-[16px] text-left text-xs space-y-1 border ${
            isDark 
              ? "bg-white/5 border-white/10 text-gray-300" 
              : "bg-[#F1ECE1] border-[#30261C]/10 text-[#554E45]"
          }`}>
            <div className="flex items-center gap-1.5 font-medium text-[#D29E0D]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Section 126 Evidence Act Confidentiality</span>
            </div>
            <p className="leading-relaxed text-[11px] sm:text-xs">
              All communications are strictly privileged under Indian law. AMA Legal Solutions never shares case information with employers, banks, or third parties.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center">
            <a
              href="tel:+918700343611"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D29E0D] bg-[#30261C] hover:bg-[#231F1B] text-[#EAE6DB] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D29E0D]" />
              Call Registry (+91-8700343611)
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
                setStep1Value("");
                setStep2Value("");
              }}
              className="text-xs text-[#D29E0D] hover:underline"
            >
              Submit an additional inquiry
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="space-y-1 sm:space-y-2 max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D29E0D]/40 bg-[#D29E0D]/10 text-[#D29E0D] text-[9px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase">
              <span>{config.badge}</span>
            </div>
            <h3 className="text-base sm:text-2xl md:text-3xl font-medium sm:font-normal leading-snug sm:leading-[1.2] text-current">
              {config.title}
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed hidden sm:block ${isDark ? "text-gray-300" : "text-[#554E45]"}`}>
              {config.subtitle}
            </p>
          </div>

          {/* Stepper Progress Bar (Ultra Concise on Mobile) */}
          <div className="space-y-1 sm:space-y-2 pt-0.5">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-[#D29E0D] uppercase tracking-wider">
              <span>
                {currentStep === 1 && config.step1Label}
                {currentStep === 2 && config.step2Label}
                {currentStep === 3 && config.step3Label}
              </span>
              <span className="text-[11px] opacity-80">Step {currentStep} of 3</span>
            </div>
            <div className="w-full h-1 sm:h-1.5 bg-[#30261C]/10 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-[#D29E0D] transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          <form id="lead-funnel-form" name="lead-funnel-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Step 1 View */}
            {currentStep === 1 && (
              <div className="space-y-2.5 sm:space-y-3 animate-fadeIn">
                <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-gray-200" : "text-[#30261C]"}`}>
                  {config.step1Title}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {config.step1Options.map((opt) => {
                    const isSelected = step1Value === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleStep1Select(opt)}
                        className={`text-left py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-[12px] sm:rounded-[16px] border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer ${
                          isSelected 
                            ? isDark
                              ? "bg-white/15 border-[#D29E0D] text-white shadow-sm ring-1 ring-[#D29E0D]"
                              : "bg-[#30261C] border-[#30261C] text-[#FAF9F5] shadow-sm ring-1 ring-[#D29E0D]"
                            : isDark
                              ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 active:scale-[0.99]"
                              : "bg-white border-[#30261C]/10 text-[#30261C] hover:border-[#D29E0D]/60 hover:bg-[#F5F2EB] active:scale-[0.99]"
                        }`}
                      >
                        <span className="font-normal leading-snug">{opt}</span>
                        <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected 
                            ? "border-[#D29E0D] bg-[#D29E0D] text-black" 
                            : isDark ? "border-gray-500" : "border-[#30261C]/30"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2 View */}
            {currentStep === 2 && (
              <div className="space-y-2.5 sm:space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-gray-200" : "text-[#30261C]"}`}>
                    {config.step2Title}
                  </p>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#D29E0D] hover:underline"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {config.step2Options.map((opt) => {
                    const isSelected = step2Value === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleStep2Select(opt)}
                        className={`text-left py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-[12px] sm:rounded-[16px] border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer ${
                          isSelected 
                            ? isDark
                              ? "bg-white/15 border-[#D29E0D] text-white shadow-sm ring-1 ring-[#D29E0D]"
                              : "bg-[#30261C] border-[#30261C] text-[#FAF9F5] shadow-sm ring-1 ring-[#D29E0D]"
                            : isDark
                              ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 active:scale-[0.99]"
                              : "bg-white border-[#30261C]/10 text-[#30261C] hover:border-[#D29E0D]/60 hover:bg-[#F5F2EB] active:scale-[0.99]"
                        }`}
                      >
                        <span className="font-normal leading-snug">{opt}</span>
                        <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected 
                            ? "border-[#D29E0D] bg-[#D29E0D] text-black" 
                            : isDark ? "border-gray-500" : "border-[#30261C]/30"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3 View: Direct Contact Inputs */}
            {currentStep === 3 && (
              <div className="space-y-3 sm:space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-gray-200" : "text-[#30261C]"}`}>
                    Where should counsel reach you confidentially?
                  </p>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#D29E0D] hover:underline"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {/* Legal Name */}
                  <div className="relative">
                    <label htmlFor="lead-funnel-name" className="sr-only">Full Legal Name</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D29E0D]" />
                    </div>
                    <input
                      type="text"
                      id="lead-funnel-name"
                      name="name"
                      autoComplete="name"
                      autoCapitalize="words"
                      spellCheck="false"
                      required
                      placeholder="Full Legal Name *"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        saveDraft({ name: e.target.value });
                      }}
                      className={`w-full rounded-[12px] sm:rounded-[14px] py-2.5 sm:py-3.5 pl-9 sm:pl-10 pr-3 text-xs sm:text-sm outline-none transition-colors border ${
                        isDark 
                          ? "bg-[#181512] border-white/15 text-white placeholder-gray-500 focus:border-[#D29E0D]" 
                          : "bg-white border-[#30261C]/15 text-[#30261C] placeholder-[#30261C]/40 focus:border-[#D29E0D]"
                      }`}
                    />
                  </div>

                  {/* Mobile Phone */}
                  <div className="relative">
                    <label htmlFor="lead-funnel-phone" className="sr-only">10-Digit Mobile Number</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex items-center gap-1">
                      <span className="text-xs font-semibold text-[#D29E0D]">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="lead-funnel-phone"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      placeholder="10-Digit Mobile Number *"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={`w-full rounded-[12px] sm:rounded-[14px] py-2.5 sm:py-3.5 pl-11 sm:pl-12 pr-3 text-xs sm:text-sm outline-none transition-colors border ${
                        isDark 
                          ? "bg-[#181512] border-white/15 text-white placeholder-gray-500 focus:border-[#D29E0D]" 
                          : "bg-white border-[#30261C]/15 text-[#30261C] placeholder-[#30261C]/40 focus:border-[#D29E0D]"
                      }`}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <label htmlFor="lead-funnel-email" className="sr-only">Email Address</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D29E0D]" />
                    </div>
                    <input
                      type="email"
                      id="lead-funnel-email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      autoCapitalize="none"
                      spellCheck="false"
                      placeholder="Email Address (Optional)"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        saveDraft({ email: e.target.value });
                      }}
                      className={`w-full rounded-[12px] sm:rounded-[14px] py-2.5 sm:py-3.5 pl-9 sm:pl-10 pr-3 text-xs sm:text-sm outline-none transition-colors border ${
                        isDark 
                          ? "bg-[#181512] border-white/15 text-white placeholder-gray-500 focus:border-[#D29E0D]" 
                          : "bg-white border-[#30261C]/15 text-[#30261C] placeholder-[#30261C]/40 focus:border-[#D29E0D]"
                      }`}
                    />
                  </div>
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 text-rose-600 text-[11px] sm:text-xs bg-rose-50 p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] border border-rose-200">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border-2 border-[#D29E0D] bg-[#30261C] hover:bg-[#231F1B] text-[#EAE6DB] font-medium py-3 sm:py-4 px-5 transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wide cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Case Intake...</span>
                  ) : (
                    <>
                      <span>{config.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D29E0D]" />
                    </>
                  )}
                </button>

                {/* Statutory Privilege Guarantee */}
                <div className={`p-2.5 sm:p-3 rounded-[12px] text-[10px] sm:text-[11px] leading-tight sm:leading-relaxed flex items-start gap-2 border ${
                  isDark 
                    ? "bg-white/5 border-white/10 text-gray-300" 
                    : "bg-[#F1ECE1] border-[#30261C]/10 text-[#554E45]"
                }`}>
                  <Scale className="w-3.5 h-3.5 text-[#D29E0D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Privilege:</strong> Under Sec 126 Evidence Act, communications are strictly confidential. We never disclose cases to employers or banks.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
