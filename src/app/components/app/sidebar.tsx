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

import { useUI } from "@/app/providers/ui";

export type AppSidebarItem =
  | {
      caption: string;
      icon: ReactNode;
      href?: string;
      separator?: false;
      count?: number;
    }
  | {
      separator: true;
    };
const menuItems: AppSidebarItem[] = [
  { caption: "Glimpses", icon: <IconBolt />, count: 5 },
  { caption: "Initiatives", icon: <IconFolder /> },
  { separator: true },
  { caption: "Tasks", icon: <IconChecks />, count: 23 },
  { caption: "Questions", icon: <IconQuestionMark /> },
  { caption: "Notes", icon: <IconNote /> },
  { caption: "Articles", icon: <IconNews /> },
];

export const AppSidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useUI();
  return (
    <div className="drawer lg:drawer-open">
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
                <IconBoltFilled />
                {!sidebarCollapsed && <span>Zeno</span>}
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
                  <button>
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
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
