'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Shield, Send, ShieldCheck, Clock, Users } from 'lucide-react';
import Head from 'next/head';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: ''
  });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', concern: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    return "";
  };
  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Phone number must be exactly 10 digits";
    return "";
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };
  const validateConcern = (concern: string) => {
    if (!concern.trim()) return "Concern is required";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === 'phone') {
      newValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    }
    setFormData(prev => ({ ...prev, [name]: newValue }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const concernError = validateConcern(formData.concern);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      concern: concernError,
    });

    return !(nameError || emailError || phoneError || concernError);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://us-central1-amacrm-76fd1.cloudfunctions.net/submitEscalation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit escalation.');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Submit Error:', error);
      alert('There was an issue submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Support & Escalations | AMA Legal Solutions</title>
        <meta name="description" content="Reach out to AMA Legal Solutions for support and escalations." />
      </Head>
      
      <main className="min-h-screen bg-[#FCFBF8] flex flex-col font-[family-name:var(--font-polysans)]">
        <div className="flex-grow pt-[120px] px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-[80px]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Section */}
            <div className="flex-1 max-w-3xl pt-4">
              <div className="inline-flex items-center gap-2 border border-[#E19100]/30 bg-[#E19100]/5 rounded-full px-4 py-1.5 mb-6 text-[#E19100] text-sm font-semibold uppercase tracking-wider">
                <Shield className="w-4 h-4" /> ESCALATION & SUPPORT
              </div>

              <h1 className="text-[40px] md:text-[56px] font-bold text-[#30261C] leading-[1.1] mb-4">
                We take your concerns <br/>
                <span className="text-[#E19100]">seriously.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#30261C] mb-12 max-w-2xl leading-relaxed">
                Connect directly with our support team to escalate matters that require immediate attention.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                    <ShieldCheck className="w-6 h-6 text-[#D2A02A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#30261C] mb-1">Confidential<br/>& Secure</h3>
                    <p className="text-sm text-[#30261C]">Your information is securely handled.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                    <Clock className="w-6 h-6 text-[#D2A02A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#30261C] mb-1">Quick<br/>Response</h3>
                    <p className="text-sm text-[#30261C]">Fastest turnaround for escalations.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                    <Users className="w-6 h-6 text-[#D2A02A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#30261C] mb-1">Expert<br/>Support</h3>
                    <p className="text-sm text-[#30261C]">Dedicated team for prompt resolution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form Card */}
            <div className="w-full lg:w-[480px] shrink-0">
              <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E9C46A]/20 relative h-fit md:p-8">
                
                <div className="flex items-center justify-center mb-6">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-12 h-[1px] bg-[#E19100]/30 -left-16"></div>
                    <div className="w-12 h-12 bg-[#FDF8E7] rounded-xl flex items-center justify-center text-[#E19100]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="absolute w-12 h-[1px] bg-[#E19100]/30 -right-16"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-[#30261C] mb-2">Escalate an Issue</h2>
                <p className="text-center text-sm text-[#30261C] mb-8 max-w-[280px] mx-auto">
                  Provide details and our team will get back to you immediately.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-2">
                      <ShieldCheck className="w-8 h-8 text-[#22C55E]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#30261C]">Escalation Received</h3>
                    <p className="text-[#30261C]">Thank you for reaching out. We have securely escalated your concern to our support team.</p>
                    <button 
                      onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', concern: '' }); }} 
                      className="mt-4 px-6 py-2 bg-[#FDF8E7] rounded-lg text-sm font-semibold border border-[#E9C46A]/40 text-[#E19100]"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form className="space-y-3 relative z-10">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => setErrors({ ...errors, name: validateName(formData.name) })}
                        className={`w-full bg-[#FCFBF8] border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
                        placeholder="Ravi Sharma"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => setErrors({ ...errors, phone: validatePhone(formData.phone) })}
                        maxLength={10}
                        className={`w-full bg-[#FCFBF8] border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
                        placeholder="9876543210"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => setErrors({ ...errors, email: validateEmail(formData.email) })}
                        className={`w-full bg-[#FCFBF8] border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors`}
                        placeholder="ravi@example.com"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-4 pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                      </div>
                      <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        onBlur={() => setErrors({ ...errors, concern: validateConcern(formData.concern) })}
                        rows={4}
                        className={`w-full bg-[#FCFBF8] border ${errors.concern ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-11 pr-4 text-sm text-black focus:outline-none focus:border-[#E19100] transition-colors resize-none`}
                        placeholder="Your Concern..."
                      />
                    </div>

                    {(errors.name || errors.email || errors.phone || errors.concern) && (
                      <p className="text-red-500 text-xs text-center">Please fill out all fields correctly.</p>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#dda321] hover:bg-[#c9921b] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4 shadow-md"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Submit Escalation <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
