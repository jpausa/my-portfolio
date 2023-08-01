import { Button } from "./at-button"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Atoms/at-button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

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
    variant: "purple",
  },
}
