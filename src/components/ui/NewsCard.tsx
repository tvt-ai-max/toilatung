import { AINewsItem } from "@/lib/ai-news";

export default function NewsCard({ item }: { item: AINewsItem }) {
  // Map tag colors based on category
  const getTagColor = (tag: string) => {
    switch(tag.toLowerCase()) {
      case 'model': return 'text-[var(--color-brand-indigo)] bg-[var(--color-brand-indigo)]/10 border-[var(--color-brand-indigo)]/20';
      case 'tool': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'agent': return 'text-[var(--color-brand-red)] bg-[var(--color-brand-red)]/10 border-[var(--color-brand-red)]/20';
      case 'business': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'research': return 'text-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/10 border-[var(--color-brand-blue)]/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  return (
    <div className="glass rounded-2xl p-6 md:p-8 flex flex-col h-full card-hover relative overflow-hidden group">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-indigo)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-brand-indigo)]/10 transition-colors duration-500"></div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {item.tags.map((tag) => (
          <span 
            key={tag} 
            className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight relative z-10 group-hover:text-[var(--color-brand-indigo)] transition-colors">
        {item.title}
      </h3>

      {/* TL;DR */}
      <p className="text-[var(--color-text-secondary)] mb-6 text-sm md:text-base leading-relaxed relative z-10">
        <strong className="text-white/90">TL;DR:</strong> {item.tldr}
      </p>

      {/* Why Important */}
      <div className="bg-black/30 border border-white/5 rounded-xl p-4 md:p-5 mb-8 relative z-10">
        <strong className="block text-sm font-bold text-[var(--color-brand-peach)] mb-2 uppercase tracking-wide">
          <i className="fas fa-bolt mr-2"></i> Tại sao quan trọng:
        </strong>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {item.why_important}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="mt-auto pt-6 border-t border-[var(--color-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 tracking-wider">
          <span className="flex items-center gap-1">
            <i className="far fa-building"></i> {item.source}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="flex items-center gap-1">
            <i className="far fa-calendar-alt"></i> {new Date(item.date).toLocaleDateString('vi-VN')}
          </span>
        </div>
        
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-black text-white uppercase tracking-widest rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group/btn"
        >
          Đọc chi tiết
          <i className="fas fa-arrow-right ml-2 text-[var(--color-brand-indigo)] group-hover/btn:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </div>
  );
}
