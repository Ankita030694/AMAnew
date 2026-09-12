import { Metadata } from 'next';
import { Suspense } from 'react';
import AmaLiveClient from './client';
import Navbar from "@/newcomp/Navbar";
import { Video, ShieldCheck, Scale, HelpCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "AMA Live | Interactive Legal Broadcasts & Video Advisory",
  description: "Watch weekly legal sessions and live video advisory from senior advocates at AMA Legal Solutions. Insights on loan settlement, recovery agent harassment, and corporate disputes.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/ama-live',
  },
  openGraph: {
    title: "AMA Live | Interactive Legal Broadcasts & Video Advisory",
    description: "Watch weekly legal sessions and live video advisory from senior advocates at AMA Legal Solutions. Insights on loan settlement, recovery agent harassment, and corporate disputes.",
    url: 'https://www.amalegalsolutions.com/ama-live',
    type: 'website',
  },
};

export default function AmaLivePage() {
  return (
    <div style={{ fontFamily: "var(--font-polysans)" }} className="min-h-screen bg-[#FCFBF8]">
      <Navbar />
      
      {/* Live Videos Interactive Section */}
      <Suspense fallback={<VideosSkeleton />}>
        <AmaLiveClient initialVideos={[]} />
      </Suspense>

      {/* SSR Informative Knowledge Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl border-t border-[#30261C]/10 mt-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#E19100]/30 bg-[#E19100]/5 rounded-full px-4 py-1.5 mb-4 text-[#E19100] text-sm font-semibold uppercase tracking-wider">
            <Video className="w-4 h-4" /> LEGAL EDUCATION & ADVISORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#30261C] mb-4">
            About AMA Live Legal Broadcasts
          </h2>
          <p className="text-base text-[#30261C]/80 leading-relaxed">
            AMA Live is an interactive legal education and advisory initiative hosted by senior advocates and dispute resolution experts at AMA Legal Solutions. We host regular livestream broadcasts and publish instructional video masterclasses to help citizens and businesses understand their legal rights under Indian law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-[#E9C46A]/20 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FDF8E7] flex items-center justify-center text-[#E19100] mb-4">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#30261C] mb-2">Loan Settlement & Banking Defense</h3>
            <p className="text-sm text-[#30261C]/80 leading-relaxed mb-3">
              Learn how to negotiate One-Time Settlements (OTS) with major Indian banks, stop recovery agent intimidation through RBI Fair Practices Code circulars, and defend against Section 138 cheque bounce or Section 25 NACH notices.
            </p>
            <ul className="text-xs text-[#30261C]/70 space-y-1">
              <li>• RBI master directions on outsourcing debt collection</li>
              <li>• Lok Adalat settlement process & No Dues Certificates</li>
              <li>• SARFAESI notice defense & DRT appeal procedures</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E9C46A]/20 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FDF8E7] flex items-center justify-center text-[#E19100] mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#30261C] mb-2">Intellectual Property & Corporate Law</h3>
            <p className="text-sm text-[#30261C]/80 leading-relaxed mb-3">
              Practical guidance for entrepreneurs and corporate counsels on trademark registration, replying to examination reports, attending opposition hearings before the Trade Marks Registry, and navigating corporate contract disputes.
            </p>
            <ul className="text-xs text-[#30261C]/70 space-y-1">
              <li>• Trademark Class selection & distinctive brand protection</li>
              <li>• Commercial arbitration & breach-of-contract remedies</li>
              <li>• Companies Act compliance & shareholder pact drafting</li>
            </ul>
          </div>
        </div>

        {/* How to Participate & Submit Questions */}
        <div className="bg-[#FDF8E7]/50 rounded-2xl p-8 border border-[#E9C46A]/30 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <HelpCircle className="w-8 h-8 text-[#E19100] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-[#30261C] mb-2">How to Submit Your Questions for Upcoming Sessions</h3>
              <p className="text-sm text-[#30261C]/80 leading-relaxed mb-4">
                During each live session, our legal team selects queries submitted by viewers and provides detailed, legal-statute-backed answers. If you have an active dispute, banking notice, or trademark inquiry you would like reviewed on air, you can submit your question anonymously or reach our consultation team directly at <a href="mailto:notify@amalegalsolutions.com" className="text-[#E19100] underline font-semibold">notify@amalegalsolutions.com</a>.
              </p>
              <p className="text-xs text-[#30261C]/60 italic">
                Disclaimer: Information provided in AMA Live sessions is intended for general legal education and public awareness under the Bar Council of India guidelines. It does not constitute formal advocate-client relationship until formal engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple skeleton loader component
function VideosSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="mb-12 text-center">
        <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden border border-gray-100 h-full">
            <div className="bg-gray-200 animate-pulse h-[200px] rounded-t-xl"></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-gray-200 animate-pulse h-6 w-20 rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-24 rounded"></div>
              </div>
              <div className="bg-gray-200 animate-pulse h-6 w-full rounded mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}