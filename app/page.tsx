"use client";
import Image from "next/image";
import Button from "../components/ui/button";
import Navigation from "@/components/ui/navigation";
import Select from "@/components/ui/select";
import { useState } from "react";
export default function Home() {
  const menuItems = [
    {
      label: "Main Menu Item1",
      href: "/",
    },
    {
      label: "Main Menu Item2",
      href: "/",
    },
    {
      label: "Main Menu Item3",
      href: "/",
    },

    {
      label: "Main Menu Item4",
      href: "/products",
      subMenu: [
        {
          label: "Electronics",
          href: "/products/electronics",
          thirdLevelMenu: [
            { label: "Phones", href: "/products/electronics/phones" },
            { label: "Laptops", href: "/products/electronics/laptops" },
          ],
        },
        {
          label: "Clothing",
          href: "/products/clothing",
          thirdLevelMenu: [
            { label: "Men", href: "/products/clothing/men" },
            { label: "Women", href: "/products/clothing/women" },
          ],
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ];
  const options = [
    {
      label: <span>Frutis</span>,
      title: "Frutis",
      options: [
        { label: <span>Apple</span>, value: "Apple" },
        { label: <span>Banana</span>, value: "Banana" },
        { label: <span>Orange</span>, value: "Orange" },
        { label: <span>Mango</span>, value: "Mango" },
      ],
    },
    {
      label: <span>Vegetables</span>,
      title: "Vegetables",
      options: [
        { label: <span>Carrot</span>, value: "Carrot" },
        { label: <span>Broccoli</span>, value: "Broccoli" },
        { label: <span>Cucumber</span>, value: "Cucumber" },
        { label: <span>Lettuce</span>, value: "Lettuce" },
      ],
    },
  ];
  const [art, setArt] = useState();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white  ">
      {/* <Navigation menuItems={menuItems} /> */}
      <Select
        placeholder="Select an option"
        options={options}
        value={art}
        onChange={setArt}
      />
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
    </main>
  );
}
