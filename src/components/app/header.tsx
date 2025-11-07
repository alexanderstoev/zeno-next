"use client";

import { IconMenu2, IconSearch, IconUser } from "@tabler/icons-react";

import { useUI } from "@/app/providers/ui";

export const AppHeader = () => {
  const { toggleSidebar } = useUI();
  return (
    <header className="navbar flex h-12 justify-between gap-4 shadow-sm">
      <div className="">
        <button className="btn btn-square" onClick={() => toggleSidebar()}>
          <IconMenu2 />
        </button>
      </div>
      <div className="max-w-lg grow">
        <label className="input w-full">
          <IconSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="">
        <IconUser />
      </div>
    </header>
  );
};
