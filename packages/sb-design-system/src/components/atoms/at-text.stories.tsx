import { AtText } from './at-text'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/at-text',
  component: AtText,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='bg-neutral-800'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'A developer who is interested in more than just code.\
         Developed a learning management system. Coordinated the work of a \
          team of three. Interested in a product that improves or \
          simplifies life.',
  },
}
