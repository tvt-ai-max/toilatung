"use client";

import { useState } from "react";
import { useLandingInteractions } from "@/lib/useLandingInteractions";

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleLeadSubmit, isSubmitting, submitError } =
    useLandingInteractions({ source: "course-phunulamchuai" });

  return (
    <>


{/*  ===== NAV =====  */}
<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0e14]/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/*  Logo  */}
        <a href="https://toilatung.com/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{background: 'var(--pink)', boxShadow: '0 0 15px var(--pink-glow)'}}>
                <i className="fas fa-female text-white text-sm"></i>
            </div>
            <div>
                <span className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-0.5 group-hover:text-slate-400 transition">
                    <i className="fas fa-arrow-left mr-1 text-[8px]"></i>Tôi Là Tùng
                </span>
                <span className="block font-black text-white tracking-tighter text-sm leading-none">Phụ Nữ <span style={{color: 'var(--pink)'}}>Làm Chủ AI</span></span>
            </div>
        </a>
        {/*  Desktop links  */}
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#problem" className="transition"  >Vấn đề</a>
            <a href="#journey" className="transition"  >Lộ trình</a>
            <a href="#tools" className="transition"  >Công cụ</a>
            <a href="#founder" className="transition"  >Tôi là Tùng</a>
            <a href="#register" className="transition"  >Đăng ký</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#register" className="hidden md:block px-5 py-2 text-white text-xs font-black uppercase tracking-widest rounded-xl transition" style={{background: 'var(--pink)', boxShadow: '0 4px 15px var(--pink-glow)'}}  >
                Miễn phí
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
    <span className="font-black text-white tracking-tighter text-sm">Phụ Nữ <span style={{color: 'var(--pink)'}}>Làm Chủ AI</span></span>
    <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 glass rounded-xl flex items-center justify-center text-slate-400">
      <i className="fas fa-times text-sm"></i>
    </button>
  </div>
  <div className="p-4 flex flex-col gap-2">
    <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Vấn đề</a>
    <a href="#journey" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Lộ trình</a>
    <a href="#tools" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Công cụ</a>
    <a href="#founder" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Tôi là Tùng</a>
    <a href="#register" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-400 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition">Đăng ký</a>
    <a href="#register" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-white text-center text-sm font-black uppercase tracking-widest rounded-xl transition" style={{background: 'var(--pink)', boxShadow: '0 4px 15px var(--pink-glow)'}}>Miễn phí</a>
  </div>
</div>




{/*  ===== HERO =====  */}
<header className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden" reveal">
    <div className="absolute -top-32 -right-32 w-[400px] md:w-[600px] h-[400px] md:h-[600px] blur-[120px] md:blur-[140px] rounded-full pointer-events-none" style={{background: 'rgba(244,114,182,0.12)'}}></div>
    <div className="absolute -bottom-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
        {/*  FREE badge  */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-6 md:mb-8 badge-pulse" style={{background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399'}}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-400"></span>
            <span className="truncate">100% Miễn Phí · Lộ trình 21 ngày · Dành cho 8x, 9x</span>
        </div>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-[1.05]">
            Phụ Nữ<br />
            <span className="gradient-text italic">Làm Chủ AI</span>
        </h1>

        <p className="hero-sub text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
            Dành riêng cho phụ nữ thế hệ <strong className="text-white">8x, 9x</strong> — biến vốn sống thực tế<br className="hidden sm:block" />
            thành <strong className="text-white">thu nhập bền vững trên internet.</strong>
        </p>

        {/*  Social proof  */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-calendar-alt" style={{color: 'var(--pink)'}}></i>
                <span><strong className="text-white">21 ngày</strong> lộ trình rõ ràng</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-clock text-amber-400"></i>
                <span><strong className="text-white">3 tiếng/ngày</strong> · Linh hoạt</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
                <i className="fas fa-gift text-emerald-400"></i>
                <span><strong className="text-white">Hoàn toàn</strong> miễn phí</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-2">
            <a href="#register" className="w-full sm:w-auto px-8 md:px-10 py-4 text-white font-black rounded-2xl transition text-sm md:text-base uppercase tracking-widest text-center" style={{background: 'var(--pink)', boxShadow: '0 8px 30px var(--pink-glow)'}}  >
                <i className="fas fa-gift mr-2"></i>Đăng ký miễn phí ngay
            </a>
            <a href="#journey" className="w-full sm:w-auto px-8 md:px-10 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 transition text-sm md:text-base text-center">
                <i className="fas fa-arrow-down mr-2" style={{color: 'var(--pink)'}}></i>Xem lộ trình 21 ngày
            </a>
        </div>

        <p className="mt-5 text-xs text-slate-500 font-medium px-4">
            <i className="fas fa-heart mr-1" style={{color: 'var(--pink)'}}></i> Không cần kỹ thuật — Không cần kinh nghiệm — Chỉ cần điện thoại và 3 tiếng/ngày
        </p>
    </div>
</header>


{/*  ===== FOR WHO =====  */}
<section id="problem" className="py-20 px-4 md:px-6 border-y border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--pink)'}}>Khóa học này dành cho</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Bạn có đang cảm thấy thế này?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Thấy AI "đáng sợ", phức tạp — sợ mình không theo kịp thế hệ trẻ?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Có 20+ năm kinh nghiệm sống thực tế nhưng không biết kiếm tiền từ internet?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Bận chăm gia đình, không có 8 tiếng/ngày để học — muốn có lộ trình vừa vặn?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Đã thử học nhiều nơi nhưng quá kỹ thuật, quá trừu tượng — bỏ giữa chừng?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-rose-500/50 card-hover reveal">
                <i className="fas fa-times-circle text-rose-400 text-xl mb-3"></i>
                <p className="text-sm text-slate-300 font-medium">Muốn tạo thu nhập thụ động Online nhưng không biết bắt đầu từ đâu?</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-emerald-500/50 card-hover bg-emerald-500/5 reveal">
                <i className="fas fa-check-circle text-emerald-400 text-xl mb-3"></i>
                <p className="text-sm text-emerald-300 font-bold">Nếu bạn gật đầu với 2+ điều trên — lộ trình 21 ngày này được thiết kế đặc biệt cho bạn.</p>
            </div>
        </div>
    </div>
</section>


{/*  ===== 21-DAY JOURNEY =====  */}
<section id="journey" className="py-24 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--pink)'}}>Lộ trình thực chiến</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">21 Ngày <span className="gradient-text">Thay Đổi Bản Thân</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Chia thành 3 giai đoạn rõ ràng — mỗi ngày một nhiệm vụ cụ thể, không mơ hồ, không lạc lối.</p>
        </div>

        <div className="space-y-8">

            {/*  Giai đoạn 1  */}
            <div className="relative pl-20 timeline-line reveal">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl flex flex-col items-center justify-center text-white border" style={{background: 'var(--pink)', boxShadow: '0 0 20px var(--pink-glow)', borderColor: 'rgba(244,114,182,0.5)'}}>
                    <span className="text-[9px] font-black uppercase leading-none">GĐ</span>
                    <span className="text-xl font-black leading-none">1</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-3xl card-hover border-l-4 reveal" style={{borderLeftColor: 'var(--pink)'}}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{color: 'var(--pink)'}}>Ngày 1–7 · Xây nền tảng</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mt-1">Kết Bạn Với AI & Tìm Giọng Nói Riêng</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.25)', color: 'var(--pink)'}}>7 ngày</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 1-2: Học ChatGPT/Gemini như trò chuyện với người em trong nhà</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 3: AI khai phá 50 chủ đề từ vốn sống của bạn</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 4: Xây "cửa hàng số" — TikTok, Facebook Page, YouTube</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 5: Prompting chuẩn — Vai trò + Nhiệm vụ + Đối tượng</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 6-7: <strong className="text-white">Viết 3 kịch bản đầu tay</strong> — storytelling thật từ kinh nghiệm sống</span>
                        </div>
                    </div>
                    <div className="mt-5 px-4 py-2 rounded-xl inline-block text-xs font-bold" style={{background: 'rgba(244,114,182,0.08)', color: 'var(--pink)'}}>
                        🎯 Kết quả: Có kênh + kịch bản đầu tay
                    </div>
                </div>
            </div>

            {/*  Giai đoạn 2  */}
            <div className="relative pl-20 timeline-line reveal">
                <div className="absolute left-0 top-0 w-12 h-12 bg-amber-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-400">
                    <span className="text-[9px] font-black uppercase leading-none">GĐ</span>
                    <span className="text-xl font-black leading-none">2</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-3xl card-hover border-l-4 border-amber-500 reveal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Ngày 8–14 · Quan trọng nhất</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mt-1">Sản Xuất Nội Dung Đa Phương Tiện</h3>
                        </div>
                        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold rounded-full whitespace-nowrap">7 ngày</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 8-9: Tạo hình ảnh với Canva — ảnh đại diện & minh hoạ bài viết</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 10-11: Làm chủ âm thanh — tạo Podcast với Vbee/ElevenLabs</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 12-13: Dựng video bằng CapCut — 3 nút: Cắt · Chữ · Nhạc</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 14: <strong className="text-white">🎉 Lễ Ra Mắt</strong> — Đăng video đầu tiên lên mạng!</span>
                        </div>
                    </div>
                    <div className="mt-5 px-4 py-2 bg-amber-500/10 rounded-xl inline-block text-xs font-bold text-amber-400">
                        🎯 Kết quả: Video đầu tiên lên sóng!
                    </div>
                </div>
            </div>

            {/*  Giai đoạn 3  */}
            <div className="relative pl-20 reveal">
                <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(52,211,153,0.4)] border border-emerald-400">
                    <span className="text-[9px] font-black uppercase leading-none">GĐ</span>
                    <span className="text-xl font-black leading-none">3</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-3xl card-hover border-l-4 border-emerald-500 reveal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Ngày 15–21 · Thu hoạch</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mt-1">Monetize — Tạo Ra Thu Nhập Đầu Tiên</h3>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold rounded-full whitespace-nowrap">7 ngày</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 15-16: Đăng ký Affiliate — sách, phụ kiện đúng tệp khách hàng</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 17: AI viết kịch bản bán hàng kiểu "chia sẻ" — không giống quảng cáo</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 18: Kỹ thuật "giật tít" — AI tạo 10 tiêu đề gây tò mò/video</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 19-20: Lịch đăng bài tự động + tương tác cộng đồng</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-400 mt-1 text-xs flex-shrink-0"></i>
                            <span className="text-sm text-slate-400">Ngày 21: <strong className="text-white">Tổng kết & Đóng gói quy trình</strong> tái dùng mãi mãi</span>
                        </div>
                    </div>
                    <div className="mt-5 px-4 py-2 bg-emerald-500/10 rounded-xl inline-block text-xs font-bold text-emerald-400">
                        🎯 Kết quả: Hoa hồng Affiliate đầu tiên!
                    </div>
                </div>
            </div>
        </div>

        {/*  Daily schedule  */}
        <div className="mt-16 glass rounded-3xl p-6 md:p-10 reveal">
            <h3 className="text-2xl font-black text-white mb-2 text-center">⏰ Thời Gian Biểu Mỗi Ngày <span style={{color: 'var(--pink)'}}>(Chỉ 3 Tiếng!)</span></h3>
            <p className="text-center text-slate-500 text-sm mb-8">Phù hợp cho chị em vừa lo gia đình, vừa kinh doanh</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border-l-4 reveal" style={{borderLeftColor: 'var(--gold)'}}>
                    <p className="font-black text-amber-400 mb-3 text-sm uppercase tracking-wider">🌅 Buổi Sáng — 60 phút (Tư duy)</p>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 15 phút — Xem nội dung truyền cảm hứng</li>
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 30 phút — Hỏi AI lên kịch bản & ý tưởng</li>
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 15 phút — Lưu ý tưởng vào sổ tay số</li>
                    </ul>
                </div>
                <div className="glass rounded-2xl p-6 border-l-4 reveal" style={{borderLeftColor: 'var(--pink)'}}>
                    <p className="font-black mb-3 text-sm uppercase tracking-wider" style={{color: 'var(--pink)'}}>🌙 Chiều/Tối — 120 phút (Thực thi)</p>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 30 phút — Thiết kế ảnh (Canva)</li>
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 60 phút — Quay & dựng video (CapCut)</li>
                        <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i> 30 phút — Đăng bài & tương tác cộng đồng</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== AI TOOLS =====  */}
<section id="tools" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-amber-400">Công cụ hỗ trợ</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Hệ Sinh Thái AI <span className="gradient-text">Đồng Hành</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Những "người bạn trợ lý" giúp bạn tối ưu công việc, sáng tạo nội dung và tạo thu nhập — tất cả miễn phí hoặc rất rẻ.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:opacity-80 transition" style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}>
                    <i className="fas fa-robot text-lg" style={{color: 'var(--pink)'}}></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">ChatGPT / Gemini</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Trợ lý viết kịch bản, lên kế hoạch Marketing và tư vấn chiến lược nội dung mỗi ngày.</p>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Miễn phí</span>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-500/40 transition">
                    <i className="fas fa-file-alt text-amber-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Claude</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Chuyên gia viết nội dung dài, chuyên sâu và xử lý tài liệu cực kỳ thông minh.</p>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Miễn phí</span>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/40 transition">
                    <i className="fas fa-microphone-alt text-blue-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">ElevenLabs / Vbee</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Biến văn bản thành tiếng nói truyền cảm, tự nhiên như người thật — dùng cho Podcast.</p>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Freemium</span>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-500/40 transition">
                    <i className="fas fa-palette text-purple-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Canva</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Thiết kế ảnh, bài đăng mạng xã hội chuyên nghiệp chỉ bằng kéo thả — không cần học design.</p>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Miễn phí</span>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-500/40 transition">
                    <i className="fas fa-video text-rose-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">CapCut</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Biên tập video nhanh trên điện thoại với kho hiệu ứng và nhạc nền khổng lồ. Dễ hơn bạn nghĩ.</p>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Miễn phí</span>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/40 transition">
                    <i className="fas fa-magic text-emerald-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Flow / Whisk</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Tạo ảnh nghệ thuật AI và video chuyên nghiệp với Imagen & VEO của Google.</p>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Freemium</span>
            </div>
        </div>
    </div>
</section>


{/*  ===== WHAT YOU GET =====  */}
<section className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-emerald-400">Bạn nhận được gì?</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Giá Trị Từ Lộ Trình <span className="gradient-text">100% Miễn Phí</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:opacity-80 transition" style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}>
                    <i className="fas fa-brain text-lg" style={{color: 'var(--pink)'}}></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Tư duy "Vốn Sống = Nội Dung"</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Biến 20+ năm kinh nghiệm thực tế thành kho nội dung vô tận — không cần tìm đề tài từ trên trời rơi xuống.</p>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-500/40 transition">
                    <i className="fas fa-rocket text-amber-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Xây kênh Online trong 7 ngày</h3>
                <p className="text-sm text-slate-400 leading-relaxed">TikTok, Facebook Page, YouTube — có mặt đúng nơi khách hàng của bạn đang ở, trong tuần đầu tiên.</p>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/40 transition">
                    <i className="fas fa-video text-emerald-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Video đầu tiên lên sóng</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Thực hành ngay từ ngày 1 — không chờ "sẵn sàng". Video hoàn chỉnh CapCut trong 60 phút.</p>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/40 transition">
                    <i className="fas fa-dollar-sign text-blue-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Thu nhập Affiliate đầu tiên</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Kỹ thuật bán hàng kiểu "chia sẻ" — không giống quảng cáo, phụ nữ 8x làm cực tốt vì sự chân thật.</p>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-500/40 transition">
                    <i className="fas fa-infinity text-purple-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Quy trình tái dùng mãi mãi</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Framework 21 ngày này áp dụng cho mọi chủ đề khác — một lần học, dùng cả đời.</p>
            </div>

            <div className="glass p-8 rounded-3xl card-hover group reveal">
                <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-500/40 transition">
                    <i className="fas fa-users text-rose-400 text-lg"></i>
                </div>
                <h3 className="text-lg font-black text-white mb-3">Cộng đồng chị em đồng hành</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Group hỗ trợ riêng — hỏi đáp, chia sẻ tiến độ, cổ vũ nhau. Không ai bị bỏ lại phía sau.</p>
            </div>
        </div>

        {/*  Transformation banner  */}
        <div className="mt-16 bg-gradient-to-r from-pink-600/10 to-amber-500/10 border border-white/10 rounded-3xl p-8 md:p-10 text-center">
            <p className="text-2xl font-black text-white leading-relaxed">
                "Nếu một người phụ nữ từng vỡ nợ, 10 năm ở nhà chăm con,<br className="hidden md:block" />
                có thể làm chủ AI —<span className="gradient-text"> thì bạn cũng làm được."</span>
            </p>
            <p className="text-slate-500 mt-3 text-sm">Điều kiện duy nhất: Điện thoại + Internet + 3 tiếng/ngày + Sẵn sàng thực hành.</p>
        </div>
    </div>
</section>


{/*  ===== FOUNDER (Instructor) =====  */}
<section id="founder" className="py-20 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--pink)'}}>Người hướng dẫn</p>
            <h2 className="text-3xl font-black text-white">Ai hướng dẫn bạn?</h2>
        </div>
        <div className="glass rounded-3xl p-8 md:p-10 reveal" style={{boxShadow: '0 0 40px rgba(244,114,182,0.15)'}}>
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                {/*  Avatar Column  */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                    <div className="relative inline-block mb-5">
                        <div className="w-36 h-36 rounded-full p-[3px] mx-auto" style={{background: 'linear-gradient(135deg,var(--pink),var(--gold))'}}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0e14] flex items-center justify-center" style={{border: '3px solid #0b0e14'}}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/tung-soc-son.webp?v=20260510"
                                    alt="Nguyễn Thanh Tùng — TVT Strategist"
                                    className="w-full h-full object-cover object-top block"
                                 />
                            </div>
                        </div>
                        <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0b0e14] block z-10"></span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{color: 'var(--pink)'}}>Tôi là Tùng</p>
                    <h3 className="text-xl font-black text-white">Nguyễn Thanh Tùng</h3>
                    <p className="text-xs text-slate-500 mt-1 text-center lg:text-left">Founder TVT Agency &<br />Hành trình Tôi là Tùng</p>
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

                {/*  Content Column  */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý "Marketing phượt". Hơn 16 năm thực chiến Branding và Marketing, tôi chọn cách đúc kết thành những quy trình gọn gàng (Agentic Workflow).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Hành trình của chúng ta không phải là học thuộc các tính năng công cụ. Tôi sẽ đồng hành cùng bạn ứng dụng <strong className="text-white">Director Mindset</strong> — giúp bạn hiểu cách dùng AI phù hợp với cuộc sống thực tế, để mỗi ngày làm việc đều là một trải nghiệm thú vị.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-chart-line mb-2 block" style={{color: 'var(--pink)'}}></i>
                            <p className="text-[10px] font-bold text-white uppercase">16 năm<br />kinh nghiệm</p>
                        </div>
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-sitemap text-amber-400 mb-2 block"></i>
                            <p className="text-[10px] font-bold text-white uppercase">System<br />&gt; Tool</p>
                        </div>
                        <div className="glass p-3 rounded-xl text-center">
                            <i className="fas fa-heart text-rose-400 mb-2 block"></i>
                            <p className="text-[10px] font-bold text-white uppercase">Thực tế<br />& Gần gũi</p>
                        </div>
                    </div>

                    <a href="#register" className="inline-flex items-center gap-2 px-7 py-4 text-white font-black rounded-2xl transition text-sm uppercase tracking-widest mx-auto lg:mx-0" style={{background: 'var(--pink)'}}  >
                        <i className="fas fa-gift"></i> Đăng ký học miễn phí
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== REGISTER FORM =====  */}
<section id="register" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-emerald-400">
                <i className="fas fa-gift mr-1"></i> 100% Miễn phí
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Đăng ký <span className="gradient-text">ngay hôm nay</span></h2>
            <p className="text-slate-500">Điền thông tin bên dưới — bạn sẽ nhận link tài liệu & vào group hỗ trợ trong 24 giờ.</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-10 reveal" style={{boxShadow: '0 0 40px rgba(244,114,182,0.15)'}}>

            {/*  Free badge  */}
            <div className="flex items-center justify-center gap-3 mb-8 px-6 py-4 rounded-2xl" style={{background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)'}}>
                <i className="fas fa-gift text-emerald-400 text-xl"></i>
                <div>
                    <p className="text-white font-black">Khóa học 100% MIỄN PHÍ</p>
                    <p className="text-emerald-400 text-xs">Không mất tiền · Không điều kiện · Không giới hạn thời gian</p>
                </div>
            </div>

            <form id="enrollForm" className="space-y-5" onSubmit={handleLeadSubmit}>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Họ và tên *</label>
                    <input type="text" name="name" placeholder="Nguyễn Thị A" required className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Facebook / Zalo (để liên hệ) *</label>
                    <input type="text" name="contact" placeholder="Link Facebook hoặc số điện thoại Zalo" required className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" name="email" placeholder="email@example.com" className="form-input w-full px-5 py-3.5 rounded-2xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn đang ở giai đoạn nào? *</label>
                    <select name="stage" required defaultValue="" className="form-input w-full px-5 py-3.5 rounded-2xl text-sm appearance-none cursor-pointer">
                        <option value="" disabled>Chọn tình trạng hiện tại</option>
                        <option value="never">Chưa bao giờ dùng AI</option>
                        <option value="basic">Đã dùng ChatGPT cơ bản vài lần</option>
                        <option value="content">Đã làm nội dung nhưng chưa có thu nhập</option>
                        <option value="earning">Đã có thu nhập, muốn tối ưu hơn</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bạn muốn tạo nội dung về chủ đề gì? (không bắt buộc)</label>
                    <textarea name="topic" placeholder="VD: Nuôi con, nấu ăn, chăm sóc sức khỏe, tài chính cá nhân, kinh doanh online..." rows={3}
                        className="form-input w-full px-5 py-3.5 rounded-2xl text-sm resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-5 text-white font-black text-base rounded-2xl transition uppercase tracking-widest disabled:opacity-60 disabled:cursor-wait" style={{background: 'var(--pink)', boxShadow: '0 8px 30px var(--pink-glow)'}}>
                    <i className="fas fa-gift mr-2"></i> {isSubmitting ? "Đang gửi..." : "Đăng ký học MIỄN PHÍ ngay"}
                </button>
                {submitError && <p className="text-center text-sm text-red-400">{submitError}</p>}
                <p className="text-center text-xs text-slate-600">Thông tin của bạn được bảo mật. Không spam.</p>
            </form>

            {/*  Success state  */}
            <div id="successMsg" className="hidden text-center py-10">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-emerald-400 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Đăng ký thành công! 🎉</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Cảm ơn bạn đã đăng ký! Team sẽ liên hệ qua Facebook/Zalo trong vòng <strong className="text-white">24 giờ</strong> để gửi link tài liệu và mời vào group hỗ trợ.
                </p>
                <p className="mt-4 text-sm font-bold" style={{color: 'var(--pink)'}}>
                    <i className="fas fa-heart mr-1"></i> Chào mừng bạn đến với hành trình 21 ngày làm chủ AI!
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
                    <i className="fas fa-envelope text-white"></i> Gửi email
                </a>
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

<footer className="bg-black py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{background: 'var(--pink)'}}>
                    <i className="fas fa-female text-white"></i>
                </div>
                <div>
                    <span className="block text-lg font-black text-white tracking-tighter">Phụ Nữ <span style={{color: 'var(--pink)'}}>Làm Chủ AI</span></span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Lộ trình 21 ngày · Miễn phí</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <a href="#problem" className="hover:text-white transition">Vấn đề</a>
                <a href="#journey" className="hover:text-white transition">Lộ trình</a>
                <a href="#tools" className="hover:text-white transition">Công cụ</a>
                <a href="#founder" className="hover:text-white transition">Tôi là Tùng</a>
                <a href="#register" style={{color: 'var(--pink)'}}>Đăng ký</a>
            </div>
        </div>

        {/*  Other programs  */}
        <div className="border-t border-white/5 pt-8 mb-8">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest text-center mb-5">Các chương trình khác của Tôi Là Tùng</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="https://toilatung.com/" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-white/20">
                    <i className="fas fa-home text-slate-400"></i> ← Trang chủ Tôi Là Tùng
                </a>
                <a href="/course/vibe-coding" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5 hover:border-indigo-400/40">
                    <i className="fas fa-terminal text-indigo-400"></i> Claude Code Mastery Pro
                </a>
                <a href="/course/ai-coaching" className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/5"  >
                    <i className="fas fa-user-tie" style={{color: '#ff2d2d'}}></i> Coaching AI 1-1
                </a>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-medium italic">
                "Công nghệ không phân biệt tuổi tác — chỉ phân biệt người bắt đầu và người chưa bắt đầu."
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
                <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                   className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition"
                   style={{background: 'rgba(0,104,255,0.12)', border: '1px solid rgba(0,104,255,0.3)'}}
                    >
                    <i className="fas fa-comment-dots text-blue-400"></i> Zalo: 0972613455
                </a>
                <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">toilatung.com · 2026</p>
            </div>
        </div>
    </div>
</footer>


{/*  ===== STICKY BOTTOM BAR (mobile) =====  */}
<div className="fixed bottom-0 left-0 right-0 z-40 md:hidden" style={{background: 'rgba(11,14,20,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.07)'}}>
    <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phụ Nữ Làm Chủ AI</p>
            <p className="text-sm font-black text-white">Miễn phí <span className="text-emerald-400 text-xs font-bold">· 100% không mất phí</span></p>
        </div>
        <a href="#register" className="flex-shrink-0 px-5 py-3 text-white font-black rounded-xl text-xs uppercase tracking-widest whitespace-nowrap" style={{background: 'var(--pink)', boxShadow: '0 4px 16px var(--pink-glow)'}}>
            Đăng ký ngay
        </a>
    </div>
</div>




{/*  ===== EXIT-INTENT POPUP =====  */}
<div id="exitPopup" style={{display: 'none', position: 'fixed', inset: '0', zIndex: '9999', background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(10px)', padding: '1.5rem', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{maxWidth: '500px', width: '100%', margin: 'auto', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', padding: '2rem 2.25rem', position: 'relative', boxShadow: '0 0 60px rgba(244,114,182,0.15)'}}>
        {/*  Close  */}
        <button  style={{position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', width: '2rem', height: '2rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>✕</button>

        {/*  Icon + Headline  */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
            <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-heart" style={{color: '#f472b6', fontSize: '14px'}}></i>
            </div>
            <h3 style={{color: 'white', fontWeight: '900', fontSize: '1.05rem', lineHeight: '1.3', margin: '0'}}>Khoan đã — đừng rời đi khi chưa rõ mình có phù hợp không</h3>
        </div>

        <p style={{color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.75rem'}}>Nếu Bạn đang xem lộ trình 21 ngày nhưng vẫn còn vài câu hỏi, hãy chọn cách thuận tiện nhất bên dưới.</p>
        <p style={{color: '#64748b', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>Lộ trình này hoàn toàn miễn phí và được thiết kế riêng cho phụ nữ 8x, 9x — không cần kỹ thuật, không cần kinh nghiệm AI trước đó.</p>

        {/*  CTA 1: Zalo (primary)  */}
        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
           style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.35)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '0.75rem', transition: 'border-color 0.2s'}}
            >
            <div style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#0068ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-comment-dots" style={{color: 'white', fontSize: '16px'}}></i>
            </div>
            <div>
                <p style={{color: 'white', fontWeight: '900', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Nhắn Zalo hỏi nhanh trước khi đăng ký</p>
                <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Hỏi về lộ trình, phù hợp với mình không · <strong style={{color: '#f472b6'}}>0972613455</strong></p>
            </div>
            <i className="fas fa-arrow-right" style={{color: '#f472b6', marginLeft: 'auto', fontSize: '12px'}}></i>
        </a>

        {/*  CTA 2: Form (secondary)  */}
        <a href="#register" 
           style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', textDecoration: 'none', marginBottom: '1.25rem', transition: 'border-color 0.2s'}}
            >
            <div style={{width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                <i className="fas fa-file-alt" style={{color: '#94a3b8', fontSize: '14px'}}></i>
            </div>
            <div>
                <p style={{color: 'white', fontWeight: '700', fontSize: '0.9rem', margin: '0 0 0.15rem'}}>Quay lại đăng ký lộ trình miễn phí</p>
                <p style={{color: '#64748b', fontSize: '0.75rem', margin: '0'}}>Điền form để nhận ngay tài liệu lộ trình 21 ngày</p>
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
