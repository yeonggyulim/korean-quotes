import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "한국어 명언",
  description: "한국어 명언을 랜덤으로 보여주는 웹앱입니다.",
  openGraph: {
    title: "한국어 명언",
    description: "한국어 명언을 랜덤으로 보여주는 웹앱입니다.",
    url: "https://korean-quotes.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
