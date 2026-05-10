import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Thiết Kế Landing Page AI",
  description:
    "Khóa học 6 tuần giúp bạn dùng AI và Vibe Coding để thiết kế landing page production-ready từ ý tưởng đến deploy.",
  alternates: {
    canonical: "/course/landing-page",
  },
  openGraph: {
    title: "Thiết Kế Landing Page AI | Tôi Là Tùng",
    description: "Khóa học 6 tuần giúp bạn dùng AI và Vibe Coding để thiết kế landing page production-ready từ ý tưởng đến deploy.",
    url: "https://toilatung.com/course/landing-page",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiết Kế Landing Page AI | Tôi Là Tùng",
    description: "Khóa học 6 tuần giúp bạn dùng AI và Vibe Coding để thiết kế landing page production-ready từ ý tưởng đến deploy.",
  },
};

export default function LandingPageCourseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
