import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import ArticlePage from './articlecomp';
import { Suspense } from 'react';
import Navbar from "@/newcomp/Navbar";
import Link from 'next/link';
import { unstable_cache } from 'next/cache';

export const metadata = {
  title: 'Legal Articles | Insights by AMA Legal Solutions',
  description: 'Stay informed with the latest legal insights and articles from AMA Legal Solutions, covering topics like employee onboarding, insurance fraud, and more',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/articles',
  },
}

// Loading component
const ArticleLoading = () => (
  <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading articles...</p>
    </div>
  </div>
);

// Helper function
const truncateWords = (text: string, wordCount: number) => {
  if (!text) return '';
  const strippedText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = strippedText.split(/\s+/);
  if (words.length <= wordCount) return strippedText;
  return words.slice(0, wordCount).join(' ') + '...';
};

const getArticles = unstable_cache(async () => {
  try {
    const articlesCollection = collection(db, 'articles');
    const articlesQuery = query(articlesCollection, orderBy('created', 'desc'));
    const querySnapshot = await getDocs(articlesQuery);

    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || '',
        subtitle: data.subtitle || '',
        description: truncateWords(data.description || '', 20),
        fullDescription: truncateWords(data.description || '', 150),
        date: data.date || '',
        image: data.image || '',
        created: typeof data.created === 'number' ? data.created : (data.created?.toMillis ? data.created.toMillis() : Date.now()),
        metaTitle: data.metaTitle || '',
        metaDescription: data.metaDescription || '',
        slug: data.slug || ''
      };
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}, ['all-articles'], { revalidate: 300 }); // Cache for 5 mins

export default async function Page() {
  const articles = await getArticles();

  return (
    <main className='bg-[#F5F2EB] min-h-screen' style={{ fontFamily: "var(--font-polysans)" }}>
      <Navbar />

      <Suspense fallback={<ArticleLoading />}>
        <ArticlePage initialArticles={articles} />
      </Suspense>

      {/* SSR-rendered crawlable content — visible to search engines, hidden from users */}
      {articles.length > 0 && (
        <section
          aria-hidden="true"
          className="sr-only"
          data-nosnippet
        >
          <h2>All Legal Articles by AMA Legal Solutions</h2>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/articles/${article.slug}`}>
                  <h3>{article.title}</h3>
                </Link>
                {article.date && <time>{article.date}</time>}
                {article.subtitle && <p>{article.subtitle}</p>}
                <p>{article.fullDescription}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}