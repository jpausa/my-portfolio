import { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface AtTextProps {
  children: ReactNode
}

export const AtText = ({ children }: AtTextProps) => {
  return (
    <p className={cn('bg-transparent text-xl font-extralight leading-7 text-slate-100')}>
      {children}
    </p>
  )
}
