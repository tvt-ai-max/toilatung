import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toilatung.com';
  const now = new Date().toISOString();

  // ── Static pages ──
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/ai-new', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/booking', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/course/ai-coaching', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/course/vibe-coding', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/course/phunulamchuai', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/course/landing-page', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/course/claude-masterclass', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/claude-master', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/claude-design', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ve-tung', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/prompt', priority: 0.7, changeFrequency: 'weekly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // ── Blog posts (with actual dates) ──
  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
