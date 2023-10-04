import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { buttonVariants } from "assets/styles/types";


const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary",
    buttontype: buttonVariants.PRIMARY,
  },
};
export const PrimaryWithArrow: Story = {
  args: {
    text: "Primary With Arrow",
    buttontype: buttonVariants.PRIMARY,
    icon: true,
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    buttontype: buttonVariants.SECONDARY,
  },
};

export const Text: Story = {
  args: {
    text: "Text button",
    buttontype: buttonVariants.TEXT,
  },
};
