import { useLayoutEffect, useState } from 'react'

const useSizeScreen = () => {
  const [sizeScreen, setSizeScreen] = useState({
    width: 21,
    height: 99,
    ratioBeautiful: false
  })

  useLayoutEffect(() => {
    const changeSizeScreen = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      const ratio = viewportWidth / viewportHeight
      const ratioBeautiful = 21 / 9
      if (ratio > ratioBeautiful) {
        setSizeScreen({
          width: viewportWidth,
          height: viewportHeight,
          ratioBeautiful: false
        })
      } else {
        setSizeScreen({
          width: viewportWidth,
          height: viewportHeight,
          ratioBeautiful: true
        })
      }
    }

    window.addEventListener('resize', () => {
      changeSizeScreen()
    })

    changeSizeScreen()
    return () => window.removeEventListener('resize', () => {})
  }, [])

  return sizeScreen
}

export default useSizeScreen
