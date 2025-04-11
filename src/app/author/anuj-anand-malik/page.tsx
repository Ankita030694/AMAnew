'use client'

import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import AnujBhiya from '@/components/aboutcomps/AnujBhiya';

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f5e8]">
      <Head>
        <title>Anuj Anand Malik | Advocate & Legal Consultant</title>
        <meta name="description" content="Learn more about Anuj Anand Malik, founder of AMA Legal Solutions and expert in legal consultancy." />
      </Head>
      
      {/* Hero Section */}
      {/* <div className="bg-[#4a3c23] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Anuj Anand Malik</h1>
          <p className="text-xl max-w-3xl mx-auto">Advocate | Legal Consultant | Founder, AMA Legal Solutions</p>
        </div>
      </div> */}
      
      {/* About Section - Using the AnujBhiya component */}
      <section id="about" className="py-16">
        <AnujBhiya />
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Loan Settlements",
                description: "Expert negotiation and resolution of complex loan matters with financial institutions."
              },
              {
                title: "Corporate Compliance",
                description: "Ensuring businesses meet regulatory requirements and corporate governance standards."
              },
              {
                title: "Business Contracts",
                description: "Drafting, reviewing, and negotiating comprehensive business agreements."
              },
              {
                title: "Dispute Resolution",
                description: "Strategic approach to resolving commercial and civil disputes."
              },
              {
                title: "Financial Litigation",
                description: "Representation in court for financial and banking disputes."
              },
              {
                title: "Startup Advisory",
                description: "Legal guidance for entrepreneurs and emerging businesses."
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
      
      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-[#f9f5e8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Professional Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Memberships</h3>
              <ul className="space-y-2 text-black">
                <li>Indo-American Chamber of Commerce (IACC)</li>
                <li>Mumbai Centre for International Arbitration (MCIA)</li>
                <li>Bar Council of Delhi</li>
                <li>Bar Council of India</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Notable Cases</h3>
              <ul className="space-y-2 text-black">
                <li>Successfully negotiated multi-crore loan settlements</li>
                <li>Represented startups in various corporate disputes</li>
                <li>Advisory role in international business transactions</li>
                <li>Resolution of complex corporate compliance issues</li>
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
                title: "Navigating Legal Challenges for Startups in India",
                date: "June 2023",
                summary: "A comprehensive guide for entrepreneurs on legal considerations when starting a business in India."
              },
              {
                title: "Corporate Compliance: A Practical Approach",
                date: "March 2023",
                summary: "Insights into maintaining regulatory compliance while focusing on business growth."
              },
              {
                title: "Financial Restructuring in Post-Pandemic Era",
                date: "November 2022",
                summary: "Analysis of strategies for businesses recovering from pandemic-related financial challenges."
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
          <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with me for legal consultation or inquiries about AMA Legal Solutions.</p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#D2A02A] transition-colors">
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
