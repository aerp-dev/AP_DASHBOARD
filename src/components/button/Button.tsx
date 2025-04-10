import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// Utils
import { twMerge } from 'utils'
import { useTypedSelector } from 'hooks'

// Components
import { ComingSoon, Loader } from 'components'

// Types
import type { HTMLAttributes, ReactNode } from 'react'
interface IAddItemBtnProps {
  id?: string
  path?: string
  type?: 'button' | 'submit'
  ref?: React.RefObject<HTMLButtonElement | null>
  disabled?: boolean
  loading?: boolean
  title?: string
  form?: string
  style?: HTMLAttributes<HTMLButtonElement>['style']
  children?: ReactNode
  onClick?: () => void
  className?: string | string[]
  colorVariant?: 'default' | 'secondary' | 'danger' | 'green' | 'transparent' | 'full_transparent'
  coming_soon?: boolean
  customClassName?: string
  tabIndex?: number
  empty?: boolean
}

const styleColorVariants: Record<string, string> = {
  default:
    'bg-[var(--visualColorMain)] hover:bg-[var(--visualColorSecond)] focus:ring-[var(--visualColorFourth)] dark:bg-[var(--visualColorMain)] dark:hover:bg-[var(--visualColorSecond)] dark:focus:ring-[var(--visualColorSecond)] disabled:hover:bg-[var(--visualColorMain)] dark:disabled:hover:bg-[var(--visualColorMain)]',
  secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 disabled:hover:bg-gray-600 dark:disabled:hover:bg-gray-600',
  danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700 disabled:hover:bg-red-600 dark:disabled:hover:bg-red-600',
  green: 'bg-green-600 hover:bg-green-700 focus:ring-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700 disabled:hover:bg-green-600 dark:disabled:hover:bg-green-600',
  transparent:
    'p-2 rounded-lg text-gray-500 bg-transparent hover:bg-gray-100 border border-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600',
  full_transparent:
    'p-2 rounded-lg text-gray-500 bg-transparent hover:bg-transparent border-none hover:text-gray-900 dark:bg-transparent dark:text-gray-300 dark:border-none dark:hover:text-white dark:hover:bg-transparent',
}

export default function Button({
  id = '',
  path = '',
  type = 'button',
  title = '',
  form,
  onClick,
  style = {},
  className = '',
  disabled = false,
  loading = false,
  children,
  colorVariant = 'default',
  coming_soon = false,
  customClassName = '',
  tabIndex = 0,
  empty = false,
}: IAddItemBtnProps): React.JSX.Element {
  const { t } = useTranslation()
  // const { isLoading } = useTypedSelector((s) => s.store)
  let isLoading = false
  const navigate = useNavigate()

  function handleClick(): void {
    if (onClick) onClick()
    if (path) navigate(path)
  }

  return (
    <button
      id={id}
      type={type}
      title={title}
      form={form}
      style={style}
      aria-busy={loading || isLoading}
      onClick={() => !coming_soon && handleClick()}
      disabled={disabled || loading || isLoading}
      aria-disabled={disabled || loading || isLoading}
      className={
        customClassName
          ? customClassName
          : twMerge(
              'w-max text-sm px-6 py-3.5 text-white text-center focus:ring-4 font-medium rounded-lg focus:outline-none disabled:opacity-85 animate-ease',
              styleColorVariants?.[colorVariant],
              disabled || loading || isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
              className,
              coming_soon ? 'relative overflow-hidden' : '',
            )
      }
      tabIndex={tabIndex}>
      {loading || isLoading ? <Loader className='w-5 h-5 border-2' /> : empty ? '' : children ? children : title || t('global.add')}

      {coming_soon && <ComingSoon isOpen={coming_soon} />}
    </button>
  )
}