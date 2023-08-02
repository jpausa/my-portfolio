
import { IconLinkedin } from '../icons/at-icon-linkedin'
import { AtLink } from './at-link'
import type { Meta, StoryObj } from '@storybook/react'


const meta = {
  title: 'Atoms/at-link',
  component: AtLink,
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
} satisfies Meta<typeof AtLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: '#',
    label:
      'learning management system',
  },
}

export const Green: Story = {
  args: {
    variant: 'green',
    url: '#',
    label:
      'Read more ...',
  },
}

export const Purple: Story = {
  args: {
    variant: 'purple',
    url: '#',
    label:
      'Read more ...',
  },
}

export const Navigation: Story = {
  args: {
    variant: 'navigation',
    url: '#',
    label:
      'Projects',
  },
}

export const Social: Story = {
  args: {
    variant: 'social',
    url: '#',
    icon: <IconLinkedin className='w-7 h-7'/>,
    label:
      'LinkedIn',
  },
}
