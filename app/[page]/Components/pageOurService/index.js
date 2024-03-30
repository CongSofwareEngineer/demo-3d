'use client';

import ObserverService from '@/utils/observer';
import { OBSERVER_KEY } from '@/config/app';
import { useCallback, useState, useEffect } from 'react';
import { images, videos } from '@/config/images';
import SlideVideo from './Components/SlideVideo';
import Frame from './Components/Frame';
import VideoBanner from '@/components/VideoBanner';
import MyImage from '@/components/MyImage';
import bgContentBannerHome from '@/public/assets/images/Home/bgContentBannerHome.png'
import SelectSort from './Components/SelectSort';

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const PageOurService = ({
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  const [hoverGameArt, setHoverGameArt] = useState(false);
  const [hoverCharacter, setHoverCharacter] = useState(false);
  const [hoverBranding, setHoverBranding] = useState(false);
  const [loadedBanner2, setLoadedBanner2] = useState(false);
  const [hoverItem, setHoverItem] = useState(-1)
  const [isScrollBottomMax, setIsScrollBottomMax] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      const documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition + viewportHeight >= documentHeight) {
        // User has reached the bottom of the page
        console.log('Bottom of the page reached!');
        setIsScrollBottomMax(true)
      } else {
        setIsScrollBottomMax(false)
      }
    };

    ObserverService.on(OBSERVER_KEY.loadVideoBanner2, () =>
      setLoadedBanner2(true)
    )

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadVideoBanner2);
    };
  }, []);

  const callBackLoaded = useCallback(() => {
    ObserverService.emit(OBSERVER_KEY.loadVideoBanner2);
  }, []);

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
        <div className='w-full flex flex-col relative justify-center items-center '>
          <MyImage
            url={bgContentBannerHome}
            width='100%'
            height='auto'
          />
          <div className='absolute-center w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
            <div className='mt-[10%] flex-1' />
            <div className='w-full flex-1 grid grid-cols-3 gap-5'>
              {
              // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                arr.map((e, index) => {
                  return (
                    <div
                      style={{
                        boxShadow: hoverItem === index ? 'red 0px 5px 15px' : 'none'
                      // mask: index > 5 ? 'linear-gradient(0deg, transparent, white 40%, white 80%, white 80%)' : 'none'
                      }}
                      key={index}
                      className={`cursor-pointer ${hoverItem === index && 'scale-[1.01] '}  relative w-full flex pb-[100%] bg-blue-400 rounded-2xl`}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className='absolute-center z-20 w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
            <div className='mt-[10%] flex-1'>
              <SelectSort />
            </div>
            <div className='w-full flex-1 grid grid-cols-3 gap-5'>
              {
                arr.map((e, index) => {
                  return (
                    <div
                      onMouseOver={() => setHoverItem(index)}
                      onMouseLeave={() => setHoverItem(-1)}
                      key={index}
                      className=' cursor-pointer    relative w-full flex pb-[100%]   rounded-2xl'
                    />
                  )
                })
              }
            </div>
          </div>
          {
            !isScrollBottomMax && (
              <MyImage
                url={images.home.bgMaskContentBannerHome}
                width='100%'
                height='auto'
                position='absolute'
                className='z-10'
              />
            )
          }

        </div>
      </div>
    </>
  );
};
export default PageOurService;
