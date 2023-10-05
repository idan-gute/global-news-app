import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";
import { SelectVariants } from "assets/styles/types";


const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    // text: { control: "text" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
//   args: {

//   },
}