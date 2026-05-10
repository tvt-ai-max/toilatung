import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vibe Coding: Làm Chủ AI Để Code",
  description:
    "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI.",
  alternates: {
    canonical: "/course/vibe-coding",
  },
  openGraph: {
    title: "Vibe Coding: Làm Chủ AI Để Code | Tôi Là Tùng",
    description: "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI.",
    url: "https://toilatung.com/course/vibe-coding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding: Làm Chủ AI Để Code | Tôi Là Tùng",
    description: "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI.",
  },
};

export default function VibeCodingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
