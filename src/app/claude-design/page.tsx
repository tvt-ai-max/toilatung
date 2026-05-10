import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Design Mastery — Thiết Kế AI Native',
  description: 'Chào mừng bạn đến với kỷ nguyên thiết kế AI-native. Claude Design cho phép bạn cộng tác với Claude để tạo ra các sản phẩm hình ảnh chuyên nghiệp.',
};

export default function Page() {
  return (
    <>
    {/*  Hero Section  */}
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#D97757]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F0E5D8]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#D97757] text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-[#D97757]/20">
                <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></span>
                Hướng dẫn Toàn diện
            </div>
            <h1 className="text-6xl md:text-[90px] font-black italic tracking-tighter mb-6 leading-[0.9] gradient-text uppercase peach-glow-text">
                LÀM CHỦ <br />CLAUDE DESIGN.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                Chào mừng bạn đến với kỷ nguyên thiết kế AI-native. Claude Design là sản phẩm mới nhất từ Anthropic Labs, cho phép bạn cộng tác với Claude để tạo ra các sản phẩm hình ảnh chuyên nghiệp: từ prototype, slide deck cho đến các bản thiết kế 3D phức tạp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#levels" className="px-8 py-4 bg-[#D97757] text-white font-black italic rounded-xl transition-all hover:bg-[#b35e40] uppercase tracking-widest text-xs shadow-lg shadow-[#D97757]/20 hover:scale-105">Khám phá 4 Cấp độ</a>
            </div>
        </div>
    </section>

    {/*  ===== PRICING & ACCESS =====  */}
    <section id="pricing" className="py-24 px-6 border-t border-white/5 bg-[var(--bg)] relative scroll-mt-20">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[var(--claude-peach)]">Research Preview</p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Trải nghiệm Thiết kế <span className="gradient-text italic">AI-Native Đột phá</span></h2>
                <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Claude Design mang đến sức mạnh của mô hình thị giác <strong className="text-white">Claude Opus 4.7</strong> vào quy trình sáng tạo của bạn. Dưới đây là các tùy chọn gói dịch vụ và điều kiện truy cập.
                </p>
            </div>

            {/*  Gói Cước  */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <i className="fa-solid fa-gem text-[var(--claude-peach)] text-xl"></i>
                    <h3 className="text-2xl font-black text-white">Các Gói Đăng ký & Chi phí (2026)</h3>
                </div>
                <p className="text-zinc-400 mb-8 max-w-3xl">Claude Design được tích hợp sẵn vào các gói thuê bao hiện có của Anthropic. Bạn không cần mua riêng lẻ, chỉ cần nâng cấp tài khoản để bắt đầu thiết kế.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/*  Cá nhân  */}
                    <div className="glass rounded-3xl p-8 border border-[var(--claude-peach)]/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--claude-peach)] opacity-5 blur-3xl group-hover:opacity-10 transition"></div>
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                            <i className="fa-solid fa-user text-zinc-500 text-sm"></i> Dành cho Cá nhân
                        </h4>
                        <div className="space-y-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-white">Claude Pro</h5>
                                    <span className="text-[10px] font-black tracking-widest text-[var(--claude-peach)]">~$20/THÁNG</span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-2">Lý tưởng cho Designer, Developer và Freelancer. Ưu đãi ~$17/tháng khi thanh toán năm.</p>
                                <p className="text-xs text-zinc-500"><i className="fa-solid fa-check text-emerald-500 mr-1"></i>Truy cập Claude Design, Code và Artifacts.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-white">Claude Max</h5>
                                    <span className="text-[10px] font-black tracking-widest text-violet-400">TÙY CHỌN</span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-2">Dành cho người dùng chuyên nghiệp với cường độ làm việc cực cao.</p>
                                <p className="text-xs text-zinc-500"><i className="fa-solid fa-check text-emerald-500 mr-1"></i>Hạn mức tin nhắn và dự án thiết kế cao nhất.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Doanh nghiệp  */}
                    <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                            <i className="fa-solid fa-users text-zinc-500 text-sm"></i> Dành cho Nhóm & Doanh nghiệp
                        </h4>
                        <div className="space-y-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-white">Claude Team</h5>
                                    <span className="text-[10px] font-black tracking-widest text-sky-400">$25-$30/NGƯỜI</span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-2">Hỗ trợ Design Systems dùng chung, cộng tác thời gian thực trong Group Conversation.</p>
                                <p className="text-xs text-zinc-500"><i className="fa-solid fa-check text-emerald-500 mr-1"></i>Quản lý quyền truy cập dự án linh hoạt.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-white">Claude Enterprise</h5>
                                    <span className="text-[10px] font-black tracking-widest text-emerald-400">LIÊN HỆ</span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-2">Bảo mật cấp cao (SSO, Audit Logging). Kích hoạt trên toàn bộ codebase lớn.</p>
                                <p className="text-xs text-zinc-500"><i className="fa-solid fa-check text-emerald-500 mr-1"></i>Triển khai ưu tiên & hạn mức không giới hạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Điều kiện & Hạn mức  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <i className="fa-solid fa-scroll text-zinc-400 text-xl"></i>
                        <h3 className="text-2xl font-black text-white">Điều kiện & Hạn mức</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-triangle-exclamation text-amber-500 mt-1 text-sm"></i>
                            <div>
                                <strong className="text-white block mb-1">Đối tượng truy cập</strong>
                                <span className="text-zinc-400 text-sm block">Chỉ dành cho tài khoản trả phí (Pro, Max, Team, Enterprise). Hiện tại không hỗ trợ gói Miễn phí (Free).</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-building-shield text-indigo-400 mt-1 text-sm"></i>
                            <div>
                                <strong className="text-white block mb-1">Kích hoạt cho Doanh nghiệp</strong>
                                <span className="text-zinc-400 text-sm block">Với gói Enterprise, tính năng này mặc định bị TẮT. Quản trị viên cần bật thủ công trong Organization Settings.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-battery-half text-emerald-400 mt-1 text-sm"></i>
                            <div>
                                <strong className="text-white block mb-1">Tính năng Extra Usage</strong>
                                <span className="text-zinc-400 text-sm block">Khi dùng hết hạn mức tuần, có thể bật &quot;Extra Usage&quot; để trả phí theo dung lượng thực tế, đảm bảo công việc liên tục.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-lock text-rose-400 mt-1 text-sm"></i>
                            <div>
                                <strong className="text-white block mb-1">Quyền riêng tư (No Training)</strong>
                                <span className="text-zinc-400 text-sm block">Dữ liệu thiết kế của gói Team và Enterprise cam kết không dùng để huấn luyện mô hình, đảm bảo an toàn bí mật thương hiệu.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/*  CTA Card  */}
                <div className="p-[1px] rounded-3xl bg-gradient-to-b from-[var(--claude-peach)] to-transparent h-fit">
                    <div className="bg-[var(--surface)] rounded-3xl p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[var(--claude-peach)] opacity-5 pointer-events-none"></div>
                        <i className="fa-solid fa-rocket text-4xl text-[var(--claude-peach)] mb-4"></i>
                        <h4 className="text-2xl font-black text-white mb-3">Sẵn sàng để Bắt đầu?</h4>
                        <p className="text-zinc-400 text-sm mb-6">Biến ý tưởng của bạn thành hiện thực với Claude Design ngay hôm nay.</p>
                        <a href="https://claude.ai/pricing" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-4 bg-[var(--claude-peach)] hover:bg-[#f97316] text-white font-black italic uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(217,119,87,0.3)]">
                            Nâng cấp & Thiết kế
                        </a>
                        <p className="text-[10px] text-zinc-500 mt-4 italic">* Tính năng và mức giá có thể điều chỉnh theo lộ trình phát triển của Anthropic Labs do đang trong Research Preview.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  The Journey (Levels)  */}
    <section id="levels" className="py-24 px-6 border-t border-white/5 bg-[var(--surface)] scroll-mt-20 relative">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            
            {/*  LEVEL 1  */}
            <div id="level-1" className="glass p-10 card-hover border-l-4 level-1 scroll-mt-24">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-level-1 text-level-1 flex items-center justify-center italic font-black text-xl border border-[rgba(16,185,129,0.2)]">L1</div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest block mb-1">Cấp độ 1</span>
                        <h2 className="text-2xl md:text-3xl font-black italic uppercase text-level-1">Beginner — Khởi đầu nhanh (The Seed)</h2>
                    </div>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Ở giai đoạn này, mục tiêu của bạn là làm quen với giao diện và khả năng nhập liệu đa phương thức của mô hình Claude Opus 4.7.1.</p>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">1. Cách truy cập & Gói cước</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Truy cập <a href="https://claude.ai/design" className="text-level-1 hover:underline">claude.ai/design</a>.</li>
                            <li>Hỗ trợ cho người dùng gói Pro, Max, Team, và Enterprise.</li>
                            <li><strong className="text-zinc-300">Lưu ý:</strong> Nếu dùng hết hạn mức, bạn có thể bật &quot;Extra Usage&quot; để tiếp tục làm việc.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">2. Giao diện &quot;Chat-plus-Canvas&quot;</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li><strong className="text-zinc-300">Bên trái (Chat):</strong> Nơi bạn mô tả ý tưởng và xem quá trình &quot;Soldering&quot; (hàn gắn) linh kiện thiết kế của Claude.</li>
                            <li><strong className="text-zinc-300">Bên phải (Canvas):</strong> Không gian hiển thị trực quan, nơi thiết kế sống động hiện ra.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">3. Nhập liệu đa phương thức (Import)</h3>
                        <p className="text-sm text-zinc-400 mb-2">Claude Design không chỉ hiểu chữ, nó hiểu cả cấu trúc dữ liệu:</p>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li><strong className="text-zinc-300">Tải lên tài liệu:</strong> Hỗ trợ <code className="bg-white/10 px-1 rounded">flows.docx</code>, <code className="bg-white/10 px-1 rounded">cities.xlsx</code>, <code className="bg-white/10 px-1 rounded">brand.pptx</code> để làm dữ liệu nguồn cho thiết kế.</li>
                            <li><strong className="text-zinc-300">Web Capture Tool:</strong> Chụp các thành phần trực tiếp từ website của bạn để đảm bảo prototype mới khớp hoàn toàn với sản phẩm thực tế.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  LEVEL 2  */}
            <div id="level-2" className="glass p-10 card-hover border-l-4 level-2 scroll-mt-24">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-level-2 text-level-2 flex items-center justify-center italic font-black text-xl border border-[rgba(234,179,8,0.2)]">L2</div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest block mb-1">Cấp độ 2</span>
                        <h2 className="text-2xl md:text-3xl font-black italic uppercase text-level-2">Intermediate — Tùy biến chuyên sâu (The Builder)</h2>
                    </div>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Học cách kiểm soát thiết kế ở cấp độ chi tiết (pixel-perfect) mà không cần viết code thủ công.</p>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">1. Brand Built-in (Hệ thống thương hiệu)</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Claude đọc codebase và file thiết kế của bạn để tự động xây dựng Design System.</li>
                            <li>Mọi thiết kế sau đó sẽ tự động tuân thủ bảng màu (palette), font chữ và các quy tắc spacing của riêng bạn.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">2. Công cụ tinh chỉnh trực quan (Knobs & Tweaks)</h3>
                        <p className="text-sm text-zinc-400 mb-2">Đây là tính năng đột phá giúp bạn điều chỉnh thiết kế mà không cần dùng lời nói:</p>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li><strong className="text-zinc-300">Adjustment Knobs:</strong> Claude tự tạo ra các thanh trượt (sliders) cho từng element. Bạn có thể kéo để chỉnh: <span className="italic">Arc width, Arc density, Grid opacity, Pulse speed, Rotation, Tilt...</span></li>
                            <li><strong className="text-zinc-300">Viewport Switcher:</strong> Kiểm tra hiển thị tức thì trên các chế độ Desktop, Tablet, và Mobile.</li>
                            <li><strong className="text-zinc-300">Theme Toggle:</strong> Chuyển đổi nhanh giữa Dark Mode và Light Mode để kiểm tra độ tương phản.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  LEVEL 3  */}
            <div id="level-3" className="glass p-10 card-hover border-l-4 level-3 scroll-mt-24">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-level-3 text-level-3 flex items-center justify-center italic font-black text-xl border border-[rgba(249,115,22,0.2)]">L3</div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest block mb-1">Cấp độ 3</span>
                        <h2 className="text-2xl md:text-3xl font-black italic uppercase text-level-3">Advanced — Thiết kế biên giới (The Architect)</h2>
                    </div>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Tiến vào lĩnh vực thiết kế tương tác cao cấp và truyền thông đa phương tiện.</p>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">1. Frontier Design (Thiết kế biên giới)</h3>
                        <p className="text-sm text-zinc-400 mb-2">Claude Design có thể xử lý các logic phức tạp vượt xa trang web tĩnh:</p>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li><strong className="text-zinc-300">Interactive 3D:</strong> Tạo các quả địa cầu xoay (Rotating Globe) với các đường nối phát sáng mô phỏng luồng dữ liệu/văn hóa giữa các thành phố.</li>
                            <li><strong className="text-zinc-300">Advanced Media:</strong> Tích hợp shaders, âm thanh, video và các hiệu ứng chuyển cảnh mượt mà.</li>
                            <li><strong className="text-zinc-300">Draw & Comment:</strong> Vẽ nháp layout bằng chuột (Draw) hoặc để lại ghi chú trực tiếp (Inline Comment) lên từng phần tử để yêu cầu thay đổi (ví dụ: "Đổi biểu đồ cột này thành biểu đồ đường").</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">2. Cộng tác tổ chức (Collaboration)</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Chia sẻ link nội bộ cho đồng nghiệp xem hoặc cùng tham gia sửa đổi (Edit access) trong một cuộc hội thoại nhóm.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  LEVEL 4  */}
            <div id="level-4" className="glass p-10 card-hover border-l-4 level-4 scroll-mt-24">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-level-4 text-level-4 flex items-center justify-center italic font-black text-xl border border-[rgba(239,68,68,0.2)]">L4</div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest block mb-1">Cấp độ 4</span>
                        <h2 className="text-2xl md:text-3xl font-black italic uppercase text-level-4">Hero — Khép kín quy trình (The Unstoppable)</h2>
                    </div>
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Biến bản thiết kế trên Canvas thành code chạy thực tế trong vài giây.</p>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">1. Handoff Bundle (Gói chuyển giao)</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Khi thiết kế hoàn tất, nhấn <strong className="text-zinc-300">Export -&gt; Handoff to Claude Code</strong>.</li>
                            <li>Claude sẽ đóng gói toàn bộ logic, tài sản thiết kế và thông số kỹ thuật thành một &quot;bundle&quot;.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">2. Triển khai thực tế</h3>
                        <p className="text-sm text-zinc-400 mb-2">Trong Terminal, gọi Claude Code để thực thi:</p>
                        <div className="code-block mono italic mb-4">claude code &quot;Implement this design from project #Aether&quot;</div>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Code sinh ra sẽ là Next.js/Tailwind chất lượng cao, sẵn sàng để deploy lên Vercel hoặc Supabase.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">3. Xuất bản đa nền tảng</h3>
                        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                            <li>Xuất tệp ZIP, PDF, PPTX hoặc gửi trực tiếp sang Canva để thuyết trình.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>

    {/*  Section: 10 Kỹ Năng Thiết Yếu  */}
    <section id="skills" className="py-24 px-6 border-t border-white/5 bg-[var(--bg)] relative scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,87,0.03)_0%,transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-[#D97757] font-black text-sm uppercase tracking-widest mb-4 italic">BỘ KỸ NĂNG THỰC CHIẾN</h3>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white mb-6">10 Kỹ năng Thiết yếu để Làm chủ Claude Design</h2>
                <p className="text-zinc-400 text-sm md:text-base max-w-3xl mx-auto font-medium">Bộ kỹ năng này được đúc kết từ quy trình làm việc thực tế với mô hình Claude Opus 4.7, giúp bạn biến ý tưởng thành sản phẩm hoàn chỉnh trong hệ sinh thái AI-native.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/*  Skill 1  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">01</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-file-import text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Nhập liệu Đa phương thức</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Khả năng không chỉ dùng text prompt mà còn biết cách &quot;mồi&quot; dữ liệu cho Claude. Bạn cần thuần thục việc tải lên các tệp <code className="bg-white/10 px-1 rounded text-xs">flows.docx</code>, <code className="bg-white/10 px-1 rounded text-xs">cities.xlsx</code>, hoặc trực tiếp chỉ định codebase để Claude có đủ ngữ cảnh tạo ra thiết kế chính xác nhất ngay từ phiên bản đầu tiên.</p>
                </div>

                {/*  Skill 2  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">02</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-crop-simple text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Sử dụng Web Capture Tool</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Kỹ năng chụp và trích xuất các thành phần từ website thực tế. Đây là chìa khóa để tạo ra các bản prototype có độ trung thực cao (high-fidelity), đảm bảo các thành phần mới khớp hoàn hảo với sản phẩm hiện có mà không cần đo đạc thủ công.</p>
                </div>

                {/*  Skill 3  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">03</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-swatchbook text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Thiết lập Design System tự động</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Kỹ năng &quot;dạy&quot; Claude về phong cách thương hiệu. Bạn cần biết cách hướng dẫn Claude đọc file thiết kế hoặc mã nguồn cũ để tự động tạo ra bộ bảng màu (palette), font chữ và các quy tắc khoảng cách (spacing), giúp mọi dự án sau đó luôn &quot;đúng thương hiệu&quot;.</p>
                </div>

                {/*  Skill 4  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">04</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-sliders text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Tinh chỉnh bằng Adjustment Knobs</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Thay vì mô tả bằng lời, bạn cần làm chủ các thanh trượt (sliders) mà Claude tự tạo ra. Việc kéo các thông số như <span className="italic text-zinc-300">Arc width, Rotation, hay Tilt</span> giúp bạn kiểm soát thị giác một cách trực quan và nhanh chóng hơn nhiều so với việc gõ prompt.</p>
                </div>

                {/*  Skill 5  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">05</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-mobile-screen-button text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Thiết kế Responsive & Đa nền tảng</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Sử dụng thành thạo Viewport Switcher để kiểm tra và tối ưu giao diện trên các chế độ Desktop, Tablet và Mobile ngay trong quá trình thiết kế. Kỹ năng này đảm bảo trải nghiệm người dùng (UX) đồng nhất trên mọi kích thước màn hình.</p>
                </div>

                {/*  Skill 6  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">06</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-brands fa-unity text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Sáng tạo Frontier Design (3D & Shaders)</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Khả năng yêu cầu Claude tạo ra các yếu tố phức tạp vượt ra ngoài giao diện 2D thông thường, như quả địa cầu 3D tương tác hoặc các hiệu ứng Shaders phát sáng. Đây là kỹ năng phân biệt giữa một Designer thông thường và một &quot;Hero&quot;.</p>
                </div>

                {/*  Skill 7  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">07</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-pen-nib text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Phác thảo & Ghi chú trực tiếp</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Kỹ năng sử dụng công cụ vẽ (Draw) để phác họa nhanh layout và dùng Inline Comment để ra lệnh cho Claude chỉnh sửa trên từng pixel cụ thể. Điều này giúp vòng lặp phản hồi (feedback loop) trở nên cực kỳ ngắn và hiệu quả.</p>
                </div>

                {/*  Skill 8  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">08</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-bolt text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Xây dựng Prototype tương tác</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Không chỉ tạo ảnh tĩnh, bạn cần biết cách yêu cầu Claude tạo ra các luồng (flows) có thể click và chuyển động được. Kỹ năng này cho phép bạn làm user-test hoặc trình diễn ý tưởng mà không cần viết một dòng code nào.</p>
                </div>

                {/*  Skill 9  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">09</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-box-open text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Quản lý Gói chuyển giao (Handoff)</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Kỹ năng đóng gói toàn bộ chất xám từ bản thiết kế (logic, asset, spec) thành một Handoff Bundle. Đây là bước quan trọng nhất để chuẩn bị cho giai đoạn lập trình, đảm bảo không có thông tin nào bị thất lạc khi chuyển giao.</p>
                </div>

                {/*  Skill 10  */}
                <div className="glass p-8 card-hover relative group">
                    <span className="absolute top-4 right-6 text-6xl font-black italic text-white/5 group-hover:text-[#D97757]/10 transition-colors pointer-events-none">10</span>
                    <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 flex items-center justify-center text-[#D97757] mb-6 border border-[#D97757]/20 shadow-lg shadow-[#D97757]/10">
                        <i className="fa-solid fa-code text-xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Triển khai Code thực tế</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Kỹ năng phối hợp với Claude Code để thực thi bản thiết kế. Bạn cần biết cách sử dụng các lệnh Terminal để &quot;triệu hồi&quot; Claude Code, đọc Handoff Bundle và viết ra mã nguồn Next.js/Tailwind chuẩn production để sẵn sàng deploy.</p>
                </div>
            </div>

            {/*  Hero Highlight Banner  */}
            <div className="mt-12 relative p-[1px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D97757] via-[#f97316] to-[#eab308] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-black rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-[#D97757] to-[#eab308] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(217,119,87,0.4)]">
                        <i className="fa-solid fa-crown text-3xl text-white"></i>
                    </div>
                    <div>
                        <h4 className="text-white font-black uppercase text-xl mb-2 tracking-wide">Lời khuyên từ Hero</h4>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">Hãy bắt đầu từ <strong className="text-[#D97757]">Kỹ năng 1</strong> và <strong className="text-[#D97757]">Kỹ năng 3</strong> (Dữ liệu nguồn và Thương hiệu), vì nếu nền móng vững chắc, Claude sẽ giúp bạn thực hiện 8 kỹ năng còn lại dễ dàng hơn gấp 10 lần!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Next Step Banner (Navigation Loop)  */}
    <section className="py-12 px-6 bg-[var(--surface)] border-t border-white/5">
        <div className="max-w-4xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7b61ff] via-[#4285f4] to-[#10b981] opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl blur-xl"></div>
            <div className="relative glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#7b61ff]/30 overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(123,97,255,0.2)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="text-center md:text-left z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-[#7b61ff]">Lộ trình tiếp theo</p>
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-3">Claude Masterclass 2026</h3>
                    <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">Đã làm chủ Design? Bước tiếp theo là biến thiết kế thành sản phẩm hoạt động với <strong className="text-white">Claude Code</strong>, <strong className="text-white">Agentic Workflow</strong> và triển khai thực tế lên Vercel/Netlify.</p>
                </div>
                <div className="z-10 flex-shrink-0">
                    <a href="/course" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black italic rounded-xl transition-all hover:bg-zinc-200 uppercase tracking-widest text-xs hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Khám phá các khoá học <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  Sources & CTA Footer  */}

    </>
  );
}
