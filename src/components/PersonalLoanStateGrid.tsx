import Link from 'next/link';
import { statesData } from '@/data/statesData';

export default function PersonalLoanStateGrid({ bankName, bankSlug }: { bankName: string, bankSlug: string }) {
  // Sort states alphabetically for better UX
  const sortedStates = [...statesData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="state-directory" className="scroll-mt-32 mt-12 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
        {bankName} Personal Loan Settlement Services by State
      </h2>
      <p className="text-gray-600 mb-6 pb-4 border-b border-gray-100">
        Select your state or union territory below to understand the specific legal framework and local police authorities you can utilize to stop {bankName} harassment and resolve your personal loan debt.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedStates.map((state) => (
          <Link 
            key={state.slug} 
            href={`/personal-loan-settlement/${bankSlug}/${state.slug}`}
            className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all group bg-gray-50 hover:bg-white"
          >
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs mr-3 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">
              {state.name.charAt(0)}
            </span>
            <span className="font-semibold text-gray-700 group-hover:text-[#D2A02A] transition-colors text-sm">
              {state.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
