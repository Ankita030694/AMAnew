import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | AMA Legal Solutions',
  description: 'Your settlement response has been securely recorded by AMA Legal Solutions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SettlementThankYou() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 selection:bg-[#D29E0D] selection:text-white">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100/60 relative">
        {/* Subtle Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D29E0D]" />

        <div className="px-6 py-12 sm:px-16 sm:py-16 text-center">
          {/* Animated Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D29E0D]/10 rounded-full animate-ping opacity-75" />
              <div className="relative w-24 h-24 bg-[#D29E0D]/10 rounded-full flex items-center justify-center ring-8 ring-white">
                <ShieldCheck className="w-12 h-12 text-[#D29E0D]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5 tracking-tight">
            Thank You. Your Response Has Been Securely Recorded.
          </h1>
          
          <p className="text-gray-600 text-lg sm:text-xl mb-10 leading-relaxed font-light">
            Our legal team has received your settlement readiness status and savings update. We will use this information to negotiate the best possible terms on your behalf.
          </p>
          
          <div className="bg-[#f8f9fa] rounded-xl p-6 mb-10 border border-gray-100 shadow-inner">
            <p className="text-sm text-gray-500 leading-relaxed">
              You may now safely close this window. Your dedicated case manager will reach out if further action is required.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-300 rounded-lg bg-[#D29E0D] hover:bg-[#b88a0b] shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
