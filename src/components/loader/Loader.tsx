import { memo } from 'react'
import { twMerge } from 'utils'

const Loader = memo(function Loader({ className, small = false }: { className?: string; small?: boolean }): React.JSX.Element {
  return (
    <div className='loader_wrapper'>
      <div className={twMerge('loader w-[70px] h-[70px] border-[6px] border-solid rounded-[50%] border-[#f3f3f3] border-t-[var(--visualColorMain,#555)]', small ? ' small' : '', className)}></div>
    </div>
  )
})

export default Loader