import { cn } from '../../lib/cn'

export type AtButtonVariants = 'green' | 'purple'

export interface AtButtonProps {
  variant?: AtButtonVariants
  text: string
  url: string
}

const getColorFromVariant = (variant: AtButtonVariants) => {
  return variant === 'green'
    ? 'text-emerald-500 border-emerald-500 hover:shadow-emerald-500'
    : 'text-purple-500 border-purple-500 hover:shadow-purple-500'
}

export const AtButton = ({ variant = 'green', text, url }: AtButtonProps) => {
  return (
    <a
      type='button'
      after-dynamic-value={text}
      className={cn(
        'inline-flex h-full max-w-full flex-row items-center \
        justify-center gap-3.5 rounded-md border-2 bg-neutral-800 \
        px-12 py-4 text-xl font-extralight hover:shadow-lg',
        getColorFromVariant(variant),
      )}
      href={url}
    >
      {text}
    </a>
  )
}
