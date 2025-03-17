export const metadata = {
  title: 'Legal Blogs | Expert Opinions by AMA Legal Solutions',
  description: 'Explore expert legal blogs from AMA Legal Solutions, featuring insights on corporate law, compliance, contracts, and more to keep you informed.',
  alternates: {
    canonical: 'https://amalegalsolutions.com/blogs', // Add your canonical URL here
  },
}

// Then import and use your client component:
import BlogPage from './blogcomp';

export default function Page() {
  return <BlogPage />;
}