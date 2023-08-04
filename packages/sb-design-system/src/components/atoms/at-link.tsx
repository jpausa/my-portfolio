import { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type AtLinkVariants = 'default' | 'green' | 'purple' | 'navigation' | 'social'

const getStyleFromVariant = (variant: AtLinkVariants) => {
  const stylesMap = {
    default: 'text-slate-100 text-xl font-extralight underline leading-7',
    green: 'self-stretch text-emerald-500 text-xl font-extralight',
    purple: 'self-stretch text-purple-500 text-xl font-extralight',
    navigation: 'text-slate-100 text-xl font-extralight',
    social: 'text-slate-100 text-xl font-extralight',
  }
  return stylesMap[variant] ?? stylesMap['default']
}

export interface AtLinkProps {
  variant?: AtLinkVariants
  className?: string
  url: string
  icon?: ReactNode
  label: string
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
}

export const AtLink = ({
  variant = 'default',
  className,
  url,
  icon,
  label,
  onBlur,
  onFocus,
}: AtLinkProps) => {
  return (
    <a
      href={url}
      className={cn(getStyleFromVariant(variant), 'flex flex-row gap-3', className)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {icon && icon}
      {label && label}
    </a>
  )
}
