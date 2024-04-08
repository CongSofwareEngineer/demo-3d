import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { TYPE_SCROLL_PAGE } from '@/config/app'
import { images, videos } from '@/config/images'
import React, { useEffect, useRef, useState } from 'react'
import Content from './Component/Content'
import { ContainerBanner } from './styled'
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import useScrollPage from '@/hooks/useScrollPage'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickPageHome = () => {}

}) => {
  const [isViewportContent, setIsViewportContent] = useState(false)
  const [isFirstLoadPage, setIsFirstLoadPage] = useState(true)

  const { ref: refContent, inView: inViewContent } = useInView({ threshold: 0.15 })
  const { ref: refBanner, inView: inViewBanner } = useInView({ threshold: 0.2 })

  useEffect(() => {
    setIsFirstLoadPage(false)
  }, [])

  useEffect(() => {
    const dataContent = document.getElementsByClassName('container-content-base')[0]
    if (dataContent) {
      if (inViewContent) {
        setIsViewportContent(true)
      } else {
        setIsViewportContent(false)
      }
    }
  }, [inViewContent])

  useEffect(() => {
    const dataContent = document.getElementsByClassName('container-banner-base')[0]
    if (dataContent) {
      if (inViewBanner) {
        dataContent.classList.add('in-viewport-content')
      } else {
        dataContent.classList.remove('in-viewport-content')
      }
    }
  }, [inViewBanner])

  const callBackScrollToTop = () => {

  }
  const callbackScrollToBottom = () => {
  }

  useScrollPage({ callbackScrollToBottom, callBackScrollToTop })

  return (

    <div className='w-full overflow-hidden '>

      <ContainerBanner >
        <div className="text-medium w-full h-full relative overflow-x-hidden ">
          <VideoBanner videoRef={refBanner} className={`${!isFirstLoadPage && 'container-banner-base'}`} poster={images.home.profilePreload} url={videos.bannerProfile} />
          <BgFrameBanner />
          <FrameBtn
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickAboutUs={clickAboutUs}
            clickPageHome={clickPageHome}
          />
        </div>
      </ContainerBanner >
      <Content
        isViewportContent={isViewportContent}
        refContent={refContent}
      />
    </div>

  )
}

export default PageProfile
