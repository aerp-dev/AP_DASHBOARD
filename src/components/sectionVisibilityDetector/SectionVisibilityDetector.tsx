import { Suspense, useEffect, useRef, useState } from 'react'
import { twMerge } from 'utils'
import { Loader } from '..'

const SectionVisibilityDetector: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry?.isIntersecting) {
            setIsVisible(true)
            observer?.unobserve(sectionRef?.current!)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer?.observe(sectionRef.current!)

    return () => {
      observer?.disconnect()
    }
  }, [])

  return (
    <div ref={sectionRef} className={twMerge(className, 'will-change-auto')}>
      <Suspense fallback={<Loader small />}>{isVisible && children}</Suspense>
    </div>
  )
}

export default SectionVisibilityDetector