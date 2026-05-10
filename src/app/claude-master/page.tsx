import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Code Mastery 2026 — Hướng Dẫn Toàn Tập',
  description: 'Hướng dẫn tối thượng về Claude Code 2026. Chuyển đổi từ một lập trình viên thông thường thành một AI Orchestrator quản lý hàng triệu USD lợi nhuận.',
};

export default function Page() {
  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen">
        {/*  Sidebar  */}
        <aside className="w-full lg:w-80 p-6 lg:fixed lg:h-screen z-50 bg-zinc-950 border-r border-zinc-900">
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <i className="fa-solid fa-brain text-zinc-950 text-xl"></i>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-lg leading-none">Claude Code</h1>
                        <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Mastery 2026</p>
                    </div>
                </div>

                <nav className="flex-1 sidebar-scroll overflow-y-auto space-y-1 pr-2">
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-4 mt-2">Nền tảng & Thiết lập</p>
                    <a href="#setup" className="toc-link block text-sm py-2 px-3 rounded-lg">Cài đặt & IDE</a>
                    <a href="#opus47" className="toc-link block text-sm py-2 px-3 rounded-lg">Claude Opus 4.7 Core</a>
                    <a href="#brief-master" className="toc-link block text-sm py-2 px-3 rounded-lg font-bold text-emerald-400">BRIEF MASTER SOP</a>
                    
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-4 mt-6">Kiến trúc Agentic</p>
                    <a href="#brain-file" className="toc-link block text-sm py-2 px-3 rounded-lg">CLAUDE.md & .claude</a>
                    <a href="#modes" className="toc-link block text-sm py-2 px-3 rounded-lg">Các chế độ Permission</a>
                    <a href="#teams" className="toc-link block text-sm py-2 px-3 rounded-lg">Subagents & Agent Teams</a>
                    <a href="#worktrees" className="toc-link block text-sm py-2 px-3 rounded-lg">Git WorkTrees (Parallel)</a>

                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-4 mt-6">Tự động hóa & Skills</p>
                    <a href="#skills" className="toc-link block text-sm py-2 px-3 rounded-lg">Hệ thống Skills Engine</a>
                    <a href="#mcp" className="toc-link block text-sm py-2 px-3 rounded-lg">MCP Servers (Google, Chrome)</a>
                    <a href="#context" className="toc-link block text-sm py-2 px-3 rounded-lg">Quản lý Context & Chi phí</a>

                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-4 mt-6">Kiếm tiền & Triển khai</p>
                    <a href="#deploy" className="toc-link block text-sm py-2 px-3 rounded-lg">Modal & Netlify Scaling</a>
                    <a href="#monetize" className="toc-link block text-sm py-2 px-3 rounded-lg">Build & Sell Apps</a>
                </nav>

                <div className="mt-8 pt-6 border-t border-zinc-900">
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Thông số phiên bản</p>
                        <div className="flex justify-between text-[11px]">
                            <span>Model ID:</span>
                            <span className="text-emerald-500 font-mono">claude-opus-4-7</span>
                        </div>
                        <div className="flex justify-between text-[11px] mt-1">
                            <span>Last Update:</span>
                            <span className="text-zinc-400">18/04/2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        {/*  Main Content  */}
        <main className="flex-1 lg:ml-80 p-4 md:p-10">
            <div className="max-w-4xl mx-auto">
                
                {/*  Hero Section  */}
                <section id="welcome" className="mb-20">
                    <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/30 border border-zinc-800 overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                                Mastering AI <br /><span className="text-emerald-500 text-glow">Autonomy</span>
                            </h1>
                            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                                Hướng dẫn tối thượng về Claude Code 2026. Chuyển đổi từ một lập trình viên thông thường thành một **AI Orchestrator** quản lý hàng triệu USD lợi nhuận.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#brief-master" className="px-8 py-4 bg-emerald-500 text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">KICK-OFF PROJECT</a>
                                <a href="#deploy" className="px-8 py-4 bg-zinc-800 text-white font-bold rounded-2xl border border-zinc-700 hover:bg-zinc-700 transition-all">DEPOYMENT GUIDE</a>
                            </div>
                        </div>
                        {/*  Decorative Abstract Shape  */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32"></div>
                    </div>
                </section>

                {/*  Section: Setup & Environment  */}
                <section id="setup" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">1. Thiết lập & Môi trường</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                                <i className="fa-solid fa-terminal"></i> Terminal Install
                            </h3>
                            <p className="text-sm text-zinc-400">Bạn cần gói **Claude Pro ($17-$28)** để bắt đầu. Cài đặt trực tiếp qua lệnh:</p>
                            <div className="bg-black p-4 rounded-xl border border-zinc-800 font-mono text-xs text-emerald-400">
                                curl -sSL https://code.claude.com/install | sh
                            </div>
                            <p className="text-[11px] text-zinc-500 italic">Dùng lệnh <code className="text-zinc-300">claude login</code> sau khi cài đặt thành công.</p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-blue-500 flex items-center gap-2">
                                <i className="fa-solid fa-rocket"></i> IDE: Anti-Gravity
                            </h3>
                            <p className="text-sm text-zinc-400 italic">&quot;Anti-Gravity là VS Code 2.0&quot; - Được tối ưu bởi Google cho các Agent AI.</p>
                            <ul className="text-xs space-y-3">
                                <li className="flex gap-3"><i className="fa-solid fa-check text-blue-500"></i> UX sạch hơn, trực quan hơn VS Code.</li>
                                <li className="flex gap-3"><i className="fa-solid fa-check text-blue-500"></i> Tích hợp sẵn Gemini & Claude Sidebars.</li>
                                <li className="flex gap-3"><i className="fa-solid fa-check text-blue-500"></i> Quản lý thư mục (File Explorer) thông minh.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/*  Section: BRIEF MASTER SOP  */}
                <section id="brief-master" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">2. Brief Master SOP</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="p-8 rounded-[2rem] border border-emerald-500/30 bg-emerald-500/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-4 right-6 px-3 py-1 bg-emerald-500 text-zinc-950 font-black text-[10px] rounded-full">RECOMMENDED</div>
                        <h3 className="text-2xl font-bold text-white mb-6 tracking-tight italic">Tài liệu khởi tạo dự án chuẩn 2026</h3>
                        <p className="text-zinc-300 text-sm mb-8 leading-relaxed">
                            Đừng chỉ &quot;chat&quot; với Claude. Hãy cung cấp một **Brief Master** để xác lập lộ trình. Đây là bí quyết để xây dựng module phức tạp trong 14 ngày với chi phí &lt; $20.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <span className="step-pill mb-2 inline-block">Pre</span>
                                <h4 className="text-white text-xs font-bold mb-1">Initializer</h4>
                                <p className="text-[10px] text-zinc-500 italic">Chạy /init, tạo CLAUDE.md, thiết lập budget 180k.</p>
                            </div>
                            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <span className="step-pill mb-2 inline-block">During</span>
                                <h4 className="text-white text-xs font-bold mb-1">Incremental</h4>
                                <p className="text-[10px] text-zinc-500 italic">Mỗi ngày 1 feature, commit atomic, cập nhật log.</p>
                            </div>
                            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <span className="step-pill mb-2 inline-block">Post</span>
                                <h4 className="text-white text-xs font-bold mb-1">Closure</h4>
                                <p className="text-[10px] text-zinc-500 italic">Handover doc, CI/CD setup, ROI analysis.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Section: Brain File & Claude Folder  */}
                <section id="brain-file" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">3. Project Brain: .claude Folder</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-xs">A</span>
                                CLAUDE.md (Bộ não)
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Được chèn vào <strong>ĐẦU TIÊN</strong> của mọi hội thoại. Đây là &quot;bánh lái&quot; của con tàu.
                            </p>
                            <ul className="text-xs space-y-4 text-zinc-300">
                                <li className="pl-4 border-l-2 border-emerald-500"><strong>Nguyên tắc 200-500:</strong> Giữ file từ 200-500 dòng để tối ưu độ chính xác.</li>
                                <li className="pl-4 border-l-2 border-emerald-500"><strong>Primacy Bias:</strong> Đưa các quy tắc quan trọng nhất lên hàng đầu.</li>
                                <li className="pl-4 border-l-2 border-emerald-500"><strong>/init:</strong> Lệnh quét codebase để tự sinh cấu trúc chuẩn.</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-900/80 rounded-2xl border border-zinc-800">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-4 tracking-widest">Cấu trúc thư mục .claude/</p>
                            <div className="font-mono text-xs space-y-2">
                                <p className="text-blue-400">/agents <span className="text-zinc-600">{'//'} Các sub-agents chuyên biệt</span></p>
                                <p className="text-emerald-400">/skills <span className="text-zinc-600">{'//'} Các workflow tái sử dụng</span></p>
                                <p className="text-amber-400">/rules <span className="text-zinc-600">{'//'} Quy tắc style code, bảo mật</span></p>
                                <p className="text-purple-400">memory.md <span className="text-zinc-600">{'//'} Ghi chú tự động toàn cục</span></p>
                                <p className="text-zinc-400">settings.json <span className="text-zinc-600">{'//'} Cấu hình đội ngũ & hooks</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Section: Context & Cost Management  */}
                <section id="context" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">4. Quản lý Context & Chi phí</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl overflow-hidden relative">
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h3 className="text-white font-bold mb-6 italic">Chiến lược Token ROI</h3>
                                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                    Context Window của Opus 4.7 là hữu hạn (khoảng 200k-1M). Mỗi tool gọi ra đều tốn token cố định:
                                </p>
                                <ul className="space-y-4 text-xs">
                                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                                        <span>System Tools (Bash, Search):</span>
                                        <span className="text-amber-500 font-mono">~16,800 tokens</span>
                                    </li>
                                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                                        <span>MCP Server Tools:</span>
                                        <span className="text-rose-500 font-mono">20,000+ tokens</span>
                                    </li>
                                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                                        <span>Skills Definition:</span>
                                        <span className="text-emerald-500 font-mono">&lt; 100 tokens</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                                    <p className="text-[10px] text-emerald-500 font-bold mb-2 uppercase italic tracking-widest">Lệnh cứu cánh</p>
                                    <p className="text-xs text-zinc-300"><strong>/context:</strong> Xem bảng phân bổ token.</p>
                                    <p className="text-xs text-zinc-300 mt-2"><strong>/compact:</strong> Nén lịch sử để giải phóng bộ nhớ (Buffer 33k tokens).</p>
                                    <p className="text-xs text-zinc-300 mt-2"><strong>/clear:</strong> Xóa sạch lịch sử khi đổi chủ đề.</p>
                                </div>
                                <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                    <p className="text-xs text-emerald-400 font-bold mb-1">Mẹo Master:</p>
                                    <p className="text-[10px] text-zinc-400 leading-relaxed italic">Chuyển các quy tắc từ CLAUDE.md sang **Skills**. Skills chỉ load khi được gọi, tiết kiệm 40% chi phí.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Section: Agent Teams  */}
                <section id="teams" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">5. Agent Teams & Parallelism</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass-card rounded-3xl border-l-4 border-l-purple-500">
                            <h3 className="text-xl font-bold text-white mb-4">Subagents (Child Agents)</h3>
                            <p className="text-sm text-zinc-400 mb-6 italic">Phù hợp cho task tập trung, gửi kết quả về cha.</p>
                            <div className="space-y-4 text-xs">
                                <div className="p-3 bg-zinc-900 rounded-lg"><strong>Research Agent:</strong> Dùng Sonnet (rẻ) để đọc 1M tokens dữ liệu và gửi tóm tắt 2k tokens về cha.</div>
                                <div className="p-3 bg-zinc-900 rounded-lg"><strong>Reviewer Agent:</strong> Đọc code với context trắng (không thiên kiến) để bắt bug logic.</div>
                            </div>
                        </div>
                        <div className="p-8 glass-card rounded-3xl border-l-4 border-l-rose-500">
                            <h3 className="text-xl font-bold text-white mb-4">Agent Teams (Experimental)</h3>
                            <p className="text-sm text-zinc-400 mb-6 italic">Phù hợp cho task phức tạp, các agent chat với nhau.</p>
                            <ul className="text-[11px] space-y-3">
                                <li className="flex gap-2 text-zinc-300"><span>🔴</span> <span><strong>Chi phí:</strong> Tốn token gấp 7 lần bình thường.</span></li>
                                <li className="flex gap-2 text-zinc-300"><span>🟢</span> <span><strong>Tốc độ:</strong> Chạy song song 10-20 agents cùng lúc.</span></li>
                                <li className="flex gap-2 text-zinc-300"><span>🟢</span> <span><strong>Adversarial:</strong> Cho 2 agent tranh luận (Debate) để tìm ra giải pháp tối ưu nhất.</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/*  Section: Deployment with Modal  */}
                <section id="deploy" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">6. Triển khai & Kiếm tiền</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                        <div className="flex flex-col md:flex-row gap-10 relative z-10">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-6">Biến Skill thành Sản phẩm (SaaS)</h3>
                                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                                    Đừng chỉ giữ Skill trên máy tính của bạn. Sử dụng **Modal** để đưa chúng lên internet dưới dạng API Endpoint công khai chỉ trong 30 giây.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4 p-4 bg-zinc-800/50 rounded-2xl">
                                        <div className="w-10 h-10 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-500 italic font-black text-xl italic">1</div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold">Whip up URL</h4>
                                            <p className="text-[10px] text-zinc-500">Claude tự viết script Modal và deploy lên <code className="text-zinc-300">*.modal.run</code>.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-zinc-800/50 rounded-2xl">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded flex items-center justify-center text-blue-500 italic font-black text-xl italic">2</div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold">API Integration</h4>
                                            <p className="text-[10px] text-zinc-500">Kết nối Skill &quot;Scrape Leads&quot; của bạn với Google Sheets hoặc Zapier qua Webhooks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-72 bg-black/40 rounded-2xl p-6 border border-zinc-800 font-mono">
                                <p className="text-[10px] text-emerald-500 mb-4 uppercase font-bold italic tracking-widest">Example Modal Run</p>
                                <p className="text-[10px] text-zinc-400 leading-5">
                                    <span className="text-zinc-600"># Deploying Birthday Check...</span><br />
                                     nicholas-check-birthday.modal.run<br />
                                    <span className="text-emerald-500">&quot;Happy Birthday Nick!&quot;</span><br /><br />
                                    <span className="text-zinc-600"># Deploying Lead Scraper...</span><br />
                                     dentist-scraper.modal.run/run<br />
                                    <span className="text-blue-400">Generating CSV... (87s)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Comparison Table  */}
                <section id="comparison" className="mb-24 scroll-mt-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Claude Master vs Gemini CLI</h2>
                        <div className="h-px flex-1 bg-zinc-900"></div>
                    </div>
                    <div className="overflow-x-auto rounded-3xl border border-zinc-900 shadow-xl">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-900 text-zinc-500 uppercase text-[10px] tracking-widest">
                                <tr>
                                    <th className="py-5 px-6">Tiêu chí</th>
                                    <th className="py-5 px-6 text-emerald-500 italic">Claude Master 2026</th>
                                    <th className="py-5 px-6 text-blue-500 italic">Gemini CLI 2.5 Pro</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900 text-zinc-400">
                                <tr>
                                    <td className="py-5 px-6 font-bold text-zinc-200">Triết lý thiết kế</td>
                                    <td className="py-5 px-6 italic">Software Engineering & Agentic Autonomy</td>
                                    <td className="py-5 px-6 italic">Massive Information Processing & Google Ecosystem</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-bold text-zinc-200">Cửa sổ ngữ cảnh</td>
                                    <td className="py-5 px-6">200k - 1M tokens (Cần quản lý kỹ)</td>
                                    <td className="py-5 px-6 text-blue-400">2M - 10M tokens (Nuốt cả codebase)</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-bold text-zinc-200">Tính năng độc quyền</td>
                                    <td className="py-5 px-6 text-emerald-400">Task Budgets (Kiểm soát countdown token)</td>
                                    <td className="py-5 px-6">Multimodal native (Xử lý Video/Audio cực nhanh)</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-bold text-zinc-200">Lựa chọn tối ưu</td>
                                    <td className="py-5 px-6 text-zinc-100 italic">Khi cần xây dựng, sửa lỗi và vận hành Agent chuyên nghiệp.</td>
                                    <td className="py-5 px-6 text-zinc-100 italic">Khi cần nghiên cứu, tóm tắt dữ liệu khổng lồ hoặc tích hợp Google Cloud.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/*  Footer  */}
                {/*  Next Step Banner (Navigation Loop)  */}
                <section className="py-12 mb-12 border-t border-zinc-900 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D97757] via-[#f97316] to-[#fb923c] opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                    <div className="relative bg-zinc-900/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-800 overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,87,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                        <div className="text-center md:text-left z-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-[#D97757]">Lộ trình liên quan</p>
                            <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-3">Claude Design Master v4</h3>
                            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">Kết hợp tư duy <strong className="text-white">Director</strong> với kỹ năng <strong className="text-white">AI-native Design</strong>. Biến ý tưởng thành UI/UX chuyên nghiệp và đóng gói Handoff Bundle chuẩn mực trước khi đưa vào code.</p>
                        </div>
                        <div className="z-10 flex-shrink-0">
                            <a href="/claude-design" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black italic rounded-xl transition-all hover:bg-zinc-200 uppercase tracking-widest text-xs hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                Khám phá Design Master <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </section>

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

<footer className="pt-20 pb-12 border-t border-zinc-900 text-center">
                    <div className="flex justify-center gap-8 text-zinc-500 mb-8">
                        <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><i className="fa-solid fa-comment-dots text-xl"></i></a>
                        <a href="mailto:tung@tvtagency.com" className="hover:text-emerald-500 transition-colors"><i className="fa-solid fa-envelope text-xl"></i></a>
                        <a href="/claude-design" className="hover:text-emerald-500 transition-colors"><i className="fa-solid fa-code text-xl"></i></a>
                    </div>
                    <p className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.4em] mb-4">The Value of AI is Speed</p>
                    <div className="max-w-2xl mx-auto px-4">
                        <p className="text-[11px] text-zinc-700 font-mono italic leading-6">
                            &quot;Giá trị của AI không nằm ở việc nó làm đúng 100% trong một lần thử. <br />
                            Giá trị của AI nằm ở TỐC ĐỘ: Nó đưa bạn đến 80% trong 1 phút, <br />
                            sau đó bạn xác minh, lặp lại và đạt 100% trong 5 phút thay vì 5 giờ.&quot;
                        </p>
                    </div>
                </footer>

            </div>
        </main>
    </div>

    {/*  Mobile Navigation Toggle  */}
    <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button id="menu-btn" className="w-14 h-14 bg-emerald-500 text-zinc-950 rounded-full shadow-2xl flex items-center justify-center text-2xl active:scale-90 transition-transform">
            <i className="fa-solid fa-bars-staggered"></i>
        </button>
    </div>

    </>
  );
}
