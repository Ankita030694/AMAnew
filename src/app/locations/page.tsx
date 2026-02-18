import Locations from "@/components/locations";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Locations | AMA Legal Solutions",
  description: "Find AMA Legal Solutions offices across India. We are present in New Delhi, Mumbai, Kolkata, Jaipur, Bengaluru, Chennai, and more. Expert legal services near you."
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EC]" style={{ fontFamily: "var(--font-polysans)" }}>
      <div className="container mx-auto px-4 py-12">
        <Locations />

        {/* SEO Content: About Our Pan-India Presence */}
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#30261C] mb-6 text-center">
            Pan-India Legal Services You Can Trust
          </h2>
          <p className="text-[#30261C]/75 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            AMA Legal Solutions is headquartered in Gurugram, Haryana, with a robust network of offices and empanelled advocates spread across India. Our pan-India presence ensures that no matter where you are located, you have access to experienced legal professionals who understand local laws, regional courts, and state-specific regulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-[#30261C] mb-4">
                Why Our Location Network Matters
              </h3>
              <p className="text-[#30261C]/75 leading-relaxed mb-4">
                Legal matters are deeply local. A debt recovery case in Mumbai is handled differently from one in Delhi. A trademark dispute in Chennai may involve the Madras High Court, while a similar case in Kolkata falls under the Calcutta High Court&apos;s jurisdiction. Having advocates who are familiar with the local court procedures, judges, and regional legal nuances gives our clients a significant advantage.
              </p>
              <p className="text-[#30261C]/75 leading-relaxed mb-4">
                Our network spans metropolitan cities like New Delhi, Mumbai, Bengaluru, Chennai, Kolkata, and Jaipur, as well as states including Uttar Pradesh, Haryana, Punjab, Rajasthan, Uttarakhand, Tamil Nadu, Kerala, Telangana, Chandigarh, and Mizoram. This coverage allows us to serve clients from virtually any part of the country.
              </p>
              <p className="text-[#30261C]/75 leading-relaxed">
                Whether you need to send a legal notice, file a consumer complaint, register a trademark, negotiate a loan settlement, or represent yourself in a debt recovery tribunal, our local advocates are ready to assist you with the full weight of their regional expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#30261C] mb-4">
                Services Available Across All Locations
              </h3>
              <ul className="space-y-3 text-[#30261C]/75 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Loan Settlement:</strong> Negotiating one-time settlements (OTS) with banks and NBFCs for personal loans, home loans, business loans, and credit card outstanding.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Trademark Registration:</strong> Filing and prosecuting trademark applications before the Trade Marks Registry, including objection replies and opposition proceedings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Legal Notices:</strong> Drafting and sending legally sound notices for recovery, defamation, breach of contract, employment disputes, and consumer grievances.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Consumer Protection:</strong> Filing complaints before District Consumer Disputes Redressal Commissions and State Commissions across all our locations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Employment Law:</strong> Handling salary disputes, wrongful termination, full and final settlement, and workplace harassment cases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2A02A] font-bold mt-1">•</span>
                  <span>
                    <strong className="text-[#30261C]">Debt Recovery Tribunal (DRT):</strong> Representing clients in DRT proceedings across all major cities where DRTs are operational.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* City Highlights */}
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#30261C] mb-10 text-center">
            Our Key Office Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">New Delhi</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                Our Delhi office handles matters before the Delhi High Court, District Courts, NCLT New Delhi Bench, and the Intellectual Property Appellate Board (IPAB). Delhi is our primary hub for trademark filings, corporate litigation, and debt recovery cases.
              </p>
              <Link href="/locations/newdelhi" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Mumbai</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                Mumbai is India&apos;s financial capital, and our office here specializes in banking and finance law, SARFAESI proceedings, Debt Recovery Tribunal cases, and corporate insolvency matters before the NCLT Mumbai Bench.
              </p>
              <Link href="/locations/mumbai" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Bengaluru</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                Our Bengaluru office serves India&apos;s technology hub with expertise in IT contracts, startup legal compliance, intellectual property for tech companies, and employment disputes in the IT sector.
              </p>
              <Link href="/locations/bengaluru" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Chennai</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                The Chennai office handles matters before the Madras High Court, including trademark disputes, corporate litigation, consumer protection cases, and employment law matters for clients across Tamil Nadu.
              </p>
              <Link href="/locations/chennai" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Kolkata</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                Our Kolkata office serves clients in West Bengal and the eastern region, handling matters before the Calcutta High Court, including civil disputes, loan settlement negotiations, and trademark registration.
              </p>
              <Link href="/locations/kolkata" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D2A02A]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#30261C] mb-2">Jaipur</h3>
              <p className="text-[#30261C]/70 leading-relaxed text-sm">
                The Jaipur office covers Rajasthan, handling matters before the Rajasthan High Court. We specialize in property disputes, mining law, heritage property issues, and loan settlement for clients across the state.
              </p>
              <Link href="/locations/jaipur" className="text-[#D2A02A] font-semibold text-sm mt-3 inline-block hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 max-w-3xl mx-auto text-center bg-[#30261C] text-[#F8F5EC] p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Need Legal Help Near You?</h2>
          <p className="opacity-80 leading-relaxed mb-8">
            No matter where you are in India, our team is ready to assist you. Select your city above to learn more about our local services, or contact us directly to speak with an advocate in your region.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D2A02A] text-[#30261C] font-bold px-10 py-4 rounded-full hover:bg-[#D2A02A]/90 transition-colors"
          >
            Contact Us Today
          </Link>
        </section>
      </div>
    </div>
  );
}
