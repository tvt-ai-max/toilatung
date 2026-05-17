#!/usr/bin/env node
/**
 * generate-cover.mjs — Tạo ảnh cover blog 1200×630px với Google Gemini
 *
 * Usage:
 *   node scripts/generate-cover.mjs                 # Xử lý tất cả bài chưa có ảnh .webp
 *   node scripts/generate-cover.mjs <slug>           # Xử lý một bài cụ thể
 *   node scripts/generate-cover.mjs --all            # Xử lý lại tất cả (overwrite)
 *   node scripts/generate-cover.mjs --dry-run        # Chỉ xem danh sách, không tạo
 *
 * Yêu cầu:
 *   GOOGLE_GEMINI_API_KEY=... trong .env.local
 *
 * Model: gemini-2.0-flash-preview-image-generation
 * Output: public/images/blog/<slug>.webp  (1200×630px)
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src/content/blog');
const IMG_DIR = path.join(ROOT, 'public/images/blog');

// ── Cấu hình ──────────────────────────────────────────────────────────────
const MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.0-flash-preview-image-generation';
const WIDTH = 1200;
const HEIGHT = 630;
const WEBP_QUALITY = 90;

// ── Helpers ────────────────────────────────────────────────────────────────
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
}

function getPostSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('.'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

function readFrontmatter(slug) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(mdxPath, 'utf8');
  return matter(raw).data;
}

function hasWebpImage(slug) {
  return fs.existsSync(path.join(IMG_DIR, `${slug}.webp`));
}

function buildPrompt(data) {
  const title = data.title ?? 'Blog Post';
  const desc = data.description ?? '';
  const tags = (data.tags ?? []).join(', ');

  return `Create a high-quality, visually striking blog cover image (1200x630px, 16:9 aspect ratio) for a Vietnamese tech blog called "Tôi Là Tùng" (TVT Agency).

BLOG POST DETAILS:
Title: "${title}"
Description: "${desc}"
Tags: ${tags}

VISUAL STYLE REQUIREMENTS:
- Dark background (#000000 to #0a0a0a), premium tech aesthetic
- Bold typographic elements or abstract geometric shapes
- Color palette: deep purples (#7b61ff), electric reds (#ff375f), emerald accents (#34d399)
- Glassmorphism / frosted glass UI elements
- Subtle glowing orbs or light streaks
- Modern, cinematic composition — like a premium SaaS product poster
- NO text/words on the image (the blog system overlays title separately)
- High contrast, suitable for Open Graph sharing on social media

COMPOSITION:
- Rule of thirds layout
- One dominant focal element (abstract shape, icon, or scene)
- Subtle gradient from dark to slightly lighter at edges
- Professional, polished — matches the brand of a Vietnamese AI & tech educator`;
}

function updateMdxCoverImage(slug) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  let raw = fs.readFileSync(mdxPath, 'utf8');
  const newCoverImage = `/images/blog/${slug}.webp`;

  if (raw.includes('coverImage:')) {
    raw = raw.replace(/coverImage:\s*["']?[^\n"']+["']?/, `coverImage: "${newCoverImage}"`);
  } else {
    // Insert after first '---' block
    raw = raw.replace(/^---\n/, `---\ncoverImage: "${newCoverImage}"\n`);
  }

  fs.writeFileSync(mdxPath, raw, 'utf8');
  console.log(`  Updated frontmatter → ${newCoverImage}`);
}

// ── Core Generation ────────────────────────────────────────────────────────
async function generateCover(slug, genAI) {
  console.log(`\n▶ Generating cover for: ${slug}`);

  const data = readFrontmatter(slug);
  const prompt = buildPrompt(data);

  const model = genAI.getGenerativeModel({ model: MODEL });

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
    },
  });

  const parts = result.response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith('image/'));

  if (!imagePart) {
    throw new Error(`No image returned for slug: ${slug}`);
  }

  const rawBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
  const outPath = path.join(IMG_DIR, `${slug}.webp`);

  await sharp(rawBuffer)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath);

  console.log(`  Saved → public/images/blog/${slug}.webp (${WIDTH}×${HEIGHT}px)`);

  updateMdxCoverImage(slug);
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();

  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error('ERROR: GOOGLE_GEMINI_API_KEY is not set in .env.local');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const isAll = args.includes('--all');
  const targetSlug = args.find((a) => !a.startsWith('--'));

  fs.mkdirSync(IMG_DIR, { recursive: true });

  let slugs = getPostSlugs();

  if (targetSlug) {
    slugs = [targetSlug];
  } else if (!isAll) {
    slugs = slugs.filter((s) => !hasWebpImage(s));
  }

  if (slugs.length === 0) {
    console.log('Tất cả bài viết đã có ảnh cover .webp. Dùng --all để tạo lại.');
    return;
  }

  console.log(`\nModel: ${MODEL}`);
  console.log(`Sẽ tạo ${slugs.length} ảnh cover:\n`);
  slugs.forEach((s) => console.log(`  • ${s}`));

  if (isDryRun) {
    console.log('\n[dry-run] Không tạo ảnh thật.');
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  let success = 0;
  let failed = 0;

  for (const slug of slugs) {
    try {
      await generateCover(slug, genAI);
      success++;
      // Polite rate limiting — 1 ảnh/giây để tránh quota
      await new Promise((r) => setTimeout(r, 1000));
    } catch (err) {
      console.error(`  FAILED ${slug}:`, err.message);
      failed++;
    }
  }

  console.log(`\n✓ Hoàn tất: ${success} thành công, ${failed} lỗi`);
  if (failed > 0) process.exit(1);
}

main();
