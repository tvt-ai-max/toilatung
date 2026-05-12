"use client";

export default function HeroEmailForm() {
  return (
    <div className="flex flex-col items-center gap-3">
      <form
        className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative flex-1 w-full">
          <i className="far fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
          <input
            type="email"
            placeholder="Email của bạn..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00E5FF]/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
            required
          />
        </div>
        <button
          type="button"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#22D3EE] hover:bg-cyan-300 text-slate-900 font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-[0_0_16px_rgba(34,211,238,0.25)] whitespace-nowrap flex items-center justify-center gap-2"
          onClick={() => alert("Chức năng đăng ký đang được tích hợp API.")}
        >
          Nhận miễn phí <i className="fas fa-paper-plane"></i>
        </button>
      </form>
      <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
        <i className="fas fa-shield-alt text-[#00E5FF]/50"></i>
        Spam là tội ác. 1 email chất lượng mỗi cuối tuần.
      </p>
    </div>
  );
}
