import { cn } from '../../lib/cn'

export interface AtImageProps {
  src: string
  altText: string
}

export const AtImage = ({ altText, src }: AtImageProps) => {
  return (
    <img
      alt={altText}
      src={src}
      className={cn('rounded border border-emerald-500')}
    />
  )
}
