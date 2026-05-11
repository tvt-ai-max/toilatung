import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd, { buildCourseSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Claude Code Mastery 2026 — Tôi Là Tùng",
  description:
    "Hướng dẫn Claude Code Mastery: agentic workflow, Skills, MCP, context window management và triển khai sản phẩm AI. Cẩm nang đầy đủ nhất bằng tiếng Việt.",
  alternates: {
    canonical: "https://toilatung.com/claude-master",
  },
  openGraph: {
    title: "Claude Code Mastery 2026 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Code Mastery: agentic workflow, Skills, MCP, context window management và triển khai sản phẩm AI.",
    url: "https://toilatung.com/claude-master",
    siteName: "Tôi Là Tùng",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://toilatung.com/images/courses/cover_claude_master_1778391287349.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Mastery 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Mastery 2026 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Code Mastery: agentic workflow, Skills, MCP, context window management và triển khai sản phẩm AI.",
    images: ["https://toilatung.com/images/courses/cover_claude_master_1778391287349.png"],
  },
};

const claudeMasterSchema = buildCourseSchema({
  name: 'Claude Code Mastery 2026',
  description: 'Hướng dẫn Claude Code Mastery toàn diện: agentic workflow, Skills, MCP, context window management và triển khai sản phẩm AI. Cẩm nang bằng tiếng Việt.',
  url: 'https://toilatung.com/claude-master',
  provider: 'Tôi Là Tùng',
});

export default function ClaudeMasterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={claudeMasterSchema} />
      {children}
    </>
  );
}
