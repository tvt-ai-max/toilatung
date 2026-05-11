import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { buildCourseSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Book Coaching 1-1 với Tùng — AI Thực Chiến cho SME & Freelancer',
  description: 'Đặt lịch coaching 1-1 với Nguyễn Thanh Tùng — 16 năm kinh nghiệm. Giải quyết bài toán AI cụ thể của bạn: Vibe Coding, AI Agent, Marketing Automation. 4 buổi × 90 phút.',
  alternates: {
    canonical: 'https://toilatung.com/booking',
  },
  openGraph: {
    title: 'Book Coaching AI 1-1 với Tùng',
    description: 'Coaching cá nhân hóa: AI Agent, Vibe Coding, Content OS, Marketing Automation. 4 buổi × 90 phút — 5.000.000đ.',
    url: 'https://toilatung.com/booking',
    siteName: 'Tôi Là Tùng',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://toilatung.com/images/home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Book Coaching AI 1-1 với Tùng',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Coaching AI 1-1 với Tùng',
    description: 'Coaching cá nhân hóa về AI thực chiến. 4 buổi × 90 phút — 5.000.000đ.',
    images: ['https://toilatung.com/images/home-og.webp'],
  },
};

const coachingSchema = buildCourseSchema({
  name: 'AI Coaching 1-1 với Nguyễn Thanh Tùng',
  description: 'Coaching cá nhân hóa về AI thực chiến: Vibe Coding, AI Agent, Marketing Automation, Content OS. 4 buổi × 90 phút qua Zoom.',
  url: 'https://toilatung.com/booking',
  provider: 'Tôi Là Tùng',
  price: '5000000',
  priceCurrency: 'VND',
});

const TOPICS = [
  {
    icon: 'fa-terminal',
    color: 'indigo',
    title: 'Vibe Coding & Claude Code',
    desc: 'Build sản phẩm thật với Claude Code — từ setup đến deploy production. Director Mindset, Sub-agent, Context Window.',
  },
  {
    icon: 'fa-robot',
    color: 'emerald',
    title: 'AI Agent & Agentic Workflow',
    desc: 'Thiết kế và triển khai AI Agent cho doanh nghiệp nhỏ — automation quy trình, multi-agent system thực chiến.',
  },
  {
    icon: 'fa-chart-line',
    color: 'amber',
    title: 'Marketing Automation & CRO',
    desc: 'Xây hệ thống content + landing page chuyển đổi cao bằng AI. Make.com, n8n, AI copywriting.',
  },
  {
    icon: 'fa-bolt',
    color: 'sky',
    title: 'Content OS & Personal Brand',
    desc: 'Hệ thống hóa content creation: từ ý tưởng đến publish tự động. Build authority cá nhân bằng AI.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Đặt lịch',
    desc: 'Chọn slot phù hợp trong lịch bên dưới — buổi đầu tiên là Discovery Call miễn phí 30 phút.',
  },
  {
    num: '02',
    title: 'Discovery Call',
    desc: 'Tùng sẽ hiểu bài toán cụ thể của bạn và thiết kế lộ trình coaching phù hợp nhất.',
  },
  {
    num: '03',
    title: 'Coaching thực chiến',
    desc: '4 buổi × 90 phút qua Zoom — live coding, review thực tế, Q&A không giới hạn.',
  },
  {
    num: '04',
    title: 'Follow-up 30 ngày',
    desc: 'Sau coaching, Tùng follow-up qua Zalo trong 30 ngày để đảm bảo bạn apply được.',
  },
];

export default function BookingPage() {
  return (
    <>
      <JsonLd data={coachingSchema} />

      <div className="min-h-screen bg-black">
        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
          {/* Glows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-48 -right-32 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span>Chỉ còn 3 slot trong tháng 5</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Coaching AI{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                1-1 Thực Chiến
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Giải quyết bài toán AI cụ thể của bạn cùng Tùng —{' '}
              <strong className="text-white">16 năm kinh nghiệm</strong>, đã coaching{' '}
              <strong className="text-white">200+ người</strong> ứng dụng AI thực chiến.
            </p>

            {/* Price badge */}
            <div className="inline-flex items-center gap-6 glass border border-white/10 rounded-3xl px-8 py-5 mb-10">
              <div className="text-center">
                <div className="text-3xl font-black text-white">5.000.000đ</div>
                <div className="text-xs text-slate-500 mt-0.5">4 buổi × 90 phút</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400">FREE</div>
                <div className="text-xs text-slate-500 mt-0.5">Discovery Call 30 phút</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-amber-400">30 ngày</div>
                <div className="text-xs text-slate-500 mt-0.5">Follow-up Zalo</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking-calendar"
              className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30 text-sm uppercase tracking-widest"
            >
              <i className="fas fa-calendar-alt" />
              Đặt lịch Discovery Call miễn phí
            </a>
            <p className="text-slate-600 text-xs mt-4">
              * Discovery Call 30 phút — miễn phí, không ràng buộc
            </p>
          </div>
        </section>

        {/* ── COACHING TOPICS ── */}
        <section className="py-20 px-4 md:px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">
                Nội dung coaching
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Bạn muốn giải quyết bài toán nào?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TOPICS.map((topic) => (
                <div
                  key={topic.title}
                  className="glass rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-${topic.color}-500/15 border border-${topic.color}-500/25 flex items-center justify-center mb-5`}
                  >
                    <i className={`fas ${topic.icon} text-${topic.color}-400 text-xl`} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{topic.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{topic.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 text-sm mt-8">
              Không thấy bài toán của bạn? Không sao —{' '}
              <strong className="text-slate-300">Discovery Call</strong> để Tùng hiểu và thiết kế lộ trình riêng.
            </p>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="py-20 px-4 md:px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-3">
                Quy trình
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Coaching diễn ra như thế nào?
              </h2>
            </div>

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={step.num} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center">
                    <span className="font-black text-indigo-400 text-sm">{step.num}</span>
                  </div>
                  <div className="flex-1 glass rounded-3xl p-6 border border-white/5 hover:border-indigo-500/20 transition-all">
                    <h3 className="font-black text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="absolute ml-6 mt-14 w-0.5 h-6 bg-gradient-to-b from-indigo-500/30 to-transparent hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALENDLY EMBED ── */}
        <section id="booking-calendar" className="py-20 px-4 md:px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">
                Đặt lịch ngay
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Chọn thời gian phù hợp
              </h2>
              <p className="text-slate-400">
                Discovery Call 30 phút — miễn phí, qua Zoom.
              </p>
            </div>

            {/* Calendly placeholder — replace src với link thật */}
            <div className="glass rounded-3xl border border-white/10 overflow-hidden">
              {/* Calendly inline widget — thay URL bên dưới bằng link Calendly/Cal.com thật */}
              {/* Option A: Calendly */}
              {/* <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/toilatung/discovery-call"
                style={{ minWidth: '320px', height: '700px' }}
              /> */}

              {/* Placeholder — hiển thị khi chưa setup Calendly */}
              <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                <div className="w-20 h-20 rounded-3xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <i className="fas fa-calendar-alt text-indigo-400 text-3xl" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Lịch đặt lịch sắp ra mắt</h3>
                <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
                  Trong lúc chờ hệ thống booking online, bạn có thể liên hệ trực tiếp qua Zalo hoặc Facebook để đặt lịch Discovery Call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://zalo.me/0901234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 text-sm uppercase tracking-widest"
                  >
                    <i className="fas fa-comment-dots" />
                    Nhắn Zalo
                  </a>
                  <a
                    href="https://m.me/toilatung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 font-black rounded-2xl hover:bg-indigo-600/30 transition text-sm uppercase tracking-widest"
                  >
                    <i className="fab fa-facebook-messenger" />
                    Facebook Messenger
                  </a>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: 'fa-shield-alt', color: 'emerald', text: 'Discovery Call miễn phí, không ràng buộc' },
                { icon: 'fa-clock', color: 'indigo', text: 'Phản hồi trong 24 giờ làm việc' },
                { icon: 'fa-undo', color: 'amber', text: 'Hoàn tiền 100% nếu không hài lòng sau buổi 1' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 glass rounded-2xl p-4 border border-white/5">
                  <div className={`w-8 h-8 rounded-xl bg-${item.color}-500/15 flex items-center justify-center flex-shrink-0`}>
                    <i className={`fas ${item.icon} text-${item.color}-400 text-sm`} />
                  </div>
                  <p className="text-slate-400 text-xs font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT TUONG ── */}
        <section className="py-20 px-4 md:px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 p-[2px] mx-auto mb-6">
                <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                  <i className="fas fa-user-tie text-white text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl font-black text-white mb-1">Nguyễn Thanh Tùng</h2>
              <p className="text-indigo-400 text-sm font-bold mb-6">Founder, TVT Agency · toilatung.com</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: '16+', label: 'Năm kinh nghiệm' },
                  { num: '200+', label: 'Người đã coaching' },
                  { num: '4.9/5', label: 'Rating trung bình' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-4 border border-white/5">
                    <div className="text-2xl font-black text-white">{stat.num}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tùng là người thực hành — không chỉ dạy lý thuyết. Tất cả kiến thức trong coaching đều đến từ việc tự build sản phẩm thật, chạy campaign thật và đo kết quả thật với TVT Agency.
              </p>

              <Link
                href="/ve-tung"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-bold transition-colors"
              >
                Tìm hiểu thêm về Tùng
                <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 px-4 md:px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Bắt đầu bằng một cuộc trò chuyện
            </h2>
            <p className="text-slate-400 mb-10">
              Discovery Call 30 phút — Tùng lắng nghe bài toán, gợi ý hướng đi. Miễn phí, không ràng buộc.
            </p>
            <a
              href="#booking-calendar"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black rounded-2xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-2xl shadow-indigo-600/30 text-sm uppercase tracking-widest"
            >
              <i className="fas fa-calendar-alt" />
              Đặt lịch ngay — miễn phí
            </a>
            <p className="text-slate-600 text-xs mt-4">
              Hoặc nhắn trực tiếp:{' '}
              <a href="https://m.me/toilatung" className="text-indigo-400 hover:underline">
                Facebook Messenger
              </a>{' '}
              /{' '}
              <a href="https://zalo.me/0901234567" className="text-indigo-400 hover:underline">
                Zalo
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
