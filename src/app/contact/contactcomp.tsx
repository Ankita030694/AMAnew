"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc } from "../../lib/firebase";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import payu from "../../../public/payu.png";
import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";

// Generate array of logo paths: 1.png to 17.png
const clientLogos = Array.from({ length: 17 }, (_, i) => `/newAssets/clientLogos/${i + 1}.png`);

const ContactComp = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    const messageError = validateMessage(formState.message);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    });

    return !(nameError || emailError || phoneError || messageError);
  };

  const validateAndSaveForm = async () => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "form"), {
        ...formState,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);

      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    } finally {
      setIsSubmitting(false);
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
      
      <main className="flex-grow pt-32 px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Section - Content */}
          <div className="flex-1 flex flex-col justify-between min-h-[600px] max-w-3xl">
            <div>
              <h1 className="text-[31px] md:text-[47px] font-medium text-[#30261C] leading-tight mb-6">
                Resolve Your Legal Matters with Confidence
              </h1>
              <p className="text-xl text-[#30261C]/80 leading-relaxed max-w-2xl">
                Connect with our legal team to receive clear, strategic, and results-driven legal guidance tailored to your needs.
              </p>
            </div>

            {/* Client Logos Slider */}
            <div className="py-8">
              <h2 className="text-2xl font-medium text-[#30261C] mb-8">
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
                        alt={`Client Logo ${index + 1}`}
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
              <h2 className="text-2xl font-medium text-[#30261C] mb-8">
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

                    {/* Call Box */}
                    <Link
                      href="tel:+918700343611" 
                      className="flex-1 p-2 rounded-[25px] border border-white/20 transition-transform hover:-translate-y-1"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <h3 className="text-base font-semibold text-[#30261C] mb-0.5 pl-3">Call Us</h3>
                        <p className="text-[#30261C]/80 text-sm pl-3">+91 87003 43611</p>
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

                  <div className="relative">
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
                       className={`w-full bg-[#F8F5EC] text-[#30261C] px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:border-[#D2A02A] transition-colors`}
                      placeholder="Your Phone Number"
                      maxLength={10}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                          Processing...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </a>
                  </div>
                  <div className="flex justify-center pt-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src={payu.src} alt="Secured by PayU" className="w-32" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

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

      <Footer />
    </div>
  );
};

export default ContactComp;
