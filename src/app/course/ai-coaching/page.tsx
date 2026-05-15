"use client";

import { useState } from "react";
import { useLandingInteractions } from "@/lib/useLandingInteractions";

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleLeadSubmit, isSubmitting, submitError } =
    useLandingInteractions({ source: "course-ai-coaching" });

  return (
    <>


{/*  ===== NAV =====  */}
<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0e14]/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/*  Logo  */}
        <a href="https://toilatung.com/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{background: 'var(--red)', boxShadow: '0 0 15px var(--red-glow)'}}>
                <i className="fas fa-user-tie text-white text-sm"></i>
            </div>
            <div>
                <span className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-0.5 group-hover:text-slate-400 transition">
                    <i className="fas fa-arrow-left mr-1 text-[8px]"></i>Tôi Là Tùng
                </span>
                <span className="block font-black text-white tracking-tighter uppercase text-sm leading-none">TVT <span style={{color: 'var(--red)'}}>Strategist</span></span>
            </div>
        </a>
        {/*  Desktop links  */}
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#problem" className="transition"  >Vấn đề</a>
            <a href="#value" className="transition"  >Giá trị</a>
            <a href="#roadmap" className="transition"  >Lộ trình</a>
            <a href="#founder" className="transition"  >Tôi là Tùng</a>
            <a href="#pricing" className="transition"  >Học phí</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#apply" className="hidden md:block px-5 py-2 text-white text-xs font-black uppercase tracking-widest rounded-xl transition" style={{background: 'var(--red)', boxShadow: '0 4px 15px var(--red-glow)'}}  >
                Audit ngay
            </a>
            {/*  Hamburger  */}
            <button id="hamburgerBtn" className="hamburger md:hidden flex flex-col gap-[6px] p-2 rounded-xl glass text-white" aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
    <span className="font-black text-white tracking-tighter uppercase text-sm">TVT <span style={{color: 'var(--red)'}}>Strategist</span></span>
    <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 glass rounded-xl flex items-center justify-center text-slate-400">
      <i className="fas fa-times text-sm"></i>
    </button>
  </div>
  <div className="p-4 flex flex-col gap-2">
    <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Vấn đề</a>
    <a href="#value" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Giá trị</a>
    <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Lộ trình</a>
    <a href="#founder" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Tôi là Tùng</a>
    <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Học phí</a>
    <a href="#apply" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-white text-center text-sm font-black uppercase tracking-widest rounded-xl transition" style={{background: 'var(--red)', boxShadow: '0 4px 15px var(--red-glow)'}}>Audit ngay</a>
  </div>
</div>




{/*  ===== HERO =====  */}
<header className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden" reveal">
    <div className="absolute -top-32 -right-32 w-[400px] md:w-[600px] h-[400px] md:h-[600px] blur-[120px] md:blur-[140px] rounded-full pointer-events-none" style={{background: 'rgba(255,45,45,0.12)'}}></div>
    <div className="absolute -bottom-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8 badge-pulse" style={{background: 'rgba(255,45,45,0.1)', border: '1px solid rgba(255,45,45,0.25)', color: 'var(--red)'}}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: 'var(--red)'}}></span>
            <span className="truncate">TVT Exclusive · 1-1 · Zoom trực tiếp</span>
        </div>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-[1.05]">
            Coaching AI 1-1<br />
            <span className="gradient-text italic">qua Zoom</span>
        </h1>

        <p className="hero-sub text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
            Dành cho người đã biết AI cơ bản nhưng muốn đi xa hơn.<br className="hidden sm:block" />
            <strong className="text-white">Chọn đúng tool → Xây workflow → Tạo đầu ra kinh doanh.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-user" style={{color: 'var(--red)'}}></i>
                <span><strong className="text-white">1 học viên</strong> / 1 chương trình</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-video text-emerald-400"></i>
                <span><strong className="text-white">4 buổi Zoom</strong> × 90 phút</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-cogs text-amber-400"></i>
                <span><strong className="text-white">System &gt; Tool</strong></span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-2">
            <a href="#apply" className="w-full sm:w-auto px-8 md:px-10 py-4 text-white font-black rounded-2xl transition text-sm md:text-base uppercase tracking-widest text-center" style={{background: 'var(--red)', boxShadow: '0 8px 30px var(--red-glow)'}}  >
                <i className="fas fa-paper-plane mr-2"></i>Đăng ký Audit 1-1
            </a>
            <a href="#roadmap" className="w-full sm:w-auto px-8 md:px-10 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 transition text-sm md:text-base text-center">
                <i className="fas fa-arrow-down mr-2" style={{color: 'var(--red)'}}></i>Xem lộ trình 4 buổi
            </a>
        </div>

        <p className="mt-5 text-xs text-slate-500 font-medium px-4">
            <i className="fas fa-lock mr-1" style={{color: 'var(--red)'}}></i> Không thiết kế đại trà — từng case được điều chỉnh theo mục tiêu cá nhân
        </p>
    </div>
</header>


{/*  ===== PROBLEM / FOR WHO =====  */}
<section id="problem" className="py-20 px-6 border-y border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Đây không phải khóa học AI phổ thông</p>
            <h2 className="text-3xl font-black text-white mb-3">Bạn đang gặp điều này không?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Phù hợp với người đã biết AI cơ bản nhưng muốn đưa nó vào công việc thật, thay vì tiếp tục học lan man mà chưa ra hệ.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Biết nhiều tool nhưng chưa khóa được tool chính — dùng rời rạc, thiếu trọng tâm?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Tạo được output nhưng chưa có workflow ổn định để lặp lại đều mỗi tuần?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Không biết áp AI vào đúng sản phẩm, đúng ngành, đúng mục tiêu kinh doanh?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Muốn dùng AI để tạo ảnh, video bán hàng nhưng kết quả chưa đủ chuyên nghiệp?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Học nhiều khóa AI nhưng vẫn loay hoay không biết bắt đầu từ đâu cho đúng?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-emerald-500/50 card-hover bg-emerald-500/5 reveal">
                <i className="fas fa-check-circle text-emerald-400 text-xl mb-3"></i>
                <p className="text-sm text-emerald-300 font-bold">Nếu bạn gật đầu với 2+ điều trên — Coaching 1-1 này được thiết kế đặc biệt cho bạn.</p>
            </div>
        </div>
    </div>
</section>


{/*  ===== VALUE (Giá trị nhận được) =====  */}
<section id="value" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-3">Sau coaching</p>
            <h2 className="text-4xl font-black text-white mb-4">Bạn nhận được <span className="gradient-text">giá trị gì?</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Không phải học thêm tool. Bạn sẽ có hệ thống làm việc với AI có thể vận hành ngay và lặp lại mỗi tuần.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition" style={{background: 'rgba(255,45,45,0.12)', border: '1px solid rgba(255,45,45,0.3)'}}>
                    <i className="fas fa-layer-group text-red-brand text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Tool stack cá nhân hóa</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Chọn đúng công cụ cho đúng việc, gọn và đủ để vận hành — <strong className="text-white">không học thêm tool thừa</strong>.</p>
            </div>
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/40 transition">
                    <i className="fas fa-images text-emerald-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Workflow ảnh & video bán hàng</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Từ brief → prompt → generate → chỉnh sửa → xuất bản thành <strong className="text-white">quy trình dễ lặp lại</strong> mỗi tuần.</p>
            </div>
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-500/40 transition">
                    <i className="fas fa-scroll text-amber-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Bộ Prompt mẫu cá nhân</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Prompt theo đúng case của bạn — không phải prompt chung chung. <strong className="text-white">Copy-paste và dùng ngay</strong>.</p>
            </div>
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-500/40 transition">
                    <i className="fas fa-pencil-alt text-purple-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Hệ thống content AI</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Viết idea, outline, caption, script và định hướng thông điệp theo <strong className="text-white">đúng sản phẩm đang bán</strong>.</p>
            </div>
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/40 transition">
                    <i className="fas fa-route text-blue-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Kế hoạch áp dụng 30 ngày</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Có thứ tự ưu tiên rõ để <strong className="text-white">tiếp tục tự vận hành</strong> sau coaching mà không bị mất nhịp.</p>
            </div>
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-500/40 transition">
                    <i className="fas fa-sync-alt text-rose-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Framework tái sử dụng mãi mãi</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Một hệ làm việc với AI có thể <strong className="text-white">apply cho mọi sản phẩm, mọi ngành</strong> trong tương lai.</p>
            </div>
        </div>

        <div className="mt-16 border border-white/10 rounded-3xl p-10 text-center" style={{background: 'linear-gradient(to right,rgba(255,45,45,0.08),rgba(52,211,153,0.08))'}}>
            <p className="text-2xl font-black text-white leading-relaxed">
                "Sau 4 buổi, bạn có một hệ AI gọn, rõ và đủ để<br />
                <span className="gradient-text">tạo ra đầu ra cụ thể cho kinh doanh.</span>"
            </p>
            <p className="text-slate-500 mt-3 text-sm">Không học thêm lý thuyết. Không thêm tool mới. Chỉ xây hệ từ những gì đang có.</p>
        </div>
    </div>
</section>


{/*  ===== ZOOM FORMAT =====  */}
<section className="py-16 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Hình thức đào tạo</p>
            <h2 className="text-3xl font-black text-white">Coaching 1-1 qua <span className="gradient-text">Zoom</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass p-6 rounded-2xl card-hover text-center reveal">
                <i className="fas fa-video text-2xl mb-4" style={{color: 'var(--red)'}}></i>
                <h3 className="font-black text-white text-sm uppercase mb-2">Format</h3>
                <p className="text-xs text-slate-400 leading-relaxed">1 học viên, 1 chương trình, 1 lộ trình rõ. Học trực tiếp qua Zoom theo từng buổi có mục tiêu cụ thể.</p>
            </div>
            <div className="glass p-6 rounded-2xl card-hover text-center reveal">
                <i className="fas fa-search text-emerald-400 text-2xl mb-4"></i>
                <h3 className="font-black text-white text-sm uppercase mb-2">Trước buổi học</h3>
                <p className="text-xs text-slate-400 leading-relaxed">TVT audit nhu cầu, ngành, mục tiêu và tình trạng hiện tại để vào buổi học với hướng xử lý rõ ràng hơn.</p>
            </div>
            <div className="glass p-6 rounded-2xl card-hover text-center reveal">
                <i className="fas fa-desktop text-amber-400 text-2xl mb-4"></i>
                <h3 className="font-black text-white text-sm uppercase mb-2">Trong buổi học</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Làm trực tiếp trên sản phẩm, nội dung, kênh thật. Share màn hình, sửa chi tiết và chốt quy trình ngay.</p>
            </div>
            <div className="glass p-6 rounded-2xl card-hover text-center reveal">
                <i className="fas fa-clipboard-list text-rose-400 text-2xl mb-4"></i>
                <h3 className="font-black text-white text-sm uppercase mb-2">Sau buổi học</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Nhận recap, prompt, checklist hoặc plan tiếp theo để tiếp tục làm trước buổi sau mà không bị rơi nhịp.</p>
            </div>
        </div>
    </div>
</section>


{/*  ===== CURRICULUM (4 BUỔI ZOOM) =====  */}
<section id="roadmap" className="py-24 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Lộ trình thực chiến</p>
            <h2 className="text-4xl font-black text-white mb-4">Coaching <span className="gradient-text">4 Buổi Zoom</span></h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"><i className="fas fa-video" style={{color: 'var(--red)'}}></i><span>Zoom Live 1-1</span></div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"><i className="fas fa-clock text-emerald-400"></i><span>4 buổi × 90 phút</span></div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"><i className="fas fa-record-vinyl text-rose-400"></i><span>Recording xem lại</span></div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"><i className="fas fa-comments text-amber-400"></i><span>Case cá nhân hóa</span></div>
            </div>
        </div>

        <div className="space-y-8">
            {/*  Buổi 1  */}
            <div className="relative pl-20 reveal">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl flex flex-col items-center justify-center text-white" style={{background: 'var(--red)', boxShadow: '0 0 20px var(--red-glow)', border: '1px solid var(--red-light)'}}>
                    <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                    <span className="text-xl font-black leading-none">1</span>
                </div>
                <div className="glass p-8 rounded-3xl card-hover reveal" style={{borderLeft: '4px solid var(--red)'}}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{color: 'var(--red)'}}>Audit & Định hướng</span>
                            <h3 className="text-2xl font-black text-white mt-1">Audit mục tiêu và bối cảnh kinh doanh</h3>
                        </div>
                        <span className="px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap" style={{background: 'rgba(255,45,45,0.1)', border: '1px solid rgba(255,45,45,0.25)', color: 'var(--red)'}}>90 phút</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Rà lại tool đang dùng và asset hiện tại</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Xác định điểm nghẽn thực tế cần tháo gỡ</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Khóa đúng outcome cần ưu tiên trước</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400"><strong className="text-white">Output:</strong> Audit hiện trạng và mục tiêu ưu tiên</span></div>
                    </div>
                </div>
            </div>

            {/*  Buổi 2  */}
            <div className="relative pl-20 reveal">
                <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(52,211,153,0.4)] border border-emerald-400">
                    <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                    <span className="text-xl font-black leading-none">2</span>
                </div>
                <div className="glass p-8 rounded-3xl card-hover border-l-4 border-emerald-500 reveal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Tool Stack</span>
                            <h3 className="text-2xl font-black text-white mt-1">Chốt bộ công cụ AI phù hợp</h3>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold rounded-full whitespace-nowrap">90 phút</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Giữ lại đúng tool cần dùng cho từng đầu việc</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Cắt bỏ công cụ thừa, tăng tốc độ triển khai</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Xây bộ stack gọn, phù hợp theo ngành của bạn</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400"><strong className="text-white">Output:</strong> Tool stack cá nhân hóa</span></div>
                    </div>
                </div>
            </div>

            {/*  Buổi 3  */}
            <div className="relative pl-20 reveal">
                <div className="absolute left-0 top-0 w-12 h-12 bg-amber-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-400">
                    <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                    <span className="text-xl font-black leading-none">3</span>
                </div>
                <div className="glass p-8 rounded-3xl card-hover border-l-4 border-amber-500 reveal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Build + Workflow</span>
                            <h3 className="text-2xl font-black text-white mt-1">Thiết lập workflow ảnh và video ngắn</h3>
                        </div>
                        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold rounded-full whitespace-nowrap">90 phút</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Làm trực tiếp từ brief đến xuất bản trên case thật</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Viết script và flow video TikTok/Reels/Facebook</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Tạo ảnh visual, banner, thumbnail bán hàng</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400"><strong className="text-white">Output:</strong> Workflow ảnh, video và prompt pack</span></div>
                    </div>
                </div>
            </div>

            {/*  Buổi 4  */}
            <div className="relative pl-20 reveal">
                <div className="absolute left-0 top-0 w-12 h-12 bg-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] border border-purple-400">
                    <span className="text-[9px] font-black uppercase leading-none">Buổi</span>
                    <span className="text-xl font-black leading-none">4</span>
                </div>
                <div className="glass p-8 rounded-3xl card-hover border-l-4 border-purple-500 reveal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">System + Playbook</span>
                            <h3 className="text-2xl font-black text-white mt-1">Ghép thành hệ vận hành 30 ngày</h3>
                        </div>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-bold rounded-full whitespace-nowrap">90 phút</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Kết nối các mắt xích thành quy trình rõ việc</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Sắp xếp ưu tiên để tự vận hành sau coaching</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400">Kết nối AI vào bán hàng, content, affiliate</span></div>
                        <div className="flex items-start gap-3"><i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i><span className="text-sm text-slate-400"><strong className="text-white">Output:</strong> Playbook áp dụng 30 ngày</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== TOOLS =====  */}
<section className="py-20 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Hệ sinh thái công cụ</p>
            <h2 className="text-3xl font-black text-white mb-3">AI Tools <span className="gradient-text">đồng hành</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Không dạy tràn lan. Chỉ giữ bộ công cụ đủ mạnh để hỗ trợ nội dung, hình ảnh, giọng nói và video trong công việc thực tế.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-[#10a37f]/20 border border-[#10a37f]/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-robot text-[#10a37f] text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">ChatGPT</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Trợ lý viết kịch bản, lên kế hoạch Marketing và tư vấn chiến lược.</p>
                </div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-gem text-blue-400 text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">Gemini</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Tìm kiếm, phân tích dữ liệu và cập nhật xu hướng từ Google.</p>
                </div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-terminal text-amber-400 text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">Claude</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Chuyên gia viết nội dung dài, chuyên sâu và xử lý tài liệu thông minh.</p>
                </div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-microphone-alt text-purple-400 text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">ElevenLabs</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Đỉnh cao giọng nói AI, biến văn bản thành tiếng nói truyền cảm như người thật.</p>
                </div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-magic text-rose-400 text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">Flow</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Sáng tạo hình ảnh chân thực với Imagen 3 và dựng video chuyên nghiệp với VEO 3.</p>
                </div>
            </div>
            <div className="glass p-6 rounded-2xl card-hover flex items-start gap-4 reveal">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-paint-brush text-fuchsia-400 text-lg"></i>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-white text-sm">Whisk</h3>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Dùng ngay</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Gợi ý ý tưởng nội dung, tạo ảnh nghệ thuật và video sống động.</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== FOUNDER =====  */}
<section id="founder" className="py-20 px-6 border-t border-white/5">
    <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-10 glow-indigo reveal">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                {/*  Avatar Column  */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                    {/*  Avatar with gradient ring  */}
                    <div className="relative inline-block mb-5">
                        <div className="w-36 h-36 rounded-full p-[3px] mx-auto lg:mx-0" style={{background: 'linear-gradient(135deg,var(--red),#ff8c42)'}}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0e14] flex items-center justify-center" style={{border: '3px solid #0b0e14'}}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/tung-soc-son.webp?v=20260510"
                                    alt="Nguyễn Thanh Tùng — TVT Strategist"
                                    className="w-full h-full object-cover object-top block"
                                 />
                            </div>
                        </div>
                        {/*  Online status dot  */}
                        <span className="absolute bottom-2 right-2 lg:right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0b0e14] block z-10"></span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{color: 'var(--red)'}}>Tôi là Tùng</p>
                    <h3 className="text-xl font-black text-white">Nguyễn Thanh Tùng</h3>
                    <p className="text-xs text-slate-500 mt-1">Founder TVT Agency &<br />Hành trình Tôi là Tùng</p>
                    {/*  Social links  */}
                    <div className="flex justify-center lg:justify-start gap-2 mt-4">
                        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-blue-400/40" title="Zalo">
                            <i className="fab fa-facebook-f text-blue-400 text-xs"></i>
                        </a>
                        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-white/20" title="Zalo">
                            <i className="fab fa-tiktok text-white text-xs"></i>
                        </a>
                        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="w-8 h-8 glass rounded-xl flex items-center justify-center transition hover:border-red-400/40" title="Zalo">
                            <i className="fab fa-youtube text-red-400 text-xs"></i>
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý "Marketing phượt". Hơn 16 năm thực chiến Branding và Marketing, tôi chọn cách đúc kết thành những quy trình gọn gàng (Agentic Workflow).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Hành trình của chúng ta không phải là học thuộc các tính năng công cụ. Tôi sẽ đồng hành cùng bạn ứng dụng <strong className="text-white">Director Mindset</strong> — tự mình làm đạo diễn, điều phối AI và thiết kế luồng công việc để mỗi ngày làm việc đều là một trải nghiệm thú vị.
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-chart-line text-red-brand mb-2"></i>
                            <p className="text-[10px] font-bold text-white uppercase">Kinh nghiệm thực chiến</p>
                        </div>
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-sitemap text-emerald-400 mb-2"></i>
                            <p className="text-[10px] font-bold text-white uppercase">System &gt; Tool</p>
                        </div>
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-user-check text-amber-400 mb-2"></i>
                            <p className="text-[10px] font-bold text-white uppercase">Case cá nhân hóa</p>
                        </div>
                    </div>
                    <a href="#apply" className="inline-flex items-center gap-2 px-7 py-4 text-white font-black rounded-2xl transition text-sm uppercase tracking-widest mx-auto lg:mx-0" style={{background: 'var(--red)'}}  >
                        <i className="fas fa-arrow-right"></i> Đăng ký coaching 1-1
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== PRICING =====  */}
<section id="pricing" className="py-24 px-6 border-t border-white/5">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Đầu tư</p>
            <h2 className="text-4xl font-black text-white">Mức đầu tư <span className="gradient-text">minh bạch</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/*  Pricing card  */}
            <div className="p-10 rounded-3xl glow-indigo relative" style={{background: 'linear-gradient(to bottom,rgba(255,45,45,0.15),rgba(180,0,0,0.1))', border: '1px solid rgba(255,45,45,0.4)'}}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-widest rounded-full whitespace-nowrap" style={{background: 'var(--red)'}}>
                    <i className="fas fa-star mr-1"></i> Gói Coaching Premium
                </div>
                <div className="mb-8 mt-2">
                    <p className="text-sm text-slate-400">Dành cho 1 học viên · Coaching 1-1 qua Zoom</p>
                    <div className="text-5xl font-black text-white mt-2">5.000.000đ</div>
                    <p className="text-slate-500 text-sm mt-1">Có tài liệu, prompt và định hướng áp dụng</p>
                </div>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-emerald-400 flex-shrink-0"></i> 4 buổi Zoom Live 1-1</li>
                    <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-emerald-400 flex-shrink-0"></i> Recording xem lại vĩnh viễn</li>
                    <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-emerald-400 flex-shrink-0"></i> Audit trước mỗi buổi học</li>
                    <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-emerald-400 flex-shrink-0"></i> Recap + Prompt + Checklist sau mỗi buổi</li>
                    <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-emerald-400 flex-shrink-0"></i> Tool stack cá nhân hóa</li>
                    <li className="flex items-center gap-3 text-sm text-amber-300 font-bold"><i className="fas fa-star text-amber-400 flex-shrink-0"></i> Playbook áp dụng 30 ngày sau coaching</li>
                </ul>
                <a href="#apply" className="block w-full py-4 text-white font-black text-center rounded-2xl transition uppercase tracking-widest text-sm" style={{background: 'var(--red)', boxShadow: '0 4px 20px var(--red-glow)'}}  >
                    Đăng ký Coaching 1-1
                </a>
            </div>

            {/*  Bonus list  */}
            <div className="glass p-10 rounded-3xl reveal">
                <h3 className="text-2xl font-black text-white mb-6">Bonus bộ quà tặng đi kèm</h3>
                <div className="space-y-4">
                    <div className="bonus-card p-4 rounded-2xl flex items-start gap-3 reveal">
                        <i className="fas fa-check-circle text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <p className="text-sm text-slate-300">Bộ tài liệu tổng hợp dùng trong quá trình coaching</p>
                    </div>
                    <div className="bonus-card p-4 rounded-2xl flex items-start gap-3 reveal">
                        <i className="fas fa-check-circle text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <p className="text-sm text-slate-300">Prompt mẫu theo từng mục tiêu công việc của bạn</p>
                    </div>
                    <div className="bonus-card p-4 rounded-2xl flex items-start gap-3 reveal">
                        <i className="fas fa-check-circle text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <p className="text-sm text-slate-300">Checklist thao tác để tự làm lại sau buổi học</p>
                    </div>
                    <div className="bonus-card p-4 rounded-2xl flex items-start gap-3 reveal">
                        <i className="fas fa-check-circle text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <p className="text-sm text-slate-300">Bộ gợi ý workflow ảnh, video và nội dung</p>
                    </div>
                    <div className="bonus-card p-4 rounded-2xl flex items-start gap-3 reveal">
                        <i className="fas fa-check-circle text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <p className="text-sm text-slate-300">Tài liệu định hướng áp dụng trong 30 ngày tiếp theo</p>
                    </div>
                </div>

                {/*  Guarantee  */}
                <div className="mt-6 flex items-start gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                    <i className="fas fa-shield-alt text-emerald-400 text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                        <p className="font-black text-white text-sm mb-1">Cam kết chất lượng</p>
                        <p className="text-xs text-slate-400">Nếu sau buổi 1 không phù hợp, hoàn tiền toàn bộ — không hỏi lý do.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== REGISTRATION FORM =====  */}
<section id="apply" className="py-24 px-6 border-t border-white/5">
    <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>
                <i className="fas fa-lock mr-1"></i> Chương trình không thiết kế đại trà
            </p>
            <h2 className="text-4xl font-black text-white mb-4">Đăng ký <span className="gradient-text">Audit 1-1</span></h2>
            <p className="text-slate-500">Điền thông tin bên dưới — TVT sẽ audit nhanh và liên hệ chốt lịch Zoom trong 24 giờ.</p>
        </div>

        <div className="glass rounded-3xl p-10 glow-indigo reveal">
            <form id="enrollForm" className="space-y-5" onSubmit={handleLeadSubmit}>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Họ và tên *</label>
                    <input type="text" name="name" placeholder="Nguyễn Văn A" required className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" name="email" placeholder="email@example.com" required className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Số điện thoại *</label>
                    <input type="tel" name="phone" placeholder="0901 234 567" required className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ngành / Công việc hiện tại *</label>
                    <select name="industry" required defaultValue="" className="form-input w-full px-5 py-3.5 rounded-2xl text-sm appearance-none cursor-pointer">
                        <option value="" disabled>Chọn ngành phù hợp</option>
                        <option value="ecommerce">E-commerce / Bán hàng online</option>
                        <option value="content">Content Creator / KOL</option>
                        <option value="service">Dịch vụ / Freelancer</option>
                        <option value="business">Chủ doanh nghiệp</option>
                        <option value="marketing">Marketing / Quảng cáo</option>
                        <option value="other">Khác</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn đang dùng AI ở mức nào?</label>
                    <select name="level" className="form-input w-full px-5 py-3.5 rounded-2xl text-sm appearance-none cursor-pointer">
                        <option value="basic">Biết dùng ChatGPT / Claude cơ bản</option>
                        <option value="intermediate">Đã thử nhiều tool nhưng chưa ra workflow</option>
                        <option value="advanced">Đang dùng đều nhưng muốn tối ưu hóa</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn muốn giải quyết vấn đề gì? (không bắt buộc)</label>
                    <textarea name="note" placeholder="VD: Muốn tạo video bán hàng bằng AI, xây workflow content hàng tuần, tự làm ảnh sản phẩm..." rows={3}
                        className="form-input w-full px-5 py-3.5 rounded-2xl text-sm resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-5 text-white font-black text-base rounded-2xl transition uppercase tracking-widest disabled:opacity-60 disabled:cursor-wait" style={{background: 'var(--red)', boxShadow: '0 8px 30px var(--red-glow)'}}  >
                    <i className="fas fa-paper-plane mr-2"></i> {isSubmitting ? "Đang gửi..." : "Gửi đăng ký Audit 1-1"}
                </button>
                {submitError && <p className="text-center text-sm text-red-400">{submitError}</p>}
                <p className="text-center text-xs text-slate-600">Thông tin của bạn được bảo mật tuyệt đối. Không spam.</p>
            </form>

            <div id="successMsg" className="hidden text-center py-10">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-emerald-400 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Đã nhận thông tin!</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    TVT sẽ audit case của bạn và liên hệ qua email / số điện thoại<br />
                    trong vòng <strong className="text-white">24 giờ</strong> để chốt lịch Zoom.
                </p>
                <p className="mt-4 text-sm font-bold" style={{color: 'var(--red)'}}>
                    <i className="fas fa-envelope mr-1"></i> Kiểm tra hộp thư (kể cả spam) để nhận thông tin chuẩn bị.
                </p>
            </div>
        </div>

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


{/*  ===== FAQ =====  */}
<section className="py-20 px-6 border-t border-white/5">
    <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-black text-white">Câu hỏi <span className="gradient-text">thường gặp</span></h2>
        </div>
        <div className="space-y-4" id="faqList">
            <div className="faq-item glass rounded-2xl overflow-hidden">
                <button  className="w-full flex items-center justify-between px-7 py-5 text-left">
                    <span className="font-bold text-white text-sm">Tôi phải biết code hay kỹ thuật mới học được không?</span>
                    <i className="fas fa-plus text-red-brand flex-shrink-0 transition-transform"></i>
                </button>
                <div className="faq-answer hidden px-7 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">Không cần. Coaching này dành cho người <strong className="text-white">đã biết dùng AI cơ bản</strong> (ChatGPT, Claude) và muốn áp dụng vào công việc kinh doanh. Không yêu cầu background kỹ thuật.</p>
                </div>
            </div>
            <div className="faq-item glass rounded-2xl overflow-hidden">
                <button  className="w-full flex items-center justify-between px-7 py-5 text-left">
                    <span className="font-bold text-white text-sm">4 buổi Zoom diễn ra trong bao lâu và như thế nào?</span>
                    <i className="fas fa-plus text-red-brand flex-shrink-0 transition-transform"></i>
                </button>
                <div className="faq-answer hidden px-7 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">Mỗi buổi khoảng <strong className="text-white">90 phút</strong>, học 1-1 trực tiếp qua Zoom. Lịch học được sắp xếp linh hoạt theo khung thời gian phù hợp của bạn. Tần suất khuyến nghị: 1 buổi/tuần.</p>
                </div>
            </div>
            <div className="faq-item glass rounded-2xl overflow-hidden">
                <button  className="w-full flex items-center justify-between px-7 py-5 text-left">
                    <span className="font-bold text-white text-sm">Chương trình có được cá nhân hóa theo ngành của tôi không?</span>
                    <i className="fas fa-plus text-red-brand flex-shrink-0 transition-transform"></i>
                </button>
                <div className="faq-answer hidden px-7 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">Đây là điểm khác biệt lớn nhất. TVT audit case trước mỗi buổi và <strong className="text-white">làm trực tiếp trên sản phẩm, kênh, nội dung thật của bạn</strong> — không phải demo chung chung.</p>
                </div>
            </div>
            <div className="faq-item glass rounded-2xl overflow-hidden">
                <button  className="w-full flex items-center justify-between px-7 py-5 text-left">
                    <span className="font-bold text-white text-sm">Sau 4 buổi tôi có tự vận hành được không?</span>
                    <i className="fas fa-plus text-red-brand flex-shrink-0 transition-transform"></i>
                </button>
                <div className="faq-answer hidden px-7 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">Đó là mục tiêu chính. Bạn sẽ có <strong className="text-white">Playbook 30 ngày rõ việc</strong>, bộ Prompt mẫu, Checklist thao tác và Tool stack để tiếp tục tự vận hành sau khi kết thúc coaching.</p>
                </div>
            </div>
            <div className="faq-item glass rounded-2xl overflow-hidden">
                <button  className="w-full flex items-center justify-between px-7 py-5 text-left">
                    <span className="font-bold text-white text-sm">Tôi cần chuẩn bị gì trước buổi học đầu tiên?</span>
                    <i className="fas fa-plus text-red-brand flex-shrink-0 transition-transform"></i>
                </button>
                <div className="faq-answer hidden px-7 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">Chỉ cần: (1) Máy tính có Zoom, (2) Tài khoản ChatGPT hoặc Claude, (3) Danh sách 2-3 đầu việc bạn muốn AI hỗ trợ. TVT sẽ gửi câu hỏi audit chi tiết sau khi đăng ký để buổi đầu đi thẳng vào vấn đề.</p>
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
                <div className="w-10 h-10 rounded flex items-center justify-center" style={{background: 'var(--red)'}}>
                    <i className="fas fa-user-tie text-white"></i>
                </div>
                <div>
                    <span className="block text-lg font-black text-white tracking-tighter uppercase">TVT <span style={{color: 'var(--red)'}}>Strategist</span></span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">AI Coaching 1-1 Framework</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <a href="#problem" className="transition"  >Vấn đề</a>
                <a href="#value" className="transition"  >Giá trị</a>
                <a href="#roadmap" className="transition"  >Lộ trình</a>
                <a href="#founder" className="transition"  >Tôi là Tùng</a>
                <a href="#pricing" className="transition"  >Học phí</a>
                <a href="#apply" className="transition"  >Đăng ký</a>
            </div>
        </div>
        {/*  Other programs  */}
        <div className="border-t border-white/5 pt-8 mb-8">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest text-center mb-5">Các chương trình khác của Tôi Là Tùng</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="https://toilatung.com/" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-white/20">
                    <i className="fas fa-user-tie" style={{color: 'var(--red)'}}></i> ← Trang chủ Tôi Là Tùng
                </a>
                <a href="/course/vibe-coding" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-indigo-400/40">
                    <i className="fas fa-terminal text-indigo-400"></i> Claude Code Mastery Pro
                </a>
                <a href="/course/phunulamchuai" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-pink-400/40">
                    <i className="fas fa-heart text-pink-400"></i> Phụ Nữ Làm Chủ AI (Miễn phí)
                </a>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-medium italic">
                "Bạn không mua thêm một khóa học AI. Bạn đầu tư vào một lộ trình có hệ thống, có đầu ra để áp dụng ngay."
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
                <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                   className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition"
                   style={{background: 'rgba(0,104,255,0.12)', border: '1px solid rgba(0,104,255,0.3)'}}
                    >
                    <i className="fas fa-comment-dots text-blue-400"></i> Zalo: 0972613455
                </a>
                <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">TVT Strategist · 2026</p>
            </div>
        </div>
    </div>
</footer>


{/*  ===== STICKY BOTTOM BAR (mobile) =====  */}
<div className="fixed bottom-0 left-0 right-0 z-40 md:hidden" style={{background: 'rgba(11,14,20,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.07)'}}>
    <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Coaching AI 1-1</p>
            <p className="text-sm font-black text-white">5.000.000đ <span className="text-emerald-400 text-xs font-bold">· Hoàn tiền 100%</span></p>
        </div>
        <a href="#apply" className="flex-shrink-0 px-5 py-3 text-white font-black rounded-xl text-xs uppercase tracking-widest whitespace-nowrap" style={{background: 'var(--red)', boxShadow: '0 4px 16px var(--red-glow)'}}>
            Đăng ký ngay
        </a>
    </div>
</div>




{/*  ===== EXIT-INTENT POPUP =====  */}
<div id="exitPopup" style={{display: 'none', position: 'fixed', inset: '0', zIndex: '9999', background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(10px)', padding: '1.5rem', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{maxWidth: '500px', width: '100%', margin: 'auto', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', padding: '2rem 2.25rem', position: 'relative', boxShadow: '0 0 60px rgba(255,45,45,0.15)'}}>
        {/*  Close  */}
        <button  style={{position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', width: '2rem', height: '2rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>✕</button>

        {/*  Icon + Headline  */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
            <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(255,45,45,0.15)', border: '1px solid rgba(255,45,45,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-user-tie" style={{color: '#ff2d2d', fontSize: '14px'}}></i>
            </div>
            <h3 style={{color: 'white', fontWeight: '900', fontSize: '1.05rem', lineHeight: '1.3', margin: '0'}}>Khoan đã — đừng rời đi khi chưa rõ mình có phù hợp không</h3>
        </div>

        <p style={{color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.75rem'}}>Nếu Bạn đang xem Coaching AI 1-1 nhưng vẫn còn vài câu hỏi, hãy chọn cách thuận tiện nhất bên dưới.</p>
        <p style={{color: '#64748b', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>Chương trình này không dạy đại trà. Tùng sẽ dựa trên công việc, mục tiêu và mức độ đang dùng AI của Bạn để xem hướng nào phù hợp nhất.</p>

        {/*  CTA 1: Zalo (primary)  */}
        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
           style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(255,45,45,0.12)', border: '1px solid rgba(255,45,45,0.35)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '0.75rem', transition: 'border-color 0.2s'}}
            >
            <div style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#0068ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-comment-dots" style={{color: 'white', fontSize: '16px'}}></i>
            </div>
            <div>
                <p style={{color: 'white', fontWeight: '900', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Chat với Tùng qua Zalo</p>
                <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Hỏi nhanh case của Bạn trước khi chốt lịch · <strong style={{color: '#ff2d2d'}}>0972613455</strong></p>
            </div>
            <i className="fas fa-arrow-right" style={{color: '#ff2d2d', marginLeft: 'auto', fontSize: '12px'}}></i>
        </a>

        {/*  CTA 2: Form (secondary)  */}
        <a href="#register" 
           style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '1.25rem', transition: 'border-color 0.2s'}}
            >
            <div style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-file-alt" style={{color: '#94a3b8', fontSize: '14px'}}></i>
            </div>
            <div>
                <p style={{color: 'white', fontWeight: '700', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Quay lại đăng ký Audit 1-1</p>
                <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Điền form để nhận phản hồi và chốt lịch Zoom trong 24 giờ</p>
            </div>
            <i className="fas fa-arrow-right" style={{color: '#64748b', marginLeft: 'auto', fontSize: '12px'}}></i>
        </a>

        {/*  Dismiss  */}
        <p style={{textAlign: 'center', margin: '0'}}>
            <button  style={{background: 'none', border: 'none', color: '#475569', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '2px'}}>Không, tôi muốn xem tiếp nội dung</button>
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
