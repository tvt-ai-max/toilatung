"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'tvt_member_token';
const DEMO_TOKEN  = 'DEMO2026';

type CourseCatalogItem = {
  name: string;
  icon: string;
  gradient: string;
  color: string;
  glow: string;
  label: string;
  modules: number;
  href: string;
  desc: string;
};

type MemberPayload = {
  name?: string;
  email?: string;
  courses: string[];
  exp?: number;
};

const COURSE_CATALOG: Record<string, CourseCatalogItem> = {
  'vibe-coding': {
    name: 'Vibe Coding: Làm Chủ AI Để Code',
    icon: 'fas fa-code',
    gradient: 'linear-gradient(135deg, rgba(123,97,255,0.15), rgba(41,151,255,0.15))',
    color: '#7b61ff',
    glow: '0 0 20px rgba(123,97,255,0.4)',
    label: 'MASTERCLASS',
    modules: 6,
    href: '/course/vibe-coding',
    desc: '3 buổi Zoom · Build tool thực chiến',
  },
  'ai-coaching': {
    name: 'AI Coaching 1-1 với Tùng',
    icon: 'fas fa-user-astronaut',
    gradient: 'linear-gradient(135deg, rgba(255,55,95,0.15), rgba(255,214,10,0.15))',
    color: '#ff375f',
    glow: '0 0 20px rgba(255,55,95,0.4)',
    label: 'COACHING',
    modules: 4,
    href: '/course/ai-coaching',
    desc: '4 buổi Zoom · Lộ trình cá nhân hóa',
  },
  'landing-page': {
    name: 'Claude Design Master v4',
    icon: 'fas fa-pen-nib',
    gradient: 'linear-gradient(135deg, rgba(217,119,87,0.15), rgba(249,115,22,0.15))',
    color: '#D97757',
    glow: '0 0 20px rgba(217,119,87,0.4)',
    label: 'DESIGN + CODE',
    modules: 6,
    href: '/claude-design',
    desc: 'UI/UX thực chiến với Claude',
  },
};

function getProgress(courseId: string) {
  if (typeof window === 'undefined') return { completed: 0 };
  try {
    const raw = localStorage.getItem('tvt_progress_' + courseId);
    return raw ? JSON.parse(raw) : { completed: 0 };
  } catch {
    return { completed: 0 };
  }
}

function decodeToken(raw: string): MemberPayload | null {
  if (!raw) return null;
  if (raw.toUpperCase() === DEMO_TOKEN) {
    return {
      name: 'Chiến thần AI',
      email: 'demo@toilatung.com',
      courses: ['landing-page', 'vibe-coding', 'ai-coaching'],
      exp: Date.now() / 1000 + 86400,
    };
  }
  try {
    const parsed = JSON.parse(atob(raw.trim())) as unknown;
    if (!parsed || typeof parsed !== 'object') return null;
    const candidate = parsed as Partial<MemberPayload>;
    if (!Array.isArray(candidate.courses)) return null;
    return {
      name: candidate.name,
      email: candidate.email,
      courses: candidate.courses.filter((course): course is string => typeof course === 'string'),
      exp: candidate.exp,
    };
  } catch {
    return null;
  }
}

function isValid(payload: MemberPayload | null) {
  if (!payload || !payload.courses) return false;
  if (payload.exp && payload.exp < Date.now() / 1000) return false;
  return true;
}

export default function DashboardPage() {
  const [payload, setPayload] = useState<MemberPayload | null>(null);
  const [tokenInput, setTokenInput] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('token');
    
    if (urlToken) {
      const decoded = decodeToken(urlToken);
      if (isValid(decoded)) {
        localStorage.setItem(STORAGE_KEY, urlToken);
        window.history.replaceState({}, '', window.location.pathname);
        setPayload(decoded);
        return;
      }
    }
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const decoded = decodeToken(stored);
      if (isValid(decoded)) {
        setPayload(decoded);
        return;
      }
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleVerify = () => {
    const raw = tokenInput.trim();
    const decoded = decodeToken(raw);
    if (!isValid(decoded)) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    localStorage.setItem(STORAGE_KEY, raw);
    setPayload(decoded);
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPayload(null);
    setTokenInput('');
  };

  // Prevent hydration mismatch
  if (!mounted) return <div className="min-h-screen bg-black" />;

  if (!payload) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="w-full max-w-[420px] p-12 text-center relative z-10 glass rounded-3xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 text-3xl shadow-[0_0_30px_rgba(123,97,255,0.2)] border-2 border-white/10">
            <i className="fa-solid fa-lock text-white"></i>
          </div>
          
          <h1 className="text-2xl font-black text-white mb-2">Member Area</h1>
          <p className="text-slate-400 text-sm mb-8">Nhập Private Token để truy cập khóa học và tài nguyên dành riêng cho học viên.</p>
          
          <div className="space-y-4">
            <input
              type="text"
              className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white text-center font-mono text-sm outline-none focus:border-indigo-500 focus:shadow-[0_0_15px_rgba(123,97,255,0.2)] transition-all"
              placeholder="Ví dụ: DEMO2026"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
            />
            
            <button
              onClick={handleVerify}
              className="w-full p-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-sm uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(123,97,255,0.2)] hover:shadow-[0_6px_20px_rgba(123,97,255,0.3)] hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-key mr-2"></i> Truy Cập
            </button>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm py-3 rounded-xl animate-pulse">
                Token không hợp lệ hoặc đã hết hạn!
              </div>
            )}
          </div>
          
          <div className="mt-8 text-xs text-slate-500">
            Cần hỗ trợ? <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 ml-1">Nhắn Zalo</a>
          </div>
        </div>
      </div>
    );
  }

  const firstName = payload.name ? payload.name.split(' ').pop() : 'bạn';

  return (
    <div className="min-h-screen bg-black">
      {/* Top Nav Replacer (just the logout part since we have global header) */}
      <div className="border-b border-white/10 bg-black/50 sticky top-[60px] z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-[10px] font-black text-indigo-300 uppercase tracking-widest">
            Member Area
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            Đăng xuất <i className="fa-solid fa-arrow-right-from-bracket ml-1"></i>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Chào mừng trở lại, <span className="gradient-text">{firstName}</span>! 👋
          </h1>
          <p className="text-slate-400">Email: {payload.email || ''} · {payload.courses.length} lộ trình đã kích hoạt</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Lộ trình học của bạn</div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {payload.courses.map((id: string) => {
            const c = COURSE_CATALOG[id];
            if (!c) return null;
            const prog = getProgress(id);
            const pct = Math.round((prog.completed / c.modules) * 100) || 0;

            return (
              <Link href={c.href} key={id} className="glass card-hover rounded-3xl overflow-hidden flex flex-col group">
                <div 
                  className="h-40 flex items-center justify-center text-5xl border-b border-white/10 transition-transform group-hover:scale-105"
                  style={{ background: c.gradient, color: c.color, textShadow: c.glow }}
                >
                  <i className={c.icon}></i>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    <span 
                      className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full mb-3"
                      style={{ color: c.color, backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid ${c.color}55` }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 leading-snug">{c.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-auto">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-list-check"></i> {c.modules} modules</span>
                    <span className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> {c.desc}</span>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden shadow-inner mb-2">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%`, backgroundColor: c.color, boxShadow: `0 0 10px ${c.color}` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-500">Tiến độ: {prog.completed}/{c.modules}</span>
                      <span style={{ color: c.color }}>{pct}%</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Hỗ trợ & Cộng đồng</div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="https://zalo.me/0972613455" target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xl flex-shrink-0">
              <i className="fa-solid fa-comment-dots"></i>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Chat với Tùng</div>
              <div className="text-slate-400 text-xs">Support 1-1 trực tiếp</div>
            </div>
          </a>
          
          <a href="mailto:tung@tvtagency.com" className="glass card-hover rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xl flex-shrink-0">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Email hỗ trợ</div>
              <div className="text-slate-400 text-xs">tung@tvtagency.com</div>
            </div>
          </a>

          <div className="glass rounded-2xl p-5 flex items-center gap-4 opacity-50 cursor-not-allowed">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xl flex-shrink-0">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Zalo Group</div>
              <div className="text-slate-400 text-xs">Đang bảo trì</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
