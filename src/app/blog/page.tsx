export const metadata = {
  title: 'Legal Blogs | Expert Opinions by AMA Legal Solutions',
  description: 'Explore expert legal blogs from AMA Legal Solutions, featuring insights on corporate law, compliance, contracts, and more to keep you informed.',
  alternates: {
    canonical: 'https://amalegalsolutions.com/blog',
  },
}

import BlogPage from './blogcomp';
import { Suspense } from 'react';
import PerformanceMonitor from '../../components/PerformanceMonitor';

// Enhanced loading component
const BlogLoading = () => (
  <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading blogs...</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <main className='bg-[#F5F2EB]'>
      <PerformanceMonitor />
      
      <Suspense fallback={<BlogLoading />}>
        <BlogPage />
      </Suspense>
    </main>
  );
}