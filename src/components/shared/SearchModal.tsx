"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import Link from "next/link";

interface SearchItem {
  title: string;
  description: string;
  url: string;
  tags: string[];
  type: "blog" | "course" | "page";
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [allItems, setAllItems] = useState<SearchItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load data and listen for CMD+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setQuery("");
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    const handleOpenSearch = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpenSearch);
    };
  }, []);

  // Fetch search index when modal opens for the first time
  useEffect(() => {
    if (isOpen && !isLoaded) {
      fetch("/api/search")
        .then((res) => res.json())
        .then((data) => {
          setAllItems(data);
          setIsLoaded(true);
        })
        .catch((err) => console.error("Failed to load search index", err));
    }
  }, [isOpen, isLoaded]);

  // Handle search with Fuse.js
  const results = React.useMemo(() => {
    if (!query.trim()) return [];

    const fuse = new Fuse(allItems, {
      keys: ["title", "description", "tags"],
      threshold: 0.3,
      ignoreLocation: true,
    });

    return fuse.search(query).map((res) => res.item).slice(0, 8);
  }, [query, allItems]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsOpen(false);
          setQuery("");
        }}
      ></div>

      <div className="fixed inset-0 z-[1001] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4 pointer-events-none">
        <div
          className="w-full max-w-2xl bg-[var(--color-panel)] border border-[var(--color-line)] rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="relative flex items-center px-4 py-4 border-b border-[var(--color-line)]">
            <i className="fas fa-search text-slate-400 text-lg absolute left-5"></i>
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent border-none focus:outline-none text-white text-lg pl-10 pr-4 placeholder-slate-500"
              placeholder="Tìm kiếm bài viết, khóa học..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] text-slate-400 font-bold tracking-widest uppercase ml-2 transition"
            >
              ESC
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
            {!isLoaded && query.length > 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">
                <i className="fas fa-circle-notch fa-spin mr-2"></i> Đang tải dữ liệu...
              </div>
            )}

            {isLoaded && query.length > 0 && results.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">
                Không tìm thấy kết quả nào cho &quot;{query}&quot;
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-1">
                {results.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="mt-1">
                      {item.type === "course" && (
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <i className="fas fa-graduation-cap text-xs"></i>
                        </div>
                      )}
                      {item.type === "blog" && (
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <i className="fas fa-newspaper text-xs"></i>
                        </div>
                      )}
                      {item.type === "page" && (
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                          <i className="fas fa-id-badge text-xs"></i>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm group-hover:text-indigo-400 transition">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-1">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-slate-500 font-bold uppercase tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Empty State Instructions */}
            {query.length === 0 && (
              <div className="p-4 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-4 text-slate-400 text-2xl border border-white/5">
                  <i className="fas fa-keyboard"></i>
                </div>
                <p className="text-sm text-slate-300 font-medium mb-1">Gõ bất kỳ từ khóa nào để bắt đầu</p>
                <p className="text-xs text-slate-500">Ví dụ: &quot;Claude&quot;, &quot;Coaching&quot;, &quot;Vibe Coding&quot;</p>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-white/[0.02] border-t border-[var(--color-line)] px-4 py-3 flex items-center justify-between text-[10px] text-slate-500 font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white font-sans">↑</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white font-sans">↓</kbd> để chọn</span>
              <span className="flex items-center gap-1.5"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white font-sans">Enter</kbd> để mở</span>
            </div>
            <span>Powered by <strong className="text-slate-400">Tôi Là Tùng</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}
