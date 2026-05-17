import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import LayoutShell from "@/components/layout/LayoutShell";
import { ScrollReveal } from "@/components/ui/Effects";
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
    default: "Tôi Là Tùng | Xây Hệ Thống AI Thực Chiến cho Doanh Nghiệp Việt",
    template: "%s | Tôi Là Tùng"
  },
  description: "16 năm Branding + AI System Design. Không dạy tool — thiết kế Agentic Workflow, Director Mindset và hệ thống AI vận hành thật cho SME Việt Nam.",
  icons: {
    icon: "/favicon.svg",
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
    title: "Tôi Là Tùng | Xây Hệ Thống AI Thực Chiến cho Doanh Nghiệp Việt",
    description: "16 năm Branding + AI System Design. Không dạy tool — thiết kế Agentic Workflow, Director Mindset và hệ thống AI vận hành thật cho SME Việt Nam.",
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
    title: "Tôi Là Tùng | Xây Hệ Thống AI Thực Chiến cho Doanh Nghiệp Việt",
    description: "16 năm Branding + AI System Design. Không dạy tool — thiết kế Agentic Workflow, Director Mindset và hệ thống AI vận hành thật cho SME Việt Nam.",
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
        {/* ── Google Analytics 4 ─────────────────────────────────────────── */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E9CWW82EVC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E9CWW82EVC');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollReveal />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

