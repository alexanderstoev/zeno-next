import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { AppHeader } from "@/components/app/header";
import { AppSidebar } from "@/components/app/sidebar";

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
      <body
        className={`${InterFont.className} grid h-screen w-screen grid-cols-[auto_1fr] subpixel-antialiased`}
      >
        <Providers>
          <aside className="h-full">
            <AppSidebar />
          </aside>
          <div className="grid grid-rows-[auto_1fr]">
            <header>
              <AppHeader />
            </header>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
