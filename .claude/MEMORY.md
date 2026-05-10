# AI Memory & Bug Logs (toilatung-platform)

Tài liệu này lưu trữ "Ký ức" (Memory) và Log các lỗi nghiêm trọng đã từng xảy ra trong hệ thống `toilatung-platform`, giúp AI các phiên làm việc tiếp theo không bao giờ lặp lại sai lầm cũ.

---

## [BUG-001] Global Layout Break do CSS Reset rò rỉ từ Landing Page
- **Thời gian ghi nhận:** May 2026
- **Triệu chứng:**
  - Layout của Header (`<nav>`) và Footer toàn cục bị kéo dãn toàn màn hình, vỡ cấu trúc `max-w-7xl mx-auto`.
  - Icon Logo bị xô lệch, các nút bấm bị sai màu (chuyển từ Tím `#7b61ff` sang Cam `#D97757`).
- **Nguyên nhân gốc (Root Cause):**
  - Khi Migrate file HTML thuần sang component Next.js (`page.tsx`), CSS của trang được import vào bằng `import './landing-page.css'`.
  - Trong file CSS này có chứa đoạn CSS Reset cực kỳ nguy hiểm: `*, *::before, *::after { margin: 0; padding: 0 }`. Điều này ghi đè lên các class tiện ích của Tailwind (như `mx-auto`) vì nó được load sau cùng.
  - Khai báo biến màu `:root { --indigo: #D97757; }` trong CSS cục bộ đã ghi đè biến toàn cục `--color-brand-indigo` ở `globals.css`.
- **Cách AI đã Fix (Solution):**
  1. Lập tức xóa bỏ các khối CSS Reset (`*` và `body`) trong file CSS được import cục bộ.
  2. Gom nhóm các biến màu sắc thành một class riêng (`.lp-theme`) thay vì dùng `:root`, sau đó bọc trang bằng `<main className="lp-theme">`.
  3. Extract các Component lặp lại (như `ToolsAISection.tsx`) ra thư mục `src/components/shared/` thay vì để hardcode trên từng trang.
- **Bài học (Actionable Insight):** KHÔNG BAO GIỜ để CSS Reset hoặc `:root` lọt vào các file CSS con trong hệ thống Next.js sử dụng chung Layout. Đã cập nhật cảnh báo này vào `SOP_Landing_Page.md`.

---
*(AI khi phát hiện lỗi tương tự, vui lòng tra cứu tài liệu này trước khi Debug).*
