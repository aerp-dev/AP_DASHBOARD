import { memo, useCallback, useMemo } from 'react'
import { Icon as Iconify } from '@iconify/react'
import { twMerge } from 'utils'
import { IconProps } from 'types'

const Icon = memo(function Icon({ icon, width = 21, onClick = () => null, className = '' }: IconProps): React.JSX.Element {
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return useMemo(
    () => (
      <Iconify
        icon={icon}
        width={width}
        onClick={handleClick}
        className={twMerge('flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white', className)}
      />
    ),
    [icon, width, handleClick, className],
  )
})

export default Icon