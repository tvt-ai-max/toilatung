import { GoogleGenerativeAI } from '@google/generative-ai';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public/images');

const MODEL = process.env.GEMINI_MODEL ?? 'gemini-2.0-flash-preview-image-generation';
const WIDTH = 1200;
const HEIGHT = 630;
const WEBP_QUALITY = 90;

function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
}

async function main() {
  loadEnv();
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error('ERROR: GOOGLE_GEMINI_API_KEY is not set in .env.local');
    process.exit(1);
  }

  const prompt = `Create a high-quality, visually striking Open Graph cover image (1200x630px, 16:9 aspect ratio) for the homepage of "Tôi Là Tùng" (TVT Agency).

VISUAL STYLE REQUIREMENTS:
- Dark background (#000000 to #0a0a0a), premium tech aesthetic
- Bold abstract geometric shapes representing AI, systems, and creativity
- Color palette: deep purples (#7b61ff), electric reds (#ff375f), emerald accents (#34d399)
- Glassmorphism / frosted glass UI elements hovering in space
- Subtle glowing orbs, digital networks, or light streaks
- Modern, cinematic composition — like a premium AI SaaS product poster
- NO text/words on the image at all (strictly no text)
- High contrast, suitable for Open Graph sharing on social media

COMPOSITION:
- Center-weighted or Rule of thirds layout
- One dominant focal element (an abstract AI core or glowing monolith)
- Subtle gradient from dark to slightly lighter at edges
- Professional, polished — matches the brand of a Vietnamese AI & tech educator`;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: MODEL });

  console.log('Generating image with Gemini...');
  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
    },
  });

  const parts = result.response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith('image/'));

  if (!imagePart) throw new Error('No image returned');

  const rawBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
  const outPath = path.join(IMG_DIR, `og-home.webp`);

  await sharp(rawBuffer)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath);

  console.log(`Saved → public/images/og-home.webp (${WIDTH}×${HEIGHT}px)`);
}

main();
