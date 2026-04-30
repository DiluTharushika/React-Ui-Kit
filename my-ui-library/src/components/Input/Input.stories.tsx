import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Text input with optional label and error message. Supports all native input props.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when empty",
    },
    error: {
      control: "text",
      description: "Error message shown below the input",
    },
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