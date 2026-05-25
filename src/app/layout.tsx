import type { Metadata } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QAXP - Web Design, Marketing & SEO',
  description:
    'Futuristic Web Design, Marketing and SEO Studio - Where Digital Dreams Meet Reality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased h-full bg-[#f4f2ff] text-[#09090B]`}
      >
        {children}
      </body>
    </html>
  );
}
