import { NextResponse } from 'next/server';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface AINewsItem {
  id: string;
  title: string;
  tldr: string;
  why_important: string;
  source: string;
  date: string;
  link: string;
  tags: string[];
}

interface RSSArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
}

// ─── RSS Sources ────────────────────────────────────────────────────────────────
const RSS_FEEDS = [
  { url: 'https://openai.com/news/rss.xml', source: 'OpenAI' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/', source: 'MIT Tech Review' },
  { url: 'https://huggingface.co/blog/feed.xml', source: 'Hugging Face Blog' },
  { url: 'https://deepmind.google/blog/rss.xml', source: 'Google DeepMind' },
  { url: 'https://www.anthropic.com/rss.xml', source: 'Anthropic' },
];

// ─── Auth ───────────────────────────────────────────────────────────────────────
const CRON_SECRET = process.env.CRON_SECRET;
const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'tvt-ai-max/toilatung';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const AI_NEWS_PATH = 'src/content/ai-news.json';

// ─── Helpers ────────────────────────────────────────────────────────────────────

/** Parse a simple XML RSS feed into articles */
function parseRSS(xml: string, source: string): RSSArticle[] {
  const articles: RSSArticle[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1];
    const getTag = (tag: string): string => {
      const tagMatch = itemContent.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
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

/** Fetch all RSS feeds, ignore failures gracefully */
async function fetchAllFeeds(): Promise<RSSArticle[]> {
  const allArticles: RSSArticle[] = [];
  const fetchPromises = RSS_FEEDS.map(async (feed) => {
    try {
      const res = await fetch(feed.url, {
        headers: { 'User-Agent': 'ToiLaTung-NewsBot/1.0' },
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) return;
      const xml = await res.text();
      const articles = parseRSS(xml, feed.source);
      // Only take articles from last 3 days
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      const recent = articles.filter((a) => {
        if (!a.pubDate) return true; // include if no date (let AI filter)
        return new Date(a.pubDate) >= threeDaysAgo;
      });
      allArticles.push(...recent.slice(0, 5)); // max 5 per source
    } catch {
      console.warn(`[AI News] Failed to fetch ${feed.source}: skipped`);
    }
  });

  await Promise.all(fetchPromises);
  return allArticles;
}

/** Use Gemini to analyze and summarize articles into the JSON format */
async function analyzeWithGemini(articles: RSSArticle[]): Promise<AINewsItem[]> {
  if (!GEMINI_API_KEY) throw new Error('GOOGLE_GEMINI_API_KEY not configured');
  if (articles.length === 0) return [];

  const articlesText = articles
    .map((a, i) => `[${i + 1}] Title: ${a.title}\nSource: ${a.source}\nLink: ${a.link}\nDate: ${a.pubDate}\nSummary: ${a.description}`)
    .join('\n\n---\n\n');

  const systemPrompt = `Bạn là chuyên gia AI thực chiến, phong cách Nguyễn Thanh Tùng (Tôi Là Tùng). Nhiệm vụ: tóm tắt tin tức AI mới nhất.

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
4. Trả về JSON array. KHÔNG thêm markdown code block, KHÔNG thêm text ngoài JSON.`;

  const userPrompt = `Phân tích và tóm tắt các bài viết AI sau đây thành format JSON chuẩn. Chỉ giữ lại những tin thực sự quan trọng (tối đa 5 tin):\n\n${articlesText}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: systemPrompt + '\n\n' + userPrompt }] },
        ],
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
    throw new Error(`Gemini API error: ${res.status} - ${errText}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    console.error('[AI News] Failed to parse Gemini response:', text.substring(0, 200));
    return [];
  }
}

/** Get current ai-news.json from GitHub */
async function getCurrentNews(): Promise<{ content: AINewsItem[]; sha: string }> {
  if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN not configured');

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${AI_NEWS_PATH}?ref=${GITHUB_BRANCH}`,
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' } }
  );

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  const content = JSON.parse(Buffer.from(data.content, 'base64').toString('utf8'));
  return { content, sha: data.sha };
}

/** Commit updated ai-news.json to GitHub */
async function commitToGitHub(news: AINewsItem[], sha: string): Promise<void> {
  if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN not configured');

  const content = Buffer.from(JSON.stringify(news, null, 2) + '\n').toString('base64');
  const today = new Date().toISOString().split('T')[0];

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${AI_NEWS_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `content: Cập nhật tin AI tự động ${today}`,
        content,
        sha,
        branch: GITHUB_BRANCH,
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub commit error: ${res.status} - ${errText}`);
  }
}

// ─── Route Handler ──────────────────────────────────────────────────────────────
export async function GET(request: Request) {
  // Security: verify cron secret or allow manual trigger in dev
  const authHeader = request.headers.get('authorization');
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Step 1: Fetch RSS feeds
    console.log('[AI News] Fetching RSS feeds...');
    const articles = await fetchAllFeeds();
    console.log(`[AI News] Found ${articles.length} recent articles`);

    if (articles.length === 0) {
      return NextResponse.json({ message: 'No new articles found', added: 0 });
    }

    // Step 2: Analyze with Gemini
    console.log('[AI News] Analyzing with Gemini...');
    const newItems = await analyzeWithGemini(articles);
    console.log(`[AI News] Gemini returned ${newItems.length} items`);

    if (newItems.length === 0) {
      return NextResponse.json({ message: 'Gemini filtered all articles', added: 0 });
    }

    // Step 3: Get current news & merge
    const { content: currentNews, sha } = await getCurrentNews();
    const existingIds = new Set(currentNews.map((n) => n.id));
    const existingLinks = new Set(currentNews.map((n) => n.link));

    const genuinelyNew = newItems.filter(
      (item) => !existingIds.has(item.id) && !existingLinks.has(item.link)
    );

    if (genuinelyNew.length === 0) {
      return NextResponse.json({ message: 'All articles already exist', added: 0 });
    }

    // Step 4: Merge (new first) and commit
    const mergedNews = [...genuinelyNew, ...currentNews];
    await commitToGitHub(mergedNews, sha);

    console.log(`[AI News] Successfully added ${genuinelyNew.length} new articles`);
    return NextResponse.json({
      message: `Added ${genuinelyNew.length} new articles`,
      added: genuinelyNew.length,
      titles: genuinelyNew.map((n) => n.title),
    });
  } catch (error) {
    console.error('[AI News] Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
