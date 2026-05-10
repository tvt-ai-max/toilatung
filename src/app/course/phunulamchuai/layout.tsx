import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Phụ Nữ Làm Chủ AI",
  description:
    "Lộ trình miễn phí giúp phụ nữ mới bắt đầu dùng AI để tạo nội dung, workflow và cơ hội thu nhập thực tế.",
  alternates: {
    canonical: "/course/phunulamchuai",
  },
  openGraph: {
    title: "Phụ Nữ Làm Chủ AI | Tôi Là Tùng",
    description: "Lộ trình miễn phí giúp phụ nữ mới bắt đầu dùng AI để tạo nội dung, workflow và cơ hội thu nhập thực tế.",
    url: "https://toilatung.com/course/phunulamchuai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phụ Nữ Làm Chủ AI | Tôi Là Tùng",
    description: "Lộ trình miễn phí giúp phụ nữ mới bắt đầu dùng AI để tạo nội dung, workflow và cơ hội thu nhập thực tế.",
  },
};

export default function PhuNuLamChuAiLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
