import { cn } from '../../lib/cn'
import { AtImage, AtImageProps } from '../atoms/at-image'
import { AtLink, AtLinkProps } from '../atoms/at-link'

export interface OrNavBarProps {
  headImg: AtImageProps
  navItems: AtLinkProps[]
  socialItems: AtLinkProps[]
}

export const OrNavBar = ({ headImg, navItems, socialItems }: OrNavBarProps) => {
  const lastNavItemIndex = navItems.length - 1
  return (
    <nav className='inline-flex flex-col items-center justify-center bg-neutral-900 pb-6 pt-8'>
      <div className='pb-64'>
        <AtImage {...headImg} />
      </div>
      <div className='px-1 pb-96'>
        {navItems.map((links, index) => (
          <AtLink
            {...links}
            variant='navigation'
            className={cn(
              index !== lastNavItemIndex && 'border-b border-b-stone-600',
              'place-content-center px-20 py-4 text-xl  font-extralight',
            )}
          />
        ))}
      </div>
      <div className='px-1'>
        {socialItems.map((links) => (
          <AtLink
            {...links}
            variant='social'
            socialVariant={links.socialVariant}
            className='py-2'
          />
        ))}
      </div>
    </nav>
  )
}
