import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  readingTime?: number; // minutes
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface PaginatedPosts {
  posts: BlogPostMeta[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
}

// ─── Slug helper ─────────────────────────────────────────────────────────────
export function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// ─── Reading time (avg 200 words/min Vietnamese) ──────────────────────────────
export function estimateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

// ─── Extract headings for Table of Contents ───────────────────────────────────
const TOC_SKIP_HEADINGS = /^(mục lục|table of contents|toc|contents|nội dung)$/i;

export function extractHeadings(content: string): TocHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  const seenIds = new Set<string>();
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const raw = match[2].trim();
    // Remove markdown formatting (bold, code, links)
    const text = raw.replace(/\*\*/g, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // Skip ToC section headings
    if (TOC_SKIP_HEADINGS.test(text.replace(/\(.*\)/g, '').trim())) continue;

    const id = slugify(text);
    if (!id || seenIds.has(id)) continue; // skip empty or duplicate IDs
    seenIds.add(id);

    headings.push({ id, text, level });
  }

  return headings;
}

// ─── Core getters ─────────────────────────────────────────────────────────────
export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.mdx') && !file.startsWith('.'));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let rawDate = data.date || data.pubDate || '';
    if (rawDate instanceof Date) {
      rawDate = rawDate.toISOString();
    } else if (typeof rawDate !== 'string') {
      rawDate = String(rawDate);
    }

    return {
      meta: {
        title: data.title || 'Untitled',
        date: rawDate,
        description: data.description || '',
        slug: realSlug,
        coverImage: data.coverImage,
        tags: data.tags || [],
        author: data.author || 'Tùng',
        readingTime: estimateReadingTime(content),
      },
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();
  const now = new Date();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map((post) => post.meta)
    .filter((meta) => {
      let dateString = meta.date;
      // If only YYYY-MM-DD is provided, assume midnight Vietnam time
      if (dateString.length === 10) {
        dateString += 'T00:00:00+07:00';
      }
      const postDate = new Date(dateString);
      return postDate <= now;
    })
    .sort((a, b) => {
      let dateA = a.date;
      if (dateA.length === 10) dateA += 'T00:00:00+07:00';
      let dateB = b.date;
      if (dateB.length === 10) dateB += 'T00:00:00+07:00';
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

  return posts;
}

// ─── All unique tags (sorted by frequency) ────────────────────────────────────
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};
  posts.forEach((p) => p.tags?.forEach((t) => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  return Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}

// ─── Paginated posts (with optional tag filter) ───────────────────────────────
export function getPaginatedPosts(
  page = 1,
  perPage = 6,
  tag?: string,
): PaginatedPosts {
  const all = getAllPosts();
  const filtered = tag ? all.filter((p) => p.tags?.includes(tag)) : all;
  const totalPosts = filtered.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const start = (safePage - 1) * perPage;
  return {
    posts: filtered.slice(start, start + perPage),
    totalPosts,
    totalPages,
    currentPage: safePage,
    perPage,
  };
}

// ─── Related posts (same tags, exclude current) ───────────────────────────────
export function getRelatedPosts(
  currentSlug: string,
  tags: string[] = [],
  limit = 3,
): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  if (tags.length === 0) return all.slice(0, limit);

  const scored = all.map((p) => ({
    post: p,
    score: (p.tags || []).filter((t) => tags.includes(t)).length,
  }));
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post)
    .concat(
      scored.filter((s) => s.score === 0).map((s) => s.post)
    )
    .slice(0, limit);
}

// ─── Prev / Next post (by date sort order) ────────────────────────────────────
export function getPrevNextPost(currentSlug: string): {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const all = getAllPosts(); // newest first
  const idx = all.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < all.length - 1 ? all[idx + 1] : null, // older = "prev"
    next: idx > 0 ? all[idx - 1] : null,               // newer = "next"
  };
}
