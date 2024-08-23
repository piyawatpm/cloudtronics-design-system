import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./textArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/ui/textarea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "error"],
      control: "select",
      description: "The variant of the textarea",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: "select",
      description: "The size of the textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled or not",
    },
    rows: {
      control: "number",
      description: "The number of rows in the textarea",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text here",
    rows: 4,
  },
};



export const Error: Story = {
  args: {
    placeholder: "Error textarea",
    variant: "error",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
    rows: 4,
  },
};
