import GenericPage, { generateMetadata as genericGenerateMetadata } from "../[slug]/page";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugPromise = Promise.resolve({ slug: "handle-loan-recovery-agents-india" });
  const baseMetadata = await genericGenerateMetadata({ params: slugPromise }, parent);

  return {
    ...baseMetadata,
    title: "How to Handle Recovery Agents of Bank in India",
    description: "Are recovery agents of bank harassing you? Learn how to handle them legally, know your rights under RBI guidelines, and protect your peace of mind.",
    keywords: ["recovery agents of bank", "handle loan recovery agents india", "stop recovery agent harassment", "legal action against recovery agents"],
  };
}

export default async function Page() {
  const slugPromise = Promise.resolve({ slug: "handle-loan-recovery-agents-india" });
  return <GenericPage params={slugPromise} />;
}
