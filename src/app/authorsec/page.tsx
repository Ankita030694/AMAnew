'use client'

import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function AuthorSecPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f5e8]">
      <Head>
        <title>Shrey Arora | Legal Professional</title>
        <meta name="description" content="Learn more about Shrey Arora, legal professional specializing in corporate law and regulatory compliance." />
      </Head>
      
      {/* About Section */}
      <section id="about" className="py-16 pt-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-[#D2A02A] shadow-lg flex-shrink-0">
              <Image 
                src="/shreychad.svg"
                alt="Shrey Arora"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5A4C33] text-center md:text-left">Shrey Arora</h1>
              <p className="text-xl text-[#5A4C33] mb-6 text-center md:text-left">Corporate Law Specialist | Regulatory Compliance Expert</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#5A4C33]">About</h2>
                <p className="text-black leading-relaxed">
                  Shrey Arora is a legal professional specializing in corporate law and regulatory compliance. He brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law. With a commitment to excellence, Shrey delivers tailored legal solutions that address the unique challenges faced by businesses across various sectors.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shrey-arora/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#5A4C33] text-white p-3 rounded-full hover:bg-[#D2A02A] transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="/contact" 
                  className="bg-[#D2A02A] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#5A4C33] hover:text-white transition-colors"
                >
                  Contact for Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Law",
                description: "Comprehensive legal advice on corporate structuring, governance, and compliance matters."
              },
              {
                title: "Regulatory Compliance",
                description: "Ensuring businesses navigate complex regulatory frameworks and maintain compliance with relevant laws."
              },
              {
                title: "Contract Negotiation",
                description: "Strategic drafting and negotiation of business contracts to protect client interests."
              },
              {
                title: "Business Law",
                description: "Legal guidance on business operations, partnerships, and commercial transactions."
              },
              {
                title: "Corporate Governance",
                description: "Implementing effective governance structures and best practices for organizations."
              },
              {
                title: "Legal Risk Management",
                description: "Identifying, assessing, and mitigating legal risks in business operations."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5e8] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#D2A02A]">
                <h3 className="text-xl font-semibold mb-3 text-[#4a3c23]">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="achievements" className="py-16 bg-[#f9f5e8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Professional Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Industry Expertise</h3>
              <ul className="space-y-2 text-black">
                <li>Technology and Startups</li>
                <li>Financial Services</li>
                <li>Manufacturing and Production</li>
                <li>Healthcare and Pharmaceuticals</li>
                <li>Real Estate and Construction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Professional Memberships</h3>
              <ul className="space-y-2 text-black">
                <li>Bar Council of Delhi</li>
                <li>Bar Association of India</li>
                <li>International Bar Association</li>
                <li>Corporate Law Association of India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Insights & Publications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Navigating Regulatory Challenges in Post-Covid Business Environment",
                date: "May 2023",
                summary: "An analysis of evolving regulatory frameworks and compliance requirements for businesses in the post-pandemic era."
              },
              {
                title: "Effective Contract Strategies for Modern Businesses",
                date: "February 2023",
                summary: "Key considerations and best practices for businesses when drafting, reviewing, and negotiating commercial agreements."
              },
              {
                title: "Corporate Governance: Best Practices for Indian Companies",
                date: "October 2022",
                summary: "A comprehensive guide to implementing effective corporate governance structures in the Indian business context."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5e8] p-6 rounded-lg shadow-sm">
                <p className="text-sm text-[#4a3c23] mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-3 text-[#4a3c23]">{item.title}</h3>
                <p className="text-black mb-4">{item.summary}</p>
                <a href="#" className="text-[#D2A02A] hover:text-[#4a3c23] font-medium">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#4a3c23] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Reach out to discuss legal matters related to corporate law, regulatory compliance, or business advisory needs.</p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://www.linkedin.com/in/shrey-arora/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#D2A02A] transition-colors">
              <FaLinkedin size={32} className="mb-2" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <a href="/contact" className="inline-block bg-[#D2A02A] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c99420] transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
