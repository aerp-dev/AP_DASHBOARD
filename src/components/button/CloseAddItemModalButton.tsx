import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// Utils
import { twMerge } from 'utils'

// Components
import { Button, Icon } from 'components'

// Types
interface CloseAddItemModalButtonProps {
  url?: string
  onClick?: Function
  className?: string
}

export default function CloseAddItemModalButton({ url, onClick, className = '' }: CloseAddItemModalButtonProps): React.JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const params: URLSearchParams = new URLSearchParams(window?.location?.search)

  return (
    <div className='flex justify-end'>
      <Button
        type='button'
        onClick={() => (onClick ? onClick() : Boolean(params?.get('add_window')) ? window?.close() : navigate(url || '/'))}
        data-drawer-dismiss='drawer-create-product-default'
        aria-controls='drawer-create-product-default'
        customClassName={twMerge('text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base border p-1.5 dark:hover:bg-gray-600 dark:hover:text-white', className)}>
        <Icon icon='iconamoon:close-bold' className='text-inherit dark:text-inherit' />
        <span className='sr-only'>{t('global.closeMenu')}</span>
      </Button>
    </div>
  )
}