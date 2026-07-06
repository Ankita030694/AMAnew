import { notFound } from "next/navigation";
import { personalLoanBanks } from "@/data/personalLoanBanks";
import Tier1Template from "./Tier1Template";
import Tier2Template from "./Tier2Template";
import Tier3Template from "./Tier3Template";
import { Metadata } from "next";

export async function generateStaticParams() {
  return personalLoanBanks.map((bank) => ({
    slug: bank.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bank = personalLoanBanks.find((b) => b.slug === slug);
  
  if (!bank) {
    return {
      title: "Personal Loan Settlement | AMA Legal Solutions",
      description: "Expert legal assistance for personal loan settlement.",
    };
  }

  return {
    title: `${bank.name} Personal Loan Settlement: Stop Harassment Now`,
    description: `Struggling with ${bank.name} personal loan debt? Learn the exact legal process for ${bank.name} personal loan settlement, stop recovery agents, and get a valid NOC.`,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/personal-loan-settlement/${bank.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BankPersonalLoanSettlementPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bank = personalLoanBanks.find((b) => b.slug === slug);

  if (!bank) {
    notFound();
  }

  if (bank.tier === 1) {
    return <Tier1Template bankName={bank.name} slug={bank.slug} uniqueBankStrategy={bank.uniqueBankStrategy} />;
  } else if (bank.tier === 2) {
    return <Tier2Template bankName={bank.name} slug={bank.slug} uniqueBankStrategy={bank.uniqueBankStrategy} />;
  } else {
    return <Tier3Template bankName={bank.name} slug={bank.slug} uniqueBankStrategy={bank.uniqueBankStrategy} />;
  }
}
