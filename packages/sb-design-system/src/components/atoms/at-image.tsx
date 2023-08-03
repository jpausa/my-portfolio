import { cn } from '../../lib/cn'

export interface AtImageProps {
  src: string
  altText: string
  hasBorder?: boolean
}

export const AtImage = ({ altText, src, hasBorder = false }: AtImageProps) => {
  return (
    <img alt={altText} src={src} className={cn(hasBorder && 'rounded border border-emerald-500')} />
  )
}
