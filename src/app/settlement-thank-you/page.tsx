import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | AMA Legal Solutions',
  description: 'Your response has been securely recorded.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SettlementThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 selection:bg-[#D29E0D] selection:text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center tracking-tight leading-snug">
        Thank You. Your Response Has Been Securely Recorded.
      </h1>
    </div>
  );
}
