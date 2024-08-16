import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

import { action } from "@storybook/addon-actions";
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M13.332 3.16675H2.66536C1.92898 3.16675 1.33203 3.7637 1.33203 4.50008V12.5001C1.33203 13.2365 1.92898 13.8334 2.66536 13.8334H13.332C14.0684 13.8334 14.6654 13.2365 14.6654 12.5001V4.50008C14.6654 3.7637 14.0684 3.16675 13.332 3.16675Z"
      stroke="#FAFAFA"
      stroke-width="0.666667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6654 5.16675L8.68536 8.96675C8.47955 9.0957 8.24158 9.16409 7.9987 9.16409C7.75582 9.16409 7.51785 9.0957 7.31203 8.96675L1.33203 5.16675"
      stroke="#FAFAFA"
      stroke-width="0.666667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "destrictive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: "select",
      description: "The variant of the button",
    },
    icon: {
      control: "boolean",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: "select",
      description: "The size of the button",
    },
    children: {
      control: "text",
      description: "The content to be displayed inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Function to be called when the button is clicked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled or not",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to be applied to the button",
    },
  },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
    children: "Default Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    size: "default",
    variant: "default",
    children: "Button with Icon",
    onClick: action("clicked"),
    disabled: false,
    icon: <EmailIcon />,
  },
};
export const Loading: Story = {
  args: {
    size: "default",
    variant: "default",
    children: "Button with Loading",
    onClick: action("clicked"),
    disabled: false,
    loading: true,
  },
};
export const Destrictive: Story = {
  args: {
    size: "default",
    variant: "destructive",
    children: "Destructive Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    size: "default",
    variant: "outline",
    children: "Outline Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    size: "default",
    variant: "secondary",
    children: "Secondary Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    size: "default",
    variant: "ghost",
    children: "Ghost Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    size: "default",
    variant: "link",
    children: "Link Button",
    onClick: action("clicked"),
    disabled: false,
  },
};

