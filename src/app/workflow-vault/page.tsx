import type { Metadata } from "next";

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
        url: "/images/products/workflow-vault-og-1200x630.webp",
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
    images: ["/images/products/workflow-vault-og-1200x630.webp"]
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
      {/* TODO: OG image — tạo file /public/images/products/workflow-vault-og-1200x630.webp */}
      <div className="min-h-screen bg-[#000a1f] text-white selection:bg-[#fa8a1a] selection:text-white pb-20 md:pb-0 font-sans">
        
        {/* BLOCK 1 — HERO SECTION */}
        <section className="relative w-full bg-gradient-to-b from-[#003189] to-[#001a4d] pt-28 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Bộ Workflow AI Thực Chiến — <br className="hidden md:block" />
              <span className="text-[#fa8a1a]">Copy Vào Là Chạy Được</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F6F8FC]/80 font-medium max-w-2xl mb-10 leading-relaxed">
              10 workflow đã dùng thật. Prompt đầy đủ. SOP từng bước.
              Không cần mày mò lại từ đầu.
            </p>
            
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#fa8a1a] hover:bg-[#e0750c] text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(250,138,26,0.3)] mb-6"
              aria-label="Lấy Workflow Vault"
            >
              → Lấy Workflow Vault — 799.000đ
            </a>
            
            <a href="#whats-inside" className="text-[#F6F8FC]/60 hover:text-white underline underline-offset-4 text-sm font-bold transition-colors">
              Xem có gì bên trong ↓
            </a>

            <div className="mt-16 w-full max-w-[800px] aspect-[16/9] border border-dashed border-white/20 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm relative overflow-hidden group">
              {/* TODO: Thay bằng screenshot output thật — 800x450px */}
              <span className="text-white/40 font-medium">Screenshot Demo Output (800x450px)</span>
            </div>
          </div>
        </section>

        {/* BLOCK 2 — PAIN SECTION */}
        <section className="py-20 px-4 bg-[#000a1f]">
          <div className="max-w-[680px] mx-auto flex flex-col gap-6">
            {[
              "Bạn đang dùng AI nhưng mỗi lần dùng lại phải viết prompt từ đầu?",
              "Bạn thấy AI demo hay trên YouTube nhưng khi tự làm lại ra output khác hoàn toàn?",
              "Bạn mất 3–4 giờ cho một việc đáng lẽ xong trong 30 phút nếu có đúng workflow?"
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fa8a1a]/10 flex items-center justify-center border border-[#fa8a1a]/30 mt-0.5">
                  <span className="text-[#fa8a1a] font-bold">?</span>
                </div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  {q}
                </p>
              </div>
            ))}
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-xl md:text-2xl text-[#fa8a1a] font-bold leading-relaxed">
                Vấn đề không phải bạn dùng AI sai.<br/>Vấn đề là bạn chưa có hệ.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 3 — WHAT'S INSIDE */}
        <section id="whats-inside" className="py-20 px-4 bg-[#001233] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
              Bên Trong Workflow Vault Có Gì
            </h2>
            
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
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4 hover:border-white/20 transition-colors">
                  <div className="text-emerald-400 text-xl mt-0.5">✅</div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">{wf.title}</h3>
                    <p className="text-slate-400 text-sm font-medium">Output: {wf.output}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#fa8a1a]/10 border border-[#fa8a1a] rounded-xl p-4 md:p-6 text-center max-w-3xl mx-auto">
              <p className="text-[#fa8a1a] font-bold md:text-lg">
                + Bonus: Prompt Vault 50 — 50 prompt phân loại sẵn theo 5 nhóm ứng dụng
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 4 — PROOF SECTION */}
        <section className="py-20 px-4 bg-[#000a1f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
              Output Thật — Không Phải Demo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[600/340] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-center p-4">
                  {/* TODO: Thay bằng screenshot landing page thật — 600×340px .webp */}
                  <span className="text-white/40 font-medium text-sm">Screenshot landing page thật</span>
                </div>
                <p className="text-center text-slate-400 text-sm font-medium italic">
                  &quot;Landing page này tạo trong 40 phút bằng Workflow #02&quot;
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[600/340] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-center p-4">
                  {/* TODO: Thay bằng screenshot bài blog thật — 600×340px .webp */}
                  <span className="text-white/40 font-medium text-sm">Screenshot bài blog thật</span>
                </div>
                <p className="text-center text-slate-400 text-sm font-medium italic">
                  &quot;Bài blog 2100 từ, 1 lần chạy, chỉnh sửa 15 phút&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 5 — WHO THIS IS FOR */}
        <section className="py-20 px-4 bg-[#001233] border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
              Vault Này Phù Hợp Nếu Bạn Là
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Panel Trái */}
              <div className="border border-[#fa8a1a] bg-[#fa8a1a]/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Phù hợp</h3>
                <ul className="space-y-4">
                  {[
                    "Marketer / content writer muốn tăng tốc output mà không giảm chất lượng",
                    "Freelancer muốn nhận thêm việc mà không cần thêm giờ làm",
                    "Founder / SME muốn xây hệ content + landing mà không thuê thêm người",
                    "Người đang học AI và muốn thấy workflow thật, không phải demo"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-emerald-400 shrink-0">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel Phải */}
              <div className="border border-white/20 bg-black/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white/60 mb-6 border-b border-white/10 pb-4">Không phù hợp</h3>
                <ul className="space-y-4">
                  {[
                    "Người muốn học lý thuyết hoặc chỉ xem demo",
                    "Người chưa sẵn sàng thực hành ngay"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-500">
                      <span className="text-rose-500/70 shrink-0">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 6 — PRICING & CTA */}
        <section id="pricing" className="py-24 px-4 bg-[#000a1f] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-[#fa8a1a]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-white">
              Chọn Gói Phù Hợp
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white/5 border border-white/20 rounded-2xl p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">Workflow Vault</h3>
                <p className="text-slate-400 mb-8 min-h-[48px]">10 workflow đầy đủ 5 lớp</p>
                <div className="text-4xl font-black text-white mb-8">799.000đ</div>
                
                {/* PLACEHOLDER: Link thanh toán chưa active */}
                {/* TODO: Thay bằng URL Zalo thanh toán thật */}
                <a 
                  href="https://zalo.me/PLACEHOLDER_ZALO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 rounded-xl border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors"
                  aria-label="Mua gói Workflow Vault"
                >
                  Mua ngay →
                </a>
              </div>

              {/* Card 2 (Featured) */}
              <div className="bg-[#fa8a1a]/5 border-2 border-[#fa8a1a] rounded-2xl p-8 flex flex-col h-full transform md:scale-105 shadow-[0_0_40px_rgba(250,138,26,0.15)] relative mt-4 md:mt-0">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fa8a1a] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  Phổ biến nhất
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Vault + Prompt Pack</h3>
                <p className="text-slate-400 mb-8 min-h-[48px]">10 workflow + 50 prompt phân loại</p>
                <div className="text-4xl font-black text-[#fa8a1a] mb-8">999.000đ</div>
                
                {/* PLACEHOLDER: Link thanh toán chưa active */}
                {/* TODO: Thay bằng URL Zalo thanh toán thật */}
                <a 
                  href="https://zalo.me/PLACEHOLDER_ZALO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 rounded-xl bg-[#fa8a1a] hover:bg-[#e0750c] text-white font-bold text-center transition-colors"
                  aria-label="Mua gói Vault và Prompt Pack"
                >
                  Mua ngay →
                </a>
              </div>
            </div>

            <p className="text-center text-slate-500 mt-10 text-sm">
              Nhận file ngay sau thanh toán. Truy cập vĩnh viễn.
            </p>
          </div>
        </section>

        {/* BLOCK 7 — FAQ */}
        <section className="py-20 px-4 bg-[#001233] border-t border-white/5">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
              Câu Hỏi Thường Gặp
            </h2>
            
            <div className="space-y-0">
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
                }
              ].map((faq, i) => (
                <div key={i} className="py-6 border-b border-white/10 last:border-0">
                  <h3 className="text-lg font-bold text-white mb-3 flex gap-3">
                    <span className="text-[#fa8a1a]">Q:</span> {faq.q}
                  </h3>
                  <p className="text-slate-400 pl-7 leading-relaxed">
                    <span className="text-white/40 absolute -ml-7 font-bold">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCK 8 — STICKY CTA (MOBILE ONLY) */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#003189] border-t border-white/10 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="text-white font-bold text-sm leading-tight">
              Workflow Vault<br/>
              <span className="text-[#fa8a1a]">799.000đ</span>
            </div>
            
            {/* PLACEHOLDER: Link thanh toán chưa active */}
            {/* TODO: Thay bằng URL Zalo thanh toán thật */}
            <a 
              href="https://zalo.me/PLACEHOLDER_ZALO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#fa8a1a] text-white text-sm font-bold rounded-lg whitespace-nowrap"
            >
              Mua ngay →
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
