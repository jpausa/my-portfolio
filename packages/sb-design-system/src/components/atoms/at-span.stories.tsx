import { AtSpan } from './at-span'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/at-span',
  component: AtSpan,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className=' bg-neutral-800'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtSpan>

export default meta
type Story = StoryObj<typeof meta>

export const GreaterThan: Story = {
  args: {
    text: '<',
    className: 'text-5xl'
  },
}

export const Dot: Story = {
  args: {
    variant: 'purple',
    text: '.',
    className: 'text-8xl'
  },
}
