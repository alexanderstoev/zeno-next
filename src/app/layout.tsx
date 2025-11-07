import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import Providers from "@/app/providers";

import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeno",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dracula" className="dark">
      <body className={`${InterFont.className} h-screen subpixel-antialiased`}>
        <Providers>
          <div className="h-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
