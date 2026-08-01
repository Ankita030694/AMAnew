import GenericPage, { generateMetadata as genericGenerateMetadata } from "../[slug]/page";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugPromise = Promise.resolve({ slug: "understanding-rbi-guidelines-recovery-agents" });
  const baseMetadata = await genericGenerateMetadata({ params: slugPromise }, parent);

  return {
    ...baseMetadata,
    title: "RBI Guidelines for Recovery Agents Home Visit & Loan Recovery",
    description: "Understand the strict RBI loan recovery guidelines and rules for recovery agents home visits. Protect yourself from harassment and learn how to complain legally.",
    keywords: ["rbi loan recovery guidelines", "rbi guidelines for recovery agents home visit", "rbi guidelines recovery agents", "stop recovery agent harassment", "legal action against recovery agents"],
  };
}

export default async function Page() {
  const slugPromise = Promise.resolve({ slug: "understanding-rbi-guidelines-recovery-agents" });
  return <GenericPage params={slugPromise} />;
}
