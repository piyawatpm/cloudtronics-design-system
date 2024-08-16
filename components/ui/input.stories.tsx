import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/ui/input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "error"],
      control: "select",
      description: "The variant of the input",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: "select",
      description: "The size of the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled or not",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    size: "default",
    variant: "default",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small input",
    size: "sm",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input",
    size: "lg",
    variant: "default",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error input",
    size: "default",
    variant: "error",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    size: "default",
    variant: "default",
    disabled: true,
  },
};
