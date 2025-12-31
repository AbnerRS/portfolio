import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abner Rodrigues | Senior Software Engineer',
  description: 'Portfolio of Abner Rodrigues, a Senior Front-end Developer specializing in React, TypeScript, and Micro-frontends.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
