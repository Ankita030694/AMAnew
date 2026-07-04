import { notFound } from "next/navigation";
import { harassmentBanks } from "@/data/harassmentBanks";
import { harassmentCities } from "@/data/harassmentCities";
import BankHarassmentTemplate from "./BankHarassmentTemplate";
import CityHarassmentTemplate from "./CityHarassmentTemplate";
import { Metadata } from "next";

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
    return {
      title: `Stop ${bank.name} Recovery Agent Harassment | File Complaint & Send Legal Notice`,
      description: `Facing harassment from ${bank.name} recovery agents? Learn how to file a direct complaint to the Nodal Officer, stop abusive calls, and send a legal notice to ${bank.name}.`,
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
    return {
      title: `Stop Recovery Agent Harassment in ${city.name} | Local Legal Defense`,
      description: `Comprehensive legal guide for borrowers in ${city.name} facing harassment. Learn how to leverage the ${city.highCourt} and the ${city.policeAuthority} to stop abuse permanently.`,
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
    title: "Recovery Agent Harassment Complaint | AMA Legal Solutions",
    description: "Expert legal assistance for stopping recovery agent harassment.",
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
