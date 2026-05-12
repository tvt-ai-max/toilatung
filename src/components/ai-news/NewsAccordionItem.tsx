"use client";

import { useState } from "react";
import { AINewsItem } from "@/lib/ai-news-utils";

interface Props {
  item: AINewsItem;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const TAG_COLORS: Record<string, string> = {
  model:     "text-blue-400/80 bg-blue-400/[0.08] border-blue-400/20",
  tool:      "text-emerald-400/80 bg-emerald-400/[0.08] border-emerald-400/20",
  agent:     "text-purple-400/80 bg-purple-400/[0.08] border-purple-400/20",
  research:  "text-amber-400/80 bg-amber-400/[0.08] border-amber-400/20",
  business:  "text-rose-400/80 bg-rose-400/[0.08] border-rose-400/20",
  developer: "text-sky-400/80 bg-sky-400/[0.08] border-sky-400/20",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag.toLowerCase()] ?? "text-slate-500 bg-white/[0.04] border-white/[0.08]";
}

export default function NewsAccordionItem({ item, isBookmarked, onToggleBookmark }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bullets = item.why_important
    .split(/\n?[-–]\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  const formattedDate = new Date(item.date + "T00:00:00").toLocaleDateString("vi-VN");

  return (
    <div className={`rounded-xl border transition-colors duration-150 ${
      isExpanded
        ? "bg-white/[0.03] border-white/10"
        : "border-white/[0.06] hover:bg-white/[0.02] hover:border-white/[0.09]"
    }`}>
      {/* Collapsed row */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <i className={`fas fa-chevron-right text-[9px] text-slate-600 transition-transform duration-200 shrink-0 ${isExpanded ? "rotate-90 text-[#22D3EE]/60" : ""}`}></i>

        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-slate-200 leading-snug truncate">
            {item.title}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {item.source} · {formattedDate}
          </p>
        </div>

        {/* Tags — hidden on mobile when collapsed */}
        {!isExpanded && (
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {item.tags.slice(0, 2).map(tag => (
              <span key={tag} className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${tagColor(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="bg-black/30 border border-white/[0.06] rounded-lg p-3.5 space-y-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <span key={tag} className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${tagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* TL;DR */}
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="text-[#22D3EE] font-bold text-[10px] tracking-wider mr-1.5 uppercase">TL;DR</span>
              {item.tldr}
            </p>

            {/* Why important */}
            <div className="border-l-2 border-[#22D3EE]/15 pl-3">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1.5">Tại sao quan trọng</p>
              {bullets.length > 0 ? (
                <ul className="space-y-1">
                  {bullets.map((pt, i) => (
                    <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                      <span className="text-[#22D3EE]/50 text-[9px] mt-1 shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed">{item.why_important}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex gap-1.5">
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
                  className={`w-7 h-7 flex items-center justify-center rounded-lg border transition-all text-[11px] ${
                    isBookmarked
                      ? "bg-[#22D3EE]/10 border-[#22D3EE]/20 text-[#22D3EE]"
                      : "bg-white/[0.04] border-white/[0.08] text-slate-500 hover:text-slate-300"
                  }`}
                  title={isBookmarked ? "Bỏ lưu" : "Lưu tin"}
                >
                  <i className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}></i>
                </button>
                <button
                  onClick={handleCopy}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border bg-white/[0.04] border-white/[0.08] text-slate-500 hover:text-slate-300 transition-all text-[11px]"
                  title="Copy link"
                >
                  <i className={copied ? "fas fa-check text-emerald-400" : "fas fa-link"}></i>
                </button>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold text-slate-900 uppercase tracking-wider rounded-lg bg-[#22D3EE] hover:bg-cyan-300 transition-colors"
              >
                Đọc chi tiết <i className="fas fa-arrow-right text-[9px]"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
