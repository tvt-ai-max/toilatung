import { getPostBySlug, getPostSlugs, getRelatedPosts, getPrevNextPost, extractHeadings } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import TableOfContents from '@/components/blog/TableOfContents';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import PrevNextPost from '@/components/blog/PrevNextPost';
import RelatedPosts from '@/components/blog/RelatedPosts';
import JsonLd, { buildBlogPostSchema } from '@/components/seo/JsonLd';
import PostCTA from '@/components/blog/PostCTA';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Not Found' };

  const canonicalUrl = `https://toilatung.com/blog/${resolvedParams.slug}`;
  const imageUrl = post.meta.coverImage
    ? `https://toilatung.com${post.meta.coverImage.startsWith('/') ? post.meta.coverImage : '/' + post.meta.coverImage}`
    : 'https://toilatung.com/images/home-og.webp';

  return {
    title: `${post.meta.title} — Tôi Là Tùng`,
    description: post.meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: canonicalUrl,
      siteName: 'Tôi Là Tùng',
      locale: 'vi_VN',
      type: 'article',
      publishedTime: post.meta.date,
      modifiedTime: post.meta.date,
      authors: ['Nguyễn Thanh Tùng'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.meta.title} | Tôi là Tùng, toilatung, Nguyễn Thanh Tùng, Tùng Sóc Sơn`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: [imageUrl],
      creator: '@toilatung',
    },
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// Extract plain text from React children for ID generation
const getChildText = (children: any): string => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getChildText).join('');
  if (children?.props?.children) return getChildText(children.props.children);
  return '';
};

const slugifyLocal = (str: any): string => {
  const text = typeof str === 'string' ? str : getChildText(str);
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const TOC_HEADINGS_RE = /^(mục lục|table of contents|toc|nội dung)/i;

const components = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-black text-white mt-12 mb-6 tracking-tight" {...props} />,
  h2: ({ children, ...props }: any) => {
    const plainText = getChildText(children).replace(/\(.*\)/g, '').trim();
    // Hide the inline "Mục lục" section — sidebar ToC replaces it
    if (TOC_HEADINGS_RE.test(plainText)) return null;
    return (
      <h2
        id={slugifyLocal(children)}
        className="text-2xl font-black text-white mt-10 mb-5 border-b border-white/10 pb-2 scroll-mt-28"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => (
    <h3
      id={slugifyLocal(children)}
      className="text-xl font-bold text-slate-200 mt-8 mb-4 scroll-mt-28"
      {...props}
    >
      {children}
    </h3>
  ),
  p: (props: any) => <p className="text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base" {...props} />,
  ul: ({ children, ...props }: any) => {
    // Recursively find all href values in children
    const findHrefs = (node: any): string[] => {
      if (!node || typeof node !== 'object') return [];
      if (node.props?.href) return [node.props.href];
      const kids = node.props?.children;
      if (!kids) return [];
      if (Array.isArray(kids)) return kids.flatMap(findHrefs);
      return findHrefs(kids);
    };
    const hrefs = findHrefs({ props: { children } });
    // Hide if all links are anchor-only (#section) — this is an inline ToC list
    const isTocList = hrefs.length > 0 && hrefs.every((h) => typeof h === 'string' && h.startsWith('#'));
    if (isTocList) return null;
    return <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300" {...props}>{children}</ul>;
  },
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300" {...props} />,
  li: (props: any) => <li className="text-slate-300 ml-4" {...props} />,
  a: (props: any) => <a className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-500/30 transition-colors" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/10 p-6 rounded-r-2xl text-slate-300 italic mb-6 my-8" {...props} />
  ),
  code: (props: any) => (
    <code className="font-mono text-sm bg-black border border-white/10 text-emerald-400 px-1.5 py-0.5 rounded-md" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-black border border-white/10 rounded-2xl p-6 overflow-x-auto mb-8 font-mono text-sm text-slate-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]" {...props} />
  ),
  strong: (props: any) => <strong className="font-black text-white" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/10 shadow-lg bg-white/[0.02]">
      <table className="w-full text-sm text-left border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-white/[0.04] border-b border-white/10" {...props} />,
  th: (props: any) => <th className="px-5 py-4 text-xs font-bold text-slate-200 uppercase tracking-wider whitespace-nowrap" {...props} />,
  td: (props: any) => <td className="px-5 py-4 text-slate-300 border-t border-white/5 whitespace-normal" {...props} />,
  tr: (props: any) => <tr className="hover:bg-white/[0.04] transition-colors group" {...props} />,
  hr: () => <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-10" />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.meta.slug, post.meta.tags || [], 3);
  const { prev, next } = getPrevNextPost(post.meta.slug);

  const blogSchema = buildBlogPostSchema({
    title: post.meta.title,
    description: post.meta.description,
    slug: resolvedParams.slug,
    coverImage: post.meta.coverImage,
    datePublished: post.meta.date,
  });

  return (
    <>
      {/* JSON-LD Structured Data — Article + BreadcrumbList */}
      <JsonLd data={blogSchema} />

      {/* Reading progress bar — client component */}
      <ReadingProgressBar />

      <div className="min-h-screen bg-black pt-28 pb-20 px-4 md:px-6">
        {/* ── 3-column layout: [TOC] [Article] [spacer] ── */}
        <div className="max-w-7xl mx-auto flex gap-8 items-start justify-center">

          {/* LEFT — Table of Contents (sticky sidebar) */}
          <TableOfContents headings={headings} />

          {/* CENTER — Main article */}
          <article className="w-full max-w-3xl min-w-0">

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-8 group"
            >
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Quay lại Blog
            </Link>

            {/* Article header */}
            <header className="mb-12">
              {/* Tags + date row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  {(post.meta.date || '').split('T')[0].split('-').reverse().join('/')}
                </div>
                {post.meta.readingTime && (
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
                    <i className="fas fa-clock text-[8px]" />
                    {post.meta.readingTime} phút đọc
                  </div>
                )}
                {post.meta.tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 rounded-full bg-black/40 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-wider hover:border-indigo-500/40 hover:text-indigo-400 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                {post.meta.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                {post.meta.description}
              </p>
            </header>

            {/* Cover image */}
            {post.meta.coverImage && (
              <div className="w-full rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.meta.coverImage}
                  alt={`${post.meta.title} | Tôi là Tùng, toilatung, Nguyễn Thanh Tùng, Tùng Sóc Sơn`}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

            {/* MDX Content */}
            <div className="prose prose-invert max-w-none">
              <MDXRemote 
                source={post.content} 
                components={components} 
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>

            {/* ── Smart CTA block (auto-selected by cluster) ── */}
            <PostCTA tags={post.meta.tags || []} />

            {/* Author footer */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-indigo-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <i className="fas fa-user-tie text-white text-lg" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold">Viết bởi {post.meta.author}</div>
                  <div className="text-slate-500 text-xs">Founder, TVT Agency</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/30 hover:border-slate-500/50 transition-all" aria-label="TikTok">
                  <i className="fab fa-tiktok" />
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/50 transition-all" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/50 transition-all" aria-label="Pinterest">
                  <i className="fab fa-pinterest-p" />
                </button>
                <button
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 transition-all"
                  aria-label="Sao chép link"
                >
                  <i className="fas fa-link" />
                </button>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <PrevNextPost prev={prev} next={next} />

            {/* Related posts */}
            <RelatedPosts posts={related} />

          </article>

          {/* RIGHT spacer — keeps article centered when TOC is showing */}
          <div className="w-64 flex-shrink-0 hidden xl:block" aria-hidden />

        </div>
      </div>
    </>
  );
}
