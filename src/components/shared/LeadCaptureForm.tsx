"use client";

import { useState } from "react";

export default function LeadCaptureForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "checklist-page",
          fields: {
            name,
            email,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Tuyệt vời, {name}!</h3>
        <p className="text-zinc-400">
          Notion Template và hướng dẫn chi tiết đã được gửi vào hòm thư <strong className="text-zinc-300">{email}</strong>. Vui lòng kiểm tra cả mục Spam/Promotions nhé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md mx-auto space-y-4">
      {status === "error" && (
        <div className="p-3 text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center">
          Đã có lỗi xảy ra. Vui lòng thử lại sau.
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="sr-only">Tên của bạn</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên của bạn..."
          disabled={status === "loading"}
          className="w-full px-5 py-3.5 bg-zinc-900/50 border border-zinc-700/50 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 rounded-xl text-white placeholder-zinc-500 transition-all outline-none disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email công việc</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email tốt nhất để nhận tài liệu..."
          disabled={status === "loading"}
          className="w-full px-5 py-3.5 bg-zinc-900/50 border border-zinc-700/50 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 rounded-xl text-white placeholder-zinc-500 transition-all outline-none disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full relative group overflow-hidden px-6 py-4 rounded-xl bg-brand-purple text-white font-bold transition-all hover:bg-brand-purple/90 disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Đang xử lý...
          </>
        ) : (
          <>
            <span>Tải Notion Template Ngay</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
      
      <p className="text-center text-xs text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Thông tin của bạn được bảo mật tuyệt đối. No spam.
      </p>
    </form>
  );
}
