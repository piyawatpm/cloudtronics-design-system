import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const meta: Meta<typeof Input> = {
  title: "Components/ui/input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled or not",
    },
    variant: {
      options: ["default", "error"],
      control: "select",
      description: "The variant of the input",
    },
    size: {
      options: ["large", "middle", "small"],
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
    addonBefore: {
      control: "text",
      description:
        "The label text displayed before (on the left side of) the input field",
    },
    addonAfter: {
      control: "text",
      description:
        "The label text displayed after (on the right side of) the input field",
    },
    prefix: {
      control: "text",
      description: "The prefix icon for the Input",
    },
    suffix: {
      control: "text",
      description: "The suffix icon for the Input",
    },
    allowClear: {
      control: "boolean",
      description: "If allow to remove input content with clear icon",
    },
    bordered: {
      control: "boolean",
      description: "Whether has border style",
    },
    defaultValue: {
      control: "text",
      description: "The initial input content",
    },
    maxLength: {
      control: "number",
      description: "The max length of the input",
    },
    status: {
      options: ["", "error", "warning"],
      control: "select",
      description: "Set validation status",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    size: "middle",
  },
};
export const WithButton: Story = {
  render: () => (
    <>
      <Input placeholder="With Button" withButton />
    </>
  ),
};
export const WithSizes: Story = {
  render: () => (
    <>
      <Input size="large" placeholder="Large size" />
      <br />
      <br />
      <Input size="middle" placeholder="Default size" />
      <br />
      <br />
      <Input size="small" placeholder="Small size" />
    </>
  ),
};

export const WithAddonBeforeAfter: Story = {
  args: {
    addonBefore: "http://",
    addonAfter: ".com",
    defaultValue: "mysite",
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: <UserOutlined />,
    placeholder: "Enter your username",
  },
};

export const WithSuffix: Story = {
  args: {
    suffix: <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />,
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  render: () => (
    <Input.Password
      placeholder="input password"
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  ),
};

export const AllowClear: Story = {
  args: {
    allowClear: true,
    placeholder: "Enter text here",
  },
};
export const Borderless: Story = {
  args: {
    bordered: false,
    placeholder: "Borderless",
  },
};

export const WithStatus: Story = {
  render: () => (
    <>
      <Input status="error" placeholder="Error" />
      <br />
      <br />
      <Input status="warning" placeholder="Warning" />
    </>
  ),
};

export const TextArea: Story = {
  render: () => (
    <Input.TextArea rows={4} placeholder="Enter multiple lines of text" />
  ),
};

export const Search: Story = {
  render: () => <Input.Search placeholder="input search text" enterButton />,
};
