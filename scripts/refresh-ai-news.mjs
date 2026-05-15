#!/usr/bin/env node

/**
 * Script chạy thủ công để cập nhật tin AI News local
 * Usage: npm run refresh-news
 *
 * Yêu cầu: GOOGLE_GEMINI_API_KEY trong .env.local
 * Script này ghi trực tiếp vào src/content/ai-news.json (KHÔNG qua GitHub API)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Load .env.local
try {
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
  }
} catch { /* ignore */ }

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const AI_NEWS_FILE = path.join(PROJECT_ROOT, 'src/content/ai-news.json');

const RSS_FEEDS = [
  { url: 'https://openai.com/news/rss.xml', source: 'OpenAI' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/', source: 'MIT Tech Review' },
  { url: 'https://huggingface.co/blog/feed.xml', source: 'Hugging Face Blog' },
  { url: 'https://deepmind.google/blog/rss.xml', source: 'Google DeepMind' },
  { url: 'https://www.anthropic.com/rss.xml', source: 'Anthropic' },
];

function parseRSS(xml, source) {
  const articles = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1];
    const getTag = (tag) => {
      const tagMatch = itemContent.match(
        new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`)
      );
      return (tagMatch?.[1] || tagMatch?.[2] || '').trim();
    };

    const title = getTag('title');
    const link = getTag('link');
    const description = getTag('description').replace(/<[^>]+>/g, '').substring(0, 500);
    const pubDate = getTag('pubDate') || getTag('dc:date') || getTag('published');

    if (title && link) {
      articles.push({ title, link, description, pubDate, source });
    }
  }

  return articles;
}

async function fetchAllFeeds() {
  const allArticles = [];
  console.log('📡 Đang quét RSS feeds...');

  for (const feed of RSS_FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: { 'User-Agent': 'ToiLaTung-NewsBot/1.0' },
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) {
        console.log(`  ⚠️  ${feed.source}: HTTP ${res.status}`);
        continue;
      }
      const xml = await res.text();
      const articles = parseRSS(xml, feed.source);

      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      const recent = articles.filter((a) => {
        if (!a.pubDate) return true;
        return new Date(a.pubDate) >= threeDaysAgo;
      });

      console.log(`  ✅ ${feed.source}: ${recent.length} tin mới (tổng ${articles.length})`);
      allArticles.push(...recent.slice(0, 5));
    } catch (err) {
      console.log(`  ❌ ${feed.source}: ${err.message || 'timeout'}`);
    }
  }

  return allArticles;
}

async function analyzeWithGemini(articles) {
  if (!GEMINI_API_KEY) {
    console.error('❌ GOOGLE_GEMINI_API_KEY chưa được cấu hình trong .env.local');
    process.exit(1);
  }

  console.log('\n🤖 Đang phân tích bằng Gemini AI...');

  const articlesText = articles
    .map((a, i) => `[${i + 1}] Title: ${a.title}\nSource: ${a.source}\nLink: ${a.link}\nDate: ${a.pubDate}\nSummary: ${a.description}`)
    .join('\n\n---\n\n');

  const prompt = `Bạn là chuyên gia AI thực chiến, phong cách Nguyễn Thanh Tùng (Tôi Là Tùng). Nhiệm vụ: tóm tắt tin tức AI mới nhất.

Yêu cầu bắt buộc:
1. Ngôn ngữ: 100% tiếng Việt, tự nhiên, chuyên nghiệp.
2. Cấu trúc mỗi tin:
   - id: slug tiếng Anh ngắn gọn (ví dụ: "openai-gpt5-release")
   - title: tiếng Việt, 8-15 từ, hấp dẫn
   - tldr: 2-3 câu tóm tắt ngắn gọn nhất
   - why_important: phân tích thực chiến 3-5 bullet points (dùng \\n- để xuống dòng), tập trung vào tác động cho freelancer, agency, developer Việt Nam
   - source: tên nguồn gốc
   - date: YYYY-MM-DD
   - link: URL gốc
   - tags: mảng 1-3 tags từ danh sách [Model, Tool, Research, Agent, Business, Update, Security, Developer]
3. Chỉ giữ tin có tác động thực tế cao (bỏ tin marketing, PR thuần)
4. Trả về JSON array. KHÔNG thêm markdown code block, KHÔNG thêm text ngoài JSON.

Phân tích và tóm tắt các bài viết AI sau đây thành format JSON chuẩn. Chỉ giữ lại những tin thực sự quan trọng (tối đa 5 tin):

${articlesText}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 4096,
          responseMimeType: 'application/json',
        },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error(`❌ Gemini API lỗi: ${res.status}`);
    console.error(errText.substring(0, 300));
    process.exit(1);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    console.error('❌ Không parse được JSON từ Gemini:', text.substring(0, 200));
    return [];
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('  🔄 AI News Auto-Refresh (Local)');
  console.log('═══════════════════════════════════════\n');

  // Step 1: Fetch RSS
  const articles = await fetchAllFeeds();
  if (articles.length === 0) {
    console.log('\n📭 Không tìm thấy bài viết mới nào. Dừng lại.');
    return;
  }
  console.log(`\n📰 Tổng cộng ${articles.length} bài viết cần phân tích.\n`);

  // Step 2: Analyze with Gemini
  const newItems = await analyzeWithGemini(articles);
  console.log(`✨ Gemini trả về ${newItems.length} tin tức đã phân tích.\n`);

  if (newItems.length === 0) {
    console.log('📭 Gemini không tìm thấy tin quan trọng. Dừng lại.');
    return;
  }

  // Step 3: Merge with existing
  let currentNews = [];
  try {
    currentNews = JSON.parse(fs.readFileSync(AI_NEWS_FILE, 'utf8'));
  } catch {
    console.log('⚠️ Không đọc được ai-news.json hiện tại, tạo mới.');
  }

  const existingIds = new Set(currentNews.map((n) => n.id));
  const existingLinks = new Set(currentNews.map((n) => n.link));
  const genuinelyNew = newItems.filter(
    (item) => !existingIds.has(item.id) && !existingLinks.has(item.link)
  );

  if (genuinelyNew.length === 0) {
    console.log('📭 Tất cả tin đã tồn tại. Không có gì mới.');
    return;
  }

  const mergedNews = [...genuinelyNew, ...currentNews];
  fs.writeFileSync(AI_NEWS_FILE, JSON.stringify(mergedNews, null, 2) + '\n');

  console.log('═══════════════════════════════════════');
  console.log(`  ✅ Đã thêm ${genuinelyNew.length} tin mới!`);
  console.log('═══════════════════════════════════════');
  genuinelyNew.forEach((n) => console.log(`  → ${n.title}`));
  console.log('\n📁 File: src/content/ai-news.json');
  console.log('💡 Chạy "git add . && git commit -m \"content: cập nhật AI news\" && git push" để deploy.');
}

main().catch((err) => {
  console.error('💥 Lỗi không mong muốn:', err);
  process.exit(1);
});
