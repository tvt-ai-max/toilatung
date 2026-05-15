'use client';

export default function ClaudeMasterclassLandingPage() {

    return (
        <>
            <style jsx global>{`
                
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');

        /* ── RESET & BASE ── */
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }
        .code-font { font-family: 'Fira Code', 'SF Mono', monospace; }

        /* ── DESIGN TOKENS ── */
        :root {
            --bg:           #000000;
            --surface:      #0a0a0a;
            --panel:        #111111;
            --line:         rgba(255, 255, 255, 0.08);
            --line-hover:   rgba(255, 255, 255, 0.16);
            --text-1:       #f5f5f7;
            --text-2:       #a1a1a6;
            --text-3:       #6e6e73;
            --red:          #ff375f;
            --red-light:    #ff6380;
            --red-glow:     rgba(255, 55, 95, 0.28);
            --indigo:       #7b61ff;
            --indigo-glow:  rgba(123, 97, 255, 0.24);
            --pink:         #f472b6;
            --pink-glow:    rgba(244, 114, 182, 0.22);
            --emerald:      #30d158;
            --amber:        #ffd60a;
            --sky:          #2997ff;
            --sky-glow:     rgba(41, 151, 255, 0.28);
        }

        /* ── GRADIENT TEXTS ── */
        .gradient-text {
            background: linear-gradient(90deg, #ff375f, #7b61ff, #2997ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .gradient-indigo {
            background: linear-gradient(90deg, #7b61ff, #30d158);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .gradient-pink {
            background: linear-gradient(90deg, #f472b6, #ffd60a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* ── CARD — Apple minimal (flat dark, no glassmorphism) ── */
        .glass {
            background: var(--panel);
            border: 1px solid var(--line);
            border-radius: 20px;
            position: relative;
            overflow: hidden;
        }
        .glass::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%),
                rgba(255,255,255,.035) 0%, transparent 60%);
            opacity: 0;
            transition: opacity .3s;
            pointer-events: none;
        }
        .glass:hover::before { opacity: 1; }

        /* ── CARD HOVER ── */
        .card-hover {
            transition: transform .3s cubic-bezier(.16,1,.3,1),
                        border-color .3s ease,
                        background .3s ease;
        }
        .card-hover:hover {
            transform: translateY(-3px);
            border-color: var(--line-hover);
            background: #161616;
        }

        /* ── PROGRAM CARD ── */
        .program-card {
            transition: transform .3s cubic-bezier(.16,1,.3,1),
                        border-color .3s ease,
                        box-shadow .3s ease;
        }
        .program-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 48px rgba(255,255,255,.04);
        }

        /* ── BADGE PULSE ── */
        .badge-pulse { animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }

        /* ── SCROLL REVEAL ── */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
        }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-left {
            opacity: 0;
            transform: translateX(-32px);
            transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
        }
        .reveal-left.visible { opacity: 1; transform: none; }
        .reveal-right {
            opacity: 0;
            transform: translateX(32px);
            transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
        }
        .reveal-right.visible { opacity: 1; transform: none; }
        .delay-1 { transition-delay: .1s; }
        .delay-2 { transition-delay: .2s; }
        .delay-3 { transition-delay: .3s; }
        .delay-4 { transition-delay: .4s; }
        .delay-5 { transition-delay: .5s; }

        /* ── NAV — Apple style: transparent → frosted on scroll ── */
        nav#main-nav {
            position: fixed;
            top: 0; width: 100%; z-index: 50;
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
            border-bottom: 1px solid transparent;
            transition: background .45s ease, backdrop-filter .45s ease, border-color .45s ease;
        }
        nav#main-nav.nav-scrolled {
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-color: var(--line);
        }

        /* ── MOBILE DRAWER ── */
        #mobileDrawer {
            position: fixed;
            top: 0; right: 0; bottom: 0;
            width: 280px;
            background: #0a0a0a;
            border-left: 1px solid var(--line);
            z-index: 200;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
        }
        #mobileDrawer.open { transform: translateX(0); }

        #drawerOverlay {
            position: fixed; inset: 0;
            background: rgba(0, 0, 0, 0.72);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 199;
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
        }
        #drawerOverlay.open { opacity: 1; pointer-events: all; }

        /* ── HAMBURGER ── */
        .hamburger-line {
            display: block; width: 22px; height: 2px;
            background: rgba(255,255,255,.7); border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;
        }
        .hamburger.active .hamburger-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.active .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.active .hamburger-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* ── GRAIN TEXTURE (subtle) ── */
        body::after {
            content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9998;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
            opacity: .016;
        }

        /* ── HERO GLOW BACKGROUND ── */
        .hero-glow {
            background:
                radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,97,255,.16) 0%, transparent 65%),
                radial-gradient(ellipse 60% 40% at 85% 35%, rgba(41,151,255,.10) 0%, transparent 60%),
                radial-gradient(ellipse 50% 50% at 15% 70%, rgba(255,55,95,.09) 0%, transparent 60%),
                #000000;
        }

        /* ── TYPOGRAPHY TWEAKS ── */
        .hero-title {
            letter-spacing: -.04em;
            line-height: 1.04;
        }
        @media (max-width: 767px) {
            .hero-title { font-size: 2.75rem !important; }
            .card-hover:hover { transform: none; }
            body { padding-bottom: 72px; }
        }
        @media (min-width: 768px) {
            body { padding-bottom: 0; }
        }
    
            `}</style>

            <main id="main-content" className="bg-transparent claude-theme font-sans">
                
                
    {/* HERO SECTION */}
    <section className="reveal relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://toilatung.com/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#D97757]/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <i className="fas fa-file-pdf"></i> Bản Nâng Cao 2.0
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                        Cẩm Nang Toàn Diện Về<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#D97757]">Hệ Điều Hành AI</span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Cho kỷ nguyên vận hành số. Tổng hợp & mapping toàn diện giữa Claude Masterclass và Antigravity IDE. Biên soạn bởi @toilatung.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a href="/docs/Claude Masterclass 2026.pdf" download className="w-full sm:w-auto px-8 py-4 bg-[#D97757] hover:bg-[#E58B6D] text-white font-black rounded-xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] flex items-center justify-center gap-3">
                            <i className="fas fa-download text-lg"></i>
                            Tải Tài Liệu PDF
                        </a>
                        <p className="text-xs text-slate-500 font-medium">Bản quyền độc quyền bởi www.toilatung.com</p>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-xl lg:max-w-none">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img src="/images/claude-masterclass/cover_page.webp" alt="Claude Masterclass 2026 Cover" className="animate-float w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* LỜI MỞ ĐẦU */}
    <section className="reveal py-24 bg-[#211e1d] border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="reveal text-3xl md:text-4xl font-black text-white mb-6">Tư duy lại về AI – Từ Chatbot đến Hệ điều hành AI</h2>
                <p className="text-lg text-slate-400">Năm 2026 đánh dấu cột mốc ranh giới giữa phần mềm truyền thống và trí tuệ nhân tạo bị xóa nhòa. Claude 4.7 không còn là cửa sổ chat cô lập; nó là một thực thể vận hành toàn bộ quy trình kinh doanh.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-500/5 p-8 rounded-2xl border border-red-500/20">
                    <div className="text-red-400 mb-4 text-2xl"><i className="fas fa-search"></i></div>
                    <h3 className="reveal text-xl font-bold text-white mb-3">Người nghiệp dư (Search-centric)</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Dùng AI để tra cứu thông tin. Kết quả là văn bản tĩnh, cần con người xử lý thêm.</p>
                </div>
                <div className="bg-orange-500/5 p-8 rounded-2xl border border-orange-500/20">
                    <div className="text-orange-400 mb-4 text-2xl"><i className="fas fa-cogs"></i></div>
                    <h3 className="reveal text-xl font-bold text-white mb-3">AI Master (Operation-centric)</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Dùng AI để thực thi quy trình. Kết quả là công việc hoàn tất: file báo cáo lưu đúng folder, email soạn sẵn, công cụ tương tác sẵn sàng sử dụng.</p>
                </div>
            </div>
            
            <p className="text-center text-slate-300 font-medium">Cuốn tài liệu này sẽ hướng dẫn bạn lộ trình 5 bước + Mapping với Antigravity IDE để làm chủ hệ sinh thái này một cách chuyên sâu.</p>
        </div>
    </section>

    {/* CHƯƠNG 1 */}
    <section className="reveal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D97757]/10 border border-[#D97757]/20 text-[#E58B6D] text-xs font-bold uppercase tracking-widest mb-4">
                    Chương 1
                </div>
                <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-4">Claude Chat – Nghệ thuật giao tiếp tầng cao</h2>
                <p className="text-lg text-slate-400 max-w-3xl">Nền tảng của mọi hệ thống AI mạnh mẽ vẫn bắt nguồn từ sự thấu hiểu ngôn ngữ. "Nói đúng" là điều kiện tiên quyết để AI "làm đúng".</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 mb-20">
                <div className="flex-1">
                    <h3 className="reveal text-2xl font-bold text-white mb-6">1.1 Lựa chọn mô hình: Sonnet vs Opus 4.7</h3>
                    <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-slate-300">
                                <tr>
                                    <th className="p-4 border-b border-white/10">Tiêu chí</th>
                                    <th className="p-4 border-b border-white/10 text-amber-400">Sonnet 4.7 (High-Speed Worker)</th>
                                    <th className="p-4 border-b border-white/10 text-rose-400">Opus 4.7 (Strategic Thinker)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-400">
                                <tr>
                                    <td className="p-4 font-medium text-white">Tốc độ & Chi phí</td>
                                    <td className="p-4">Gần như tức thì / Thấp</td>
                                    <td className="p-4">Chậm hơn nhưng sâu sắc / Cao hơn</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-white">Suy luận</td>
                                    <td className="p-4">Đơn giản, nhanh</td>
                                    <td className="p-4">Multi-step reasoning, cửa sổ ngữ cảnh khổng lồ</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-white">Ứng dụng</td>
                                    <td className="p-4">Viết nội dung, tóm tắt email, tra cứu, văn phòng</td>
                                    <td className="p-4">Phân tích phức tạp, xây dựng Skill, lập trình, logic lớn</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-white">Mapping Antigravity</td>
                                    <td className="p-4 italic">Dùng cho tác vụ nhanh trong Agent Manager</td>
                                    <td className="p-4 italic">Dùng cho Architecture & Planning Skill</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg">
                        <p className="text-sm text-sky-300 m-0"><strong>Khuyến nghị Master:</strong> Bắt đầu với Sonnet cho 80% tác vụ. Chuyển sang Opus khi lập kế hoạch chiến lược, thiết kế Skill hoặc giải quyết vấn đề cấp cao.</p>
                    </div>
                </div>
                <div className="flex-1 lg:max-w-md">
                    <div className="img-hover-zoom w-full rounded-2xl border border-white/10 shadow-2xl"><img src="/images/claude-masterclass/sonnet_vs_opus.webp" alt="Sonnet vs Opus" className="w-full h-auto" /></div>
                </div>
            </div>

            {/* GCAO Framework */}
            <div className="bg-[#2a2625] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="reveal text-2xl font-bold text-white mb-8">1.2 Khung Prompt GCAO – Tiêu chuẩn vàng</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-transparent/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 text-6xl text-white/5 font-black -mt-4 -mr-2 group-hover:text-orange-500/10 transition-colors">G</div>
                        <h4 className="text-orange-400 font-bold mb-2">G (Goal - Mục tiêu)</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">Cụ thể, đo lường được. VD: "Tạo bài viết thu hút 100 lượt đăng ký dùng thử" thay vì "Viết bài quảng cáo".</p>
                    </div>
                    <div className="bg-transparent/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 text-6xl text-white/5 font-black -mt-4 -mr-2 group-hover:text-blue-500/10 transition-colors">C</div>
                        <h4 className="text-blue-400 font-bold mb-2">C (Context - Bối cảnh)</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">Cung cấp dữ liệu đầu vào đầy đủ. "Tôi là Founder startup, khách hàng là quản lý dự án đang quá tải".</p>
                    </div>
                    <div className="bg-transparent/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 text-6xl text-white/5 font-black -mt-4 -mr-2 group-hover:text-amber-500/10 transition-colors">A</div>
                        <h4 className="text-amber-400 font-bold mb-2">A (Action - Hành động)</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">Liệt kê rõ các bước. "B1: Phân tích 3 nỗi đau. B2: Viết 5 tiêu đề. B3: Soạn nội dung theo PAS".</p>
                    </div>
                    <div className="bg-transparent/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 text-6xl text-white/5 font-black -mt-4 -mr-2 group-hover:text-rose-500/10 transition-colors">O</div>
                        <h4 className="text-rose-400 font-bold mb-2">O (Output - Định dạng)</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">Quy định hình thức đầu ra. "Bảng so sánh + file Markdown + 3 phiên bản A/B test".</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-white font-bold mb-4">1.3 Kỹ thuật Iteration: Đối thoại để tinh chỉnh</h4>
                    <ul className="space-y-3 text-sm text-slate-400 list-disc pl-5">
                        <li><strong className="text-slate-300">Socratic Method:</strong> "Trước khi thực hiện, hãy hỏi tôi 5 câu hỏi để làm rõ yêu cầu này".</li>
                        <li><strong className="text-slate-300">Negative Constraints:</strong> "Không sử dụng từ sáo rỗng. Không viết quá 100 từ mỗi đoạn."</li>
                        <li><strong className="text-slate-300">Multi-turn Refinement:</strong> "Phiên bản này tốt, nhưng hãy làm bản 2 với tone mạnh mẽ hơn và thêm số liệu cụ thể."</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* CHƯƠNG 2 */}
    <section className="reveal py-24 bg-[#211e1d] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 order-2 lg:order-1">
                    <div className="img-hover-zoom w-full rounded-2xl border border-white/10 shadow-2xl"><img src="/images/claude-masterclass/claude_cowork.webp" alt="Claude Co-work" className="w-full h-auto" /></div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D97757]/10 border border-[#D97757]/20 text-[#E58B6D] text-xs font-bold uppercase tracking-widest mb-4">
                        Chương 2
                    </div>
                    <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-6">Claude Co-work – Biến AI thành cộng sự thực thi</h2>
                    <p className="text-lg text-slate-400 mb-8">Tính năng "phá vỡ rào cản" giữa web và máy tính, cho phép Claude hoạt động như một thành viên trong team.</p>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="reveal text-xl font-bold text-white mb-2">2.1 Tư duy Folder-Centric</h3>
                            <p className="text-sm text-slate-400 mb-2">Mỗi folder = một "Phòng ban ảo". Claude đọc hiểu mối quan hệ liên kết giữa các file (Excel → Word, hình ảnh → báo cáo).</p>
                            <p className="text-xs text-amber-400 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20"><strong>Mapping Antigravity:</strong> Tư duy đồng bộ thư mục /src/core, /prompts giống nhau giữa Claude và Antigravity Agent.</p>
                        </div>
                        
                        <div>
                            <h3 className="reveal text-xl font-bold text-white mb-2">2.2 Lớp hướng dẫn tầng sâu: claude.md</h3>
                            <p className="text-sm text-slate-400 mb-4">Trong mỗi folder, `claude.md` đóng vai trò "Bộ quy tắc ứng xử" vĩnh viễn.</p>
                            <div className="bg-transparent border border-white/10 rounded-xl p-4 font-mono text-xs text-orange-400">
                                - Bạn là chuyên gia Marketing & Growth tại công ty X...<br/>
                                - Luôn kiểm tra file brand_voice.pdf và past_campaigns/<br/>
                                - Đặt tên file theo định dạng YYYYMMDD_Report_Name.md<br/>
                                - Không bao giờ hứa hẹn điều không chắc chắn.
                            </div>
                        </div>

                        <div>
                            <h3 className="reveal text-xl font-bold text-white mb-2">2.3 Sức mạnh đa nhiệm với Sub-agents</h3>
                            <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
                                <li><strong>Agent 1 (Researcher):</strong> Thu thập dữ liệu thị trường.</li>
                                <li><strong>Agent 2 (Writer):</strong> Viết nội dung dựa trên dữ liệu Agent 1.</li>
                                <li><strong>Agent 3 (QA):</strong> Kiểm tra lỗi, tone, SEO, legal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* CHƯƠNG 3 */}
    <section className="reveal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D97757]/10 border border-[#D97757]/20 text-[#E58B6D] text-xs font-bold uppercase tracking-widest mb-4">
                        Chương 3
                    </div>
                    <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-6">Claude Skills – Đóng gói quy trình tự động hóa</h2>
                    <p className="text-lg text-slate-400 mb-8">"Số hóa" kinh nghiệm của mình để AI thực thi lặp đi lặp lại với độ chính xác cao.</p>

                    <h3 className="reveal text-2xl font-bold text-white mb-6">3.1 DBS Framework: Công thức vàng</h3>
                    <ul className="space-y-6 mb-8">
                        <li className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#D97757]/20 flex items-center justify-center text-[#E58B6D] flex-shrink-0 border border-[#D97757]/30 font-black">D</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Direction (Hướng dẫn)</h4>
                                <p className="text-slate-400 text-sm">Quy định luồng công việc bước 1, 2, 3 chi tiết trong file `skill.md`.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 border border-amber-500/30 font-black">B</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Blueprints (Bản thiết kế)</h4>
                                <p className="text-slate-400 text-sm">Thư mục mẫu chứa template email, cấu trúc báo cáo chuẩn, checklist.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0 border border-rose-500/30 font-black">S</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Solutions (Giải pháp)</h4>
                                <p className="text-slate-400 text-sm">Mã Python, script gọi API, công thức tính ROI phức tạp mà ngôn ngữ tự nhiên làm chậm.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                        <h4 className="text-white font-bold mb-2">3.2 Skill Creator: Quy trình Meta-AI</h4>
                        <p className="text-sm text-slate-400">Ra lệnh: "Dùng tính năng Skill Creator để phỏng vấn tôi về cách tôi soạn đề xuất khách hàng, sau đó đóng gói thành lệnh /proposal". Tương đương với cách tạo SKILL.md trong Antigravity.</p>
                    </div>
                </div>
                <div className="flex-1 lg:max-w-md">
                    <div className="img-hover-zoom w-full rounded-2xl border border-white/10 shadow-2xl"><img src="/images/claude-masterclass/dbs_framework.webp" alt="DBS Framework" className="w-full h-auto" /></div>
                </div>
            </div>
        </div>
    </section>

    {/* CHƯƠNG 4 & 5 */}
    <section className="reveal py-24 bg-[#211e1d] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-16 text-center">
                <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-6">Kết nối & Lên lịch vận hành tự động</h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">Mini-apps, Connectors và Autopilot biến Claude thành nhân sự làm việc 24/7.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Chương 4 */}
                <div>
                    <h3 className="reveal text-2xl font-bold text-white mb-6">Chương 4: Live Artifacts & Connectors</h3>
                    <div className="img-hover-zoom w-full rounded-2xl border border-white/10 shadow-2xl mb-8"><img src="/images/claude-masterclass/connectors_veins.webp" alt="Connectors Veins" className="w-full h-auto" /></div>
                    
                    <h4 className="text-white font-bold mb-3">4.1 Live Artifacts (Mini-apps)</h4>
                    <ul className="text-sm text-slate-400 space-y-2 mb-8">
                        <li><i className="fas fa-check-square text-orange-400 mr-2"></i><strong>Financial Dashboard:</strong> Nhập revenue → tự tính ROI, forecast.</li>
                        <li><i className="fas fa-check-square text-orange-400 mr-2"></i><strong>Content Calendar:</strong> Kéo thả ý tưởng → phân bổ theo funnel.</li>
                        <li><i className="fas fa-check-square text-orange-400 mr-2"></i><strong>Competitor Tracker:</strong> Paste link → extract pricing, positioning.</li>
                    </ul>

                    <h4 className="text-white font-bold mb-3">4.2 Connectors Matrix</h4>
                    <div className="overflow-x-auto rounded-lg border border-white/10">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-white/5 text-slate-300">
                                <tr>
                                    <th className="p-3 border-b border-white/10">Nền tảng</th>
                                    <th className="p-3 border-b border-white/10">Khả năng</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-400">
                                <tr><td className="p-3 font-medium text-white">Google/Outlook</td><td className="p-3">Soạn nháp email phản hồi theo ngữ cảnh</td></tr>
                                <tr><td className="p-3 font-medium text-white">Calendar</td><td className="p-3">Chuẩn bị tài liệu (Call Prep) cho meeting</td></tr>
                                <tr><td className="p-3 font-medium text-white">Notion/CRM</td><td className="p-3">Đồng bộ dữ liệu khách hàng (Zero data loss)</td></tr>
                                <tr><td className="p-3 font-medium text-white">Slack/Teams</td><td className="p-3">Tóm tắt thread + assign action items</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chương 5 */}
                <div>
                    <h3 className="reveal text-2xl font-bold text-white mb-6">Chương 5: Trạng thái Autopilot</h3>
                    <div className="img-hover-zoom w-full rounded-2xl border border-white/10 shadow-2xl mb-8"><img src="/images/claude-masterclass/autopilot_dashboard.webp" alt="Autopilot Dashboard" className="w-full h-auto" /></div>
                    
                    <h4 className="text-white font-bold mb-3">5.1 Scheduled Tasks</h4>
                    <p className="text-sm text-slate-400 mb-4">Đỉnh cao tự động hóa. AI làm việc không cần bạn hiện diện qua lệnh `/schedule`:</p>
                    <ul className="text-sm text-slate-400 space-y-2 mb-8 list-disc pl-5">
                        <li>Tổng hợp báo cáo 9:00 sáng gửi qua Slack.</li>
                        <li>Quét email chưa đọc, phân loại cuối ngày.</li>
                        <li>Chạy competitor analysis mỗi thứ 2.</li>
                    </ul>

                    <h4 className="text-white font-bold mb-3">5.2 Plugins & Vision AI</h4>
                    <p className="text-sm text-slate-400 mb-4">Kết hợp 1.445+ Skills từ `antigravity-awesome-skills` để rà soát hợp đồng pháp lý, tối ưu SEO nâng cao, dự báo dòng tiền. Vision AI giúp bóc tách hóa đơn, soi UI/UX website qua ảnh chụp.</p>
                </div>
            </div>
        </div>
    </section>

    {/* LỜI KẾT & PYRAMID */}
    <section className="reveal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="reveal text-3xl md:text-5xl font-black text-white mb-6">Lộ trình 4 lớp trở thành AI Master</h2>
            <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto">Xây dựng hệ thống vận hành theo Kim tự tháp từ đáy lên đỉnh, mapping trực tiếp với Antigravity IDE.</p>
            
            <div className="max-w-3xl mx-auto mb-16">
                <img src="/images/claude-masterclass/ai_master_pyramid.webp" alt="AI Master Pyramid" className="animate-float w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-white/10 mb-16 text-left max-w-4xl mx-auto bg-transparent/50 backdrop-blur-md">
                <table className="w-full text-sm">
                    <thead className="bg-[#D97757]/20 text-indigo-300">
                        <tr>
                            <th className="p-4 border-b border-[#D97757]/20">Lớp (Tầng)</th>
                            <th className="p-4 border-b border-[#D97757]/20">Mô tả chi tiết</th>
                            <th className="p-4 border-b border-[#D97757]/20">Mapping Antigravity</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-400">
                        <tr>
                            <td className="p-4 font-bold text-white">1 (Đáy): Custom Instructions</td>
                            <td className="p-4">Thiết lập linh hồn, giọng văn cá nhân, quy tắc</td>
                            <td className="p-4 text-amber-400">System Prompt Master v2.0</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold text-white">2: Project Context</td>
                            <td className="p-4">Cung cấp kiến thức qua Workspace & claude.md</td>
                            <td className="p-4 text-amber-400">Folder-Centric + /docs/learning</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold text-white">3: Trained Skills</td>
                            <td className="p-4">Đóng gói quy trình thành lệnh (/report, /email)</td>
                            <td className="p-4 text-amber-400">1.445+ Skills từ awesome-skills</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold text-white">4 (Đỉnh): Connectors & Autopilot</td>
                            <td className="p-4">Kết nối hạ tầng thực tế thực thi công việc tự động</td>
                            <td className="p-4 text-amber-400">Live Artifacts + Orchestration</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="max-w-3xl mx-auto text-left">
                <h3 className="reveal text-2xl font-bold text-white mb-6">Lộ trình 30 ngày thực chiến</h3>
                <ul className="space-y-4">
                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                        <span className="text-[#E58B6D] font-bold">Ngày 1-7:</span> <p className="m-0 text-slate-300 text-sm">Xây dựng Custom Instructions + `claude.md` cho 3 project. Thực hành GCAO 100% prompt.</p>
                    </li>
                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                        <span className="text-[#E58B6D] font-bold">Ngày 8-14:</span> <p className="m-0 text-slate-300 text-sm">Tạo 5 Skills đầu tiên theo DBS Framework (/report, /proposal).</p>
                    </li>
                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                        <span className="text-[#E58B6D] font-bold">Ngày 15-21:</span> <p className="m-0 text-slate-300 text-sm">Kích hoạt Connectors (Google, Notion). Thiết lập 3 Scheduled Tasks.</p>
                    </li>
                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                        <span className="text-[#E58B6D] font-bold">Ngày 22-30:</span> <p className="m-0 text-slate-300 text-sm">Triển khai Multi-agent + Live Artifacts. Tích hợp Antigravity IDE.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* CHEAT SHEET */}
    <section className="reveal py-24 bg-indigo-950/20 border-t border-[#D97757]/20 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="reveal text-3xl font-black text-white mb-8 text-center flex justify-center items-center gap-3">
                <i className="fas fa-rocket text-[#E58B6D]"></i> CHEAT SHEET – 5 DBS SKILLS BUNDLE
            </h2>
            <p className="text-center text-slate-400 mb-10">Claude Masterclass 2026 + Antigravity IDE | Sẵn sàng dùng ngay</p>

            <div className="bg-transparent rounded-2xl border border-white/10 p-6 mb-8 overflow-x-auto shadow-2xl">
                <p className="text-xs text-slate-500 uppercase font-bold mb-3">1. Cài đặt nhanh (Antigravity IDE)</p>
                <code className="text-orange-400 font-mono text-sm block mb-1">cp -r claude-skills-bundle/* ~/.gemini/antigravity/skills/</code>
                <code className="text-slate-500 font-mono text-sm block mb-1"># hoặc</code>
                <code className="text-orange-400 font-mono text-sm block">npx antigravity-awesome-skills --import ./claude-skills-bundle</code>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-8 bg-[#2a2625] shadow-xl">
                <p className="text-xs text-slate-500 uppercase font-bold p-4 pb-0">2. 5 Skills Chính</p>
                <table className="w-full text-sm text-left mt-4">
                    <thead className="bg-white/5 text-slate-300">
                        <tr>
                            <th className="p-3 border-b border-white/10">Skill / Mapping</th>
                            <th className="p-3 border-b border-white/10">Gọi Bằng</th>
                            <th className="p-3 border-b border-white/10">Ví dụ Prompt Nhanh</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-400">
                        <tr>
                            <td className="p-3"><strong className="text-white">Proposal</strong><br/><span className="text-xs text-[#E58B6D]">@api-design-principles</span></td>
                            <td className="p-3"><code className="text-rose-400 bg-rose-400/10 px-1 rounded">@proposal</code></td>
                            <td className="p-3 italic">"Tạo proposal cho Founder 12 người, budget $18k"</td>
                        </tr>
                        <tr>
                            <td className="p-3"><strong className="text-white">Weekly Report</strong><br/><span className="text-xs text-[#E58B6D]">@performance-engineer</span></td>
                            <td className="p-3"><code className="text-rose-400 bg-rose-400/10 px-1 rounded">@weekly-report</code></td>
                            <td className="p-3 italic">"Báo cáo tuần: +18% user, MRR $18.7k"</td>
                        </tr>
                        <tr>
                            <td className="p-3"><strong className="text-white">Content Calendar</strong></td>
                            <td className="p-3"><code className="text-rose-400 bg-rose-400/10 px-1 rounded">@content-calendar</code></td>
                            <td className="p-3 italic">"Calendar 30 ngày cho SaaS, 40% Awareness"</td>
                        </tr>
                        <tr>
                            <td className="p-3"><strong className="text-white">Competitor Analysis</strong></td>
                            <td className="p-3"><code className="text-rose-400 bg-rose-400/10 px-1 rounded">@competitor-analysis</code></td>
                            <td className="p-3 italic">"Phân tích Asana, Monday, ClickUp, Notion"</td>
                        </tr>
                        <tr>
                            <td className="p-3"><strong className="text-white">Customer Onboarding</strong></td>
                            <td className="p-3"><code className="text-rose-400 bg-rose-400/10 px-1 rounded">@customer-onboarding</code></td>
                            <td className="p-3 italic">"Onboarding SaaS, activation metric: tạo project"</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#2a2625] p-6 rounded-2xl border border-white/10">
                    <h4 className="text-white font-bold mb-4">3. Nhắc nhở DBS Framework</h4>
                    <ul className="text-sm text-slate-400 space-y-2">
                        <li><strong>D (Direction):</strong> 5-8 bước rõ ràng.</li>
                        <li><strong>B (Blueprints):</strong> Template sẵn trong skill.</li>
                        <li><strong>S (Solutions):</strong> Python script tính toán.</li>
                    </ul>
                </div>
                <div className="bg-[#2a2625] p-6 rounded-2xl border border-white/10">
                    <h4 className="text-white font-bold mb-4">4. Best Practices</h4>
                    <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
                        <li>Luôn dùng <strong>GCAO Prompt</strong> trước khi gọi skill.</li>
                        <li>Kết hợp <code className="text-amber-400">@multi-agent</code> cho task lớn.</li>
                        <li>Chạy script Python trong phần Solutions để lấy số liệu.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* FINAL CTA */}
    <section className="reveal py-24 relative overflow-hidden bg-transparent border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://toilatung.com/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="reveal text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Kỷ nguyên AI không đào thải con người...</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Nó chỉ đào thải những ai từ chối tiến hóa. Khi bạn giải phóng được 80% thời gian, đó là lúc bạn thực sự bắt đầu sáng tạo và dẫn dắt.
            </p>
            
            <a href="/docs/Claude Masterclass 2026.pdf" download className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black hover:bg-zinc-200 font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] text-lg hover:-translate-y-1">
                <i className="fas fa-download text-xl"></i>
                TẢI XUỐNG MASTERCLASS BUNDLE (PDF)
            </a>
            <p className="text-sm text-slate-500 mt-6 font-medium">Một prompt GCAO. Một file claude.md. Một Skill đầu tiên. Bắt đầu ngay!</p>
        </div>
    </section>

            </main>
        </>
    );
}
