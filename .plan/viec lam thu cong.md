Để tôi scan toàn bộ blog posts và course pages trước khi bắt đầu:

Listed directory blog
Listed directory course
Ran command: `for f in /Volumes/SSD\ BIG/Project/DICH\ VU\ KH\ 2026/TVT\ AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform/src/content/blog/*.mdx; do echo "=== $(basename $f) ==="; head -10 "$f" | grep -E "^tags:|^date:|^title:"; done`
Listed directory ai-coaching
Listed directory claude-master

Đủ dữ liệu. Đây là task lớn — tôi có chiến lược thông minh hơn để không phải edit 28 file MDX riêng lẻ:

**Cho CTA block:** Inject trực tiếp vào blog post template (1 lần, affect tất cả 28 bài)  
**Cho cluster tags:** Tạo utility `inferCluster()` từ tags hiện có (zero MDX edits)

Bắt đầu làm song song:

Listed directory vibe-coding
Viewed page.tsx:1-800

Đủ context. Bắt đầu implement tất cả 3 tasks song song — chiến lược thông minh:

**Task 1 (CTA blocks):** Tạo `PostCTA` component inject vào blog template (1 file, affect 28 bài)  
**Task 2 (/booking page):** Tạo page mới  
**Task 3 (Course schema):** Thêm JsonLd vào vibe-coding page (làm đại diện, pattern tương tự cho các trang khác)

---

### Bước 1 — Tạo PostCTA component + cluster inference utility

Created cluster.ts
Created PostCTA.tsx

Inject PostCTA vào blog post template — 1 edit, affect tất cả 28 bài:

Edited page.tsx

Task 1 xong. Sang Task 2 — `/booking` page và Task 3 (Course schema) song song:

Created page.tsx

Thêm `/booking` vào sitemap và làm Task 3 — Course schema song song:

Edited sitemap.ts

Task 3 — Thêm Course schema vào các `/course/*` pages. Xem layout pattern của các trang course:

Viewed layout.tsx:1-31
Viewed page.tsx:1-192

`course/page.tsx` là `'use client'` — không thể thêm schema trực tiếp. Cách tốt nhất là thêm JsonLd vào `layout.tsx` của từng course. Làm cho tất cả course layouts:

Edited layout.tsx

Làm tương tự cho các course layouts còn lại — check chúng trước:

Viewed layout.tsx:1-31
Viewed layout.tsx:1-31

Update tất cả 2 course layouts còn lại song song:

Edited layout.tsx
Edited layout.tsx

Final type-check để confirm tất cả clean:

Ran command: `/Users/phiyen/.nvm/versions/node/v22.17.1/bin/node /Volumes/SSD\ BIG/Project/DICH\ VU\ KH\ 2026/TVT\ AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform/node_modules/.bin/tsc --noEmit 2>&1`

**TypeScript clean — exit code 0.** Tất cả 3 tasks hoàn thành.

---

## Tóm tắt — Tuần 2 hoàn thành ✅

### Files mới tạo

| File | Mô tả |
|------|-------|
| `src/lib/cluster.ts` | `inferCluster()` — map tags → cluster A-G, không cần edit MDX |
| `src/components/blog/PostCTA.tsx` | Smart CTA component — 7 variants, auto-select theo cluster |
| `src/app/booking/page.tsx` | `/booking` page — premium dark design, Calendly placeholder, JSON-LD schema |

### Files đã sửa

| File | Thay đổi |
|------|----------|
| `blog/[slug]/page.tsx` | Inject `<PostCTA>` sau MDX content — affect **toàn bộ 28 bài** tự động |
| `course/vibe-coding/layout.tsx` | Course schema + fix canonical absolute + OG images |
| `course/ai-coaching/layout.tsx` | Course schema + fix canonical absolute + OG images |
| `claude-master/layout.tsx` | Course schema + fix canonical absolute + OG images |
| `sitemap.ts` | Thêm `/booking` với `priority: 0.9` |

### ⚠️ Việc cần làm thủ công

**Kích hoạt Calendly** — khi đã có link Calendly/Cal.com, mở `src/app/booking/page.tsx` và:

```tsx
// Uncomment block này (line ~180) và điền URL thật:
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/toilatung/discovery-call"  // ← URL thật
  style={{ minWidth: '320px', height: '700px' }}
/>
```

Đồng thời thêm Calendly script vào `layout.tsx`:
```tsx
<Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
```

### Gợi ý tiếp theo

- `/course/landing-page` và `/course/phunulamchuai` layouts — thêm schema theo pattern tương tự
- Viết **Pillar G** (`kiem-tien-voi-ai-2026`) — bài content có ROI cao nhất

Viewed viec%20lam%20thu%20cong.md:78-112

Audit trước, push sau:

Ran command: `cd "/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform" && git status && echo "---" && git diff --stat HEAD`
Ran command: `cd "/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform" && git diff src/app/layout.tsx`

Audit clean — đúng với kế hoạch. Push:

Ran command: `cd "/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform" && git add -A && git status --short`
Ran command: `cd "/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform" && git commit -m "feat: Week 1-2 SEO — canonical, schema, GA4, PostCTA, /booking page

Technical SEO (Week 1):
- Fix canonical + og:url trên blog posts (generateMetadata)
- Thêm JSON-LD Article + BreadcrumbList schema cho từng bài blog
- Thêm GA4 script (conditional on NEXT_PUBLIC_GA_MEASUREMENT_ID)
- Fix blog index canonical + full OG metadata

Content Cluster & CTA (Week 2):
- Tạo inferCluster() utility — auto-map tags -> cluster A-G
- Tạo PostCTA component — 7 CTA variants, inject vào blog template (affect 28 bài)
- Tạo /booking page — premium design, Calendly placeholder, JsonLd Course schema
- Course schema cho vibe-coding, ai-coaching, claude-master layouts
- Fix canonical relative -> absolute trên course layouts
- Thêm /booking vào sitemap với priority 0.9

New files:
- src/lib/cluster.ts
- src/components/blog/PostCTA.tsx
- src/components/seo/JsonLd.tsx
- src/app/booking/page.tsx
- .plan/toilatung_SEO_Strategy_v1.0.md"`
Ran command: `cd "/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_tools/landing-page-builder/toilatung-platform" && git push origin main 2>&1`

✅ **Push thành công** — `f603f80..f7965d7 main → main`

---

## Audit & Push Summary

### Commit `f7965d7`

**13 files changed** | **+1,581 lines** | **-24 lines**

| Status | File | Nội dung |
|--------|------|---------|
| `M` | `blog/[slug]/page.tsx` | Canonical, og:url, Article schema, PostCTA inject |
| `M` | `blog/page.tsx` | Canonical, full OG metadata |
| `M` | `claude-master/layout.tsx` | Course schema, canonical absolute, OG images |
| `M` | `course/ai-coaching/layout.tsx` | Course schema, canonical absolute, OG images |
| `M` | `course/vibe-coding/layout.tsx` | Course schema, canonical absolute, OG images |
| `M` | `layout.tsx` | GA4 script |
| `M` | `sitemap.ts` | /booking priority 0.9 |
| `A` | `src/lib/cluster.ts` | inferCluster() utility |
| `A` | `src/components/blog/PostCTA.tsx` | Smart CTA 7 variants |
| `A` | `src/components/seo/JsonLd.tsx` | JSON-LD builder |
| `A` | `src/app/booking/page.tsx` | /booking page |
| `A` | `.plan/toilatung_SEO_Strategy_v1.0.md` | SEO strategy plan |
| `A` | `.plan/viec lam thu cong.md` | Manual tasks doc |

---

### Checklist còn lại (để khi có time)

- [ ] Điền `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` vào `.env.local`
- [ ] Setup Calendly → uncomment widget trong `/booking/page.tsx`
- [ ] Thêm Course schema cho `/course/landing-page` và `/course/phunulamchuai`
- [ ] Viết **Pillar G** — `kiem-tien-voi-ai-2026` (bài ROI cao nhất)