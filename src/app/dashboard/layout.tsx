import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Member Area — Tôi Là Tùng",
  description:
    "Khu vực học viên để truy cập khóa học, tài nguyên và tiến độ học tập.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
