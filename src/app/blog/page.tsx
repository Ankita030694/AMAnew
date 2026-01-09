import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import BlogPage from './blogcomp';
import { Suspense } from 'react';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import Navbar from "@/newcomp/Navbar";
import { unstable_cache } from 'next/cache';

export const metadata = {
  title: 'Legal Blogs | Expert Opinions by AMA Legal Solutions',
  description: 'Explore expert legal blogs from AMA Legal Solutions, featuring insights on corporate law, compliance, contracts, and more to keep you informed.',
  alternates: {
    canonical: 'https://amalegalsolutions.com/blog',
  },
}

// Enhanced loading component
const BlogLoading = () => (
  <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading blogs...</p>
    </div>
  </div>
);

// Helper function
const truncateWords = (text: string, wordCount: number) => {
  if (!text) return '';
  const strippedText = text.replace(/<[^>]*>/g, ' ');
  const words = strippedText.split(/\s+/);
  if (words.length <= wordCount) return strippedText;
  return words.slice(0, wordCount).join(' ') + '...';
};

const getBlogs = unstable_cache(async () => {
    try {
        const blogsCollection = collection(db, 'blogs');
        const blogsQuery = query(blogsCollection, orderBy('created', 'desc'));
        const querySnapshot = await getDocs(blogsQuery);

        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title || '',
                subtitle: data.subtitle || '',
                description: truncateWords(data.description || '', 20),
                date: data.date || '',
                image: data.image || '',
                // Handle different timestamp formats or missing created date
                created: typeof data.created === 'number' ? data.created : (data.created?.toMillis ? data.created.toMillis() : Date.now()),
                metaTitle: data.metaTitle || '',
                metaDescription: data.metaDescription || '',
                slug: data.slug || ''
            };
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}, ['all-blogs'], { revalidate: 300 }); // Cache for 5 mins

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <main className='bg-[#F5F2EB]' style={{ fontFamily: "var(--font-polysans)" }}>
      <Navbar />
      <PerformanceMonitor />
      
      <Suspense fallback={<BlogLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <BlogPage initialBlogs={blogs} />
      </Suspense>
    </main>
  );
}