"use client";
import Image from "next/image";
import Button from "../components/ui/button";
import Navigation from "@/components/ui/navigation";
import Select from "@/components/ui/select";
import { useState } from "react";
import { notification } from "antd";
import { theme } from "../theme";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Radio from "@/components/ui/radio";
// import  from "@/components/ui/radio";

export default function Home() {
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
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
  // const options = [
  //   {
  //     label: <span>Frutis</span>,
  //     title: "Frutis",
  //     options: [
  //       { label: <span>Apple</span>, value: "Apple" },
  //       { label: <span>Banana</span>, value: "Banana" },
  //       { label: <span>Orange</span>, value: "Orange" },
  //       { label: <span>Mango</span>, value: "Mango" },
  //     ],
  //   },
  //   {
  //     label: <span>Vegetables</span>,
  //     title: "Vegetables",
  //     options: [
  //       { label: <span>Carrot</span>, value: "Carrot" },
  //       { label: <span>Broccoli</span>, value: "Broccoli" },
  //       { label: <span>Cucumber</span>, value: "Cucumber" },
  //       { label: <span>Lettuce</span>, value: "Lettuce" },
  //     ],
  //   },
  // ];
  const [art, setArt] = useState();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white  ">
      {/* <Navigation menuItems={menuItems} /> */}
      <Radio options={options} />
      <Select
        placeholder="Select an option"
        options={options}
        value={art}
        onChange={setArt}
      />
      <Button
      // onClick={() => {
      //   handleOpenNotification("error");
      // }}
      >
        Open the notification box
      </Button>
    </main>
  );
}
