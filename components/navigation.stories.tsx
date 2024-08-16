import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./ui/navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/UI/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
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

export const Default: Story = {
  args: {
    menuItems: menuItems,
  },
};

export const SingleLevel: Story = {
  args: {
    menuItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    menuItems: [
      { label: "Home", href: "/" },
      {
        label: "Products",
        href: "/products",
        subMenu: [
          { label: "Electronics", href: "/products/electronics" },
          { label: "Clothing", href: "/products/clothing" },
        ],
      },
      { label: "About", href: "/about" },
    ],
  },
};
