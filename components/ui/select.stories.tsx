import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/ui/select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the select is open or not",
    },
    variant: {
      options: ["default", "error"],
      control: "select",
      description: "The variant of the select",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: "select",
      description: "The size of the select",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the select",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled or not",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const optionWithCategories = [
  {
    label: <span>Frutis</span>,
    title: "Frutis",
    options: [
      { label: <span>Apple</span>, value: "Apple", disabled: true },
      { label: <span>Banana</span>, value: "Banana", disabled: true },
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
const options = [
  { label: <span>Apple</span>, value: "Apple", disabled: true },
  { label: <span>Banana</span>, value: "Banana" },
  { label: <span>Orange</span>, value: "Orange", disabled: true },
  { label: <span>Mango</span>, value: "Mango" },
];

export const Default: Story = {
  args: {
    placeholder: "Select an option",
    options: options,
  },
};
export const OptionWithCategories: Story = {
  args: {
    placeholder: "Select an option",
    options: optionWithCategories,
  },
};
export const Error: Story = {
  args: {
    placeholder: "Error select",
    status: "error",
    options: options,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled select",
    disabled: true,
    options: options,
  },
};

export const MultiSelect: Story = {
  args: {
    placeholder: "Multi-select",
    mode: "multiple",
    options: options,
  },
};
