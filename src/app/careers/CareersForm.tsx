"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const CareersForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    try {
      const { collection, addDoc } = await import("firebase/firestore");
      const { serverTimestamp } = await import("firebase/firestore");
      const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
      const { db, storage } = await import("../../lib/firebase");
      if (!storage) {
        throw new Error("Firebase Storage is not initialized");
      }

      // 1. Upload Resume PDF to Firebase Storage
      const storageRef = ref(storage, `careers/resumes/${Date.now()}_${resume.name}`);
      const snapshot = await uploadBytes(storageRef, resume);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 2. Save Form Data to Firestore
      await addDoc(collection(db, "careers"), {
        ...formState,
        resumeUrl: downloadURL,
        appliedAt: serverTimestamp(),
        submissionUrl: window.location.href
      });

      setSubmitted(true);
      toast.success("Application submitted successfully!");
      setFormState({ name: "", email: "", phone: "", location: "", position: "" });
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#D2A02A]/10 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#30261C] mb-2">Application Received!</h3>
        <p className="text-sm md:text-base text-[#30261C]/70 mb-5 md:mb-6">Thank you for your interest in joining AMA Legal Solutions. Our team will review your application and get back to you soon.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm md:text-base text-[#D2A02A] font-semibold hover:underline"
        >
          Apply for another position
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#D2A02A]/10">
      <h2 className="text-xl md:text-2xl font-bold text-[#30261C] mb-5 md:mb-6">Apply Now</h2>
      
      <div>
        <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Name</label>
        <input
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="text-sm md:text-base text-black w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A]"
          placeholder="Enter your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Email</label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="text-sm md:text-base text-black w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A]"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Phone</label>
          <input
            type="tel"
            required
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className="text-sm md:text-base text-black w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A]"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Location</label>
        <input
          type="text"
          required
          value={formState.location}
          onChange={(e) => setFormState({ ...formState, location: e.target.value })}
          className="text-sm md:text-base text-black w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A]"
          placeholder="Enter your current location"
        />
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Position Applying For</label>
        <select
          required
          value={formState.position}
          onChange={(e) => setFormState({ ...formState, position: e.target.value })}
          className="text-sm md:text-base text-black w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A] appearance-none"
        >
          <option value="" disabled>Select a position</option>
          <option value="Business Development Associate">Business Development Associate</option>
          <option value="Legal Associate">Legal Associate</option>
          <option value="SDE Intern">SDE Intern</option>
        </select>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-[#30261C] mb-1 md:mb-2">Resume (PDF)</label>
        <input
          type="file"
          required
          accept=".pdf"
          ref={fileInputRef}
          onChange={(e) => setResume(e.target.files?.[0] || null)}
          className="w-full bg-[#F8F5EC] border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 focus:outline-none focus:border-[#D2A02A] file:mr-3 md:file:mr-4 file:py-1.5 md:file:py-2 file:px-3 md:file:px-4 file:rounded-full file:border-0 file:text-xs md:file:text-sm file:font-semibold file:bg-[#D2A02A]/10 file:text-[#D2A02A] hover:file:bg-[#D2A02A]/20 text-black text-sm md:text-base"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D2A02A] text-white font-bold py-3 md:py-4 rounded-lg hover:bg-[#b58924] transition-colors disabled:opacity-50 text-sm md:text-base"
      >
        {isSubmitting ? "Submitting Application..." : "Submit Application"}
      </button>
    </form>
  );
};

export default CareersForm;
