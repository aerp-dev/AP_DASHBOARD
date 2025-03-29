import { memo } from 'react'
import { twMerge } from 'utils'
import { useTranslation } from 'react-i18next'

const ComingSoon = memo(function ComingSoon({ isOpen, isAccessed = true }: { isOpen: boolean; isAccessed?: boolean }): React.JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='cursor-not-allowed absolute inset-0 bg-gray-300 dark:bg-gray-700 bg-opacity-55 dark:bg-opacity-75 hover:bg-opacity-90 focus:bg-opacity-90 animate-ease-fast'>
      <p
        className={twMerge(
          'w-full h-full grid place-items-center font-semibold',
          isAccessed ? 'text-[var(--visualColorMain)] dark:text-[var(--visualColorThird)]' : 'text-red-600 dark:text-red-500',
          'opacity-0 hover:opacity-100 animate-ease text-center',
          isOpen ? 'text-base' : 'text-xs',
        )}>
        {isAccessed ? t('global.comingSoon') : t('global.noAccess')}!
      </p>
    </div>
  )
})

export default ComingSoon