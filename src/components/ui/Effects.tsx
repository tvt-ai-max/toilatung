'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const triggerInitial = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
      triggerInitial();
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);
  
  return null;
}

export function MouseTilt({ children, className = '', style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth tilt effect
    const rotateX = ((y - centerY) / centerY) * -6; 
    const rotateY = ((x - centerX) / centerX) * 6;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Add glare effect if we have a glare element
    const glare = ref.current.querySelector('.glare') as HTMLDivElement;
    if (glare) {
      glare.style.transform = `translate(${x}px, ${y}px)`;
      glare.style.opacity = '1';
    }
  };
  
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    const glare = ref.current.querySelector('.glare') as HTMLDivElement;
    if (glare) {
      glare.style.opacity = '0';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`group relative overflow-hidden ${className}`} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)', willChange: 'transform', ...style }}
    >
      <div className="glare absolute pointer-events-none w-64 h-64 bg-white/10 blur-[50px] rounded-full -top-32 -left-32 opacity-0 transition-opacity duration-300 z-50"></div>
      {children}
    </div>
  );
}
