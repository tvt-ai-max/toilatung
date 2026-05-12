import { Metadata } from 'next';
import Link from 'next/link';
import ToolsAISection from '@/components/shared/ToolsAISection';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Tôi Là Tùng | Chia sẻ AI Thực Chiến & Xây Dựng Hệ Thống',
  description: 'Hệ thống hóa kiến thức AI để giải quyết các bài toán phức tạp nhất. Cung cấp khóa học Vibe Coding, Claude Masterclass và xây dựng Content OS tự động hóa.',
  openGraph: {
    images: ['/images/home-og.webp'],
  },
  twitter: {
    card: "summary_large_image",
    images: ['/images/home-og.webp'],
  },
};

export default function Page() {
  const latestPosts = getAllPosts().slice(0, 4);

  return (
    <>
{/*  ===== HERO =====  */}
<header className="hero-glow pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden">

    <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/*  Avatar  */}
            <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative mb-5">
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full p-[3px]"
                        style={{background: 'linear-gradient(135deg,var(--red),var(--indigo),var(--pink))'}}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0e14]" style={{border: '4px solid #000000'}}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/tung-soc-son.webp?v=20260510"
                                alt="Nguyễn Thanh Tùng — TVT Strategist"
                                className="w-full h-full object-cover object-top block" />
                        </div>
                    </div>
                    <span className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-400 rounded-full border-2 border-black block"></span>
                </div>
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] badge-pulse"
                        style={{background: 'rgba(255,45,45,0.1)', border: '1px solid rgba(255,45,45,0.25)', color: '#ff8f8f'}}>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                        AI Coach · Educator · Strategist
                    </div>
                </div>
            </div>

            {/*  Text  */}
            <div className="flex-1 text-center lg:text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-slate-500">Xin chào, tôi là</p>
                <h1 className="hero-title text-5xl md:text-7xl font-black text-white mb-4 leading-[1.04]">
                    Nguyễn<br /><span className="gradient-text">Thanh Tùng</span>
                </h1>
                <p className="text-base md:text-xl text-slate-400 max-w-xl mb-4 font-medium leading-relaxed mx-auto lg:mx-0">
                    Tôi đồng hành cùng cá nhân và doanh nghiệp trong việc <strong className="text-white">học AI, ứng dụng AI</strong> và xây hệ làm việc thực chiến — phù hợp với công việc và mục tiêu thực tế của từng người.
                </p>
                <p className="text-sm text-slate-500 max-w-lg mb-8 italic mx-auto lg:mx-0">
                    &quot;Không học AI để biết thêm. Học AI để tạo ra kết quả cụ thể cho công việc và kinh doanh.&quot;
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a href="#programs"
                       className="px-8 py-4 text-white font-black rounded-2xl text-sm uppercase tracking-widest text-center"
                       style={{background: 'var(--red)', boxShadow: '0 8px 30px var(--red-glow)'}}
                        >
                        <i className="fas fa-graduation-cap mr-2"></i>Xem các chương trình
                    </a>
                    <a href="#start"
                       className="px-8 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 transition text-sm text-center">
                        <i className="fas fa-compass mr-2 text-indigo-400"></i>Tôi nên bắt đầu từ đâu?
                    </a>
                    <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                       className="px-8 py-4 glass text-white font-bold rounded-2xl text-sm text-center transition hover:border-blue-400/30"
                       style={{border: '1px solid rgba(0,104,255,0.25)'}}>
                        <i className="fas fa-comment-dots mr-2 text-blue-400"></i>Chat Zalo
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>


{/*  ===== ABOUT =====  */}
<section id="about" className="py-24 px-4 md:px-6 border-y border-white/5">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{color: 'var(--red)'}}>Về Tùng</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Tôi đến đây từ <span className="gradient-text">thực chiến</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">16 năm làm branding và xây dựng thương hiệu — nay tập trung hoàn toàn vào AI ứng dụng thực tế.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/*  Left: Story  */}
            <div className="space-y-6">
                <div className="glass rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{background: 'rgba(255,45,45,0.15)', border: '1px solid rgba(255,45,45,0.3)'}}>
                            <i className="fas fa-route" style={{color: 'var(--red)'}}></i>
                        </div>
                        <h3 className="text-lg font-black text-white">Hành trình của tôi</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý &quot;Marketing phượt&quot;. Hơn 16 năm thực chiến Branding và Marketing, tôi chọn cách đúc kết thành những quy trình gọn gàng (Agentic Workflow).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Hiện tại tôi là Founder <strong className="text-white">TVT Agency</strong> và hành trình <strong className="text-white">Tôi là Tùng</strong>, nơi tôi chia sẻ lại kinh nghiệm xây dựng hệ thống kinh doanh tự động cho những người muốn làm chủ AI.
                    </p>
                </div>

                <div className="glass rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)'}}>
                            <i className="fas fa-lightbulb" style={{color: 'var(--indigo)'}}></i>
                        </div>
                        <h3 className="text-lg font-black text-white">Triết lý làm việc với AI</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Hành trình của chúng ta không phải là học thuộc các tính năng công cụ. Tôi đồng hành cùng bạn ứng dụng <strong className="text-white">Director Mindset</strong> — tự mình làm đạo diễn, điều phối AI và thiết kế luồng công việc để mỗi ngày làm việc đều là một trải nghiệm thú vị.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Mọi chia sẻ đều được đúc kết từ những chuyến đi và trải nghiệm thực chiến của chính tôi. Không lý thuyết suông, chỉ có hành động.
                    </p>
                </div>
            </div>

            {/*  Right: Credentials  */}
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-3xl p-6 text-center card-hover">
                        <p className="text-4xl font-black mb-2" style={{color: 'var(--red)'}}>16</p>
                        <p className="text-xs font-black text-white uppercase tracking-widest">Năm kinh nghiệm</p>
                        <p className="text-[10px] text-slate-500 mt-1">Branding & Marketing</p>
                    </div>
                    <div className="glass rounded-3xl p-6 text-center card-hover">
                        <p className="text-4xl font-black mb-2" style={{color: 'var(--indigo)'}}>3</p>
                        <p className="text-xs font-black text-white uppercase tracking-widest">Chương trình AI</p>
                        <p className="text-[10px] text-slate-500 mt-1">Coaching · Coding · Free</p>
                    </div>
                    <div className="glass rounded-3xl p-6 text-center card-hover">
                        <p className="text-4xl font-black mb-2" style={{color: 'var(--pink)'}}>1-1</p>
                        <p className="text-xs font-black text-white uppercase tracking-widest">Cá nhân hóa</p>
                        <p className="text-[10px] text-slate-500 mt-1">Mỗi học viên 1 lộ trình</p>
                    </div>
                    <div className="glass rounded-3xl p-6 text-center card-hover">
                        <p className="text-4xl font-black mb-2" style={{color: 'var(--emerald)'}}>100%</p>
                        <p className="text-xs font-black text-white uppercase tracking-widest">Thực chiến</p>
                        <p className="text-[10px] text-slate-500 mt-1">Không slide lý thuyết</p>
                    </div>
                </div>

                <div className="glass rounded-3xl p-8">
                    <h3 className="text-base font-black text-white mb-5">Cách tiếp cận ở đây khác như thế nào?</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm flex-shrink-0"></i>
                            <p className="text-sm text-slate-300"><strong className="text-white">Làm trên case thật của bạn</strong> — không demo, không ví dụ giả, không project không liên quan đến công việc bạn đang làm.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm flex-shrink-0"></i>
                            <p className="text-sm text-slate-300"><strong className="text-white">Audit trước, học sau</strong> — tôi tìm hiểu mục tiêu và mức độ hiện tại của bạn trước khi bắt đầu bất kỳ buổi học nào.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm flex-shrink-0"></i>
                            <p className="text-sm text-slate-300"><strong className="text-white">Kết quả đo được</strong> — cuối mỗi chương trình, bạn có workflow, prompt vault hoặc sản phẩm AI cụ thể để tiếp tục tự vận hành.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-emerald-400 mt-0.5 text-sm flex-shrink-0"></i>
                            <p className="text-sm text-slate-300"><strong className="text-white">Không nhồi tool thừa</strong> — tôi chỉ dạy những gì bạn thực sự cần để đạt mục tiêu của mình.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/*  ===== PROGRAMS =====  */}
<section id="programs" className="py-24 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-slate-500">Chương trình học</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Chọn chương trình <span className="gradient-text">phù hợp với bạn</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Mỗi chương trình phục vụ một mục tiêu khác nhau. Đọc mô tả bên dưới để tìm chương trình đúng với giai đoạn và nhu cầu hiện tại của bạn.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/*  Program 1: Coaching 1-1  */}
            <a href="/course/ai-coaching"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(255,45,45,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(255,45,45,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(255,45,45,0.15)', border: '1px solid rgba(255,45,45,0.35)'}}>
                        <i className="fas fa-user-tie text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(255,45,45,0.1)', color: '#ff8f8f', border: '1px solid rgba(255,45,45,0.2)'}}>Premium · 1-1</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Coaching AI 1-1</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: 'var(--red)'}}>Dành cho ai đã biết AI cơ bản</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Bạn đã dùng AI nhưng còn rời rạc, chưa tạo ra output thực sự cho kinh doanh? Chương trình này giúp bạn chọn đúng tool stack, xây workflow cá nhân hóa và tạo kết quả cụ thể qua 4 buổi Zoom 1-1.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>4 buổi Zoom cá nhân hóa theo case của bạn</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Audit mục tiêu trước mỗi buổi học</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Playbook 30 ngày để tự vận hành sau coaching</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Bộ Prompt mẫu theo đúng ngành của bạn</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl">5.000.000đ</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">/ 4 buổi Zoom</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest" style={{color: 'var(--red)'}}>
                        Xem chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 2: Vibe Coding  */}
            <a href="/course/vibe-coding"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(129,140,248,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(129,140,248,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.35)'}}>
                        <i className="fas fa-terminal text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(129,140,248,0.1)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.2)'}}>Build & Deploy</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Làm Chủ AI<br />bằng Vibe Coding</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: 'var(--indigo)'}}>Dành cho ai muốn build sản phẩm AI thực</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Học cách dùng Claude Code như một đội ngũ kỹ sư: giao việc cho AI, build sub-agent, thiết lập tự động hóa và deploy sản phẩm thật ra production. Không cần background lập trình sâu — chỉ cần tư duy Director.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>3 buổi Zoom thực chiến — build ngay trong buổi học</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Director Mindset: điều phối AI thay vì gõ từng lệnh</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Sub-agent, Hooks, Skills — kiến trúc AI chuyên nghiệp</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Deploy lên Netlify, kết nối Make.com / n8n</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl">5.000.000đ</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">/ 3 buổi Zoom</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest text-indigo-300">
                        Xem chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 3: Phụ Nữ Làm Chủ AI  */}
            <a href="/course/phunulamchuai"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(244,114,182,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(244,114,182,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.35)'}}>
                        <i className="fas fa-heart text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(52,211,153,0.1)', color: '#86efac', border: '1px solid rgba(52,211,153,0.2)'}}>Miễn phí 100%</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Phụ Nữ<br />Làm Chủ AI</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: 'var(--pink)'}}>Dành cho phụ nữ 8x, 9x mới bắt đầu</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Lộ trình 21 ngày miễn phí để bắt đầu học AI từ con số 0 — thiết kế riêng cho phụ nữ có vốn sống thực tế nhưng chưa quen với công nghệ. Từ làm quen ChatGPT đến tạo nội dung, đến thu nhập Affiliate đầu tiên.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>21 ngày, 3 tiếng/ngày — linh hoạt theo lịch gia đình</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Không cần kỹ thuật — chỉ cần điện thoại và internet</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Biến vốn sống thành nội dung thu hút người xem</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Group hỗ trợ đồng hành trong suốt lộ trình</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl gradient-text-free" style={{background: 'linear-gradient(90deg,#34d399,#10b981)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Miễn phí</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Không điều kiện</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest text-pink-300">
                        Xem chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 4: Landing Page AI  */}
            <a href="/course/landing-page"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(41,151,255,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(41,151,255,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(41,151,255,0.15)', border: '1px solid rgba(41,151,255,0.35)'}}>
                        <i className="fas fa-layer-group text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(41,151,255,0.12)', color: '#93c5fd', border: '1px solid rgba(41,151,255,0.25)'}}>Mới 2026</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Thiết Kế<br />Landing Page AI</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: '#38bdf8'}}>Thực chiến từ ý tưởng đến deploy</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Dùng AI & Vibe Coding để thiết kế landing page production-ready trong 6 tuần. 18 bài học, không cần biết code trước. Output thực tế: landing page hoạt động ngay sau khóa học.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>18 bài, 6 phần — từ layout đến deploy</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Dùng Claude Code, AI tools thực chiến</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Output: landing page production-ready</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Không cần background kỹ thuật</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl" style={{background: 'linear-gradient(90deg,#38bdf8,#818cf8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Xem chi tiết →</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">6 tuần · 18 bài học</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest text-sky-300">
                        Đăng ký <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 5: Claude Masterclass 2026  */}
            <a href="/course/claude-masterclass"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(251,191,36,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(251,191,36,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.35)'}}>
                        <i className="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(251,191,36,0.1)', color: '#fde68a', border: '1px solid rgba(251,191,36,0.2)'}}>Token Mastery</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Claude<br />Masterclass 2026</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: '#fbbf24'}}>Làm chủ Claude từ cơ bản đến Pro</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Hướng dẫn chuyên sâu toàn tập về Claude — từ thiết lập, quản lý token, sub-agent đến Director Mindset. Tài liệu thực chiến kèm case study, prompt mẫu và SOP vận hành.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Quản lý Token ROI — tiết kiệm chi phí Claude</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Sub-agent, Hooks, Skills — kiến trúc chuyên nghiệp</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Director Mindset — điều phối AI như đội kỹ sư</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Prompt mẫu + Case study thực chiến</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl" style={{background: 'linear-gradient(90deg,#fbbf24,#f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Xem ngay →</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Tài liệu thực chiến</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest" style={{color: '#fbbf24'}}>
                        Chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 6: Claude Code Master 2026  */}
            <a href="/claude-master"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(167,139,250,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(167,139,250,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.35)'}}>
                        <i className="fas fa-code text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(167,139,250,0.1)', color: '#ddd6fe', border: '1px solid rgba(167,139,250,0.2)'}}>Ultimate Guide</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Claude Code<br />Master 2026</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: '#a78bfa'}}>Guide chuyên sâu toàn tập</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    The Ultimate Guide về Claude Code — setup, BRIEF master, brain file, quản lý context window, multi-agent teams và deploy production. Kèm so sánh Sonnet vs Opus và chiến lược token tối ưu.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Setup + BRIEF Master + Brain File chuẩn</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Context window & Token ROI strategy</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Multi-agent teams — Research, Coder, Reviewer</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Deploy: Netlify, Make.com, n8n</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl" style={{background: 'linear-gradient(90deg,#a78bfa,#7c3aed)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Xem ngay →</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Guide thực chiến</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest text-violet-300">
                        Chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>

            {/*  Program 7: Claude Design Master  */}
            <a href="/claude-design"
               className="block rounded-3xl p-8 card-hover program-card"
               style={{background: 'linear-gradient(to bottom,rgba(251,146,60,0.1),rgba(255,255,255,0.01))', border: '1px solid rgba(251,146,60,0.22)'}}>
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.35)'}}>
                        <i className="fas fa-pen-nib text-white text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{background: 'rgba(251,146,60,0.1)', color: '#fed7aa', border: '1px solid rgba(251,146,60,0.2)'}}>Design + Code</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Claude Design<br />Master v4</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{color: '#fb923c'}}>UI/UX thực chiến với AI</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Triển khai Claude Design Master 2026 — từ case study, master prompts đến SOP vận hành 5 dự án song song. Xây Design System, convert sang React + Tailwind production-ready với Framer Motion.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Case study: Website + Dashboard trong 12h</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>Master Prompts — Design DNA & Semantic Prompting</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>SOP vận hành 5 dự án song song</div>
                    <div className="flex items-center gap-2"><i className="fas fa-check text-emerald-400 text-xs"></i>React + Tailwind + Framer Motion production</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <p className="text-white font-black text-xl" style={{background: 'linear-gradient(90deg,#fb923c,#f97316)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Xem ngay →</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Professional Edition</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-black uppercase tracking-widest text-orange-300">
                        Chi tiết <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </a>
        </div>

        {/*  Coming soon  */}
        <div className="mt-8 glass rounded-3xl p-6 border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/8 flex-shrink-0">
                        <i className="fas fa-clock text-amber-400"></i>
                    </div>
                    <div>
                        <p className="text-white font-black text-sm">Sắp ra mắt</p>
                        <p className="text-slate-500 text-xs">AI Content System cho SME · AI Workflow for Sales · Automation & n8n Builder Sprint</p>
                    </div>
                </div>
                <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                   className="flex-shrink-0 px-5 py-2.5 glass rounded-xl text-xs font-bold text-slate-400 hover:text-white transition border border-white/8 hover:border-amber-400/30">
                    <i className="fas fa-bell mr-2 text-amber-400"></i>Thông báo khi mở
                </a>
            </div>
        </div>
    </div>
</section>


{/*  ===== TOOLS =====  */}
<ToolsAISection />

{/*  ===== LATEST BLOG POSTS =====  */}
<section id="latest-posts" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-indigo-400">TVT Blog</p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Góc Chia Sẻ Về<br /><span className="gradient-indigo">AI & Branding</span></h2>
                <p className="text-slate-500 max-w-2xl">Cập nhật những kiến thức mới nhất về AI, Vibe Coding và Marketing Automation từ kinh nghiệm thực chiến.</p>
            </div>
            <Link href="/blog"
               className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 glass text-white font-bold rounded-2xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition text-sm">
                Đọc tất cả bài viết <i className="fas fa-arrow-right text-indigo-400"></i>
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3 p-5 rounded-3xl glass border border-white/8 hover:border-indigo-500/30 hover:bg-white/4 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(123,97,255,0.12)] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-500/8 blur-2xl rounded-full group-hover:bg-indigo-500/15 transition-colors pointer-events-none" />
                    
                    {post.coverImage && (
                        <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/5 bg-black/50 flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={post.coverImage} alt={post.title} width={800} height={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                        <span>{new Date(post.date || '').toLocaleDateString('vi-VN')}</span>
                        {post.readingTime && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span className="text-slate-600">{post.readingTime} phút</span>
                            </>
                        )}
                    </div>
                    
                    <h3 className="text-white font-black text-base leading-snug line-clamp-3 group-hover:text-indigo-300 transition-colors">
                        {post.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {post.tags?.slice(0, 2).map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-black/40 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    </div>
</section>


{/*  ===== START GUIDE =====  */}
<section id="start" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-emerald-400">Hướng dẫn chọn lộ trình</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Bạn đang ở đâu<br /><span className="gradient-text">trong hành trình AI?</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Đọc 3 mô tả dưới đây và chọn chương trình phù hợp nhất với giai đoạn và mục tiêu hiện tại của bạn.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/*  Profile 1  */}
            <div className="glass rounded-3xl p-8 border-l-4" style={{borderLeftColor: 'var(--pink)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}>
                    <i className="fas fa-seedling" style={{color: 'var(--pink)'}}></i>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{color: 'var(--pink)'}}>Bạn là người mới</p>
                <h3 className="text-xl font-black text-white mb-4">Chưa dùng AI<br />hoặc mới bắt đầu</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">Bạn chưa quen với ChatGPT hoặc Gemini, cảm thấy AI còn xa lạ và không biết bắt đầu từ đâu — đặc biệt nếu bạn không có background kỹ thuật.</p>
                <div className="space-y-2 text-sm text-slate-300 mb-6">
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-pink-400 text-xs"></i>Chưa tạo tài khoản ChatGPT/Gemini</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-pink-400 text-xs"></i>Ngại vì &quot;sợ kỹ thuật&quot;</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-pink-400 text-xs"></i>Muốn học theo nhịp độ phù hợp</p>
                </div>
                <a href="/course/phunulamchuai"
                   className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition"
                   style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}
                    >
                    <span>Phụ Nữ Làm Chủ AI</span>
                    <i className="fas fa-arrow-right text-pink-400 text-xs"></i>
                </a>
                <p className="text-[10px] text-slate-600 mt-2 text-center uppercase tracking-widest">Miễn phí · 21 ngày · Mọi trình độ</p>
            </div>

            {/*  Profile 2  */}
            <div className="glass rounded-3xl p-8 border-l-4" style={{borderLeftColor: 'var(--red)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{background: 'rgba(255,45,45,0.15)', border: '1px solid rgba(255,45,45,0.3)'}}>
                    <i className="fas fa-briefcase" style={{color: 'var(--red)'}}></i>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{color: 'var(--red)'}}>Bạn đã biết AI cơ bản</p>
                <h3 className="text-xl font-black text-white mb-4">Muốn ứng dụng vào<br />kinh doanh thực tế</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">Bạn đã dùng ChatGPT, Claude hoặc Gemini nhưng cảm thấy rời rạc, chưa tạo ra output rõ ràng cho công việc. Muốn có hệ thống, workflow và kết quả đo được.</p>
                <div className="space-y-2 text-sm text-slate-300 mb-6">
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-red-400 text-xs"></i>Dùng AI nhưng chưa có quy trình</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-red-400 text-xs"></i>Cần output: content, sale, workflow cụ thể</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-red-400 text-xs"></i>Muốn được tư vấn theo case riêng</p>
                </div>
                <a href="/course/ai-coaching"
                   className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition"
                   style={{background: 'rgba(255,45,45,0.15)', border: '1px solid rgba(255,45,45,0.3)'}}
                    >
                    <span>Coaching AI 1-1</span>
                    <i className="fas fa-arrow-right" style={{color: 'var(--red)', fontSize: '12px'}}></i>
                </a>
                <p className="text-[10px] text-slate-600 mt-2 text-center uppercase tracking-widest">5.000.000đ · 4 buổi Zoom cá nhân hóa</p>
            </div>

            {/*  Profile 3  */}
            <div className="glass rounded-3xl p-8 border-l-4" style={{borderLeftColor: 'var(--indigo)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)'}}>
                    <i className="fas fa-rocket" style={{color: 'var(--indigo)'}}></i>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{color: 'var(--indigo)'}}>Bạn muốn đi sâu</p>
                <h3 className="text-xl font-black text-white mb-4">Muốn build sản phẩm AI<br />và deploy thực chiến</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">Bạn muốn dùng AI để tạo ra sản phẩm thực — landing page, dashboard, chatbot, hệ agent tự động hóa. Bạn sẵn sàng học Claude Code và tư duy như một AI Director.</p>
                <div className="space-y-2 text-sm text-slate-300 mb-6">
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-indigo-400 text-xs"></i>Muốn build app / tool / landing page bằng AI</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-indigo-400 text-xs"></i>Muốn tự động hóa workflow nội bộ</p>
                    <p className="flex items-center gap-2"><i className="fas fa-arrow-right text-indigo-400 text-xs"></i>Muốn deploy sản phẩm ra production</p>
                </div>
                <a href="/course/vibe-coding"
                   className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition"
                   style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)'}}
                    >
                    <span>Vibe Coding</span>
                    <i className="fas fa-arrow-right text-indigo-400 text-xs"></i>
                </a>
                <p className="text-[10px] text-slate-600 mt-2 text-center uppercase tracking-widest">5.000.000đ · 3 buổi Zoom thực chiến</p>
            </div>
        </div>

        {/*  Unsure CTA  */}
        <div className="mt-8 glass rounded-3xl p-8 text-center border border-white/5">
            <i className="fas fa-comment-dots text-blue-400 text-3xl mb-4 block"></i>
            <h3 className="text-xl font-black text-white mb-2">Vẫn chưa chắc chương trình nào phù hợp?</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">Nhắn Zalo cho tôi — kể mục tiêu và công việc bạn đang làm. Tôi sẽ giúp bạn xác định chương trình phù hợp nhất, không mất phí tư vấn.</p>
            <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
               className="inline-flex items-center gap-3 px-8 py-4 text-white font-black rounded-2xl text-sm uppercase tracking-widest transition"
               style={{background: '#0068ff', boxShadow: '0 8px 30px rgba(0,104,255,0.3)'}}
                >
                <i className="fas fa-comment-dots"></i> Chat với Tùng qua Zalo · 0972613455
            </a>
        </div>
    </div>
</section>


{/*  ===== CTA CUỐI =====  */}
<section id="contact" className="py-24 px-4 md:px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-10 md:p-14 text-center"
             style={{boxShadow: '0 0 80px rgba(255,45,45,0.08),0 0 80px rgba(129,140,248,0.08)'}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 badge-pulse"
                style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Đang nhận học viên mới
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Bắt đầu hành trình AI<br /><span className="gradient-text">của bạn hôm nay</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Chọn chương trình phù hợp với giai đoạn hiện tại của bạn — hoặc nhắn trực tiếp nếu bạn muốn tư vấn trước khi quyết định.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a href="/course/ai-coaching"
                   className="px-7 py-4 text-white font-black rounded-2xl uppercase tracking-widest text-sm"
                   style={{background: 'var(--red)', boxShadow: '0 8px 30px var(--red-glow)'}}
                    >
                    <i className="fas fa-user-tie mr-2"></i>Coaching AI 1-1
                </a>
                <a href="/course/vibe-coding"
                   className="px-7 py-4 text-white font-black rounded-2xl uppercase tracking-widest text-sm"
                   style={{background: 'linear-gradient(135deg,#6366f1,#34d399)', boxShadow: '0 8px 30px var(--indigo-glow)'}}>
                    <i className="fas fa-terminal mr-2"></i>Vibe Coding
                </a>
                <a href="/course/phunulamchuai"
                   className="px-7 py-4 text-white font-black rounded-2xl uppercase tracking-widest text-sm"
                   style={{background: 'linear-gradient(135deg,#f472b6,#fb7185)', boxShadow: '0 8px 30px var(--pink-glow)'}}>
                    <i className="fas fa-heart mr-2"></i>Miễn Phí 21 Ngày
                </a>
            </div>
            <p className="text-slate-500 text-sm">
                Hoặc nhắn trực tiếp:
                <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
                   className="font-black hover:text-white transition ml-1" style={{color: '#60a5fa'}}>
                    <i className="fas fa-comment-dots mr-1"></i>Zalo 0972613455
                </a>
            </p>
        </div>
    </div>
</section>

{/*  ===== STICKY BOTTOM BAR (mobile) =====  */}
<div className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
     style={{background: 'rgba(11,14,20,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.07)'}}>
    <div className="grid grid-cols-2 gap-2 px-4 py-3">
        <a href="/course/ai-coaching"
           className="flex items-center justify-center gap-2 py-3.5 text-white font-black rounded-xl text-xs uppercase tracking-widest"
           style={{background: 'var(--red)', boxShadow: '0 4px 16px var(--red-glow)'}}>
            <i className="fas fa-user-tie"></i> Coaching 1-1
        </a>
        <a href="/course/vibe-coding"
           className="flex items-center justify-center gap-2 py-3.5 text-white font-black rounded-xl text-xs uppercase tracking-widest"
           style={{background: 'linear-gradient(135deg,#6366f1,#34d399)', boxShadow: '0 4px 16px var(--indigo-glow)'}}>
            <i className="fas fa-terminal"></i> Vibe Coding
        </a>
    </div>
</div>


{/*  ===== FOOTER =====  */}

    </>
  );
}
