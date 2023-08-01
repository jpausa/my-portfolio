import { Button } from "./at-button"
import type { Meta, StoryObj } from "@storybook/react"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Atoms/at-button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Green: Story = {
  args: {
    url: "#",
    text: "Contact Me",
  },
}

export const Purple: Story = {
  args: {
    url: "#",
    text: "Contact Me",
    variant: 'purple'
  },
}
