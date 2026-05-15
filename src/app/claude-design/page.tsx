import React from 'react';

export const metadata: Metadata = {
  title: 'Claude Design Master v4 — Thiết Kế AI Native',
  description: 'Chào mừng bạn đến với kỷ nguyên thiết kế AI-native. Claude Design cho phép bạn cộng tác với Claude để tạo ra các sản phẩm hình ảnh chuyên nghiệp.',
};

export default function ClaudeDesignPage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 badge-pulse"
               style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            Hướng dẫn Toàn diện
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[1.1]">
            Làm Chủ <br />
            <span className="gradient-text text-orange-400">Claude Design</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Chào mừng bạn đến với kỷ nguyên thiết kế AI-native. Cộng tác với Claude để tạo ra các sản phẩm hình ảnh chuyên nghiệp: từ prototype, slide deck cho đến các bản thiết kế phức tạp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#levels" className="px-8 py-4 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-black rounded-xl transition-all hover:bg-orange-500/20 uppercase tracking-widest text-xs">
              Khám phá 4 Cấp độ
            </a>
          </div>
        </div>
      </section>

      {/* PRICING & ACCESS SECTION */}
      <section id="pricing" className="py-16 px-4 md:px-6 border-t border-white/5 relative z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-orange-400">Research Preview</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Trải nghiệm Thiết kế <span className="text-orange-400">AI-Native Đột phá</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Sức mạnh của mô hình thị giác <strong className="text-white">Claude Opus 4.7</strong> trong quy trình sáng tạo của bạn. Các tùy chọn truy cập:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Cá nhân */}
            <div className="glass rounded-[32px] p-8 border border-white/10 flex flex-col reveal">
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <i className="fa-solid fa-user text-slate-500 text-sm"></i> Dành cho Cá nhân
              </h4>
              <div className="space-y-4 flex-1">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-white text-lg">Claude Pro</h5>
                    <span className="text-[10px] font-black tracking-widest px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">~$20/THÁNG</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Lý tưởng cho Designer, Developer và Freelancer.</p>
                  <p className="text-xs text-slate-500 flex items-center"><i className="fa-solid fa-check text-emerald-400 mr-2"></i>Truy cập Claude Design, Code và Artifacts</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-white text-lg">Claude Max</h5>
                    <span className="text-[10px] font-black tracking-widest px-2 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">TÙY CHỌN</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Dành cho người dùng cường độ làm việc cao.</p>
                  <p className="text-xs text-slate-500 flex items-center"><i className="fa-solid fa-check text-emerald-400 mr-2"></i>Hạn mức thiết kế cao nhất</p>
                </div>
              </div>
            </div>

            {/* Doanh nghiệp */}
            <div className="glass rounded-[32px] p-8 border border-white/10 flex flex-col reveal">
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <i className="fa-solid fa-users text-slate-500 text-sm"></i> Dành cho Doanh nghiệp
              </h4>
              <div className="space-y-4 flex-1">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-white text-lg">Claude Team</h5>
                    <span className="text-[10px] font-black tracking-widest px-2 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">$25-$30/NGƯỜI</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Hỗ trợ Design Systems dùng chung, cộng tác thời gian thực.</p>
                  <p className="text-xs text-slate-500 flex items-center"><i className="fa-solid fa-check text-emerald-400 mr-2"></i>Quản lý quyền linh hoạt</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-white text-lg">Claude Enterprise</h5>
                    <span className="text-[10px] font-black tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIÊN HỆ</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Bảo mật cấp cao, triển khai trên codebase lớn.</p>
                  <p className="text-xs text-slate-500 flex items-center"><i className="fa-solid fa-check text-emerald-400 mr-2"></i>Hạn mức không giới hạn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY SECTION */}
      <section id="levels" className="py-16 px-4 md:px-6 border-t border-white/5 relative z-10 scroll-mt-20 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Lộ Trình 4 Cấp Độ</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Từ người mới bắt đầu đến mức độ khép kín quy trình (Handoff to Code).</p>
          </div>

          {/* LEVEL 1 */}
          <div className="glass rounded-[32px] p-6 md:p-10 border border-white/10 reveal">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-xl border border-emerald-500/20">L1</div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-1">Cấp độ 1</span>
                <h2 className="text-2xl font-black uppercase text-emerald-400 tracking-tight">Beginner — Khởi đầu nhanh</h2>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Giao diện Chat-plus-Canvas</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Làm quen với giao diện chia đôi: Bên trái mô tả ý tưởng, bên phải hiển thị trực quan thiết kế đang được sinh ra.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Nhập liệu đa phương thức</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Tải lên <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">flows.docx</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">brand.pptx</code> để làm dữ liệu nguồn. Sử dụng Web Capture Tool để lấy UI/UX thực tế từ web của bạn.
                </p>
              </div>
            </div>
          </div>

          {/* LEVEL 2 */}
          <div className="glass rounded-[32px] p-6 md:p-10 border border-white/10 reveal">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-xl border border-amber-500/20">L2</div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-1">Cấp độ 2</span>
                <h2 className="text-2xl font-black uppercase text-amber-400 tracking-tight">Intermediate — Tùy biến chuyên sâu</h2>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Brand Built-in</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Tự động nhận diện Design System. Thiết kế tự động tuân thủ bảng màu (palette), font chữ và spacing của riêng dự án.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Adjustment Knobs & Viewport</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Điều chỉnh thiết kế qua các thanh trượt (Sliders) thay vì gõ prompt. Kiểm tra giao diện Mobile/Desktop ngay trên khung Canvas.
                </p>
              </div>
            </div>
          </div>

          {/* LEVEL 3 */}
          <div className="glass rounded-[32px] p-6 md:p-10 border border-white/10 reveal">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-black text-xl border border-orange-500/20">L3</div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-1">Cấp độ 3</span>
                <h2 className="text-2xl font-black uppercase text-orange-400 tracking-tight">Advanced — Thiết kế tương tác</h2>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Frontier Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Tạo các thành phần 3D tương tác, shaders và hiệu ứng chuyển cảnh mượt mà. Vượt xa khỏi giao diện tĩnh truyền thống.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Draw & Comment</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Vẽ nháp (Draw) trực tiếp lên màn hình hoặc khoanh vùng ghi chú (Inline Comment) để yêu cầu thay đổi pixel-perfect.
                </p>
              </div>
            </div>
          </div>

          {/* LEVEL 4 */}
          <div className="glass rounded-[32px] p-6 md:p-10 border border-white/10 reveal">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center font-black text-xl border border-red-500/20">L4</div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-1">Cấp độ 4</span>
                <h2 className="text-2xl font-black uppercase text-red-400 tracking-tight">Hero — Khép kín quy trình</h2>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Handoff Bundle</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Đóng gói toàn bộ tài sản thiết kế (assets, tokens, logic) thành một khối thống nhất để chuyển giao cho AI Coder.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Triển khai ra Code</h3>
                <div className="bg-black border border-white/10 p-4 rounded-xl mt-2 mb-3">
                  <code className="text-sm text-emerald-400 font-mono">claude code "Implement this design from project #Aether"</code>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Biến thiết kế trực tiếp thành mã nguồn Next.js/Tailwind chất lượng cao và deploy lên Vercel.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10 SKILLS SECTION */}
      <section className="py-16 px-4 md:px-6 border-t border-white/5 relative z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">10 Kỹ Năng Thiết Yếu</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Trang bị tư duy đúng đắn để làm chủ Claude Design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill 1 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-file-import"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Nhập liệu Đa phương thức</h4>
              <p className="text-sm text-slate-400 flex-1">"Mồi" dữ liệu nguồn cho Claude bằng files văn bản, bảng biểu, thay vì chỉ dùng text prompt đơn thuần.</p>
            </div>
            {/* Skill 2 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-crop-simple"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sử dụng Web Capture Tool</h4>
              <p className="text-sm text-slate-400 flex-1">Chụp giao diện thực tế để duy trì độ trung thực cao nhất (high-fidelity) trong bản thảo mới.</p>
            </div>
            {/* Skill 3 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-swatchbook"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Thiết lập Design System</h4>
              <p className="text-sm text-slate-400 flex-1">Tự động hóa việc giữ chuẩn thương hiệu: bảng màu, quy tắc spacing, typography.</p>
            </div>
            {/* Skill 4 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-sliders"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Adjustment Knobs</h4>
              <p className="text-sm text-slate-400 flex-1">Kiểm soát thị giác một cách trực quan, chỉnh sửa thông số giao diện qua thanh kéo (sliders).</p>
            </div>
            {/* Skill 5 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Responsive & Đa nền tảng</h4>
              <p className="text-sm text-slate-400 flex-1">Thao tác mượt mà với Viewport Switcher để đảm bảo giao diện đẹp trên mọi thiết bị.</p>
            </div>
            {/* Skill 6 */}
            <div className="glass rounded-[24px] p-8 border border-white/10 flex flex-col group reveal">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 mb-6 border border-white/10 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
                <i className="fa-solid fa-code"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Quản lý Handoff Bundle</h4>
              <p className="text-sm text-slate-400 flex-1">Đóng gói hoàn hảo thiết kế thành Code Bundle chuẩn bị cho việc triển khai thực tế.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 md:px-6 border-t border-white/5 relative z-10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center border border-orange-500/20 relative overflow-hidden reveal">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-orange-500/5 blur-[80px] pointer-events-none"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-orange-400 relative z-10">Lộ trình tiếp theo</p>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight relative z-10">Claude Masterclass 2026</h3>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mb-8 relative z-10">
              Biến thiết kế thành sản phẩm hoạt động với <strong className="text-white">Claude Code</strong>, <strong className="text-white">Agentic Workflow</strong> và triển khai lên Vercel.
            </p>
            <a href="/course" className="px-8 py-4 bg-white text-black font-black rounded-xl transition-all hover:bg-slate-200 uppercase tracking-widest text-xs relative z-10">
              Khám phá khóa học <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
