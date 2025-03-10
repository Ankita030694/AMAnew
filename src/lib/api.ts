// lib/api.ts

// Define the Video type
export interface Video {
    id: number;
    title: string;
    videoId: string;
    category: string;
    date: string;
  }
  
  // Mock database of videos - in a real app, this would be fetched from an API
  const mockVideosDatabase: Video[] = [
    {
      id: 1,
      title: 'Employee Benefits Explained',
      videoId: 'dQw4w9WgXcQ',
      category: 'Benefits',
      date: '2025-02-15'
    },
    {
      id: 2,
      title: 'Health Insurance Coverage',
      videoId: 'dQw4w9WgXcQ',
      category: 'Insurance',
      date: '2025-02-12'
    },
    // Include all your videos here
    // ...
    {
      id: 18,
      title: 'Managing Healthcare Costs',
      videoId: 'dQw4w9WgXcQ',
      category: 'Financial',
      date: '2024-12-28'
    }
  ];
  
  /**
   * Get videos with pagination
   * @param page The page number (starting from 1)
   * @param limit Number of videos per page
   * @returns Promise that resolves to an array of videos for the requested page
   */
  export async function getVideos(page: number = 1, limit: number = 9): Promise<Video[]> {
    // In a real app, this would be a fetch call to your API
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const start = (page - 1) * limit;
    const end = start + limit;
    return mockVideosDatabase.slice(start, end);
  }