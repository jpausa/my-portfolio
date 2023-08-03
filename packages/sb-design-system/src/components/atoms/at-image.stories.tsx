import { AtImage } from './at-image'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/at-image',
  component: AtImage,
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
} satisfies Meta<typeof AtImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    altText: 'a test image of a guy',
    src: 'https://via.placeholder.com/467x622',
  },
}
