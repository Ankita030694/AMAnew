import React from "react";
import Navbar from "@/newcomp/Navbar";
import CareersForm from "./CareersForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at AMA Legal Solutions | Join Our Team",
  description: "Join our team at AMA Legal Solutions. Explore open positions for Business Development Associate, Legal Associate, and SDE Intern. Build a meaningful career in legal services.",
};

const OPEN_POSITIONS = [
  {
    title: "Business Development Associate",
    type: "Full-Time",
    location: "Gurugram / In Office",
    description: "Drive growth and expand our client base by identifying new business opportunities and maintaining strong relations.",
    slug: "business-development-associate"
  },
  {
    title: "Legal Associate",
    type: "Full-Time",
    location: "Gurugram / In Office",
    description: "Support our legal team in case research, document drafting, and client representation across various legal domains.",
    slug: "legal-associate"
  },
  {
    title: "SDE Intern",
    type: "Internship",
    location: "In Office",
    description: "Assist in developing and maintaining our digital platforms, focusing on performance, scalability, and user experience.",
    slug: "sde-intern"
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EC] font-[family-name:var(--font-polysans)]">
      <Navbar />
      
      <main className="pt-[120px] pb-[100px] px-4 md:px-8 max-w-[1200px] mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-[40px] md:text-[60px] font-bold text-[#30261C] leading-tight mb-6">
            Join Our Mission
          </h1>
          <p className="text-[18px] md:text-[22px] text-[#30261C]/80 max-w-2xl mx-auto">
            At AMA Legal Solutions, we are building the future of legal services. Join a team dedicated to excellence, innovation, and client success.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Open Positions */}
          <section>
            <h2 className="text-3xl font-bold text-[#30261C] mb-8">Open Positions</h2>
            <div className="space-y-6">
              {OPEN_POSITIONS.map((job) => (
                <div 
                  key={job.title}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#D2A02A]/10 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#30261C]">{job.title}</h3>
                      <p className="text-sm text-[#D2A02A] font-semibold">{job.type} • {job.location}</p>
                    </div>
                  </div>
                  <p className="text-[#30261C]/80 leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <Link 
                    href={`/careers/${job.slug}`}
                    className="text-[#D2A02A] font-semibold hover:underline flex items-center gap-2 group"
                  >
                    View Details &amp; Requirements
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Application Form */}
          <section className="lg:sticky lg:top-[120px] h-fit">
            <CareersForm />
          </section>
        </div>

        {/* SEO Content: Why Work With Us */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-[#30261C] mb-6 text-center">
            Why Work With AMA Legal Solutions?
          </h2>
          <p className="text-[#30261C]/75 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            AMA Legal Solutions is one of India&apos;s fastest-growing legal services firms, headquartered in Gurugram with a pan-India presence. We combine deep legal expertise with technology to deliver accessible, affordable, and effective legal solutions to thousands of clients every year. When you join our team, you become part of a mission that genuinely changes lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-3">High-Impact Work</h3>
              <p className="text-[#30261C]/70 leading-relaxed">
                Every project you work on directly impacts real clients facing financial distress, legal disputes, or business challenges. Your contributions are meaningful and measurable. We handle cases involving loan settlement, trademark protection, employment disputes, and more, giving you exposure to a wide range of legal and business scenarios.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-3">Continuous Learning</h3>
              <p className="text-[#30261C]/70 leading-relaxed">
                We invest in our people. Whether you are a fresh law graduate, a business development professional, or a software engineer, you will have access to mentorship from senior advocates, workshops on emerging legal trends, and cross-functional exposure that accelerates your career growth. We believe that a well-trained team is our greatest asset.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-3">Collaborative Culture</h3>
              <p className="text-[#30261C]/70 leading-relaxed">
                We foster a culture of openness, respect, and collaboration. Our team is diverse, bringing together legal professionals, technologists, and business strategists who work together toward a common goal. We celebrate wins as a team and support each other through challenges. At AMA, you are never just an employee; you are a valued partner in our mission.
              </p>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">
                What We Look For
              </h2>
              <p className="text-[#30261C]/75 leading-relaxed mb-6">
                We are looking for individuals who are passionate about making a difference, who take ownership of their work, and who thrive in a fast-paced, purpose-driven environment. Regardless of the role, we value the following qualities in every candidate:
              </p>
              <ul className="space-y-4 text-[#30261C]/75">
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">✓</span>
                  <span><strong className="text-[#30261C]">Client-First Mindset:</strong> You genuinely care about the people you serve and go the extra mile to deliver results that matter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">✓</span>
                  <span><strong className="text-[#30261C]">Integrity and Ethics:</strong> You uphold the highest standards of professional conduct and are committed to doing the right thing, even when it is difficult.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">✓</span>
                  <span><strong className="text-[#30261C]">Adaptability:</strong> You embrace change, learn quickly, and are comfortable operating in a dynamic, growing organization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">✓</span>
                  <span><strong className="text-[#30261C]">Communication Skills:</strong> You can articulate complex ideas clearly and confidently, both in writing and in person.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">✓</span>
                  <span><strong className="text-[#30261C]">Drive for Excellence:</strong> You set high standards for your own work and are always looking for ways to improve processes and outcomes.</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#30261C] text-[#F8F5EC] p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Life at AMA</h3>
              <p className="leading-relaxed opacity-80 mb-6">
                Our Gurugram office is a vibrant, energetic workspace where legal professionals and technologists collaborate daily. We host regular knowledge-sharing sessions, team lunches, and celebrate every milestone together. We believe that a happy team delivers exceptional results.
              </p>
              <p className="leading-relaxed opacity-80 mb-6">
                We offer competitive compensation packages, performance-based incentives, and a clear path for career advancement. For legal associates, we provide opportunities to appear in courts across Delhi NCR and gain hands-on litigation experience from day one.
              </p>
              <p className="leading-relaxed opacity-80">
                For our technology team, we work with a modern stack including Next.js, Firebase, and cloud infrastructure, giving engineers the opportunity to build scalable products that serve thousands of users across India.
              </p>
            </div>
          </div>
        </section>

        {/* Equal Opportunity */}
        <section className="mt-16 text-center bg-white p-10 rounded-2xl border border-[#D2A02A]/10">
          <h2 className="text-2xl font-bold text-[#30261C] mb-4">Equal Opportunity Employer</h2>
          <p className="text-[#30261C]/70 leading-relaxed max-w-3xl mx-auto">
            AMA Legal Solutions is an equal opportunity employer. We are committed to creating an inclusive environment for all employees and do not discriminate on the basis of race, religion, gender, age, disability, or any other protected characteristic. We welcome applications from candidates of all backgrounds and experiences.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;
