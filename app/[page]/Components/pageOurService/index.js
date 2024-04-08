'use client'

import ObserverService from '@/utils/observer'
import { OBSERVER_KEY, TYPE_SCROLL_PAGE } from '@/config/app'
import { useCallback, useState, useEffect, useRef } from 'react'
import { images, videos } from '@/config/images'
import SlideVideo from './Components/SlideVideo'
import Frame from './Components/Frame'
import VideoBanner from '@/components/VideoBanner'
const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const PageOurService = ({
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickPageHome = () => {}
}) => {
  const refContent = useRef(TYPE_SCROLL_PAGE.toBottom)
  const isScrollContent = useRef(false)

  const [hoverGameArt, setHoverGameArt] = useState(false)
  const [hoverCharacter, setHoverCharacter] = useState(false)
  const [hoverBranding, setHoverBranding] = useState(false)
  const [loadedBanner2, setLoadedBanner2] = useState(false)
  const [isScrollBottomMax, setIsScrollBottomMax] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      const documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      if (scrollPosition + viewportHeight >= documentHeight) {
        console.log('Bottom of the page reached!')
        setIsScrollBottomMax(true)
      } else {
        setIsScrollBottomMax(false)
      }
    }

    ObserverService.on(OBSERVER_KEY.loadVideoBanner2, () =>
      setLoadedBanner2(true)
    )

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadVideoBanner2)
    }
  }, [])

  const callBackLoaded = useCallback(() => {
    ObserverService.emit(OBSERVER_KEY.loadVideoBanner2)
  }, [])

  return (
    <>
      <div className="relative w-full h-screen   ">
        <div className="w-full h-full relative overflow-hidden">
          <VideoBanner
            url={videos.bannerOurService}
            poster={images.home.banner2Preload}
            callBackLoaded={callBackLoaded}
          />

          <SlideVideo
            hoverGameArt={hoverGameArt}
            setHoverGameArt={setHoverGameArt}
            hoverCharacter={hoverCharacter}
            setHoverCharacter={setHoverCharacter}
            hoverBranding={hoverBranding}
            setHoverBranding={setHoverBranding}
            keySVG="transparent"
            isLoaded={loadedBanner2}
          />
          <Frame
            clickContactAs={clickContactAs}
            clickProfile={clickProfile}
            clickAboutUs={clickAboutUs}
            clickPageHome={clickPageHome}
          >
            <SlideVideo
              hoverGameArt={hoverGameArt}
              setHoverGameArt={setHoverGameArt}
              hoverCharacter={hoverCharacter}
              setHoverCharacter={setHoverCharacter}
              hoverBranding={hoverBranding}
              setHoverBranding={setHoverBranding}
              noShowElement
            />
          </Frame>
        </div>
      </div>
    </>
  )
}
export default PageOurService
