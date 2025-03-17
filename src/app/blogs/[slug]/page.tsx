import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { Metadata } from 'next';

// Generate a slug function (same as in your other components)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Type for generateMetadata params
type Props = {
  params: { slug: string }
}

// Dynamic metadata generation
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Await the params object
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
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
import BlogDetail from './blogdetail';

export default function Page() {
  return <BlogDetail />;
}