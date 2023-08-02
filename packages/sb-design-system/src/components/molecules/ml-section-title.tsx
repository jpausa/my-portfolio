import { cn } from '../../lib/cn'
import { AtSpan, AtSpanColorVariants } from '../atoms/at-span'

export interface MlSectionTitleProps {
  className?: string
  spanColor?: AtSpanColorVariants
  beginingSpan?: string
  endSpan?: string
  text: string
}

export const MlSectionTitle = ({
  className,
  spanColor,
  beginingSpan,
  endSpan,
  text,
}: MlSectionTitleProps) => {
  return (
    <div className={cn('flex text-5xl font-medium tracking-wider', className)}>
      <h1 className={cn('whitespace-pre-wrap text-slate-100')}>
        {beginingSpan && <AtSpan variant={spanColor} text={beginingSpan} />}
        {text}
        {endSpan && <AtSpan variant={spanColor} text={endSpan} />}
      </h1>
    </div>
  )
}
