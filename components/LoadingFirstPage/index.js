'use client'
import { videos } from '@/config/images'
import { useEffect, useLayoutEffect, useState } from 'react'
import preloadContactAt from '@/public/assets/images/ContactAt/bannerContactAt.webp'
import preloadOurService from '@/public/assets/images/Home/banner2Preload.png'
import preloadPortfolio from '@/public/assets/images/Home/profilePreload.png'
import preloadHome from '@/public/assets/images/Home/bannerPreload.png'
import preloadAboutUs from '@/public/assets/images/Home/aboutUsPreload.png'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { QUEY_KEY } from '@/config/app'

const LoadingFirst = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const query = useQueryClient()

  useEffect(() => {
    const data = {
      [QUEY_KEY.preLoadAboutAt]: preloadAboutUs.src,
      [QUEY_KEY.preLoadContactUs]: preloadContactAt.src,
      [QUEY_KEY.preLoadOurService]: preloadOurService.src,
      [QUEY_KEY.preLoadPortfolio]: preloadPortfolio.src,
      [QUEY_KEY.preLoadHome]: preloadHome.src
    }
    query.setQueryData(QUEY_KEY.dataPosterBanner, data)
  }, [])

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])

  return (
    !isLoaded
      ? (
        <div className='fixed bg-white z-[13] w-screen h-screen flex justify-center items-center' >
          <video
            className='w-[100px] h-[100px] object-cover'
            muted
            autoPlay
            playsInline
            loop
            controls={false}
            preload="none"
          >
            <source src={videos.loadingFirstPage} />
          </video>
        </div>
      )
      : <></>

  )
}

export default LoadingFirst
