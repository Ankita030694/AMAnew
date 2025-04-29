import { db } from '../../../lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Add a Blog interface
interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  created: number;
  author: string;
  image?: string;
}

export async function GET() {
  try {
    // Fetch the most recent blogs (limit to 20)
    const blogsQuery = query(
      collection(db, 'blogs'),
      orderBy('created', 'desc'),
      limit(20)
    );
    
    const blogsSnapshot = await getDocs(blogsQuery);
    // Use type assertion with the interface
    const blogs = blogsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];

    // Generate RSS XML
    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.amalegalsolutions.com';
    
    let rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>AMA Legal Solutions Blog</title>
    <link>${websiteUrl}</link>
    <description>Latest blog posts from AMA Legal Solutions</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
`;

    // Add items for each blog
    blogs.forEach(blog => {
      const pubDate = new Date(blog.created).toUTCString();
      const blogUrl = `${websiteUrl}/blog/${blog.slug}`;
      
      // Create a clean excerpt from the HTML content (first 150 chars)
      let excerpt = blog.description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .substring(0, 150);
      
      if (excerpt.length === 150) {
        excerpt += '...';
      }
      
      rssXml += `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${blogUrl}</link>
      <guid>${blogUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(excerpt)}</description>
      <content:encoded><![CDATA[${blog.description}]]></content:encoded>
      <dc:creator>${escapeXml(blog.author)}</dc:creator>
      ${blog.image ? `<enclosure url="${escapeXml(blog.image)}" type="image/jpeg" />` : ''}
    </item>`;
    });

    // Close the XML
    rssXml += `
  </channel>
</rss>`;

    // Return the RSS feed with proper content type
    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800'
      }
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    );
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}