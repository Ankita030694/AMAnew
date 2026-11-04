import GenericPage, { generateMetadata as genericGenerateMetadata } from "../[slug]/page";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugPromise = Promise.resolve({ slug: "sbi-credit-card-settlement-process" });
  const baseMetadata = await genericGenerateMetadata({ params: slugPromise }, parent);

  return {
    ...baseMetadata,
    title: "SBI Credit Card Settlement Process & Percentage 2026 | AMA",
    description: "Step-by-step SBI Card settlement process: how to request an OTS, the settlement percentage SBI usually accepts, the settlement letter, and CIBIL impact.",
    alternates: {
      canonical: "https://www.amalegalsolutions.com/blog/sbi-credit-card-settlement-process",
    },
    keywords: ["sbi credit card settlement", "sbi credit card settlement process", "credit card settlement sbi"],
  };
}

export default async function Page() {
  const slugPromise = Promise.resolve({ slug: "sbi-credit-card-settlement-process" });
  return <GenericPage params={slugPromise} />;
}
