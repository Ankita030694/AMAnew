import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail from "./blogdetail";

// Cache for blog data to avoid redundant Firebase calls
const blogCache = new Map<string, any>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper function to get cached blog data
async function getCachedBlog(slug: string) {
  const cacheKey = `blog-${slug}`;
  const cached = blogCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    // Use a more efficient query to get only the specific blog
    const blogsCollection = collection(db, "blogs");
    const blogQuery = query(blogsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(blogQuery);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      const blogData = {
        id: doc.id,
        ...data
      };
      
      // Cache the result
      blogCache.set(cacheKey, {
        data: blogData,
        timestamp: Date.now()
      });
      
      return blogData;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Dynamic metadata generation - optimized with caching
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  // Default metadata in case we can't find the blog
  let title = "Blog Post | AMA Legal Solutions";
  let description = "Read our latest insights and articles at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  // Base URL for canonical link
  const baseUrl = "https://amalegalsolutions.com";

  try {
    const blogData = await getCachedBlog(slug);
    
    if (blogData) {
      title = blogData.metaTitle || blogData.title || title;
      description = blogData.metaDescription || description;
      image = blogData.image || "";
      author = blogData.author || author;
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error);
  }

  const blogUrl = `${baseUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title,
      description,
      url: blogUrl,
      siteName: "AMA Legal Solutions",
      type: "article",
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
      creator: "@amalegalsolutions",
    },
  };
}

// Optimized Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Get the title from cached blog data
  let pageTitle = "Latest Insights from AMA Legal Solutions";

  try {
    const blogData = await getCachedBlog(slug);
    if (blogData) {
      pageTitle = blogData.title || pageTitle;
    }
  } catch (error) {
    console.error("Error fetching article title:", error);
  }

  return (
    <>
      <header>
        <h1 className="sr-only">AMA Legal Insights</h1>
        <ArticleDetail slug={slug} />
        {/* Styled Disclaimer Section */}
        <div className="my-12 px-6 py-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center">
          <h3 className="text-[#5A4C33] text-xl font-medium mb-4 text-center">
            Disclaimer
          </h3>
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
              The information provided on this website www.amalegalsolutions.com
              is for general informational purposes only and should not be
              considered legal, financial, or professional advice. While we
              strive to ensure that the content is accurate and up to date, we
              do not guarantee the completeness, reliability, or accuracy of any
              information.
            </p>
            <p>
              Any reliance you place on the information provided is strictly at
              your own risk. AMA Legal Solutions, its founders, employees, or
              affiliates shall be held liable for any losses, damages, or legal
              consequences arising from the use of this website or any linked
              resources.
            </p>
            <p>
              The content on this website does not establish a client-attorney
              relationship. If you require legal or financial assistance, we
              strongly recommend consulting with a qualified professional. Any
              discussions, consultations, or assessments provided through this
              website or related services are for preliminary guidance only.
            </p>
            <p>
              Our services are subject to applicable laws and regulations, and
              results may vary depending on individual circumstances. We do not
              guarantee specific outcomes for loan settlements, debt
              negotiations, or legal proceedings.
            </p>
            <p>
              Additionally, this website may contain links to third-party
              websites for additional information or reference. We do not
              endorse or assume responsibility for the content, privacy
              policies, or practices of these external websites.
            </p>
            <p className="font-medium">
              By using this website, you acknowledge and agree to this
              disclaimer. If you do not agree with any part of this notice,
              please refrain from using our services. For legal assistance or
              inquiries, please contact us at{" "}
              <a
                href="mailto:notify@amalegalsolutions.com"
                className="text-[#D2A02A] hover:underline"
              >
                notify@amalegalsolutions.com
              </a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
