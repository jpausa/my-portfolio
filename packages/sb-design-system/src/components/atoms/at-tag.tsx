import { cn } from '../../lib/cn'
import { AtImage, AtImageProps } from './at-image'

export type AtTagColorVariants =
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'amber-300'
  | 'amber-400'
  | 'slate-100'
  | 'sky-300'
  | 'sky-400'
  | 'neutral-800'
  | 'lime-600'
  | 'zinc-800'
  | 'gradients'
  | 'blue-600'
  | 'emerald-400'
  | 'cyan-700'

const getStylesFromVariant = (variant: AtTagColorVariants, elementType: 'bg' | 'text'): string => {
  const colorVariants: Record<string, Record<string, string>> = {
    'green-300': { bg: 'bg-green-300', text: 'text-green-300' },
    'green-400': { bg: 'bg-green-400', text: 'text-green-400' },
    'green-500': { bg: 'bg-green-500', text: 'text-green-500' },
    'amber-300': { bg: 'bg-amber-300', text: 'text-amber-300' },
    'amber-400': { bg: 'bg-amber-400', text: 'text-amber-400' },
    'slate-100': { bg: 'bg-slate-100', text: 'text-slate-100' },
    'sky-300': { bg: 'bg-sky-300', text: 'text-sky-300' },
    'sky-400': { bg: 'bg-sky-400', text: 'text-sky-400' },
    'neutral-800': { bg: 'bg-neutral-800', text: 'text-neutral-800' },
    'lime-600': { bg: 'bg-lime-600', text: 'text-lime-600' },
    'zinc-800': { bg: 'bg-zinc-800', text: 'text-zinc-800' },
    gradients: { bg: 'bg-gradient-to-r from-rose-600 to-amber-500', text: 'text-slate-100' },
    'blue-600': { bg: 'bg-blue-600', text: 'text-blue-600' },
    'emerald-400': { bg: 'bg-emerald-400', text: 'text-emerald-400' },
    'cyan-700': { bg: 'bg-cyan-700', text: 'text-cyan-700' },
  }

  return colorVariants[variant][elementType]
}

export interface AtTagProps {
  text: string
  textColor: AtTagColorVariants
  tagColor: AtTagColorVariants
  image?: AtImageProps
}

export const AtTag = ({ text, textColor, tagColor, image }: AtTagProps) => {
  return (
    <div
      className={cn(
        getStylesFromVariant(tagColor, 'bg'),
        'inline-flex flex-col items-center justify-center rounded-md border px-4 py-2',
      )}
    >
      <div className={cn('inline-flex items-center justify-center gap-4', !image && 'p-2' )}>
        {image && <AtImage src={image.src} altText={image.altText} />}
        <span className={cn(getStylesFromVariant(textColor, 'text'), 'text-2xl font-semibold')}>
          {text}
        </span>
      </div>
    </div>
  )
}
