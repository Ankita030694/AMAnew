// SEO utility functions for AMA Legal Solutions

export interface HreflangConfig {
  path: string;
  languages: {
    [key: string]: string;
  };
}

export function generateHreflangTags(config: HreflangConfig) {
  const baseUrl = 'https://www.amalegalsolutions.com';
  const tags = [];
  
  // Add x-default
  tags.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: `${baseUrl}${config.path}`,
  });
  
  // Add language-specific tags
  Object.entries(config.languages).forEach(([lang, path]) => {
    tags.push({
      rel: 'alternate',
      hrefLang: lang,
      href: `${baseUrl}${path}`,
    });
  });
  
  return tags;
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.amalegalsolutions.com';
  return `${baseUrl}${path}`;
}

export function generateDateMeta() {
  return {
    'article:published_time': '2023-01-01T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
    'og:updated_time': new Date().toISOString(),
  };
}

export function generateRobotsMeta() {
  return {
    index: true,
    follow: true,
    googleBot: {
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  };
}

// Common hreflang configurations for different page types
export const hreflangConfigs = {
  home: {
    path: '/',
    languages: {
      'en': '/',
      'en-IN': '/',
    },
  },
  about: {
    path: '/about',
    languages: {
      'en': '/about',
      'en-IN': '/about',
    },
  },
  services: {
    path: '/services',
    languages: {
      'en': '/services',
      'en-IN': '/services',
    },
  },
  contact: {
    path: '/contact',
    languages: {
      'en': '/contact',
      'en-IN': '/contact',
    },
  },
  blog: {
    path: '/blog',
    languages: {
      'en': '/blog',
      'en-IN': '/blog',
    },
  },
  articles: {
    path: '/articles',
    languages: {
      'en': '/articles',
      'en-IN': '/articles',
    },
  },
};
