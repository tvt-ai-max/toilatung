import Link from 'next/link';
import { Suspense } from 'react';
import { getAllTags, getPaginatedPosts } from '@/lib/mdx';
import TagFilter from '@/components/blog/TagFilter';
import Pagination from '@/components/blog/Pagination';

export const metadata = {
  title: 'Blog — Tôi Là Tùng',
  description: 'Góc chia sẻ kiến thức về AI Marketing, Vibe Coding và Tư duy phát triển sản phẩm.',
};

interface BlogIndexProps {
  searchParams: Promise<{ page?: string; tag?: string }>;
}

export default async function BlogIndex({ searchParams }: BlogIndexProps) {
  const { page, tag } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const activeTag = tag || undefined;
  const POSTS_PER_PAGE = 6;

  const { posts, totalPosts, totalPages } = getPaginatedPosts(currentPage, POSTS_PER_PAGE, activeTag);
  const allTags = getAllTags();

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <i className="fas fa-pen-nib mr-2" /> TVT Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Góc Chia Sẻ Về <span className="gradient-text">AI &amp; Branding</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hành trình khám phá sức mạnh của AI trong việc tự động hóa công việc, thiết kế giao diện và tư duy phát triển sản phẩm thực chiến.
          </p>
        </header>

        {/* ── Post Count (header area) ── */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-500 text-sm">
            {activeTag ? (
              <>
                Tìm thấy <span className="text-white font-bold">{totalPosts} bài</span>{' '}
                về <span className="text-indigo-400 font-bold">#{activeTag}</span>
              </>
            ) : (
              <><span className="text-white font-bold">{totalPosts} bài viết</span> trong kho</>
            )}
          </span>
        </div>

        {/* ── Post List ── */}
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-slate-500 text-xl" />
            </div>
            <p className="text-slate-400 font-bold">Không tìm thấy bài viết nào</p>
            <p className="text-slate-600 text-sm mt-2">Thử chọn tag khác hoặc quay về tất cả bài</p>
            <Link href="/blog" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-sm font-bold hover:bg-indigo-500/25 transition-colors">
              <i className="fas fa-arrow-left text-xs" /> Xem tất cả bài
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                <article
                  className="glass rounded-3xl p-6 md:p-8 border border-white/5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/5 hover:shadow-[0_10px_40px_rgba(123,97,255,0.1)] hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Rank badge for first 3 */}
                  {index < 3 && (
                    <div className={`absolute top-4 left-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border z-20 ${
                      index === 0 ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                      : index === 1 ? 'bg-slate-400/20 border-slate-400/40 text-slate-300'
                      : 'bg-orange-600/20 border-orange-600/40 text-orange-400'
                    }`}>
                      {index + 1}
                    </div>
                  )}

                  {/* BG glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    {/* Cover image */}
                    {post.coverImage && (
                      <div className="w-full md:w-52 h-32 md:h-auto flex-shrink-0 rounded-2xl overflow-hidden border border-white/5 bg-black/50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          width={1200}
                          height={630}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 py-1 flex flex-col justify-between">
                      {/* Meta row */}
                      <div>
                        <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                          <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600" />
                          <span className="text-indigo-400">{post.author}</span>
                          {post.readingTime && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-slate-600" />
                              <span className="flex items-center gap-1 text-slate-500 normal-case font-bold">
                                <i className="fas fa-clock text-[9px]" />
                                {post.readingTime} phút đọc
                              </span>
                            </>
                          )}
                        </div>

                        <h2 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-all line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-5 line-clamp-2 text-sm md:text-base">
                          {post.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-bold text-slate-400 tracking-wider"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all shadow-[0_0_0_rgba(123,97,255,0)] group-hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]">
                        <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* ── Tag Filter (hashtags) ── */}
        <div className="mt-14 pt-10 border-t border-white/8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500">Lọc theo chủ đề</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <Suspense
            fallback={
              <div className="flex flex-wrap gap-2 animate-pulse">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-8 w-20 rounded-full bg-white/5" />
                ))}
              </div>
            }
          >
            <TagFilter tags={allTags} activeTag={activeTag} totalPosts={totalPosts} />
          </Suspense>
        </div>

        {/* ── Pagination ── */}
        <Pagination currentPage={currentPage} totalPages={totalPages} tag={activeTag} />

        {/* ── Page info ── */}
        {totalPages > 1 && (
          <p className="text-center text-slate-600 text-xs mt-6">
            Trang {currentPage} / {totalPages} — {totalPosts} bài viết
          </p>
        )}

      </div>
    </div>
  );
}
