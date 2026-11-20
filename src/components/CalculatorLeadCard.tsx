"use client";

import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight, AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import PriorityCallbackOffer from "./PriorityCallbackOffer";
import { getRecentLead, markLeadFormEngaged, markLeadSubmitted } from "@/lib/leadCapturePolicy";
import { WHATSAPP_NUMBER, pageTag } from "@/lib/whatsapp";

const SOURCE = "Calculator Result";

// Lenders shown in the dropdown. Big banks first: they are the priority segment.
const LENDERS = [
  "HDFC Bank",
  "SBI",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IDFC FIRST Bank",
  "IndusInd Bank",
  "RBL Bank",
  "Yes Bank",
  "Bajaj Finance",
  "Other bank",
  "Loan app / NBFC",
];

export interface CalculatorLeadCardProps {
  totalDues: number;
  estimatedMin: number;
  estimatedMax: number;
  waiverPercent: string;
  loanTypeLabel: string;
  defaultStageLabel: string;
  lenderTypeLabel: string;
}

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

/**
 * Short lead step shown right under the calculator's estimate: lender, name and mobile,
 * or the same details on WhatsApp. Saves straight to the `form` collection (no OTP).
 */
export default function CalculatorLeadCard({
  totalDues,
  estimatedMin,
  estimatedMax,
  waiverPercent,
  loanTypeLabel,
  defaultStageLabel,
  lenderTypeLabel,
}: CalculatorLeadCardProps) {
  const [lender, setLender] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [recentLead, setRecentLead] = useState<{ phoneLast4: string | null } | null>(null);

  useEffect(() => {
    setRecentLead(getRecentLead());
  }, []);

  const summaryLines = [
    `• Lender -> ${lender || "Not specified"}`,
    `• Loan type -> ${loanTypeLabel}`,
    `• Account status -> ${defaultStageLabel}`,
    `• Lender category -> ${lenderTypeLabel}`,
    `• Total dues: ${inr(totalDues)}`,
    `• Calculator estimate: ${inr(estimatedMin)} – ${inr(estimatedMax)} (waiver ${waiverPercent})`,
  ];

  const whatsappText = [
    "Hi AMA Legal Solutions, I used the loan settlement calculator.",
    `Lender: ${lender || "not selected"}`,
    `Loan type: ${loanTypeLabel}`,
    `Total dues: ${inr(totalDues)}`,
    `Estimate shown: ${inr(estimatedMin)} – ${inr(estimatedMax)}`,
    "Please tell me the exact settlement figure for my case.",
    pageTag("/loan-settlement-amount-calculator"),
  ].join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  const handlePhoneChange = (value: string) => {
    let digits = value.replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
    else if (digits.length > 10) digits = digits.slice(-10);
    setPhone(digits);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim()) return setErrorMsg("Please enter your name");
    if (phone.length !== 10) return setErrorMsg("Please enter a valid 10-digit mobile number");

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          email: "",
          serviceRequired: "Loan Settlement",
          source: SOURCE,
          submissionUrl: typeof window !== "undefined" ? window.location.href : "",
          message: ["[Calculator result: exact settlement figure requested]", ...summaryLines].join("\n"),
          verified: true,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not send your request");
      }
      markLeadSubmitted(phone);
      track("calculator_lead_submit", { lender: lender || "none" });
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <PriorityCallbackOffer phone={phone} source={SOURCE} theme="dark" />;
  }

  if (recentLead) {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center space-y-2">
        <CheckCircle2 className="w-6 h-6 text-[#D2A02A] mx-auto" />
        <p className="text-sm text-white font-semibold">We already have your request</p>
        <p className="text-xs text-gray-300">
          Our team will call you{recentLead.phoneLast4 ? <> on the number ending <strong>{recentLead.phoneLast4}</strong></> : null}.
        </p>
        <button type="button" onClick={() => setRecentLead(null)} className="text-xs text-[#D2A02A] hover:underline">
          Send this estimate as a new request
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl bg-[#181512] border border-white/15 text-white placeholder-gray-500 px-4 py-3 text-sm outline-none focus:border-[#D2A02A]";

  return (
    <div className="rounded-2xl border-2 border-[#D2A02A]/60 bg-[#231F1B] p-3.5 md:p-6 text-left">
      <p className="text-[#D2A02A] text-[11px] font-bold uppercase tracking-widest mb-1">Next step</p>
      <h4 className="text-lg md:text-xl font-bold text-white mb-1">Get the exact settlement figure for your lender</h4>
      <p className="text-xs md:text-sm text-gray-300 mb-4">
        This range is a general estimate. An advocate will check your lender&apos;s current settlement practice and call you back.
      </p>

      <form onSubmit={handleSubmit} onFocusCapture={markLeadFormEngaged} className="space-y-3" data-lead-funnel="inline">
        <label htmlFor="calc-lead-lender" className="sr-only">Your lender</label>
        <select
          id="calc-lead-lender"
          value={lender}
          onChange={(e) => setLender(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select your lender</option>
          {LENDERS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="calc-lead-name" className="sr-only">Your name</label>
            <input
              id="calc-lead-name"
              type="text"
              autoComplete="name"
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="relative">
            <label htmlFor="calc-lead-phone" className="sr-only">10-digit mobile number</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#D2A02A] pointer-events-none">+91</span>
            <input
              id="calc-lead-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Mobile number *"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`${inputClass} pl-12`}
            />
          </div>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 text-rose-300 text-xs bg-rose-500/10 p-2.5 rounded-xl border border-rose-400/30">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-5 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : <>Request a call back <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>

      <div className="flex items-center gap-3 my-3 text-[11px] text-gray-400 uppercase tracking-wider">
        <span className="flex-1 h-px bg-white/10" /> or <span className="flex-1 h-px bg-white/10" />
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("calculator_whatsapp_click", { lender: lender || "none" })}
        className="w-full rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold py-3 px-5 flex items-center justify-center gap-2 text-sm"
      >
        <MessageCircle className="w-4 h-4" /> Send this estimate on WhatsApp
      </a>
    </div>
  );
}
