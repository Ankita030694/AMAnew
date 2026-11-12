"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { CheckCircle2, Clock, ShieldCheck, Lock, Check } from "lucide-react";
import payu from "../../public/payu.png";

export const PRIORITY_CALLBACK_PAYMENT_URL = "https://pmny.in/DIMRKGkGQz6L";
const PRIORITY_FEE = 99;

// Callback desk hours in IST (Mon–Sat). Edit here if the team's hours change.
const DESK_DAYS = [1, 2, 3, 4, 5, 6];
const DESK_OPEN_HOUR = 10;
const DESK_CLOSE_HOUR = 19;

function getCallbackPromise(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value || "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);

  if (DESK_DAYS.includes(day) && hour >= DESK_OPEN_HOUR && hour < DESK_CLOSE_HOUR) {
    return "within 1 hour";
  }
  // Saturday after hours and all of Sunday roll over to Monday
  const nextIsMonday = day === 0 || (day === 6 && hour >= DESK_CLOSE_HOUR);
  const sameMorning = hour < DESK_OPEN_HOUR && DESK_DAYS.includes(day);
  if (nextIsMonday) return "first thing Monday morning";
  return sameMorning ? "first thing this morning" : "first thing tomorrow morning";
}

interface PriorityCallbackOfferProps {
  phone?: string;
  source: string;
  theme?: "light" | "dark";
}

export default function PriorityCallbackOffer({ phone, source, theme = "light" }: PriorityCallbackOfferProps) {
  const [skipped, setSkipped] = useState(false);
  const [callbackPromise, setCallbackPromise] = useState("within 1 hour");
  const isDark = theme === "dark";
  const muted = isDark ? "text-gray-300" : "text-[#554E45]";
  const cleanPhone = phone ? phone.replace(/\D/g, "").slice(-10) : "";

  useEffect(() => {
    setCallbackPromise(getCallbackPromise());
    track("priority_callback_shown", { source });
  }, [source]);

  if (skipped) {
    return (
      <div className="text-center py-4 sm:py-6 space-y-3 max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D29E0D]/15 border border-[#D29E0D] text-[#D29E0D]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg sm:text-2xl font-medium text-current">You&apos;re in the callback queue</h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${muted}`}>
          Our team will call you{cleanPhone ? <> at <strong>+91 {cleanPhone}</strong></> : null} in the order your request was received.
        </p>
        <button
          onClick={() => setSkipped(false)}
          className="text-xs text-[#D29E0D] hover:underline"
        >
          Changed your mind? Book a priority callback
        </button>
      </div>
    );
  }

  return (
    <div className="text-center py-2 sm:py-4 space-y-4 sm:space-y-5 max-w-md mx-auto">
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D29E0D]/15 border border-[#D29E0D] text-[#D29E0D]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <span className="block text-[#D29E0D] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
          Request received
        </span>
        <h3 className="text-lg sm:text-2xl font-medium text-current">Your details are with our legal team</h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${muted}`}>
          We handle a high number of settlement enquiries every day, and every request gets a call back. Clients who book a
          one-time <strong>₹{PRIORITY_FEE} consultation</strong> are called first.
        </p>
      </div>

      <ul
        className={`text-left text-xs sm:text-sm space-y-2 rounded-[14px] sm:rounded-[16px] p-3 sm:p-4 border ${
          isDark ? "bg-white/5 border-white/10 text-gray-200" : "bg-[#F1ECE1] border-[#30261C]/10 text-[#30261C]"
        }`}
      >
        <li className="flex items-start gap-2">
          <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#D29E0D]" />
          <span>
            Advocate callback <strong>{callbackPromise}</strong>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#D29E0D]" />
          <span>One-to-one review of your loan or card dues, in confidence</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#D29E0D]" />
          <span>₹{PRIORITY_FEE} is adjusted against your fees if you engage us</span>
        </li>
      </ul>

      <div className="space-y-2.5">
        <a
          href={PRIORITY_CALLBACK_PAYMENT_URL}
          onClick={() => track("priority_callback_pay_click", { source })}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E19100] hover:bg-[#d08600] text-[#30261C] font-semibold px-6 py-3 text-sm sm:text-base transition-colors shadow-md"
        >
          <Lock className="w-4 h-4" />
          Book priority callback · ₹{PRIORITY_FEE}
        </a>
        {cleanPhone && (
          <p className={`text-[11px] ${muted}`}>
            Please use <strong>+91 {cleanPhone}</strong> at checkout so we can match your booking.
          </p>
        )}
        <button
          onClick={() => {
            track("priority_callback_skip", { source });
            setSkipped(true);
          }}
          className={`text-xs underline-offset-2 hover:underline ${muted}`}
        >
          No thanks, I&apos;ll wait for the regular callback
        </button>
      </div>

      <div className={`flex items-center justify-center gap-2 text-[11px] ${muted}`}>
        <span>Secure payment via</span>
        <Image src={payu} alt="PayU" className="w-14 h-auto" />
        <span>· UPI, cards, net banking</span>
      </div>
    </div>
  );
}
