import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ryuta Hayashi Portfolio",
  description: "Portfolio of Ryuta Hayashi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-8 py-4 max-w-4xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
