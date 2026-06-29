"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import payu from "../../../public/payu.png";
import { 
  Shield, 
  Users, 
  Target, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Send,
  Flame,
  MessageCircle,
  Star
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiTrustpilot } from "react-icons/si";

import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";

const SERVICE_OPTIONS = [
  { label: "Loan Settlement", description: "Negotiating and settling outstanding debts and controlling harassment." },
  { label: "IPR/Trademark/Copyright/Patent", description: "Protecting intellectual property rights." },
  { label: "Arbitration", description: "Private dispute resolution outside court." },
  { label: "Drafting", description: "Creating legal documents and contracts." },
  { label: "Real Estate", description: "Property disputes, buying/selling legalities." },
  { label: "Entertainment Law", description: "Media, film, and artist legal matters." },
  { label: "Corporate Law", description: "Business formation, compliance, and M&A." },
  { label: "Cyber and IT Law", description: "Online crimes, data privacy, and digital rights." },
  { label: "Litigation", description: "Court representation for civil/criminal cases." },
  { label: "Civil/Family/Divorce", description: "Divorce, custody, and family disputes." },
];

const ContactComp = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [pendingId, setPendingId] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) return "Name is required";
    if (!nameRegex.test(name)) return "Name should contain only alphabets and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Phone number must be exactly 10 digits";
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message) return "Message is required";
    return "";
  };

  const validateService = (service: string) => {
    if (!service) return "Please select a service";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, "");
    }

    setFormState({
      ...formState,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const nameError = validateName(formState.name);
    const emailError = validateEmail(formState.email);
    const phoneError = validatePhone(formState.phone);
    const serviceError = validateService(formState.serviceRequired);
    const messageError = validateMessage(formState.message);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      serviceRequired: serviceError,
      message: messageError,
    });

    return !(nameError || emailError || phoneError || serviceError || messageError);
  };

  const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!otpSent) {
      if (!validateForm()) return;
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/otp/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formState,
            source: "Contact Page",
            submissionUrl: window.location.href
          }),
        });

        const data = await response.json();
        if (response.status === 409 && data.error === "DUPLICATE_LEAD") {
          setIsDuplicate(true);
          localStorage.setItem("form_submitted", "true");
          return;
        }
        if (!response.ok) throw new Error(data.error || "Failed to send OTP");

        setOtpSent(true);
        setPendingId(data.pendingId);
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert(error instanceof Error ? error.message : "Failed to send OTP");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (!otp || otp.length !== 6) {
        setErrors({ ...errors, message: "Please enter a 6-digit OTP" });
        return;
      }
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/otp/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pendingId, otp }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Invalid OTP");

        setSubmitted(true);
        localStorage.setItem("form_submitted", "true");
        window.location.href = data.redirectUrl || "https://pmny.in/DIMRKGkGQz6L";
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setErrors({ ...errors, message: error instanceof Error ? error.message : "Invalid OTP" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // The actual Form UI component so we can reuse it between mobile and desktop without duplicating a lot of code
  const renderFormInputs = (isMobile?: boolean) => (
    <>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <User className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onBlur={() => setErrors({ ...errors, name: validateName(formState.name) })}
          className={`w-full bg-[#FCFBF8] border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
          placeholder="Your Name"
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Mail className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          onBlur={() => setErrors({ ...errors, email: validateEmail(formState.email) })}
          className={`w-full bg-[#FCFBF8] border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
          placeholder="Your Email"
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Phone className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          onBlur={() => setErrors({ ...errors, phone: validatePhone(formState.phone) })}
          disabled={otpSent}
          maxLength={10}
          className={`w-full bg-[#FCFBF8] border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-11 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
          placeholder="Your Phone Number"
        />
        <FaWhatsapp className="absolute right-4 top-1/2 -translate-y-1/2 text-[#25D366] text-lg pointer-events-none" />
      </div>

      {otpSent && (
        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={`w-full bg-[#FCFBF8] border ${errors.message && otpSent ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 px-4 text-center tracking-widest font-bold text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
            placeholder="ENTER 6-DIGIT OTP"
          />
        </motion.div>
      )}

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          <Briefcase className="w-4 h-4 text-gray-400" />
        </div>
        <select
          name="serviceRequired"
          value={formState.serviceRequired}
          onChange={handleChange}
          onBlur={() => setErrors({ ...errors, serviceRequired: validateService(formState.serviceRequired) })}
          disabled={otpSent}
          className={`w-full bg-[#FCFBF8] border ${errors.serviceRequired ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-10 text-sm text-black appearance-none focus:outline-none focus:border-[#E19100] transition-colors relative cursor-pointer`}
        >
          <option value="" disabled>Select Service Required</option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service.label} value={service.label}>{service.label}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-4 pointer-events-none">
          <MessageSquare className="w-4 h-4 text-gray-400" />
        </div>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          onBlur={() => setErrors({ ...errors, message: validateMessage(formState.message) })}
          rows={4}
          className={`w-full bg-[#FCFBF8] border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors resize-none`}
          placeholder="Your Message"
        />
      </div>

      {(errors.name || errors.email || errors.phone || errors.serviceRequired || errors.message) && (
        <p className="text-red-500 text-xs text-center">Please fill out all fields correctly.</p>
      )}

      {/* Trust badges below textarea */}
      <div className={`grid grid-cols-3 gap-2 mt-4 text-[#30261C] font-medium ${isMobile ? 'text-[10px]' : 'text-xs border-t border-gray-100 pt-6 mt-6'}`}>
         <div className={`flex items-center justify-center gap-1.5 ${isMobile ? 'bg-white border border-gray-100 py-2 rounded-lg shadow-sm' : ''}`}>
            <ShieldCheck className="w-4 h-4 text-[#D2A02A]" /> 100% Confidential
         </div>
         <div className={`flex items-center justify-center gap-1.5 ${isMobile ? 'bg-white border border-gray-100 py-2 rounded-lg shadow-sm' : ''}`}>
            <Clock className="w-4 h-4 text-[#D2A02A]" /> Quick Response
         </div>
         <div className={`flex items-center justify-center gap-1.5 ${isMobile ? 'bg-white border border-gray-100 py-2 rounded-lg shadow-sm' : 'hidden md:flex'}`}>
            <Users className="w-4 h-4 text-[#D2A02A]" /> Expert Support
         </div>
      </div>

      <button
        onClick={handleSubmitClick}
        disabled={isSubmitting}
        className="w-full bg-[#dda321] hover:bg-[#c9921b] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4 shadow-md"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {otpSent ? "Verifying..." : "Sending..."}
          </span>
        ) : (
          <>
            {otpSent ? "Verify OTP" : "Send Message"} 
            {!otpSent && <Send className="w-4 h-4" />}
          </>
        )}
      </button>

      <div className="flex flex-col items-center gap-2 md:gap-4 pt-4 md:pt-6">
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <Image src={payu} alt="Secured by PayU" className="w-24 md:w-32 h-auto" />
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#FCFBF8] flex flex-col font-[family-name:var(--font-polysans)]">
      <Navbar />
      
      <main className="flex-grow pt-[90px] md:pt-[120px] px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-[80px]">
        
        {/* ===================== MOBILE VIEW ===================== */}
        <div className="flex flex-col lg:hidden w-full max-w-md mx-auto gap-8 pt-6">
          
          {/* Form Card (Moved to top) */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E9C46A]/20 relative pt-10">
             {/* Badge */}
             <div className="absolute top-0 left-6 bg-[#D2A02A] text-white text-[10px] font-bold px-4 py-1.5 rounded-b-lg flex items-center gap-1.5 shadow-sm">
                <Shield className="w-3 h-3" /> WE'RE HERE TO HELP
             </div>

             <div className="mb-5 relative z-10">
                <h2 className="text-2xl font-bold text-[#30261C] mb-1">Send Us a Message</h2>
                <p className="text-[13px] text-[#30261C]">Fill out the form below and our team will get back to you shortly.</p>
             </div>

             {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D2A02A]/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-10 md:w-10 text-[#D2A02A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
      
                  <a
                    href="https://pmny.in/DIMRKGkGQz6L"
                    className="w-full bg-[#E19100] text-[#30261C] text-center font-bold py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#d08600] transition-colors duration-300 text-sm md:text-base"
                  >
                    Proceed to Payment
                  </a>
                </div>
              ) : isDuplicate ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#30261C]">Already Submitted!</h3>
                  <p className="text-[#30261C]">Check your WhatsApp for your assigned executive.</p>
                  <button onClick={() => setIsDuplicate(false)} className="px-6 py-2 bg-gray-100 rounded-lg text-sm font-semibold">Close</button>
                </div>
              ) : (
                <form className="space-y-3 relative z-10">
                  {renderFormInputs(true)}
                </form>
              )}
          </div>

          {/* Alerts (Kept under form) */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl py-3 px-4 flex items-center justify-center gap-3 text-sm text-[#166534]">
             <ShieldCheck className="w-5 h-5 text-[#22C55E] shrink-0" />
             <p className="text-[13px]">We usually respond within <span className="font-bold">30 minutes</span></p>
          </div>
          
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4 flex gap-3 text-sm text-[#991B1B]">
             <Flame className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
             <p className="text-[12px] leading-relaxed"><span className="font-bold text-red-600">Don't wait!</span> Secure the right legal guidance today. Your early action can make all the difference.</p>
          </div>

          {/* Headlines */}
          <div>
             <h1 className="text-4xl font-bold text-[#30261C] leading-[1.15] mb-4 tracking-tight">
                Your Legal Matters,<br/>
                <span className="text-[#E19100]">Our Priority.</span>
             </h1>
             <p className="text-[#30261C] text-sm leading-relaxed font-medium">
                Clear guidance. Strategic solutions.<br/>
                Results that matter.
             </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2">
             <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40 shadow-sm">
                   <Shield className="w-5 h-5 text-[#D2A02A]" />
                </div>
                <h3 className="font-bold text-[#30261C] text-[10px] leading-tight">Confidential<br/>& Secure</h3>
                <p className="text-[9px] text-[#30261C] leading-tight px-1">Your information is always safe with us.</p>
             </div>
             <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40 shadow-sm">
                   <Users className="w-5 h-5 text-[#D2A02A]" />
                </div>
                <h3 className="font-bold text-[#30261C] text-[10px] leading-tight">Expert Legal<br/>Guidance</h3>
                <p className="text-[9px] text-[#30261C] leading-tight px-1">Advice from experienced legal professionals.</p>
             </div>
             <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40 shadow-sm">
                   <Target className="w-5 h-5 text-[#D2A02A]" />
                </div>
                <h3 className="font-bold text-[#30261C] text-[10px] leading-tight">Results<br/>Focused</h3>
                <p className="text-[9px] text-[#30261C] leading-tight px-1">Practical solutions tailored to your needs.</p>
             </div>
          </div>

          {/* Trusted By avatars */}
          <div className="flex items-center gap-3 bg-[#FDF8E7] py-2.5 px-4 rounded-2xl border border-[#E9C46A]/30 shadow-sm">
             <div className="flex -space-x-3 shrink-0">
                <div className="w-8 h-8 rounded-full border-2 border-[#FDF8E7] bg-white flex items-center justify-center relative z-10 shadow-sm">
                   <FcGoogle className="w-5 h-5" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#FDF8E7] bg-gray-300 overflow-hidden relative"><Image src="/testi1.png" fill alt="Client" className="object-cover" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#FDF8E7] bg-gray-400 overflow-hidden relative"><Image src="/testi2.png" fill alt="Client" className="object-cover" /></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#FDF8E7] bg-gray-500 overflow-hidden relative"><Image src="/testi3.png" fill alt="Client" className="object-cover" /></div>
             </div>
             <p className="text-[11px] text-[#30261C] font-medium">Trusted by <span className="text-[#E19100] font-bold">5,000+</span> Clients Across India</p>
          </div>

          {/* Ratings Mobile */}
          <div className="flex items-center justify-between gap-2 bg-white py-3 px-4 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mt-2">
            <div className="flex items-center gap-1.5">
               <FcGoogle className="w-5 h-5" />
               <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-bold text-[#30261C]">4.9</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-[#E19100] fill-[#E19100]" />)}
                    </div>
                  </div>
                  <span className="text-[9px] text-[#30261C] font-medium">Google Reviews</span>
               </div>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex items-center gap-1.5">
               <SiTrustpilot className="w-5 h-5 text-[#00B67A]" />
               <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-bold text-[#30261C]">4.8</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-[14px] h-[14px] bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                          <Star className="w-2.5 h-2.5 text-white fill-white" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-[9px] text-[#30261C] font-medium">Trustpilot</span>
               </div>
            </div>
          </div>

          {/* App Card Mobile */}
          <div className="bg-[#FDF8E7] rounded-[24px] p-5 border border-[#E9C46A]/30 flex flex-row items-center gap-4 relative overflow-hidden mt-2">
            <div className="w-[45%] flex justify-center items-center shrink-0">
               <Image src="/app_creative.png" alt="AMA Legal App" width={160} height={320} className="w-full max-w-[130px] h-auto object-contain" />
            </div>
            <div className="w-[55%] flex flex-col justify-center">
              <h3 className="text-[15px] font-bold text-[#30261C] leading-tight mb-1">Legal Support Now in Your Pocket</h3>
              <p className="text-[10px] text-[#E19100] font-semibold mb-3">Download the AMA Legal Solutions App</p>
              
              <div className="flex flex-col gap-1.5 mb-4">
                 <div className="flex items-center gap-1.5 text-[9px] text-[#30261C] font-semibold">
                    <Target className="w-3.5 h-3.5 text-[#D2A02A]"/> Track Your Case
                 </div>
                 <div className="flex items-center gap-1.5 text-[9px] text-[#30261C] font-semibold">
                    <MessageSquare className="w-3.5 h-3.5 text-[#D2A02A]"/> Chat with Experts
                 </div>
                 <div className="flex items-center gap-1.5 text-[9px] text-[#30261C] font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#D2A02A]"/> Get Legal Updates
                 </div>
                 <div className="flex items-center gap-1.5 text-[9px] text-[#30261C] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D2A02A]"/> Secure & Easy to Use
                 </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image src="/newAssets/playstore.svg" alt="Google Play" width={100} height={30} className="h-7 w-auto" />
                </Link>
                <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image src="/newAssets/appstore.svg" alt="App Store" width={100} height={30} className="h-7 w-auto" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Contact Info Mobile */}
          <div className="w-full bg-[#FDF8E7] rounded-[24px] py-4 px-3 mt-4 border border-[#E9C46A]/20 grid grid-cols-3 gap-2 divide-x divide-[#E9C46A]/30">
             <div className="flex flex-col items-center justify-center text-center px-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mb-1.5">
                   <Phone className="w-4 h-4 text-[#E19100]" />
                </div>
                <p className="text-[9px] text-[#30261C] mb-0.5">Call Us</p>
                <p className="text-[9px] font-bold text-[#30261C]">+91 87003 43611</p>
             </div>
             
             <div className="flex flex-col items-center justify-center text-center px-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mb-1.5">
                   <MessageCircle className="w-4 h-4 text-[#E19100]" />
                </div>
                <p className="text-[9px] text-[#30261C] mb-0.5">Chat on</p>
                <p className="text-[9px] font-bold text-[#30261C]">WhatsApp</p>
             </div>

             <div className="flex flex-col items-center justify-center text-center px-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mb-1.5">
                   <Clock className="w-4 h-4 text-[#E19100]" />
                </div>
                <p className="text-[9px] text-[#30261C] mb-0.5">Mon - Sat</p>
                <p className="text-[9px] font-bold text-[#30261C]">10AM - 7PM</p>
             </div>
          </div>

        </div>

        {/* ===================== DESKTOP VIEW ===================== */}
        <div className="hidden lg:flex lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Section */}
          <div className="flex-1 max-w-3xl pt-4">
            
            <div className="inline-flex items-center gap-2 border border-[#E19100]/30 bg-[#E19100]/5 rounded-full px-4 py-1.5 mb-6 text-[#E19100] text-sm font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4" /> WE'RE HERE TO HELP
            </div>

            <h1 className="text-[40px] md:text-[56px] font-bold text-[#30261C] leading-[1.1] mb-4">
              Your Legal Matters,<br/>
              <span className="text-[#E19100]">Our Priority.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#30261C] mb-12 max-w-2xl leading-relaxed">
              Connect with our legal experts to receive clear, strategic, and results-driven legal guidance tailored to your needs.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <Shield className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Confidential<br/>& Secure</h3>
                  <p className="text-sm text-[#30261C]">Your information is always safe with us.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <Users className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Expert Legal<br/>Guidance</h3>
                  <p className="text-sm text-[#30261C]">Get advice from experienced legal professionals.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <Target className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Results<br/>Focused</h3>
                  <p className="text-sm text-[#30261C]">Practical solutions tailored to your unique needs.</p>
                </div>
              </div>
            </div>

            {/* Trusted Clients */}
            <div className="mb-12">
              <h3 className="text-lg text-[#30261C] mb-6 font-medium">Trusted by Clients Across India</h3>
              <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80 mb-8">
                <Image src="/newAssets/clientLogos/1.png" width={80} height={40} alt="BCB" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/3.png" width={80} height={40} alt="HDFC Bank" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/4.png" width={80} height={40} alt="IPR Karo" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/6.png" width={100} height={40} alt="CredSettle" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/7.png" width={100} height={40} alt="Hero Fincorp" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/8.png" width={80} height={40} alt="Jivo Energy" className="h-8 w-auto object-contain" />
                <Image src="/newAssets/clientLogos/11.png" width={80} height={40} alt="Billcut" className="h-8 w-auto object-contain" />
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <FcGoogle className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#30261C] text-lg leading-none">4.9</span>
                      <div className="flex gap-0.5">
                         {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#E19100] fill-[#E19100]" />)}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#30261C] font-medium mt-0.5">Google Reviews</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <SiTrustpilot className="w-8 h-8 text-[#00B67A]" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#30261C] text-lg leading-none">4.8</span>
                      <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => (
                           <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-[3px]">
                             <Star className="w-3.5 h-3.5 text-white fill-white" />
                           </div>
                         ))}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#30261C] font-medium mt-0.5">Trustpilot</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App Card */}
            <div className="bg-[#FDF8E7] rounded-3xl p-6 md:p-8 border border-[#E9C46A]/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="md:w-1/3 flex justify-center">
                 <Image src="/app_creative.png" alt="AMA Legal Solutions App" width={200} height={400} className="w-full max-w-[160px] h-auto object-contain" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-bold text-[#30261C] mb-1">Legal Support Now in Your Pocket</h3>
                <p className="text-sm text-[#E19100] font-semibold mb-6">Download the AMA Legal Solutions App</p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                   <div className="flex items-center gap-2 text-sm text-[#30261C] font-medium">
                      <div className="w-5 h-5 flex items-center justify-center text-[#D2A02A]"><Target className="w-4 h-4"/></div> Track Your Case
                   </div>
                   <div className="flex items-center gap-2 text-sm text-[#30261C] font-medium">
                      <div className="w-5 h-5 flex items-center justify-center text-[#D2A02A]"><MessageSquare className="w-4 h-4"/></div> Chat with Experts
                   </div>
                   <div className="flex items-center gap-2 text-sm text-[#30261C] font-medium">
                      <div className="w-5 h-5 flex items-center justify-center text-[#D2A02A]"><Clock className="w-4 h-4"/></div> Get Legal Updates
                   </div>
                   <div className="flex items-center gap-2 text-sm text-[#30261C] font-medium">
                      <div className="w-5 h-5 flex items-center justify-center text-[#D2A02A]"><ShieldCheck className="w-4 h-4"/></div> Secure & Easy to Use
                   </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                    <Image src="/newAssets/playstore.svg" alt="Get it on Google Play" width={120} height={35} className="h-9 w-auto" />
                  </Link>
                  <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                    <Image src="/newAssets/appstore.svg" alt="Download on App Store" width={120} height={35} className="h-9 w-auto" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section - Form Card */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative h-fit">
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-[1px] bg-[#E19100]/30 -left-16"></div>
                  <div className="w-12 h-12 bg-[#FDF8E7] rounded-xl flex items-center justify-center text-[#E19100]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="absolute w-12 h-[1px] bg-[#E19100]/30 -right-16"></div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-[#30261C] mb-2">Send Us a Message</h2>
              <p className="text-center text-sm text-[#30261C] mb-8 max-w-[280px] mx-auto">
                Fill out the form below and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D2A02A]/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-10 md:w-10 text-[#D2A02A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
      
                  <a
                    href="https://pmny.in/DIMRKGkGQz6L"
                    className="w-full bg-[#E19100] text-[#30261C] text-center font-bold py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#d08600] transition-colors duration-300 text-sm md:text-base"
                  >
                    Proceed to Payment
                  </a>
                </div>
              ) : isDuplicate ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#30261C]">Already Submitted!</h3>
                  <p className="text-[#30261C]">Check your WhatsApp for your assigned executive.</p>
                  <button onClick={() => setIsDuplicate(false)} className="px-6 py-2 bg-gray-100 rounded-lg text-sm font-semibold">Close</button>
                </div>
              ) : (
                <form className="space-y-4">
                  {renderFormInputs(false)}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner Section Desktop */}
        <div className="hidden lg:flex w-full bg-[#FDF8E7] rounded-3xl py-6 px-6 md:px-12 mt-16 flex-col md:flex-row items-center justify-between gap-6 border border-[#E9C46A]/20">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
               <Phone className="w-5 h-5 text-[#E19100]" />
            </div>
            <div>
              <p className="text-sm text-[#30261C]">Prefer to talk?</p>
              <p className="font-bold text-[#30261C]">Call us at +91 87003 43611</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-[#30261C]/10 hidden md:block"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
               <Mail className="w-5 h-5 text-[#E19100]" />
            </div>
            <div>
              <p className="text-sm text-[#30261C]">Email us</p>
              <p className="font-bold text-[#30261C]">notify@amalegalsolutions.com</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-[#30261C]/10 hidden md:block"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
               <Clock className="w-5 h-5 text-[#E19100]" />
            </div>
            <div>
              <p className="text-sm text-[#30261C]">Our Office Hours</p>
              <p className="font-bold text-[#30261C]">Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

      </main>

      <Footer/> 
    </div>
  );
};

export default ContactComp;
