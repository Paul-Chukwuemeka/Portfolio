

import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "tfolio website By Paul Chukwuemeka Built using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased backgroundImage`}
      >
        {children}
      </body>
    </html>
  );
}
