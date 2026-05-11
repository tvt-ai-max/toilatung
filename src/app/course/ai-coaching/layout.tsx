import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd, { buildCourseSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "AI Coaching 1-1 với Tùng — Tôi Là Tùng",
  description:
    "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật. 4 buổi Zoom — 5.000.000đ.",
  alternates: {
    canonical: "https://toilatung.com/course/ai-coaching",
  },
  openGraph: {
    title: "AI Coaching 1-1 với Tùng | Tôi Là Tùng",
    description: "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật. 4 buổi Zoom — 5.000.000đ.",
    url: "https://toilatung.com/course/ai-coaching",
    siteName: "Tôi Là Tùng",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://toilatung.com/images/courses/cover_ai_coaching_1778391245864.png",
        width: 1200,
        height: 630,
        alt: "AI Coaching 1-1 — Tôi Là Tùng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coaching 1-1 với Tùng | Tôi Là Tùng",
    description: "Chương trình coaching AI cá nhân hóa giúp bạn xây workflow, prompt vault và kế hoạch 30 ngày theo case thật.",
    images: ["https://toilatung.com/images/courses/cover_ai_coaching_1778391245864.png"],
  },
};

const aiCoachingSchema = buildCourseSchema({
  name: 'AI Coaching 1-1 với Nguyễn Thanh Tùng',
  description: 'Chương trình coaching AI cá nhân hóa: xây AI workflow, prompt vault và kế hoạch 30 ngày theo case thật. 4 buổi Zoom trực tiếp.',
  url: 'https://toilatung.com/course/ai-coaching',
  provider: 'Tôi Là Tùng',
  price: '5000000',
  priceCurrency: 'VND',
});

export default function AiCoachingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={aiCoachingSchema} />
      {children}
    </>
  );
}
