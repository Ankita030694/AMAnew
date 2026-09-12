import React from 'react';
import type { Metadata } from 'next';
import { Shield, ShieldCheck, Clock, Users, FileText, PhoneCall, AlertTriangle } from 'lucide-react';
import SupportForm from './SupportForm';

export const metadata: Metadata = {
  title: "Support & Legal Escalations | AMA Legal Solutions",
  description: "Connect directly with AMA Legal Solutions legal support desk for priority case escalations, debt recovery grievances, and urgent legal interventions.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/support',
  },
  openGraph: {
    title: "Support & Legal Escalations | AMA Legal Solutions",
    description: "Connect directly with AMA Legal Solutions legal support desk for priority case escalations, debt recovery grievances, and urgent legal interventions.",
    url: 'https://www.amalegalsolutions.com/support',
    type: 'website',
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8] flex flex-col font-[family-name:var(--font-polysans)]">
      <div className="flex-grow pt-[120px] px-4 md:px-8 max-w-[1440px] mx-auto w-full mb-[80px]">
        
        {/* Top Header & Form Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 max-w-3xl pt-4">
            <div className="inline-flex items-center gap-2 border border-[#E19100]/30 bg-[#E19100]/5 rounded-full px-4 py-1.5 mb-6 text-[#E19100] text-sm font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4" /> ESCALATION & CLIENT SUPPORT
            </div>

            <h1 className="text-[40px] md:text-[56px] font-bold text-[#30261C] leading-[1.1] mb-4">
              We take your concerns <br />
              <span className="text-[#E19100]">seriously.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#30261C] mb-8 max-w-2xl leading-relaxed">
              Connect directly with our dedicated legal support desk to escalate urgent matters, report recovery agent violations, or receive updates on your active legal proceedings.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <ShieldCheck className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Confidential<br />& Secure</h3>
                  <p className="text-sm text-[#30261C]/80">Your case records and financial information are protected by advocate-client privilege.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <Clock className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Fast<br />Turnaround</h3>
                  <p className="text-sm text-[#30261C]/80">Guaranteed acknowledgment within 4 hours and prompt escalation to assigned advocates.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FDF8E7] flex items-center justify-center border border-[#E9C46A]/40">
                  <Users className="w-6 h-6 text-[#D2A02A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#30261C] mb-1">Senior Legal<br />Oversight</h3>
                  <p className="text-sm text-[#30261C]/80">Complex disputes and emergency court matters are directly reviewed by senior counsel.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="bg-[#FDF8E7]/60 border border-[#E9C46A]/30 rounded-2xl p-6 mb-8">
              <h3 className="text-base font-bold text-[#30261C] mb-2 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#E19100]" /> Direct Helpline & Emergency Contacts
              </h3>
              <p className="text-sm text-[#30261C]/80 mb-4">
                If you are currently facing physical intimidation from recovery agents or have received a same-day court warrant, reach us immediately:
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-[#30261C]">
                <div>Telephone: <a href="tel:+918700343611" className="text-[#E19100] underline font-bold">+91 8700343611</a></div>
                <div>Official Support: <a href="mailto:notify@amalegalsolutions.com" className="text-[#E19100] underline font-bold">notify@amalegalsolutions.com</a></div>
              </div>
            </div>
          </div>

          {/* Right Section - Form Card */}
          <SupportForm />
        </div>

        {/* Escalation Hierarchy & SLA Section */}
        <section className="mt-20 pt-12 border-t border-[#30261C]/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#30261C] mb-4">
              Our 3-Tier Escalation Matrix & Resolution Process
            </h2>
            <p className="text-[#30261C]/80 text-base leading-relaxed">
              We understand that legal matters, loan defaults, and banking harassment require structured, time-sensitive resolution. Our formalized escalation framework ensures your issues are addressed by the right legal authority without delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#E19100]/10 text-[#E19100] flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Level 1: Case Desk & Client Care</h3>
              <p className="text-sm text-[#E19100] font-semibold mb-4">SLA: Response within 4 Business Hours</p>
              <p className="text-sm text-[#30261C]/80 leading-relaxed">
                Initial grievance logging, verification of client credentials, document reconciliation, and dispatching status updates regarding ongoing settlement negotiations or drafting schedules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#E19100]/10 text-[#E19100] flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Level 2: Legal Counsel & Strategy</h3>
              <p className="text-sm text-[#E19100] font-semibold mb-4">SLA: Resolution within 24 Business Hours</p>
              <p className="text-sm text-[#30261C]/80 leading-relaxed">
                Assigned advocates review complex banking communications, counter-reply to formal legal notices under Section 138 NI Act or SARFAESI, and engage directly with bank nodal officers to enforce RBI compliance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#E19100]/10 text-[#E19100] flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Level 3: Senior Partner Intervention</h3>
              <p className="text-sm text-[#E19100] font-semibold mb-4">SLA: Immediate Priority Action</p>
              <p className="text-sm text-[#30261C]/80 leading-relaxed">
                Direct oversight by managing partners for emergency court appearances, urgent stay petitions before the Debt Recovery Tribunal (DRT), High Court writ petitions, and criminal complaints for severe physical harassment.
              </p>
            </div>
          </div>
        </section>

        {/* Support FAQs */}
        <section className="mt-16 pt-12 border-t border-[#30261C]/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-8 text-center">
              Frequently Asked Questions About Client Support
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg text-[#30261C] mb-2">How quickly does legal support intervene after I submit an escalation?</h3>
                <p className="text-sm text-[#30261C]/80 leading-relaxed">
                  Every submitted escalation triggers an automated case notification to our senior review team. For standard inquiries, our team responds within 4 business hours. If your escalation involves imminent agent home visits or court deadlines, our on-call advocates initiate immediate protective measures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg text-[#30261C] mb-2">What documents should I prepare when reporting recovery agent harassment?</h3>
                <p className="text-sm text-[#30261C]/80 leading-relaxed">
                  To ensure our legal team can take swift legal action against unlawful recovery practices, please have your loan account number, bank name, audio recordings, WhatsApp chat screenshots, and details of any agent visits (time, location, and behavior) ready for sharing with our advocates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg text-[#30261C] mb-2">Can AMA Legal Solutions represent me in DRT or Lok Adalat proceedings?</h3>
                <p className="text-sm text-[#30261C]/80 leading-relaxed">
                  Yes, AMA Legal Solutions is a full-service law firm with advocates empaneled across major High Courts, District Courts, Debt Recovery Tribunals (DRT), and National Lok Adalat forums across India. We provide end-to-end representation from pre-litigation notices through final settlement decrees.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
