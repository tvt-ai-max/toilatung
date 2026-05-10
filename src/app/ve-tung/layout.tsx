import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Về Tùng Sóc Sơn (Nguyễn Thanh Tùng) | Tác giả Tôi Là Tùng",
  description:
    "Nguyễn Thanh Tùng (Tùng Sóc Sơn) là chuyên gia AI Marketing Automation và Founder tại Hà Nội. Anh vận hành nền tảng giáo dục công nghệ Tôi là Tùng và TVT Agency.",
  alternates: {
    canonical: "/ve-tung",
  },
  openGraph: {
    title: "Về Tùng Sóc Sơn (Nguyễn Thanh Tùng) | Tác giả Tôi Là Tùng",
    description: "Nguyễn Thanh Tùng (Tùng Sóc Sơn) là chuyên gia AI Marketing Automation và Founder tại Hà Nội. Anh vận hành nền tảng giáo dục công nghệ Tôi là Tùng và TVT Agency.",
    url: "https://toilatung.com/ve-tung",
    type: "profile",
    images: [
      {
        url: "https://toilatung.com/images/tung-soc-son.webp",
        width: 1200,
        height: 630,
        alt: "Chân dung Nguyễn Thanh Tùng (Tùng Sóc Sơn)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Về Tùng Sóc Sơn (Nguyễn Thanh Tùng)",
    description: "Chuyên gia AI Marketing Automation, Founder TVT Agency.",
    images: ["https://toilatung.com/images/tung-soc-son.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nguyễn Thanh Tùng",
  "alternateName": ["Tùng Sóc Sơn", "Tôi là Tùng"],
  "jobTitle": "AI Marketing Specialist & Founder",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Tôi là Tùng",
      "url": "https://toilatung.com"
    },
    {
      "@type": "Organization",
      "name": "TVT Agency",
      "url": "https://thevanan.com"
    }
  ],
  "knowsAbout": [
    "AI Marketing Automation",
    "Generative AI",
    "Agentic Workflow",
    "Claude API",
    "Next.js SEO"
  ],
  "sameAs": [
    "https://www.facebook.com/tung.socson",
    "https://www.linkedin.com/in/tung-soc-son",
    "https://www.youtube.com/@toilatung"
  ],
  "url": "https://toilatung.com/ve-tung",
  "image": "https://toilatung.com/images/tung-soc-son.webp"
};

export default function VeTungLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      {/* Cấu trúc JSON-LD chuẩn GEO Entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
