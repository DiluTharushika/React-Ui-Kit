import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" }
  },
  args: {
    label: "Accept terms and conditions"
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const ControlledCheckbox = (args: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledCheckbox {...args} />
};