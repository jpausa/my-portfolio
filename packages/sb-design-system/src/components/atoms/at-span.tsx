import { cn } from '../../lib/cn'

export type AtSpanColorVariants = 'green' | 'purple'

export interface AtSpanProps {
  variant?: AtSpanColorVariants
  className?: string
  text: string
}

const getColorFromVariant = (variant: AtSpanColorVariants) => {
  return variant === 'green' ? 'text-emerald-500' : 'text-purple-500'
}

export const AtSpan = ({ variant = 'green', className, text }: AtSpanProps) => {
  return <span className={cn(getColorFromVariant(variant), className)}>{text}</span>
}
