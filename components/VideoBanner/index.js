import React, { useEffect, useRef, useState } from 'react'
import styles from './videoBanner.module.scss'
import useSizeScreen from '@/hooks/useSizeScreen'
import { useQueryClient } from '@tanstack/react-query'
import { QUEY_KEY } from '@/config/app'
import Image from 'next/image'

const VideoBanner = ({
  url,
  poster,
  callBack = () => {},
  callBackLoaded = () => {},
  className = '',
  typeCache = '',
  ...props
}) => {
  const videoRef = useRef(null)

  const { ratioBeautiful } = useSizeScreen()
  const query = useQueryClient()

  const [isLoadedVideo, setIsLoadedVideo] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', (event) => {
        callBack()
        setIsLoadedVideo(true)
        // setTimeout(() => {
        //   if (typeof videoRef.current.play === 'function') {
        //     try {
        //       videoRef.current.play()
        //     } catch (error) {

        //     }
        //   }
        // }, 500)
      })
    }
    setTimeout(() => {
      setIsLoadedVideo(true)
    }, 200)
  }, [])

  const getUrlPoster = () => {
    try {
      const dataCache = query.getQueryData(QUEY_KEY.dataPosterBanner)
      if (dataCache[typeCache]) {
        return dataCache[typeCache]
      }
      return {
        src: poster,
        blurDataURL: poster
      }
    } catch (error) {
      return {
        src: poster,
        blurDataURL: poster
      }
    }
  }

  return (
    <>
      <video
        key={url}
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload="none"
        isScaleWidth={!ratioBeautiful}
        poster={getUrlPoster()?.src}
        onLoadedData={(e) => {
          callBackLoaded()
        }}
        className={`${className} ${styles.videoBannerBase} ${!ratioBeautiful && styles.isScale} `}
        {...props}
      >
        <source src={url} />
      </video>
      <Image
        blurDataURL={getUrlPoster()?.blurDataURL}
        fill
        src={getUrlPoster()?.src}
        className={`transform -translate-x-1/2 inset-0 min-w-full min-h-full max-w-none w-auto h-auto ml-[50%] ${styles['img-preload-poster']} ${isLoadedVideo ? 'opacity-0 z-[-9999] ' : ''}`}
        alt={'preload-banner'}
      />

    </>
  )
}

export default VideoBanner
