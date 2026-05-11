# CHIẾN LƯỢC SEO & MONETIZATION — toilatung.com

**Owner:** Nguyễn Thanh Tùng  
**Domain:** toilatung.com  
**Status:** DRAFT — Awaiting Founder Review  
**Date:** 2026-05-11  
**Scope:** SEO Direction, Keyword Strategy, Topic Cluster Architecture, Content Plan, Monetization Channels

---

## 1. ĐÁNH GIÁ HIỆN TRẠNG (SITE AUDIT SNAPSHOT)

### 1.1 Những gì đã có

- Domain public, Next.js build, mobile responsive, dark UI premium
- Google site verification đã cài
- Meta tags chuẩn: OG, Twitter Card, canonical, robots index/follow
- 28 bài blog đã publish (7–10/5/2026), chủ yếu Vibe Coding + Claude + AI tools
- 6 trang sản phẩm/khóa học: AI Coaching 1-1, Vibe Coding, Phụ Nữ Làm Chủ AI, Landing Page Course, Claude Masterclass, Claude Code Master
- Kho Prompt (prompt library) — chưa rõ cấu trúc SEO
- Trang "Về Tùng" — personal bio

### 1.2 Vấn đề SEO cần xử lý ngay

| Vấn đề | Chi tiết |
|--------|---------|
| Canonical sai | Tất cả trang blog đều trỏ canonical về `https://toilatung.com` thay vì URL riêng từng bài → Google không biết bài nào là bài chính |
| Meta description blog trùng | Tất cả trang blog dùng chung 1 meta description = trang chủ |
| OG:URL trùng | og:url của mọi trang đều = `https://toilatung.com` |
| Pagination không canonical | Trang blog?page=2,3,4,5 cùng canonical = trang chủ |
| Thiếu Schema markup | Không có Article, Course, FAQ, BreadcrumbList structured data |
| Blog mới publish dồn | 28 bài publish trong 3 ngày (7–10/5) — Google có thể đánh giá chất lượng thấp |
| Internal linking yếu | Chưa thấy hệ thống internal link giữa các bài blog |
| Sitemap | Chưa xác nhận sitemap.xml có tồn tại và submit GSC |

### 1.3 Điểm mạnh SEO

- Nội dung chuyên sâu, góc nhìn thực chiến (không AI-generated thuần)
- Founder authority rõ ràng (16 năm + case study)
- Niche cực kỳ rõ: AI thực chiến cho người Việt
- Domain sạch, không spam history
- Technical stack tốt (Next.js = SSR/SSG friendly)

---

## 2. CHIẾN LƯỢC TỔNG THỂ

### 2.1 Định vị SEO

**toilatung.com = Hub kiến thức AI thực chiến bằng tiếng Việt**

Không cạnh tranh với:
- Trang tin tổng hợp (VnExpress, Quantrimang) → họ mạnh traffic nhưng nông chuyên môn
- Trang dịch/tổng hợp tool (CodeGym, TopDev) → họ mạnh SEO kỹ thuật nhưng không có case thật
- Blog cá nhân AI Việt khác → phần lớn demo, ít hệ thống

Cạnh tranh bằng:
- **Depth** — bài viết có framework, SOP, case study thật
- **Authority** — Founder làm thật, show process thật
- **Monetization logic** — mỗi bài phục vụ funnel cụ thể
- **GEO optimization** — tối ưu cho AI search (Perplexity, Google SGE, ChatGPT Search)

### 2.2 Mô hình SEO Funnel

```
[TOFU — Awareness]
"AI agent là gì", "Vibe coding là gì", "Claude Code là gì"
→ Traffic + Email capture + Brand awareness
     ↓
[MOFU — Consideration]  
"Cách dùng Claude Code build landing page", "So sánh Cursor vs Claude Code"
→ Authority + Prompt library upsell + Affiliate
     ↓
[BOFU — Decision]
"Khóa học Vibe Coding", "Coaching AI 1-1 có hiệu quả không"
→ Course enrollment + Booking + Service inquiry
```

---

## 3. KEYWORD STRATEGY & TOPIC CLUSTERS

### 3.1 Cluster Architecture (7 Pillar Topics)

Mỗi cluster có 1 Pillar Page (bài trụ 2000–3000 từ) + 5–8 Supporting Articles + Internal linking 2 chiều.

---

#### CLUSTER A — AI AGENT & AGENTIC AI

**Pillar:** `ai-agent-la-gi` — "AI Agent Là Gì? Hướng Dẫn Toàn Diện Cho Người Việt 2026"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| A1 | ai agent là gì | Pillar — Evergreen | TOFU | Affiliate tool + Email |
| A2 | agentic ai là gì khác gì generative ai | Supporting — So sánh | TOFU | Affiliate |
| A3 | cách xây dựng ai agent cho doanh nghiệp nhỏ | How-to | MOFU | Service inquiry |
| A4 | multi agent system là gì crewai autogen | Tutorial | MOFU | Course upsell |
| A5 | ai agent marketing tự động hóa content | Case study | MOFU | Service + Affiliate |
| A6 | ai agent customer support chatbot | Use case | MOFU | Affiliate (Tidio, Intercom) |
| A7 | rủi ro triển khai ai agent và cách phòng tránh | Analysis | TOFU | Authority |

**Search volume signal:** "AI agent" và "Agentic AI" đang là top search trend 2026 tại VN. Đối thủ chính: cogover.com, ocd.vn, redai.vn — tất cả đều B2B enterprise, chưa ai chiếm góc "thực chiến cho SME/cá nhân".

---

#### CLUSTER B — VIBE CODING & CLAUDE CODE

**Pillar:** `vibe-coding-huong-dan-toan-dien` — "Vibe Coding: Hướng Dẫn Toàn Diện Từ Zero Đến Production 2026"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| B1 | vibe coding là gì hướng dẫn cho người mới | Pillar | TOFU | Course upsell |
| B2 | claude code hướng dẫn cài đặt sử dụng | Tutorial | TOFU | Affiliate (Anthropic API) |
| B3 | claude code vs cursor vs copilot so sánh 2026 | Comparison | MOFU | Affiliate |
| B4 | cách build landing page bằng claude code | Project tutorial | MOFU | Course: Landing Page |
| B5 | director mindset vibe coding | Framework | MOFU | Coaching upsell |
| B6 | quản lý context window claude hiệu quả | Advanced | MOFU | Claude Masterclass |
| B7 | deploy app từ claude code lên netlify | Tutorial | MOFU | Course: Vibe Coding |
| B8 | vibe coding cho người không biết lập trình | Beginner | TOFU | Course: Vibe Coding |

**Competitive gap:** toilatung.com đã có 5–6 bài trong cluster này nhưng cần restructure. Đối thủ: tnd.vn, codegym.vn, viblo.asia — nhưng chưa ai có hệ khóa học đi kèm.

---

#### CLUSTER C — AI TOOLS & WORKFLOW

**Pillar:** `ai-tools-workflow-2026` — "Bộ Công Cụ AI Cho Dân Không-Kỹ-Thuật: Chọn Đúng, Dùng Đúng, Tạo Kết Quả"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| C1 | chatgpt vs claude vs gemini so sánh 2026 | Comparison | TOFU | Affiliate |
| C2 | cách dùng elevenlabs tạo podcast bằng ai | Tutorial | MOFU | Affiliate (ElevenLabs) |
| C3 | canva ai thiết kế không cần designer | Tutorial | MOFU | Affiliate (Canva Pro) |
| C4 | make.com n8n automation workflow cho marketing | Tutorial | MOFU | Affiliate + Service |
| C5 | ai content workflow tự động hóa từ a-z | System guide | MOFU | Coaching upsell |
| C6 | prompt engineering thực chiến | Framework | MOFU | Prompt Library |
| C7 | cách chọn ai tool phù hợp với mình | Decision guide | TOFU | All products |

---

#### CLUSTER D — AI MARKETING & CONTENT

**Pillar:** `ai-marketing-he-thong` — "Xây Hệ Marketing Bằng AI: Từ Content Đến Funnel Cho SME Việt Nam"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| D1 | cách viết content marketing bằng ai | How-to | TOFU | Coaching + Affiliate |
| D2 | ai viết kịch bản video ngắn viral | Tutorial | MOFU | Course upsell |
| D3 | landing page chuyển đổi cao thiết kế bằng ai | Case study | MOFU | Service: LP design |
| D4 | seo và geo optimization 2026 | Framework | MOFU | Service + Authority |
| D5 | email marketing automation bằng ai | Tutorial | MOFU | Affiliate (Mailchimp, Brevo) |
| D6 | cro tối ưu tỷ lệ chuyển đổi bằng ai | Analysis | MOFU | Service inquiry |

---

#### CLUSTER E — AI CHO PHỤ NỮ & NGƯỜI MỚI

**Pillar:** `hoc-ai-tu-dau-cho-nguoi-moi` — "Học AI Từ Đâu? Lộ Trình 21 Ngày Cho Người Hoàn Toàn Mới Bắt Đầu"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| E1 | học ai từ đâu cho người mới | Pillar | TOFU | Free course signup |
| E2 | phụ nữ học ai kiếm tiền online | Guide | TOFU | Free course + Affiliate |
| E3 | cách dùng chatgpt cho công việc hàng ngày | Beginner tutorial | TOFU | Free course |
| E4 | affiliate marketing bằng ai cho người mới | How-to | MOFU | Affiliate training |
| E5 | tạo nội dung tiktok reels bằng ai | Tutorial | MOFU | Course upsell |

**Strategic note:** Cluster này phục vụ traffic volume lớn + social sharing. Audience phụ nữ 8x-9x là segment ít cạnh tranh trên SEO tiếng Việt.

---

#### CLUSTER F — DESIGN & UI VỚI AI

**Pillar:** `thiet-ke-ui-bang-ai` — "Thiết Kế UI/UX Chuyên Nghiệp Bằng AI Mà Không Cần Figma"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| F1 | thiết kế web bằng ai không cần code | Pillar | TOFU | Course: Vibe Coding |
| F2 | dark ui design tailwind css | Tutorial | MOFU | Claude Design Master |
| F3 | design system bằng ai | Framework | MOFU | Service + Course |
| F4 | claude design là gì hướng dẫn | Tutorial | MOFU | Claude Design Master |
| F5 | handoff design sang code ai workflow | Process | MOFU | Course upsell |

---

#### CLUSTER G — KIẾM TIỀN VỚI AI (MONETIZATION)

**Pillar:** `kiem-tien-voi-ai-2026` — "Cách Kiếm Tiền Với AI 2026: 7 Mô Hình Thực Tế Cho Người Việt"

| # | Keyword mục tiêu | Loại bài | Funnel | Monetization |
|---|------------------|----------|--------|-------------|
| G1 | cách kiếm tiền với ai 2026 | Pillar | TOFU | All revenue streams |
| G2 | freelance ai services kiếm tiền | Guide | MOFU | Coaching upsell |
| G3 | bán khóa học online bằng ai | Case study | MOFU | Authority + Booking |
| G4 | xây one person agency với ai | Case study | MOFU | Service + Coaching |
| G5 | affiliate marketing ai tools | Tutorial | MOFU | Affiliate revenue |
| G6 | tạo sản phẩm số bằng ai bán online | How-to | MOFU | Digital products |

---

## 4. MONETIZATION MAP

### 4.1 Revenue Streams qua SEO

| Stream | Mô hình | Cluster phục vụ | Priority |
|--------|---------|----------------|----------|
| **Khóa học** | Bán trực tiếp trên site (5M/course) | B, D, E, F | 🔴 Cao nhất |
| **Coaching 1-1** | Booking qua Zalo/form (5M/4 buổi) | B, C, D, G | 🔴 Cao nhất |
| **Affiliate AI tools** | Hoa hồng từ referral link | A, B, C | 🟡 Trung bình |
| **Prompt Library** | Bán prompt packs / subscription | C, D | 🟡 Trung bình |
| **TVT Agency services** | Referral từ toilatung → tvtagency | D, F | 🟡 Trung bình |
| **Digital products** | E-book, template, SOP pack | B, G | 🟢 Dài hạn |
| **Sponsored content** | Bài review tool có tài trợ | A, C | 🟢 Dài hạn |

### 4.2 Affiliate Programs ưu tiên

| Tool | Program | Commission ước tính | Cluster |
|------|---------|---------------------|---------|
| Anthropic API (Claude) | Direct / Partner | Chưa rõ — explore | B |
| Canva Pro | Canva Affiliates | 15–36% recurring | C |
| ElevenLabs | ElevenLabs Affiliate | 22% recurring | C |
| Make.com | Make Partner | 20% recurring | C, D |
| Cursor | Cursor Referral | Chưa rõ | B |
| Notion | Notion Ambassador | Commission + perks | C |
| Netlify | Netlify Partner | Tiered | B |
| Hostinger/Cloudways | Hosting affiliate | $50–150/sale | B, F |

### 4.3 Booking & Service Integration

- Tích hợp **Calendly** hoặc **Cal.com** cho booking Coaching 1-1
- Tạo trang `/booking` với schema Event + Product
- CTA từ mỗi bài blog MOFU/BOFU → booking page
- Zalo OA integration cho retargeting

---

## 5. CONTENT PLAN — 90 NGÀY ĐẦU

### 5.1 Phase 1: Fix Technical SEO (Tuần 1–2)

**Ưu tiên tuyệt đối — không có bước này thì content vô nghĩa:**

- [ ] Fix canonical tag: mỗi bài blog phải có canonical = URL chính nó
- [ ] Fix meta description: mỗi bài 1 meta description riêng (150–160 ký tự)
- [ ] Fix og:url: mỗi trang og:url = canonical
- [ ] Tạo sitemap.xml và submit Google Search Console
- [ ] Cài Schema markup: Article (blog), Course (khóa học), FAQ, BreadcrumbList
- [ ] Kiểm tra robots.txt
- [ ] Setup Google Analytics 4
- [ ] Tạo trang /blog/[category] cho từng cluster

### 5.2 Phase 2: Pillar Content (Tuần 3–6)

Publish 3 Pillar Pages đầu tiên (ưu tiên cluster có monetization rõ nhất):

| Tuần | Pillar | Target keyword | Word count |
|------|--------|---------------|------------|
| 3 | Cluster G | cách kiếm tiền với ai 2026 | 2500+ |
| 4 | Cluster A | ai agent là gì | 2500+ |
| 5 | Cluster B | vibe coding hướng dẫn toàn diện | 3000+ |

Mỗi Pillar viết theo Antigravity Framework: Answer-first → Quick Answer Box → Problem → Framework → Checklist → FAQ → CTA.

### 5.3 Phase 3: Supporting Content (Tuần 5–12)

Publish 2 bài/tuần, luân phiên giữa các cluster:

| Tuần | Bài 1 | Bài 2 |
|------|-------|-------|
| 5 | A2 — Agentic AI vs GenAI | G4 — One Person Agency |
| 6 | B2 — Claude Code setup | C1 — ChatGPT vs Claude vs Gemini |
| 7 | E1 — Học AI từ đầu (Pillar E) | A3 — AI Agent cho SME |
| 8 | B4 — Build LP bằng Claude Code | D1 — Content marketing bằng AI |
| 9 | C2 — ElevenLabs podcast | G2 — Freelance AI |
| 10 | D4 — SEO & GEO 2026 (Pillar D) | B3 — Cursor vs Claude Code |
| 11 | E2 — Phụ nữ học AI kiếm tiền | A5 — AI Agent marketing |
| 12 | F1 — Thiết kế UI bằng AI (Pillar F) | C4 — Make.com automation |

### 5.4 Xử lý 28 bài blog hiện tại

28 bài đã publish cần được:

1. **Audit lại canonical + meta** (ưu tiên nhất)
2. **Gán vào đúng cluster** — thêm category tag
3. **Bổ sung internal links** — mỗi bài 2 link (1 cùng cluster, 1 khác cluster)
4. **Thêm Quick Answer Box** vào 300 từ đầu
5. **Thêm FAQ section** — 3–5 câu hỏi có structured data
6. **Thêm CTA block** phù hợp funnel stage
7. **Spread publish date** — nếu CMS cho phép, giãn ngày publish ra để tránh spam signal

---

## 6. ON-PAGE SEO TEMPLATE

Mỗi bài viết mới phải tuân thủ:

```
---
title: [H1 chứa keyword, ≤65 ký tự]
description: [Meta description 150-160 ký tự, có keyword + micro-CTA]
canonical: https://toilatung.com/blog/[slug]
og:url: https://toilatung.com/blog/[slug]
pubDate: YYYY-MM-DD
keyword: [từ khóa chính]
cluster: [A/B/C/D/E/F/G]
schema: Article + FAQ + BreadcrumbList
---

[QUICK ANSWER BOX] ← Trong 300 từ đầu
[PROBLEM DIAGNOSIS]
[MAIN FRAMEWORK — H2/H3 có keyword]
[CHECKLIST]
[FAQ — 3-5 câu, JSON-LD ready]
[CTA BLOCK — Soft/Medium/Strong]
[INTERNAL LINKS — 2 link: 1 cùng cluster, 1 khác cluster]
```

---

## 7. GEO (GENERATIVE ENGINE OPTIMIZATION)

### 7.1 Tại sao GEO quan trọng cho toilatung.com

- Perplexity, Google SGE, ChatGPT Search đang trả lời query bằng tiếng Việt
- Người dùng hỏi "cách dùng Claude Code" → AI search sẽ cite nguồn có câu trả lời rõ nhất
- toilatung.com có thể trở thành cited source nếu nội dung Answer-first

### 7.2 Checklist GEO cho mỗi bài

- [ ] Quick Answer Box trả lời thẳng trong 2–3 câu
- [ ] Mỗi H2 có câu tóm tắt đầu tiên
- [ ] Dùng ngôn ngữ plain, tránh jargon thừa
- [ ] FAQ dùng cú pháp Q&A rõ ràng
- [ ] Có structured data JSON-LD (Article + FAQ)
- [ ] Có author markup (Nguyễn Thanh Tùng, toilatung.com)
- [ ] Bài viết có original insight / framework / data — không chỉ tổng hợp

---

## 8. LINK BUILDING STRATEGY

### 8.1 Internal linking

- Mỗi Pillar page link đến tất cả Supporting articles trong cluster
- Mỗi Supporting article link ngược về Pillar + 1 bài khác cluster
- Trang khóa học link đến bài blog liên quan và ngược lại

### 8.2 External link building

| Kênh | Hành động | Timeline |
|------|-----------|----------|
| Facebook cá nhân | Mỗi bài blog mới → share kèm insight ngắn | Ongoing |
| Viblo.asia | Cross-post bài kỹ thuật (canonical về toilatung) | Monthly |
| Tinhte.vn | Comment chuyên sâu trong topic AI, link profile | Ongoing |
| Guest post | Viết cho blog marketing/tech VN (canonical về site) | Quarterly |
| YouTube (tương lai) | Video tutorial embed vào bài blog | Q3 2026 |

---

## 9. KPI & TRACKING

### 9.1 Metrics theo phase

| Phase | KPI | Target 90 ngày |
|-------|-----|----------------|
| Technical | Core Web Vitals Pass | 100% pages |
| Technical | GSC Coverage errors | 0 |
| Traffic | Organic sessions/tháng | 1,000 → 5,000 |
| Content | Bài blog published | 28 → 50+ |
| Ranking | Keywords top 10 | 5–10 keywords |
| Revenue | Course enrollments từ organic | 3–5/tháng |
| Revenue | Affiliate clicks | Track via UTM |
| Engagement | Avg time on page | > 3 phút |
| GEO | AI search citations | Monitor Perplexity/SGE |

### 9.2 Tools theo dõi

- **Google Search Console** — impressions, clicks, coverage
- **Google Analytics 4** — traffic, conversions, user flow
- **Ahrefs / Semrush (free tier)** — keyword tracking, backlink monitor
- **Schema Testing Tool** — validate structured data

---

## 10. FILE RELATIONSHIP

| File | Quan hệ |
|------|---------|
| `TVT_Branding_Service_Map_v2_0.md` | Lấy positioning filter + channel architecture |
| `TVT_SERVICE_STACK_2026_v1_0.md` | Lấy service logic cho monetization mapping |
| `seo-writer SKILL.md` | Template viết bài, CTA blocks, internal linking rules |
| `TVT_Claude_Project_SOP_v1_0.md` | Content production workflow |

---

## CHANGE LOG

| Version | Date | Thay đổi |
|---------|------|---------|
| v1.0 | 2026-05-11 | Initial creation. 7 clusters, 45+ keyword targets, 90-day content plan, monetization map. |
