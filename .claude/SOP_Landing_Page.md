# SOP: Quy trình xây dựng Landing Page (toilatung-platform)

Tài liệu này là quy chuẩn (Standard Operating Procedure) bắt buộc dành cho mọi AI Agent (Claude, Cursor, v.v.) khi làm việc với các trang Landing Page Khóa Học tại dự án `toilatung-platform`.

## 1. Cấu trúc Thư mục & Routing
- **Vị trí lưu trữ:** Toàn bộ Landing Page cho khóa học phải được đặt trong thư mục `src/app/course/[tên-khóa-học]/page.tsx`. Không được đặt ở gốc `/app`.
- **Assets (Hình ảnh):** Tất cả hình ảnh (`.webp`, `.png`) phải được lưu tại `public/images/[tên-khóa-học]/`.
- **Assets (Tài liệu):** Các file PDF hoặc tài liệu đính kèm phải được lưu tại `public/docs/`.
- **Cú pháp React:** Bắt buộc khai báo `'use client';` ở đầu file `page.tsx` nếu có sử dụng React Hooks (`useEffect`, `useState`).

## 2. Giao diện (UI/UX) & Branding
- **Theme chủ đạo:** Sử dụng phong cách Dark Mode chuyên sâu. Nền chính luôn là `bg-[#1c1a19]` hoặc `bg-black`. 
- **Màu sắc Claude (Brand Identity):**
  - Màu chính (Primary): Cam đào / Hổ phách `[#D97757]` hoặc `[#E58B6D]`.
  - Thay vì dùng `text-indigo-500`, phải dùng `text-[#D97757]` hoặc `text-orange-500`.
- **Hiệu ứng Typography (Gradient):**
  Các tiêu đề (H1, H2) phải dùng class `text-gradient-claude` để tạo dải màu Gradient chuyển từ Vàng sang Cam đào.
  *(Class này đã được khai báo sẵn trong Component bằng `<style jsx global>` hoặc trong `globals.css`)*.

## 3. Hệ thống Animation (Quy định bắt buộc)
Để trang Landing Page không bị tĩnh, luôn áp dụng 3 quy tắc Animation sau:

### 3.1 Scroll Reveal (Lăn chuột)
- Tất cả các thẻ `<section>`, `<h2>`, `<h3>` hoặc các khối Grid phải được gắn class `reveal`.
- **Cơ chế hoạt động:** Class `reveal` ban đầu có `transform: translateY(20px)` và `opacity: 0`. Khi cuộn đến, class `visible` sẽ được thêm vào.
- **Hook bắt buộc trong `page.tsx`:**
```javascript
useEffect(() => {
    const timer = setTimeout(() => {
        const reveals = Array.from(document.querySelectorAll('.reveal'));
        const triggerInitial = () => {
            reveals.forEach(reveal => {
                if (reveal.getBoundingClientRect().top < window.innerHeight + 100) {
                    reveal.classList.add('visible');
                }
            });
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });
        
        reveals.forEach(r => observer.observe(r));
        triggerInitial();
        
        // Fallback an toàn (Rất quan trọng)
        setTimeout(() => reveals.forEach(r => r.classList.add('visible')), 2000);
    }, 100);
    return () => clearTimeout(timer);
}, []);
```

### 3.2 Floating Effect
Các hình ảnh Hero (ảnh bìa) hoặc ảnh mô hình trung tâm phải có class `animate-float`. (Cần định nghĩa keyframes `float` trong CSS: dịch chuyển Y -15px theo chu kỳ 6s).

### 3.3 Hover Zoom Effect
Các hình ảnh minh họa nhỏ hơn phải được bọc trong thẻ `div` có class `img-hover-zoom` để khi chuột di vào, hình ảnh sẽ phóng to lên 1.05 lần mà không làm vỡ layout.

## 4. Layout Toàn cục & CSS Isolation (Vô cùng quan trọng)
Tuyệt đối KHÔNG ĐƯỢC sử dụng các reset CSS toàn cục (Global CSS Resets) trong các file CSS cục bộ của Landing Page (ví dụ: `landing-page.css`).
- **Nghiêm cấm:** `* { margin: 0; padding: 0; }` hoặc các định dạng trực tiếp lên thẻ `body`, `html`, `a`. Điều này sẽ ghi đè lên các class tiện ích của Tailwind (như `mx-auto`) và phá vỡ bố cục Header/Footer chung của Next.js Layout.
- **Cách ly biến CSS (CSS Variable Scoping):** Thay vì khai báo `:root { --indigo: ... }` trong CSS của landing page, hãy bọc chúng trong một class cụ thể, ví dụ:
  ```css
  .lp-theme {
      --indigo: #D97757;
  }
  ```
- Sau đó, bọc component `page.tsx` của Landing Page trong thẻ `<main className="lp-theme">` để màu sắc không bị rò rỉ (leak) ra ngoài làm sai màu của Global Header/Footer.

## 5. Tái sử dụng Component (DRY)
- Khi phát hiện các khối nội dung (section) xuất hiện ở nhiều nơi (ví dụ: khối "Công cụ AI bạn sẽ làm chủ"), tuyệt đối không được sao chép/hardcode lại mã HTML.
- Phải tạo (hoặc tái sử dụng) các Component độc lập trong thư mục `src/components/shared/` (ví dụ: `ToolsAISection.tsx`) và gọi Component đó vào trang. Điều này đảm bảo khi Trang chủ thay đổi, tất cả Landing Page khóa học đều tự động cập nhật đồng bộ.

## 6. Xử lý Cấu trúc HTML -> JSX
Khi được giao task Migrate file HTML sang Next.js:
- Đổi `class=` thành `className=`.
- Đóng toàn bộ thẻ `<img>` thành `<img />`, `<br>` thành `<br />`.
- Đổi các ký tự comment `<!-- -->` thành `{/* */}`.

> AI Agent khi đọc SOP này, vui lòng trả lời "Đã hiểu SOP Landing Page" trước khi bắt đầu viết code!

## 7. Quy định tạo ảnh Thumbnail tự động (Cinematic Thumbnail)
Khi khởi tạo một khóa học mới hoặc làm việc với danh sách khóa học, AI có trách nhiệm TỰ ĐỘNG GỢI Ý và THỰC HIỆN tạo ảnh Thumbnail cho khóa học thông qua tool `generate_image`.

**Thông số kỹ thuật bắt buộc cho ảnh Thumbnail:**
- **Nhân vật đại diện:** Bắt buộc sử dụng file ảnh tác giả (ví dụ: `public/images/tung-soc-son.webp`).
- **Logo AI:** Lấy một logo AI phù hợp với khóa học từ thư mục `public/images/logo-ai/` (ưu tiên định dạng `.webp`).
- **Prompt tiêu chuẩn:**
  ```text
  A cinematic, premium YouTube thumbnail featuring the person in the provided reference image. Close-up of his face with an extremely excited expression, making a pointing gesture. He is holding the provided [TÊN LOGO] logo. Bold, massive, glowing 3D text headline reading "[HEADLINE KHÓA HỌC]". The background should be a dynamic, cinematic, futuristic environment using a [MÀU SẮC CHỦ ĐẠO] color palette. Cinematic edge lighting, highly detailed, 16:9 aspect ratio.
  ```
- **Quy trình:**
  1. AI sử dụng tool `generate_image`, truyền vào mảng `ImagePaths` gồm (1) đường dẫn tuyệt đối ảnh nhân vật và (2) ảnh logo.
  2. Copy ảnh đã tạo từ thư mục artifact sang `public/images/courses/`.
  3. Cập nhật đường dẫn ảnh mới tạo vào thẻ `<img src="..." />` hoặc mảng `courses` trong trang khóa học.

## 8. Quy định tạo ảnh chia sẻ MXH (OG Image / Social Thumbnail)
Khi khởi tạo hoặc tối ưu trang chủ (Home Page) hoặc các Landing Page chính, AI cần tự động tạo ảnh chia sẻ mạng xã hội (Open Graph Image) để đảm bảo hiển thị chuẩn SEO/MXH.

**Thông số kỹ thuật bắt buộc cho ảnh OG Image:**
- **Kích thước / Tỷ lệ:** Bắt buộc 1200x630px (16:9 aspect ratio).
- **Nhân vật đại diện:** Bắt buộc sử dụng file ảnh tác giả (ví dụ: `public/images/tung-soc-son.webp`).
- **Nội dung chữ (Text):** Gắn Text chào mừng nhỏ (VD: "CHÀO BẠN") và Headline lớn dạng Big Text phát sáng (VD: "TÔI LÀ TÙNG").
- **Phong cách:** Cinematic, Premium Dark Mode, glowing accents (Tím/Cam neon), High-tech background.
- **Quy trình:**
  1. Sử dụng tool `generate_image` với prompt cấu trúc như trên và kèm đường dẫn reference image.
  2. Copy ảnh vào thư mục `public/images/` (VD: `public/images/og-home.png`).
  3. Cập nhật file `page.tsx` hoặc `layout.tsx` thêm thuộc tính `openGraph.images` và `twitter.images` trong block `export const metadata`.
