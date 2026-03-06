export const metadata = {
  title: 'Legal Articles | Insights by AMA Legal Solutions',
  description: 'Stay informed with the latest legal insights and articles from AMA Legal Solutions, covering topics like employee onboarding, insurance fraud, and more',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/articles', // Add your canonical URL here
  },
}

// Then import and use your client component:
import ArticlePage from './articlecomp';
import Navbar from "@/newcomp/Navbar";

export default function Page() {
  return (
    <main className='bg-[#F5F2EB] min-h-screen' style={{ fontFamily: "var(--font-polysans)" }}>
      <Navbar />
      <ArticlePage />
    </main>
  );
}