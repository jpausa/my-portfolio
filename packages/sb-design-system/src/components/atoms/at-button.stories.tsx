import { AtButton } from './at-button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/at-button',
  component: AtButton,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AtButton>

export default meta
type Story = StoryObj<typeof meta>

export const Green: Story = {
  args: {
    url: '#',
    text: 'Contact Me',
  },
}

export const Purple: Story = {
  args: {
    url: '#',
    text: 'Contact Me',
    variant: 'purple',
  },
}
