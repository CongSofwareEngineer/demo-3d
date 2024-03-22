'use client';
import { images, videos } from '@/config/images';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
// import SvgOurService from './svgOurService';
import dynamic from 'next/dynamic';
import FrameBanner from '@/components/FrameBanner';
import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import Frame from './Components/Frame';
import SlideVideo from './Components/SlideVideo';
import ObserverService from '@/utils/observer';
import { OBSERVER_KEY } from '@/config/app';
const VideoBanner = dynamic(() => import('@/components/VideoBanner'), { ssr: false })

const Page2 = () => {
  const { openModal } = useModal();
  const { ratioBeautiful } = useSizeScreen()

  const [hoverGameArt, setHoverGameArt] = useState(false)
  const [hoverCharacter, setHoverCharacter] = useState(false)
  const [hoverBranding, setHoverBranding] = useState(false)
  const [loadedBanner2, setLoadedBanner2] = useState(false)

  useLayoutEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadVideoBanner2, () => setLoadedBanner2(true))

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadVideoBanner2)
    }
  }, [])

  const callBackLoaded = useCallback(() => {
    ObserverService.emit(OBSERVER_KEY.loadVideoBanner2)
  }, [])

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden  ">
        <div className="w-full h-full relative overflow-hidden">
          <VideoBanner
            url={videos.banner2}
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
            keySVG='transparent'
            isLoaded={loadedBanner2}
          />
          <Frame>
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
  );
};

export default Page2;
