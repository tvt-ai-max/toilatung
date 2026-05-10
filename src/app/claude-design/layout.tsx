import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Claude Design v4",
  description:
    "Hướng dẫn Claude Design cho quy trình thiết kế AI-native, UI/UX thực chiến và prototype sản phẩm.",
  alternates: {
    canonical: "/claude-design",
  },
  openGraph: {
    title: "Claude Design v4 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Design cho quy trình thiết kế AI-native, UI/UX thực chiến và prototype sản phẩm.",
    url: "https://toilatung.com/claude-design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Design v4 | Tôi Là Tùng",
    description: "Hướng dẫn Claude Design cho quy trình thiết kế AI-native, UI/UX thực chiến và prototype sản phẩm.",
  },
};

export default function ClaudeDesignLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
