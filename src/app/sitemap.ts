import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toilatung.com';

  const routes = [
    '',
    '/claude-master',
    '/claude-design',
    '/course',
    '/course/landing-page',
    '/course/phunulamchuai',
    '/course/vibe-coding',
    '/course/ai-coaching',
    '/blog',
    '/ve-tung',
    '/prompt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const slugs = getPostSlugs();
  const blogRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
