import { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { IconApple } from '../icons/ic-apple'
import { IconFacebook } from '../icons/ic-facebook'
import { IconInstagram } from '../icons/ic-instagram'
import { IconLinkedin } from '../icons/ic-linkedin'
import { IconTwitter } from '../icons/ic-twitter'
import { IconYoutube } from '../icons/ic-youtube'
import { IconGithub } from '../icons/ic-github'

export type AtLinkVariants = 'default' | 'green' | 'purple' | 'navigation' | 'social'

export type AtLinkSocialVariants =
  | 'facebook'
  | 'twitter'
  | 'youtube'
  | 'linkedin'
  | 'instagram'
  | 'itunes'
  | 'github'

const socialIconCNs = 'w-7 h-7'

const socialIcon: Record<AtLinkSocialVariants, JSX.Element> = {
  itunes: <IconApple className={socialIconCNs} />,
  facebook: <IconFacebook className={socialIconCNs} />,
  instagram: <IconInstagram className={socialIconCNs} />,
  linkedin: <IconLinkedin className={socialIconCNs} />,
  twitter: <IconTwitter className={socialIconCNs} />,
  youtube: <IconYoutube className={socialIconCNs} />,
  github: <IconGithub className={socialIconCNs} />,
}

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
  socialVariant?: AtLinkSocialVariants
  className?: string
  url: string
  icon?: ReactNode
  label: string
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
}

export const AtLink = ({
  variant = 'default',
  socialVariant,
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
      {(icon && icon) || (socialVariant && socialIcon[socialVariant!])}
      {label && label}
    </a>
  )
}
