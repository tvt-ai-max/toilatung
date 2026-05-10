export default function ToolsAISection() {
    return (
        <section id="tools" className="py-24 px-4 md:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-sky-400">Công cụ AI</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Những công cụ bạn sẽ <span className="gradient-indigo">làm chủ</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Không cần dùng tất cả. Trong mỗi chương trình, tôi sẽ giúp bạn chọn đúng công cụ phù hợp với mục tiêu và công việc thực tế của bạn.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(16,163,127,0.15)', border: '1px solid rgba(16,163,127,0.3)'}}>
                                <i className="fas fa-robot" style={{color: '#10a37f'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">ChatGPT</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Viết · Phân tích · Lên kế hoạch</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Trợ lý đa năng nhất hiện tại — viết content, phân tích dữ liệu, lên kế hoạch marketing, soạn email, tư vấn chiến lược. Phù hợp cho hầu hết mọi công việc hàng ngày.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(66,133,244,0.15)', border: '1px solid rgba(66,133,244,0.3)'}}>
                                <i className="fas fa-gem" style={{color: '#4285f4'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Gemini</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Search · Đa phương tiện · Google</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Mạnh về tìm kiếm thông tin cập nhật, phân tích ảnh và video, tích hợp sâu với Gmail, Google Docs, Drive. Lý tưởng cho người làm việc trong hệ sinh thái Google.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)'}}>
                                <i className="fas fa-code" style={{color: 'var(--indigo)'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Claude</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Longform · Coding · Context dài</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Xuất sắc trong viết longform, review tài liệu dài, lập trình thực chiến và làm việc với codebase. Xương sống của chương trình Vibe Coding.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(244,114,182,0.15)', border: '1px solid rgba(244,114,182,0.3)'}}>
                                <i className="fas fa-microphone-alt" style={{color: 'var(--pink)'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">ElevenLabs</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Giọng nói · Podcast · TTS</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Chuyển văn bản thành giọng nói tự nhiên như người thật — dùng để tạo Podcast, lồng tiếng video, nội dung audio cho mạng xã hội.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)'}}>
                                <i className="fas fa-film" style={{color: 'var(--amber)'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Flow / Veo / Imagen</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Ảnh AI · Video AI · Google</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Tạo ảnh nghệ thuật và video chuyên nghiệp bằng AI từ Google — phù hợp để sản xuất visual cho content, quảng cáo và thương hiệu cá nhân.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)'}}>
                                <i className="fas fa-magic" style={{color: 'var(--emerald)'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Canva · CapCut · Whisk</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Thiết kế · Video · Xuất bản</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Bộ công cụ thực thi: Canva để thiết kế ảnh không cần kỹ năng design, CapCut dựng video bằng điện thoại, Whisk để biến đổi ảnh sáng tạo với AI.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)'}}>
                                <i className="fas fa-brain" style={{color: '#06b6d4'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Grok</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Reasoning · Real-time · xAI</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">AI của xAI (Elon Musk) — mạnh về lập luận chuyên sâu, truy cập real-time X/Twitter, phân tích thị trường và brainstorm chiến lược với tư duy phản biện sắc bén.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)'}}>
                                <i className="fas fa-video" style={{color: '#a855f7'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">Higgsfield</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Video AI · Animation · Motion</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Công cụ tạo video AI thế hệ mới — animate ảnh tĩnh thành video chuyển động cinematic, tạo nội dung video ngắn chất lượng cao cho mạng xã hội và thương hiệu cá nhân.</p>
                    </div>

                    <div className="glass rounded-3xl p-7 card-hover">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)'}}>
                                <i className="fas fa-user-circle" style={{color: '#f43f5e'}}></i>
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white">HeyGen</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Avatar · Talking Head · Dịch thuật</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">Tạo video người phát ngôn AI từ văn bản — dùng avatar ảo hoặc nhân bản giọng/hình của bạn để sản xuất video marketing, đào tạo và dịch nội dung sang nhiều ngôn ngữ.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
