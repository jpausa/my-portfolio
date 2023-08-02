import { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { AtSpan } from '../atoms/at-span'

export interface MlSectionTitleProps {
  children: ReactNode
}

export const MlSectionTitle = ({ children }: MlSectionTitleProps) => {
  return (
    <div className='flex flex-row text-5xl font-medium tracking-wider'>
      <AtSpan text='<' />
      <h1 className={cn('text-slate-100')}>{children}</h1>
      <AtSpan text='>' />
    </div>
  )
}
