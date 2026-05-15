import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasGeminiKey: !!process.env.GOOGLE_GEMINI_API_KEY,
    geminiKeyPrefix: process.env.GOOGLE_GEMINI_API_KEY?.substring(0, 8) || 'NOT_SET',
    hasGithubToken: !!process.env.GITHUB_TOKEN,
    hasCronSecret: !!process.env.CRON_SECRET,
    nodeEnv: process.env.NODE_ENV,
  });
}
