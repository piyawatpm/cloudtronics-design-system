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
      <li key={item.label} className="relative group">
        <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100">
          <Link href={item.href} className="text-gray-700 hover:text-gray-900">
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
          <ul className="pl-4 mt-2 space-y-2 bg-white border-l border-gray-200">
            {item.subMenu.map((subItem) => renderSubMenuItem(subItem))}
          </ul>
        )}
      </li>
    );
  };

  const renderSubMenuItem = (subItem: SubMenuItem) => {
    const isActive = activeMenus.includes(subItem.label);
    return (
      <li key={subItem.label} className="relative group">
        <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100">
          <Link
            href={subItem.href}
            className="text-gray-600 hover:text-gray-800"
          >
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
          <ul className="pl-4 mt-2 space-y-2 bg-white border-l border-gray-200">
            {subItem.thirdLevelMenu.map((thirdItem) => (
              <li key={thirdItem.label}>
                <Link
                  href={thirdItem.href}
                  className="block py-2 px-4 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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
    <nav className=" bg-neutral-200  shadow-lg rounded-md px-3 py-3">
      <ul className=" mx-auto  space-y-2">{menuItems.map(renderMenuItem)}</ul>
    </nav>
  );
};

export default Navigation;
