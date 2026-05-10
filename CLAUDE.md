@AGENTS.md

# toilatung-platform

Next.js 16 platform cho **toilatung.com** — blog, courses, và lead capture của TVT Agency.

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # thêm GOOGLE_GEMINI_API_KEY
npm run dev                         # localhost:3000
```

## Commands quan trọng

| Command | Dùng khi |
|---------|----------|
| `npm run dev` | Phát triển local |
| `npm run build` | Kiểm tra build trước deploy |
| `npm run generate-covers` | Tạo ảnh cover cho bài chưa có |
| `npm run generate-cover -- <slug>` | Tạo ảnh cho 1 bài cụ thể |

## Thêm bài viết mới

1. Tạo `src/content/blog/<slug>.mdx` với frontmatter đúng format
2. Chạy `npm run generate-cover -- <slug>` để tạo cover image
3. Kiểm tra tại `localhost:3000/blog/<slug>`

Xem chi tiết:
- **AGENTS.md** (SOP-01 → SOP-07)
- **.claude/SOP_Landing_Page.md** (Quy trình chuẩn cho Landing Page Builder)
- **.claude/SKILLS.md** (Danh sách các Skill AI `@landing-page-builder`, `@ui-animator`)
