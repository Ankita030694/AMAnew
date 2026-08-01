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
    title: "SBI Credit Card Settlement: Reduce Debt & Regain Financial Stability",
    description: "Learn about the SBI credit card settlement process to reduce debt and avoid legal issues. Take control of your finances.",
    keywords: ["sbi credit card settlement", "sbi credit card settlement process", "credit card settlement sbi"],
  };
}

export default async function Page() {
  const slugPromise = Promise.resolve({ slug: "sbi-credit-card-settlement-process" });
  return <GenericPage params={slugPromise} />;
}
