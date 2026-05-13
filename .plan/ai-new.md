Bạn là chuyên gia AI thực chiến, phong cách Nguyễn Thanh Tùng (Tôi Là Tùng). Nhiệm vụ của bạn là tóm tắt tin tức AI mới nhất theo tiêu chuẩn cực cao.

**Yêu cầu bắt buộc:**

1. **Ngôn ngữ**: 100% tiếng Việt, tự nhiên, chuyên nghiệp, dễ hiểu.
2. **Cấu trúc tóm tắt** (luôn giữ nguyên thứ tự):
   - **Tiêu đề ngắn** (8-12 từ, hấp dẫn, có từ khóa)
   - **TL;DR** (2-3 câu ngắn gọn nhất)
   - **Tại sao quan trọng** (phân tích thực chiến 4-6 câu):
     - Tác động đến ai? (freelancer, SME, agency, developer…)
     - Lợi ích thực tế cụ thể
     - Rủi ro hoặc lưu ý cần biết
     - So sánh với công cụ hiện tại (nếu có)
   - **Nguồn** + **Ngày** + **Link gốc**
   - **Tag** (Model / Tool / Research / Agent / Business / Update)

3. **Phong cách**:
   - Thực chiến, không lan man
   - Tập trung vào "tác động thực tế" thay vì chỉ thuật lại tin
   - Dùng ngôn ngữ gần gũi nhưng chuyên sâu (phù hợp độc giả Việt Nam)

4. **Quy tắc lọc**:
   - Chỉ giữ tin có tác động thực tế cao (tránh tin hype, marketing thuần túy)
   - Ưu tiên: Model mới, Tool quan trọng, Research có ứng dụng thực tế, Agent/Workflow mới, cập nhật lớn từ OpenAI/Anthropic/xAI/Google

**Đầu ra**: Trả về theo đúng cấu trúc JSON sau để dễ import vào website:

```json
{
  "title": "...",
  "tldr": "...",
  "why_important": "...",
  "source": "...",
  "date": "YYYY-MM-DD",
  "link": "...",
  "tags": ["Model", "Tool"]
}


---

### 2. DANH SÁCH 15 RSS FEEDS UY TÍN (Cập nhật 2026)

Dưới đây là danh sách **tốt nhất** hiện tại, dễ quét tự động:

| STT | Nguồn | RSS Feed URL | Ghi chú |
|-----|-------|--------------|--------|
| 1 | OpenAI | `https://openai.com/news/rss.xml` | Chính thức |
| 2 | The Batch (Andrew Ng) | `https://kill-the-newsletter.com/feeds/jc8116b7aauska20.xml` (hoặc dùng newsletter) | Rất uy tín |
| 3 | Hugging Face Daily Papers | `https://papers.takara.ai/api/feed` | Tốt nhất cho research |
| 4 | arXiv cs.AI | `https://export.arxiv.org/rss/cs.AI` | Research mới |
| 5 | arXiv cs.LG | `https://export.arxiv.org/rss/cs.LG` | Machine Learning |
| 6 | Hugging Face Blog | `https://huggingface.co/blog/feed.xml` | (nếu có) |
| 7 | Anthropic News | `https://www.anthropic.com/news` (dùng RSSHub nếu cần) | Claude updates |
| 8 | Ben's Bites | Dùng `https://bensbites.com/feed` (kiểm tra) hoặc newsletter | Tool & startup |
| 9 | The Rundown AI | Newsletter (dùng kill-the-newsletter) | Daily digest |
| 10 | Latent Space | `https://latent.space/feed` (nếu có) | Kỹ thuật sâu |
| 11 | Import AI (Jack Clark) | Newsletter | Policy + Research |
| 12 | The Neuron | Newsletter | Tổng hợp tốt |
| 13 | AI Breakfast | Newsletter | Phân tích nhanh |
| 14 | FutureTools.io/news | `https://futuretools.io/news` (RSS nếu có) | Aggregator |
| 15 | MIT Technology Review AI | `https://www.technologyreview.com/topic/artificial-intelligence/feed/` | Chất lượng cao |

**Mẹo**: Với newsletter không có RSS, dùng dịch vụ **kill-the-newsletter.com** để tạo RSS miễn phí.

---

### 3. CẤU TRÚC CHI TIẾT CARD TIN (TEMPLATE)

**Mỗi card tin trên website nên có cấu trúc sau** (dùng HTML/Tailwind hoặc Framer component):

```html
<div class="ai-new-card">
  <!-- Tag -->
  <div class="tags">
    <span class="tag model">Model</span>
    <span class="tag tool">Tool</span>
  </div>

  <!-- Tiêu đề -->
  <h3 class="title">Claude 4 Opus ra mắt – Agent mạnh nhất từ trước đến nay</h3>

  <!-- TL;DR -->
  <p class="tldr"><strong>TL;DR:</strong> Claude 4 Opus có khả năng suy luận dài hạn vượt trội, hỗ trợ context 1 triệu token và tích hợp computer use mạnh mẽ hơn.</p>

  <!-- Tại sao quan trọng -->
  <div class="why-important">
    <strong>Tại sao quan trọng:</strong>
    <p>Đây là bước tiến lớn nhất của Anthropic từ đầu năm. Với khả năng chạy agent tự động dài hạn, bạn có thể build workflow phức tạp mà không cần nhiều bước thủ công. Rất phù hợp cho agency và SME muốn tự động hóa quy trình nội bộ.</p>
  </div>

  <!-- Meta -->
  <div class="meta">
    <span>Nguồn: Anthropic</span>
    <span>Ngày: 12/05/2026</span>
    <a href="https://..." target="_blank" class="btn">Đọc chi tiết →</a>
  </div>
</div>

META TITLE & DESCRIPTION CHO SEO
Page Title (Meta Title):
textAI New – Cập nhật AI Thực Chiến Mỗi Tuần | Tôi Là Tùng
Meta Description:
textCập nhật tin tức AI mới nhất mỗi tuần với phân tích thực chiến. Những model, tool, agent quan trọng nhất được chọn lọc và giải thích rõ ràng để bạn áp dụng ngay vào công việc và kinh doanh.
URL gợi ý: https://.../ai-new