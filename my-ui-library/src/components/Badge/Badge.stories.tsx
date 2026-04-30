import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Small status label used to highlight state or categories (success, warning, danger, etc.).",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["neutral", "success", "warning", "danger"],
      description: "Color style of the badge",
    },
    children: {
      control: "text",
      description: "Text content of the badge",
    },
  },
  args: {
    children: "New",
    variant: "neutral",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};
export const Success: Story = {
  args: { variant: "success", children: "Success" },
};
export const Warning: Story = {
  args: { variant: "warning", children: "Warning" },
};
export const Danger: Story = {
  args: { variant: "danger", children: "Danger" },
};