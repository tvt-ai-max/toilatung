"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SearchModal from "@/components/shared/SearchModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-[999] transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(0,0,0,0.88)'
            : 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid rgba(255,255,255,0.04)',
          boxShadow: isScrolled
            ? '0 4px 30px rgba(0,0,0,0.6)'
            : 'none',
        }}
        aria-label="Menu chính"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--color-brand-red), var(--color-brand-indigo))",
                boxShadow: "0 0 15px rgba(129,140,248,0.25)",
              }}
            >
              <i className="fas fa-user-tie text-white text-sm"></i>
            </div>
            <span className="font-black text-white tracking-tighter uppercase text-sm">
              Tôi Là <span className="gradient-text">Tùng</span>
            </span>
          </Link>

          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500 items-center">
            <Link href="/" className="hover:text-white transition">Home</Link>
            
            <Link href="/course" className="hover:text-white transition">Khóa học</Link>
            <Link href="/prompt" className="hover:text-white transition text-[var(--color-brand-indigo)]">Kho Prompt</Link>
            <Link href="/ai-new" className="hover:text-white transition text-[var(--color-brand-red)] flex items-center gap-1">AI New <i className="fas fa-bolt text-[8px]"></i></Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/ve-tung" className="hover:text-white transition">Về Tùng</Link>
            <Link href="/#contact" className="hover:text-white transition">Liên hệ</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition border border-white/5"
              aria-label="Tìm kiếm (CMD+K)"
            >
              <i className="fas fa-search text-sm"></i>
            </button>
            <Link
              href="/dashboard"
              className="hidden md:block px-5 py-2 text-white text-xs font-black uppercase tracking-widest rounded-xl transition hover:-translate-y-0.5"
              style={{
                background: "var(--color-brand-indigo)",
                boxShadow: "0 4px 15px rgba(123, 97, 255, 0.4)",
              }}
            >
              <i className="fas fa-user-circle mr-2"></i> Đăng nhập / Đăng ký
            </Link>
            <button
              className="md:hidden flex flex-col gap-[6px] p-2 rounded-xl glass text-white"
              aria-label="Menu"
              onClick={toggleDrawer}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[var(--color-panel)] z-[101] border-l border-[var(--color-line)] transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-[var(--color-line)] flex items-center justify-between">
          <span className="font-black text-white tracking-tighter uppercase text-sm">
            Tôi Là <span className="gradient-text">Tùng</span>
          </span>
          <button
            onClick={toggleDrawer}
            className="w-8 h-8 glass rounded-xl flex items-center justify-center text-slate-400"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>
        <nav className="p-4 space-y-1">
          <Link
            href="/"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-home w-4 text-[var(--color-brand-red)]"></i> Home
          </Link>
          
          <Link
            href="/course"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-graduation-cap w-4 text-indigo-400"></i> Khóa học
          </Link>
          <Link
            href="/prompt"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-terminal w-4 text-purple-400"></i> Kho Prompt
          </Link>
          <Link
            href="/ai-new"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--color-brand-red)] text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-bolt w-4"></i> AI New
          </Link>
          <Link
            href="/blog"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-newspaper w-4 text-emerald-400"></i> Blog
          </Link>
          <Link
            href="/ve-tung"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-id-badge w-4 text-pink-400"></i> Về Tùng
          </Link>
          <Link
            href="/#contact"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            <i className="fas fa-comment-dots w-4 text-sky-400"></i> Liên hệ
          </Link>
          
          <Link
            href="/dashboard"
            onClick={toggleDrawer}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition mt-4 border-t border-[var(--color-line)] pt-4"
          >
            <i className="fas fa-user-circle w-4 text-indigo-400"></i> Đăng nhập / Đăng ký
          </Link>
        </nav>
      </div>
      
      <SearchModal />
    </>
  );
}
