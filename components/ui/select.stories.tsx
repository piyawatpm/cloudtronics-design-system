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

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    placeholder: "Select an option",
    options: options,
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small select",
    size: "sm",
    options: options,
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large select",
    size: "lg",
    options: options,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error select",
    variant: "error",
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
