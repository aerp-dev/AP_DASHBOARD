import { memo } from 'react'
import { Link } from 'react-router-dom'
import { LinkedTextProps } from 'types'
import { twMerge } from 'utils'

const LinkedText = memo(function LinkedText({ title, url, className = '', translate = 'no', target = '_blank' }: LinkedTextProps): React.JSX.Element {
  return (
    <Link
      to={url}
      target={target}
      rel='noopener noreferrer'
      className={twMerge('font-semibold underline text-[var(--visualColorMain)] dark:text-[var(--visualColorThird)]', className)}
      translate={translate}>
      {title || '---'}
    </Link>
  )
})

export default LinkedText