import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

const meta: Meta<typeof Radio> = {
  title: "Components/ui/radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the radio is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio is disabled",
    },
    children: {
      control: "text",
      description: "The content to be displayed next to the radio button",
    },
  },
};
const mockOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3", disabled: true },
];
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    options: [{ label: "Option 1", value: "1" }],
  },
};

export const Checked: Story = {
  args: {
    options: [{ label: "Option 1", value: "1" }],
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    options: [{ label: "Option 1", value: "1" }],
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    options: mockOptions,
    disabled: true,
    checked: true,
  },
};

export const RadioGroup: Story = {
  render: () => <Radio options={mockOptions} />,
};
export const RadioGroupVertical: Story = {
  render: () => <Radio options={mockOptions} direction="vertical" />,
};
