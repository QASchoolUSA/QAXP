import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Add Impact font
const impact = {
  fontFamily: 'Impact, "Arial Black", sans-serif',
  variable: '--font-impact'
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QAXP - Web Design, Marketing & SEO",
  description: "Futuristic Web Design, Marketing and SEO Studio - Where Digital Dreams Meet Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-black text-white`}
        style={{ '--font-impact': impact.fontFamily } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
