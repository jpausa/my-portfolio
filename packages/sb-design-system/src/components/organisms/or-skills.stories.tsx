import { OrSkills } from './or-skills'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Organisms/or-skills',
  component: OrSkills,
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
} satisfies Meta<typeof OrSkills>

export default meta
type Story = StoryObj<typeof meta>

export const Defaut: Story = {
  args: {
    tags: [
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#nodejs',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/nodejs.png' } },
          altText: 'nodejs',
        },
        tagColor: 'green-400',
        textColor: 'slate-100',
      },
      {
        text: '#progressiveWebApp',
        tagColor: 'gradients',
        textColor: 'slate-100',
      },
      {
        text: '#react-native',
        tagColor: 'neutral-800',
        textColor: 'sky-400',
        image: {
          asset: { file: { url: 'https://img.icons8.com/color/48/react-native.png' } },
          altText: 'nodejs logo',
        },
      },
      {
        text: '#rest-api',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
      {
        text: '#git',
        tagColor: 'slate-100',
        textColor: 'zinc-800',
      },
    ],
    title: { text: 'Skills', beginingSpan: '<', endSpan: '>', spanColor: 'green' },
  },
}
