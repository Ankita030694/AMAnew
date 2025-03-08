'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const page = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);
    }, 1500);
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Address",
      details: "Block G, Sushant Lok 2, 2493AP, Gurugram, Haryana 122001",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "info@amalegalsolutions.com",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+918700343611",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements - Simplified animations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D2A02A] opacity-5"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#5A4C33] opacity-5"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#000000] mt-20">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#000000] mt-6 mx-auto text-2xl">
            We're here to help with your legal needs. Reach out to us using any of the methods below.
          </p>
        </motion.div>
        
        {/* Contact info boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="border border-[#D2A02A]/20 rounded-lg p-6 text-center shadow-xl"
              style={{
                backgroundImage: 'url(./bannerbg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-[#D2A02A] mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-semibold text-[#D2A02A] mb-2">{item.title}</h3>
              <p className="text-gray-300 text-xl">{item.details}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            <div 
              className="absolute inset-0 pointer-events-none border-[3px] border-[#D2A02A] rounded-lg"
            />
          </motion.div>
          
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-black rounded-lg p-8 shadow-xl border border-[#D2A02A]/20 relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-8"
              >
                <div
                  className="w-20 h-20 bg-[#D2A02A]/20 rounded-full flex items-center justify-center mb-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D2A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#D2A02A] mb-2">Thank You!</h3>
                <p className="text-gray-300 text-center">
                  Your message has been received. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-[#D2A02A] mb-6">Send Us a Message</h2>
                
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white text-[#000000] px-4 py-3 rounded-md border border-gray-700 focus:outline-none"
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
                    className="w-full bg-white text-[#000000] px-4 py-3 rounded-md border border-gray-700 focus:outline-none"
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
                    className="w-full bg-white text-[#000000] px-4 py-3 rounded-md border border-gray-700 focus:outline-none"
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
                    className="w-full bg-white text-[#000000] px-4 py-3 rounded-md border border-gray-700 focus:outline-none"
                    placeholder="Your Message"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white py-3 rounded-md font-semibold relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <div
                        className="absolute bottom-0 left-0 h-full bg-white opacity-10 w-0 group-hover:w-full transition-all duration-300"
                      />
                    </>
                  )}
                </motion.button>
              </form>
            )}
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D2A02A]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D2A02A]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D2A02A]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D2A02A]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;