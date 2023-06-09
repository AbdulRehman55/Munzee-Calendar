import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "components/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const input: Story = {
  args: {
    placeholder: "Go Live Date (MHQ)",
    inputType: "input",
    className: "form-input",
  },
};

export const readOnlyinput: Story = {
  args: {
    readOnly: true,
    placeholder: "Go Live Date (MHQ)",
    inputType: "input",
    className: "form-input",
  },
};

export const textbox: Story = {
  args: {
    placeholder: "textbox",
    inputType: "textArea",
    className: "form-input",
  },
};
