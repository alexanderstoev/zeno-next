"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type UIContextType = {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  return (
    <UIContext.Provider value={{ sidebarCollapsed: sidebarCollapsed, toggleSidebar }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
};
