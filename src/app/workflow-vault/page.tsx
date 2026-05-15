import type { Metadata } from "next";
import { ScrollReveal, MouseTilt } from "@/components/ui/Effects";

export const metadata: Metadata = {
  title: "AI Workflow Vault — Bộ Workflow AI Thực Chiến | Tôi Là Tùng",
  description: "10 workflow AI đã dùng thật. Prompt đầy đủ. SOP từng bước. Copy vào là chạy được — không cần mày mò lại từ đầu.",
  keywords: ["workflow ai", "prompt claude", "ai thực chiến", "workflow marketing", "ai workflow tiếng việt"],
  openGraph: {
    title: "AI Workflow Vault — Copy Vào Là Chạy Được",
    description: "10 workflow AI thực chiến. Prompt + SOP + checklist + output thật.",
    url: "https://toilatung.com/workflow-vault",
    siteName: "Tôi Là Tùng",
    images: [
      {
        url: "/images/products/workflow-vault-hero-v2.png",
        width: 1200,
        height: 630,
        alt: "AI Workflow Vault — Bộ Workflow AI Thực Chiến"
      }
    ],
    locale: "vi_VN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Vault — Copy Vào Là Chạy Được",
    description: "10 workflow AI thực chiến cho người Việt",
    images: ["/images/products/workflow-vault-hero-v2.png"]
  },
  alternates: {
    canonical: "https://toilatung.com/workflow-vault"
  }
};

export default function WorkflowVaultPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Workflow Vault",
    "description": "10 workflow AI thực chiến — Prompt đầy đủ, SOP từng bước, ví dụ output thật",
    "brand": {
      "@type": "Brand",
      "name": "Tôi Là Tùng"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Workflow Vault",
        "price": "799000",
        "priceCurrency": "VND",
        "availability": "https://schema.org/InStock",
        "url": "https://toilatung.com/workflow-vault"
      },
      {
        "@type": "Offer",
        "name": "Vault + Prompt Pack",
        "price": "999000",
        "priceCurrency": "VND",
        "availability": "https://schema.org/InStock",
        "url": "https://toilatung.com/workflow-vault"
      }
    ],
    "creator": {
      "@type": "Person",
      "name": "Nguyễn Thanh Tùng",
      "url": "https://toilatung.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <main className="min-h-screen bg-[#0b0e14] text-white selection:bg-orange-500 selection:text-white pb-20 md:pb-0 font-sans">
        <ScrollReveal />
        
        {/* BLOCK 1 — HERO SECTION */}
        <header className="hero-glow pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
            
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 badge-pulse"
                style={{background: 'rgba(255,145,0,0.1)', border: '1px solid rgba(255,145,0,0.25)', color: '#fb923c'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                Bản Phát Hành 2026
            </div>

            <h1 className="reveal hero-title text-5xl md:text-7xl font-black text-white mb-6 leading-[1.04]" style={{ transitionDelay: '100ms' }}>
              Bộ Workflow AI Thực Chiến — <br className="hidden md:block" />
              <span className="gradient-text" style={{background: 'linear-gradient(90deg, #fb923c, #f97316)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Copy Vào Là Chạy Được</span>
            </h1>
            
            <p className="reveal text-base md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-medium" style={{ transitionDelay: '200ms' }}>
              10 workflow đã dùng thật. Prompt đầy đủ. SOP từng bước. Không cần mày mò lại từ đầu.
            </p>
            
            <div className="reveal flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md" style={{ transitionDelay: '300ms' }}>
              <a href="#pricing"
                  className="px-8 py-4 text-white font-black rounded-2xl text-sm uppercase tracking-widest text-center transform transition-transform hover:scale-105 active:scale-95"
                  style={{background: '#ea580c', boxShadow: '0 8px 30px rgba(234,88,12,0.3)'}}>
                  Lấy Workflow Vault — 799k
              </a>
              <a href="#whats-inside"
                  className="px-8 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:border-white/30 transition-all text-sm text-center hover:bg-white/5">
                  Xem bên trong <i className="fas fa-arrow-down ml-2 text-orange-400 animate-bounce"></i>
              </a>
            </div>

            <div className="reveal w-full max-w-[900px] mt-16" style={{ transitionDelay: '400ms' }}>
              <MouseTilt className="w-full aspect-[16/9] glass rounded-3xl p-2 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-crosshair">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/products/workflow-vault-hero-v2.png" 
                    alt="Workflow Vault Demo Output"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </MouseTilt>
            </div>
          </div>
        </header>

        {/* BLOCK 2 — PAIN SECTION */}
        <section className="py-24 px-4 md:px-6">
          <div className="max-w-[680px] mx-auto flex flex-col gap-8">
            {[
              "Bạn đang dùng AI nhưng mỗi lần dùng lại phải viết prompt từ đầu?",
              "Bạn thấy AI demo hay trên YouTube nhưng khi tự làm lại ra output khác hoàn toàn?",
              "Bạn mất 3–4 giờ cho một việc đáng lẽ xong trong 30 phút nếu có đúng workflow?"
            ].map((q, i) => (
              <div key={i} className="reveal glass rounded-3xl p-6 border border-white/5 flex gap-5 items-start card-hover group" style={{transitionDelay: `${i * 150}ms`}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3"
                    style={{background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.3)'}}>
                    <i className="fas fa-question text-orange-400 text-lg"></i>
                </div>
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed pt-2 group-hover:text-white transition-colors">
                  {q}
                </p>
              </div>
            ))}
            
            <div className="reveal mt-8 pt-8 border-t border-white/10 text-center" style={{transitionDelay: '450ms'}}>
              <p className="text-xl md:text-2xl font-black leading-relaxed" style={{color: '#fb923c'}}>
                Vấn đề không phải bạn dùng AI sai.<br/>Vấn đề là bạn chưa có hệ.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 3 — WHAT'S INSIDE */}
        <section id="whats-inside" className="py-24 px-4 md:px-6 border-y border-white/5 bg-[#0a0d13]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-orange-400">Danh sách Workflow</p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Bên Trong <span className="gradient-text" style={{background: 'linear-gradient(90deg, #fb923c, #f97316)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Workflow Vault Có Gì</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Workflow 01 — Viết bài blog chuẩn SEO", output: "Bài 2000 từ trong 45 phút" },
                { title: "Workflow 02 — Tạo landing page chuyển đổi cao", output: "File HTML production-ready trong 1 buổi" },
                { title: "Workflow 03 — Research đối thủ & thị trường", output: "Phân tích 1 niche trong 30 phút" },
                { title: "Workflow 04 — Viết kịch bản video ngắn (Reels/TikTok)", output: "5 kịch bản/ngày tự động" },
                { title: "Workflow 05 — Xây content calendar 30 ngày", output: "Lịch đăng toàn tháng trong 1 buổi" },
                { title: "Workflow 06 — Tạo prompt system cho doanh nghiệp", output: "Hệ prompt chuẩn hóa cho cả team" },
                { title: "Workflow 07 — Viết email sequence 5 bước", output: "Từ lead → khách hàng trả tiền" },
                { title: "Workflow 08 — Tạo báo cáo marketing hàng tuần", output: "Auto từ data → insight → slide" },
                { title: "Workflow 09 — Phân tích landing page & đề xuất CRO", output: "Audit → A/B idea → copy mới" },
                { title: "Workflow 10 — Build mini SaaS với Claude Code", output: "Từ idea → deploy Netlify" }
              ].map((wf, idx) => (
                <div key={idx} className="reveal glass rounded-2xl p-6 flex items-start gap-4 border border-white/5 hover:border-orange-500/30 transition-all hover:bg-white/5 group" style={{transitionDelay: `${(idx % 5) * 100}ms`}}>
                  <i className="fas fa-check-circle text-emerald-400 text-xl mt-0.5 transform transition-transform group-hover:scale-125"></i>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg group-hover:text-orange-400 transition-colors">{wf.title}</h3>
                    <p className="text-slate-400 text-sm font-medium"><strong className="text-white">Output:</strong> {wf.output}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal glass rounded-3xl p-6 text-center max-w-3xl mx-auto border-2 border-orange-500/30 card-hover" style={{background: 'rgba(234,88,12,0.05)'}}>
              <p className="text-orange-400 font-black md:text-lg flex items-center justify-center gap-3">
                <i className="fas fa-gift text-2xl animate-pulse"></i> + Bonus: Prompt Vault 50 — 50 prompt phân loại sẵn theo 5 nhóm ứng dụng
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 4 — PROOF SECTION */}
        <section className="py-24 px-4 md:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-emerald-400">Kết quả thực tế</p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Output Thật — <span className="gradient-text" style={{background: 'linear-gradient(90deg, #34d399, #10b981)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Không Phải Demo</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 reveal" style={{transitionDelay: '100ms'}}>
                <MouseTilt className="w-full aspect-[600/340] glass rounded-3xl p-2 border border-white/10 flex items-center justify-center text-center cursor-crosshair">
                  <div className="w-full h-full rounded-2xl bg-black relative overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/products/output-demo-landing.png" alt="Demo Landing Page" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </MouseTilt>
                <p className="text-center text-slate-400 text-sm font-medium italic">
                  &quot;Landing page này tạo trong 40 phút bằng Workflow #02&quot;
                </p>
              </div>

              <div className="flex flex-col gap-4 reveal" style={{transitionDelay: '200ms'}}>
                <MouseTilt className="w-full aspect-[600/340] glass rounded-3xl p-2 border border-white/10 flex items-center justify-center text-center cursor-crosshair">
                  <div className="w-full h-full rounded-2xl bg-black relative overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/products/output-demo-blog.png" alt="Demo Blog Post" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </MouseTilt>
                <p className="text-center text-slate-400 text-sm font-medium italic">
                  &quot;Bài blog 2100 từ, 1 lần chạy, chỉnh sửa 15 phút&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 5 — WHO THIS IS FOR */}
        <section className="py-24 px-4 md:px-6 border-t border-white/5 bg-[#0a0d13]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Vault Này Phù Hợp Nếu Bạn Là...</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Panel Trái */}
              <div className="reveal glass rounded-3xl p-8 border-l-4 card-hover" style={{borderLeftColor: 'var(--emerald)'}}>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)'}}>
                        <i className="fas fa-check text-emerald-400"></i>
                    </div>
                    <h3 className="text-xl font-black text-white">Phù hợp</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "Marketer / content writer muốn tăng tốc output mà không giảm chất lượng",
                    "Freelancer muốn nhận thêm việc mà không cần thêm giờ làm",
                    "Founder / SME muốn xây hệ content + landing mà không thuê thêm người",
                    "Người đang học AI và muốn thấy workflow thật, không phải demo"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed group">
                      <span className="text-emerald-400 shrink-0 transform transition-transform group-hover:translate-x-1"><i className="fas fa-chevron-right text-xs"></i></span>
                      <span className="transition-colors group-hover:text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel Phải */}
              <div className="reveal glass rounded-3xl p-8 border border-white/5 opacity-80 card-hover" style={{transitionDelay: '150ms'}}>
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
                        <i className="fas fa-times text-slate-500"></i>
                    </div>
                    <h3 className="text-xl font-black text-slate-400">Không phù hợp</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "Người muốn học lý thuyết hoặc chỉ xem demo",
                    "Người chưa sẵn sàng thực hành ngay"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-500 text-sm leading-relaxed group">
                      <span className="text-rose-500/50 shrink-0 transform transition-transform group-hover:-translate-x-1"><i className="fas fa-times text-xs"></i></span>
                      <span className="transition-colors group-hover:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 6 — PRICING & CTA */}
        <section id="pricing" className="py-24 px-4 md:px-6 relative border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16 reveal">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Chọn Gói Phù Hợp</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              {/* Card 1 */}
              <div className="reveal glass rounded-3xl p-8 md:p-10 flex flex-col h-full border border-white/10 card-hover">
                <h3 className="text-2xl font-black text-white mb-2">Workflow Vault</h3>
                <p className="text-slate-400 mb-8 min-h-[48px] text-sm leading-relaxed">10 workflow đầy đủ 5 lớp</p>
                <div className="text-4xl font-black text-white mb-8">799.000đ</div>
                
                <a 
                  href="https://zalo.me/0972613455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 rounded-2xl glass border border-white/20 text-white font-bold text-center hover:border-white/40 transition-all uppercase tracking-widest text-sm hover:bg-white/5"
                  aria-label="Mua gói Workflow Vault"
                >
                  Mua ngay →
                </a>
              </div>

              {/* Card 2 (Featured) */}
              <div className="reveal glass rounded-3xl p-8 md:p-10 flex flex-col h-full transform md:scale-105 shadow-[0_0_40px_rgba(251,146,60,0.15)] relative border-2 card-hover" style={{borderColor: '#fb923c', transitionDelay: '200ms'}}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-lg shadow-orange-500/30 badge-pulse">
                  Phổ biến nhất
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Vault + Prompt Pack</h3>
                <p className="text-slate-300 mb-8 min-h-[48px] text-sm leading-relaxed">10 workflow + 50 prompt phân loại</p>
                <div className="text-4xl font-black text-orange-400 mb-8">999.000đ</div>
                
                <a 
                  href="https://zalo.me/0972613455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 rounded-2xl text-white font-bold text-center uppercase tracking-widest text-sm transform transition-transform hover:scale-105 active:scale-95"
                  style={{background: '#ea580c', boxShadow: '0 8px 30px rgba(234,88,12,0.3)'}}
                  aria-label="Mua gói Vault và Prompt Pack"
                >
                  Mua ngay →
                </a>
              </div>
            </div>

            <p className="reveal text-center text-slate-500 mt-12 text-sm font-medium flex items-center justify-center gap-2" style={{transitionDelay: '400ms'}}>
              <i className="fas fa-lock text-xs"></i> Nhận file ngay sau thanh toán. Truy cập vĩnh viễn.
            </p>
          </div>
        </section>

        {/* BLOCK 7 — FAQ */}
        <section className="py-24 px-4 md:px-6 border-t border-white/5 bg-[#0a0d13]">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-16 reveal">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Câu Hỏi Thường Gặp</h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "Tôi cần biết code không?",
                  a: "Không. Tất cả workflow chạy được bằng Claude.ai và các tool phổ biến. Không cần kiến thức lập trình."
                },
                {
                  q: "File giao dưới dạng gì?",
                  a: "Notion link + PDF. Truy cập vĩnh viễn sau khi thanh toán."
                },
                {
                  q: "Có cập nhật thêm không?",
                  a: "Gói Early Access được nhận cập nhật miễn phí trong 3 tháng đầu."
                },
                {
                  q: "Tôi không hài lòng thì sao?",
                  a: "Liên hệ Zalo trong 7 ngày — tôi xử lý trực tiếp, không qua form."
                },
                {
                  q: "Workflow này dùng cho Claude bản miễn phí được không?",
                  a: "Được. Tuy nhiên để đạt hiệu quả cao nhất và không bị giới hạn độ dài context, bạn nên cân nhắc dùng Claude Pro hoặc tích hợp qua API."
                },
                {
                  q: "Tôi làm ở mảng B2B, workflow này có áp dụng được không?",
                  a: "Hoàn toàn được. Các workflow tập trung vào quy trình (SOP) và tư duy (Framework), bạn có thể tùy chỉnh dễ dàng cho mọi ngách (Niche) từ B2B, B2C đến Dịch vụ."
                },
                {
                  q: "Prompt Vault 50 có giống với các kho prompt miễn phí trên mạng không?",
                  a: "Không. Prompt Vault 50 là các prompt 'Seamless' đã được tinh chỉnh qua hàng trăm giờ thực chiến của team TVT Agency, giảm thiểu tối đa ảo giác (hallucination) của AI."
                },
                {
                  q: "Khi thanh toán xong thì bao lâu tôi nhận được file?",
                  a: "Hệ thống sẽ tự động gửi email chứa link Notion kèm password cấp quyền truy cập ngay lập tức sau khi bạn chuyển khoản thành công."
                },
                {
                  q: "Tôi có thể chia sẻ bộ workflow này cho team của tôi dùng chung không?",
                  a: "Gói 799k cấp quyền sử dụng cho 1 cá nhân. Nếu bạn muốn deploy cho cả doanh nghiệp hoặc team trên 5 người, vui lòng liên hệ trực tiếp để có giải pháp tối ưu hơn."
                },
                {
                  q: "Có hỗ trợ (Support) 1-1 trong quá trình sử dụng không?",
                  a: "Sản phẩm là tài liệu số (Digital Product) tự học. Tuy nhiên, nếu gặp lỗi về quyền truy cập, đội ngũ sẽ hỗ trợ bạn 24/7. Nếu cần hỗ trợ triển khai, bạn có thể tham khảo gói Coaching 1-1."
                }
              ].map((faq, i) => (
                <div key={i} className="reveal glass rounded-3xl p-6 border border-white/5 card-hover group" style={{transitionDelay: `${(i % 5) * 100}ms`}}>
                  <h3 className="text-lg font-black text-white mb-3 flex gap-3 items-center">
                    <span className="text-orange-400 bg-orange-400/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm transition-transform group-hover:scale-110">Q</span> 
                    <span className="group-hover:text-orange-300 transition-colors">{faq.q}</span>
                  </h3>
                  <p className="text-slate-400 pl-11 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCK 8 — STICKY CTA (MOBILE ONLY) */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 pb-6 reveal"
             style={{background: 'linear-gradient(to top, #0b0e14 60%, transparent)', transitionDelay: '1000ms'}}>
          <div className="glass border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-4 shadow-2xl">
            <div className="text-white font-black text-xs leading-tight pl-2">
              Workflow Vault<br/>
              <span className="text-orange-400 text-sm animate-pulse">799.000đ</span>
            </div>
            
            <a 
              href="https://zalo.me/0972613455"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white text-xs uppercase tracking-widest font-black rounded-xl whitespace-nowrap transform transition-transform active:scale-95"
              style={{background: '#ea580c'}}
            >
              Mua ngay →
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
