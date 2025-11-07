import type { Metadata } from "next";
import { ReactNode } from "react";

import { AppHeader } from "@/components/app/header";
import { AppSidebar } from "@/components/app/sidebar";

import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Zeno",
  description: "",
};

export default function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Providers>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <AppSidebar />
        <AppHeader />
        <main className="bg-base-200 h-full w-full grow p-6">{children}</main>
      </div>
    </Providers>
  );
}
