import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import LayoutShell from "@/components/layout/LayoutShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toilatung.com"),
  title: {
    default: "Tôi Là Tùng — AI Coaching & Khóa Học Thực Chiến",
    template: "%s | Tôi Là Tùng"
  },
  description: "Trở thành số ít những người biết dùng AI để giải quyết những bài toán phức tạp nhất. Tư duy Director, giải pháp Agentic Workflow và Content OS.",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tôi Là Tùng — AI Coaching & Khóa Học Thực Chiến",
    description: "Trở thành số ít những người biết dùng AI để giải quyết những bài toán phức tạp nhất. Tư duy Director, giải pháp Agentic Workflow và Content OS.",
    url: "https://toilatung.com",
    siteName: "Tôi Là Tùng",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tôi Là Tùng — AI Coaching & Khóa Học Thực Chiến",
    description: "Trở thành số ít những người biết dùng AI để giải quyết những bài toán phức tạp nhất. Tư duy Director, giải pháp Agentic Workflow và Content OS.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

