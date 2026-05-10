'use client';

import React, { useEffect } from 'react';

export default function CourseHubPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const reveals = Array.from(document.querySelectorAll('.reveal'));
            
            const triggerInitial = () => {
                reveals.forEach(reveal => {
                    const windowHeight = window.innerHeight;
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight + 100) {
                        reveal.classList.add('visible');
                    }
                });
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { 
                threshold: 0.05,
                rootMargin: '0px 0px 50px 0px' 
            });
            
            reveals.forEach(r => observer.observe(r));
            triggerInitial();
            
            setTimeout(() => {
                reveals.forEach(r => r.classList.add('visible'));
            }, 2000);
            
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const courses = [
        {
            id: 'claude-masterclass',
            title: 'Claude Masterclass 2026',
            description: 'Làm chủ token, xây dựng sub-agent, thiết lập AI Director mindset. Toàn bộ tài liệu hướng dẫn kỹ thuật chi tiết nhất.',
            badge: 'Premium',
            badgeColor: 'text-amber-300',
            badgeBg: 'bg-amber-400/10 border-amber-400/20',
            price: 'Chi Tiết →',
            link: '/course/claude-masterclass',
            cover: '/images/courses/cover_claude_masterclass_1778391216066.png',
            theme: 'orange'
        },
        {
            id: 'vibe-coding',
            title: 'Làm Chủ AI bằng Vibe Coding',
            description: 'Khóa học thực chiến build sản phẩm công nghệ (app, tool) bằng tư duy Director. Không yêu cầu nền tảng lập trình sâu.',
            badge: 'Build & Deploy',
            badgeColor: 'text-indigo-300',
            badgeBg: 'bg-indigo-400/10 border-indigo-400/20',
            price: '5.000.000đ',
            link: '/course/vibe-coding',
            cover: '/images/courses/cover_vibe_coding_1778391231341.png',
            theme: 'indigo'
        },
        {
            id: 'ai-coaching',
            title: 'Coaching AI 1-1',
            description: 'Thiết kế riêng lộ trình và hệ thống AI cho cá nhân và doanh nghiệp của bạn. 4 buổi Zoom trực tiếp kèm Audit chuyên sâu.',
            badge: 'Private',
            badgeColor: 'text-red-300',
            badgeBg: 'bg-red-400/10 border-red-400/20',
            price: '5.000.000đ',
            link: '/course/ai-coaching',
            cover: '/images/courses/cover_ai_coaching_1778391245864.png',
            theme: 'indigo'
        },
        {
            id: 'landing-page',
            title: 'Thiết Kế Landing Page AI',
            description: 'Thiết kế landing page xịn sò, chuẩn production trong 6 tuần bằng AI. Xây từ số 0 đến tự động deploy không cần code.',
            badge: 'Mới 2026',
            badgeColor: 'text-sky-300',
            badgeBg: 'bg-sky-400/10 border-sky-400/20',
            price: 'Xem Chi Tiết →',
            link: '/course/landing-page',
            cover: '/images/courses/cover_landing_page_1778391258019.png',
            theme: 'sky'
        },
        {
            id: 'phunulamchuai',
            title: 'Phụ Nữ Làm Chủ AI',
            description: 'Khóa học dành cho phụ nữ, làm quen với ChatGPT, content creator, tạo thu nhập thụ động đầu tiên bằng AI trong 21 ngày.',
            badge: 'Miễn Phí',
            badgeColor: 'text-pink-300',
            badgeBg: 'bg-pink-400/10 border-pink-400/20',
            price: 'Miễn phí',
            link: '/course/phunulamchuai',
            cover: '/images/courses/cover_phunulamchuai_1778391274661.png',
            theme: 'pink'
        },
        {
            id: 'claude-master',
            title: 'Claude Code Master 2026',
            description: 'Tuyệt chiêu code, setup terminal, context window management và triển khai Agentic framework cho kỹ sư phần mềm.',
            badge: 'Ultimate Guide',
            badgeColor: 'text-violet-300',
            badgeBg: 'bg-violet-400/10 border-violet-400/20',
            price: 'Chi Tiết →',
            link: '/claude-master',
            cover: '/images/courses/cover_claude_master_1778391287349.png',
            theme: 'violet'
        },
        {
            id: 'claude-design',
            title: 'Claude Design Master v4',
            description: 'Làm chủ công nghệ UI/UX Design bằng Claude. Tạo hệ thống design tokens, glassmorphism và abstract art.',
            badge: 'Design + Code',
            badgeColor: 'text-orange-300',
            badgeBg: 'bg-orange-400/10 border-orange-400/20',
            price: 'Chi Tiết →',
            link: '/claude-design',
            cover: '/images/courses/cover_claude_design_1778391302791.png',
            theme: 'orange'
        }
    ];

    return (
        <main className="bg-black min-h-screen">
            {/* HERO SECTION */}
            <section className="pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10 text-center reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 badge-pulse"
                         style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8'}}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Đang mở ghi danh 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Thư Viện <span className="gradient-text">Khóa Học AI</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Chuyển hóa công nghệ trí tuệ nhân tạo thành năng lực cạnh tranh cốt lõi. Từ người mới bắt đầu đến mức độ làm chủ Agentic Framework.
                    </p>
                </div>
            </section>

            {/* COURSE GRID */}
            <section className="py-16 px-4 md:px-6 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <a href={course.link} key={course.id} className="reveal card-hover group block glass rounded-[32px] overflow-hidden flex flex-col border border-white/10" style={{ transitionDelay: `${index * 100}ms` }}>
                            {/* Card Header: Image */}
                            <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                                <img src={course.cover} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${course.badgeBg} ${course.badgeColor}`}>
                                        {course.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                    {course.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                    {course.description}
                                </p>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
                                    <span className="text-white font-black text-lg">
                                        {course.price}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center glass border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 transition-all`}>
                                        <i className="fas fa-arrow-right text-white text-sm"></i>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
