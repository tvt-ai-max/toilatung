import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Claude Code Mastery 2026",
  description:
    "Hướng dẫn Claude Code Mastery về agentic workflow, skills, MCP, context và triển khai sản phẩm AI.",
  alternates: {
    canonical: "/claude-master",
  },
  openGraph: {
    title: "Claude Code Mastery 2026 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Code Mastery về agentic workflow, skills, MCP, context và triển khai sản phẩm AI.",
    url: "https://toilatung.com/claude-master",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Mastery 2026 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Code Mastery về agentic workflow, skills, MCP, context và triển khai sản phẩm AI.",
  },
};

export default function ClaudeMasterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
