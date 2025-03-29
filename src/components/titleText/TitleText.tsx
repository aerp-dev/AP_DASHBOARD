import { memo, useMemo } from 'react'
import { twMerge } from 'utils'

type TitleTextProps = { title: string; className?: string }

const TitleText = memo(({ title, className = '' }: TitleTextProps): React.JSX.Element => {
  const displayTitle: string = title || '---'
  const mergedClasses: string = useMemo(() => twMerge('mt-3 mb-6 text-lg text-center font-semibold text-gray-500 uppercase dark:text-gray-400', className), [className])

  return (
    <h5 title={displayTitle} className={mergedClasses}>
      {displayTitle}
    </h5>
  )
})

export default TitleText