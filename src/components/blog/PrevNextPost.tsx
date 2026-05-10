import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/mdx';

interface PrevNextPostProps {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

export default function PrevNextPost({ prev, next }: PrevNextPostProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Điều hướng bài viết"
      className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Prev (older post) */}
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col gap-2 p-5 rounded-2xl glass border border-white/8 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <i className="fas fa-arrow-left text-indigo-400 group-hover:-translate-x-1 transition-transform duration-200" />
            Bài trước
          </div>
          <p className="text-slate-200 font-bold text-sm leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {prev.title}
          </p>
          {prev.readingTime && (
            <span className="text-slate-600 text-[11px]">{prev.readingTime} phút đọc</span>
          )}
        </Link>
      ) : (
        <div /> // empty grid cell
      )}

      {/* Next (newer post) */}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col gap-2 p-5 rounded-2xl glass border border-white/8 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 sm:items-end sm:text-right"
        >
          <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest sm:flex-row-reverse">
            <i className="fas fa-arrow-right text-pink-400 group-hover:translate-x-1 transition-transform duration-200" />
            Bài tiếp theo
          </div>
          <p className="text-slate-200 font-bold text-sm leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {next.title}
          </p>
          {next.readingTime && (
            <span className="text-slate-600 text-[11px]">{next.readingTime} phút đọc</span>
          )}
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
