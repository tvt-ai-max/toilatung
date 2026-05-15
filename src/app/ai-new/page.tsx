import { Metadata } from 'next';
import { getAINews } from '@/lib/ai-news';
import AINewFeed from '@/components/ai-news/AINewFeed';
import HeroEmailForm from '@/components/ai-news/HeroEmailForm';

export const metadata: Metadata = {
  title: 'AI New – Cập nhật AI Thực Chiến Mỗi Tuần | Tôi Là Tùng',
  description: 'Tin tức AI được chọn lọc và phân tích thực chiến dành riêng cho người Việt. Cập nhật những model, công cụ và tác động kinh doanh quan trọng nhất.',
  openGraph: {
    title: 'AI New – Những cập nhật thực sự quan trọng | Tôi Là Tùng',
    description: 'Tin tức AI được chọn lọc và phân tích thực chiến dành riêng cho người Việt.',
    url: 'https://toilatung.com/ai-new',
    siteName: 'Tôi Là Tùng',
    type: 'website',
  },
};

export default function AINewPage() {
  const news = getAINews();
  const tags = Array.from(new Set(news.flatMap(item => item.tags))).sort();

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] font-sans">
      {/* Hero Section */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18 relative z-10 overflow-hidden border-b border-white/5">
        {/* Cyan Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00E5FF]/6 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/8 text-[#00E5FF] text-[11px] font-bold uppercase tracking-widest mb-5">
            <i className="fas fa-bolt text-[10px]"></i> Dành cho Freelancer & Agency
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white mb-4 tracking-tight leading-tight">
            AI New –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">
              Những cập nhật thực sự quan trọng
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-7 max-w-xl mx-auto">
            Tin tức AI chọn lọc + phân tích thực chiến cho người Việt. Không lan man — chỉ những gì ảnh hưởng đến công việc của bạn.
          </p>

          {/* Accredit Stats */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: 'fa-newspaper', value: '20+', label: 'Tin mỗi tháng' },
              { icon: 'fa-rss', value: '50+', label: 'Nguồn theo dõi' },
              { icon: 'fa-flag', value: '100%', label: 'Tiếng Việt' },
              { icon: 'fa-filter', value: '6', label: 'Chủ đề chuyên sâu' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/4 border border-white/8 text-sm">
                <i className={`fas ${icon} text-[#00E5FF] text-xs`}></i>
                <span className="font-black text-white">{value}</span>
                <span className="text-slate-500 text-xs">{label}</span>
              </div>
            ))}
          </div>

          <HeroEmailForm />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 relative z-10 flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AINewFeed initialNews={news} allTags={tags} />
        </div>
      </section>

      {/* Trusted Sources Section */}
      <section className="py-16 border-t border-white/5 relative z-10 bg-[rgba(5,5,5,0.4)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest">Nguồn Tin Uy Tín</h3>
            <p className="text-slate-500 text-sm">Các kênh thông tin AI hàng đầu thế giới được chúng tôi theo dõi mỗi ngày</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {["OpenAI", "Anthropic", "Hugging Face", "The Batch (Andrew Ng)", "arXiv cs.AI", "Ben's Bites", "The Rundown AI", "Latent Space", "Import AI", "FutureTools", "Higgsfield"].map((source) => (
              <div key={source} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-xs font-bold tracking-wider hover:border-[#00E5FF]/30 hover:text-[#00E5FF] transition-colors cursor-default">
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
