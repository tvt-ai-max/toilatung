'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
  totalPosts: number;
}

export default function TagFilter({ tags, activeTag, totalPosts }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const INITIAL_COUNT = 14;
  const hasMore = tags.length > INITIAL_COUNT;
  
  // Tự động mở rộng nếu tag đang chọn nằm ngoài top 14
  const activeIndex = activeTag ? tags.indexOf(activeTag) : -1;
  const [isExpanded, setIsExpanded] = useState(activeIndex >= INITIAL_COUNT);

  const visibleTags = isExpanded ? tags : tags.slice(0, INITIAL_COUNT);

  const handleTag = useCallback(
    (tag: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('page'); // reset page when filtering
      if (tag) {
        params.set('tag', tag);
      } else {
        params.delete('tag');
      }
      router.push(`/blog?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleTag(null)}
        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
          !activeTag
            ? 'bg-indigo-500 text-white border-indigo-400 shadow-[0_0_15px_rgba(123,97,255,0.4)]'
            : 'bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10'
        }`}
      >
        Tất cả
      </button>
      {visibleTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTag(tag)}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
            activeTag === tag
              ? 'bg-indigo-500 text-white border-indigo-400 shadow-[0_0_15px_rgba(123,97,255,0.4)]'
              : 'bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10'
          }`}
        >
          #{tag}
        </button>
      ))}
      
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border bg-transparent text-slate-500 border-dashed border-white/20 hover:border-white/40 hover:text-white ml-2"
        >
          {isExpanded ? 'Thu gọn ↑' : `+${tags.length - INITIAL_COUNT} chủ đề khác ↓`}
        </button>
      )}
    </div>
  );
}
