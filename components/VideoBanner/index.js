import React, { useEffect, useState } from 'react'
import styles from './videoBanner.module.scss'
import useSizeScreen from '@/hooks/useSizeScreen'
import { useQueryClient } from '@tanstack/react-query'
import { QUEY_KEY } from '@/config/app'

const VideoBanner = ({
  url,
  poster,
  callBack = () => {},
  videoRef = React.createRef(null),
  callBackLoaded = () => {},
  className = '',
  typeCache = '',
  ...props
}) => {
  const { ratioBeautiful } = useSizeScreen()
  const query = useQueryClient()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', (event) => {
        callBack()
      })
    }
  }, [])

  const getUrlPoster = () => {
    try {
      const dataCache = query.getQueryData(QUEY_KEY.dataPosterBanner)
      if (dataCache[typeCache]) {
        return dataCache[typeCache]
      }
      return poster
    } catch (error) {
      return poster
    }
  }

  return (
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
      poster={getUrlPoster()}
      onLoadedData={(e) => {
        callBackLoaded()
        // setLoadingVideo(true)
      }}
      className={`${className} ${styles.videoBannerBase} ${!ratioBeautiful && styles.isScale} `}
      {...props}
    >
      <source src={url} />
    </video>
  )
}

export default VideoBanner
