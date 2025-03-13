// app/ama-live/page.tsx
import { Suspense } from 'react';
import AmaLiveClient from './client';
import { getVideos } from '@/lib/api';


export const metadata = {
  title: 'AMA Legal Solutions: Providing Legal Services Globally',
  description: 'Learn more about our company and team',
}
// This is a Server Component that fetches data
export default async function AmaLivePage() {
  // Fetch data on the server
  const initialVideos = await getVideos(1, 9);
  
  return (
    <Suspense fallback={<VideosSkeleton />}>
      <AmaLiveClient initialVideos={initialVideos} />
    </Suspense>
  );
}

// Simple skeleton loader component
function VideosSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="mb-12 text-center">
        <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden border border-gray-100 h-full">
            <div className="bg-gray-200 animate-pulse h-[200px] rounded-t-xl"></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-gray-200 animate-pulse h-6 w-20 rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-24 rounded"></div>
              </div>
              <div className="bg-gray-200 animate-pulse h-6 w-full rounded mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}