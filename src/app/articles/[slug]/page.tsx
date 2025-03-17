import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { Metadata, ResolvingMetadata } from 'next';

// Generate a slug function (same as in your other components)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Dynamic metadata generation using proper Next.js types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata(
  { params }: { params: { slug: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  
  // Default metadata in case we can't find the blog
  let title = 'Blog Post | AMA Legal Solutions';
  let description = 'Read our latest insights and articles at AMA Legal Solutions';
  
  try {
    // Fetch blogs from Firebase
    const blogsCollection = collection(db, 'blogs');
    const querySnapshot = await getDocs(blogsCollection);
    
    // Find the matching blog by slug
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const blogTitle = data.title || '';
      const blogSlug = generateSlug(blogTitle);
      
      if (blogSlug === slug) {
        // Use metaTitle and metaDescription if available, otherwise fallback to title
        title = data.metaTitle || data.title || title;
        description = data.metaDescription || description;
        break;
      }
    }
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
  }
  
  return {
    title,
    description,
  };
}

// Then import and use your client component:
import ArticleDetail from './articledetail';

export default function Page() {
  return <ArticleDetail />;
}