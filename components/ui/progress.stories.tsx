import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Progress from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/ui/progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "number", min: 0, max: 100 },
      description: "The percentage of the progress",
    },
    status: {
      options: ["success", "exception", "normal", "active"],
      control: { type: "select" },
      description: "The status of the progress",
    },
    showInfo: {
      control: "boolean",
      description: "Whether to display the progress info",
    },
    strokeColor: {
      control: "color",
      description: "The color of the progress bar",
    },
    type: {
      options: ["line", "circle", "dashboard"],
      control: { type: "select" },
      description: "The type of the progress",
    },
    size: {
      options: ["default", "small"],
      control: { type: "select" },
      description: "The size of the progress",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    percent: 50,
    showInfo: true,
  },
};

export const CircularProgress: Story = {
  args: {
    percent: 75,
    type: "circle",
  },
};

export const DashboardProgress: Story = {
  args: {
    percent: 90,
    type: "dashboard",
  },
};

export const SuccessProgress: Story = {
  args: {
    percent: 100,
    status: "success",
  },
};

export const ExceptionProgress: Story = {
  args: {
    percent: 70,
    status: "exception",
  },
};

export const SmallSizeProgress: Story = {
  args: {
    percent: 40,
    size: "small",
  },
};
