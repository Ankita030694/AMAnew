"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import payu from "../../public/payu.png";
import Image from "next/image";

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

const GlobalPopupForm = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  useEffect(() => {
    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener("openGlobalPopup", handleOpenPopup);

    // Only trigger once per session automatically
    const hasBeenShown = sessionStorage.getItem("global_popup_shown");
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        const currentPath = window.location.pathname;
        const isExcludedPage = currentPath.includes("/login") || currentPath.includes("/admin") || currentPath.includes("/thank-you");
        
        if (!isExcludedPage) {
          setIsOpen(true);
          sessionStorage.setItem("global_popup_shown", "true");
        }
      }, 5000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("openGlobalPopup", handleOpenPopup);
      };
    }

    return () => window.removeEventListener("openGlobalPopup", handleOpenPopup);
  }, []); // Empty dependency array means it only runs once when the app mounts

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
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const newErrors = {
      name: !formState.name ? "Name is required" : !nameRegex.test(formState.name) ? "Name should contain only alphabets and spaces" : "",
      email: !formState.email ? "Email is required" : !emailRegex.test(formState.email) || !formState.email.includes(".com") ? "Please enter a valid email address with .com" : "",
      phone: !formState.phone ? "Phone number is required" : !phoneRegex.test(formState.phone) ? "Phone number must be exactly 10 digits" : "",
      serviceRequired: !formState.serviceRequired ? "Please select a service" : "",
      message: !formState.message ? "Message is required" : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
            source: "Global Popup",
            submissionUrl: window.location.href
          }),
        });

        const data = await response.json();
        if (response.status === 409 && data.error === "DUPLICATE_LEAD") {
          setIsDuplicate(true);
          return;
        }
        if (!response.ok) throw new Error(data.error || "Failed to send OTP");

        setOtpSent(true);
        setPendingId(data.pendingId);
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert(error instanceof Error ? error.message : "Failed to send OTP. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (!otp || otp.length !== 6) {
        setErrors({ ...errors, message: "Please enter a valid 6-digit OTP" });
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
        window.location.href = data.redirectUrl || "https://pmny.in/DIMRKGkGQz6L";
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setErrors({ ...errors, message: error instanceof Error ? error.message : "Invalid OTP" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#F8F5EC] w-[95%] md:w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative h-[75vh] md:h-auto md:max-h-[90vh] flex flex-col"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-[#30261C] hover:text-[#D2A02A] transition-colors z-10"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg md:text-xl" />
            </button>

            <div className="p-5 md:p-8 overflow-y-auto custom-scrollbar">
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
                  <h3 className="text-xl md:text-2xl font-bold text-[#30261C] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm md:text-base text-[#30261C]/80 mb-6 md:mb-8">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <a
                    href="https://pmny.in/DIMRKGkGQz6L"
                    className="w-full bg-[#E19100] text-white text-center font-bold py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#d08600] transition-colors duration-300 text-sm md:text-base"
                  >
                    Proceed to Payment
                  </a>
                </div>
              ) : isDuplicate ? (
                <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-10 md:w-10 text-blue-500"
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
                  <h3 className="text-xl md:text-2xl font-bold text-[#30261C] mb-4">
                    Already Submitted!
                  </h3>
                  <p className="text-sm md:text-base text-[#30261C]/80 mb-6 md:mb-8 leading-relaxed">
                    You have already submitted your info with us. To connect again, check your whatsapp for your assigned executive to contact them again.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-[#30261C] text-white text-center font-bold py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#4a3b2b] transition-colors duration-300 text-sm md:text-base"
                  >
                    Got it
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 md:mb-6">
                    <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-1 md:mb-2">
                       Free Legal Consultation
                    </h2>
                    <p className="text-xs md:text-base text-[#30261C]/80">
                      Fill out the form below and our experts will reach out to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border text-sm md:text-base ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border text-sm md:text-base ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                          placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.email}</p>}
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          maxLength={10}
                          className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border text-sm md:text-base ${
                            errors.phone ? "border-red-500" : "border-gray-200"
                          } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                          placeholder="Your Phone Number"
                          disabled={otpSent}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.phone}</p>}
                      </div>
                    </div>

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
                          className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border text-sm md:text-base ${
                            errors.message && otpSent ? "border-red-500" : "border-gray-200"
                          } focus:outline-none focus:border-[#D2A02A] transition-colors font-bold tracking-[0.5em] text-center`}
                          placeholder="ENTER OTP"
                          maxLength={6}
                        />
                        {errors.message && otpSent && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.message}</p>}
                      </motion.div>
                    )}

                    <div className="relative">
                      <select
                        name="serviceRequired"
                        value={formState.serviceRequired}
                        onChange={handleChange}
                        disabled={otpSent}
                        className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border appearance-none text-sm md:text-base ${
                          errors.serviceRequired ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      >
                        <option value="" disabled>Select Service Required</option>
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service.label} value={service.label}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-[#30261C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {errors.serviceRequired && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.serviceRequired}</p>}
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={2}
                        className={`w-full bg-white text-[#30261C] px-3 py-2 md:px-4 md:py-3 rounded-lg border text-sm md:text-base ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                        placeholder="Briefly describe your legal issue"
                      />
                      {errors.message && <p className="text-red-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E19100] text-white font-bold py-2.5 md:py-3.5 rounded-lg hover:bg-[#d08600] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {otpSent ? "Verifying..." : "Sending OTP..."}
                        </span>
                      ) : (
                        otpSent ? "Verify OTP" : "Get OTP"
                      )}
                    </button>
                    
                    <div className="flex flex-col items-center gap-2 md:gap-4 pt-1 md:pt-2">
                      <div className="opacity-80 hover:opacity-100 transition-opacity">
                        <Image src={payu} alt="Secured by PayU" className="w-24 md:w-32 h-auto" />
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalPopupForm;
