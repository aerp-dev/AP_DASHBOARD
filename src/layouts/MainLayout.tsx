import { Suspense, useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

// Redux store
import { useDispatch } from 'react-redux'
import { changeFullHeight } from 'store/store'

// Hooks
import { useTypedSelector } from 'hooks'

// Utils
import { twMerge } from 'utils'

// Helpers
import { isMobileDeviceScreen } from 'helpers'

// Components
import { Loading } from 'components'

export default function MainLayout(): React.JSX.Element {
  const dispatch = useDispatch()

  const { isFullHeight } = useTypedSelector((s) => s.store)

  // States for opening/closing the sidebar (mobile and desktop)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDesktopOpen, setIsDesktopOpen] = useState<boolean>(false)

  // States and handling of swipes to open/close the sidebar
  const [startX, setStartX] = useState<number>(0)
  const [currentX, setCurrentX] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const swipeThreshold: number = window.innerWidth * 0.4

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (isOpen) return

    setStartX(e.touches[0]?.clientX || 0)
    setIsDragging(true)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isOpen && isDragging) setCurrentX(e.touches[0]?.clientX || 0)
    },
    [isDragging],
  )

  const handleTouchEnd = useCallback(() => {
    if (!isOpen && isDragging) {
      if (currentX - startX > swipeThreshold) {
        setIsOpen(true)
      } else if (startX - currentX > swipeThreshold) {
        setIsOpen(false)
      }

      setIsDragging(false)
      setStartX(0)
      setCurrentX(0)
    }
  }, [isDragging, currentX, startX, swipeThreshold])

  // Passing the Sidebar State to the Redux Store
  useEffect(() => {
    dispatch(changeFullHeight(isOpen))
  }, [isOpen, dispatch])

  // const memoizedSidebar = useMemo(
  //   () => <Sidebar isSidebarOpen={isOpen} toggleModal={setIsOpen} isDesktopSidebarOpen={isDesktopOpen} toggleModalDesktop={setIsDesktopOpen} />,
  //   [isOpen, isDesktopOpen, setIsOpen, setIsDesktopOpen],
  // )

  return (
    <div
      className={twMerge(isFullHeight ? 'h-[100vh] max-h-[100dvh]' : 'h-full transform-all animate-ease')}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      translate='no'>
      {/* {!isMobileDeviceScreen() && <Navbar isSidebarOpen={isOpen} toggleModal={setIsOpen} />} */}

      <div className={twMerge('flex', isMobileDeviceScreen() ? '' : 'pt-[48px]', 'h-full overflow-hidden bg-gray-50 dark:bg-gray-800 min-h-[100dvh] transform-all animate-ease')}>
        {/* {memoizedSidebar} */}

        <div
          id='main-content'
          className={twMerge(
            'pb-14 relative w-full',
            isFullHeight ? 'overflow-y-hidden' : '',
            'bg-gray-50',
            isDesktopOpen ? 'lg:w-sideClose' : 'lg:w-side',
            'lg:my-0 lg:ml-auto lg:mr-0 dark:bg-gray-800 transform-all animate-ease',
          )}
          translate='no'>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}