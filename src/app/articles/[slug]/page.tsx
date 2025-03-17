import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import type { Metadata, ResolvingMetadata } from "next"
import ArticleDetail from "./articledetail"

// Generate a slug function (same as in your other components)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Dynamic metadata generation - updated to handle Promise-based params
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await props.params

  // Default metadata in case we can't find the blog
  let title = "Blog Post | AMA Legal Solutions"
  let description = "Read our latest insights and articles at AMA Legal Solutions"

  try {
    // Fetch blogs from Firebase
    const blogsCollection = collection(db, "articles")
    const querySnapshot = await getDocs(blogsCollection)

    // Find the matching blog by slug
    for (const doc of querySnapshot.docs) {
      const data = doc.data()
      const blogTitle = data.title || ""
      const blogSlug = generateSlug(blogTitle)

      if (blogSlug === slug) {
        // Use metaTitle and metaDescription if available, otherwise fallback to title
        title = data.metaTitle || data.title || title
        description = data.metaDescription || description
        break
      }
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error)
  }

  return {
    title,
    description,
  }
}

// Updated Page component to handle Promise-based params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // @ts-ignore - Ignore the type error if you can't modify ArticleDetail
  return <ArticleDetail slug={resolvedParams.slug} />;
}

