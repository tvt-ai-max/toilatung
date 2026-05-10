'use client';

import { useEffect, useState, useRef } from 'react';
import type { TocHeading } from '@/lib/mdx';

interface TableOfContentsProps {
  headings: TocHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    // Observe all heading elements for scroll spy
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 112; // sticky nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (headings.length < 2) return null;

  return (
    <aside className="w-64 flex-shrink-0 hidden xl:block sticky top-[100px] self-start" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="flex flex-col h-full">
        {/* Card */}
        <div className="glass rounded-2xl border border-white/8 overflow-hidden">
          {/* Header */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <i className="fas fa-list-ul text-indigo-400 text-[9px]" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-300">
                Mục lục
              </span>
            </div>
            <i
              className={`fas fa-chevron-down text-slate-500 text-[10px] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Items */}
          {isOpen && (
            <nav className="px-3 pb-4">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/8" />

                <ul
                  className="space-y-0.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1
                    [&::-webkit-scrollbar]:w-[3px]
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-white/10
                    [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {headings.map((h) => {
                    const isActive = activeId === h.id;
                    return (
                      <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
                        <button
                          onClick={() => handleClick(h.id)}
                          className={`w-full text-left flex items-start gap-3 px-2 py-2 rounded-xl text-xs leading-relaxed transition-all duration-150 group ${
                            isActive
                              ? 'text-indigo-300 bg-indigo-500/10'
                              : 'text-slate-500 hover:text-slate-300 hover:bg-white/4'
                          }`}
                        >
                          {/* Dot */}
                          <span
                            className={`mt-1.5 w-[7px] h-[7px] rounded-full flex-shrink-0 border transition-all duration-150 ${
                              isActive
                                ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_6px_rgba(123,97,255,0.8)]'
                                : 'bg-transparent border-white/20 group-hover:border-slate-400'
                            }`}
                          />
                          <span className={`${h.level === 3 ? 'font-medium' : 'font-bold'} line-clamp-2`}>
                            {h.text}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          )}
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-slate-500 hover:text-white hover:bg-white/8 text-xs font-bold transition-all duration-200"
        >
          <i className="fas fa-arrow-up text-[10px]" />
          Về đầu trang
        </button>
      </div>
    </aside>
  );
}
