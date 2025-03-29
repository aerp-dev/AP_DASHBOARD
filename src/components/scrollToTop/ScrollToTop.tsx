import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { Button } from 'components'

export default function ScrollToTop(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const throttlingRef = useRef<boolean>(false)

  const toggleVisibility = useCallback((): void => {
    if (throttlingRef?.current) return
    throttlingRef.current = true

    requestAnimationFrame(() => {
      setIsVisible(window?.scrollY > 300)
      throttlingRef.current = false
    })
  }, [])

  const handleScrollToTop = useCallback((): void => window?.scrollTo({ top: 0, behavior: 'smooth' }), [])

  useEffect(() => {
    window?.addEventListener('scroll', toggleVisibility)
    return () => window?.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  return isVisible ? (
    <Suspense>
      <Button
        title='↑'
        onClick={handleScrollToTop}
        className='cursor-pointer py-2 px-4 fixed bottom-[90px] right-[25px] text-lg text-white bg-[#517bb1] rounded-[5px] opacity-60 hover:opacity-100 animate-ease-fast z-20'
      />
    </Suspense>
  ) : null
}