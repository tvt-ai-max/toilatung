import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  tag?: string;
}

function buildUrl(page: number, tag?: string): string {
  const params = new URLSearchParams();
  if (page > 1) params.set('page', String(page));
  if (tag) params.set('tag', tag);
  const qs = params.toString();
  return `/blog${qs ? `?${qs}` : ''}`;
}

function getPageRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '...')[] = [1];
  if (current > 3) pages.push('...');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}

export default function Pagination({ currentPage, totalPages, tag }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const baseBtn =
    'w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 border';
  const activeBtn =
    'bg-indigo-500 text-white border-indigo-400 shadow-[0_0_20px_rgba(123,97,255,0.4)]';
  const inactiveBtn =
    'bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10';
  const arrowBtn =
    'px-4 h-10 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-all duration-200 border';

  return (
    <nav
      aria-label="Phân trang"
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
    >
      {/* Page numbers row */}
      <div className="flex items-center gap-2">
        {/* Prev */}
        {prevPage ? (
          <Link
            href={buildUrl(prevPage, tag)}
            className={`${arrowBtn} bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10`}
            aria-label="Trang trước"
          >
            <i className="fas fa-chevron-left text-[10px]" />
            <span className="hidden sm:inline">Trước</span>
          </Link>
        ) : (
          <span className={`${arrowBtn} bg-white/5 text-white/20 border-white/5 cursor-not-allowed`} aria-disabled>
            <i className="fas fa-chevron-left text-[10px]" />
            <span className="hidden sm:inline">Trước</span>
          </span>
        )}

        {/* Numbers */}
        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="w-10 flex items-center justify-center text-slate-600 text-sm select-none">
              ···
            </span>
          ) : (
            <Link
              key={p}
              href={buildUrl(p, tag)}
              className={`${baseBtn} ${p === currentPage ? activeBtn : inactiveBtn}`}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </Link>
          )
        )}

        {/* Next */}
        {nextPage ? (
          <Link
            href={buildUrl(nextPage, tag)}
            className={`${arrowBtn} bg-white/5 text-slate-400 border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10`}
            aria-label="Trang tiếp"
          >
            <span className="hidden sm:inline">Tiếp</span>
            <i className="fas fa-chevron-right text-[10px]" />
          </Link>
        ) : (
          <span className={`${arrowBtn} bg-white/5 text-white/20 border-white/5 cursor-not-allowed`} aria-disabled>
            <span className="hidden sm:inline">Tiếp</span>
            <i className="fas fa-chevron-right text-[10px]" />
          </span>
        )}
      </div>

      {/* Page indicator on mobile */}
      <p className="text-slate-600 text-xs sm:hidden">
        Trang {currentPage} / {totalPages}
      </p>
    </nav>
  );
}
