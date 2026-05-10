import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();
  
  const courses = [
    {
      title: 'Coaching AI 1-1',
      description: 'Dành cho ai đã biết AI cơ bản. Xây workflow cá nhân hóa và tạo kết quả cụ thể.',
      url: '/course/ai-coaching',
      tags: ['Premium', '1-1', 'AI Coaching'],
      type: 'course'
    },
    {
      title: 'Làm Chủ AI bằng Vibe Coding',
      description: 'Dành cho ai muốn build sản phẩm AI thực. Giao việc cho AI, build sub-agent, deploy.',
      url: '/course/vibe-coding',
      tags: ['Vibe Coding', 'Build & Deploy', 'AI Orchestrator'],
      type: 'course'
    },
    {
      title: 'Phụ Nữ Làm Chủ AI',
      description: 'Miễn phí 100%. Lộ trình 21 ngày miễn phí để bắt đầu học AI từ con số 0.',
      url: '/course/phunulamchuai',
      tags: ['Miễn phí', 'Cho người mới'],
      type: 'course'
    },
    {
      title: 'Thiết Kế Landing Page AI',
      description: 'Thực chiến từ ý tưởng đến deploy. Thiết kế landing page production-ready trong 6 tuần.',
      url: '/course/landing-page',
      tags: ['Design', 'Coding', 'Landing Page'],
      type: 'course'
    },
    {
      title: 'Claude Masterclass 2026',
      description: 'Làm chủ Claude từ cơ bản đến Pro. Quản lý token, sub-agent đến Director Mindset.',
      url: '/course/claude-masterclass',
      tags: ['Token Mastery', 'Claude AI', 'Prompting'],
      type: 'course'
    },
    {
      title: 'Claude Code Master 2026',
      description: 'The Ultimate Guide về Claude Code — setup, BRIEF master, brain file, quản lý context window.',
      url: '/claude-master',
      tags: ['Claude Code', 'Coding', 'Ultimate Guide'],
      type: 'course'
    },
    {
      title: 'Claude Design Master v4',
      description: 'UI/UX thực chiến với AI. Case study, master prompts đến SOP vận hành 5 dự án.',
      url: '/claude-design',
      tags: ['Design', 'UI/UX', 'Claude'],
      type: 'course'
    }
  ];

  const blogItems = posts.map(post => ({
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    tags: post.tags || [],
    type: 'blog'
  }));

  const pages = [
    {
      title: 'Về Tùng',
      description: 'Hành trình 16 năm làm branding và xây dựng thương hiệu — nay tập trung hoàn toàn vào AI ứng dụng thực tế.',
      url: '/ve-tung',
      tags: ['Giới thiệu', 'Nguyễn Thanh Tùng', 'Story'],
      type: 'page'
    }
  ];

  const allItems = [...courses, ...blogItems, ...pages];

  return NextResponse.json(allItems);
}
