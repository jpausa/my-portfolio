import { MlSectionTitle } from './ml-section-title'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Molecules/ml-section-title',
  component: MlSectionTitle,
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
} satisfies Meta<typeof MlSectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Projects',
  },
}
