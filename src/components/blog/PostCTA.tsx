/**
 * PostCTA — Server Component
 * Tự động chọn CTA block phù hợp dựa vào SEO cluster của bài blog.
 * Inject một lần vào blog post template — affect tất cả bài không cần edit MDX.
 */

import Link from 'next/link';
import { inferCluster, type Cluster } from '@/lib/cluster';

interface PostCTAProps {
  tags: string[];
  /** Override cluster nếu muốn force một CTA cụ thể */
  cluster?: Cluster;
}

interface CTAConfig {
  label: string;
  headline: string;
  sub: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  icon: string;
  badgeText: string;
  badgeColor: string;
}

function getCTAConfig(cluster: Cluster): CTAConfig {
  switch (cluster) {
    case 'B':
      return {
        label: 'Khóa học Vibe Coding',
        headline: 'Sẵn sàng build sản phẩm thật bằng AI?',
        sub: 'Khóa học Vibe Coding — 3 buổi Zoom thực chiến. Từ Zero đến Production với Claude Code.',
        primaryText: 'Xem khóa học Vibe Coding',
        primaryHref: '/course/vibe-coding',
        secondaryText: 'Booking Coaching 1-1',
        secondaryHref: '/booking',
        accentColor: 'from-indigo-600/20 to-violet-600/10',
        borderColor: 'border-indigo-500/30',
        glowColor: 'shadow-indigo-500/20',
        icon: 'fa-terminal',
        badgeText: 'Cluster B — Vibe Coding',
        badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      };
    case 'A':
      return {
        label: 'AI Coaching 1-1',
        headline: 'Muốn triển khai AI Agent cho doanh nghiệp của bạn?',
        sub: 'Coaching 1-1 với Tùng — xây dựng hệ thống AI Agent thực chiến, không lý thuyết suông.',
        primaryText: 'Book buổi Coaching 1-1',
        primaryHref: '/booking',
        secondaryText: 'Tìm hiểu thêm',
        secondaryHref: '/course/ai-coaching',
        accentColor: 'from-emerald-600/20 to-teal-600/10',
        borderColor: 'border-emerald-500/30',
        glowColor: 'shadow-emerald-500/20',
        icon: 'fa-robot',
        badgeText: 'Cluster A — AI Agent',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      };
    case 'F':
      return {
        label: 'Claude Design Master',
        headline: 'Thiết kế UI premium mà không cần Figma?',
        sub: 'Khóa Claude Design — học cách dùng AI để tạo design system chuẩn production trong vài giờ.',
        primaryText: 'Xem Claude Design',
        primaryHref: '/claude-design',
        secondaryText: 'Claude Masterclass',
        secondaryHref: '/claude-master',
        accentColor: 'from-violet-600/20 to-pink-600/10',
        borderColor: 'border-violet-500/30',
        glowColor: 'shadow-violet-500/20',
        icon: 'fa-palette',
        badgeText: 'Cluster F — Design & UI',
        badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      };
    case 'D':
      return {
        label: 'Khóa Landing Page Course',
        headline: 'Tăng tỷ lệ chuyển đổi landing page bằng AI?',
        sub: 'Học cách dùng AI để tối ưu CRO, viết copy chuyển đổi cao và build landing page thực chiến.',
        primaryText: 'Xem Landing Page Course',
        primaryHref: '/course/landing-page',
        secondaryText: 'Book Coaching',
        secondaryHref: '/booking',
        accentColor: 'from-amber-600/20 to-orange-600/10',
        borderColor: 'border-amber-500/30',
        glowColor: 'shadow-amber-500/20',
        icon: 'fa-chart-line',
        badgeText: 'Cluster D — AI Marketing',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      };
    case 'G':
      return {
        label: 'Coaching 1-1',
        headline: 'Sẵn sàng xây One-Person Agency với AI?',
        sub: 'Book buổi coaching 1-1 với Tùng — người đã xây TVT Agency từ 1 người, dùng AI làm lực đòn bẩy.',
        primaryText: 'Book Coaching 1-1 ngay',
        primaryHref: '/booking',
        secondaryText: 'Khóa Vibe Coding',
        secondaryHref: '/course/vibe-coding',
        accentColor: 'from-rose-600/20 to-red-600/10',
        borderColor: 'border-rose-500/30',
        glowColor: 'shadow-rose-500/20',
        icon: 'fa-fire',
        badgeText: 'Cluster G — Monetization',
        badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      };
    case 'C':
      return {
        label: 'AI Tools & Automation',
        headline: 'Muốn tự động hóa workflow bằng AI?',
        sub: 'Coaching 1-1 về AI Workflow — từ Make.com đến n8n, xây hệ thống tự động chạy 24/7.',
        primaryText: 'Book Coaching 1-1',
        primaryHref: '/booking',
        secondaryText: 'Xem Prompt Library',
        secondaryHref: '/prompt',
        accentColor: 'from-sky-600/20 to-blue-600/10',
        borderColor: 'border-sky-500/30',
        glowColor: 'shadow-sky-500/20',
        icon: 'fa-bolt',
        badgeText: 'Cluster C — AI Tools',
        badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      };
    case 'E':
      return {
        label: 'Phụ nữ làm chủ AI',
        headline: 'Bắt đầu học AI từ zero — không cần background kỹ thuật',
        sub: 'Chương trình đặc biệt dành cho phụ nữ muốn ứng dụng AI vào công việc và cuộc sống.',
        primaryText: 'Xem chương trình',
        primaryHref: '/course/phunulamchuai',
        secondaryText: 'Đọc thêm bài viết',
        secondaryHref: '/blog',
        accentColor: 'from-pink-600/20 to-fuchsia-600/10',
        borderColor: 'border-pink-500/30',
        glowColor: 'shadow-pink-500/20',
        icon: 'fa-star',
        badgeText: 'Cluster E — Người mới',
        badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      };
    default:
      // Fallback CTA — generic
      return {
        label: 'Coaching AI 1-1',
        headline: 'Muốn ứng dụng AI vào công việc thực tế?',
        sub: 'Book buổi coaching 1-1 với Tùng — 16 năm kinh nghiệm, tư vấn cụ thể cho bài toán của bạn.',
        primaryText: 'Book Coaching 1-1',
        primaryHref: '/booking',
        secondaryText: 'Xem tất cả khóa học',
        secondaryHref: '/course',
        accentColor: 'from-slate-600/20 to-slate-700/10',
        borderColor: 'border-white/10',
        glowColor: 'shadow-white/5',
        icon: 'fa-user-tie',
        badgeText: 'Hệ thống hóa kiến thức AI',
        badgeColor: 'bg-white/5 text-slate-400 border-white/10',
      };
  }
}

export default function PostCTA({ tags, cluster: forcedCluster }: PostCTAProps) {
  const cluster = forcedCluster ?? inferCluster(tags);
  const cta = getCTAConfig(cluster);

  return (
    <div
      className={`
        mt-14 mb-4 rounded-3xl border ${cta.borderColor}
        bg-gradient-to-br ${cta.accentColor}
        shadow-xl ${cta.glowColor}
        p-8 md:p-10 relative overflow-hidden
      `}
    >
      {/* Background glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 blur-3xl rounded-full pointer-events-none" />

      {/* Cluster badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest mb-5 ${cta.badgeColor}`}>
        <i className={`fas ${cta.icon} text-[9px]`} />
        {cta.badgeText}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
        {/* Icon block */}
        <div className={`w-16 h-16 flex-shrink-0 rounded-2xl border ${cta.borderColor} bg-black/30 flex items-center justify-center`}>
          <i className={`fas ${cta.icon} text-2xl text-white/70`} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight">
            {cta.headline}
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {cta.sub}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto">
          <Link
            href={cta.primaryHref}
            className={`
              px-6 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest text-center
              bg-white text-black hover:bg-white/90 transition-all
              shadow-lg whitespace-nowrap
            `}
          >
            <i className={`fas ${cta.icon} mr-2`} />
            {cta.primaryText}
          </Link>
          {cta.secondaryText && cta.secondaryHref && (
            <Link
              href={cta.secondaryHref}
              className={`
                px-6 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest text-center
                border ${cta.borderColor} text-slate-300 hover:text-white hover:border-white/30
                transition-all whitespace-nowrap
              `}
            >
              {cta.secondaryText} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
