import Head from 'next/head';
import { generateHreflangTags, HreflangConfig } from '@/lib/seo';

interface SEOHeadProps {
  hreflangConfig?: HreflangConfig;
  additionalTags?: React.ReactNode;
}

export default function SEOHead({ hreflangConfig, additionalTags }: SEOHeadProps) {
  const hreflangTags = hreflangConfig ? generateHreflangTags(hreflangConfig) : [];

  return (
    <Head>
      {/* Hreflang tags for international SEO */}
      {hreflangTags.map((tag, index) => (
        <link
          key={index}
          rel={tag.rel}
          hrefLang={tag.hrefLang}
          href={tag.href}
        />
      ))}
      
      {/* Additional SEO tags */}
      {additionalTags}
    </Head>
  );
}
