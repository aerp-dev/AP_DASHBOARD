import { useTranslation } from 'react-i18next'
import { Icon, SectionVisibilityDetector } from 'components'

// Types
interface TableActionButtonsProps {
  disabled?: boolean
  handleUpdateClick?: React.MouseEventHandler<HTMLButtonElement>
  handleDeleteClick?: React.MouseEventHandler<HTMLButtonElement>
  handleAddClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function TableActionButtons({ disabled, handleUpdateClick, handleDeleteClick, handleAddClick }: TableActionButtonsProps) {
  const { t } = useTranslation()

  return (
    <SectionVisibilityDetector className='flex space-x-2 whitespace-nowrap'>
      {handleAddClick && (
        <SectionVisibilityDetector>
          <button
            type='button'
            disabled={disabled}
            id='addItemButton'
            onClick={handleAddClick}
            data-drawer-placement='right'
            aria-controls='drawer-add-item-default'
            data-drawer-show='drawer-add-item-default'
            data-drawer-target='drawer-add-irem-derault'
            className=' capitalize inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 outline-none focus:ring-green-300 dark:focus:ring-green-900 disabled:opacity-75 disabled:hover:bg-green-700 disabled:focus:bg-green-700'>
            <Icon width={16} icon='streamline:cloud-add' className='sm:mr-1 text-white dark:text-white' />
            <span className='hidden sm:block scale-0 sm:scale-100'>{t('addAlert.addItem')}</span>
          </button>
        </SectionVisibilityDetector>
      )}

      {handleUpdateClick && (
        <SectionVisibilityDetector>
          <button
            type='button'
            disabled={disabled}
            id='updateItemButton'
            onClick={handleUpdateClick}
            data-drawer-placement='right'
            aria-controls='drawer-update-item-default'
            data-drawer-show='drawer-update-item-default'
            data-drawer-target='drawer-update-item-default'
            className='inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white rounded-lg bg-[var(--visualColorMain)] hover:bg-[var(--visualColorSecond)] focus:ring-4 outline-none focus:ring-[var(--visualColorFourth)] dark:bg-[var(--visualColorMain)] dark:hover:bg-[var(--visualColorSecond)] dark:focus:ring-[var(--visualColorSecond)] disabled:opacity-75 disabled:hover:bg-[var(--visualColorMain)] disabled:focus:bg-[var(--visualColorMain)]'>
            <Icon width={16} icon='lucide:edit' className='sm:mr-1 text-white dark:text-white' />
            <span className='hidden sm:block scale-0 sm:scale-100'>{t('global.update')}</span>
          </button>
        </SectionVisibilityDetector>
      )}

      {handleDeleteClick && (
        <SectionVisibilityDetector>
          <button
            type='button'
            disabled={disabled}
            id='deleteItemButton'
            onClick={handleDeleteClick}
            data-drawer-placement='right'
            aria-controls='drawer-delete-item-default'
            data-drawer-show='drawer-delete-item-default'
            data-drawer-target='drawer-delete-item-default'
            className='inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 outline-none focus:ring-red-300 dark:focus:ring-red-900 disabled:opacity-75 disabled:hover:bg-red-700 disabled:focus:bg-red-700'>
            <Icon width={16} icon='ic:baseline-delete' className='sm:mr-1 text-white dark:text-white' />
            <span className='hidden sm:block scale-0 sm:scale-100'>{t('deleteAlert.deleteItem')}</span>
          </button>
        </SectionVisibilityDetector>
      )}
    </SectionVisibilityDetector>
  )
}