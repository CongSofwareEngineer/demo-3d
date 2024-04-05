import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { TYPE_SCROLL_PAGE } from '@/config/app'
import { images, videos } from '@/config/images'
import React, { useEffect, useRef, useState } from 'react'
import Content from './Component/Content'
import { ContainerBanner } from './styled'
const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  const refContent = useRef(null)
  const scrollDirection = useRef(null)
  const deboneRef = useRef(false)

  const [animationBottom, setAnimationBottom] = useState(false)
  const [animationTop, setAnimationTop] = useState(false)
  console.log({ animationBottom, animationTop })

  useEffect(() => {
    const scrollToTop = () => {
      setAnimationTop(true)
      setAnimationBottom(false)

      window.scrollTo({ top: 0, behavior: 'instant' })
      setTimeout(() => {
        scrollDirection.current = TYPE_SCROLL_PAGE.toTop
      }, 100)
      setTimeout(() => {
        setAnimationTop(false)
      }, 500)
    }

    const scrollToBottom = (viewportHeight) => {
      setAnimationTop(false)
      window.scrollTo({ top: viewportHeight + 100, behavior: 'instant' })
      window.scrollTo({ top: viewportHeight, behavior: 'smooth' })
      // refContent.current.scrollIntoView({
      //   behavior: 'instant',
      //   block: 'start'
      // })
      setTimeout(() => {
        scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
      }, 100)
    }
    window.addEventListener('scroll', (e) => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      console.log({ scrollDirection: scrollDirection.current })
      if (!scrollDirection.current) {
        if (scrollPosition >= viewportHeight) {
          scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
        } else {
          scrollDirection.current = TYPE_SCROLL_PAGE.toTop
        }
      } else {
        if (scrollDirection.current === TYPE_SCROLL_PAGE.toTop) {
          if (scrollPosition > 0 && scrollPosition < viewportHeight) {
            scrollToBottom(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
          }
        }

        if (scrollDirection.current === TYPE_SCROLL_PAGE.toBottom) {
          if (scrollPosition < viewportHeight) {
            scrollToTop()
          }
        }
      }
      // if (scrollDirection.current === TYPE_SCROLL_PAGE.toBottom) {
      //   if (scrollPosition > 0 && scrollPosition < viewportHeight) {
      //     if (typeof refContent.current?.scrollIntoView === 'function') {
      //       window.scrollTo({
      //         top: viewportHeight,
      //         behavior: 'instant'
      //       })
      //       // setTimeout(() => {
      //       //   window.scrollTo({
      //       //     top: viewportHeight,
      //       //     behavior: 'smooth'
      //       //   })
      //       // }, 100)
      //       // refContent.current.scrollIntoView({
      //       //   behavior: 'instant',
      //       //   block: 'start'
      //       // })
      //       scrollDirection.current = TYPE_SCROLL_PAGE.toTop
      //     }
      //   }
      // } else {
      //   if (scrollPosition > 0 && scrollPosition < viewportHeight) {
      //     if (window) {
      //       // window.scrollTo({ top: 0, behavior: 'instant' })
      //       // setTimeout(() => {
      //       //   window.scrollTo({ top: 0, behavior: 'smooth' })
      //       // }, 100)
      //       scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
      //     }
      //   }
      // }
    })
  }, [])

  return (
    <div className='w-full overflow-x-hidden'>
      <ContainerBanner $animation={animationTop} >
        <div className="text-medium w-full h-full relative overflow-hidden ">
          <VideoBanner poster={images.home.profilePreload} url={videos.bannerProfile} />
          <BgFrameBanner />
          <FrameBtn
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickAboutUs={clickAboutUs}
          />
        </div>
      </ContainerBanner>
      <Content enableAnimation={animationBottom} refContent={refContent} />
    </div>

  )
}

export default PageProfile
