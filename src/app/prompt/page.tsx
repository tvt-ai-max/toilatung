'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { promptsData, PromptItem } from '@/lib/prompts';

const catColors: Record<string, string> = {
  "Nhân vật & Tham chiếu": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Video & Animation": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Kịch bản & Storyboard": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Phân tích & Remake": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Ảnh Kỹ thuật": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Training Chatbot": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

const catIcons: Record<string, string> = {
  "Nhân vật & Tham chiếu": "fa-user-astronaut",
  "Video & Animation": "fa-film",
  "Kịch bản & Storyboard": "fa-book-open",
  "Phân tích & Remake": "fa-microscope",
  "Ảnh Kỹ thuật": "fa-microchip",
  "Training Chatbot": "fa-robot",
};

export default function PromptLibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unlocked = localStorage.getItem('tvt_prompts_unlocked');
    if (unlocked === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsUnlocked(true);
    }
  }, []);

  const categories = useMemo(() => ["Tất cả", ...Array.from(new Set(promptsData.map(p => p.category)))], []);

  const filteredPrompts = useMemo(() => {
    return promptsData.filter(p => {
      const matchCat = activeCategory === "Tất cả" || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle fake loading state on filter change
  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsFiltering(true);
    setActiveCategory(cat);
    setTimeout(() => setIsFiltering(false), 300);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltering(true);
    setSearchQuery(e.target.value);
    setTimeout(() => setIsFiltering(false), 300);
  };

  const handleOpenModal = (p: PromptItem) => {
    if (p.category === "Master Prompt" && !isUnlocked) {
      setIsLeadModalOpen(true);
      return;
    }
    setSelectedPrompt(p);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPrompt(null);
    }, 300);
  };

  // Keyboard shortcuts and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleCopy = (p: PromptItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if (p.category === "Master Prompt" && !isUnlocked) {
      setIsLeadModalOpen(true);
      return;
    }
    
    const textToCopy = `[${p.title}] - Tôi Là Tùng Prompt Library\n\n${p.fullPrompt}\n\nCách dùng: ${p.usage}\nNguồn: toilatung.com • 2026`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      triggerToast();
      triggerConfetti(e);
    }).catch(err => {
      console.error("Copy failed", err);
      alert("Không thể sao chép. Vui lòng thử lại.");
    });
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const triggerConfetti = (e?: React.MouseEvent) => {
    let x = 0.5;
    let y = 0.5;
    if (e && e.clientX) {
      x = e.clientX / window.innerWidth;
      y = e.clientY / window.innerHeight;
    }
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#a855f7', '#22d3ee', '#ffffff'],
      disableForReducedMotion: true
    });
  };

  return (
    <div className="relative w-full text-white overflow-hidden selection:bg-purple-500/30 selection:text-white">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 bg-grid opacity-50 pointer-events-none" style={{
        backgroundSize: '40px 40px',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}></div>
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,rgba(34,211,238,0.15)_50%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,rgba(34,211,238,0.15)_50%,transparent_70%)] blur-[80px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-20 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold uppercase tracking-widest text-purple-300 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            33 Prompts • Cập nhật 05/2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Kho Prompt AI <br />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text" style={{textShadow: '0 0 30px rgba(168, 85, 247, 0.3)'}}>Thực Chiến 2026</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Bộ sưu tập prompt đã được kiểm chứng bởi đội ngũ Antigravity. Áp dụng <strong className="text-white">Director Mindset</strong> để điều khiển AI tạo ra sản phẩm chất lượng cao nhất.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-white/[0.02] backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <i className="fa-solid fa-search text-slate-400 text-xl mr-4"></i>
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Tìm kiếm prompt, công cụ, hoặc danh mục..." 
                className="w-full bg-transparent border-none text-white text-lg focus:outline-none placeholder-slate-500"
              />
              <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500 font-mono font-bold bg-white/5 px-2 py-1 rounded">
                <kbd>⌘</kbd> <kbd>K</kbd>
              </div>
            </div>
          </div>
        </header>

        {/* Filters (Chips) */}
        <div className="mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#05050a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#05050a] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map(cat => {
              const isActive = cat === activeCategory;
              return (
                <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all select-none ${
                    isActive 
                      ? "bg-purple-500/20 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]" 
                      : "bg-white/[0.02] backdrop-blur-md border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Cards */}
        {filteredPrompts.length === 0 && !isFiltering ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/5 flex items-center justify-center text-3xl text-slate-500 mb-6">
              <i className="fa-solid fa-ghost"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Không tìm thấy kết quả</h3>
            <p className="text-slate-400 mb-6">Thử thay đổi từ khóa hoặc bộ lọc danh mục xem sao.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("Tất cả"); }}
              className="px-6 py-2 bg-white/[0.02] backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition text-sm font-bold text-white"
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
            {isFiltering ? (
              // Skeletons
              Array(8).fill(0).map((_, idx) => (
                <div key={idx} className="bg-white/[0.02] backdrop-blur-md rounded-2xl h-64 border border-white/5 p-6 flex flex-col gap-4">
                  <div className="h-6 w-1/3 rounded-md bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
                  <div className="h-8 w-3/4 rounded-md bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
                  <div className="flex-1 rounded-md bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
                  <div className="h-10 w-full rounded-lg mt-auto bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse"></div>
                </div>
              ))
            ) : (
              filteredPrompts.map((p, index) => {
                const badgeStyle = catColors[p.category] || "text-slate-400 bg-slate-400/10 border-slate-400/20";
                const icon = catIcons[p.category] || "fa-bolt";
                
                return (
                  <div 
                    key={p.id}
                    className="relative group bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-6 rounded-3xl flex flex-col h-full border border-white/[0.08] hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 ease-out opacity-0 animate-[slideUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {p.category === "Master Prompt" && !isUnlocked && (
                      <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-md z-10 shadow-sm pointer-events-none">
                        <i className="fa-solid fa-lock text-xs"></i> Locked
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${badgeStyle}`}>
                        <i className={`fa-solid ${icon}`}></i> {p.category}
                      </span>
                    </div>
                    
                    <h3 onClick={() => handleOpenModal(p)} className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight hover:text-cyan-400 transition cursor-pointer">
                      {p.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-5 line-clamp-3 leading-relaxed flex-1">
                      {p.shortDesc}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-xs text-slate-400 border border-white/5">
                        <i className="fa-solid fa-screwdriver-wrench text-slate-500"></i> {p.tool}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto pt-4 border-t border-white/5">
                      <button 
                        onClick={(e) => handleCopy(p, e)}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-sm font-bold rounded-xl transition shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                      >
                        {p.category === "Master Prompt" && !isUnlocked ? (
                          <><i className="fa-solid fa-lock"></i> Mở Khóa</>
                        ) : (
                          <><i className="fa-regular fa-copy"></i> Copy</>
                        )}
                      </button>
                      <button 
                        onClick={() => handleOpenModal(p)}
                        className="flex items-center justify-center w-12 py-2.5 bg-white/[0.02] backdrop-blur-md rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition border border-white/10"
                      >
                        {p.category === "Master Prompt" && !isUnlocked ? (
                          <i className="fa-solid fa-key"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-right"></i>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Director Mindset Guide */}
        <section className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Sử dụng Prompt chuẩn <span className="text-cyan-400 italic">Director Mindset</span></h2>
            <p className="text-slate-400">Cách biến công cụ AI thành một nhân sự thực thụ thay vì một cỗ máy trả lời tự động.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 text-xl border border-purple-500/30">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">1. Cung cấp Ngữ cảnh rõ ràng</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Đừng chỉ ra lệnh. Hãy cho AI biết nó là ai, đang giải quyết bài toán gì, và phục vụ cho đối tượng nào. Giống như bạn đang brief cho một nhân viên mới.</p>
            </div>
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 text-xl border border-cyan-500/30">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">2. Phân nhỏ cấu trúc (Chunking)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Các tác vụ phức tạp nên được chia nhỏ. Thay vì yêu cầu tạo cả bộ phim trong 1 câu, hãy đi từ Ý tưởng → Kịch bản → Storyboard → Render.</p>
            </div>
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 text-xl border border-emerald-500/30">
                <i className="fa-solid fa-rotate"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">3. Feedback Loop (Vòng lặp sửa sai)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Nếu output chưa ưng ý, đừng vội vứt bỏ. Hãy dùng chức năng sửa (Inpainting/Inline edit) hoặc prompt bổ sung để AI điều chỉnh chính xác lỗi.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Prompt Library Footer */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-6 mt-10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-white mb-6">
            Bạn cần xây dựng hệ thống Prompt chuyên biệt cho Doanh nghiệp?
          </p>
          <a 
            href="https://zalo.me/0972613455" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold tracking-widest uppercase text-sm transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)]"
            style={{
              background: "linear-gradient(135deg, var(--color-brand-indigo), #22d3ee)",
              boxShadow: "0 10px 30px rgba(34, 211, 238, 0.2)",
            }}
          >
            <i className="fas fa-comment-dots text-lg"></i>
            Hotline/Zalo: 0972.613.455
          </a>
        </div>
      </footer>

      {/* Modal Detail */}
      {isModalOpen && selectedPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            onClick={handleCloseModal}
          ></div>
          
          <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden relative z-10 animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            
            <button 
              onClick={handleCloseModal} 
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 transition z-20"
            >
              <i className="fa-solid fa-times"></i>
            </button>

            <div className="p-8 pb-6 border-b border-white/10 bg-white/[0.01]">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-4 border ${catColors[selectedPrompt.category] || "text-slate-400 bg-slate-400/10 border-slate-400/20"}`}>
                <i className={`fa-solid ${catIcons[selectedPrompt.category] || "fa-bolt"}`}></i> {selectedPrompt.category}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">{selectedPrompt.title}</h2>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <i className="fa-solid fa-wrench"></i> <span>{selectedPrompt.tool}</span>
              </div>
            </div>

            <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-lg font-bold text-white">Nội dung Prompt</h3>
                  <button 
                    onClick={() => handleCopy(selectedPrompt)} 
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-lg text-sm font-bold transition shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  >
                    <i className="fa-regular fa-copy"></i> Sao chép toàn bộ
                  </button>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 rounded-xl pointer-events-none"></div>
                  <pre className="bg-black/40 border border-white/10 rounded-xl p-6 overflow-x-auto">
                    <code className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {selectedPrompt.fullPrompt}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">Hướng dẫn sử dụng (Usage)</h3>
                <div className="bg-white/[0.02] backdrop-blur-md p-5 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedPrompt.usage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md border border-emerald-500/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(16,185,129,0.2)] pointer-events-none transition-all duration-400 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i className="fa-solid fa-check text-xs"></i>
        </div>
        <span className="text-white font-medium text-sm">Đã sao chép prompt thành công!</span>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      {/* Lead Magnet Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsLeadModalOpen(false)}></div>
          <div className="relative bg-[#0a0a10] border border-white/10 rounded-3xl w-full max-w-md p-8 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden animate-[slideUp_0.3s_ease-out_forwards]">
            <div className="absolute top-0 left-[-10%] w-[200px] h-[200px] bg-purple-500/20 blur-[60px] pointer-events-none"></div>
            
            <button onClick={() => setIsLeadModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 w-8 h-8 rounded-full flex items-center justify-center transition z-20">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="text-center mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-2xl text-white mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <i className="fa-solid fa-lock-open text-purple-400"></i>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Mở Khóa Master Prompt</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Để lại thông tin để truy cập trọn bộ các prompt chuẩn Production và nhận update file PDF miễn phí qua email.
              </p>
            </div>

            <form className="relative z-10 flex flex-col gap-4" onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('tvt_prompts_unlocked', 'true');
              setIsUnlocked(true);
              setIsLeadModalOpen(false);
              triggerToast();
              triggerConfetti();
            }}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Họ và Tên</label>
                <input required type="text" placeholder="Nguyễn Văn A" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition placeholder-slate-600" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email / Zalo</label>
                <input required type="text" placeholder="Nhập email hoặc số Zalo..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition placeholder-slate-600" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black uppercase tracking-widest py-4 rounded-xl mt-4 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-0.5">
                Mở Khóa Ngay
              </button>
              <p className="text-center text-[10px] text-slate-500 mt-2">Thông tin của bạn được bảo mật tuyệt đối.</p>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
