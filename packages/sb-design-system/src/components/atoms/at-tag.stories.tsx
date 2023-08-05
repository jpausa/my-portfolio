import { AtTag } from './at-tag'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/at-tag',
  component: AtTag,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AtTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '#nodejs',
    tagColor: 'green-400',
    textColor: 'slate-100',
    image: {
      asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
      altText: 'nodejs logo',
    },
  },
}

export const GradientNoIcon: Story = {
  args: {
    text: '#progressiveWebApp',
    tagColor: 'gradients',
    textColor: 'slate-100',
  },
}

export const ReactNative: Story = {
  args: {
    text: '#react-native',
    tagColor: 'neutral-800',
    textColor: 'sky-400',
    image: {
      asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
      altText: 'nodejs logo',
    },
  },
}
