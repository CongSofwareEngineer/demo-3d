'use client';

import ObserverService from '@/utils/observer';
import { OBSERVER_KEY } from '@/config/app';
import dynamic from 'next/dynamic';
import { useCallback, useLayoutEffect, useState, useEffect } from 'react';
import { images, videos } from '@/config/images';
import SlideVideo from './Components/SlideVideo';
import Frame from './Components/Frame';
import VideoBanner from '@/components/VideoBanner';

const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  const [hoverGameArt, setHoverGameArt] = useState(false);
  const [hoverCharacter, setHoverCharacter] = useState(false);
  const [hoverBranding, setHoverBranding] = useState(false);
  const [loadedBanner2, setLoadedBanner2] = useState(false);

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadVideoBanner2, () =>
      setLoadedBanner2(true)
    );

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadVideoBanner2);
    };
  }, []);

  const callBackLoaded = useCallback(() => {
    ObserverService.emit(OBSERVER_KEY.loadVideoBanner2);
  }, []);

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
            keySVG="transparent"
            isLoaded={loadedBanner2}
          />
          <Frame
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickAboutUs={clickAboutUs}
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
  );
};
export default PageProfile;
