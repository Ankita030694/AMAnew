"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";

import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// Firebase imports are lazy loaded
import payu from "../../../public/payu.png";
import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";

// Generate array of logo paths: 1.png to 17.png
const clientLogos = Array.from({ length: 17 }, (_, i) => `/newAssets/clientLogos/${i + 1}.png`);

const LOGO_NAMES: Record<string, string> = {
  "/newAssets/clientLogos/1.png": "BCB",
  "/newAssets/clientLogos/2.png": "Designncode",
  "/newAssets/clientLogos/3.png": "HDFC Bank",
  "/newAssets/clientLogos/4.png": "IPR Karo",
  "/newAssets/clientLogos/5.png": "DNM",
  "/newAssets/clientLogos/6.png": "CredSettle",
  "/newAssets/clientLogos/7.png": "Hero Fincorp",
  "/newAssets/clientLogos/8.png": "Jivo Energy",
  "/newAssets/clientLogos/9.png": "Born Hi",
  "/newAssets/clientLogos/10.png": "9Consultants",
  "/newAssets/clientLogos/11.png": "Billcut",
  "/newAssets/clientLogos/12.png": "Pinecone",
  "/newAssets/clientLogos/13.png": "Milsipp",
  "/newAssets/clientLogos/14.png": "SettleLoans",
  "/newAssets/clientLogos/15.png": "Globaton",
  "/newAssets/clientLogos/16.png": "Globaton",
  "/newAssets/clientLogos/17.png": "Jivo Solutions",
};

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) return "Name is required";
    if (!nameRegex.test(name))
      return "Name should contain only alphabets and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    if (!email.includes(".com")) return "Email must include .com";
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone))
      return "Phone number must be exactly 10 digits";
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

  const validateAndSaveForm = async () => {
    if (!otpSent) {
      if (!validateForm()) return false;
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
          return false;
        }
        if (!response.ok) throw new Error(data.error || "Failed to send OTP");

        setOtpSent(true);
        setPendingId(data.pendingId);
        return false; // Don't redirect yet
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert(error instanceof Error ? error.message : "Failed to send OTP");
        return false;
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (!otp || otp.length !== 6) {
        setErrors({ ...errors, message: "Please enter a 6-digit OTP" });
        return false;
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
        return true;
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setErrors({ ...errors, message: error instanceof Error ? error.message : "Invalid OTP" });
        return false;
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePayUClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isValid = await validateAndSaveForm();
    if (isValid) {
      window.location.href = "https://pmny.in/DIMRKGkGQz6L";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] flex flex-col font-[family-name:var(--font-polysans)]">
      <Navbar />
      
      <main className="flex-grow pt-[100px] md:pt-[120px] px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-[120px]">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Section - Content */}
          <div className="flex-1 flex flex-col justify-between min-h-[600px] max-w-3xl">
            <div>
              <h1 className="text-[32px] md:text-[45px] font-semibold text-[#30261C] leading-[40px] md:leading-[65px] mb-[30px] opacity-100">
                Resolve Your Legal Matters with Confidence
              </h1>
              <p className="text-[16px] md:text-[25px] text-[#30261C] leading-[24px] md:leading-[29px] font-normal max-w-2xl opacity-85 mb-[50px]">
                Connect with our legal team to receive clear, strategic, and results-driven legal guidance tailored to your needs.
              </p>
            </div>

            {/* Client Logos Slider */}
            <div className="py-8">
              <h2 className="text-[24px] md:text-[27px] leading-[31px] font-normal text-[#30261C] opacity-85 mb-[35px]">
                Trusted by Clients Across India
              </h2>
              
              <div className="relative w-full max-w-3xl overflow-hidden h-[100px] flex items-center">
                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F5EC] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F5EC] to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30, // Adjust speed
                      ease: "linear",
                    },
                  }}
                  style={{ width: "fit-content" }}
                >
                   {/* Double the logos for seamless loop */}
                  {[...clientLogos, ...clientLogos].map((src, index) => (
                    <div key={index} className="relative w-32 h-20 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={src}
                        alt={`${LOGO_NAMES[src] || 'Client'} Logo`}
                        fill
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Connect With Us - Bento Grid */}
            <div className="mt-auto">
              <h2 className="text-[24px] md:text-[27px] leading-[31px] font-normal text-[#30261C] opacity-85 mb-[35px]">
                Connect With us
              </h2>
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl h-full">
                  
                  {/* Left Column: Email & Call */}
                  <div className="flex flex-col gap-2">
                    {/* Email Box */}
                    <Link 
                      href="mailto:notify@amalegalsolutions.com"
                      className="flex-1 p-2 rounded-[25px] border border-white/20 transition-transform hover:-translate-y-1"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <h3 className="text-base font-semibold text-[#30261C] mb-0.5 pl-3">Email Us</h3>
                        <p className="text-[#30261C]/80 text-sm break-all pl-3">notify@amalegalsolutions.com</p>
                      </div>
                    </Link>

                    {/* Pay Now Box */}
                    <Link
                      href="https://pmny.in/DIMRKGkGQz6L"
                      className="flex-1 p-2 rounded-[25px] border border-white/20 transition-transform hover:-translate-y-1"
                      style={{
                        background: "rgba(225, 145, 0, 0.15)",
                        boxShadow: "3px 4px 30.5px 0 rgba(225, 145, 0, 0.05)",
                        backdropFilter: "blur(2px)",
                        border: "1px solid rgba(225, 145, 0, 0.3)"
                      }}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <h3 className="text-base font-bold text-[#E19100] mb-0.5 pl-3">Pay Now</h3>
                        <p className="text-[#E19100]/80 text-sm pl-3">Swift & Secure Payments</p>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column: Address Box - Spans full height */}
                  <Link
                    href="https://maps.app.goo.gl/C11eKgqm46oUwdio9"
                    target="_blank"
                    className="p-2 rounded-[25px] border border-white/20 transition-transform hover:-translate-y-1 h-full"
                    style={{
                      borderRadius: "25px",
                      background: "linear-gradient(180deg, #FFF -47.71%, #D29E0D 199.6%), rgba(255, 255, 255, 0.15)",
                      boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                     <div className="flex flex-col justify-between h-full">
                        <h3 className="text-base font-semibold text-[#30261C] mb-0.5 pl-3">Our Address</h3>
                        <p className="text-[#30261C]/80 text-base leading-relaxed pl-3">
                          2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                        </p>
                    </div>
                  </Link>
                </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[480px] flex-shrink-0 relative flex flex-col">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D2A02A]/10 h-auto flex-1">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-[#D2A02A]/20 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#D2A02A]"
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
                  <h3 className="text-2xl font-bold text-[#30261C] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#30261C]/80 mb-8">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <a
                    href="https://pmny.in/DIMRKGkGQz6L"
                    className="w-full bg-[#E19100] text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#d08600] transition-colors duration-300"
                  >
                    Proceed to Payment
                  </a>
                </div>
              ) : isDuplicate ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#30261C] mb-4">
                    Already Submitted!
                  </h3>
                  <p className="text-[#30261C]/80 mb-8 leading-relaxed">
                    You have already submitted your info with us. To connect again, check your whatsapp for your assigned executive to contact them again.
                  </p>
                  <button
                    onClick={() => setIsDuplicate(false)}
                    className="w-full bg-[#30261C] text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#4a3b2b] transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#30261C] mb-6">
                    Send Us a Message
                  </h2>

                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => {
                        setFocusedField(null);
                        setErrors({
                          ...errors,
                          name: validateName(formState.name),
                        });
                      }}
                       className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => {
                        setFocusedField(null);
                         setErrors({
                          ...errors,
                          email: validateEmail(formState.email),
                        });
                      }}
                       className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="relative flex items-center">
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => {
                        setFocusedField(null);
                         setErrors({
                          ...errors,
                          phone: validatePhone(formState.phone),
                        });
                      }}
                      className={`w-full bg-[#F8F5EC] text-[#30261C] pl-4 pr-12 py-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      placeholder="Your Phone Number"
                      maxLength={10}
                      disabled={otpSent}
                    />
                    <FaWhatsapp 
                      className="absolute right-4 text-[#25D366] text-xl pointer-events-none" 
                      title="OTP will be sent on WhatsApp"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}

                  {otpSent && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border ${
                          errors.message && otpSent ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors font-bold tracking-[0.5em] text-center`}
                        placeholder="ENTER OTP"
                        maxLength={6}
                      />
                      {errors.message && otpSent && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </motion.div>
                  )}

                  <div className="relative">
                    <div className="relative">
                      <select
                        name="serviceRequired"
                        value={formState.serviceRequired}
                        onChange={handleChange}
                        required
                        disabled={otpSent}
                        onFocus={() => setFocusedField("serviceRequired")}
                        onBlur={() => {
                          setFocusedField(null);
                          setErrors({
                            ...errors,
                            serviceRequired: validateService(formState.serviceRequired),
                          });
                        }}
                        className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border appearance-none ${
                          errors.serviceRequired ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      >
                        <option value="" disabled>Select Service Required</option>
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service.label} value={service.label}>
                            {service.label} — {service.description}
                          </option>
                        ))}
                      </select>
                       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#30261C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.serviceRequired && (
                      <p className="text-red-500 text-sm mt-1">{errors.serviceRequired}</p>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      onFocus={() => setFocusedField("message")}
                       onBlur={() => {
                        setFocusedField(null);
                         setErrors({
                          ...errors,
                          message: validateMessage(formState.message),
                        });
                      }}
                       className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      placeholder="Your Message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://pmny.in/DIMRKGkGQz6L"
                      onClick={handlePayUClick}
                      className="block w-full bg-[#E19100] text-white text-center font-bold py-3.5 rounded-lg hover:bg-[#d08600] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {otpSent ? "Verifying..." : "Sending OTP..."}
                        </span>
                      ) : (
                        otpSent ? "Verify OTP" : "Register"
                      )}
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-4 pt-2">
                    <div className="opacity-80 hover:opacity-100 transition-opacity">
                      <Image src={payu} alt="Secured by PayU" className="w-32 h-auto" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-xl font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                      <div className="flex items-center gap-3">
                        <Link 
                          href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                          target="_blank"
                          className="hover:opacity-80 transition-opacity"
                        >
                          <Image 
                            src="/newAssets/appstore.svg" 
                            alt="Get it on Google Play" 
                            width={130} 
                            height={36}
                            className="w-[130px] h-[36px]"
                          />
                        </Link>
                        <Link 
                          href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                          target="_blank"
                          className="hover:opacity-80 transition-opacity"
                        >
                          <Image 
                            src="/newAssets/playstore.svg" 
                            alt="Download on App Store" 
                            width={130} 
                            height={36}
                            className="w-[130px] h-[36px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="mt-24 border-t border-[#30261C]/5 pt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#30261C] mb-8 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
              Expert Legal Consultation at AMA Legal Solutions
            </h2>
            
            <div className="space-y-8 text-[#30261C]/80 leading-relaxed text-lg">
              <div>
                <h3 className="text-xl font-bold text-[#30261C] mb-3">Why Reach Out to Our Legal Team?</h3>
                <p>
                  When you face complex legal challenges, having a trusted partner can make all the difference. <strong>AMA Legal Solutions</strong> is more than just a law firm; we are your strategic advocates in navigating the intricacies of the Indian legal system. Whether you are dealing with a debt-related crisis, seeking to protect your intellectual property, or requiring corporate legal guidance, our team is equipped with the knowledge and experience to provide clarity and results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#30261C] mb-3">Our Comprehensive Legal Consultation Process</h3>
                <p>
                  We believe that every legal matter deserves a personalized approach. When you contact us, our process begins with a thorough understanding of your specific situation.
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4">
                  <li><strong>Discovery:</strong> We listen to your concerns and gather all necessary details to understand the scope of the legal challenge.</li>
                  <li><strong>Analysis:</strong> Our experts analyze the relevant laws, precedents, and regulations to determine the strongest possible legal position.</li>
                  <li><strong>Strategy:</strong> We develop a tailored action plan designed to achieve the best possible outcome, whether through negotiation, litigation, or alternative dispute resolution.</li>
                  <li><strong>Execution:</strong> Our team works tirelessly to implement the strategy, keeping you informed at every stage of the process.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#30261C] mb-3">Dedicated Support Across India</h3>
                <p>
                  Headquartered in Gurugram, <strong>AMA Legal Solutions</strong> serves clients across the entire country. Our network of empanelled advocates ensures that you receive local expertise combined with national standards of excellence. From the initial consultation to the final resolution, our commitment to professional integrity and client satisfaction remains unwavering.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Full Width Map Section */}
      <div className="w-full h-[450px] relative mt-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.786864055198!2d77.0878512!3d28.425687399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b74fa3c4bce8f29%3A0x9c0cf35a3104b12e!2sAMA%20LEGAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1746705994547!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    <Footer/> 

    </div>
  );
};

export default ContactComp;
