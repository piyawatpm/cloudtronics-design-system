import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./dialog";
import Button from "./button";

const meta: Meta<typeof Dialog> = {
  title: "Components/UI/dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    title: { control: "text" },
    children: { control: "text" },
    okText: { control: "text" },
    cancelText: { control: "text" },
    onOk: { action: "ok clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogWithButton = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openDialog}>Open Dialog</Button>
      <Dialog {...args} isOpen={isOpen} onClose={closeDialog} onOk={closeDialog} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogWithButton {...args} />,
  args: {
    title: "Default Dialog",
    children: "This is the content of the dialog.",
  },
};

export const CustomButtons: Story = {
  render: (args) => <DialogWithButton {...args} />,
  args: {
    title: "Custom Buttons Dialog",
    children: "This dialog has custom button text.",
    okText: "Confirm",
    cancelText: "Dismiss",
  },
};

export const LongContent: Story = {
  render: (args) => <DialogWithButton {...args} />,
  args: {
    title: "Long Content Dialog",
    children: (
      <>
        <p>This dialog has longer content to demonstrate scrolling.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
          tincidunt nisl nunc euismod nunc.
        </p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </>
    ),
  },
};