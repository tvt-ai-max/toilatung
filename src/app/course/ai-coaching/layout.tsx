import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Coaching 1-1 với Tùng",
  description:
    "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật.",
  alternates: {
    canonical: "/course/ai-coaching",
  },
  openGraph: {
    title: "AI Coaching 1-1 với Tùng | Tôi Là Tùng",
    description: "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật.",
    url: "https://toilatung.com/course/ai-coaching",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coaching 1-1 với Tùng | Tôi Là Tùng",
    description: "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật.",
  },
};

export default function AiCoachingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
