"use client";

import { useState, useMemo } from "react";
import { AINewsItem, groupNewsByDate } from "@/lib/ai-news-utils";
import NewsAccordionItem from "./NewsAccordionItem";
import { useBookmarks } from "@/lib/hooks/useBookmarks";

interface Props {
  initialNews: AINewsItem[];
  allTags: string[];
}

export default function AINewFeed({ initialNews, allTags }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");

  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();

  const filteredNews = useMemo(() => {
    let filtered = initialNews;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.tldr.toLowerCase().includes(q) ||
          item.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (selectedTag !== "all") {
      if (selectedTag === "saved") {
        filtered = filtered.filter(item => bookmarks.includes(item.id));
      } else {
        filtered = filtered.filter(item => item.tags.includes(selectedTag));
      }
    }

    if (selectedTime !== "all") {
      const threshold = new Date();
      threshold.setDate(threshold.getDate() - (selectedTime === "7days" ? 7 : 30));
      filtered = filtered.filter(item => new Date(item.date) >= threshold);
    }

    return filtered;
  }, [initialNews, searchTerm, selectedTag, selectedTime, bookmarks]);

  const groupedNews = useMemo(() => groupNewsByDate(filteredNews), [filteredNews]);

  const chevronSvg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")";

  return (
    <div className="w-full">
      {/* Filters Bar */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 mb-8 flex flex-col sm:flex-row gap-2.5 relative z-20">
        <div className="flex-1 relative">
          <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input
            type="text"
            placeholder="Tìm kiếm tin tức, công cụ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/[0.08] rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#22D3EE]/40 focus:bg-white/[0.08] transition-all placeholder:text-slate-600"
          />
        </div>

        <div className="hidden sm:block w-px bg-white/[0.08] self-stretch my-0.5"></div>

        <div className="flex gap-2">
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="bg-white/5 border border-white/[0.08] rounded-xl py-2.5 px-3 pr-8 text-sm text-white focus:outline-none focus:border-[#22D3EE]/40 transition-all appearance-none cursor-pointer min-w-[112px]"
            style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.6rem center", backgroundSize: "0.85em" }}
          >
            <option value="all" className="bg-[#111827]">Mọi lúc</option>
            <option value="7days" className="bg-[#111827]">7 ngày qua</option>
            <option value="30days" className="bg-[#111827]">30 ngày qua</option>
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="bg-white/5 border border-white/[0.08] rounded-xl py-2.5 px-3 pr-8 text-sm text-white focus:outline-none focus:border-[#22D3EE]/40 transition-all appearance-none cursor-pointer min-w-[140px]"
            style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.6rem center", backgroundSize: "0.85em" }}
          >
            <option value="all" className="bg-[#111827]">Tất cả chủ đề</option>
            <option value="saved" className="bg-[#111827] text-[#22D3EE]">★ Đã lưu</option>
            {allTags.map(tag => (
              <option key={tag} value={tag} className="bg-[#111827]">{tag}</option>
            ))}
          </select>
        </div>
      </div>

      {/* News Feed */}
      {groupedNews.length > 0 ? (
        <div className="space-y-8">
          {groupedNews.map((group) => (
            <div key={group.originalDate}>
              {/* Date divider — static header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1 h-4 bg-[#22D3EE] rounded-full shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.4)]"></span>
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {group.dateLabel}
                </h2>
                <span className="text-[11px] text-slate-600 font-medium">{group.items.length} tin</span>
                <div className="flex-1 h-px bg-white/[0.05]"></div>
              </div>

              {/* Item list */}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NewsAccordionItem
                    key={item.id}
                    item={item}
                    isBookmarked={isBookmarked(item.id)}
                    onToggleBookmark={() => toggleBookmark(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-white/[0.06] rounded-2xl">
          <i className="fas fa-search text-2xl text-slate-700 mb-3"></i>
          <h3 className="text-sm font-semibold text-slate-400 mb-1">Không tìm thấy kết quả</h3>
          <p className="text-xs text-slate-600">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
        </div>
      )}
    </div>
  );
}
