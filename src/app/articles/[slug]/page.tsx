import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail from "./articledetail";

// Generate a slug function (same as in your other components)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Dynamic metadata generation - updated to handle Promise-based params
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  // Default metadata in case we can't find the blog
  let title = "Blog Post | AMA Legal Solutions";
  let description =
    "Read our latest insights and articles at AMA Legal Solutions";
    // Base URL for canonical link - replace with your actual domain
  const baseUrl = "https://amalegalsolutions.com"; // Update this with your domain


  try {
    // Fetch blogs from Firebase
    const blogsCollection = collection(db, "articles");
    const querySnapshot = await getDocs(blogsCollection);

    // Find the matching blog by slug
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const blogTitle = data.title || "";
      const blogSlug = generateSlug(blogTitle);

      if (blogSlug === slug) {
        // Use metaTitle and metaDescription if available, otherwise fallback to title
        title = data.metaTitle || data.title || title;
        description = data.metaDescription || description;
        break;
      }
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error);
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/blogs/${slug}`
    }
  };
}

// Updated Page component to handle Promise-based params
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Get the title from Firebase for the H1 tag
  let pageTitle = "Latest Insights from AMA Legal Solutions";
  
  try {
    // Fetch blogs from Firebase
    const blogsCollection = collection(db, "articles");
    const querySnapshot = await getDocs(blogsCollection);

    // Find the matching blog by slug
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const blogTitle = data.title || "";
      const blogSlug = generateSlug(blogTitle);

      if (blogSlug === slug) {
        pageTitle = data.title || pageTitle;
        break;
      }
    }
  } catch (error) {
    console.error("Error fetching article title:", error);
  }

  return (
    <>
      <h1 className="sr-only">AMA Legal Insights</h1>
      <ArticleDetail slug={slug} />
    </>
  );
}
