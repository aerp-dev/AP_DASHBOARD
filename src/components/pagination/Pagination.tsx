import { useCallback, useMemo } from 'react'

// Hooks
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

// Helpers
import { historyParamsSet } from 'helpers'
import { initialPagination } from 'pages/adminRoles/constants'

// Components
import { Button } from 'components'

// Types
import { IPagination } from 'types'
interface IPaginationParams {
  isChecked?: boolean
  getAllData: Function
  pagination: IPagination
}

export default function Pagination({ isChecked = false, pagination, getAllData }: IPaginationParams): React.JSX.Element {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { page, limit, total, totalPages } = pagination || initialPagination

  const startItem = useMemo(() => (page - 1) * limit + 1, [page, limit])
  const endItem = useMemo(() => Math?.min(startItem + limit - 1, total), [startItem, limit, total])

  const handlePageChange = useCallback(
    (newPage: number) => {
      historyParamsSet('page', String(newPage))
      getAllData(dispatch)
    },
    [dispatch, getAllData],
  )

  const handlePrev = useCallback(() => {
    if (!isChecked && page > 1) handlePageChange(page - 1)
  }, [isChecked, page, handlePageChange])

  const handleNext = useCallback(() => {
    if (!isChecked && page < totalPages) handlePageChange(page + 1)
  }, [isChecked, page, totalPages, handlePageChange])

  return (
    <div className='sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center mb-4 sm:mb-0'>
        <div className='flex sm:hidden'>
          <button
            disabled={isChecked || page === 1}
            onClick={handlePrev}
            className='inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:text-gray-900 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 outline-none dark:hover:text-white disabled:hover:bg-[#0000] disabled:hover:text-gray-500 disabled:focus:text-gray-500 disabled:dark:hover:bg-[#0000] disabled:dark:hover:text-gray-500 disabled:opacity-75 disabled:cursor-default'>
            <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd'></path>
            </svg>
          </button>

          <button
            disabled={isChecked || page === totalPages}
            onClick={handleNext}
            className='inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:text-gray-900 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 outline-none dark:hover:text-white disabled:hover:bg-[#0000] disabled:hover:text-gray-500 disabled:focus:text-gray-500 disabled:dark:hover:bg-[#0000] disabled:dark:hover:text-gray-500 disabled:opacity-75 disabled:cursor-default'>
            <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path>
            </svg>
          </button>
        </div>

        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
          {t('pagination.showing')}{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {startItem || 0}-{endItem || 0}
          </span>{' '}
          {t('pagination.of')} <span className='font-semibold text-gray-900 dark:text-white'>{total || 0}</span>
        </span>
      </div>

      <div className='hidden sm:flex items-center space-x-3'>
        <Button title={t('pagination.prev')} disabled={isChecked || page === 1} onClick={handlePrev} className='inline-flex items-center justify-center flex-1 px-3 py-2 disabled:opacity-75'>
          <svg className='w-5 h-5 mr-1 -ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd'></path>
          </svg>
          {t('pagination.prev')}
        </Button>

        <Button title={t('pagination.next')} disabled={isChecked || page === totalPages} onClick={handleNext} className='inline-flex items-center justify-center flex-1 px-3 py-2 disabled:opacity-75'>
          {t('pagination.next')}
          <svg className='w-5 h-5 ml-1 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}