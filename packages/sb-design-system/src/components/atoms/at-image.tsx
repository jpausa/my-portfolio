import { cn } from '../../lib/cn'
import { ContentfulAsset } from '../../types/contentful-types'

export interface AtImageProps {
  asset: ContentfulAsset
  altText: string
  hasBorder?: boolean
}

export const AtImage = ({ altText, asset, hasBorder = false }: AtImageProps) => {
  const src = asset?.file?.url
  return (
    <img alt={altText} src={src} className={cn(hasBorder && 'rounded border border-emerald-500')} />
  )
}
