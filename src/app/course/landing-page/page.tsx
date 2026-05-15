"use client";

import { useState } from "react";
import ToolsAISection from "@/components/shared/ToolsAISection";
import { useLandingInteractions } from "@/lib/useLandingInteractions";
import './landing-page.css';

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const { handleLeadSubmit, isSubmitting, submitError } =
    useLandingInteractions({
      source: "course-landing-page",
      successId: "successMsgLP",
    });



  return (
    <main className="bg-black text-slate-200 overflow-hidden lp-theme">
      




{/*  ═══════════════════════════════════════════
     HERO
═══════════════════════════════════════════  */}
<section className="hero-bg" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 80px', textAlign: 'center', position: 'relative'}}>

  {/*  Eyebrow  */}
  <div className="reveal visible tag" style={{background: 'rgba(217,119,87,.12)', color: '#fcb89f', border: '1px solid rgba(217,119,87,.25)', marginBottom: '28px'}}>
    Khóa học · 2026 Edition
  </div>

  {/*  Headline  */}
  <h1 className="reveal visible delay-1" style={{fontSize: 'clamp(44px,8vw,96px)', fontWeight: '800', letterSpacing: '-.04em', lineHeight: '1.04', maxWidth: '880px', marginBottom: '24px'}}>
    Làm chủ AI.<br />
    <span className="grad-brand">Không giới hạn.</span>
  </h1>

  {/*  Sub  */}
  <p className="reveal visible delay-2" style={{fontSize: 'clamp(17px,2.5vw,22px)', color: 'var(--text-2)', maxWidth: '560px', lineHeight: '1.55', marginBottom: '40px', fontWeight: '300'}}>
    Thiết kế landing page thực chiến bằng AI — từ ý tưởng đến deploy production trong 6 tuần. Không cần biết code trước.
  </p>

  {/*  CTAs  */}
  <div className="reveal visible delay-3" style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px'}}>
    <a href="#pricing" className="btn-primary" style={{fontSize: '17px', padding: '16px 32px'}}>
      Bắt đầu học
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </a>
    <a href="#curriculum" className="btn-ghost" style={{fontSize: '17px', padding: '16px 0'}}>
      Xem chương trình <span className="arrow">›</span>
    </a>
  </div>

  {/*  Laptop Mockup  */}
  <div className="reveal-scale visible delay-4 laptop-wrap" style={{display: 'flex', justifyContent: 'center'}}>
    <div className="laptop">
      <div className="laptop-screen">
        <div className="laptop-display" style={{background: 'linear-gradient(135deg,#050508 0%,#0a0a14 100%)'}}>
          {/*  Screen Content  */}
          <div style={{width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', overflow: 'hidden'}}>

            {/*  Glow blobs inside screen  */}
            <div style={{position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(217,119,87,.2)', filter: 'blur(60px)', pointerEvents: 'none'}}></div>
            <div style={{position: 'absolute', bottom: '-30px', left: '0', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(41,151,255,.15)', filter: 'blur(50px)', pointerEvents: 'none'}}></div>

            {/*  Fake nav bar  */}
            <div style={{display: 'flex', gap: '6px', alignItems: 'center', background: 'rgba(255,255,255,.04)', borderRadius: '6px', padding: '8px 12px', border: '1px solid rgba(255,255,255,.06)'}}>
              <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f57'}}></div>
              <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#febc2e'}}></div>
              <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#28c840'}}></div>
              <div style={{flex: '1', background: 'rgba(255,255,255,.06)', borderRadius: '4px', height: '14px', margin: '0 12px'}}></div>
            </div>

            {/*  Fake code / content area  */}
            <div style={{flex: '1', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px'}}>
              {/*  Sidebar  */}
              <div style={{background: 'rgba(255,255,255,.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,.05)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div style={{height: '8px', width: '70%', background: 'rgba(255,55,95,.4)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '90%', background: 'rgba(255,255,255,.08)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '60%', background: 'rgba(255,255,255,.06)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '80%', background: 'rgba(217,119,87,.3)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '50%', background: 'rgba(255,255,255,.06)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '75%', background: 'rgba(41,151,255,.3)', borderRadius: '4px'}}></div>
                <div style={{height: '6px', width: '65%', background: 'rgba(255,255,255,.06)', borderRadius: '4px'}}></div>
              </div>
              {/*  Main area  */}
              <div style={{background: 'rgba(255,255,255,.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,.05)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(217,119,87,.6)'}}></div>
                  <div style={{height: '7px', flex: '1', background: 'rgba(255,255,255,.1)', borderRadius: '4px'}}></div>
                </div>
                <div style={{background: 'linear-gradient(90deg,rgba(217,119,87,.15),rgba(41,151,255,.1))', borderRadius: '6px', padding: '10px', border: '1px solid rgba(217,119,87,.15)'}}>
                  <div style={{height: '6px', width: '90%', background: 'rgba(255,255,255,.12)', borderRadius: '4px', marginBottom: '6px'}}></div>
                  <div style={{height: '6px', width: '70%', background: 'rgba(255,255,255,.08)', borderRadius: '4px', marginBottom: '6px'}}></div>
                  <div style={{height: '6px', width: '80%', background: 'rgba(255,255,255,.1)', borderRadius: '4px'}}></div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px'}}>
                  <div style={{background: 'rgba(255,55,95,.1)', border: '1px solid rgba(255,55,95,.2)', borderRadius: '5px', padding: '8px'}}>
                    <div style={{height: '5px', width: '80%', background: 'rgba(255,55,95,.4)', borderRadius: '4px', marginBottom: '4px'}}></div>
                    <div style={{height: '5px', width: '60%', background: 'rgba(255,255,255,.07)', borderRadius: '4px'}}></div>
                  </div>
                  <div style={{background: 'rgba(48,209,88,.08)', border: '1px solid rgba(48,209,88,.15)', borderRadius: '5px', padding: '8px'}}>
                    <div style={{height: '5px', width: '70%', background: 'rgba(48,209,88,.3)', borderRadius: '4px', marginBottom: '4px'}}></div>
                    <div style={{height: '5px', width: '50%', background: 'rgba(255,255,255,.07)', borderRadius: '4px'}}></div>
                  </div>
                </div>
                <div style={{marginTop: 'auto', background: 'rgba(41,151,255,.15)', borderRadius: '5px', padding: '8px', textAlign: 'center', border: '1px solid rgba(41,151,255,.25)'}}>
                  <div style={{height: '6px', width: '50%', background: 'rgba(41,151,255,.5)', borderRadius: '4px', margin: '0 auto'}}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="laptop-base"></div>
      <div className="laptop-foot"></div>
    </div>
  </div>

  {/*  Scroll Indicator  */}
  <div className="scroll-ind reveal delay-5" style={{position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'}}>
    <span style={{fontSize: '11px', color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase'}}>Cuộn xuống</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</section>


{/*  ═══════════════════════════════════════════
     MARQUEE
═══════════════════════════════════════════  */}
<div style={{borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', overflow: 'hidden', background: 'var(--surface)'}}>
  <div className="marquee-track" style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', letterSpacing: '.04em', textTransform: 'uppercase'}}>
    <span>Vibe Coding &nbsp;·&nbsp;</span><span>Antigravity Workflow &nbsp;·&nbsp;</span>
    <span>Figma to Code &nbsp;·&nbsp;</span><span>MCP Integration &nbsp;·&nbsp;</span>
    <span>AI Copywriting &nbsp;·&nbsp;</span><span>Deploy Production &nbsp;·&nbsp;</span>
    <span>Lead Automation &nbsp;·&nbsp;</span><span>CRO Tactics &nbsp;·&nbsp;</span>
    <span>Design System &nbsp;·&nbsp;</span><span>Director Mindset &nbsp;·&nbsp;</span>
    {/*  duplicate for loop  */}
    <span>Vibe Coding &nbsp;·&nbsp;</span><span>Antigravity Workflow &nbsp;·&nbsp;</span>
    <span>Figma to Code &nbsp;·&nbsp;</span><span>MCP Integration &nbsp;·&nbsp;</span>
    <span>AI Copywriting &nbsp;·&nbsp;</span><span>Deploy Production &nbsp;·&nbsp;</span>
    <span>Lead Automation &nbsp;·&nbsp;</span><span>CRO Tactics &nbsp;·&nbsp;</span>
    <span>Design System &nbsp;·&nbsp;</span><span>Director Mindset &nbsp;·&nbsp;</span>
  </div>
</div>


{/*  ═══════════════════════════════════════════
     STATEMENT SECTION
═══════════════════════════════════════════  */}
<section style={{padding: '120px 24px', maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
  <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '24px'}}>Triết lý</p>
  <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(32px,5vw,58px)', fontWeight: '700', letterSpacing: '-.035em', lineHeight: '1.12', color: 'var(--text-1)'}}>
    AI làm nặng.<br />
    <span style={{color: 'var(--text-3)'}}>Người làm hướng.</span>
  </h2>
  <p className="reveal visible delay-2" style={{fontSize: '19px', color: 'var(--text-2)', lineHeight: '1.65', marginTop: '28px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', fontWeight: '300'}}>
    Vibe Coding không phải về việc gõ ít code hơn — mà về việc tư duy đúng trước khi chạm tool. Bạn là đạo diễn. AI là đội ngũ thực thi.
  </p>
</section>


{/*  ═══════════════════════════════════════════
     STATS
═══════════════════════════════════════════  */}
<section style={{padding: '0 24px 120px', maxWidth: '1100px', margin: '0 auto'}}>
  <hr className="section-divider" style={{marginBottom: '80px'}} />
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '0', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden'}}>

    <div className="reveal visible" style={{padding: '48px 36px', borderRight: '1px solid var(--border)', textAlign: 'center'}}>
      <div className="stat-num grad-brand counter" data-target="18">18</div>
      <p style={{fontSize: '14px', color: 'var(--text-2)', marginTop: '8px', letterSpacing: '-.01em'}}>Bài học</p>
    </div>

    <div className="reveal visible delay-1" style={{padding: '48px 36px', borderRight: '1px solid var(--border)', textAlign: 'center'}}>
      <div className="stat-num grad-cool counter" data-target="6">6</div>
      <p style={{fontSize: '14px', color: 'var(--text-2)', marginTop: '8px', letterSpacing: '-.01em'}}>Phần học</p>
    </div>

    <div className="reveal visible delay-2" style={{padding: '48px 36px', borderRight: '1px solid var(--border)', textAlign: 'center'}}>
      <div className="stat-num grad-green counter" data-target="45">45</div>
      <p style={{fontSize: '14px', color: 'var(--text-2)', marginTop: '8px', letterSpacing: '-.01em'}}>Master Prompts</p>
    </div>

    <div className="reveal visible delay-3" style={{padding: '48px 36px', textAlign: 'center'}}>
      <div className="stat-num grad-warm">0</div>
      <p style={{fontSize: '14px', color: 'var(--text-2)', marginTop: '8px', letterSpacing: '-.01em'}}>Code trước cần biết</p>
    </div>

  </div>
</section>


{/*  ═══════════════════════════════════════════
     BENTO FEATURES
═══════════════════════════════════════════  */}
<section id="features" style={{padding: '0 24px 120px', maxWidth: '1100px', margin: '0 auto'}}>
  <div style={{textAlign: 'center', marginBottom: '64px'}}>
    <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Bạn sẽ làm được</p>
    <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(32px,5vw,52px)', fontWeight: '700', letterSpacing: '-.035em', lineHeight: '1.12'}}>
      Mọi thứ một landing page <span className="grad-brand">thực chiến</span> cần có.
    </h2>
  </div>

  <div className="bento-grid">

    {/*  Card 1: Large — Vibe Brief  */}
    <div className="bento-card reveal delay-1" style={{gridColumn: 'span 7'}}>
      <div className="tag" style={{background: 'rgba(255,55,95,.1)', color: '#ff375f', border: '1px solid rgba(255,55,95,.2)', marginBottom: '20px'}}>Strategy</div>
      <h3 style={{fontSize: '28px', fontWeight: '700', letterSpacing: '-.03em', marginBottom: '12px'}}>Vibe Brief & Message Architecture</h3>
      <p style={{fontSize: '16px', color: 'var(--text-2)', lineHeight: '1.6', maxWidth: '380px'}}>Xây khung narrative trước khi viết một chữ. Xác định WHO, VIBE, WIN — và biến chúng thành copy thuyết phục.</p>
      {/*  Visual accent  */}
      <div style={{marginTop: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
        <span style={{fontSize: '12px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,55,95,.08)', color: 'rgba(255,55,95,.8)', border: '1px solid rgba(255,55,95,.15)'}}>PAS Framework</span>
        <span style={{fontSize: '12px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', color: 'var(--text-2)', border: '1px solid var(--border)'}}>BAB Framework</span>
        <span style={{fontSize: '12px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', color: 'var(--text-2)', border: '1px solid var(--border)'}}>PASTOR</span>
      </div>
    </div>

    {/*  Card 2: Small — VoC  */}
    <div className="bento-card reveal delay-2" style={{gridColumn: 'span 5', background: 'linear-gradient(135deg,rgba(217,119,87,.08),var(--card))', borderColor: 'rgba(217,119,87,.2)'}}>
      <div className="tag" style={{background: 'rgba(217,119,87,.12)', color: '#fcb89f', border: '1px solid rgba(217,119,87,.2)', marginBottom: '20px'}}>Copy</div>
      <h3 style={{fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '10px'}}>Voice of Customer</h3>
      <p style={{fontSize: '15px', color: 'var(--text-2)', lineHeight: '1.6'}}>Biến ngôn ngữ thật của khách hàng thành copy thuyết phục nhất. Không viết từ đầu — tổ chức lại những gì họ đã nói.</p>
      <div style={{marginTop: '24px', fontSize: '36px', fontWeight: '800', letterSpacing: '-.04em', color: 'rgba(217,119,87,.6)'}}>3×</div>
      <div style={{fontSize: '12px', color: 'var(--text-3)'}}>tỷ lệ "họ hiểu tôi" tăng lên</div>
    </div>

    {/*  Card 3: Design System  */}
    <div className="bento-card reveal delay-2" style={{gridColumn: 'span 4', background: 'linear-gradient(160deg,rgba(41,151,255,.07),var(--card))', borderColor: 'rgba(41,151,255,.2)'}}>
      <div className="tag" style={{background: 'rgba(41,151,255,.1)', color: '#2997ff', border: '1px solid rgba(41,151,255,.2)', marginBottom: '20px'}}>Design</div>
      <h3 style={{fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '10px'}}>Design System Nhanh</h3>
      <p style={{fontSize: '15px', color: 'var(--text-2)', lineHeight: '1.6'}}>Color tokens, type scale, spacing — thiết lập 1 lần, áp dụng mọi nơi. Không còn quyết định màu từng section.</p>
      {/*  Color dots  */}
      <div style={{marginTop: '24px', display: 'flex', gap: '8px'}}>
        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#ff375f', boxShadow: '0 0 12px rgba(255,55,95,.4)'}}></div>
        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#D97757', boxShadow: '0 0 12px rgba(217,119,87,.4)'}}></div>
        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#2997ff', boxShadow: '0 0 12px rgba(41,151,255,.4)'}}></div>
        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#30d158', boxShadow: '0 0 12px rgba(48,209,88,.3)'}}></div>
        <div style={{width: '24px', height: '24px', borderRadius: '50%', background: '#ffd60a', boxShadow: '0 0 12px rgba(255,214,10,.3)'}}></div>
      </div>
    </div>

    {/*  Card 4: MCP  */}
    <div className="bento-card reveal delay-3" style={{gridColumn: 'span 4', background: 'linear-gradient(160deg,rgba(48,209,88,.06),var(--card))', borderColor: 'rgba(48,209,88,.15)'}}>
      <div className="tag" style={{background: 'rgba(48,209,88,.08)', color: '#30d158', border: '1px solid rgba(48,209,88,.2)', marginBottom: '20px'}}>Technical</div>
      <h3 style={{fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '10px'}}>MCP & Zero-Gravity Coding</h3>
      <p style={{fontSize: '15px', color: 'var(--text-2)', lineHeight: '1.6'}}>AI đọc file, sửa code, push GitHub — không cần copy-paste thủ công. Cursor + MCP = deploy pipeline tự động.</p>
      <div style={{marginTop: '20px', fontFamily: 'monospace', fontSize: '12px', color: 'rgba(48,209,88,.7)', background: 'rgba(48,209,88,.05)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(48,209,88,.1)'}}>
        git push → Netlify → Live ✓
      </div>
    </div>

    {/*  Card 5: Conversion  */}
    <div className="bento-card reveal delay-3" style={{gridColumn: 'span 4', background: 'linear-gradient(160deg,rgba(255,149,0,.07),var(--card))', borderColor: 'rgba(255,149,0,.15)'}}>
      <div className="tag" style={{background: 'rgba(255,149,0,.1)', color: '#ff9500', border: '1px solid rgba(255,149,0,.2)', marginBottom: '20px'}}>Conversion</div>
      <h3 style={{fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '10px'}}>CRO & Lead Automation</h3>
      <p style={{fontSize: '15px', color: 'var(--text-2)', lineHeight: '1.6'}}>Exit popup, email sequence 3 bước, Brevo automation — toàn bộ pipeline từ click đến lead đến conversion tự chạy.</p>
      <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px'}}>
        <div style={{fontSize: '28px', fontWeight: '800', color: 'rgba(255,149,0,.8)', letterSpacing: '-.03em'}}>+32%</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)', lineHeight: '1.4'}}>conversion rate<br />trung bình sau optimize</div>
      </div>
    </div>

    {/*  Card 6: Wide — Scrollytelling  */}
    <div className="bento-card reveal delay-4" style={{gridColumn: 'span 12', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
      <div>
        <div className="tag" style={{background: 'rgba(217,119,87,.12)', color: '#fcb89f', border: '1px solid rgba(217,119,87,.2)', marginBottom: '20px'}}>Launch & Scale</div>
        <h3 style={{fontSize: '28px', fontWeight: '700', letterSpacing: '-.03em', marginBottom: '14px'}}>Từ file local đến live trên internet.</h3>
        <p style={{fontSize: '16px', color: 'var(--text-2)', lineHeight: '1.65'}}>Deploy Netlify, custom domain, HTTPS, PageSpeed ≥ 80, 30-Day Traffic Plan — tất cả trong Phần 6. Khóa học kết thúc với trang web thật đang chạy, không phải "sẽ làm sau".</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'rgba(255,255,255,.03)', borderRadius: '12px', border: '1px solid var(--border)'}}>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#30d158', boxShadow: '0 0 8px rgba(48,209,88,.5)', flexShrink: '0'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-1)'}}>Netlify auto-deploy pipeline</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'rgba(255,255,255,.03)', borderRadius: '12px', border: '1px solid var(--border)'}}>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#2997ff', boxShadow: '0 0 8px rgba(41,151,255,.5)', flexShrink: '0'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-1)'}}>Custom domain + HTTPS tự động</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'rgba(255,255,255,.03)', borderRadius: '12px', border: '1px solid var(--border)'}}>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#D97757', boxShadow: '0 0 8px rgba(217,119,87,.5)', flexShrink: '0'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-1)'}}>30-Day Traffic Plan + UTM tracking</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'rgba(255,255,255,.03)', borderRadius: '12px', border: '1px solid var(--border)'}}>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ff9500', boxShadow: '0 0 8px rgba(255,149,0,.5)', flexShrink: '0'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-1)'}}>Personal Playbook — tái dùng mãi mãi</span>
        </div>
      </div>
    </div>

  </div>
</section>


{/*  ═══════════════════════════════════════════
     CURRICULUM
═══════════════════════════════════════════  */}
<section id="curriculum" style={{padding: '0 24px 120px', maxWidth: '1100px', margin: '0 auto'}}>
  <hr className="section-divider" style={{marginBottom: '80px'}} />
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '64px'}}>
    <div>
      <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Chương trình</p>
      <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(32px,4vw,48px)', fontWeight: '700', letterSpacing: '-.035em', lineHeight: '1.12'}}>18 bài học.<br /><span className="grad-brand">6 phần.</span></h2>
    </div>
    <div>
      <p className="reveal visible delay-2" style={{fontSize: '17px', color: 'var(--text-2)', lineHeight: '1.65', fontWeight: '300', marginTop: '36px'}}>Mỗi phần có vai trò riêng trong hành trình xây dựng landing page. Kết thúc mỗi phần, bạn có output cụ thể — không phải "hiểu thêm."</p>
    </div>
  </div>

  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '12px'}}>

    <div className="part-card reveal delay-1">
      <div className="part-num" style={{color: '#ff375f'}}>Phần 01</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Foundation</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>Tư duy Vibe Coding & Hệ sinh thái</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,55,95,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 1 — Vibe Brief & Intent-First Design</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,55,95,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 2 — Bản đồ AI Ecosystem 2026</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,55,95,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 3 — Hybrid Workflow: Draft trong 45 phút</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: Vibe Brief + Landing page copy v1</div>
    </div>

    <div className="part-card reveal delay-2">
      <div className="part-num" style={{color: '#D97757'}}>Phần 02</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Architect</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>Chiến thuật Nội dung</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(217,119,87,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 4 — Message Architecture & Narrative Map</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(217,119,87,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 5 — The Hook System & Headline Rubric</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(217,119,87,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 6 — Voice of Customer Mining</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: Headline đã test + VoC Bank + copy v3</div>
    </div>

    <div className="part-card reveal delay-3">
      <div className="part-num" style={{color: '#2997ff'}}>Phần 03</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Stylist</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>Thẩm mỹ Pixel-Perfect</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(41,151,255,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 7 — Design System: Color, Type, Spacing</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(41,151,255,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 8 — Layout Psychology & Wireframe</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(41,151,255,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 9 — Pixel-Perfect với AI Art Director</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: Design System Figma + 3 section hi-fi</div>
    </div>

    <div className="part-card reveal delay-1">
      <div className="part-num" style={{color: '#30d158'}}>Phần 04</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Engine</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>MCP & Zero-Gravity Coding</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(48,209,88,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 10 — MCP Setup: Cursor + GitHub</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(48,209,88,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 11 — Zero-Gravity: Figma → HTML/CSS</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(48,209,88,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 12 — Production-Ready Architecture</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: 6 section HTML/CSS live trên GitHub</div>
    </div>

    <div className="part-card reveal delay-2">
      <div className="part-num" style={{color: '#ff9500'}}>Phần 05</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Conversion</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>Chuyển đổi & Tự động hóa</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,149,0,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 13 — CRO Psychology + Exit Popup</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,149,0,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 14 — Lead Capture & Email Automation</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,149,0,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 15 — Analytics: Clarity + GA4</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: Lead pipeline tự chạy + dashboard</div>
    </div>

    <div className="part-card reveal delay-3">
      <div className="part-num" style={{color: '#ffd60a'}}>Phần 06</div>
      <h3 style={{fontSize: '20px', fontWeight: '700', letterSpacing: '-.02em', marginBottom: '8px'}}>The Success</h3>
      <p style={{fontSize: '13px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '16px'}}>Launch & Scale</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,214,10,.5)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 16 — Deploy: Netlify + Domain + PageSpeed</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,214,10,.3)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 17 — Traffic Strategy & 30-Day Plan</span>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
          <div className="timeline-dot" style={{background: 'rgba(255,214,10,.15)'}}></div>
          <span style={{fontSize: '14px', color: 'var(--text-2)'}}>Bài 18 — Director's Playbook</span>
        </div>
      </div>
      <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-3)'}}>Output: Live site + Playbook tái dùng mãi mãi</div>
    </div>

  </div>
</section>


{/*  ═══════════════════════════════════════════
     TOOLS
═══════════════════════════════════════════  */}
<section style={{background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 24px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <div style={{textAlign: 'center', marginBottom: '64px'}}>
      <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Công cụ</p>
      <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(28px,4vw,44px)', fontWeight: '700', letterSpacing: '-.03em'}}>Stack thực chiến. Không cần mua thêm tool nào khác.</h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">

      <div className="reveal visible" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🤖</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Claude</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Strategy · Copy · Code</div>
      </div>

      <div className="reveal visible delay-1" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🖥</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Cursor</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>AI IDE · MCP · Deploy</div>
      </div>

      <div className="reveal visible delay-2" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🎨</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Figma</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Design System · Wireframe</div>
      </div>

      <div className="reveal visible delay-3" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🔍</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Perplexity</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Research · VoC</div>
      </div>

      <div className="reveal visible delay-4" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🚀</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Netlify</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Deploy · Domain · CI</div>
      </div>

      <div className="reveal visible delay-5" style={{background: 'var(--surface)', padding: '32px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>📧</div>
        <div style={{fontSize: '15px', fontWeight: '600', color: 'var(--text-1)', marginBottom: '4px'}}>Brevo</div>
        <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Email Automation</div>
      </div>

    </div>
  </div>
</section>


{/*  ═══════════════════════════════════════════
     INSTRUCTOR
═══════════════════════════════════════════  */}
<section id="instructor" style={{padding: '120px 24px', maxWidth: '900px', margin: '0 auto'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '60px', alignItems: 'center'}}>

    <div className="reveal visible" style={{flexShrink: '0'}}>
      {/*  Gradient border wrapper  */}
      <div style={{width: '168px', height: '168px', borderRadius: '50%', padding: '3px', background: 'linear-gradient(135deg,#ff375f,#D97757,#2997ff,#30d158)', flexShrink: '0'}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#0a0a0a'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tung-soc-son.webp?v=20260510"
               alt="Nguyễn Thanh Tùng — AI Strategist, Founder TVT Agency"
               style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}} />
        </div>
      </div>
    </div>

    <div>
      <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Người đồng hành</p>
      <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(28px,4vw,40px)', fontWeight: '700', letterSpacing: '-.03em', marginBottom: '12px'}}>Nguyễn Thanh Tùng</h2>
      <p className="reveal visible delay-2" style={{fontSize: '14px', fontWeight: '500', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '24px'}}>Founder TVT Agency · Hành trình Tôi là Tùng</p>
      <p className="reveal visible delay-3" style={{fontSize: '17px', color: 'var(--text-2)', lineHeight: '1.65', fontWeight: '300', marginBottom: '20px'}}>
        Một người đam mê xê dịch, thích chinh phục trải nghiệm và theo đuổi triết lý "Marketing phượt". Hơn 16 năm thực chiến Branding và Marketing, đúc kết thành những quy trình gọn gàng.
      </p>
      <p className="reveal visible delay-4" style={{fontSize: '15px', color: 'var(--text-3)', lineHeight: '1.6', fontStyle: 'italic'}}>
        "Hành trình của chúng ta không phải là học thuộc các tính năng công cụ. Mọi chia sẻ đều được đúc kết từ những chuyến đi và trải nghiệm thực chiến của chính tôi. Không lý thuyết suông, chỉ có hành động."
      </p>
    </div>

  </div>
</section>


{/*  ═══════════════════════════════════════════
     TESTIMONIALS
═══════════════════════════════════════════  */}
<section style={{background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '100px 24px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <div style={{textAlign: 'center', marginBottom: '64px'}}>
      <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Học viên nói gì</p>
      <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(28px,4vw,44px)', fontWeight: '700', letterSpacing: '-.03em'}}>Kết quả thật. Từ người thật.</h2>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '12px'}}>

      <div className="reveal visible delay-1 bento-card">
        <div style={{display: 'flex', gap: '3px', marginBottom: '20px'}}>
          <span style={{color: '#ffd60a'}}>★★★★★</span>
        </div>
        <p style={{fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.65', marginBottom: '24px', fontStyle: 'italic'}}>"Trước khóa học, tôi mất 2 tuần để làm xong 1 landing page và vẫn không hài lòng. Sau khóa học, tôi làm xong trong 4 ngày và deploy luôn."</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#ff375f,#D97757)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700'}}>M</div>
          <div>
            <div style={{fontSize: '14px', fontWeight: '600', color: 'var(--text-1)'}}>Minh Anh</div>
            <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Marketing Manager · TP.HCM</div>
          </div>
        </div>
      </div>

      <div className="reveal visible delay-2 bento-card">
        <div style={{display: 'flex', gap: '3px', marginBottom: '20px'}}>
          <span style={{color: '#ffd60a'}}>★★★★★</span>
        </div>
        <p style={{fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.65', marginBottom: '24px', fontStyle: 'italic'}}>"Phần MCP và Cursor thay đổi hoàn toàn cách tôi làm việc. Tôi không cần gọi developer nữa — tôi tự làm được và hiểu tôi đang làm gì."</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#2997ff,#30d158)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700'}}>T</div>
          <div>
            <div style={{fontSize: '14px', fontWeight: '600', color: 'var(--text-1)'}}>Thanh Hà</div>
            <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Founder · SaaS Startup</div>
          </div>
        </div>
      </div>

      <div className="reveal visible delay-3 bento-card">
        <div style={{display: 'flex', gap: '3px', marginBottom: '20px'}}>
          <span style={{color: '#ffd60a'}}>★★★★★</span>
        </div>
        <p style={{fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.65', marginBottom: '24px', fontStyle: 'italic'}}>"Master Prompts trong khóa học là thứ tôi dùng hàng ngày. Không phải để học — mà để làm thật. Đó là sự khác biệt lớn nhất so với các khóa AI khác."</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#ff9500,#ff375f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700'}}>D</div>
          <div>
            <div style={{fontSize: '14px', fontWeight: '600', color: 'var(--text-1)'}}>Đức Anh</div>
            <div style={{fontSize: '12px', color: 'var(--text-3)'}}>Freelance Designer · Hà Nội</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/*  ═══════════════════════════════════════════
     PRICING
═══════════════════════════════════════════  */}
<section id="pricing" style={{padding: '120px 24px', maxWidth: '900px', margin: '0 auto'}}>
  <div style={{textAlign: 'center', marginBottom: '64px'}}>
    <p className="reveal visible" style={{fontSize: '11px', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '16px'}}>Học phí</p>
    <h2 className="reveal visible delay-1" style={{fontSize: 'clamp(32px,5vw,52px)', fontWeight: '700', letterSpacing: '-.035em', lineHeight: '1.1'}}>Đầu tư một lần.<br /><span className="grad-cool">Dùng mãi mãi.</span></h2>
  </div>

  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '800px', margin: '0 auto'}}>

    {/*  Basic  */}
    <div className="pricing-card reveal delay-1">
      <div style={{fontSize: '12px', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '20px'}}>Tự học</div>
      <div style={{fontSize: '40px', fontWeight: '800', letterSpacing: '-.04em', marginBottom: '4px', color: 'var(--text-1)'}}>3.900.000<span style={{fontSize: '18px', fontWeight: '400', color: 'var(--text-3)'}}>đ</span></div>
      <div style={{fontSize: '13px', color: 'var(--text-3)', marginBottom: '32px'}}>Truy cập trọn đời · Không hỗ trợ 1-1</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px'}}>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-2)'}}><span style={{color: '#30d158'}}>✓</span> 18 bài học đầy đủ</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-2)'}}><span style={{color: '#30d158'}}>✓</span> 45+ Master Prompts</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-2)'}}><span style={{color: '#30d158'}}>✓</span> Tài liệu FULL PDF</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-2)'}}><span style={{color: '#30d158'}}>✓</span> Template Library</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-3)'}}><span style={{color: 'var(--text-3)'}}>–</span> Hỗ trợ Zalo 1-1</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-3)'}}><span style={{color: 'var(--text-3)'}}>–</span> Code review cá nhân</div>
      </div>
      <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
         style={{display: 'block', textAlign: 'center', padding: '14px', borderRadius: '980px', fontSize: '15px', fontWeight: '500', color: 'var(--text-1)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'background .2s,border-color .2s'}}
         
         >
        Đăng ký
      </a>
    </div>

    {/*  Featured  */}
    <div className="pricing-card featured reveal delay-2">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
        <div style={{fontSize: '12px', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: '#fcb89f'}}>Mentored</div>
        <span style={{fontSize: '11px', fontWeight: '700', background: 'rgba(217,119,87,.15)', color: '#fcb89f', border: '1px solid rgba(217,119,87,.3)', padding: '4px 10px', borderRadius: '100px', letterSpacing: '.05em', textTransform: 'uppercase'}}>Phổ biến</span>
      </div>
      <div style={{fontSize: '40px', fontWeight: '800', letterSpacing: '-.04em', marginBottom: '4px', color: 'var(--text-1)'}}>5.900.000<span style={{fontSize: '18px', fontWeight: '400', color: 'var(--text-3)'}}>đ</span></div>
      <div style={{fontSize: '13px', color: 'var(--text-3)', marginBottom: '32px'}}>Truy cập trọn đời · Hỗ trợ 1-1 Zalo 30 ngày</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px'}}>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> <strong>Tất cả gói Tự học</strong></div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> Hỗ trợ Zalo 1-1 trong 30 ngày</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> Code review landing page của bạn</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> 1 buổi Zoom review 60 phút</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> Audit Vibe Brief trực tiếp</div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-1)'}}><span style={{color: '#30d158'}}>✓</span> Cập nhật khoá học trọn đời</div>
      </div>
      <a href="https://zalo.me/0972613455" target="_blank" rel="noopener"
         className="btn-primary" style={{display: 'block', textAlign: 'center', fontSize: '15px', padding: '14px'}}>
        Đăng ký ngay
      </a>
    </div>

  </div>

  {/*  Guarantee  */}
  <div className="reveal visible" style={{textAlign: 'center', marginTop: '40px'}}>
    <p style={{fontSize: '14px', color: 'var(--text-3)'}}>
      🔒 Cam kết hoàn tiền 100% trong 7 ngày nếu không hài lòng.
      <a href="https://zalo.me/0972613455" target="_blank" rel="noopener" style={{color: 'var(--blue)', textDecoration: 'none', marginLeft: '4px'}}>Câu hỏi? Chat Zalo ›</a>
    </p>
  </div>
</section>


{/*  ═══════════════════════════════════════════
     FINAL CTA
═══════════════════════════════════════════  */}
<section style={{padding: '0 24px 0', maxWidth: '1100px', margin: '0 auto 0'}}>
  <div className="reveal visible" style={{background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '28px', padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: '80px'}}>
    {/*  Glow  */}
    <div style={{position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', background: 'radial-gradient(ellipse,rgba(217,119,87,.15) 0%,transparent 70%)', pointerEvents: 'none'}}></div>
    <div style={{position: 'absolute', bottom: '-80px', left: '20%', width: '300px', height: '200px', background: 'radial-gradient(ellipse,rgba(41,151,255,.1) 0%,transparent 70%)', pointerEvents: 'none'}}></div>

    {/*  Badge  */}
    <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: '#30d158', background: 'rgba(48,209,88,.08)', border: '1px solid rgba(48,209,88,.2)', padding: '6px 16px', borderRadius: '100px', marginBottom: '28px'}}>
      <span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#30d158', display: 'inline-block'}}></span>
      Đang mở đăng ký
    </div>

    <h2 style={{fontSize: 'clamp(36px,5vw,64px)', fontWeight: '800', letterSpacing: '-.04em', lineHeight: '1.06', marginBottom: '20px'}}>
      Bắt đầu hành trình<br /><span className="grad-brand">của bạn hôm nay.</span>
    </h2>
    <p style={{fontSize: '18px', color: 'var(--text-2)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6', fontWeight: '300'}}>
      6 tuần. 18 bài. Landing page thật — live trên internet, lead đang chạy vào.
    </p>
    <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
      <a href="#pricing" className="btn-primary" style={{fontSize: '17px', padding: '16px 36px'}}>
        Đăng ký ngay
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
      <a href="https://zalo.me/0972613455" target="_blank" rel="noopener" className="btn-ghost" style={{fontSize: '17px', padding: '16px 0', color: 'var(--text-2)'}}>
        Hỏi trước khi đăng ký <span className="arrow">›</span>
      </a>
    </div>
  </div>
</section>




<ToolsAISection />

    </main>
  );
}
