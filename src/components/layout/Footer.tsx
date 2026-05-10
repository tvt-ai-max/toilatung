import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-16 border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-red), var(--color-brand-indigo))",
                }}
              >
                <i className="fas fa-user-tie text-white"></i>
              </div>
              <div>
                <span className="block text-lg font-black text-white tracking-tighter uppercase">
                  Tôi Là <span className="gradient-text">Tùng</span>
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  Nguyễn Thanh Tùng · AI Director
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <Link href="/#about" className="hover:text-white transition">Về Tùng</Link>
              <Link href="/course" className="hover:text-white transition">Khóa học</Link>
              <Link href="/#tools" className="hover:text-white transition">Công cụ AI</Link>
              <Link href="/#start" className="hover:text-white transition">Bắt đầu</Link>
              <Link href="/#contact" className="hover:text-white transition">Liên hệ</Link>
            </div>
          </div>
          <div className="border-t border-[var(--color-line)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-medium italic">
              &quot;Không học AI để biết thêm. Học AI để tạo năng lực và leverage.&quot;
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://zalo.me/0972613455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition hover:border-[rgba(0,104,255,0.6)]"
                style={{
                  background: "rgba(0,104,255,0.12)",
                  border: "1px solid rgba(0,104,255,0.3)",
                }}
              >
                <i className="fas fa-comment-dots text-blue-400"></i> Zalo: 0972613455
              </a>
              <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">
                toilatung.com · 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
