"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Routes that use their own standalone design system
 * (no global Header/Footer/main wrapper).
 */
const STANDALONE_ROUTES = [
  "/course/ai-coaching",
  "/course/phunulamchuai",
  "/course/vibe-coding",
  "/claude-master",
  "/claude-masterclass",
];

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </>
  );
}
