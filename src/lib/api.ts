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
      videoId: '36mrxbArr4I',
      category: 'Benefits',
      date: '2025-02-15'
    },
    {
      id: 2,
      title: 'Health Insurance Coverage',
      videoId: 'YM8ePJEKoFo',
      category: 'Insurance',
      date: '2025-02-12'
    },
    {
        id: 3,
        title: 'Health Insurance Coverage',
        videoId: 'zGcdOfF1N1U',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 4,
        title: 'Health Insurance Coverage',
        videoId: 'Y9Ll3AtJXvw',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 5,
        title: 'Health Insurance Coverage',
        videoId: 'Qr2DOYeHpys',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 6,
        title: 'Health Insurance Coverage',
        videoId: '3tGGVpSRGs0',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 7,
        title: 'Health Insurance Coverage',
        videoId: 'JLOh3J33h5o',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 8,
        title: 'Health Insurance Coverage',
        videoId: 'Ctom5iv6ElU',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 9,
        title: 'Health Insurance Coverage',
        videoId: 'zGcdOfF1N1U',
        category: 'Insurance',
        date: '2025-02-12'
      },
      {
        id: 10,
        title: 'Health Insurance Coverage',
        videoId: 'zGcdOfF1N1U',
        category: 'Insurance',
        date: '2025-02-12'
      },
     
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