import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail from "./articledetail";

// Generate a slug function (same as in your other components)
const generateSlug = (title: string): string => {
  const truncatedTitle = title.slice(0, 30);
  return truncatedTitle
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
  const baseUrl = "https://www.amalegalsolutions.com"; // Update this with your domain


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
      canonical: `${baseUrl}/articles/${slug}`
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
       {/* Styled Disclaimer Section */}
       <div 
          className="my-12 px-6 py-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center"
        >
          <h3 className="text-[#5A4C33] text-xl font-medium mb-4 text-center">Disclaimer</h3>
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
              The information provided on this website www.amalegalsolutions.com is for general informational purposes only
              and should not be considered legal, financial, or professional advice. While we strive to ensure that the content is accurate and
              up to date, we do not guarantee the completeness, reliability, or accuracy of any information.
            </p>
            <p>
              Any reliance you place on the information provided is strictly at your own risk. AMA Legal
              Solutions, its founders, employees, or affiliates shall be held liable for any losses, damages, or legal consequences arising from
              the use of this website or any linked resources.
            </p>
            <p>
              The content on this website does not establish a client-attorney relationship. If you
              require legal or financial assistance, we strongly recommend consulting with a qualified professional. Any discussions,
              consultations, or assessments provided through this website or related services are for preliminary guidance only.
            </p>
            <p>
              Our services are subject to applicable laws and regulations, and results may vary depending on individual circumstances. We do not guarantee specific
              outcomes for loan settlements, debt negotiations, or legal proceedings.
            </p>
            <p>
              Additionally, this website may contain links to
              third-party websites for additional information or reference. We do not endorse or assume responsibility for the content, privacy
              policies, or practices of these external websites.
            </p>
            <p className="font-medium">
              By using this website, you acknowledge and agree to this disclaimer. If you do not agree with any part of this notice, please refrain from using our
              services. For legal assistance or inquiries, please contact us at <a href="mailto:Info@amalegalsolutions.com" className="text-[#D2A02A] hover:underline">Info@amalegalsolutions.com</a>
            </p>
          </div>
        </div>
    </>
  );
}
