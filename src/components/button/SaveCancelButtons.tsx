// Components
import { Button } from 'components'
import { useTranslation } from 'react-i18next'

// Utils
import { twMerge } from 'utils'

// Types
import { voidFunction } from 'types'
interface SaveCancelButtonsProps {
  saveBtnTitle?: string
  closeBtnTitle?: string

  saveBtnType?: 'button' | 'submit'
  closeBtnType?: 'button' | 'submit'

  close: voidFunction

  cancelBtnLoading?: boolean
  cancelBtnDisabled?: boolean

  saveBtnLoading?: boolean
  saveBtnDisabled?: boolean

  mainClassName?: string
  saveBtnClassName?: string
  closeBtnClassName?: string
}

export default function SaveCancelButtons({
  saveBtnTitle = '',
  closeBtnTitle = '',

  close,

  mainClassName = '',
  saveBtnClassName = '',
  closeBtnClassName = '',

  saveBtnLoading = false,
  cancelBtnLoading = false,

  saveBtnDisabled = false,
  cancelBtnDisabled = false,

  saveBtnType = 'submit',
  closeBtnType = 'button',
}: SaveCancelButtonsProps): React.JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={twMerge('flex items-center justify-end gap-2', mainClassName)}>
      <Button
        onClick={close}
        type={closeBtnType}
        title={closeBtnTitle || t('global.cancel')}
        loading={cancelBtnLoading}
        disabled={cancelBtnDisabled || cancelBtnLoading}
        className={[
          'text-gray-500 bg-transparent hover:bg-gray-100 border border-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600',
          closeBtnClassName,
        ]}
      />
      <Button type={saveBtnType} title={saveBtnTitle || t('global.submit')} disabled={saveBtnDisabled || saveBtnLoading} loading={saveBtnLoading} className={saveBtnClassName} />
    </div>
  )
}