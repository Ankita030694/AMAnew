// app/ama-live/page.tsx
import { Suspense } from 'react';
import AmaLiveClient from './client';
import { db } from '@/lib/firebase'; // Import Firebase db
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export const metadata = {
  title: 'AMA Live | Legal Video Sessions in Gurugram',
  description: 'Watch our latest video sessions discussing employee benefits, insurance, wellness, and other legal topics, presented by AMA Legal Solutions in Gurugram',
  alternates: {
    canonical: 'https://amalegalsolutions.com/amalive', // Add your canonical URL here
  },
}

// Function to fetch videos from Firebase
async function fetchVideosFromFirebase(page = 1, pageSize = 9) {
  try {
    const videosRef = collection(db, 'amalive');
    const videosQuery = query(
      videosRef,
      orderBy('timestamp', 'desc'),
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(videosQuery);
    const videos = querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Handle timestamp formatting safely
      let dateStr = new Date().toISOString().split('T')[0]; // Default to today
      
      if (data.timestamp) {
        // Check if timestamp is a Firebase timestamp or a string
        if (typeof data.timestamp.toDate === 'function') {
          // Firebase Timestamp object
          dateStr = data.timestamp.toDate().toISOString().split('T')[0];
        } else if (typeof data.timestamp === 'string') {
          // Regular timestamp string
          dateStr = new Date(data.timestamp).toISOString().split('T')[0];
        } else if (data.timestamp instanceof Date) {
          // JavaScript Date object
          dateStr = data.timestamp.toISOString().split('T')[0];
        }
      }
      
      return {
        id: doc.id,
        description: data.description || '',
        timestamp: data.timestamp,
        title: data.title || 'Untitled',
        videoId: data.videoId || '',
        category: data.category || 'General',
        date: dateStr,
      };
    });
    
    return videos;
  } catch (error) {
    console.error('Error fetching videos from Firebase:', error);
    return [];
  }
}

// This is a Server Component that fetches data
export default async function AmaLivePage() {
  // Fetch data from Firebase
  const initialVideos = await fetchVideosFromFirebase(1, 9);
  
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