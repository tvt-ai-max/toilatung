"use client";

import { useState } from "react";
import { useLandingInteractions } from "@/lib/useLandingInteractions";

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleLeadSubmit, isSubmitting, submitError } =
    useLandingInteractions({ source: "course-vibe-coding" });

  return (
    <>


    {/*  ===== STICKY NAV =====  */}
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0e14]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            {/*  Logo  */}
            <a href="https://toilatung.com/" className="flex items-center gap-3 group">
                <div
                    className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] flex-shrink-0">
                    <i className="fas fa-terminal text-white text-sm"></i>
                </div>
                <div>
                    <span
                        className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-0.5 group-hover:text-slate-400 transition">
                        <i className="fas fa-arrow-left mr-1 text-[8px]"></i>Tôi Là Tùng
                    </span>
                    <span className="block font-black text-white tracking-tighter uppercase text-sm leading-none">Vibe
                        <span className="text-indigo-400"> Coding</span></span>
                </div>
            </a>
            {/*  Desktop links  */}
            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <a href="#curriculum" className="hover:text-indigo-400 transition">Lộ trình</a>
                <a href="#value" className="hover:text-indigo-400 transition">Giá trị</a>
                <a href="#bonus" className="hover:text-indigo-400 transition">Quà tặng</a>
                <a href="#instructor" className="hover:text-indigo-400 transition">Tôi là Tùng</a>
                <a href="#pricing" className="hover:text-indigo-400 transition">Học phí</a>
                <a href="#register" className="hover:text-indigo-400 transition">Đăng ký</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="#register"
                    className="hidden md:block px-5 py-2 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30">
                    Đăng ký ngay
                </a>
                <button id="hamburgerBtn" className="hamburger md:hidden flex flex-col gap-[6px] p-2 rounded-xl glass text-white"
                    aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className="fas fa-bars text-sm"></i>
                </button>
            </div>
        </div>
    </nav>

    {/* Mobile Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
    )}

    {/* Mobile Drawer */}
    <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#0b0e14] z-[101] border-l border-white/10 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <span className="font-black text-white tracking-tighter uppercase text-sm">Vibe <span className="text-indigo-400">Coding</span></span>
        <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 glass rounded-xl flex items-center justify-center text-slate-400">
          <i className="fas fa-times text-sm"></i>
        </button>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Lộ trình</a>
        <a href="#value" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Giá trị</a>
        <a href="#bonus" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Quà tặng</a>
        <a href="#instructor" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Tôi là Tùng</a>
        <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Học phí</a>
        <a href="#register" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 mt-4 bg-indigo-600 text-white text-center text-sm font-black uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-600/30">Đăng ký ngay</a>
      </div>
    </div>




    {/*  ===== HERO =====  */}
    <header className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden" reveal">
        {/*  Background glows  */}
        <div
            className="absolute -top-32 -right-32 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-600/15 blur-[120px] md:blur-[140px] rounded-full pointer-events-none">
        </div>
        <div
            className="absolute -bottom-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none">
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
            {/*  Badge  */}
            <div
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8 badge-pulse">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                <span className="truncate">Live Zoom · 3 Buổi · Khai giảng sắp tới</span>
            </div>

            {/*  Headline  */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-[1.05]">
                Làm chủ AI bằng<br />
                <span className="gradient-text italic">"Vibe Coding"</span>
            </h1>

            <p className="hero-sub text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
                Từ <strong className="text-white">Zero → Deploy</strong> trong 3 buổi Zoom thực chiến.<br
                    className="hidden sm:block" />
                Biến Claude Code thành đội ngũ kỹ sư hùng hậu của riêng bạn.
            </p>

            {/*  Social proof bar  */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                    <i className="fas fa-users text-indigo-400"></i>
                    <span><strong className="text-white">247+</strong> học viên</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    <span><strong className="text-white">4.9/5</strong> đánh giá</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                    <i className="fas fa-video text-emerald-400"></i>
                    <span>Học qua <strong className="text-white">Zoom</strong> trực tiếp</span>
                </div>
            </div>

            {/*  CTA  */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-2">
                <a href="#register"
                    className="w-full sm:w-auto px-8 md:px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition shadow-xl shadow-indigo-600/30 text-sm md:text-base uppercase tracking-widest text-center">
                    <i className="fas fa-paper-plane mr-2"></i>Đăng ký — 5.000.000đ
                </a>
                <a href="#curriculum"
                    className="w-full sm:w-auto px-8 md:px-10 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 transition text-sm md:text-base text-center">
                    <i className="fas fa-play-circle mr-2 text-indigo-400"></i>Xem lộ trình
                </a>
            </div>

            {/*  Urgency  */}
            <p className="mt-5 text-xs text-rose-400 font-bold uppercase tracking-widest">
                <i className="fas fa-fire mr-1"></i> Chỉ còn 12 suất — Lớp đang lấp đầy nhanh
            </p>
        </div>
    </header>


    {/*  ===== FOR WHO =====  */}
    <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">Khóa học này dành cho
                </p>
                <h2 className="text-3xl font-black text-white">Bạn có đang gặp những điều này?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                    <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                    <p className="text-sm text-slate-300 font-medium">Dùng ChatGPT / Claude để "hỏi vặt" mà chưa thực sự
                        build được sản phẩm hoàn chỉnh?</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                    <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                    <p className="text-sm text-slate-300 font-medium">Copy code từ AI về rồi không biết chỉnh, lỗi một cái
                        là bó tay?</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                    <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                    <p className="text-sm text-slate-300 font-medium">Muốn build tool, automation cho công việc nhưng không
                        có background kỹ thuật?</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                    <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                    <p className="text-sm text-slate-300 font-medium">AI cho ra code nhưng context bị "ngáo" sau vài lần
                        chat, phải bắt đầu lại từ đầu?</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                    <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                    <p className="text-sm text-slate-300 font-medium">Thấy người ta "Vibe Coding" build app trong vài giờ
                        còn mình cả ngày chưa xong?</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-emerald-500/50 card-hover bg-emerald-500/5 reveal">
                    <i className="fas fa-check-circle text-emerald-400 text-xl mb-3"></i>
                    <p className="text-sm text-emerald-300 font-bold">Nếu bạn gật đầu với 2+ điều trên — khóa học này được
                        thiết kế đặc biệt cho bạn.</p>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== WHAT YOU GET (VALUE) =====  */}
    <section id="value" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-3">Sau khóa học</p>
                <h2 className="text-4xl font-black text-white mb-4">Bạn nhận được <span className="gradient-text">giá trị
                        gì?</span></h2>
                <p className="text-slate-500 max-w-xl mx-auto">Không chỉ học kỹ năng — bạn sẽ có tư duy và hệ thống để làm
                    việc với AI hiệu quả mãi mãi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*  Value 1  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-600/40 transition">
                        <i className="fas fa-brain text-indigo-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Tư duy Director Mindset</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Không còn là "user" nhập lệnh — bạn trở thành
                        <strong className="text-white">Director</strong> điều phối AI như đội ngũ kỹ sư chuyên nghiệp.</p>
                </div>

                {/*  Value 2  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/40 transition">
                        <i className="fas fa-rocket text-emerald-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Build & Deploy sản phẩm thực</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Trong 3 buổi, bạn sẽ <strong
                            className="text-white">build hoàn chỉnh</strong> 1 website AI Agency có form liên hệ, hệ thống
                        log và deploy lên production.</p>
                </div>

                {/*  Value 3  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-500/40 transition">
                        <i className="fas fa-robot text-amber-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Kiến trúc Sub-agent hùng hậu</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Nắm vững cách phân bổ context, tạo Sub-agent
                        (Researcher, Reviewer, QA) để dự án <strong className="text-white">không bao giờ bị "ngáo"</strong>.
                    </p>
                </div>

                {/*  Value 4  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-500/40 transition">
                        <i className="fas fa-file-code text-purple-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Bộ Prompt System cá nhân</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Sở hữu bộ <strong className="text-white">50+ prompt
                            templates</strong> theo từng giai đoạn: Init → Plan → Build → Verify → Deploy, tái sử dụng
                        cho mọi dự án.</p>
                </div>

                {/*  Value 5  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/40 transition">
                        <i className="fas fa-bolt text-blue-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Automation & Hooks nâng cao</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Thiết lập Hooks, Skills, Sub-agents để hệ thống tự
                        động — <strong className="text-white">rảnh tay làm việc quan trọng hơn</strong> thay vì canh màn
                        hình.</p>
                </div>

                {/*  Value 6  */}
                <div className="glass p-8 rounded-3xl card-hover group reveal">
                    <div
                        className="w-12 h-12 bg-rose-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-500/40 transition">
                        <i className="fas fa-infinity text-rose-400 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">Framework tái sử dụng mãi mãi</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Phương pháp này apply được cho <strong
                            className="text-white">mọi dự án tương lai</strong> — dù AI thay đổi, tư duy Director vẫn bất
                        biến.</p>
                </div>
            </div>

            {/*  Transformation statement  */}
            <div
                className="mt-16 bg-gradient-to-r from-indigo-600/10 to-emerald-500/10 border border-white/10 rounded-3xl p-10 text-center">
                <p className="text-2xl font-black text-white leading-relaxed">
                    "Sau 3 buổi, bạn sẽ build được sản phẩm chạy thật,<br />
                    <span className="gradient-text">không cần biết code từ trước."</span>
                </p>
                <p className="text-slate-500 mt-3 text-sm">Điều kiện duy nhất: Có máy tính + kết nối internet + sẵn sàng
                    thực hành.</p>
            </div>
        </div>
    </section>


    {/*  ===== CURRICULUM (3 BUỔI ZOOM) =====  */}
    <section id="curriculum" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">Hình thức học</p>
                <h2 className="text-4xl font-black text-white mb-4">Lộ trình <span className="gradient-text">3 Buổi Zoom</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                        <i className="fas fa-video text-indigo-400"></i>
                        <span>Zoom Live Interactive</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                        <i className="fas fa-clock text-emerald-400"></i>
                        <span>3 buổi × 3 giờ</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                        <i className="fas fa-record-vinyl text-rose-400"></i>
                        <span>Có recording xem lại</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                        <i className="fas fa-comments text-amber-400"></i>
                        <span>Q&A trực tiếp</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">

                {/*  Buổi 1  */}
                <div className="relative pl-20 timeline-line reveal">
                    <div
                        className="absolute left-0 top-0 w-12 h-12 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-indigo-400">
                        <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                        <span className="text-xl font-black leading-none">1</span>
                    </div>
                    <div className="glass p-8 rounded-3xl card-hover border-l-4 border-indigo-500 reveal">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                            <div>
                                <span
                                    className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Foundation
                                    + Setup</span>
                                <h3 className="text-2xl font-black text-white mt-1">Director Mindset & Khởi tạo Dự án</h3>
                            </div>
                            <span
                                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-bold rounded-full whitespace-nowrap">3
                                giờ</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Cài đặt & cấu hình Claude Code từ A→Z</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Tư duy "Director vs User" — thay đổi cách tiếp cận
                                    AI</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Tạo CLAUDE.md chuẩn với ảnh tham chiếu</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Plan Mode (Shift+Tab) — ép AI tư duy trước khi
                                    code</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Kỹ thuật Prompt 4 bước: Init → Plan → Refine →
                                    Verify</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400"><strong className="text-white">Thực hành:</strong>
                                    Build skeleton AI Agency Website</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Buổi 2  */}
                <div className="relative pl-20 timeline-line reveal">
                    <div
                        className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(52,211,153,0.4)] border border-emerald-400">
                        <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                        <span className="text-xl font-black leading-none">2</span>
                    </div>
                    <div className="glass p-8 rounded-3xl card-hover border-l-4 border-emerald-500 reveal">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                            <div>
                                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Build +
                                    Automation</span>
                                <h3 className="text-2xl font-black text-white mt-1">Sub-agent Architecture & Hooks System
                                </h3>
                            </div>
                            <span
                                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold rounded-full whitespace-nowrap">3
                                giờ</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Context window management — tránh "ngáo" giữa dự
                                    án</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Tạo Sub-agents: Researcher, Code Reviewer, QA
                                    Tester</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Thiết lập Skills trong settings.json</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Hooks: Stop, PostToolUse, Notification — rảnh tay
                                    làm việc</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Self-verification: chụp screenshot & tự
                                    debug</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400"><strong className="text-white">Thực hành:</strong> Thêm
                                    Contact Form + Log System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Buổi 3  */}
                <div className="relative pl-20 reveal">
                    <div
                        className="absolute left-0 top-0 w-12 h-12 bg-amber-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-400">
                        <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                        <span className="text-xl font-black leading-none">3</span>
                    </div>
                    <div className="glass p-8 rounded-3xl card-hover border-l-4 border-amber-500 reveal">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                            <div>
                                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Deploy +
                                    Thực chiến</span>
                                <h3 className="text-2xl font-black text-white mt-1">Deploy Production & Case Study Hoàn
                                    Chỉnh</h3>
                            </div>
                            <span
                                className="px-3 py-1 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold rounded-full whitespace-nowrap">3
                                giờ</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Deploy website tĩnh lên Netlify — 1 câu lệnh</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Deploy Backend/API lên Modal — biến Skill thành
                                    Endpoint</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Kết nối Make.com / n8n Automation</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Review code toàn bộ dự án với Sub-agent</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400">Template Framework tái dùng cho mọi dự án tiếp
                                    theo</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                                <span className="text-sm text-slate-400"><strong className="text-white">Hoàn thành:</strong>
                                    Website AI Agency live trên internet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== BONUS & GIFTS =====  */}
    <section id="bonus" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.3em] mb-3">Không chỉ là khóa học
                </p>
                <h2 className="text-4xl font-black text-white mb-4">Combo <span className="gradient-text-gold">Quà tặng</span>
                    đi kèm</h2>
                <p className="text-slate-500">Tổng giá trị quà tặng: <strong className="text-white">3.500.000đ</strong> — tặng
                    kèm 100% khi đăng ký</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

                {/*  Gift 1 - Prompt Vault  */}
                <div className="bonus-card p-8 rounded-3xl card-hover relative overflow-hidden reveal">
                    <div
                        className="absolute top-4 right-4 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] font-black uppercase rounded-full">
                        Trị giá 800.000đ
                    </div>
                    <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-5">
                        <i className="fas fa-scroll text-indigo-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">Prompt Vault — 50+ Templates</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">Bộ tài liệu Prompt đã được kiểm thử thực tế
                        theo 5 giai đoạn: Init, Plan Mode, Refinement, Verify, Deploy. Copy-paste và tùy chỉnh ngay.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg">50+
                            Prompts</span>
                        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg">File
                            PDF + Notion</span>
                        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg">Update
                            vĩnh viễn</span>
                    </div>
                </div>

                {/*  Gift 2 - CLAUDE.md Templates  */}
                <div className="bonus-card p-8 rounded-3xl card-hover relative overflow-hidden reveal">
                    <div
                        className="absolute top-4 right-4 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] font-black uppercase rounded-full">
                        Trị giá 600.000đ
                    </div>
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-5">
                        <i className="fas fa-file-alt text-emerald-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">10 CLAUDE.md Templates Chuyên ngành</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">Templates CLAUDE.md được tinh chỉnh cho 10
                        loại dự án: Landing Page, SaaS, E-commerce, Automation, Portfolio, API, Dashboard...</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg">10
                            Templates</span>
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg">Plug
                            & Play</span>
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg">Mọi
                            stack</span>
                    </div>
                </div>

                {/*  Gift 3 - Skills Pack  */}
                <div className="bonus-card p-8 rounded-3xl card-hover relative overflow-hidden reveal">
                    <div
                        className="absolute top-4 right-4 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] font-black uppercase rounded-full">
                        Trị giá 700.000đ
                    </div>
                    <div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-5">
                        <i className="fas fa-puzzle-piece text-purple-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">Skills Pack — Sub-agent Ready</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">Bộ 5 Skills đóng gói sẵn (Orchestrator,
                        Researcher, Code Reviewer, QA Tester, Vibe Coding Course) — install một lần, dùng mãi mãi.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded-lg">5
                            Skills</span>
                        <span
                            className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded-lg">Project-level</span>
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded-lg">Source
                            code</span>
                    </div>
                </div>

                {/*  Gift 4 - Community  */}
                <div className="bonus-card p-8 rounded-3xl card-hover relative overflow-hidden reveal">
                    <div
                        className="absolute top-4 right-4 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] font-black uppercase rounded-full">
                        Trị giá 1.400.000đ
                    </div>
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-5">
                        <i className="fas fa-users text-blue-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">Group Hỗ trợ Trọn đời</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">Tham gia cộng đồng Director Mindset — nhận hỗ
                        trợ kỹ thuật, chia sẻ case study, update khi Claude Code ra tính năng mới.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-lg">Trọn
                            đời</span>
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-lg">Q&A hàng
                            tuần</span>
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-lg">Update
                            miễn phí</span>
                    </div>
                </div>
            </div>

            {/*  Bonus total bar  */}
            <div
                className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-slate-400">Tổng giá trị nhận được</p>
                    <p className="text-3xl font-black text-white">8.500.000đ <span
                            className="text-base font-normal text-slate-500 price-line">nếu mua riêng lẻ</span></p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-slate-400">Bạn chỉ đầu tư</p>
                    <p className="text-3xl font-black gradient-text-gold">5.000.000đ</p>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== PRICING =====  */}
    <section id="pricing" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">Đầu tư</p>
                <h2 className="text-4xl font-black text-white">Học phí <span className="gradient-text">minh bạch</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/*  Basic  */}
                <div className="glass p-10 rounded-3xl reveal">
                    <div className="mb-8">
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Cơ bản</p>
                        <h3 className="text-2xl font-black text-white mb-1">Early Bird</h3>
                        <p className="text-slate-500 text-sm">Đặt chỗ trước khai giảng</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-lg text-slate-500 price-line">6.000.000đ</span>
                        <div className="text-5xl font-black text-white mt-1">4.500.000đ</div>
                        <p className="text-emerald-400 text-sm font-bold mt-1">Tiết kiệm 1.500.000đ</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-sm text-slate-400"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> 3 buổi Zoom Live</li>
                        <li className="flex items-center gap-3 text-sm text-slate-400"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Recording xem lại 6 tháng</li>
                        <li className="flex items-center gap-3 text-sm text-slate-400"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Tài liệu Prompt 50+ templates
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-400"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> 10 CLAUDE.md Templates</li>
                        <li className="flex items-center gap-3 text-sm text-slate-400"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Group hỗ trợ 3 tháng</li>
                    </ul>
                    <a href="#register"
                        className="block w-full py-4 border border-indigo-500/50 text-indigo-400 font-black text-center rounded-2xl hover:bg-indigo-500/10 transition uppercase tracking-widest text-sm">
                        Chọn gói này
                    </a>
                </div>

                {/*  Pro (highlight)  */}
                <div
                    className="relative bg-gradient-to-b from-indigo-600/20 to-indigo-900/20 border border-indigo-500/40 p-10 rounded-3xl glow-indigo">
                    <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">
                        <i className="fas fa-star mr-1"></i> Phổ biến nhất
                    </div>
                    <div className="mb-8">
                        <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">Đầy đủ</p>
                        <h3 className="text-2xl font-black text-white mb-1">Director Pro</h3>
                        <p className="text-slate-500 text-sm">Toàn bộ giá trị + hỗ trợ trọn đời</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-lg text-slate-500 price-line">8.000.000đ</span>
                        <div className="text-5xl font-black text-white mt-1">5.000.000đ</div>
                        <p className="text-emerald-400 text-sm font-bold mt-1">Tiết kiệm 3.000.000đ</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> 3 buổi Zoom Live</li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Recording xem lại <strong>vĩnh
                                viễn</strong></li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Tài liệu Prompt 50+ templates
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> 10 CLAUDE.md Templates</li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Skills Pack (5 Sub-agents)</li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium"><i
                                className="fas fa-check text-emerald-400 flex-shrink-0"></i> Group hỗ trợ <strong>trọn
                                đời</strong></li>
                        <li className="flex items-center gap-3 text-sm text-amber-300 font-bold"><i
                                className="fas fa-star text-amber-400 flex-shrink-0"></i> 1:1 Review dự án cá nhân (30 phút)
                        </li>
                    </ul>
                    <a href="#register"
                        className="block w-full py-4 bg-indigo-600 text-white font-black text-center rounded-2xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30 uppercase tracking-widest text-sm">
                        Đăng ký Director Pro
                    </a>
                </div>
            </div>

            {/*  Guarantee  */}
            <div className="mt-10 flex flex-col md:flex-row items-center gap-5 glass p-8 rounded-3xl reveal">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shield-alt text-emerald-400 text-2xl"></i>
                </div>
                <div>
                    <h4 className="text-lg font-black text-white mb-1">Cam kết hoàn tiền 100% trong 7 ngày</h4>
                    <p className="text-sm text-slate-400">Nếu sau buổi 1 bạn cảm thấy không phù hợp, chúng tôi hoàn tiền
                        toàn bộ — không hỏi lý do. Rủi ro về phía chúng tôi.</p>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== REGISTER FORM =====  */}
    <section id="register" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
                <p className="text-[10px] font-black text-rose-400 uppercase tracking-[0.3em] mb-3">
                    <i className="fas fa-fire mr-1"></i> Chỉ còn 12 suất
                </p>
                <h2 className="text-4xl font-black text-white mb-4">Đăng ký <span className="gradient-text">ngay hôm nay</span>
                </h2>
                <p className="text-slate-500">Điền thông tin bên dưới — team sẽ liên hệ xác nhận và gửi link Zoom trong 24
                    giờ.</p>
            </div>

            <div className="glass rounded-3xl p-10 glow-indigo reveal">
                <form id="enrollForm" className="space-y-5" onSubmit={handleLeadSubmit}>

                    {/*  Name  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Họ và tên
                            *</label>
                        <input type="text" name="name" placeholder="Nguyễn Văn A" required
                            className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                    </div>

                    {/*  Email  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email
                            *</label>
                        <input type="email" name="email" placeholder="email@example.com" required
                            className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                    </div>

                    {/*  Phone  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Số điện
                            thoại *</label>
                        <input type="tel" name="phone" placeholder="0901 234 567" required
                            className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                    </div>

                    {/*  Package  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Gói đăng ký
                            *</label>
                        <select name="package" required defaultValue=""
                            className="form-input w-full px-5 py-3.5 rounded-2xl text-sm appearance-none cursor-pointer">
                            <option value="" disabled>Chọn gói phù hợp</option>
                            <option value="director-pro">Director Pro — 5.000.000đ (Phổ biến nhất)</option>
                            <option value="early-bird">Early Bird — 4.500.000đ</option>
                        </select>
                    </div>

                    {/*  Experience  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn đã dùng
                            Claude / AI coding chưa?</label>
                        <select name="experience"
                            className="form-input w-full px-5 py-3.5 rounded-2xl text-sm appearance-none cursor-pointer">
                            <option value="never">Chưa bao giờ dùng</option>
                            <option value="basic">Đã dùng ChatGPT / Claude cơ bản</option>
                            <option value="coding">Đã thử Claude Code nhưng chưa thành thạo</option>
                            <option value="advanced">Đã dùng thường xuyên, muốn nâng cấp</option>
                        </select>
                    </div>

                    {/*  Note  */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn muốn
                            build gì sau khóa học? (không bắt buộc)</label>
                        <textarea name="note"
                            placeholder="VD: Build landing page cho freelance, tạo tool automation cho công ty, build SaaS mini..."
                            rows={3} className="form-input w-full px-5 py-3.5 rounded-2xl text-sm resize-none"></textarea>
                    </div>

                    {/*  Submit  */}
                    <button type="submit" disabled={isSubmitting}
                        className="w-full py-5 bg-indigo-600 text-white font-black text-base rounded-2xl hover:bg-indigo-500 transition shadow-xl shadow-indigo-600/30 uppercase tracking-widest disabled:opacity-60 disabled:cursor-wait">
                        <i className="fas fa-paper-plane mr-2"></i> {isSubmitting ? "Đang gửi..." : "Đặt chỗ ngay"}
                    </button>

                    {submitError && <p className="text-center text-sm text-red-400">{submitError}</p>}
                    <p className="text-center text-xs text-slate-600">Thông tin của bạn được bảo mật tuyệt đối. Không spam.
                    </p>
                </form>

                {/*  Success state (hidden by default)  */}
                <div id="successMsg" className="hidden text-center py-10">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-check text-emerald-400 text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Đăng ký thành công!</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Cảm ơn bạn đã đăng ký. Team sẽ liên hệ qua email và số điện thoại của bạn<br />
                        trong vòng <strong className="text-white">24 giờ</strong> để xác nhận và gửi link Zoom.
                    </p>
                    <p className="mt-4 text-indigo-400 text-sm font-bold">
                        <i className="fas fa-envelope mr-1"></i> Kiểm tra hộp thư (kể cả spam) để nhận tài liệu chuẩn bị
                        trước buổi 1.
                    </p>
                </div>
            </div>

            {/*  Contact alternative  */}
            <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">Có câu hỏi trước khi đăng ký?</p>
                <div className="flex flex-wrap justify-center gap-4 mt-3">
                    <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                        <i className="fas fa-comment-dots text-blue-400"></i> Chat Zalo
                    </a>
                    <a href="mailto:tung@tvtagency.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                        <i className="fas fa-envelope text-sky-400"></i> Gửi email
                    </a>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== FOUNDER / INSTRUCTOR =====  */}
    <section id="instructor" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">Người hướng dẫn</p>
                <h2 className="text-3xl font-black text-white">Ai hướng dẫn bạn?</h2>
            </div>
            <div className="glass rounded-3xl p-10 glow-indigo reveal">
                <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                    {/*  Avatar Column  */}
                    <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                        {/*  Avatar with gradient ring  */}
                        <div className="relative inline-block mb-5">
                            <div className="w-40 h-40 rounded-full p-[3px] mx-auto lg:mx-0"
                                style={{background: 'linear-gradient(135deg,var(--indigo),var(--emerald))'}}>
                                <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0e14] flex items-center justify-center" style={{border: '3px solid #0b0e14'}}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/tung-soc-son.webp?v=20260510"
                                        alt="Nguyễn Thanh Tùng — TVT Strategist"
                                        className="w-full h-full object-cover object-top block" />
                                </div>
                            </div>
                            {/*  Online status badge  */}
                            <span
                                className="absolute bottom-3 right-3 lg:right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0b0e14] block z-10"></span>
                        </div>
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">Tôi là Tùng
                        </p>
                        <h3 className="text-xl font-black text-white">Nguyễn Thanh Tùng</h3>
                        <p className="text-xs text-slate-500 mt-1">
                            Founder TVT Agency &<br />
                            Hành trình Tôi là Tùng
                        </p>
                        {/*  Social icons  */}
                        <div className="flex justify-center lg:justify-start gap-2 mt-4">
                            <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-blue-400/40"
                                title="Facebook">
                                <i className="fab fa-facebook-f text-blue-400 text-xs"></i>
                            </a>
                            <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-white/20"
                                title="TikTok">
                                <i className="fab fa-tiktok text-white text-xs"></i>
                            </a>
                            <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-red-400/40"
                                title="YouTube">
                                <i className="fab fa-youtube text-red-400 text-xs"></i>
                            </a>
                        </div>
                    </div>

                    {/*  Content Column  */}
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý "Marketing phượt". Hơn 16 năm thực chiến Branding và Marketing, tôi chọn cách đúc kết thành những quy trình gọn gàng (Agentic Workflow) để chia sẻ lại cho cộng đồng.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Hành trình của chúng ta không phải là học thuộc các tính năng công cụ. Tôi sẽ đồng hành cùng bạn ứng dụng <strong className="text-white">Director Mindset</strong> — tự mình làm đạo diễn, điều phối AI và thiết kế luồng công việc để mỗi ngày làm việc đều là một trải nghiệm thú vị.
                        </p>

                        {/*  Credentials grid  */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                            <div className="glass p-3 rounded-xl text-center">
                                <i className="fas fa-code text-indigo-400 mb-2 block"></i>
                                <p className="text-[10px] font-bold text-white uppercase">Vibe Coding</p>
                                <p className="text-[9px] text-slate-500 mt-0.5">Claude Code thực chiến</p>
                            </div>
                            <div className="glass p-3 rounded-xl text-center">
                                <i className="fas fa-network-wired text-emerald-400 mb-2 block"></i>
                                <p className="text-[10px] font-bold text-white uppercase">Sub-agent System</p>
                                <p className="text-[9px] text-slate-500 mt-0.5">Kiến trúc AI team</p>
                            </div>
                            <div className="glass p-3 rounded-xl text-center">
                                <i className="fas fa-rocket text-amber-400 mb-2 block"></i>
                                <p className="text-[10px] font-bold text-white uppercase">Deploy to Prod</p>
                                <p className="text-[9px] text-slate-500 mt-0.5">Zero → Live app</p>
                            </div>
                        </div>

                        {/*  Quote  */}
                        <blockquote
                            className="border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l-4 border-indigo-500/40 lg:border-indigo-500 py-4 lg:py-0 lg:pl-4 mb-6">
                            <p className="text-sm text-slate-300 italic leading-relaxed">"Mọi nội dung đều được đúc kết từ những chuyến đi và trải nghiệm thực chiến của chính tôi. Không lý thuyết suông, chỉ có hành động."</p>
                        </blockquote>

                        <a href="#register"
                            className="inline-flex items-center gap-2 px-7 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition text-sm uppercase tracking-widest mx-auto lg:mx-0">
                            <i className="fas fa-arrow-right"></i> Học với Tùng
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== FAQ =====  */}
    <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-black text-white">Câu hỏi <span className="gradient-text">thường gặp</span></h2>
            </div>
            <div className="space-y-4" id="faqList">
                <div className="faq-item glass rounded-2xl overflow-hidden">
                    <button 
                        className="w-full flex items-center justify-between px-7 py-5 text-left">
                        <span className="font-bold text-white text-sm">Tôi không biết code có học được không?</span>
                        <i className="fas fa-plus text-indigo-400 flex-shrink-0 transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-7 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">Hoàn toàn được. Khóa học được thiết kế cho
                            người <strong className="text-white">không cần background kỹ thuật</strong>. Bạn chỉ cần biết
                            dùng máy tính cơ bản. Phương pháp Vibe Coding giúp bạn "điều khiển" AI viết code thay bạn.
                        </p>
                    </div>
                </div>
                <div className="faq-item glass rounded-2xl overflow-hidden">
                    <button 
                        className="w-full flex items-center justify-between px-7 py-5 text-left">
                        <span className="font-bold text-white text-sm">Học Zoom có cần online đúng giờ không?</span>
                        <i className="fas fa-plus text-indigo-400 flex-shrink-0 transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-7 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">Khuyến khích học live để có thể hỏi trực tiếp.
                            Nhưng mỗi buổi đều được <strong className="text-white">recording đầy đủ</strong> — gói Early
                            Bird xem lại 6 tháng, gói Director Pro xem lại vĩnh viễn.</p>
                    </div>
                </div>
                <div className="faq-item glass rounded-2xl overflow-hidden">
                    <button 
                        className="w-full flex items-center justify-between px-7 py-5 text-left">
                        <span className="font-bold text-white text-sm">Cần chuẩn bị gì trước khi học?</span>
                        <i className="fas fa-plus text-indigo-400 flex-shrink-0 transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-7 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">Chỉ cần: (1) Máy tính Mac/Windows, (2) Tài
                            khoản Claude (có plan Pro hoặc Max), (3) Cài VS Code. Team sẽ gửi hướng dẫn chuẩn bị đầy đủ
                            sau khi đăng ký.</p>
                    </div>
                </div>
                <div className="faq-item glass rounded-2xl overflow-hidden">
                    <button 
                        className="w-full flex items-center justify-between px-7 py-5 text-left">
                        <span className="font-bold text-white text-sm">Sau khóa học tôi có thể tự build được không?</span>
                        <i className="fas fa-plus text-indigo-400 flex-shrink-0 transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-7 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">Đó là mục tiêu chính. Ngay buổi 3 bạn sẽ có
                            sản phẩm <strong className="text-white">chạy live trên internet</strong>. Kèm theo đó là bộ
                            Framework + Prompt Templates để tái sử dụng cho mọi dự án tiếp theo.</p>
                    </div>
                </div>
                <div className="faq-item glass rounded-2xl overflow-hidden">
                    <button 
                        className="w-full flex items-center justify-between px-7 py-5 text-left">
                        <span className="font-bold text-white text-sm">Tôi có thể trả góp không?</span>
                        <i className="fas fa-plus text-indigo-400 flex-shrink-0 transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-7 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">Hỗ trợ thanh toán 2 đợt: 50% khi đăng ký, 50%
                            trước buổi 2. Liên hệ team qua Messenger hoặc Telegram để được hỗ trợ.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*  ===== FOOTER =====  */}
    <section id="tools" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-sky-400">Công cụ AI</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Những công cụ bạn sẽ <span className="gradient-indigo">làm chủ</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Không cần dùng tất cả. Trong mỗi chương trình, tôi sẽ giúp bạn chọn đúng công cụ phù hợp với mục tiêu và công việc thực tế của bạn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(16,163,127,0.15)', border: '1px solid rgba(16,163,127,0.3)'}}>
                        <i className="fas fa-robot" style={{color: '#10a37f'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">ChatGPT</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Viết · Phân tích · Lên kế hoạch</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Trợ lý đa năng nhất hiện tại — viết content, phân tích dữ liệu, lên kế hoạch marketing, soạn email, tư vấn chiến lược. Phù hợp cho hầu hết mọi công việc hàng ngày.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(66,133,244,0.15)', border: '1px solid rgba(66,133,244,0.3)'}}>
                        <i className="fas fa-gem" style={{color: '#4285f4'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Gemini</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Search · Đa phương tiện · Google</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Mạnh về tìm kiếm thông tin cập nhật, phân tích ảnh và video, tích hợp sâu với Gmail, Google Docs, Drive. Lý tưởng cho người làm việc trong hệ sinh thái Google.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)'}}>
                        <i className="fas fa-code" style={{color: 'var(--indigo)'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Claude</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Longform · Coding · Context dài</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Xuất sắc trong viết longform, review tài liệu dài, lập trình thực chiến và làm việc với codebase. Xương sống của chương trình Vibe Coding.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}>
                        <i className="fas fa-microphone-alt" style={{color: 'var(--pink)'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">ElevenLabs</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Giọng nói · Podcast · TTS</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Chuyển văn bản thành giọng nói tự nhiên như người thật — dùng để tạo Podcast, lồng tiếng video, nội dung audio cho mạng xã hội.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)'}}>
                        <i className="fas fa-film" style={{color: 'var(--amber)'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Flow / Veo / Imagen</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Ảnh AI · Video AI · Google</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Tạo ảnh nghệ thuật và video chuyên nghiệp bằng AI từ Google — phù hợp để sản xuất visual cho content, quảng cáo và thương hiệu cá nhân.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)'}}>
                        <i className="fas fa-magic" style={{color: 'var(--emerald)'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Canva · CapCut · Whisk</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Thiết kế · Video · Xuất bản</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Bộ công cụ thực thi: Canva để thiết kế ảnh không cần kỹ năng design, CapCut dựng video bằng điện thoại, Whisk để biến đổi ảnh sáng tạo với AI.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)'}}>
                        <i className="fas fa-brain" style={{color: '#06b6d4'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Grok</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Reasoning · Real-time · xAI</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">AI của xAI (Elon Musk) — mạnh về lập luận chuyên sâu, truy cập real-time X/Twitter, phân tích thị trường và brainstorm chiến lược với tư duy phản biện sắc bén.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)'}}>
                        <i className="fas fa-video" style={{color: '#a855f7'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">Higgsfield</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Video AI · Animation · Motion</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Công cụ tạo video AI thế hệ mới — animate ảnh tĩnh thành video chuyển động cinematic, tạo nội dung video ngắn chất lượng cao cho mạng xã hội và thương hiệu cá nhân.</p>
            </div>

            <div className="glass rounded-3xl p-7 card-hover">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)'}}>
                        <i className="fas fa-user-circle" style={{color: '#f43f5e'}}></i>
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white">HeyGen</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Avatar · Talking Head · Dịch thuật</p>
                    </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">Tạo video người phát ngôn AI từ văn bản — dùng avatar ảo hoặc nhân bản giọng/hình của bạn để sản xuất video marketing, đào tạo và dịch nội dung sang nhiều ngôn ngữ.</p>
            </div>
        </div>
    </div>
</section>

<footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
                        <i className="fas fa-terminal text-white"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-black text-white tracking-tighter uppercase">Claude Code <span
                                className="text-indigo-400">Director</span></span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Vibe Coding Mastery
                            Program</span>
                    </div>
                </div>
                <div
                    className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <a href="#curriculum" className="hover:text-indigo-400 transition">Lộ trình</a>
                    <a href="#value" className="hover:text-indigo-400 transition">Giá trị</a>
                    <a href="#bonus" className="hover:text-indigo-400 transition">Quà tặng</a>
                    <a href="#instructor" className="hover:text-indigo-400 transition">Tôi là Tùng</a>
                    <a href="#pricing" className="hover:text-indigo-400 transition">Học phí</a>
                    <a href="#register" className="hover:text-indigo-400 transition">Đăng ký</a>
                </div>
            </div>
            {/*  Other programs  */}
            <div className="border-t border-white/5 pt-8 mb-8">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest text-center mb-5">Các chương
                    trình khác của Tôi Là Tùng</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://toilatung.com/"
                        className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-white/20">
                        <i className="fas fa-user-tie" style={{color: 'var(--red)'}}></i> ← Trang chủ Tôi Là Tùng
                    </a>
                    <a href="/course/ai-coaching"
                        className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5"
                        
                        >
                        <i className="fas fa-user-tie" style={{color: '#ff2d2d'}}></i> Coaching AI 1-1
                    </a>
                    <a href="/course/phunulamchuai"
                        className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-pink-400/40">
                        <i className="fas fa-heart text-pink-400"></i> Phụ Nữ Làm Chủ AI (Miễn phí)
                    </a>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm font-medium italic">
                    "Công nghệ thay đổi, tư duy Director là vĩnh viễn."
                </p>
                <div className="flex items-center gap-4 flex-shrink-0">
                    <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition"
                        style={{background: 'rgba(0,104,255,0.12)', border: '1px solid rgba(0,104,255,0.3)'}}
                        
                        >
                        <i className="fas fa-comment-dots text-blue-400"></i> Zalo: 0972613455
                    </a>
                    <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Claude Code Mastery · 2026
                    </p>
                </div>
            </div>
        </div>
    </footer>


    {/*  ===== STICKY BOTTOM BAR (mobile) =====  */}
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        style={{background: 'rgba(11,14,20,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.07)'}}>
        <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Claude Code Mastery Pro</p>
                <p className="text-sm font-black text-white">5.000.000đ <span className="text-emerald-400 text-xs font-bold">·
                        Hoàn tiền 7 ngày</span></p>
            </div>
            <a href="#register"
                className="flex-shrink-0 px-5 py-3 bg-indigo-600 text-white font-black rounded-xl text-xs uppercase tracking-widest whitespace-nowrap hover:bg-indigo-500 transition">
                Đăng ký ngay
            </a>
        </div>
    </div>


    

    {/*  ===== EXIT-INTENT POPUP =====  */}
    <div id="exitPopup"
        style={{display: 'none', position: 'fixed', inset: '0', zIndex: '9999', background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(10px)', padding: '1.5rem', alignItems: 'center', justifyContent: 'center'}}>
        <div
            style={{maxWidth: '500px', width: '100%', margin: 'auto', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', padding: '2rem 2.25rem', position: 'relative', boxShadow: '0 0 60px rgba(99,102,241,0.15)'}}>
            {/*  Close  */}
            <button 
                style={{position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', width: '2rem', height: '2rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>✕</button>

            {/*  Icon + Headline  */}
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
                <div
                    style={{width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <i className="fas fa-code" style={{color: '#818cf8', fontSize: '14px'}}></i>
                </div>
                <h3 style={{color: 'white', fontWeight: '900', fontSize: '1.05rem', lineHeight: '1.3', margin: '0'}}>Khoan đã — đừng rời
                    đi khi chưa rõ mình có phù hợp không</h3>
            </div>

            <p style={{color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.75rem'}}>Nếu Bạn đang xem khóa học
                Vibe Coding nhưng vẫn còn vài câu hỏi, hãy chọn cách thuận tiện nhất bên dưới.</p>
            <p style={{color: '#64748b', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>Tùng sẽ giúp Bạn xem level
                hiện tại, mục tiêu dự án và hướng học phù hợp nhất — trước khi Bạn quyết định đăng ký.</p>

            {/*  CTA 1: Zalo (primary)  */}
            <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '0.75rem', transition: 'border-color 0.2s'}}
                
                >
                <div
                    style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#0068ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <i className="fas fa-comment-dots" style={{color: 'white', fontSize: '16px'}}></i>
                </div>
                <div>
                    <p style={{color: 'white', fontWeight: '900', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Chat với Tùng qua Zalo
                    </p>
                    <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Hỏi nhanh về khóa học trước khi đăng ký ·
                        <strong style={{color: '#818cf8'}}>0972613455</strong></p>
                </div>
                <i className="fas fa-arrow-right" style={{color: '#818cf8', marginLeft: 'auto', fontSize: '12px'}}></i>
            </a>

            {/*  CTA 2: Form (secondary)  */}
            <a href="#register" 
                style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '1.25rem', transition: 'border-color 0.2s'}}
                
                >
                <div
                    style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <i className="fas fa-file-alt" style={{color: '#94a3b8', fontSize: '14px'}}></i>
                </div>
                <div>
                    <p style={{color: 'white', fontWeight: '700', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Quay lại form đăng ký
                        khóa học</p>
                    <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Điền form để được tư vấn và chốt lịch Zoom trong
                        24 giờ</p>
                </div>
                <i className="fas fa-arrow-right" style={{color: '#64748b', marginLeft: 'auto', fontSize: '12px'}}></i>
            </a>

            {/*  Dismiss  */}
            <p style={{textAlign: 'center', margin: '0'}}>
                <button 
                    style={{background: 'none', border: 'none', color: '#475569', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '2px'}}>Không,
                    tôi muốn xem tiếp nội dung</button>
            </p>
        </div>
    </div>

    


{/*  ===== BACK TO TOP =====  */}
<button id="backToTop" aria-label="Về đầu trang" >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 13.5V4.5M4.5 9l4.5-4.5L13.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</button>


{/*  ===== /BACK TO TOP =====  */}


    </>
  );
}
