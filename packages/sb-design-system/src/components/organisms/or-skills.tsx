import { cn } from '../../lib/cn'
import { AtTag, AtTagProps } from '../atoms/at-tag'
import { MlSectionTitle, MlSectionTitleProps } from '../molecules/ml-section-title'

export interface OrSkillsProps {
  tags: AtTagProps[]
  title: MlSectionTitleProps
  className?: string
}

export const OrSkills = ({ tags, title, className }: OrSkillsProps) => {
  return (
    <div className={cn('flex flex-col gap-16', className)}>
      <MlSectionTitle {...title} />
      <div className={cn('flex flex-wrap gap-4')}>
        {tags.map((tag) => (
          <AtTag key={tag.text} {...tag} />
        ))}
      </div>
    </div>
  )
}
