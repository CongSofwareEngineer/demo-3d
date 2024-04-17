import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import transitionOurServiceStart from '@/public/assets/json/transitionOurServiceStart.json'
import transitionOurServiceEnd from '@/public/assets/json/transitionOurServiceEnd.json'
import LoadingRoutePage from '..'
const MotionOurService = ({ callBackSuccess = () => {} }) => {
  const patchName = usePathname()
  const isChangePage = useRef(false)

  const [isStart, setIsStart] = useState(true)

  useEffect(() => {
    isChangePage.current = true
  }, [patchName])

  const handleChange = () => {
    const interval = setInterval(() => {
      if (isChangePage.current) {
        setIsStart(false)
        clearInterval(interval)
      }
    }, 100)
  }

  return (
    isStart
      ? (
        <LoadingRoutePage
          isLoop={false}
          src={transitionOurServiceStart}
          callbackComplete={handleChange}
        />
      )
      : (
        <LoadingRoutePage
          isLoop={false}
          src={transitionOurServiceEnd}
          callbackComplete={callBackSuccess}
        />

      )
  )
}

export default MotionOurService
