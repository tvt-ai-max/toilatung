import { Metadata } from 'next';
import { ScrollReveal, MouseTilt } from "@/components/ui/Effects";
import Link from 'next/link';
import LeadCaptureForm from '@/components/shared/LeadCaptureForm';

export const metadata: Metadata = {
  title: "AI System Audit Checklist | toilatung.com",
  description: "Bản danh sách các câu hỏi rà soát quy trình doanh nghiệp trước khi quyết định có build AI hay không. Dành cho SME Việt Nam.",
};

const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 py-2 text-zinc-300">
    <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-md border border-zinc-600 bg-zinc-800/50">
      <svg className="w-3 h-3 text-transparent transition-colors group-hover:text-brand-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="leading-relaxed">{children}</span>
  </li>
);

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 bg-[url('/images/grid.svg')] bg-center bg-fixed">
      <ScrollReveal />
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 reveal" style={{ transitionDelay: '100ms' }}>
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300">
            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lead Magnet · Miễn phí
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            AI System Audit Checklist
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Trả lời thật những câu hỏi này trước khi build bất kỳ workflow AI nào trong doanh nghiệp của bạn.
          </p>
        </div>

        {/* Cảnh báo */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <MouseTilt className="cursor-crosshair w-full rounded-2xl glass p-1">
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex gap-4">
                <div className="flex-shrink-0 text-amber-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Sử dụng checklist này như thế nào?</h3>
                  <p className="mt-2 text-zinc-400">
                    Checklist này không phải để tick cho đủ. Nó là để bạn nhận ra hệ thống của mình đang có nút thắt ở đâu. Nếu bạn chưa trả lời được phần lớn các câu hỏi dưới đây, việc mua tool AI sẽ chỉ tạo thêm rác vào quy trình thay vì tối ưu nó.
                  </p>
                </div>
              </div>
            </div>
          </MouseTilt>
        </div>

        {/* Danh sách Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phần 1 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 reveal group hover:bg-zinc-900/80 transition-colors" style={{ transitionDelay: '300ms' }}>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm">1</span>
              HIỂU BÀI TOÁN
            </h2>
            <ul className="space-y-3">
              <ChecklistItem>Quy trình này hiện tại mất bao nhiêu giờ/tuần?</ChecklistItem>
              <ChecklistItem>Ai đang làm quy trình này? (Tên người cụ thể)</ChecklistItem>
              <ChecklistItem>Bước nào tốn thời gian nhất?</ChecklistItem>
              <ChecklistItem>Bước nào hay xảy ra lỗi nhất?</ChecklistItem>
              <ChecklistItem>Nếu quy trình này được tự động 50%, bạn tiết kiệm được gì?</ChecklistItem>
            </ul>
          </div>

          {/* Phần 2 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 reveal group hover:bg-zinc-900/80 transition-colors" style={{ transitionDelay: '400ms' }}>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">2</span>
              SẴN SÀNG CHO AI
            </h2>
            <ul className="space-y-3">
              <ChecklistItem>Input của quy trình này có dạng text/data chuẩn không?</ChecklistItem>
              <ChecklistItem>Output mong muốn có định nghĩa rõ ràng không?</ChecklistItem>
              <ChecklistItem>Bạn có thể mô tả quy trình này trong 5 bước không?</ChecklistItem>
              <ChecklistItem>Ai sẽ review output của AI trước khi dùng?</ChecklistItem>
              <ChecklistItem>Bạn có cách đo &quot;thành công&quot; của workflow này không?</ChecklistItem>
            </ul>
          </div>

          {/* Phần 3 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 reveal group hover:bg-zinc-900/80 transition-colors" style={{ transitionDelay: '500ms' }}>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">3</span>
              HẠ TẦNG KỸ THUẬT
            </h2>
            <ul className="space-y-3">
              <ChecklistItem>Bạn đang dùng tool nào? (Liệt kê đầy đủ)</ChecklistItem>
              <ChecklistItem>Tool nào có API hoặc tích hợp với automation (n8n/Make)?</ChecklistItem>
              <ChecklistItem>Dữ liệu đầu vào đang nằm ở đâu? (Google Drive, Notion, Email...)</ChecklistItem>
              <ChecklistItem>Output cần đến đâu? (Ai nhận, lưu ở đâu, định dạng gì)</ChecklistItem>
            </ul>
          </div>

          {/* Phần 4 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 reveal group hover:bg-zinc-900/80 transition-colors" style={{ transitionDelay: '600ms' }}>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 text-sm">4</span>
              CON NGƯỜI & QUY TRÌNH
            </h2>
            <ul className="space-y-3">
              <ChecklistItem>Người sẽ vận hành workflow này có thể dùng AI không?</ChecklistItem>
              <ChecklistItem>Có quy trình xử lý (Fallback) khi workflow fail không?</ChecklistItem>
              <ChecklistItem>Ai chịu trách nhiệm kết quả cuối cùng?</ChecklistItem>
            </ul>
          </div>
        </div>

        {/* Kết luận & CTA */}
        <div className="reveal" style={{ transitionDelay: '700ms' }}>
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Tài liệu miễn phí
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Tải Bản Sao Notion Template</h2>
              <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Nếu bạn chưa trả lời được 50% câu hỏi trên <strong className="text-white">→ bạn chưa sẵn sàng build AI</strong>. 
                Để thực thi checklist này một cách hệ thống, hãy tải bản sao Notion Template và tham gia bản tin <strong className="text-indigo-300">AI Director Weekly</strong> (1 email/tuần).
              </p>
              
              <div className="pt-6">
                <LeadCaptureForm />
              </div>
            </div>
            <div className="mt-12 text-sm text-zinc-600 relative z-10 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>Nguyễn Thanh Tùng · toilatung.com</p>
              <Link href="https://zalo.me/0972613455" target="_blank" className="hover:text-zinc-400 transition-colors">
                Hoặc nhắn Zalo nếu bạn cần Audit 1:1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
