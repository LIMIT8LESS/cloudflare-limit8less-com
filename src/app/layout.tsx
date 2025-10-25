import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const siteUrl = "https://limit8less.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LIMIT8LESS",
  description:
    "LIMIT8LESS合同会社は、Flutterによるモバイルアプリ開発とAI自動化を提供します。",
  icons: {
    icon: [
      { url: "/icon.png?v=20241025", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=20241025" },
    ],
    shortcut: [{ url: "/favicon.ico?v=20241025" }],
    apple: [{ url: "/icon.png?v=20241025" }],
  },
  openGraph: {
    title: "LIMIT8LESS",
    description:
      "Flutterによるモバイルアプリ開発とAI自動化で、ビジネス課題を解決します。",
    url: siteUrl,
    siteName: "LIMIT8LESS",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIMIT8LESS",
    description:
      "Flutterアプリ開発とAI自動化で、ビジネス課題を解決します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
