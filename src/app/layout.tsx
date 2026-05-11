import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Script from "next/script";
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
    default: "Tôi Là Tùng | Chia sẻ AI Thực Chiến & Xây Dựng Hệ Thống",
    template: "%s | Tôi Là Tùng"
  },
  description: "Hệ thống hóa kiến thức AI để giải quyết các bài toán phức tạp nhất. Cung cấp khóa học Vibe Coding, Claude Masterclass và xây dựng Content OS tự động hóa.",
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
    title: "Tôi Là Tùng | Chia sẻ AI Thực Chiến & Xây Dựng Hệ Thống",
    description: "Hệ thống hóa kiến thức AI để giải quyết các bài toán phức tạp nhất. Cung cấp khóa học Vibe Coding, Claude Masterclass và xây dựng Content OS tự động hóa.",
    url: "https://toilatung.com",
    siteName: "Tôi Là Tùng",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/home-og.webp",
        width: 1200,
        height: 630,
        alt: "Tôi Là Tùng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tôi Là Tùng | Chia sẻ AI Thực Chiến & Xây Dựng Hệ Thống",
    description: "Hệ thống hóa kiến thức AI để giải quyết các bài toán phức tạp nhất. Cung cấp khóa học Vibe Coding, Claude Masterclass và xây dựng Content OS tự động hóa.",
    images: ["/images/home-og.webp"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "6LY7AcGGOt9Jc3iiQeGhQjLMk7wsw73ajh2Y_4gA5HM",
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
        {/* ── Google Analytics 4 ─────────────────────────────────────────── */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

