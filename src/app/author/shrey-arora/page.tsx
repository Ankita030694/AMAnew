import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Shrey Arora | Corporate Law & Regulatory Compliance Advocate",
  description: "Learn more about Shrey Arora, legal professional at AMA Legal Solutions specializing in corporate law, commercial contracts, and regulatory compliance.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/author/shrey-arora',
  },
  openGraph: {
    title: "Shrey Arora | Corporate Law & Regulatory Compliance Advocate",
    description: "Learn more about Shrey Arora, legal professional at AMA Legal Solutions specializing in corporate law, commercial contracts, and regulatory compliance.",
    url: 'https://www.amalegalsolutions.com/author/shrey-arora',
    type: 'profile',
  },
};

export default function AuthorSecPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f5e8]">
      {/* About Section */}
      <section id="about" className="py-16 pt-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-[#D2A02A] shadow-lg flex-shrink-0">
              <Image 
                src="/shrey.png"
                alt="Shrey Arora - Corporate Law Specialist"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5A4C33] text-center md:text-left">Shrey Arora</h1>
              <p className="text-xl text-[#5A4C33] mb-6 text-center md:text-left font-medium">Corporate Law Specialist | Regulatory Compliance & Commercial Contracts Expert</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#5A4C33]">About Shrey Arora</h2>
                <p className="text-black leading-relaxed mb-4">
                  Shrey Arora is a distinguished legal professional at AMA Legal Solutions specializing in corporate governance, commercial contract negotiation, and multi-jurisdictional regulatory compliance. He brings a strategic, business-first approach to complex corporate matters, assisting fast-growing startups, technology companies, and established industrial enterprises in safeguarding their commercial interests.
                </p>
                <p className="text-black leading-relaxed">
                  With deep experience in structuring commercial transactions and resolving contractual disputes, Shrey provides actionable legal advisory on Companies Act compliance, foreign direct investment (FDI) guidelines, cross-border vendor pacts, and shareholder agreements. His practice focuses on proactive legal risk containment, ensuring businesses remain compliant with statutory authorities like the Ministry of Corporate Affairs (MCA), SEBI, and the Reserve Bank of India (RBI).
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shrey-arora/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#5A4C33] text-white p-3 rounded-full hover:bg-[#D2A02A] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <Link 
                  href="/contact" 
                  className="bg-[#D2A02A] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#5A4C33] hover:text-white transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Core Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Law & Governance",
                description: "Advising corporate boards, founders, and managing directors on internal governance, director fiduciary obligations, and compliance under the Companies Act 2013."
              },
              {
                title: "Regulatory Compliance & Audits",
                description: "Conducting end-to-end statutory health checks, ensuring business adherence to RBI NBFC regulations, SEBI guidelines, and labor welfare standards."
              },
              {
                title: "Commercial Contract Negotiation",
                description: "Strategic drafting, vetting, and execution of master service agreements (MSAs), joint venture covenants, non-disclosure agreements, and distribution pacts."
              },
              {
                title: "Commercial Dispute Mediation",
                description: "Resolving shareholder deadlocks, vendor payment defaults, and breach-of-contract disputes through pre-litigation conciliation and arbitration."
              },
              {
                title: "Startup Legal Advisory",
                description: "End-to-end legal support for early-stage and growth-stage startups, including ESOP structuring, term-sheet review, and founder vesting agreements."
              },
              {
                title: "Legal Risk Management",
                description: "Designing corporate risk mitigation policies, dispute mitigation protocols, and statutory compliance calendars for scalable business operations."
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
      
      {/* Professional Experience Section */}
      <section id="achievements" className="py-16 bg-[#f9f5e8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Professional Experience & Bar Affiliations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Industry Sectors Advised</h3>
              <ul className="space-y-3 text-black text-sm leading-relaxed">
                <li>• <strong>FinTech & NBFCs:</strong> Digital lending compliance, data localization, and payment aggregator norms.</li>
                <li>• <strong>Technology & SaaS:</strong> Software licensing, IP commercialization, and cross-border SaaS agreements.</li>
                <li>• <strong>Manufacturing & Retail:</strong> Supply chain master contracts, distributor agreements, and labor code compliance.</li>
                <li>• <strong>Healthcare & Life Sciences:</strong> Clinical compliance, regulatory approvals, and vendor confidentiality terms.</li>
                <li>• <strong>Real Estate & Infrastructure:</strong> Vendor pacts, commercial lease negotiations, and joint development agreements.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#D2A02A]">
              <h3 className="text-xl font-semibold mb-4 text-[#4a3c23]">Professional Affiliations</h3>
              <ul className="space-y-3 text-black text-sm leading-relaxed">
                <li>• Bar Council of Delhi — Enrolled Advocate</li>
                <li>• Delhi High Court Bar Association (DHCBA)</li>
                <li>• Member, Corporate Law Committee</li>
                <li>• Contributor to Legal Thought Leadership on Corporate Governance & Contractual Risk in India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4a3c23]">Legal Insights & Thought Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Navigating Regulatory Challenges in Post-Covid Business Environment",
                date: "Corporate Advisory",
                summary: "An analysis of evolving regulatory frameworks, MCA digital filings, and statutory compliance requirements for Indian enterprises."
              },
              {
                title: "Effective Contract Strategies for Modern Businesses",
                date: "Commercial Law",
                summary: "Key legal considerations and risk mitigation checklists when drafting, negotiating, and enforcing commercial supply agreements."
              },
              {
                title: "Corporate Governance: Best Practices for Indian Companies",
                date: "Regulatory Compliance",
                summary: "A practical guide for corporate boards on independent director responsibilities, audit committees, and internal dispute protocols."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5e8] p-6 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#D2A02A] mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-[#4a3c23]">{item.title}</h3>
                  <p className="text-black text-sm mb-4 leading-relaxed">{item.summary}</p>
                </div>
                <Link href="/blog" className="text-[#D2A02A] hover:text-[#4a3c23] font-medium text-sm">Read legal insights →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#4a3c23] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch for Corporate Advisory</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Reach out to discuss your company&apos;s corporate structuring, regulatory compliance audits, or commercial contract requirements with our specialized legal team.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://www.linkedin.com/in/shrey-arora/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-[#D2A02A] transition-colors"
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
