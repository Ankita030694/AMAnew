"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { collection, addDoc, db } from "../lib/firebase";
import { serverTimestamp } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });

  useEffect(() => {
    // Only trigger once per session
    const hasBeenShown = sessionStorage.getItem("global_popup_shown");
    if (hasBeenShown) return;

    const timer = setTimeout(() => {
      // Check current pathname to ensure we don't open on excluded pages
      const currentPath = window.location.pathname;
      const isExcludedPage = currentPath.includes("/login") || currentPath.includes("/admin") || currentPath.includes("/thank-you");
      
      if (!isExcludedPage) {
        setIsOpen(true);
        sessionStorage.setItem("global_popup_shown", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
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
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "form"), {
        ...formState,
        timestamp: serverTimestamp(),
        source: "Global Popup"
      });

      // Send WATI Message (matching contactcomp logic)
      try {
        await fetch("/api/send-wati-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: formState.phone,
            name: formState.name,
          }),
        });
      } catch (watiError) {
        console.error("Error sending WATI message:", watiError);
      }

      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          serviceRequired: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
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
            className="bg-[#F8F5EC] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#30261C] hover:text-[#D2A02A] transition-colors z-10"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <div className="p-8">
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
                  <p className="text-[#30261C]/80">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-2">
                       Free Legal Consultation
                    </h2>
                    <p className="text-[#30261C]/80">
                      Fill out the form below and our experts will reach out to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full bg-white text-[#30261C] px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full bg-white text-[#30261C] px-4 py-3 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                          placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          maxLength={10}
                          className={`w-full bg-white text-[#30261C] px-4 py-3 rounded-lg border ${
                            errors.phone ? "border-red-500" : "border-gray-200"
                          } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                          placeholder="Your Phone Number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="serviceRequired"
                        value={formState.serviceRequired}
                        onChange={handleChange}
                        className={`w-full bg-white text-[#30261C] px-4 py-3 rounded-lg border appearance-none ${
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
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#30261C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {errors.serviceRequired && <p className="text-red-500 text-xs mt-1">{errors.serviceRequired}</p>}
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full bg-white text-[#30261C] px-4 py-3 rounded-lg border ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                        placeholder="Briefly describe your legal issue"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E19100] text-white font-bold py-3.5 rounded-lg hover:bg-[#d08600] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Get Free Assistance Now"
                      )}
                    </button>
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
