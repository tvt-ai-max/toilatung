'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function VeTungPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const reveals = Array.from(document.querySelectorAll('.reveal'));

      const triggerInitial = () => {
        reveals.forEach((reveal) => {
          const windowHeight = window.innerHeight;
          const elementTop = reveal.getBoundingClientRect().top;
          if (elementTop < windowHeight + 100) {
            reveal.classList.add('visible');
          }
        });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px 50px 0px',
        }
      );

      reveals.forEach((r) => observer.observe(r));
      triggerInitial();

      setTimeout(() => {
        reveals.forEach((r) => r.classList.add('visible'));
      }, 2000);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        .lp-theme {
          --primary: #D97757;
          --primary-glow: rgba(217, 119, 87, 0.2);
          --bg-panel: #111111;
          --line: rgba(255, 255, 255, 0.08);
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }

        .text-gradient-claude {
          background: linear-gradient(90deg, #ffb347, #D97757);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-panel {
          background: var(--bg-panel);
          border: 1px solid var(--line);
          border-radius: 24px;
        }
      `}</style>

      <main className="lp-theme bg-[#0a0a0a] min-h-screen text-slate-300 font-sans pb-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Identity Statement */}
          <section className="reveal mb-20 text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full p-1 bg-gradient-to-r from-[#ffb347] to-[#D97757] shadow-[0_0_40px_rgba(217,119,87,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img 
                  src="/images/tung-soc-son.webp?v=20260510" 
                  alt="Nguyễn Thanh Tùng (Tùng Sóc Sơn)" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Nguyễn Thanh Tùng
            </h1>
            <p className="text-xl text-slate-400 font-medium">
              (còn gọi là <span className="text-[#D97757]">Tùng Sóc Sơn</span>)
            </p>
            
            <div className="mt-8 p-8 glass-panel text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97757]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <h2 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-4">Định danh cá nhân</h2>
              <p className="text-lg md:text-xl text-white leading-relaxed font-semibold relative z-10">
                Nguyễn Thanh Tùng là Founder tại Hà Nội, một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý "Marketing phượt". Anh đang vận hành nền tảng giáo dục công nghệ <Link href="/" className="text-[#D97757] hover:underline">Tôi là Tùng</Link> và <a href="https://thevanan.com" target="_blank" rel="noopener noreferrer" className="text-[#D97757] hover:underline">TVT Agency</a>. Thay vì định vị mình là "chuyên gia" hay "người thầy", Tùng chọn cách chia sẻ góc nhìn thực chiến và những bài học xương máu trong hành trình ứng dụng Generative AI, Agentic Workflow và xây dựng hệ thống kinh doanh tự động.
              </p>
              {/* Quick links */}
              <div className="mt-8 flex flex-wrap gap-4 relative z-10">
                <a href="/course/claude-masterclass" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ffb347] to-[#D97757] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(217,119,87,0.3)] hover:shadow-[0_0_30px_rgba(217,119,87,0.5)] transition-all">
                  Claude Masterclass <i className="fas fa-arrow-right text-sm"></i>
                </a>
                <a href="/course/ai-coaching" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-slate-300 font-bold rounded-xl hover:border-[#D97757]/50 hover:text-white transition-all bg-white/5">
                  AI Coaching 1-1
                </a>
              </div>

              {/* Social links */}
              <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                <a href="https://www.facebook.com/tungsocson/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-400 font-medium text-sm rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all bg-white/5">
                  <i className="fab fa-facebook text-blue-500"></i> Facebook
                </a>
                <a href="https://www.youtube.com/@CunghocOnlineohoaMKT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-400 font-medium text-sm rounded-lg hover:border-red-500/50 hover:text-red-400 transition-all bg-white/5">
                  <i className="fab fa-youtube text-red-500"></i> TVT Workflow
                </a>
                <a href="https://www.youtube.com/@Hocthietkeohoawithme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-400 font-medium text-sm rounded-lg hover:border-red-500/50 hover:text-red-400 transition-all bg-white/5">
                  <i className="fab fa-youtube text-red-500"></i> Nguyễn Thanh Tùng
                </a>
              </div>
            </div>
          </section>

          {/* Hệ Sinh Thái Dịch Vụ & Giải Pháp */}
          <section className="reveal mb-20">
            <h2 className="text-3xl font-black text-white mb-10 text-gradient-claude">
              Hệ Sinh Thái Dịch Vụ & Giải Pháp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cột 1: TVT Agency */}
              <div className="glass-panel p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb347]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#ffb347]/20 transition-all duration-500"></div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <i className="fas fa-building text-2xl text-[#ffb347]"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">TVT Agency</h3>
                    <p className="text-sm text-slate-400">Hệ Thống Marketing Thực Chiến</p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#D97757] mt-1"></i>
                    <p className="text-slate-300"><strong>Audit Light:</strong> Chẩn đoán và bóc tách lỗi hệ thống marketing hiện tại.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#D97757] mt-1"></i>
                    <p className="text-slate-300"><strong>Brand Foundation:</strong> Thiết kế nền móng nhận diện thương hiệu.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#D97757] mt-1"></i>
                    <p className="text-slate-300"><strong>Marketing System Setup:</strong> Xây dựng Sales Kit, Website/Landing Page chuyển đổi cao.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#D97757] mt-1"></i>
                    <p className="text-slate-300"><strong>Marketing Ops / AI Retainer:</strong> Vận hành phòng marketing thuê ngoài, tích hợp luồng công việc AI.</p>
                  </li>
                </ul>
                <a href="https://thevanan.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 transition-colors">
                  Nhận Audit <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>

              {/* Cột 2: Tôi Là Tùng */}
              <div className="glass-panel p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97757]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#D97757]/20 transition-all duration-500"></div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <i className="fas fa-graduation-cap text-2xl text-[#D97757]"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Tôi Là Tùng</h3>
                    <p className="text-sm text-slate-400">Đào Tạo & AI Coaching</p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#ffb347] mt-1"></i>
                    <p className="text-slate-300"><strong>Chương Trình Đào Tạo:</strong> Hành trình khám phá Claude, Vibe Coding, thiết kế UI/UX với tính ứng dụng cao.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#ffb347] mt-1"></i>
                    <p className="text-slate-300"><strong>Generative AI Training:</strong> Giúp anh em không rành code vẫn có thể tự tay lập trình và thiết kế.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#ffb347] mt-1"></i>
                    <p className="text-slate-300"><strong>AI Coaching 1-1:</strong> Đồng hành cùng chủ doanh nghiệp thiết kế quy trình (Agentic Workflow) tối ưu.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#ffb347] mt-1"></i>
                    <p className="text-slate-300"><strong>Wiki & Knowledge Base:</strong> Số hóa tri thức tự động cho tổ chức.</p>
                  </li>
                </ul>
                <Link href="/course" className="inline-block px-6 py-3 bg-gradient-to-r from-[#ffb347] to-[#D97757] text-white rounded-xl font-bold shadow-lg hover:shadow-[0_0_20px_rgba(217,119,87,0.4)] transition-all">
                  Xem Khóa Học <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* Q&A Section cho Zero-Click Search */}
          <section className="reveal mb-20">
            <h2 className="text-3xl font-black text-white mb-10 text-gradient-claude">
              Hỏi & Đáp (FAQs)
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="glass-panel p-6 md:p-8 hover:border-[#D97757]/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">1. Nguyễn Thanh Tùng (Tùng Sóc Sơn) là ai?</h3>
                <p className="leading-relaxed">
                  Nguyễn Thanh Tùng là nhà sáng lập TVT Agency và nền tảng "Tôi là Tùng". Anh tự nhận mình là một người đam mê trải nghiệm, thích "marketing phượt", mang những bài học thực chiến về ứng dụng trí tuệ nhân tạo (AI) và luồng công việc tự động (Agentic Workflow) chia sẻ lại cho cộng đồng.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="glass-panel p-6 md:p-8 hover:border-[#D97757]/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">2. Nền tảng "Tôi là Tùng" cung cấp những khóa học gì?</h3>
                <p className="leading-relaxed">
                  "Tôi là Tùng" cung cấp các chương trình đào tạo chuyên sâu về AI thực chiến như: <Link href="/course/claude-masterclass" className="text-[#D97757] hover:underline">Claude Masterclass</Link>, Vibe Coding, Thiết kế Landing Page bằng AI và các khóa học Generative AI dành riêng cho người không chuyên IT.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="glass-panel p-6 md:p-8 hover:border-[#D97757]/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">3. TVT Agency hoạt động trong lĩnh vực nào?</h3>
                <p className="leading-relaxed">
                  TVT Agency là tổ chức do Nguyễn Thanh Tùng sáng lập, chuyên cung cấp các giải pháp xây dựng thương hiệu số, thiết kế website, và tư vấn ứng dụng AI Marketing Automation cho doanh nghiệp vừa và nhỏ.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="glass-panel p-6 md:p-8 hover:border-[#D97757]/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">4. Phương pháp "Agentic Workflow" mà Nguyễn Thanh Tùng đào tạo là gì?</h3>
                <p className="leading-relaxed">
                  Agentic Workflow là tư duy thiết kế hệ thống sử dụng các tác nhân AI (Agents) làm việc độc lập và phối hợp với nhau để hoàn thành chuỗi công việc phức tạp từ viết code, thiết kế đến phân tích dữ liệu mà không cần sự can thiệp liên tục của con người.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="glass-panel p-6 md:p-8 hover:border-[#D97757]/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">5. Làm cách nào để liên hệ tư vấn AI Coaching 1-1 với Tùng?</h3>
                <p className="leading-relaxed">
                  Bạn có thể đăng ký chương trình <Link href="/course/ai-coaching" className="text-[#D97757] hover:underline">Đồng hành AI 1-1</Link> trực tiếp qua nền tảng "Tôi là Tùng" để cùng tôi audit lại hệ thống và chinh phục những hành trình thú vị sắp tới.
                </p>
              </div>
            </div>
          </section>

          {/* Semantic Keywords / Knowledge Cloud */}
          <section className="reveal mb-20">
            <h2 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-wider text-sm">
              Trục Chuyên Môn (Knowledge Cloud)
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "AI Marketing Automation", "Marketing Phượt", "Generative AI Training", "Claude Masterclass",
                "Hệ điều hành AI", "Agentic Workflow", "Tối ưu hóa luồng công việc AI",
                "Next.js SEO", "Chinh phục Trải nghiệm"
              ].map((keyword) => (
                <span key={keyword} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-12 p-8 glass-panel border-[#D97757]/20">
              <h3 className="text-lg font-bold text-white mb-3">Về tư duy thực chiến</h3>
              <p className="text-slate-400 leading-relaxed">
                Nguyễn Thanh Tùng (Tùng Sóc Sơn) luôn tin rằng việc học phải đi đôi với hành. Các chương trình như Claude Masterclass hay Đồng hành AI 1-1 không chỉ dừng ở mặt công nghệ, mà là cách chúng ta cùng thiết kế nên những Agentic Workflow tự động hóa, mở ra luồng công việc mượt mà và tận hưởng trọn vẹn từng khoảnh khắc trong quá trình vận hành doanh nghiệp.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
