import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function ActionsInAddItem({ url, btnTitle, isBottom }: { url: string; btnTitle?: string; isBottom: boolean }) {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const params: URLSearchParams = new URLSearchParams(window?.location?.search)

	return isBottom ? (
		<div className='w-full mt-7 mb-8'>
			<p className='block mb-6 text-lg text-center font-medium text-gray-900 dark:text-white'>{t('global.action')}</p>
			<div className='flex items-center justify-between flex-wrap sm:flex-nowrap gap-6'>
				<button
					type='submit'
					className='h-max text-white w-full justify-center bg-[var(--visualColorMain)] hover:bg-[var(--visualColorSecond)] focus:ring-4 focus:outline-none focus:ring-[var(--visualColorFourth)] font-medium rounded-lg px-5 py-3.5 text-center text-sm dark:bg-[var(--visualColorMain)] dark:hover:bg-[var(--visualColorSecond)] dark:focus:ring-[var(--visualColorSecond)]'>
					{btnTitle || t('global.save')}
				</button>
				<button
					type='button'
					onClick={() => (Boolean(params?.get('add_window')) ? window?.close() : navigate(url))}
					data-drawer-dismiss='drawer-create-product-default'
					aria-controls='drawer-create-product-default'
					className='h-max inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[var(--visualColorFourth)] rounded-lg border border-gray-200 font-medium px-5 py-3.5 text-sm hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
					<svg aria-hidden='true' className='w-5 h-5 -ml-1 sm:mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
					</svg>
					{t('global.cancel')}
				</button>
			</div>
		</div>
	) : (
		<div className='col-span-full base:col-span-1 mt-16 base:mt-0 mb-8'>
			<p className='block mb-4 text-lg text-center font-medium text-gray-900 dark:text-white'>{t('global.action')}</p>
			<div className='flex items-center justify-between flex-wrap gap-6'>
				<button
					type='submit'
					className='h-max text-white w-full justify-center bg-[var(--visualColorMain)] hover:bg-[var(--visualColorSecond)] focus:ring-4 focus:outline-none focus:ring-[var(--visualColorFourth)] font-medium rounded-lg px-4 py-2.5 text-center text-sm dark:bg-[var(--visualColorMain)] dark:hover:bg-[var(--visualColorSecond)] dark:focus:ring-[var(--visualColorSecond)]'>
					{btnTitle || t('global.save')}
				</button>
				<button
					type='button'
					onClick={() => (Boolean(params?.get('add_window')) ? window?.close() : navigate(url))}
					data-drawer-dismiss='drawer-create-brand-default'
					aria-controls='drawer-create-brand-default'
					className='h-max inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[var(--visualColorFourth)] rounded-lg border border-gray-200 font-medium px-4 py-2.5 text-sm hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
					<svg aria-hidden='true' className='w-5 h-5 -ml-1 sm:mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
					</svg>
					{t('global.cancel')}
				</button>
			</div>
		</div>
	)
}