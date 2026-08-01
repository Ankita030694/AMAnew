import GenericPage, { generateMetadata as genericGenerateMetadata } from "../[slug]/page";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugPromise = Promise.resolve({ slug: "law-firms-in-india" });
  const baseMetadata = await genericGenerateMetadata({ params: slugPromise }, parent);

  return {
    ...baseMetadata,
    title: "Top Indian Law Firms 2026 | Comprehensive Guide",
    description: "Explore the top Indian law firms for corporate, civil, and criminal matters. Find the right legal representation for your needs today.",
    keywords: ["indian law firms", "law firms in india", "top law firms india", "best legal firms in india", "corporate law firms"],
  };
}

export default async function Page() {
  const slugPromise = Promise.resolve({ slug: "law-firms-in-india" });
  return <GenericPage params={slugPromise} />;
}
