import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  args: {
    title: "Example Modal",
    children: "This is the modal content.",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithButton = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalWithButton {...args} />,
};