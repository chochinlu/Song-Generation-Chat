import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat with AI",
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}>{children}</body>
    </html>
  );
}
