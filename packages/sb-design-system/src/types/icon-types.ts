export interface IconProps {
  className?: string
  width?: string
  height?: string
  fillColor?: string
  direction?: IconDirection
  focusable?: boolean
}

export type IconDirection = 'up' | 'down' | 'left'
