'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt, faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc } from '../../lib/firebase';
import { db } from '../../lib/firebase'; // adjust the path as needed
import payu from '../../../public/payu.png'
const Page = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Create a function that handles validation and form saving
  const validateAndSaveForm = async () => {
    // Check if form is valid
    if (!formState.name || !formState.email || !formState.phone || !formState.message) {
      return false; // Form is not valid
    }
    
    setIsSubmitting(true);
    
    try {
      // Save formState to Firestore collection "form"
      await addDoc(collection(db, "form"), formState);
      setSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);
      
      return true; // Form submission successful
    } catch (error) {
      console.error("Error adding document: ", error);
      return false; // Form submission failed
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle PayU button click
  const handlePayUClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation
    
    // First save the form data - we don't need to capture the return value
    await validateAndSaveForm();
    
    // Then redirect to PayU payment page regardless of form validity
    window.location.href = 'https://pmny.in/DIMRKGkGQz6L';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };
  
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Our Address",
      details: "Block G, Sushant Lok 2, 2493AP, Gurugram, Haryana 122001",
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      details: "info@amalegalsolutions.com",
    },
    {
      icon: faPhone,
      title: "Call Us",
      details: "+918700343611",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EC] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D2A02A] opacity-5"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#5A4C33] opacity-5"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#5A4C33] mt-20">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#5A4C33] mt-6 mx-auto text-xl max-w-2xl">
            We&apos;re here to help with your legal needs. Reach out to us using any of the methods below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[500px] rounded-lg overflow-hidden shadow-xl border border-[#D2A02A]/20 relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=AMA+LEGAL+SOLUTIONS%2C+2493AP%2C+Block+G%2C+Sushant+Lok+2%2C+Sector+57%2C+Gurugram%2C+Haryana+122001&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="absolute inset-0 pointer-events-none border-[3px] border-[#D2A02A] rounded-lg" />
          </motion.div>
          
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-xl border-l-4 border-[#D2A02A] relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-8"
              >
                <div className="w-20 h-20 bg-[#D2A02A]/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D2A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#5A4C33] mb-2">Thank You!</h3>
                <p className="text-[#5A4C33]/80 text-center mb-6">
                  Your message has been received. We&apos;ll get back to you shortly.
                </p>
                
                <div className="mt-4">
                  <a 
                    href='https://pmny.in/DIMRKGkGQz6L'
                    className="block w-full bg-[#E19100] text-white text-center font-extrabold py-3 px-6 rounded hover:bg-[#d08600] transition-colors duration-300"
                  >
                    Send Message
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} id="contactForm" className="space-y-6">
                <h2 className="text-2xl font-bold text-[#5A4C33] mb-6">Send Us a Message</h2>
                
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-[#F8F5EC] text-[#5A4C33] px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                    placeholder="Your Name"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-[#F8F5EC] text-[#5A4C33] px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                    placeholder="Your Email"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-[#F8F5EC] text-[#5A4C33] px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                    placeholder="Your Phone Number"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'phone' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-[#F8F5EC] text-[#5A4C33] px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                    placeholder="Your Message"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="mt-6">
                  <a 
                    href='https://pmny.in/DIMRKGkGQz6L'
                    onClick={handlePayUClick}
                    className="block w-full bg-[#E19100] text-white text-center font-extrabold py-3 rounded hover:bg-[#d08600] transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Send Message"}
                  </a>
                </div>
                <div className="mt-2 flex justify-center">
                 <img src={payu.src} alt="payu" className='w-36' />
                </div>
              </form>
            )}
          </motion.div>
        </div>
        {/* Contact info boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-15"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg border-l-4 border-[#D2A02A] overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D2A02A]/20 flex items-center justify-center text-[#D2A02A] mr-4">
                  <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#5A4C33]">{item.title}</h3>
              </div>
              <p className="text-[#5A4C33]/80">{item.details}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Work with AMA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-lg border-l-4 border-[#D2A02A] overflow-hidden shadow-lg p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#D2A02A]/20 flex items-center justify-center text-[#D2A02A]">
              <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-[#5A4C33] mb-4">Work with AMA</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-4"></div>
          
          <p className="text-[#5A4C33]/80 max-w-2xl mx-auto mb-6 text-lg">
            Join our team of legal professionals dedicated to providing exceptional service. 
            We are always looking for talented individuals who share our commitment to excellence.
          </p>
          
          <div className="flex items-center justify-center text-xl font-medium text-[#D2A02A]">
            <span>career@amalegalsolutions.com</span>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Link href="https://in.linkedin.com/company/ama-legal-solutions" className="inline-flex items-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white px-6 py-3 rounded-md font-semibold group">
              <span className="mr-2">View Opportunities</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
