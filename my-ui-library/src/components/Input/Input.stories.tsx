import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Your name",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "Your name",
    placeholder: "Enter your name",
    error: "Name is required",
  },
};