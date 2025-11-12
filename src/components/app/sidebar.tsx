"use client";

import {
  IconBolt,
  IconBoltFilled,
  IconChecks,
  IconFolder,
  IconNews,
  IconNote,
  IconQuestionMark,
  ReactNode,
} from "@tabler/icons-react";
import Link from "next/link";

import { useUI } from "@/components/providers/ui";

export type AppSidebarItem =
  | {
      caption: string;
      icon: ReactNode;
      href: string;
      separator?: false;
      count?: number;
    }
  | {
      separator: true;
    };
const menuItems: AppSidebarItem[] = [
  { caption: "Glimpses", icon: <IconBolt />, count: 5, href: "/glimpses" },
  { caption: "Initiatives", icon: <IconFolder />, href: "/initiatives" },
  { separator: true },
  { caption: "Tasks", icon: <IconChecks />, count: 23, href: "/tasks" },
  { caption: "Questions", icon: <IconQuestionMark />, href: "/questions" },
  { caption: "Notes", icon: <IconNote />, href: "/notes" },
  { caption: "Articles", icon: <IconNews />, href: "/articles" },
];

export const AppSidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useUI();
  return (
    <aside className="drawer lg:drawer-open row-span-2">
      <input
        id="app-sidebar"
        type="checkbox"
        className="drawer-toggle"
        checked={!sidebarCollapsed}
        readOnly
      />

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="app-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => toggleSidebar()}
        ></label>
        <div className="is-drawer-close:w-16 is-drawer-open:w-64 bg-base-100 flex min-h-full flex-col items-start">
          <ul className="menu w-full grow">
            <li className="mb-4">
              <button className="text-accent flex h-12 items-center text-2xl">
                {!sidebarCollapsed && (
                  <>
                    <IconBoltFilled />
                    <span>Zeno</span>
                  </>
                )}
              </button>
            </li>
            {menuItems.map((item, index) =>
              item.separator ? (
                <li key={crypto.randomUUID()} className="bg-base-content mx-0 my-2 h-px"></li>
              ) : (
                <li
                  key={item.caption + index}
                  className="tooltip tooltip-right text-base-content/80"
                  data-tip={sidebarCollapsed ? item.caption + " " + item.count : ""}
                >
                  <Link href={item.href ?? ""}>
                    {item.icon}
                    {!sidebarCollapsed && (
                      <>
                        <span>{item.caption}</span>
                        {item.count && (
                          <div className="badge badge-ghost bg-base-200 badge-accent">
                            {item.count}
                          </div>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};
