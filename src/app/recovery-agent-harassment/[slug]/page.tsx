import { notFound } from "next/navigation";
import { harassmentBanks } from "@/data/harassmentBanks";
import { harassmentCities } from "@/data/harassmentCities";
import BankHarassmentTemplate from "./BankHarassmentTemplate";
import CityHarassmentTemplate from "./CityHarassmentTemplate";
import { Metadata } from "next";
import { getHarassmentSEO } from "@/lib/seo";

export async function generateStaticParams() {
  const bankSlugs = harassmentBanks.map((bank) => ({ slug: bank.slug }));
  const citySlugs = harassmentCities.map((city) => ({ slug: city.slug }));
  return [...bankSlugs, ...citySlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const bank = harassmentBanks.find((b) => b.slug === slug);
  const city = harassmentCities.find((c) => c.slug === slug);
  
  if (bank) {
    const { title, description } = getHarassmentSEO(bank.name, slug, true);
    return {
      title,
      description,
      alternates: {
        canonical: `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
  
  if (city) {
    const { title, description } = getHarassmentSEO(city.name, slug, false);
    return {
      title,
      description,
      alternates: {
        canonical: `https://www.amalegalsolutions.com/recovery-agent-harassment/${city.slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: "Stop Recovery Harassment | AMA Legal Solutions",
    description: "Expert legal assistance for stopping illegal bank and recovery agent harassment in India.",
  };
}

export default async function HarassmentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const bank = harassmentBanks.find((b) => b.slug === slug);
  if (bank) {
    return <BankHarassmentTemplate bank={bank} />;
  }

  const city = harassmentCities.find((c) => c.slug === slug);
  if (city) {
    return <CityHarassmentTemplate city={city} />;
  }

  notFound();
}
