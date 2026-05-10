import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kho Prompt AI Thực Chiến | Tôi Là Tùng',
  description: 'Bộ sưu tập 33+ Prompt AI cao cấp được kiểm chứng bởi Antigravity. Áp dụng Director Mindset để tạo kịch bản, hình ảnh, video chất lượng cao với ChatGPT, Claude, Midjourney.',
  openGraph: {
    title: 'Kho Prompt AI Thực Chiến | Tôi Là Tùng',
    description: 'Bộ sưu tập 33+ Prompt AI cao cấp được kiểm chứng bởi Antigravity. Áp dụng Director Mindset để tạo kịch bản, hình ảnh, video chất lượng cao.',
    url: 'https://toilatung.com/prompt',
    images: [
      {
        url: '/images/og-home.png', // Fallback to home OG image
        width: 1200,
        height: 630,
        alt: 'Kho Prompt AI Thực Chiến | Tôi Là Tùng',
      },
    ],
  },
};

export default function PromptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
