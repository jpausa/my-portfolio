import { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface AtTextProps {
  children: ReactNode
}

export const AtText = ({ children }: AtTextProps) => {
  return (
    <p className={cn('text-slate-100 bg-transparent text-xl font-extralight leading-7')}>
      {children}
    </p>
  )
}
