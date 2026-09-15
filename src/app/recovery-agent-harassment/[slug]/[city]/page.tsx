import { notFound } from "next/navigation";
import { harassmentBanks } from "@/data/harassmentBanks";
import { harassmentCities } from "@/data/harassmentCities";
import BankCityHarassmentTemplate from "./BankCityHarassmentTemplate";
import { Metadata } from "next";
import { getBankCityHarassmentSEO } from "@/lib/seo";

// ISR: Revalidate cached pages every 24 hours
export const revalidate = 86400;

// Allow on-demand generation for bank+city combos not pre-built
export const dynamicParams = true;

export async function generateStaticParams() {
  // Pre-build top 20 banks x top 10 cities at build time
  // Remaining pages will be generated on-demand and cached via ISR
  const topBanks = harassmentBanks.slice(0, 20);
  const topCities = harassmentCities.slice(0, 10);

  const params: { slug: string; city: string }[] = [];
  
  for (const bank of topBanks) {
    for (const city of topCities) {
      params.push({ slug: bank.slug, city: city.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  
  const bank = harassmentBanks.find((b) => b.slug === slug);
  const city = harassmentCities.find((c) => c.slug === citySlug);
  
  if (!bank || !city) {
    return {
      title: "Recovery Agent Harassment Complaint | AMA Legal Solutions",
      description: "Expert legal assistance for stopping recovery agent harassment in India.",
    };
  }

  const { title, description } = getBankCityHarassmentSEO(bank.name, city.name, slug, citySlug);
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}/${city.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HarassmentBankCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city: citySlug } = await params;
  
  const bank = harassmentBanks.find((b) => b.slug === slug);
  const city = harassmentCities.find((c) => c.slug === citySlug);
  
  if (!bank || !city) {
    notFound();
  }

  return <BankCityHarassmentTemplate bank={bank} city={city} />;
}
