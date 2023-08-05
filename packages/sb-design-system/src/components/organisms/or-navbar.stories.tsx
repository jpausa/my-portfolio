import { OrNavBar } from './or-navbar'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Organisms/or-navbar',
  component: OrNavBar,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrNavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Defaut: Story = {
  args: {
    headImg: {
      altText: 'sample img',
      asset: { file: { url: 'https://via.placeholder.com/115x150' } },
    },
    navItems: [
      { url: '#', label: 'Projects', variant: 'navigation' },
      { url: '#', label: 'Skills', variant: 'navigation' },
      { url: '#', label: 'Experience', variant: 'navigation' },
      { url: '#', label: 'Contact', variant: 'navigation' },
    ],
    socialItems: [
      { url: '#', label: 'LinkedIn', variant: 'social', socialVariant: 'linkedin' },
      { url: '#', label: 'Github', variant: 'social', socialVariant: 'github' },
    ],
  },
}
