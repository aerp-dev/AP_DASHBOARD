import Loader from './Loader'
export default function Loading({ bg = false }: { bg?: boolean }): React.JSX.Element {
  return (
    <div className={`${bg ? 'bg-gray-300' : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80'} fixed inset-0 z-[999] grid place-items-center`}>
      <Loader />
    </div>
  )
}