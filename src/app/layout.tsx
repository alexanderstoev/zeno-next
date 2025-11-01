import type { Metadata } from "next";
import { ReactNode } from "react";

import { AppHeader } from "@/app/components/app/header";
import { AppSidebar } from "@/app/components/app/sidebar";
import Providers from "@/app/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zeno",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dracula" className="dark">
      <body className="grid h-screen w-screen grid-cols-[auto_1fr]">
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
