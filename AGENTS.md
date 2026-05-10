<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Standard Operating Procedures (SOPs) — toilatung-platform

## Nền tảng tổng quan

- **Framework:** Next.js 16 (App Router, TypeScript strict)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` — không dùng `@tailwind base/components/utilities`)
- **Blog engine:** MDX files trong `src/content/blog/`, render bằng `next-mdx-remote`
- **Image store:** `public/images/blog/` — format `.webp`, kích thước `1200×630px`
- **Font:** Inter (Vietnamese subset) + Fira Code (mono)

---

## SOP-01: Tạo Bài Viết Blog Mới

### Bước 1 — Tạo MDX file
```
src/content/blog/<slug-tieng-viet>.mdx
```
Slug: `kebab-case`, tiếng Việt không dấu, mô tả ngắn gọn nội dung.

### Bước 2 — Frontmatter bắt buộc
```yaml
---
title: "Tiêu đề SEO, 50–60 ký tự"
description: "Mô tả 140–160 ký tự, có keyword chính"
date: "YYYY-MM-DD"
coverImage: "/images/blog/<slug>.webp"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Tùng"
---
```

### Bước 3 — Cấu trúc nội dung chuẩn SEO
```
# H1 — Giống title (1 lần duy nhất)
[intro paragraph — 100–150 chữ, có keyword]

## H2 — Phần chính 1
[content]

## H2 — Phần chính 2
[content]

...

## Kết luận
[summary + CTA nhẹ]
```

### Bước 4 — Tạo cover image
Sau khi tạo MDX, chạy:
```bash
npm run generate-cover <slug>
# hoặc: node scripts/generate-cover.mjs <slug>
```
Script tự động:
- Tạo ảnh 1200×630px bằng Gemini AI
- Lưu tại `public/images/blog/<slug>.webp`
- Cập nhật `coverImage` trong MDX frontmatter → `.webp`

---

## SOP-02: Tạo Ảnh Cover Blog (Image Generation)

### Quy tắc cứng
- **Kích thước:** `1200×630px` (Open Graph chuẩn) — không thay đổi
- **Format:** `.webp` — không dùng `.png`, `.jpg`, `.jpeg`
- **Thư mục:** `public/images/blog/` — không lưu nơi khác
- **Tên file:** khớp đúng với slug của bài viết

### Chạy script
```bash
# Tạo cho tất cả bài chưa có ảnh .webp
npm run generate-covers

# Tạo cho một bài cụ thể
npm run generate-cover -- vibe-coding-la-gi

# Xem danh sách bài chưa có ảnh (không tạo)
node scripts/generate-cover.mjs --dry-run

# Tạo lại tất cả (overwrite)
node scripts/generate-cover.mjs --all
```

### Yêu cầu môi trường
```
# .env.local
GOOGLE_GEMINI_API_KEY=AIzaSy...
GEMINI_MODEL=gemini-2.0-flash-preview-image-generation  # optional override
```

### Style guide cho prompt ảnh
Khi viết prompt thủ công (không dùng script):
- Background tối (`#000` → `#0a0a0a`)
- Màu accent: tím (`#7b61ff`), đỏ (`#ff375f`), xanh emerald (`#34d399`)
- Phong cách: dark premium SaaS, glassmorphism, cinematic
- **KHÔNG có chữ/text trên ảnh** — blog tự overlay title

---

## SOP-03: SEO & Metadata

### Checklist trước khi publish
- [ ] `title`: 50–60 ký tự, có keyword chính ở đầu
- [ ] `description`: 140–160 ký tự, có keyword, có call-to-value
- [ ] `coverImage`: trỏ đúng file `.webp` tồn tại trong `public/`
- [ ] `date`: format `YYYY-MM-DD`, không để trống
- [ ] `tags`: 2–4 tags, viết hoa chữ đầu
- [ ] Slug URL: ngắn, mô tả, không dấu
- [ ] H1 trong nội dung khớp với `title`
- [ ] Ít nhất 1 internal link đến course/trang khác

### Open Graph tự động
File `src/app/blog/[slug]/page.tsx` đã xử lý OG tags động — không cần thêm thủ công.

---

## SOP-04: Code Standards

### TypeScript
- Không dùng `any` trừ MDX component props (đã có `/* eslint-disable */`)
- Interface trước Type nếu có thể extend
- Không để `TODO:` trong code — giải quyết ngay hoặc tạo issue

### Tailwind CSS v4
- Dùng `@theme inline { ... }` trong `globals.css` để định nghĩa custom tokens
- Không import `tailwind.config.js` — Tailwind v4 đọc trực tiếp từ CSS
- Class utility thay vì custom CSS khi có thể

### Next.js App Router
- Server Components là default — chỉ thêm `'use client'` khi cần hook/event
- `generateStaticParams()` cho tất cả dynamic routes
- `generateMetadata()` cho tất cả pages có SEO requirements

### Ảnh
- Blog cover: dùng `<img>` với `// eslint-disable-next-line @next/next/no-img-element` (intentional — Next.js Image không hỗ trợ tốt với dynamic src từ MDX)
- Static assets khác: dùng Next.js `<Image>` từ `next/image`

---

## SOP-05: Workflow Thêm Package

1. Kiểm tra xem Next.js/React đã có built-in chưa
2. Chọn package nhỏ nhất giải quyết được vấn đề
3. `npm install <package>` — không dùng `--force` hay `--legacy-peer-deps`
4. Nếu chỉ dùng trong scripts (không phải Next.js app): thêm vào `devDependencies`

---

## SOP-06: Deploy Checklist

```bash
# 1. Build kiểm tra
npm run build

# 2. Lint
npm run lint

# 3. Kiểm tra tất cả coverImage file tồn tại
node -e "
const {getAllPosts} = await import('./src/lib/mdx.ts');
const posts = getAllPosts();
posts.forEach(p => {
  if (p.coverImage) {
    const exists = require('fs').existsSync('./public' + p.coverImage);
    if (!exists) console.log('MISSING:', p.coverImage, p.slug);
  }
});
"

# 4. Commit với message theo format:
# feat: <mô tả ngắn>
# fix: <mô tả fix>
# content: <thêm bài viết mới>
```

---

## SOP-07: Cấu trúc Thư mục

```
toilatung-platform/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx          ← Blog index
│   │   │   └── [slug]/page.tsx   ← Blog post detail
│   │   ├── course/               ← Course landing pages
│   │   ├── api/leads/route.ts    ← Lead capture API
│   │   └── layout.tsx            ← Root layout
│   ├── components/layout/        ← Header, Footer, LayoutShell
│   ├── content/blog/             ← MDX blog posts
│   └── lib/
│       └── mdx.ts                ← Blog data access layer
├── public/
│   └── images/blog/              ← Cover images (.webp, 1200×630px)
├── scripts/
│   └── generate-cover.mjs        ← Gemini image generation script
└── .env.local                    ← GOOGLE_GEMINI_API_KEY (không commit)
```
