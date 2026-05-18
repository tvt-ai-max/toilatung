'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import type { BlogCategory } from '@/lib/mdx';

const CATEGORY_ICONS: Record<BlogCategory, string> = {
  'Vibe Coding': 'fa-code',
  'AI System Design': 'fa-sitemap',
  'AI Tools': 'fa-wrench',
  'Marketing & Growth': 'fa-chart-line',
  'Business & Monetization': 'fa-briefcase',
};

interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory?: BlogCategory;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategory = useCallback(
    (cat: BlogCategory | null) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('page');
      params.delete('tag'); // reset tag when switching category
      if (cat) {
        params.set('category', cat);
      } else {
        params.delete('category');
      }
      router.push(`/blog?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleCategory(null)}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
          !activeCategory
            ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-[0_0_12px_rgba(123,97,255,0.3)]'
            : 'bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/30 hover:text-white hover:bg-indigo-500/10'
        }`}
      >
        <i className="fas fa-th-large text-[9px]" />
        Tất cả
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategory(cat)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
            activeCategory === cat
              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-[0_0_12px_rgba(123,97,255,0.3)]'
              : 'bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/30 hover:text-white hover:bg-indigo-500/10'
          }`}
        >
          <i className={`fas ${CATEGORY_ICONS[cat]} text-[9px]`} />
          {cat}
        </button>
      ))}
    </div>
  );
}
