import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import AnujBhiya from '@/components/aboutcomps/AnujBhiya';

export const metadata: Metadata = {
  title: "Anuj Anand Malik | Founder & Managing Partner | AMA Legal Solutions",
  description: "Learn more about Anuj Anand Malik, founder and managing partner at AMA Legal Solutions, leading advocate specializing in loan settlement, banking dispute resolution, and corporate law.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/author/anuj-anand-malik',
  },
  openGraph: {
    title: "Anuj Anand Malik | Founder & Managing Partner | AMA Legal Solutions",
    description: "Learn more about Anuj Anand Malik, founder and managing partner at AMA Legal Solutions, leading advocate specializing in loan settlement, banking dispute resolution, and corporate law.",
    url: 'https://www.amalegalsolutions.com/author/anuj-anand-malik',
    type: 'profile',
  },
};

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f5e8]">
      {/* About Section - Using the AnujBhiya component */}
      <section id="about" className="py-16 pt-28">
        <AnujBhiya />
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Areas of Legal Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Loan Settlement & Debt Waiver",
                description: "Strategic negotiation with major commercial banks and NBFCs, securing massive principal waivers and legitimate No Dues Certificates."
              },
              {
                title: "Anti-Harassment Defense",
                description: "Enforcing RBI Fair Practice Code guidelines against unlawful recovery agent intimidation, third-party harassment, and unannounced home visits."
              },
              {
                title: "DRT & SARFAESI Defense",
                description: "Representing borrowers and business owners before the Debt Recovery Tribunal against auction notices and possession orders."
              },
              {
                title: "Corporate Compliance & Governance",
                description: "Ensuring businesses meet regulatory requirements, director compliance standards, and Companies Act statutory mandates."
              },
              {
                title: "Business Contracts & Drafting",
                description: "Drafting, structuring, and reviewing high-stakes commercial agreements, partner equity covenants, and vendor contracts."
              },
              {
                title: "Dispute Resolution & Lok Adalat",
                description: "Pre-litigation mediation and effective representation before National Lok Adalats to secure binding settlement decrees."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5e8] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#D2A02A]">
                <h3 className="text-xl font-semibold mb-3 text-[#4a3c23]">{item.title}</h3>
                <p className="text-black text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="achievements" className="py-16 bg-[#f9f5e8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Professional Experience & Bar Affiliations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Leadership & Track Record</h3>
              <ul className="space-y-3 text-black text-sm leading-relaxed">
                <li>• Founder and Managing Partner at AMA Legal Solutions, leading a national team of specialized advocates.</li>
                <li>• Successfully represented thousands of distressed borrowers across India, resolving over ₹100+ Crores in disputed debt.</li>
                <li>• Pioneer in programmatic legal advisory and digital access to justice in India.</li>
                <li>• Regular speaker on borrower legal protections under Indian banking statutes.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Professional Memberships</h3>
              <ul className="space-y-3 text-black text-sm leading-relaxed">
                <li>• Bar Council of Delhi — Enrolled Advocate</li>
                <li>• Delhi High Court Bar Association (DHCBA)</li>
                <li>• Member, Debt Recovery Tribunal Bar Association</li>
                <li>• Advocate on Record, District & Sessions Courts of Delhi NCR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Insights & Legal Thought Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Navigating Legal Challenges for Startups in India",
                date: "Corporate Advisory",
                summary: "A comprehensive guide for entrepreneurs on statutory considerations, founder pacts, and regulatory filings when starting up."
              },
              {
                title: "Corporate Compliance: A Practical Approach",
                date: "Regulatory Law",
                summary: "Insights into maintaining robust regulatory compliance frameworks while sustaining rapid business expansion."
              },
              {
                title: "Financial Restructuring in the Post-Pandemic Era",
                date: "Banking Law",
                summary: "Detailed analysis of One-Time Settlement mechanisms and debt restructuring avenues for stressed Indian businesses."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5e8] p-6 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#D2A02A] mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-[#4a3c23]">{item.title}</h3>
                  <p className="text-black text-sm mb-4 leading-relaxed">{item.summary}</p>
                </div>
                <Link href="/blog" className="text-[#D2A02A] hover:text-[#4a3c23] font-medium text-sm">Read full insights →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#4a3c23] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">Connect directly for senior legal consultation, dispute resolution, or banking escalation advisory.</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://www.linkedin.com/in/iamanujmalik/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-[#D2A02A] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
          
          <Link href="/contact" className="inline-block bg-[#D2A02A] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c99420] transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
