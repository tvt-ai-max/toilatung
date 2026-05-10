import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/mdx';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-posts-heading">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
            <i className="fas fa-newspaper text-indigo-400 text-xs" />
          </div>
          <h2 id="related-posts-heading" className="text-lg font-black text-white uppercase tracking-wider">
            Bài Liên Quan
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-3 p-5 rounded-2xl glass border border-white/8 hover:border-indigo-500/30 hover:bg-white/4 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(123,97,255,0.12)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-500/8 blur-2xl rounded-full group-hover:bg-indigo-500/15 transition-colors pointer-events-none" />

            {/* Cover thumbnail */}
            {post.coverImage && (
              <div className="w-full h-32 rounded-xl overflow-hidden border border-white/5 bg-black/50 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={210}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            {/* Meta */}
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
              {post.readingTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="text-slate-600">{post.readingTime} phút</span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className="text-slate-200 font-black text-sm leading-snug line-clamp-3 group-hover:text-white transition-colors">
              {post.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
              {post.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-black/40 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(123,97,255,0.5)]">
              <i className="fas fa-arrow-right text-[9px] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
