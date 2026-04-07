import { NextResponse } from 'next/server';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get('q')?.toLowerCase() || '';

    // Fetch all form submissions from Firestore (ON THE SERVER)
    // In a real production app with millions of records, we'd use indexes or a dedicated aggregation table
    const formRef = collection(db, 'form');
    const q = query(formRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);

    const urlCounts: Record<string, number> = {};
    let totalLeads = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const url = data.submissionUrl || 'Unknown Source';

      // Perform grouping on the server
      urlCounts[url] = (urlCounts[url] || 0) + 1;
      totalLeads++;
    });

    // Apply search/filtering on the server
    const aggregatedResults = Object.entries(urlCounts)
      .map(([url, count]) => ({ url, count }))
      .filter(item => item.url.toLowerCase().includes(searchTerm))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json({
      totalLeads,
      sources: aggregatedResults,
      uniqueSources: Object.keys(urlCounts).length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('SERVER SIDE ANALYTICS ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data on the server side' },
      { status: 500 }
    );
  }
}
