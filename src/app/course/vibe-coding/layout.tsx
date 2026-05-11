import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd, { buildCourseSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Vibe Coding: Làm Chủ AI Để Code — Tôi Là Tùng",
  description:
    "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI. 3 buổi Zoom Live — 5.000.000đ.",
  alternates: {
    canonical: "https://toilatung.com/course/vibe-coding",
  },
  openGraph: {
    title: "Vibe Coding: Làm Chủ AI Để Code | Tôi Là Tùng",
    description: "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI. 3 buổi Zoom Live — 5.000.000đ.",
    url: "https://toilatung.com/course/vibe-coding",
    siteName: "Tôi Là Tùng",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://toilatung.com/images/courses/cover_vibe_coding_1778391231341.png",
        width: 1200,
        height: 630,
        alt: "Vibe Coding — Khóa học AI thực chiến",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding: Làm Chủ AI Để Code | Tôi Là Tùng",
    description: "Khóa học thực chiến dùng Claude Code và tư duy Director để build, deploy và vận hành sản phẩm AI.",
    images: ["https://toilatung.com/images/courses/cover_vibe_coding_1778391231341.png"],
  },
};

const vibeCodingSchema = buildCourseSchema({
  name: 'Vibe Coding: Làm Chủ AI Để Code',
  description: 'Khóa học thực chiến dùng Claude Code và tư duy Director Mindset để build, deploy sản phẩm AI thật trong 3 buổi Zoom live.',
  url: 'https://toilatung.com/course/vibe-coding',
  provider: 'Tôi Là Tùng',
  price: '5000000',
  priceCurrency: 'VND',
});

export default function VibeCodingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={vibeCodingSchema} />
      {children}
    </>
  );
}
