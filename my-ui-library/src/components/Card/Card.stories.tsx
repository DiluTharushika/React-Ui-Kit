import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card title",
    children: "This is some content inside the card.",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};