import React, { useState } from "react";
import Link from "next/link";

interface ThirdLevelMenuItem {
  label: string;
  href: string;
}

interface SubMenuItem {
  label: string;
  href: string;
  thirdLevelMenu?: ThirdLevelMenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  subMenu?: SubMenuItem[];
}

interface NavigationProps {
  menuItems: MenuItem[];
}
const MenuIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      className={className}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 15.5H21"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M15 19.5H21"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
const Navigation: React.FC<NavigationProps> = ({ menuItems }) => {
  const [activeMenus, setActiveMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setActiveMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const isActive = activeMenus.includes(item.label);
    return (
      <li
        key={item.label}
        className={`relative rounded-sm group ${isActive ? "bg-[#FFF]  text-secondary" : ""}`}
      >
        <div className="flex items-center justify-between py-2 px-4 hover:bg-neutral-200 rounded-sm">
          <Link href={item.href} className="flex gap-x-2">
            <MenuIcon className="w-3 h-3" />
            {item.label}
          </Link>
          {item.subMenu && (
            <button
              onClick={() => toggleMenu(item.label)}
              className="ml-2 focus:outline-none"
            >
              <svg
                className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        {item.subMenu && isActive && (
          <ul className="pl-4 mt-2 space-y-2   border-gray-200">
            {item.subMenu.map((subItem) => renderSubMenuItem(subItem))}
          </ul>
        )}
      </li>
    );
  };

  const renderSubMenuItem = (subItem: SubMenuItem) => {
    const isActive = activeMenus.includes(subItem.label);
    return (
      <li
        key={subItem.label}
        className={`rounded-sm relative group ${isActive ? " bg-[#F6F6F6] hover:bg-[#F6F6F6]  submenu-bg-shadow  text-secondary" : "hover:bg-neutral-200  text-primary"}  rounded-sm p-xs`}
      >
        <div className="flex items-center justify-between px-2  rounded-sm">
          <Link href={subItem.href} className="">
            {subItem.label}
          </Link>
          {subItem.thirdLevelMenu && (
            <button
              onClick={() => toggleMenu(subItem.label)}
              className="ml-2 focus:outline-none"
            >
              <svg
                className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        {subItem.thirdLevelMenu && isActive && (
          <ul className="pl-4 mt-2 space-y-2  ">
            {subItem.thirdLevelMenu.map((thirdItem) => (
              <li key={thirdItem.label}>
                <Link
                  href={thirdItem.href}
                  className="block py-1 rounded-sm px-4 text-[1em] text-gray-500 hover:text-gray-700 hover:bg-neutral-200"
                >
                  {thirdItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className=" bg-[#F6F6F6]  shadow-lg rounded-md px-3 py-3 text-[.5rem] text-primary  font-semibold max-w-[10rem]">
      <ul className=" mx-auto flex flex-col gap-y-4">
        {menuItems.map(renderMenuItem)}
      </ul>
    </nav>
  );
};

export default Navigation;
