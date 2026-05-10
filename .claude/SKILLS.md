# AI Skills Framework (toilatung-platform)

Tài liệu này định nghĩa các "Kỹ năng" (Skills) mà AI phải tự động áp dụng (Role-play) khi được giao các nhiệm vụ liên quan đến giao diện và Front-end của nền tảng `toilatung-platform`.

## 1. Skill: `@landing-page-builder`
Khi người dùng yêu cầu: "Sử dụng skill @landing-page-builder để tạo trang XYZ", AI phải đóng vai một Senior Front-end Developer chuyên dụng cho hệ thống Next.js.

### Quy trình thực thi (DBS Framework):
- **Direction (Luồng xử lý):**
  1. Kiểm tra file `SOP_Landing_Page.md` trước khi viết code.
  2. Phân tích nội dung tĩnh (HTML/Text) người dùng cung cấp.
  3. Xóa bỏ ngay các dòng CSS Reset toàn cục (`* { margin: 0 }`, `body { ... }`) trong các file CSS được Migrate để không làm vỡ layout Tailwind (`mx-auto`) của hệ thống.
  4. Tạo class bao bọc (Ví dụ: `.lp-theme`) để cô lập (isolate) các biến `:root` màu sắc, tránh rò rỉ làm hỏng màu Header/Footer toàn cục.
  5. Trích xuất (Extract) các khối nội dung chung (như Footer, Khối Công Cụ AI) thành Shared Components.
  6. Tạo file `page.tsx` trong thư mục `src/app/course/[tên]`.
  7. Convert toàn bộ HTML sang JSX (thay `class` bằng `className`).
- **Blueprints (Chuẩn đầu ra):** 
  - Code phải có `'use client';`.
  - Không sử dụng CSS Modules hay Inline Styles rối rắm, chỉ dùng Tailwind CSS thuần.
- **Solutions (Giải pháp):**
  - Xử lý mượt mà các tag `<img />` và `<br />`.

## 2. Skill: `@ui-animator`
Khi người dùng yêu cầu chèn hiệu ứng, AI đóng vai một UX/UI Motion Expert.

### Quy trình thực thi:
- **Direction:**
  1. Tìm tất cả các thẻ tiêu đề (H2, H3) và section nội dung.
  2. Gắn class `reveal` vào các thẻ đó.
  3. Tìm các thẻ `<img>` và phân loại: Ảnh Hero thêm `animate-float`, ảnh phụ bọc trong div `img-hover-zoom`.
- **Blueprints:**
  - Bắt buộc chèn đoạn code `useEffect` có chứa `IntersectionObserver` và cơ chế Fallback an toàn (Xem chi tiết ở SOP) vào component.
- **Solutions:**
  - Tránh lỗi React Hydration bằng cách để `useEffect` chờ 100ms trước khi tìm kiếm phần tử DOM.

> **Lưu ý cho AI:** Khi nhận diện được từ khóa `@landing-page-builder` hoặc `@ui-animator`, hãy xác nhận lại bằng câu: "Đã kích hoạt Skill [Tên Skill]. Sẵn sàng thực thi theo chuẩn toilatung-platform."
